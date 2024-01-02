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

export namespace discoveryengine_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * const discoveryengine = google.discoveryengine('v1alpha');
   * ```
   */
  export class Discoveryengine {
    context: APIRequestContext;
    locations: Resource$Locations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.locations = new Resource$Locations(this.context);
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
     * The API request payload, represented as a protocol buffer. Most API request types are supported—for example: * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.DocumentService.CreateDocumentRequest` * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEventRequest`
     */
    requestPayload?: {[key: string]: any} | null;
    /**
     * The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported, and no PII is included: * `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend` * `google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEvent` * `google.cloud.discoveryengine.v1alpha.UserEventService.CollectUserEvent`
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
   * The error payload that is populated on LRO import APIs, including the following: * `google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments` * `google.cloud.discoveryengine.v1alpha.UserEventService.ImportUserEvents`
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
     * An identifier of the service—for example, `discoveryengine.googleapis.com`.
     */
    service?: string | null;
  }
  /**
   * Indicates a location in the source code of the service for which errors are reported.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingSourceLocation {
    /**
     * Human-readable name of a function or method—for example, `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend`.
     */
    functionName?: string | null;
  }
  /**
   * AdditionalParams message for WidgetService methods for security and privacy enhancement.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAdditionalParams {
    /**
     * Token that used for non-human user check.
     */
    token?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.BatchCreateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SiteSearchEngineService.s method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest {
    /**
     * Required. The request message specifying the resources to create. A maximum of 20 TargetSites can be created in a batch.
     */
    requests?: Schema$GoogleCloudDiscoveryengineV1alphaCreateTargetSiteRequest[];
  }
  /**
   * Response message for SiteSearchEngineService.BatchCreateTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesResponse {
    /**
     * TargetSites created.
     */
    targetSites?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite[];
  }
  /**
   * Request message for SiteSearchEngineService.BatchVerifyTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaBatchVerifyTargetSitesRequest {}
  /**
   * BigQuery source import data from.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaBigQuerySource {
    /**
     * The schema to use when parsing the data from the source. Supported values for user event imports: * `user_event` (default): One UserEvent per row. Supported values for document imports: * `document` (default): One Document format per row. Each document must have a valid Document.id and one of Document.json_data or Document.struct_data. * `custom`: One custom data per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by Gen App Builder.
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
   * Request message for CompletionService.CompleteQuery method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest {
    /**
     * Required. The parent data store resource name for which the completion is performed, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store`.
     */
    dataStore?: string | null;
    /**
     * Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned.
     */
    includeTailSuggestions?: boolean | null;
    /**
     * Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters.
     */
    query?: string | null;
    /**
     * Selects data model of query suggestions for serving. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores.
     */
    queryModel?: string | null;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userPseudoId?: string | null;
  }
  /**
   * Response message for CompletionService.CompleteQuery method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse {
    /**
     * Results of the matched query suggestions. The result list is ordered and the first result is a top suggestion.
     */
    querySuggestions?: Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponseQuerySuggestion[];
    /**
     * True if the returned suggestions are all tail suggestions. For tail matching to be triggered, include_tail_suggestions in the request must be true and there must be no suggestions that match the full query.
     */
    tailMatchTriggered?: boolean | null;
  }
  /**
   * Suggestions as search queries.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponseQuerySuggestion {
    /**
     * The unique document field paths that serve as the source of this suggestion if it was generated from completable fields. This field is only populated for the document-completable model.
     */
    completableFieldPaths?: string[] | null;
    /**
     * The suggestion for the query.
     */
    suggestion?: string | null;
  }
  /**
   * Detailed completion information including completion attribution token and clicked completion info.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCompletionInfo {
    /**
     * End user selected CompleteQueryResponse.QuerySuggestion.suggestion position, starting from 0.
     */
    selectedPosition?: number | null;
    /**
     * End user selected CompleteQueryResponse.QuerySuggestion.suggestion.
     */
    selectedSuggestion?: string | null;
  }
  /**
   * External conversation proto definition.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaConversation {
    /**
     * Output only. The time the conversation finished.
     */
    endTime?: string | null;
    /**
     * Conversation messages.
     */
    messages?: Schema$GoogleCloudDiscoveryengineV1alphaConversationMessage[];
    /**
     * Immutable. Fully qualified name `project/x/locations/global/collections/{collection\}/dataStore/x/conversations/x` or `project/x/locations/global/collections/{collection\}/engines/x/conversations/x`.
     */
    name?: string | null;
    /**
     * Output only. The time the conversation started.
     */
    startTime?: string | null;
    /**
     * The state of the Conversation.
     */
    state?: string | null;
    /**
     * A unique identifier for tracking users.
     */
    userPseudoId?: string | null;
  }
  /**
   * Defines context of the conversation
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaConversationContext {
    /**
     * The current active document the user opened. It contains the document resource reference.
     */
    activeDocument?: string | null;
    /**
     * The current list of documents the user is seeing. It contains the document resource references.
     */
    contextDocuments?: string[] | null;
  }
  /**
   * Defines a conversation message.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaConversationMessage {
    /**
     * Output only. Message creation timestamp.
     */
    createTime?: string | null;
    /**
     * Search reply.
     */
    reply?: Schema$GoogleCloudDiscoveryengineV1alphaReply;
    /**
     * User text input.
     */
    userInput?: Schema$GoogleCloudDiscoveryengineV1alphaTextInput;
  }
  /**
   * Request message for ConversationalSearchService.ConverseConversation method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationRequest {
    /**
     * The conversation to be used by auto session only. The name field will be ignored as we automatically assign new name for the conversation in auto session.
     */
    conversation?: Schema$GoogleCloudDiscoveryengineV1alphaConversation;
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. This will be used to filter search results which may affect the summary response. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --\> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata)
     */
    filter?: string | null;
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`. Use `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     */
    name?: string | null;
    /**
     * Required. Current user input.
     */
    query?: Schema$GoogleCloudDiscoveryengineV1alphaTextInput;
    /**
     * Whether to turn on safe search.
     */
    safeSearch?: boolean | null;
    /**
     * The resource name of the Serving Config to use. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/servingConfigs/{serving_config_id\}` If this is not set, the default serving config will be used.
     */
    servingConfig?: string | null;
    /**
     * A specification for configuring the summary returned in the response.
     */
    summarySpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec;
    /**
     * The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
     */
    userLabels?: {[key: string]: string} | null;
  }
  /**
   * Response message for ConversationalSearchService.ConverseConversation method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse {
    /**
     * Updated conversation including the answer.
     */
    conversation?: Schema$GoogleCloudDiscoveryengineV1alphaConversation;
    /**
     * Suggested related questions.
     */
    relatedQuestions?: string[] | null;
    /**
     * Answer to the current query.
     */
    reply?: Schema$GoogleCloudDiscoveryengineV1alphaReply;
    /**
     * Search Results.
     */
    searchResults?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSearchResult[];
  }
  /**
   * Metadata related to the progress of the DataStoreService.CreateDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateDataStoreMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the EngineService.CreateEngine operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateEngineMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for Create Schema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.CreateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SiteSearchEngineService.CreateTargetSite method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateTargetSiteRequest {
    /**
     * Required. Parent resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    parent?: string | null;
    /**
     * Required. The TargetSite to create.
     */
    targetSite?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite;
  }
  /**
   * A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCustomAttribute {
    /**
     * The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of CustomAttribute.text or CustomAttribute.numbers should be set. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    numbers?: number[] | null;
    /**
     * The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an `INVALID_ARGUMENT` error is returned. Exactly one of CustomAttribute.text or CustomAttribute.numbers should be set. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    text?: string[] | null;
  }
  /**
   * DataStore captures global settings and configs at the DataStore level.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDataStore {
    /**
     * Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT.
     */
    contentConfig?: string | null;
    /**
     * Output only. Timestamp the DataStore was created at.
     */
    createTime?: string | null;
    /**
     * Output only. The id of the default Schema asscociated to this data store.
     */
    defaultSchemaId?: string | null;
    /**
     * Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string | null;
    /**
     * Immutable. The industry vertical that the data store registers.
     */
    industryVertical?: string | null;
    /**
     * Immutable. The full resource name of the data store. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The solutions that the data store enrolls. Available solutions for each industry_vertical: * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`. * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other solutions cannot be enrolled.
     */
    solutionTypes?: string[] | null;
  }
  /**
   * Metadata related to the progress of the DataStoreService.DeleteDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDeleteDataStoreMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the EngineService.DeleteEngine operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDeleteEngineMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for DeleteSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDeleteSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.DeleteTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDeleteTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.DisableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SiteSearchEngineService.DisableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchRequest {}
  /**
   * Response message for SiteSearchEngineService.DisableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchResponse {}
  /**
   * Document captures all raw metadata information of items to be recommended or searched.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocument {
    /**
     * The unstructured data linked to this document. Content must be set if this document is under a `CONTENT_REQUIRED` data store.
     */
    content?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentContent;
    /**
     * Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document.
     */
    derivedStructData?: {[key: string]: any} | null;
    /**
     * Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    id?: string | null;
    /**
     * The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.
     */
    jsonData?: string | null;
    /**
     * Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    parentDocumentId?: string | null;
    /**
     * The identifier of the schema located in the same data store.
     */
    schemaId?: string | null;
    /**
     * The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.
     */
    structData?: {[key: string]: any} | null;
  }
  /**
   * Unstructured data linked to this document.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentContent {
    /**
     * The MIME type of the content. Supported types: * `application/pdf` (PDF, only native PDFs are supported for now) * `text/html` (HTML) * `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (DOCX) * `application/vnd.openxmlformats-officedocument.presentationml.presentation` (PPTX) * `text/plain` (TXT) See https://www.iana.org/assignments/media-types/media-types.xhtml.
     */
    mimeType?: string | null;
    /**
     * The content represented as a stream of bytes. The maximum length is 1,000,000 bytes (1 MB / ~0.95 MiB). Note: As with all `bytes` fields, this field is represented as pure binary in Protocol Buffers and base64-encoded string in JSON. For example, `abc123!?$*&()'-=@~` should be represented as `YWJjMTIzIT8kKiYoKSctPUB+` in JSON. See https://developers.google.com/protocol-buffers/docs/proto3#json.
     */
    rawBytes?: string | null;
    /**
     * The URI of the content. Only Cloud Storage URIs (e.g. `gs://bucket-name/path/to/file`) are supported. The maximum file size is 100 MB.
     */
    uri?: string | null;
  }
  /**
   * Detailed document information associated with a user event.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentInfo {
    /**
     * The Document resource ID.
     */
    id?: string | null;
    /**
     * The Document resource full name, of the form: `projects/{project_id\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}/branches/{branch_id\}/documents/{document_id\}`
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
    /**
     * The Document URI - only allowed for website data stores.
     */
    uri?: string | null;
  }
  /**
   * A singleton resource of DataStore. It's empty when DataStore is created, which defaults to digital parser. The first call to DataStoreService.UpdateDocumentProcessingConfig method will initialize the config.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig {
    /**
     * Output only. The full resource name of the Document Processing Config. Format: `projects/x/locations/x/collections/x/dataStores/x/documentProcessingConfig`.
     */
    name?: string | null;
    /**
     * The OCR config. Currently it only applies to PDFs.
     */
    ocrConfig?: Schema$GoogleCloudDiscoveryengineV1alphaOcrConfig;
  }
  /**
   * Double list.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDoubleList {
    /**
     * Double values.
     */
    values?: number[] | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.EnableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SiteSearchEngineService.EnableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchRequest {}
  /**
   * Response message for SiteSearchEngineService.EnableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchResponse {}
  /**
   * Metadata that describes the training and serving parameters of an Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngine {
    /**
     * Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
     */
    chatEngineConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig;
    /**
     * Output only. Additional information of the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
     */
    chatEngineMetadata?: Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadata;
    /**
     * Common config spec that specifies the metadata of the engine.
     */
    commonConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineCommonConfig;
    /**
     * Output only. Timestamp the Recommendation Engine was created at.
     */
    createTime?: string | null;
    /**
     * The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary intializations.
     */
    dataStoreIds?: string[] | null;
    /**
     * Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
     */
    displayName?: string | null;
    /**
     * The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to `GENERIC`. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
     */
    industryVertical?: string | null;
    /**
     * Configurations for the Media Engine. Only applicable on the data stores with solution_type SOLUTION_TYPE_RECOMMENDATION and IndustryVertical.MEDIA vertical.
     */
    mediaRecommendationEngineConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig;
    /**
     * Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}` engine should be 1-63 characters, and valid characters are /a-z0-9x/. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    name?: string | null;
    /**
     * Output only. Additional information of a recommendation engine. Only applicable if solution_type is SOLUTION_TYPE_RECOMMENDATION.
     */
    recommendationMetadata?: Schema$GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata;
    /**
     * Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH.
     */
    searchEngineConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig;
    /**
     * Additional config specs for a `similar-items` engine.
     */
    similarDocumentsConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfig;
    /**
     * Required. The solutions of the engine.
     */
    solutionType?: string | null;
    /**
     * Output only. Timestamp the Recommendation Engine was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configurations for a Chat Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig {
    /**
     * The configurationt generate the Dialogflow agent that is associated to this Engine. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.
     */
    agentCreationConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfig;
    /**
     * The resource name of an exist Dialogflow agent to link to this Chat Engine. Customers can either provide `agent_creation_config` to create agent or provide an agent name that links the agent with the Chat engine. Format: `projects//locations//agents/`. Note that the `dialogflow_agent_to_link` are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. Please use chat_engine_metadata.dialogflow_agent for actual agent association after Engine is created.
     */
    dialogflowAgentToLink?: string | null;
  }
  /**
   * Configurations for generating a Dialogflow agent. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfig {
    /**
     * Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
     */
    business?: string | null;
    /**
     * Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
     */
    defaultLanguageCode?: string | null;
    /**
     * Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
     */
    timeZone?: string | null;
  }
  /**
   * Additional information of a Chat Engine. Fields in this message are output only.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadata {
    /**
     * The resource name of a Dialogflow agent, that this Chat Engine refers to. Format: `projects//locations//agents/`.
     */
    dialogflowAgent?: string | null;
  }
  /**
   * Common configurations for an Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineCommonConfig {
    /**
     * The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.
     */
    companyName?: string | null;
  }
  /**
   * Additional config specs for a Media Recommendation engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig {
    /**
     * The optimization objective e.g. `cvr`. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: `ctr`, `cvr`. If not specified, we choose default based on engine type. Default depends on type of recommendation: `recommended-for-you` =\> `ctr` `others-you-may-like` =\> `ctr`
     */
    optimizationObjective?: string | null;
    /**
     * Name and value of the custom threshold for cvr optimization_objective. For target_field `watch-time`, target_field_value must be an integer value indicating the media progress time in seconds between (0, 86400] (excludes 0, includes 86400) (e.g., 90). For target_field `watch-percentage`, the target_field_value must be a valid float value between (0, 1.0] (excludes 0, includes 1.0) (e.g., 0.5).
     */
    optimizationObjectiveConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;
    /**
     * The training state that the engine is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for `CreateEngine` method is `TRAINING`. The default value for `UpdateEngine` method is to keep the state the same as before.
     */
    trainingState?: string | null;
    /**
     * Required. The type of engine e.g. `recommended-for-you`. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: `recommended-for-you`, `others-you-may-like`, `more-like-this`, `most-popular-items`.
     */
    type?: string | null;
  }
  /**
   * Custom threshold for `cvr` optimization_objective.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig {
    /**
     * Required. The name of the field to target. Currently supported values: `watch-percentage`, `watch-time`.
     */
    targetField?: string | null;
    /**
     * Required. The threshold to be applied to the target (e.g., 0.5).
     */
    targetFieldValueFloat?: number | null;
  }
  /**
   * Additional information of a recommendation engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata {
    /**
     * Output only. The state of data requirements for this engine: `DATA_OK` and `DATA_ERROR`. Engine cannot be trained if the data is in `DATA_ERROR` state. Engine can have `DATA_ERROR` state even if serving state is `ACTIVE`: engines were trained successfully before, but cannot be refreshed because the underlying engine no longer has sufficient data for training.
     */
    dataState?: string | null;
    /**
     * Output only. The timestamp when the latest successful tune finished. Only applicable on Media Recommendation engines.
     */
    lastTuneTime?: string | null;
    /**
     * Output only. The serving state of the engine: `ACTIVE`, `NOT_ACTIVE`.
     */
    servingState?: string | null;
    /**
     * Output only. The latest tune operation id associated with the engine. Only applicable on Media Recommendation engines. If present, this operation id can be used to determine if there is an ongoing tune for this engine. To check the operation status, send the GetOperation request with this operation id in the engine resource format. If no tuning has happened for this engine, the string is empty.
     */
    tuningOperation?: string | null;
  }
  /**
   * Configurations for a Search Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig {
    /**
     * The add-on that this search engine enables.
     */
    searchAddOns?: string[] | null;
    /**
     * The search feature tier of this engine. Different tiers might have different pricing. To learn more, please check the pricing documentation. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.
     */
    searchTier?: string | null;
  }
  /**
   * Additional config specs for a `similar-items` engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfig {}
  /**
   * Metadata related to the progress of the EstimateDataSize operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
  }
  /**
   * Request message for EstimateBillingService.EstimateDataSize method
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest {
    /**
     * Structured or unstructured data.
     */
    fileDataSource?: Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource;
    /**
     * Website data.
     */
    websiteDataSource?: Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource;
  }
  /**
   * Data source contains files either in GCS or BigQuery.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource {
    /**
     * BigQuery input source.
     */
    bigquerySource?: Schema$GoogleCloudDiscoveryengineV1alphaBigQuerySource;
    /**
     * Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudDiscoveryengineV1alphaGcsSource;
  }
  /**
   * Data source is a set of website patterns that we crawl to get the total number of websites.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource {
    /**
     * Required. The URI patterns to estimate the data sizes. At most 10 patterns are allowed, otherwise an INVALID_ARGUMENT error is thrown.
     */
    estimatorUriPatterns?: Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern[];
  }
  /**
   * URI patterns that we use to crawl.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSourceEstimatorUriPattern {
    /**
     * Whether we infer the generated URI or use the exact provided one.
     */
    exactMatch?: boolean | null;
    /**
     * Whether the pattern is exclusive or not. If set to true, the pattern is considered exclusive. If unset or set to false, the pattern is considered inclusive by default.
     */
    exclusive?: boolean | null;
    /**
     * User provided URI pattern. For example, `foo.com/bar/x`.
     */
    providedUriPattern?: string | null;
  }
  /**
   * Response of the EstimateDataSize request. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse {
    /**
     * Data size in terms of bytes.
     */
    dataSizeBytes?: string | null;
    /**
     * Total number of documents.
     */
    documentCount?: string | null;
  }
  /**
   * Response message for SiteSearchEngineService.FetchDomainVerificationStatus method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of TargetSites containing the site verification status.
     */
    targetSites?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite[];
    /**
     * The total number of items matching the request. This will always be populated in the response.
     */
    totalSize?: number | null;
  }
  /**
   * Configurations for fields of a schema. For example, configuring a field is indexable, or searchable.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaFieldConfig {
    /**
     * If completable_option is COMPLETABLE_ENABLED, field values are directly used and returned as suggestions for Autocomplete in CompletionService.CompleteQuery. If completable_option is unset, the server behavior defaults to COMPLETABLE_DISABLED for fields that support setting completable options, which are just `string` fields. For those fields that do not support setting completable options, the server will skip completable option setting, and setting completable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    completableOption?: string | null;
    /**
     * If dynamic_facetable_option is DYNAMIC_FACETABLE_ENABLED, field values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if FieldConfig.indexable_option is INDEXABLE_DISABLED. Otherwise, an `INVALID_ARGUMENT` error will be returned. If dynamic_facetable_option is unset, the server behavior defaults to DYNAMIC_FACETABLE_DISABLED for fields that support setting dynamic facetable options. For those fields that do not support setting dynamic facetable options, such as `object` and `boolean`, the server will skip dynamic facetable option setting, and setting dynamic_facetable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    dynamicFacetableOption?: string | null;
    /**
     * Required. Field path of the schema field. For example: `title`, `description`, `release_info.release_year`.
     */
    fieldPath?: string | null;
    /**
     * Output only. Raw type of the field.
     */
    fieldType?: string | null;
    /**
     * If indexable_option is INDEXABLE_ENABLED, field values are indexed so that it can be filtered or faceted in SearchService.Search. If indexable_option is unset, the server behavior defaults to INDEXABLE_DISABLED for fields that support setting indexable options. For those fields that do not support setting indexable options, such as `object` and `boolean` and key properties, the server will skip indexable_option setting, and setting indexable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    indexableOption?: string | null;
    /**
     * Output only. Type of the key property that this field is mapped to. Empty string if this is not annotated as mapped to a key property. Example types are `title`, `description`. Full list is defined by `keyPropertyMapping` in the schema field annotation. If the schema field has a `KeyPropertyMapping` annotation, `indexable_option` and `searchable_option` of this field cannot be modified.
     */
    keyPropertyType?: string | null;
    /**
     * If recs_filterable_option is FILTERABLE_ENABLED, field values are filterable by filter expression in RecommendationService.Recommend. If FILTERABLE_ENABLED but the field type is numerical, field values are not filterable by text queries in RecommendationService.Recommend. Only textual fields are supported. If recs_filterable_option is unset, the default setting is FILTERABLE_DISABLED for fields that support setting filterable options. When a field set to [FILTERABLE_DISABLED] is filtered, a warning is generated and an empty result is returned.
     */
    recsFilterableOption?: string | null;
    /**
     * If retrievable_option is RETRIEVABLE_ENABLED, field values are included in the search results. If retrievable_option is unset, the server behavior defaults to RETRIEVABLE_DISABLED for fields that support setting retrievable options. For those fields that do not support setting retrievable options, such as `object` and `boolean`, the server will skip retrievable option setting, and setting retrievable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    retrievableOption?: string | null;
    /**
     * If searchable_option is SEARCHABLE_ENABLED, field values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but field type is numerical, field values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical fields. If searchable_option is unset, the server behavior defaults to SEARCHABLE_DISABLED for fields that support setting searchable options. Only `string` fields that have no key property mapping support setting searchable_option. For those fields that do not support setting searchable options, the server will skip searchable option setting, and setting searchable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    searchableOption?: string | null;
  }
  /**
   * Cloud Storage location for input content.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaGcsSource {
    /**
     * The schema to use when parsing the data from the source. Supported values for document imports: * `document` (default): One JSON Document per line. Each document must have a valid Document.id. * `content`: Unstructured data (e.g. PDF, HTML). Each file matched by `input_uris` becomes a document, with the ID set to the first 128 bits of SHA256(URI) encoded as a hex string. * `custom`: One custom data JSON per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by Gen App Builder. * `csv`: A CSV file with header conforming to the defined Schema of the data store. Each entry after the header is imported as a Document. This can only be used by Gen App Builder. Supported values for user even imports: * `user_event` (default): One JSON UserEvent per line.
     */
    dataSchema?: string | null;
    /**
     * Required. Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/x.json`. A request can contain at most 100 files (or 100,000 files if `data_schema` is `content`). Each file can be up to 2 GB (or 100 MB if `data_schema` is `content`).
     */
    inputUris?: string[] | null;
  }
  /**
   * Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field.
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
   * Request message for Import methods.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest {
    /**
     * Whether to automatically generate IDs for the documents if absent. If set to `true`, Document.ids are automatically generated based on the hash of the payload, where IDs may not be consistent during multiple imports. In which case ReconciliationMode.FULL is highly recommended to avoid duplicate contents. If unset or set to `false`, Document.ids have to be specified using id_field, otherwise, documents without IDs fail to be imported. Only set this field when using GcsSource or BigQuerySource, and when GcsSource.data_schema or BigQuerySource.data_schema is `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown.
     */
    autoGenerateIds?: boolean | null;
    /**
     * BigQuery input source.
     */
    bigquerySource?: Schema$GoogleCloudDiscoveryengineV1alphaBigQuerySource;
    /**
     * The desired location of errors incurred during the Import.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudDiscoveryengineV1alphaGcsSource;
    /**
     * The field in the Cloud Storage and BigQuery sources that indicates the unique IDs of the documents. For GcsSource it is the key of the JSON field. For instance, `my_id` for JSON `{"my_id": "some_uuid"\}`. For BigQuerySource it is the column name of the BigQuery table where the unique ids are stored. The values of the JSON field or the BigQuery column are used as the Document.ids. The JSON field or the BigQuery column must be of string type, and the values must be set as valid strings conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) with 1-63 characters. Otherwise, documents without valid IDs fail to be imported. Only set this field when using GcsSource or BigQuerySource, and when GcsSource.data_schema or BigQuerySource.data_schema is `custom`. And only set this field when auto_generate_ids is unset or set as `false`. Otherwise, an INVALID_ARGUMENT error is thrown. If it is unset, a default value `_id` is used when importing from the allowed data sources.
     */
    idField?: string | null;
    /**
     * The Inline source for the input content for documents.
     */
    inlineSource?: Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource;
    /**
     * The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    reconciliationMode?: string | null;
  }
  /**
   * The inline source for the input config for ImportDocuments method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource {
    /**
     * Required. A list of documents to update/create. Each document must have a valid Document.id. Recommended max of 100 items.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1alphaDocument[];
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
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.
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
   * Request message for the ImportUserEvents request.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest {
    /**
     * BigQuery input source.
     */
    bigquerySource?: Schema$GoogleCloudDiscoveryengineV1alphaBigQuerySource;
    /**
     * The desired location of errors incurred during the Import. Cannot be set for inline user event imports.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudDiscoveryengineV1alphaGcsSource;
    /**
     * The Inline source for the input content for UserEvents.
     */
    inlineSource?: Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource;
  }
  /**
   * The inline source for the input config for ImportUserEvents method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource {
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: Schema$GoogleCloudDiscoveryengineV1alphaUserEvent[];
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
   * A floating point interval.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaInterval {
    /**
     * Exclusive upper bound.
     */
    exclusiveMaximum?: number | null;
    /**
     * Exclusive lower bound.
     */
    exclusiveMinimum?: number | null;
    /**
     * Inclusive upper bound.
     */
    maximum?: number | null;
    /**
     * Inclusive lower bound.
     */
    minimum?: number | null;
  }
  /**
   * Response for ListConversations method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse {
    /**
     * All the Conversations for a given data store.
     */
    conversations?: Schema$GoogleCloudDiscoveryengineV1alphaConversation[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for DataStoreService.ListDataStores method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse {
    /**
     * All the customer's DataStores.
     */
    dataStores?: Schema$GoogleCloudDiscoveryengineV1alphaDataStore[];
    /**
     * A token that can be sent as ListDataStoresRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for DocumentService.ListDocuments method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse {
    /**
     * The Documents.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1alphaDocument[];
    /**
     * A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EngineService.ListEngines method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse {
    /**
     * All the customer's Engines.
     */
    engines?: Schema$GoogleCloudDiscoveryengineV1alphaEngine[];
    /**
     * Not supported.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for SchemaService.ListSchemas method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse {
    /**
     * A token that can be sent as ListSchemasRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The Schemas.
     */
    schemas?: Schema$GoogleCloudDiscoveryengineV1alphaSchema[];
  }
  /**
   * Response message for SiteSearchEngineService.ListTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of TargetSites.
     */
    targetSites?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite[];
    /**
     * The total number of items matching the request. This will always be populated in the response.
     */
    totalSize?: number | null;
  }
  /**
   * Request message for WidgetService.LookupWidgetConfig method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest {
    /**
     * Required. The UUID of the Widget Config.
     */
    widgetConfigId?: string | null;
  }
  /**
   * Response message for WidgetService.LookupWidgetConfig method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse {
    /**
     * The Anonymous Widget Config associated with the UUID.
     */
    anonymousWidgetConfig?: Schema$GoogleCloudDiscoveryengineV1alphaWidgetConfig;
  }
  /**
   * Media-specific user event information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaMediaInfo {
    /**
     * The media progress time in seconds, if applicable. For example, if the end user has finished 90 seconds of a playback video, then MediaInfo.media_progress_duration.seconds should be set to 90.
     */
    mediaProgressDuration?: string | null;
    /**
     * Media progress should be computed using only the media_progress_duration relative to the media total length. This value must be between `[0, 1.0]` inclusive. If this is not a playback or the progress cannot be computed (e.g. ongoing livestream), this field should be unset.
     */
    mediaProgressPercentage?: number | null;
  }
  /**
   * The OCR options for parsing documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaOcrConfig {
    /**
     * Required. If OCR is enabled or not. OCR must be enabled for other OcrConfig options to apply.
     */
    enabled?: boolean | null;
    /**
     * Apply additional enhanced OCR processing to a list of document elements. Supported values: * `table`: advanced table parsing model.
     */
    enhancedDocumentElements?: string[] | null;
    /**
     * If true, will use native text instead of OCR text on pages containing native text.
     */
    useNativeText?: boolean | null;
  }
  /**
   * Detailed page information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPageInfo {
    /**
     * The most specific category associated with a category page. To represent full path of category, use '\>' sign to separate different hierarchies. If '\>' is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: `"pageCategory" : "Sales \> 2017 Black Friday Deals"`. Required for `view-category-page` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    pageCategory?: string | null;
    /**
     * A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageview_id` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.
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
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPanelInfo {
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
   * Request for pausing training of an engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPauseEngineRequest {}
  /**
   * Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were deleted successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for DocumentService.PurgeDocuments method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest {
    /**
     * Required. Filter matching documents to purge. Only currently supported value is `*` (all items).
     */
    filter?: string | null;
    /**
     * Actually performs the purge. If `force` is set to false, return the expected purge count without deleting any documents.
     */
    force?: boolean | null;
  }
  /**
   * Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse {
    /**
     * The total count of documents purged as a result of the operation.
     */
    purgeCount?: string | null;
    /**
     * A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random.
     */
    purgeSample?: string[] | null;
  }
  /**
   * Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeUserEventsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were deleted successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for PurgeUserEvents method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest {
    /**
     * Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. The eligible fields for filtering are: * `eventType`: Double quoted UserEvent.event_type string. * `eventTime`: in ISO 8601 "zulu" format. * `userPseudoId`: Double quoted string. Specifying this will delete all events associated with a visitor. * `userId`: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime \> "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType: `eventType = "search"` * Deleting all events for a specific visitor: `userPseudoId = "visitor1024"` * Deleting all events inside a DataStore: `*` The filtering fields are assumed to have an implicit AND.
     */
    filter?: string | null;
    /**
     * The `force` field is currently not supported. Purge user event requests will permanently delete all purgeable events. Once the development is complete: If `force` is set to false, the method will return the expected purge count without deleting any user events. This field will default to false if not included in the request.
     */
    force?: boolean | null;
  }
  /**
   * Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse {
    /**
     * The total count of events purged as a result of the operation.
     */
    purgeCount?: string | null;
  }
  /**
   * Request message for Recommend method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecommendRequest {
    /**
     * Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported. Examples: * `(filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))` * `(filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))` If `attributeFilteringSyntax` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (launguage: ANY("en", "es")) AND NOT (categories: ANY("Movie")) * (available: true) AND (launguage: ANY("en", "es")) OR (categories: ANY("Movie")) If your filter blocks all results, the API will return generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to True in RecommendRequest.params to receive empty results instead. Note that the API will never return Documents with `storageStatus` of `EXPIRED` or `DELETED` regardless of filter choices.
     */
    filter?: string | null;
    /**
     * Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.
     */
    pageSize?: number | null;
    /**
     * Additional domain specific parameters for the recommendations. Allowed values: * `returnDocument`: Boolean. If set to true, the associated Document object will be returned in RecommendResponse.RecommendationResult.document. * `returnScore`: Boolean. If set to true, the recommendation 'score' corresponding to each returned Document will be set in RecommendResponse.RecommendationResult.metadata. The given 'score' indicates the probability of a Document conversion given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` This gives request-level control and adjusts recommendation results based on Document category. * `attributeFilteringSyntax`: Boolean. False by default. If set to true, the `filter` field is interpreted according to the new, attribute-based syntax.
     */
    params?: {[key: string]: any} | null;
    /**
     * Required. Context about the user, what they are looking at and what action they took to trigger the Recommend request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserEvent.user_pseudo_id or UserEvent.user_info.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserEvent.user_pseudo_id to a random unique ID and leave UserEvent.user_info.user_id unset.
     */
    userEvent?: Schema$GoogleCloudDiscoveryengineV1alphaUserEvent;
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
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse {
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
    results?: Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult[];
    /**
     * True if RecommendRequest.validate_only was set.
     */
    validateOnly?: boolean | null;
  }
  /**
   * RecommendationResult represents a generic recommendation result with associated metadata.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult {
    /**
     * Set if `returnDocument` is set to true in RecommendRequest.params.
     */
    document?: Schema$GoogleCloudDiscoveryengineV1alphaDocument;
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
   * Metadata related to the progress of the SiteSearchEngineService.RecrawlUris operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Unique URIs in the request that don't match any TargetSite in the DataStore, only match TargetSites that haven't been fully indexed, or match a TargetSite with type EXCLUDE.
     */
    invalidUris?: string[] | null;
    /**
     * Total number of URIs that have yet to be crawled.
     */
    pendingCount?: number | null;
    /**
     * Total number of URIs that were rejected due to insufficient indexing resources.
     */
    quotaExceededCount?: number | null;
    /**
     * Total number of URIs that have been crawled so far.
     */
    successCount?: number | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
    /**
     * Total number of unique URIs in the request that are not in invalid_uris.
     */
    validUrisCount?: number | null;
  }
  /**
   * Request message for SiteSearchEngineService.RecrawlUris method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisRequest {
    /**
     * Required. List of URIs to crawl. At most 10K URIs are supported, otherwise an INVALID_ARGUMENT error is thrown. Each URI should match at least one TargetSite in `site_search_engine`.
     */
    uris?: string[] | null;
  }
  /**
   * Response message for SiteSearchEngineService.RecrawlUris method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse {
    /**
     * URIs that were not crawled before the LRO terminated.
     */
    failedUris?: string[] | null;
    /**
     * Details for a sample of up to 10 `failed_uris`.
     */
    failureSamples?: Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo[];
  }
  /**
   * Details about why a particular URI failed to be crawled. Each FailureInfo contains one FailureReason per CorpusType.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo {
    /**
     * List of failure reasons by corpus type (e.g. desktop, mobile).
     */
    failureReasons?: Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason[];
    /**
     * URI that failed to be crawled.
     */
    uri?: string | null;
  }
  /**
   * Details about why crawling failed for a particular CorpusType, e.g. DESKTOP and MOBILE crawling may fail for different reasons.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason {
    /**
     * DESKTOP, MOBILE, or CORPUS_TYPE_UNSPECIFIED.
     */
    corpusType?: string | null;
    /**
     * Reason why the URI was not crawled.
     */
    errorMessage?: string | null;
  }
  /**
   * Defines a reply message to user.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaReply {
    /**
     * References in the reply.
     */
    references?: Schema$GoogleCloudDiscoveryengineV1alphaReplyReference[];
    /**
     * DEPRECATED: use `summary` instead. Text reply.
     */
    reply?: string | null;
    /**
     * Summary based on search results.
     */
    summary?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummary;
  }
  /**
   * Defines reference in reply.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaReplyReference {
    /**
     * Anchor text.
     */
    anchorText?: string | null;
    /**
     * Anchor text end index.
     */
    end?: number | null;
    /**
     * Anchor text start index.
     */
    start?: number | null;
    /**
     * URI link reference.
     */
    uri?: string | null;
  }
  /**
   * Request for resuming training of an engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaResumeEngineRequest {}
  /**
   * Defines the structure and layout of a type of document data.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSchema {
    /**
     * Output only. Configurations for fields of the schema.
     */
    fieldConfigs?: Schema$GoogleCloudDiscoveryengineV1alphaFieldConfig[];
    /**
     * The JSON representation of the schema.
     */
    jsonSchema?: string | null;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The structured representation of the schema.
     */
    structSchema?: {[key: string]: any} | null;
  }
  /**
   * Detailed search information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchInfo {
    /**
     * An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an `INVALID_ARGUMENT` is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    offset?: number | null;
    /**
     * The order in which products are returned, if applicable. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    orderBy?: string | null;
    /**
     * The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. At least one of search_query or PageInfo.page_category is required for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    searchQuery?: string | null;
  }
  /**
   * Request message for SearchService.Search method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequest {
    /**
     * Boost specification to boost certain documents. For more information on boosting, see [Boosting](https://cloud.google.com/retail/docs/boosting#boost)
     */
    boostSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestBoostSpec;
    /**
     * The branch resource name, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/branches/0`. Use `default_branch` as the branch ID or leave this field empty, to search documents under the default branch.
     */
    branch?: string | null;
    /**
     * The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality. For more information about filter syntax, see SearchRequest.filter.
     */
    canonicalFilter?: string | null;
    /**
     * A specification for configuring the behavior of content search.
     */
    contentSearchSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec;
    /**
     * Uses the provided embedding to do additional semantic document retrieval. The retrieval is based on the dot product of SearchRequest.embedding_spec.embedding_vectors.vector and the document embedding that is provided in SearchRequest.embedding_spec.embedding_vectors.field_path. If SearchRequest.embedding_spec.embedding_vectors.field_path is not provided, it will use ServingConfig.embedding_config.field_paths.
     */
    embeddingSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestEmbeddingSpec;
    /**
     * Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    facetSpecs?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec[];
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --\> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata)
     */
    filter?: string | null;
    /**
     * Raw image query.
     */
    imageQuery?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery;
    /**
     * A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Documents deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an `INVALID_ARGUMENT` is returned.
     */
    offset?: number | null;
    /**
     * The order in which documents are returned. Documents can be ordered by a field in an Document object. Leave it unset if ordered by relevance. `order_by` expression is case-sensitive. For more information on ordering, see [Ordering](https://cloud.google.com/retail/docs/filter-and-order#order) If this field is unrecognizable, an `INVALID_ARGUMENT` is returned.
     */
    orderBy?: string | null;
    /**
     * Maximum number of Documents to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 100. Values above 100 are coerced to 100. If this field is negative, an `INVALID_ARGUMENT` is returned.
     */
    pageSize?: number | null;
    /**
     * A page token received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    pageToken?: string | null;
    /**
     * Additional search parameters. For public website search only, supported values are: * `user_country_code`: string. Default empty. If set to non-empty, results are restricted or boosted based on the location provided. Example: user_country_code: "au" For available codes see [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) * `search_type`: double. Default empty. Enables non-webpage searching depending on the value. The only valid non-default value is 1, which enables image searching. Example: search_type: 1
     */
    params?: {[key: string]: any} | null;
    /**
     * Raw search query.
     */
    query?: string | null;
    /**
     * The query expansion specification that specifies the conditions under which query expansion occurs.
     */
    queryExpansionSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestQueryExpansionSpec;
    /**
     * The ranking expression controls the customized ranking on retrieval documents. This overrides ServingConfig.ranking_expression. The ranking expression is a single function or multiple functions that are joint by "+". * ranking_expression = function, { " + ", function \}; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: `relevance_score`: pre-defined keywords, used for measure relevance between query and document. `embedding_field_path`: the document embedding field used with query embedding vector. `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.
     */
    rankingExpression?: string | null;
    /**
     * Whether to turn on safe search. This is only supported for website search.
     */
    safeSearch?: boolean | null;
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string | null;
    /**
     * The spell correction specification that specifies the mode under which spell correction takes effect.
     */
    spellCorrectionSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestSpellCorrectionSpec;
    /**
     * Information about the end user. Highly recommended for analytics. UserInfo.user_agent is used to deduce `device_type` for analytics.
     */
    userInfo?: Schema$GoogleCloudDiscoveryengineV1alphaUserInfo;
    /**
     * The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
     */
    userLabels?: {[key: string]: string} | null;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and CompleteQueryRequest.user_pseudo_id The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userPseudoId?: string | null;
  }
  /**
   * Boost specification to boost certain documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestBoostSpec {
    /**
     * Condition boost specifications. If a document matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20.
     */
    conditionBoostSpecs?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestBoostSpecConditionBoostSpec[];
  }
  /**
   * Boost applies to documents which match a condition.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestBoostSpecConditionBoostSpec {
    /**
     * Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the document a big promotion. However, it does not necessarily mean that the boosted document will be the top result at all times, nor that other documents will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents. Setting to -1.0 gives the document a big demotion. However, results that are deeply relevant might still be shown. The document will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.
     */
    boost?: number | null;
    /**
     * An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost documents with document ID "doc_1" or "doc_2", and color "Red" or "Blue": * (id: ANY("doc_1", "doc_2")) AND (color: ANY("Red","Blue"))
     */
    condition?: string | null;
  }
  /**
   * A specification for configuring the behavior of content search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec {
    /**
     * If there is no extractive_content_spec provided, there will be no extractive answer in the search response.
     */
    extractiveContentSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec;
    /**
     * If `snippetSpec` is not specified, snippets are not included in the search response.
     */
    snippetSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSnippetSpec;
    /**
     * If `summarySpec` is not specified, summaries are not included in the search response.
     */
    summarySpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec;
  }
  /**
   * A specification for configuring the extractive content in a search response.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec {
    /**
     * The maximum number of extractive answers returned in each search result. An extractive answer is a verbatim answer extracted from the original document, which provides a precise and contextually relevant answer to the search query. If the number of matching answers is less than the `max_extractive_answer_count`, return all of the answers. Otherwise, return the `max_extractive_answer_count`. At most one answer is returned for each SearchResult.
     */
    maxExtractiveAnswerCount?: number | null;
    /**
     * The max number of extractive segments returned in each search result. Only applied if the DataStore is set to DataStore.ContentConfig.CONTENT_REQUIRED or DataStore.solution_types is SOLUTION_TYPE_CHAT. An extractive segment is a text segment extracted from the original document that is relevant to the search query, and, in general, more verbose than an extractive answer. The segment could then be used as input for LLMs to generate summaries and answers. If the number of matching segments is less than `max_extractive_segment_count`, return all of the segments. Otherwise, return the `max_extractive_segment_count`.
     */
    maxExtractiveSegmentCount?: number | null;
    /**
     * Return at most `num_next_segments` segments after each selected segments.
     */
    numNextSegments?: number | null;
    /**
     * Specifies whether to also include the adjacent from each selected segments. Return at most `num_previous_segments` segments before each selected segments.
     */
    numPreviousSegments?: number | null;
  }
  /**
   * A specification for configuring snippets in a search response.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSnippetSpec {
    /**
     * [DEPRECATED] This field is deprecated. To control snippet return, use `return_snippet` field. For backwards compatibility, we will return snippet if max_snippet_count \> 0.
     */
    maxSnippetCount?: number | null;
    /**
     * [DEPRECATED] This field is deprecated and will have no affect on the snippet.
     */
    referenceOnly?: boolean | null;
    /**
     * If `true`, then return snippet. If no snippet can be generated, we return "No snippet is available for this page." A `snippet_status` with `SUCCESS` or `NO_SNIPPET_AVAILABLE` will also be returned.
     */
    returnSnippet?: boolean | null;
  }
  /**
   * A specification for configuring a summary returned in a search response.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec {
    /**
     * Specifies whether to filter out adversarial queries. The default value is `false`. Google employs search-query classification to detect adversarial queries. No summary is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to `true`, we skip generating summaries for adversarial queries and return fallback messages instead.
     */
    ignoreAdversarialQuery?: boolean | null;
    /**
     * Specifies whether to filter out queries that are not summary-seeking. The default value is `false`. Google employs search-query classification to detect summary-seeking queries. No summary is returned if the search query is classified as a non-summary seeking query. For example, `why is the sky blue` and `Who is the best soccer player in the world?` are summary-seeking queries, but `SFO airport` and `world cup 2026` are not. They are most likely navigational queries. If this field is set to `true`, we skip generating summaries for non-summary seeking queries and return fallback messages instead.
     */
    ignoreNonSummarySeekingQuery?: boolean | null;
    /**
     * Specifies whether to include citations in the summary. The default value is `false`. When this field is set to `true`, summaries include in-line citation numbers. Example summary including citations: BigQuery is Google Cloud's fully managed and completely serverless enterprise data warehouse [1]. BigQuery supports all data types, works across clouds, and has built-in machine learning and business intelligence, all within a unified platform [2, 3]. The citation numbers refer to the returned search results and are 1-indexed. For example, [1] means that the sentence is attributed to the first search result. [2, 3] means that the sentence is attributed to both the second and third search results.
     */
    includeCitations?: boolean | null;
    /**
     * Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.
     */
    languageCode?: string | null;
    /**
     * If specified, the spec will be used to modify the prompt provided to the LLM.
     */
    modelPromptSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelPromptSpec;
    /**
     * If specified, the spec will be used to modify the model specification provided to the LLM.
     */
    modelSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec;
    /**
     * The number of top results to generate the summary from. If the number of results returned is less than `summaryResultCount`, the summary is generated from all of the results. At most five results can be used to generate a summary.
     */
    summaryResultCount?: number | null;
  }
  /**
   * Specification of the prompt to use with the model.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelPromptSpec {
    /**
     * Text at the beginning of the prompt that instructs the assistant. Examples are available in the user guide.
     */
    preamble?: string | null;
  }
  /**
   * Specification of the model.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec {
    /**
     * The string format of the model version. e.g. stable, preview, etc.
     */
    version?: string | null;
  }
  /**
   * The specification that uses customized query embedding vector to do semantic document retrieval.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestEmbeddingSpec {
    /**
     * The embedding vector used for retrieval. Limit to 1.
     */
    embeddingVectors?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestEmbeddingSpecEmbeddingVector[];
  }
  /**
   * Embedding vector.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestEmbeddingSpecEmbeddingVector {
    /**
     * Embedding field path in schema.
     */
    fieldPath?: string | null;
    /**
     * Query embedding vector.
     */
    vector?: number[] | null;
  }
  /**
   * A facet specification to perform faceted search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec {
    /**
     * Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined automatically. If dynamic facets are enabled, it is ordered together. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined automatically. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enabled, which generates a facet `gender`. Then the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how API orders "gender" and "rating" facets. However, notice that "price" and "brands" are always ranked at first and second position because their enable_dynamic_position is false.
     */
    enableDynamicPosition?: boolean | null;
    /**
     * List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned. For example, suppose there are 100 documents with the color facet "Red" and 200 documents with the color facet "Blue". A query containing the filter "color:ANY("Red")" and having "color" as FacetKey.key would by default return only "Red" documents in the search results, and also return "Red" with count 100 as the only color facet. Although there are also blue documents available, "Blue" would not be shown as an available facet value. If "color" is listed in "excludedFilterKeys", then the query returns the facet values "Red" with count 100 and "Blue" with count 200, because the "color" key is now excluded from the filter. Because this field doesn't affect search results, the search results are still correctly filtered to return only "Red" documents. A maximum of 100 values are allowed. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    excludedFilterKeys?: string[] | null;
    /**
     * Required. The facet key specification.
     */
    facetKey?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpecFacetKey;
    /**
     * Maximum of facet values that should be returned for this facet. If unspecified, defaults to 20. The maximum allowed value is 300. Values above 300 are coerced to 300. If this field is negative, an `INVALID_ARGUMENT` is returned.
     */
    limit?: number | null;
  }
  /**
   * Specifies how a facet is computed.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpecFacetKey {
    /**
     * True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise.
     */
    caseInsensitive?: boolean | null;
    /**
     * Only get facet values that contains the given strings. For example, suppose "category" has three values "Action \> 2022", "Action \> 2021" and "Sci-Fi \> 2022". If set "contains" to "2022", the "category" facet only contains "Action \> 2022" and "Sci-Fi \> 2022". Only supported on textual fields. Maximum is 10.
     */
    contains?: string[] | null;
    /**
     * Set only if values should be bucketed into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 30.
     */
    intervals?: Schema$GoogleCloudDiscoveryengineV1alphaInterval[];
    /**
     * Required. Supported textual and numerical facet keys in Document object, over which the facet values are computed. Facet key is case-sensitive.
     */
    key?: string | null;
    /**
     * The order in which documents are returned. Allowed values are: * "count desc", which means order by SearchResponse.Facet.values.count descending. * "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals.
     */
    orderBy?: string | null;
    /**
     * Only get facet values that start with the given string prefix. For example, suppose "category" has three values "Action \> 2022", "Action \> 2021" and "Sci-Fi \> 2022". If set "prefixes" to "Action", the "category" facet only contains "Action \> 2022" and "Action \> 2021". Only supported on textual fields. Maximum is 10.
     */
    prefixes?: string[] | null;
    /**
     * Only get facet for the given restricted values. Only supported on textual fields. For example, suppose "category" has three values "Action \> 2022", "Action \> 2021" and "Sci-Fi \> 2022". If set "restricted_values" to "Action \> 2022", the "category" facet only contains "Action \> 2022". Only supported on textual fields. Maximum is 10.
     */
    restrictedValues?: string[] | null;
  }
  /**
   * Specifies the image query input.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery {
    /**
     * Base64 encoded image bytes. Supported image formats: JPEG, PNG, and BMP.
     */
    imageBytes?: string | null;
  }
  /**
   * Specification to determine under which conditions query expansion should occur.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestQueryExpansionSpec {
    /**
     * The condition under which query expansion should occur. Default to Condition.DISABLED.
     */
    condition?: string | null;
    /**
     * Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results.
     */
    pinUnexpandedResults?: boolean | null;
  }
  /**
   * The specification for query spell correction.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestSpellCorrectionSpec {
    /**
     * The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO.
     */
    mode?: string | null;
  }
  /**
   * Response message for SearchService.Search method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse {
    /**
     * Controls applied as part of the Control service.
     */
    appliedControls?: string[] | null;
    /**
     * A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.
     */
    attributionToken?: string | null;
    /**
     * Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search.
     */
    correctedQuery?: string | null;
    /**
     * Results of facets requested by user.
     */
    facets?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseFacet[];
    geoSearchDebugInfo?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseGeoSearchDebugInfo[];
    /**
     * Guided search result.
     */
    guidedSearchResult?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult;
    /**
     * A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Query expansion information for the returned results.
     */
    queryExpansionInfo?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseQueryExpansionInfo;
    /**
     * The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response.
     */
    redirectUri?: string | null;
    /**
     * A list of matched documents. The order represents the ranking.
     */
    results?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSearchResult[];
    /**
     * A summary as part of the search results. This field is only returned if SearchRequest.ContentSearchSpec.summary_spec is set.
     */
    summary?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummary;
    /**
     * The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.
     */
    totalSize?: number | null;
  }
  /**
   * A facet result.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseFacet {
    /**
     * Whether the facet is dynamically generated.
     */
    dynamicFacet?: boolean | null;
    /**
     * The key for this facet. E.g., "colors" or "price". It matches SearchRequest.FacetSpec.FacetKey.key.
     */
    key?: string | null;
    /**
     * The facet values for this field.
     */
    values?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseFacetFacetValue[];
  }
  /**
   * A facet value which contains value names and their count.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseFacetFacetValue {
    /**
     * Number of items that have this facet value.
     */
    count?: string | null;
    /**
     * Interval value for a facet, such as 10, 20) for facet "price". It matches [SearchRequest.FacetSpec.FacetKey.intervals.
     */
    interval?: Schema$GoogleCloudDiscoveryengineV1alphaInterval;
    /**
     * Text value of a facet, such as "Black" for facet "colors".
     */
    value?: string | null;
  }
  /**
   * Debug information specifically related to forward geocoding issues arising from Geolocation Search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseGeoSearchDebugInfo {
    /**
     * The error produced.
     */
    errorMessage?: string | null;
    /**
     * The address from which forward geocoding ingestion produced issues.
     */
    originalAddressQuery?: string | null;
  }
  /**
   * Guided search result. The guided search helps user to refine the search results and narrow down to the real needs from a broaded search results.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult {
    /**
     * Suggested follow-up questions.
     */
    followUpQuestions?: string[] | null;
    /**
     * A list of ranked refinement attributes.
     */
    refinementAttributes?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute[];
  }
  /**
   * Useful attribute for search result refinements.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResultRefinementAttribute {
    /**
     * Attribute key used to refine the results e.g. 'movie_type'.
     */
    attributeKey?: string | null;
    /**
     * Attribute value used to refine the results e.g. 'drama'.
     */
    attributeValue?: string | null;
  }
  /**
   * Information describing query expansion including whether expansion has occurred.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseQueryExpansionInfo {
    /**
     * Bool describing whether query expansion has occurred.
     */
    expandedQuery?: boolean | null;
    /**
     * Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true.
     */
    pinnedResultCount?: string | null;
  }
  /**
   * Represents the search results.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSearchResult {
    /**
     * The document data snippet in the search response. Only fields that are marked as retrievable are populated.
     */
    document?: Schema$GoogleCloudDiscoveryengineV1alphaDocument;
    /**
     * Document.id of the searched Document.
     */
    id?: string | null;
    /**
     * Google provided available scores.
     */
    modelScores?: {
      [key: string]: Schema$GoogleCloudDiscoveryengineV1alphaDoubleList;
    } | null;
  }
  /**
   * Summary of the top N search result specified by the summary spec.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummary {
    /**
     * A collection of Safety Attribute categories and their associated confidence scores.
     */
    safetyAttributes?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes;
    /**
     * Additional summary-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.
     */
    summarySkippedReasons?: string[] | null;
    /**
     * The summary content.
     */
    summaryText?: string | null;
    summaryWithMetadata?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata;
  }
  /**
   * Citation info for a segment.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitation {
    /**
     * End of the attributed segment, exclusive.
     */
    endIndex?: string | null;
    /**
     * Citation sources for the attributed segment.
     */
    sources?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource[];
    /**
     * Index indicates the start of the segment, measured in bytes/unicode.
     */
    startIndex?: string | null;
  }
  /**
   * Citation metadata.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationMetadata {
    /**
     * Citations for segments.
     */
    citations?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitation[];
  }
  /**
   * Citation source.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource {
    /**
     * Document reference index from SummaryWithMetadata.references. It is 0-indexed and the value will be zero if the reference_index is not set explicitly.
     */
    referenceIndex?: string | null;
  }
  /**
   * Document reference.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryReference {
    /**
     * Required. Document.name of the document. Full resource name of the referenced document, in the format `projects/x/locations/x/collections/x/dataStores/x/branches/x/documents/x`.
     */
    document?: string | null;
    /**
     * Title of the document.
     */
    title?: string | null;
    /**
     * GCS or HTTP uri for the document.
     */
    uri?: string | null;
  }
  /**
   * Safety Attribute categories and their associated confidence scores.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes {
    /**
     * The display names of Safety Attribute categories associated with the generated content. Order matches the Scores.
     */
    categories?: string[] | null;
    /**
     * The confidence scores of the each category, higher value means higher confidence. Order matches the Categories.
     */
    scores?: number[] | null;
  }
  /**
   * Summary with metadata information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata {
    /**
     * Citation metadata for given summary.
     */
    citationMetadata?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationMetadata;
    /**
     * Document References.
     */
    references?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryReference[];
    /**
     * Summary text with no citation information.
     */
    summary?: string | null;
  }
  /**
   * SiteSearchEngine captures DataStore level site search persisting configurations. It is a singleton value per data store.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine {
    /**
     * The fully qualified resource name of the site search engine. Format: `projects/x/locations/x/dataStores/x/siteSearchEngine`
     */
    name?: string | null;
  }
  /**
   * Verification information for target sites in advanced site search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo {
    /**
     * Site verification state indicating the ownership and validity.
     */
    siteVerificationState?: string | null;
    /**
     * Latest site verification time.
     */
    verifyTime?: string | null;
  }
  /**
   * A target site for the SiteSearchEngine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTargetSite {
    /**
     * Input only. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine.
     */
    exactMatch?: boolean | null;
    /**
     * Output only. Failure reason.
     */
    failureReason?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReason;
    /**
     * Output only. This is system-generated based on the provided_uri_pattern.
     */
    generatedUriPattern?: string | null;
    /**
     * Output only. Indexing status.
     */
    indexingStatus?: string | null;
    /**
     * Output only. The fully qualified resource name of the target site. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}` The `target_site_id` is system-generated.
     */
    name?: string | null;
    /**
     * Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated.
     */
    providedUriPattern?: string | null;
    /**
     * Output only. Site ownership and validity verification status.
     */
    siteVerificationInfo?: Schema$GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo;
    /**
     * The type of the target site, e.g. whether the site is to be included or excluded.
     */
    type?: string | null;
    /**
     * Output only. The target site's last updated time.
     */
    updateTime?: string | null;
  }
  /**
   * Site search indexing failure reasons.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReason {
    /**
     * Failed due to insufficient quota.
     */
    quotaFailure?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailure;
  }
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailure {}
  /**
   * Defines text input.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTextInput {
    /**
     * Conversation context of the input.
     */
    context?: Schema$GoogleCloudDiscoveryengineV1alphaConversationContext;
    /**
     * Text input.
     */
    input?: string | null;
  }
  /**
   * Metadata related to the progress of the TrainCustomModel operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTrainCustomModelMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SearchTuningService.TrainCustomModel method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest {
    /**
     * The desired location of errors incurred during the data ingestion and training.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * Gcs training input.
     */
    gcsTrainingInput?: Schema$GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput;
    /**
     * Model to be trained. Supported values are: * **search-tuning**: Fine tuning the search system based on data provided.
     */
    modelType?: string | null;
  }
  /**
   * Gcs training data input.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput {
    /**
     * The gcs corpus data which could be associated in train data. The data path format is gs:///. A newline delimited jsonl/ndjson file. * For search-tuning model, each line should have the _id, title and text. Example: {"_id": "doc1", title: "relevant doc", "text": "relevant text"\}
     */
    corpusDataPath?: string | null;
    /**
     * The gcs query data which could be associated in train data. The data path format is gs:///. A newline delimited jsonl/ndjson file. * For search-tuning model, each line should have the _id and text. Example: {"_id": "query1", "text": "example query"\}
     */
    queryDataPath?: string | null;
    /**
     * Gcs test data. Same format as train_data_path. If not provided, a random 80/20 train/test split will be performed on train_data_path.
     */
    testDataPath?: string | null;
    /**
     * Gcs training data path whose format should be gs:///. The file should be in tsv format. Each line should have the doc_id and query_id and score (number). * For search-tuning model, it should have the query-id corpus-id score as tsv file header. The score should be a number in [0, inf+). The larger the number is, the more relevant the pair is. Example: query-id\tcorpus-id\tscore query1\tdoc1\t1
     */
    trainDataPath?: string | null;
  }
  /**
   * Response of the TrainCustomModelRequest. This message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the data.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * The trained model status. Possible values are: * **bad-data**: The training data quality is bad. * **no-improvement**: Tuning didn't improve performance. Won't deploy. * **in-progress**: Model training is in progress. * **ready**: The model is ready for serving.
     */
    modelStatus?: string | null;
  }
  /**
   * A transaction represents the entire purchase transaction.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTransactionInfo {
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
   * Metadata associated with a tune operation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata {
    /**
     * Required. The resource name of the engine that this tune applies to. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    engine?: string | null;
  }
  /**
   * Request to manually start a tuning process now (instead of waiting for the periodically scheduled tuning to happen).
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTuneEngineRequest {}
  /**
   * Response associated with a tune operation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTuneEngineResponse {}
  /**
   * Metadata for UpdateSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaUpdateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.UpdateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaUpdateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaUserEvent {
    /**
     * Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an `INVALID_ARGUMENT` error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is `traffic_channel`, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
     */
    attributes?: {
      [key: string]: Schema$GoogleCloudDiscoveryengineV1alphaCustomAttribute;
    } | null;
    /**
     * Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of RecommendationService.Recommend. This field enables accurate attribution of recommendation model performance. The value must be one of: * RecommendResponse.attribution_token for events that are the result of RecommendationService.Recommend. * SearchResponse.attribution_token for events that are the result of SearchService.Search. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass RecommendResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the RecommendResponse.attribution_token to this field.
     */
    attributionToken?: string | null;
    /**
     * CompletionService.CompleteQuery details related to the event. This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.
     */
    completionInfo?: Schema$GoogleCloudDiscoveryengineV1alphaCompletionInfo;
    /**
     * Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.
     */
    directUserRequest?: boolean | null;
    /**
     * List of Documents associated with this user event. This field is optional except for the following event types: * `view-item` * `add-to-cart` * `purchase` * `media-play` * `media-complete` In a `search` event, this field represents the documents returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different UserEvent.documents is desired.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentInfo[];
    /**
     * Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.
     */
    eventTime?: string | null;
    /**
     * Required. User event type. Allowed values are: Generic values: * `search`: Search for Documents. * `view-item`: Detailed page view of a Document. * `view-item-list`: View of a panel or ordered list of Documents. * `view-home-page`: View of the home page. * `view-category-page`: View of a category page, e.g. Home \> Men \> Jeans Retail-related values: * `add-to-cart`: Add an item(s) to cart, e.g. in Retail online shopping * `purchase`: Purchase an item(s) Media-related values: * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc.
     */
    eventType?: string | null;
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for `search` events, the associated SearchRequest may contain a filter expression in SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for `view-item-list` events that are generated from a RecommendationService.RecommendRequest, this field may be populated directly from RecommendationService.RecommendRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    filter?: string | null;
    /**
     * Media-specific info.
     */
    mediaInfo?: Schema$GoogleCloudDiscoveryengineV1alphaMediaInfo;
    /**
     * Page metadata such as categories and other critical information for certain event types such as `view-category-page`.
     */
    pageInfo?: Schema$GoogleCloudDiscoveryengineV1alphaPageInfo;
    /**
     * Panel metadata associated with this user event.
     */
    panel?: Schema$GoogleCloudDiscoveryengineV1alphaPanelInfo;
    /**
     * The promotion IDs if this is an event associated with promotions. Currently, this field is restricted to at most one ID.
     */
    promotionIds?: string[] | null;
    /**
     * SearchService.Search details related to the event. This field should be set for `search` event.
     */
    searchInfo?: Schema$GoogleCloudDiscoveryengineV1alphaSearchInfo;
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
    transactionInfo?: Schema$GoogleCloudDiscoveryengineV1alphaTransactionInfo;
    /**
     * Information about the end user.
     */
    userInfo?: Schema$GoogleCloudDiscoveryengineV1alphaUserInfo;
    /**
     * Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.
     */
    userPseudoId?: string | null;
  }
  /**
   * Information of an end user.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaUserInfo {
    /**
     * User agent as included in the HTTP header. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if UserEvent.direct_user_request is set.
     */
    userAgent?: string | null;
    /**
     * Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userId?: string | null;
  }
  /**
   * Request message for WidgetService.WidgetCompleteQuery method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest {
    /**
     * Additional params for security and privacy enhancement.
     */
    additionalParams?: Schema$GoogleCloudDiscoveryengineV1alphaAdditionalParams;
    /**
     * Required. The CompleteQuery request to perform auto-complete suggestion query.
     */
    completeQueryRequest?: Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest;
    /**
     * Required. The UUID of the WidgetConfig. This field is used to identify the widget configuration, set of models used to make the auto complete query.
     */
    configId?: string | null;
  }
  /**
   * Response message for WidgetService.WidgetCompleteQuery method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse {
    /**
     * The token in response.
     */
    uToken?: string | null;
    /**
     * Results of the matched query suggestions in widget. The result list is ordered and the first result is a top suggestion.
     */
    widgetQuerySuggestions?: Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponseWidgetQuerySuggestion[];
  }
  /**
   * Suggestions as search queries.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponseWidgetQuerySuggestion {
    /**
     * The suggestion for the query.
     */
    suggestion?: string | null;
  }
  /**
   * WidgetConfig captures configs at the Widget level.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetConfig {
    /**
     * Allowlisted domains that can load this widget.
     */
    allowlistedDomains?: string[] | null;
    /**
     * Whether allow no-auth integration with widget. If set true, public access to search or other solutions from widget is allowed without authenication token provided by customer hosted backend server.
     */
    allowPublicAccess?: boolean | null;
    /**
     * Output only. Unique obfuscated identifier of a WidgetConfig.
     */
    configId?: string | null;
    /**
     * The content search spec that configs the desired behavior of content search.
     */
    contentSearchSpec?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec;
    /**
     * Output only. Timestamp the WidgetConfig was created.
     */
    createTime?: string | null;
    /**
     * Output only. The type of the parent data store.
     */
    dataStoreType?: string | null;
    /**
     * Required. The human readable widget config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string | null;
    /**
     * Whether or not to enable autocomplete.
     */
    enableAutocomplete?: boolean | null;
    /**
     * Whether to allow conversational search (LLM, multi-turn) or not (non-LLM, single-turn).
     */
    enableConversationalSearch?: boolean | null;
    /**
     * Turn on or off collecting the search result quality feedback from end users.
     */
    enableQualityFeedback?: boolean | null;
    /**
     * Whether to show the result score.
     */
    enableResultScore?: boolean | null;
    /**
     * Whether to enable safe search.
     */
    enableSafeSearch?: boolean | null;
    /**
     * Turn on or off summary for each snippets result.
     */
    enableSnippetResultSummary?: boolean | null;
    /**
     * Turn on or off summarization for the search response.
     */
    enableSummarization?: boolean | null;
    /**
     * The configuration and appearance of facets in the end user view.
     */
    facetField?: Schema$GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField[];
    /**
     * The key is the UI component. Mock. Currently supported `title`, `thumbnail`, `url`, `custom1`, `custom2`, `custom3`. The value is the name of the field along with its device visibility. The 3 custom fields are optional and can be added or removed. `title`, `thumbnail`, `url` are required UI components that cannot be removed.
     */
    fieldsUiComponentsMap?: {
      [
        key: string
      ]: Schema$GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField;
    } | null;
    /**
     * Output only. Whether LLM is enabled in the corresponding data store.
     */
    llmEnabled?: boolean | null;
    /**
     * Output only. Whether the customer accepted data use terms.
     */
    minimumDataTermAccepted?: boolean | null;
    /**
     * Immutable. The full resource name of the widget config. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}/widgetConfigs/{widget_config_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The type of snippet to display in UCS widget. - RESULT_DISPLAY_TYPE_UNSPECIFIED for existing users. - SNIPPET for new non-enterprise search users. - EXTRACTIVE_ANSWER for new enterprise search users.
     */
    resultDisplayType?: string | null;
    /**
     * Required. Immutable. Specifies the solution type that this WidgetConfig can be used for.
     */
    solutionType?: string | null;
    /**
     * Output only. Timestamp the WidgetConfig was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Facet fields that store the mapping of fields to end user widget appearance.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField {
    /**
     * Optional. The field name that end users will see.
     */
    displayName?: string | null;
    /**
     * Required. Registered field name. The format is `field.abc`.
     */
    field?: string | null;
  }
  /**
   * Facet field that maps to a UI Component.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField {
    /**
     * The field visibility on different types of devices.
     */
    deviceVisibility?: string[] | null;
    /**
     * The template to customize how the field is displayed. An example value would be a string that looks like: "Price: {value\}".
     */
    displayTemplate?: string | null;
    /**
     * Required. Registered field name. The format is `field.abc`.
     */
    field?: string | null;
  }
  /**
   * Request message for WidgetService.WidgetConverseConversation method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest {
    /**
     * Additional params for security and privacy enhancement.
     */
    additionalParams?: Schema$GoogleCloudDiscoveryengineV1alphaAdditionalParams;
    /**
     * Required. The UUID of the WidgetConfig. This field is used to identify the widget configuration, set of models used to make the user event collection.
     */
    configId?: string | null;
    /**
     * The id of the Conversation to get. Use "-" to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     */
    conversationId?: string | null;
    /**
     * Required. The ConverseConversationRequest request to perform converse a conversation. The ServingConfig id will be `default_search` by default.
     */
    converseConversationRequest?: Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationRequest;
  }
  /**
   * Response message for WidgetService.WidgetConverseConversation method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse {
    /**
     * The id of the Conversation returned.
     */
    conversationId?: string | null;
    /**
     * ConverseConversationResponse returned from ConversationalSearchService.ConverseConversation.
     */
    converseConversationResponse?: Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse;
    /**
     * The token in response.
     */
    uToken?: string | null;
  }
  /**
   * Request message for WidgetService.WidgetSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest {
    /**
     * Additional params for security and privacy enhancement.
     */
    additionalParams?: Schema$GoogleCloudDiscoveryengineV1alphaAdditionalParams;
    /**
     * Required. The UUID of the Search WidgetConfig. This field is used to identify the search widget configuration, set of models used to make the search.
     */
    configId?: string | null;
    /**
     * Required. The search request to perform search.
     */
    searchRequest?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequest;
  }
  /**
   * Response message for WidgetService.WidgetSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse {
    /**
     * The search response after performing search.
     */
    searchResponse?: Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse;
    /**
     * The token in response.
     */
    uToken?: string | null;
  }
  /**
   * Metadata for Create Schema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCreateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for DeleteSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDeleteSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field.
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
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.
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
   * Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPurgeDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were deleted successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPurgeDocumentsResponse {
    /**
     * The total count of documents purged as a result of the operation.
     */
    purgeCount?: string | null;
    /**
     * A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random.
     */
    purgeSample?: string[] | null;
  }
  /**
   * Defines the structure and layout of a type of document data.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSchema {
    /**
     * The JSON representation of the schema.
     */
    jsonSchema?: string | null;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The structured representation of the schema.
     */
    structSchema?: {[key: string]: any} | null;
  }
  /**
   * Metadata for UpdateSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaUpdateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for Create Schema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1CreateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for DeleteSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DeleteSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportDocumentsMetadata {
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
  export interface Schema$GoogleCloudDiscoveryengineV1ImportDocumentsResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1ImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportErrorConfig {
    /**
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportUserEventsMetadata {
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
  export interface Schema$GoogleCloudDiscoveryengineV1ImportUserEventsResponse {
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1ImportErrorConfig;
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
   * Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1PurgeDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were deleted successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1PurgeDocumentsResponse {
    /**
     * The total count of documents purged as a result of the operation.
     */
    purgeCount?: string | null;
    /**
     * A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random.
     */
    purgeSample?: string[] | null;
  }
  /**
   * Defines the structure and layout of a type of document data.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1Schema {
    /**
     * The JSON representation of the schema.
     */
    jsonSchema?: string | null;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The structured representation of the schema.
     */
    structSchema?: {[key: string]: any} | null;
  }
  /**
   * Metadata for UpdateSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1UpdateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
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
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
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

  export class Resource$Locations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the Widget Config using the uuid.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    lookupWidgetConfig(
      params: Params$Resource$Locations$Lookupwidgetconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookupWidgetConfig(
      params?: Params$Resource$Locations$Lookupwidgetconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>;
    lookupWidgetConfig(
      params: Params$Resource$Locations$Lookupwidgetconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupWidgetConfig(
      params: Params$Resource$Locations$Lookupwidgetconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>
    ): void;
    lookupWidgetConfig(
      params: Params$Resource$Locations$Lookupwidgetconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>
    ): void;
    lookupWidgetConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>
    ): void;
    lookupWidgetConfig(
      paramsOrCallback?:
        | Params$Resource$Locations$Lookupwidgetconfig
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Lookupwidgetconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Lookupwidgetconfig;
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
            url: (rootUrl + '/v1alpha/{+location}/lookupWidgetConfig').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a user input completion with keyword suggestion. Similar to the CompletionService.CompleteQuery method, but a widget version that allows CompleteQuery without API Key. It supports CompleteQuery with or without JWT token.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    widgetCompleteQuery(
      params: Params$Resource$Locations$Widgetcompletequery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    widgetCompleteQuery(
      params?: Params$Resource$Locations$Widgetcompletequery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>;
    widgetCompleteQuery(
      params: Params$Resource$Locations$Widgetcompletequery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    widgetCompleteQuery(
      params: Params$Resource$Locations$Widgetcompletequery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>
    ): void;
    widgetCompleteQuery(
      params: Params$Resource$Locations$Widgetcompletequery,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>
    ): void;
    widgetCompleteQuery(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>
    ): void;
    widgetCompleteQuery(
      paramsOrCallback?:
        | Params$Resource$Locations$Widgetcompletequery
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Widgetcompletequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Widgetcompletequery;
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
            url: (rootUrl + '/v1alpha/{+location}/widgetCompleteQuery').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Converse a conversation with Widget.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    widgetConverseConversation(
      params: Params$Resource$Locations$Widgetconverseconversation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    widgetConverseConversation(
      params?: Params$Resource$Locations$Widgetconverseconversation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>;
    widgetConverseConversation(
      params: Params$Resource$Locations$Widgetconverseconversation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    widgetConverseConversation(
      params: Params$Resource$Locations$Widgetconverseconversation,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>
    ): void;
    widgetConverseConversation(
      params: Params$Resource$Locations$Widgetconverseconversation,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>
    ): void;
    widgetConverseConversation(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>
    ): void;
    widgetConverseConversation(
      paramsOrCallback?:
        | Params$Resource$Locations$Widgetconverseconversation
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Widgetconverseconversation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Widgetconverseconversation;
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
            url: (
              rootUrl + '/v1alpha/{+location}/widgetConverseConversation'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a search. Similar to the SearchService.Search method, but a widget version that allows search without API Key. It supports search with or without JWT token.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    widgetSearch(
      params: Params$Resource$Locations$Widgetsearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    widgetSearch(
      params?: Params$Resource$Locations$Widgetsearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>;
    widgetSearch(
      params: Params$Resource$Locations$Widgetsearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    widgetSearch(
      params: Params$Resource$Locations$Widgetsearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>
    ): void;
    widgetSearch(
      params: Params$Resource$Locations$Widgetsearch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>
    ): void;
    widgetSearch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>
    ): void;
    widgetSearch(
      paramsOrCallback?:
        | Params$Resource$Locations$Widgetsearch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Widgetsearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Widgetsearch;
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
            url: (rootUrl + '/v1alpha/{+location}/widgetSearch').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Locations$Lookupwidgetconfig
    extends StandardParameters {
    /**
     * Required. The location resource where lookup widget will be performed. Format: `locations/{location\}`
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest;
  }
  export interface Params$Resource$Locations$Widgetcompletequery
    extends StandardParameters {
    /**
     * Required. The location resource where widget complete query will be performed. Format: `locations/{location\}`
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest;
  }
  export interface Params$Resource$Locations$Widgetconverseconversation
    extends StandardParameters {
    /**
     * Required. The location resource where widget converse conversation will be performed. Format: `locations/{location\}`
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest;
  }
  export interface Params$Resource$Locations$Widgetsearch
    extends StandardParameters {
    /**
     * Required. The location resource where widget search will be performed. Format: `locations/{location\}`
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest;
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
    collections: Resource$Projects$Locations$Collections;
    dataStores: Resource$Projects$Locations$Datastores;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.collections = new Resource$Projects$Locations$Collections(
        this.context
      );
      this.dataStores = new Resource$Projects$Locations$Datastores(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Estimates the data size to be used by a customer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    estimateDataSize(
      params: Params$Resource$Projects$Locations$Estimatedatasize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    estimateDataSize(
      params?: Params$Resource$Projects$Locations$Estimatedatasize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    estimateDataSize(
      params: Params$Resource$Projects$Locations$Estimatedatasize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    estimateDataSize(
      params: Params$Resource$Projects$Locations$Estimatedatasize,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    estimateDataSize(
      params: Params$Resource$Projects$Locations$Estimatedatasize,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    estimateDataSize(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    estimateDataSize(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Estimatedatasize
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
        {}) as Params$Resource$Projects$Locations$Estimatedatasize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Estimatedatasize;
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
            url: (rootUrl + '/v1alpha/{+location}:estimateDataSize').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Estimatedatasize
    extends StandardParameters {
    /**
     * Required. Full resource name of the Location, such as `projects/{project\}/locations/{location\}`.
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest;
  }

  export class Resource$Projects$Locations$Collections {
    context: APIRequestContext;
    dataConnector: Resource$Projects$Locations$Collections$Dataconnector;
    dataStores: Resource$Projects$Locations$Collections$Datastores;
    engines: Resource$Projects$Locations$Collections$Engines;
    operations: Resource$Projects$Locations$Collections$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataConnector =
        new Resource$Projects$Locations$Collections$Dataconnector(this.context);
      this.dataStores = new Resource$Projects$Locations$Collections$Datastores(
        this.context
      );
      this.engines = new Resource$Projects$Locations$Collections$Engines(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Collections$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Collections$Dataconnector {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Dataconnector$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Dataconnector$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Collections$Dataconnector$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List
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

  export class Resource$Projects$Locations$Collections$Datastores {
    context: APIRequestContext;
    branches: Resource$Projects$Locations$Collections$Datastores$Branches;
    conversations: Resource$Projects$Locations$Collections$Datastores$Conversations;
    models: Resource$Projects$Locations$Collections$Datastores$Models;
    operations: Resource$Projects$Locations$Collections$Datastores$Operations;
    schemas: Resource$Projects$Locations$Collections$Datastores$Schemas;
    servingConfigs: Resource$Projects$Locations$Collections$Datastores$Servingconfigs;
    siteSearchEngine: Resource$Projects$Locations$Collections$Datastores$Sitesearchengine;
    userEvents: Resource$Projects$Locations$Collections$Datastores$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.branches =
        new Resource$Projects$Locations$Collections$Datastores$Branches(
          this.context
        );
      this.conversations =
        new Resource$Projects$Locations$Collections$Datastores$Conversations(
          this.context
        );
      this.models =
        new Resource$Projects$Locations$Collections$Datastores$Models(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Operations(
          this.context
        );
      this.schemas =
        new Resource$Projects$Locations$Collections$Datastores$Schemas(
          this.context
        );
      this.servingConfigs =
        new Resource$Projects$Locations$Collections$Datastores$Servingconfigs(
          this.context
        );
      this.siteSearchEngine =
        new Resource$Projects$Locations$Collections$Datastores$Sitesearchengine(
          this.context
        );
      this.userEvents =
        new Resource$Projects$Locations$Collections$Datastores$Userevents(
          this.context
        );
    }

    /**
     * Completes the specified user input with keyword suggestions.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    completeQuery(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    completeQuery(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>;
    completeQuery(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
    ): void;
    completeQuery(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
    ): void;
    completeQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Completequery
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Completequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Completequery;
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
            url: (rootUrl + '/v1alpha/{+dataStore}:completeQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['dataStore'],
        pathParams: ['dataStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Create
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/dataStores').replace(
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
     * Deletes a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Delete
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>(
          parameters
        );
      }
    }

    /**
     * Gets a DocumentProcessingConfig.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDocumentProcessingConfig(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>;
    getDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    getDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    getDocumentProcessingConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    getDocumentProcessingConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>(
          parameters
        );
      }
    }

    /**
     * Gets the SiteSearchEngine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSiteSearchEngine(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>(
          parameters
        );
      }
    }

    /**
     * Lists all the DataStores associated with the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/dataStores').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a DataStore
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>(
          parameters
        );
      }
    }

    /**
     * Trains a custom model.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    trainCustomModel(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    trainCustomModel(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    trainCustomModel(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    trainCustomModel(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    trainCustomModel(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    trainCustomModel(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    trainCustomModel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel;
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
            url: (rootUrl + '/v1alpha/{+dataStore}:trainCustomModel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['dataStore'],
        pathParams: ['dataStore'],
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
     * Updates the DocumentProcessingConfig. DocumentProcessingConfig is a singleon resource of DataStore. It's empty when DataStore is created. The first call to this method will set up DocumentProcessingConfig.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateDocumentProcessingConfig(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>;
    updateDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    updateDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    updateDocumentProcessingConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    updateDocumentProcessingConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Completequery
    extends StandardParameters {
    /**
     * Required. The parent data store resource name for which the completion is performed, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store`.
     */
    dataStore?: string;
    /**
     * Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned.
     */
    includeTailSuggestions?: boolean;
    /**
     * Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters.
     */
    query?: string;
    /**
     * Selects data model of query suggestions for serving. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores.
     */
    queryModel?: string;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userPseudoId?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Create
    extends StandardParameters {
    /**
     * A boolean flag indicating whether user want to directly create an advanced data store for site search. If the data store is not configured as site search (GENERIC vertical and PUBLIC_WEBSITE content_config), this flag will be ignored.
     */
    createAdvancedSiteSearch?: boolean;
    /**
     * Required. The ID to use for the DataStore, which will become the final component of the DataStore's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    dataStoreId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDataStore;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. If the caller does not have permission to delete the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the DataStore to delete does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. If the caller does not have permission to access the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataStore does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Getdocumentprocessingconfig
    extends StandardParameters {
    /**
     * Required. Full DocumentProcessingConfig resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/dataStores/{data_store_id\}/documentProcessingConfig`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine
    extends StandardParameters {
    /**
     * Required. Resource name of SiteSearchEngine, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. If the caller does not have permission to access the [SiteSearchEngine], regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$List
    extends StandardParameters {
    /**
     * Filter by solution type. For example: filter = 'solution_type:SOLUTION_TYPE_SEARCH'
     */
    filter?: string;
    /**
     * Maximum number of DataStores to return. If unspecified, defaults to 10. The maximum allowed value is 50. Values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDataStoresResponse.next_page_token, received from a previous DataStoreService.ListDataStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DataStoreService.ListDataStores must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}`. If the caller does not have permission to list DataStoress under this location, regardless of whether or not this data store exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Patch
    extends StandardParameters {
    /**
     * Immutable. The full resource name of the data store. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;
    /**
     * Indicates which fields in the provided DataStore to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDataStore;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel
    extends StandardParameters {
    /**
     * Required. The resource name of the Data Store, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store`. This field is used to identify the data store where to train the models.
     */
    dataStore?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Updatedocumentprocessingconfig
    extends StandardParameters {
    /**
     * Output only. The full resource name of the Document Processing Config. Format: `projects/x/locations/x/collections/x/dataStores/x/documentProcessingConfig`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided DocumentProcessingConfig to update. The following are the only supported fields: * DocumentProcessingConfig.orc_config If not set, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Branches {
    context: APIRequestContext;
    documents: Resource$Projects$Locations$Collections$Datastores$Branches$Documents;
    operations: Resource$Projects$Locations$Collections$Datastores$Branches$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents =
        new Resource$Projects$Locations$Collections$Datastores$Branches$Documents(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Branches$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Collections$Datastores$Branches$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/documents').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters
        );
      }
    }

    /**
     * Deletes a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters
        );
      }
    }

    /**
     * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import;
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
            url: (rootUrl + '/v1alpha/{+parent}/documents:import').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/documents').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters
        );
      }
    }

    /**
     * Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge;
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
            url: (rootUrl + '/v1alpha/{+parent}/documents:purge').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Document, which will become the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    documentId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDocument;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the Document to delete does not exist, a `NOT_FOUND` error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import
    extends StandardParameters {
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`. Requires create/update permission.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List
    extends StandardParameters {
    /**
     * Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Document is not found, a new Document will be created.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDocument;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge
    extends StandardParameters {
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Branches$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List
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

  export class Resource$Projects$Locations$Collections$Datastores$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Converses a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    converse(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    converse(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse;
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
            url: (rootUrl + '/v1alpha/{+name}:converse').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/conversations').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a Conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }

    /**
     * Lists all Conversations by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/conversations').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`. Use `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConversation;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `project/x/locations/global/collections/{collection\}/dataStore/x/conversations/x` or `project/x/locations/global/collections/{collection\}/engines/x/conversations/x`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Conversation to update. The following are NOT supported: * conversation.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConversation;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Models {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Datastores$Models$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Models$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Collections$Datastores$Models$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List
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

  export class Resource$Projects$Locations$Collections$Datastores$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Operations$List
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

  export class Resource$Projects$Locations$Collections$Datastores$Schemas {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Datastores$Schemas$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Schemas$Operations(
          this.context
        );
    }

    /**
     * Creates a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/schemas').replace(
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
     * Deletes a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSchema>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSchema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSchema>(
          parameters
        );
      }
    }

    /**
     * Gets a list of Schemas.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/schemas').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create
    extends StandardParameters {
    /**
     * Required. The parent data store resource name, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the Schema, which will become the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    schemaId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaSchema;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete
    extends StandardParameters {
    /**
     * Required. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get
    extends StandardParameters {
    /**
     * Required. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List
    extends StandardParameters {
    /**
     * The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent data store resource name, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Schema is not found, a new Schema will be created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaSchema;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Schemas$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List
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

  export class Resource$Projects$Locations$Collections$Datastores$Servingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Makes a recommendation, which requires a contextual user event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recommend(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend;
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
            url: (rootUrl + '/v1alpha/{+servingConfig}:recommend').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>;
    search(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search;
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
            url: (rootUrl + '/v1alpha/{+servingConfig}:search').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend
    extends StandardParameters {
    /**
     * Required. Full resource name of a ServingConfig: `projects/x/locations/global/collections/x/engines/x/servingConfigs/x`, or `projects/x/locations/global/collections/x/dataStores/x/servingConfigs/x` One default serving config is created along with your recommendation engine creation. The engine ID will be used as the ID of the default serving config. For example, for Engine `projects/x/locations/global/collections/x/engines/my-engine`, you can use `projects/x/locations/global/collections/x/engines/my-engine/servingConfigs/my-engine` for your Recommend requests.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaRecommendRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequest;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sitesearchengine {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations;
    targetSites: Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations(
          this.context
        );
      this.targetSites =
        new Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites(
          this.context
        );
    }

    /**
     * Verify target sites' ownership and validity. This API sends all the target sites under site search engine for verification.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchVerifyTargetSites(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchVerifyTargetSites(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchVerifyTargetSites(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchVerifyTargetSites(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchVerifyTargetSites(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchVerifyTargetSites(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchVerifyTargetSites(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites;
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
            url: (
              rootUrl + '/v1alpha/{+parent}:batchVerifyTargetSites'
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Downgrade from advanced site search to basic site search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disableAdvancedSiteSearch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch;
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
            url: (
              rootUrl + '/v1alpha/{+siteSearchEngine}:disableAdvancedSiteSearch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
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
     * Upgrade from basic site search to advanced site search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enableAdvancedSiteSearch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch;
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
            url: (
              rootUrl + '/v1alpha/{+siteSearchEngine}:enableAdvancedSiteSearch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
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
     * Returns list of target sites with its domain verification status. This method can only be called under data store with BASIC_SITE_SEARCH state at the moment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchDomainVerificationStatus(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchDomainVerificationStatus(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>;
    fetchDomainVerificationStatus(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchDomainVerificationStatus(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>
    ): void;
    fetchDomainVerificationStatus(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>
    ): void;
    fetchDomainVerificationStatus(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>
    ): void;
    fetchDomainVerificationStatus(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus;
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
            url: (
              rootUrl +
              '/v1alpha/{+siteSearchEngine}:fetchDomainVerificationStatus'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse>(
          parameters
        );
      }
    }

    /**
     * Request on-demand recrawl for a list of URIs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recrawlUris(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recrawlUris(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris;
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
            url: (rootUrl + '/v1alpha/{+siteSearchEngine}:recrawlUris').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
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
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites
    extends StandardParameters {
    /**
     * Required. The parent resource shared by all TargetSites being verified. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaBatchVerifyTargetSitesRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/{project\}/locations/{location\}/dataStores/{data_store_id\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/{project\}/locations/{location\}/dataStores/{data_store_id\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `FetchDomainVerificationStatus` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchDomainVerificationStatus` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The site search engine resource under which we fetch all the domain verification status. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/x/locations/x/collections/x/dataStores/x/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisRequest;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List
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

  export class Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations(
          this.context
        );
    }

    /**
     * Creates TargetSite in a batch.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreate(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate;
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
            url: (
              rootUrl + '/v1alpha/{+parent}/targetSites:batchCreate'
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Creates a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/targetSites').replace(
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
     * Deletes a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>(
          parameters
        );
      }
    }

    /**
     * Gets a list of TargetSites.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/targetSites').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate
    extends StandardParameters {
    /**
     * Required. The parent resource shared by all TargetSites being created. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create
    extends StandardParameters {
    /**
     * Required. Parent resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTargetSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargetSites` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent site search engine resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. If the caller does not have permission to list TargetSites under this site search engine, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch
    extends StandardParameters {
    /**
     * Output only. The fully qualified resource name of the target site. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}` The `target_site_id` is system-generated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List
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

  export class Resource$Projects$Locations$Collections$Datastores$Userevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    collect(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    collect(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleApiHttpBody>;
    collect(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApiHttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(callback: BodyResponseCallback<Schema$GoogleApiHttpBody>): void;
    collect(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect;
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
            url: (rootUrl + '/v1alpha/{+parent}/userEvents:collect').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import;
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
            url: (rootUrl + '/v1alpha/{+parent}/userEvents:import').replace(
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
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge
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
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge;
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
            url: (rootUrl + '/v1alpha/{+parent}/userEvents:purge').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    write(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    write(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>;
    write(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write;
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
            url: (rootUrl + '/v1alpha/{+parent}/userEvents:write').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect
    extends StandardParameters {
    /**
     * The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     */
    ets?: string;
    /**
     * Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.
     */
    uri?: string;
    /**
     * Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     */
    userEvent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import
    extends StandardParameters {
    /**
     * Required. Parent DataStore resource name, of the form `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Purge
    extends StandardParameters {
    /**
     * Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId\}/locations/global/collections/{$collectionId\}/dataStores/${dataStoreId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write
    extends StandardParameters {
    /**
     * Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaUserEvent;
  }

  export class Resource$Projects$Locations$Collections$Engines {
    context: APIRequestContext;
    conversations: Resource$Projects$Locations$Collections$Engines$Conversations;
    operations: Resource$Projects$Locations$Collections$Engines$Operations;
    servingConfigs: Resource$Projects$Locations$Collections$Engines$Servingconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.conversations =
        new Resource$Projects$Locations$Collections$Engines$Conversations(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Collections$Engines$Operations(
          this.context
        );
      this.servingConfigs =
        new Resource$Projects$Locations$Collections$Engines$Servingconfigs(
          this.context
        );
    }

    /**
     * Creates a Engine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Create
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
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/engines').replace(
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
     * Deletes a Engine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Delete
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
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a Engine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaEngine>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaEngine>(
          parameters
        );
      }
    }

    /**
     * Lists all the Engines associated with the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Engines$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/engines').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListEnginesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an Engine
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaEngine>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaEngine>(
          parameters
        );
      }
    }

    /**
     * Pauses the training of an existing engine. Only applicable if solution_type is SOLUTION_TYPE_RECOMMENDATION.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    pause(
      params: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pause(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaEngine>;
    pause(
      params: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    pause(
      params: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    pause(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Pause
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Pause;
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
            url: (rootUrl + '/v1alpha/{+name}:pause').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaEngine>(
          parameters
        );
      }
    }

    /**
     * Resumes the training of an existing engine. Only applicable if solution_type is SOLUTION_TYPE_RECOMMENDATION.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resume(
      params: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resume(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaEngine>;
    resume(
      params: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    resume(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
    ): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Resume
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Resume;
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
            url: (rootUrl + '/v1alpha/{+name}:resume').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaEngine>(
          parameters
        );
      }
    }

    /**
     * Tunes an existing engine. Only applicable if solution_type is SOLUTION_TYPE_RECOMMENDATION.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    tune(
      params: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    tune(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    tune(
      params: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    tune(
      params: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    tune(
      params: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    tune(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    tune(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Tune
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
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Tune;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Tune;
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
            url: (rootUrl + '/v1alpha/{+name}:tune').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Engine, which will become the final component of the Engine's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    engineId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaEngine;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of Engine, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/engines/{engine_id\}`. If the caller does not have permission to delete the Engine, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Engine to delete does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of Engine, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/engines/{engine_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$List
    extends StandardParameters {
    /**
     * Optional. Filter by solution type. For example: solution_type=SOLUTION_TYPE_SEARCH
     */
    filter?: string;
    /**
     * Optional. Not supported.
     */
    pageSize?: number;
    /**
     * Optional. Not supported.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Patch
    extends StandardParameters {
    /**
     * Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}` engine should be 1-63 characters, and valid characters are /a-z0-9x/. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Engine to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaEngine;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Pause
    extends StandardParameters {
    /**
     * Required. The name of the engine to pause. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaPauseEngineRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Resume
    extends StandardParameters {
    /**
     * Required. The name of the engine to resume. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaResumeEngineRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Tune
    extends StandardParameters {
    /**
     * Required. The resource name of the engine to tune. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaTuneEngineRequest;
  }

  export class Resource$Projects$Locations$Collections$Engines$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Converses a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    converse(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    converse(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse;
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
            url: (rootUrl + '/v1alpha/{+name}:converse').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/conversations').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete
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
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a Conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }

    /**
     * Lists all Conversations by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/conversations').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`. Use `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConversation;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `project/x/locations/global/collections/{collection\}/dataStore/x/conversations/x` or `project/x/locations/global/collections/{collection\}/engines/x/conversations/x`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Conversation to update. The following are NOT supported: * conversation.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConversation;
  }

  export class Resource$Projects$Locations$Collections$Engines$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Engines$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Operations$List
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

  export class Resource$Projects$Locations$Collections$Engines$Servingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Makes a recommendation, which requires a contextual user event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recommend(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend;
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
            url: (rootUrl + '/v1alpha/{+servingConfig}:recommend').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>;
    search(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search;
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
            url: (rootUrl + '/v1alpha/{+servingConfig}:search').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend
    extends StandardParameters {
    /**
     * Required. Full resource name of a ServingConfig: `projects/x/locations/global/collections/x/engines/x/servingConfigs/x`, or `projects/x/locations/global/collections/x/dataStores/x/servingConfigs/x` One default serving config is created along with your recommendation engine creation. The engine ID will be used as the ID of the default serving config. For example, for Engine `projects/x/locations/global/collections/x/engines/my-engine`, you can use `projects/x/locations/global/collections/x/engines/my-engine/servingConfigs/my-engine` for your Recommend requests.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaRecommendRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequest;
  }

  export class Resource$Projects$Locations$Collections$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Collections$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Collections$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Operations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Collections$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Operations$List;
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Collections$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Operations$List
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

  export class Resource$Projects$Locations$Datastores {
    context: APIRequestContext;
    branches: Resource$Projects$Locations$Datastores$Branches;
    conversations: Resource$Projects$Locations$Datastores$Conversations;
    models: Resource$Projects$Locations$Datastores$Models;
    operations: Resource$Projects$Locations$Datastores$Operations;
    schemas: Resource$Projects$Locations$Datastores$Schemas;
    servingConfigs: Resource$Projects$Locations$Datastores$Servingconfigs;
    siteSearchEngine: Resource$Projects$Locations$Datastores$Sitesearchengine;
    userEvents: Resource$Projects$Locations$Datastores$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.branches = new Resource$Projects$Locations$Datastores$Branches(
        this.context
      );
      this.conversations =
        new Resource$Projects$Locations$Datastores$Conversations(this.context);
      this.models = new Resource$Projects$Locations$Datastores$Models(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Datastores$Operations(
        this.context
      );
      this.schemas = new Resource$Projects$Locations$Datastores$Schemas(
        this.context
      );
      this.servingConfigs =
        new Resource$Projects$Locations$Datastores$Servingconfigs(this.context);
      this.siteSearchEngine =
        new Resource$Projects$Locations$Datastores$Sitesearchengine(
          this.context
        );
      this.userEvents = new Resource$Projects$Locations$Datastores$Userevents(
        this.context
      );
    }

    /**
     * Completes the specified user input with keyword suggestions.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    completeQuery(
      params: Params$Resource$Projects$Locations$Datastores$Completequery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    completeQuery(
      params?: Params$Resource$Projects$Locations$Datastores$Completequery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>;
    completeQuery(
      params: Params$Resource$Projects$Locations$Datastores$Completequery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Datastores$Completequery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Datastores$Completequery,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
    ): void;
    completeQuery(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
    ): void;
    completeQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Completequery
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Completequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Completequery;
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
            url: (rootUrl + '/v1alpha/{+dataStore}:completeQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['dataStore'],
        pathParams: ['dataStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaCompleteQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Create
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
        {}) as Params$Resource$Projects$Locations$Datastores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/dataStores').replace(
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
     * Deletes a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Delete
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
        {}) as Params$Resource$Projects$Locations$Datastores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>(
          parameters
        );
      }
    }

    /**
     * Gets a DocumentProcessingConfig.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDocumentProcessingConfig(
      params?: Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>;
    getDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    getDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    getDocumentProcessingConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    getDocumentProcessingConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>(
          parameters
        );
      }
    }

    /**
     * Gets the SiteSearchEngine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSiteSearchEngine(
      params?: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Getsitesearchengine
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Getsitesearchengine;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Getsitesearchengine;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSiteSearchEngine>(
          parameters
        );
      }
    }

    /**
     * Lists all the DataStores associated with the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/dataStores').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListDataStoresResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a DataStore
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDataStore>(
          parameters
        );
      }
    }

    /**
     * Updates the DocumentProcessingConfig. DocumentProcessingConfig is a singleon resource of DataStore. It's empty when DataStore is created. The first call to this method will set up DocumentProcessingConfig.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateDocumentProcessingConfig(
      params?: Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>;
    updateDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    updateDocumentProcessingConfig(
      params: Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    updateDocumentProcessingConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
    ): void;
    updateDocumentProcessingConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Completequery
    extends StandardParameters {
    /**
     * Required. The parent data store resource name for which the completion is performed, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store`.
     */
    dataStore?: string;
    /**
     * Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned.
     */
    includeTailSuggestions?: boolean;
    /**
     * Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters.
     */
    query?: string;
    /**
     * Selects data model of query suggestions for serving. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores.
     */
    queryModel?: string;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userPseudoId?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Create
    extends StandardParameters {
    /**
     * A boolean flag indicating whether user want to directly create an advanced data store for site search. If the data store is not configured as site search (GENERIC vertical and PUBLIC_WEBSITE content_config), this flag will be ignored.
     */
    createAdvancedSiteSearch?: boolean;
    /**
     * Required. The ID to use for the DataStore, which will become the final component of the DataStore's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    dataStoreId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDataStore;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. If the caller does not have permission to delete the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the DataStore to delete does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. If the caller does not have permission to access the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataStore does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Getdocumentprocessingconfig
    extends StandardParameters {
    /**
     * Required. Full DocumentProcessingConfig resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/dataStores/{data_store_id\}/documentProcessingConfig`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Getsitesearchengine
    extends StandardParameters {
    /**
     * Required. Resource name of SiteSearchEngine, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. If the caller does not have permission to access the [SiteSearchEngine], regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$List
    extends StandardParameters {
    /**
     * Filter by solution type. For example: filter = 'solution_type:SOLUTION_TYPE_SEARCH'
     */
    filter?: string;
    /**
     * Maximum number of DataStores to return. If unspecified, defaults to 10. The maximum allowed value is 50. Values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDataStoresResponse.next_page_token, received from a previous DataStoreService.ListDataStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DataStoreService.ListDataStores must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}`. If the caller does not have permission to list DataStoress under this location, regardless of whether or not this data store exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Patch
    extends StandardParameters {
    /**
     * Immutable. The full resource name of the data store. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;
    /**
     * Indicates which fields in the provided DataStore to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDataStore;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Updatedocumentprocessingconfig
    extends StandardParameters {
    /**
     * Output only. The full resource name of the Document Processing Config. Format: `projects/x/locations/x/collections/x/dataStores/x/documentProcessingConfig`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided DocumentProcessingConfig to update. The following are the only supported fields: * DocumentProcessingConfig.orc_config If not set, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig;
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
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
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
            url: (rootUrl + '/v1alpha/{+parent}/documents').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters
        );
      }
    }

    /**
     * Deletes a Document.
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters
        );
      }
    }

    /**
     * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
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
            url: (rootUrl + '/v1alpha/{+parent}/documents:import').replace(
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
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>
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
            url: (rootUrl + '/v1alpha/{+parent}/documents').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListDocumentsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Document.
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
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaDocument>
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaDocument>(
          parameters
        );
      }
    }

    /**
     * Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge
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
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge;
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
            url: (rootUrl + '/v1alpha/{+parent}/documents:purge').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Document, which will become the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    documentId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDocument;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the Document to delete does not exist, a `NOT_FOUND` error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import
    extends StandardParameters {
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`. Requires create/update permission.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$List
    extends StandardParameters {
    /**
     * Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned.
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
     * Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDocument;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge
    extends StandardParameters {
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest;
  }

  export class Resource$Projects$Locations$Datastores$Branches$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export class Resource$Projects$Locations$Datastores$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Converses a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    converse(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    converse(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>;
    converse(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
    ): void;
    converse(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Converse
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Converse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Converse;
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
            url: (rootUrl + '/v1alpha/{+name}:converse').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/conversations').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Delete
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
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a Conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }

    /**
     * Lists all Conversations by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/conversations').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListConversationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaConversation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Converse
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`. Use `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConverseConversationRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConversation;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `project/x/locations/global/collections/{collection\}/dataStore/x/conversations/x` or `project/x/locations/global/collections/{collection\}/engines/x/conversations/x`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Conversation to update. The following are NOT supported: * conversation.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaConversation;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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

  export class Resource$Projects$Locations$Datastores$Schemas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$Create
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
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/schemas').replace(
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
     * Deletes a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$Delete
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
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSchema>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSchema>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSchema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSchema>(
          parameters
        );
      }
    }

    /**
     * Gets a list of Schemas.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/schemas').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListSchemasResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$Patch
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
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Schemas$Create
    extends StandardParameters {
    /**
     * Required. The parent data store resource name, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the Schema, which will become the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    schemaId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaSchema;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Schemas$Delete
    extends StandardParameters {
    /**
     * Required. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Schemas$Get
    extends StandardParameters {
    /**
     * Required. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Schemas$List
    extends StandardParameters {
    /**
     * The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent data store resource name, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Schemas$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Schema is not found, a new Schema will be created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaSchema;
  }

  export class Resource$Projects$Locations$Datastores$Servingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Makes a recommendation, which requires a contextual user event.
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
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
    ): void;
    recommend(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>
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
            url: (rootUrl + '/v1alpha/{+servingConfig}:recommend').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaRecommendResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>;
    search(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search;
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
            url: (rootUrl + '/v1alpha/{+servingConfig}:search').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaSearchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend
    extends StandardParameters {
    /**
     * Required. Full resource name of a ServingConfig: `projects/x/locations/global/collections/x/engines/x/servingConfigs/x`, or `projects/x/locations/global/collections/x/dataStores/x/servingConfigs/x` One default serving config is created along with your recommendation engine creation. The engine ID will be used as the ID of the default serving config. For example, for Engine `projects/x/locations/global/collections/x/engines/my-engine`, you can use `projects/x/locations/global/collections/x/engines/my-engine/servingConfigs/my-engine` for your Recommend requests.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaRecommendRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaSearchRequest;
  }

  export class Resource$Projects$Locations$Datastores$Sitesearchengine {
    context: APIRequestContext;
    targetSites: Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.targetSites =
        new Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites(
          this.context
        );
    }

    /**
     * Downgrade from advanced site search to basic site search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disableAdvancedSiteSearch(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch
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
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch;
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
            url: (
              rootUrl + '/v1alpha/{+siteSearchEngine}:disableAdvancedSiteSearch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
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
     * Upgrade from basic site search to advanced site search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enableAdvancedSiteSearch(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch
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
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch;
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
            url: (
              rootUrl + '/v1alpha/{+siteSearchEngine}:enableAdvancedSiteSearch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
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
     * Request on-demand recrawl for a list of URIs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recrawlUris(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recrawlUris(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris
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
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris;
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
            url: (rootUrl + '/v1alpha/{+siteSearchEngine}:recrawlUris').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
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
  }

  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/{project\}/locations/{location\}/dataStores/{data_store_id\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/{project\}/locations/{location\}/dataStores/{data_store_id\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/x/locations/x/collections/x/dataStores/x/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisRequest;
  }

  export class Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates TargetSite in a batch.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreate(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate
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
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate;
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
            url: (
              rootUrl + '/v1alpha/{+parent}/targetSites:batchCreate'
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Creates a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create
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
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/targetSites').replace(
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
     * Deletes a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete
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
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaTargetSite>(
          parameters
        );
      }
    }

    /**
     * Gets a list of TargetSites.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/targetSites').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaListTargetSitesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch
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
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate
    extends StandardParameters {
    /**
     * Required. The parent resource shared by all TargetSites being created. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create
    extends StandardParameters {
    /**
     * Required. Parent resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTargetSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargetSites` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent site search engine resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. If the caller does not have permission to list TargetSites under this site search engine, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch
    extends StandardParameters {
    /**
     * Output only. The fully qualified resource name of the target site. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}` The `target_site_id` is system-generated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite;
  }

  export class Resource$Projects$Locations$Datastores$Userevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
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
            url: (rootUrl + '/v1alpha/{+parent}/userEvents:collect').replace(
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
            url: (rootUrl + '/v1alpha/{+parent}/userEvents:import').replace(
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
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Datastores$Userevents$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Userevents$Purge
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
        {}) as Params$Resource$Projects$Locations$Datastores$Userevents$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Userevents$Purge;
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
            url: (rootUrl + '/v1alpha/{+parent}/userEvents:purge').replace(
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
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>
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
            url: (rootUrl + '/v1alpha/{+parent}/userEvents:write').replace(
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
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1alphaUserEvent>(
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
     * Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.
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
     * Required. Parent DataStore resource name, of the form `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Userevents$Purge
    extends StandardParameters {
    /**
     * Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId\}/locations/global/collections/{$collectionId\}/dataStores/${dataStoreId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaPurgeUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Userevents$Write
    extends StandardParameters {
    /**
     * Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1alphaUserEvent;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
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
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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
