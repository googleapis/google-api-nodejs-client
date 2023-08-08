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

export namespace language_v1beta2 {
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
   * Cloud Natural Language API
   *
   * Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const language = google.language('v1beta2');
   * ```
   */
  export class Language {
    context: APIRequestContext;
    documents: Resource$Documents;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.documents = new Resource$Documents(this.context);
    }
  }

  /**
   * The entity analysis request message.
   */
  export interface Schema$AnalyzeEntitiesRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string | null;
  }
  /**
   * The entity analysis response message.
   */
  export interface Schema$AnalyzeEntitiesResponse {
    /**
     * The recognized entities in the input document.
     */
    entities?: Schema$Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
  }
  /**
   * The entity-level sentiment analysis request message.
   */
  export interface Schema$AnalyzeEntitySentimentRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string | null;
  }
  /**
   * The entity-level sentiment analysis response message.
   */
  export interface Schema$AnalyzeEntitySentimentResponse {
    /**
     * The recognized entities in the input document with associated sentiments.
     */
    entities?: Schema$Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
  }
  /**
   * The sentiment analysis request message.
   */
  export interface Schema$AnalyzeSentimentRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate sentence offsets for the sentence sentiment.
     */
    encodingType?: string | null;
  }
  /**
   * The sentiment analysis response message.
   */
  export interface Schema$AnalyzeSentimentResponse {
    /**
     * The overall sentiment of the input document.
     */
    documentSentiment?: Schema$Sentiment;
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
    /**
     * The sentiment for all the sentences in the document.
     */
    sentences?: Schema$Sentence[];
  }
  /**
   * The syntax analysis request message.
   */
  export interface Schema$AnalyzeSyntaxRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string | null;
  }
  /**
   * The syntax analysis response message.
   */
  export interface Schema$AnalyzeSyntaxResponse {
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
    /**
     * Sentences in the input document.
     */
    sentences?: Schema$Sentence[];
    /**
     * Tokens, along with their syntactic information, in the input document.
     */
    tokens?: Schema$Token[];
  }
  /**
   * The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
   */
  export interface Schema$AnnotateTextRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string | null;
    /**
     * Required. The enabled features.
     */
    features?: Schema$Features;
  }
  /**
   * The text annotations response message.
   */
  export interface Schema$AnnotateTextResponse {
    /**
     * Categories identified in the input document.
     */
    categories?: Schema$ClassificationCategory[];
    /**
     * The overall sentiment for the document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment.
     */
    documentSentiment?: Schema$Sentiment;
    /**
     * Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities.
     */
    entities?: Schema$Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
    /**
     * Harmful and sensitive categories identified in the input document.
     */
    moderationCategories?: Schema$ClassificationCategory[];
    /**
     * Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.
     */
    sentences?: Schema$Sentence[];
    /**
     * Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.
     */
    tokens?: Schema$Token[];
  }
  /**
   * Represents a category returned from the text classifier.
   */
  export interface Schema$ClassificationCategory {
    /**
     * The classifier's confidence of the category. Number represents how certain the classifier is that this category represents the given text.
     */
    confidence?: number | null;
    /**
     * The name of the category representing the document.
     */
    name?: string | null;
  }
  /**
   * Model options available for classification requests.
   */
  export interface Schema$ClassificationModelOptions {
    /**
     * Setting this field will use the V1 model and V1 content categories version. The V1 model is a legacy model; support for this will be discontinued in the future.
     */
    v1Model?: Schema$V1Model;
    /**
     * Setting this field will use the V2 model with the appropriate content categories version. The V2 model is a better performing model.
     */
    v2Model?: Schema$V2Model;
  }
  /**
   * The document classification request message.
   */
  export interface Schema$ClassifyTextRequest {
    /**
     * Model options to use for classification. Defaults to v1 options if not specified.
     */
    classificationModelOptions?: Schema$ClassificationModelOptions;
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
  }
  /**
   * The document classification response message.
   */
  export interface Schema$ClassifyTextResponse {
    /**
     * Categories representing the input document.
     */
    categories?: Schema$ClassificationCategory[];
  }
  /**
   * Represents dependency parse tree information for a token.
   */
  export interface Schema$DependencyEdge {
    /**
     * Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the `head_token_index` is its own index.
     */
    headTokenIndex?: number | null;
    /**
     * The parse label for the token.
     */
    label?: string | null;
  }
  /**
   * Represents the input to API methods.
   */
  export interface Schema$Document {
    /**
     * Indicates how detected boilerplate(e.g. advertisements, copyright declarations, banners) should be handled for this document. If not specified, boilerplate will be treated the same as content.
     */
    boilerplateHandling?: string | null;
    /**
     * The content of the input in string format. Cloud audit logging exempt since it is based on user data.
     */
    content?: string | null;
    /**
     * The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.
     */
    gcsContentUri?: string | null;
    /**
     * The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned.
     */
    language?: string | null;
    /**
     * The web URI where the document comes from. This URI is not used for fetching the content, but as a hint for analyzing the document.
     */
    referenceWebUri?: string | null;
    /**
     * Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error.
     */
    type?: string | null;
  }
  /**
   * Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
   */
  export interface Schema$Entity {
    /**
     * The mentions of this entity in the input document. The API currently supports proper noun mentions.
     */
    mentions?: Schema$EntityMention[];
    /**
     * Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The representative name for the entity.
     */
    name?: string | null;
    /**
     * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
     */
    salience?: number | null;
    /**
     * For calls to AnalyzeEntitySentiment or if AnnotateTextRequest.Features.extract_entity_sentiment is set to true, this field will contain the aggregate sentiment expressed for this entity in the provided document.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The entity type.
     */
    type?: string | null;
  }
  /**
   * Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
   */
  export interface Schema$EntityMention {
    /**
     * For calls to AnalyzeEntitySentiment or if AnnotateTextRequest.Features.extract_entity_sentiment is set to true, this field will contain the sentiment expressed for this mention of the entity in the provided document.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The mention text.
     */
    text?: Schema$TextSpan;
    /**
     * The type of the entity mention.
     */
    type?: string | null;
  }
  /**
   * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 12
   */
  export interface Schema$Features {
    /**
     * The model options to use for classification. Defaults to v1 options if not specified. Only used if `classify_text` is set to true.
     */
    classificationModelOptions?: Schema$ClassificationModelOptions;
    /**
     * Classify the full document into categories. If this is true, the API will use the default model which classifies into a [predefined taxonomy](https://cloud.google.com/natural-language/docs/categories).
     */
    classifyText?: boolean | null;
    /**
     * Extract document-level sentiment.
     */
    extractDocumentSentiment?: boolean | null;
    /**
     * Extract entities.
     */
    extractEntities?: boolean | null;
    /**
     * Extract entities and their associated sentiment.
     */
    extractEntitySentiment?: boolean | null;
    /**
     * Extract syntax information.
     */
    extractSyntax?: boolean | null;
    /**
     * Moderate the document for harmful and sensitive categories.
     */
    moderateText?: boolean | null;
  }
  /**
   * The document moderation request message.
   */
  export interface Schema$ModerateTextRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
  }
  /**
   * The document moderation response message.
   */
  export interface Schema$ModerateTextResponse {
    /**
     * Harmful and sensitive categories representing the input document.
     */
    moderationCategories?: Schema$ClassificationCategory[];
  }
  /**
   * Represents part of speech information for a token.
   */
  export interface Schema$PartOfSpeech {
    /**
     * The grammatical aspect.
     */
    aspect?: string | null;
    /**
     * The grammatical case.
     */
    case?: string | null;
    /**
     * The grammatical form.
     */
    form?: string | null;
    /**
     * The grammatical gender.
     */
    gender?: string | null;
    /**
     * The grammatical mood.
     */
    mood?: string | null;
    /**
     * The grammatical number.
     */
    number?: string | null;
    /**
     * The grammatical person.
     */
    person?: string | null;
    /**
     * The grammatical properness.
     */
    proper?: string | null;
    /**
     * The grammatical reciprocity.
     */
    reciprocity?: string | null;
    /**
     * The part of speech tag.
     */
    tag?: string | null;
    /**
     * The grammatical tense.
     */
    tense?: string | null;
    /**
     * The grammatical voice.
     */
    voice?: string | null;
  }
  /**
   * Represents a sentence in the input document.
   */
  export interface Schema$Sentence {
    /**
     * For calls to AnalyzeSentiment or if AnnotateTextRequest.Features.extract_document_sentiment is set to true, this field will contain the sentiment for the sentence.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The sentence text.
     */
    text?: Schema$TextSpan;
  }
  /**
   * Represents the feeling associated with the entire text or entities in the text. Next ID: 6
   */
  export interface Schema$Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative).
     */
    magnitude?: number | null;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number | null;
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
   * Represents a text span in the input document.
   */
  export interface Schema$TextSpan {
    /**
     * The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request.
     */
    beginOffset?: number | null;
    /**
     * The content of the text span, which is a substring of the document.
     */
    content?: string | null;
  }
  /**
   * Represents the smallest syntactic building block of the text.
   */
  export interface Schema$Token {
    /**
     * Dependency tree parse for this token.
     */
    dependencyEdge?: Schema$DependencyEdge;
    /**
     * [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
     */
    lemma?: string | null;
    /**
     * Parts of speech tag for this token.
     */
    partOfSpeech?: Schema$PartOfSpeech;
    /**
     * The token text.
     */
    text?: Schema$TextSpan;
  }
  /**
   * Options for the V1 model.
   */
  export interface Schema$V1Model {}
  /**
   * Options for the V2 model.
   */
  export interface Schema$V2Model {
    /**
     * The content categories used for classification.
     */
    contentCategoriesVersion?: string | null;
  }

  export class Resource$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeEntities(
      params: Params$Resource$Documents$Analyzeentities,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyzeEntities(
      params?: Params$Resource$Documents$Analyzeentities,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyzeEntitiesResponse>;
    analyzeEntities(
      params: Params$Resource$Documents$Analyzeentities,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeEntities(
      params: Params$Resource$Documents$Analyzeentities,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      params: Params$Resource$Documents$Analyzeentities,
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      paramsOrCallback?:
        | Params$Resource$Documents$Analyzeentities
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnalyzeEntitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Analyzeentities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Analyzeentities;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/documents:analyzeEntities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnalyzeEntitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeEntitiesResponse>(parameters);
      }
    }

    /**
     * Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeEntitySentiment(
      params: Params$Resource$Documents$Analyzeentitysentiment,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyzeEntitySentiment(
      params?: Params$Resource$Documents$Analyzeentitysentiment,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyzeEntitySentimentResponse>;
    analyzeEntitySentiment(
      params: Params$Resource$Documents$Analyzeentitysentiment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeEntitySentiment(
      params: Params$Resource$Documents$Analyzeentitysentiment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
    ): void;
    analyzeEntitySentiment(
      params: Params$Resource$Documents$Analyzeentitysentiment,
      callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
    ): void;
    analyzeEntitySentiment(
      callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
    ): void;
    analyzeEntitySentiment(
      paramsOrCallback?:
        | Params$Resource$Documents$Analyzeentitysentiment
        | BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnalyzeEntitySentimentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Analyzeentitysentiment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Analyzeentitysentiment;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta2/documents:analyzeEntitySentiment'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnalyzeEntitySentimentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeEntitySentimentResponse>(
          parameters
        );
      }
    }

    /**
     * Analyzes the sentiment of the provided text.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeSentiment(
      params: Params$Resource$Documents$Analyzesentiment,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyzeSentiment(
      params?: Params$Resource$Documents$Analyzesentiment,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyzeSentimentResponse>;
    analyzeSentiment(
      params: Params$Resource$Documents$Analyzesentiment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeSentiment(
      params: Params$Resource$Documents$Analyzesentiment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeSentimentResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>
    ): void;
    analyzeSentiment(
      params: Params$Resource$Documents$Analyzesentiment,
      callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>
    ): void;
    analyzeSentiment(
      callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>
    ): void;
    analyzeSentiment(
      paramsOrCallback?:
        | Params$Resource$Documents$Analyzesentiment
        | BodyResponseCallback<Schema$AnalyzeSentimentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeSentimentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeSentimentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnalyzeSentimentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Analyzesentiment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Analyzesentiment;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/documents:analyzeSentiment').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnalyzeSentimentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeSentimentResponse>(parameters);
      }
    }

    /**
     * Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeSyntax(
      params: Params$Resource$Documents$Analyzesyntax,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyzeSyntax(
      params?: Params$Resource$Documents$Analyzesyntax,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyzeSyntaxResponse>;
    analyzeSyntax(
      params: Params$Resource$Documents$Analyzesyntax,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeSyntax(
      params: Params$Resource$Documents$Analyzesyntax,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeSyntaxResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
    ): void;
    analyzeSyntax(
      params: Params$Resource$Documents$Analyzesyntax,
      callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
    ): void;
    analyzeSyntax(
      callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
    ): void;
    analyzeSyntax(
      paramsOrCallback?:
        | Params$Resource$Documents$Analyzesyntax
        | BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnalyzeSyntaxResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Analyzesyntax;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Analyzesyntax;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/documents:analyzeSyntax').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnalyzeSyntaxResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeSyntaxResponse>(parameters);
      }
    }

    /**
     * A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    annotateText(
      params: Params$Resource$Documents$Annotatetext,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    annotateText(
      params?: Params$Resource$Documents$Annotatetext,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnnotateTextResponse>;
    annotateText(
      params: Params$Resource$Documents$Annotatetext,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    annotateText(
      params: Params$Resource$Documents$Annotatetext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnnotateTextResponse>,
      callback: BodyResponseCallback<Schema$AnnotateTextResponse>
    ): void;
    annotateText(
      params: Params$Resource$Documents$Annotatetext,
      callback: BodyResponseCallback<Schema$AnnotateTextResponse>
    ): void;
    annotateText(
      callback: BodyResponseCallback<Schema$AnnotateTextResponse>
    ): void;
    annotateText(
      paramsOrCallback?:
        | Params$Resource$Documents$Annotatetext
        | BodyResponseCallback<Schema$AnnotateTextResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnnotateTextResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnnotateTextResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnnotateTextResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Annotatetext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Annotatetext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/documents:annotateText').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AnnotateTextResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnnotateTextResponse>(parameters);
      }
    }

    /**
     * Classifies a document into categories.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    classifyText(
      params: Params$Resource$Documents$Classifytext,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    classifyText(
      params?: Params$Resource$Documents$Classifytext,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ClassifyTextResponse>;
    classifyText(
      params: Params$Resource$Documents$Classifytext,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    classifyText(
      params: Params$Resource$Documents$Classifytext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ClassifyTextResponse>,
      callback: BodyResponseCallback<Schema$ClassifyTextResponse>
    ): void;
    classifyText(
      params: Params$Resource$Documents$Classifytext,
      callback: BodyResponseCallback<Schema$ClassifyTextResponse>
    ): void;
    classifyText(
      callback: BodyResponseCallback<Schema$ClassifyTextResponse>
    ): void;
    classifyText(
      paramsOrCallback?:
        | Params$Resource$Documents$Classifytext
        | BodyResponseCallback<Schema$ClassifyTextResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClassifyTextResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClassifyTextResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ClassifyTextResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Classifytext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Classifytext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/documents:classifyText').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClassifyTextResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClassifyTextResponse>(parameters);
      }
    }

    /**
     * Moderates a document for harmful and sensitive categories.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    moderateText(
      params: Params$Resource$Documents$Moderatetext,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    moderateText(
      params?: Params$Resource$Documents$Moderatetext,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ModerateTextResponse>;
    moderateText(
      params: Params$Resource$Documents$Moderatetext,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    moderateText(
      params: Params$Resource$Documents$Moderatetext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ModerateTextResponse>,
      callback: BodyResponseCallback<Schema$ModerateTextResponse>
    ): void;
    moderateText(
      params: Params$Resource$Documents$Moderatetext,
      callback: BodyResponseCallback<Schema$ModerateTextResponse>
    ): void;
    moderateText(
      callback: BodyResponseCallback<Schema$ModerateTextResponse>
    ): void;
    moderateText(
      paramsOrCallback?:
        | Params$Resource$Documents$Moderatetext
        | BodyResponseCallback<Schema$ModerateTextResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ModerateTextResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ModerateTextResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ModerateTextResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Moderatetext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Moderatetext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/documents:moderateText').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ModerateTextResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ModerateTextResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Documents$Analyzeentities
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeEntitiesRequest;
  }
  export interface Params$Resource$Documents$Analyzeentitysentiment
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeEntitySentimentRequest;
  }
  export interface Params$Resource$Documents$Analyzesentiment
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeSentimentRequest;
  }
  export interface Params$Resource$Documents$Analyzesyntax
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeSyntaxRequest;
  }
  export interface Params$Resource$Documents$Annotatetext
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnnotateTextRequest;
  }
  export interface Params$Resource$Documents$Classifytext
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ClassifyTextRequest;
  }
  export interface Params$Resource$Documents$Moderatetext
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ModerateTextRequest;
  }
}
