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

export namespace firebaseml_v2beta {
  export interface Options extends GlobalOptions {
    version: 'v2beta';
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
   * Firebase ML API
   *
   * Access custom machine learning models hosted via Firebase ML.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firebaseml = google.firebaseml('v2beta');
   * ```
   */
  export class Firebaseml {
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
   * Content blob. It's preferred to send as text directly rather than raw bytes.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Blob {
    /**
     * Required. Raw bytes.
     */
    data?: string | null;
    /**
     * Required. The IANA standard MIME type of the source data.
     */
    mimeType?: string | null;
  }
  /**
   * A response candidate generated from the model.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Candidate {
    /**
     * Output only. Average log probability score of the candidate.
     */
    avgLogprobs?: number | null;
    /**
     * Output only. Source attribution of the generated content.
     */
    citationMetadata?: Schema$GoogleCloudAiplatformV1beta1CitationMetadata;
    /**
     * Output only. Content parts of the candidate.
     */
    content?: Schema$GoogleCloudAiplatformV1beta1Content;
    /**
     * Output only. Describes the reason the mode stopped generating tokens in more detail. This is only filled when `finish_reason` is set.
     */
    finishMessage?: string | null;
    /**
     * Output only. The reason why the model stopped generating tokens. If empty, the model has not stopped generating the tokens.
     */
    finishReason?: string | null;
    /**
     * Output only. Metadata specifies sources used to ground generated content.
     */
    groundingMetadata?: Schema$GoogleCloudAiplatformV1beta1GroundingMetadata;
    /**
     * Output only. Index of the candidate.
     */
    index?: number | null;
    /**
     * Output only. List of ratings for the safety of a response candidate. There is at most one rating per category.
     */
    safetyRatings?: Schema$GoogleCloudAiplatformV1beta1SafetyRating[];
  }
  /**
   * Source attributions for content.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Citation {
    /**
     * Output only. End index into the content.
     */
    endIndex?: number | null;
    /**
     * Output only. License of the attribution.
     */
    license?: string | null;
    /**
     * Output only. Publication date of the attribution.
     */
    publicationDate?: Schema$Date;
    /**
     * Output only. Start index into the content.
     */
    startIndex?: number | null;
    /**
     * Output only. Title of the attribution.
     */
    title?: string | null;
    /**
     * Output only. Url reference of the attribution.
     */
    uri?: string | null;
  }
  /**
   * A collection of source attributions for a piece of content.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1CitationMetadata {
    /**
     * Output only. List of citations.
     */
    citations?: Schema$GoogleCloudAiplatformV1beta1Citation[];
  }
  /**
   * The base structured datatype containing multi-part content of a message. A `Content` includes a `role` field designating the producer of the `Content` and a `parts` field containing multi-part data that contains the content of the message turn.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Content {
    /**
     * Required. Ordered `Parts` that constitute a single message. Parts may have different IANA MIME types.
     */
    parts?: Schema$GoogleCloudAiplatformV1beta1Part[];
    /**
     * Optional. The producer of the content. Must be either 'user' or 'model'. Useful to set for multi-turn conversations, otherwise can be left blank or unset.
     */
    role?: string | null;
  }
  /**
   * Request message for PredictionService.CountTokens.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1CountTokensRequest {
    /**
     * Optional. Input content.
     */
    contents?: Schema$GoogleCloudAiplatformV1beta1Content[];
    /**
     * Optional. The instances that are the input to token counting call. Schema is identical to the prediction schema of the underlying model.
     */
    instances?: any[] | null;
    /**
     * Optional. The name of the publisher model requested to serve the prediction. Format: `projects/{project\}/locations/{location\}/publishers/x/models/x`
     */
    model?: string | null;
    /**
     * Optional. The user provided system instructions for the model. Note: only text should be used in parts and content in each part will be in a separate paragraph.
     */
    systemInstruction?: Schema$GoogleCloudAiplatformV1beta1Content;
    /**
     * Optional. A list of `Tools` the model may use to generate the next response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model.
     */
    tools?: Schema$GoogleCloudAiplatformV1beta1Tool[];
  }
  /**
   * Response message for PredictionService.CountTokens.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1CountTokensResponse {
    /**
     * The total number of billable characters counted across all instances from the request.
     */
    totalBillableCharacters?: number | null;
    /**
     * The total number of tokens counted across all instances from the request.
     */
    totalTokens?: number | null;
  }
  /**
   * URI based data.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FileData {
    /**
     * Required. URI.
     */
    fileUri?: string | null;
    /**
     * Required. The IANA standard MIME type of the source data.
     */
    mimeType?: string | null;
  }
  /**
   * A predicted [FunctionCall] returned from the model that contains a string representing the [FunctionDeclaration.name] and a structured JSON object containing the parameters and their values.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionCall {
    /**
     * Optional. Required. The function parameters and values in JSON object format. See [FunctionDeclaration.parameters] for parameter details.
     */
    args?: {[key: string]: any} | null;
    /**
     * Required. The name of the function to call. Matches [FunctionDeclaration.name].
     */
    name?: string | null;
  }
  /**
   * Function calling config.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionCallingConfig {
    /**
     * Optional. Function names to call. Only set when the Mode is ANY. Function names should match [FunctionDeclaration.name]. With mode set to ANY, model will predict a function call from the set of function names provided.
     */
    allowedFunctionNames?: string[] | null;
    /**
     * Optional. Function calling mode.
     */
    mode?: string | null;
  }
  /**
   * Structured representation of a function declaration as defined by the [OpenAPI 3.0 specification](https://spec.openapis.org/oas/v3.0.3). Included in this declaration are the function name and parameters. This FunctionDeclaration is a representation of a block of code that can be used as a `Tool` by the model and executed by the client.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionDeclaration {
    /**
     * Optional. Description and purpose of the function. Model uses it to decide how and whether to call the function.
     */
    description?: string | null;
    /**
     * Required. The name of the function to call. Must start with a letter or an underscore. Must be a-z, A-Z, 0-9, or contain underscores, dots and dashes, with a maximum length of 64.
     */
    name?: string | null;
    /**
     * Optional. Describes the parameters to this function in JSON Schema Object format. Reflects the Open API 3.03 Parameter Object. string Key: the name of the parameter. Parameter names are case sensitive. Schema Value: the Schema defining the type used for the parameter. For function with no parameters, this can be left unset. Parameter names must start with a letter or an underscore and must only contain chars a-z, A-Z, 0-9, or underscores with a maximum length of 64. Example with 1 required and 1 optional parameter: type: OBJECT properties: param1: type: STRING param2: type: INTEGER required: - param1
     */
    parameters?: Schema$GoogleCloudAiplatformV1beta1Schema;
    /**
     * Optional. Describes the output from this function in JSON Schema format. Reflects the Open API 3.03 Response Object. The Schema defines the type used for the response value of the function.
     */
    response?: Schema$GoogleCloudAiplatformV1beta1Schema;
  }
  /**
   * The result output from a [FunctionCall] that contains a string representing the [FunctionDeclaration.name] and a structured JSON object containing any output from the function is used as context to the model. This should contain the result of a [FunctionCall] made based on model prediction.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionResponse {
    /**
     * Required. The name of the function to call. Matches [FunctionDeclaration.name] and [FunctionCall.name].
     */
    name?: string | null;
    /**
     * Required. The function response in JSON object format. Use "output" key to specify function output and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as function output.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Request message for [PredictionService.GenerateContent].
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerateContentRequest {
    /**
     * Optional. The name of the cached content used as context to serve the prediction. Note: only used in explicit caching, where users can have control over caching (e.g. what content to cache) and enjoy guaranteed cost savings. Format: `projects/{project\}/locations/{location\}/cachedContents/{cachedContent\}`
     */
    cachedContent?: string | null;
    /**
     * Required. The content of the current conversation with the model. For single-turn queries, this is a single instance. For multi-turn queries, this is a repeated field that contains conversation history + latest request.
     */
    contents?: Schema$GoogleCloudAiplatformV1beta1Content[];
    /**
     * Optional. Generation config.
     */
    generationConfig?: Schema$GoogleCloudAiplatformV1beta1GenerationConfig;
    /**
     * Optional. Per request settings for blocking unsafe content. Enforced on GenerateContentResponse.candidates.
     */
    safetySettings?: Schema$GoogleCloudAiplatformV1beta1SafetySetting[];
    /**
     * Optional. The user provided system instructions for the model. Note: only text should be used in parts and content in each part will be in a separate paragraph.
     */
    systemInstruction?: Schema$GoogleCloudAiplatformV1beta1Content;
    /**
     * Optional. Tool config. This config is shared for all tools provided in the request.
     */
    toolConfig?: Schema$GoogleCloudAiplatformV1beta1ToolConfig;
    /**
     * Optional. A list of `Tools` the model may use to generate the next response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model.
     */
    tools?: Schema$GoogleCloudAiplatformV1beta1Tool[];
  }
  /**
   * Response message for [PredictionService.GenerateContent].
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse {
    /**
     * Output only. Generated candidates.
     */
    candidates?: Schema$GoogleCloudAiplatformV1beta1Candidate[];
    /**
     * Output only. Content filter results for a prompt sent in the request. Note: Sent only in the first stream chunk. Only happens when no candidates were generated due to content violations.
     */
    promptFeedback?: Schema$GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback;
    /**
     * Usage metadata about the response(s).
     */
    usageMetadata?: Schema$GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata;
  }
  /**
   * Content filter results for a prompt sent in the request.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback {
    /**
     * Output only. Blocked reason.
     */
    blockReason?: string | null;
    /**
     * Output only. A readable block reason message.
     */
    blockReasonMessage?: string | null;
    /**
     * Output only. Safety ratings.
     */
    safetyRatings?: Schema$GoogleCloudAiplatformV1beta1SafetyRating[];
  }
  /**
   * Usage metadata about response(s).
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata {
    /**
     * Output only. Number of tokens in the cached part in the input (the cached content).
     */
    cachedContentTokenCount?: number | null;
    /**
     * Number of tokens in the response(s).
     */
    candidatesTokenCount?: number | null;
    /**
     * Number of tokens in the request. When `cached_content` is set, this is still the total effective prompt size meaning this includes the number of tokens in the cached content.
     */
    promptTokenCount?: number | null;
    /**
     * Total token count for prompt and response candidates.
     */
    totalTokenCount?: number | null;
  }
  /**
   * Generation config.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfig {
    /**
     * Optional. Number of candidates to generate.
     */
    candidateCount?: number | null;
    /**
     * Optional. Frequency penalties.
     */
    frequencyPenalty?: number | null;
    /**
     * Optional. The maximum number of output tokens to generate per message.
     */
    maxOutputTokens?: number | null;
    /**
     * Optional. Positive penalties.
     */
    presencePenalty?: number | null;
    /**
     * Optional. Output response mimetype of the generated candidate text. Supported mimetype: - `text/plain`: (default) Text output. - `application/json`: JSON response in the candidates. The model needs to be prompted to output the appropriate response type, otherwise the behavior is undefined. This is a preview feature.
     */
    responseMimeType?: string | null;
    /**
     * Optional. The `Schema` object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. Represents a select subset of an [OpenAPI 3.0 schema object](https://spec.openapis.org/oas/v3.0.3#schema). If set, a compatible response_mime_type must also be set. Compatible mimetypes: `application/json`: Schema for JSON response.
     */
    responseSchema?: Schema$GoogleCloudAiplatformV1beta1Schema;
    /**
     * Optional. Routing configuration.
     */
    routingConfig?: Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig;
    /**
     * Optional. Seed.
     */
    seed?: number | null;
    /**
     * Optional. Stop sequences.
     */
    stopSequences?: string[] | null;
    /**
     * Optional. Controls the randomness of predictions.
     */
    temperature?: number | null;
    /**
     * Optional. If specified, top-k sampling will be used.
     */
    topK?: number | null;
    /**
     * Optional. If specified, nucleus sampling will be used.
     */
    topP?: number | null;
  }
  /**
   * The configuration for routing the request to a specific model.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig {
    /**
     * Automated routing.
     */
    autoMode?: Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode;
    /**
     * Manual routing.
     */
    manualMode?: Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode;
  }
  /**
   * When automated routing is specified, the routing will be determined by the pretrained routing model and customer provided model routing preference.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode {
    /**
     * The model routing preference.
     */
    modelRoutingPreference?: string | null;
  }
  /**
   * When manual routing is set, the specified model will be used directly.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode {
    /**
     * The model name to use. Only the public LLM models are accepted. e.g. 'gemini-1.5-pro-001'.
     */
    modelName?: string | null;
  }
  /**
   * Tool to retrieve public web data for grounding, powered by Google.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GoogleSearchRetrieval {}
  /**
   * Grounding chunk.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunk {
    /**
     * Grounding chunk from context retrieved by the retrieval tools.
     */
    retrievedContext?: Schema$GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext;
    /**
     * Grounding chunk from the web.
     */
    web?: Schema$GoogleCloudAiplatformV1beta1GroundingChunkWeb;
  }
  /**
   * Chunk from context retrieved by the retrieval tools.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext {
    /**
     * Title of the attribution.
     */
    title?: string | null;
    /**
     * URI reference of the attribution.
     */
    uri?: string | null;
  }
  /**
   * Chunk from the web.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunkWeb {
    /**
     * Title of the chunk.
     */
    title?: string | null;
    /**
     * URI reference of the chunk.
     */
    uri?: string | null;
  }
  /**
   * Metadata returned to client when grounding is enabled.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingMetadata {
    /**
     * List of supporting references retrieved from specified grounding source.
     */
    groundingChunks?: Schema$GoogleCloudAiplatformV1beta1GroundingChunk[];
    /**
     * Optional. List of grounding support.
     */
    groundingSupports?: Schema$GoogleCloudAiplatformV1beta1GroundingSupport[];
    /**
     * Optional. Queries executed by the retrieval tools.
     */
    retrievalQueries?: string[] | null;
    /**
     * Optional. Google search entry for the following-up web searches.
     */
    searchEntryPoint?: Schema$GoogleCloudAiplatformV1beta1SearchEntryPoint;
    /**
     * Optional. Web search queries for the following-up web search.
     */
    webSearchQueries?: string[] | null;
  }
  /**
   * Grounding support.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingSupport {
    /**
     * Confidence score of the support references. Ranges from 0 to 1. 1 is the most confident. This list must have the same size as the grounding_chunk_indices.
     */
    confidenceScores?: number[] | null;
    /**
     * A list of indices (into 'grounding_chunk') specifying the citations associated with the claim. For instance [1,3,4] means that grounding_chunk[1], grounding_chunk[3], grounding_chunk[4] are the retrieved content attributed to the claim.
     */
    groundingChunkIndices?: number[] | null;
    /**
     * Segment of the content this support belongs to.
     */
    segment?: Schema$GoogleCloudAiplatformV1beta1Segment;
  }
  /**
   * A datatype containing media that is part of a multi-part `Content` message. A `Part` consists of data which has an associated datatype. A `Part` can only contain one of the accepted types in `Part.data`. A `Part` must have a fixed IANA MIME type identifying the type and subtype of the media if `inline_data` or `file_data` field is filled with raw bytes.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Part {
    /**
     * Optional. URI based data.
     */
    fileData?: Schema$GoogleCloudAiplatformV1beta1FileData;
    /**
     * Optional. A predicted [FunctionCall] returned from the model that contains a string representing the [FunctionDeclaration.name] with the parameters and their values.
     */
    functionCall?: Schema$GoogleCloudAiplatformV1beta1FunctionCall;
    /**
     * Optional. The result output of a [FunctionCall] that contains a string representing the [FunctionDeclaration.name] and a structured JSON object containing any output from the function call. It is used as context to the model.
     */
    functionResponse?: Schema$GoogleCloudAiplatformV1beta1FunctionResponse;
    /**
     * Optional. Inlined bytes data.
     */
    inlineData?: Schema$GoogleCloudAiplatformV1beta1Blob;
    /**
     * Optional. Text part (can be code).
     */
    text?: string | null;
    /**
     * Optional. Video metadata. The metadata should only be specified while the video data is presented in inline_data or file_data.
     */
    videoMetadata?: Schema$GoogleCloudAiplatformV1beta1VideoMetadata;
  }
  /**
   * Defines a retrieval tool that model can call to access external knowledge.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Retrieval {
    /**
     * Optional. Deprecated. This option is no longer supported.
     */
    disableAttribution?: boolean | null;
    /**
     * Set to use data source powered by Vertex AI Search.
     */
    vertexAiSearch?: Schema$GoogleCloudAiplatformV1beta1VertexAISearch;
    /**
     * Set to use data source powered by Vertex RAG store. User data is uploaded via the VertexRagDataService.
     */
    vertexRagStore?: Schema$GoogleCloudAiplatformV1beta1VertexRagStore;
  }
  /**
   * Safety rating corresponding to the generated content.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1SafetyRating {
    /**
     * Output only. Indicates whether the content was filtered out because of this rating.
     */
    blocked?: boolean | null;
    /**
     * Output only. Harm category.
     */
    category?: string | null;
    /**
     * Output only. Harm probability levels in the content.
     */
    probability?: string | null;
    /**
     * Output only. Harm probability score.
     */
    probabilityScore?: number | null;
    /**
     * Output only. Harm severity levels in the content.
     */
    severity?: string | null;
    /**
     * Output only. Harm severity score.
     */
    severityScore?: number | null;
  }
  /**
   * Safety settings.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1SafetySetting {
    /**
     * Required. Harm category.
     */
    category?: string | null;
    /**
     * Optional. Specify if the threshold is used for probability or severity score. If not specified, the threshold is used for probability score.
     */
    method?: string | null;
    /**
     * Required. The harm block threshold.
     */
    threshold?: string | null;
  }
  /**
   * Schema is used to define the format of input/output data. Represents a select subset of an [OpenAPI 3.0 schema object](https://spec.openapis.org/oas/v3.0.3#schema-object). More fields may be added in the future as needed.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Schema {
    /**
     * Optional. Default value of the data.
     */
    default?: any | null;
    /**
     * Optional. The description of the data.
     */
    description?: string | null;
    /**
     * Optional. Possible values of the element of Type.STRING with enum format. For example we can define an Enum Direction as : {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]\}
     */
    enum?: string[] | null;
    /**
     * Optional. Example of the object. Will only populated when the object is the root.
     */
    example?: any | null;
    /**
     * Optional. The format of the data. Supported formats: for NUMBER type: "float", "double" for INTEGER type: "int32", "int64" for STRING type: "email", "byte", etc
     */
    format?: string | null;
    /**
     * Optional. SCHEMA FIELDS FOR TYPE ARRAY Schema of the elements of Type.ARRAY.
     */
    items?: Schema$GoogleCloudAiplatformV1beta1Schema;
    /**
     * Optional. Maximum value of the Type.INTEGER and Type.NUMBER
     */
    maximum?: number | null;
    /**
     * Optional. Maximum number of the elements for Type.ARRAY.
     */
    maxItems?: string | null;
    /**
     * Optional. Maximum length of the Type.STRING
     */
    maxLength?: string | null;
    /**
     * Optional. Maximum number of the properties for Type.OBJECT.
     */
    maxProperties?: string | null;
    /**
     * Optional. SCHEMA FIELDS FOR TYPE INTEGER and NUMBER Minimum value of the Type.INTEGER and Type.NUMBER
     */
    minimum?: number | null;
    /**
     * Optional. Minimum number of the elements for Type.ARRAY.
     */
    minItems?: string | null;
    /**
     * Optional. SCHEMA FIELDS FOR TYPE STRING Minimum length of the Type.STRING
     */
    minLength?: string | null;
    /**
     * Optional. Minimum number of the properties for Type.OBJECT.
     */
    minProperties?: string | null;
    /**
     * Optional. Indicates if the value may be null.
     */
    nullable?: boolean | null;
    /**
     * Optional. Pattern of the Type.STRING to restrict a string to a regular expression.
     */
    pattern?: string | null;
    /**
     * Optional. SCHEMA FIELDS FOR TYPE OBJECT Properties of Type.OBJECT.
     */
    properties?: {
      [key: string]: Schema$GoogleCloudAiplatformV1beta1Schema;
    } | null;
    /**
     * Optional. Required properties of Type.OBJECT.
     */
    required?: string[] | null;
    /**
     * Optional. The title of the Schema.
     */
    title?: string | null;
    /**
     * Optional. The type of the data.
     */
    type?: string | null;
  }
  /**
   * Google search entry point.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1SearchEntryPoint {
    /**
     * Optional. Web content snippet that can be embedded in a web page or an app webview.
     */
    renderedContent?: string | null;
    /**
     * Optional. Base64 encoded JSON representing array of tuple.
     */
    sdkBlob?: string | null;
  }
  /**
   * Segment of the content.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Segment {
    /**
     * Output only. End index in the given Part, measured in bytes. Offset from the start of the Part, exclusive, starting at zero.
     */
    endIndex?: number | null;
    /**
     * Output only. The index of a Part object within its parent Content object.
     */
    partIndex?: number | null;
    /**
     * Output only. Start index in the given Part, measured in bytes. Offset from the start of the Part, inclusive, starting at zero.
     */
    startIndex?: number | null;
    /**
     * Output only. The text corresponding to the segment from the response.
     */
    text?: string | null;
  }
  /**
   * Tool details that the model may use to generate response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. A Tool object should contain exactly one type of Tool (e.g FunctionDeclaration, Retrieval or GoogleSearchRetrieval).
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Tool {
    /**
     * Optional. Function tool type. One or more function declarations to be passed to the model along with the current user query. Model may decide to call a subset of these functions by populating FunctionCall in the response. User should provide a FunctionResponse for each function call in the next turn. Based on the function responses, Model will generate the final response back to the user. Maximum 64 function declarations can be provided.
     */
    functionDeclarations?: Schema$GoogleCloudAiplatformV1beta1FunctionDeclaration[];
    /**
     * Optional. GoogleSearchRetrieval tool type. Specialized retrieval tool that is powered by Google search.
     */
    googleSearchRetrieval?: Schema$GoogleCloudAiplatformV1beta1GoogleSearchRetrieval;
    /**
     * Optional. Retrieval tool type. System will always execute the provided retrieval tool(s) to get external knowledge to answer the prompt. Retrieval results are presented to the model for generation.
     */
    retrieval?: Schema$GoogleCloudAiplatformV1beta1Retrieval;
  }
  /**
   * Tool config. This config is shared for all tools provided in the request.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ToolConfig {
    /**
     * Optional. Function calling config.
     */
    functionCallingConfig?: Schema$GoogleCloudAiplatformV1beta1FunctionCallingConfig;
  }
  /**
   * Retrieve from Vertex AI Search datastore for grounding. See https://cloud.google.com/products/agent-builder
   */
  export interface Schema$GoogleCloudAiplatformV1beta1VertexAISearch {
    /**
     * Required. Fully-qualified Vertex AI Search data store resource ID. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{dataStore\}`
     */
    datastore?: string | null;
  }
  /**
   * Retrieve from Vertex RAG Store for grounding.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1VertexRagStore {
    /**
     * Optional. Deprecated. Please use rag_resources instead.
     */
    ragCorpora?: string[] | null;
    /**
     * Optional. The representation of the rag source. It can be used to specify corpus only or ragfiles. Currently only support one corpus or multiple files from one corpus. In the future we may open up multiple corpora support.
     */
    ragResources?: Schema$GoogleCloudAiplatformV1beta1VertexRagStoreRagResource[];
    /**
     * Optional. Number of top k results to return from the selected corpora.
     */
    similarityTopK?: number | null;
    /**
     * Optional. Only return results with vector distance smaller than the threshold.
     */
    vectorDistanceThreshold?: number | null;
  }
  /**
   * The definition of the Rag resource.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1VertexRagStoreRagResource {
    /**
     * Optional. RagCorpora resource name. Format: `projects/{project\}/locations/{location\}/ragCorpora/{rag_corpus\}`
     */
    ragCorpus?: string | null;
    /**
     * Optional. rag_file_id. The files should be in the same rag_corpus set in rag_corpus field.
     */
    ragFileIds?: string[] | null;
  }
  /**
   * Metadata describes the input video content.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1VideoMetadata {
    /**
     * Optional. The end offset of the video.
     */
    endOffset?: string | null;
    /**
     * Optional. The start offset of the video.
     */
    startOffset?: string | null;
  }
  /**
   * This is returned in the longrunning operations for create/update.
   */
  export interface Schema$ModelOperationMetadata {
    basicOperationStatus?: string | null;
    /**
     * The name of the model we are creating/updating The name must have the form `projects/{project_id\}/models/{model_id\}`
     */
    name?: string | null;
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
    publishers: Resource$Projects$Locations$Publishers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.publishers = new Resource$Projects$Locations$Publishers(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Publishers {
    context: APIRequestContext;
    models: Resource$Projects$Locations$Publishers$Models;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.models = new Resource$Projects$Locations$Publishers$Models(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Publishers$Models {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Perform a token counting.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    countTokens(
      params: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    countTokens(
      params?: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>;
    countTokens(
      params: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countTokens(
      params: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
    ): void;
    countTokens(
      params: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
    ): void;
    countTokens(
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
    ): void;
    countTokens(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Publishers$Models$Counttokens
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Publishers$Models$Counttokens;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Publishers$Models$Counttokens;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebaseml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+endpoint}:countTokens').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['endpoint'],
        pathParams: ['endpoint'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>(
          parameters
        );
      }
    }

    /**
     * Generate content with multimodal inputs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateContent(
      params?: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>;
    generateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
    ): void;
    generateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
    ): void;
    generateContent(
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
    ): void;
    generateContent(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Publishers$Models$Generatecontent
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Publishers$Models$Generatecontent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Publishers$Models$Generatecontent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebaseml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+model}:generateContent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['model'],
        pathParams: ['model'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>(
          parameters
        );
      }
    }

    /**
     * Generate content with multimodal inputs with streaming support.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    streamGenerateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    streamGenerateContent(
      params?: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>;
    streamGenerateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    streamGenerateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
    ): void;
    streamGenerateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
    ): void;
    streamGenerateContent(
      callback: BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
    ): void;
    streamGenerateContent(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebaseml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+model}:streamGenerateContent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['model'],
        pathParams: ['model'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Publishers$Models$Counttokens
    extends StandardParameters {
    /**
     * Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project\}/locations/{location\}/endpoints/{endpoint\}`
     */
    endpoint?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAiplatformV1beta1CountTokensRequest;
  }
  export interface Params$Resource$Projects$Locations$Publishers$Models$Generatecontent
    extends StandardParameters {
    /**
     * Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project\}/locations/{location\}/publishers/x/models/x` Tuned model endpoint format: `projects/{project\}/locations/{location\}/endpoints/{endpoint\}`
     */
    model?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAiplatformV1beta1GenerateContentRequest;
  }
  export interface Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent
    extends StandardParameters {
    /**
     * Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project\}/locations/{location\}/publishers/x/models/x` Tuned model endpoint format: `projects/{project\}/locations/{location\}/endpoints/{endpoint\}`
     */
    model?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAiplatformV1beta1GenerateContentRequest;
  }
}
