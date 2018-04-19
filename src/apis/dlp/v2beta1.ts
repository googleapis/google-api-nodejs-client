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
 * Cloud Data Loss Prevention (DLP) API
 *
 * Provides methods for detection, risk analysis, and de-identification of
 * privacy-sensitive fragments in text, images, and Google Cloud Platform
 * storage repositories.
 *
 * @example
 * const google = require('googleapis');
 * const dlp = google.dlp('v2beta1');
 *
 * @namespace dlp
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dlp
 */
export class Dlp {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  content: Resource$Content;
  dataSource: Resource$Datasource;
  inspect: Resource$Inspect;
  riskAnalysis: Resource$Riskanalysis;
  rootCategories: Resource$Rootcategories;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.content = new Resource$Content(this);
    this.dataSource = new Resource$Datasource(this);
    this.inspect = new Resource$Inspect(this);
    this.riskAnalysis = new Resource$Riskanalysis(this);
    this.rootCategories = new Resource$Rootcategories(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * The request message for Operations.CancelOperation.
 */
export interface Schema$GoogleLongrunningCancelOperationRequest {}
/**
 * The response message for Operations.ListOperations.
 */
export interface Schema$GoogleLongrunningListOperationsResponse {
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
  /**
   * A list of operations that matches the specified filter in the request.
   */
  operations: Schema$GoogleLongrunningOperation[];
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Schema$GoogleLongrunningOperation {
  /**
   * If the value is `false`, it means the operation is still in progress. If
   * `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error: Schema$GoogleRpcStatus;
  /**
   * This field will contain an InspectOperationMetadata object for
   * `inspect.operations.create` or a RiskAnalysisOperationMetadata object for
   * `dataSource.analyze`.  This will always be returned with the Operation.
   */
  metadata: any;
  /**
   * The server-assigned name. The `name` should have the format of
   * `inspect/operations/&lt;identifier&gt;`.
   */
  name: string;
  /**
   * This field will contain an InspectOperationResult object for
   * `inspect.operations.create` or a RiskAnalysisOperationResult object for
   * `dataSource.analyze`.
   */
  response: any;
}
/**
 * Request for creating a risk analysis operation.
 */
export interface Schema$GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest {
  /**
   * Privacy metric to compute.
   */
  privacyMetric: Schema$GooglePrivacyDlpV2beta1PrivacyMetric;
  /**
   * Input dataset to compute metrics over.
   */
  sourceTable: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * An auxiliary table contains statistical information on the relative frequency
 * of different quasi-identifiers values. It has one or several
 * quasi-identifiers columns, and one column that indicates the relative
 * frequency of each quasi-identifier tuple. If a tuple is present in the data
 * but not in the auxiliary table, the corresponding relative frequency is
 * assumed to be zero (and thus, the tuple is highly reidentifiable).
 */
export interface Schema$GooglePrivacyDlpV2beta1AuxiliaryTable {
  /**
   * Quasi-identifier columns. [required]
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta1QuasiIdField[];
  /**
   * The relative frequency column must contain a floating-point number between
   * 0 and 1 (inclusive). Null values are assumed to be zero. [required]
   */
  relativeFrequency: Schema$GooglePrivacyDlpV2beta1FieldId;
  /**
   * Auxiliary table location. [required]
   */
  table: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * LINT.IfChange Row key for identifying a record in BigQuery table.
 */
export interface Schema$GooglePrivacyDlpV2beta1BigQueryKey {
  /**
   * Absolute number of the row from the beginning of the table at the time of
   * scanning.
   */
  rowNumber: string;
  /**
   * Complete BigQuery table reference.
   */
  tableReference: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * Options defining BigQuery table and row identifiers.
 */
export interface Schema$GooglePrivacyDlpV2beta1BigQueryOptions {
  /**
   * References to fields uniquely identifying rows within the table. Nested
   * fields in the format, like `person.birthdate.year`, are allowed.
   */
  identifyingFields: Schema$GooglePrivacyDlpV2beta1FieldId[];
  /**
   * Complete BigQuery table reference.
   */
  tableReference: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * Message defining the location of a BigQuery table. A table is uniquely
 * identified  by its project_id, dataset_id, and table_name. Within a query a
 * table is often referenced with a string in the format of:
 * `&lt;project_id&gt;:&lt;dataset_id&gt;.&lt;table_id&gt;` or
 * `&lt;project_id&gt;.&lt;dataset_id&gt;.&lt;table_id&gt;`.
 */
export interface Schema$GooglePrivacyDlpV2beta1BigQueryTable {
  /**
   * Dataset ID of the table.
   */
  datasetId: string;
  /**
   * The Google Cloud Platform project ID of the project containing the table.
   * If omitted, project ID is inferred from the API call.
   */
  projectId: string;
  /**
   * Name of the table.
   */
  tableId: string;
}
/**
 * Buckets represented as ranges, along with replacement values. Ranges must be
 * non-overlapping.
 */
export interface Schema$GooglePrivacyDlpV2beta1Bucket {
  /**
   * Upper bound of the range, exclusive; type must match min.
   */
  max: Schema$GooglePrivacyDlpV2beta1Value;
  /**
   * Lower bound of the range, inclusive. Type should be the same as max if
   * used.
   */
  min: Schema$GooglePrivacyDlpV2beta1Value;
  /**
   * Replacement value for this bucket. If not provided the default behavior
   * will be to hyphenate the min-max range.
   */
  replacementValue: Schema$GooglePrivacyDlpV2beta1Value;
}
/**
 * Generalization function that buckets values based on ranges. The ranges and
 * replacement values are dynamically provided by the user for custom behavior,
 * such as 1-30 -&gt; LOW 31-65 -&gt; MEDIUM 66-100 -&gt; HIGH This can be used
 * on data of type: number, long, string, timestamp. If the bound `Value` type
 * differs from the type of data being transformed, we will first attempt
 * converting the type of the data to be transformed to match the type of the
 * bound before comparing.
 */
export interface Schema$GooglePrivacyDlpV2beta1BucketingConfig {
  buckets: Schema$GooglePrivacyDlpV2beta1Bucket[];
}
/**
 * Compute numerical stats over an individual column, including number of
 * distinct values and value count distribution.
 */
export interface Schema$GooglePrivacyDlpV2beta1CategoricalStatsConfig {
  /**
   * Field to compute categorical stats on. All column types are supported
   * except for arrays and structs. However, it may be more informative to use
   * NumericalStats when the field type is supported, depending on the data.
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * Histogram bucket of value frequencies in the column.
 */
export interface Schema$GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket {
  /**
   * Total number of records in this bucket.
   */
  bucketSize: string;
  /**
   * Sample of value frequencies in this bucket. The total number of values
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta1ValueFrequency[];
  /**
   * Lower bound on the value frequency of the values in this bucket.
   */
  valueFrequencyLowerBound: string;
  /**
   * Upper bound on the value frequency of the values in this bucket.
   */
  valueFrequencyUpperBound: string;
}
/**
 * Result of the categorical stats computation.
 */
export interface Schema$GooglePrivacyDlpV2beta1CategoricalStatsResult {
  /**
   * Histogram of value frequencies in the column.
   */
  valueFrequencyHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket[];
}
/**
 * Info Type Category description.
 */
export interface Schema$GooglePrivacyDlpV2beta1CategoryDescription {
  /**
   * Human readable form of the category name.
   */
  displayName: string;
  /**
   * Internal name of the category.
   */
  name: string;
}
/**
 * Partially mask a string by replacing a given number of characters with a
 * fixed character. Masking can start from the beginning or end of the string.
 * This can be used on data of any type (numbers, longs, and so on) and when
 * de-identifying structured data we&#39;ll attempt to preserve the original
 * data&#39;s type. (This allows you to take a long like 123 and modify it to a
 * string like **3.
 */
export interface Schema$GooglePrivacyDlpV2beta1CharacterMaskConfig {
  /**
   * When masking a string, items in this list will be skipped when replacing.
   * For example, if your string is 555-555-5555 and you ask us to skip `-` and
   * mask 5 chars with * we would produce ***-*55-5555.
   */
  charactersToIgnore: Schema$GooglePrivacyDlpV2beta1CharsToIgnore[];
  /**
   * Character to mask the sensitive values&amp;mdash;for example, &quot;*&quot;
   * for an alphabetic string such as name, or &quot;0&quot; for a numeric
   * string such as ZIP code or credit card number. String must have length 1.
   * If not supplied, we will default to &quot;*&quot; for strings, 0 for
   * digits.
   */
  maskingCharacter: string;
  /**
   * Number of characters to mask. If not set, all matching chars will be
   * masked. Skipped characters do not count towards this tally.
   */
  numberToMask: number;
  /**
   * Mask characters in reverse order. For example, if `masking_character` is
   * &#39;0&#39;, number_to_mask is 14, and `reverse_order` is false, then
   * 1234-5678-9012-3456 -&gt; 00000000000000-3456 If `masking_character` is
   * &#39;*&#39;, `number_to_mask` is 3, and `reverse_order` is true, then 12345
   * -&gt; 12***
   */
  reverseOrder: boolean;
}
/**
 * Characters to skip when doing deidentification of a value. These will be left
 * alone and skipped.
 */
export interface Schema$GooglePrivacyDlpV2beta1CharsToIgnore {
  charactersToSkip: string;
  commonCharactersToIgnore: string;
}
/**
 * Record key for a finding in a Cloud Storage file.
 */
export interface Schema$GooglePrivacyDlpV2beta1CloudStorageKey {
  /**
   * Path to the file.
   */
  filePath: string;
  /**
   * Byte offset of the referenced data in the file.
   */
  startOffset: string;
}
/**
 * Options defining a file or a set of files (path ending with *) within a
 * Google Cloud Storage bucket.
 */
export interface Schema$GooglePrivacyDlpV2beta1CloudStorageOptions {
  fileSet: Schema$GooglePrivacyDlpV2beta1FileSet;
}
/**
 * A location in Cloud Storage.
 */
export interface Schema$GooglePrivacyDlpV2beta1CloudStoragePath {
  /**
   * The url, in the format of `gs://bucket/&lt;path&gt;`.
   */
  path: string;
}
/**
 * Represents a color in the RGB color space.
 */
export interface Schema$GooglePrivacyDlpV2beta1Color {
  /**
   * The amount of blue in the color as a value in the interval [0, 1].
   */
  blue: number;
  /**
   * The amount of green in the color as a value in the interval [0, 1].
   */
  green: number;
  /**
   * The amount of red in the color as a value in the interval [0, 1].
   */
  red: number;
}
/**
 * The field type of `value` and `field` do not need to match to be considered
 * equal, but not all comparisons are possible.  A `value` of type:  - `string`
 * can be compared against all other types - `boolean` can only be compared
 * against other booleans - `integer` can be compared against doubles or a
 * string if the string value can be parsed as an integer. - `double` can be
 * compared against integers or a string if the string can be parsed as a
 * double. - `Timestamp` can be compared against strings in RFC 3339 date string
 * format. - `TimeOfDay` can be compared against timestamps and strings in the
 * format of &#39;HH:mm:ss&#39;.  If we fail to compare do to type mismatch, a
 * warning will be given and the condition will evaluate to false.
 */
export interface Schema$GooglePrivacyDlpV2beta1Condition {
  /**
   * Field within the record this condition is evaluated against. [required]
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
  /**
   * Operator used to compare the field or info type to the value. [required]
   */
  operator: string;
  /**
   * Value to compare against. [Required, except for `EXISTS` tests.]
   */
  value: Schema$GooglePrivacyDlpV2beta1Value;
}
export interface Schema$GooglePrivacyDlpV2beta1Conditions {
  conditions: Schema$GooglePrivacyDlpV2beta1Condition[];
}
/**
 * Container structure for the content to inspect.
 */
export interface Schema$GooglePrivacyDlpV2beta1ContentItem {
  /**
   * Content data to inspect or redact.
   */
  data: string;
  /**
   * Structured content for inspection.
   */
  table: Schema$GooglePrivacyDlpV2beta1Table;
  /**
   * Type of the content, as defined in Content-Type HTTP header. Supported
   * types are: all &quot;text&quot; types, octet streams, PNG images, JPEG
   * images.
   */
  type: string;
  /**
   * String data to inspect or redact.
   */
  value: string;
}
/**
 * Request for scheduling a scan of a data subset from a Google Platform data
 * repository.
 */
export interface Schema$GooglePrivacyDlpV2beta1CreateInspectOperationRequest {
  /**
   * Configuration for the inspector.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta1InspectConfig;
  /**
   * Additional configuration settings for long running operations.
   */
  operationConfig: Schema$GooglePrivacyDlpV2beta1OperationConfig;
  /**
   * Optional location to store findings.
   */
  outputConfig: Schema$GooglePrivacyDlpV2beta1OutputStorageConfig;
  /**
   * Specification of the data set to process.
   */
  storageConfig: Schema$GooglePrivacyDlpV2beta1StorageConfig;
}
/**
 * Pseudonymization method that generates surrogates via cryptographic hashing.
 * Uses SHA-256. Outputs a 32 byte digest as an uppercase hex string (for
 * example, 41D1567F7F99F1DC2A5FAB886DEE5BEE). Currently, only string and
 * integer values can be hashed.
 */
export interface Schema$GooglePrivacyDlpV2beta1CryptoHashConfig {
  /**
   * The key used by the hash function.
   */
  cryptoKey: Schema$GooglePrivacyDlpV2beta1CryptoKey;
}
/**
 * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK)
 * stored by KMS). When using KMS to wrap/unwrap DEKs, be sure to set an
 * appropriate IAM policy on the KMS CryptoKey (KEK) to ensure an attacker
 * cannot unwrap the data crypto key.
 */
export interface Schema$GooglePrivacyDlpV2beta1CryptoKey {
  kmsWrapped: Schema$GooglePrivacyDlpV2beta1KmsWrappedCryptoKey;
  transient: Schema$GooglePrivacyDlpV2beta1TransientCryptoKey;
  unwrapped: Schema$GooglePrivacyDlpV2beta1UnwrappedCryptoKey;
}
/**
 * Replaces an identifier with a surrogate using FPE with the FFX mode of
 * operation. The identifier must be representable by the US-ASCII character
 * set. For a given crypto key and context, the same identifier will be replaced
 * with the same surrogate. Identifiers must be at least two characters long. In
 * the case that the identifier is the empty string, it will be skipped.
 */
export interface Schema$GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig {
  commonAlphabet: string;
  /**
   * A context may be used for higher security since the same identifier in two
   * different contexts likely will be given a distinct surrogate. The principle
   * is that the likeliness is inversely related to the ratio of the number of
   * distinct identifiers per context over the number of possible surrogates: As
   * long as this ratio is small, the likehood is large.  If the context is not
   * set, a default tweak will be used. If the context is set but:  1. there is
   * no record present when transforming a given value or 1. the field is not
   * present when transforming a given value,  a default tweak will be used.
   * Note that case (1) is expected when an `InfoTypeTransformation` is applied
   * to both structured and non-structured `ContentItem`s. Currently, the
   * referenced field may be of value type integer or string.  The tweak is
   * constructed as a sequence of bytes in big endian byte order such that:  - a
   * 64 bit integer is encoded followed by a single byte of value 1 - a string
   * is encoded in UTF-8 format followed by a single byte of value 2  This is
   * also known as the &#39;tweak&#39;, as in tweakable encryption.
   */
  context: Schema$GooglePrivacyDlpV2beta1FieldId;
  /**
   * The key used by the encryption algorithm. [required]
   */
  cryptoKey: Schema$GooglePrivacyDlpV2beta1CryptoKey;
  /**
   * This is supported by mapping these to the alphanumeric characters that the
   * FFX mode natively supports. This happens before/after
   * encryption/decryption. Each character listed must appear only once. Number
   * of characters must be in the range [2, 62]. This must be encoded as ASCII.
   * The order of characters does not matter.
   */
  customAlphabet: string;
  /**
   * The native way to select the alphabet. Must be in the range [2, 62].
   */
  radix: number;
  /**
   * The custom info type to annotate the surrogate with. This annotation will
   * be applied to the surrogate by prefixing it with the name of the custom
   * info type followed by the number of characters comprising the surrogate.
   * The following scheme defines the format:
   * info_type_name(surrogate_character_count):surrogate  For example, if the
   * name of custom info type is &#39;MY_TOKEN_INFO_TYPE&#39; and the surrogate
   * is &#39;abc&#39;, the full replacement value will be:
   * &#39;MY_TOKEN_INFO_TYPE(3):abc&#39;  This annotation identifies the
   * surrogate when inspecting content using the custom info type
   * [`SurrogateType`](/dlp/docs/reference/rest/v2beta1/InspectConfig#surrogatetype).
   * This facilitates reversal of the surrogate when it occurs in free text.  In
   * order for inspection to work properly, the name of this info type must not
   * occur naturally anywhere in your data; otherwise, inspection may find a
   * surrogate that does not correspond to an actual identifier. Therefore,
   * choose your custom info type name carefully after considering what your
   * data looks like. One way to select a name that has a high chance of
   * yielding reliable detection is to include one or more unicode characters
   * that are highly improbable to exist in your data. For example, assuming
   * your data is entered from a regular ASCII keyboard, the symbol with the hex
   * code point 29DD might be used like so: ⧝MY_TOKEN_TYPE
   */
  surrogateInfoType: Schema$GooglePrivacyDlpV2beta1InfoType;
}
/**
 * Custom information type provided by the user. Used to find domain-specific
 * sensitive information configurable to the data in question.
 */
export interface Schema$GooglePrivacyDlpV2beta1CustomInfoType {
  /**
   * Dictionary-based custom info type.
   */
  dictionary: Schema$GooglePrivacyDlpV2beta1Dictionary;
  /**
   * Info type configuration. All custom info types must have configurations
   * that do not conflict with built-in info types or other custom info types.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
  /**
   * Surrogate info type.
   */
  surrogateType: Schema$GooglePrivacyDlpV2beta1SurrogateType;
}
/**
 * Record key for a finding in Cloud Datastore.
 */
export interface Schema$GooglePrivacyDlpV2beta1DatastoreKey {
  /**
   * Datastore entity key.
   */
  entityKey: Schema$GooglePrivacyDlpV2beta1Key;
}
/**
 * Options defining a data set within Google Cloud Datastore.
 */
export interface Schema$GooglePrivacyDlpV2beta1DatastoreOptions {
  /**
   * The kind to process.
   */
  kind: Schema$GooglePrivacyDlpV2beta1KindExpression;
  /**
   * A partition ID identifies a grouping of entities. The grouping is always by
   * project and namespace, however the namespace ID may be empty.
   */
  partitionId: Schema$GooglePrivacyDlpV2beta1PartitionId;
  /**
   * Properties to scan. If none are specified, all properties will be scanned
   * by default.
   */
  projection: Schema$GooglePrivacyDlpV2beta1Projection[];
}
/**
 * High level summary of deidentification.
 */
export interface Schema$GooglePrivacyDlpV2beta1DeidentificationSummary {
  /**
   * Transformations applied to the dataset.
   */
  transformationSummaries:
      Schema$GooglePrivacyDlpV2beta1TransformationSummary[];
  /**
   * Total size in bytes that were transformed in some way.
   */
  transformedBytes: string;
}
/**
 * The configuration that controls how the data will change.
 */
export interface Schema$GooglePrivacyDlpV2beta1DeidentifyConfig {
  /**
   * Treat the dataset as free-form text and apply the same free text
   * transformation everywhere.
   */
  infoTypeTransformations:
      Schema$GooglePrivacyDlpV2beta1InfoTypeTransformations;
  /**
   * Treat the dataset as structured. Transformations can be applied to specific
   * locations within structured datasets, such as transforming a column within
   * a table.
   */
  recordTransformations: Schema$GooglePrivacyDlpV2beta1RecordTransformations;
}
/**
 * Request to de-identify a list of items.
 */
export interface Schema$GooglePrivacyDlpV2beta1DeidentifyContentRequest {
  /**
   * Configuration for the de-identification of the list of content items.
   */
  deidentifyConfig: Schema$GooglePrivacyDlpV2beta1DeidentifyConfig;
  /**
   * Configuration for the inspector.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta1InspectConfig;
  /**
   * The list of items to inspect. Up to 100 are allowed per request. All items
   * will be treated as text/*.
   */
  items: Schema$GooglePrivacyDlpV2beta1ContentItem[];
}
/**
 * Results of de-identifying a list of items.
 */
export interface Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse {
  items: Schema$GooglePrivacyDlpV2beta1ContentItem[];
  /**
   * A review of the transformations that took place for each item.
   */
  summaries: Schema$GooglePrivacyDlpV2beta1DeidentificationSummary[];
}
/**
 * Custom information type based on a dictionary of words or phrases. This can
 * be used to match sensitive information specific to the data, such as a list
 * of employee IDs or job titles.  Dictionary words are case-insensitive and all
 * characters other than letters and digits in the unicode [Basic Multilingual
 * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
 * will be replaced with whitespace when scanning for matches, so the dictionary
 * phrase &quot;Sam Johnson&quot; will match all three phrases &quot;sam
 * johnson&quot;, &quot;Sam, Johnson&quot;, and &quot;Sam (Johnson)&quot;.
 * Additionally, the characters surrounding any match must be of a different
 * type than the adjacent characters within the word, so letters must be next to
 * non-letters and digits next to non-digits. For example, the dictionary word
 * &quot;jen&quot; will match the first three letters of the text
 * &quot;jen123&quot; but will return no matches for &quot;jennifer&quot;.
 * Dictionary words containing a large number of characters that are not letters
 * or digits may result in unexpected findings because such characters are
 * treated as whitespace.
 */
export interface Schema$GooglePrivacyDlpV2beta1Dictionary {
  /**
   * List of words or phrases to search for.
   */
  wordList: Schema$GooglePrivacyDlpV2beta1WordList;
}
/**
 * An entity in a dataset is a field or set of fields that correspond to a
 * single person. For example, in medical records the `EntityId` might be a
 * patient identifier, or for financial records it might be an account
 * identifier. This message is used when generalizations or analysis must be
 * consistent across multiple rows pertaining to the same entity.
 */
export interface Schema$GooglePrivacyDlpV2beta1EntityId {
  /**
   * Composite key indicating which field contains the entity identifier.
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * A collection of expressions
 */
export interface Schema$GooglePrivacyDlpV2beta1Expressions {
  conditions: Schema$GooglePrivacyDlpV2beta1Conditions;
  /**
   * The operator to apply to the result of conditions. Default and currently
   * only supported value is `AND`.
   */
  logicalOperator: string;
}
/**
 * General identifier of a data field in a storage service.
 */
export interface Schema$GooglePrivacyDlpV2beta1FieldId {
  /**
   * Name describing the field.
   */
  columnName: string;
}
/**
 * The transformation to apply to the field.
 */
export interface Schema$GooglePrivacyDlpV2beta1FieldTransformation {
  /**
   * Only apply the transformation if the condition evaluates to true for the
   * given `RecordCondition`. The conditions are allowed to reference fields
   * that are not used in the actual transformation. [optional]  Example Use
   * Cases:  - Apply a different bucket transformation to an age column if the
   * zip code column for the same record is within a specific range. - Redact a
   * field if the date of birth field is greater than 85.
   */
  condition: Schema$GooglePrivacyDlpV2beta1RecordCondition;
  /**
   * Input field(s) to apply the transformation to. [required]
   */
  fields: Schema$GooglePrivacyDlpV2beta1FieldId[];
  /**
   * Treat the contents of the field as free text, and selectively transform
   * content that matches an `InfoType`.
   */
  infoTypeTransformations:
      Schema$GooglePrivacyDlpV2beta1InfoTypeTransformations;
  /**
   * Apply the transformation to the entire field.
   */
  primitiveTransformation:
      Schema$GooglePrivacyDlpV2beta1PrimitiveTransformation;
}
/**
 * Set of files to scan.
 */
export interface Schema$GooglePrivacyDlpV2beta1FileSet {
  /**
   * The url, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing
   * wildcard in the path is allowed.
   */
  url: string;
}
/**
 * Represents a piece of potentially sensitive content.
 */
export interface Schema$GooglePrivacyDlpV2beta1Finding {
  /**
   * Timestamp when finding was detected.
   */
  createTime: string;
  /**
   * The type of content that might have been found. Provided if requested by
   * the `InspectConfig`.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
  /**
   * Estimate of how likely it is that the `info_type` is correct.
   */
  likelihood: string;
  /**
   * Where the content was found.
   */
  location: Schema$GooglePrivacyDlpV2beta1Location;
  /**
   * The content that was found. Even if the content is not textual, it may be
   * converted to a textual representation here. Provided if requested by the
   * `InspectConfig` and the finding is less than or equal to 4096 bytes long.
   * If the finding exceeds 4096 bytes in length, the quote may be omitted.
   */
  quote: string;
}
/**
 * Buckets values based on fixed size ranges. The Bucketing transformation can
 * provide all of this functionality, but requires more configuration. This
 * message is provided as a convenience to the user for simple bucketing
 * strategies. The resulting value will be a hyphenated string of
 * lower_bound-upper_bound. This can be used on data of type: double, long. If
 * the bound Value type differs from the type of data being transformed, we will
 * first attempt converting the type of the data to be transformed to match the
 * type of the bound before comparing.
 */
export interface Schema$GooglePrivacyDlpV2beta1FixedSizeBucketingConfig {
  /**
   * Size of each bucket (except for minimum and maximum buckets). So if
   * `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the
   * following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60,
   * 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. [Required].
   */
  bucketSize: number;
  /**
   * Lower bound value of buckets. All values less than `lower_bound` are
   * grouped together into a single bucket; for example if `lower_bound` = 10,
   * then all values less than 10 are replaced with the value “-10”. [Required].
   */
  lowerBound: Schema$GooglePrivacyDlpV2beta1Value;
  /**
   * Upper bound value of buckets. All values greater than upper_bound are
   * grouped together into a single bucket; for example if `upper_bound` = 89,
   * then all values greater than 89 are replaced with the value “89+”.
   * [Required].
   */
  upperBound: Schema$GooglePrivacyDlpV2beta1Value;
}
/**
 * Bounding box encompassing detected text within an image.
 */
export interface Schema$GooglePrivacyDlpV2beta1ImageLocation {
  /**
   * Height of the bounding box in pixels.
   */
  height: number;
  /**
   * Left coordinate of the bounding box. (0,0) is upper left.
   */
  left: number;
  /**
   * Top coordinate of the bounding box. (0,0) is upper left.
   */
  top: number;
  /**
   * Width of the bounding box in pixels.
   */
  width: number;
}
/**
 * Configuration for determining how redaction of images should occur.
 */
export interface Schema$GooglePrivacyDlpV2beta1ImageRedactionConfig {
  /**
   * Only one per info_type should be provided per request. If not specified,
   * and redact_all_text is false, the DLP API will redact all text that it
   * matches against all info_types that are found, but not specified in another
   * ImageRedactionConfig.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
  /**
   * If true, all text found in the image, regardless whether it matches an
   * info_type, is redacted.
   */
  redactAllText: boolean;
  /**
   * The color to use when redacting content from an image. If not specified,
   * the default is black.
   */
  redactionColor: Schema$GooglePrivacyDlpV2beta1Color;
}
/**
 * Type of information detected by the API.
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoType {
  /**
   * Name of the information type.
   */
  name: string;
}
/**
 * Description of the information type (infoType).
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoTypeDescription {
  /**
   * List of categories this infoType belongs to.
   */
  categories: Schema$GooglePrivacyDlpV2beta1CategoryDescription[];
  /**
   * Human readable form of the infoType name.
   */
  displayName: string;
  /**
   * Internal name of the infoType.
   */
  name: string;
}
/**
 * Max findings configuration per info type, per content item or long running
 * operation.
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoTypeLimit {
  /**
   * Type of information the findings limit applies to. Only one limit per
   * info_type should be provided. If InfoTypeLimit does not have an info_type,
   * the DLP API applies the limit against all info_types that are found but not
   * specified in another InfoTypeLimit.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
  /**
   * Max findings limit for the given infoType.
   */
  maxFindings: number;
}
/**
 * Statistics regarding a specific InfoType.
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoTypeStatistics {
  /**
   * Number of findings for this info type.
   */
  count: string;
  /**
   * The type of finding this stat is for.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
}
/**
 * A transformation to apply to text that is identified as a specific info_type.
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoTypeTransformation {
  /**
   * Info types to apply the transformation to. Empty list will match all
   * available info types for this transformation.
   */
  infoTypes: Schema$GooglePrivacyDlpV2beta1InfoType[];
  /**
   * Primitive transformation to apply to the info type. [required]
   */
  primitiveTransformation:
      Schema$GooglePrivacyDlpV2beta1PrimitiveTransformation;
}
/**
 * A type of transformation that will scan unstructured text and apply various
 * `PrimitiveTransformation`s to each finding, where the transformation is
 * applied to only values that were identified as a specific info_type.
 */
export interface Schema$GooglePrivacyDlpV2beta1InfoTypeTransformations {
  /**
   * Transformation for each info type. Cannot specify more than one for a given
   * info type. [required]
   */
  transformations: Schema$GooglePrivacyDlpV2beta1InfoTypeTransformation[];
}
/**
 * Configuration description of the scanning process. When used with
 * redactContent only info_types and min_likelihood are currently used.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectConfig {
  /**
   * Custom info types provided by the user.
   */
  customInfoTypes: Schema$GooglePrivacyDlpV2beta1CustomInfoType[];
  /**
   * When true, excludes type information of the findings.
   */
  excludeTypes: boolean;
  /**
   * When true, a contextual quote from the data that triggered a finding is
   * included in the response; see Finding.quote.
   */
  includeQuote: boolean;
  /**
   * Configuration of findings limit given for specified info types.
   */
  infoTypeLimits: Schema$GooglePrivacyDlpV2beta1InfoTypeLimit[];
  /**
   * Restricts what info_types to look for. The values must correspond to
   * InfoType values returned by ListInfoTypes or found in documentation. Empty
   * info_types runs all enabled detectors.
   */
  infoTypes: Schema$GooglePrivacyDlpV2beta1InfoType[];
  /**
   * Limits the number of findings per content item or long running operation.
   */
  maxFindings: number;
  /**
   * Only returns findings equal or above this threshold.
   */
  minLikelihood: string;
}
/**
 * Request to search for potentially sensitive info in a list of items.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectContentRequest {
  /**
   * Configuration for the inspector.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta1InspectConfig;
  /**
   * The list of items to inspect. Items in a single request are considered
   * &quot;related&quot; unless inspect_config.independent_inputs is true. Up to
   * 100 are allowed per request.
   */
  items: Schema$GooglePrivacyDlpV2beta1ContentItem[];
}
/**
 * Results of inspecting a list of items.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectContentResponse {
  /**
   * Each content_item from the request has a result in this list, in the same
   * order as the request.
   */
  results: Schema$GooglePrivacyDlpV2beta1InspectResult[];
}
/**
 * Metadata returned within GetOperation for an inspect request.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectOperationMetadata {
  /**
   * The time which this request was started.
   */
  createTime: string;
  infoTypeStats: Schema$GooglePrivacyDlpV2beta1InfoTypeStatistics[];
  /**
   * Total size in bytes that were processed.
   */
  processedBytes: string;
  /**
   * The inspect config used to create the Operation.
   */
  requestInspectConfig: Schema$GooglePrivacyDlpV2beta1InspectConfig;
  /**
   * Optional location to store findings.
   */
  requestOutputConfig: Schema$GooglePrivacyDlpV2beta1OutputStorageConfig;
  /**
   * The storage config used to create the Operation.
   */
  requestStorageConfig: Schema$GooglePrivacyDlpV2beta1StorageConfig;
  /**
   * Estimate of the number of bytes to process.
   */
  totalEstimatedBytes: string;
}
/**
 * The operational data.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectOperationResult {
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the `name`
   * should have the format of `inspect/results/{id}`.
   */
  name: string;
}
/**
 * All the findings for a single scanned item.
 */
export interface Schema$GooglePrivacyDlpV2beta1InspectResult {
  /**
   * List of findings for an item.
   */
  findings: Schema$GooglePrivacyDlpV2beta1Finding[];
  /**
   * If true, then this item might have more findings than were returned, and
   * the findings returned are an arbitrary subset of all findings. The findings
   * list might be truncated because the input items were too large, or because
   * the server reached the maximum amount of resources allowed for a single API
   * call. For best results, divide the input into smaller batches.
   */
  findingsTruncated: boolean;
}
/**
 * k-anonymity metric, used for analysis of reidentification risk.
 */
export interface Schema$GooglePrivacyDlpV2beta1KAnonymityConfig {
  /**
   * Optional message indicating that each distinct entity_id should not
   * contribute to the k-anonymity count more than once per equivalence class.
   * If an entity_id appears on several rows with different quasi-identifier
   * tuples, it will contribute to each count exactly once.  This can lead to
   * unexpected results. Consider a table where ID 1 is associated to
   * quasi-identifier &quot;foo&quot;, ID 2 to &quot;bar&quot;, and ID 3 to
   * *both* quasi-identifiers &quot;foo&quot; and &quot;bar&quot; (on separate
   * rows), and where this ID is used as entity_id. Then, the anonymity value
   * associated to ID 3 will be 2, even if it is the only ID to be associated to
   * both values &quot;foo&quot; and &quot;bar&quot;.
   */
  entityId: Schema$GooglePrivacyDlpV2beta1EntityId;
  /**
   * Set of fields to compute k-anonymity over. When multiple fields are
   * specified, they are considered a single composite key. Structs and repeated
   * data types are not supported; however, nested fields are supported so long
   * as they are not structs themselves or nested within a repeated field.
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta1FieldId[];
}
/**
 * The set of columns&#39; values that share the same k-anonymity value.
 */
export interface Schema$GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass {
  /**
   * Size of the equivalence class, for example number of rows with the above
   * set of values.
   */
  equivalenceClassSize: string;
  /**
   * Set of values defining the equivalence class. One value per
   * quasi-identifier column in the original KAnonymity metric message. The
   * order is always the same as the original request.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta1Value[];
}
/**
 * Histogram bucket of equivalence class sizes in the table.
 */
export interface Schema$GooglePrivacyDlpV2beta1KAnonymityHistogramBucket {
  /**
   * Total number of records in this bucket.
   */
  bucketSize: string;
  /**
   * Sample of equivalence classes in this bucket. The total number of classes
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass[];
  /**
   * Lower bound on the size of the equivalence classes in this bucket.
   */
  equivalenceClassSizeLowerBound: string;
  /**
   * Upper bound on the size of the equivalence classes in this bucket.
   */
  equivalenceClassSizeUpperBound: string;
}
/**
 * Result of the k-anonymity computation.
 */
export interface Schema$GooglePrivacyDlpV2beta1KAnonymityResult {
  /**
   * Histogram of k-anonymity equivalence classes.
   */
  equivalenceClassHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta1KAnonymityHistogramBucket[];
}
/**
 * A unique identifier for a Datastore entity. If a key&#39;s partition ID or
 * any of its path kinds or names are reserved/read-only, the key is
 * reserved/read-only. A reserved/read-only key is forbidden in certain
 * documented contexts.
 */
export interface Schema$GooglePrivacyDlpV2beta1Key {
  /**
   * Entities are partitioned into subsets, currently identified by a project ID
   * and namespace ID. Queries are scoped to a single partition.
   */
  partitionId: Schema$GooglePrivacyDlpV2beta1PartitionId;
  /**
   * The entity path. An entity path consists of one or more elements composed
   * of a kind and a string or numerical identifier, which identify entities.
   * The first element identifies a _root entity_, the second element identifies
   * a _child_ of the root entity, the third element identifies a child of the
   * second entity, and so forth. The entities identified by all prefixes of the
   * path are called the element&#39;s _ancestors_.  A path can never be empty,
   * and a path can have at most 100 elements.
   */
  path: Schema$GooglePrivacyDlpV2beta1PathElement[];
}
/**
 * A representation of a Datastore kind.
 */
export interface Schema$GooglePrivacyDlpV2beta1KindExpression {
  /**
   * The name of the kind.
   */
  name: string;
}
/**
 * Reidentifiability metric. This corresponds to a risk model similar to what is
 * called &quot;journalist risk&quot; in the literature, except the attack
 * dataset is statistically modeled instead of being perfectly known. This can
 * be done using publicly available data (like the US Census), or using a custom
 * statistical model (indicated as one or several BigQuery tables), or by
 * extrapolating from the distribution of values in the input dataset.
 */
export interface Schema$GooglePrivacyDlpV2beta1KMapEstimationConfig {
  /**
   * Several auxiliary tables can be used in the analysis. Each custom_tag used
   * to tag a quasi-identifiers column must appear in exactly one column of one
   * auxiliary table.
   */
  auxiliaryTables: Schema$GooglePrivacyDlpV2beta1AuxiliaryTable[];
  /**
   * Fields considered to be quasi-identifiers. No two columns can have the same
   * tag. [required]
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta1TaggedField[];
  /**
   * ISO 3166-1 alpha-2 region code to use in the statistical modeling. Required
   * if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a
   * region code.
   */
  regionCode: string;
}
/**
 * A KMapEstimationHistogramBucket message with the following values:
 * min_anonymity: 3   max_anonymity: 5   frequency: 42 means that there are 42
 * records whose quasi-identifier values correspond to 3, 4 or 5 people in the
 * overlying population. An important particular case is when min_anonymity =
 * max_anonymity = 1: the frequency field then corresponds to the number of
 * uniquely identifiable records.
 */
export interface Schema$GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket {
  /**
   * Number of records within these anonymity bounds.
   */
  bucketSize: string;
  /**
   * Sample of quasi-identifier tuple values in this bucket. The total number of
   * classes returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues[];
  /**
   * Always greater than or equal to min_anonymity.
   */
  maxAnonymity: string;
  /**
   * Always positive.
   */
  minAnonymity: string;
}
/**
 * A tuple of values for the quasi-identifier columns.
 */
export interface Schema$GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues {
  /**
   * The estimated anonymity for these quasi-identifier values.
   */
  estimatedAnonymity: string;
  /**
   * The quasi-identifier values.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta1Value[];
}
/**
 * Result of the reidentifiability analysis. Note that these results are an
 * estimation, not exact values.
 */
export interface Schema$GooglePrivacyDlpV2beta1KMapEstimationResult {
  /**
   * The intervals [min_anonymity, max_anonymity] do not overlap. If a value
   * doesn&#39;t correspond to any such interval, the associated frequency is
   * zero. For example, the following records:   {min_anonymity: 1,
   * max_anonymity: 1, frequency: 17}   {min_anonymity: 2, max_anonymity: 3,
   * frequency: 42}   {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean
   * that there are no record with an estimated anonymity of 4, 5, or larger
   * than 10.
   */
  kMapEstimationHistogram:
      Schema$GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket[];
}
/**
 * Include to use an existing data crypto key wrapped by KMS. Authorization
 * requires the following IAM permissions when sending a request to perform a
 * crypto transformation using a kms-wrapped crypto key: dlp.kms.encrypt
 */
export interface Schema$GooglePrivacyDlpV2beta1KmsWrappedCryptoKey {
  /**
   * The resource name of the KMS CryptoKey to use for unwrapping. [required]
   */
  cryptoKeyName: string;
  /**
   * The wrapped data crypto key. [required]
   */
  wrappedKey: string;
}
/**
 * l-diversity metric, used for analysis of reidentification risk.
 */
export interface Schema$GooglePrivacyDlpV2beta1LDiversityConfig {
  /**
   * Set of quasi-identifiers indicating how equivalence classes are defined for
   * the l-diversity computation. When multiple fields are specified, they are
   * considered a single composite key.
   */
  quasiIds: Schema$GooglePrivacyDlpV2beta1FieldId[];
  /**
   * Sensitive field for computing the l-value.
   */
  sensitiveAttribute: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * The set of columns&#39; values that share the same l-diversity value.
 */
export interface Schema$GooglePrivacyDlpV2beta1LDiversityEquivalenceClass {
  /**
   * Size of the k-anonymity equivalence class.
   */
  equivalenceClassSize: string;
  /**
   * Number of distinct sensitive values in this equivalence class.
   */
  numDistinctSensitiveValues: string;
  /**
   * Quasi-identifier values defining the k-anonymity equivalence class. The
   * order is always the same as the original request.
   */
  quasiIdsValues: Schema$GooglePrivacyDlpV2beta1Value[];
  /**
   * Estimated frequencies of top sensitive values.
   */
  topSensitiveValues: Schema$GooglePrivacyDlpV2beta1ValueFrequency[];
}
/**
 * Histogram bucket of sensitive value frequencies in the table.
 */
export interface Schema$GooglePrivacyDlpV2beta1LDiversityHistogramBucket {
  /**
   * Total number of records in this bucket.
   */
  bucketSize: string;
  /**
   * Sample of equivalence classes in this bucket. The total number of classes
   * returned per bucket is capped at 20.
   */
  bucketValues: Schema$GooglePrivacyDlpV2beta1LDiversityEquivalenceClass[];
  /**
   * Lower bound on the sensitive value frequencies of the equivalence classes
   * in this bucket.
   */
  sensitiveValueFrequencyLowerBound: string;
  /**
   * Upper bound on the sensitive value frequencies of the equivalence classes
   * in this bucket.
   */
  sensitiveValueFrequencyUpperBound: string;
}
/**
 * Result of the l-diversity computation.
 */
export interface Schema$GooglePrivacyDlpV2beta1LDiversityResult {
  /**
   * Histogram of l-diversity equivalence class sensitive value frequencies.
   */
  sensitiveValueFrequencyHistogramBuckets:
      Schema$GooglePrivacyDlpV2beta1LDiversityHistogramBucket[];
}
/**
 * Response to the ListInfoTypes request.
 */
export interface Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse {
  /**
   * Set of sensitive info types belonging to a category.
   */
  infoTypes: Schema$GooglePrivacyDlpV2beta1InfoTypeDescription[];
}
/**
 * Response to the ListInspectFindings request.
 */
export interface Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse {
  /**
   * If not empty, indicates that there may be more results that match the
   * request; this value should be passed in a new `ListInspectFindingsRequest`.
   */
  nextPageToken: string;
  /**
   * The results.
   */
  result: Schema$GooglePrivacyDlpV2beta1InspectResult;
}
/**
 * Response for ListRootCategories request.
 */
export interface Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse {
  /**
   * List of all into type categories supported by the API.
   */
  categories: Schema$GooglePrivacyDlpV2beta1CategoryDescription[];
}
/**
 * Specifies the location of the finding.
 */
export interface Schema$GooglePrivacyDlpV2beta1Location {
  /**
   * Zero-based byte offsets delimiting the finding. These are relative to the
   * finding&#39;s containing element. Note that when the content is not
   * textual, this references the UTF-8 encoded textual representation of the
   * content. Omitted if content is an image.
   */
  byteRange: Schema$GooglePrivacyDlpV2beta1Range;
  /**
   * Unicode character offsets delimiting the finding. These are relative to the
   * finding&#39;s containing element. Provided when the content is text.
   */
  codepointRange: Schema$GooglePrivacyDlpV2beta1Range;
  /**
   * The pointer to the property or cell that contained the finding. Provided
   * when the finding&#39;s containing element is a cell in a table or a
   * property of storage object.
   */
  fieldId: Schema$GooglePrivacyDlpV2beta1FieldId;
  /**
   * The area within the image that contained the finding. Provided when the
   * content is an image.
   */
  imageBoxes: Schema$GooglePrivacyDlpV2beta1ImageLocation[];
  /**
   * The pointer to the record in storage that contained the field the finding
   * was found in. Provided when the finding&#39;s containing element is a
   * property of a storage object.
   */
  recordKey: Schema$GooglePrivacyDlpV2beta1RecordKey;
  /**
   * The pointer to the row of the table that contained the finding. Provided
   * when the finding&#39;s containing element is a cell of a table.
   */
  tableLocation: Schema$GooglePrivacyDlpV2beta1TableLocation;
}
/**
 * Compute numerical stats over an individual column, including min, max, and
 * quantiles.
 */
export interface Schema$GooglePrivacyDlpV2beta1NumericalStatsConfig {
  /**
   * Field to compute numerical stats on. Supported types are integer, float,
   * date, datetime, timestamp, time.
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * Result of the numerical stats computation.
 */
export interface Schema$GooglePrivacyDlpV2beta1NumericalStatsResult {
  /**
   * Maximum value appearing in the column.
   */
  maxValue: Schema$GooglePrivacyDlpV2beta1Value;
  /**
   * Minimum value appearing in the column.
   */
  minValue: Schema$GooglePrivacyDlpV2beta1Value;
  /**
   * List of 99 values that partition the set of field values into 100 equal
   * sized buckets.
   */
  quantileValues: Schema$GooglePrivacyDlpV2beta1Value[];
}
/**
 * Additional configuration for inspect long running operations.
 */
export interface Schema$GooglePrivacyDlpV2beta1OperationConfig {
  /**
   * Max number of findings per file, Datastore entity, or database row.
   */
  maxItemFindings: string;
}
/**
 * Cloud repository for storing output.
 */
export interface Schema$GooglePrivacyDlpV2beta1OutputStorageConfig {
  /**
   * The path to a Google Cloud Storage location to store output. The bucket
   * must already exist and the Google APIs service account for DLP must have
   * write permission to write to the given bucket. Results are split over
   * multiple csv files with each file name matching the pattern
   * &quot;[operation_id]_[count].csv&quot;, for example
   * `3094877188788974909_1.csv`. The `operation_id` matches the identifier for
   * the Operation, and the `count` is a counter used for tracking the number of
   * files written.  The CSV file(s) contain the following columns regardless of
   * storage type scanned: - id - info_type - likelihood - byte size of finding
   * - quote - timestamp  For Cloud Storage the next columns are:  - file_path -
   * start_offset  For Cloud Datastore the next columns are:  - project_id -
   * namespace_id - path - column_name - offset  For BigQuery the next columns
   * are:  - row_number - project_id - dataset_id - table_id
   */
  storagePath: Schema$GooglePrivacyDlpV2beta1CloudStoragePath;
  /**
   * Store findings in a new table in the dataset.
   */
  table: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * Datastore partition ID. A partition ID identifies a grouping of entities. The
 * grouping is always by project and namespace, however the namespace ID may be
 * empty.  A partition ID contains several dimensions: project ID and namespace
 * ID.
 */
export interface Schema$GooglePrivacyDlpV2beta1PartitionId {
  /**
   * If not empty, the ID of the namespace to which the entities belong.
   */
  namespaceId: string;
  /**
   * The ID of the project to which the entities belong.
   */
  projectId: string;
}
/**
 * A (kind, ID/name) pair used to construct a key path.  If either name or ID is
 * set, the element is complete. If neither is set, the element is incomplete.
 */
export interface Schema$GooglePrivacyDlpV2beta1PathElement {
  /**
   * The auto-allocated ID of the entity. Never equal to zero. Values less than
   * zero are discouraged and may not be supported in the future.
   */
  id: string;
  /**
   * The kind of the entity. A kind matching regex `__.*__` is
   * reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8
   * encoded. Cannot be `&quot;&quot;`.
   */
  kind: string;
  /**
   * The name of the entity. A name matching regex `__.*__` is
   * reserved/read-only. A name must not be more than 1500 bytes when UTF-8
   * encoded. Cannot be `&quot;&quot;`.
   */
  name: string;
}
/**
 * A rule for transforming a value.
 */
export interface Schema$GooglePrivacyDlpV2beta1PrimitiveTransformation {
  bucketingConfig: Schema$GooglePrivacyDlpV2beta1BucketingConfig;
  characterMaskConfig: Schema$GooglePrivacyDlpV2beta1CharacterMaskConfig;
  cryptoHashConfig: Schema$GooglePrivacyDlpV2beta1CryptoHashConfig;
  cryptoReplaceFfxFpeConfig:
      Schema$GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig;
  fixedSizeBucketingConfig:
      Schema$GooglePrivacyDlpV2beta1FixedSizeBucketingConfig;
  redactConfig: Schema$GooglePrivacyDlpV2beta1RedactConfig;
  replaceConfig: Schema$GooglePrivacyDlpV2beta1ReplaceValueConfig;
  replaceWithInfoTypeConfig:
      Schema$GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig;
  timePartConfig: Schema$GooglePrivacyDlpV2beta1TimePartConfig;
}
/**
 * Privacy metric to compute for reidentification risk analysis.
 */
export interface Schema$GooglePrivacyDlpV2beta1PrivacyMetric {
  categoricalStatsConfig: Schema$GooglePrivacyDlpV2beta1CategoricalStatsConfig;
  kAnonymityConfig: Schema$GooglePrivacyDlpV2beta1KAnonymityConfig;
  kMapEstimationConfig: Schema$GooglePrivacyDlpV2beta1KMapEstimationConfig;
  lDiversityConfig: Schema$GooglePrivacyDlpV2beta1LDiversityConfig;
  numericalStatsConfig: Schema$GooglePrivacyDlpV2beta1NumericalStatsConfig;
}
/**
 * A representation of a Datastore property in a projection.
 */
export interface Schema$GooglePrivacyDlpV2beta1Projection {
  /**
   * The property to project.
   */
  property: Schema$GooglePrivacyDlpV2beta1PropertyReference;
}
/**
 * A reference to a property relative to the Datastore kind expressions.
 */
export interface Schema$GooglePrivacyDlpV2beta1PropertyReference {
  /**
   * The name of the property. If name includes &quot;.&quot;s, it may be
   * interpreted as a property name path.
   */
  name: string;
}
/**
 * A quasi-identifier column has a custom_tag, used to know which column in the
 * data corresponds to which column in the statistical model.
 */
export interface Schema$GooglePrivacyDlpV2beta1QuasiIdField {
  customTag: string;
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
}
/**
 * Generic half-open interval [start, end)
 */
export interface Schema$GooglePrivacyDlpV2beta1Range {
  /**
   * Index of the last character of the range (exclusive).
   */
  end: string;
  /**
   * Index of the first character of the range (inclusive).
   */
  start: string;
}
/**
 * A condition for determining whether a transformation should be applied to a
 * field.
 */
export interface Schema$GooglePrivacyDlpV2beta1RecordCondition {
  expressions: Schema$GooglePrivacyDlpV2beta1Expressions;
}
/**
 * Message for a unique key indicating a record that contains a finding.
 */
export interface Schema$GooglePrivacyDlpV2beta1RecordKey {
  bigQueryKey: Schema$GooglePrivacyDlpV2beta1BigQueryKey;
  cloudStorageKey: Schema$GooglePrivacyDlpV2beta1CloudStorageKey;
  datastoreKey: Schema$GooglePrivacyDlpV2beta1DatastoreKey;
}
/**
 * Configuration to suppress records whose suppression conditions evaluate to
 * true.
 */
export interface Schema$GooglePrivacyDlpV2beta1RecordSuppression {
  condition: Schema$GooglePrivacyDlpV2beta1RecordCondition;
}
/**
 * A type of transformation that is applied over structured data such as a
 * table.
 */
export interface Schema$GooglePrivacyDlpV2beta1RecordTransformations {
  /**
   * Transform the record by applying various field transformations.
   */
  fieldTransformations: Schema$GooglePrivacyDlpV2beta1FieldTransformation[];
  /**
   * Configuration defining which records get suppressed entirely. Records that
   * match any suppression rule are omitted from the output [optional].
   */
  recordSuppressions: Schema$GooglePrivacyDlpV2beta1RecordSuppression[];
}
/**
 * Redact a given value. For example, if used with an `InfoTypeTransformation`
 * transforming PHONE_NUMBER, and input &#39;My phone number is
 * 206-555-0123&#39;, the output would be &#39;My phone number is &#39;.
 */
export interface Schema$GooglePrivacyDlpV2beta1RedactConfig {}
/**
 * Request to search for potentially sensitive info in a list of items and
 * replace it with a default or provided content.
 */
export interface Schema$GooglePrivacyDlpV2beta1RedactContentRequest {
  /**
   * The configuration for specifying what content to redact from images.
   */
  imageRedactionConfigs: Schema$GooglePrivacyDlpV2beta1ImageRedactionConfig[];
  /**
   * Configuration for the inspector.
   */
  inspectConfig: Schema$GooglePrivacyDlpV2beta1InspectConfig;
  /**
   * The list of items to inspect. Up to 100 are allowed per request.
   */
  items: Schema$GooglePrivacyDlpV2beta1ContentItem[];
  /**
   * The strings to replace findings text findings with. Must specify at least
   * one of these or one ImageRedactionConfig if redacting images.
   */
  replaceConfigs: Schema$GooglePrivacyDlpV2beta1ReplaceConfig[];
}
/**
 * Results of redacting a list of items.
 */
export interface Schema$GooglePrivacyDlpV2beta1RedactContentResponse {
  /**
   * The redacted content.
   */
  items: Schema$GooglePrivacyDlpV2beta1ContentItem[];
}
export interface Schema$GooglePrivacyDlpV2beta1ReplaceConfig {
  /**
   * Type of information to replace. Only one ReplaceConfig per info_type should
   * be provided. If ReplaceConfig does not have an info_type, the DLP API
   * matches it against all info_types that are found but not specified in
   * another ReplaceConfig.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
  /**
   * Content replacing sensitive information of given type. Max 256 chars.
   */
  replaceWith: string;
}
/**
 * Replace each input value with a given `Value`.
 */
export interface Schema$GooglePrivacyDlpV2beta1ReplaceValueConfig {
  /**
   * Value to replace it with.
   */
  newValue: Schema$GooglePrivacyDlpV2beta1Value;
}
/**
 * Replace each matching finding with the name of the info_type.
 */
export interface Schema$GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig {}
/**
 * Metadata returned within the
 * [`riskAnalysis.operations.get`](/dlp/docs/reference/rest/v2beta1/riskAnalysis.operations/get)
 * for risk analysis.
 */
export interface Schema$GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata {
  /**
   * The time which this request was started.
   */
  createTime: string;
  /**
   * Privacy metric to compute.
   */
  requestedPrivacyMetric: Schema$GooglePrivacyDlpV2beta1PrivacyMetric;
  /**
   * Input dataset to compute metrics over.
   */
  requestedSourceTable: Schema$GooglePrivacyDlpV2beta1BigQueryTable;
}
/**
 * Result of a risk analysis
 * [`Operation`](/dlp/docs/reference/rest/v2beta1/inspect.operations) request.
 */
export interface Schema$GooglePrivacyDlpV2beta1RiskAnalysisOperationResult {
  categoricalStatsResult: Schema$GooglePrivacyDlpV2beta1CategoricalStatsResult;
  kAnonymityResult: Schema$GooglePrivacyDlpV2beta1KAnonymityResult;
  kMapEstimationResult: Schema$GooglePrivacyDlpV2beta1KMapEstimationResult;
  lDiversityResult: Schema$GooglePrivacyDlpV2beta1LDiversityResult;
  numericalStatsResult: Schema$GooglePrivacyDlpV2beta1NumericalStatsResult;
}
export interface Schema$GooglePrivacyDlpV2beta1Row {
  values: Schema$GooglePrivacyDlpV2beta1Value[];
}
/**
 * Shared message indicating Cloud storage type.
 */
export interface Schema$GooglePrivacyDlpV2beta1StorageConfig {
  /**
   * BigQuery options specification.
   */
  bigQueryOptions: Schema$GooglePrivacyDlpV2beta1BigQueryOptions;
  /**
   * Google Cloud Storage options specification.
   */
  cloudStorageOptions: Schema$GooglePrivacyDlpV2beta1CloudStorageOptions;
  /**
   * Google Cloud Datastore options specification.
   */
  datastoreOptions: Schema$GooglePrivacyDlpV2beta1DatastoreOptions;
}
/**
 * A collection that informs the user the number of times a particular
 * `TransformationResultCode` and error details occurred.
 */
export interface Schema$GooglePrivacyDlpV2beta1SummaryResult {
  code: string;
  count: string;
  /**
   * A place for warnings or errors to show up if a transformation didn&#39;t
   * work as expected.
   */
  details: string;
}
/**
 * Message for detecting output from deidentification transformations such as
 * [`CryptoReplaceFfxFpeConfig`](/dlp/docs/reference/rest/v2beta1/content/deidentify#CryptoReplaceFfxFpeConfig).
 * These types of transformations are those that perform pseudonymization,
 * thereby producing a &quot;surrogate&quot; as output. This should be used in
 * conjunction with a field on the transformation such as `surrogate_info_type`.
 * This custom info type does not support the use of `detection_rules`.
 */
export interface Schema$GooglePrivacyDlpV2beta1SurrogateType {}
/**
 * Structured content to inspect. Up to 50,000 `Value`s per request allowed.
 */
export interface Schema$GooglePrivacyDlpV2beta1Table {
  headers: Schema$GooglePrivacyDlpV2beta1FieldId[];
  rows: Schema$GooglePrivacyDlpV2beta1Row[];
}
/**
 * Location of a finding within a table.
 */
export interface Schema$GooglePrivacyDlpV2beta1TableLocation {
  /**
   * The zero-based index of the row where the finding is located.
   */
  rowIndex: string;
}
/**
 * A column with a semantic tag attached.
 */
export interface Schema$GooglePrivacyDlpV2beta1TaggedField {
  /**
   * A column can be tagged with a custom tag. In this case, the user must
   * indicate an auxiliary table that contains statistical information on the
   * possible values of this column (below).
   */
  customTag: string;
  /**
   * Identifies the column. [required]
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
  /**
   * If no semantic tag is indicated, we infer the statistical model from the
   * distribution of values in the input data
   */
  inferred: Schema$GoogleProtobufEmpty;
  /**
   * A column can be tagged with a InfoType to use the relevant public dataset
   * as a statistical model of population, if available. We currently support US
   * ZIP codes, region codes, ages and genders.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
}
/**
 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
 * portion of the value.
 */
export interface Schema$GooglePrivacyDlpV2beta1TimePartConfig {
  partToExtract: string;
}
/**
 * Summary of a single tranformation. Only one of &#39;transformation&#39;,
 * &#39;field_transformation&#39;, or &#39;record_suppress&#39; will be set.
 */
export interface Schema$GooglePrivacyDlpV2beta1TransformationSummary {
  /**
   * Set if the transformation was limited to a specific FieldId.
   */
  field: Schema$GooglePrivacyDlpV2beta1FieldId;
  /**
   * The field transformation that was applied. If multiple field
   * transformations are requested for a single field, this list will contain
   * all of them; otherwise, only one is supplied.
   */
  fieldTransformations: Schema$GooglePrivacyDlpV2beta1FieldTransformation[];
  /**
   * Set if the transformation was limited to a specific info_type.
   */
  infoType: Schema$GooglePrivacyDlpV2beta1InfoType;
  /**
   * The specific suppression option these stats apply to.
   */
  recordSuppress: Schema$GooglePrivacyDlpV2beta1RecordSuppression;
  results: Schema$GooglePrivacyDlpV2beta1SummaryResult[];
  /**
   * The specific transformation these stats apply to.
   */
  transformation: Schema$GooglePrivacyDlpV2beta1PrimitiveTransformation;
  /**
   * Total size in bytes that were transformed in some way.
   */
  transformedBytes: string;
}
/**
 * Use this to have a random data crypto key generated. It will be discarded
 * after the operation/request finishes.
 */
export interface Schema$GooglePrivacyDlpV2beta1TransientCryptoKey {
  /**
   * Name of the key. [required] This is an arbitrary string used to
   * differentiate different keys. A unique key is generated per name: two
   * separate `TransientCryptoKey` protos share the same generated key if their
   * names are the same. When the data crypto key is generated, this name is not
   * used in any way (repeating the api call will result in a different key
   * being generated).
   */
  name: string;
}
/**
 * Using raw keys is prone to security risks due to accidentally leaking the
 * key. Choose another type of key if possible.
 */
export interface Schema$GooglePrivacyDlpV2beta1UnwrappedCryptoKey {
  /**
   * The AES 128/192/256 bit key. [required]
   */
  key: string;
}
/**
 * Set of primitive values supported by the system. Note that for the purposes
 * of inspection or transformation, the number of bytes considered to comprise a
 * &#39;Value&#39; is based on its representation as a UTF-8 encoded string. For
 * example, if &#39;integer_value&#39; is set to 123456789, the number of bytes
 * would be counted as 9, even though an int64 only holds up to 8 bytes of data.
 */
export interface Schema$GooglePrivacyDlpV2beta1Value {
  booleanValue: boolean;
  dateValue: Schema$GoogleTypeDate;
  floatValue: number;
  integerValue: string;
  stringValue: string;
  timestampValue: string;
  timeValue: Schema$GoogleTypeTimeOfDay;
}
/**
 * A value of a field, including its frequency.
 */
export interface Schema$GooglePrivacyDlpV2beta1ValueFrequency {
  /**
   * How many times the value is contained in the field.
   */
  count: string;
  /**
   * A value contained in the field in question.
   */
  value: Schema$GooglePrivacyDlpV2beta1Value;
}
/**
 * Message defining a list of words or phrases to search for in the data.
 */
export interface Schema$GooglePrivacyDlpV2beta1WordList {
  /**
   * Words or phrases defining the dictionary. The dictionary must contain at
   * least one phrase and every phrase must contain at least 2 characters that
   * are letters or digits. [required]
   */
  words: string[];
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$GoogleProtobufEmpty {}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may have a
 * `Status` message for error reporting.  - Batch operations. If a client uses
 * batch request and batch response, the     `Status` message should be used
 * directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be     represented
 * directly using the `Status` message.  - Logging. If some API errors are
 * stored in logs, the message `Status` could     be used directly after any
 * stripping needed for security/privacy reasons.
 */
export interface Schema$GoogleRpcStatus {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * Represents a whole calendar date, e.g. date of birth. The time of day and
 * time zone are either specified elsewhere or are not significant. The date is
 * relative to the Proleptic Gregorian Calendar. The day may be 0 to represent a
 * year and month where the day is not significant, e.g. credit card expiration
 * date. The year may be 0 to represent a month and day independent of year,
 * e.g. anniversary date. Related types are google.type.TimeOfDay and
 * `google.protobuf.Timestamp`.
 */
export interface Schema$GoogleTypeDate {
  /**
   * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
   * if specifying a year/month where the day is not significant.
   */
  day: number;
  /**
   * Month of year. Must be from 1 to 12, or 0 if specifying a date without a
   * month.
   */
  month: number;
  /**
   * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
   * year.
   */
  year: number;
}
/**
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere. An API may choose to allow leap seconds. Related
 * types are google.type.Date and `google.protobuf.Timestamp`.
 */
export interface Schema$GoogleTypeTimeOfDay {
  /**
   * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
   * to allow the value &quot;24:00:00&quot; for scenarios like business closing
   * time.
   */
  hours: number;
  /**
   * Minutes of hour of day. Must be from 0 to 59.
   */
  minutes: number;
  /**
   * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
   */
  nanos: number;
  /**
   * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
   * allow the value 60 if it allows leap-seconds.
   */
  seconds: number;
}

export class Resource$Content {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dlp.content.deidentify
   * @desc De-identifies potentially sensitive info from a list of strings. This
   * method has limits on input size and output size.
   * @alias dlp.content.deidentify
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().GooglePrivacyDlpV2beta1DeidentifyContentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  deidentify(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse>;
  deidentify(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse>): void;
  deidentify(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse>): void|
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/content:deidentify')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$GooglePrivacyDlpV2beta1DeidentifyContentResponse>(parameters);
    }
  }


  /**
   * dlp.content.inspect
   * @desc Finds potentially sensitive info in a list of strings. This method
   * has limits on input size, processing time, and output size.
   * @alias dlp.content.inspect
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().GooglePrivacyDlpV2beta1InspectContentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  inspect(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1InspectContentResponse>;
  inspect(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1InspectContentResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1InspectContentResponse>): void;
  inspect(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1InspectContentResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1InspectContentResponse>):
      void|AxiosPromise<Schema$GooglePrivacyDlpV2beta1InspectContentResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/content:inspect')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GooglePrivacyDlpV2beta1InspectContentResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$GooglePrivacyDlpV2beta1InspectContentResponse>(parameters);
    }
  }


  /**
   * dlp.content.redact
   * @desc Redacts potentially sensitive info from a list of strings. This
   * method has limits on input size, processing time, and output size.
   * @alias dlp.content.redact
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().GooglePrivacyDlpV2beta1RedactContentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  redact(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1RedactContentResponse>;
  redact(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GooglePrivacyDlpV2beta1RedactContentResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1RedactContentResponse>): void;
  redact(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GooglePrivacyDlpV2beta1RedactContentResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1RedactContentResponse>):
      void|AxiosPromise<Schema$GooglePrivacyDlpV2beta1RedactContentResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/content:redact')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GooglePrivacyDlpV2beta1RedactContentResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$GooglePrivacyDlpV2beta1RedactContentResponse>(parameters);
    }
  }
}

export class Resource$Datasource {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dlp.dataSource.analyze
   * @desc Schedules a job to compute risk analysis metrics over content in a
   * Google Cloud Platform repository.
   * @alias dlp.dataSource.analyze
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  analyze(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunningOperation>;
  analyze(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
  analyze(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
      void|AxiosPromise<Schema$GoogleLongrunningOperation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/dataSource:analyze')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunningOperation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
    }
  }
}

export class Resource$Inspect {
  root: Dlp;
  operations: Resource$Inspect$Operations;
  results: Resource$Inspect$Results;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
    this.operations = new Resource$Inspect$Operations(root);
    this.results = new Resource$Inspect$Results(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Inspect$Operations {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dlp.inspect.operations.cancel
   * @desc Cancels an operation. Use the `inspect.operations.get` to check
   * whether the cancellation succeeded or the operation completed despite
   * cancellation.
   * @alias dlp.inspect.operations.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be cancelled.
   * @param {().GoogleLongrunningCancelOperationRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleProtobufEmpty>;
  cancel(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
  cancel(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
      void|AxiosPromise<Schema$GoogleProtobufEmpty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}:cancel')
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
      createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
    }
  }


  /**
   * dlp.inspect.operations.create
   * @desc Schedules a job scanning content in a Google Cloud Platform data
   * repository.
   * @alias dlp.inspect.operations.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().GooglePrivacyDlpV2beta1CreateInspectOperationRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunningOperation>;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
      void|AxiosPromise<Schema$GoogleLongrunningOperation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/inspect/operations')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunningOperation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
    }
  }


  /**
   * dlp.inspect.operations.delete
   * @desc This method is not supported and the server returns `UNIMPLEMENTED`.
   * @alias dlp.inspect.operations.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be deleted.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleProtobufEmpty>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
      void|AxiosPromise<Schema$GoogleProtobufEmpty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
    }
  }


  /**
   * dlp.inspect.operations.get
   * @desc Gets the latest state of a long-running operation.  Clients can use
   * this method to poll the operation result at intervals as recommended by the
   * API service.
   * @alias dlp.inspect.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GoogleLongrunningOperation>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
      void|AxiosPromise<Schema$GoogleLongrunningOperation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunningOperation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
    }
  }


  /**
   * dlp.inspect.operations.list
   * @desc Fetches the list of long running operations.
   * @alias dlp.inspect.operations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter Filters by `done`. That is, `done=true` or `done=false`.
   * @param {string} params.name The name of the operation's parent resource.
   * @param {integer=} params.pageSize The list page size. The maximum allowed value is 256 and the default is 100.
   * @param {string=} params.pageToken The standard list page token.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>):
      void|AxiosPromise<Schema$GoogleLongrunningListOperationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters);
    }
  }
}

export class Resource$Inspect$Results {
  root: Dlp;
  findings: Resource$Inspect$Results$Findings;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
    this.findings = new Resource$Inspect$Results$Findings(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Inspect$Results$Findings {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dlp.inspect.results.findings.list
   * @desc Returns list of results for given inspect operation result set id.
   * @alias dlp.inspect.results.findings.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter Restricts findings to items that match. Supports info_type and likelihood.  Examples:  - info_type=EMAIL_ADDRESS - info_type=PHONE_NUMBER,EMAIL_ADDRESS - likelihood=VERY_LIKELY - likelihood=VERY_LIKELY,LIKELY - info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
   * @param {string} params.name Identifier of the results set returned as metadata of the longrunning operation created by a call to InspectDataSource. Should be in the format of `inspect/results/{id}`.
   * @param {integer=} params.pageSize Maximum number of results to return. If 0, the implementation selects a reasonable value.
   * @param {string=} params.pageToken The value returned by the last `ListInspectFindingsResponse`; indicates that this is a continuation of a prior `ListInspectFindings` call, and that the system should return the next page of data.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse>): void|
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}/findings')
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
      createAPIRequest<
          Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$GooglePrivacyDlpV2beta1ListInspectFindingsResponse>(
          parameters);
    }
  }
}



export class Resource$Riskanalysis {
  root: Dlp;
  operations: Resource$Riskanalysis$Operations;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
    this.operations = new Resource$Riskanalysis$Operations(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Riskanalysis$Operations {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dlp.riskAnalysis.operations.cancel
   * @desc Cancels an operation. Use the `inspect.operations.get` to check
   * whether the cancellation succeeded or the operation completed despite
   * cancellation.
   * @alias dlp.riskAnalysis.operations.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be cancelled.
   * @param {().GoogleLongrunningCancelOperationRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleProtobufEmpty>;
  cancel(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
  cancel(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
      void|AxiosPromise<Schema$GoogleProtobufEmpty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}:cancel')
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
      createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
    }
  }


  /**
   * dlp.riskAnalysis.operations.delete
   * @desc This method is not supported and the server returns `UNIMPLEMENTED`.
   * @alias dlp.riskAnalysis.operations.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be deleted.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleProtobufEmpty>;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
  delete(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
      void|AxiosPromise<Schema$GoogleProtobufEmpty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
    }
  }


  /**
   * dlp.riskAnalysis.operations.get
   * @desc Gets the latest state of a long-running operation.  Clients can use
   * this method to poll the operation result at intervals as recommended by the
   * API service.
   * @alias dlp.riskAnalysis.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GoogleLongrunningOperation>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
      void|AxiosPromise<Schema$GoogleLongrunningOperation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunningOperation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
    }
  }


  /**
   * dlp.riskAnalysis.operations.list
   * @desc Fetches the list of long running operations.
   * @alias dlp.riskAnalysis.operations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter Filters by `done`. That is, `done=true` or `done=false`.
   * @param {string} params.name The name of the operation's parent resource.
   * @param {integer=} params.pageSize The list page size. The maximum allowed value is 256 and the default is 100.
   * @param {string=} params.pageToken The standard list page token.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>):
      void|AxiosPromise<Schema$GoogleLongrunningListOperationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters);
    }
  }
}


export class Resource$Rootcategories {
  root: Dlp;
  infoTypes: Resource$Rootcategories$Infotypes;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
    this.infoTypes = new Resource$Rootcategories$Infotypes(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dlp.rootCategories.list
   * @desc Returns the list of root categories of sensitive information.
   * @alias dlp.rootCategories.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.languageCode Optional language code for localized friendly category names. If omitted or if localized strings are not available, en-US strings will be returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse>): void|
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/rootCategories')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<
          Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$GooglePrivacyDlpV2beta1ListRootCategoriesResponse>(parameters);
    }
  }
}
export class Resource$Rootcategories$Infotypes {
  root: Dlp;
  constructor(root: Dlp) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dlp.rootCategories.infoTypes.list
   * @desc Returns sensitive information types for given category.
   * @alias dlp.rootCategories.infoTypes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.category Category name as returned by ListRootCategories.
   * @param {string=} params.languageCode Optional BCP-47 language code for localized info type friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse>,
      callback?: BodyResponseCallback<
          Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse>):
      void|AxiosPromise<Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/rootCategories/{+category}/infoTypes')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['category'],
      pathParams: ['category'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$GooglePrivacyDlpV2beta1ListInfoTypesResponse>(parameters);
    }
  }
}
