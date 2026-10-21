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
  GaxiosResponseWithHTTP2,
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

export namespace deepreview_v1 {
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
   * Deep Review API
   *
   * Deep Review API for automated conference-quality scientific paper reviews.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const deepreview = google.deepreview('v1');
   * ```
   */
  export class Deepreview {
    context: APIRequestContext;
    documents: Resource$Documents;
    media: Resource$Media;
    operations: Resource$Operations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.documents = new Resource$Documents(this.context);
      this.media = new Resource$Media(this.context);
      this.operations = new Resource$Operations(this.context);
    }
  }

  /**
   * A structured review comment anchored to a specific location in the document.
   */
  export interface Schema$AnchoredReviewComment {
    /**
     * Output only. Detailed markdown explanation of the review comment.
     */
    bodyMarkdown?: string | null;
    /**
     * Output only. Optional structured citation verification report when this comment corresponds to a bibliography reference.
     */
    citationReport?: Schema$CitationReport;
    /**
     * Output only. Unique identifier for the comment within the review.
     */
    commentId?: string | null;
    /**
     * Output only. Polymorphic location in the document where this comment is anchored.
     */
    location?: Schema$DocumentLocation;
    /**
     * Output only. Severity classification of the comment.
     */
    severity?: string | null;
    /**
     * Output only. Optional suggested replacement text or edit for the anchored span.
     */
    suggestedEdit?: string | null;
    /**
     * Output only. Short one-line summary of the review comment.
     */
    summary?: string | null;
  }
  /**
   * Author name components.
   */
  export interface Schema$Author {
    /**
     * Output only. Author family name / surname (or organization name).
     */
    familyName?: string | null;
    /**
     * Output only. Author given name / initials.
     */
    givenName?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Structured bibliographic metadata for an extracted or retrieved work.
   */
  export interface Schema$CitationMetadata {
    /**
     * Output only. Ordered list of authors.
     */
    authors?: Schema$Author[];
    /**
     * Output only. Digital Object Identifier (DOI).
     */
    doi?: string | null;
    /**
     * Output only. Journal, conference, or venue name.
     */
    journal?: string | null;
    /**
     * Output only. Page range or article number.
     */
    pages?: string | null;
    /**
     * Output only. Publication date (month and day left as 0 if just year).
     */
    publicationDate?: Schema$Date;
    /**
     * Output only. Source database for retrieved metadata (e.g., "openalex", "crossref"). Empty on `extracted_metadata`.
     */
    source?: string | null;
    /**
     * Output only. Work title.
     */
    title?: string | null;
    /**
     * Output only. URLs associated with the reference.
     */
    urls?: string[] | null;
    /**
     * Output only. Volume identifier.
     */
    volume?: string | null;
  }
  /**
   * Structured citation verification report for a single bibliography reference.
   */
  export interface Schema$CitationReport {
    /**
     * Output only. Generated BibTeX citation key (e.g., "smith2023deep").
     */
    citationKey?: string | null;
    /**
     * Output only. BibTeX entry type (e.g., "article", "inproceedings", "misc").
     */
    entryType?: string | null;
    /**
     * Output only. Metadata parsed from the paper's bibliography entry.
     */
    extractedMetadata?: Schema$CitationMetadata;
    /**
     * Output only. Per-field comparisons (populated only when `retrieved_metadata` is present).
     */
    fieldComparisons?: Schema$FieldComparison[];
    /**
     * Output only. Final combined verdict after database lookup and search grounding.
     */
    finalVerdict?: string | null;
    /**
     * Output only. Whether the first author's family name matched between extracted and retrieved metadata.
     */
    firstAuthorFamilyNameMatch?: boolean | null;
    /**
     * Output only. Web sources surfaced during Google Search grounding.
     */
    groundingUrls?: Schema$GroundingUrl[];
    /**
     * Output only. Verdict from scholarly database lookup (OpenAlex / Crossref) before search grounding.
     */
    lookupVerdict?: string | null;
    /**
     * Output only. Verbatim reference string extracted from the paper's bibliography.
     */
    rawReference?: string | null;
    /**
     * Output only. 1-indexed bibliography reference number in the paper.
     */
    refNum?: number | null;
    /**
     * Output only. Formatted BibTeX entry for the verified `retrieved_metadata` when present. Empty when `retrieved_metadata` is absent.
     */
    retrievedBibtex?: string | null;
    /**
     * Output only. Metadata retrieved from OpenAlex / Crossref. Populated only when the retrieved work's title matches the extracted title. Omitted when no candidate matches the title so unrelated papers are never displayed as candidates.
     */
    retrievedMetadata?: Schema$CitationMetadata;
    /**
     * Output only. Strategy that produced the scholarly database match (e.g., "doi", "title", "title_author", "autocomplete"). Empty when no title-matching candidate was found.
     */
    searchMethod?: string | null;
    /**
     * Output only. Explanation from the Google Search grounding verification step (when run).
     */
    searchRationale?: string | null;
    /**
     * Output only. Verdict from Google Search grounding verification (when run).
     */
    searchVerdict?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Configuration options for the multi-agent document review execution pipeline.
   */
  export interface Schema$DeepReviewRunConfig {
    /**
     * Optional. Input only. Developer Bring-Your-Own-Key Gemini API key. When provided, requests are billed to the caller's Gemini API project. Input only; forwarded to the asynchronous review runner in the task payload and never persisted in database records or returned in review resources (see companion field `gemini_api_key_set`, AIP-147).
     */
    geminiApiKey?: string | null;
    /**
     * Output only. Indicates whether a developer Bring-Your-Own-Key Gemini API key was provided for this review run.
     */
    geminiApiKeySet?: boolean | null;
    /**
     * Optional. The Gemini model name/version to use (e.g., "gemini-1.5-pro", "gemini-2.0-flash").
     */
    model?: string | null;
    /**
     * Optional. Review execution topology profile to use.
     */
    topology?: string | null;
    /**
     * Optional. User-provided guidance, focus areas, or custom evaluation instructions passed to the review agents.
     */
    userPrompt?: string | null;
  }
  /**
   * Document Resource Model representing an uploaded document for review. Documents are immutable post-creation; to review a new version, create a new Document.
   */
  export interface Schema$Document {
    /**
     * Output only. Timestamp when the document was initially created.
     */
    createTime?: string | null;
    /**
     * Optional. User-provided display title or filename for the document.
     */
    displayName?: string | null;
    /**
     * Optional. Reference to a Google Drive file to import.
     */
    driveSource?: Schema$DriveSource;
    /**
     * Output only. Summary of the most recent review run for this document, if any.
     */
    latestReviewSummary?: Schema$ReviewSummary;
    /**
     * Identifier. Resource name in format `documents/{document\}`.
     */
    name?: string | null;
  }
  /**
   * Polymorphic location targeting either a PDF page region/quote or text lines.
   */
  export interface Schema$DocumentLocation {
    /**
     * Output only. Location within a rendered PDF document.
     */
    pdf?: Schema$PdfLocation;
    /**
     * Output only. Location within a plain-text, Markdown, or LaTeX source document.
     */
    text?: Schema$TextLocation;
  }
  /**
   * Response message for downloading a Document's raw content via Scotty media.
   */
  export interface Schema$DownloadDocumentResponse {}
  /**
   * Configuration for importing a document directly from Google Drive.
   */
  export interface Schema$DriveSource {
    /**
     * Required. Immutable. The Google Drive file ID (e.g. "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"). For Google Drive shortcuts, callers must pass the resolved target file's `file_id` and `resource_key`.
     */
    fileId?: string | null;
    /**
     * Optional. Input only. Immutable. Resource key (`^[a-zA-Z0-9_-]{1,128\}$`) required to access certain older link-shared Google Drive files returned by the Google Drive Picker (for shortcuts, pass the resolved target file's resource key). Never persisted in database records or returned in Document resources (see companion field `resource_key_set`, AIP-147).
     */
    resourceKey?: string | null;
    /**
     * Output only. Indicates whether a resource key was provided for this Drive source.
     */
    resourceKeySet?: boolean | null;
    /**
     * Optional. Input only. Immutable. Specific revision ID to import (defaults to latest head revision).
     */
    revisionId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Per-field comparison result between extracted and retrieved metadata.
   */
  export interface Schema$FieldComparison {
    /**
     * Output only. Human-readable comparison detail (e.g., "extracted=2023, found=2024 (diff=1)").
     */
    detail?: string | null;
    /**
     * Output only. Field key ("title", "authors", "year", "journal", "volume", "pages", "doi").
     */
    fieldKey?: string | null;
    /**
     * Output only. Whether the extracted and retrieved values matched.
     */
    match?: boolean | null;
  }
  /**
   * Web source URL surfaced during Google Search grounding verification.
   */
  export interface Schema$GroundingUrl {
    /**
     * Output only. Source page title or domain.
     */
    title?: string | null;
    /**
     * Output only. Source URL.
     */
    url?: string | null;
  }
  /**
   * Response message for listing Document resources.
   */
  export interface Schema$ListDocumentsResponse {
    /**
     * The list of Document resources.
     */
    documents?: Schema$Document[];
    /**
     * A token to retrieve the next page of results, or empty if no further pages exist.
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
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for listing Review resources.
   */
  export interface Schema$ListReviewsResponse {
    /**
     * A token to retrieve the next page of results, or empty if no further pages exist.
     */
    nextPageToken?: string | null;
    /**
     * The list of Review resources.
     */
    reviews?: Schema$Review[];
  }
  /**
   * Bounding box in normalized [0.0, 1.0] page coordinates (origin top-left).
   */
  export interface Schema$NormalizedBoundingBox {
    /**
     * Output only. Bottom coordinate in [0.0, 1.0].
     */
    bottom?: number | null;
    /**
     * Output only. Left coordinate in [0.0, 1.0].
     */
    left?: number | null;
    /**
     * Output only. Right coordinate in [0.0, 1.0].
     */
    right?: number | null;
    /**
     * Output only. Top coordinate in [0.0, 1.0].
     */
    top?: number | null;
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
   * Location anchor within a PDF document.
   */
  export interface Schema$PdfLocation {
    /**
     * Output only. Normalized bounding boxes [0.0, 1.0] relative to page width and height. At most 50 bounding boxes are returned per anchored span.
     */
    boundingBoxes?: Schema$NormalizedBoundingBox[];
    /**
     * Output only. 1-indexed page number within the PDF document.
     */
    pageNumber?: number | null;
    /**
     * Output only. W3C Web Annotation TextQuoteSelector (https://www.w3.org/TR/annotation-model/#text-quote-selector) for exact text span highlighting.
     */
    quoteSelector?: Schema$TextQuoteSelector;
  }
  /**
   * Encapsulates the synthesized output or failure details of a single review execution.
   */
  export interface Schema$Result {
    /**
     * Output only. Structured review comments anchored to specific locations in the document. At most 300 anchored comments are returned per review.
     */
    anchoredComments?: Schema$AnchoredReviewComment[];
    /**
     * Output only. Failure status details if review execution failed.
     */
    error?: Schema$Status;
    /**
     * Output only. Synthesized review report markdown.
     */
    reviewMarkdown?: string | null;
  }
  /**
   * Review Sub-Resource Model representing an evaluation run of a document.
   */
  export interface Schema$Review {
    /**
     * Output only. Timestamp when this review attempt was initiated.
     */
    createTime?: string | null;
    /**
     * Output only. Timestamp when the review reached a terminal state.
     */
    endTime?: string | null;
    /**
     * Identifier. Resource name in format `documents/{document\}/reviews/{review\}`.
     */
    name?: string | null;
    /**
     * Output only. Estimated completion progress percentage of the review in [0, 100].
     */
    progressPercent?: number | null;
    /**
     * Output only. Review output (markdown, errors, and future modalities).
     */
    result?: Schema$Result;
    /**
     * Optional. Run configuration parameters used for this review.
     */
    runConfig?: Schema$DeepReviewRunConfig;
    /**
     * Output only. Timestamp when the worker started evaluation.
     */
    startTime?: string | null;
    /**
     * Output only. Current review lifecycle state.
     */
    state?: string | null;
  }
  /**
   * Lightweight summary of a Review execution run for display in Document views.
   */
  export interface Schema$ReviewSummary {
    /**
     * Output only. Timestamp when this review attempt was initiated.
     */
    createTime?: string | null;
    /**
     * Output only. Resource name of the Review. Format: `documents/{document\}/reviews/{review\}`
     */
    review?: string | null;
    /**
     * Output only. Current review lifecycle state.
     */
    state?: string | null;
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
   * Location anchor within a plain-text, Markdown, or LaTeX source document.
   */
  export interface Schema$TextLocation {
    /**
     * Output only. Optional 1-indexed inclusive first column offset within `first_line`.
     */
    firstColumn?: number | null;
    /**
     * Output only. 1-indexed inclusive first line number.
     */
    firstLine?: number | null;
    /**
     * Output only. Optional 1-indexed inclusive last column offset within `last_line`.
     */
    lastColumn?: number | null;
    /**
     * Output only. 1-indexed inclusive last line number.
     */
    lastLine?: number | null;
    /**
     * Output only. Verbatim snippet of the anchored source line(s).
     */
    quotedLinePreview?: string | null;
  }
  /**
   * W3C Web Annotation TextQuoteSelector for resilient text anchoring (https://www.w3.org/TR/annotation-model/#text-quote-selector).
   */
  export interface Schema$TextQuoteSelector {
    /**
     * Output only. Verbatim substring extracted from the document character stream.
     */
    exact?: string | null;
    /**
     * Output only. Characters immediately preceding `exact` for disambiguation.
     */
    prefix?: string | null;
    /**
     * Output only. Characters immediately following `exact` for disambiguation.
     */
    suffix?: string | null;
  }

  export class Resource$Documents {
    context: APIRequestContext;
    reviews: Resource$Documents$Reviews;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reviews = new Resource$Documents$Reviews(this.context);
    }

    /**
     * Deletes a document and all associated reviews and stored blobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.documents.delete({
     *     // Optional. If set to true, and the document is not found, the request succeeds.
     *     allowMissing: 'placeholder-value',
     *     // Optional. If set to true, any child resources (e.g. review resources) are also deleted.
     *     force: 'placeholder-value',
     *     // Required. The resource name of the document to delete. Format: `documents/{document\}`
     *     name: 'documents/my-document',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Documents$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Documents$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Documents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Documents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Documents$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Documents$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * Retrieves document metadata and review history.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.documents.get({
     *     // Required. The resource name of the document to retrieve. Format: `documents/{document\}`
     *     name: 'documents/my-document',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "driveSource": {},
     *   //   "latestReviewSummary": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Documents$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Documents$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Document>>;
    get(
      params: Params$Resource$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Documents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(
      params: Params$Resource$Documents$Get,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(callback: BodyResponseCallback<Schema$Document>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Documents$Get
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Document> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Document>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Lists documents for the authenticated caller with cursor pagination.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.documents.list({
     *     // Optional. Supported AIP-160 filter expressions (e.g., `display_name = "..."`).
     *     filter: 'placeholder-value',
     *     // Optional. Supported AIP-132 order_by field.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of documents to return in a single page. The server may return fewer than this value. If unspecified, at most 50 documents will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token received from a previous `ListDocuments` call.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "documents": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Documents$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Documents$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDocumentsResponse>>;
    list(
      params: Params$Resource$Documents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Documents$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    list(
      params: Params$Resource$Documents$List,
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDocumentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Documents$List
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDocumentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDocumentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Documents$Delete extends StandardParameters {
    /**
     * Optional. If set to true, and the document is not found, the request succeeds.
     */
    allowMissing?: boolean;
    /**
     * Optional. If set to true, any child resources (e.g. review resources) are also deleted.
     */
    force?: boolean;
    /**
     * Required. The resource name of the document to delete. Format: `documents/{document\}`
     */
    name?: string;
  }
  export interface Params$Resource$Documents$Get extends StandardParameters {
    /**
     * Required. The resource name of the document to retrieve. Format: `documents/{document\}`
     */
    name?: string;
  }
  export interface Params$Resource$Documents$List extends StandardParameters {
    /**
     * Optional. Supported AIP-160 filter expressions (e.g., `display_name = "..."`).
     */
    filter?: string;
    /**
     * Optional. Supported AIP-132 order_by field.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of documents to return in a single page. The server may return fewer than this value. If unspecified, at most 50 documents will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous `ListDocuments` call.
     */
    pageToken?: string;
  }

  export class Resource$Documents$Reviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates and initiates an asynchronous multi-agent review for a document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.documents.reviews.create({
     *     // Required. The parent Document resource name where this review will be created. Format: `documents/{document\}`
     *     parent: 'documents/my-document',
     *     // Optional. Idempotency identifier for network retry safety (AIP-155). Must be a valid UUID4 string.
     *     requestId: 'placeholder-value',
     *     // Optional. The ID to use for the review, which will become the final component of the review's resource name. If not provided, a unique server-generated UUID will be assigned.
     *     reviewId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "endTime": "my_endTime",
     *       //   "name": "my_name",
     *       //   "progressPercent": 0,
     *       //   "result": {},
     *       //   "runConfig": {},
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state"
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Documents$Reviews$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Documents$Reviews$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Documents$Reviews$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Documents$Reviews$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Documents$Reviews$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Documents$Reviews$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Operation> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Reviews$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Reviews$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reviews').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
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
     * Retrieves a specific review execution result.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.documents.reviews.get({
     *     // Required. The resource name of the review to retrieve. Format: `documents/{document\}/reviews/{review\}`
     *     name: 'documents/my-document/reviews/my-review',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "name": "my_name",
     *   //   "progressPercent": 0,
     *   //   "result": {},
     *   //   "runConfig": {},
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Documents$Reviews$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Documents$Reviews$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Review>>;
    get(
      params: Params$Resource$Documents$Reviews$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Documents$Reviews$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Review>,
      callback: BodyResponseCallback<Schema$Review>
    ): void;
    get(
      params: Params$Resource$Documents$Reviews$Get,
      callback: BodyResponseCallback<Schema$Review>
    ): void;
    get(callback: BodyResponseCallback<Schema$Review>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Documents$Reviews$Get
        | BodyResponseCallback<Schema$Review>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Review>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Review> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Review>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Reviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Reviews$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Review>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Review>(parameters);
      }
    }

    /**
     * Lists all review execution runs for a document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.documents.reviews.list({
     *     // Optional. Supported AIP-160 filter expressions.
     *     filter: 'placeholder-value',
     *     // Optional. Supported AIP-132 order_by field.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of reviews to return in a single page. The server may return fewer than this value. If unspecified, at most 50 reviews will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token received from a previous `ListReviews` call.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent Document resource name. Format: `documents/{document\}`
     *     parent: 'documents/my-document',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reviews": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Documents$Reviews$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Documents$Reviews$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReviewsResponse>>;
    list(
      params: Params$Resource$Documents$Reviews$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Documents$Reviews$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListReviewsResponse>,
      callback: BodyResponseCallback<Schema$ListReviewsResponse>
    ): void;
    list(
      params: Params$Resource$Documents$Reviews$List,
      callback: BodyResponseCallback<Schema$ListReviewsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReviewsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Documents$Reviews$List
        | BodyResponseCallback<Schema$ListReviewsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReviewsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReviewsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReviewsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Reviews$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Reviews$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reviews').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListReviewsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReviewsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Documents$Reviews$Create extends StandardParameters {
    /**
     * Required. The parent Document resource name where this review will be created. Format: `documents/{document\}`
     */
    parent?: string;
    /**
     * Optional. Idempotency identifier for network retry safety (AIP-155). Must be a valid UUID4 string.
     */
    requestId?: string;
    /**
     * Optional. The ID to use for the review, which will become the final component of the review's resource name. If not provided, a unique server-generated UUID will be assigned.
     */
    reviewId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Review;
  }
  export interface Params$Resource$Documents$Reviews$Get extends StandardParameters {
    /**
     * Required. The resource name of the review to retrieve. Format: `documents/{document\}/reviews/{review\}`
     */
    name?: string;
  }
  export interface Params$Resource$Documents$Reviews$List extends StandardParameters {
    /**
     * Optional. Supported AIP-160 filter expressions.
     */
    filter?: string;
    /**
     * Optional. Supported AIP-132 order_by field.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of reviews to return in a single page. The server may return fewer than this value. If unspecified, at most 50 reviews will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous `ListReviews` call.
     */
    pageToken?: string;
    /**
     * Required. The parent Document resource name. Format: `documents/{document\}`
     */
    parent?: string;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Downloads the original document content (PDF binary) via Scotty media streaming (AIP-136 custom method).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.media.download({
     *     // Required. The resource name of the document to download. Format: `documents/{document\}`
     *     name: 'documents/my-document',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    download(
      params?: Params$Resource$Media$Download,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DownloadDocumentResponse>>;
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      options:
        MethodOptions | BodyResponseCallback<Schema$DownloadDocumentResponse>,
      callback: BodyResponseCallback<Schema$DownloadDocumentResponse>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$DownloadDocumentResponse>
    ): void;
    download(
      callback: BodyResponseCallback<Schema$DownloadDocumentResponse>
    ): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$DownloadDocumentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DownloadDocumentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DownloadDocumentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DownloadDocumentResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:download').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DownloadDocumentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DownloadDocumentResponse>(parameters);
      }
    }

    /**
     * Creates a new Document resource and ingests the manuscript via Scotty or Google Drive.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.media.upload({
     *     // Optional. The ID to use for the document, which will become the final component of the document's resource name. If not provided, a unique server-generated UUID will be assigned.
     *     documentId: 'placeholder-value',
     *     // Optional. Idempotency identifier for network retry safety (AIP-155). Must be a valid UUID4 string.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "driveSource": {},
     *       //   "latestReviewSummary": {},
     *       //   "name": "my_name"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "driveSource": {},
     *   //   "latestReviewSummary": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Document>>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    upload(callback: BodyResponseCallback<Schema$Document>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Document> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Document>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v1/documents').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * Required. The resource name of the document to download. Format: `documents/{document\}`
     */
    name?: string;
  }
  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Optional. The ID to use for the document, which will become the final component of the document's resource name. If not provided, a unique server-generated UUID will be assigned.
     */
    documentId?: string;
    /**
     * Optional. Idempotency identifier for network retry safety (AIP-155). Must be a valid UUID4 string.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Document;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Operations {
    context: APIRequestContext;
    documents: Resource$Operations$Documents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents = new Resource$Operations$Documents(this.context);
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/.*',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'operations/.*',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'operations',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
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

  export interface Params$Resource$Operations$Cancel extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Operations$Delete extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
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
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }

  export class Resource$Operations$Documents {
    context: APIRequestContext;
    reviews: Resource$Operations$Documents$Reviews;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reviews = new Resource$Operations$Documents$Reviews(this.context);
    }
  }

  export class Resource$Operations$Documents$Reviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/deepreview.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const deepreview = google.deepreview('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.file'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await deepreview.operations.documents.reviews.get({
     *     // The name of the operation resource.
     *     name: 'operations/documents/my-document/reviews/my-review',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Operations$Documents$Reviews$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Operations$Documents$Reviews$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Operations$Documents$Reviews$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Documents$Reviews$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Documents$Reviews$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Documents$Reviews$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Operation> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Documents$Reviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Documents$Reviews$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://deepreview.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
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
  }

  export interface Params$Resource$Operations$Documents$Reviews$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
