/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace commentanalyzer_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
  }

  interface StandardParameters {
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
   * Perspective Comment Analyzer API
   *
   * The Perspective Comment Analyzer API provides information about the potential impact of a comment on a conversation (e.g. it can provide a score for the &quot;toxicity&quot; of a comment). Users can leverage the &quot;SuggestCommentScore&quot; method to submit corrections to improve Perspective over time. Users can set the &quot;doNotStore&quot; flag to ensure that all submitted comments are automatically deleted after scores are returned.
   *
   * @example
   * const {google} = require('googleapis');
   * const commentanalyzer = google.commentanalyzer('v1alpha1');
   *
   * @namespace commentanalyzer
   * @type {Function}
   * @version v1alpha1
   * @variation v1alpha1
   * @param {object=} options Options for Commentanalyzer
   */
  export class Commentanalyzer {
    context: APIRequestContext;
    comments: Resource$Comments;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.comments = new Resource$Comments(this.context);
    }
  }

  /**
   * The comment analysis request message. LINT.IfChange
   */
  export interface Schema$AnalyzeCommentRequest {
    /**
     * Opaque token that is echoed from the request to the response.
     */
    clientToken?: string | null;
    /**
     * The comment to analyze.
     */
    comment?: Schema$TextEntry;
    /**
     * Optional identifier associating this AnalyzeCommentRequest with a particular client&#39;s community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients.
     */
    communityId?: string | null;
    /**
     * The context of the comment.
     */
    context?: Schema$Context;
    /**
     * Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes.
     */
    doNotStore?: boolean | null;
    /**
     * The language(s) of the comment and context (if none are specified, the language is automatically detected). If multiple languages are specified, the text is checked in all of them that are supported. Both ISO and BCP-47 language codes are accepted. Current Language Restrictions:  * Only English text (&quot;en&quot;) is supported. If none of the languages specified by the caller are supported, an `UNIMPLEMENTED` error is returned.
     */
    languages?: string[] | null;
    /**
     * Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The following attributes are available: &quot;ATTACK_ON_AUTHOR&quot; - Attack on author of original article or post. &quot;ATTACK_ON_COMMENTER&quot; - Attack on fellow commenter. &quot;ATTACK_ON_PUBLISHER&quot; - Attack on publisher of article/post. &quot;INCOHERENT&quot; - Difficult to understand, nonsensical. &quot;INFLAMMATORY&quot; - Intending to provoke or inflame. &quot;OBSCENE&quot; - Obscene, such as cursing. &quot;OFF_TOPIC&quot; - Not related to the original topic. &quot;SPAM&quot; - Commercial/advertising spam content. &quot;UNSUBSTANTIAL&quot; - Trivial.
     */
    requestedAttributes?: {[key: string]: Schema$AttributeParameters} | null;
    /**
     * Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.
     */
    sessionId?: string | null;
    /**
     * An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message.
     */
    spanAnnotations?: boolean | null;
  }
  /**
   * The comment analysis response message.
   */
  export interface Schema$AnalyzeCommentResponse {
    /**
     * Scores for the requested attributes. The map keys are attribute names (same as the requested_attribute field in AnalyzeCommentRequest, for example &quot;ATTACK_ON_AUTHOR&quot;, &quot;INFLAMMATORY&quot;, etc).
     */
    attributeScores?: {[key: string]: Schema$AttributeScores} | null;
    /**
     * Same token from the original AnalyzeCommentRequest.
     */
    clientToken?: string | null;
    /**
     * Contains the languages detected from the text content, sorted in order of likelihood.
     */
    detectedLanguages?: string[] | null;
    /**
     * The language(s) used by CommentAnalyzer service to choose which Model to use when analyzing the comment. Might better be called &quot;effective_languages&quot;. The logic used to make the choice is as follows:   if Request.languages.empty()     effective_languages = detected_languages   else     effective_languages = Request.languages
     */
    languages?: string[] | null;
  }
  /**
   * A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.
   */
  export interface Schema$ArticleAndParentComment {
    /**
     * The source content about which the comment was made (article text, article summary, video transcript, etc).
     */
    article?: Schema$TextEntry;
    /**
     * Refers to text that is a direct parent of the source comment, such as in a one-deep threaded message board. This field will only be present for comments that are replies to other comments and will not be populated for direct comments on the article_text.
     */
    parentComment?: Schema$TextEntry;
  }
  /**
   * Configurable parameters for attribute scoring.
   */
  export interface Schema$AttributeParameters {
    /**
     * Don&#39;t return scores for this attribute that are below this threshold. If unset, a default threshold will be applied. A FloatValue wrapper is used to distinguish between 0 vs. default/unset.
     */
    scoreThreshold?: number | null;
    /**
     * What type of scores to return. If unset, defaults to probability scores.
     */
    scoreType?: string | null;
  }
  /**
   * This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..
   */
  export interface Schema$AttributeScores {
    /**
     * Per-span scores.
     */
    spanScores?: Schema$SpanScore[];
    /**
     * Overall score for comment as a whole.
     */
    summaryScore?: Schema$Score;
  }
  /**
   * Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
   */
  export interface Schema$Context {
    /**
     * Information about the source for which the original comment was made, and any parent comment info.
     */
    articleAndParentComment?: Schema$ArticleAndParentComment;
    /**
     * A list of messages. For example, a linear comments section or forum thread.
     */
    entries?: Schema$TextEntry[];
  }
  /**
   * Analysis scores are described by a value and a ScoreType.
   */
  export interface Schema$Score {
    /**
     * The type of the above value.
     */
    type?: string | null;
    /**
     * Score value. Semantics described by type below.
     */
    value?: number | null;
  }
  /**
   * This is a single score for a given span of text.
   */
  export interface Schema$SpanScore {
    /**
     * &quot;begin&quot; and &quot;end&quot; describe the span of the original text that the attribute score applies to. The values are the UTF-16 codepoint range. &quot;end&quot; is exclusive. For example, with the text &quot;Hi there&quot;, the begin/end pair (0,2) describes the text &quot;Hi&quot;.  If &quot;begin&quot; and &quot;end&quot; are unset, the score applies to the full text.
     */
    begin?: number | null;
    end?: number | null;
    /**
     * The score value.
     */
    score?: Schema$Score;
  }
  /**
   * The comment score suggestion request message.
   */
  export interface Schema$SuggestCommentScoreRequest {
    /**
     * Attribute scores for the comment. The map keys are attribute names, same as the requested_attribute field in AnalyzeCommentRequest (for example &quot;ATTACK_ON_AUTHOR&quot;, &quot;INFLAMMATORY&quot;, etc.). This field has the same type as the `attribute_scores` field in AnalyzeCommentResponse.  To specify an overall attribute score for the entire comment as a whole, use the `summary_score` field of the mapped AttributeScores object. To specify scores on specific subparts of the comment, use the `span_scores` field. All SpanScore objects must have begin and end fields set.  All Score objects must be explicitly set (for binary classification, use the score values 0 and 1). If Score objects don&#39;t include a ScoreType, `PROBABILITY` is assumed.  `attribute_scores` must not be empty. The mapped AttributeScores objects also must not be empty. An `INVALID_ARGUMENT` error is returned for all malformed requests.
     */
    attributeScores?: {[key: string]: Schema$AttributeScores} | null;
    /**
     * Opaque token that is echoed from the request to the response.
     */
    clientToken?: string | null;
    /**
     * The comment being scored.
     */
    comment?: Schema$TextEntry;
    /**
     * Optional identifier associating this comment score suggestion with a particular sub-community. Different communities may have different norms and rules. Specifying this value enables training community-specific models.
     */
    communityId?: string | null;
    /**
     * The context of the comment.
     */
    context?: Schema$Context;
    /**
     * The language(s) of the comment and context (if none are specified, the language is automatically detected). If multiple languages are specified, the text is checked in all of them that are supported. Both ISO and BCP-47 language codes are accepted. Current Language Restrictions:  * Only English text (&quot;en&quot;) is supported. If none of the languages specified by the caller are supported, an `UNIMPLEMENTED` error is returned.
     */
    languages?: string[] | null;
    /**
     * Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.
     */
    sessionId?: string | null;
  }
  /**
   * The comment score suggestion response message.
   */
  export interface Schema$SuggestCommentScoreResponse {
    /**
     * Same token from the original SuggestCommentScoreRequest.
     */
    clientToken?: string | null;
    /**
     * The list of languages detected from the comment text.
     */
    detectedLanguages?: string[] | null;
    /**
     * The list of languages provided in the request.
     */
    requestedLanguages?: string[] | null;
  }
  /**
   * Represents a body of text.
   */
  export interface Schema$TextEntry {
    /**
     * UTF-8 encoded text.
     */
    text?: string | null;
    /**
     * Type of the text field.
     */
    type?: string | null;
  }

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * commentanalyzer.comments.analyze
     * @desc Analyzes the provided text and returns scores for requested attributes.
     * @alias commentanalyzer.comments.analyze
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AnalyzeCommentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyze(
      params?: Params$Resource$Comments$Analyze,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyzeCommentResponse>;
    analyze(
      params: Params$Resource$Comments$Analyze,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeCommentResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeCommentResponse>
    ): void;
    analyze(
      params: Params$Resource$Comments$Analyze,
      callback: BodyResponseCallback<Schema$AnalyzeCommentResponse>
    ): void;
    analyze(
      callback: BodyResponseCallback<Schema$AnalyzeCommentResponse>
    ): void;
    analyze(
      paramsOrCallback?:
        | Params$Resource$Comments$Analyze
        | BodyResponseCallback<Schema$AnalyzeCommentResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeCommentResponse>,
      callback?: BodyResponseCallback<Schema$AnalyzeCommentResponse>
    ): void | GaxiosPromise<Schema$AnalyzeCommentResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Analyze;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Analyze;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://commentanalyzer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/comments:analyze').replace(
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
        createAPIRequest<Schema$AnalyzeCommentResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnalyzeCommentResponse>(parameters);
      }
    }

    /**
     * commentanalyzer.comments.suggestscore
     * @desc Suggest comment scores as training data.
     * @alias commentanalyzer.comments.suggestscore
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SuggestCommentScoreRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    suggestscore(
      params?: Params$Resource$Comments$Suggestscore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SuggestCommentScoreResponse>;
    suggestscore(
      params: Params$Resource$Comments$Suggestscore,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SuggestCommentScoreResponse>,
      callback: BodyResponseCallback<Schema$SuggestCommentScoreResponse>
    ): void;
    suggestscore(
      params: Params$Resource$Comments$Suggestscore,
      callback: BodyResponseCallback<Schema$SuggestCommentScoreResponse>
    ): void;
    suggestscore(
      callback: BodyResponseCallback<Schema$SuggestCommentScoreResponse>
    ): void;
    suggestscore(
      paramsOrCallback?:
        | Params$Resource$Comments$Suggestscore
        | BodyResponseCallback<Schema$SuggestCommentScoreResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SuggestCommentScoreResponse>,
      callback?: BodyResponseCallback<Schema$SuggestCommentScoreResponse>
    ): void | GaxiosPromise<Schema$SuggestCommentScoreResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Comments$Suggestscore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Suggestscore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://commentanalyzer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/comments:suggestscore').replace(
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
        createAPIRequest<Schema$SuggestCommentScoreResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SuggestCommentScoreResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Analyze extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeCommentRequest;
  }
  export interface Params$Resource$Comments$Suggestscore
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SuggestCommentScoreRequest;
  }
}
