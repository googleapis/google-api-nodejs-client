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

export namespace contactcenterinsights_v1 {
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
   * Contact Center AI Insights API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const contactcenterinsights = google.contactcenterinsights('v1');
   * ```
   */
  export class Contactcenterinsights {
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
   * The analysis resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1Analysis {
    /**
     * Output only. The result of the analysis, which is populated when the analysis finishes.
     */
    analysisResult?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnalysisResult;
    /**
     * To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.
     */
    annotatorSelector?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector;
    /**
     * Output only. The time at which the analysis was created, which occurs when the long-running operation completes.
     */
    createTime?: string | null;
    /**
     * Immutable. The resource name of the analysis. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}/analyses/{analysis\}
     */
    name?: string | null;
    /**
     * Output only. The time at which the analysis was requested.
     */
    requestTime?: string | null;
  }
  /**
   * The result of an analysis.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1AnalysisResult {
    /**
     * Call-specific metadata created by the analysis.
     */
    callAnalysisMetadata?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata;
    /**
     * The time at which the analysis ended.
     */
    endTime?: string | null;
  }
  /**
   * Call-specific metadata created during analysis.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata {
    /**
     * A list of call annotations that apply to this call.
     */
    annotations?: Schema$GoogleCloudContactcenterinsightsV1alpha1CallAnnotation[];
    /**
     * All the entities in the call.
     */
    entities?: {
      [key: string]: Schema$GoogleCloudContactcenterinsightsV1alpha1Entity;
    } | null;
    /**
     * All the matched intents in the call.
     */
    intents?: {
      [key: string]: Schema$GoogleCloudContactcenterinsightsV1alpha1Intent;
    } | null;
    /**
     * Overall conversation-level issue modeling result.
     */
    issueModelResult?: Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModelResult;
    /**
     * All the matched phrase matchers in the call.
     */
    phraseMatchers?: {
      [
        key: string
      ]: Schema$GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData;
    } | null;
    /**
     * Overall conversation-level sentiment for each channel of the call.
     */
    sentiments?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment[];
  }
  /**
   * A point in a conversation that marks the start or the end of an annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary {
    /**
     * The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero.
     */
    transcriptIndex?: number | null;
    /**
     * The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero.
     */
    wordIndex?: number | null;
  }
  /**
   * Selector of all available annotators and phrase matchers to run.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector {
    /**
     * The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference.
     */
    issueModels?: string[] | null;
    /**
     * The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project\}/locations/{location\}/phraseMatchers/{phrase_matcher\}
     */
    phraseMatchers?: string[] | null;
    /**
     * Whether to run the entity annotator.
     */
    runEntityAnnotator?: boolean | null;
    /**
     * Whether to run the intent annotator.
     */
    runIntentAnnotator?: boolean | null;
    /**
     * Whether to run the interruption annotator.
     */
    runInterruptionAnnotator?: boolean | null;
    /**
     * Whether to run the issue model annotator. A model should have already been deployed for this to take effect.
     */
    runIssueModelAnnotator?: boolean | null;
    /**
     * Whether to run the active phrase matcher annotator(s).
     */
    runPhraseMatcherAnnotator?: boolean | null;
    /**
     * Whether to run the sentiment annotator.
     */
    runSentimentAnnotator?: boolean | null;
    /**
     * Whether to run the silence annotator.
     */
    runSilenceAnnotator?: boolean | null;
    /**
     * Whether to run the summarization annotator.
     */
    runSummarizationAnnotator?: boolean | null;
    /**
     * Configuration for the summarization annotator.
     */
    summarizationConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig;
  }
  /**
   * Configuration for summarization.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig {
    /**
     * Resource name of the Dialogflow conversation profile. Format: projects/{project\}/locations/{location\}/conversationProfiles/{conversation_profile\}
     */
    conversationProfile?: string | null;
    /**
     * Default summarization model to be used.
     */
    summarizationModel?: string | null;
  }
  /**
   * The feedback that the customer has about a certain answer in the conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback {
    /**
     * Indicates whether an answer or item was clicked by the human agent.
     */
    clicked?: boolean | null;
    /**
     * The correctness level of an answer.
     */
    correctnessLevel?: string | null;
    /**
     * Indicates whether an answer or item was displayed to the human agent in the agent desktop UI.
     */
    displayed?: boolean | null;
  }
  /**
   * Agent Assist Article Suggestion data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData {
    /**
     * The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number | null;
    /**
     * Map that contains metadata about the Article Suggestion and the document that it originates from.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    queryRecord?: string | null;
    /**
     * The knowledge document that this answer was extracted from. Format: projects/{project\}/knowledgeBases/{knowledge_base\}/documents/{document\}
     */
    source?: string | null;
    /**
     * Article title.
     */
    title?: string | null;
    /**
     * Article URI.
     */
    uri?: string | null;
  }
  /**
   * The metadata for a bulk analyze conversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadata {
    /**
     * The number of requested analyses that have completed successfully so far.
     */
    completedAnalysesCount?: number | null;
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The number of requested analyses that have failed so far.
     */
    failedAnalysesCount?: number | null;
    /**
     * Output only. Partial errors during bulk analyze operation that might cause the operation output to be incomplete.
     */
    partialErrors?: Schema$GoogleRpcStatus[];
    /**
     * The original request for bulk analyze.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest;
    /**
     * Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request.
     */
    totalRequestedAnalysesCount?: number | null;
  }
  /**
   * The request to analyze conversations in bulk.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest {
    /**
     * Required. Percentage of selected conversation to analyze, between [0, 100].
     */
    analysisPercentage?: number | null;
    /**
     * To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.
     */
    annotatorSelector?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector;
    /**
     * Required. Filter used to select the subset of conversations to analyze.
     */
    filter?: string | null;
    /**
     * Required. The parent resource to create analyses in.
     */
    parent?: string | null;
  }
  /**
   * The response for a bulk analyze conversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponse {
    /**
     * Count of failed analyses.
     */
    failedAnalysisCount?: number | null;
    /**
     * Count of successful analyses.
     */
    successfulAnalysisCount?: number | null;
  }
  /**
   * The metadata for a bulk delete conversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsMetadata {
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Partial errors during bulk delete conversations operation that might cause the operation output to be incomplete.
     */
    partialErrors?: Schema$GoogleRpcStatus[];
    /**
     * The original request for bulk delete.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsRequest;
  }
  /**
   * The request to delete conversations in bulk.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsRequest {
    /**
     * Filter used to select the subset of conversations to delete.
     */
    filter?: string | null;
    /**
     * If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     */
    force?: boolean | null;
    /**
     * Maximum number of conversations to delete.
     */
    maxDeleteCount?: number | null;
    /**
     * Required. The parent resource to delete conversations from. Format: projects/{project\}/locations/{location\}
     */
    parent?: string | null;
  }
  /**
   * The response for a bulk delete conversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsResponse {}
  /**
   * A piece of metadata that applies to a window of a call.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1CallAnnotation {
    /**
     * The boundary in the conversation where the annotation ends, inclusive.
     */
    annotationEndBoundary?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary;
    /**
     * The boundary in the conversation where the annotation starts, inclusive.
     */
    annotationStartBoundary?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary;
    /**
     * The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated.
     */
    channelTag?: number | null;
    /**
     * Data specifying an entity mention.
     */
    entityMentionData?: Schema$GoogleCloudContactcenterinsightsV1alpha1EntityMentionData;
    /**
     * Data specifying a hold.
     */
    holdData?: Schema$GoogleCloudContactcenterinsightsV1alpha1HoldData;
    /**
     * Data specifying an intent match.
     */
    intentMatchData?: Schema$GoogleCloudContactcenterinsightsV1alpha1IntentMatchData;
    /**
     * Data specifying an interruption.
     */
    interruptionData?: Schema$GoogleCloudContactcenterinsightsV1alpha1InterruptionData;
    /**
     * Data specifying an issue match.
     */
    issueMatchData?: Schema$GoogleCloudContactcenterinsightsV1alpha1IssueMatchData;
    /**
     * Data specifying a phrase match.
     */
    phraseMatchData?: Schema$GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData;
    /**
     * Data specifying sentiment.
     */
    sentimentData?: Schema$GoogleCloudContactcenterinsightsV1alpha1SentimentData;
    /**
     * Data specifying silence.
     */
    silenceData?: Schema$GoogleCloudContactcenterinsightsV1alpha1SilenceData;
  }
  /**
   * The conversation resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1Conversation {
    /**
     * An opaque, user-specified string representing the human agent who handled the conversation.
     */
    agentId?: string | null;
    /**
     * Call-specific metadata.
     */
    callMetadata?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata;
    /**
     * Output only. The time at which the conversation was created.
     */
    createTime?: string | null;
    /**
     * The source of the audio and transcription for the conversation.
     */
    dataSource?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource;
    /**
     * Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project\}/agent/{agent\}/intents/{intent\}
     */
    dialogflowIntents?: {
      [
        key: string
      ]: Schema$GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent;
    } | null;
    /**
     * Output only. The duration of the conversation.
     */
    duration?: string | null;
    /**
     * The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.
     */
    expireTime?: string | null;
    /**
     * A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.
     */
    labels?: {[key: string]: string} | null;
    /**
     * A user-specified language code for the conversation.
     */
    languageCode?: string | null;
    /**
     * Output only. The conversation's latest analysis, if one exists.
     */
    latestAnalysis?: Schema$GoogleCloudContactcenterinsightsV1alpha1Analysis;
    /**
     * Output only. Latest summary of the conversation.
     */
    latestSummary?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData;
    /**
     * Immutable. The conversation medium, if unspecified will default to PHONE_CALL.
     */
    medium?: string | null;
    /**
     * Immutable. The resource name of the conversation. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}
     */
    name?: string | null;
    /**
     * Obfuscated user ID which the customer sent to us.
     */
    obfuscatedUserId?: string | null;
    /**
     * Conversation metadata related to quality management.
     */
    qualityMetadata?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadata;
    /**
     * Output only. The annotations that were generated during the customer and agent interaction.
     */
    runtimeAnnotations?: Schema$GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation[];
    /**
     * The time at which the conversation started.
     */
    startTime?: string | null;
    /**
     * Output only. The conversation transcript.
     */
    transcript?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript;
    /**
     * Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.
     */
    ttl?: string | null;
    /**
     * Output only. The number of turns in the conversation.
     */
    turnCount?: number | null;
    /**
     * Output only. The most recent time at which the conversation was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Call-specific metadata.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata {
    /**
     * The audio channel that contains the agent.
     */
    agentChannel?: number | null;
    /**
     * The audio channel that contains the customer.
     */
    customerChannel?: number | null;
  }
  /**
   * The conversation source, which is a combination of transcript and audio.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource {
    /**
     * The source when the conversation comes from Dialogflow.
     */
    dialogflowSource?: Schema$GoogleCloudContactcenterinsightsV1alpha1DialogflowSource;
    /**
     * A Cloud Storage location specification for the audio and transcript.
     */
    gcsSource?: Schema$GoogleCloudContactcenterinsightsV1alpha1GcsSource;
  }
  /**
   * One channel of conversation-level sentiment data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment {
    /**
     * The channel of the audio that the data applies to.
     */
    channelTag?: number | null;
    /**
     * Data specifying sentiment.
     */
    sentimentData?: Schema$GoogleCloudContactcenterinsightsV1alpha1SentimentData;
  }
  /**
   * The call participant speaking for a given utterance.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant {
    /**
     * Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}/participants/{participant\}
     */
    dialogflowParticipant?: string | null;
    /**
     * The name of the participant provided by Dialogflow. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}/participants/{participant\}
     */
    dialogflowParticipantName?: string | null;
    /**
     * Obfuscated user ID from Dialogflow.
     */
    obfuscatedExternalUserId?: string | null;
    /**
     * The role of the participant.
     */
    role?: string | null;
    /**
     * A user-specified ID representing the participant.
     */
    userId?: string | null;
  }
  /**
   * Conversation metadata related to quality management.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadata {
    /**
     * Information about agents involved in the call.
     */
    agentInfo?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo[];
    /**
     * An arbitrary integer value indicating the customer's satisfaction rating.
     */
    customerSatisfactionRating?: number | null;
    /**
     * An arbitrary string value specifying the menu path the customer took.
     */
    menuPath?: string | null;
    /**
     * The amount of time the customer waited to connect with an agent.
     */
    waitDuration?: string | null;
  }
  /**
   * Information about an agent involved in the conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo {
    /**
     * A user-specified string representing the agent.
     */
    agentId?: string | null;
    /**
     * The agent's name.
     */
    displayName?: string | null;
    /**
     * A user-provided string indicating the outcome of the agent's segment of the call.
     */
    dispositionCode?: string | null;
    /**
     * A user-specified string representing the agent's team.
     */
    team?: string | null;
  }
  /**
   * Conversation summarization suggestion data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData {
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    answerRecord?: string | null;
    /**
     * The confidence score of the summarization.
     */
    confidence?: number | null;
    /**
     * The name of the model that generates this summary. Format: projects/{project\}/locations/{location\}/conversationModels/{conversation_model\}
     */
    conversationModel?: string | null;
    /**
     * A map that contains metadata about the summarization and the document from which it originates.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The summarization content that is concatenated into one string.
     */
    text?: string | null;
    /**
     * The summarization content that is divided into sections. The key is the section's name and the value is the section's content. There is no specific format for the key or value.
     */
    textSections?: {[key: string]: string} | null;
  }
  /**
   * A message representing the transcript of a conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript {
    /**
     * A list of sequential transcript segments that comprise the conversation.
     */
    transcriptSegments?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment[];
  }
  /**
   * A segment of a full transcript.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment {
    /**
     * For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono.
     */
    channelTag?: number | null;
    /**
     * A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset.
     */
    confidence?: number | null;
    /**
     * CCAI metadata relating to the current transcript segment.
     */
    dialogflowSegmentMetadata?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;
    /**
     * The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string | null;
    /**
     * The time that the message occurred, if provided.
     */
    messageTime?: string | null;
    /**
     * The participant of this segment.
     */
    segmentParticipant?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant;
    /**
     * The sentiment for this transcript segment.
     */
    sentiment?: Schema$GoogleCloudContactcenterinsightsV1alpha1SentimentData;
    /**
     * The text of this segment.
     */
    text?: string | null;
    /**
     * A list of the word-specific information for each word in the segment.
     */
    words?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo[];
  }
  /**
   * Metadata from Dialogflow relating to the current transcript segment.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata {
    /**
     * Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist.
     */
    smartReplyAllowlistCovered?: boolean | null;
  }
  /**
   * Word-level info for words in a transcript.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo {
    /**
     * A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset.
     */
    confidence?: number | null;
    /**
     * Time offset of the end of this word relative to the beginning of the total conversation.
     */
    endOffset?: string | null;
    /**
     * Time offset of the start of this word relative to the beginning of the total conversation.
     */
    startOffset?: string | null;
    /**
     * The word itself. Includes punctuation marks that surround the word.
     */
    word?: string | null;
  }
  /**
   * Metadata for a create analysis operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadata {
    /**
     * Output only. The annotator selector used for the analysis (if any).
     */
    annotatorSelector?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector;
    /**
     * Output only. The Conversation that this Analysis Operation belongs to.
     */
    conversation?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
  }
  /**
   * Metadata for creating an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original request for creation.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest;
  }
  /**
   * The request to create an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest {
    /**
     * Required. The issue model to create.
     */
    issueModel?: Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModel;
    /**
     * Required. The parent resource of the issue model.
     */
    parent?: string | null;
  }
  /**
   * Metadata for deleting an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original request for deletion.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest;
  }
  /**
   * The request to delete an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest {
    /**
     * Required. The name of the issue model to delete.
     */
    name?: string | null;
  }
  /**
   * Metadata for deploying an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original request for deployment.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest;
  }
  /**
   * The request to deploy an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest {
    /**
     * Required. The issue model to deploy.
     */
    name?: string | null;
  }
  /**
   * The response to deploy an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponse {}
  /**
   * The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent {
    /**
     * The human-readable name of the intent.
     */
    displayName?: string | null;
  }
  /**
   * Dialogflow interaction data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData {
    /**
     * The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidence?: number | null;
    /**
     * The Dialogflow intent resource path. Format: projects/{project\}/agent/{agent\}/intents/{intent\}
     */
    dialogflowIntentId?: string | null;
  }
  /**
   * A Dialogflow source of conversation data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1DialogflowSource {
    /**
     * Cloud Storage URI that points to a file that contains the conversation audio.
     */
    audioUri?: string | null;
    /**
     * Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}
     */
    dialogflowConversation?: string | null;
  }
  /**
   * The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1Entity {
    /**
     * The representative name for the entity.
     */
    displayName?: string | null;
    /**
     * Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
     */
    salience?: number | null;
    /**
     * The aggregate sentiment expressed for this entity in the conversation.
     */
    sentiment?: Schema$GoogleCloudContactcenterinsightsV1alpha1SentimentData;
    /**
     * The entity type.
     */
    type?: string | null;
  }
  /**
   * The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1EntityMentionData {
    /**
     * The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to.
     */
    entityUniqueId?: string | null;
    /**
     * Sentiment expressed for this mention of the entity.
     */
    sentiment?: Schema$GoogleCloudContactcenterinsightsV1alpha1SentimentData;
    /**
     * The type of the entity mention.
     */
    type?: string | null;
  }
  /**
   * Metadata for an export insights operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Partial errors during export operation that might cause the operation output to be incomplete.
     */
    partialErrors?: Schema$GoogleRpcStatus[];
    /**
     * The original request for export.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest;
  }
  /**
   * The request to export insights.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest {
    /**
     * Specified if sink is a BigQuery table.
     */
    bigQueryDestination?: Schema$GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination;
    /**
     * A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties.
     */
    filter?: string | null;
    /**
     * A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project\}/locations/{location\}/keyRings/{keyring\}/cryptoKeys/{key\}/cryptoKeyVersions/{version\}
     */
    kmsKey?: string | null;
    /**
     * Required. The parent resource to export data from.
     */
    parent?: string | null;
    /**
     * Options for what to do if the destination table already exists.
     */
    writeDisposition?: string | null;
  }
  /**
   * A BigQuery Table Reference.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination {
    /**
     * Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.
     */
    dataset?: string | null;
    /**
     * A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used.
     */
    projectId?: string | null;
    /**
     * The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error.
     */
    table?: string | null;
  }
  /**
   * Response for an export insights operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponse {}
  /**
   * Metadata used for export issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ExportIssueModelMetadata {
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original export request.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1ExportIssueModelRequest;
  }
  /**
   * Request to export an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ExportIssueModelRequest {
    /**
     * Google Cloud Storage URI to export the Issue Model to.
     */
    gcsDestination?: Schema$GoogleCloudContactcenterinsightsV1alpha1ExportIssueModelRequestGcsDestination;
    /**
     * Required. The issue model to export
     */
    name?: string | null;
  }
  /**
   * Google Cloud Storage Object URI to save the issue model to.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ExportIssueModelRequestGcsDestination {
    /**
     * Required. Format: `gs:///`
     */
    objectUri?: string | null;
  }
  /**
   * Response from export issue model
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ExportIssueModelResponse {}
  /**
   * Agent Assist frequently-asked-question answer data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData {
    /**
     * The piece of text from the `source` knowledge base document.
     */
    answer?: string | null;
    /**
     * The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number | null;
    /**
     * Map that contains metadata about the FAQ answer and the document that it originates from.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    queryRecord?: string | null;
    /**
     * The corresponding FAQ question.
     */
    question?: string | null;
    /**
     * The knowledge document that this answer was extracted from. Format: projects/{project\}/knowledgeBases/{knowledge_base\}/documents/{document\}.
     */
    source?: string | null;
  }
  /**
   * A Cloud Storage source of conversation data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1GcsSource {
    /**
     * Cloud Storage URI that points to a file that contains the conversation audio.
     */
    audioUri?: string | null;
    /**
     * Immutable. Cloud Storage URI that points to a file that contains the conversation transcript.
     */
    transcriptUri?: string | null;
  }
  /**
   * The data for a hold annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1HoldData {}
  /**
   * Metadata used for import issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelMetadata {
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original import request.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest;
  }
  /**
   * Request to import an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest {
    /**
     * Optional. If set to true, will create a new issue model from the imported file with randomly generated IDs for the issue model and corresponding issues. Otherwise, replaces an existing model with the same ID as the file.
     */
    createNewModel?: boolean | null;
    /**
     * Google Cloud Storage source message.
     */
    gcsSource?: Schema$GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource;
    /**
     * Required. The parent resource of the issue model.
     */
    parent?: string | null;
  }
  /**
   * Google Cloud Storage Object URI to get the issue model file from.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource {
    /**
     * Required. Format: `gs:///`
     */
    objectUri?: string | null;
  }
  /**
   * Response from import issue model
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelResponse {}
  /**
   * The metadata for an IngestConversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Statistics for IngestConversations operation.
     */
    ingestConversationsStats?: Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats;
    /**
     * Output only. Partial errors during ingest operation that might cause the operation output to be incomplete.
     */
    partialErrors?: Schema$GoogleRpcStatus[];
    /**
     * Output only. The original request for ingest.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest;
  }
  /**
   * Statistics for IngestConversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats {
    /**
     * Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested.
     */
    duplicatesSkippedCount?: number | null;
    /**
     * Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field.
     */
    failedIngestCount?: number | null;
    /**
     * Output only. The number of objects processed during the ingest operation.
     */
    processedObjectCount?: number | null;
    /**
     * Output only. The number of new conversations added during this ingest operation.
     */
    successfulIngestCount?: number | null;
  }
  /**
   * The request to ingest conversations.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest {
    /**
     * Configuration that applies to all conversations.
     */
    conversationConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig;
    /**
     * A cloud storage bucket source. Note that any previously ingested objects from the source will be skipped to avoid duplication.
     */
    gcsSource?: Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource;
    /**
     * Required. The parent resource for new conversations.
     */
    parent?: string | null;
    /**
     * Optional. DLP settings for transcript redaction. Optional, will default to the config specified in Settings.
     */
    redactionConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1RedactionConfig;
    /**
     * Optional. Default Speech-to-Text configuration. Optional, will default to the config specified in Settings.
     */
    speechConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1SpeechConfig;
    /**
     * Configuration for when `source` contains conversation transcripts.
     */
    transcriptObjectConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig;
  }
  /**
   * Configuration that applies to all conversations.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig {
    /**
     * Optional. Indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for conversations to be properly displayed and analyzed.
     */
    agentChannel?: number | null;
    /**
     * An opaque, user-specified string representing the human agent who handled the conversations.
     */
    agentId?: string | null;
    /**
     * Optional. Indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for conversations to be properly displayed and analyzed.
     */
    customerChannel?: number | null;
  }
  /**
   * Configuration for Cloud Storage bucket sources.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource {
    /**
     * Optional. Specifies the type of the objects in `bucket_uri`.
     */
    bucketObjectType?: string | null;
    /**
     * Required. The Cloud Storage bucket containing source objects.
     */
    bucketUri?: string | null;
    /**
     * Optional. Custom keys to extract as conversation labels from metadata files in `metadata_bucket_uri`. Keys not included in this field will be ignored. Note that there is a limit of 20 labels per conversation.
     */
    customMetadataKeys?: string[] | null;
    /**
     * Optional. The Cloud Storage path to the source object metadata. Note that: [1] metadata files are expected to be in JSON format [2] metadata and source objects must be in separate buckets [3] a source object's metadata object must share the same name to be properly ingested
     */
    metadataBucketUri?: string | null;
  }
  /**
   * Configuration for processing transcript objects.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig {
    /**
     * Required. The medium transcript objects represent.
     */
    medium?: string | null;
  }
  /**
   * The response to an IngestConversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponse {}
  /**
   * The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1Intent {
    /**
     * The human-readable name of the intent.
     */
    displayName?: string | null;
    /**
     * The unique identifier of the intent.
     */
    id?: string | null;
  }
  /**
   * The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IntentMatchData {
    /**
     * The id of the matched intent. Can be used to retrieve the corresponding intent information.
     */
    intentUniqueId?: string | null;
  }
  /**
   * The data for an interruption annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1InterruptionData {}
  /**
   * Information about the issue.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IssueAssignment {
    /**
     * Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then.
     */
    displayName?: string | null;
    /**
     * Resource name of the assigned issue.
     */
    issue?: string | null;
    /**
     * Score indicating the likelihood of the issue assignment. currently bounded on [0,1].
     */
    score?: number | null;
  }
  /**
   * The data for an issue match annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IssueMatchData {
    /**
     * Information about the issue's assignment.
     */
    issueAssignment?: Schema$GoogleCloudContactcenterinsightsV1alpha1IssueAssignment;
  }
  /**
   * The issue model resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModel {
    /**
     * Output only. The time at which this issue model was created.
     */
    createTime?: string | null;
    /**
     * The representative name for the issue model.
     */
    displayName?: string | null;
    /**
     * Configs for the input data that used to create the issue model.
     */
    inputDataConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig;
    /**
     * Output only. Number of issues in this issue model.
     */
    issueCount?: string | null;
    /**
     * Language of the model.
     */
    languageCode?: string | null;
    /**
     * Type of the model.
     */
    modelType?: string | null;
    /**
     * Immutable. The resource name of the issue model. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}
     */
    name?: string | null;
    /**
     * Output only. State of the model.
     */
    state?: string | null;
    /**
     * Output only. Immutable. The issue model's label statistics on its training data.
     */
    trainingStats?: Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats;
    /**
     * Output only. The most recent time at which the issue model was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configs for the input data used to create the issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig {
    /**
     * A filter to reduce the conversations used for training the model to a specific subset.
     */
    filter?: string | null;
    /**
     * Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.
     */
    medium?: string | null;
    /**
     * Output only. Number of conversations used in training. Output only.
     */
    trainingConversationsCount?: string | null;
  }
  /**
   * Aggregated statistics about an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats {
    /**
     * Number of conversations the issue model has analyzed at this point in time.
     */
    analyzedConversationsCount?: string | null;
    /**
     * Statistics on each issue. Key is the issue's resource name.
     */
    issueStats?: {
      [
        key: string
      ]: Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats;
    } | null;
    /**
     * Number of analyzed conversations for which no issue was applicable at this point in time.
     */
    unclassifiedConversationsCount?: string | null;
  }
  /**
   * Aggregated statistics about an issue.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats {
    /**
     * Display name of the issue.
     */
    displayName?: string | null;
    /**
     * Issue resource. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}/issues/{issue\}
     */
    issue?: string | null;
    /**
     * Number of conversations attached to the issue at this point in time.
     */
    labeledConversationsCount?: string | null;
  }
  /**
   * Issue Modeling result on a conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1IssueModelResult {
    /**
     * Issue model that generates the result. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}
     */
    issueModel?: string | null;
    /**
     * All the matched issues.
     */
    issues?: Schema$GoogleCloudContactcenterinsightsV1alpha1IssueAssignment[];
  }
  /**
   * The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData {
    /**
     * The human-readable name of the phrase matcher.
     */
    displayName?: string | null;
    /**
     * The unique identifier (the resource name) of the phrase matcher.
     */
    phraseMatcher?: string | null;
  }
  /**
   * DLP resources used for redaction while ingesting conversations.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1RedactionConfig {
    /**
     * The fully-qualified DLP deidentify template resource name. Format: `projects/{project\}/deidentifyTemplates/{template\}`
     */
    deidentifyTemplate?: string | null;
    /**
     * The fully-qualified DLP inspect template resource name. Format: `projects/{project\}/locations/{location\}/inspectTemplates/{template\}`
     */
    inspectTemplate?: string | null;
  }
  /**
   * An annotation that was generated during the customer and agent interaction.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation {
    /**
     * The unique identifier of the annotation. Format: projects/{project\}/locations/{location\}/conversationDatasets/{dataset\}/conversationDataItems/{data_item\}/conversationAnnotations/{annotation\}
     */
    annotationId?: string | null;
    /**
     * The feedback that the customer has about the answer in `data`.
     */
    answerFeedback?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback;
    /**
     * Agent Assist Article Suggestion data.
     */
    articleSuggestion?: Schema$GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData;
    /**
     * Conversation summarization suggestion data.
     */
    conversationSummarizationSuggestion?: Schema$GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData;
    /**
     * The time at which this annotation was created.
     */
    createTime?: string | null;
    /**
     * Dialogflow interaction data.
     */
    dialogflowInteraction?: Schema$GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData;
    /**
     * The boundary in the conversation where the annotation ends, inclusive.
     */
    endBoundary?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary;
    /**
     * Agent Assist FAQ answer data.
     */
    faqAnswer?: Schema$GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData;
    /**
     * Agent Assist Smart Compose suggestion data.
     */
    smartComposeSuggestion?: Schema$GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData;
    /**
     * Agent Assist Smart Reply data.
     */
    smartReply?: Schema$GoogleCloudContactcenterinsightsV1alpha1SmartReplyData;
    /**
     * The boundary in the conversation where the annotation starts, inclusive.
     */
    startBoundary?: Schema$GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary;
  }
  /**
   * The data for a sentiment annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1SentimentData {
    /**
     * A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score.
     */
    magnitude?: number | null;
    /**
     * The sentiment score between -1.0 (negative) and 1.0 (positive).
     */
    score?: number | null;
  }
  /**
   * The data for a silence annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1SilenceData {}
  /**
   * Agent Assist Smart Compose suggestion data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData {
    /**
     * The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number | null;
    /**
     * Map that contains metadata about the Smart Compose suggestion and the document from which it originates.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    queryRecord?: string | null;
    /**
     * The content of the suggestion.
     */
    suggestion?: string | null;
  }
  /**
   * Agent Assist Smart Reply data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1SmartReplyData {
    /**
     * The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number | null;
    /**
     * Map that contains metadata about the Smart Reply and the document from which it originates.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    queryRecord?: string | null;
    /**
     * The content of the reply.
     */
    reply?: string | null;
  }
  /**
   * Speech-to-Text configuration.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1SpeechConfig {
    /**
     * The fully-qualified Speech Recognizer resource name. Format: `projects/{project_id\}/locations/{location\}/recognizer/{recognizer\}`
     */
    speechRecognizer?: string | null;
  }
  /**
   * Metadata for undeploying an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original request for undeployment.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest;
  }
  /**
   * The request to undeploy an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest {
    /**
     * Required. The issue model to undeploy.
     */
    name?: string | null;
  }
  /**
   * The response to undeploy an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponse {}
  /**
   * The metadata for an UploadConversation operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadata {
    /**
     * Output only. The operation name for a successfully created analysis operation, if any.
     */
    analysisOperation?: string | null;
    /**
     * Output only. The redaction config applied to the uploaded conversation.
     */
    appliedRedactionConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1RedactionConfig;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. The original request.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest;
  }
  /**
   * Request to upload a conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest {
    /**
     * Required. The conversation resource to create.
     */
    conversation?: Schema$GoogleCloudContactcenterinsightsV1alpha1Conversation;
    /**
     * Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64\}$`. Valid characters are `a-z-`
     */
    conversationId?: string | null;
    /**
     * Required. The parent resource of the conversation.
     */
    parent?: string | null;
    /**
     * Optional. DLP settings for transcript redaction. Will default to the config specified in Settings.
     */
    redactionConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1RedactionConfig;
    /**
     * Optional. Speech-to-Text configuration. Will default to the config specified in Settings.
     */
    speechConfig?: Schema$GoogleCloudContactcenterinsightsV1alpha1SpeechConfig;
  }
  /**
   * The analysis resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1Analysis {
    /**
     * Output only. The result of the analysis, which is populated when the analysis finishes.
     */
    analysisResult?: Schema$GoogleCloudContactcenterinsightsV1AnalysisResult;
    /**
     * To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.
     */
    annotatorSelector?: Schema$GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    /**
     * Output only. The time at which the analysis was created, which occurs when the long-running operation completes.
     */
    createTime?: string | null;
    /**
     * Immutable. The resource name of the analysis. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}/analyses/{analysis\}
     */
    name?: string | null;
    /**
     * Output only. The time at which the analysis was requested.
     */
    requestTime?: string | null;
  }
  /**
   * The result of an analysis.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1AnalysisResult {
    /**
     * Call-specific metadata created by the analysis.
     */
    callAnalysisMetadata?: Schema$GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;
    /**
     * The time at which the analysis ended.
     */
    endTime?: string | null;
  }
  /**
   * Call-specific metadata created during analysis.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata {
    /**
     * A list of call annotations that apply to this call.
     */
    annotations?: Schema$GoogleCloudContactcenterinsightsV1CallAnnotation[];
    /**
     * All the entities in the call.
     */
    entities?: {
      [key: string]: Schema$GoogleCloudContactcenterinsightsV1Entity;
    } | null;
    /**
     * All the matched intents in the call.
     */
    intents?: {
      [key: string]: Schema$GoogleCloudContactcenterinsightsV1Intent;
    } | null;
    /**
     * Overall conversation-level issue modeling result.
     */
    issueModelResult?: Schema$GoogleCloudContactcenterinsightsV1IssueModelResult;
    /**
     * All the matched phrase matchers in the call.
     */
    phraseMatchers?: {
      [key: string]: Schema$GoogleCloudContactcenterinsightsV1PhraseMatchData;
    } | null;
    /**
     * Overall conversation-level sentiment for each channel of the call.
     */
    sentiments?: Schema$GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[];
  }
  /**
   * A point in a conversation that marks the start or the end of an annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1AnnotationBoundary {
    /**
     * The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero.
     */
    transcriptIndex?: number | null;
    /**
     * The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero.
     */
    wordIndex?: number | null;
  }
  /**
   * Selector of all available annotators and phrase matchers to run.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1AnnotatorSelector {
    /**
     * The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference.
     */
    issueModels?: string[] | null;
    /**
     * The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project\}/locations/{location\}/phraseMatchers/{phrase_matcher\}
     */
    phraseMatchers?: string[] | null;
    /**
     * Whether to run the entity annotator.
     */
    runEntityAnnotator?: boolean | null;
    /**
     * Whether to run the intent annotator.
     */
    runIntentAnnotator?: boolean | null;
    /**
     * Whether to run the interruption annotator.
     */
    runInterruptionAnnotator?: boolean | null;
    /**
     * Whether to run the issue model annotator. A model should have already been deployed for this to take effect.
     */
    runIssueModelAnnotator?: boolean | null;
    /**
     * Whether to run the active phrase matcher annotator(s).
     */
    runPhraseMatcherAnnotator?: boolean | null;
    /**
     * Whether to run the sentiment annotator.
     */
    runSentimentAnnotator?: boolean | null;
    /**
     * Whether to run the silence annotator.
     */
    runSilenceAnnotator?: boolean | null;
    /**
     * Whether to run the summarization annotator.
     */
    runSummarizationAnnotator?: boolean | null;
    /**
     * Configuration for the summarization annotator.
     */
    summarizationConfig?: Schema$GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig;
  }
  /**
   * Configuration for summarization.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig {
    /**
     * Resource name of the Dialogflow conversation profile. Format: projects/{project\}/locations/{location\}/conversationProfiles/{conversation_profile\}
     */
    conversationProfile?: string | null;
    /**
     * Default summarization model to be used.
     */
    summarizationModel?: string | null;
  }
  /**
   * The feedback that the customer has about a certain answer in the conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1AnswerFeedback {
    /**
     * Indicates whether an answer or item was clicked by the human agent.
     */
    clicked?: boolean | null;
    /**
     * The correctness level of an answer.
     */
    correctnessLevel?: string | null;
    /**
     * Indicates whether an answer or item was displayed to the human agent in the agent desktop UI.
     */
    displayed?: boolean | null;
  }
  /**
   * Agent Assist Article Suggestion data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ArticleSuggestionData {
    /**
     * The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number | null;
    /**
     * Map that contains metadata about the Article Suggestion and the document that it originates from.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    queryRecord?: string | null;
    /**
     * The knowledge document that this answer was extracted from. Format: projects/{project\}/knowledgeBases/{knowledge_base\}/documents/{document\}
     */
    source?: string | null;
    /**
     * Article title.
     */
    title?: string | null;
    /**
     * Article URI.
     */
    uri?: string | null;
  }
  /**
   * The metadata for a bulk analyze conversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata {
    /**
     * The number of requested analyses that have completed successfully so far.
     */
    completedAnalysesCount?: number | null;
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The number of requested analyses that have failed so far.
     */
    failedAnalysesCount?: number | null;
    /**
     * Output only. Partial errors during bulk analyze operation that might cause the operation output to be incomplete.
     */
    partialErrors?: Schema$GoogleRpcStatus[];
    /**
     * The original request for bulk analyze.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest;
    /**
     * Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request.
     */
    totalRequestedAnalysesCount?: number | null;
  }
  /**
   * The request to analyze conversations in bulk.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest {
    /**
     * Required. Percentage of selected conversation to analyze, between [0, 100].
     */
    analysisPercentage?: number | null;
    /**
     * To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.
     */
    annotatorSelector?: Schema$GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    /**
     * Required. Filter used to select the subset of conversations to analyze.
     */
    filter?: string | null;
    /**
     * Required. The parent resource to create analyses in.
     */
    parent?: string | null;
  }
  /**
   * The response for a bulk analyze conversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse {
    /**
     * Count of failed analyses.
     */
    failedAnalysisCount?: number | null;
    /**
     * Count of successful analyses.
     */
    successfulAnalysisCount?: number | null;
  }
  /**
   * The metadata for a bulk delete conversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata {
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Partial errors during bulk delete conversations operation that might cause the operation output to be incomplete.
     */
    partialErrors?: Schema$GoogleRpcStatus[];
    /**
     * The original request for bulk delete.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest;
  }
  /**
   * The request to delete conversations in bulk.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest {
    /**
     * Filter used to select the subset of conversations to delete.
     */
    filter?: string | null;
    /**
     * If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     */
    force?: boolean | null;
    /**
     * Maximum number of conversations to delete.
     */
    maxDeleteCount?: number | null;
    /**
     * Required. The parent resource to delete conversations from. Format: projects/{project\}/locations/{location\}
     */
    parent?: string | null;
  }
  /**
   * The response for a bulk delete conversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1BulkDeleteConversationsResponse {}
  /**
   * Response of querying an issue model's statistics.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse {
    /**
     * The latest label statistics for the queried issue model. Includes results on both training data and data labeled after deployment.
     */
    currentStats?: Schema$GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
  }
  /**
   * The response for calculating conversation statistics.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse {
    /**
     * The average duration of all conversations. The average is calculated using only conversations that have a time duration.
     */
    averageDuration?: string | null;
    /**
     * The average number of turns per conversation.
     */
    averageTurnCount?: number | null;
    /**
     * The total number of conversations.
     */
    conversationCount?: number | null;
    /**
     * A time series representing the count of conversations created over time that match that requested filter criteria.
     */
    conversationCountTimeSeries?: Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries;
    /**
     * A map associating each custom highlighter resource name with its respective number of matches in the set of conversations.
     */
    customHighlighterMatches?: {[key: string]: number} | null;
    /**
     * A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/` Deprecated, use `issue_matches_stats` field instead.
     */
    issueMatches?: {[key: string]: number} | null;
    /**
     * A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/`
     */
    issueMatchesStats?: {
      [
        key: string
      ]: Schema$GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats;
    } | null;
    /**
     * A map associating each smart highlighter display name with its respective number of matches in the set of conversations.
     */
    smartHighlighterMatches?: {[key: string]: number} | null;
  }
  /**
   * A time series representing conversations over time.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries {
    /**
     * The duration of each interval.
     */
    intervalDuration?: string | null;
    /**
     * An ordered list of intervals from earliest to latest, where each interval represents the number of conversations that transpired during the time window.
     */
    points?: Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval[];
  }
  /**
   * A single interval in a time series.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval {
    /**
     * The number of conversations created in this interval.
     */
    conversationCount?: number | null;
    /**
     * The start time of this interval.
     */
    startTime?: string | null;
  }
  /**
   * A piece of metadata that applies to a window of a call.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1CallAnnotation {
    /**
     * The boundary in the conversation where the annotation ends, inclusive.
     */
    annotationEndBoundary?: Schema$GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    /**
     * The boundary in the conversation where the annotation starts, inclusive.
     */
    annotationStartBoundary?: Schema$GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    /**
     * The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated.
     */
    channelTag?: number | null;
    /**
     * Data specifying an entity mention.
     */
    entityMentionData?: Schema$GoogleCloudContactcenterinsightsV1EntityMentionData;
    /**
     * Data specifying a hold.
     */
    holdData?: Schema$GoogleCloudContactcenterinsightsV1HoldData;
    /**
     * Data specifying an intent match.
     */
    intentMatchData?: Schema$GoogleCloudContactcenterinsightsV1IntentMatchData;
    /**
     * Data specifying an interruption.
     */
    interruptionData?: Schema$GoogleCloudContactcenterinsightsV1InterruptionData;
    /**
     * Data specifying an issue match.
     */
    issueMatchData?: Schema$GoogleCloudContactcenterinsightsV1IssueMatchData;
    /**
     * Data specifying a phrase match.
     */
    phraseMatchData?: Schema$GoogleCloudContactcenterinsightsV1PhraseMatchData;
    /**
     * Data specifying sentiment.
     */
    sentimentData?: Schema$GoogleCloudContactcenterinsightsV1SentimentData;
    /**
     * Data specifying silence.
     */
    silenceData?: Schema$GoogleCloudContactcenterinsightsV1SilenceData;
  }
  /**
   * The conversation resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1Conversation {
    /**
     * An opaque, user-specified string representing the human agent who handled the conversation.
     */
    agentId?: string | null;
    /**
     * Call-specific metadata.
     */
    callMetadata?: Schema$GoogleCloudContactcenterinsightsV1ConversationCallMetadata;
    /**
     * Output only. The time at which the conversation was created.
     */
    createTime?: string | null;
    /**
     * The source of the audio and transcription for the conversation.
     */
    dataSource?: Schema$GoogleCloudContactcenterinsightsV1ConversationDataSource;
    /**
     * Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project\}/agent/{agent\}/intents/{intent\}
     */
    dialogflowIntents?: {
      [key: string]: Schema$GoogleCloudContactcenterinsightsV1DialogflowIntent;
    } | null;
    /**
     * Output only. The duration of the conversation.
     */
    duration?: string | null;
    /**
     * The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.
     */
    expireTime?: string | null;
    /**
     * A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.
     */
    labels?: {[key: string]: string} | null;
    /**
     * A user-specified language code for the conversation.
     */
    languageCode?: string | null;
    /**
     * Output only. The conversation's latest analysis, if one exists.
     */
    latestAnalysis?: Schema$GoogleCloudContactcenterinsightsV1Analysis;
    /**
     * Output only. Latest summary of the conversation.
     */
    latestSummary?: Schema$GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData;
    /**
     * Immutable. The conversation medium, if unspecified will default to PHONE_CALL.
     */
    medium?: string | null;
    /**
     * Immutable. The resource name of the conversation. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}
     */
    name?: string | null;
    /**
     * Obfuscated user ID which the customer sent to us.
     */
    obfuscatedUserId?: string | null;
    /**
     * Conversation metadata related to quality management.
     */
    qualityMetadata?: Schema$GoogleCloudContactcenterinsightsV1ConversationQualityMetadata;
    /**
     * Output only. The annotations that were generated during the customer and agent interaction.
     */
    runtimeAnnotations?: Schema$GoogleCloudContactcenterinsightsV1RuntimeAnnotation[];
    /**
     * The time at which the conversation started.
     */
    startTime?: string | null;
    /**
     * Output only. The conversation transcript.
     */
    transcript?: Schema$GoogleCloudContactcenterinsightsV1ConversationTranscript;
    /**
     * Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.
     */
    ttl?: string | null;
    /**
     * Output only. The number of turns in the conversation.
     */
    turnCount?: number | null;
    /**
     * Output only. The most recent time at which the conversation was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Call-specific metadata.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationCallMetadata {
    /**
     * The audio channel that contains the agent.
     */
    agentChannel?: number | null;
    /**
     * The audio channel that contains the customer.
     */
    customerChannel?: number | null;
  }
  /**
   * The conversation source, which is a combination of transcript and audio.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationDataSource {
    /**
     * The source when the conversation comes from Dialogflow.
     */
    dialogflowSource?: Schema$GoogleCloudContactcenterinsightsV1DialogflowSource;
    /**
     * A Cloud Storage location specification for the audio and transcript.
     */
    gcsSource?: Schema$GoogleCloudContactcenterinsightsV1GcsSource;
  }
  /**
   * One channel of conversation-level sentiment data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationLevelSentiment {
    /**
     * The channel of the audio that the data applies to.
     */
    channelTag?: number | null;
    /**
     * Data specifying sentiment.
     */
    sentimentData?: Schema$GoogleCloudContactcenterinsightsV1SentimentData;
  }
  /**
   * The call participant speaking for a given utterance.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationParticipant {
    /**
     * Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}/participants/{participant\}
     */
    dialogflowParticipant?: string | null;
    /**
     * The name of the participant provided by Dialogflow. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}/participants/{participant\}
     */
    dialogflowParticipantName?: string | null;
    /**
     * Obfuscated user ID from Dialogflow.
     */
    obfuscatedExternalUserId?: string | null;
    /**
     * The role of the participant.
     */
    role?: string | null;
    /**
     * A user-specified ID representing the participant.
     */
    userId?: string | null;
  }
  /**
   * Conversation metadata related to quality management.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationQualityMetadata {
    /**
     * Information about agents involved in the call.
     */
    agentInfo?: Schema$GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfo[];
    /**
     * An arbitrary integer value indicating the customer's satisfaction rating.
     */
    customerSatisfactionRating?: number | null;
    /**
     * An arbitrary string value specifying the menu path the customer took.
     */
    menuPath?: string | null;
    /**
     * The amount of time the customer waited to connect with an agent.
     */
    waitDuration?: string | null;
  }
  /**
   * Information about an agent involved in the conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfo {
    /**
     * A user-specified string representing the agent.
     */
    agentId?: string | null;
    /**
     * The agent's name.
     */
    displayName?: string | null;
    /**
     * A user-provided string indicating the outcome of the agent's segment of the call.
     */
    dispositionCode?: string | null;
    /**
     * A user-specified string representing the agent's team.
     */
    team?: string | null;
  }
  /**
   * Conversation summarization suggestion data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData {
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    answerRecord?: string | null;
    /**
     * The confidence score of the summarization.
     */
    confidence?: number | null;
    /**
     * The name of the model that generates this summary. Format: projects/{project\}/locations/{location\}/conversationModels/{conversation_model\}
     */
    conversationModel?: string | null;
    /**
     * A map that contains metadata about the summarization and the document from which it originates.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The summarization content that is concatenated into one string.
     */
    text?: string | null;
    /**
     * The summarization content that is divided into sections. The key is the section's name and the value is the section's content. There is no specific format for the key or value.
     */
    textSections?: {[key: string]: string} | null;
  }
  /**
   * A message representing the transcript of a conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationTranscript {
    /**
     * A list of sequential transcript segments that comprise the conversation.
     */
    transcriptSegments?: Schema$GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[];
  }
  /**
   * A segment of a full transcript.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment {
    /**
     * For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono.
     */
    channelTag?: number | null;
    /**
     * A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset.
     */
    confidence?: number | null;
    /**
     * CCAI metadata relating to the current transcript segment.
     */
    dialogflowSegmentMetadata?: Schema$GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;
    /**
     * The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string | null;
    /**
     * The time that the message occurred, if provided.
     */
    messageTime?: string | null;
    /**
     * The participant of this segment.
     */
    segmentParticipant?: Schema$GoogleCloudContactcenterinsightsV1ConversationParticipant;
    /**
     * The sentiment for this transcript segment.
     */
    sentiment?: Schema$GoogleCloudContactcenterinsightsV1SentimentData;
    /**
     * The text of this segment.
     */
    text?: string | null;
    /**
     * A list of the word-specific information for each word in the segment.
     */
    words?: Schema$GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[];
  }
  /**
   * Metadata from Dialogflow relating to the current transcript segment.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata {
    /**
     * Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist.
     */
    smartReplyAllowlistCovered?: boolean | null;
  }
  /**
   * Word-level info for words in a transcript.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo {
    /**
     * A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset.
     */
    confidence?: number | null;
    /**
     * Time offset of the end of this word relative to the beginning of the total conversation.
     */
    endOffset?: string | null;
    /**
     * Time offset of the start of this word relative to the beginning of the total conversation.
     */
    startOffset?: string | null;
    /**
     * The word itself. Includes punctuation marks that surround the word.
     */
    word?: string | null;
  }
  /**
   * Metadata for a create analysis operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata {
    /**
     * Output only. The annotator selector used for the analysis (if any).
     */
    annotatorSelector?: Schema$GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    /**
     * Output only. The Conversation that this Analysis Operation belongs to.
     */
    conversation?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
  }
  /**
   * Metadata for creating an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original request for creation.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1CreateIssueModelRequest;
  }
  /**
   * The request to create an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1CreateIssueModelRequest {
    /**
     * Required. The issue model to create.
     */
    issueModel?: Schema$GoogleCloudContactcenterinsightsV1IssueModel;
    /**
     * Required. The parent resource of the issue model.
     */
    parent?: string | null;
  }
  /**
   * Metadata for deleting an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original request for deletion.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest;
  }
  /**
   * The request to delete an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest {
    /**
     * Required. The name of the issue model to delete.
     */
    name?: string | null;
  }
  /**
   * Metadata for deploying an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1DeployIssueModelMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original request for deployment.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1DeployIssueModelRequest;
  }
  /**
   * The request to deploy an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1DeployIssueModelRequest {
    /**
     * Required. The issue model to deploy.
     */
    name?: string | null;
  }
  /**
   * The response to deploy an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1DeployIssueModelResponse {}
  /**
   * The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1DialogflowIntent {
    /**
     * The human-readable name of the intent.
     */
    displayName?: string | null;
  }
  /**
   * Dialogflow interaction data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1DialogflowInteractionData {
    /**
     * The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidence?: number | null;
    /**
     * The Dialogflow intent resource path. Format: projects/{project\}/agent/{agent\}/intents/{intent\}
     */
    dialogflowIntentId?: string | null;
  }
  /**
   * A Dialogflow source of conversation data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1DialogflowSource {
    /**
     * Cloud Storage URI that points to a file that contains the conversation audio.
     */
    audioUri?: string | null;
    /**
     * Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}
     */
    dialogflowConversation?: string | null;
  }
  /**
   * The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1Entity {
    /**
     * The representative name for the entity.
     */
    displayName?: string | null;
    /**
     * Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
     */
    salience?: number | null;
    /**
     * The aggregate sentiment expressed for this entity in the conversation.
     */
    sentiment?: Schema$GoogleCloudContactcenterinsightsV1SentimentData;
    /**
     * The entity type.
     */
    type?: string | null;
  }
  /**
   * The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1EntityMentionData {
    /**
     * The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to.
     */
    entityUniqueId?: string | null;
    /**
     * Sentiment expressed for this mention of the entity.
     */
    sentiment?: Schema$GoogleCloudContactcenterinsightsV1SentimentData;
    /**
     * The type of the entity mention.
     */
    type?: string | null;
  }
  /**
   * Exact match configuration.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExactMatchConfig {
    /**
     * Whether to consider case sensitivity when performing an exact match.
     */
    caseSensitive?: boolean | null;
  }
  /**
   * Metadata for an export insights operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Partial errors during export operation that might cause the operation output to be incomplete.
     */
    partialErrors?: Schema$GoogleRpcStatus[];
    /**
     * The original request for export.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest;
  }
  /**
   * The request to export insights.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest {
    /**
     * Specified if sink is a BigQuery table.
     */
    bigQueryDestination?: Schema$GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination;
    /**
     * A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties.
     */
    filter?: string | null;
    /**
     * A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project\}/locations/{location\}/keyRings/{keyring\}/cryptoKeys/{key\}/cryptoKeyVersions/{version\}
     */
    kmsKey?: string | null;
    /**
     * Required. The parent resource to export data from.
     */
    parent?: string | null;
    /**
     * Options for what to do if the destination table already exists.
     */
    writeDisposition?: string | null;
  }
  /**
   * A BigQuery Table Reference.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination {
    /**
     * Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.
     */
    dataset?: string | null;
    /**
     * A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used.
     */
    projectId?: string | null;
    /**
     * The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error.
     */
    table?: string | null;
  }
  /**
   * Response for an export insights operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExportInsightsDataResponse {}
  /**
   * Metadata used for export issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExportIssueModelMetadata {
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original export request.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1ExportIssueModelRequest;
  }
  /**
   * Request to export an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExportIssueModelRequest {
    /**
     * Google Cloud Storage URI to export the Issue Model to.
     */
    gcsDestination?: Schema$GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination;
    /**
     * Required. The issue model to export
     */
    name?: string | null;
  }
  /**
   * Google Cloud Storage Object URI to save the issue model to.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination {
    /**
     * Required. Format: `gs:///`
     */
    objectUri?: string | null;
  }
  /**
   * Response from export issue model
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ExportIssueModelResponse {}
  /**
   * Agent Assist frequently-asked-question answer data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1FaqAnswerData {
    /**
     * The piece of text from the `source` knowledge base document.
     */
    answer?: string | null;
    /**
     * The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number | null;
    /**
     * Map that contains metadata about the FAQ answer and the document that it originates from.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    queryRecord?: string | null;
    /**
     * The corresponding FAQ question.
     */
    question?: string | null;
    /**
     * The knowledge document that this answer was extracted from. Format: projects/{project\}/knowledgeBases/{knowledge_base\}/documents/{document\}.
     */
    source?: string | null;
  }
  /**
   * A Cloud Storage source of conversation data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1GcsSource {
    /**
     * Cloud Storage URI that points to a file that contains the conversation audio.
     */
    audioUri?: string | null;
    /**
     * Immutable. Cloud Storage URI that points to a file that contains the conversation transcript.
     */
    transcriptUri?: string | null;
  }
  /**
   * The data for a hold annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1HoldData {}
  /**
   * Metadata used for import issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ImportIssueModelMetadata {
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original import request.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1ImportIssueModelRequest;
  }
  /**
   * Request to import an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ImportIssueModelRequest {
    /**
     * Optional. If set to true, will create a new issue model from the imported file with randomly generated IDs for the issue model and corresponding issues. Otherwise, replaces an existing model with the same ID as the file.
     */
    createNewModel?: boolean | null;
    /**
     * Google Cloud Storage source message.
     */
    gcsSource?: Schema$GoogleCloudContactcenterinsightsV1ImportIssueModelRequestGcsSource;
    /**
     * Required. The parent resource of the issue model.
     */
    parent?: string | null;
  }
  /**
   * Google Cloud Storage Object URI to get the issue model file from.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ImportIssueModelRequestGcsSource {
    /**
     * Required. Format: `gs:///`
     */
    objectUri?: string | null;
  }
  /**
   * Response from import issue model
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ImportIssueModelResponse {}
  /**
   * The metadata for an IngestConversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IngestConversationsMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Statistics for IngestConversations operation.
     */
    ingestConversationsStats?: Schema$GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats;
    /**
     * Output only. Partial errors during ingest operation that might cause the operation output to be incomplete.
     */
    partialErrors?: Schema$GoogleRpcStatus[];
    /**
     * Output only. The original request for ingest.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequest;
  }
  /**
   * Statistics for IngestConversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats {
    /**
     * Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested.
     */
    duplicatesSkippedCount?: number | null;
    /**
     * Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field.
     */
    failedIngestCount?: number | null;
    /**
     * Output only. The number of objects processed during the ingest operation.
     */
    processedObjectCount?: number | null;
    /**
     * Output only. The number of new conversations added during this ingest operation.
     */
    successfulIngestCount?: number | null;
  }
  /**
   * The request to ingest conversations.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequest {
    /**
     * Configuration that applies to all conversations.
     */
    conversationConfig?: Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig;
    /**
     * A cloud storage bucket source. Note that any previously ingested objects from the source will be skipped to avoid duplication.
     */
    gcsSource?: Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource;
    /**
     * Required. The parent resource for new conversations.
     */
    parent?: string | null;
    /**
     * Optional. DLP settings for transcript redaction. Optional, will default to the config specified in Settings.
     */
    redactionConfig?: Schema$GoogleCloudContactcenterinsightsV1RedactionConfig;
    /**
     * Optional. Default Speech-to-Text configuration. Optional, will default to the config specified in Settings.
     */
    speechConfig?: Schema$GoogleCloudContactcenterinsightsV1SpeechConfig;
    /**
     * Configuration for when `source` contains conversation transcripts.
     */
    transcriptObjectConfig?: Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig;
  }
  /**
   * Configuration that applies to all conversations.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig {
    /**
     * Optional. Indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for conversations to be properly displayed and analyzed.
     */
    agentChannel?: number | null;
    /**
     * An opaque, user-specified string representing the human agent who handled the conversations.
     */
    agentId?: string | null;
    /**
     * Optional. Indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for conversations to be properly displayed and analyzed.
     */
    customerChannel?: number | null;
  }
  /**
   * Configuration for Cloud Storage bucket sources.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource {
    /**
     * Optional. Specifies the type of the objects in `bucket_uri`.
     */
    bucketObjectType?: string | null;
    /**
     * Required. The Cloud Storage bucket containing source objects.
     */
    bucketUri?: string | null;
    /**
     * Optional. Custom keys to extract as conversation labels from metadata files in `metadata_bucket_uri`. Keys not included in this field will be ignored. Note that there is a limit of 20 labels per conversation.
     */
    customMetadataKeys?: string[] | null;
    /**
     * Optional. The Cloud Storage path to the source object metadata. Note that: [1] metadata files are expected to be in JSON format [2] metadata and source objects must be in separate buckets [3] a source object's metadata object must share the same name to be properly ingested
     */
    metadataBucketUri?: string | null;
  }
  /**
   * Configuration for processing transcript objects.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig {
    /**
     * Required. The medium transcript objects represent.
     */
    medium?: string | null;
  }
  /**
   * The response to an IngestConversations operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IngestConversationsResponse {}
  /**
   * The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1Intent {
    /**
     * The human-readable name of the intent.
     */
    displayName?: string | null;
    /**
     * The unique identifier of the intent.
     */
    id?: string | null;
  }
  /**
   * The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IntentMatchData {
    /**
     * The id of the matched intent. Can be used to retrieve the corresponding intent information.
     */
    intentUniqueId?: string | null;
  }
  /**
   * The data for an interruption annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1InterruptionData {}
  /**
   * The issue resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1Issue {
    /**
     * Output only. The time at which this issue was created.
     */
    createTime?: string | null;
    /**
     * The representative name for the issue.
     */
    displayName?: string | null;
    /**
     * Immutable. The resource name of the issue. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}/issues/{issue\}
     */
    name?: string | null;
    /**
     * Output only. Resource names of the sample representative utterances that match to this issue.
     */
    sampleUtterances?: string[] | null;
    /**
     * Output only. The most recent time that this issue was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Information about the issue.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IssueAssignment {
    /**
     * Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then.
     */
    displayName?: string | null;
    /**
     * Resource name of the assigned issue.
     */
    issue?: string | null;
    /**
     * Score indicating the likelihood of the issue assignment. currently bounded on [0,1].
     */
    score?: number | null;
  }
  /**
   * The data for an issue match annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IssueMatchData {
    /**
     * Information about the issue's assignment.
     */
    issueAssignment?: Schema$GoogleCloudContactcenterinsightsV1IssueAssignment;
  }
  /**
   * The issue model resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IssueModel {
    /**
     * Output only. The time at which this issue model was created.
     */
    createTime?: string | null;
    /**
     * The representative name for the issue model.
     */
    displayName?: string | null;
    /**
     * Configs for the input data that used to create the issue model.
     */
    inputDataConfig?: Schema$GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig;
    /**
     * Output only. Number of issues in this issue model.
     */
    issueCount?: string | null;
    /**
     * Language of the model.
     */
    languageCode?: string | null;
    /**
     * Type of the model.
     */
    modelType?: string | null;
    /**
     * Immutable. The resource name of the issue model. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}
     */
    name?: string | null;
    /**
     * Output only. State of the model.
     */
    state?: string | null;
    /**
     * Output only. Immutable. The issue model's label statistics on its training data.
     */
    trainingStats?: Schema$GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
    /**
     * Output only. The most recent time at which the issue model was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configs for the input data used to create the issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig {
    /**
     * A filter to reduce the conversations used for training the model to a specific subset.
     */
    filter?: string | null;
    /**
     * Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.
     */
    medium?: string | null;
    /**
     * Output only. Number of conversations used in training. Output only.
     */
    trainingConversationsCount?: string | null;
  }
  /**
   * Aggregated statistics about an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IssueModelLabelStats {
    /**
     * Number of conversations the issue model has analyzed at this point in time.
     */
    analyzedConversationsCount?: string | null;
    /**
     * Statistics on each issue. Key is the issue's resource name.
     */
    issueStats?: {
      [
        key: string
      ]: Schema$GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats;
    } | null;
    /**
     * Number of analyzed conversations for which no issue was applicable at this point in time.
     */
    unclassifiedConversationsCount?: string | null;
  }
  /**
   * Aggregated statistics about an issue.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats {
    /**
     * Display name of the issue.
     */
    displayName?: string | null;
    /**
     * Issue resource. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}/issues/{issue\}
     */
    issue?: string | null;
    /**
     * Number of conversations attached to the issue at this point in time.
     */
    labeledConversationsCount?: string | null;
  }
  /**
   * Issue Modeling result on a conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1IssueModelResult {
    /**
     * Issue model that generates the result. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}
     */
    issueModel?: string | null;
    /**
     * All the matched issues.
     */
    issues?: Schema$GoogleCloudContactcenterinsightsV1IssueAssignment[];
  }
  /**
   * The response to list analyses.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse {
    /**
     * The analyses that match the request.
     */
    analyses?: Schema$GoogleCloudContactcenterinsightsV1Analysis[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response of listing conversations.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse {
    /**
     * The conversations that match the request.
     */
    conversations?: Schema$GoogleCloudContactcenterinsightsV1Conversation[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is set, it means there is another page available. If it is not set, it means no other pages are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response of listing issue models.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse {
    /**
     * The issue models that match the request.
     */
    issueModels?: Schema$GoogleCloudContactcenterinsightsV1IssueModel[];
  }
  /**
   * The response of listing issues.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse {
    /**
     * The issues that match the request.
     */
    issues?: Schema$GoogleCloudContactcenterinsightsV1Issue[];
  }
  /**
   * The response of listing phrase matchers.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The phrase matchers that match the request.
     */
    phraseMatchers?: Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher[];
  }
  /**
   * The response of listing views.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The views that match the request.
     */
    views?: Schema$GoogleCloudContactcenterinsightsV1View[];
  }
  /**
   * The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1PhraseMatchData {
    /**
     * The human-readable name of the phrase matcher.
     */
    displayName?: string | null;
    /**
     * The unique identifier (the resource name) of the phrase matcher.
     */
    phraseMatcher?: string | null;
  }
  /**
   * The phrase matcher resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher {
    /**
     * Output only. The most recent time at which the activation status was updated.
     */
    activationUpdateTime?: string | null;
    /**
     * Applies the phrase matcher only when it is active.
     */
    active?: boolean | null;
    /**
     * The human-readable name of the phrase matcher.
     */
    displayName?: string | null;
    /**
     * The resource name of the phrase matcher. Format: projects/{project\}/locations/{location\}/phraseMatchers/{phrase_matcher\}
     */
    name?: string | null;
    /**
     * A list of phase match rule groups that are included in this matcher.
     */
    phraseMatchRuleGroups?: Schema$GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[];
    /**
     * Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.
     */
    revisionCreateTime?: string | null;
    /**
     * Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567
     */
    revisionId?: string | null;
    /**
     * The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.
     */
    roleMatch?: string | null;
    /**
     * Required. The type of this phrase matcher.
     */
    type?: string | null;
    /**
     * Output only. The most recent time at which the phrase matcher was updated.
     */
    updateTime?: string | null;
    /**
     * The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.
     */
    versionTag?: string | null;
  }
  /**
   * The data for a phrase match rule.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1PhraseMatchRule {
    /**
     * Provides additional information about the rule that specifies how to apply the rule.
     */
    config?: Schema$GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig;
    /**
     * Specifies whether the phrase must be missing from the transcript segment or present in the transcript segment.
     */
    negated?: boolean | null;
    /**
     * Required. The phrase to be matched.
     */
    query?: string | null;
  }
  /**
   * Configuration information of a phrase match rule.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig {
    /**
     * The configuration for the exact match rule.
     */
    exactMatchConfig?: Schema$GoogleCloudContactcenterinsightsV1ExactMatchConfig;
  }
  /**
   * A message representing a rule in the phrase matcher.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup {
    /**
     * A list of phrase match rules that are included in this group.
     */
    phraseMatchRules?: Schema$GoogleCloudContactcenterinsightsV1PhraseMatchRule[];
    /**
     * Required. The type of this phrase match rule group.
     */
    type?: string | null;
  }
  /**
   * DLP resources used for redaction while ingesting conversations.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1RedactionConfig {
    /**
     * The fully-qualified DLP deidentify template resource name. Format: `projects/{project\}/deidentifyTemplates/{template\}`
     */
    deidentifyTemplate?: string | null;
    /**
     * The fully-qualified DLP inspect template resource name. Format: `projects/{project\}/locations/{location\}/inspectTemplates/{template\}`
     */
    inspectTemplate?: string | null;
  }
  /**
   * An annotation that was generated during the customer and agent interaction.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1RuntimeAnnotation {
    /**
     * The unique identifier of the annotation. Format: projects/{project\}/locations/{location\}/conversationDatasets/{dataset\}/conversationDataItems/{data_item\}/conversationAnnotations/{annotation\}
     */
    annotationId?: string | null;
    /**
     * The feedback that the customer has about the answer in `data`.
     */
    answerFeedback?: Schema$GoogleCloudContactcenterinsightsV1AnswerFeedback;
    /**
     * Agent Assist Article Suggestion data.
     */
    articleSuggestion?: Schema$GoogleCloudContactcenterinsightsV1ArticleSuggestionData;
    /**
     * Conversation summarization suggestion data.
     */
    conversationSummarizationSuggestion?: Schema$GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData;
    /**
     * The time at which this annotation was created.
     */
    createTime?: string | null;
    /**
     * Dialogflow interaction data.
     */
    dialogflowInteraction?: Schema$GoogleCloudContactcenterinsightsV1DialogflowInteractionData;
    /**
     * The boundary in the conversation where the annotation ends, inclusive.
     */
    endBoundary?: Schema$GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    /**
     * Agent Assist FAQ answer data.
     */
    faqAnswer?: Schema$GoogleCloudContactcenterinsightsV1FaqAnswerData;
    /**
     * Agent Assist Smart Compose suggestion data.
     */
    smartComposeSuggestion?: Schema$GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData;
    /**
     * Agent Assist Smart Reply data.
     */
    smartReply?: Schema$GoogleCloudContactcenterinsightsV1SmartReplyData;
    /**
     * The boundary in the conversation where the annotation starts, inclusive.
     */
    startBoundary?: Schema$GoogleCloudContactcenterinsightsV1AnnotationBoundary;
  }
  /**
   * The data for a sentiment annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1SentimentData {
    /**
     * A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score.
     */
    magnitude?: number | null;
    /**
     * The sentiment score between -1.0 (negative) and 1.0 (positive).
     */
    score?: number | null;
  }
  /**
   * The settings resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1Settings {
    /**
     * Default analysis settings.
     */
    analysisConfig?: Schema$GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig;
    /**
     * The default TTL for newly-created conversations. If a conversation has a specified expiration, that value will be used instead. Changing this value will not change the expiration of existing conversations. Conversations with no expire time persist until they are deleted.
     */
    conversationTtl?: string | null;
    /**
     * Output only. The time at which the settings was created.
     */
    createTime?: string | null;
    /**
     * A language code to be applied to each transcript segment unless the segment already specifies a language code. Language code defaults to "en-US" if it is neither specified on the segment nor here.
     */
    languageCode?: string | null;
    /**
     * Immutable. The resource name of the settings resource. Format: projects/{project\}/locations/{location\}/settings
     */
    name?: string | null;
    /**
     * A map that maps a notification trigger to a Pub/Sub topic. Each time a specified trigger occurs, Insights will notify the corresponding Pub/Sub topic. Keys are notification triggers. Supported keys are: * "all-triggers": Notify each time any of the supported triggers occurs. * "create-analysis": Notify each time an analysis is created. * "create-conversation": Notify each time a conversation is created. * "export-insights-data": Notify each time an export is complete. * "update-conversation": Notify each time a conversation is updated via UpdateConversation. * "upload-conversation": Notify when an UploadConversation LRO completes. Values are Pub/Sub topics. The format of each Pub/Sub topic is: projects/{project\}/topics/{topic\}
     */
    pubsubNotificationSettings?: {[key: string]: string} | null;
    /**
     * Default DLP redaction resources to be applied while ingesting conversations.
     */
    redactionConfig?: Schema$GoogleCloudContactcenterinsightsV1RedactionConfig;
    /**
     * Optional. Default Speech-to-Text resources to be used while ingesting audio files. Optional, CCAI Insights will create a default if not provided.
     */
    speechConfig?: Schema$GoogleCloudContactcenterinsightsV1SpeechConfig;
    /**
     * Output only. The time at which the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Default configuration when creating Analyses in Insights.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig {
    /**
     * To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.
     */
    annotatorSelector?: Schema$GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    /**
     * Percentage of conversations created using Dialogflow runtime integration to analyze automatically, between [0, 100].
     */
    runtimeIntegrationAnalysisPercentage?: number | null;
    /**
     * Percentage of conversations created using the UploadConversation endpoint to analyze automatically, between [0, 100].
     */
    uploadConversationAnalysisPercentage?: number | null;
  }
  /**
   * The data for a silence annotation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1SilenceData {}
  /**
   * Agent Assist Smart Compose suggestion data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData {
    /**
     * The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number | null;
    /**
     * Map that contains metadata about the Smart Compose suggestion and the document from which it originates.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    queryRecord?: string | null;
    /**
     * The content of the suggestion.
     */
    suggestion?: string | null;
  }
  /**
   * Agent Assist Smart Reply data.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1SmartReplyData {
    /**
     * The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number | null;
    /**
     * Map that contains metadata about the Smart Reply and the document from which it originates.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The name of the answer record. Format: projects/{project\}/locations/{location\}/answerRecords/{answer_record\}
     */
    queryRecord?: string | null;
    /**
     * The content of the reply.
     */
    reply?: string | null;
  }
  /**
   * Speech-to-Text configuration.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1SpeechConfig {
    /**
     * The fully-qualified Speech Recognizer resource name. Format: `projects/{project_id\}/locations/{location\}/recognizer/{recognizer\}`
     */
    speechRecognizer?: string | null;
  }
  /**
   * Metadata for undeploying an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * The original request for undeployment.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest;
  }
  /**
   * The request to undeploy an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest {
    /**
     * Required. The issue model to undeploy.
     */
    name?: string | null;
  }
  /**
   * The response to undeploy an issue model.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1UndeployIssueModelResponse {}
  /**
   * The metadata for an UploadConversation operation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1UploadConversationMetadata {
    /**
     * Output only. The operation name for a successfully created analysis operation, if any.
     */
    analysisOperation?: string | null;
    /**
     * Output only. The redaction config applied to the uploaded conversation.
     */
    appliedRedactionConfig?: Schema$GoogleCloudContactcenterinsightsV1RedactionConfig;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. The original request.
     */
    request?: Schema$GoogleCloudContactcenterinsightsV1UploadConversationRequest;
  }
  /**
   * Request to upload a conversation.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1UploadConversationRequest {
    /**
     * Required. The conversation resource to create.
     */
    conversation?: Schema$GoogleCloudContactcenterinsightsV1Conversation;
    /**
     * Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64\}$`. Valid characters are `a-z-`
     */
    conversationId?: string | null;
    /**
     * Required. The parent resource of the conversation.
     */
    parent?: string | null;
    /**
     * Optional. DLP settings for transcript redaction. Will default to the config specified in Settings.
     */
    redactionConfig?: Schema$GoogleCloudContactcenterinsightsV1RedactionConfig;
    /**
     * Optional. Speech-to-Text configuration. Will default to the config specified in Settings.
     */
    speechConfig?: Schema$GoogleCloudContactcenterinsightsV1SpeechConfig;
  }
  /**
   * The View resource.
   */
  export interface Schema$GoogleCloudContactcenterinsightsV1View {
    /**
     * Output only. The time at which this view was created.
     */
    createTime?: string | null;
    /**
     * The human-readable display name of the view.
     */
    displayName?: string | null;
    /**
     * Immutable. The resource name of the view. Format: projects/{project\}/locations/{location\}/views/{view\}
     */
    name?: string | null;
    /**
     * Output only. The most recent time at which the view was updated.
     */
    updateTime?: string | null;
    /**
     * String with specific view properties, must be non-empty.
     */
    value?: string | null;
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
    conversations: Resource$Projects$Locations$Conversations;
    insightsdata: Resource$Projects$Locations$Insightsdata;
    issueModels: Resource$Projects$Locations$Issuemodels;
    operations: Resource$Projects$Locations$Operations;
    phraseMatchers: Resource$Projects$Locations$Phrasematchers;
    views: Resource$Projects$Locations$Views;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.conversations = new Resource$Projects$Locations$Conversations(
        this.context
      );
      this.insightsdata = new Resource$Projects$Locations$Insightsdata(
        this.context
      );
      this.issueModels = new Resource$Projects$Locations$Issuemodels(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.phraseMatchers = new Resource$Projects$Locations$Phrasematchers(
        this.context
      );
      this.views = new Resource$Projects$Locations$Views(this.context);
    }

    /**
     * Gets project-level settings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getSettings(
      params: Params$Resource$Projects$Locations$Getsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSettings(
      params?: Params$Resource$Projects$Locations$Getsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Settings>;
    getSettings(
      params: Params$Resource$Projects$Locations$Getsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSettings(
      params: Params$Resource$Projects$Locations$Getsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
    ): void;
    getSettings(
      params: Params$Resource$Projects$Locations$Getsettings,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
    ): void;
    getSettings(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
    ): void;
    getSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getsettings
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Settings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Settings>(
          parameters
        );
      }
    }

    /**
     * Updates project-level settings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSettings(
      params: Params$Resource$Projects$Locations$Updatesettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSettings(
      params?: Params$Resource$Projects$Locations$Updatesettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Settings>;
    updateSettings(
      params: Params$Resource$Projects$Locations$Updatesettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSettings(
      params: Params$Resource$Projects$Locations$Updatesettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
    ): void;
    updateSettings(
      params: Params$Resource$Projects$Locations$Updatesettings,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
    ): void;
    updateSettings(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
    ): void;
    updateSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Updatesettings
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Settings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Updatesettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Updatesettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Settings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Getsettings
    extends StandardParameters {
    /**
     * Required. The name of the settings resource to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Updatesettings
    extends StandardParameters {
    /**
     * Immutable. The resource name of the settings resource. Format: projects/{project\}/locations/{location\}/settings
     */
    name?: string;
    /**
     * Required. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1Settings;
  }

  export class Resource$Projects$Locations$Conversations {
    context: APIRequestContext;
    analyses: Resource$Projects$Locations$Conversations$Analyses;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.analyses = new Resource$Projects$Locations$Conversations$Analyses(
        this.context
      );
    }

    /**
     * Analyzes multiple conversations in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    bulkAnalyze(
      params: Params$Resource$Projects$Locations$Conversations$Bulkanalyze,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    bulkAnalyze(
      params?: Params$Resource$Projects$Locations$Conversations$Bulkanalyze,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    bulkAnalyze(
      params: Params$Resource$Projects$Locations$Conversations$Bulkanalyze,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    bulkAnalyze(
      params: Params$Resource$Projects$Locations$Conversations$Bulkanalyze,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkAnalyze(
      params: Params$Resource$Projects$Locations$Conversations$Bulkanalyze,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkAnalyze(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkAnalyze(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Bulkanalyze
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
        {}) as Params$Resource$Projects$Locations$Conversations$Bulkanalyze;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversations$Bulkanalyze;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/conversations:bulkAnalyze').replace(
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
     * Deletes multiple conversations in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    bulkDelete(
      params: Params$Resource$Projects$Locations$Conversations$Bulkdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    bulkDelete(
      params?: Params$Resource$Projects$Locations$Conversations$Bulkdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    bulkDelete(
      params: Params$Resource$Projects$Locations$Conversations$Bulkdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    bulkDelete(
      params: Params$Resource$Projects$Locations$Conversations$Bulkdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkDelete(
      params: Params$Resource$Projects$Locations$Conversations$Bulkdelete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkDelete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    bulkDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Bulkdelete
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
        {}) as Params$Resource$Projects$Locations$Conversations$Bulkdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversations$Bulkdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/conversations:bulkDelete').replace(
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
     * Gets conversation statistics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    calculateStats(
      params: Params$Resource$Projects$Locations$Conversations$Calculatestats,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    calculateStats(
      params?: Params$Resource$Projects$Locations$Conversations$Calculatestats,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>;
    calculateStats(
      params: Params$Resource$Projects$Locations$Conversations$Calculatestats,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculateStats(
      params: Params$Resource$Projects$Locations$Conversations$Calculatestats,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>
    ): void;
    calculateStats(
      params: Params$Resource$Projects$Locations$Conversations$Calculatestats,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>
    ): void;
    calculateStats(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>
    ): void;
    calculateStats(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Calculatestats
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversations$Calculatestats;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversations$Calculatestats;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+location}/conversations:calculateStats'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1CalculateStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Conversations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Conversations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Conversation>;
    create(
      params: Params$Resource$Projects$Locations$Conversations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Conversations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Conversations$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Create
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Conversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Conversations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/conversations').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Conversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Conversation>(
          parameters
        );
      }
    }

    /**
     * Deletes a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Conversations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Conversations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Conversations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Conversations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Conversations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Delete
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
        {}) as Params$Resource$Projects$Locations$Conversations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Conversations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Conversations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Conversations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Conversation>;
    get(
      params: Params$Resource$Projects$Locations$Conversations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Conversations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Conversations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Get
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Conversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Conversations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Conversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Conversation>(
          parameters
        );
      }
    }

    /**
     * Imports conversations and processes them according to the user's configuration.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    ingest(
      params: Params$Resource$Projects$Locations$Conversations$Ingest,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    ingest(
      params?: Params$Resource$Projects$Locations$Conversations$Ingest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    ingest(
      params: Params$Resource$Projects$Locations$Conversations$Ingest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    ingest(
      params: Params$Resource$Projects$Locations$Conversations$Ingest,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    ingest(
      params: Params$Resource$Projects$Locations$Conversations$Ingest,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    ingest(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    ingest(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Ingest
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
        {}) as Params$Resource$Projects$Locations$Conversations$Ingest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Conversations$Ingest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/conversations:ingest').replace(
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
     * Lists conversations.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Conversations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Conversations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Conversations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Conversations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Conversations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$List
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Conversations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/conversations').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListConversationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Conversations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Conversations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Conversation>;
    patch(
      params: Params$Resource$Projects$Locations$Conversations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Conversations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Conversations$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Patch
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Conversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Conversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Conversations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Conversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Conversation>(
          parameters
        );
      }
    }

    /**
     * Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Projects$Locations$Conversations$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Projects$Locations$Conversations$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    upload(
      params: Params$Resource$Projects$Locations$Conversations$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Conversations$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    upload(
      params: Params$Resource$Projects$Locations$Conversations$Upload,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Upload
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
        {}) as Params$Resource$Projects$Locations$Conversations$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Conversations$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/conversations:upload').replace(
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

  export interface Params$Resource$Projects$Locations$Conversations$Bulkanalyze
    extends StandardParameters {
    /**
     * Required. The parent resource to create analyses in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Bulkdelete
    extends StandardParameters {
    /**
     * Required. The parent resource to delete conversations from. Format: projects/{project\}/locations/{location\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Calculatestats
    extends StandardParameters {
    /**
     * A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.
     */
    filter?: string;
    /**
     * Required. The location of the conversations.
     */
    location?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Create
    extends StandardParameters {
    /**
     * A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64\}$`. Valid characters are `a-z-`
     */
    conversationId?: string;
    /**
     * Required. The parent resource of the conversation.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1Conversation;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Delete
    extends StandardParameters {
    /**
     * If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     */
    force?: boolean;
    /**
     * Required. The name of the conversation to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Get
    extends StandardParameters {
    /**
     * Required. The name of the conversation to get.
     */
    name?: string;
    /**
     * The level of details of the conversation. Default is `FULL`.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Ingest
    extends StandardParameters {
    /**
     * Required. The parent resource for new conversations.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1IngestConversationsRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversations$List
    extends StandardParameters {
    /**
     * A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     */
    filter?: string;
    /**
     * Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc`, i.e. `create_time desc`. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * The maximum number of conversations to return in the response. A valid page size ranges from 0 to 1,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the conversation.
     */
    parent?: string;
    /**
     * The level of details of the conversation. Default is `BASIC`.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the conversation. Format: projects/{project\}/locations/{location\}/conversations/{conversation\}
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1Conversation;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Upload
    extends StandardParameters {
    /**
     * Required. The parent resource of the conversation.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1UploadConversationRequest;
  }

  export class Resource$Projects$Locations$Conversations$Analyses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an analysis. The long running operation is done when the analysis has completed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Conversations$Analyses$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Analyses$Create
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
        {}) as Params$Resource$Projects$Locations$Conversations$Analyses$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversations$Analyses$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/analyses').replace(
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
     * Deletes an analysis.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Conversations$Analyses$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Analyses$Delete
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
        {}) as Params$Resource$Projects$Locations$Conversations$Analyses$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversations$Analyses$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets an analysis.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Conversations$Analyses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Analysis>;
    get(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Analysis>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Analysis>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Analysis>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Analysis>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Analyses$Get
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Analysis>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Analysis>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Analysis>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Analysis>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversations$Analyses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversations$Analyses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Analysis>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Analysis>(
          parameters
        );
      }
    }

    /**
     * Lists analyses.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Conversations$Analyses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Conversations$Analyses$List,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversations$Analyses$List
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversations$Analyses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversations$Analyses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/analyses').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListAnalysesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Conversations$Analyses$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the analysis.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1Analysis;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Analyses$Delete
    extends StandardParameters {
    /**
     * Required. The name of the analysis to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Analyses$Get
    extends StandardParameters {
    /**
     * Required. The name of the analysis to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversations$Analyses$List
    extends StandardParameters {
    /**
     * A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     */
    filter?: string;
    /**
     * The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the analyses.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Insightsdata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Export insights data to a destination defined in the request body.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    export(
      params: Params$Resource$Projects$Locations$Insightsdata$Export,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    export(
      params?: Params$Resource$Projects$Locations$Insightsdata$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    export(
      params: Params$Resource$Projects$Locations$Insightsdata$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Insightsdata$Export,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Insightsdata$Export,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insightsdata$Export
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
        {}) as Params$Resource$Projects$Locations$Insightsdata$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Insightsdata$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/insightsdata:export').replace(
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

  export interface Params$Resource$Projects$Locations$Insightsdata$Export
    extends StandardParameters {
    /**
     * Required. The parent resource to export data from.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest;
  }

  export class Resource$Projects$Locations$Issuemodels {
    context: APIRequestContext;
    issues: Resource$Projects$Locations$Issuemodels$Issues;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.issues = new Resource$Projects$Locations$Issuemodels$Issues(
        this.context
      );
    }

    /**
     * Gets an issue model's statistics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    calculateIssueModelStats(
      params: Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    calculateIssueModelStats(
      params?: Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>;
    calculateIssueModelStats(
      params: Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculateIssueModelStats(
      params: Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>
    ): void;
    calculateIssueModelStats(
      params: Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>
    ): void;
    calculateIssueModelStats(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>
    ): void;
    calculateIssueModelStats(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+issueModel}:calculateIssueModelStats'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['issueModel'],
        pathParams: ['issueModel'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Creates an issue model.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Issuemodels$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Issuemodels$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Issuemodels$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Issuemodels$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Issuemodels$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Create
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
        {}) as Params$Resource$Projects$Locations$Issuemodels$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/issueModels').replace(
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
     * Deletes an issue model.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Issuemodels$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Issuemodels$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Issuemodels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Issuemodels$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Issuemodels$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Delete
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
        {}) as Params$Resource$Projects$Locations$Issuemodels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deploy(
      params: Params$Resource$Projects$Locations$Issuemodels$Deploy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deploy(
      params?: Params$Resource$Projects$Locations$Issuemodels$Deploy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    deploy(
      params: Params$Resource$Projects$Locations$Issuemodels$Deploy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deploy(
      params: Params$Resource$Projects$Locations$Issuemodels$Deploy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    deploy(
      params: Params$Resource$Projects$Locations$Issuemodels$Deploy,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    deploy(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    deploy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Deploy
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
        {}) as Params$Resource$Projects$Locations$Issuemodels$Deploy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$Deploy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deploy').replace(/([^:]\/)\/+/g, '$1'),
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

    /**
     * Exports an issue model to the provided destination.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    export(
      params: Params$Resource$Projects$Locations$Issuemodels$Export,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    export(
      params?: Params$Resource$Projects$Locations$Issuemodels$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    export(
      params: Params$Resource$Projects$Locations$Issuemodels$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Issuemodels$Export,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Issuemodels$Export,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Export
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
        {}) as Params$Resource$Projects$Locations$Issuemodels$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:export').replace(/([^:]\/)\/+/g, '$1'),
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

    /**
     * Gets an issue model.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Issuemodels$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Issuemodels$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1IssueModel>;
    get(
      params: Params$Resource$Projects$Locations$Issuemodels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Issuemodels$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Issuemodels$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Get
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Issuemodels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1IssueModel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1IssueModel>(
          parameters
        );
      }
    }

    /**
     * Imports an issue model from a Cloud Storage bucket.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Issuemodels$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Issuemodels$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Issuemodels$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Issuemodels$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Issuemodels$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Import
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
        {}) as Params$Resource$Projects$Locations$Issuemodels$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/issueModels:import').replace(
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
     * Lists issue models.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Issuemodels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Issuemodels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Issuemodels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Issuemodels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Issuemodels$List,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$List
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Issuemodels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/issueModels').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an issue model.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Issuemodels$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Issuemodels$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1IssueModel>;
    patch(
      params: Params$Resource$Projects$Locations$Issuemodels$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Issuemodels$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Issuemodels$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Patch
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1IssueModel>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Issuemodels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1IssueModel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1IssueModel>(
          parameters
        );
      }
    }

    /**
     * Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    undeploy(
      params: Params$Resource$Projects$Locations$Issuemodels$Undeploy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undeploy(
      params?: Params$Resource$Projects$Locations$Issuemodels$Undeploy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    undeploy(
      params: Params$Resource$Projects$Locations$Issuemodels$Undeploy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undeploy(
      params: Params$Resource$Projects$Locations$Issuemodels$Undeploy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    undeploy(
      params: Params$Resource$Projects$Locations$Issuemodels$Undeploy,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    undeploy(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    undeploy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Undeploy
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
        {}) as Params$Resource$Projects$Locations$Issuemodels$Undeploy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Issuemodels$Undeploy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undeploy').replace(
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

  export interface Params$Resource$Projects$Locations$Issuemodels$Calculateissuemodelstats
    extends StandardParameters {
    /**
     * Required. The resource name of the issue model to query against.
     */
    issueModel?: string;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the issue model.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1IssueModel;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Delete
    extends StandardParameters {
    /**
     * Required. The name of the issue model to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Deploy
    extends StandardParameters {
    /**
     * Required. The issue model to deploy.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1DeployIssueModelRequest;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Export
    extends StandardParameters {
    /**
     * Required. The issue model to export
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1ExportIssueModelRequest;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Get
    extends StandardParameters {
    /**
     * Required. The name of the issue model to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Import
    extends StandardParameters {
    /**
     * Required. The parent resource of the issue model.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1ImportIssueModelRequest;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$List
    extends StandardParameters {
    /**
     * Required. The parent resource of the issue model.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the issue model. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1IssueModel;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Undeploy
    extends StandardParameters {
    /**
     * Required. The issue model to undeploy.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest;
  }

  export class Resource$Projects$Locations$Issuemodels$Issues {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes an issue.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Issuemodels$Issues$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Issues$Delete
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
        {}) as Params$Resource$Projects$Locations$Issuemodels$Issues$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Issuemodels$Issues$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets an issue.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Issuemodels$Issues$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Issue>;
    get(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Issues$Get
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Issue>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Issuemodels$Issues$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Issuemodels$Issues$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Issue>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Issue>(
          parameters
        );
      }
    }

    /**
     * Lists issues.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Issuemodels$Issues$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$List,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Issues$List
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Issuemodels$Issues$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Issuemodels$Issues$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/issues').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListIssuesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an issue.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Issuemodels$Issues$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Issue>;
    patch(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Issuemodels$Issues$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Issuemodels$Issues$Patch
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1Issue>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1Issue>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Issuemodels$Issues$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Issuemodels$Issues$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Issue>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1Issue>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Issuemodels$Issues$Delete
    extends StandardParameters {
    /**
     * Required. The name of the issue to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Issues$Get
    extends StandardParameters {
    /**
     * Required. The name of the issue to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Issues$List
    extends StandardParameters {
    /**
     * Required. The parent resource of the issue.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Issuemodels$Issues$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the issue. Format: projects/{project\}/locations/{location\}/issueModels/{issue_model\}/issues/{issue\}
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1Issue;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
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
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
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

  export class Resource$Projects$Locations$Phrasematchers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a phrase matcher.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Phrasematchers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Phrasematchers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>;
    create(
      params: Params$Resource$Projects$Locations$Phrasematchers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Phrasematchers$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Phrasematchers$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasematchers$Create
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasematchers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasematchers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/phraseMatchers').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>(
          parameters
        );
      }
    }

    /**
     * Deletes a phrase matcher.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Phrasematchers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Phrasematchers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Phrasematchers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Phrasematchers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Phrasematchers$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasematchers$Delete
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
        {}) as Params$Resource$Projects$Locations$Phrasematchers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasematchers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a phrase matcher.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Phrasematchers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Phrasematchers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>;
    get(
      params: Params$Resource$Projects$Locations$Phrasematchers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Phrasematchers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Phrasematchers$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasematchers$Get
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasematchers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasematchers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>(
          parameters
        );
      }
    }

    /**
     * Lists phrase matchers.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Phrasematchers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Phrasematchers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Phrasematchers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Phrasematchers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Phrasematchers$List,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasematchers$List
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasematchers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasematchers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/phraseMatchers').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a phrase matcher.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Phrasematchers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Phrasematchers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>;
    patch(
      params: Params$Resource$Projects$Locations$Phrasematchers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Phrasematchers$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Phrasematchers$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasematchers$Patch
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasematchers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasematchers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Phrasematchers$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the phrase matcher. Required. The location to create a phrase matcher for. Format: `projects//locations/` or `projects//locations/`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher;
  }
  export interface Params$Resource$Projects$Locations$Phrasematchers$Delete
    extends StandardParameters {
    /**
     * Required. The name of the phrase matcher to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Phrasematchers$Get
    extends StandardParameters {
    /**
     * Required. The name of the phrase matcher to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Phrasematchers$List
    extends StandardParameters {
    /**
     * A filter to reduce results to a specific subset. Useful for querying phrase matchers with specific properties.
     */
    filter?: string;
    /**
     * The maximum number of phrase matchers to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListPhraseMatchersResponse`. This value indicates that this is a continuation of a prior `ListPhraseMatchers` call and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the phrase matcher.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Phrasematchers$Patch
    extends StandardParameters {
    /**
     * The resource name of the phrase matcher. Format: projects/{project\}/locations/{location\}/phraseMatchers/{phrase_matcher\}
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1PhraseMatcher;
  }

  export class Resource$Projects$Locations$Views {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a view.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Views$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Views$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1View>;
    create(
      params: Params$Resource$Projects$Locations$Views$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Views$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Views$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Views$Create
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1View>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Views$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Views$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/views').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1View>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1View>(
          parameters
        );
      }
    }

    /**
     * Deletes a view.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Views$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Views$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Views$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Views$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Views$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Views$Delete
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
        {}) as Params$Resource$Projects$Locations$Views$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Views$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a view.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Views$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Views$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1View>;
    get(
      params: Params$Resource$Projects$Locations$Views$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Views$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Views$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Views$Get
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1View>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Views$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Views$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1View>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1View>(
          parameters
        );
      }
    }

    /**
     * Lists views.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Views$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Views$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Views$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Views$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Views$List,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Views$List
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Views$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Views$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/views').replace(
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1ListViewsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a view.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Views$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Views$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1View>;
    patch(
      params: Params$Resource$Projects$Locations$Views$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Views$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Views$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Views$Patch
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudContactcenterinsightsV1View>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudContactcenterinsightsV1View>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Views$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Views$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://contactcenterinsights.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1View>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudContactcenterinsightsV1View>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Views$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the view. Required. The location to create a view for. Format: `projects//locations/` or `projects//locations/`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1View;
  }
  export interface Params$Resource$Projects$Locations$Views$Delete
    extends StandardParameters {
    /**
     * Required. The name of the view to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Views$Get
    extends StandardParameters {
    /**
     * Required. The name of the view to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Views$List
    extends StandardParameters {
    /**
     * The maximum number of views to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListViewsResponse`; indicates that this is a continuation of a prior `ListViews` call and the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the views.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Views$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the view. Format: projects/{project\}/locations/{location\}/views/{view\}
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudContactcenterinsightsV1View;
  }
}
