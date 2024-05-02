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
   * Content blob. It's preferred to send as text directly rather than raw bytes.
   */
  export interface Schema$Blob {
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
  export interface Schema$Candidate {
    /**
     * Output only. Source attribution of the generated content.
     */
    citationMetadata?: Schema$CitationMetadata;
    /**
     * Output only. Content parts of the candidate.
     */
    content?: Schema$Content;
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
    groundingMetadata?: Schema$GroundingMetadata;
    /**
     * Output only. Index of the candidate.
     */
    index?: number | null;
    /**
     * Output only. List of ratings for the safety of a response candidate. There is at most one rating per category.
     */
    safetyRatings?: Schema$SafetyRating[];
  }
  /**
   * Source attributions for content.
   */
  export interface Schema$Citation {
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
  export interface Schema$CitationMetadata {
    /**
     * Output only. List of citations.
     */
    citations?: Schema$Citation[];
  }
  /**
   * The base structured datatype containing multi-part content of a message. A `Content` includes a `role` field designating the producer of the `Content` and a `parts` field containing multi-part data that contains the content of the message turn.
   */
  export interface Schema$Content {
    /**
     * Required. Ordered `Parts` that constitute a single message. Parts may have different IANA MIME types.
     */
    parts?: Schema$Part[];
    /**
     * Optional. The producer of the content. Must be either 'user' or 'model'. Useful to set for multi-turn conversations, otherwise can be left blank or unset.
     */
    role?: string | null;
  }
  /**
   * Request message for PredictionService.CountTokens.
   */
  export interface Schema$CountTokensRequest {
    /**
     * Required. Input content.
     */
    contents?: Schema$Content[];
    /**
     * Required. The instances that are the input to token counting call. Schema is identical to the prediction schema of the underlying model.
     */
    instances?: any[] | null;
    /**
     * Required. The name of the publisher model requested to serve the prediction. Format: `projects/{project\}/locations/{location\}/publishers/x/models/x`
     */
    model?: string | null;
  }
  /**
   * Response message for PredictionService.CountTokens.
   */
  export interface Schema$CountTokensResponse {
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
   * URI based data.
   */
  export interface Schema$FileData {
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
  export interface Schema$FunctionCall {
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
  export interface Schema$FunctionCallingConfig {
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
  export interface Schema$FunctionDeclaration {
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
    parameters?: Schema$Schema;
    /**
     * Optional. Describes the output from this function in JSON Schema format. Reflects the Open API 3.03 Response Object. The Schema defines the type used for the response value of the function.
     */
    response?: Schema$Schema;
  }
  /**
   * The result output from a [FunctionCall] that contains a string representing the [FunctionDeclaration.name] and a structured JSON object containing any output from the function is used as context to the model. This should contain the result of a [FunctionCall] made based on model prediction.
   */
  export interface Schema$FunctionResponse {
    /**
     * Required. The name of the function to call. Matches [FunctionDeclaration.name] and [FunctionCall.name].
     */
    name?: string | null;
    /**
     * Required. The function response in JSON object format.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Request message for [PredictionService.GenerateContent].
   */
  export interface Schema$GenerateContentRequest {
    /**
     * Required. The content of the current conversation with the model. For single-turn queries, this is a single instance. For multi-turn queries, this is a repeated field that contains conversation history + latest request.
     */
    contents?: Schema$Content[];
    /**
     * Optional. Generation config.
     */
    generationConfig?: Schema$GenerationConfig;
    /**
     * Optional. Per request settings for blocking unsafe content. Enforced on GenerateContentResponse.candidates.
     */
    safetySettings?: Schema$SafetySetting[];
    /**
     * Optional. The user provided system instructions for the model. Note: only text should be used in parts and content in each part will be in a separate paragraph.
     */
    systemInstruction?: Schema$Content;
    /**
     * Optional. Tool config. This config is shared for all tools provided in the request.
     */
    toolConfig?: Schema$ToolConfig;
    /**
     * Optional. A list of `Tools` the model may use to generate the next response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model.
     */
    tools?: Schema$Tool[];
  }
  /**
   * Response message for [PredictionService.GenerateContent].
   */
  export interface Schema$GenerateContentResponse {
    /**
     * Output only. Generated candidates.
     */
    candidates?: Schema$Candidate[];
    /**
     * Output only. Content filter results for a prompt sent in the request. Note: Sent only in the first stream chunk. Only happens when no candidates were generated due to content violations.
     */
    promptFeedback?: Schema$PromptFeedback;
    /**
     * Usage metadata about the response(s).
     */
    usageMetadata?: Schema$UsageMetadata;
  }
  /**
   * Generation config.
   */
  export interface Schema$GenerationConfig {
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
   * Metadata returned to client when grounding is enabled.
   */
  export interface Schema$GroundingMetadata {
    /**
     * Optional. Queries executed by the retrieval tools.
     */
    retrievalQueries?: string[] | null;
    /**
     * Optional. Google search entry for the following-up web searches.
     */
    searchEntryPoint?: Schema$SearchEntryPoint;
    /**
     * Optional. Web search queries for the following-up web search.
     */
    webSearchQueries?: string[] | null;
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
  /**
   * A datatype containing media that is part of a multi-part `Content` message. A `Part` consists of data which has an associated datatype. A `Part` can only contain one of the accepted types in `Part.data`. A `Part` must have a fixed IANA MIME type identifying the type and subtype of the media if `inline_data` or `file_data` field is filled with raw bytes.
   */
  export interface Schema$Part {
    /**
     * Optional. URI based data.
     */
    fileData?: Schema$FileData;
    /**
     * Optional. A predicted [FunctionCall] returned from the model that contains a string representing the [FunctionDeclaration.name] with the parameters and their values.
     */
    functionCall?: Schema$FunctionCall;
    /**
     * Optional. The result output of a [FunctionCall] that contains a string representing the [FunctionDeclaration.name] and a structured JSON object containing any output from the function call. It is used as context to the model.
     */
    functionResponse?: Schema$FunctionResponse;
    /**
     * Optional. Inlined bytes data.
     */
    inlineData?: Schema$Blob;
    /**
     * Optional. Text part (can be code).
     */
    text?: string | null;
    /**
     * Optional. Video metadata. The metadata should only be specified while the video data is presented in inline_data or file_data.
     */
    videoMetadata?: Schema$VideoMetadata;
  }
  /**
   * Content filter results for a prompt sent in the request.
   */
  export interface Schema$PromptFeedback {
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
    safetyRatings?: Schema$SafetyRating[];
  }
  /**
   * The definition of the Rag resource.
   */
  export interface Schema$RagResource {
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
   * Defines a retrieval tool that model can call to access external knowledge.
   */
  export interface Schema$Retrieval {
    /**
     * Optional. Disable using the result from this tool in detecting grounding attribution. This does not affect how the result is given to the model for generation.
     */
    disableAttribution?: boolean | null;
    /**
     * Set to use data source powered by Vertex AI Search.
     */
    vertexAiSearch?: Schema$VertexAISearch;
    /**
     * Set to use data source powered by Vertex RAG store. User data is uploaded via the VertexRagDataService.
     */
    vertexRagStore?: Schema$VertexRagStore;
  }
  /**
   * Safety rating corresponding to the generated content.
   */
  export interface Schema$SafetyRating {
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
  export interface Schema$SafetySetting {
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
   * Schema is used to define the format of input/output data. Represents a select subset of an [OpenAPI 3.0 schema object](https://spec.openapis.org/oas/v3.0.3#schema). More fields may be added in the future as needed.
   */
  export interface Schema$Schema {
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
    items?: Schema$Schema;
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
    properties?: {[key: string]: Schema$Schema} | null;
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
  export interface Schema$SearchEntryPoint {
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
   * Tool details that the model may use to generate response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. A Tool object should contain exactly one type of Tool (e.g FunctionDeclaration, Retrieval or GoogleSearchRetrieval).
   */
  export interface Schema$Tool {
    /**
     * Optional. Function tool type. One or more function declarations to be passed to the model along with the current user query. Model may decide to call a subset of these functions by populating FunctionCall in the response. User should provide a FunctionResponse for each function call in the next turn. Based on the function responses, Model will generate the final response back to the user. Maximum 64 function declarations can be provided.
     */
    functionDeclarations?: Schema$FunctionDeclaration[];
    /**
     * Optional. Retrieval tool type. System will always execute the provided retrieval tool(s) to get external knowledge to answer the prompt. Retrieval results are presented to the model for generation.
     */
    retrieval?: Schema$Retrieval;
  }
  /**
   * Tool config. This config is shared for all tools provided in the request.
   */
  export interface Schema$ToolConfig {
    /**
     * Optional. Function calling config.
     */
    functionCallingConfig?: Schema$FunctionCallingConfig;
  }
  /**
   * Usage metadata about response(s).
   */
  export interface Schema$UsageMetadata {
    /**
     * Number of tokens in the response(s).
     */
    candidatesTokenCount?: number | null;
    /**
     * Number of tokens in the request.
     */
    promptTokenCount?: number | null;
    totalTokenCount?: number | null;
  }
  /**
   * Retrieve from Vertex AI Search datastore for grounding. See https://cloud.google.com/vertex-ai-search-and-conversation
   */
  export interface Schema$VertexAISearch {
    /**
     * Required. Fully-qualified Vertex AI Search's datastore resource ID. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{dataStore\}`
     */
    datastore?: string | null;
  }
  /**
   * Retrieve from Vertex RAG Store for grounding.
   */
  export interface Schema$VertexRagStore {
    /**
     * Optional. Deprecated. Please use rag_resources instead.
     */
    ragCorpora?: string[] | null;
    /**
     * Optional. The representation of the rag source. It can be used to specify corpus only or ragfiles. Currently only support one corpus or multiple files from one corpus. In the future we may open up multiple corpora support.
     */
    ragResources?: Schema$RagResource[];
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
   * Metadata describes the input video content.
   */
  export interface Schema$VideoMetadata {
    /**
     * Optional. The end offset of the video.
     */
    endOffset?: string | null;
    /**
     * Optional. The start offset of the video.
     */
    startOffset?: string | null;
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
    ): GaxiosPromise<Schema$CountTokensResponse>;
    countTokens(
      params: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    countTokens(
      params: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      options: MethodOptions | BodyResponseCallback<Schema$CountTokensResponse>,
      callback: BodyResponseCallback<Schema$CountTokensResponse>
    ): void;
    countTokens(
      params: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      callback: BodyResponseCallback<Schema$CountTokensResponse>
    ): void;
    countTokens(
      callback: BodyResponseCallback<Schema$CountTokensResponse>
    ): void;
    countTokens(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Publishers$Models$Counttokens
        | BodyResponseCallback<Schema$CountTokensResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CountTokensResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CountTokensResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CountTokensResponse>
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
        createAPIRequest<Schema$CountTokensResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CountTokensResponse>(parameters);
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
    ): GaxiosPromise<Schema$GenerateContentResponse>;
    generateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateContentResponse>,
      callback: BodyResponseCallback<Schema$GenerateContentResponse>
    ): void;
    generateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      callback: BodyResponseCallback<Schema$GenerateContentResponse>
    ): void;
    generateContent(
      callback: BodyResponseCallback<Schema$GenerateContentResponse>
    ): void;
    generateContent(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Publishers$Models$Generatecontent
        | BodyResponseCallback<Schema$GenerateContentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateContentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateContentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateContentResponse>
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
        createAPIRequest<Schema$GenerateContentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateContentResponse>(parameters);
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
    ): GaxiosPromise<Schema$GenerateContentResponse>;
    streamGenerateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    streamGenerateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateContentResponse>,
      callback: BodyResponseCallback<Schema$GenerateContentResponse>
    ): void;
    streamGenerateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      callback: BodyResponseCallback<Schema$GenerateContentResponse>
    ): void;
    streamGenerateContent(
      callback: BodyResponseCallback<Schema$GenerateContentResponse>
    ): void;
    streamGenerateContent(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent
        | BodyResponseCallback<Schema$GenerateContentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateContentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateContentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateContentResponse>
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
        createAPIRequest<Schema$GenerateContentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateContentResponse>(parameters);
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
    requestBody?: Schema$CountTokensRequest;
  }
  export interface Params$Resource$Projects$Locations$Publishers$Models$Generatecontent
    extends StandardParameters {
    /**
     * Required. The name of the publisher model requested to serve the prediction. Format: `projects/{project\}/locations/{location\}/publishers/x/models/x`
     */
    model?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateContentRequest;
  }
  export interface Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent
    extends StandardParameters {
    /**
     * Required. The name of the publisher model requested to serve the prediction. Format: `projects/{project\}/locations/{location\}/publishers/x/models/x`
     */
    model?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateContentRequest;
  }
}
