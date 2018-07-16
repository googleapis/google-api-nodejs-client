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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace language_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
  }

  /**
   * Cloud Natural Language API
   *
   * Provides natural language understanding technologies to developers.
   * Examples include sentiment analysis, entity recognition, entity sentiment
   * analysis, and text annotations.
   *
   * @example
   * const {google} = require('googleapis');
   * const language = google.language('v1beta2');
   *
   * @namespace language
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
   * @param {object=} options Options for Language
   */
  export class Language {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    documents: Resource$Documents;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.documents = new Resource$Documents(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * The entity analysis request message.
   */
  export interface Schema$AnalyzeEntitiesRequest {
    /**
     * Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string;
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
     * The language of the text, which will be the same as the language
     * specified in the request or, if not specified, the automatically-detected
     * language. See Document.language field for more details.
     */
    language?: string;
  }
  /**
   * The entity-level sentiment analysis request message.
   */
  export interface Schema$AnalyzeEntitySentimentRequest {
    /**
     * Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string;
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
     * The language of the text, which will be the same as the language
     * specified in the request or, if not specified, the automatically-detected
     * language. See Document.language field for more details.
     */
    language?: string;
  }
  /**
   * The sentiment analysis request message.
   */
  export interface Schema$AnalyzeSentimentRequest {
    /**
     * Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate sentence offsets for the
     * sentence sentiment.
     */
    encodingType?: string;
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
     * The language of the text, which will be the same as the language
     * specified in the request or, if not specified, the automatically-detected
     * language. See Document.language field for more details.
     */
    language?: string;
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
     * Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string;
  }
  /**
   * The syntax analysis response message.
   */
  export interface Schema$AnalyzeSyntaxResponse {
    /**
     * The language of the text, which will be the same as the language
     * specified in the request or, if not specified, the automatically-detected
     * language. See Document.language field for more details.
     */
    language?: string;
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
   * The request message for the text annotation API, which can perform multiple
   * analysis types (sentiment, entities, and syntax) in one call.
   */
  export interface Schema$AnnotateTextRequest {
    /**
     * Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string;
    /**
     * The enabled features.
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
     * The overall sentiment for the document. Populated if the user enables
     * AnnotateTextRequest.Features.extract_document_sentiment.
     */
    documentSentiment?: Schema$Sentiment;
    /**
     * Entities, along with their semantic information, in the input document.
     * Populated if the user enables
     * AnnotateTextRequest.Features.extract_entities.
     */
    entities?: Schema$Entity[];
    /**
     * The language of the text, which will be the same as the language
     * specified in the request or, if not specified, the automatically-detected
     * language. See Document.language field for more details.
     */
    language?: string;
    /**
     * Sentences in the input document. Populated if the user enables
     * AnnotateTextRequest.Features.extract_syntax.
     */
    sentences?: Schema$Sentence[];
    /**
     * Tokens, along with their syntactic information, in the input document.
     * Populated if the user enables
     * AnnotateTextRequest.Features.extract_syntax.
     */
    tokens?: Schema$Token[];
  }
  /**
   * Represents a category returned from the text classifier.
   */
  export interface Schema$ClassificationCategory {
    /**
     * The classifier&#39;s confidence of the category. Number represents how
     * certain the classifier is that this category represents the given text.
     */
    confidence?: number;
    /**
     * The name of the category representing the document, from the [predefined
     * taxonomy](/natural-language/docs/categories).
     */
    name?: string;
  }
  /**
   * The document classification request message.
   */
  export interface Schema$ClassifyTextRequest {
    /**
     * Input document.
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
     * Represents the head of this token in the dependency tree. This is the
     * index of the token which has an arc going to this token. The index is the
     * position of the token in the array of tokens returned by the API method.
     * If this token is a root token, then the `head_token_index` is its own
     * index.
     */
    headTokenIndex?: number;
    /**
     * The parse label for the token.
     */
    label?: string;
  }
  /**
   * ################################################################ #
   * Represents the input to API methods.
   */
  export interface Schema$Document {
    /**
     * The content of the input in string format. Cloud audit logging exempt
     * since it is based on user data.
     */
    content?: string;
    /**
     * The Google Cloud Storage URI where the file content is located. This URI
     * must be of the form: gs://bucket_name/object_name. For more details, see
     * https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage
     * object versioning is not supported.
     */
    gcsContentUri?: string;
    /**
     * The language of the document (if not specified, the language is
     * automatically detected). Both ISO and BCP-47 language codes are
     * accepted.&lt;br&gt; [Language Support](/natural-language/docs/languages)
     * lists currently supported languages for each API method. If the language
     * (either specified by the caller or automatically detected) is not
     * supported by the called API method, an `INVALID_ARGUMENT` error is
     * returned.
     */
    language?: string;
    /**
     * Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an
     * `INVALID_ARGUMENT` error.
     */
    type?: string;
  }
  /**
   * Represents a phrase in the text that is a known entity, such as a person,
   * an organization, or location. The API associates information, such as
   * salience and mentions, with entities.
   */
  export interface Schema$Entity {
    /**
     * The mentions of this entity in the input document. The API currently
     * supports proper noun mentions.
     */
    mentions?: Schema$EntityMention[];
    /**
     * Metadata associated with the entity.  Currently, Wikipedia URLs and
     * Knowledge Graph MIDs are provided, if available. The associated keys are
     * &quot;wikipedia_url&quot; and &quot;mid&quot;, respectively.
     */
    metadata?: any;
    /**
     * The representative name for the entity.
     */
    name?: string;
    /**
     * The salience score associated with the entity in the [0, 1.0] range.  The
     * salience score for an entity provides information about the importance or
     * centrality of that entity to the entire document text. Scores closer to 0
     * are less salient, while scores closer to 1.0 are highly salient.
     */
    salience?: number;
    /**
     * For calls to AnalyzeEntitySentiment or if
     * AnnotateTextRequest.Features.extract_entity_sentiment is set to true,
     * this field will contain the aggregate sentiment expressed for this entity
     * in the provided document.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The entity type.
     */
    type?: string;
  }
  /**
   * Represents a mention for an entity in the text. Currently, proper noun
   * mentions are supported.
   */
  export interface Schema$EntityMention {
    /**
     * For calls to AnalyzeEntitySentiment or if
     * AnnotateTextRequest.Features.extract_entity_sentiment is set to true,
     * this field will contain the sentiment expressed for this mention of the
     * entity in the provided document.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The mention text.
     */
    text?: Schema$TextSpan;
    /**
     * The type of the entity mention.
     */
    type?: string;
  }
  /**
   * All available features for sentiment, syntax, and semantic analysis.
   * Setting each one to true will enable that specific analysis for the input.
   */
  export interface Schema$Features {
    /**
     * Classify the full document into categories. If this is true, the API will
     * use the default model which classifies into a [predefined
     * taxonomy](/natural-language/docs/categories).
     */
    classifyText?: boolean;
    /**
     * Extract document-level sentiment.
     */
    extractDocumentSentiment?: boolean;
    /**
     * Extract entities.
     */
    extractEntities?: boolean;
    /**
     * Extract entities and their associated sentiment.
     */
    extractEntitySentiment?: boolean;
    /**
     * Extract syntax information.
     */
    extractSyntax?: boolean;
  }
  /**
   * Represents part of speech information for a token.
   */
  export interface Schema$PartOfSpeech {
    /**
     * The grammatical aspect.
     */
    aspect?: string;
    /**
     * The grammatical case.
     */
    case?: string;
    /**
     * The grammatical form.
     */
    form?: string;
    /**
     * The grammatical gender.
     */
    gender?: string;
    /**
     * The grammatical mood.
     */
    mood?: string;
    /**
     * The grammatical number.
     */
    number?: string;
    /**
     * The grammatical person.
     */
    person?: string;
    /**
     * The grammatical properness.
     */
    proper?: string;
    /**
     * The grammatical reciprocity.
     */
    reciprocity?: string;
    /**
     * The part of speech tag.
     */
    tag?: string;
    /**
     * The grammatical tense.
     */
    tense?: string;
    /**
     * The grammatical voice.
     */
    voice?: string;
  }
  /**
   * Represents a sentence in the input document.
   */
  export interface Schema$Sentence {
    /**
     * For calls to AnalyzeSentiment or if
     * AnnotateTextRequest.Features.extract_document_sentiment is set to true,
     * this field will contain the sentiment for the sentence.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The sentence text.
     */
    text?: Schema$TextSpan;
  }
  /**
   * Represents the feeling associated with the entire text or entities in the
   * text.
   */
  export interface Schema$Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the
     * absolute magnitude of sentiment regardless of score (positive or
     * negative).
     */
    magnitude?: number;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive
     * sentiment).
     */
    score?: number;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Represents an output piece of text.
   */
  export interface Schema$TextSpan {
    /**
     * The API calculates the beginning offset of the content in the original
     * document according to the EncodingType specified in the API request.
     */
    beginOffset?: number;
    /**
     * The content of the output text.
     */
    content?: string;
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
     * [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the
     * token.
     */
    lemma?: string;
    /**
     * Parts of speech tag for this token.
     */
    partOfSpeech?: Schema$PartOfSpeech;
    /**
     * The token text.
     */
    text?: Schema$TextSpan;
  }


  export class Resource$Documents {
    root: Language;
    constructor(root: Language) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * language.documents.analyzeEntities
     * @desc Finds named entities (currently proper names and common nouns) in
     * the text along with entity types, salience, mentions for each entity, and
     * other properties.
     * @alias language.documents.analyzeEntities
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AnalyzeEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeEntities(
        params?: Params$Resource$Documents$Analyzeentities,
        options?: MethodOptions): AxiosPromise<Schema$AnalyzeEntitiesResponse>;
    analyzeEntities(
        params: Params$Resource$Documents$Analyzeentities,
        options: MethodOptions|
        BodyResponseCallback<Schema$AnalyzeEntitiesResponse>,
        callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>): void;
    analyzeEntities(
        params: Params$Resource$Documents$Analyzeentities,
        callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>): void;
    analyzeEntities(
        callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>): void;
    analyzeEntities(
        paramsOrCallback?: Params$Resource$Documents$Analyzeentities|
        BodyResponseCallback<Schema$AnalyzeEntitiesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnalyzeEntitiesResponse>,
        callback?: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>):
        void|AxiosPromise<Schema$AnalyzeEntitiesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Documents$Analyzeentities;
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
              url: (rootUrl + '/v1beta2/documents:analyzeEntities')
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
        createAPIRequest<Schema$AnalyzeEntitiesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnalyzeEntitiesResponse>(parameters);
      }
    }


    /**
     * language.documents.analyzeEntitySentiment
     * @desc Finds entities, similar to AnalyzeEntities in the text and analyzes
     * sentiment associated with each entity and its mentions.
     * @alias language.documents.analyzeEntitySentiment
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AnalyzeEntitySentimentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeEntitySentiment(
        params?: Params$Resource$Documents$Analyzeentitysentiment,
        options?: MethodOptions):
        AxiosPromise<Schema$AnalyzeEntitySentimentResponse>;
    analyzeEntitySentiment(
        params: Params$Resource$Documents$Analyzeentitysentiment,
        options: MethodOptions|
        BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>,
        callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>):
        void;
    analyzeEntitySentiment(
        params: Params$Resource$Documents$Analyzeentitysentiment,
        callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>):
        void;
    analyzeEntitySentiment(
        callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>):
        void;
    analyzeEntitySentiment(
        paramsOrCallback?: Params$Resource$Documents$Analyzeentitysentiment|
        BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>,
        callback?: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>):
        void|AxiosPromise<Schema$AnalyzeEntitySentimentResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Documents$Analyzeentitysentiment;
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
              url: (rootUrl + '/v1beta2/documents:analyzeEntitySentiment')
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
        createAPIRequest<Schema$AnalyzeEntitySentimentResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$AnalyzeEntitySentimentResponse>(
            parameters);
      }
    }


    /**
     * language.documents.analyzeSentiment
     * @desc Analyzes the sentiment of the provided text.
     * @alias language.documents.analyzeSentiment
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AnalyzeSentimentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeSentiment(
        params?: Params$Resource$Documents$Analyzesentiment,
        options?: MethodOptions): AxiosPromise<Schema$AnalyzeSentimentResponse>;
    analyzeSentiment(
        params: Params$Resource$Documents$Analyzesentiment,
        options: MethodOptions|
        BodyResponseCallback<Schema$AnalyzeSentimentResponse>,
        callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>): void;
    analyzeSentiment(
        params: Params$Resource$Documents$Analyzesentiment,
        callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>): void;
    analyzeSentiment(
        callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>): void;
    analyzeSentiment(
        paramsOrCallback?: Params$Resource$Documents$Analyzesentiment|
        BodyResponseCallback<Schema$AnalyzeSentimentResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnalyzeSentimentResponse>,
        callback?: BodyResponseCallback<Schema$AnalyzeSentimentResponse>):
        void|AxiosPromise<Schema$AnalyzeSentimentResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Documents$Analyzesentiment;
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
              url: (rootUrl + '/v1beta2/documents:analyzeSentiment')
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
        createAPIRequest<Schema$AnalyzeSentimentResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnalyzeSentimentResponse>(parameters);
      }
    }


    /**
     * language.documents.analyzeSyntax
     * @desc Analyzes the syntax of the text and provides sentence boundaries
     * and tokenization along with part of speech tags, dependency trees, and
     * other properties.
     * @alias language.documents.analyzeSyntax
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AnalyzeSyntaxRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeSyntax(
        params?: Params$Resource$Documents$Analyzesyntax,
        options?: MethodOptions): AxiosPromise<Schema$AnalyzeSyntaxResponse>;
    analyzeSyntax(
        params: Params$Resource$Documents$Analyzesyntax,
        options: MethodOptions|
        BodyResponseCallback<Schema$AnalyzeSyntaxResponse>,
        callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>): void;
    analyzeSyntax(
        params: Params$Resource$Documents$Analyzesyntax,
        callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>): void;
    analyzeSyntax(callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>):
        void;
    analyzeSyntax(
        paramsOrCallback?: Params$Resource$Documents$Analyzesyntax|
        BodyResponseCallback<Schema$AnalyzeSyntaxResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnalyzeSyntaxResponse>,
        callback?: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>):
        void|AxiosPromise<Schema$AnalyzeSyntaxResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Documents$Analyzesyntax;
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
              url: (rootUrl + '/v1beta2/documents:analyzeSyntax')
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
        createAPIRequest<Schema$AnalyzeSyntaxResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnalyzeSyntaxResponse>(parameters);
      }
    }


    /**
     * language.documents.annotateText
     * @desc A convenience method that provides all syntax, sentiment, entity,
     * and classification features in one call.
     * @alias language.documents.annotateText
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AnnotateTextRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotateText(
        params?: Params$Resource$Documents$Annotatetext,
        options?: MethodOptions): AxiosPromise<Schema$AnnotateTextResponse>;
    annotateText(
        params: Params$Resource$Documents$Annotatetext,
        options: MethodOptions|
        BodyResponseCallback<Schema$AnnotateTextResponse>,
        callback: BodyResponseCallback<Schema$AnnotateTextResponse>): void;
    annotateText(
        params: Params$Resource$Documents$Annotatetext,
        callback: BodyResponseCallback<Schema$AnnotateTextResponse>): void;
    annotateText(callback: BodyResponseCallback<Schema$AnnotateTextResponse>):
        void;
    annotateText(
        paramsOrCallback?: Params$Resource$Documents$Annotatetext|
        BodyResponseCallback<Schema$AnnotateTextResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnnotateTextResponse>,
        callback?: BodyResponseCallback<Schema$AnnotateTextResponse>):
        void|AxiosPromise<Schema$AnnotateTextResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Documents$Annotatetext;
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
              url: (rootUrl + '/v1beta2/documents:annotateText')
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
        createAPIRequest<Schema$AnnotateTextResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnnotateTextResponse>(parameters);
      }
    }


    /**
     * language.documents.classifyText
     * @desc Classifies a document into categories.
     * @alias language.documents.classifyText
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().ClassifyTextRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    classifyText(
        params?: Params$Resource$Documents$Classifytext,
        options?: MethodOptions): AxiosPromise<Schema$ClassifyTextResponse>;
    classifyText(
        params: Params$Resource$Documents$Classifytext,
        options: MethodOptions|
        BodyResponseCallback<Schema$ClassifyTextResponse>,
        callback: BodyResponseCallback<Schema$ClassifyTextResponse>): void;
    classifyText(
        params: Params$Resource$Documents$Classifytext,
        callback: BodyResponseCallback<Schema$ClassifyTextResponse>): void;
    classifyText(callback: BodyResponseCallback<Schema$ClassifyTextResponse>):
        void;
    classifyText(
        paramsOrCallback?: Params$Resource$Documents$Classifytext|
        BodyResponseCallback<Schema$ClassifyTextResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ClassifyTextResponse>,
        callback?: BodyResponseCallback<Schema$ClassifyTextResponse>):
        void|AxiosPromise<Schema$ClassifyTextResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Documents$Classifytext;
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
              url: (rootUrl + '/v1beta2/documents:classifyText')
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
        createAPIRequest<Schema$ClassifyTextResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ClassifyTextResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Documents$Analyzeentities {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeEntitiesRequest;
  }
  export interface Params$Resource$Documents$Analyzeentitysentiment {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeEntitySentimentRequest;
  }
  export interface Params$Resource$Documents$Analyzesentiment {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeSentimentRequest;
  }
  export interface Params$Resource$Documents$Analyzesyntax {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeSyntaxRequest;
  }
  export interface Params$Resource$Documents$Annotatetext {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$AnnotateTextRequest;
  }
  export interface Params$Resource$Documents$Classifytext {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$ClassifyTextRequest;
  }
}
