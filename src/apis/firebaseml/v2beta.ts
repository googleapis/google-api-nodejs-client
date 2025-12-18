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
   * The generic reusable api auth config. Deprecated. Please use AuthConfig (google/cloud/aiplatform/master/auth.proto) instead.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ApiAuth {
    /**
     * The API secret.
     */
    apiKeyConfig?: Schema$GoogleCloudAiplatformV1beta1ApiAuthApiKeyConfig;
  }
  /**
   * The API secret.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ApiAuthApiKeyConfig {
    /**
     * Required. The SecretManager secret version resource name storing API key. e.g. projects/{project\}/secrets/{secret\}/versions/{version\}
     */
    apiKeySecretVersion?: string | null;
    /**
     * The API key string. Either this or `api_key_secret_version` must be set.
     */
    apiKeyString?: string | null;
  }
  /**
   * Auth configuration to run the extension.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1AuthConfig {
    /**
     * Config for API key auth.
     */
    apiKeyConfig?: Schema$GoogleCloudAiplatformV1beta1AuthConfigApiKeyConfig;
    /**
     * Type of auth scheme.
     */
    authType?: string | null;
    /**
     * Config for Google Service Account auth.
     */
    googleServiceAccountConfig?: Schema$GoogleCloudAiplatformV1beta1AuthConfigGoogleServiceAccountConfig;
    /**
     * Config for HTTP Basic auth.
     */
    httpBasicAuthConfig?: Schema$GoogleCloudAiplatformV1beta1AuthConfigHttpBasicAuthConfig;
    /**
     * Config for user oauth.
     */
    oauthConfig?: Schema$GoogleCloudAiplatformV1beta1AuthConfigOauthConfig;
    /**
     * Config for user OIDC auth.
     */
    oidcConfig?: Schema$GoogleCloudAiplatformV1beta1AuthConfigOidcConfig;
  }
  /**
   * Config for authentication with API key.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1AuthConfigApiKeyConfig {
    /**
     * Optional. The name of the SecretManager secret version resource storing the API key. Format: `projects/{project\}/secrets/{secrete\}/versions/{version\}` - If both `api_key_secret` and `api_key_string` are specified, this field takes precedence over `api_key_string`. - If specified, the `secretmanager.versions.access` permission should be granted to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) on the specified resource.
     */
    apiKeySecret?: string | null;
    /**
     * Optional. The API key to be used in the request directly.
     */
    apiKeyString?: string | null;
    /**
     * Optional. The location of the API key.
     */
    httpElementLocation?: string | null;
    /**
     * Optional. The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.
     */
    name?: string | null;
  }
  /**
   * Config for Google Service Account Authentication.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1AuthConfigGoogleServiceAccountConfig {
    /**
     * Optional. The service account that the extension execution service runs as. - If the service account is specified, the `iam.serviceAccounts.getAccessToken` permission should be granted to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) on the specified service account. - If not specified, the Vertex AI Extension Service Agent will be used to execute the Extension.
     */
    serviceAccount?: string | null;
  }
  /**
   * Config for HTTP Basic Authentication.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1AuthConfigHttpBasicAuthConfig {
    /**
     * Required. The name of the SecretManager secret version resource storing the base64 encoded credentials. Format: `projects/{project\}/secrets/{secrete\}/versions/{version\}` - If specified, the `secretmanager.versions.access` permission should be granted to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) on the specified resource.
     */
    credentialSecret?: string | null;
  }
  /**
   * Config for user oauth.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1AuthConfigOauthConfig {
    /**
     * Access token for extension endpoint. Only used to propagate token from [[ExecuteExtensionRequest.runtime_auth_config]] at request time.
     */
    accessToken?: string | null;
    /**
     * The service account used to generate access tokens for executing the Extension. - If the service account is specified, the `iam.serviceAccounts.getAccessToken` permission should be granted to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) on the provided service account.
     */
    serviceAccount?: string | null;
  }
  /**
   * Config for user OIDC auth.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1AuthConfigOidcConfig {
    /**
     * OpenID Connect formatted ID token for extension endpoint. Only used to propagate token from [[ExecuteExtensionRequest.runtime_auth_config]] at request time.
     */
    idToken?: string | null;
    /**
     * The service account used to generate an OpenID Connect (OIDC)-compatible JWT token signed by the Google OIDC Provider (accounts.google.com) for extension endpoint (https://cloud.google.com/iam/docs/create-short-lived-credentials-direct#sa-credentials-oidc). - The audience for the token will be set to the URL in the server url defined in the OpenApi spec. - If the service account is provided, the service account should grant `iam.serviceAccounts.getOpenIdToken` permission to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents).
     */
    serviceAccount?: string | null;
  }
  /**
   * A content blob. A Blob contains data of a specific media type. It is used to represent images, audio, and video.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Blob {
    /**
     * Required. The raw bytes of the data.
     */
    data?: string | null;
    /**
     * Optional. The display name of the blob. Used to provide a label or filename to distinguish blobs. This field is only returned in `PromptMessage` for prompt management. It is used in the Gemini calls only when server-side tools (`code_execution`, `google_search`, and `url_context`) are enabled.
     */
    displayName?: string | null;
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
     * Output only. The average log probability of the tokens in this candidate. This is a length-normalized score that can be used to compare the quality of candidates of different lengths. A higher average log probability suggests a more confident and coherent response.
     */
    avgLogprobs?: number | null;
    /**
     * Output only. A collection of citations that apply to the generated content.
     */
    citationMetadata?: Schema$GoogleCloudAiplatformV1beta1CitationMetadata;
    /**
     * Output only. The content of the candidate.
     */
    content?: Schema$GoogleCloudAiplatformV1beta1Content;
    /**
     * Output only. Describes the reason the model stopped generating tokens in more detail. This field is returned only when `finish_reason` is set.
     */
    finishMessage?: string | null;
    /**
     * Output only. The reason why the model stopped generating tokens. If empty, the model has not stopped generating.
     */
    finishReason?: string | null;
    /**
     * Output only. Metadata returned when grounding is enabled. It contains the sources used to ground the generated content.
     */
    groundingMetadata?: Schema$GoogleCloudAiplatformV1beta1GroundingMetadata;
    /**
     * Output only. The 0-based index of this candidate in the list of generated responses. This is useful for distinguishing between multiple candidates when `candidate_count` \> 1.
     */
    index?: number | null;
    /**
     * Output only. The detailed log probability information for the tokens in this candidate. This is useful for debugging, understanding model uncertainty, and identifying potential "hallucinations".
     */
    logprobsResult?: Schema$GoogleCloudAiplatformV1beta1LogprobsResult;
    /**
     * Output only. A list of ratings for the safety of a response candidate. There is at most one rating per category.
     */
    safetyRatings?: Schema$GoogleCloudAiplatformV1beta1SafetyRating[];
    /**
     * Output only. Metadata returned when the model uses the `url_context` tool to get information from a user-provided URL.
     */
    urlContextMetadata?: Schema$GoogleCloudAiplatformV1beta1UrlContextMetadata;
  }
  /**
   * A citation for a piece of generatedcontent.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Citation {
    /**
     * Output only. The end index of the citation in the content.
     */
    endIndex?: number | null;
    /**
     * Output only. The license of the source of the citation.
     */
    license?: string | null;
    /**
     * Output only. The publication date of the source of the citation.
     */
    publicationDate?: Schema$Date;
    /**
     * Output only. The start index of the citation in the content.
     */
    startIndex?: number | null;
    /**
     * Output only. The title of the source of the citation.
     */
    title?: string | null;
    /**
     * Output only. The URI of the source of the citation.
     */
    uri?: string | null;
  }
  /**
   * A collection of citations that apply to a piece of generated content.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1CitationMetadata {
    /**
     * Output only. A list of citations for the content.
     */
    citations?: Schema$GoogleCloudAiplatformV1beta1Citation[];
  }
  /**
   * Result of executing the [ExecutableCode]. Only generated when using the [CodeExecution] tool, and always follows a `part` containing the [ExecutableCode].
   */
  export interface Schema$GoogleCloudAiplatformV1beta1CodeExecutionResult {
    /**
     * Required. Outcome of the code execution.
     */
    outcome?: string | null;
    /**
     * Optional. Contains stdout when code execution is successful, stderr or other description otherwise.
     */
    output?: string | null;
  }
  /**
   * The structured data content of a message. A Content message contains a `role` field, which indicates the producer of the content, and a `parts` field, which contains the multi-part data of the message.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Content {
    /**
     * Required. A list of Part objects that make up a single message. Parts of a message can have different MIME types. A Content message must have at least one Part.
     */
    parts?: Schema$GoogleCloudAiplatformV1beta1Part[];
    /**
     * Optional. The producer of the content. Must be either 'user' or 'model'. If not set, the service will default to 'user'.
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
     * Optional. Generation config that the model will use to generate the response.
     */
    generationConfig?: Schema$GoogleCloudAiplatformV1beta1GenerationConfig;
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
     * Output only. List of modalities that were processed in the request input.
     */
    promptTokensDetails?: Schema$GoogleCloudAiplatformV1beta1ModalityTokenCount[];
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
   * Describes the options to customize dynamic retrieval.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1DynamicRetrievalConfig {
    /**
     * Optional. The threshold to be used in dynamic retrieval. If not set, a system default value is used.
     */
    dynamicThreshold?: number | null;
    /**
     * The mode of the predictor to be used in dynamic retrieval.
     */
    mode?: string | null;
  }
  /**
   * Tool to search public web data, powered by Vertex AI Search and Sec4 compliance.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1EnterpriseWebSearch {
    /**
     * Optional. Sites with confidence level chosen & above this value will be blocked from the search results.
     */
    blockingConfidence?: string | null;
    /**
     * Optional. List of domains to be excluded from the search results. The default limit is 2000 domains.
     */
    excludeDomains?: string[] | null;
  }
  /**
   * Code generated by the model that is meant to be executed, and the result returned to the model. Generated when using the [CodeExecution] tool, in which the code will be automatically executed, and a corresponding [CodeExecutionResult] will also be generated.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ExecutableCode {
    /**
     * Required. The code to be executed.
     */
    code?: string | null;
    /**
     * Required. Programming language of the `code`.
     */
    language?: string | null;
  }
  /**
   * Retrieve from data source powered by external API for grounding. The external API is not owned by Google, but need to follow the pre-defined API spec.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ExternalApi {
    /**
     * The authentication config to access the API. Deprecated. Please use auth_config instead.
     */
    apiAuth?: Schema$GoogleCloudAiplatformV1beta1ApiAuth;
    /**
     * The API spec that the external API implements.
     */
    apiSpec?: string | null;
    /**
     * The authentication config to access the API.
     */
    authConfig?: Schema$GoogleCloudAiplatformV1beta1AuthConfig;
    /**
     * Parameters for the elastic search API.
     */
    elasticSearchParams?: Schema$GoogleCloudAiplatformV1beta1ExternalApiElasticSearchParams;
    /**
     * The endpoint of the external API. The system will call the API at this endpoint to retrieve the data for grounding. Example: https://acme.com:443/search
     */
    endpoint?: string | null;
    /**
     * Parameters for the simple search API.
     */
    simpleSearchParams?: Schema$GoogleCloudAiplatformV1beta1ExternalApiSimpleSearchParams;
  }
  /**
   * The search parameters to use for the ELASTIC_SEARCH spec.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ExternalApiElasticSearchParams {
    /**
     * The ElasticSearch index to use.
     */
    index?: string | null;
    /**
     * Optional. Number of hits (chunks) to request. When specified, it is passed to Elasticsearch as the `num_hits` param.
     */
    numHits?: number | null;
    /**
     * The ElasticSearch search template to use.
     */
    searchTemplate?: string | null;
  }
  /**
   * The search parameters to use for SIMPLE_SEARCH spec.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ExternalApiSimpleSearchParams {}
  /**
   * URI-based data. A FileData message contains a URI pointing to data of a specific media type. It is used to represent images, audio, and video stored in Google Cloud Storage.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FileData {
    /**
     * Optional. The display name of the file. Used to provide a label or filename to distinguish files. This field is only returned in `PromptMessage` for prompt management. It is used in the Gemini calls only when server side tools (`code_execution`, `google_search`, and `url_context`) are enabled.
     */
    displayName?: string | null;
    /**
     * Required. The URI of the file in Google Cloud Storage.
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
     * Optional. The function parameters and values in JSON object format. See [FunctionDeclaration.parameters] for parameter details.
     */
    args?: {[key: string]: any} | null;
    /**
     * Optional. The unique id of the function call. If populated, the client to execute the `function_call` and return the response with the matching `id`.
     */
    id?: string | null;
    /**
     * Optional. The name of the function to call. Matches [FunctionDeclaration.name].
     */
    name?: string | null;
    /**
     * Optional. The partial argument value of the function call. If provided, represents the arguments/fields that are streamed incrementally.
     */
    partialArgs?: Schema$GoogleCloudAiplatformV1beta1PartialArg[];
    /**
     * Optional. Whether this is the last part of the FunctionCall. If true, another partial message for the current FunctionCall is expected to follow.
     */
    willContinue?: boolean | null;
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
    /**
     * Optional. When set to true, arguments of a single function call will be streamed out in multiple parts/contents/responses. Partial parameter results will be returned in the [FunctionCall.partial_args] field.
     */
    streamFunctionCallArguments?: boolean | null;
  }
  /**
   * Structured representation of a function declaration as defined by the [OpenAPI 3.0 specification](https://spec.openapis.org/oas/v3.0.3). Included in this declaration are the function name, description, parameters and response type. This FunctionDeclaration is a representation of a block of code that can be used as a `Tool` by the model and executed by the client.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionDeclaration {
    /**
     * Optional. Description and purpose of the function. Model uses it to decide how and whether to call the function.
     */
    description?: string | null;
    /**
     * Required. The name of the function to call. Must start with a letter or an underscore. Must be a-z, A-Z, 0-9, or contain underscores, dots, colons and dashes, with a maximum length of 64.
     */
    name?: string | null;
    /**
     * Optional. Describes the parameters to this function in JSON Schema Object format. Reflects the Open API 3.03 Parameter Object. string Key: the name of the parameter. Parameter names are case sensitive. Schema Value: the Schema defining the type used for the parameter. For function with no parameters, this can be left unset. Parameter names must start with a letter or an underscore and must only contain chars a-z, A-Z, 0-9, or underscores with a maximum length of 64. Example with 1 required and 1 optional parameter: type: OBJECT properties: param1: type: STRING param2: type: INTEGER required: - param1
     */
    parameters?: Schema$GoogleCloudAiplatformV1beta1Schema;
    /**
     * Optional. Describes the parameters to the function in JSON Schema format. The schema must describe an object where the properties are the parameters to the function. For example: ``` { "type": "object", "properties": { "name": { "type": "string" \}, "age": { "type": "integer" \} \}, "additionalProperties": false, "required": ["name", "age"], "propertyOrdering": ["name", "age"] \} ``` This field is mutually exclusive with `parameters`.
     */
    parametersJsonSchema?: any | null;
    /**
     * Optional. Describes the output from this function in JSON Schema format. Reflects the Open API 3.03 Response Object. The Schema defines the type used for the response value of the function.
     */
    response?: Schema$GoogleCloudAiplatformV1beta1Schema;
    /**
     * Optional. Describes the output from this function in JSON Schema format. The value specified by the schema is the response value of the function. This field is mutually exclusive with `response`.
     */
    responseJsonSchema?: any | null;
  }
  /**
   * The result output from a [FunctionCall] that contains a string representing the [FunctionDeclaration.name] and a structured JSON object containing any output from the function is used as context to the model. This should contain the result of a [FunctionCall] made based on model prediction.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionResponse {
    /**
     * Optional. The id of the function call this response is for. Populated by the client to match the corresponding function call `id`.
     */
    id?: string | null;
    /**
     * Required. The name of the function to call. Matches [FunctionDeclaration.name] and [FunctionCall.name].
     */
    name?: string | null;
    /**
     * Optional. Ordered `Parts` that constitute a function response. Parts may have different IANA MIME types.
     */
    parts?: Schema$GoogleCloudAiplatformV1beta1FunctionResponsePart[];
    /**
     * Required. The function response in JSON object format. Use "output" key to specify function output and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as function output.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Raw media bytes for function response. Text should not be sent as raw bytes, use the 'text' field.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionResponseBlob {
    /**
     * Required. Raw bytes.
     */
    data?: string | null;
    /**
     * Optional. Display name of the blob. Used to provide a label or filename to distinguish blobs. This field is only returned in PromptMessage for prompt management. It is currently used in the Gemini GenerateContent calls only when server side tools (code_execution, google_search, and url_context) are enabled.
     */
    displayName?: string | null;
    /**
     * Required. The IANA standard MIME type of the source data.
     */
    mimeType?: string | null;
  }
  /**
   * URI based data for function response.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionResponseFileData {
    /**
     * Optional. Display name of the file data. Used to provide a label or filename to distinguish file datas. This field is only returned in PromptMessage for prompt management. It is currently used in the Gemini GenerateContent calls only when server side tools (code_execution, google_search, and url_context) are enabled.
     */
    displayName?: string | null;
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
   * A datatype containing media that is part of a `FunctionResponse` message. A `FunctionResponsePart` consists of data which has an associated datatype. A `FunctionResponsePart` can only contain one of the accepted types in `FunctionResponsePart.data`. A `FunctionResponsePart` must have a fixed IANA MIME type identifying the type and subtype of the media if the `inline_data` field is filled with raw bytes.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1FunctionResponsePart {
    /**
     * URI based data.
     */
    fileData?: Schema$GoogleCloudAiplatformV1beta1FunctionResponseFileData;
    /**
     * Inline media bytes.
     */
    inlineData?: Schema$GoogleCloudAiplatformV1beta1FunctionResponseBlob;
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
     * Optional. The labels with user-defined metadata for the request. It is used for billing and reporting only. Label keys and values can be no longer than 63 characters (Unicode codepoints) and can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Settings for prompt and response sanitization using the Model Armor service. If supplied, safety_settings must not be supplied.
     */
    modelArmorConfig?: Schema$GoogleCloudAiplatformV1beta1ModelArmorConfig;
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
     * Output only. Timestamp when the request is made to the server.
     */
    createTime?: string | null;
    /**
     * Output only. The model version used to generate the response.
     */
    modelVersion?: string | null;
    /**
     * Output only. Content filter results for a prompt sent in the request. Note: Sent only in the first stream chunk. Only happens when no candidates were generated due to content violations.
     */
    promptFeedback?: Schema$GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback;
    /**
     * Output only. response_id is used to identify each response. It is the encoding of the event_id.
     */
    responseId?: string | null;
    /**
     * Usage metadata about the response(s).
     */
    usageMetadata?: Schema$GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata;
  }
  /**
   * Content filter results for a prompt sent in the request. Note: This is sent only in the first stream chunk and only if no candidates were generated due to content violations.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback {
    /**
     * Output only. The reason why the prompt was blocked.
     */
    blockReason?: string | null;
    /**
     * Output only. A readable message that explains the reason why the prompt was blocked.
     */
    blockReasonMessage?: string | null;
    /**
     * Output only. A list of safety ratings for the prompt. There is one rating per category.
     */
    safetyRatings?: Schema$GoogleCloudAiplatformV1beta1SafetyRating[];
  }
  /**
   * Usage metadata about the content generation request and response. This message provides a detailed breakdown of token usage and other relevant metrics.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata {
    /**
     * Output only. The number of tokens in the cached content that was used for this request.
     */
    cachedContentTokenCount?: number | null;
    /**
     * Output only. A detailed breakdown of the token count for each modality in the cached content.
     */
    cacheTokensDetails?: Schema$GoogleCloudAiplatformV1beta1ModalityTokenCount[];
    /**
     * The total number of tokens in the generated candidates.
     */
    candidatesTokenCount?: number | null;
    /**
     * Output only. A detailed breakdown of the token count for each modality in the generated candidates.
     */
    candidatesTokensDetails?: Schema$GoogleCloudAiplatformV1beta1ModalityTokenCount[];
    /**
     * The total number of tokens in the prompt. This includes any text, images, or other media provided in the request. When `cached_content` is set, this also includes the number of tokens in the cached content.
     */
    promptTokenCount?: number | null;
    /**
     * Output only. A detailed breakdown of the token count for each modality in the prompt.
     */
    promptTokensDetails?: Schema$GoogleCloudAiplatformV1beta1ModalityTokenCount[];
    /**
     * Output only. The number of tokens that were part of the model's generated "thoughts" output, if applicable.
     */
    thoughtsTokenCount?: number | null;
    /**
     * Output only. The number of tokens in the results from tool executions, which are provided back to the model as input, if applicable.
     */
    toolUsePromptTokenCount?: number | null;
    /**
     * Output only. A detailed breakdown by modality of the token counts from the results of tool executions, which are provided back to the model as input.
     */
    toolUsePromptTokensDetails?: Schema$GoogleCloudAiplatformV1beta1ModalityTokenCount[];
    /**
     * The total number of tokens for the entire request. This is the sum of `prompt_token_count`, `candidates_token_count`, `tool_use_prompt_token_count`, and `thoughts_token_count`.
     */
    totalTokenCount?: number | null;
    /**
     * Output only. The traffic type for this request.
     */
    trafficType?: string | null;
  }
  /**
   * Configuration for content generation. This message contains all the parameters that control how the model generates content. It allows you to influence the randomness, length, and structure of the output.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfig {
    /**
     * Optional. If enabled, audio timestamps will be included in the request to the model. This can be useful for synchronizing audio with other modalities in the response.
     */
    audioTimestamp?: boolean | null;
    /**
     * Optional. The number of candidate responses to generate. A higher `candidate_count` can provide more options to choose from, but it also consumes more resources. This can be useful for generating a variety of responses and selecting the best one.
     */
    candidateCount?: number | null;
    /**
     * Optional. If enabled, the model will detect emotions and adapt its responses accordingly. For example, if the model detects that the user is frustrated, it may provide a more empathetic response.
     */
    enableAffectiveDialog?: boolean | null;
    /**
     * Optional. Penalizes tokens based on their frequency in the generated text. A positive value helps to reduce the repetition of words and phrases. Valid values can range from [-2.0, 2.0].
     */
    frequencyPenalty?: number | null;
    /**
     * Optional. Config for image generation features.
     */
    imageConfig?: Schema$GoogleCloudAiplatformV1beta1ImageConfig;
    /**
     * Optional. The number of top log probabilities to return for each token. This can be used to see which other tokens were considered likely candidates for a given position. A higher value will return more options, but it will also increase the size of the response.
     */
    logprobs?: number | null;
    /**
     * Optional. The maximum number of tokens to generate in the response. A token is approximately four characters. The default value varies by model. This parameter can be used to control the length of the generated text and prevent overly long responses.
     */
    maxOutputTokens?: number | null;
    /**
     * Optional. The token resolution at which input media content is sampled. This is used to control the trade-off between the quality of the response and the number of tokens used to represent the media. A higher resolution allows the model to perceive more detail, which can lead to a more nuanced response, but it will also use more tokens. This does not affect the image dimensions sent to the model.
     */
    mediaResolution?: string | null;
    /**
     * Optional. Config for model selection.
     */
    modelConfig?: Schema$GoogleCloudAiplatformV1beta1GenerationConfigModelConfig;
    /**
     * Optional. Penalizes tokens that have already appeared in the generated text. A positive value encourages the model to generate more diverse and less repetitive text. Valid values can range from [-2.0, 2.0].
     */
    presencePenalty?: number | null;
    /**
     * Optional. When this field is set, response_schema must be omitted and response_mime_type must be set to `application/json`.
     */
    responseJsonSchema?: any | null;
    /**
     * Optional. If set to true, the log probabilities of the output tokens are returned. Log probabilities are the logarithm of the probability of a token appearing in the output. A higher log probability means the token is more likely to be generated. This can be useful for analyzing the model's confidence in its own output and for debugging.
     */
    responseLogprobs?: boolean | null;
    /**
     * Optional. The IANA standard MIME type of the response. The model will generate output that conforms to this MIME type. Supported values include 'text/plain' (default) and 'application/json'. The model needs to be prompted to output the appropriate response type, otherwise the behavior is undefined. This is a preview feature.
     */
    responseMimeType?: string | null;
    /**
     * Optional. The modalities of the response. The model will generate a response that includes all the specified modalities. For example, if this is set to `[TEXT, IMAGE]`, the response will include both text and an image.
     */
    responseModalities?: string[] | null;
    /**
     * Optional. Lets you to specify a schema for the model's response, ensuring that the output conforms to a particular structure. This is useful for generating structured data such as JSON. The schema is a subset of the [OpenAPI 3.0 schema object](https://spec.openapis.org/oas/v3.0.3#schema) object. When this field is set, you must also set the `response_mime_type` to `application/json`.
     */
    responseSchema?: Schema$GoogleCloudAiplatformV1beta1Schema;
    /**
     * Optional. Routing configuration.
     */
    routingConfig?: Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig;
    /**
     * Optional. A seed for the random number generator. By setting a seed, you can make the model's output mostly deterministic. For a given prompt and parameters (like temperature, top_p, etc.), the model will produce the same response every time. However, it's not a guaranteed absolute deterministic behavior. This is different from parameters like `temperature`, which control the *level* of randomness. `seed` ensures that the "random" choices the model makes are the same on every run, making it essential for testing and ensuring reproducible results.
     */
    seed?: number | null;
    /**
     * Optional. The speech generation config.
     */
    speechConfig?: Schema$GoogleCloudAiplatformV1beta1SpeechConfig;
    /**
     * Optional. A list of character sequences that will stop the model from generating further tokens. If a stop sequence is generated, the output will end at that point. This is useful for controlling the length and structure of the output. For example, you can use ["\n", "###"] to stop generation at a new line or a specific marker.
     */
    stopSequences?: string[] | null;
    /**
     * Optional. Controls the randomness of the output. A higher temperature results in more creative and diverse responses, while a lower temperature makes the output more predictable and focused. The valid range is (0.0, 2.0].
     */
    temperature?: number | null;
    /**
     * Optional. Configuration for thinking features. An error will be returned if this field is set for models that don't support thinking.
     */
    thinkingConfig?: Schema$GoogleCloudAiplatformV1beta1GenerationConfigThinkingConfig;
    /**
     * Optional. Specifies the top-k sampling threshold. The model considers only the top k most probable tokens for the next token. This can be useful for generating more coherent and less random text. For example, a `top_k` of 40 means the model will choose the next word from the 40 most likely words.
     */
    topK?: number | null;
    /**
     * Optional. Specifies the nucleus sampling threshold. The model considers only the smallest set of tokens whose cumulative probability is at least `top_p`. This helps generate more diverse and less repetitive responses. For example, a `top_p` of 0.9 means the model considers tokens until the cumulative probability of the tokens to select from reaches 0.9. It's recommended to adjust either temperature or `top_p`, but not both.
     */
    topP?: number | null;
  }
  /**
   * Config for model selection.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfigModelConfig {
    /**
     * Required. Feature selection preference.
     */
    featureSelectionPreference?: string | null;
  }
  /**
   * The configuration for routing the request to a specific model. This can be used to control which model is used for the generation, either automatically or by specifying a model name.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig {
    /**
     * In this mode, the model is selected automatically based on the content of the request.
     */
    autoMode?: Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode;
    /**
     * In this mode, the model is specified manually.
     */
    manualMode?: Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode;
  }
  /**
   * The configuration for automated routing. When automated routing is specified, the routing will be determined by the pretrained routing model and customer provided model routing preference.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode {
    /**
     * The model routing preference.
     */
    modelRoutingPreference?: string | null;
  }
  /**
   * The configuration for manual routing. When manual routing is specified, the model will be selected based on the model name provided.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode {
    /**
     * The name of the model to use. Only public LLM models are accepted.
     */
    modelName?: string | null;
  }
  /**
   * Configuration for the model's thinking features. "Thinking" is a process where the model breaks down a complex task into smaller, manageable steps. This allows the model to reason about the task, plan its approach, and execute the plan to generate a high-quality response.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GenerationConfigThinkingConfig {
    /**
     * Optional. If true, the model will include its thoughts in the response. "Thoughts" are the intermediate steps the model takes to arrive at the final response. They can provide insights into the model's reasoning process and help with debugging. If this is true, thoughts are returned only when available.
     */
    includeThoughts?: boolean | null;
    /**
     * Optional. The token budget for the model's thinking process. The model will make a best effort to stay within this budget. This can be used to control the trade-off between response quality and latency.
     */
    thinkingBudget?: number | null;
    /**
     * Optional. The number of thoughts tokens that the model should generate.
     */
    thinkingLevel?: string | null;
  }
  /**
   * Tool to retrieve public maps data for grounding, powered by Google.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GoogleMaps {
    /**
     * Optional. If true, include the widget context token in the response.
     */
    enableWidget?: boolean | null;
  }
  /**
   * Tool to retrieve public web data for grounding, powered by Google.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GoogleSearchRetrieval {
    /**
     * Specifies the dynamic retrieval configuration for the given source.
     */
    dynamicRetrievalConfig?: Schema$GoogleCloudAiplatformV1beta1DynamicRetrievalConfig;
  }
  /**
   * A piece of evidence that supports a claim made by the model. This is used to show a citation for a claim made by the model. When grounding is enabled, the model returns a `GroundingChunk` that contains a reference to the source of the information.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunk {
    /**
     * A grounding chunk from Google Maps. See the `Maps` message for details.
     */
    maps?: Schema$GoogleCloudAiplatformV1beta1GroundingChunkMaps;
    /**
     * A grounding chunk from a data source retrieved by a retrieval tool, such as Vertex AI Search. See the `RetrievedContext` message for details
     */
    retrievedContext?: Schema$GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext;
    /**
     * A grounding chunk from a web page, typically from Google Search. See the `Web` message for details.
     */
    web?: Schema$GoogleCloudAiplatformV1beta1GroundingChunkWeb;
  }
  /**
   * A `Maps` chunk is a piece of evidence that comes from Google Maps. It contains information about a place, such as its name, address, and reviews. This is used to provide the user with rich, location-based information.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunkMaps {
    /**
     * The sources that were used to generate the place answer. This includes review snippets and photos that were used to generate the answer, as well as URIs to flag content.
     */
    placeAnswerSources?: Schema$GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSources;
    /**
     * This Place's resource name, in `places/{place_id\}` format. This can be used to look up the place in the Google Maps API.
     */
    placeId?: string | null;
    /**
     * The text of the place answer.
     */
    text?: string | null;
    /**
     * The title of the place.
     */
    title?: string | null;
    /**
     * The URI of the place.
     */
    uri?: string | null;
  }
  /**
   * The sources that were used to generate the place answer. This includes review snippets and photos that were used to generate the answer, as well as URIs to flag content.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSources {
    /**
     * Snippets of reviews that were used to generate the answer.
     */
    reviewSnippets?: Schema$GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSourcesReviewSnippet[];
  }
  /**
   * A review snippet that is used to generate the answer.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSourcesReviewSnippet {
    /**
     * A link to show the review on Google Maps.
     */
    googleMapsUri?: string | null;
    /**
     * The ID of the review that is being referenced.
     */
    reviewId?: string | null;
    /**
     * The title of the review.
     */
    title?: string | null;
  }
  /**
   * Context retrieved from a data source to ground the model's response. This is used when a retrieval tool fetches information from a user-provided corpus or a public dataset.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext {
    /**
     * Output only. The full resource name of the referenced Vertex AI Search document. This is used to identify the specific document that was retrieved. The format is `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`.
     */
    documentName?: string | null;
    /**
     * Additional context for a Retrieval-Augmented Generation (RAG) retrieval result. This is populated only when the RAG retrieval tool is used.
     */
    ragChunk?: Schema$GoogleCloudAiplatformV1beta1RagChunk;
    /**
     * The content of the retrieved data source.
     */
    text?: string | null;
    /**
     * The title of the retrieved data source.
     */
    title?: string | null;
    /**
     * The URI of the retrieved data source.
     */
    uri?: string | null;
  }
  /**
   * A `Web` chunk is a piece of evidence that comes from a web page. It contains the URI of the web page, the title of the page, and the domain of the page. This is used to provide the user with a link to the source of the information.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingChunkWeb {
    /**
     * The domain of the web page that contains the evidence. This can be used to filter out low-quality sources.
     */
    domain?: string | null;
    /**
     * The title of the web page that contains the evidence.
     */
    title?: string | null;
    /**
     * The URI of the web page that contains the evidence.
     */
    uri?: string | null;
  }
  /**
   * Information about the sources that support the content of a response. When grounding is enabled, the model returns citations for claims in the response. This object contains the retrieved sources.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingMetadata {
    /**
     * Optional. Output only. A token that can be used to render a Google Maps widget with the contextual data. This field is populated only when the grounding source is Google Maps.
     */
    googleMapsWidgetContextToken?: string | null;
    /**
     * A list of supporting references retrieved from the grounding source. This field is populated when the grounding source is Google Search, Vertex AI Search, or Google Maps.
     */
    groundingChunks?: Schema$GoogleCloudAiplatformV1beta1GroundingChunk[];
    /**
     * Optional. A list of grounding supports that connect the generated content to the grounding chunks. This field is populated when the grounding source is Google Search or Vertex AI Search.
     */
    groundingSupports?: Schema$GoogleCloudAiplatformV1beta1GroundingSupport[];
    /**
     * Optional. Output only. Metadata related to the retrieval grounding source.
     */
    retrievalMetadata?: Schema$GoogleCloudAiplatformV1beta1RetrievalMetadata;
    /**
     * Optional. The queries that were executed by the retrieval tools. This field is populated only when the grounding source is a retrieval tool, such as Vertex AI Search.
     */
    retrievalQueries?: string[] | null;
    /**
     * Optional. A web search entry point that can be used to display search results. This field is populated only when the grounding source is Google Search.
     */
    searchEntryPoint?: Schema$GoogleCloudAiplatformV1beta1SearchEntryPoint;
    /**
     * Optional. Output only. A list of URIs that can be used to flag a place or review for inappropriate content. This field is populated only when the grounding source is Google Maps.
     */
    sourceFlaggingUris?: Schema$GoogleCloudAiplatformV1beta1GroundingMetadataSourceFlaggingUri[];
    /**
     * Optional. The web search queries that were used to generate the content. This field is populated only when the grounding source is Google Search.
     */
    webSearchQueries?: string[] | null;
  }
  /**
   * A URI that can be used to flag a place or review for inappropriate content. This is populated only when the grounding source is Google Maps.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingMetadataSourceFlaggingUri {
    /**
     * The URI that can be used to flag the content.
     */
    flagContentUri?: string | null;
    /**
     * The ID of the place or review.
     */
    sourceId?: string | null;
  }
  /**
   * A collection of supporting references for a segment of the model's response.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1GroundingSupport {
    /**
     * The confidence scores for the support references. This list is parallel to the `grounding_chunk_indices` list. A score is a value between 0.0 and 1.0, with a higher score indicating a higher confidence that the reference supports the claim. For Gemini 2.0 and before, this list has the same size as `grounding_chunk_indices`. For Gemini 2.5 and later, this list is empty and should be ignored.
     */
    confidenceScores?: number[] | null;
    /**
     * A list of indices into the `grounding_chunks` field of the `GroundingMetadata` message. These indices specify which grounding chunks support the claim made in the content segment. For example, if this field has the values `[1, 3]`, it means that `grounding_chunks[1]` and `grounding_chunks[3]` are the sources for the claim in the content segment.
     */
    groundingChunkIndices?: number[] | null;
    /**
     * The content segment that this support message applies to.
     */
    segment?: Schema$GoogleCloudAiplatformV1beta1Segment;
  }
  /**
   * Configuration for image generation. This message allows you to control various aspects of image generation, such as the output format, aspect ratio, and whether the model can generate images of people.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ImageConfig {
    /**
     * Optional. The desired aspect ratio for the generated images. The following aspect ratios are supported: "1:1" "2:3", "3:2" "3:4", "4:3" "4:5", "5:4" "9:16", "16:9" "21:9"
     */
    aspectRatio?: string | null;
    /**
     * Optional. The image output format for generated images.
     */
    imageOutputOptions?: Schema$GoogleCloudAiplatformV1beta1ImageConfigImageOutputOptions;
    /**
     * Optional. Specifies the size of generated images. Supported values are `1K`, `2K`, `4K`. If not specified, the model will use default value `1K`.
     */
    imageSize?: string | null;
    /**
     * Optional. Controls whether the model can generate people.
     */
    personGeneration?: string | null;
  }
  /**
   * The image output format for generated images.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ImageConfigImageOutputOptions {
    /**
     * Optional. The compression quality of the output image.
     */
    compressionQuality?: number | null;
    /**
     * Optional. The image format that the output should be saved as.
     */
    mimeType?: string | null;
  }
  /**
   * The log probabilities of the tokens generated by the model. This is useful for understanding the model's confidence in its predictions and for debugging. For example, you can use log probabilities to identify when the model is making a less confident prediction or to explore alternative responses that the model considered. A low log probability can also indicate that the model is "hallucinating" or generating factually incorrect information.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1LogprobsResult {
    /**
     * A list of the chosen candidate tokens at each decoding step. The length of this list is equal to the total number of decoding steps. Note that the chosen candidate might not be in `top_candidates`.
     */
    chosenCandidates?: Schema$GoogleCloudAiplatformV1beta1LogprobsResultCandidate[];
    /**
     * A list of the top candidate tokens at each decoding step. The length of this list is equal to the total number of decoding steps.
     */
    topCandidates?: Schema$GoogleCloudAiplatformV1beta1LogprobsResultTopCandidates[];
  }
  /**
   * A single token and its associated log probability.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1LogprobsResultCandidate {
    /**
     * The log probability of this token. A higher value indicates that the model was more confident in this token. The log probability can be used to assess the relative likelihood of different tokens and to identify when the model is uncertain.
     */
    logProbability?: number | null;
    /**
     * The token's string representation.
     */
    token?: string | null;
    /**
     * The token's numerical ID. While the `token` field provides the string representation of the token, the `token_id` is the numerical representation that the model uses internally. This can be useful for developers who want to build custom logic based on the model's vocabulary.
     */
    tokenId?: number | null;
  }
  /**
   * A list of the top candidate tokens and their log probabilities at each decoding step. This can be used to see what other tokens the model considered.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1LogprobsResultTopCandidates {
    /**
     * The list of candidate tokens, sorted by log probability in descending order.
     */
    candidates?: Schema$GoogleCloudAiplatformV1beta1LogprobsResultCandidate[];
  }
  /**
   * Represents a breakdown of token usage by modality. This message is used in CountTokensResponse and GenerateContentResponse.UsageMetadata to provide a detailed view of how many tokens are used by each modality (e.g., text, image, video) in a request. This is particularly useful for multimodal models, allowing you to track and manage token consumption for billing and quota purposes.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ModalityTokenCount {
    /**
     * The modality that this token count applies to.
     */
    modality?: string | null;
    /**
     * The number of tokens counted for this modality.
     */
    tokenCount?: number | null;
  }
  /**
   * Configuration for Model Armor. Model Armor is a Google Cloud service that provides safety and security filtering for prompts and responses. It helps protect your AI applications from risks such as harmful content, sensitive data leakage, and prompt injection attacks.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ModelArmorConfig {
    /**
     * Optional. The resource name of the Model Armor template to use for prompt screening. A Model Armor template is a set of customized filters and thresholds that define how Model Armor screens content. If specified, Model Armor will use this template to check the user's prompt for safety and security risks before it is sent to the model. The name must be in the format `projects/{project\}/locations/{location\}/templates/{template\}`.
     */
    promptTemplateName?: string | null;
    /**
     * Optional. The resource name of the Model Armor template to use for response screening. A Model Armor template is a set of customized filters and thresholds that define how Model Armor screens content. If specified, Model Armor will use this template to check the model's response for safety and security risks before it is returned to the user. The name must be in the format `projects/{project\}/locations/{location\}/templates/{template\}`.
     */
    responseTemplateName?: string | null;
  }
  /**
   * Configuration for a multi-speaker text-to-speech request.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1MultiSpeakerVoiceConfig {
    /**
     * Required. A list of configurations for the voices of the speakers. Exactly two speaker voice configurations must be provided.
     */
    speakerVoiceConfigs?: Schema$GoogleCloudAiplatformV1beta1SpeakerVoiceConfig[];
  }
  /**
   * A datatype containing media that is part of a multi-part Content message. A `Part` consists of data which has an associated datatype. A `Part` can only contain one of the accepted types in `Part.data`. For media types that are not text, `Part` must have a fixed IANA MIME type identifying the type and subtype of the media if `inline_data` or `file_data` field is filled with raw bytes.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Part {
    /**
     * Optional. The result of executing the ExecutableCode.
     */
    codeExecutionResult?: Schema$GoogleCloudAiplatformV1beta1CodeExecutionResult;
    /**
     * Optional. Code generated by the model that is intended to be executed.
     */
    executableCode?: Schema$GoogleCloudAiplatformV1beta1ExecutableCode;
    /**
     * Optional. The URI-based data of the part. This can be used to include files from Google Cloud Storage.
     */
    fileData?: Schema$GoogleCloudAiplatformV1beta1FileData;
    /**
     * Optional. A predicted function call returned from the model. This contains the name of the function to call and the arguments to pass to the function.
     */
    functionCall?: Schema$GoogleCloudAiplatformV1beta1FunctionCall;
    /**
     * Optional. The result of a function call. This is used to provide the model with the result of a function call that it predicted.
     */
    functionResponse?: Schema$GoogleCloudAiplatformV1beta1FunctionResponse;
    /**
     * Optional. The inline data content of the part. This can be used to include images, audio, or video in a request.
     */
    inlineData?: Schema$GoogleCloudAiplatformV1beta1Blob;
    /**
     * per part media resolution. Media resolution for the input media.
     */
    mediaResolution?: Schema$GoogleCloudAiplatformV1beta1PartMediaResolution;
    /**
     * Optional. The text content of the part.
     */
    text?: string | null;
    /**
     * Optional. Indicates whether the `part` represents the model's thought process or reasoning.
     */
    thought?: boolean | null;
    /**
     * Optional. An opaque signature for the thought so it can be reused in subsequent requests.
     */
    thoughtSignature?: string | null;
    /**
     * Optional. Video metadata. The metadata should only be specified while the video data is presented in inline_data or file_data.
     */
    videoMetadata?: Schema$GoogleCloudAiplatformV1beta1VideoMetadata;
  }
  /**
   * Partial argument value of the function call.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1PartialArg {
    /**
     * Optional. Represents a boolean value.
     */
    boolValue?: boolean | null;
    /**
     * Required. A JSON Path (RFC 9535) to the argument being streamed. https://datatracker.ietf.org/doc/html/rfc9535. e.g. "$.foo.bar[0].data".
     */
    jsonPath?: string | null;
    /**
     * Optional. Represents a null value.
     */
    nullValue?: string | null;
    /**
     * Optional. Represents a double value.
     */
    numberValue?: number | null;
    /**
     * Optional. Represents a string value.
     */
    stringValue?: string | null;
    /**
     * Optional. Whether this is not the last part of the same json_path. If true, another PartialArg message for the current json_path is expected to follow.
     */
    willContinue?: boolean | null;
  }
  /**
   * per part media resolution. Media resolution for the input media.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1PartMediaResolution {
    /**
     * The tokenization quality used for given media.
     */
    level?: string | null;
  }
  /**
   * Configuration for a prebuilt voice.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1PrebuiltVoiceConfig {
    /**
     * The name of the prebuilt voice to use.
     */
    voiceName?: string | null;
  }
  /**
   * A RagChunk includes the content of a chunk of a RagFile, and associated metadata.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RagChunk {
    /**
     * If populated, represents where the chunk starts and ends in the document.
     */
    pageSpan?: Schema$GoogleCloudAiplatformV1beta1RagChunkPageSpan;
    /**
     * The content of the chunk.
     */
    text?: string | null;
  }
  /**
   * Represents where the chunk starts and ends in the document.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RagChunkPageSpan {
    /**
     * Page where chunk starts in the document. Inclusive. 1-indexed.
     */
    firstPage?: number | null;
    /**
     * Page where chunk ends in the document. Inclusive. 1-indexed.
     */
    lastPage?: number | null;
  }
  /**
   * Specifies the context retrieval config.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfig {
    /**
     * Optional. Config for filters.
     */
    filter?: Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigFilter;
    /**
     * Optional. Config for Hybrid Search.
     */
    hybridSearch?: Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigHybridSearch;
    /**
     * Optional. Config for ranking and reranking.
     */
    ranking?: Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigRanking;
    /**
     * Optional. The number of contexts to retrieve.
     */
    topK?: number | null;
  }
  /**
   * Config for filters.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigFilter {
    /**
     * Optional. String for metadata filtering.
     */
    metadataFilter?: string | null;
    /**
     * Optional. Only returns contexts with vector distance smaller than the threshold.
     */
    vectorDistanceThreshold?: number | null;
    /**
     * Optional. Only returns contexts with vector similarity larger than the threshold.
     */
    vectorSimilarityThreshold?: number | null;
  }
  /**
   * Config for Hybrid Search.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigHybridSearch {
    /**
     * Optional. Alpha value controls the weight between dense and sparse vector search results. The range is [0, 1], while 0 means sparse vector search only and 1 means dense vector search only. The default value is 0.5 which balances sparse and dense vector search equally.
     */
    alpha?: number | null;
  }
  /**
   * Config for ranking and reranking.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigRanking {
    /**
     * Optional. Config for LlmRanker.
     */
    llmRanker?: Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingLlmRanker;
    /**
     * Optional. Config for Rank Service.
     */
    rankService?: Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingRankService;
  }
  /**
   * Config for LlmRanker.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingLlmRanker {
    /**
     * Optional. The model name used for ranking. See [Supported models](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/inference#supported-models).
     */
    modelName?: string | null;
  }
  /**
   * Config for Rank Service.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingRankService {
    /**
     * Optional. The model name of the rank service. Format: `semantic-ranker-512@latest`
     */
    modelName?: string | null;
  }
  /**
   * The configuration for the replicated voice to use.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ReplicatedVoiceConfig {
    /**
     * Optional. The mimetype of the voice sample. The only currently supported value is `audio/wav`. This represents 16-bit signed little-endian wav data, with a 24kHz sampling rate. `mime_type` will default to `audio/wav` if not set.
     */
    mimeType?: string | null;
    /**
     * Optional. The sample of the custom voice.
     */
    voiceSampleAudio?: string | null;
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
     * Use data source powered by external API for grounding.
     */
    externalApi?: Schema$GoogleCloudAiplatformV1beta1ExternalApi;
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
   * Retrieval config.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RetrievalConfig {
    /**
     * The language code of the user.
     */
    languageCode?: string | null;
    /**
     * The location of the user.
     */
    latLng?: Schema$LatLng;
  }
  /**
   * Metadata related to the retrieval grounding source. This is part of the `GroundingMetadata` returned when grounding is enabled.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1RetrievalMetadata {
    /**
     * Optional. A score indicating how likely it is that a Google Search query could help answer the prompt. The score is in the range of `[0, 1]`. A score of 1 means the model is confident that a search will be helpful, and 0 means it is not. This score is populated only when Google Search grounding and dynamic retrieval are enabled. The score is used to determine whether to trigger a search.
     */
    googleSearchDynamicRetrievalScore?: number | null;
  }
  /**
   * A safety rating for a piece of content. The safety rating contains the harm category and the harm probability level.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1SafetyRating {
    /**
     * Output only. Indicates whether the content was blocked because of this rating.
     */
    blocked?: boolean | null;
    /**
     * Output only. The harm category of this rating.
     */
    category?: string | null;
    /**
     * Output only. The overwritten threshold for the safety category of Gemini 2.0 image out. If minors are detected in the output image, the threshold of each safety category will be overwritten if user sets a lower threshold.
     */
    overwrittenThreshold?: string | null;
    /**
     * Output only. The probability of harm for this category.
     */
    probability?: string | null;
    /**
     * Output only. The probability score of harm for this category.
     */
    probabilityScore?: number | null;
    /**
     * Output only. The severity of harm for this category.
     */
    severity?: string | null;
    /**
     * Output only. The severity score of harm for this category.
     */
    severityScore?: number | null;
  }
  /**
   * A safety setting that affects the safety-blocking behavior. A SafetySetting consists of a harm category and a threshold for that category.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1SafetySetting {
    /**
     * Required. The harm category to be blocked.
     */
    category?: string | null;
    /**
     * Optional. The method for blocking content. If not specified, the default behavior is to use the probability score.
     */
    method?: string | null;
    /**
     * Required. The threshold for blocking content. If the harm probability exceeds this threshold, the content will be blocked.
     */
    threshold?: string | null;
  }
  /**
   * Defines the schema of input and output data. This is a subset of the [OpenAPI 3.0 Schema Object](https://spec.openapis.org/oas/v3.0.3#schema-object).
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Schema {
    /**
     * Optional. If `type` is `OBJECT`, specifies how to handle properties not defined in `properties`. If it is a boolean `false`, no additional properties are allowed. If it is a schema, additional properties are allowed if they conform to the schema.
     */
    additionalProperties?: any | null;
    /**
     * Optional. The instance must be valid against any (one or more) of the subschemas listed in `any_of`.
     */
    anyOf?: Schema$GoogleCloudAiplatformV1beta1Schema[];
    /**
     * Optional. Default value to use if the field is not specified.
     */
    default?: any | null;
    /**
     * Optional. `defs` provides a map of schema definitions that can be reused by `ref` elsewhere in the schema. Only allowed at root level of the schema.
     */
    defs?: {[key: string]: Schema$GoogleCloudAiplatformV1beta1Schema} | null;
    /**
     * Optional. Description of the schema.
     */
    description?: string | null;
    /**
     * Optional. Possible values of the field. This field can be used to restrict a value to a fixed set of values. To mark a field as an enum, set `format` to `enum` and provide the list of possible values in `enum`. For example: 1. To define directions: `{type:STRING, format:enum, enum:["EAST", "NORTH", "SOUTH", "WEST"]\}` 2. To define apartment numbers: `{type:INTEGER, format:enum, enum:["101", "201", "301"]\}`
     */
    enum?: string[] | null;
    /**
     * Optional. Example of an instance of this schema.
     */
    example?: any | null;
    /**
     * Optional. The format of the data. For `NUMBER` type, format can be `float` or `double`. For `INTEGER` type, format can be `int32` or `int64`. For `STRING` type, format can be `email`, `byte`, `date`, `date-time`, `password`, and other formats to further refine the data type.
     */
    format?: string | null;
    /**
     * Optional. If type is `ARRAY`, `items` specifies the schema of elements in the array.
     */
    items?: Schema$GoogleCloudAiplatformV1beta1Schema;
    /**
     * Optional. If type is `INTEGER` or `NUMBER`, `maximum` specifies the maximum allowed value.
     */
    maximum?: number | null;
    /**
     * Optional. If type is `ARRAY`, `max_items` specifies the maximum number of items in an array.
     */
    maxItems?: string | null;
    /**
     * Optional. If type is `STRING`, `max_length` specifies the maximum length of the string.
     */
    maxLength?: string | null;
    /**
     * Optional. If type is `OBJECT`, `max_properties` specifies the maximum number of properties that can be provided.
     */
    maxProperties?: string | null;
    /**
     * Optional. If type is `INTEGER` or `NUMBER`, `minimum` specifies the minimum allowed value.
     */
    minimum?: number | null;
    /**
     * Optional. If type is `ARRAY`, `min_items` specifies the minimum number of items in an array.
     */
    minItems?: string | null;
    /**
     * Optional. If type is `STRING`, `min_length` specifies the minimum length of the string.
     */
    minLength?: string | null;
    /**
     * Optional. If type is `OBJECT`, `min_properties` specifies the minimum number of properties that can be provided.
     */
    minProperties?: string | null;
    /**
     * Optional. Indicates if the value of this field can be null.
     */
    nullable?: boolean | null;
    /**
     * Optional. If type is `STRING`, `pattern` specifies a regular expression that the string must match.
     */
    pattern?: string | null;
    /**
     * Optional. If type is `OBJECT`, `properties` is a map of property names to schema definitions for each property of the object.
     */
    properties?: {
      [key: string]: Schema$GoogleCloudAiplatformV1beta1Schema;
    } | null;
    /**
     * Optional. Order of properties displayed or used where order matters. This is not a standard field in OpenAPI specification, but can be used to control the order of properties.
     */
    propertyOrdering?: string[] | null;
    /**
     * Optional. Allows referencing another schema definition to use in place of this schema. The value must be a valid reference to a schema in `defs`. For example, the following schema defines a reference to a schema node named "Pet": type: object properties: pet: ref: #/defs/Pet defs: Pet: type: object properties: name: type: string The value of the "pet" property is a reference to the schema node named "Pet". See details in https://json-schema.org/understanding-json-schema/structuring
     */
    ref?: string | null;
    /**
     * Optional. If type is `OBJECT`, `required` lists the names of properties that must be present.
     */
    required?: string[] | null;
    /**
     * Optional. Title for the schema.
     */
    title?: string | null;
    /**
     * Optional. Data type of the schema field.
     */
    type?: string | null;
  }
  /**
   * An entry point for displaying Google Search results. A `SearchEntryPoint` is populated when the grounding source for a model's response is Google Search. It provides information that you can use to display the search results in your application.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1SearchEntryPoint {
    /**
     * Optional. An HTML snippet that can be embedded in a web page or an application's webview. This snippet displays a search result, including the title, URL, and a brief description of the search result.
     */
    renderedContent?: string | null;
    /**
     * Optional. A base64-encoded JSON object that contains a list of search queries and their corresponding search URLs. This information can be used to build a custom search UI.
     */
    sdkBlob?: string | null;
  }
  /**
   * A segment of the content.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Segment {
    /**
     * Output only. The end index of the segment in the `Part`, measured in bytes. This marks the end of the segment and is exclusive, meaning the segment includes content up to, but not including, the byte at this index.
     */
    endIndex?: number | null;
    /**
     * Output only. The index of the `Part` object that this segment belongs to. This is useful for associating the segment with a specific part of the content.
     */
    partIndex?: number | null;
    /**
     * Output only. The start index of the segment in the `Part`, measured in bytes. This marks the beginning of the segment and is inclusive, meaning the byte at this index is the first byte of the segment.
     */
    startIndex?: number | null;
    /**
     * Output only. The text of the segment.
     */
    text?: string | null;
  }
  /**
   * Configuration for a single speaker in a multi-speaker setup.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1SpeakerVoiceConfig {
    /**
     * Required. The name of the speaker. This should be the same as the speaker name used in the prompt.
     */
    speaker?: string | null;
    /**
     * Required. The configuration for the voice of this speaker.
     */
    voiceConfig?: Schema$GoogleCloudAiplatformV1beta1VoiceConfig;
  }
  /**
   * Configuration for speech generation.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1SpeechConfig {
    /**
     * Optional. The language code (ISO 639-1) for the speech synthesis.
     */
    languageCode?: string | null;
    /**
     * The configuration for a multi-speaker text-to-speech request. This field is mutually exclusive with `voice_config`.
     */
    multiSpeakerVoiceConfig?: Schema$GoogleCloudAiplatformV1beta1MultiSpeakerVoiceConfig;
    /**
     * The configuration for the voice to use.
     */
    voiceConfig?: Schema$GoogleCloudAiplatformV1beta1VoiceConfig;
  }
  /**
   * Tool details that the model may use to generate response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. A Tool object should contain exactly one type of Tool (e.g FunctionDeclaration, Retrieval or GoogleSearchRetrieval).
   */
  export interface Schema$GoogleCloudAiplatformV1beta1Tool {
    /**
     * Optional. CodeExecution tool type. Enables the model to execute code as part of generation.
     */
    codeExecution?: Schema$GoogleCloudAiplatformV1beta1ToolCodeExecution;
    /**
     * Optional. Tool to support the model interacting directly with the computer. If enabled, it automatically populates computer-use specific Function Declarations.
     */
    computerUse?: Schema$GoogleCloudAiplatformV1beta1ToolComputerUse;
    /**
     * Optional. Tool to support searching public web data, powered by Vertex AI Search and Sec4 compliance.
     */
    enterpriseWebSearch?: Schema$GoogleCloudAiplatformV1beta1EnterpriseWebSearch;
    /**
     * Optional. Function tool type. One or more function declarations to be passed to the model along with the current user query. Model may decide to call a subset of these functions by populating FunctionCall in the response. User should provide a FunctionResponse for each function call in the next turn. Based on the function responses, Model will generate the final response back to the user. Maximum 512 function declarations can be provided.
     */
    functionDeclarations?: Schema$GoogleCloudAiplatformV1beta1FunctionDeclaration[];
    /**
     * Optional. GoogleMaps tool type. Tool to support Google Maps in Model.
     */
    googleMaps?: Schema$GoogleCloudAiplatformV1beta1GoogleMaps;
    /**
     * Optional. GoogleSearch tool type. Tool to support Google Search in Model. Powered by Google.
     */
    googleSearch?: Schema$GoogleCloudAiplatformV1beta1ToolGoogleSearch;
    /**
     * Optional. Specialized retrieval tool that is powered by Google Search.
     */
    googleSearchRetrieval?: Schema$GoogleCloudAiplatformV1beta1GoogleSearchRetrieval;
    /**
     * Optional. If specified, Vertex AI will use Parallel.ai to search for information to answer user queries. The search results will be grounded on Parallel.ai and presented to the model for response generation
     */
    parallelAiSearch?: Schema$GoogleCloudAiplatformV1beta1ToolParallelAiSearch;
    /**
     * Optional. Retrieval tool type. System will always execute the provided retrieval tool(s) to get external knowledge to answer the prompt. Retrieval results are presented to the model for generation.
     */
    retrieval?: Schema$GoogleCloudAiplatformV1beta1Retrieval;
    /**
     * Optional. Tool to support URL context retrieval.
     */
    urlContext?: Schema$GoogleCloudAiplatformV1beta1UrlContext;
  }
  /**
   * Tool that executes code generated by the model, and automatically returns the result to the model. See also [ExecutableCode]and [CodeExecutionResult] which are input and output to this tool.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ToolCodeExecution {}
  /**
   * Tool to support computer use.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ToolComputerUse {
    /**
     * Required. The environment being operated.
     */
    environment?: string | null;
    /**
     * Optional. By default, [predefined functions](https://cloud.google.com/vertex-ai/generative-ai/docs/computer-use#supported-actions) are included in the final model call. Some of them can be explicitly excluded from being automatically included. This can serve two purposes: 1. Using a more restricted / different action space. 2. Improving the definitions / instructions of predefined functions.
     */
    excludedPredefinedFunctions?: string[] | null;
  }
  /**
   * Tool config. This config is shared for all tools provided in the request.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ToolConfig {
    /**
     * Optional. Function calling config.
     */
    functionCallingConfig?: Schema$GoogleCloudAiplatformV1beta1FunctionCallingConfig;
    /**
     * Optional. Retrieval config.
     */
    retrievalConfig?: Schema$GoogleCloudAiplatformV1beta1RetrievalConfig;
  }
  /**
   * GoogleSearch tool type. Tool to support Google Search in Model. Powered by Google.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ToolGoogleSearch {
    /**
     * Optional. Sites with confidence level chosen & above this value will be blocked from the search results.
     */
    blockingConfidence?: string | null;
    /**
     * Optional. List of domains to be excluded from the search results. The default limit is 2000 domains. Example: ["amazon.com", "facebook.com"].
     */
    excludeDomains?: string[] | null;
  }
  /**
   * ParallelAiSearch tool type. A tool that uses the Parallel.ai search engine for grounding.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1ToolParallelAiSearch {
    /**
     * Optional. The API key for ParallelAiSearch. If an API key is not provided, the system will attempt to verify access by checking for an active Parallel.ai subscription through the Google Cloud Marketplace. See https://docs.parallel.ai/search/search-quickstart for more details.
     */
    apiKey?: string | null;
    /**
     * Optional. Custom configs for ParallelAiSearch. This field can be used to pass any parameter from the Parallel.ai Search API. See the Parallel.ai documentation for the full list of available parameters and their usage: https://docs.parallel.ai/api-reference/search-beta/search Currently only `source_policy`, `excerpts`, `max_results`, `mode`, `fetch_policy` can be set via this field. For example: { "source_policy": { "include_domains": ["google.com", "wikipedia.org"], "exclude_domains": ["example.com"] \}, "fetch_policy": { "max_age_seconds": 3600 \} \}
     */
    customConfigs?: {[key: string]: any} | null;
  }
  /**
   * Tool to support URL context.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1UrlContext {}
  /**
   * Metadata returned when the model uses the `url_context` tool to get information from a user-provided URL.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1UrlContextMetadata {
    /**
     * Output only. A list of URL metadata, with one entry for each URL retrieved by the tool.
     */
    urlMetadata?: Schema$GoogleCloudAiplatformV1beta1UrlMetadata[];
  }
  /**
   * The metadata for a single URL retrieval.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1UrlMetadata {
    /**
     * The URL retrieved by the tool.
     */
    retrievedUrl?: string | null;
    /**
     * The status of the URL retrieval.
     */
    urlRetrievalStatus?: string | null;
  }
  /**
   * Retrieve from Vertex AI Search datastore or engine for grounding. datastore and engine are mutually exclusive. See https://cloud.google.com/products/agent-builder
   */
  export interface Schema$GoogleCloudAiplatformV1beta1VertexAISearch {
    /**
     * Optional. Fully-qualified Vertex AI Search data store resource ID. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{dataStore\}`
     */
    datastore?: string | null;
    /**
     * Specifications that define the specific DataStores to be searched, along with configurations for those data stores. This is only considered for Engines with multiple data stores. It should only be set if engine is used.
     */
    dataStoreSpecs?: Schema$GoogleCloudAiplatformV1beta1VertexAISearchDataStoreSpec[];
    /**
     * Optional. Fully-qualified Vertex AI Search engine resource ID. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/engines/{engine\}`
     */
    engine?: string | null;
    /**
     * Optional. Filter strings to be passed to the search API.
     */
    filter?: string | null;
    /**
     * Optional. Number of search results to return per query. The default value is 10. The maximumm allowed value is 10.
     */
    maxResults?: number | null;
  }
  /**
   * Define data stores within engine to filter on in a search call and configurations for those data stores. For more information, see https://cloud.google.com/generative-ai-app-builder/docs/reference/rpc/google.cloud.discoveryengine.v1#datastorespec
   */
  export interface Schema$GoogleCloudAiplatformV1beta1VertexAISearchDataStoreSpec {
    /**
     * Full resource name of DataStore, such as Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{dataStore\}`
     */
    dataStore?: string | null;
    /**
     * Optional. Filter specification to filter documents in the data store specified by data_store field. For more information on filtering, see [Filtering](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata)
     */
    filter?: string | null;
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
     * Optional. The retrieval config for the Rag query.
     */
    ragRetrievalConfig?: Schema$GoogleCloudAiplatformV1beta1RagRetrievalConfig;
    /**
     * Optional. Number of top k results to return from the selected corpora.
     */
    similarityTopK?: number | null;
    /**
     * Optional. Currently only supported for Gemini Multimodal Live API. In Gemini Multimodal Live API, if `store_context` bool is specified, Gemini will leverage it to automatically memorize the interactions between the client and Gemini, and retrieve context when needed to augment the response generation for users' ongoing and future interactions.
     */
    storeContext?: boolean | null;
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
   * Provides metadata for a video, including the start and end offsets for clipping and the frame rate.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1VideoMetadata {
    /**
     * Optional. The end offset of the video.
     */
    endOffset?: string | null;
    /**
     * Optional. The frame rate of the video sent to the model. If not specified, the default value is 1.0. The valid range is (0.0, 24.0].
     */
    fps?: number | null;
    /**
     * Optional. The start offset of the video.
     */
    startOffset?: string | null;
  }
  /**
   * Configuration for a voice.
   */
  export interface Schema$GoogleCloudAiplatformV1beta1VoiceConfig {
    /**
     * The configuration for a prebuilt voice.
     */
    prebuiltVoiceConfig?: Schema$GoogleCloudAiplatformV1beta1PrebuiltVoiceConfig;
    /**
     * Optional. The configuration for a replicated voice. This enables users to replicate a voice from an audio sample.
     */
    replicatedVoiceConfig?: Schema$GoogleCloudAiplatformV1beta1ReplicatedVoiceConfig;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseml.googleapis.com
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
     * const firebaseml = google.firebaseml('v2beta');
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
     *   const res = await firebaseml.projects.locations.publishers.models.countTokens(
     *     {
     *       // Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project\}/locations/{location\}/endpoints/{endpoint\}`
     *       endpoint:
     *         'projects/my-project/locations/my-location/publishers/my-publisher/models/my-model',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "contents": [],
     *         //   "generationConfig": {},
     *         //   "instances": [],
     *         //   "model": "my_model",
     *         //   "systemInstruction": {},
     *         //   "tools": []
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "promptTokensDetails": [],
     *   //   "totalBillableCharacters": 0,
     *   //   "totalTokens": 0
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
    countTokens(
      params: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    countTokens(
      params?: Params$Resource$Projects$Locations$Publishers$Models$Counttokens,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAiplatformV1beta1CountTokensResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseml.googleapis.com
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
     * const firebaseml = google.firebaseml('v2beta');
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
     *     await firebaseml.projects.locations.publishers.models.generateContent({
     *       // Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project\}/locations/{location\}/publishers/x/models/x` Tuned model endpoint format: `projects/{project\}/locations/{location\}/endpoints/{endpoint\}`
     *       model:
     *         'projects/my-project/locations/my-location/publishers/my-publisher/models/my-model',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "cachedContent": "my_cachedContent",
     *         //   "contents": [],
     *         //   "generationConfig": {},
     *         //   "labels": {},
     *         //   "modelArmorConfig": {},
     *         //   "safetySettings": [],
     *         //   "systemInstruction": {},
     *         //   "toolConfig": {},
     *         //   "tools": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "candidates": [],
     *   //   "createTime": "my_createTime",
     *   //   "modelVersion": "my_modelVersion",
     *   //   "promptFeedback": {},
     *   //   "responseId": "my_responseId",
     *   //   "usageMetadata": {}
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
    generateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateContent(
      params?: Params$Resource$Projects$Locations$Publishers$Models$Generatecontent,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseml.googleapis.com
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
     * const firebaseml = google.firebaseml('v2beta');
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
     *     await firebaseml.projects.locations.publishers.models.streamGenerateContent(
     *       {
     *         // Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project\}/locations/{location\}/publishers/x/models/x` Tuned model endpoint format: `projects/{project\}/locations/{location\}/endpoints/{endpoint\}`
     *         model:
     *           'projects/my-project/locations/my-location/publishers/my-publisher/models/my-model',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "cachedContent": "my_cachedContent",
     *           //   "contents": [],
     *           //   "generationConfig": {},
     *           //   "labels": {},
     *           //   "modelArmorConfig": {},
     *           //   "safetySettings": [],
     *           //   "systemInstruction": {},
     *           //   "toolConfig": {},
     *           //   "tools": []
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "candidates": [],
     *   //   "createTime": "my_createTime",
     *   //   "modelVersion": "my_modelVersion",
     *   //   "promptFeedback": {},
     *   //   "responseId": "my_responseId",
     *   //   "usageMetadata": {}
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
    streamGenerateContent(
      params: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    streamGenerateContent(
      params?: Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAiplatformV1beta1GenerateContentResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

  export interface Params$Resource$Projects$Locations$Publishers$Models$Counttokens extends StandardParameters {
    /**
     * Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project\}/locations/{location\}/endpoints/{endpoint\}`
     */
    endpoint?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAiplatformV1beta1CountTokensRequest;
  }
  export interface Params$Resource$Projects$Locations$Publishers$Models$Generatecontent extends StandardParameters {
    /**
     * Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project\}/locations/{location\}/publishers/x/models/x` Tuned model endpoint format: `projects/{project\}/locations/{location\}/endpoints/{endpoint\}`
     */
    model?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAiplatformV1beta1GenerateContentRequest;
  }
  export interface Params$Resource$Projects$Locations$Publishers$Models$Streamgeneratecontent extends StandardParameters {
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
