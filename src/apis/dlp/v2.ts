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

export namespace dlp_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Cloud Data Loss Prevention (DLP) API
   *
   * Provides methods for detection, risk analysis, and de-identification of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.
   *
   * @example
   * const {google} = require('googleapis');
   * const dlp = google.dlp('v2');
   *
   * @namespace dlp
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Dlp
   */
  export class Dlp {
    context: APIRequestContext;
    infoTypes: Resource$Infotypes;
    locations: Resource$Locations;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.infoTypes = new Resource$Infotypes(this.context);
      this.locations = new Resource$Locations(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2Action {
    /**
     * Enable email notification to project owners and editors on job&#39;s completion/failure.
     */
    jobNotificationEmails?: Schema$GooglePrivacyDlpV2JobNotificationEmails;
    /**
     * Publish findings to Cloud Datahub.
     */
    publishFindingsToCloudDataCatalog?: Schema$GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog;
    /**
     * Publish summary to Cloud Security Command Center (Alpha).
     */
    publishSummaryToCscc?: Schema$GooglePrivacyDlpV2PublishSummaryToCscc;
    /**
     * Publish a notification to a pubsub topic.
     */
    pubSub?: Schema$GooglePrivacyDlpV2PublishToPubSub;
    /**
     * Save resulting findings in a provided location.
     */
    saveFindings?: Schema$GooglePrivacyDlpV2SaveFindings;
  }
  /**
   * Request message for ActivateJobTrigger.
   */
  export interface Schema$GooglePrivacyDlpV2ActivateJobTriggerRequest {}
  /**
   * Result of a risk analysis operation request.
   */
  export interface Schema$GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails {
    categoricalStatsResult?: Schema$GooglePrivacyDlpV2CategoricalStatsResult;
    deltaPresenceEstimationResult?: Schema$GooglePrivacyDlpV2DeltaPresenceEstimationResult;
    kAnonymityResult?: Schema$GooglePrivacyDlpV2KAnonymityResult;
    kMapEstimationResult?: Schema$GooglePrivacyDlpV2KMapEstimationResult;
    lDiversityResult?: Schema$GooglePrivacyDlpV2LDiversityResult;
    numericalStatsResult?: Schema$GooglePrivacyDlpV2NumericalStatsResult;
    /**
     * Privacy metric to compute.
     */
    requestedPrivacyMetric?: Schema$GooglePrivacyDlpV2PrivacyMetric;
    /**
     * Input dataset to compute metrics over.
     */
    requestedSourceTable?: Schema$GooglePrivacyDlpV2BigQueryTable;
  }
  /**
   * An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
   */
  export interface Schema$GooglePrivacyDlpV2AuxiliaryTable {
    /**
     * Quasi-identifier columns. [required]
     */
    quasiIds?: Schema$GooglePrivacyDlpV2QuasiIdField[];
    /**
     * The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero. [required]
     */
    relativeFrequency?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * Auxiliary table location. [required]
     */
    table?: Schema$GooglePrivacyDlpV2BigQueryTable;
  }
  /**
   * Message defining a field of a BigQuery table.
   */
  export interface Schema$GooglePrivacyDlpV2BigQueryField {
    /**
     * Designated field in the BigQuery table.
     */
    field?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * Source table of the field.
     */
    table?: Schema$GooglePrivacyDlpV2BigQueryTable;
  }
  /**
   * Row key for identifying a record in BigQuery table.
   */
  export interface Schema$GooglePrivacyDlpV2BigQueryKey {
    /**
     * Absolute number of the row from the beginning of the table at the time of scanning.
     */
    rowNumber?: string | null;
    /**
     * Complete BigQuery table reference.
     */
    tableReference?: Schema$GooglePrivacyDlpV2BigQueryTable;
  }
  /**
   * Options defining BigQuery table and row identifiers.
   */
  export interface Schema$GooglePrivacyDlpV2BigQueryOptions {
    /**
     * References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings.
     */
    excludedFields?: Schema$GooglePrivacyDlpV2FieldId[];
    /**
     * References to fields uniquely identifying rows within the table. Nested fields in the format, like `person.birthdate.year`, are allowed.
     */
    identifyingFields?: Schema$GooglePrivacyDlpV2FieldId[];
    /**
     * Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
     */
    rowsLimit?: string | null;
    /**
     * Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
     */
    rowsLimitPercent?: number | null;
    sampleMethod?: string | null;
    /**
     * Complete BigQuery table reference.
     */
    tableReference?: Schema$GooglePrivacyDlpV2BigQueryTable;
  }
  /**
   * Message defining the location of a BigQuery table. A table is uniquely identified  by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `&lt;project_id&gt;:&lt;dataset_id&gt;.&lt;table_id&gt;` or `&lt;project_id&gt;.&lt;dataset_id&gt;.&lt;table_id&gt;`.
   */
  export interface Schema$GooglePrivacyDlpV2BigQueryTable {
    /**
     * Dataset ID of the table.
     */
    datasetId?: string | null;
    /**
     * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
     */
    projectId?: string | null;
    /**
     * Name of the table.
     */
    tableId?: string | null;
  }
  /**
   * Bounding box encompassing detected text within an image.
   */
  export interface Schema$GooglePrivacyDlpV2BoundingBox {
    /**
     * Height of the bounding box in pixels.
     */
    height?: number | null;
    /**
     * Left coordinate of the bounding box. (0,0) is upper left.
     */
    left?: number | null;
    /**
     * Top coordinate of the bounding box. (0,0) is upper left.
     */
    top?: number | null;
    /**
     * Width of the bounding box in pixels.
     */
    width?: number | null;
  }
  /**
   * Bucket is represented as a range, along with replacement values.
   */
  export interface Schema$GooglePrivacyDlpV2Bucket {
    /**
     * Upper bound of the range, exclusive; type must match min.
     */
    max?: Schema$GooglePrivacyDlpV2Value;
    /**
     * Lower bound of the range, inclusive. Type should be the same as max if used.
     */
    min?: Schema$GooglePrivacyDlpV2Value;
    /**
     * Replacement value for this bucket. If not provided the default behavior will be to hyphenate the min-max range.
     */
    replacementValue?: Schema$GooglePrivacyDlpV2Value;
  }
  /**
   * Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -&gt; LOW 31-65 -&gt; MEDIUM 66-100 -&gt; HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2BucketingConfig {
    /**
     * Set of buckets. Ranges must be non-overlapping.
     */
    buckets?: Schema$GooglePrivacyDlpV2Bucket[];
  }
  /**
   * Container for bytes to inspect or redact.
   */
  export interface Schema$GooglePrivacyDlpV2ByteContentItem {
    /**
     * Content data to inspect or redact.
     */
    data?: string | null;
    /**
     * The type of data stored in the bytes string. Default will be TEXT_UTF8.
     */
    type?: string | null;
  }
  /**
   * The request message for canceling a DLP job.
   */
  export interface Schema$GooglePrivacyDlpV2CancelDlpJobRequest {}
  /**
   * Compute numerical stats over an individual column, including number of distinct values and value count distribution.
   */
  export interface Schema$GooglePrivacyDlpV2CategoricalStatsConfig {
    /**
     * Field to compute categorical stats on. All column types are supported except for arrays and structs. However, it may be more informative to use NumericalStats when the field type is supported, depending on the data.
     */
    field?: Schema$GooglePrivacyDlpV2FieldId;
  }
  export interface Schema$GooglePrivacyDlpV2CategoricalStatsHistogramBucket {
    /**
     * Total number of values in this bucket.
     */
    bucketSize?: string | null;
    /**
     * Total number of distinct values in this bucket.
     */
    bucketValueCount?: string | null;
    /**
     * Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20.
     */
    bucketValues?: Schema$GooglePrivacyDlpV2ValueFrequency[];
    /**
     * Lower bound on the value frequency of the values in this bucket.
     */
    valueFrequencyLowerBound?: string | null;
    /**
     * Upper bound on the value frequency of the values in this bucket.
     */
    valueFrequencyUpperBound?: string | null;
  }
  /**
   * Result of the categorical stats computation.
   */
  export interface Schema$GooglePrivacyDlpV2CategoricalStatsResult {
    /**
     * Histogram of value frequencies in the column.
     */
    valueFrequencyHistogramBuckets?: Schema$GooglePrivacyDlpV2CategoricalStatsHistogramBucket[];
  }
  /**
   * Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we&#39;ll attempt to preserve the original data&#39;s type. (This allows you to take a long like 123 and modify it to a string like **3.
   */
  export interface Schema$GooglePrivacyDlpV2CharacterMaskConfig {
    /**
     * When masking a string, items in this list will be skipped when replacing. For example, if your string is 555-555-5555 and you ask us to skip `-` and mask 5 chars with * we would produce ***-*55-5555.
     */
    charactersToIgnore?: Schema$GooglePrivacyDlpV2CharsToIgnore[];
    /**
     * Character to mask the sensitive values&amp;mdash;for example, &quot;*&quot; for an alphabetic string such as name, or &quot;0&quot; for a numeric string such as ZIP code or credit card number. String must have length 1. If not supplied, we will default to &quot;*&quot; for strings, 0 for digits.
     */
    maskingCharacter?: string | null;
    /**
     * Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
     */
    numberToMask?: number | null;
    /**
     * Mask characters in reverse order. For example, if `masking_character` is &#39;0&#39;, number_to_mask is 14, and `reverse_order` is false, then 1234-5678-9012-3456 -&gt; 00000000000000-3456 If `masking_character` is &#39;*&#39;, `number_to_mask` is 3, and `reverse_order` is true, then 12345 -&gt; 12***
     */
    reverseOrder?: boolean | null;
  }
  /**
   * Characters to skip when doing deidentification of a value. These will be left alone and skipped.
   */
  export interface Schema$GooglePrivacyDlpV2CharsToIgnore {
    charactersToSkip?: string | null;
    commonCharactersToIgnore?: string | null;
  }
  /**
   * Message representing a set of files in Cloud Storage.
   */
  export interface Schema$GooglePrivacyDlpV2CloudStorageFileSet {
    /**
     * The url, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing wildcard in the path is allowed.
     */
    url?: string | null;
  }
  /**
   * Options defining a file or a set of files within a Google Cloud Storage bucket.
   */
  export interface Schema$GooglePrivacyDlpV2CloudStorageOptions {
    /**
     * Max number of bytes to scan from a file. If a scanned file&#39;s size is bigger than this value then the rest of the bytes are omitted. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
     */
    bytesLimitPerFile?: string | null;
    /**
     * Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
     */
    bytesLimitPerFilePercent?: number | null;
    /**
     * The set of one or more files to scan.
     */
    fileSet?: Schema$GooglePrivacyDlpV2FileSet;
    /**
     * Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0.
     */
    filesLimitPercent?: number | null;
    /**
     * List of file type groups to include in the scan. If empty, all files are scanned and available data format processors are applied. In addition, the binary content of the selected files is always scanned as well.
     */
    fileTypes?: string[] | null;
    sampleMethod?: string | null;
  }
  /**
   * Message representing a single file or path in Cloud Storage.
   */
  export interface Schema$GooglePrivacyDlpV2CloudStoragePath {
    /**
     * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
     */
    path?: string | null;
  }
  /**
   * Message representing a set of files in a Cloud Storage bucket. Regular expressions are used to allow fine-grained control over which files in the bucket to include.  Included files are those that match at least one item in `include_regex` and do not match any items in `exclude_regex`. Note that a file that matches items from both lists will _not_ be included. For a match to occur, the entire file path (i.e., everything in the url after the bucket name) must match the regular expression.  For example, given the input `{bucket_name: &quot;mybucket&quot;, include_regex: [&quot;directory1/.*&quot;], exclude_regex: [&quot;directory1/excluded.*&quot;]}`:  * `gs://mybucket/directory1/myfile` will be included * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches across `/`) * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the full path doesn&#39;t match any items in `include_regex`) * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path matches an item in `exclude_regex`)  If `include_regex` is left empty, it will match all files by default (this is equivalent to setting `include_regex: [&quot;.*&quot;]`).  Some other common use cases:  * `{bucket_name: &quot;mybucket&quot;, exclude_regex: [&quot;.*\.pdf&quot;]}` will include all files in `mybucket` except for .pdf files * `{bucket_name: &quot;mybucket&quot;, include_regex: [&quot;directory/[^/]+&quot;]}` will include all files directly under `gs://mybucket/directory/`, without matching across `/`
   */
  export interface Schema$GooglePrivacyDlpV2CloudStorageRegexFileSet {
    /**
     * The name of a Cloud Storage bucket. Required.
     */
    bucketName?: string | null;
    /**
     * A list of regular expressions matching file paths to exclude. All files in the bucket that match at least one of these regular expressions will be excluded from the scan.  Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.
     */
    excludeRegex?: string[] | null;
    /**
     * A list of regular expressions matching file paths to include. All files in the bucket that match at least one of these regular expressions will be included in the set of files, except for those that also match an item in `exclude_regex`. Leaving this field empty will match all files by default (this is equivalent to including `.*` in the list).  Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.
     */
    includeRegex?: string[] | null;
  }
  /**
   * Represents a color in the RGB color space.
   */
  export interface Schema$GooglePrivacyDlpV2Color {
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
  /**
   * The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type:  - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of &#39;HH:mm:ss&#39;.  If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false.
   */
  export interface Schema$GooglePrivacyDlpV2Condition {
    /**
     * Field within the record this condition is evaluated against. [required]
     */
    field?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * Operator used to compare the field or infoType to the value. [required]
     */
    operator?: string | null;
    /**
     * Value to compare against. [Required, except for `EXISTS` tests.]
     */
    value?: Schema$GooglePrivacyDlpV2Value;
  }
  /**
   * A collection of conditions.
   */
  export interface Schema$GooglePrivacyDlpV2Conditions {
    conditions?: Schema$GooglePrivacyDlpV2Condition[];
  }
  /**
   * Container structure for the content to inspect.
   */
  export interface Schema$GooglePrivacyDlpV2ContentItem {
    /**
     * Content data to inspect or redact. Replaces `type` and `data`.
     */
    byteItem?: Schema$GooglePrivacyDlpV2ByteContentItem;
    /**
     * Structured content for inspection. See https://cloud.google.com/dlp/docs/inspecting-text#inspecting_a_table to learn more.
     */
    table?: Schema$GooglePrivacyDlpV2Table;
    /**
     * String data to inspect or redact.
     */
    value?: string | null;
  }
  /**
   * Findings container location data.
   */
  export interface Schema$GooglePrivacyDlpV2ContentLocation {
    /**
     * Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows:  * BigQuery tables:  `&lt;project_id&gt;:&lt;dataset_id&gt;.&lt;table_id&gt;` * Cloud Storage files: `gs://&lt;bucket&gt;/&lt;path&gt;` * Datastore namespace: &lt;namespace&gt;  Nested names could be absent if the embedded object has no string identifier (for an example an image contained within a document).
     */
    containerName?: string | null;
    /**
     * Findings container modification timestamp, if applicable. For Google Cloud Storage contains last file modification timestamp. For BigQuery table contains last_modified_time property. For Datastore - not populated.
     */
    containerTimestamp?: string | null;
    /**
     * Findings container version, if available (&quot;generation&quot; for Google Cloud Storage).
     */
    containerVersion?: string | null;
    /**
     * Location data for document files.
     */
    documentLocation?: Schema$GooglePrivacyDlpV2DocumentLocation;
    /**
     * Location within an image&#39;s pixels.
     */
    imageLocation?: Schema$GooglePrivacyDlpV2ImageLocation;
    /**
     * Location within a row or record of a database table.
     */
    recordLocation?: Schema$GooglePrivacyDlpV2RecordLocation;
  }
  /**
   * Request message for CreateDeidentifyTemplate.
   */
  export interface Schema$GooglePrivacyDlpV2CreateDeidentifyTemplateRequest {
    /**
     * The DeidentifyTemplate to create.
     */
    deidentifyTemplate?: Schema$GooglePrivacyDlpV2DeidentifyTemplate;
    /**
     * The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    templateId?: string | null;
  }
  /**
   * Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
   */
  export interface Schema$GooglePrivacyDlpV2CreateDlpJobRequest {
    inspectJob?: Schema$GooglePrivacyDlpV2InspectJobConfig;
    /**
     * The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    jobId?: string | null;
    riskJob?: Schema$GooglePrivacyDlpV2RiskAnalysisJobConfig;
  }
  /**
   * Request message for CreateInspectTemplate.
   */
  export interface Schema$GooglePrivacyDlpV2CreateInspectTemplateRequest {
    /**
     * The InspectTemplate to create.
     */
    inspectTemplate?: Schema$GooglePrivacyDlpV2InspectTemplate;
    /**
     * The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    templateId?: string | null;
  }
  /**
   * Request message for CreateJobTrigger.
   */
  export interface Schema$GooglePrivacyDlpV2CreateJobTriggerRequest {
    /**
     * The JobTrigger to create.
     */
    jobTrigger?: Schema$GooglePrivacyDlpV2JobTrigger;
    /**
     * The trigger id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    triggerId?: string | null;
  }
  /**
   * Request message for CreateStoredInfoType.
   */
  export interface Schema$GooglePrivacyDlpV2CreateStoredInfoTypeRequest {
    /**
     * Configuration of the storedInfoType to create.
     */
    config?: Schema$GooglePrivacyDlpV2StoredInfoTypeConfig;
    /**
     * The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    storedInfoTypeId?: string | null;
  }
  /**
   * Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
   */
  export interface Schema$GooglePrivacyDlpV2CryptoDeterministicConfig {
    /**
     * Optional. A context may be used for higher security and maintaining referential integrity such that the same identifier in two different contexts will be given a distinct surrogate. The context is appended to plaintext value being encrypted. On decryption the provided context is validated against the value used during encryption. If a context was provided during encryption, same context must be provided during decryption as well.  If the context is not set, plaintext would be used as is for encryption. If the context is set but:  1. there is no record present when transforming a given value or 2. the field is not present when transforming a given value,  plaintext would be used as is for encryption.  Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s.
     */
    context?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * The key used by the encryption function.
     */
    cryptoKey?: Schema$GooglePrivacyDlpV2CryptoKey;
    /**
     * The custom info type to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom info type followed by the number of characters comprising the surrogate. The following scheme defines the format: &lt;info type name&gt;(&lt;surrogate character count&gt;):&lt;surrogate&gt;  For example, if the name of custom info type is &#39;MY_TOKEN_INFO_TYPE&#39; and the surrogate is &#39;abc&#39;, the full replacement value will be: &#39;MY_TOKEN_INFO_TYPE(3):abc&#39;  This annotation identifies the surrogate when inspecting content using the custom info type &#39;Surrogate&#39;. This facilitates reversal of the surrogate when it occurs in free text.  Note: For record transformations where the entire cell in a table is being transformed, surrogates are optional to use. Surrogates are used to denote the location of the token and are necessary for re-identification in free form text.  In order for inspection to work properly, the name of this info type must not occur naturally anywhere in your data; otherwise, inspection may either  - reverse a surrogate that does not correspond to an actual identifier - be unable to parse the surrogate and result in an error  Therefore, choose your custom info type name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE.
     */
    surrogateInfoType?: Schema$GooglePrivacyDlpV2InfoType;
  }
  /**
   * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2CryptoHashConfig {
    /**
     * The key used by the hash function.
     */
    cryptoKey?: Schema$GooglePrivacyDlpV2CryptoKey;
  }
  /**
   * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by KMS). When using KMS to wrap/unwrap DEKs, be sure to set an appropriate IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot unwrap the data crypto key.
   */
  export interface Schema$GooglePrivacyDlpV2CryptoKey {
    kmsWrapped?: Schema$GooglePrivacyDlpV2KmsWrappedCryptoKey;
    transient?: Schema$GooglePrivacyDlpV2TransientCryptoKey;
    unwrapped?: Schema$GooglePrivacyDlpV2UnwrappedCryptoKey;
  }
  /**
   * Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more.  Note: We recommend using  CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
   */
  export interface Schema$GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig {
    commonAlphabet?: string | null;
    /**
     * The &#39;tweak&#39;, a context may be used for higher security since the same identifier in two different contexts won&#39;t be given the same surrogate. If the context is not set, a default tweak will be used.  If the context is set but:  1. there is no record present when transforming a given value or 1. the field is not present when transforming a given value,  a default tweak will be used.  Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. Currently, the referenced field may be of value type integer or string.  The tweak is constructed as a sequence of bytes in big endian byte order such that:  - a 64 bit integer is encoded followed by a single byte of value 1 - a string is encoded in UTF-8 format followed by a single byte of value 2
     */
    context?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * The key used by the encryption algorithm. [required]
     */
    cryptoKey?: Schema$GooglePrivacyDlpV2CryptoKey;
    /**
     * This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 62]. This must be encoded as ASCII. The order of characters does not matter.
     */
    customAlphabet?: string | null;
    /**
     * The native way to select the alphabet. Must be in the range [2, 62].
     */
    radix?: number | null;
    /**
     * The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info_type_name(surrogate_character_count):surrogate  For example, if the name of custom infoType is &#39;MY_TOKEN_INFO_TYPE&#39; and the surrogate is &#39;abc&#39;, the full replacement value will be: &#39;MY_TOKEN_INFO_TYPE(3):abc&#39;  This annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](/dlp/docs/reference/rest/v2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text.  In order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE
     */
    surrogateInfoType?: Schema$GooglePrivacyDlpV2InfoType;
  }
  /**
   * Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
   */
  export interface Schema$GooglePrivacyDlpV2CustomInfoType {
    /**
     * Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType.
     */
    detectionRules?: Schema$GooglePrivacyDlpV2DetectionRule[];
    /**
     * A list of phrases to detect as a CustomInfoType.
     */
    dictionary?: Schema$GooglePrivacyDlpV2Dictionary;
    /**
     * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.
     */
    exclusionType?: string | null;
    /**
     * CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in `InspectContent.info_types` field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in `InspectContent.info_types` list then the name is treated as a custom info type.
     */
    infoType?: Schema$GooglePrivacyDlpV2InfoType;
    /**
     * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified.
     */
    likelihood?: string | null;
    /**
     * Regular expression based CustomInfoType.
     */
    regex?: Schema$GooglePrivacyDlpV2Regex;
    /**
     * Load an existing `StoredInfoType` resource for use in `InspectDataSource`. Not currently supported in `InspectContent`.
     */
    storedType?: Schema$GooglePrivacyDlpV2StoredType;
    /**
     * Message for detecting output from deidentification transformations that support reversing.
     */
    surrogateType?: Schema$GooglePrivacyDlpV2SurrogateType;
  }
  /**
   * Record key for a finding in Cloud Datastore.
   */
  export interface Schema$GooglePrivacyDlpV2DatastoreKey {
    /**
     * Datastore entity key.
     */
    entityKey?: Schema$GooglePrivacyDlpV2Key;
  }
  /**
   * Options defining a data set within Google Cloud Datastore.
   */
  export interface Schema$GooglePrivacyDlpV2DatastoreOptions {
    /**
     * The kind to process.
     */
    kind?: Schema$GooglePrivacyDlpV2KindExpression;
    /**
     * A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty.
     */
    partitionId?: Schema$GooglePrivacyDlpV2PartitionId;
  }
  /**
   * Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2DateShiftConfig {
    /**
     * Points to the field that contains the context, for example, an entity id. If set, must also set method. If set, shift will be consistent for the given context.
     */
    context?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and crypto_key.
     */
    cryptoKey?: Schema$GooglePrivacyDlpV2CryptoKey;
    /**
     * For example, -5 means shift date to at most 5 days back in the past. [Required]
     */
    lowerBoundDays?: number | null;
    /**
     * Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction.  For example, 3 means shift date to at most 3 days into the future. [Required]
     */
    upperBoundDays?: number | null;
  }
  /**
   * Message for a date time object. e.g. 2018-01-01, 5th August.
   */
  export interface Schema$GooglePrivacyDlpV2DateTime {
    /**
     * One or more of the following must be set. All fields are optional, but when set must be valid date or time values.
     */
    date?: Schema$GoogleTypeDate;
    dayOfWeek?: string | null;
    time?: Schema$GoogleTypeTimeOfDay;
    timeZone?: Schema$GooglePrivacyDlpV2TimeZone;
  }
  /**
   * The configuration that controls how the data will change.
   */
  export interface Schema$GooglePrivacyDlpV2DeidentifyConfig {
    /**
     * Treat the dataset as free-form text and apply the same free text transformation everywhere.
     */
    infoTypeTransformations?: Schema$GooglePrivacyDlpV2InfoTypeTransformations;
    /**
     * Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table.
     */
    recordTransformations?: Schema$GooglePrivacyDlpV2RecordTransformations;
  }
  /**
   * Request to de-identify a list of items.
   */
  export interface Schema$GooglePrivacyDlpV2DeidentifyContentRequest {
    /**
     * Configuration for the de-identification of the content item. Items specified here will override the template referenced by the deidentify_template_name argument.
     */
    deidentifyConfig?: Schema$GooglePrivacyDlpV2DeidentifyConfig;
    /**
     * Optional template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
     */
    deidentifyTemplateName?: string | null;
    /**
     * Configuration for the inspector. Items specified here will override the template referenced by the inspect_template_name argument.
     */
    inspectConfig?: Schema$GooglePrivacyDlpV2InspectConfig;
    /**
     * Optional template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
     */
    inspectTemplateName?: string | null;
    /**
     * The item to de-identify. Will be treated as text.
     */
    item?: Schema$GooglePrivacyDlpV2ContentItem;
    /**
     * The geographic location to process de-identification. Reserved for future extensions.
     */
    location?: string | null;
  }
  /**
   * Results of de-identifying a ContentItem.
   */
  export interface Schema$GooglePrivacyDlpV2DeidentifyContentResponse {
    /**
     * The de-identified item.
     */
    item?: Schema$GooglePrivacyDlpV2ContentItem;
    /**
     * An overview of the changes that were made on the `item`.
     */
    overview?: Schema$GooglePrivacyDlpV2TransformationOverview;
  }
  /**
   * The DeidentifyTemplates contains instructions on how to deidentify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2DeidentifyTemplate {
    /**
     * The creation timestamp of a inspectTemplate, output only field.
     */
    createTime?: string | null;
    /**
     * ///////////// // The core content of the template  // ///////////////
     */
    deidentifyConfig?: Schema$GooglePrivacyDlpV2DeidentifyConfig;
    /**
     * Short description (max 256 chars).
     */
    description?: string | null;
    /**
     * Display name (max 256 chars).
     */
    displayName?: string | null;
    /**
     * The template name. Output only.  The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`
     */
    name?: string | null;
    /**
     * The last update timestamp of a inspectTemplate, output only field.
     */
    updateTime?: string | null;
  }
  /**
   * δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
   */
  export interface Schema$GooglePrivacyDlpV2DeltaPresenceEstimationConfig {
    /**
     * Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers field must appear in exactly one field of one auxiliary table.
     */
    auxiliaryTables?: Schema$GooglePrivacyDlpV2StatisticalTable[];
    /**
     * Fields considered to be quasi-identifiers. No two fields can have the same tag. [required]
     */
    quasiIds?: Schema$GooglePrivacyDlpV2QuasiId[];
    /**
     * ISO 3166-1 alpha-2 region code to use in the statistical modeling. Required if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.
     */
    regionCode?: string | null;
  }
  /**
   * A DeltaPresenceEstimationHistogramBucket message with the following values:   min_probability: 0.1   max_probability: 0.2   frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
   */
  export interface Schema$GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket {
    /**
     * Number of records within these probability bounds.
     */
    bucketSize?: string | null;
    /**
     * Total number of distinct quasi-identifier tuple values in this bucket.
     */
    bucketValueCount?: string | null;
    /**
     * Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
     */
    bucketValues?: Schema$GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues[];
    /**
     * Always greater than or equal to min_probability.
     */
    maxProbability?: number | null;
    /**
     * Between 0 and 1.
     */
    minProbability?: number | null;
  }
  /**
   * A tuple of values for the quasi-identifier columns.
   */
  export interface Schema$GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues {
    /**
     * The estimated probability that a given individual sharing these quasi-identifier values is in the dataset. This value, typically called δ, is the ratio between the number of records in the dataset with these quasi-identifier values, and the total number of individuals (inside *and* outside the dataset) with these quasi-identifier values. For example, if there are 15 individuals in the dataset who share the same quasi-identifier values, and an estimated 100 people in the entire population with these values, then δ is 0.15.
     */
    estimatedProbability?: number | null;
    /**
     * The quasi-identifier values.
     */
    quasiIdsValues?: Schema$GooglePrivacyDlpV2Value[];
  }
  /**
   * Result of the δ-presence computation. Note that these results are an estimation, not exact values.
   */
  export interface Schema$GooglePrivacyDlpV2DeltaPresenceEstimationResult {
    /**
     * The intervals [min_probability, max_probability) do not overlap. If a value doesn&#39;t correspond to any such interval, the associated frequency is zero. For example, the following records:   {min_probability: 0, max_probability: 0.1, frequency: 17}   {min_probability: 0.2, max_probability: 0.3, frequency: 42}   {min_probability: 0.3, max_probability: 0.4, frequency: 99} mean that there are no record with an estimated probability in [0.1, 0.2) nor larger or equal to 0.4.
     */
    deltaPresenceEstimationHistogram?: Schema$GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket[];
  }
  /**
   * Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType.
   */
  export interface Schema$GooglePrivacyDlpV2DetectionRule {
    /**
     * Hotword-based detection rule.
     */
    hotwordRule?: Schema$GooglePrivacyDlpV2HotwordRule;
  }
  /**
   * Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles.  Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase &quot;Sam Johnson&quot; will match all three phrases &quot;sam johnson&quot;, &quot;Sam, Johnson&quot;, and &quot;Sam (Johnson)&quot;. Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word &quot;jen&quot; will match the first three letters of the text &quot;jen123&quot; but will return no matches for &quot;jennifer&quot;.  Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.
   */
  export interface Schema$GooglePrivacyDlpV2Dictionary {
    /**
     * Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
     */
    cloudStoragePath?: Schema$GooglePrivacyDlpV2CloudStoragePath;
    /**
     * List of words or phrases to search for.
     */
    wordList?: Schema$GooglePrivacyDlpV2WordList;
  }
  /**
   * Combines all of the information about a DLP job.
   */
  export interface Schema$GooglePrivacyDlpV2DlpJob {
    /**
     * Time when the job was created.
     */
    createTime?: string | null;
    /**
     * Time when the job finished.
     */
    endTime?: string | null;
    /**
     * A stream of errors encountered running the job.
     */
    errors?: Schema$GooglePrivacyDlpV2Error[];
    /**
     * Results from inspecting a data source.
     */
    inspectDetails?: Schema$GooglePrivacyDlpV2InspectDataSourceDetails;
    /**
     * If created by a job trigger, the resource name of the trigger that instantiated the job.
     */
    jobTriggerName?: string | null;
    /**
     * The server-assigned name.
     */
    name?: string | null;
    /**
     * Results from analyzing risk of a data source.
     */
    riskDetails?: Schema$GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;
    /**
     * Time when the job started.
     */
    startTime?: string | null;
    /**
     * State of a job.
     */
    state?: string | null;
    /**
     * The type of job.
     */
    type?: string | null;
  }
  /**
   * Location of a finding within a document.
   */
  export interface Schema$GooglePrivacyDlpV2DocumentLocation {
    /**
     * Offset of the line, from the beginning of the file, where the finding is located.
     */
    fileOffset?: string | null;
  }
  /**
   * An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.
   */
  export interface Schema$GooglePrivacyDlpV2EntityId {
    /**
     * Composite key indicating which field contains the entity identifier.
     */
    field?: Schema$GooglePrivacyDlpV2FieldId;
  }
  /**
   * Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger. Output only field.
   */
  export interface Schema$GooglePrivacyDlpV2Error {
    details?: Schema$GoogleRpcStatus;
    /**
     * The times the error occurred.
     */
    timestamps?: string[] | null;
  }
  /**
   * List of exclude infoTypes.
   */
  export interface Schema$GooglePrivacyDlpV2ExcludeInfoTypes {
    /**
     * InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for `InspectionRuleSet.info_types` containing &quot;PHONE_NUMBER&quot;` and `exclusion_rule` containing `exclude_info_types.info_types` with &quot;EMAIL_ADDRESS&quot; the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to &quot;555-222-2222@example.org&quot; to generate only a single finding, namely email address.
     */
    infoTypes?: Schema$GooglePrivacyDlpV2InfoType[];
  }
  /**
   * The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
   */
  export interface Schema$GooglePrivacyDlpV2ExclusionRule {
    /**
     * Dictionary which defines the rule.
     */
    dictionary?: Schema$GooglePrivacyDlpV2Dictionary;
    /**
     * Set of infoTypes for which findings would affect this rule.
     */
    excludeInfoTypes?: Schema$GooglePrivacyDlpV2ExcludeInfoTypes;
    /**
     * How the rule is applied, see MatchingType documentation for details.
     */
    matchingType?: string | null;
    /**
     * Regular expression which defines the rule.
     */
    regex?: Schema$GooglePrivacyDlpV2Regex;
  }
  /**
   * An expression, consisting or an operator and conditions.
   */
  export interface Schema$GooglePrivacyDlpV2Expressions {
    conditions?: Schema$GooglePrivacyDlpV2Conditions;
    /**
     * The operator to apply to the result of conditions. Default and currently only supported value is `AND`.
     */
    logicalOperator?: string | null;
  }
  /**
   * General identifier of a data field in a storage service.
   */
  export interface Schema$GooglePrivacyDlpV2FieldId {
    /**
     * Name describing the field.
     */
    name?: string | null;
  }
  /**
   * The transformation to apply to the field.
   */
  export interface Schema$GooglePrivacyDlpV2FieldTransformation {
    /**
     * Only apply the transformation if the condition evaluates to true for the given `RecordCondition`. The conditions are allowed to reference fields that are not used in the actual transformation. [optional]  Example Use Cases:  - Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range. - Redact a field if the date of birth field is greater than 85.
     */
    condition?: Schema$GooglePrivacyDlpV2RecordCondition;
    /**
     * Input field(s) to apply the transformation to. [required]
     */
    fields?: Schema$GooglePrivacyDlpV2FieldId[];
    /**
     * Treat the contents of the field as free text, and selectively transform content that matches an `InfoType`.
     */
    infoTypeTransformations?: Schema$GooglePrivacyDlpV2InfoTypeTransformations;
    /**
     * Apply the transformation to the entire field.
     */
    primitiveTransformation?: Schema$GooglePrivacyDlpV2PrimitiveTransformation;
  }
  /**
   * Set of files to scan.
   */
  export interface Schema$GooglePrivacyDlpV2FileSet {
    /**
     * The regex-filtered set of files to scan. Exactly one of `url` or `regex_file_set` must be set.
     */
    regexFileSet?: Schema$GooglePrivacyDlpV2CloudStorageRegexFileSet;
    /**
     * The Cloud Storage url of the file(s) to scan, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing wildcard in the path is allowed.  If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is equivalent to `gs://mybucket/x, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/x.  Exactly one of `url` or `regex_file_set` must be set.
     */
    url?: string | null;
  }
  /**
   * Represents a piece of potentially sensitive content.
   */
  export interface Schema$GooglePrivacyDlpV2Finding {
    /**
     * Timestamp when finding was detected.
     */
    createTime?: string | null;
    /**
     * The type of content that might have been found. Provided if `excluded_types` is false.
     */
    infoType?: Schema$GooglePrivacyDlpV2InfoType;
    /**
     * Confidence of how likely it is that the `info_type` is correct.
     */
    likelihood?: string | null;
    /**
     * Where the content was found.
     */
    location?: Schema$GooglePrivacyDlpV2Location;
    /**
     * The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if `include_quote` is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted.
     */
    quote?: string | null;
    /**
     * Contains data parsed from quotes. Only populated if include_quote was set to true and a supported infoType was requested. Currently supported infoTypes: DATE, DATE_OF_BIRTH and TIME.
     */
    quoteInfo?: Schema$GooglePrivacyDlpV2QuoteInfo;
  }
  export interface Schema$GooglePrivacyDlpV2FindingLimits {
    /**
     * Configuration of findings limit given for specified infoTypes.
     */
    maxFindingsPerInfoType?: Schema$GooglePrivacyDlpV2InfoTypeLimit[];
    /**
     * Max number of findings that will be returned for each item scanned. When set within `InspectDataSourceRequest`, the maximum returned is 2000 regardless if this is set higher. When set within `InspectContentRequest`, this field is ignored.
     */
    maxFindingsPerItem?: number | null;
    /**
     * Max number of findings that will be returned per request/job. When set within `InspectContentRequest`, the maximum returned is 2000 regardless if this is set higher.
     */
    maxFindingsPerRequest?: number | null;
  }
  /**
   * Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies.  The transformed value will be a hyphenated string of &lt;lower_bound&gt;-&lt;upper_bound&gt;, i.e if lower_bound = 10 and upper_bound = 20 all values that are within this bucket will be replaced with &quot;10-20&quot;.  This can be used on data of type: double, long.  If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing.  See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2FixedSizeBucketingConfig {
    /**
     * Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. [Required].
     */
    bucketSize?: number | null;
    /**
     * Lower bound value of buckets. All values less than `lower_bound` are grouped together into a single bucket; for example if `lower_bound` = 10, then all values less than 10 are replaced with the value “-10”. [Required].
     */
    lowerBound?: Schema$GooglePrivacyDlpV2Value;
    /**
     * Upper bound value of buckets. All values greater than upper_bound are grouped together into a single bucket; for example if `upper_bound` = 89, then all values greater than 89 are replaced with the value “89+”. [Required].
     */
    upperBound?: Schema$GooglePrivacyDlpV2Value;
  }
  /**
   * The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
   */
  export interface Schema$GooglePrivacyDlpV2HotwordRule {
    /**
     * Regular expression pattern defining what qualifies as a hotword.
     */
    hotwordRegex?: Schema$GooglePrivacyDlpV2Regex;
    /**
     * Likelihood adjustment to apply to all matching findings.
     */
    likelihoodAdjustment?: Schema$GooglePrivacyDlpV2LikelihoodAdjustment;
    /**
     * Proximity of the finding within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be used to match substrings of the finding itself. For example, the certainty of a phone number regex &quot;\(\d{3}\) \d{3}-\d{4}&quot; could be adjusted upwards if the area code is known to be the local area code of a company office using the hotword regex &quot;\(xxx\)&quot;, where &quot;xxx&quot; is the area code in question.
     */
    proximity?: Schema$GooglePrivacyDlpV2Proximity;
  }
  /**
   * Location of the finding within an image.
   */
  export interface Schema$GooglePrivacyDlpV2ImageLocation {
    /**
     * Bounding boxes locating the pixels within the image containing the finding.
     */
    boundingBoxes?: Schema$GooglePrivacyDlpV2BoundingBox[];
  }
  /**
   * Configuration for determining how redaction of images should occur.
   */
  export interface Schema$GooglePrivacyDlpV2ImageRedactionConfig {
    /**
     * Only one per info_type should be provided per request. If not specified, and redact_all_text is false, the DLP API will redact all text that it matches against all info_types that are found, but not specified in another ImageRedactionConfig.
     */
    infoType?: Schema$GooglePrivacyDlpV2InfoType;
    /**
     * If true, all text found in the image, regardless whether it matches an info_type, is redacted. Only one should be provided.
     */
    redactAllText?: boolean | null;
    /**
     * The color to use when redacting content from an image. If not specified, the default is black.
     */
    redactionColor?: Schema$GooglePrivacyDlpV2Color;
  }
  /**
   * Type of information detected by the API.
   */
  export interface Schema$GooglePrivacyDlpV2InfoType {
    /**
     * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. InfoType names should conform to the pattern [a-zA-Z0-9_]{1,64}.
     */
    name?: string | null;
  }
  /**
   * InfoType description.
   */
  export interface Schema$GooglePrivacyDlpV2InfoTypeDescription {
    /**
     * Description of the infotype. Translated when language is provided in the request.
     */
    description?: string | null;
    /**
     * Human readable form of the infoType name.
     */
    displayName?: string | null;
    /**
     * Internal name of the infoType.
     */
    name?: string | null;
    /**
     * Which parts of the API supports this InfoType.
     */
    supportedBy?: string[] | null;
  }
  /**
   * Max findings configuration per infoType, per content item or long running DlpJob.
   */
  export interface Schema$GooglePrivacyDlpV2InfoTypeLimit {
    /**
     * Type of information the findings limit applies to. Only one limit per info_type should be provided. If InfoTypeLimit does not have an info_type, the DLP API applies the limit against all info_types that are found but not specified in another InfoTypeLimit.
     */
    infoType?: Schema$GooglePrivacyDlpV2InfoType;
    /**
     * Max findings limit for the given infoType.
     */
    maxFindings?: number | null;
  }
  /**
   * Statistics regarding a specific InfoType.
   */
  export interface Schema$GooglePrivacyDlpV2InfoTypeStats {
    /**
     * Number of findings for this infoType.
     */
    count?: string | null;
    /**
     * The type of finding this stat is for.
     */
    infoType?: Schema$GooglePrivacyDlpV2InfoType;
  }
  /**
   * A transformation to apply to text that is identified as a specific info_type.
   */
  export interface Schema$GooglePrivacyDlpV2InfoTypeTransformation {
    /**
     * InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in `InspectConfig`.
     */
    infoTypes?: Schema$GooglePrivacyDlpV2InfoType[];
    /**
     * Primitive transformation to apply to the infoType. [required]
     */
    primitiveTransformation?: Schema$GooglePrivacyDlpV2PrimitiveTransformation;
  }
  /**
   * A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
   */
  export interface Schema$GooglePrivacyDlpV2InfoTypeTransformations {
    /**
     * Transformation for each infoType. Cannot specify more than one for a given infoType. [required]
     */
    transformations?: Schema$GooglePrivacyDlpV2InfoTypeTransformation[];
  }
  /**
   * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
   */
  export interface Schema$GooglePrivacyDlpV2InspectConfig {
    /**
     * List of options defining data content to scan. If empty, text, images, and other content will be included.
     */
    contentOptions?: string[] | null;
    /**
     * CustomInfoTypes provided by the user. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
     */
    customInfoTypes?: Schema$GooglePrivacyDlpV2CustomInfoType[];
    /**
     * When true, excludes type information of the findings.
     */
    excludeInfoTypes?: boolean | null;
    /**
     * When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote.
     */
    includeQuote?: boolean | null;
    /**
     * Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/dlp/docs/infotypes-reference.  When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.  The special InfoType name &quot;ALL_BASIC&quot; can be used to trigger all detectors, but may change over time as new InfoTypes are added. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference.
     */
    infoTypes?: Schema$GooglePrivacyDlpV2InfoType[];
    limits?: Schema$GooglePrivacyDlpV2FindingLimits;
    /**
     * Only returns findings equal or above this threshold. The default is POSSIBLE. See https://cloud.google.com/dlp/docs/likelihood to learn more.
     */
    minLikelihood?: string | null;
    /**
     * Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type.
     */
    ruleSet?: Schema$GooglePrivacyDlpV2InspectionRuleSet[];
  }
  /**
   * Request to search for potentially sensitive info in a ContentItem.
   */
  export interface Schema$GooglePrivacyDlpV2InspectContentRequest {
    /**
     * Configuration for the inspector. What specified here will override the template referenced by the inspect_template_name argument.
     */
    inspectConfig?: Schema$GooglePrivacyDlpV2InspectConfig;
    /**
     * Optional template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
     */
    inspectTemplateName?: string | null;
    /**
     * The item to inspect.
     */
    item?: Schema$GooglePrivacyDlpV2ContentItem;
    /**
     * The geographic location to process content inspection. Reserved for future extensions.
     */
    location?: string | null;
  }
  /**
   * Results of inspecting an item.
   */
  export interface Schema$GooglePrivacyDlpV2InspectContentResponse {
    /**
     * The findings.
     */
    result?: Schema$GooglePrivacyDlpV2InspectResult;
  }
  /**
   * The results of an inspect DataSource job.
   */
  export interface Schema$GooglePrivacyDlpV2InspectDataSourceDetails {
    /**
     * The configuration used for this job.
     */
    requestedOptions?: Schema$GooglePrivacyDlpV2RequestedOptions;
    /**
     * A summary of the outcome of this inspect job.
     */
    result?: Schema$GooglePrivacyDlpV2Result;
  }
  /**
   * A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
   */
  export interface Schema$GooglePrivacyDlpV2InspectionRule {
    /**
     * Exclusion rule.
     */
    exclusionRule?: Schema$GooglePrivacyDlpV2ExclusionRule;
    /**
     * Hotword-based detection rule.
     */
    hotwordRule?: Schema$GooglePrivacyDlpV2HotwordRule;
  }
  /**
   * Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
   */
  export interface Schema$GooglePrivacyDlpV2InspectionRuleSet {
    /**
     * List of infoTypes this rule set is applied to.
     */
    infoTypes?: Schema$GooglePrivacyDlpV2InfoType[];
    /**
     * Set of rules to be applied to infoTypes. The rules are applied in order.
     */
    rules?: Schema$GooglePrivacyDlpV2InspectionRule[];
  }
  export interface Schema$GooglePrivacyDlpV2InspectJobConfig {
    /**
     * Actions to execute at the completion of the job.
     */
    actions?: Schema$GooglePrivacyDlpV2Action[];
    /**
     * How and what to scan for.
     */
    inspectConfig?: Schema$GooglePrivacyDlpV2InspectConfig;
    /**
     * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
     */
    inspectTemplateName?: string | null;
    /**
     * The data to scan.
     */
    storageConfig?: Schema$GooglePrivacyDlpV2StorageConfig;
  }
  /**
   * All the findings for a single scanned item.
   */
  export interface Schema$GooglePrivacyDlpV2InspectResult {
    /**
     * List of findings for an item.
     */
    findings?: Schema$GooglePrivacyDlpV2Finding[];
    /**
     * If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches.
     */
    findingsTruncated?: boolean | null;
  }
  /**
   * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2InspectTemplate {
    /**
     * The creation timestamp of a inspectTemplate, output only field.
     */
    createTime?: string | null;
    /**
     * Short description (max 256 chars).
     */
    description?: string | null;
    /**
     * Display name (max 256 chars).
     */
    displayName?: string | null;
    /**
     * The core content of the template. Configuration of the scanning process.
     */
    inspectConfig?: Schema$GooglePrivacyDlpV2InspectConfig;
    /**
     * The template name. Output only.  The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`
     */
    name?: string | null;
    /**
     * The last update timestamp of a inspectTemplate, output only field.
     */
    updateTime?: string | null;
  }
  /**
   * Enable email notification to project owners and editors on jobs&#39;s completion/failure.
   */
  export interface Schema$GooglePrivacyDlpV2JobNotificationEmails {}
  /**
   * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2JobTrigger {
    /**
     * The creation timestamp of a triggeredJob, output only field.
     */
    createTime?: string | null;
    /**
     * User provided description (max 256 chars)
     */
    description?: string | null;
    /**
     * Display name (max 100 chars)
     */
    displayName?: string | null;
    /**
     * A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared. Output only field.
     */
    errors?: Schema$GooglePrivacyDlpV2Error[];
    inspectJob?: Schema$GooglePrivacyDlpV2InspectJobConfig;
    /**
     * The timestamp of the last time this trigger executed, output only field.
     */
    lastRunTime?: string | null;
    /**
     * Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.
     */
    name?: string | null;
    /**
     * A status for this trigger. [required]
     */
    status?: string | null;
    /**
     * A list of triggers which will be OR&#39;ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.
     */
    triggers?: Schema$GooglePrivacyDlpV2Trigger[];
    /**
     * The last update timestamp of a triggeredJob, output only field.
     */
    updateTime?: string | null;
  }
  /**
   * k-anonymity metric, used for analysis of reidentification risk.
   */
  export interface Schema$GooglePrivacyDlpV2KAnonymityConfig {
    /**
     * Optional message indicating that multiple rows might be associated to a single individual. If the same entity_id is associated to multiple quasi-identifier tuples over distinct rows, we consider the entire collection of tuples as the composite quasi-identifier. This collection is a multiset: the order in which the different tuples appear in the dataset is ignored, but their frequency is taken into account.  Important note: a maximum of 1000 rows can be associated to a single entity ID. If more rows are associated with the same entity ID, some might be ignored.
     */
    entityId?: Schema$GooglePrivacyDlpV2EntityId;
    /**
     * Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field.
     */
    quasiIds?: Schema$GooglePrivacyDlpV2FieldId[];
  }
  /**
   * The set of columns&#39; values that share the same ldiversity value
   */
  export interface Schema$GooglePrivacyDlpV2KAnonymityEquivalenceClass {
    /**
     * Size of the equivalence class, for example number of rows with the above set of values.
     */
    equivalenceClassSize?: string | null;
    /**
     * Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request.
     */
    quasiIdsValues?: Schema$GooglePrivacyDlpV2Value[];
  }
  export interface Schema$GooglePrivacyDlpV2KAnonymityHistogramBucket {
    /**
     * Total number of equivalence classes in this bucket.
     */
    bucketSize?: string | null;
    /**
     * Total number of distinct equivalence classes in this bucket.
     */
    bucketValueCount?: string | null;
    /**
     * Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
     */
    bucketValues?: Schema$GooglePrivacyDlpV2KAnonymityEquivalenceClass[];
    /**
     * Lower bound on the size of the equivalence classes in this bucket.
     */
    equivalenceClassSizeLowerBound?: string | null;
    /**
     * Upper bound on the size of the equivalence classes in this bucket.
     */
    equivalenceClassSizeUpperBound?: string | null;
  }
  /**
   * Result of the k-anonymity computation.
   */
  export interface Schema$GooglePrivacyDlpV2KAnonymityResult {
    /**
     * Histogram of k-anonymity equivalence classes.
     */
    equivalenceClassHistogramBuckets?: Schema$GooglePrivacyDlpV2KAnonymityHistogramBucket[];
  }
  /**
   * A unique identifier for a Datastore entity. If a key&#39;s partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
   */
  export interface Schema$GooglePrivacyDlpV2Key {
    /**
     * Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition.
     */
    partitionId?: Schema$GooglePrivacyDlpV2PartitionId;
    /**
     * The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element&#39;s _ancestors_.  A path can never be empty, and a path can have at most 100 elements.
     */
    path?: Schema$GooglePrivacyDlpV2PathElement[];
  }
  /**
   * A representation of a Datastore kind.
   */
  export interface Schema$GooglePrivacyDlpV2KindExpression {
    /**
     * The name of the kind.
     */
    name?: string | null;
  }
  /**
   * Reidentifiability metric. This corresponds to a risk model similar to what is called &quot;journalist risk&quot; in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset. A column with a semantic tag attached.
   */
  export interface Schema$GooglePrivacyDlpV2KMapEstimationConfig {
    /**
     * Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table.
     */
    auxiliaryTables?: Schema$GooglePrivacyDlpV2AuxiliaryTable[];
    /**
     * Fields considered to be quasi-identifiers. No two columns can have the same tag. [required]
     */
    quasiIds?: Schema$GooglePrivacyDlpV2TaggedField[];
    /**
     * ISO 3166-1 alpha-2 region code to use in the statistical modeling. Required if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.
     */
    regionCode?: string | null;
  }
  /**
   * A KMapEstimationHistogramBucket message with the following values:   min_anonymity: 3   max_anonymity: 5   frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
   */
  export interface Schema$GooglePrivacyDlpV2KMapEstimationHistogramBucket {
    /**
     * Number of records within these anonymity bounds.
     */
    bucketSize?: string | null;
    /**
     * Total number of distinct quasi-identifier tuple values in this bucket.
     */
    bucketValueCount?: string | null;
    /**
     * Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
     */
    bucketValues?: Schema$GooglePrivacyDlpV2KMapEstimationQuasiIdValues[];
    /**
     * Always greater than or equal to min_anonymity.
     */
    maxAnonymity?: string | null;
    /**
     * Always positive.
     */
    minAnonymity?: string | null;
  }
  /**
   * A tuple of values for the quasi-identifier columns.
   */
  export interface Schema$GooglePrivacyDlpV2KMapEstimationQuasiIdValues {
    /**
     * The estimated anonymity for these quasi-identifier values.
     */
    estimatedAnonymity?: string | null;
    /**
     * The quasi-identifier values.
     */
    quasiIdsValues?: Schema$GooglePrivacyDlpV2Value[];
  }
  /**
   * Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
   */
  export interface Schema$GooglePrivacyDlpV2KMapEstimationResult {
    /**
     * The intervals [min_anonymity, max_anonymity] do not overlap. If a value doesn&#39;t correspond to any such interval, the associated frequency is zero. For example, the following records:   {min_anonymity: 1, max_anonymity: 1, frequency: 17}   {min_anonymity: 2, max_anonymity: 3, frequency: 42}   {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10.
     */
    kMapEstimationHistogram?: Schema$GooglePrivacyDlpV2KMapEstimationHistogramBucket[];
  }
  /**
   * Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128/192/256 bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a kms-wrapped crypto key: dlp.kms.encrypt
   */
  export interface Schema$GooglePrivacyDlpV2KmsWrappedCryptoKey {
    /**
     * The resource name of the KMS CryptoKey to use for unwrapping. [required]
     */
    cryptoKeyName?: string | null;
    /**
     * The wrapped data crypto key. [required]
     */
    wrappedKey?: string | null;
  }
  /**
   * Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Google Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
   */
  export interface Schema$GooglePrivacyDlpV2LargeCustomDictionaryConfig {
    /**
     * Field in a BigQuery table where each cell represents a dictionary phrase.
     */
    bigQueryField?: Schema$GooglePrivacyDlpV2BigQueryField;
    /**
     * Set of files containing newline-delimited lists of dictionary phrases.
     */
    cloudStorageFileSet?: Schema$GooglePrivacyDlpV2CloudStorageFileSet;
    /**
     * Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API. If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.
     */
    outputPath?: Schema$GooglePrivacyDlpV2CloudStoragePath;
  }
  /**
   * Summary statistics of a custom dictionary.
   */
  export interface Schema$GooglePrivacyDlpV2LargeCustomDictionaryStats {
    /**
     * Approximate number of distinct phrases in the dictionary.
     */
    approxNumPhrases?: string | null;
  }
  /**
   * l-diversity metric, used for analysis of reidentification risk.
   */
  export interface Schema$GooglePrivacyDlpV2LDiversityConfig {
    /**
     * Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key.
     */
    quasiIds?: Schema$GooglePrivacyDlpV2FieldId[];
    /**
     * Sensitive field for computing the l-value.
     */
    sensitiveAttribute?: Schema$GooglePrivacyDlpV2FieldId;
  }
  /**
   * The set of columns&#39; values that share the same ldiversity value.
   */
  export interface Schema$GooglePrivacyDlpV2LDiversityEquivalenceClass {
    /**
     * Size of the k-anonymity equivalence class.
     */
    equivalenceClassSize?: string | null;
    /**
     * Number of distinct sensitive values in this equivalence class.
     */
    numDistinctSensitiveValues?: string | null;
    /**
     * Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request.
     */
    quasiIdsValues?: Schema$GooglePrivacyDlpV2Value[];
    /**
     * Estimated frequencies of top sensitive values.
     */
    topSensitiveValues?: Schema$GooglePrivacyDlpV2ValueFrequency[];
  }
  export interface Schema$GooglePrivacyDlpV2LDiversityHistogramBucket {
    /**
     * Total number of equivalence classes in this bucket.
     */
    bucketSize?: string | null;
    /**
     * Total number of distinct equivalence classes in this bucket.
     */
    bucketValueCount?: string | null;
    /**
     * Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
     */
    bucketValues?: Schema$GooglePrivacyDlpV2LDiversityEquivalenceClass[];
    /**
     * Lower bound on the sensitive value frequencies of the equivalence classes in this bucket.
     */
    sensitiveValueFrequencyLowerBound?: string | null;
    /**
     * Upper bound on the sensitive value frequencies of the equivalence classes in this bucket.
     */
    sensitiveValueFrequencyUpperBound?: string | null;
  }
  /**
   * Result of the l-diversity computation.
   */
  export interface Schema$GooglePrivacyDlpV2LDiversityResult {
    /**
     * Histogram of l-diversity equivalence class sensitive value frequencies.
     */
    sensitiveValueFrequencyHistogramBuckets?: Schema$GooglePrivacyDlpV2LDiversityHistogramBucket[];
  }
  /**
   * Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.
   */
  export interface Schema$GooglePrivacyDlpV2LikelihoodAdjustment {
    /**
     * Set the likelihood of a finding to a fixed value.
     */
    fixedLikelihood?: string | null;
    /**
     * Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`.
     */
    relativeLikelihood?: number | null;
  }
  /**
   * Response message for ListDeidentifyTemplates.
   */
  export interface Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse {
    /**
     * List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.
     */
    deidentifyTemplates?: Schema$GooglePrivacyDlpV2DeidentifyTemplate[];
    /**
     * If the next page is available then the next page token to be used in following ListDeidentifyTemplates request.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for listing DLP jobs.
   */
  export interface Schema$GooglePrivacyDlpV2ListDlpJobsResponse {
    /**
     * A list of DlpJobs that matches the specified filter in the request.
     */
    jobs?: Schema$GooglePrivacyDlpV2DlpJob[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request for the list of infoTypes.
   */
  export interface Schema$GooglePrivacyDlpV2ListInfoTypesRequest {
    /**
     * Optional filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
     */
    filter?: string | null;
    /**
     * Optional BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
     */
    languageCode?: string | null;
  }
  /**
   * Response to the ListInfoTypes request.
   */
  export interface Schema$GooglePrivacyDlpV2ListInfoTypesResponse {
    /**
     * Set of sensitive infoTypes.
     */
    infoTypes?: Schema$GooglePrivacyDlpV2InfoTypeDescription[];
  }
  /**
   * Response message for ListInspectTemplates.
   */
  export interface Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse {
    /**
     * List of inspectTemplates, up to page_size in ListInspectTemplatesRequest.
     */
    inspectTemplates?: Schema$GooglePrivacyDlpV2InspectTemplate[];
    /**
     * If the next page is available then the next page token to be used in following ListInspectTemplates request.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListJobTriggers.
   */
  export interface Schema$GooglePrivacyDlpV2ListJobTriggersResponse {
    /**
     * List of triggeredJobs, up to page_size in ListJobTriggersRequest.
     */
    jobTriggers?: Schema$GooglePrivacyDlpV2JobTrigger[];
    /**
     * If the next page is available then the next page token to be used in following ListJobTriggers request.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListStoredInfoTypes.
   */
  export interface Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse {
    /**
     * If the next page is available then the next page token to be used in following ListStoredInfoTypes request.
     */
    nextPageToken?: string | null;
    /**
     * List of storedInfoTypes, up to page_size in ListStoredInfoTypesRequest.
     */
    storedInfoTypes?: Schema$GooglePrivacyDlpV2StoredInfoType[];
  }
  /**
   * Specifies the location of the finding.
   */
  export interface Schema$GooglePrivacyDlpV2Location {
    /**
     * Zero-based byte offsets delimiting the finding. These are relative to the finding&#39;s containing element. Note that when the content is not textual, this references the UTF-8 encoded textual representation of the content. Omitted if content is an image.
     */
    byteRange?: Schema$GooglePrivacyDlpV2Range;
    /**
     * Unicode character offsets delimiting the finding. These are relative to the finding&#39;s containing element. Provided when the content is text.
     */
    codepointRange?: Schema$GooglePrivacyDlpV2Range;
    /**
     * List of nested objects pointing to the precise location of the finding within the file or record.
     */
    contentLocations?: Schema$GooglePrivacyDlpV2ContentLocation[];
  }
  /**
   * Compute numerical stats over an individual column, including min, max, and quantiles.
   */
  export interface Schema$GooglePrivacyDlpV2NumericalStatsConfig {
    /**
     * Field to compute numerical stats on. Supported types are integer, float, date, datetime, timestamp, time.
     */
    field?: Schema$GooglePrivacyDlpV2FieldId;
  }
  /**
   * Result of the numerical stats computation.
   */
  export interface Schema$GooglePrivacyDlpV2NumericalStatsResult {
    /**
     * Maximum value appearing in the column.
     */
    maxValue?: Schema$GooglePrivacyDlpV2Value;
    /**
     * Minimum value appearing in the column.
     */
    minValue?: Schema$GooglePrivacyDlpV2Value;
    /**
     * List of 99 values that partition the set of field values into 100 equal sized buckets.
     */
    quantileValues?: Schema$GooglePrivacyDlpV2Value[];
  }
  /**
   * Cloud repository for storing output.
   */
  export interface Schema$GooglePrivacyDlpV2OutputStorageConfig {
    /**
     * Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted.  If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema.
     */
    outputSchema?: string | null;
    /**
     * Store findings in an existing table or a new table in an existing dataset. If table_id is not set a new one will be generated for you with the following format: dlp_googleapis_yyyy_mm_dd_[dlp_job_id]. Pacific timezone will be used for generating the date details.  For Inspect, each column in an existing output table must have the same name, type, and mode of a field in the `Finding` object.  For Risk, an existing output table should be the output of a previous Risk analysis job run on the same source table, with the same privacy metric and quasi-identifiers. Risk jobs that analyze the same table but compute a different privacy metric, or use different sets of quasi-identifiers, cannot store their results in the same table.
     */
    table?: Schema$GooglePrivacyDlpV2BigQueryTable;
  }
  /**
   * Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty.  A partition ID contains several dimensions: project ID and namespace ID.
   */
  export interface Schema$GooglePrivacyDlpV2PartitionId {
    /**
     * If not empty, the ID of the namespace to which the entities belong.
     */
    namespaceId?: string | null;
    /**
     * The ID of the project to which the entities belong.
     */
    projectId?: string | null;
  }
  /**
   * A (kind, ID/name) pair used to construct a key path.  If either name or ID is set, the element is complete. If neither is set, the element is incomplete.
   */
  export interface Schema$GooglePrivacyDlpV2PathElement {
    /**
     * The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future.
     */
    id?: string | null;
    /**
     * The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `&quot;&quot;`.
     */
    kind?: string | null;
    /**
     * The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `&quot;&quot;`.
     */
    name?: string | null;
  }
  /**
   * A rule for transforming a value.
   */
  export interface Schema$GooglePrivacyDlpV2PrimitiveTransformation {
    bucketingConfig?: Schema$GooglePrivacyDlpV2BucketingConfig;
    characterMaskConfig?: Schema$GooglePrivacyDlpV2CharacterMaskConfig;
    cryptoDeterministicConfig?: Schema$GooglePrivacyDlpV2CryptoDeterministicConfig;
    cryptoHashConfig?: Schema$GooglePrivacyDlpV2CryptoHashConfig;
    cryptoReplaceFfxFpeConfig?: Schema$GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;
    dateShiftConfig?: Schema$GooglePrivacyDlpV2DateShiftConfig;
    fixedSizeBucketingConfig?: Schema$GooglePrivacyDlpV2FixedSizeBucketingConfig;
    redactConfig?: Schema$GooglePrivacyDlpV2RedactConfig;
    replaceConfig?: Schema$GooglePrivacyDlpV2ReplaceValueConfig;
    replaceWithInfoTypeConfig?: Schema$GooglePrivacyDlpV2ReplaceWithInfoTypeConfig;
    timePartConfig?: Schema$GooglePrivacyDlpV2TimePartConfig;
  }
  /**
   * Privacy metric to compute for reidentification risk analysis.
   */
  export interface Schema$GooglePrivacyDlpV2PrivacyMetric {
    categoricalStatsConfig?: Schema$GooglePrivacyDlpV2CategoricalStatsConfig;
    deltaPresenceEstimationConfig?: Schema$GooglePrivacyDlpV2DeltaPresenceEstimationConfig;
    kAnonymityConfig?: Schema$GooglePrivacyDlpV2KAnonymityConfig;
    kMapEstimationConfig?: Schema$GooglePrivacyDlpV2KMapEstimationConfig;
    lDiversityConfig?: Schema$GooglePrivacyDlpV2LDiversityConfig;
    numericalStatsConfig?: Schema$GooglePrivacyDlpV2NumericalStatsConfig;
  }
  /**
   * Message for specifying a window around a finding to apply a detection rule.
   */
  export interface Schema$GooglePrivacyDlpV2Proximity {
    /**
     * Number of characters after the finding to consider.
     */
    windowAfter?: number | null;
    /**
     * Number of characters before the finding to consider.
     */
    windowBefore?: number | null;
  }
  /**
   * Publish findings of a DlpJob to Cloud Data Catalog. Labels summarizing the results of the DlpJob will be applied to the entry for the resource scanned in Cloud Data Catalog. Any labels previously written by another DlpJob will be deleted. InfoType naming patterns are strictly enforced when using this feature. Note that the findings will be persisted in Cloud Data Catalog storage and are governed by Data Catalog service-specific policy, see https://cloud.google.com/terms/service-terms Only a single instance of this action can be specified and only allowed if all resources being scanned are BigQuery tables. Compatible with: Inspect
   */
  export interface Schema$GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog {}
  /**
   * Publish the result summary of a DlpJob to the Cloud Security Command Center (CSCC Alpha). This action is only available for projects which are parts of an organization and whitelisted for the alpha Cloud Security Command Center. The action will publish count of finding instances and their info types. The summary of findings will be persisted in CSCC and are governed by CSCC service-specific policy, see https://cloud.google.com/terms/service-terms Only a single instance of this action can be specified. Compatible with: Inspect
   */
  export interface Schema$GooglePrivacyDlpV2PublishSummaryToCscc {}
  /**
   * Publish a message into given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job&#39;s [`DlpJob.name`](/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk
   */
  export interface Schema$GooglePrivacyDlpV2PublishToPubSub {
    /**
     * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
     */
    topic?: string | null;
  }
  /**
   * A column with a semantic tag attached.
   */
  export interface Schema$GooglePrivacyDlpV2QuasiId {
    /**
     * A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).
     */
    customTag?: string | null;
    /**
     * Identifies the column. [required]
     */
    field?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data
     */
    inferred?: Schema$GoogleProtobufEmpty;
    /**
     * A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders. To programmatically obtain the list of supported InfoTypes, use ListInfoTypes with the supported_by=RISK_ANALYSIS filter.
     */
    infoType?: Schema$GooglePrivacyDlpV2InfoType;
  }
  /**
   * A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
   */
  export interface Schema$GooglePrivacyDlpV2QuasiIdentifierField {
    customTag?: string | null;
    field?: Schema$GooglePrivacyDlpV2FieldId;
  }
  /**
   * A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
   */
  export interface Schema$GooglePrivacyDlpV2QuasiIdField {
    customTag?: string | null;
    field?: Schema$GooglePrivacyDlpV2FieldId;
  }
  /**
   * Message for infoType-dependent details parsed from quote.
   */
  export interface Schema$GooglePrivacyDlpV2QuoteInfo {
    /**
     * The date time indicated by the quote.
     */
    dateTime?: Schema$GooglePrivacyDlpV2DateTime;
  }
  /**
   * Generic half-open interval [start, end)
   */
  export interface Schema$GooglePrivacyDlpV2Range {
    /**
     * Index of the last character of the range (exclusive).
     */
    end?: string | null;
    /**
     * Index of the first character of the range (inclusive).
     */
    start?: string | null;
  }
  /**
   * A condition for determining whether a transformation should be applied to a field.
   */
  export interface Schema$GooglePrivacyDlpV2RecordCondition {
    /**
     * An expression.
     */
    expressions?: Schema$GooglePrivacyDlpV2Expressions;
  }
  /**
   * Message for a unique key indicating a record that contains a finding.
   */
  export interface Schema$GooglePrivacyDlpV2RecordKey {
    bigQueryKey?: Schema$GooglePrivacyDlpV2BigQueryKey;
    datastoreKey?: Schema$GooglePrivacyDlpV2DatastoreKey;
    /**
     * Values of identifying columns in the given row. Order of values matches the order of field identifiers specified in the scanning request.
     */
    idValues?: string[] | null;
  }
  /**
   * Location of a finding within a row or record.
   */
  export interface Schema$GooglePrivacyDlpV2RecordLocation {
    /**
     * Field id of the field containing the finding.
     */
    fieldId?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * Key of the finding.
     */
    recordKey?: Schema$GooglePrivacyDlpV2RecordKey;
    /**
     * Location within a `ContentItem.Table`.
     */
    tableLocation?: Schema$GooglePrivacyDlpV2TableLocation;
  }
  /**
   * Configuration to suppress records whose suppression conditions evaluate to true.
   */
  export interface Schema$GooglePrivacyDlpV2RecordSuppression {
    /**
     * A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content.
     */
    condition?: Schema$GooglePrivacyDlpV2RecordCondition;
  }
  /**
   * A type of transformation that is applied over structured data such as a table.
   */
  export interface Schema$GooglePrivacyDlpV2RecordTransformations {
    /**
     * Transform the record by applying various field transformations.
     */
    fieldTransformations?: Schema$GooglePrivacyDlpV2FieldTransformation[];
    /**
     * Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output [optional].
     */
    recordSuppressions?: Schema$GooglePrivacyDlpV2RecordSuppression[];
  }
  /**
   * Redact a given value. For example, if used with an `InfoTypeTransformation` transforming PHONE_NUMBER, and input &#39;My phone number is 206-555-0123&#39;, the output would be &#39;My phone number is &#39;.
   */
  export interface Schema$GooglePrivacyDlpV2RedactConfig {}
  /**
   * Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
   */
  export interface Schema$GooglePrivacyDlpV2RedactImageRequest {
    /**
     * The content must be PNG, JPEG, SVG or BMP.
     */
    byteItem?: Schema$GooglePrivacyDlpV2ByteContentItem;
    /**
     * The configuration for specifying what content to redact from images.
     */
    imageRedactionConfigs?: Schema$GooglePrivacyDlpV2ImageRedactionConfig[];
    /**
     * Whether the response should include findings along with the redacted image.
     */
    includeFindings?: boolean | null;
    /**
     * Configuration for the inspector.
     */
    inspectConfig?: Schema$GooglePrivacyDlpV2InspectConfig;
  }
  /**
   * Results of redacting an image.
   */
  export interface Schema$GooglePrivacyDlpV2RedactImageResponse {
    /**
     * If an image was being inspected and the InspectConfig&#39;s include_quote was set to true, then this field will include all text, if any, that was found in the image.
     */
    extractedText?: string | null;
    /**
     * The findings. Populated when include_findings in the request is true.
     */
    inspectResult?: Schema$GooglePrivacyDlpV2InspectResult;
    /**
     * The redacted image. The type will be the same as the original image.
     */
    redactedImage?: string | null;
  }
  /**
   * Message defining a custom regular expression.
   */
  export interface Schema$GooglePrivacyDlpV2Regex {
    /**
     * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
     */
    groupIndexes?: number[] | null;
    /**
     * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
     */
    pattern?: string | null;
  }
  /**
   * Request to re-identify an item.
   */
  export interface Schema$GooglePrivacyDlpV2ReidentifyContentRequest {
    /**
     * Configuration for the inspector.
     */
    inspectConfig?: Schema$GooglePrivacyDlpV2InspectConfig;
    /**
     * Optional template to use. Any configuration directly specified in `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
     */
    inspectTemplateName?: string | null;
    /**
     * The item to re-identify. Will be treated as text.
     */
    item?: Schema$GooglePrivacyDlpV2ContentItem;
    /**
     * The geographic location to process content reidentification.  Reserved for future extensions.
     */
    location?: string | null;
    /**
     * Configuration for the re-identification of the content item. This field shares the same proto message type that is used for de-identification, however its usage here is for the reversal of the previous de-identification. Re-identification is performed by examining the transformations used to de-identify the items and executing the reverse. This requires that only reversible transformations be provided here. The reversible transformations are:   - `CryptoReplaceFfxFpeConfig`
     */
    reidentifyConfig?: Schema$GooglePrivacyDlpV2DeidentifyConfig;
    /**
     * Optional template to use. References an instance of `DeidentifyTemplate`. Any configuration directly specified in `reidentify_config` or `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
     */
    reidentifyTemplateName?: string | null;
  }
  /**
   * Results of re-identifying a item.
   */
  export interface Schema$GooglePrivacyDlpV2ReidentifyContentResponse {
    /**
     * The re-identified item.
     */
    item?: Schema$GooglePrivacyDlpV2ContentItem;
    /**
     * An overview of the changes that were made to the `item`.
     */
    overview?: Schema$GooglePrivacyDlpV2TransformationOverview;
  }
  /**
   * Replace each input value with a given `Value`.
   */
  export interface Schema$GooglePrivacyDlpV2ReplaceValueConfig {
    /**
     * Value to replace it with.
     */
    newValue?: Schema$GooglePrivacyDlpV2Value;
  }
  /**
   * Replace each matching finding with the name of the info_type.
   */
  export interface Schema$GooglePrivacyDlpV2ReplaceWithInfoTypeConfig {}
  export interface Schema$GooglePrivacyDlpV2RequestedOptions {
    jobConfig?: Schema$GooglePrivacyDlpV2InspectJobConfig;
    /**
     * If run with an InspectTemplate, a snapshot of its state at the time of this run.
     */
    snapshotInspectTemplate?: Schema$GooglePrivacyDlpV2InspectTemplate;
  }
  /**
   * All result fields mentioned below are updated while the job is processing.
   */
  export interface Schema$GooglePrivacyDlpV2Result {
    /**
     * Statistics of how many instances of each info type were found during inspect job.
     */
    infoTypeStats?: Schema$GooglePrivacyDlpV2InfoTypeStats[];
    /**
     * Total size in bytes that were processed.
     */
    processedBytes?: string | null;
    /**
     * Estimate of the number of bytes to process.
     */
    totalEstimatedBytes?: string | null;
  }
  /**
   * Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2RiskAnalysisJobConfig {
    /**
     * Actions to execute at the completion of the job. Are executed in the order provided.
     */
    actions?: Schema$GooglePrivacyDlpV2Action[];
    /**
     * Privacy metric to compute.
     */
    privacyMetric?: Schema$GooglePrivacyDlpV2PrivacyMetric;
    /**
     * Input dataset to compute metrics over.
     */
    sourceTable?: Schema$GooglePrivacyDlpV2BigQueryTable;
  }
  export interface Schema$GooglePrivacyDlpV2Row {
    values?: Schema$GooglePrivacyDlpV2Value[];
  }
  /**
   * If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
   */
  export interface Schema$GooglePrivacyDlpV2SaveFindings {
    outputConfig?: Schema$GooglePrivacyDlpV2OutputStorageConfig;
  }
  /**
   * Schedule for triggeredJobs.
   */
  export interface Schema$GooglePrivacyDlpV2Schedule {
    /**
     * With this option a job is started a regular periodic basis. For example: every day (86400 seconds).  A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.  This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.
     */
    recurrencePeriodDuration?: string | null;
  }
  /**
   * An auxiliary table containing statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
   */
  export interface Schema$GooglePrivacyDlpV2StatisticalTable {
    /**
     * Quasi-identifier columns. [required]
     */
    quasiIds?: Schema$GooglePrivacyDlpV2QuasiIdentifierField[];
    /**
     * The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero. [required]
     */
    relativeFrequency?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * Auxiliary table location. [required]
     */
    table?: Schema$GooglePrivacyDlpV2BigQueryTable;
  }
  /**
   * Shared message indicating Cloud storage type.
   */
  export interface Schema$GooglePrivacyDlpV2StorageConfig {
    /**
     * BigQuery options specification.
     */
    bigQueryOptions?: Schema$GooglePrivacyDlpV2BigQueryOptions;
    /**
     * Google Cloud Storage options specification.
     */
    cloudStorageOptions?: Schema$GooglePrivacyDlpV2CloudStorageOptions;
    /**
     * Google Cloud Datastore options specification.
     */
    datastoreOptions?: Schema$GooglePrivacyDlpV2DatastoreOptions;
    timespanConfig?: Schema$GooglePrivacyDlpV2TimespanConfig;
  }
  /**
   * StoredInfoType resource message that contains information about the current version and any pending updates.
   */
  export interface Schema$GooglePrivacyDlpV2StoredInfoType {
    /**
     * Current version of the stored info type.
     */
    currentVersion?: Schema$GooglePrivacyDlpV2StoredInfoTypeVersion;
    /**
     * Resource name.
     */
    name?: string | null;
    /**
     * Pending versions of the stored info type. Empty if no versions are pending.
     */
    pendingVersions?: Schema$GooglePrivacyDlpV2StoredInfoTypeVersion[];
  }
  /**
   * Configuration for a StoredInfoType.
   */
  export interface Schema$GooglePrivacyDlpV2StoredInfoTypeConfig {
    /**
     * Description of the StoredInfoType (max 256 characters).
     */
    description?: string | null;
    /**
     * Display name of the StoredInfoType (max 256 characters).
     */
    displayName?: string | null;
    /**
     * StoredInfoType where findings are defined by a dictionary of phrases.
     */
    largeCustomDictionary?: Schema$GooglePrivacyDlpV2LargeCustomDictionaryConfig;
  }
  /**
   * Statistics for a StoredInfoType.
   */
  export interface Schema$GooglePrivacyDlpV2StoredInfoTypeStats {
    /**
     * StoredInfoType where findings are defined by a dictionary of phrases.
     */
    largeCustomDictionary?: Schema$GooglePrivacyDlpV2LargeCustomDictionaryStats;
  }
  /**
   * Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
   */
  export interface Schema$GooglePrivacyDlpV2StoredInfoTypeVersion {
    /**
     * StoredInfoType configuration.
     */
    config?: Schema$GooglePrivacyDlpV2StoredInfoTypeConfig;
    /**
     * Create timestamp of the version. Read-only, determined by the system when the version is created.
     */
    createTime?: string | null;
    /**
     * Errors that occurred when creating this storedInfoType version, or anomalies detected in the storedInfoType data that render it unusable. Only the five most recent errors will be displayed, with the most recent error appearing first. &lt;p&gt;For example, some of the data for stored custom dictionaries is put in the user&#39;s Google Cloud Storage bucket, and if this data is modified or deleted by the user or another system, the dictionary becomes invalid. &lt;p&gt;If any errors occur, fix the problem indicated by the error message and use the UpdateStoredInfoType API method to create another version of the storedInfoType to continue using it, reusing the same `config` if it was not the source of the error.
     */
    errors?: Schema$GooglePrivacyDlpV2Error[];
    /**
     * Stored info type version state. Read-only, updated by the system during dictionary creation.
     */
    state?: string | null;
    /**
     * Statistics about this storedInfoType version.
     */
    stats?: Schema$GooglePrivacyDlpV2StoredInfoTypeStats;
  }
  /**
   * A reference to a StoredInfoType to use with scanning.
   */
  export interface Schema$GooglePrivacyDlpV2StoredType {
    /**
     * Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system.
     */
    createTime?: string | null;
    /**
     * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
     */
    name?: string | null;
  }
  /**
   * A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
   */
  export interface Schema$GooglePrivacyDlpV2SummaryResult {
    code?: string | null;
    count?: string | null;
    /**
     * A place for warnings or errors to show up if a transformation didn&#39;t work as expected.
     */
    details?: string | null;
  }
  /**
   * Message for detecting output from deidentification transformations such as [`CryptoReplaceFfxFpeConfig`](/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig). These types of transformations are those that perform pseudonymization, thereby producing a &quot;surrogate&quot; as output. This should be used in conjunction with a field on the transformation such as `surrogate_info_type`. This CustomInfoType does not support the use of `detection_rules`.
   */
  export interface Schema$GooglePrivacyDlpV2SurrogateType {}
  /**
   * Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-text#inspecting_a_table to learn more.
   */
  export interface Schema$GooglePrivacyDlpV2Table {
    headers?: Schema$GooglePrivacyDlpV2FieldId[];
    rows?: Schema$GooglePrivacyDlpV2Row[];
  }
  /**
   * Location of a finding within a table.
   */
  export interface Schema$GooglePrivacyDlpV2TableLocation {
    /**
     * The zero-based index of the row where the finding is located.
     */
    rowIndex?: string | null;
  }
  export interface Schema$GooglePrivacyDlpV2TaggedField {
    /**
     * A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).
     */
    customTag?: string | null;
    /**
     * Identifies the column. [required]
     */
    field?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data
     */
    inferred?: Schema$GoogleProtobufEmpty;
    /**
     * A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders. To programmatically obtain the list of supported InfoTypes, use ListInfoTypes with the supported_by=RISK_ANALYSIS filter.
     */
    infoType?: Schema$GooglePrivacyDlpV2InfoType;
  }
  /**
   * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value.
   */
  export interface Schema$GooglePrivacyDlpV2TimePartConfig {
    partToExtract?: string | null;
  }
  /**
   * Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Google Cloud Storage and BigQuery.
   */
  export interface Schema$GooglePrivacyDlpV2TimespanConfig {
    /**
     * When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger.
     */
    enableAutoPopulationOfTimespanConfig?: boolean | null;
    /**
     * Exclude files or rows newer than this value. If set to zero, no upper time limit is applied.
     */
    endTime?: string | null;
    /**
     * Exclude files or rows older than this value.
     */
    startTime?: string | null;
    /**
     * Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore or BigQuery. If not specified for BigQuery, table last modification timestamp is checked against given time span. The valid data types of the timestamp field are: for BigQuery - timestamp, date, datetime; for Datastore - timestamp. Datastore entity will be scanned if the timestamp property does not exist or its value is empty or invalid.
     */
    timestampField?: Schema$GooglePrivacyDlpV2FieldId;
  }
  export interface Schema$GooglePrivacyDlpV2TimeZone {
    /**
     * Set only if the offset can be determined. Positive for time ahead of UTC. E.g. For &quot;UTC-9&quot;, this value is -540.
     */
    offsetMinutes?: number | null;
  }
  /**
   * Overview of the modifications that occurred.
   */
  export interface Schema$GooglePrivacyDlpV2TransformationOverview {
    /**
     * Transformations applied to the dataset.
     */
    transformationSummaries?: Schema$GooglePrivacyDlpV2TransformationSummary[];
    /**
     * Total size in bytes that were transformed in some way.
     */
    transformedBytes?: string | null;
  }
  /**
   * Summary of a single transformation. Only one of &#39;transformation&#39;, &#39;field_transformation&#39;, or &#39;record_suppress&#39; will be set.
   */
  export interface Schema$GooglePrivacyDlpV2TransformationSummary {
    /**
     * Set if the transformation was limited to a specific FieldId.
     */
    field?: Schema$GooglePrivacyDlpV2FieldId;
    /**
     * The field transformation that was applied. If multiple field transformations are requested for a single field, this list will contain all of them; otherwise, only one is supplied.
     */
    fieldTransformations?: Schema$GooglePrivacyDlpV2FieldTransformation[];
    /**
     * Set if the transformation was limited to a specific InfoType.
     */
    infoType?: Schema$GooglePrivacyDlpV2InfoType;
    /**
     * The specific suppression option these stats apply to.
     */
    recordSuppress?: Schema$GooglePrivacyDlpV2RecordSuppression;
    results?: Schema$GooglePrivacyDlpV2SummaryResult[];
    /**
     * The specific transformation these stats apply to.
     */
    transformation?: Schema$GooglePrivacyDlpV2PrimitiveTransformation;
    /**
     * Total size in bytes that were transformed in some way.
     */
    transformedBytes?: string | null;
  }
  /**
   * Use this to have a random data crypto key generated. It will be discarded after the request finishes.
   */
  export interface Schema$GooglePrivacyDlpV2TransientCryptoKey {
    /**
     * Name of the key. [required] This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
     */
    name?: string | null;
  }
  /**
   * What event needs to occur for a new job to be started.
   */
  export interface Schema$GooglePrivacyDlpV2Trigger {
    /**
     * Create a job on a repeating basis based on the elapse of time.
     */
    schedule?: Schema$GooglePrivacyDlpV2Schedule;
  }
  /**
   * Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
   */
  export interface Schema$GooglePrivacyDlpV2UnwrappedCryptoKey {
    /**
     * A 128/192/256 bit key. [required]
     */
    key?: string | null;
  }
  /**
   * Request message for UpdateDeidentifyTemplate.
   */
  export interface Schema$GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest {
    /**
     * New DeidentifyTemplate value.
     */
    deidentifyTemplate?: Schema$GooglePrivacyDlpV2DeidentifyTemplate;
    /**
     * Mask to control which fields get updated.
     */
    updateMask?: string | null;
  }
  /**
   * Request message for UpdateInspectTemplate.
   */
  export interface Schema$GooglePrivacyDlpV2UpdateInspectTemplateRequest {
    /**
     * New InspectTemplate value.
     */
    inspectTemplate?: Schema$GooglePrivacyDlpV2InspectTemplate;
    /**
     * Mask to control which fields get updated.
     */
    updateMask?: string | null;
  }
  /**
   * Request message for UpdateJobTrigger.
   */
  export interface Schema$GooglePrivacyDlpV2UpdateJobTriggerRequest {
    /**
     * New JobTrigger value.
     */
    jobTrigger?: Schema$GooglePrivacyDlpV2JobTrigger;
    /**
     * Mask to control which fields get updated.
     */
    updateMask?: string | null;
  }
  /**
   * Request message for UpdateStoredInfoType.
   */
  export interface Schema$GooglePrivacyDlpV2UpdateStoredInfoTypeRequest {
    /**
     * Updated configuration for the storedInfoType. If not provided, a new version of the storedInfoType will be created with the existing configuration.
     */
    config?: Schema$GooglePrivacyDlpV2StoredInfoTypeConfig;
    /**
     * Mask to control which fields get updated.
     */
    updateMask?: string | null;
  }
  /**
   * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a &#39;Value&#39; is based on its representation as a UTF-8 encoded string. For example, if &#39;integer_value&#39; is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
   */
  export interface Schema$GooglePrivacyDlpV2Value {
    booleanValue?: boolean | null;
    dateValue?: Schema$GoogleTypeDate;
    dayOfWeekValue?: string | null;
    floatValue?: number | null;
    integerValue?: string | null;
    stringValue?: string | null;
    timestampValue?: string | null;
    timeValue?: Schema$GoogleTypeTimeOfDay;
  }
  /**
   * A value of a field, including its frequency.
   */
  export interface Schema$GooglePrivacyDlpV2ValueFrequency {
    /**
     * How many times the value is contained in the field.
     */
    count?: string | null;
    /**
     * A value contained in the field in question.
     */
    value?: Schema$GooglePrivacyDlpV2Value;
  }
  /**
   * Message defining a list of words or phrases to search for in the data.
   */
  export interface Schema$GooglePrivacyDlpV2WordList {
    /**
     * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
     */
    words?: string[] | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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
   * Represents a whole or partial calendar date, e.g. a birthday. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. This can represent:  * A full date, with non-zero year, month and day values * A month and day value, with a zero year, e.g. an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, e.g. a credit card expiration date  Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$GoogleTypeDate {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant.
     */
    day?: number | null;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
     */
    year?: number | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$GoogleTypeTimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value &quot;24:00:00&quot; for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }

  export class Resource$Infotypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.infoTypes.list
     * @desc Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.
     * @alias dlp.infoTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
     * @param {string=} params.languageCode Optional BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
     * @param {string=} params.location The geographic location to list info types. Reserved for future extensions.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Infotypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>;
    list(
      params: Params$Resource$Infotypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInfoTypesResponse
      >
    ): void;
    list(
      params: Params$Resource$Infotypes$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInfoTypesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInfoTypesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Infotypes$List
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInfoTypesResponse
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2ListInfoTypesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Infotypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Infotypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/infoTypes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Infotypes$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
     */
    filter?: string;
    /**
     * Optional BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
     */
    languageCode?: string;
    /**
     * The geographic location to list info types. Reserved for future extensions.
     */
    location?: string;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.locations.infoTypes
     * @desc Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.
     * @alias dlp.locations.infoTypes
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.location The geographic location to list info types. Reserved for future extensions.
     * @param {().GooglePrivacyDlpV2ListInfoTypesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    infoTypes(
      params?: Params$Resource$Locations$Infotypes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>;
    infoTypes(
      params: Params$Resource$Locations$Infotypes,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInfoTypesResponse
      >
    ): void;
    infoTypes(
      params: Params$Resource$Locations$Infotypes,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInfoTypesResponse
      >
    ): void;
    infoTypes(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInfoTypesResponse
      >
    ): void;
    infoTypes(
      paramsOrCallback?:
        | Params$Resource$Locations$Infotypes
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInfoTypesResponse
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2ListInfoTypesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Infotypes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Infotypes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/locations/{location}/infoTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2ListInfoTypesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Locations$Infotypes
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The geographic location to list info types. Reserved for future extensions.
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2ListInfoTypesRequest;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    deidentifyTemplates: Resource$Organizations$Deidentifytemplates;
    inspectTemplates: Resource$Organizations$Inspecttemplates;
    storedInfoTypes: Resource$Organizations$Storedinfotypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deidentifyTemplates = new Resource$Organizations$Deidentifytemplates(
        this.context
      );
      this.inspectTemplates = new Resource$Organizations$Inspecttemplates(
        this.context
      );
      this.storedInfoTypes = new Resource$Organizations$Storedinfotypes(
        this.context
      );
    }
  }

  export class Resource$Organizations$Deidentifytemplates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.organizations.deidentifyTemplates.create
     * @desc Creates a DeidentifyTemplate for re-using frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.organizations.deidentifyTemplates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {().GooglePrivacyDlpV2CreateDeidentifyTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Organizations$Deidentifytemplates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate>;
    create(
      params: Params$Resource$Organizations$Deidentifytemplates$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    create(
      params: Params$Resource$Organizations$Deidentifytemplates$Create,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Deidentifytemplates$Create
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Deidentifytemplates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Deidentifytemplates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/deidentifyTemplates').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters
        );
      }
    }

    /**
     * dlp.organizations.deidentifyTemplates.delete
     * @desc Deletes a DeidentifyTemplate. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.organizations.deidentifyTemplates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Organizations$Deidentifytemplates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Organizations$Deidentifytemplates$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Deidentifytemplates$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Deidentifytemplates$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Deidentifytemplates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Deidentifytemplates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.organizations.deidentifyTemplates.get
     * @desc Gets a DeidentifyTemplate. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.organizations.deidentifyTemplates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Deidentifytemplates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate>;
    get(
      params: Params$Resource$Organizations$Deidentifytemplates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    get(
      params: Params$Resource$Organizations$Deidentifytemplates$Get,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Deidentifytemplates$Get
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Deidentifytemplates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Deidentifytemplates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters
        );
      }
    }

    /**
     * dlp.organizations.deidentifyTemplates.list
     * @desc Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.organizations.deidentifyTemplates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.orderBy Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
     * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Deidentifytemplates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse>;
    list(
      params: Params$Resource$Organizations$Deidentifytemplates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
      >
    ): void;
    list(
      params: Params$Resource$Organizations$Deidentifytemplates$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Deidentifytemplates$List
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Deidentifytemplates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Deidentifytemplates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/deidentifyTemplates').replace(
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
        createAPIRequest<
          Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
        >(parameters);
      }
    }

    /**
     * dlp.organizations.deidentifyTemplates.patch
     * @desc Updates the DeidentifyTemplate. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.organizations.deidentifyTemplates.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {().GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Organizations$Deidentifytemplates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate>;
    patch(
      params: Params$Resource$Organizations$Deidentifytemplates$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    patch(
      params: Params$Resource$Organizations$Deidentifytemplates$Patch,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Deidentifytemplates$Patch
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Deidentifytemplates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Deidentifytemplates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Deidentifytemplates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CreateDeidentifyTemplateRequest;
  }
  export interface Params$Resource$Organizations$Deidentifytemplates$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Deidentifytemplates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Deidentifytemplates$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
     */
    orderBy?: string;
    /**
     * Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     */
    pageSize?: number;
    /**
     * Optional page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Deidentifytemplates$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest;
  }

  export class Resource$Organizations$Inspecttemplates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.organizations.inspectTemplates.create
     * @desc Creates an InspectTemplate for re-using frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.organizations.inspectTemplates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {().GooglePrivacyDlpV2CreateInspectTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Organizations$Inspecttemplates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate>;
    create(
      params: Params$Resource$Organizations$Inspecttemplates$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    create(
      params: Params$Resource$Organizations$Inspecttemplates$Create,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Inspecttemplates$Create
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Inspecttemplates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Inspecttemplates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/inspectTemplates').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters
        );
      }
    }

    /**
     * dlp.organizations.inspectTemplates.delete
     * @desc Deletes an InspectTemplate. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.organizations.inspectTemplates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Organizations$Inspecttemplates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Organizations$Inspecttemplates$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Inspecttemplates$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Inspecttemplates$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Inspecttemplates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Inspecttemplates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.organizations.inspectTemplates.get
     * @desc Gets an InspectTemplate. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.organizations.inspectTemplates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Inspecttemplates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate>;
    get(
      params: Params$Resource$Organizations$Inspecttemplates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    get(
      params: Params$Resource$Organizations$Inspecttemplates$Get,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Inspecttemplates$Get
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Inspecttemplates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Inspecttemplates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters
        );
      }
    }

    /**
     * dlp.organizations.inspectTemplates.list
     * @desc Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.organizations.inspectTemplates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.orderBy Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
     * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Inspecttemplates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse>;
    list(
      params: Params$Resource$Organizations$Inspecttemplates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
      >
    ): void;
    list(
      params: Params$Resource$Organizations$Inspecttemplates$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Inspecttemplates$List
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Inspecttemplates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Inspecttemplates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/inspectTemplates').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
        >(parameters);
      }
    }

    /**
     * dlp.organizations.inspectTemplates.patch
     * @desc Updates the InspectTemplate. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.organizations.inspectTemplates.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {().GooglePrivacyDlpV2UpdateInspectTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Organizations$Inspecttemplates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate>;
    patch(
      params: Params$Resource$Organizations$Inspecttemplates$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    patch(
      params: Params$Resource$Organizations$Inspecttemplates$Patch,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Inspecttemplates$Patch
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Inspecttemplates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Inspecttemplates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Inspecttemplates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CreateInspectTemplateRequest;
  }
  export interface Params$Resource$Organizations$Inspecttemplates$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Inspecttemplates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Inspecttemplates$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
     */
    orderBy?: string;
    /**
     * Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     */
    pageSize?: number;
    /**
     * Optional page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Inspecttemplates$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2UpdateInspectTemplateRequest;
  }

  export class Resource$Organizations$Storedinfotypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.organizations.storedInfoTypes.create
     * @desc Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.organizations.storedInfoTypes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {().GooglePrivacyDlpV2CreateStoredInfoTypeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Organizations$Storedinfotypes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType>;
    create(
      params: Params$Resource$Organizations$Storedinfotypes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    create(
      params: Params$Resource$Organizations$Storedinfotypes$Create,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Storedinfotypes$Create
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Storedinfotypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Storedinfotypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/storedInfoTypes').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters
        );
      }
    }

    /**
     * dlp.organizations.storedInfoTypes.delete
     * @desc Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.organizations.storedInfoTypes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Organizations$Storedinfotypes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Organizations$Storedinfotypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Storedinfotypes$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Storedinfotypes$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Storedinfotypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Storedinfotypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.organizations.storedInfoTypes.get
     * @desc Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.organizations.storedInfoTypes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Storedinfotypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType>;
    get(
      params: Params$Resource$Organizations$Storedinfotypes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    get(
      params: Params$Resource$Organizations$Storedinfotypes$Get,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Storedinfotypes$Get
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Storedinfotypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Storedinfotypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters
        );
      }
    }

    /**
     * dlp.organizations.storedInfoTypes.list
     * @desc Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.organizations.storedInfoTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.orderBy Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc, display_name, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
     * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListStoredInfoTypes`.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Storedinfotypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse>;
    list(
      params: Params$Resource$Organizations$Storedinfotypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
      >
    ): void;
    list(
      params: Params$Resource$Organizations$Storedinfotypes$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Storedinfotypes$List
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Storedinfotypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Storedinfotypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/storedInfoTypes').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
        >(parameters);
      }
    }

    /**
     * dlp.organizations.storedInfoTypes.patch
     * @desc Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.organizations.storedInfoTypes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {().GooglePrivacyDlpV2UpdateStoredInfoTypeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Organizations$Storedinfotypes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType>;
    patch(
      params: Params$Resource$Organizations$Storedinfotypes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    patch(
      params: Params$Resource$Organizations$Storedinfotypes$Patch,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Storedinfotypes$Patch
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Storedinfotypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Storedinfotypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Storedinfotypes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CreateStoredInfoTypeRequest;
  }
  export interface Params$Resource$Organizations$Storedinfotypes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Storedinfotypes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Storedinfotypes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc, display_name, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
     */
    orderBy?: string;
    /**
     * Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     */
    pageSize?: number;
    /**
     * Optional page token to continue retrieval. Comes from previous call to `ListStoredInfoTypes`.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Storedinfotypes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2UpdateStoredInfoTypeRequest;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    content: Resource$Projects$Content;
    deidentifyTemplates: Resource$Projects$Deidentifytemplates;
    dlpJobs: Resource$Projects$Dlpjobs;
    image: Resource$Projects$Image;
    inspectTemplates: Resource$Projects$Inspecttemplates;
    jobTriggers: Resource$Projects$Jobtriggers;
    locations: Resource$Projects$Locations;
    storedInfoTypes: Resource$Projects$Storedinfotypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.content = new Resource$Projects$Content(this.context);
      this.deidentifyTemplates = new Resource$Projects$Deidentifytemplates(
        this.context
      );
      this.dlpJobs = new Resource$Projects$Dlpjobs(this.context);
      this.image = new Resource$Projects$Image(this.context);
      this.inspectTemplates = new Resource$Projects$Inspecttemplates(
        this.context
      );
      this.jobTriggers = new Resource$Projects$Jobtriggers(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.storedInfoTypes = new Resource$Projects$Storedinfotypes(
        this.context
      );
    }
  }

  export class Resource$Projects$Content {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.projects.content.deidentify
     * @desc De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more.  When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
     * @alias dlp.projects.content.deidentify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id.
     * @param {().GooglePrivacyDlpV2DeidentifyContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deidentify(
      params?: Params$Resource$Projects$Content$Deidentify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyContentResponse>;
    deidentify(
      params: Params$Resource$Projects$Content$Deidentify,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2DeidentifyContentResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyContentResponse
      >
    ): void;
    deidentify(
      params: Params$Resource$Projects$Content$Deidentify,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyContentResponse
      >
    ): void;
    deidentify(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyContentResponse
      >
    ): void;
    deidentify(
      paramsOrCallback?:
        | Params$Resource$Projects$Content$Deidentify
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2DeidentifyContentResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2DeidentifyContentResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyContentResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2DeidentifyContentResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Content$Deidentify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Content$Deidentify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/content:deidentify').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyContentResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2DeidentifyContentResponse
        >(parameters);
      }
    }

    /**
     * dlp.projects.content.inspect
     * @desc Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size.  When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.  For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
     * @alias dlp.projects.content.inspect
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id.
     * @param {().GooglePrivacyDlpV2InspectContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    inspect(
      params?: Params$Resource$Projects$Content$Inspect,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2InspectContentResponse>;
    inspect(
      params: Params$Resource$Projects$Content$Inspect,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectContentResponse>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2InspectContentResponse
      >
    ): void;
    inspect(
      params: Params$Resource$Projects$Content$Inspect,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2InspectContentResponse
      >
    ): void;
    inspect(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2InspectContentResponse
      >
    ): void;
    inspect(
      paramsOrCallback?:
        | Params$Resource$Projects$Content$Inspect
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectContentResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectContentResponse>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2InspectContentResponse
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2InspectContentResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Content$Inspect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Content$Inspect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/content:inspect').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2InspectContentResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2InspectContentResponse
        >(parameters);
      }
    }

    /**
     * dlp.projects.content.reidentify
     * @desc Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
     * @alias dlp.projects.content.reidentify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name.
     * @param {().GooglePrivacyDlpV2ReidentifyContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reidentify(
      params?: Params$Resource$Projects$Content$Reidentify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ReidentifyContentResponse>;
    reidentify(
      params: Params$Resource$Projects$Content$Reidentify,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ReidentifyContentResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ReidentifyContentResponse
      >
    ): void;
    reidentify(
      params: Params$Resource$Projects$Content$Reidentify,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ReidentifyContentResponse
      >
    ): void;
    reidentify(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ReidentifyContentResponse
      >
    ): void;
    reidentify(
      paramsOrCallback?:
        | Params$Resource$Projects$Content$Reidentify
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ReidentifyContentResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ReidentifyContentResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ReidentifyContentResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2ReidentifyContentResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Content$Reidentify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Content$Reidentify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/content:reidentify').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2ReidentifyContentResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ReidentifyContentResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Content$Deidentify
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2DeidentifyContentRequest;
  }
  export interface Params$Resource$Projects$Content$Inspect
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2InspectContentRequest;
  }
  export interface Params$Resource$Projects$Content$Reidentify
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2ReidentifyContentRequest;
  }

  export class Resource$Projects$Deidentifytemplates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.projects.deidentifyTemplates.create
     * @desc Creates a DeidentifyTemplate for re-using frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.projects.deidentifyTemplates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {().GooglePrivacyDlpV2CreateDeidentifyTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Deidentifytemplates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate>;
    create(
      params: Params$Resource$Projects$Deidentifytemplates$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    create(
      params: Params$Resource$Projects$Deidentifytemplates$Create,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Deidentifytemplates$Create
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deidentifytemplates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deidentifytemplates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/deidentifyTemplates').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters
        );
      }
    }

    /**
     * dlp.projects.deidentifyTemplates.delete
     * @desc Deletes a DeidentifyTemplate. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.projects.deidentifyTemplates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Deidentifytemplates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Deidentifytemplates$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Deidentifytemplates$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Deidentifytemplates$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deidentifytemplates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deidentifytemplates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.projects.deidentifyTemplates.get
     * @desc Gets a DeidentifyTemplate. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.projects.deidentifyTemplates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Deidentifytemplates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate>;
    get(
      params: Params$Resource$Projects$Deidentifytemplates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    get(
      params: Params$Resource$Projects$Deidentifytemplates$Get,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Deidentifytemplates$Get
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deidentifytemplates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deidentifytemplates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters
        );
      }
    }

    /**
     * dlp.projects.deidentifyTemplates.list
     * @desc Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.projects.deidentifyTemplates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.orderBy Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
     * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Deidentifytemplates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse>;
    list(
      params: Params$Resource$Projects$Deidentifytemplates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Deidentifytemplates$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Deidentifytemplates$List
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deidentifytemplates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deidentifytemplates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/deidentifyTemplates').replace(
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
        createAPIRequest<
          Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
        >(parameters);
      }
    }

    /**
     * dlp.projects.deidentifyTemplates.patch
     * @desc Updates the DeidentifyTemplate. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
     * @alias dlp.projects.deidentifyTemplates.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {().GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Deidentifytemplates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate>;
    patch(
      params: Params$Resource$Projects$Deidentifytemplates$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    patch(
      params: Params$Resource$Projects$Deidentifytemplates$Patch,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Deidentifytemplates$Patch
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DeidentifyTemplate>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyTemplate
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deidentifytemplates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deidentifytemplates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyTemplate>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Deidentifytemplates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CreateDeidentifyTemplateRequest;
  }
  export interface Params$Resource$Projects$Deidentifytemplates$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Deidentifytemplates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Deidentifytemplates$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
     */
    orderBy?: string;
    /**
     * Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     */
    pageSize?: number;
    /**
     * Optional page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Deidentifytemplates$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest;
  }

  export class Resource$Projects$Dlpjobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.projects.dlpJobs.cancel
     * @desc Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
     * @alias dlp.projects.dlpJobs.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the DlpJob resource to be cancelled.
     * @param {().GooglePrivacyDlpV2CancelDlpJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Dlpjobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Projects$Dlpjobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Dlpjobs$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Dlpjobs$Cancel
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dlpjobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dlpjobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.projects.dlpJobs.create
     * @desc Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.  When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
     * @alias dlp.projects.dlpJobs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id.
     * @param {().GooglePrivacyDlpV2CreateDlpJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Dlpjobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DlpJob>;
    create(
      params: Params$Resource$Projects$Dlpjobs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void;
    create(
      params: Params$Resource$Projects$Dlpjobs$Create,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Dlpjobs$Create
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DlpJob> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dlpjobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dlpjobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/dlpJobs').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DlpJob>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DlpJob>(parameters);
      }
    }

    /**
     * dlp.projects.dlpJobs.delete
     * @desc Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be cancelled if possible. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
     * @alias dlp.projects.dlpJobs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the DlpJob resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Dlpjobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Dlpjobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Dlpjobs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Dlpjobs$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dlpjobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dlpjobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.projects.dlpJobs.get
     * @desc Gets the latest state of a long-running DlpJob. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
     * @alias dlp.projects.dlpJobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the DlpJob resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Dlpjobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DlpJob>;
    get(
      params: Params$Resource$Projects$Dlpjobs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void;
    get(
      params: Params$Resource$Projects$Dlpjobs$Get,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Dlpjobs$Get
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DlpJob> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dlpjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dlpjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DlpJob>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DlpJob>(parameters);
      }
    }

    /**
     * dlp.projects.dlpJobs.list
     * @desc Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
     * @alias dlp.projects.dlpJobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Allows filtering.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `<field> <operator> <value>`. * Supported fields/values for inspect jobs:     - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY     - `trigger_name` - The resource name of the trigger that created job.     - 'end_time` - Corresponds to time the job finished.     - 'start_time` - Corresponds to time the job finished. * Supported fields for risk analysis jobs:     - `state` - RUNNING|CANCELED|FINISHED|FAILED     - 'end_time` - Corresponds to time the job finished.     - 'start_time` - Corresponds to time the job finished. * The operator must be `=` or `!=`.  Examples:  * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\"  The length of this field should be no more than 500 characters.
     * @param {string=} params.orderBy Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc, end_time asc, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the job was created. - `end_time`: corresponds to time the job ended. - `name`: corresponds to job's name. - `state`: corresponds to `state`
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id.
     * @param {string=} params.type The type of job. Defaults to `DlpJobType.INSPECT`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Dlpjobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListDlpJobsResponse>;
    list(
      params: Params$Resource$Projects$Dlpjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListDlpJobsResponse>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDlpJobsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Dlpjobs$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDlpJobsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDlpJobsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Dlpjobs$List
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListDlpJobsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2ListDlpJobsResponse>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListDlpJobsResponse
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2ListDlpJobsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dlpjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dlpjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/dlpJobs').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2ListDlpJobsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2ListDlpJobsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Dlpjobs$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the DlpJob resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CancelDlpJobRequest;
  }
  export interface Params$Resource$Projects$Dlpjobs$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CreateDlpJobRequest;
  }
  export interface Params$Resource$Projects$Dlpjobs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the DlpJob resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Dlpjobs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the DlpJob resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Dlpjobs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Allows filtering.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `<field> <operator> <value>`. * Supported fields/values for inspect jobs:     - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY     - `trigger_name` - The resource name of the trigger that created job.     - 'end_time` - Corresponds to time the job finished.     - 'start_time` - Corresponds to time the job finished. * Supported fields for risk analysis jobs:     - `state` - RUNNING|CANCELED|FINISHED|FAILED     - 'end_time` - Corresponds to time the job finished.     - 'start_time` - Corresponds to time the job finished. * The operator must be `=` or `!=`.  Examples:  * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\"  The length of this field should be no more than 500 characters.
     */
    filter?: string;
    /**
     * Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc, end_time asc, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the job was created. - `end_time`: corresponds to time the job ended. - `name`: corresponds to job's name. - `state`: corresponds to `state`
     */
    orderBy?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example projects/my-project-id.
     */
    parent?: string;
    /**
     * The type of job. Defaults to `DlpJobType.INSPECT`
     */
    type?: string;
  }

  export class Resource$Projects$Image {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.projects.image.redact
     * @desc Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more.  When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
     * @alias dlp.projects.image.redact
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id.
     * @param {().GooglePrivacyDlpV2RedactImageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    redact(
      params?: Params$Resource$Projects$Image$Redact,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2RedactImageResponse>;
    redact(
      params: Params$Resource$Projects$Image$Redact,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2RedactImageResponse>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2RedactImageResponse
      >
    ): void;
    redact(
      params: Params$Resource$Projects$Image$Redact,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2RedactImageResponse
      >
    ): void;
    redact(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2RedactImageResponse
      >
    ): void;
    redact(
      paramsOrCallback?:
        | Params$Resource$Projects$Image$Redact
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2RedactImageResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2RedactImageResponse>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2RedactImageResponse
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2RedactImageResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Image$Redact;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Image$Redact;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/image:redact').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2RedactImageResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2RedactImageResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Image$Redact
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2RedactImageRequest;
  }

  export class Resource$Projects$Inspecttemplates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.projects.inspectTemplates.create
     * @desc Creates an InspectTemplate for re-using frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.projects.inspectTemplates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {().GooglePrivacyDlpV2CreateInspectTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Inspecttemplates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate>;
    create(
      params: Params$Resource$Projects$Inspecttemplates$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    create(
      params: Params$Resource$Projects$Inspecttemplates$Create,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Inspecttemplates$Create
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inspecttemplates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inspecttemplates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/inspectTemplates').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters
        );
      }
    }

    /**
     * dlp.projects.inspectTemplates.delete
     * @desc Deletes an InspectTemplate. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.projects.inspectTemplates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Inspecttemplates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Inspecttemplates$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Inspecttemplates$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Inspecttemplates$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inspecttemplates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inspecttemplates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.projects.inspectTemplates.get
     * @desc Gets an InspectTemplate. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.projects.inspectTemplates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Inspecttemplates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate>;
    get(
      params: Params$Resource$Projects$Inspecttemplates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    get(
      params: Params$Resource$Projects$Inspecttemplates$Get,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Inspecttemplates$Get
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inspecttemplates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inspecttemplates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters
        );
      }
    }

    /**
     * dlp.projects.inspectTemplates.list
     * @desc Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.projects.inspectTemplates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.orderBy Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
     * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Inspecttemplates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse>;
    list(
      params: Params$Resource$Projects$Inspecttemplates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Inspecttemplates$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Inspecttemplates$List
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inspecttemplates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inspecttemplates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/inspectTemplates').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ListInspectTemplatesResponse
        >(parameters);
      }
    }

    /**
     * dlp.projects.inspectTemplates.patch
     * @desc Updates the InspectTemplate. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
     * @alias dlp.projects.inspectTemplates.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {().GooglePrivacyDlpV2UpdateInspectTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Inspecttemplates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate>;
    patch(
      params: Params$Resource$Projects$Inspecttemplates$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    patch(
      params: Params$Resource$Projects$Inspecttemplates$Patch,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Inspecttemplates$Patch
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectTemplate>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2InspectTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inspecttemplates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inspecttemplates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2InspectTemplate>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Inspecttemplates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CreateInspectTemplateRequest;
  }
  export interface Params$Resource$Projects$Inspecttemplates$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Inspecttemplates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Inspecttemplates$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
     */
    orderBy?: string;
    /**
     * Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     */
    pageSize?: number;
    /**
     * Optional page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Inspecttemplates$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2UpdateInspectTemplateRequest;
  }

  export class Resource$Projects$Jobtriggers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.projects.jobTriggers.activate
     * @desc Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
     * @alias dlp.projects.jobTriggers.activate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {().GooglePrivacyDlpV2ActivateJobTriggerRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    activate(
      params?: Params$Resource$Projects$Jobtriggers$Activate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DlpJob>;
    activate(
      params: Params$Resource$Projects$Jobtriggers$Activate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void;
    activate(
      params: Params$Resource$Projects$Jobtriggers$Activate,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void;
    activate(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobtriggers$Activate
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2DlpJob>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2DlpJob> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobtriggers$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobtriggers$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:activate').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2DlpJob>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2DlpJob>(parameters);
      }
    }

    /**
     * dlp.projects.jobTriggers.create
     * @desc Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
     * @alias dlp.projects.jobTriggers.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id.
     * @param {().GooglePrivacyDlpV2CreateJobTriggerRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Jobtriggers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2JobTrigger>;
    create(
      params: Params$Resource$Projects$Jobtriggers$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    create(
      params: Params$Resource$Projects$Jobtriggers$Create,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobtriggers$Create
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2JobTrigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobtriggers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobtriggers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/jobTriggers').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2JobTrigger>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2JobTrigger>(
          parameters
        );
      }
    }

    /**
     * dlp.projects.jobTriggers.delete
     * @desc Deletes a job trigger. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
     * @alias dlp.projects.jobTriggers.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Jobtriggers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Jobtriggers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Jobtriggers$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobtriggers$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobtriggers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobtriggers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.projects.jobTriggers.get
     * @desc Gets a job trigger. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
     * @alias dlp.projects.jobTriggers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Jobtriggers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2JobTrigger>;
    get(
      params: Params$Resource$Projects$Jobtriggers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    get(
      params: Params$Resource$Projects$Jobtriggers$Get,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobtriggers$Get
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2JobTrigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobtriggers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobtriggers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2JobTrigger>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2JobTrigger>(
          parameters
        );
      }
    }

    /**
     * dlp.projects.jobTriggers.list
     * @desc Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
     * @alias dlp.projects.jobTriggers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Allows filtering.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `<field> <operator> <value>`. * Supported fields/values for inspect jobs:     - `status` - HEALTHY|PAUSED|CANCELLED     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY     - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by     quotation marks. Nanoseconds are ignored.     - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage.  Examples:  * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\"  The length of this field should be no more than 500 characters.
     * @param {string=} params.orderBy Optional comma separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the JobTrigger was created. - `update_time`: corresponds to time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to JobTrigger's name. - `display_name`: corresponds to JobTrigger's display name. - `status`: corresponds to JobTrigger's status.
     * @param {integer=} params.pageSize Optional size of the page, can be limited by a server.
     * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to ListJobTriggers. `order_by` field must not change for subsequent calls.
     * @param {string} params.parent The parent resource name, for example `projects/my-project-id`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Jobtriggers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListJobTriggersResponse>;
    list(
      params: Params$Resource$Projects$Jobtriggers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListJobTriggersResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListJobTriggersResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Jobtriggers$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListJobTriggersResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListJobTriggersResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobtriggers$List
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListJobTriggersResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListJobTriggersResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListJobTriggersResponse
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2ListJobTriggersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobtriggers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobtriggers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/jobTriggers').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2ListJobTriggersResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ListJobTriggersResponse
        >(parameters);
      }
    }

    /**
     * dlp.projects.jobTriggers.patch
     * @desc Updates a job trigger. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
     * @alias dlp.projects.jobTriggers.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {().GooglePrivacyDlpV2UpdateJobTriggerRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Jobtriggers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2JobTrigger>;
    patch(
      params: Params$Resource$Projects$Jobtriggers$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    patch(
      params: Params$Resource$Projects$Jobtriggers$Patch,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobtriggers$Patch
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2JobTrigger>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2JobTrigger> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobtriggers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobtriggers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2JobTrigger>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2JobTrigger>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Jobtriggers$Activate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2ActivateJobTriggerRequest;
  }
  export interface Params$Resource$Projects$Jobtriggers$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CreateJobTriggerRequest;
  }
  export interface Params$Resource$Projects$Jobtriggers$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Jobtriggers$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Jobtriggers$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Allows filtering.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `<field> <operator> <value>`. * Supported fields/values for inspect jobs:     - `status` - HEALTHY|PAUSED|CANCELLED     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY     - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by     quotation marks. Nanoseconds are ignored.     - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage.  Examples:  * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\"  The length of this field should be no more than 500 characters.
     */
    filter?: string;
    /**
     * Optional comma separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc,update_time, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the JobTrigger was created. - `update_time`: corresponds to time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to JobTrigger's name. - `display_name`: corresponds to JobTrigger's display name. - `status`: corresponds to JobTrigger's status.
     */
    orderBy?: string;
    /**
     * Optional size of the page, can be limited by a server.
     */
    pageSize?: number;
    /**
     * Optional page token to continue retrieval. Comes from previous call to ListJobTriggers. `order_by` field must not change for subsequent calls.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example `projects/my-project-id`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Jobtriggers$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2UpdateJobTriggerRequest;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    content: Resource$Projects$Locations$Content;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.content = new Resource$Projects$Locations$Content(this.context);
    }
  }

  export class Resource$Projects$Locations$Content {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.projects.locations.content.deidentify
     * @desc De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more.  When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
     * @alias dlp.projects.locations.content.deidentify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.location The geographic location to process de-identification. Reserved for future extensions.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id.
     * @param {().GooglePrivacyDlpV2DeidentifyContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deidentify(
      params?: Params$Resource$Projects$Locations$Content$Deidentify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2DeidentifyContentResponse>;
    deidentify(
      params: Params$Resource$Projects$Locations$Content$Deidentify,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2DeidentifyContentResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyContentResponse
      >
    ): void;
    deidentify(
      params: Params$Resource$Projects$Locations$Content$Deidentify,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyContentResponse
      >
    ): void;
    deidentify(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyContentResponse
      >
    ): void;
    deidentify(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Content$Deidentify
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2DeidentifyContentResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2DeidentifyContentResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2DeidentifyContentResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2DeidentifyContentResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Content$Deidentify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Content$Deidentify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+parent}/locations/{location}/content:deidentify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'location'],
        pathParams: ['location', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GooglePrivacyDlpV2DeidentifyContentResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2DeidentifyContentResponse
        >(parameters);
      }
    }

    /**
     * dlp.projects.locations.content.inspect
     * @desc Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size.  When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.  For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
     * @alias dlp.projects.locations.content.inspect
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.location The geographic location to process content inspection. Reserved for future extensions.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id.
     * @param {().GooglePrivacyDlpV2InspectContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    inspect(
      params?: Params$Resource$Projects$Locations$Content$Inspect,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2InspectContentResponse>;
    inspect(
      params: Params$Resource$Projects$Locations$Content$Inspect,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectContentResponse>,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2InspectContentResponse
      >
    ): void;
    inspect(
      params: Params$Resource$Projects$Locations$Content$Inspect,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2InspectContentResponse
      >
    ): void;
    inspect(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2InspectContentResponse
      >
    ): void;
    inspect(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Content$Inspect
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectContentResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2InspectContentResponse>,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2InspectContentResponse
      >
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2InspectContentResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Content$Inspect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Content$Inspect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+parent}/locations/{location}/content:inspect'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'location'],
        pathParams: ['location', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GooglePrivacyDlpV2InspectContentResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2InspectContentResponse
        >(parameters);
      }
    }

    /**
     * dlp.projects.locations.content.reidentify
     * @desc Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
     * @alias dlp.projects.locations.content.reidentify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.location The geographic location to process content reidentification.  Reserved for future extensions.
     * @param {string} params.parent The parent resource name.
     * @param {().GooglePrivacyDlpV2ReidentifyContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reidentify(
      params?: Params$Resource$Projects$Locations$Content$Reidentify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ReidentifyContentResponse>;
    reidentify(
      params: Params$Resource$Projects$Locations$Content$Reidentify,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ReidentifyContentResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ReidentifyContentResponse
      >
    ): void;
    reidentify(
      params: Params$Resource$Projects$Locations$Content$Reidentify,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ReidentifyContentResponse
      >
    ): void;
    reidentify(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ReidentifyContentResponse
      >
    ): void;
    reidentify(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Content$Reidentify
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ReidentifyContentResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ReidentifyContentResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ReidentifyContentResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2ReidentifyContentResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Content$Reidentify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Content$Reidentify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+parent}/locations/{location}/content:reidentify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'location'],
        pathParams: ['location', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GooglePrivacyDlpV2ReidentifyContentResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ReidentifyContentResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Content$Deidentify
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The geographic location to process de-identification. Reserved for future extensions.
     */
    location?: string;
    /**
     * The parent resource name, for example projects/my-project-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2DeidentifyContentRequest;
  }
  export interface Params$Resource$Projects$Locations$Content$Inspect
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The geographic location to process content inspection. Reserved for future extensions.
     */
    location?: string;
    /**
     * The parent resource name, for example projects/my-project-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2InspectContentRequest;
  }
  export interface Params$Resource$Projects$Locations$Content$Reidentify
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The geographic location to process content reidentification.  Reserved for future extensions.
     */
    location?: string;
    /**
     * The parent resource name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2ReidentifyContentRequest;
  }

  export class Resource$Projects$Storedinfotypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dlp.projects.storedInfoTypes.create
     * @desc Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.projects.storedInfoTypes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {().GooglePrivacyDlpV2CreateStoredInfoTypeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Storedinfotypes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType>;
    create(
      params: Params$Resource$Projects$Storedinfotypes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    create(
      params: Params$Resource$Projects$Storedinfotypes$Create,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Storedinfotypes$Create
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Storedinfotypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Storedinfotypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/storedInfoTypes').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters
        );
      }
    }

    /**
     * dlp.projects.storedInfoTypes.delete
     * @desc Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.projects.storedInfoTypes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Storedinfotypes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Storedinfotypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Storedinfotypes$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Storedinfotypes$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Storedinfotypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Storedinfotypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dlp.projects.storedInfoTypes.get
     * @desc Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.projects.storedInfoTypes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Storedinfotypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType>;
    get(
      params: Params$Resource$Projects$Storedinfotypes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    get(
      params: Params$Resource$Projects$Storedinfotypes$Get,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Storedinfotypes$Get
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Storedinfotypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Storedinfotypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters
        );
      }
    }

    /**
     * dlp.projects.storedInfoTypes.list
     * @desc Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.projects.storedInfoTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.orderBy Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc, display_name, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
     * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListStoredInfoTypes`.
     * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Storedinfotypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse>;
    list(
      params: Params$Resource$Projects$Storedinfotypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Storedinfotypes$List,
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Storedinfotypes$List
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
      >
    ): void | GaxiosPromise<
      Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Storedinfotypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Storedinfotypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/storedInfoTypes').replace(
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
        createAPIRequest<Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GooglePrivacyDlpV2ListStoredInfoTypesResponse
        >(parameters);
      }
    }

    /**
     * dlp.projects.storedInfoTypes.patch
     * @desc Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
     * @alias dlp.projects.storedInfoTypes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {().GooglePrivacyDlpV2UpdateStoredInfoTypeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Storedinfotypes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType>;
    patch(
      params: Params$Resource$Projects$Storedinfotypes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    patch(
      params: Params$Resource$Projects$Storedinfotypes$Patch,
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Storedinfotypes$Patch
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>,
      callback?: BodyResponseCallback<Schema$GooglePrivacyDlpV2StoredInfoType>
    ): void | GaxiosPromise<Schema$GooglePrivacyDlpV2StoredInfoType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Storedinfotypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Storedinfotypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GooglePrivacyDlpV2StoredInfoType>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Storedinfotypes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2CreateStoredInfoTypeRequest;
  }
  export interface Params$Resource$Projects$Storedinfotypes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Storedinfotypes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Storedinfotypes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc, display_name, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
     */
    orderBy?: string;
    /**
     * Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
     */
    pageSize?: number;
    /**
     * Optional page token to continue retrieval. Comes from previous call to `ListStoredInfoTypes`.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example projects/my-project-id or organizations/my-org-id.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Storedinfotypes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GooglePrivacyDlpV2UpdateStoredInfoTypeRequest;
  }
}
