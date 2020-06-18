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

export namespace documentai_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
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
   * Cloud Document AI API
   *
   * Service to parse structured information from unstructured or semi-structured documents using state-of-the-art Google AI such as natural language, computer vision, translation, and AutoML.
   *
   * @example
   * const {google} = require('googleapis');
   * const documentai = google.documentai('v1beta2');
   *
   * @namespace documentai
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
   * @param {object=} options Options for Documentai
   */
  export class Documentai {
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
   * Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse {
    /**
     * Responses for each individual document.
     */
    responses?: Schema$GoogleCloudDocumentaiV1beta1ProcessDocumentResponse[];
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudDocumentaiV1beta1NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudDocumentaiV1beta1Vertex[];
  }
  /**
   * Document represents the canonical document resource in Document Understanding AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document Understanding AI to iterate and optimize for quality.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1Document {
    /**
     * Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: string | null;
    /**
     * A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
     */
    entities?: Schema$GoogleCloudDocumentaiV1beta1DocumentEntity[];
    /**
     * Relationship among Document.entities.
     */
    entityRelations?: Schema$GoogleCloudDocumentaiV1beta1DocumentEntityRelation[];
    /**
     * Any error that occurred while processing this document.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.
     */
    mimeType?: string | null;
    /**
     * Visual page layout for the Document.
     */
    pages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPage[];
    /**
     * Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.
     */
    shardInfo?: Schema$GoogleCloudDocumentaiV1beta1DocumentShardInfo;
    /**
     * UTF-8 encoded text in reading order from the document.
     */
    text?: string | null;
    /**
     * Styles for the Document.text.
     */
    textStyles?: Schema$GoogleCloudDocumentaiV1beta1DocumentStyle[];
    /**
     * A list of translations on Document.text. For document shards, translations in this list may cross shard boundaries.
     */
    translations?: Schema$GoogleCloudDocumentaiV1beta1DocumentTranslation[];
    /**
     * Currently supports Google Cloud Storage URI of the form    `gs://bucket_name/object_name`. Object versioning is not supported.    See [Google Cloud Storage Request    URIs](https://cloud.google.com/storage/docs/reference-uris) for more    info.
     */
    uri?: string | null;
  }
  /**
   * A phrase in the text that is a known entity type, such as a person, an organization, or location.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentEntity {
    /**
     * Optional. Confidence of detected Schema entity. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Deprecated.  Use `id` field instead.
     */
    mentionId?: string | null;
    /**
     * Text value in the document e.g. `1600 Amphitheatre Pkwy`.
     */
    mentionText?: string | null;
    /**
     * Provenance of the entity. Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
    /**
     * Entity type from a schema e.g. `Address`.
     */
    type?: string | null;
  }
  /**
   * Relationship between Entities.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentEntityRelation {
    /**
     * Object entity id.
     */
    objectId?: string | null;
    /**
     * Relationship description.
     */
    relation?: string | null;
    /**
     * Subject entity id.
     */
    subjectId?: string | null;
  }
  /**
   * A page in a Document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPage {
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     */
    blocks?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageBlock[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Physical dimension of the page.
     */
    dimension?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDimension;
    /**
     * A list of visually detected form fields on the page.
     */
    formFields?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageFormField[];
    /**
     * Layout for the page.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     */
    lines?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLine[];
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     */
    pageNumber?: number | null;
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     */
    paragraphs?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageParagraph[];
    /**
     * A list of visually detected tables on the page.
     */
    tables?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTable[];
    /**
     * A list of visually detected tokens on the page.
     */
    tokens?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageToken[];
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     */
    visualElements?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageVisualElement[];
  }
  /**
   * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageBlock {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Block.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Dimension for the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageDimension {
    /**
     * Page height.
     */
    height?: number | null;
    /**
     * Dimension unit.
     */
    unit?: string | null;
    /**
     * Page width.
     */
    width?: number | null;
  }
  /**
   * A form field detected on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageFormField {
    /**
     * Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.
     */
    fieldName?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * Layout for the FormField value.
     */
    fieldValue?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * A list of detected languages for name together with confidence.
     */
    nameDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * A list of detected languages for value together with confidence.
     */
    valueDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
  }
  /**
   * Visual element describing a layout unit on a page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout {
    /**
     * The bounding polygon for the Layout.
     */
    boundingPoly?: Schema$GoogleCloudDocumentaiV1beta1BoundingPoly;
    /**
     * Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Detected orientation for the Layout.
     */
    orientation?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
  }
  /**
   * A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageLine {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Line.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
  }
  /**
   * A collection of lines that a human would perceive as a paragraph.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageParagraph {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Paragraph.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
  }
  /**
   * A table representation similar to HTML table structure.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTable {
    /**
     * Body rows of the table.
     */
    bodyRows?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Header rows of the table.
     */
    headerRows?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow[];
    /**
     * Layout for Table.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
  }
  /**
   * A cell representation inside the table.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell {
    /**
     * How many columns this cell spans.
     */
    colSpan?: number | null;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for TableCell.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * How many rows this cell spans.
     */
    rowSpan?: number | null;
  }
  /**
   * A row of table cells.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow {
    /**
     * Cells that make up this row.
     */
    cells?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell[];
  }
  /**
   * A detected token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageToken {
    /**
     * Detected break at the end of a Token.
     */
    detectedBreak?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Token.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
  }
  /**
   * Detected break at the end of a Token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak {
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageVisualElement {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for VisualElement.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * Type of the VisualElement.
     */
    type?: string | null;
  }
  /**
   * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentShardInfo {
    /**
     * Total number of shards.
     */
    shardCount?: string | null;
    /**
     * The 0-based index of this shard.
     */
    shardIndex?: string | null;
    /**
     * The index of the first character in Document.text in the overall document global text.
     */
    textOffset?: string | null;
  }
  /**
   * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentStyle {
    /**
     * Text background color.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Text color.
     */
    color?: Schema$GoogleTypeColor;
    /**
     * Font size.
     */
    fontSize?: Schema$GoogleCloudDocumentaiV1beta1DocumentStyleFontSize;
    /**
     * Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp
     */
    fontWeight?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
    /**
     * Text decoration. Follows CSS standard. &lt;text-decoration-line&gt; &lt;text-decoration-color&gt; &lt;text-decoration-style&gt; https://www.w3schools.com/cssref/pr_text_text-decoration.asp
     */
    textDecoration?: string | null;
    /**
     * Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp
     */
    textStyle?: string | null;
  }
  /**
   * Font size with unit.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentStyleFontSize {
    /**
     * Font size for the text.
     */
    size?: number | null;
    /**
     * Unit for the font size. Follows CSS naming (in, px, pt, etc.).
     */
    unit?: string | null;
  }
  /**
   * Text reference indexing into the Document.text.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor {
    /**
     * The text segments from the Document.text.
     */
    textSegments?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment[];
  }
  /**
   * A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment {
    /**
     * TextSegment half open end UTF-8 char index in the Document.text.
     */
    endIndex?: string | null;
    /**
     * TextSegment start UTF-8 char index in the Document.text.
     */
    startIndex?: string | null;
  }
  /**
   * A translation of the text segment.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentTranslation {
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Provenance of the translation. Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
    /**
     * Text translated into the target language.
     */
    translatedText?: string | null;
  }
  /**
   * The Google Cloud Storage location where the output file will be written to.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1GcsDestination {
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input file will be read from.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1GcsSource {
    uri?: string | null;
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1InputConfig {
    /**
     * The Google Cloud Storage location to read the input from. This must be a single file.
     */
    gcsSource?: Schema$GoogleCloudDocumentaiV1beta1GcsSource;
    /**
     * Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.
     */
    mimeType?: string | null;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Contains metadata for the BatchProcessDocuments operation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1OperationMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * The state of the current batch processing.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1OutputConfig {
    /**
     * The Google Cloud Storage location to write the output to.
     */
    gcsDestination?: Schema$GoogleCloudDocumentaiV1beta1GcsDestination;
    /**
     * The max number of pages to include into each output Document shard JSON on Google Cloud Storage.  The valid range is [1, 100]. If not specified, the default value is 20.  For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers.  Example GCS outputs with 157 pages and pages_per_shard = 50:  &lt;prefix&gt;pages-001-to-050.json &lt;prefix&gt;pages-051-to-100.json &lt;prefix&gt;pages-101-to-150.json &lt;prefix&gt;pages-151-to-157.json
     */
    pagesPerShard?: number | null;
  }
  /**
   * Response to a single document processing request.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1ProcessDocumentResponse {
    /**
     * Information about the input file. This is the same as the corresponding input config in the request.
     */
    inputConfig?: Schema$GoogleCloudDocumentaiV1beta1InputConfig;
    /**
     * The output location of the parsed responses. The responses are written to this location as JSON-serialized `Document` objects.
     */
    outputConfig?: Schema$GoogleCloudDocumentaiV1beta1OutputConfig;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Parameters to control AutoML model prediction behavior.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2AutoMlParams {
    /**
     * Resource name of the AutoML model.  Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`.
     */
    model?: string | null;
  }
  /**
   * Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest {
    /**
     * Required. Individual requests for each document.
     */
    requests?: Schema$GoogleCloudDocumentaiV1beta2ProcessDocumentRequest[];
  }
  /**
   * Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse {
    /**
     * Responses for each individual document.
     */
    responses?: Schema$GoogleCloudDocumentaiV1beta2ProcessDocumentResponse[];
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudDocumentaiV1beta2NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudDocumentaiV1beta2Vertex[];
  }
  /**
   * Document represents the canonical document resource in Document Understanding AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document Understanding AI to iterate and optimize for quality.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2Document {
    /**
     * Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: string | null;
    /**
     * A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
     */
    entities?: Schema$GoogleCloudDocumentaiV1beta2DocumentEntity[];
    /**
     * Relationship among Document.entities.
     */
    entityRelations?: Schema$GoogleCloudDocumentaiV1beta2DocumentEntityRelation[];
    /**
     * Any error that occurred while processing this document.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Labels for this document.
     */
    labels?: Schema$GoogleCloudDocumentaiV1beta2DocumentLabel[];
    /**
     * An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.
     */
    mimeType?: string | null;
    /**
     * Visual page layout for the Document.
     */
    pages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPage[];
    /**
     * Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.
     */
    shardInfo?: Schema$GoogleCloudDocumentaiV1beta2DocumentShardInfo;
    /**
     * UTF-8 encoded text in reading order from the document.
     */
    text?: string | null;
    /**
     * Styles for the Document.text.
     */
    textStyles?: Schema$GoogleCloudDocumentaiV1beta2DocumentStyle[];
    /**
     * A list of translations on Document.text. For document shards, translations in this list may cross shard boundaries.
     */
    translations?: Schema$GoogleCloudDocumentaiV1beta2DocumentTranslation[];
    /**
     * Currently supports Google Cloud Storage URI of the form    `gs://bucket_name/object_name`. Object versioning is not supported.    See [Google Cloud Storage Request    URIs](https://cloud.google.com/storage/docs/reference-uris) for more    info.
     */
    uri?: string | null;
  }
  /**
   * A phrase in the text that is a known entity type, such as a person, an organization, or location.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentEntity {
    /**
     * Optional. Confidence of detected Schema entity. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Deprecated.  Use `id` field instead.
     */
    mentionId?: string | null;
    /**
     * Text value in the document e.g. `1600 Amphitheatre Pkwy`.
     */
    mentionText?: string | null;
    /**
     * Provenance of the entity. Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
    /**
     * Entity type from a schema e.g. `Address`.
     */
    type?: string | null;
  }
  /**
   * Relationship between Entities.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentEntityRelation {
    /**
     * Object entity id.
     */
    objectId?: string | null;
    /**
     * Relationship description.
     */
    relation?: string | null;
    /**
     * Subject entity id.
     */
    subjectId?: string | null;
  }
  /**
   * Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentLabel {
    /**
     * Label is generated AutoML model. This field stores the full resource name of the AutoML model.  Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`
     */
    automlModel?: string | null;
    /**
     * Confidence score between 0 and 1 for label assignment.
     */
    confidence?: number | null;
    /**
     * Name of the label.  When the label is generated from AutoML Text Classification model, this field represents the name of the category.
     */
    name?: string | null;
  }
  /**
   * A page in a Document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPage {
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     */
    blocks?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageBlock[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Physical dimension of the page.
     */
    dimension?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDimension;
    /**
     * A list of visually detected form fields on the page.
     */
    formFields?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageFormField[];
    /**
     * Layout for the page.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     */
    lines?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLine[];
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     */
    pageNumber?: number | null;
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     */
    paragraphs?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageParagraph[];
    /**
     * A list of visually detected tables on the page.
     */
    tables?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTable[];
    /**
     * A list of visually detected tokens on the page.
     */
    tokens?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageToken[];
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     */
    visualElements?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageVisualElement[];
  }
  /**
   * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageBlock {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Block.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Dimension for the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageDimension {
    /**
     * Page height.
     */
    height?: number | null;
    /**
     * Dimension unit.
     */
    unit?: string | null;
    /**
     * Page width.
     */
    width?: number | null;
  }
  /**
   * A form field detected on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageFormField {
    /**
     * Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.
     */
    fieldName?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * Layout for the FormField value.
     */
    fieldValue?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * A list of detected languages for name together with confidence.
     */
    nameDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * A list of detected languages for value together with confidence.
     */
    valueDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the field_value is normal text) - &quot;unfilled_checkbox&quot; - &quot;filled_checkbox&quot;
     */
    valueType?: string | null;
  }
  /**
   * Visual element describing a layout unit on a page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout {
    /**
     * The bounding polygon for the Layout.
     */
    boundingPoly?: Schema$GoogleCloudDocumentaiV1beta2BoundingPoly;
    /**
     * Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Detected orientation for the Layout.
     */
    orientation?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
  }
  /**
   * A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageLine {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Line.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
  }
  /**
   * A collection of lines that a human would perceive as a paragraph.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageParagraph {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Paragraph.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
  }
  /**
   * A table representation similar to HTML table structure.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTable {
    /**
     * Body rows of the table.
     */
    bodyRows?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Header rows of the table.
     */
    headerRows?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];
    /**
     * Layout for Table.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
  }
  /**
   * A cell representation inside the table.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell {
    /**
     * How many columns this cell spans.
     */
    colSpan?: number | null;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for TableCell.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * How many rows this cell spans.
     */
    rowSpan?: number | null;
  }
  /**
   * A row of table cells.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow {
    /**
     * Cells that make up this row.
     */
    cells?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell[];
  }
  /**
   * A detected token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageToken {
    /**
     * Detected break at the end of a Token.
     */
    detectedBreak?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Token.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
  }
  /**
   * Detected break at the end of a Token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak {
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageVisualElement {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for VisualElement.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * Type of the VisualElement.
     */
    type?: string | null;
  }
  /**
   * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentShardInfo {
    /**
     * Total number of shards.
     */
    shardCount?: string | null;
    /**
     * The 0-based index of this shard.
     */
    shardIndex?: string | null;
    /**
     * The index of the first character in Document.text in the overall document global text.
     */
    textOffset?: string | null;
  }
  /**
   * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentStyle {
    /**
     * Text background color.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Text color.
     */
    color?: Schema$GoogleTypeColor;
    /**
     * Font size.
     */
    fontSize?: Schema$GoogleCloudDocumentaiV1beta2DocumentStyleFontSize;
    /**
     * Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp
     */
    fontWeight?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
    /**
     * Text decoration. Follows CSS standard. &lt;text-decoration-line&gt; &lt;text-decoration-color&gt; &lt;text-decoration-style&gt; https://www.w3schools.com/cssref/pr_text_text-decoration.asp
     */
    textDecoration?: string | null;
    /**
     * Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp
     */
    textStyle?: string | null;
  }
  /**
   * Font size with unit.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentStyleFontSize {
    /**
     * Font size for the text.
     */
    size?: number | null;
    /**
     * Unit for the font size. Follows CSS naming (in, px, pt, etc.).
     */
    unit?: string | null;
  }
  /**
   * Text reference indexing into the Document.text.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor {
    /**
     * The text segments from the Document.text.
     */
    textSegments?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment[];
  }
  /**
   * A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment {
    /**
     * TextSegment half open end UTF-8 char index in the Document.text.
     */
    endIndex?: string | null;
    /**
     * TextSegment start UTF-8 char index in the Document.text.
     */
    startIndex?: string | null;
  }
  /**
   * A translation of the text segment.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentTranslation {
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Provenance of the translation. Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
    /**
     * Text translated into the target language.
     */
    translatedText?: string | null;
  }
  /**
   * Parameters to control entity extraction behavior.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2EntityExtractionParams {
    /**
     * Whether to enable entity extraction.
     */
    enabled?: boolean | null;
    /**
     * Model version of the entity extraction. Default is &quot;builtin/stable&quot;. Specify &quot;builtin/latest&quot; for the latest model.
     */
    modelVersion?: string | null;
  }
  /**
   * Parameters to control form extraction behavior.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2FormExtractionParams {
    /**
     * Whether to enable form extraction.
     */
    enabled?: boolean | null;
    /**
     * Reserved for future use.
     */
    keyValuePairHints?: Schema$GoogleCloudDocumentaiV1beta2KeyValuePairHint[];
    /**
     * Model version of the form extraction system. Default is &quot;builtin/stable&quot;. Specify &quot;builtin/latest&quot; for the latest model. For custom form models, specify: “custom/{model_name}&quot;. Model name format is &quot;bucket_name/path/to/modeldir&quot; corresponding to &quot;gs://bucket_name/path/to/modeldir&quot; where annotated examples are stored.
     */
    modelVersion?: string | null;
  }
  /**
   * The Google Cloud Storage location where the output file will be written to.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2GcsDestination {
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input file will be read from.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2GcsSource {
    uri?: string | null;
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2InputConfig {
    /**
     * Content in bytes, represented as a stream of bytes. Note: As with all `bytes` fields, proto buffer messages use a pure binary representation, whereas JSON representations use base64.  This field only works for synchronous ProcessDocument method.
     */
    contents?: string | null;
    /**
     * The Google Cloud Storage location to read the input from. This must be a single file.
     */
    gcsSource?: Schema$GoogleCloudDocumentaiV1beta2GcsSource;
    /**
     * Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.
     */
    mimeType?: string | null;
  }
  /**
   * Reserved for future use.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2KeyValuePairHint {
    /**
     * The key text for the hint.
     */
    key?: string | null;
    /**
     * Type of the value. This is case-insensitive, and could be one of: ADDRESS, LOCATION, ORGANIZATION, PERSON, PHONE_NUMBER, ID, NUMBER, EMAIL, PRICE, TERMS, DATE, NAME. Types not in this list will be ignored.
     */
    valueTypes?: string[] | null;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Parameters to control Optical Character Recognition (OCR) behavior.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2OcrParams {
    /**
     * List of languages to use for OCR. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Document processing returns an error if one or more of the specified languages is not one of the supported languages.
     */
    languageHints?: string[] | null;
  }
  /**
   * Contains metadata for the BatchProcessDocuments operation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2OperationMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * The state of the current batch processing.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2OutputConfig {
    /**
     * The Google Cloud Storage location to write the output to.
     */
    gcsDestination?: Schema$GoogleCloudDocumentaiV1beta2GcsDestination;
    /**
     * The max number of pages to include into each output Document shard JSON on Google Cloud Storage.  The valid range is [1, 100]. If not specified, the default value is 20.  For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers.  Example GCS outputs with 157 pages and pages_per_shard = 50:  &lt;prefix&gt;pages-001-to-050.json &lt;prefix&gt;pages-051-to-100.json &lt;prefix&gt;pages-101-to-150.json &lt;prefix&gt;pages-151-to-157.json
     */
    pagesPerShard?: number | null;
  }
  /**
   * Request to process one document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2ProcessDocumentRequest {
    /**
     * Controls AutoML model prediction behavior. AutoMlParams cannot be used together with other Params.
     */
    automlParams?: Schema$GoogleCloudDocumentaiV1beta2AutoMlParams;
    /**
     * Specifies a known document type for deeper structure detection. Valid values are currently &quot;general&quot; and &quot;invoice&quot;. If not provided, &quot;general&quot;\ is used as default. If any other value is given, the request is rejected.
     */
    documentType?: string | null;
    /**
     * Controls entity extraction behavior. If not specified, the system will decide reasonable defaults.
     */
    entityExtractionParams?: Schema$GoogleCloudDocumentaiV1beta2EntityExtractionParams;
    /**
     * Controls form extraction behavior. If not specified, the system will decide reasonable defaults.
     */
    formExtractionParams?: Schema$GoogleCloudDocumentaiV1beta2FormExtractionParams;
    /**
     * Required. Information about the input file.
     */
    inputConfig?: Schema$GoogleCloudDocumentaiV1beta2InputConfig;
    /**
     * Controls OCR behavior. If not specified, the system will decide reasonable defaults.
     */
    ocrParams?: Schema$GoogleCloudDocumentaiV1beta2OcrParams;
    /**
     * Optional. The desired output location. This field is only needed in BatchProcessDocumentsRequest.
     */
    outputConfig?: Schema$GoogleCloudDocumentaiV1beta2OutputConfig;
    /**
     * Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method.
     */
    parent?: string | null;
    /**
     * Controls table extraction behavior. If not specified, the system will decide reasonable defaults.
     */
    tableExtractionParams?: Schema$GoogleCloudDocumentaiV1beta2TableExtractionParams;
  }
  /**
   * Response to a single document processing request.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2ProcessDocumentResponse {
    /**
     * Information about the input file. This is the same as the corresponding input config in the request.
     */
    inputConfig?: Schema$GoogleCloudDocumentaiV1beta2InputConfig;
    /**
     * The output location of the parsed responses. The responses are written to this location as JSON-serialized `Document` objects.
     */
    outputConfig?: Schema$GoogleCloudDocumentaiV1beta2OutputConfig;
  }
  /**
   * A hint for a table bounding box on the page for table parsing.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2TableBoundHint {
    /**
     * Bounding box hint for a table on this page. The coordinates must be normalized to [0,1] and the bounding box must be an axis-aligned rectangle.
     */
    boundingBox?: Schema$GoogleCloudDocumentaiV1beta2BoundingPoly;
    /**
     * Optional. Page number for multi-paged inputs this hint applies to. If not provided, this hint will apply to all pages by default. This value is 1-based.
     */
    pageNumber?: number | null;
  }
  /**
   * Parameters to control table extraction behavior.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2TableExtractionParams {
    /**
     * Whether to enable table extraction.
     */
    enabled?: boolean | null;
    /**
     * Optional. Reserved for future use.
     */
    headerHints?: string[] | null;
    /**
     * Model version of the table extraction system. Default is &quot;builtin/stable&quot;. Specify &quot;builtin/latest&quot; for the latest model.
     */
    modelVersion?: string | null;
    /**
     * Optional. Table bounding box hints that can be provided to complex cases which our algorithm cannot locate the table(s) in.
     */
    tableBoundHints?: Schema$GoogleCloudDocumentaiV1beta2TableBoundHint[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
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
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness; for example, the fields of this representation can be trivially provided to the constructor of &quot;java.awt.Color&quot; in Java; it can also be trivially provided to UIColor&#39;s &quot;+colorWithRed:green:blue:alpha&quot; method in iOS; and, with just a little work, it can be easily formatted into a CSS &quot;rgba()&quot; string in JavaScript, as well.  Note: this proto does not carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color space.  Note: when color equality needs to be decided, implementations, unless documented otherwise, will treat two colors to be equal if all their red, green, blue and alpha values each differ by at most 1e-5.  Example (Java):       import com.google.type.Color;       // ...      public static java.awt.Color fromProto(Color protocolor) {        float alpha = protocolor.hasAlpha()            ? protocolor.getAlpha().getValue()            : 1.0;         return new java.awt.Color(            protocolor.getRed(),            protocolor.getGreen(),            protocolor.getBlue(),            alpha);      }       public static Color toProto(java.awt.Color color) {        float red = (float) color.getRed();        float green = (float) color.getGreen();        float blue = (float) color.getBlue();        float denominator = 255.0;        Color.Builder resultBuilder =            Color                .newBuilder()                .setRed(red / denominator)                .setGreen(green / denominator)                .setBlue(blue / denominator);        int alpha = color.getAlpha();        if (alpha != 255) {          result.setAlpha(              FloatValue                  .newBuilder()                  .setValue(((float) alpha) / denominator)                  .build());        }        return resultBuilder.build();      }      // ...  Example (iOS / Obj-C):       // ...      static UIColor* fromProto(Color* protocolor) {         float red = [protocolor red];         float green = [protocolor green];         float blue = [protocolor blue];         FloatValue* alpha_wrapper = [protocolor alpha];         float alpha = 1.0;         if (alpha_wrapper != nil) {           alpha = [alpha_wrapper value];         }         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];      }       static Color* toProto(UIColor* color) {          CGFloat red, green, blue, alpha;          if (![color getRed:&amp;red green:&amp;green blue:&amp;blue alpha:&amp;alpha]) {            return nil;          }          Color* result = [[Color alloc] init];          [result setRed:red];          [result setGreen:green];          [result setBlue:blue];          if (alpha &lt;= 0.9999) {            [result setAlpha:floatWrapperWithValue(alpha)];          }          [result autorelease];          return result;     }     // ...   Example (JavaScript):      // ...      var protoToCssColor = function(rgb_color) {        var redFrac = rgb_color.red || 0.0;        var greenFrac = rgb_color.green || 0.0;        var blueFrac = rgb_color.blue || 0.0;        var red = Math.floor(redFrac * 255);        var green = Math.floor(greenFrac * 255);        var blue = Math.floor(blueFrac * 255);         if (!(&#39;alpha&#39; in rgb_color)) {           return rgbToCssColor_(red, green, blue);        }         var alphaFrac = rgb_color.alpha.value || 0.0;        var rgbParams = [red, green, blue].join(&#39;,&#39;);        return [&#39;rgba(&#39;, rgbParams, &#39;,&#39;, alphaFrac, &#39;)&#39;].join(&#39;&#39;);     };      var rgbToCssColor_ = function(red, green, blue) {       var rgbNumber = new Number((red &lt;&lt; 16) | (green &lt;&lt; 8) | blue);       var hexString = rgbNumber.toString(16);       var missingZeros = 6 - hexString.length;       var resultBuilder = [&#39;#&#39;];       for (var i = 0; i &lt; missingZeros; i++) {          resultBuilder.push(&#39;0&#39;);       }       resultBuilder.push(hexString);       return resultBuilder.join(&#39;&#39;);     };      // ...
   */
  export interface Schema$GoogleTypeColor {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation:    pixel color = alpha * (this color) + (1.0 - alpha) * (background color)  This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is to be rendered as a solid color (as if the alpha value had been explicitly given with a value of 1.0).
     */
    alpha?: number | null;
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

  export class Resource$Projects {
    context: APIRequestContext;
    documents: Resource$Projects$Documents;
    locations: Resource$Projects$Locations;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents = new Resource$Projects$Documents(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }
  }

  export class Resource$Projects$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * documentai.projects.documents.batchProcess
     * @desc LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/documentai.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const documentai = google.documentai('v1beta2');
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
     *   const res = await documentai.projects.documents.batchProcess({
     *     // Target project and location to make a call.
     *     //
     *     // Format: `projects/{project-id}/locations/{location-id}`.
     *     //
     *     // If no location is specified, a region will be chosen automatically.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
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
     * @alias documentai.projects.documents.batchProcess
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically.
     * @param {().GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchProcess(
      params: Params$Resource$Projects$Documents$Batchprocess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchProcess(
      params?: Params$Resource$Projects$Documents$Batchprocess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchProcess(
      params: Params$Resource$Projects$Documents$Batchprocess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchProcess(
      params: Params$Resource$Projects$Documents$Batchprocess,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      params: Params$Resource$Projects$Documents$Batchprocess,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      paramsOrCallback?:
        | Params$Resource$Projects$Documents$Batchprocess
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Documents$Batchprocess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Documents$Batchprocess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta2/{+parent}/documents:batchProcess'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * documentai.projects.documents.process
     * @desc Processes a single document.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/documentai.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const documentai = google.documentai('v1beta2');
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
     *   const res = await documentai.projects.documents.process({
     *     // Target project and location to make a call.
     *     //
     *     // Format: `projects/{project-id}/locations/{location-id}`.
     *     //
     *     // If no location is specified, a region will be chosen automatically.
     *     // This field is only populated when used in ProcessDocument method.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "automlParams": {},
     *       //   "documentType": "my_documentType",
     *       //   "entityExtractionParams": {},
     *       //   "formExtractionParams": {},
     *       //   "inputConfig": {},
     *       //   "ocrParams": {},
     *       //   "outputConfig": {},
     *       //   "parent": "my_parent",
     *       //   "tableExtractionParams": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "content": "my_content",
     *   //   "entities": [],
     *   //   "entityRelations": [],
     *   //   "error": {},
     *   //   "labels": [],
     *   //   "mimeType": "my_mimeType",
     *   //   "pages": [],
     *   //   "shardInfo": {},
     *   //   "text": "my_text",
     *   //   "textStyles": [],
     *   //   "translations": [],
     *   //   "uri": "my_uri"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias documentai.projects.documents.process
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method.
     * @param {().GoogleCloudDocumentaiV1beta2ProcessDocumentRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    process(
      params: Params$Resource$Projects$Documents$Process,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    process(
      params?: Params$Resource$Projects$Documents$Process,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta2Document>;
    process(
      params: Params$Resource$Projects$Documents$Process,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    process(
      params: Params$Resource$Projects$Documents$Process,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta2Document>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDocumentaiV1beta2Document
      >
    ): void;
    process(
      params: Params$Resource$Projects$Documents$Process,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDocumentaiV1beta2Document
      >
    ): void;
    process(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDocumentaiV1beta2Document
      >
    ): void;
    process(
      paramsOrCallback?:
        | Params$Resource$Projects$Documents$Process
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta2Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta2Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta2Document>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta2Document>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Documents$Process;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Documents$Process;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/documents:process').replace(
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
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta2Document>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta2Document>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Documents$Batchprocess
    extends StandardParameters {
    /**
     * Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest;
  }
  export interface Params$Resource$Projects$Documents$Process
    extends StandardParameters {
    /**
     * Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    documents: Resource$Projects$Locations$Documents;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents = new Resource$Projects$Locations$Documents(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * documentai.projects.locations.documents.batchProcess
     * @desc LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/documentai.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const documentai = google.documentai('v1beta2');
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
     *   const res = await documentai.projects.locations.documents.batchProcess({
     *     // Target project and location to make a call.
     *     //
     *     // Format: `projects/{project-id}/locations/{location-id}`.
     *     //
     *     // If no location is specified, a region will be chosen automatically.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
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
     * @alias documentai.projects.locations.documents.batchProcess
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically.
     * @param {().GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchProcess(
      params: Params$Resource$Projects$Locations$Documents$Batchprocess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchProcess(
      params?: Params$Resource$Projects$Locations$Documents$Batchprocess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchProcess(
      params: Params$Resource$Projects$Locations$Documents$Batchprocess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchProcess(
      params: Params$Resource$Projects$Locations$Documents$Batchprocess,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      params: Params$Resource$Projects$Locations$Documents$Batchprocess,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Documents$Batchprocess
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Documents$Batchprocess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Documents$Batchprocess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta2/{+parent}/documents:batchProcess'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * documentai.projects.locations.documents.process
     * @desc Processes a single document.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/documentai.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const documentai = google.documentai('v1beta2');
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
     *   const res = await documentai.projects.locations.documents.process({
     *     // Target project and location to make a call.
     *     //
     *     // Format: `projects/{project-id}/locations/{location-id}`.
     *     //
     *     // If no location is specified, a region will be chosen automatically.
     *     // This field is only populated when used in ProcessDocument method.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "automlParams": {},
     *       //   "documentType": "my_documentType",
     *       //   "entityExtractionParams": {},
     *       //   "formExtractionParams": {},
     *       //   "inputConfig": {},
     *       //   "ocrParams": {},
     *       //   "outputConfig": {},
     *       //   "parent": "my_parent",
     *       //   "tableExtractionParams": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "content": "my_content",
     *   //   "entities": [],
     *   //   "entityRelations": [],
     *   //   "error": {},
     *   //   "labels": [],
     *   //   "mimeType": "my_mimeType",
     *   //   "pages": [],
     *   //   "shardInfo": {},
     *   //   "text": "my_text",
     *   //   "textStyles": [],
     *   //   "translations": [],
     *   //   "uri": "my_uri"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias documentai.projects.locations.documents.process
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method.
     * @param {().GoogleCloudDocumentaiV1beta2ProcessDocumentRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    process(
      params: Params$Resource$Projects$Locations$Documents$Process,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    process(
      params?: Params$Resource$Projects$Locations$Documents$Process,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta2Document>;
    process(
      params: Params$Resource$Projects$Locations$Documents$Process,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    process(
      params: Params$Resource$Projects$Locations$Documents$Process,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta2Document>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDocumentaiV1beta2Document
      >
    ): void;
    process(
      params: Params$Resource$Projects$Locations$Documents$Process,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDocumentaiV1beta2Document
      >
    ): void;
    process(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDocumentaiV1beta2Document
      >
    ): void;
    process(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Documents$Process
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta2Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta2Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta2Document>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta2Document>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Documents$Process;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Documents$Process;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+parent}/documents:process').replace(
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
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta2Document>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta2Document>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Documents$Batchprocess
    extends StandardParameters {
    /**
     * Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Documents$Process
    extends StandardParameters {
    /**
     * Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * documentai.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/documentai.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const documentai = google.documentai('v1beta2');
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
     *   const res = await documentai.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
     * @alias documentai.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * documentai.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/documentai.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const documentai = google.documentai('v1beta2');
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
     *   const res = await documentai.projects.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/operations/my-operation',
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
     * @alias documentai.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
