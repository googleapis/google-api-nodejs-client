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

export namespace discoveryengine_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Discovery Engine API
   *
   * Discovery Engine API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const discoveryengine = google.discoveryengine('v1beta');
   * ```
   */
  export class Discoveryengine {
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
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$GoogleApiHttpBody {
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
   * A description of the context in which an error occurred.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingErrorContext {
    /**
     * The HTTP request which was processed when the error was triggered.
     */
    httpRequest?: Schema$GoogleCloudDiscoveryengineLoggingHttpRequestContext;
    /**
     * The location in the source code where the decision was made to report the error, usually the place where it was logged.
     */
    reportLocation?: Schema$GoogleCloudDiscoveryengineLoggingSourceLocation;
  }
  /**
   * An error log which is reported to the Error Reporting system.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingErrorLog {
    /**
     * A description of the context in which the error occurred.
     */
    context?: Schema$GoogleCloudDiscoveryengineLoggingErrorContext;
    /**
     * The error payload that is populated on LRO import APIs.
     */
    importPayload?: Schema$GoogleCloudDiscoveryengineLoggingImportErrorContext;
    /**
     * A message describing the error.
     */
    message?: string | null;
    /**
     * The API request payload, represented as a protocol buffer. Most API request types are supported. For example: "type.googleapis.com/google.cloud.discoveryengine.v1alpha.DocumentService.CreateDocumentRequest" "type.googleapis.com/google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEventRequest"
     */
    requestPayload?: {[key: string]: any} | null;
    /**
     * The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported and no PII is included: "google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend" "google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEvent" "google.cloud.discoveryengine.v1alpha.UserEventService.CollectUserEvent"
     */
    responsePayload?: {[key: string]: any} | null;
    /**
     * The service context in which this error has occurred.
     */
    serviceContext?: Schema$GoogleCloudDiscoveryengineLoggingServiceContext;
    /**
     * The RPC status associated with the error log.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * HTTP request data that is related to a reported error.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingHttpRequestContext {
    /**
     * The HTTP response status code for the request.
     */
    responseStatusCode?: number | null;
  }
  /**
   * The error payload that is populated on LRO import APIs. Including: "google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments" "google.cloud.discoveryengine.v1alpha.UserEventService.ImportUserEvents"
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingImportErrorContext {
    /**
     * The detailed content which caused the error on importing a document.
     */
    document?: string | null;
    /**
     * Google Cloud Storage file path of the import source. Can be set for batch operation error.
     */
    gcsPath?: string | null;
    /**
     * Line number of the content in file. Should be empty for permission or batch operation error.
     */
    lineNumber?: string | null;
    /**
     * The operation resource name of the LRO.
     */
    operation?: string | null;
    /**
     * The detailed content which caused the error on importing a user event.
     */
    userEvent?: string | null;
  }
  /**
   * Describes a running service that sends errors.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingServiceContext {
    /**
     * An identifier of the service. For example, "discoveryengine.googleapis.com".
     */
    service?: string | null;
  }
  /**
   * Indicates a location in the source code of the service for which errors are reported.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingSourceLocation {
    /**
     * Human-readable name of a function or method. For example, " google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend".
     */
    functionName?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig {
    /**
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors will be written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse {
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Count of user events imported with complete existing Documents.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with Document information not found in the existing Branch.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * BigQuery source import data from.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBigQuerySource {
    /**
     * The schema to use when parsing the data from the source. Supported values for imports: * `user_event` (default): One JSON UserEvent per line. * `document` (default): One JSON Document per line. Each document must have a valid document.id.
     */
    dataSchema?: string | null;
    /**
     * Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.
     */
    datasetId?: string | null;
    /**
     * Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.
     */
    gcsStagingDir?: string | null;
    /**
     * BigQuery time partitioned table's _PARTITIONDATE in YYYY-MM-DD format.
     */
    partitionDate?: Schema$GoogleTypeDate;
    /**
     * The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
     */
    projectId?: string | null;
    /**
     * Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.
     */
    tableId?: string | null;
  }
  /**
   * Detailed completion information including completion attribution token and clicked completion info.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCompletionInfo {
    /**
     * End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0.
     */
    selectedPosition?: number | null;
    /**
     * End user selected CompleteQueryResponse.CompletionResult.suggestion.
     */
    selectedSuggestion?: string | null;
  }
  /**
   * A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCustomAttribute {
    /**
     * The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    numbers?: number[] | null;
    /**
     * The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    text?: string[] | null;
  }
  /**
   * Document captures all raw metadata information of items to be recommended or searched.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocument {
    /**
     * Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    id?: string | null;
    /**
     * The JSON string representation of the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.
     */
    jsonData?: string | null;
    /**
     * Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    parentDocumentId?: string | null;
    /**
     * Required. The identifier of the schema located in the same data store.
     */
    schemaId?: string | null;
    /**
     * The structured JSON data for the document. It should conform to the registered schema or an INVALID_ARGUMENT error is thrown.
     */
    structData?: {[key: string]: any} | null;
  }
  /**
   * Detailed document information associated with a user event.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocumentInfo {
    /**
     * Required. The Document resource ID.
     */
    id?: string | null;
    /**
     * Required. The Document resource full name, of the form: projects//locations//dataStores//branches//documents/
     */
    name?: string | null;
    /**
     * The promotion IDs associated with this Document. Currently, this field is restricted to at most one ID.
     */
    promotionIds?: string[] | null;
    /**
     * Quantity of the Document associated with the user event. Defaults to 1. For example, this field will be 2 if two quantities of the same Document are involved in a `add-to-cart` event. Required for events of the following event types: * `add-to-cart` * `purchase`
     */
    quantity?: number | null;
  }
  /**
   * Cloud Storage location for input content.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaGcsSource {
    /**
     * The schema to use when parsing the data from the source. Supported values for imports: * `user_event` (default): One JSON UserEvent per line. * `document` (default): One JSON Document per line. Each document must have a valid Document.id.
     */
    dataSchema?: string | null;
    /**
     * Required. Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/x.json`. A request can contain at most 100 files, and each file can be up to 2 GB.
     */
    inputUris?: string[] | null;
  }
  /**
   * Metadata related to the progress of the ImportDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for Import methods.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequest {
    /**
     * BigQuery input source.
     */
    bigquerySource?: Schema$GoogleCloudDiscoveryengineV1betaBigQuerySource;
    /**
     * The desired location of errors incurred during the Import.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudDiscoveryengineV1betaGcsSource;
    /**
     * The Inline source for the input content for documents.
     */
    inlineSource?: Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource;
    /**
     * The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    reconciliationMode?: string | null;
  }
  /**
   * The inline source for the input config for ImportDocuments method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource {
    /**
     * Required. A list of documents to update/create. Each document must have a valid Document.id. Recommended max of 100 items.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1betaDocument[];
  }
  /**
   * Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig {
    /**
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors will be written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for the ImportUserEvents request.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequest {
    /**
     * Required. BigQuery input source.
     */
    bigquerySource?: Schema$GoogleCloudDiscoveryengineV1betaBigQuerySource;
    /**
     * The desired location of errors incurred during the Import. Cannot be set for inline user event imports.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * Required. Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudDiscoveryengineV1betaGcsSource;
    /**
     * Required. The Inline source for the input content for UserEvents.
     */
    inlineSource?: Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource;
  }
  /**
   * The inline source for the input config for ImportUserEvents method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource {
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: Schema$GoogleCloudDiscoveryengineV1betaUserEvent[];
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsResponse {
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Count of user events imported with complete existing Documents.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with Document information not found in the existing Branch.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * Response message for DocumentService.ListDocuments method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse {
    /**
     * The Documents.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1betaDocument[];
    /**
     * A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Media-specific user event information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaMediaInfo {
    /**
     * The media progress time in seconds, if applicable. For example, if the end user has finished 90 seconds of a playback video, then MediaInfo.media_progress_duration.seconds should be set to 90.
     */
    mediaProgressDuration?: string | null;
    /**
     * Media progress should be computed using only the media_progress_duration relative to the media total length. This value must be between [0, 1.0] inclusive. If this is not a playback or the progress cannot be computed (e.g. ongoing livestream), this field should be unset.
     */
    mediaProgressPercentage?: number | null;
  }
  /**
   * Detailed page information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPageInfo {
    /**
     * The most specific category associated with a category page. To represent full path of category, use '\>' sign to separate different hierarchies. If '\>' is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategory" : "Sales \> 2017 Black Friday Deals". Required for `view-category-page` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageCategory?: string | null;
    /**
     * A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.
     */
    pageviewId?: string | null;
    /**
     * The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. However, some browser privacy restrictions may cause this field to be empty.
     */
    referrerUri?: string | null;
    /**
     * Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.
     */
    uri?: string | null;
  }
  /**
   * Detailed panel information associated with a user event.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPanelInfo {
    /**
     * The display name of the panel.
     */
    displayName?: string | null;
    /**
     * Required. The panel ID.
     */
    panelId?: string | null;
    /**
     * The ordered position of the panel, if shown to the user with other panels. If set, then total_panels must also be set.
     */
    panelPosition?: number | null;
    /**
     * The total number of panels, including this one, shown to the user. Must be set if panel_position is set.
     */
    totalPanels?: number | null;
  }
  /**
   * Request message for Recommend method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRecommendRequest {
    /**
     * Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported. Examples: * (filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold")) * (filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green")) If your filter blocks all results, the API will return generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to True in RecommendRequest.params to receive empty results instead. Note that the API will never return Documents with storageStatus of "EXPIRED" or "DELETED" regardless of filter choices.
     */
    filter?: string | null;
    /**
     * Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.
     */
    pageSize?: number | null;
    /**
     * Additional domain specific parameters for the recommendations. Allowed values: * `returnDocument`: Boolean. If set to true, the associated Document object will be returned in RecommendResponse.results.document. * `returnScore`: Boolean. If set to true, the recommendation 'score' corresponding to each returned Document will be set in RecommendResponse.results.metadata. The given 'score' indicates the probability of a Document conversion given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of: * 'no-diversity' * 'low-diversity' * 'medium-diversity' * 'high-diversity' * 'auto-diversity' This gives request-level control and adjusts recommendation results based on Document category.
     */
    params?: {[key: string]: any} | null;
    /**
     * Required. Context about the user, what they are looking at and what action they took to trigger the Recommend request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserEvent.user_pseudo_id or UserEvent.user_info.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserEvent.user_pseudo_id to a random unique ID and leave UserEvent.user_info.user_id unset.
     */
    userEvent?: Schema$GoogleCloudDiscoveryengineV1betaUserEvent;
    /**
     * The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
     */
    userLabels?: {[key: string]: string} | null;
    /**
     * Use validate only mode for this recommendation query. If set to true, a fake model will be used that returns arbitrary Document IDs. Note that the validate only mode should only be used for testing the API, or if the model is not ready.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response message for Recommend method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse {
    /**
     * A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.
     */
    attributionToken?: string | null;
    /**
     * IDs of documents in the request that were missing from the default Branch associated with the requested ServingConfig.
     */
    missingIds?: string[] | null;
    /**
     * A list of recommended Documents. The order represents the ranking (from the most relevant Document to the least).
     */
    results?: Schema$GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult[];
    /**
     * True if RecommendRequest.validate_only was set.
     */
    validateOnly?: boolean | null;
  }
  /**
   * RecommendationResult represents a generic recommendation result with associated metadata.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult {
    /**
     * Set if `returnDocument` is set to true in RecommendRequest.params.
     */
    document?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
    /**
     * Resource ID of the recommended Document.
     */
    id?: string | null;
    /**
     * Additional Document metadata / annotations. Possible values: * `score`: Recommendation score in double value. Is set if `returnScore` is set to true in RecommendRequest.params.
     */
    metadata?: {[key: string]: any} | null;
  }
  /**
   * Detailed search information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchInfo {
    /**
     * An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an INVALID_ARGUMENT is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    offset?: number | null;
    /**
     * The order in which products are returned, if applicable. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    orderBy?: string | null;
    /**
     * The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    searchQuery?: string | null;
  }
  /**
   * A transaction represents the entire purchase transaction.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTransactionInfo {
    /**
     * All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = value - tax - cost
     */
    cost?: number | null;
    /**
     * Required. Currency code. Use three-character ISO-4217 code.
     */
    currency?: string | null;
    /**
     * The total discount(s) value applied to this transaction. This figure should be excluded from TransactionInfo.value For example, if a user paid TransactionInfo.value amount, then nominal (pre-discount) value of the transaction is the sum of TransactionInfo.value and TransactionInfo.discount_value This means that profit is calculated the same way, regardless of the discount value, and that TransactionInfo.discount_value can be larger than TransactionInfo.value: * Profit = value - tax - cost
     */
    discountValue?: number | null;
    /**
     * All the taxes associated with the transaction.
     */
    tax?: number | null;
    /**
     * The transaction ID with a length limit of 128 characters.
     */
    transactionId?: string | null;
    /**
     * Required. Total non-zero value associated with the transaction. This value may include shipping, tax, or other adjustments to the total value that you want to include.
     */
    value?: number | null;
  }
  /**
   * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaUserEvent {
    /**
     * Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
     */
    attributes?: {
      [key: string]: Schema$GoogleCloudDiscoveryengineV1betaCustomAttribute;
    } | null;
    /**
     * Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be one of: * PredictResponse.attribution_token for events that are the result of PredictionService.Predict. * SearchResponse.attribution_token for events that are the result of SearchService.Search. * CompleteQueryResponse.attribution_token for events that are the result of SearchService.CompleteQuery. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.
     */
    attributionToken?: string | null;
    /**
     * CompleteQuery API details related to the event. This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.
     */
    completionInfo?: Schema$GoogleCloudDiscoveryengineV1betaCompletionInfo;
    /**
     * Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.
     */
    directUserRequest?: boolean | null;
    /**
     * List of Documents associated with this user event. This field is optional except for the following event types: * `view-item` * `add-to-cart` * `purchase` * `media-play` * `media-complete` In a `search` event, this field represents the documents returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different UserEvent.documents is desired.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1betaDocumentInfo[];
    /**
     * Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.
     */
    eventTime?: string | null;
    /**
     * Required. User event type. Allowed values are: Generic values: * `search`: Search for Documents. * `view-item`: Detailed page view of a Document. * `view-item-list`: View of a panel or ordered list of Documents. * `view-home-page`: View of the home page. * `view-category-page`: View of a category page, e.g. Home \> Men \> Jeans Retail-related values: * `add-to-cart`: Add an item(s) to cart, e.g. in Retail online shopping * `purchase`: Purchase an item(s) Media-related values: * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc.
     */
    eventType?: string | null;
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for `search` events, the associated SearchService.SearchRequest may contain a filter expression in SearchService.SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for `view-item-list` events that are generated from a PredictionService.PredictRequest, this field may be populated directly from PredictionService.PredictRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    filter?: string | null;
    /**
     * Media-specific info.
     */
    mediaInfo?: Schema$GoogleCloudDiscoveryengineV1betaMediaInfo;
    /**
     * Page metadata such as categories and other critical information for certain event types such as `view-category-page`.
     */
    pageInfo?: Schema$GoogleCloudDiscoveryengineV1betaPageInfo;
    /**
     * Panel metadata associated with this user event.
     */
    panel?: Schema$GoogleCloudDiscoveryengineV1betaPanelInfo;
    /**
     * The promotion IDs if this is an event associated with promotions. Currently, this field is restricted to at most one ID.
     */
    promotionIds?: string[] | null;
    /**
     * Search API details related to the event. This field should be set for `search` event.
     */
    searchInfo?: Schema$GoogleCloudDiscoveryengineV1betaSearchInfo;
    /**
     * A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the session_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add UserEvent.user_pseudo_id as prefix.
     */
    sessionId?: string | null;
    /**
     * A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups on the customer end.
     */
    tagIds?: string[] | null;
    /**
     * The transaction metadata (if any) associated with this user event.
     */
    transactionInfo?: Schema$GoogleCloudDiscoveryengineV1betaTransactionInfo;
    /**
     * Information about the end user.
     */
    userInfo?: Schema$GoogleCloudDiscoveryengineV1betaUserInfo;
    /**
     * Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.
     */
    userPseudoId?: string | null;
  }
  /**
   * Information of an end user.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaUserInfo {
    /**
     * User agent as included in the HTTP header. Required for getting SearchResponse.sponsored_results. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.
     */
    userAgent?: string | null;
    /**
     * Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    userId?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
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
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$GoogleTypeDate {
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

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    dataStores: Resource$Projects$Locations$Datastores;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataStores = new Resource$Projects$Locations$Datastores(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Datastores {
    context: APIRequestContext;
    branches: Resource$Projects$Locations$Datastores$Branches;
    models: Resource$Projects$Locations$Datastores$Models;
    operations: Resource$Projects$Locations$Datastores$Operations;
    servingConfigs: Resource$Projects$Locations$Datastores$Servingconfigs;
    userEvents: Resource$Projects$Locations$Datastores$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.branches = new Resource$Projects$Locations$Datastores$Branches(
        this.context
      );
      this.models = new Resource$Projects$Locations$Datastores$Models(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Datastores$Operations(
        this.context
      );
      this.servingConfigs =
        new Resource$Projects$Locations$Datastores$Servingconfigs(this.context);
      this.userEvents = new Resource$Projects$Locations$Datastores$Userevents(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Datastores$Branches {
    context: APIRequestContext;
    documents: Resource$Projects$Locations$Datastores$Branches$Documents;
    operations: Resource$Projects$Locations$Datastores$Branches$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents =
        new Resource$Projects$Locations$Datastores$Branches$Documents(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Datastores$Branches$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Datastores$Branches$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.branches.documents.create(
     *       {
     *         // Required. The ID to use for the Document, which will become the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Documents with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     *         documentId: 'placeholder-value',
     *         // Required. The parent resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}`.
     *         parent:
     *           'projects/my-project/locations/my-location/dataStores/my-dataStore/branches/my-branche',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "id": "my_id",
     *           //   "jsonData": "my_jsonData",
     *           //   "name": "my_name",
     *           //   "parentDocumentId": "my_parentDocumentId",
     *           //   "schemaId": "my_schemaId",
     *           //   "structData": {}
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "jsonData": "my_jsonData",
     *   //   "name": "my_name",
     *   //   "parentDocumentId": "my_parentDocumentId",
     *   //   "schemaId": "my_schemaId",
     *   //   "structData": {}
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
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }

    /**
     * Deletes a Document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.branches.documents.delete(
     *       {
     *         // Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Document to delete does not exist, a NOT_FOUND error is returned.
     *         name: 'projects/my-project/locations/my-location/dataStores/my-dataStore/branches/my-branche/documents/my-document',
     *       }
     *     );
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
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.branches.documents.get({
     *       // Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Document does not exist, a NOT_FOUND error is returned.
     *       name: 'projects/my-project/locations/my-location/dataStores/my-dataStore/branches/my-branche/documents/my-document',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "jsonData": "my_jsonData",
     *   //   "name": "my_name",
     *   //   "parentDocumentId": "my_parentDocumentId",
     *   //   "schemaId": "my_schemaId",
     *   //   "structData": {}
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
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }

    /**
     * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.branches.documents.import(
     *       {
     *         // Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}`. Requires create/update permission.
     *         parent:
     *           'projects/my-project/locations/my-location/dataStores/my-dataStore/branches/my-branche',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "bigquerySource": {},
     *           //   "errorConfig": {},
     *           //   "gcsSource": {},
     *           //   "inlineSource": {},
     *           //   "reconciliationMode": "my_reconciliationMode"
     *           // }
     *         },
     *       }
     *     );
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
    import(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import
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
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents:import').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a list of Documents.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.branches.documents.list(
     *       {
     *         // Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     *         pageSize: 'placeholder-value',
     *         // A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documentss under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     *         parent:
     *           'projects/my-project/locations/my-location/dataStores/my-dataStore/branches/my-branche',
     *       }
     *     );
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
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.branches.documents.patch(
     *       {
     *         // If set to true, and the Document is not found, a new Document will be created.
     *         allowMissing: 'placeholder-value',
     *         // Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     *         name: 'projects/my-project/locations/my-location/dataStores/my-dataStore/branches/my-branche/documents/my-document',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "id": "my_id",
     *           //   "jsonData": "my_jsonData",
     *           //   "name": "my_name",
     *           //   "parentDocumentId": "my_parentDocumentId",
     *           //   "schemaId": "my_schemaId",
     *           //   "structData": {}
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "jsonData": "my_jsonData",
     *   //   "name": "my_name",
     *   //   "parentDocumentId": "my_parentDocumentId",
     *   //   "schemaId": "my_schemaId",
     *   //   "structData": {}
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
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Document, which will become the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Documents with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    documentId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Document to delete does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Document does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import
    extends StandardParameters {
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}`. Requires create/update permission.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$List
    extends StandardParameters {
    /**
     * Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documentss under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Document is not found, a new Document will be created.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
  }

  export class Resource$Projects$Locations$Datastores$Branches$Operations {
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
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.branches.operations.get(
     *       {
     *         // The name of the operation resource.
     *         name: 'projects/my-project/locations/my-location/dataStores/my-dataStore/branches/my-branche/operations/my-operation',
     *       }
     *     );
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
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.branches.operations.list(
     *       {
     *         // The standard list filter.
     *         filter: 'placeholder-value',
     *         // The name of the operation's parent resource.
     *         name: 'projects/my-project/locations/my-location/dataStores/my-dataStore/branches/my-branche',
     *         // The standard list page size.
     *         pageSize: 'placeholder-value',
     *         // The standard list page token.
     *         pageToken: 'placeholder-value',
     *       }
     *     );
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Operations$List
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

  export class Resource$Projects$Locations$Datastores$Models {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Datastores$Models$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Datastores$Models$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Datastores$Models$Operations {
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
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.models.operations.get({
     *       // The name of the operation resource.
     *       name: 'projects/my-project/locations/my-location/dataStores/my-dataStore/models/my-model/operations/my-operation',
     *     });
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
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Models$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Datastores$Models$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Models$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.models.operations.list({
     *       // The standard list filter.
     *       filter: 'placeholder-value',
     *       // The name of the operation's parent resource.
     *       name: 'projects/my-project/locations/my-location/dataStores/my-dataStore/models/my-model',
     *       // The standard list page size.
     *       pageSize: 'placeholder-value',
     *       // The standard list page token.
     *       pageToken: 'placeholder-value',
     *     });
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Models$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Models$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Models$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Models$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Models$Operations$List
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

  export class Resource$Projects$Locations$Datastores$Operations {
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
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.operations.get({
     *       // The name of the operation resource.
     *       name: 'projects/my-project/locations/my-location/dataStores/my-dataStore/operations/my-operation',
     *     });
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
      params: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Datastores$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.operations.list({
     *       // The standard list filter.
     *       filter: 'placeholder-value',
     *       // The name of the operation's parent resource.
     *       name: 'projects/my-project/locations/my-location/dataStores/my-dataStore',
     *       // The standard list page size.
     *       pageSize: 'placeholder-value',
     *       // The standard list page token.
     *       pageToken: 'placeholder-value',
     *     });
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Operations$List
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

  export class Resource$Projects$Locations$Datastores$Servingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Makes a recommendation, which requires a contextual user event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.servingConfigs.recommend(
     *       {
     *         // Required. Full resource name of the format: projects/x/locations/global/dataStores/x/servingConfigs/x Before you can request recommendations from your model, you must create at least one serving config for it.
     *         servingConfig:
     *           'projects/my-project/locations/my-location/dataStores/my-dataStore/servingConfigs/my-servingConfig',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "filter": "my_filter",
     *           //   "pageSize": 0,
     *           //   "params": {},
     *           //   "userEvent": {},
     *           //   "userLabels": {},
     *           //   "validateOnly": false
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributionToken": "my_attributionToken",
     *   //   "missingIds": [],
     *   //   "results": [],
     *   //   "validateOnly": false
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
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recommend(
      params?: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:recommend').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend
    extends StandardParameters {
    /**
     * Required. Full resource name of the format: projects/x/locations/global/dataStores/x/servingConfigs/x Before you can request recommendations from your model, you must create at least one serving config for it.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaRecommendRequest;
  }

  export class Resource$Projects$Locations$Datastores$Userevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.userEvents.collect({
     *       // The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     *       ets: 'placeholder-value',
     *       // Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/dataStores/my-dataStore',
     *       // The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests.
     *       uri: 'placeholder-value',
     *       // Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     *       userEvent: 'placeholder-value',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    collect(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    collect(
      params?: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleApiHttpBody>;
    collect(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApiHttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(callback: BodyResponseCallback<Schema$GoogleApiHttpBody>): void;
    collect(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Userevents$Collect
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleApiHttpBody>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Userevents$Collect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Userevents$Collect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:collect').replace(
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
        createAPIRequest<Schema$GoogleApiHttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleApiHttpBody>(parameters);
      }
    }

    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.userEvents.import({
     *       // Required. Parent DataStore resource name, of the form `projects/{project\}/locations/{location\}/dataStores/{data_store\}`
     *       parent:
     *         'projects/my-project/locations/my-location/dataStores/my-dataStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "bigquerySource": {},
     *         //   "errorConfig": {},
     *         //   "gcsSource": {},
     *         //   "inlineSource": {}
     *         // }
     *       },
     *     });
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
    import(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Userevents$Import
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
        {}) as Params$Resource$Projects$Locations$Datastores$Userevents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Userevents$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:import').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Writes a single user event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *     await discoveryengine.projects.locations.dataStores.userEvents.write({
     *       // Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/dataStores/my-dataStore',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "attributes": {},
     *         //   "attributionToken": "my_attributionToken",
     *         //   "completionInfo": {},
     *         //   "directUserRequest": false,
     *         //   "documents": [],
     *         //   "eventTime": "my_eventTime",
     *         //   "eventType": "my_eventType",
     *         //   "filter": "my_filter",
     *         //   "mediaInfo": {},
     *         //   "pageInfo": {},
     *         //   "panel": {},
     *         //   "promotionIds": [],
     *         //   "searchInfo": {},
     *         //   "sessionId": "my_sessionId",
     *         //   "tagIds": [],
     *         //   "transactionInfo": {},
     *         //   "userInfo": {},
     *         //   "userPseudoId": "my_userPseudoId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "attributionToken": "my_attributionToken",
     *   //   "completionInfo": {},
     *   //   "directUserRequest": false,
     *   //   "documents": [],
     *   //   "eventTime": "my_eventTime",
     *   //   "eventType": "my_eventType",
     *   //   "filter": "my_filter",
     *   //   "mediaInfo": {},
     *   //   "pageInfo": {},
     *   //   "panel": {},
     *   //   "promotionIds": [],
     *   //   "searchInfo": {},
     *   //   "sessionId": "my_sessionId",
     *   //   "tagIds": [],
     *   //   "transactionInfo": {},
     *   //   "userInfo": {},
     *   //   "userPseudoId": "my_userPseudoId"
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
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    write(
      params?: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Userevents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Userevents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:write').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Userevents$Collect
    extends StandardParameters {
    /**
     * The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     */
    ets?: string;
    /**
     * Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests.
     */
    uri?: string;
    /**
     * Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     */
    userEvent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Userevents$Import
    extends StandardParameters {
    /**
     * Required. Parent DataStore resource name, of the form `projects/{project\}/locations/{location\}/dataStores/{data_store\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Userevents$Write
    extends StandardParameters {
    /**
     * Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/dataStores/{data_store\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaUserEvent;
  }

  export class Resource$Projects$Locations$Operations {
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
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *   const res = await discoveryengine.projects.locations.operations.get({
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
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

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *   const res = await discoveryengine.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
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
  export interface Params$Resource$Projects$Locations$Operations$List
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

  export class Resource$Projects$Operations {
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
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *   const res = await discoveryengine.projects.operations.get({
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
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

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discoveryengine.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discoveryengine = google.discoveryengine('v1beta');
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
     *   const res = await discoveryengine.projects.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
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
  export interface Params$Resource$Projects$Operations$List
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
