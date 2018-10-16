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
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace dialogflow_v2beta1 {
  export interface Options extends GlobalOptions {
    version: 'v2beta1';
  }

  /**
   * Dialogflow API
   *
   * An end-to-end development suite for conversational interfaces (e.g.,
   * chatbots, voice-powered apps and devices).
   *
   * @example
   * const {google} = require('googleapis');
   * const dialogflow = google.dialogflow('v2beta1');
   *
   * @namespace dialogflow
   * @type {Function}
   * @version v2beta1
   * @variation v2beta1
   * @param {object=} options Options for Dialogflow
   */
  export class Dialogflow {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * The response message for EntityTypes.BatchUpdateEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {
    /**
     * The collection of updated or created entity types.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2EntityType[];
  }
  /**
   * The response message for Intents.BatchUpdateIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
    /**
     * The collection of updated or created intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
  }
  /**
   * The request message for Conversations.AddConversationPhoneNumber.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1AddConversationPhoneNumberRequest {
  }
  /**
   * Represents a conversational agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Agent {
    /**
     * Optional. The URI of the agent&#39;s avatar. Avatars are used throughout
     * the Dialogflow console and in the self-hosted [Web
     * Demo](https://dialogflow.com/docs/integrations/web-demo) integration.
     */
    avatarUri?: string;
    /**
     * Optional. To filter out false positive results and still get variety in
     * matched natural language inputs for your agent, you can tune the machine
     * learning classification threshold. If the returned score value is less
     * than the threshold value, then a fallback intent is be triggered or, if
     * there are no fallback intents defined, no intent will be triggered. The
     * score values range from 0.0 (completely uncertain) to 1.0 (completely
     * certain). If set to 0.0, the default of 0.3 is used.
     */
    classificationThreshold?: number;
    /**
     * Required. The default language of the agent as a language tag. See
     * [Language Support](https://dialogflow.com/docs/reference/language) for a
     * list of the currently supported language codes. This field cannot be set
     * by the `Update` method.
     */
    defaultLanguageCode?: string;
    /**
     * Optional. The description of this agent. The maximum length is 500
     * characters. If exceeded, the request is rejected.
     */
    description?: string;
    /**
     * Required. The name of this agent.
     */
    displayName?: string;
    /**
     * Optional. Determines whether this agent should log conversation queries.
     */
    enableLogging?: boolean;
    /**
     * Optional. Determines how intents are detected from user queries.
     */
    matchMode?: string;
    /**
     * Required. The project of this agent. Format: `projects/&lt;Project
     * ID&gt;`.
     */
    parent?: string;
    /**
     * Optional. The list of all languages supported by this agent (except for
     * the `default_language_code`).
     */
    supportedLanguageCodes?: string[];
    /**
     * Required. The time zone of this agent from the [time zone
     * database](https://www.iana.org/time-zones), e.g., America/New_York,
     * Europe/Paris.
     */
    timeZone?: string;
  }
  /**
   * The request message for Conversations.AnalyzeContent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1AnalyzeContentRequest {
    /**
     * The natural language speech audio to be processed.
     */
    audio?: Schema$GoogleCloudDialogflowV2beta1InputAudio;
    /**
     * Optional. Instructs the speech synthesizer how to generate the output
     * audio.
     */
    replyAudioConfig?: Schema$GoogleCloudDialogflowV2beta1OutputAudioConfig;
    /**
     * The natural language text to be processed.
     */
    text?: Schema$GoogleCloudDialogflowV2beta1InputText;
  }
  /**
   * The response message for Conversations.AnalyzeContent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse {
    /**
     * Optional. Only set if a Dialogflow automated agent has responded.
     */
    automatedAgentReply?:
        Schema$GoogleCloudDialogflowV2beta1AutomatedAgentReply;
    /**
     * Optional. The audio data bytes encoded as specified in the request. This
     * field is set if:  - `reply_audio_config` was specified in the request, or
     * - The automated agent responded with audio to play to the user. In such
     * case, `reply_audio.config` contains settings used to synthesize the
     * speech.
     */
    replyAudio?: Schema$GoogleCloudDialogflowV2beta1OutputAudio;
    /**
     * Output only. The output text content. This field is set if the automated
     * agent responded with text to show to the user.
     */
    replyText?: string;
  }
  /**
   * Defines article suggestions that a human agent assistant can provide.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ArticleSuggestionConfig {
    /**
     * Required. Settings for knowledge base, Format: `projects/&lt;Project
     * ID&gt;/knowledgeBases/&lt;Knowledge Base ID&gt;`.
     */
    knowledgeBaseName?: string;
  }
  /**
   * Defines the Automated Agent to connect to a conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1AutomatedAgentConfig {
    /**
     * Required. ID of the Dialogflow agent environment to use.  This project
     * needs to either be the same project as the conversation or you need to
     * grant `service-&lt;Conversation Project
     * Number&gt;@gcp-sa-dialogflow.iam.gserviceaccount.com` the `Dialogflow API
     * Service Agent` role in this project.  Format: `projects/&lt;Project
     * ID&gt;/agent/environments/&lt;Environment ID or &#39;-&#39;&gt;` If
     * environment is not specified, the default `draft` environment is used.
     * Refer to
     * [DetectIntentRequest](/dialogflow-enterprise/docs/reference/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest)
     * for more details.
     */
    agent?: string;
  }
  /**
   * Represent a response from an automated agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1AutomatedAgentReply {
    /**
     * Required. Response of the Dialogflow Sessions.DetectIntent call.
     */
    detectIntentResponse?:
        Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse;
  }
  /**
   * The request message for EntityTypes.BatchCreateEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest {
    /**
     * Required. The entities to create.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Optional. The language of entity synonyms defined in `entities`. If not
     * specified, the agent&#39;s default language is used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
  }
  /**
   * The request message for EntityTypes.BatchDeleteEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest {
    /**
     * Required. The canonical `values` of the entities to delete. Note that
     * these are not fully-qualified names, i.e. they don&#39;t start with
     * `projects/&lt;Project ID&gt;`.
     */
    entityValues?: string[];
    /**
     * Optional. The language of entity synonyms defined in `entities`. If not
     * specified, the agent&#39;s default language is used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
  }
  /**
   * The request message for EntityTypes.BatchDeleteEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest {
    /**
     * Required. The names entity types to delete. All names must point to the
     * same agent as `parent`.
     */
    entityTypeNames?: string[];
  }
  /**
   * The request message for Intents.BatchDeleteIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest {
    /**
     * Required. The collection of intents to delete. Only intent `name` must be
     * filled in.
     */
    intents?: Schema$GoogleCloudDialogflowV2beta1Intent[];
  }
  /**
   * The request message for EntityTypes.BatchUpdateEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest {
    /**
     * Required. The entities to update or create.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Optional. The language of entity synonyms defined in `entities`. If not
     * specified, the agent&#39;s default language is used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;
  }
  /**
   * The request message for EntityTypes.BatchUpdateEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest {
    /**
     * The collection of entity types to update or create.
     */
    entityTypeBatchInline?: Schema$GoogleCloudDialogflowV2beta1EntityTypeBatch;
    /**
     * The URI to a Google Cloud Storage file containing entity types to update
     * or create. The file format can either be a serialized proto (of
     * EntityBatch type) or a JSON object. Note: The URI must start with
     * &quot;gs://&quot;.
     */
    entityTypeBatchUri?: string;
    /**
     * Optional. The language of entity synonyms defined in `entity_types`. If
     * not specified, the agent&#39;s default language is used. [More than a
     * dozen languages](https://dialogflow.com/docs/reference/language) are
     * supported. Note: languages must be enabled in the agent, before they can
     * be used.
     */
    languageCode?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;
  }
  /**
   * The response message for EntityTypes.BatchUpdateEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse {
    /**
     * The collection of updated or created entity types.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2beta1EntityType[];
  }
  /**
   * The request message for Intents.BatchUpdateIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest {
    /**
     * The collection of intents to update or create.
     */
    intentBatchInline?: Schema$GoogleCloudDialogflowV2beta1IntentBatch;
    /**
     * The URI to a Google Cloud Storage file containing intents to update or
     * create. The file format can either be a serialized proto (of IntentBatch
     * type) or JSON object. Note: The URI must start with &quot;gs://&quot;.
     */
    intentBatchUri?: string;
    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language of training phrases, parameters and rich messages
     * defined in `intents`. If not specified, the agent&#39;s default language
     * is used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;
  }
  /**
   * The response message for Intents.BatchUpdateIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
    /**
     * The collection of updated or created intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2beta1Intent[];
  }
  /**
   * The request message for PhoneNumberOrders.CancelPhoneNumberOrder.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1CancelPhoneNumberOrderRequest {
  }
  /**
   * The request message for HumanAgentAssistants.RequestCompileSuggestions.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsRequest {
    /**
     * Required. List of messages in a conversation in chronological order.
     */
    messages?: Schema$GoogleCloudDialogflowV2beta1Message[];
  }
  /**
   * The response message for HumanAgentAssistants.RequestCompileSuggestions
   */
  export interface Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse {
    /**
     * Required.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1Suggestion[];
  }
  /**
   * The request message for Conversations.CompleteConversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1CompleteConversationRequest {
  }
  /**
   * Represents a context.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Context {
    /**
     * Optional. The number of conversational query requests after which the
     * context expires. If set to `0` (the default) the context expires
     * immediately. Contexts expire automatically after 10 minutes even if there
     * are no matching queries.
     */
    lifespanCount?: number;
    /**
     * Required. The unique identifier of the context. Format:
     * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session
     * ID&gt;/contexts/&lt;Context ID&gt;`, or `projects/&lt;Project
     * ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User
     * ID&gt;/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`. The
     * `Context ID` is always converted to lowercase. If `Environment ID` is not
     * specified, we assume default &#39;draft&#39; environment. If `User ID` is
     * not specified, we assume default &#39;-&#39; user.
     */
    name?: string;
    /**
     * Optional. The collection of parameters associated with this context.
     * Refer to [this doc](https://dialogflow.com/docs/actions-and-parameters)
     * for syntax.
     */
    parameters?: any;
  }
  /**
   * Represents a conversation. A conversation is an interaction between an
   * agent, including live agents and Dialogflow agents, and a support customer.
   * Conversations can include phone calls and text-based chat sessions.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Conversation {
    /**
     * Required. The Conversation Profile to be used to configure this
     * Conversation. This field cannot be updated. Format: `projects/&lt;Project
     * ID&gt;/conversationProfiles/&lt;Conversation Profile ID&gt;`.
     */
    conversationProfile?: string;
    /**
     * Output only. The time the conversation was finished.
     */
    endTime?: string;
    /**
     * Output only. The current state of the Conversation.
     */
    lifecycleState?: string;
    /**
     * The unique identifier of this conversation. Required for all methods
     * except `create` (`create` populates the name automatically). Format:
     * `projects/&lt;Project ID&gt;/conversations/&lt;Conversation ID&gt;`.
     */
    name?: string;
    /**
     * Output only. Required if the conversation is to be connected over
     * telephony.
     */
    phoneNumber?: Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber;
    /**
     * Output only. The time the conversation was started.
     */
    startTime?: string;
  }
  /**
   * Represents a phone number for telephony integration. It allows for
   * connecting a particular conversation over telephony.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber {
    /**
     * Output only. The phone number to connect to this conversation.
     */
    phoneNumber?: string;
  }
  /**
   * Defines the services to connect to incoming Dialogflow conversations.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ConversationProfile {
    /**
     * Optional. Configuration for an automated agent to use with this profile.
     */
    automatedAgentConfig?:
        Schema$GoogleCloudDialogflowV2beta1AutomatedAgentConfig;
    /**
     * Required. Human readable name for this profile. Max length 1024 bytes.
     */
    displayName?: string;
    /**
     * Optional. Configuration for agent assistance to use with this profile.
     */
    humanAgentAssistantConfig?:
        Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;
    /**
     * Optional. Configuration for logging conversation lifecycle events.
     */
    loggingConfig?: Schema$GoogleCloudDialogflowV2beta1LoggingConfig;
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically). The unique identifier of this conversation profile.
     * Format: `projects/&lt;Project
     * ID&gt;/conversationProfiles/&lt;Conversation Profile ID&gt;`.
     */
    name?: string;
    /**
     * Optional. Configuration for publishing conversation lifecycle events.
     */
    notificationConfig?: Schema$GoogleCloudDialogflowV2beta1NotificationConfig;
  }
  /**
   * The request to detect user&#39;s intent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1DetectIntentRequest {
    /**
     * Optional. The natural language speech audio to be processed. This field
     * should be populated iff `query_input` is set to an input audio config. A
     * single request can contain up to 1 minute of speech audio data.
     */
    inputAudio?: string;
    /**
     * Optional. Instructs the speech synthesizer how to generate the output
     * audio. If this field is not set and agent-level speech synthesizer is not
     * configured, no output audio is generated.
     */
    outputAudioConfig?: Schema$GoogleCloudDialogflowV2beta1OutputAudioConfig;
    /**
     * Required. The input specification. It can be set to:  1.  an audio config
     * which instructs the speech recognizer how to process the speech audio, 2.
     * a conversational query in the form of text, or  3.  an event that
     * specifies which intent to trigger.
     */
    queryInput?: Schema$GoogleCloudDialogflowV2beta1QueryInput;
    /**
     * Optional. The parameters of this query.
     */
    queryParams?: Schema$GoogleCloudDialogflowV2beta1QueryParameters;
  }
  /**
   * The message returned from the DetectIntent method.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse {
    /**
     * If Knowledge Connectors are enabled, there could be more than one result
     * returned for a given query or event, and this field will contain all
     * results except for the top one, which is captured in query_result. The
     * alternative results are ordered by decreasing
     * `QueryResult.intent_detection_confidence`. If Knowledge Connectors are
     * disabled, this field will be empty until multiple responses for regular
     * intents are supported, at which point those additional results will be
     * surfaced here.
     */
    alternativeQueryResults?: Schema$GoogleCloudDialogflowV2beta1QueryResult[];
    /**
     * The audio data bytes encoded as specified in the request.
     */
    outputAudio?: string;
    /**
     * Instructs the speech synthesizer how to generate the output audio. This
     * field is populated from the agent-level speech synthesizer configuration,
     * if enabled.
     */
    outputAudioConfig?: Schema$GoogleCloudDialogflowV2beta1OutputAudioConfig;
    /**
     * The selected results of the conversational query or event processing. See
     * `alternative_query_results` for additional potential results.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2beta1QueryResult;
    /**
     * The unique identifier of the response. It can be used to locate a
     * response in the training example set or for reporting issues.
     */
    responseId?: string;
    /**
     * Specifies the status of the webhook request. `webhook_status` is never
     * populated in webhook requests.
     */
    webhookStatus?: Schema$GoogleRpcStatus;
  }
  /**
   * A document resource.  Note: resource
   * `projects.agent.knowledgeBases.documents` is deprecated, please use
   * `projects.knowledgeBases.documents` instead.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Document {
    /**
     * The raw content of the document. This field is only permitted for
     * EXTRACTIVE_QA and FAQ knowledge types. Note: This field is in the process
     * of being deprecated, please use raw_content instead.
     */
    content?: string;
    /**
     * The URI where the file content is located.  For documents stored in
     * Google Cloud Storage, these URIs must have the form
     * `gs://&lt;bucket-name&gt;/&lt;object-name&gt;`.  NOTE: External URLs must
     * correspond to public webpages, i.e., they must be indexed by Google
     * Search. In particular, URLs for showing documents in Google Cloud Storage
     * (i.e. the URL in your browser) are not supported. Instead use the `gs://`
     * format URI described above.
     */
    contentUri?: string;
    /**
     * Required. The display name of the document. The name must be 1024 bytes
     * or less; otherwise, the creation request fails.
     */
    displayName?: string;
    /**
     * Required. The knowledge type of document content.
     */
    knowledgeTypes?: string[];
    /**
     * Required. The MIME type of this document.
     */
    mimeType?: string;
    /**
     * The document resource name. The name must be empty when creating a
     * document. Format: `projects/&lt;Project
     * ID&gt;/knowledgeBases/&lt;Knowledge Base ID&gt;/documents/&lt;Document
     * ID&gt;`.
     */
    name?: string;
    /**
     * The raw content of the document. This field is only permitted for
     * EXTRACTIVE_QA and FAQ knowledge types.
     */
    rawContent?: string;
  }
  /**
   * Represents an entity type. Entity types serve as a tool for extracting
   * parameter values from natural language queries.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityType {
    /**
     * Optional. Indicates whether the entity type can be automatically
     * expanded.
     */
    autoExpansionMode?: string;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string;
    /**
     * Optional. The collection of entities associated with the entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: string;
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically. The unique identifier of the entity type. Format:
     * `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
     */
    name?: string;
  }
  /**
   * This message is a wrapper around a collection of entity types.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityTypeBatch {
    /**
     * A collection of entity types.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2beta1EntityType[];
  }
  /**
   * Optional. Represents an entity.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity {
    /**
     * Required. A collection of synonyms. For `KIND_LIST` entity types this
     * must contain exactly one synonym equal to `value`.
     */
    synonyms?: string[];
    /**
     * Required. For `KIND_MAP` entity types:   A canonical name to be used in
     * place of synonyms. For `KIND_LIST` entity types:   A string that can
     * contain references to other entity types (with or   without aliases).
     */
    value?: string;
  }
  /**
   * Events allow for matching intents by event name instead of the natural
   * language input. For instance, input `&lt;event: { name: “welcome_event”,
   * parameters: { name: “Sam” } }&gt;` can trigger a personalized welcome
   * response. The parameter `name` may be used by the agent in the response:
   * `“Hello #welcome_event.name! What can I do for you today?”`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EventInput {
    /**
     * Required. The language of this query. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes. Note that queries in the same session
     * do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Required. The unique identifier of the event.
     */
    name?: string;
    /**
     * Optional. The collection of parameters associated with the event.
     */
    parameters?: any;
  }
  /**
   * The request message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ExportAgentRequest {
    /**
     * Optional. The [Google Cloud
     * Storage](https://cloud.google.com/storage/docs/) URI to export the agent
     * to. The format of this URI must be
     * `gs://&lt;bucket-name&gt;/&lt;object-name&gt;`. If left unspecified, the
     * serialized agent is returned inline.
     */
    agentUri?: string;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ExportAgentResponse {
    /**
     * The exported agent.  Example for how to export an agent to a zip file via
     * a command line: &lt;pre&gt;curl \
     * &#39;https://dialogflow.googleapis.com/v2beta1/projects/&amp;lt;project_name&amp;gt;/agent:export&#39;\
     * -X POST \   -H &#39;Authorization: Bearer &#39;$(gcloud auth
     * application-default   print-access-token) \   -H &#39;Accept:
     * application/json&#39; \   -H &#39;Content-Type: application/json&#39; \
     * --compressed \   --data-binary &#39;{}&#39; \ | grep agentContent | sed
     * -e &#39;s/.*&quot;agentContent&quot;:
     * &quot;\([^&quot;]*\)&quot;.x/\1/&#39; \ | base64 --decode &gt;
     * &amp;lt;agent zip file&amp;gt;&lt;/pre&gt;
     */
    agentContent?: string;
    /**
     * The URI to a file containing the exported agent. This field is populated
     * only if `agent_uri` is specified in `ExportAgentRequest`.
     */
    agentUri?: string;
  }
  /**
   * Defines FAQ responses that a human agent assistant can provide.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1FaqAnswersConfig {
    /**
     * Required. Settings for knowledge base, Format: `projects/&lt;Project
     * ID&gt;/knowledgeBases/&lt;Knowledge Base ID&gt;`.
     */
    knowledgeBaseName?: string;
    /**
     * Optional. Maximum number of results to return. If unset, defaults to 10.
     */
    maxResults?: number;
  }
  /**
   * Represents a human agent assistant that provides suggestions to help human
   * agents to resolve customer issues. This defines the types of content that
   * the human agent assistant can present to a human agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant {
    /**
     * Optional. Settings for article suggestion.
     */
    articleSuggestionConfig?:
        Schema$GoogleCloudDialogflowV2beta1ArticleSuggestionConfig;
    /**
     * Optional. Settings for knowledge service.
     */
    faqAnswersConfig?: Schema$GoogleCloudDialogflowV2beta1FaqAnswersConfig;
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically). The unique identifier of human agent assistant. Format:
     * `projects/&lt;Project ID&gt;/humanAgentAssistants/&lt;Human Agent
     * Assistant ID&gt;`.
     */
    name?: string;
  }
  /**
   * Defines the Human Agent Assistant to connect to a conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig {
    /**
     * Required. ID of the agent assistant to use. Format: `projects/&lt;Project
     * ID&gt;/humanAgentAssistants/&lt;Human Agent Assistant ID&gt;`.
     */
    name?: string;
    /**
     * Optional. Pub/Sub topic on which to publish new agent assistant events.
     */
    notificationConfig?: Schema$GoogleCloudDialogflowV2beta1NotificationConfig;
  }
  /**
   * The request message for Agents.ImportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ImportAgentRequest {
    /**
     * The agent to import.  Example for how to import an agent via the command
     * line: &lt;pre&gt;curl \
     * &#39;https://dialogflow.googleapis.com/v2beta1/projects/&amp;lt;project_name&amp;gt;/agent:import\
     * -X POST \    -H &#39;Authorization: Bearer &#39;$(gcloud auth
     * application-default    print-access-token) \    -H &#39;Accept:
     * application/json&#39; \    -H &#39;Content-Type: application/json&#39; \
     * --compressed \    --data-binary &quot;{       &#39;agentContent&#39;:
     * &#39;$(cat &amp;lt;agent zip file&amp;gt; | base64 -w 0)&#39;
     * }&quot;&lt;/pre&gt;
     */
    agentContent?: string;
    /**
     * The URI to a Google Cloud Storage file containing the agent to import.
     * Note: The URI must start with &quot;gs://&quot;.
     */
    agentUri?: string;
  }
  /**
   * Represents the natural language speech audio to be processed.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1InputAudio {
    /**
     * Required. The natural language speech audio to be processed. A single
     * request can contain up to 1 minute of speech audio data. The transcribed
     * text cannot contain more than 256 bytes.
     */
    audio?: string;
    /**
     * Required. Instructs the speech recognizer how to process the speech
     * audio.
     */
    config?: Schema$GoogleCloudDialogflowV2beta1InputAudioConfig;
  }
  /**
   * Instructs the speech recognizer how to process the audio content.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1InputAudioConfig {
    /**
     * Required. Audio encoding of the audio content to process.
     */
    audioEncoding?: string;
    /**
     * Required. The language of the supplied audio. Dialogflow does not do
     * translations. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes. Note that queries in the same session
     * do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Optional. Which Speech model to select for the given request. Select the
     * model best suited to your domain to get best results. If a model is not
     * explicitly specified, then we auto-select a model based on the parameters
     * in the InputAudioConfig. If enhanced speech model is enabled for the
     * agent and an enhanced version of the specified model for the language
     * does not exist, then the speech is recognized using the standard version
     * of the specified model. Refer to [Cloud Speech API
     * documentation](https://cloud.google.com/speech-to-text/docs/basics#select-model)
     * for more details.
     */
    model?: string;
    /**
     * Optional. The collection of phrase hints which are used to boost accuracy
     * of speech recognition. Refer to [Cloud Speech API
     * documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints)
     * for more details.
     */
    phraseHints?: string[];
    /**
     * Required. Sample rate (in Hertz) of the audio content sent in the query.
     * Refer to [Cloud Speech API
     * documentation](https://cloud.google.com/speech-to-text/docs/basics) for
     * more details.
     */
    sampleRateHertz?: number;
  }
  /**
   * Represents the natural language text to be processed.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1InputText {
    /**
     * Required. The language of this conversational query. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes.
     */
    languageCode?: string;
    /**
     * Required. The UTF-8 encoded natural language text to be processed. Text
     * length must not exceed 256 bytes.
     */
    text?: string;
  }
  /**
   * Defines the language used in the input text.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1InputTextConfig {
    /**
     * Required. The language of this conversational query. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes.
     */
    languageCode?: string;
  }
  /**
   * Represents an intent. Intents convert a number of user expressions or
   * patterns into an action. An action is an extraction of a user command or
   * sentence semantics.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Intent {
    /**
     * Optional. The name of the action associated with the intent. Note: The
     * action name must not contain whitespaces.
     */
    action?: string;
    /**
     * Optional. The list of platforms for which the first response will be
     * taken from among the messages assigned to the DEFAULT_PLATFORM.
     */
    defaultResponsePlatforms?: string[];
    /**
     * Required. The name of this intent.
     */
    displayName?: string;
    /**
     * Optional. Indicates that this intent ends an interaction. Some
     * integrations (e.g., Actions on Google or Dialogflow phone gateway) use
     * this information to close interaction with an end user. Default is false.
     */
    endInteraction?: boolean;
    /**
     * Optional. The collection of event names that trigger the intent. If the
     * collection of input contexts is not empty, all of the contexts must be
     * present in the active user session for an event to trigger this intent.
     */
    events?: string[];
    /**
     * Read-only. Information about all followup intents that have this intent
     * as a direct or indirect parent. We populate this field only in the
     * output.
     */
    followupIntentInfo?:
        Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];
    /**
     * Optional. The list of context names required for this intent to be
     * triggered. Format: `projects/&lt;Project
     * ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    inputContextNames?: string[];
    /**
     * Optional. Indicates whether this is a fallback intent.
     */
    isFallback?: boolean;
    /**
     * Optional. The collection of rich messages corresponding to the `Response`
     * field in the Dialogflow console.
     */
    messages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent.
     * Note: If `ml_disabled` setting is set to true, then this intent is not
     * taken into account during inference in `ML ONLY` match mode. Also,
     * auto-markup in the UI is turned off.
     */
    mlDisabled?: boolean;
    /**
     * Optional. Indicates whether Machine Learning is enabled for the intent.
     * Note: If `ml_enabled` setting is set to false, then this intent is not
     * taken into account during inference in `ML ONLY` match mode. Also,
     * auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled`
     * field instead. NOTE: If both `ml_enabled` and `ml_disabled` are either
     * not set or false, then the default value is determined as follows: -
     * Before April 15th, 2018 the default is:   ml_enabled = false /
     * ml_disabled = true. - After April 15th, 2018 the default is:   ml_enabled
     * = true / ml_disabled = false.
     */
    mlEnabled?: boolean;
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically. The unique identifier of this intent. Format:
     * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    name?: string;
    /**
     * Optional. The collection of contexts that are activated when the intent
     * is matched. Context messages in this collection should not set the
     * parameters field. Setting the `lifespan_count` to 0 will reset the
     * context when the intent is matched. Format: `projects/&lt;Project
     * ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. The collection of parameters associated with the intent.
     */
    parameters?: Schema$GoogleCloudDialogflowV2beta1IntentParameter[];
    /**
     * Read-only after creation. The unique identifier of the parent intent in
     * the chain of followup intents. You can set this field when creating an
     * intent, for example with CreateIntent or BatchUpdateIntents, in order to
     * make this intent a followup intent.  It identifies the parent followup
     * intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent
     * ID&gt;`.
     */
    parentFollowupIntentName?: string;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher
     * priorities. Zero or negative numbers mean that the intent is disabled.
     */
    priority?: number;
    /**
     * Optional. Indicates whether to delete all contexts in the current session
     * when this intent is matched.
     */
    resetContexts?: boolean;
    /**
     * Read-only. The unique identifier of the root intent in the chain of
     * followup intents. It identifies the correct followup intents chain for
     * this intent. We populate this field only in the output.  Format:
     * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    rootFollowupIntentName?: string;
    /**
     * Optional. The collection of examples/templates that the agent is trained
     * on.
     */
    trainingPhrases?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];
    /**
     * Optional. Indicates whether webhooks are enabled for the intent.
     */
    webhookState?: string;
  }
  /**
   * This message is a wrapper around a collection of intents.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentBatch {
    /**
     * A collection of intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2beta1Intent[];
  }
  /**
   * Represents a single followup intent in the chain.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
    /**
     * The unique identifier of the followup intent. Format:
     * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    followupIntentName?: string;
    /**
     * The unique identifier of the followup intent&#39;s parent. Format:
     * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    parentFollowupIntentName?: string;
  }
  /**
   * Corresponds to the `Response` field in the Dialogflow console.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessage {
    /**
     * Displays a basic card for Actions on Google.
     */
    basicCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
    /**
     * Displays a card.
     */
    card?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCard;
    /**
     * Displays a carousel card for Actions on Google.
     */
    carouselSelect?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
    /**
     * Displays an image.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Displays a link out suggestion chip for Actions on Google.
     */
    linkOutSuggestion?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
    /**
     * Displays a list card for Actions on Google.
     */
    listSelect?: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect;
    /**
     * Returns a response containing a custom, platform-specific payload. See
     * the Intent.Message.Platform type for a description of the structure that
     * may be required for your platform.
     */
    payload?: any;
    /**
     * Optional. The platform that this message is intended for.
     */
    platform?: string;
    /**
     * Displays quick replies.
     */
    quickReplies?: Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
    /**
     * Returns a voice or text-only response for Actions on Google.
     */
    simpleResponses?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
    /**
     * Displays suggestion chips for Actions on Google.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
    /**
     * Plays audio from a file in Telephony Gateway.
     */
    telephonyPlayAudio?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
    /**
     * Synthesizes speech in Telephony Gateway.
     */
    telephonySynthesizeSpeech?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
    /**
     * Transfers the call in Telephony Gateway.
     */
    telephonyTransferCall?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
    /**
     * Returns a text response.
     */
    text?: Schema$GoogleCloudDialogflowV2beta1IntentMessageText;
  }
  /**
   * The basic card message. Useful for displaying information.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
    /**
     * Required, unless image is present. The body text of the card.
     */
    formattedText?: string;
    /**
     * Optional. The image for the card.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string;
    /**
     * Optional. The title of the card.
     */
    title?: string;
  }
  /**
   * The button object that appears at the bottom of a card.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton {
    /**
     * Required. Action to take when a user taps on the button.
     */
    openUriAction?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
    /**
     * Required. The title of the button.
     */
    title?: string;
  }
  /**
   * Opens the given URI.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {
    /**
     * Required. The HTTP or HTTPS scheme URI.
     */
    uri?: string;
  }
  /**
   * The card response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCard {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton[];
    /**
     * Optional. The public URI to an image file for the card.
     */
    imageUri?: string;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string;
    /**
     * Optional. The title of the card.
     */
    title?: string;
  }
  /**
   * Optional. Contains information about a button.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton {
    /**
     * Optional. The text to send back to the Dialogflow API or a URI to open.
     */
    postback?: string;
    /**
     * Optional. The text to show on the button.
     */
    text?: string;
  }
  /**
   * The card for presenting a carousel of options to select from.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect {
    /**
     * Required. Carousel items.
     */
    items?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem[];
  }
  /**
   * An item in the carousel.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
    /**
     * Optional. The body text of the card.
     */
    description?: string;
    /**
     * Optional. The image to display.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Additional info about the option item.
     */
    info?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
    /**
     * Required. Title of the carousel item.
     */
    title?: string;
  }
  /**
   * The image response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageImage {
    /**
     * A text description of the image to be used for accessibility, e.g.,
     * screen readers. Required if image_uri is set for CarouselSelect.
     */
    accessibilityText?: string;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string;
  }
  /**
   * The suggestion chip message that allows the user to jump out to the app or
   * website associated with this agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string;
    /**
     * Required. The URI of the app or site to open when the user taps the
     * suggestion chip.
     */
    uri?: string;
  }
  /**
   * The card for presenting a list of options to select from.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect {
    /**
     * Required. List items.
     */
    items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem[];
    /**
     * Optional. The overall title of the list.
     */
    title?: string;
  }
  /**
   * An item in the list.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
    /**
     * Optional. The main text describing the item.
     */
    description?: string;
    /**
     * Optional. The image to display.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Additional information about this option.
     */
    info?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
    /**
     * Required. The title of the list item.
     */
    title?: string;
  }
  /**
   * The quick replies response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
    /**
     * Optional. The collection of quick replies.
     */
    quickReplies?: string[];
    /**
     * Optional. The title of the collection of quick replies.
     */
    title?: string;
  }
  /**
   * Additional info about the select item for when it is triggered in a dialog.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
    /**
     * Required. A unique key that will be sent back to the agent if this
     * response is given.
     */
    key?: string;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item
     * in dialog.
     */
    synonyms?: string[];
  }
  /**
   * The simple response message containing speech or text.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
    /**
     * Optional. The text to display.
     */
    displayText?: string;
    /**
     * One of text_to_speech or ssml must be provided. Structured spoken
     * response to the user in the SSML format. Mutually exclusive with
     * text_to_speech.
     */
    ssml?: string;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the
     * speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string;
  }
  /**
   * The collection of simple response candidates. This message in
   * `QueryResult.fulfillment_messages` and
   * `WebhookResponse.fulfillment_messages` should contain only one
   * `SimpleResponse`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses {
    /**
     * Required. The list of simple responses.
     */
    simpleResponses?:
        Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse[];
  }
  /**
   * The suggestion chip message that the user can tap to quickly post a reply
   * to the conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestion {
    /**
     * Required. The text shown the in the suggestion chip.
     */
    title?: string;
  }
  /**
   * The collection of suggestions.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions {
    /**
     * Required. The list of suggested replies.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestion[];
  }
  /**
   * Plays audio from a file in Telephony Gateway.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
    /**
     * Required. URI to a Google Cloud Storage object containing the audio to
     * play, e.g., &quot;gs://bucket/object&quot;. The object must contain a
     * single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz.
     * This object must be readable by the `service-&lt;Project
     * Number&gt;@gcp-sa-dialogflow.iam.gserviceaccount.com` service account
     * where &lt;Project Number&gt; is the number of the Telephony Gateway
     * project (usually the same as the Dialogflow agent project). If the Google
     * Cloud Storage bucket is in the Telephony Gateway project, this permission
     * is added by default when enabling the Dialogflow V2 API.  For audio from
     * other sources, consider using the `TelephonySynthesizeSpeech` message
     * with SSML.
     */
    audioUri?: string;
  }
  /**
   * Synthesizes speech and plays back the synthesized audio to the caller in
   * Telephony Gateway.  Telephony Gateway takes the synthesizer settings from
   * `DetectIntentResponse.output_audio_config` which can either be set at
   * request-level or can come from the agent-level synthesizer config.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
    /**
     * The SSML to be synthesized. For more information, see
     * [SSML](https://developers.google.com/actions/reference/ssml).
     */
    ssml?: string;
    /**
     * The raw text to be synthesized.
     */
    text?: string;
  }
  /**
   * Transfers the call in Telephony Gateway.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall {
    /**
     * Required. The phone number to transfer the call to in [E.164
     * format](https://en.wikipedia.org/wiki/E.164).  We currently only allow
     * transferring to US numbers (+1xxxyyyzzzz).
     */
    phoneNumber?: string;
  }
  /**
   * The text response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageText {
    /**
     * Optional. The collection of the agent&#39;s responses.
     */
    text?: string[];
  }
  /**
   * Represents intent parameters.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentParameter {
    /**
     * Optional. The default value to use when the `value` yields an empty
     * result. Default values can be extracted from contexts by using the
     * following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes
     * values of the parameter. If the parameter is required, this must be
     * provided.
     */
    entityTypeDisplayName?: string;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether
     * the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean;
    /**
     * The unique identifier of this parameter.
     */
    name?: string;
    /**
     * Optional. The collection of prompts that the agent can present to the
     * user in order to collect value for the parameter.
     */
    prompts?: string[];
    /**
     * Optional. The definition of the parameter value. It can be: - a constant
     * string, - a parameter value defined as `$parameter_name`, - an original
     * parameter value defined as `$parameter_name.original`, - a parameter
     * value from some context defined as   `#context_name.parameter_name`.
     */
    value?: string;
  }
  /**
   * Represents an example or template that the agent is trained on.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string;
    /**
     * Required. The collection of training phrase parts (can be annotated).
     * Fields: `entity_type`, `alias` and `user_defined` should be populated
     * only for the annotated parts of the training phrase.
     */
    parts?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example or template was added to
     * the intent. Each time a developer adds an existing sample by editing an
     * intent or training, this counter is increased.
     */
    timesAddedCount?: number;
    /**
     * Required. The type of the training phrase.
     */
    type?: string;
  }
  /**
   * Represents a part of a training phrase.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
    /**
     * Optional. The parameter name for the value extracted from the annotated
     * part of the example.
     */
    alias?: string;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required
     * for the annotated part of the text and applies only to examples.
     */
    entityType?: string;
    /**
     * Required. The text corresponding to the example or template, if there are
     * no annotations. For annotated examples, it is the text for one of the
     * example&#39;s parts.
     */
    text?: string;
    /**
     * Optional. Indicates whether the text was manually annotated by the
     * developer.
     */
    userDefined?: boolean;
  }
  /**
   * Represents the result of querying a Knowledge base.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswers {
    /**
     * A list of answers from Knowledge Connector.
     */
    answers?: Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer[];
  }
  /**
   * An answer from Knowledge Connector.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
    /**
     * The piece of text from the `source` knowledge base document that answers
     * this conversational query.
     */
    answer?: string;
    /**
     * The corresponding FAQ question if the answer was extracted from a FAQ
     * Document, empty otherwise.
     */
    faqQuestion?: string;
    /**
     * The system&#39;s confidence score that this Knowledge answer is a good
     * match for this converstational query, range from 0.0 (completely
     * uncertain) to 1.0 (completely certain). Note: The confidence score is
     * likely to vary somewhat (possibly even for identical requests), as the
     * underlying model is under constant improvement, we may deprecate it in
     * the future. We recommend using `match_confidence_level` which should be
     * generally more stable.
     */
    matchConfidence?: number;
    /**
     * The system&#39;s confidence level that this knowledge answer is a good
     * match for this conversational query. NOTE: The confidence level for a
     * given `&lt;query, answer&gt;` pair may change without notice, as it
     * depends on models that are constantly being improved. However, it will
     * change less frequently than the confidence score below, and should be
     * preferred for referencing the quality of an answer.
     */
    matchConfidenceLevel?: string;
    /**
     * Indicates which Knowledge Document this answer was extracted from.
     * Format: `projects/&lt;Project ID&gt;/knowledgeBases/&lt;Knowledge Base
     * ID&gt;/documents/&lt;Document ID&gt;`.
     */
    source?: string;
  }
  /**
   * Represents knowledge base resource.  Note: resource
   * `projects.agent.knowledgeBases` is deprecated, please use
   * `projects.knowledgeBases` instead.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeBase {
    /**
     * Required. The display name of the knowledge base. The name must be 1024
     * bytes or less; otherwise, the creation request fails.
     */
    displayName?: string;
    /**
     * The knowledge base resource name. The name must be empty when creating a
     * knowledge base. Format: `projects/&lt;Project
     * ID&gt;/knowledgeBases/&lt;Knowledge Base ID&gt;`.
     */
    name?: string;
  }
  /**
   * Metadata in google::longrunning::Operation for Knowledge operations.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {
    /**
     * Required. The current state of this operation.
     */
    state?: string;
  }
  /**
   * The response message for Contexts.ListContexts.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListContextsResponse {
    /**
     * The list of contexts. There will be a maximum number of items returned
     * based on the page_size field in the request.
     */
    contexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for ConversationProfiles.ListConversationProfiles.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse {
    /**
     * The list of project conversation profiles. There is a maximum number of
     * items returned based on the page_size field in the request.
     */
    conversationProfiles?:
        Schema$GoogleCloudDialogflowV2beta1ConversationProfile[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Conversations.ListConversations.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse {
    /**
     * The list of conversations. There will be a maximum number of items
     * returned based on the page_size field in the request.
     */
    conversations?: Schema$GoogleCloudDialogflowV2beta1Conversation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for Documents.ListDocuments.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse {
    /**
     * The list of documents.
     */
    documents?: Schema$GoogleCloudDialogflowV2beta1Document[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for EntityTypes.ListEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse {
    /**
     * The list of agent entity types. There will be a maximum number of items
     * returned based on the page_size field in the request.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2beta1EntityType[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for HumanAgentAssistants.ListHumanAgentAssistants.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse {
    /**
     * The list of project agent assistants. There is a maximum number of items
     * returned based on the page_size field in the request.
     */
    humanAgentAssistants?:
        Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant[];
    /**
     * Token to retrieve the next page of results or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Intents.ListIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse {
    /**
     * The list of agent intents. There will be a maximum number of items
     * returned based on the page_size field in the request.
     */
    intents?: Schema$GoogleCloudDialogflowV2beta1Intent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for KnowledgeBases.ListKnowledgeBases.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse {
    /**
     * The list of knowledge bases.
     */
    knowledgeBases?: Schema$GoogleCloudDialogflowV2beta1KnowledgeBase[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Conversations.ListMessages.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse {
    /**
     * Required. The list of messages. There will be a maximum number of items
     * returned based on the page_size field in the request.
     */
    messages?: Schema$GoogleCloudDialogflowV2beta1Message[];
    /**
     * Optional. Token to retrieve the next page of results, or empty if there
     * are no more results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Conversations.ListParticipants.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse {
    /**
     * Token to retrieve the next page of results or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of participants. There is a maximum number of items returned
     * based on the page_size field in the request.
     */
    participants?: Schema$GoogleCloudDialogflowV2beta1Participant[];
  }
  /**
   * The response message for PhoneNumberOrders.ListPhoneNumberOrders.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of orders. There is a maximum number of items returned based on
     * the page_size field in the request.
     */
    phoneNumberOrders?: Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder[];
  }
  /**
   * The response message for PhoneNumbers.ListPhoneNumbers.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of `PhoneNumber` resources. There is a maximum number of items
     * returned based on the page_size field in the request.
     */
    phoneNumbers?: Schema$GoogleCloudDialogflowV2beta1PhoneNumber[];
  }
  /**
   * The response message for SessionEntityTypes.ListSessionEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of session entity types. There will be a maximum number of items
     * returned based on the page_size field in the request.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType[];
  }
  /**
   * The response message for [Conversations.ListSuggestions]
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse {
    /**
     * Optional. Token to retrieve the next page of results or empty if there
     * are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Required.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1Suggestion[];
  }
  /**
   * Defines logging behavior for conversation lifecycle events.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1LoggingConfig {}
  /**
   * Represents a message posted into a conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Message {
    /**
     * Required. The message content.
     */
    content?: string;
    /**
     * Optional. The time when the message was sent.
     */
    createTime?: string;
    /**
     * Required. The message language. This should be a
     * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
     * Example: &quot;en-US&quot;.
     */
    languageCode?: string;
    /**
     * Required. The unique identifier of the message. Format:
     * `projects/&lt;Project ID&gt;/conversations/&lt;Conversation
     * ID&gt;/messages/&lt;Message ID&gt;`.
     */
    name?: string;
    /**
     * Required. The participant that said this message.
     */
    participant?: string;
    /**
     * Optional. The role of the participant.
     */
    participantRole?: string;
  }
  /**
   * Defines notification behavior for conversation lifecycle events.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1NotificationConfig {
    /**
     * Optional. Name of the Cloud Pub/Sub topic to publish conversation events
     * like CONVERSATION_STARTED as serialized ConversationEvent protos.  If
     * enable_notifications is `true` and no topic is supplied, a new topic is
     * created and listed here.  Notification works for phone calls, if this
     * topic either is in the same project as the conversation or you grant
     * `service-&lt;Conversation Project
     * Number&gt;@gcp-sa-dialogflow.iam.gserviceaccount.com` the `Dialogflow
     * Service Agent` role in the topic project.  Format: `projects/&lt;Project
     * ID&gt;/topics/&lt;Topic ID&gt;`.
     */
    topic?: string;
  }
  /**
   * Represents the contents of the original request that was passed to the
   * `[Streaming]DetectIntent` call.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload`
     * field passed in the request. Some integrations that query a Dialogflow
     * agent may provide additional information in the payload.  In particular
     * for the Telephony Gateway this field has the form: &lt;pre&gt;{
     * &quot;telephony&quot;: {    &quot;caller_id&quot;:
     * &quot;+18558363987&quot;  } }&lt;/pre&gt; Note: The caller ID field
     * (`caller_id`) will be redacted for Standard Edition agents and populated
     * with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164)
     * for Enterprise Edition agents.
     */
    payload?: any;
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack`. It is
     * set by Dialogflow-owned servers.
     */
    source?: string;
    /**
     * Optional. The version of the protocol used for this request. This field
     * is AoG-specific.
     */
    version?: string;
  }
  /**
   * Represents the natural language speech audio to be played to the end user.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1OutputAudio {
    /**
     * Required. The natural language speech audio.
     */
    audio?: string;
    /**
     * Required. Instructs the speech synthesizer how to generate the speech
     * audio.
     */
    config?: Schema$GoogleCloudDialogflowV2beta1OutputAudioConfig;
  }
  /**
   * Instructs the speech synthesizer how to generate the output audio content.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1OutputAudioConfig {
    /**
     * Required. Audio encoding of the synthesized audio content.
     */
    audioEncoding?: string;
    /**
     * Optional. The synthesis sample rate (in hertz) for this audio. If not
     * provided, then the synthesizer will use the default sample rate based on
     * the audio encoding. If this is different from the voice&#39;s natural
     * sample rate, then the synthesizer will honor this request by converting
     * to the desired sample rate (which might result in worse audio quality).
     */
    sampleRateHertz?: number;
    /**
     * Optional. Configuration of how speech should be synthesized.
     */
    synthesizeSpeechConfig?:
        Schema$GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
  }
  /**
   * Represents a single side of the conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Participant {
    /**
     * Required. The unique identifier of this participant. Format:
     * `projects/&lt;Project ID&gt;/conversations/&lt;Conversation
     * ID&gt;/participants/&lt;Participant ID&gt;`.
     */
    name?: string;
    /**
     * Required. The role this participant plays in the conversation.
     */
    role?: string;
  }
  /**
   * Represents a phone number. `PhoneNumber` resources enable phone calls to be
   * answered by Dialogflow services and are added to a project through a
   * `PhoneNumberOrder`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1PhoneNumber {
    /**
     * Optional. The conversation profile calls to this `PhoneNumber` should
     * use. Format: `projects/&lt;Project
     * ID&gt;/conversationProfiles/&lt;ConversationProfile ID&gt;`.
     */
    conversationProfile?: string;
    /**
     * Output only. The state of the `PhoneNumber`. Defaults to `ACTIVE`.
     * `PhoneNumber` objects set to `DELETE_REQUESTED` always decline incoming
     * calls and can be removed completely within 30 days.
     */
    lifecycleState?: string;
    /**
     * Required. The unique identifier of this phone number. Format:
     * `projects/&lt;Project ID&gt;/phoneNumbers/&lt;PhoneNumber ID&gt;`.
     */
    name?: string;
    /**
     * Output only. Phone number in [E.164](https://en.wikipedia.org/wiki/E.164)
     * format. An example of a correctly formatted phone number: +15556767888.
     */
    phoneNumber?: string;
  }
  /**
   * Represents a phone number order. Orders can assign phone numbers to
   * projects.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder {
    /**
     * Output only. The time this order was created.
     */
    createTime?: string;
    /**
     * Optional. A description of the order, limit is 1024 bytes.
     */
    description?: string;
    /**
     * Output only. The current status of the order.
     */
    lifecycleState?: string;
    /**
     * Required. The unique identifier of this order. Format:
     * `projects/&lt;Project ID&gt;/phoneNumberOrders/&lt;Order ID&gt;`.
     */
    name?: string;
    /**
     * Output only. A map of ordered numbers filled so far, keyed by their
     * resource name. Key format: `projects/&lt;Project
     * ID&gt;/phoneNumbers/&lt;PhoneNumber ID&gt;`. Value format: E.164 phone
     * number. Output only.
     */
    phoneNumbers?: any;
    /**
     * Order is for new numbers.
     */
    phoneNumberSpec?: Schema$GoogleCloudDialogflowV2beta1PhoneNumberSpec;
    /**
     * Output only. The time this order was last updated.
     */
    updateTime?: string;
  }
  /**
   * Request for new numbers fitting a set of parameters. The country code for
   * newly requested numbers defaults to 1 (US) until the service is available
   * in other regions.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1PhoneNumberSpec {
    /**
     * Required. Total numbers requested, between 1 and 10 inclusive.
     */
    count?: number;
    /**
     * Optional. Area codes to use. An empty list means &#39;any code&#39;. Each
     * value is treated as equally preferred. Each entry has a limit of 10
     * bytes. &quot;area code&quot; corresponds to &quot;National Destination
     * Code&quot; described in [E.164](https://en.wikipedia.org/wiki/E.164)
     * standard.
     */
    preferredAreaCodes?: string[];
  }
  /**
   * Represents the query input. It can contain either:  1.  An audio config
   * which     instructs the speech recognizer how to process the speech audio.
   * 2.  A conversational query in the form of text,.  3.  An event that
   * specifies which intent to trigger.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1QueryInput {
    /**
     * Instructs the speech recognizer how to process the speech audio.
     */
    audioConfig?: Schema$GoogleCloudDialogflowV2beta1InputAudioConfig;
    /**
     * The event to be processed.
     */
    event?: Schema$GoogleCloudDialogflowV2beta1EventInput;
    /**
     * The natural language text to be processed.
     */
    text?: Schema$GoogleCloudDialogflowV2beta1TextInput;
  }
  /**
   * Represents the parameters of the conversational query.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1QueryParameters {
    /**
     * Optional. The collection of contexts to be activated before this query is
     * executed.
     */
    contexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. The geo location of this conversational query.
     */
    geoLocation?: Schema$GoogleTypeLatLng;
    /**
     * Optional. KnowledgeBases to get alternative results from. If not set, the
     * KnowledgeBases enabled in the agent (through UI) will be used. Format:
     * `projects/&lt;Project ID&gt;/knowledgeBases/&lt;Knowledge Base ID&gt;`.
     */
    knowledgeBaseNames?: string[];
    /**
     * Optional. This field can be used to pass custom data into the webhook
     * associated with the agent. Arbitrary JSON objects are supported.
     */
    payload?: any;
    /**
     * Optional. Specifies whether to delete all contexts in the current session
     * before the new ones are activated.
     */
    resetContexts?: boolean;
    /**
     * Optional. Configures the type of sentiment analysis to perform. If not
     * provided, sentiment analysis is not performed. Note: Sentiment Analysis
     * is only currently available for Enterprise Edition agents.
     */
    sentimentAnalysisRequestConfig?:
        Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig;
    /**
     * Optional. Additional session entity types to replace or extend developer
     * entity types with. The entity synonyms apply to all languages and persist
     * for the session of this query.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType[];
    /**
     * Optional. The time zone of this conversational query from the [time zone
     * database](https://www.iana.org/time-zones), e.g., America/New_York,
     * Europe/Paris. If not provided, the time zone specified in agent settings
     * is used.
     */
    timeZone?: string;
  }
  /**
   * Represents the result of conversational query or event processing.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1QueryResult {
    /**
     * The action name from the matched intent.
     */
    action?: string;
    /**
     * This field is set to: - `false` if the matched intent has required
     * parameters and not all of    the required parameter values have been
     * collected. - `true` if all required parameter values have been collected,
     * or if the    matched intent doesn&#39;t contain any required parameters.
     */
    allRequiredParamsPresent?: boolean;
    /**
     * The free-form diagnostic info. For example, this field could contain
     * webhook call latency.
     */
    diagnosticInfo?: any;
    /**
     * The collection of rich messages to present to the user.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * The text to be pronounced to the user or shown on the screen.
     */
    fulfillmentText?: string;
    /**
     * The intent that matched the conversational query. Some, not all fields
     * are filled in this message, including but not limited to: `name`,
     * `display_name` and `webhook_state`.
     */
    intent?: Schema$GoogleCloudDialogflowV2beta1Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely
     * uncertain) to 1.0 (completely certain). If there are `multiple
     * knowledge_answers` messages, this value is set to the greatest
     * `knowledgeAnswers.match_confidence` value in the list.
     */
    intentDetectionConfidence?: number;
    /**
     * The result from Knowledge Connector (if any), ordered by decreasing
     * `KnowledgeAnswers.match_confidence`.
     */
    knowledgeAnswers?: Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswers;
    /**
     * The language that was triggered during intent detection. See [Language
     * Support](https://dialogflow.com/docs/reference/language) for a list of
     * the currently supported language codes.
     */
    languageCode?: string;
    /**
     * The collection of output contexts. If applicable,
     * `output_contexts.parameters` contains entries with name `&lt;parameter
     * name&gt;.original` containing the original parameter values before the
     * query.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * The collection of extracted parameters.
     */
    parameters?: any;
    /**
     * The original conversational query text: - If natural language text was
     * provided as input, `query_text` contains   a copy of the input. - If
     * natural language speech audio was provided as input, `query_text`
     * contains the speech recognition result. If speech recognizer produced
     * multiple alternatives, a particular one is picked. - If an event was
     * provided as input, `query_text` is not set.
     */
    queryText?: string;
    /**
     * The sentiment analysis result, which depends on the
     * `sentiment_analysis_request_config` specified in the request.
     */
    sentimentAnalysisResult?:
        Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number
     * indicates an estimated greater likelihood that the recognized words are
     * correct. The default of 0.0 is a sentinel value indicating that
     * confidence was not set.  This field is not guaranteed to be accurate or
     * set. In particular this field isn&#39;t set for StreamingDetectIntent
     * since the streaming endpoint has separate confidence estimates per
     * portion of the audio in StreamingRecognitionResult.
     */
    speechRecognitionConfidence?: number;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the
     * value of the `payload` field returned in the webhook response.
     */
    webhookPayload?: any;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the
     * value of the `source` field returned in the webhook response.
     */
    webhookSource?: string;
  }
  /**
   * The request message for Agents.RestoreAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1RestoreAgentRequest {
    /**
     * The agent to restore.  Example for how to restore an agent via the
     * command line: &lt;pre&gt;curl \
     * &#39;https://dialogflow.googleapis.com/v2beta1/projects/&amp;lt;project_name&amp;gt;/agent:restore\
     * -X POST \    -H &#39;Authorization: Bearer &#39;$(gcloud auth
     * application-default    print-access-token) \    -H &#39;Accept:
     * application/json&#39; \    -H &#39;Content-Type: application/json&#39; \
     * --compressed \    --data-binary &quot;{        &#39;agentContent&#39;:
     * &#39;$(cat &amp;lt;agent zip file&amp;gt; | base64 -w 0)&#39;
     * }&quot;&lt;/pre&gt;
     */
    agentContent?: string;
    /**
     * The URI to a Google Cloud Storage file containing the agent to restore.
     * Note: The URI must start with &quot;gs://&quot;.
     */
    agentUri?: string;
  }
  /**
   * The response message for Agents.SearchAgents.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse {
    /**
     * The list of agents. There will be a maximum number of items returned
     * based on the page_size field in the request.
     */
    agents?: Schema$GoogleCloudDialogflowV2beta1Agent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The sentiment, such as positive/negative feeling or association, for a unit
   * of analysis, such as the query text.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the
     * absolute magnitude of sentiment, regardless of score (positive or
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
   * Configures the types of sentiment analysis to perform.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig {
    /**
     * Optional. Instructs the service to perform sentiment analysis on
     * `query_text`. If not provided, sentiment analysis is not performed on
     * `query_text`.
     */
    analyzeQueryTextSentiment?: boolean;
  }
  /**
   * The result of sentiment analysis as configured by
   * `sentiment_analysis_request_config`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult {
    /**
     * The sentiment analysis result for `query_text`.
     */
    queryTextSentiment?: Schema$GoogleCloudDialogflowV2beta1Sentiment;
  }
  /**
   * Represents a session entity type.  Extends or replaces a developer entity
   * type at the user session level (we refer to the entity types defined at the
   * agent level as &quot;developer entity types&quot;).  Note: session entity
   * types apply to all queries, regardless of the language.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SessionEntityType {
    /**
     * Required. The collection of entities associated with this session entity
     * type.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Required. Indicates whether the additional data should override or
     * supplement the developer entity type definition.
     */
    entityOverrideMode?: string;
    /**
     * Required. The unique identifier of this session entity type. Format:
     * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session
     * ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`, or
     * `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment
     * ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session
     * ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`. If `Environment ID`
     * is not specified, we assume default &#39;draft&#39; environment. If `User
     * ID` is not specified, we assume default &#39;-&#39; user.  `&lt;Entity
     * Type Display Name&gt;` must be the display name of an existing entity
     * type in the same agent that will be overridden or supplemented.
     */
    name?: string;
  }
  /**
   * The top-level message sent by the client to the `StreamingAnalyzeContent`
   * method.  Multiple request messages must be sent in the following order:  1.
   * The first message must contain `participant` and `config` fields. To
   * receive an audio response, the first message must also contain the
   * `reply_audio_config` field. The first message must not contain `input`.  2.
   * All subsequent messages must contain only input data. Specifically:     -
   * If the `config` in the first message was set to `audio_config`, then all
   * subsequent messages must contain only `input_audio`. It is a good practice
   * to split the input audio into short chunks and deliver each       chunk in
   * a separate message.     - If the `config` in the first message was set to
   * `text_config`, then       the second message must contain only
   * `input_text`. Moreover, the       `input_text` field can be only sent once.
   * After all input is delivered, the client must half-close, or abort the
   * request stream.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentRequest {
    /**
     * Instructs the speech recognizer how to process the speech audio.
     */
    audioConfig?: Schema$GoogleCloudDialogflowV2beta1InputAudioConfig;
    /**
     * The input audio content to be recognized. Must be sent if `audio_config`
     * is set in the first message. The complete audio over all streaming
     * messages must not exceed 1 minute.
     */
    inputAudio?: string;
    /**
     * The UTF-8 encoded natural language text to be processed. Must be sent if
     * `text_config` is set in the first message. Text length must not exceed
     * 256 bytes. The `input_text` field can be only sent once.
     */
    inputText?: string;
    /**
     * Optional. Instructs the speech synthesizer how to generate the output
     * audio.
     */
    replyAudioConfig?: Schema$GoogleCloudDialogflowV2beta1OutputAudioConfig;
    /**
     * The natural language text to be processed.
     */
    textConfig?: Schema$GoogleCloudDialogflowV2beta1InputTextConfig;
  }
  /**
   * The top-level message returned from the `StreamingAnalyzeContent` method.
   * Multiple response messages can be returned in order:  1.  If the input was
   * set to streaming audio, the first one or more messages     contain
   * `recognition_result`. Each `recognition_result` represents a more complete
   * transcript of what the user said. The last `recognition_result`     has
   * `is_final` set to `true`.  2.  The next message contains `reply_text` and
   * optionally `reply_audio`     returned by an agent. This message may also
   * contain     `automated_agent_reply`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse {
    /**
     * Optional. Only set if a Dialogflow automated agent has responded.
     */
    automatedAgentReply?:
        Schema$GoogleCloudDialogflowV2beta1AutomatedAgentReply;
    /**
     * The result of speech recognition.
     */
    recognitionResult?:
        Schema$GoogleCloudDialogflowV2beta1StreamingRecognitionResult;
    /**
     * Optional. The audio data bytes encoded as specified in the request. This
     * field is set if:  - The `reply_audio_config` field is specified in the
     * request.  - The automated agent, which this output comes from, responded
     * with audio.    In such case, the `reply_audio.config` field contains
     * settings used to    synthesize the speech.
     */
    replyAudio?: Schema$GoogleCloudDialogflowV2beta1OutputAudio;
    /**
     * Optional. The output text content. This field is set if an automated
     * agent responded with a text for the user.
     */
    replyText?: string;
  }
  /**
   * Contains a speech recognition result corresponding to a portion of the
   * audio that is currently being processed or an indication that this is the
   * end of the single requested utterance.  Example:  1.  transcript:
   * &quot;tube&quot;  2.  transcript: &quot;to be a&quot;  3.  transcript:
   * &quot;to be&quot;  4.  transcript: &quot;to be or not to be&quot; is_final:
   * true  5.  transcript: &quot; that&#39;s&quot;  6.  transcript: &quot; that
   * is&quot;  7.  recognition_event_type:
   * `RECOGNITION_EVENT_END_OF_SINGLE_UTTERANCE`  8.  transcript: &quot; that is
   * the question&quot;     is_final: true  Only two of the responses contain
   * final results (#4 and #8 indicated by `is_final: true`). Concatenating
   * these generates the full transcript: &quot;to be or not to be that is the
   * question&quot;.  In each response we populate:  *  for
   * `MESSAGE_TYPE_TRANSCRIPT`: `transcript` and possibly `is_final`.  *  for
   * `MESSAGE_TYPE_END_OF_SINGLE_UTTERANCE`: only `event_type`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1StreamingRecognitionResult {
    /**
     * The Speech confidence between 0.0 and 1.0 for the current portion of
     * audio. A higher number indicates an estimated greater likelihood that the
     * recognized words are correct. The default of 0.0 is a sentinel value
     * indicating that confidence was not set.  This field is typically only
     * provided if `is_final` is true and you should not rely on it being
     * accurate or even set.
     */
    confidence?: number;
    /**
     * The default of 0.0 is a sentinel value indicating `confidence` was not
     * set. If `false`, the `StreamingRecognitionResult` represents an interim
     * result that may change. If `true`, the recognizer will not return any
     * further hypotheses about this piece of the audio. May only be populated
     * for `event_type` = `RECOGNITION_EVENT_TRANSCRIPT`.
     */
    isFinal?: boolean;
    /**
     * Type of the result message.
     */
    messageType?: string;
    /**
     * Transcript text representing the words that the user spoke. Populated if
     * and only if `event_type` = `RECOGNITION_EVENT_TRANSCRIPT`.
     */
    transcript?: string;
  }
  /**
   * Represents a suggestion for a human agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Suggestion {
    /**
     * Output only. Articles ordered by score in descending order.
     */
    articles?: Schema$GoogleCloudDialogflowV2beta1SuggestionArticle[];
    /**
     * Output only. The time the suggestion was created.
     */
    createTime?: string;
    /**
     * Optional. Answers extracted from FAQ documents.
     */
    faqAnswers?: Schema$GoogleCloudDialogflowV2beta1SuggestionFaqAnswer[];
    /**
     * Output only. The name of this suggestion. Format: `projects/&lt;Project
     * ID&gt;/conversations/&lt;Conversation
     * ID&gt;/participants/x/suggestions/&lt;Suggestion ID&gt;`.
     */
    name?: string;
  }
  /**
   * Represents suggested article.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SuggestionArticle {
    /**
     * Output only. A map that contains metadata about the answer and the
     * document from which it originates.
     */
    metadata?: any;
    /**
     * Output only. Article snippets.
     */
    snippets?: string[];
    /**
     * Output only. The article title.
     */
    title?: string;
    /**
     * Output only. The article URI.
     */
    uri?: string;
  }
  /**
   * Represents suggested answer from &quot;frequently asked questions&quot;.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SuggestionFaqAnswer {
    /**
     * Output only. The piece of text from the `source` knowledge base document.
     */
    answer?: string;
    /**
     * The system&#39;s confidence score that this Knowledge answer is a good
     * match for this conversational query, range from 0.0 (completely
     * uncertain) to 1.0 (completely certain).
     */
    confidence?: number;
    /**
     * Output only. A map that contains metadata about the answer and the
     * document from which it originates.
     */
    metadata?: any;
    /**
     * Output only. The corresponding FAQ question.
     */
    question?: string;
    /**
     * Output only. Indicates which Knowledge Document this answer was extracted
     * from. Format: `projects/&lt;Project
     * ID&gt;/agent/knowledgeBases/&lt;Knowledge Base
     * ID&gt;/documents/&lt;Document ID&gt;`.
     */
    source?: string;
  }
  /**
   * Configuration of how speech should be synthesized.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig {
    /**
     * Optional. An identifier which selects &#39;audio effects&#39; profiles
     * that are applied on (post synthesized) text to speech. Effects are
     * applied on top of each other in the order they are given.
     */
    effectsProfileId?: string[];
    /**
     * Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase
     * 20 semitones from the original pitch. -20 means decrease 20 semitones
     * from the original pitch.
     */
    pitch?: number;
    /**
     * Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the
     * normal native speed supported by the specific voice. 2.0 is twice as
     * fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0
     * speed. Any other values &lt; 0.25 or &gt; 4.0 will return an error.
     */
    speakingRate?: number;
    /**
     * Optional. The desired voice of the synthesized audio.
     */
    voice?: Schema$GoogleCloudDialogflowV2beta1VoiceSelectionParams;
    /**
     * Optional. Volume gain (in dB) of the normal native volume supported by
     * the specific voice, in the range [-96.0, 16.0]. If unset, or set to a
     * value of 0.0 (dB), will play at normal native signal amplitude. A value
     * of -6.0 (dB) will play at approximately half the amplitude of the normal
     * native signal amplitude. A value of +6.0 (dB) will play at approximately
     * twice the amplitude of the normal native signal amplitude. We strongly
     * recommend not to exceed +10 (dB) as there&#39;s usually no effective
     * increase in loudness for any value greater than that.
     */
    volumeGainDb?: number;
  }
  /**
   * Represents the natural language text to be processed.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1TextInput {
    /**
     * Required. The language of this conversational query. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes. Note that queries in the same session
     * do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Required. The UTF-8 encoded natural language text to be processed. Text
     * length must not exceed 256 bytes.
     */
    text?: string;
  }
  /**
   * The request message for Agents.TrainAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1TrainAgentRequest {}
  /**
   * The request message for PhoneNumbers.UndeletePhoneNumber.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest {
  }
  /**
   * Description of which voice to use for speech synthesis.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1VoiceSelectionParams {
    /**
     * Optional. The name of the voice. If not set, the service will choose a
     * voice based on the other parameters such as language_code and gender.
     */
    name?: string;
    /**
     * Optional. The preferred gender of the voice. If not set, the service will
     * choose a voice based on the other parameters such as language_code and
     * name. Note that this is only a preference, not requirement. If a voice of
     * the appropriate gender is not available, the synthesizer should
     * substitute a voice with a different gender rather than failing the
     * request.
     */
    ssmlGender?: string;
  }
  /**
   * The request message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1WebhookRequest {
    /**
     * Alternative query results from KnowledgeService.
     */
    alternativeQueryResults?: Schema$GoogleCloudDialogflowV2beta1QueryResult[];
    /**
     * Optional. The contents of the original request that was passed to
     * `[Streaming]DetectIntent` call.
     */
    originalDetectIntentRequest?:
        Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
    /**
     * The result of the conversational query or event processing. Contains the
     * same value as `[Streaming]DetectIntentResponse.query_result`.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2beta1QueryResult;
    /**
     * The unique identifier of the response. Contains the same value as
     * `[Streaming]DetectIntentResponse.response_id`.
     */
    responseId?: string;
    /**
     * The unique identifier of detectIntent request session. Can be used to
     * identify end-user inside webhook implementation. Format:
     * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`.
     */
    session?: string;
  }
  /**
   * The response message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1WebhookResponse {
    /**
     * Optional. Indicates that this intent ends an interaction. Some
     * integrations (e.g., Actions on Google or Dialogflow phone gateway) use
     * this information to close interaction with an end user. Default is false.
     */
    endInteraction?: boolean;
    /**
     * Optional. Makes the platform immediately invoke another `DetectIntent`
     * call internally with the specified event as input.
     */
    followupEventInput?: Schema$GoogleCloudDialogflowV2beta1EventInput;
    /**
     * Optional. The collection of rich messages to present to the user. This
     * value is passed directly to `QueryResult.fulfillment_messages`.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * Optional. The text to be shown on the screen. This value is passed
     * directly to `QueryResult.fulfillment_text`.
     */
    fulfillmentText?: string;
    /**
     * Optional. The collection of output contexts. This value is passed
     * directly to `QueryResult.output_contexts`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_payload`.
     * See the related `fulfillment_messages[i].payload field`, which may be
     * used as an alternative to this field.  This field can be used for Actions
     * on Google responses. It should have a structure similar to the JSON
     * message shown here. For more information, see [Actions on Google Webhook
     * Format](https://developers.google.com/actions/dialogflow/webhook)
     * &lt;pre&gt;{   &quot;google&quot;: {     &quot;expectUserResponse&quot;:
     * true,     &quot;richResponse&quot;: {       &quot;items&quot;: [ {
     * &quot;simpleResponse&quot;: {             &quot;textToSpeech&quot;:
     * &quot;this is a simple response&quot;           }         }       ]     }
     * } }&lt;/pre&gt;
     */
    payload?: any;
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_source`.
     */
    source?: string;
  }
  /**
   * Represents a context.
   */
  export interface Schema$GoogleCloudDialogflowV2Context {
    /**
     * Optional. The number of conversational query requests after which the
     * context expires. If set to `0` (the default) the context expires
     * immediately. Contexts expire automatically after 20 minutes even if there
     * are no matching queries.
     */
    lifespanCount?: number;
    /**
     * Required. The unique identifier of the context. Format:
     * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session
     * ID&gt;/contexts/&lt;Context ID&gt;`.
     */
    name?: string;
    /**
     * Optional. The collection of parameters associated with this context.
     * Refer to [this doc](https://dialogflow.com/docs/actions-and-parameters)
     * for syntax.
     */
    parameters?: any;
  }
  /**
   * Represents an entity type. Entity types serve as a tool for extracting
   * parameter values from natural language queries.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityType {
    /**
     * Optional. Indicates whether the entity type can be automatically
     * expanded.
     */
    autoExpansionMode?: string;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string;
    /**
     * Optional. The collection of entities associated with the entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: string;
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically. The unique identifier of the entity type. Format:
     * `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
     */
    name?: string;
  }
  /**
   * Optional. Represents an entity.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityTypeEntity {
    /**
     * Required. A collection of synonyms. For `KIND_LIST` entity types this
     * must contain exactly one synonym equal to `value`.
     */
    synonyms?: string[];
    /**
     * Required. For `KIND_MAP` entity types:   A canonical name to be used in
     * place of synonyms. For `KIND_LIST` entity types:   A string that can
     * contain references to other entity types (with or   without aliases).
     */
    value?: string;
  }
  /**
   * Events allow for matching intents by event name instead of the natural
   * language input. For instance, input `&lt;event: { name: “welcome_event”,
   * parameters: { name: “Sam” } }&gt;` can trigger a personalized welcome
   * response. The parameter `name` may be used by the agent in the response:
   * `“Hello #welcome_event.name! What can I do for you today?”`.
   */
  export interface Schema$GoogleCloudDialogflowV2EventInput {
    /**
     * Required. The language of this query. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes. Note that queries in the same session
     * do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Required. The unique identifier of the event.
     */
    name?: string;
    /**
     * Optional. The collection of parameters associated with the event.
     */
    parameters?: any;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2ExportAgentResponse {
    /**
     * The exported agent.  Example for how to export an agent to a zip file via
     * a command line: &lt;pre&gt;curl \
     * &#39;https://dialogflow.googleapis.com/v2/projects/&amp;lt;project_name&amp;gt;/agent:export&#39;\
     * -X POST \   -H &#39;Authorization: Bearer &#39;$(gcloud auth
     * application-default   print-access-token) \   -H &#39;Accept:
     * application/json&#39; \   -H &#39;Content-Type: application/json&#39; \
     * --compressed \   --data-binary &#39;{}&#39; \ | grep agentContent | sed
     * -e &#39;s/.*&quot;agentContent&quot;:
     * &quot;\([^&quot;]*\)&quot;.x/\1/&#39; \ | base64 --decode &gt;
     * &amp;lt;agent zip file&amp;gt;&lt;/pre&gt;
     */
    agentContent?: string;
    /**
     * The URI to a file containing the exported agent. This field is populated
     * only if `agent_uri` is specified in `ExportAgentRequest`.
     */
    agentUri?: string;
  }
  /**
   * Represents an intent. Intents convert a number of user expressions or
   * patterns into an action. An action is an extraction of a user command or
   * sentence semantics.
   */
  export interface Schema$GoogleCloudDialogflowV2Intent {
    /**
     * Optional. The name of the action associated with the intent. Note: The
     * action name must not contain whitespaces.
     */
    action?: string;
    /**
     * Optional. The list of platforms for which the first response will be
     * taken from among the messages assigned to the DEFAULT_PLATFORM.
     */
    defaultResponsePlatforms?: string[];
    /**
     * Required. The name of this intent.
     */
    displayName?: string;
    /**
     * Optional. The collection of event names that trigger the intent. If the
     * collection of input contexts is not empty, all of the contexts must be
     * present in the active user session for an event to trigger this intent.
     */
    events?: string[];
    /**
     * Read-only. Information about all followup intents that have this intent
     * as a direct or indirect parent. We populate this field only in the
     * output.
     */
    followupIntentInfo?:
        Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo[];
    /**
     * Optional. The list of context names required for this intent to be
     * triggered. Format: `projects/&lt;Project
     * ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    inputContextNames?: string[];
    /**
     * Optional. Indicates whether this is a fallback intent.
     */
    isFallback?: boolean;
    /**
     * Optional. The collection of rich messages corresponding to the `Response`
     * field in the Dialogflow console.
     */
    messages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent.
     * Note: If `ml_diabled` setting is set to true, then this intent is not
     * taken into account during inference in `ML ONLY` match mode. Also,
     * auto-markup in the UI is turned off.
     */
    mlDisabled?: boolean;
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically. The unique identifier of this intent. Format:
     * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    name?: string;
    /**
     * Optional. The collection of contexts that are activated when the intent
     * is matched. Context messages in this collection should not set the
     * parameters field. Setting the `lifespan_count` to 0 will reset the
     * context when the intent is matched. Format: `projects/&lt;Project
     * ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Optional. The collection of parameters associated with the intent.
     */
    parameters?: Schema$GoogleCloudDialogflowV2IntentParameter[];
    /**
     * Read-only after creation. The unique identifier of the parent intent in
     * the chain of followup intents. You can set this field when creating an
     * intent, for example with CreateIntent or BatchUpdateIntents, in order to
     * make this intent a followup intent.  It identifies the parent followup
     * intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent
     * ID&gt;`.
     */
    parentFollowupIntentName?: string;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher
     * priorities. Zero or negative numbers mean that the intent is disabled.
     */
    priority?: number;
    /**
     * Optional. Indicates whether to delete all contexts in the current session
     * when this intent is matched.
     */
    resetContexts?: boolean;
    /**
     * Read-only. The unique identifier of the root intent in the chain of
     * followup intents. It identifies the correct followup intents chain for
     * this intent. We populate this field only in the output.  Format:
     * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    rootFollowupIntentName?: string;
    /**
     * Optional. The collection of examples/templates that the agent is trained
     * on.
     */
    trainingPhrases?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrase[];
    /**
     * Optional. Indicates whether webhooks are enabled for the intent.
     */
    webhookState?: string;
  }
  /**
   * Represents a single followup intent in the chain.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo {
    /**
     * The unique identifier of the followup intent. Format:
     * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    followupIntentName?: string;
    /**
     * The unique identifier of the followup intent&#39;s parent. Format:
     * `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    parentFollowupIntentName?: string;
  }
  /**
   * Corresponds to the `Response` field in the Dialogflow console.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessage {
    /**
     * The basic card response for Actions on Google.
     */
    basicCard?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCard;
    /**
     * The card response.
     */
    card?: Schema$GoogleCloudDialogflowV2IntentMessageCard;
    /**
     * The carousel card response for Actions on Google.
     */
    carouselSelect?: Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelect;
    /**
     * The image response.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * The link out suggestion chip for Actions on Google.
     */
    linkOutSuggestion?:
        Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
    /**
     * The list card response for Actions on Google.
     */
    listSelect?: Schema$GoogleCloudDialogflowV2IntentMessageListSelect;
    /**
     * Returns a response containing a custom, platform-specific payload. See
     * the Intent.Message.Platform type for a description of the structure that
     * may be required for your platform.
     */
    payload?: any;
    /**
     * Optional. The platform that this message is intended for.
     */
    platform?: string;
    /**
     * The quick replies response.
     */
    quickReplies?: Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies;
    /**
     * The voice and text-only responses for Actions on Google.
     */
    simpleResponses?:
        Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses;
    /**
     * The suggestion chips for Actions on Google.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2IntentMessageSuggestions;
    /**
     * The text response.
     */
    text?: Schema$GoogleCloudDialogflowV2IntentMessageText;
  }
  /**
   * The basic card message. Useful for displaying information.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCard {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
    /**
     * Required, unless image is present. The body text of the card.
     */
    formattedText?: string;
    /**
     * Optional. The image for the card.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string;
    /**
     * Optional. The title of the card.
     */
    title?: string;
  }
  /**
   * The button object that appears at the bottom of a card.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton {
    /**
     * Required. Action to take when a user taps on the button.
     */
    openUriAction?:
        Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
    /**
     * Required. The title of the button.
     */
    title?: string;
  }
  /**
   * Opens the given URI.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {
    /**
     * Required. The HTTP or HTTPS scheme URI.
     */
    uri?: string;
  }
  /**
   * The card response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCard {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: Schema$GoogleCloudDialogflowV2IntentMessageCardButton[];
    /**
     * Optional. The public URI to an image file for the card.
     */
    imageUri?: string;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string;
    /**
     * Optional. The title of the card.
     */
    title?: string;
  }
  /**
   * Optional. Contains information about a button.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCardButton {
    /**
     * Optional. The text to send back to the Dialogflow API or a URI to open.
     */
    postback?: string;
    /**
     * Optional. The text to show on the button.
     */
    text?: string;
  }
  /**
   * The card for presenting a carousel of options to select from.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelect {
    /**
     * Required. Carousel items.
     */
    items?: Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[];
  }
  /**
   * An item in the carousel.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {
    /**
     * Optional. The body text of the card.
     */
    description?: string;
    /**
     * Optional. The image to display.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Additional info about the option item.
     */
    info?: Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
    /**
     * Required. Title of the carousel item.
     */
    title?: string;
  }
  /**
   * The image response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageImage {
    /**
     * Optional. A text description of the image to be used for accessibility,
     * e.g., screen readers.
     */
    accessibilityText?: string;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string;
  }
  /**
   * The suggestion chip message that allows the user to jump out to the app or
   * website associated with this agent.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string;
    /**
     * Required. The URI of the app or site to open when the user taps the
     * suggestion chip.
     */
    uri?: string;
  }
  /**
   * The card for presenting a list of options to select from.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelect {
    /**
     * Required. List items.
     */
    items?: Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem[];
    /**
     * Optional. The overall title of the list.
     */
    title?: string;
  }
  /**
   * An item in the list.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem {
    /**
     * Optional. The main text describing the item.
     */
    description?: string;
    /**
     * Optional. The image to display.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Additional information about this option.
     */
    info?: Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
    /**
     * Required. The title of the list item.
     */
    title?: string;
  }
  /**
   * The quick replies response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies {
    /**
     * Optional. The collection of quick replies.
     */
    quickReplies?: string[];
    /**
     * Optional. The title of the collection of quick replies.
     */
    title?: string;
  }
  /**
   * Additional info about the select item for when it is triggered in a dialog.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
    /**
     * Required. A unique key that will be sent back to the agent if this
     * response is given.
     */
    key?: string;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item
     * in dialog.
     */
    synonyms?: string[];
  }
  /**
   * The simple response message containing speech or text.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse {
    /**
     * Optional. The text to display.
     */
    displayText?: string;
    /**
     * One of text_to_speech or ssml must be provided. Structured spoken
     * response to the user in the SSML format. Mutually exclusive with
     * text_to_speech.
     */
    ssml?: string;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the
     * speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string;
  }
  /**
   * The collection of simple response candidates. This message in
   * `QueryResult.fulfillment_messages` and
   * `WebhookResponse.fulfillment_messages` should contain only one
   * `SimpleResponse`.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses {
    /**
     * Required. The list of simple responses.
     */
    simpleResponses?:
        Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse[];
  }
  /**
   * The suggestion chip message that the user can tap to quickly post a reply
   * to the conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSuggestion {
    /**
     * Required. The text shown the in the suggestion chip.
     */
    title?: string;
  }
  /**
   * The collection of suggestions.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSuggestions {
    /**
     * Required. The list of suggested replies.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2IntentMessageSuggestion[];
  }
  /**
   * The text response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageText {
    /**
     * Optional. The collection of the agent&#39;s responses.
     */
    text?: string[];
  }
  /**
   * Represents intent parameters.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentParameter {
    /**
     * Optional. The default value to use when the `value` yields an empty
     * result. Default values can be extracted from contexts by using the
     * following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes
     * values of the parameter. If the parameter is required, this must be
     * provided.
     */
    entityTypeDisplayName?: string;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether
     * the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean;
    /**
     * The unique identifier of this parameter.
     */
    name?: string;
    /**
     * Optional. The collection of prompts that the agent can present to the
     * user in order to collect value for the parameter.
     */
    prompts?: string[];
    /**
     * Optional. The definition of the parameter value. It can be: - a constant
     * string, - a parameter value defined as `$parameter_name`, - an original
     * parameter value defined as `$parameter_name.original`, - a parameter
     * value from some context defined as   `#context_name.parameter_name`.
     */
    value?: string;
  }
  /**
   * Represents an example or template that the agent is trained on.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string;
    /**
     * Required. The collection of training phrase parts (can be annotated).
     * Fields: `entity_type`, `alias` and `user_defined` should be populated
     * only for the annotated parts of the training phrase.
     */
    parts?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example or template was added to
     * the intent. Each time a developer adds an existing sample by editing an
     * intent or training, this counter is increased.
     */
    timesAddedCount?: number;
    /**
     * Required. The type of the training phrase.
     */
    type?: string;
  }
  /**
   * Represents a part of a training phrase.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart {
    /**
     * Optional. The parameter name for the value extracted from the annotated
     * part of the example.
     */
    alias?: string;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required
     * for the annotated part of the text and applies only to examples.
     */
    entityType?: string;
    /**
     * Required. The text corresponding to the example or template, if there are
     * no annotations. For annotated examples, it is the text for one of the
     * example&#39;s parts.
     */
    text?: string;
    /**
     * Optional. Indicates whether the text was manually annotated by the
     * developer.
     */
    userDefined?: boolean;
  }
  /**
   * Represents the contents of the original request that was passed to the
   * `[Streaming]DetectIntent` call.
   */
  export interface Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest {
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload`
     * field passed in the request. Some integrations that query a Dialogflow
     * agent may provide additional information in the payload.  In particular
     * for the Telephony Gateway this field has the form: &lt;pre&gt;{
     * &quot;telephony&quot;: {    &quot;caller_id&quot;:
     * &quot;+18558363987&quot;  } }&lt;/pre&gt; Note: The caller ID field
     * (`caller_id`) will be redacted for Standard Edition agents and populated
     * with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164)
     * for Enterprise Edition agents.
     */
    payload?: any;
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack`. It is
     * set by Dialogflow-owned servers.
     */
    source?: string;
    /**
     * Optional. The version of the protocol used for this request. This field
     * is AoG-specific.
     */
    version?: string;
  }
  /**
   * Represents the result of conversational query or event processing.
   */
  export interface Schema$GoogleCloudDialogflowV2QueryResult {
    /**
     * The action name from the matched intent.
     */
    action?: string;
    /**
     * This field is set to: - `false` if the matched intent has required
     * parameters and not all of    the required parameter values have been
     * collected. - `true` if all required parameter values have been collected,
     * or if the    matched intent doesn&#39;t contain any required parameters.
     */
    allRequiredParamsPresent?: boolean;
    /**
     * The free-form diagnostic info. For example, this field could contain
     * webhook call latency.
     */
    diagnosticInfo?: any;
    /**
     * The collection of rich messages to present to the user.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * The text to be pronounced to the user or shown on the screen.
     */
    fulfillmentText?: string;
    /**
     * The intent that matched the conversational query. Some, not all fields
     * are filled in this message, including but not limited to: `name`,
     * `display_name` and `webhook_state`.
     */
    intent?: Schema$GoogleCloudDialogflowV2Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely
     * uncertain) to 1.0 (completely certain). If there are `multiple
     * knowledge_answers` messages, this value is set to the greatest
     * `knowledgeAnswers.match_confidence` value in the list.
     */
    intentDetectionConfidence?: number;
    /**
     * The language that was triggered during intent detection. See [Language
     * Support](https://dialogflow.com/docs/reference/language) for a list of
     * the currently supported language codes.
     */
    languageCode?: string;
    /**
     * The collection of output contexts. If applicable,
     * `output_contexts.parameters` contains entries with name `&lt;parameter
     * name&gt;.original` containing the original parameter values before the
     * query.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * The collection of extracted parameters.
     */
    parameters?: any;
    /**
     * The original conversational query text: - If natural language text was
     * provided as input, `query_text` contains   a copy of the input. - If
     * natural language speech audio was provided as input, `query_text`
     * contains the speech recognition result. If speech recognizer produced
     * multiple alternatives, a particular one is picked. - If an event was
     * provided as input, `query_text` is not set.
     */
    queryText?: string;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number
     * indicates an estimated greater likelihood that the recognized words are
     * correct. The default of 0.0 is a sentinel value indicating that
     * confidence was not set.  This field is not guaranteed to be accurate or
     * set. In particular this field isn&#39;t set for StreamingDetectIntent
     * since the streaming endpoint has separate confidence estimates per
     * portion of the audio in StreamingRecognitionResult.
     */
    speechRecognitionConfidence?: number;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the
     * value of the `payload` field returned in the webhook response.
     */
    webhookPayload?: any;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the
     * value of the `source` field returned in the webhook response.
     */
    webhookSource?: string;
  }
  /**
   * The request message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2WebhookRequest {
    /**
     * Optional. The contents of the original request that was passed to
     * `[Streaming]DetectIntent` call.
     */
    originalDetectIntentRequest?:
        Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest;
    /**
     * The result of the conversational query or event processing. Contains the
     * same value as `[Streaming]DetectIntentResponse.query_result`.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2QueryResult;
    /**
     * The unique identifier of the response. Contains the same value as
     * `[Streaming]DetectIntentResponse.response_id`.
     */
    responseId?: string;
    /**
     * The unique identifier of detectIntent request session. Can be used to
     * identify end-user inside webhook implementation. Format:
     * `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`.
     */
    session?: string;
  }
  /**
   * The response message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2WebhookResponse {
    /**
     * Optional. Makes the platform immediately invoke another `DetectIntent`
     * call internally with the specified event as input.
     */
    followupEventInput?: Schema$GoogleCloudDialogflowV2EventInput;
    /**
     * Optional. The collection of rich messages to present to the user. This
     * value is passed directly to `QueryResult.fulfillment_messages`.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * Optional. The text to be shown on the screen. This value is passed
     * directly to `QueryResult.fulfillment_text`.
     */
    fulfillmentText?: string;
    /**
     * Optional. The collection of output contexts. This value is passed
     * directly to `QueryResult.output_contexts`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_payload`.
     * See the related `fulfillment_messages[i].payload field`, which may be
     * used as an alternative to this field.  This field can be used for Actions
     * on Google responses. It should have a structure similar to the JSON
     * message shown here. For more information, see [Actions on Google Webhook
     * Format](https://developers.google.com/actions/dialogflow/webhook)
     * &lt;pre&gt;{   &quot;google&quot;: {     &quot;expectUserResponse&quot;:
     * true,     &quot;richResponse&quot;: {       &quot;items&quot;: [ {
     * &quot;simpleResponse&quot;: {             &quot;textToSpeech&quot;:
     * &quot;this is a simple response&quot;           }         }       ]     }
     * } }&lt;/pre&gt;
     */
    payload?: any;
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_source`.
     */
    source?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
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
  export interface Schema$GoogleRpcStatus {
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
   * An object representing a latitude/longitude pair. This is expressed as a
   * pair of doubles representing degrees latitude and degrees longitude. Unless
   * specified otherwise, this must conform to the &lt;a
   * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
   * standard&lt;/a&gt;. Values must be within normalized ranges.
   */
  export interface Schema$GoogleTypeLatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }


  export class Resource$Projects {
    root: Dialogflow;
    agent: Resource$Projects$Agent;
    conversationProfiles: Resource$Projects$Conversationprofiles;
    conversations: Resource$Projects$Conversations;
    environments: Resource$Projects$Environments;
    humanAgentAssistants: Resource$Projects$Humanagentassistants;
    knowledgeBases: Resource$Projects$Knowledgebases;
    operations: Resource$Projects$Operations;
    phoneNumberOrders: Resource$Projects$Phonenumberorders;
    phoneNumbers: Resource$Projects$Phonenumbers;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.agent = new Resource$Projects$Agent(root);
      this.conversationProfiles =
          new Resource$Projects$Conversationprofiles(root);
      this.conversations = new Resource$Projects$Conversations(root);
      this.environments = new Resource$Projects$Environments(root);
      this.humanAgentAssistants =
          new Resource$Projects$Humanagentassistants(root);
      this.knowledgeBases = new Resource$Projects$Knowledgebases(root);
      this.operations = new Resource$Projects$Operations(root);
      this.phoneNumberOrders = new Resource$Projects$Phonenumberorders(root);
      this.phoneNumbers = new Resource$Projects$Phonenumbers(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.getAgent
     * @desc Retrieves the specified agent.
     * @alias dialogflow.projects.getAgent
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project that the agent to fetch is associated with. Format: `projects/<Project ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAgent(
        params?: Params$Resource$Projects$Getagent, options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Agent>;
    getAgent(
        params: Params$Resource$Projects$Getagent,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>):
        void;
    getAgent(
        params: Params$Resource$Projects$Getagent,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>):
        void;
    getAgent(
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>):
        void;
    getAgent(
        paramsOrCallback?: Params$Resource$Projects$Getagent|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Agent>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Agent> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Getagent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getagent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/agent')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Agent>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Agent>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getagent {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project that the agent to fetch is associated with. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;
  }

  export class Resource$Projects$Agent {
    root: Dialogflow;
    entityTypes: Resource$Projects$Agent$Entitytypes;
    environments: Resource$Projects$Agent$Environments;
    intents: Resource$Projects$Agent$Intents;
    knowledgeBases: Resource$Projects$Agent$Knowledgebases;
    sessions: Resource$Projects$Agent$Sessions;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.entityTypes = new Resource$Projects$Agent$Entitytypes(root);
      this.environments = new Resource$Projects$Agent$Environments(root);
      this.intents = new Resource$Projects$Agent$Intents(root);
      this.knowledgeBases = new Resource$Projects$Agent$Knowledgebases(root);
      this.sessions = new Resource$Projects$Agent$Sessions(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.export
     * @desc Exports the specified agent to a ZIP file.   Operation <response:
     * ExportAgentResponse,            metadata: google.protobuf.Struct>
     * @alias dialogflow.projects.agent.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project that the agent to export is associated with. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2beta1ExportAgentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(
        params?: Params$Resource$Projects$Agent$Export,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    export(
        params: Params$Resource$Projects$Agent$Export,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(
        params: Params$Resource$Projects$Agent$Export,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(
        paramsOrCallback?: Params$Resource$Projects$Agent$Export|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Agent$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/agent:export')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


/**
 * dialogflow.projects.agent.import
 * @desc Imports the specified agent from a ZIP file.  Uploads new intents and
 * entity types without deleting the existing ones. Intents and entity types
 * with the same name are replaced with the new versions from
 * ImportAgentRequest.   Operation <response: google.protobuf.Empty, metadata:
 * google.protobuf.Struct>
 * @alias dialogflow.projects.agent.import
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.parent Required. The project that the agent to import is associated with. Format: `projects/<Project ID>`.
 * @param {().GoogleCloudDialogflowV2beta1ImportAgentRequest} params.resource Request body data
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
import(params?: Params$Resource$Projects$Agent$Import, options?: MethodOptions): AxiosPromise<Schema$GoogleLongrunningOperation>;
import(params: Params$Resource$Projects$Agent$Import, options: MethodOptions|BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(params: Params$Resource$Projects$Agent$Import, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(paramsOrCallback?: Params$Resource$Projects$Agent$Import|BodyResponseCallback<Schema$GoogleLongrunningOperation>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void|AxiosPromise<Schema$GoogleLongrunningOperation> {let params = (paramsOrCallback || {}) as Params$Resource$Projects$Agent$Import; let options = (optionsOrCallback || {}) as MethodOptions;

                                                                                                                                                                                                                                                                                                                                                   if(typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Projects$Agent$Import;
    options = {};
                                                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                                                   if(typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
                                                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                                                   const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/v2beta1/{+parent}/agent:import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: ['parent'], pathParams: ['parent'], context: this.getRoot()}; if(callback) {
    createAPIRequest<Schema$GoogleLongrunningOperation>(parameters, callback);
                                                                                                                                                                                                                                                                                                                                                   } else {
    return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
                                                                                                                                                                                                                                                                                                                                                   }}


    /**
 * dialogflow.projects.agent.restore
 * @desc Restores the specified agent from a ZIP file.  Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted.   Operation <response: google.protobuf.Empty,            metadata: google.protobuf.Struct>
 * @alias dialogflow.projects.agent.restore
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.parent Required. The project that the agent to restore is associated with. Format: `projects/<Project ID>`.
      * @param {().GoogleCloudDialogflowV2beta1RestoreAgentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
    restore(params?: Params$Resource$Projects$Agent$Restore, options?: MethodOptions): AxiosPromise<Schema$GoogleLongrunningOperation>;
    restore(
        params: Params$Resource$Projects$Agent$Restore,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    restore(
        params: Params$Resource$Projects$Agent$Restore,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    restore(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    restore(
        paramsOrCallback?: Params$Resource$Projects$Agent$Restore|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Agent$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/agent:restore')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.search
     * @desc Returns the list of agents.  Since there is at most one
     * conversational agent per project, this method is useful primarily for
     * listing all agents across projects the caller has access to. One can
     * achieve that with a wildcard project collection id "-". Refer to [List
     * Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
     * @alias dialogflow.projects.agent.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The project to list agents from. Format: `projects/<Project ID or '-'>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
        params?: Params$Resource$Projects$Agent$Search,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>;
    search(
        params: Params$Resource$Projects$Agent$Search,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>): void;
    search(
        params: Params$Resource$Projects$Agent$Search,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>): void;
    search(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>): void;
    search(
        paramsOrCallback?: Params$Resource$Projects$Agent$Search|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Agent$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/agent:search')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SearchAgentsResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.train
     * @desc Trains the specified agent.   Operation <response:
     * google.protobuf.Empty,            metadata: google.protobuf.Struct>
     * @alias dialogflow.projects.agent.train
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project that the agent to train is associated with. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2beta1TrainAgentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    train(
        params?: Params$Resource$Projects$Agent$Train, options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    train(
        params: Params$Resource$Projects$Agent$Train,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    train(
        params: Params$Resource$Projects$Agent$Train,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    train(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    train(
        paramsOrCallback?: Params$Resource$Projects$Agent$Train|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Agent$Train;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Train;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/agent:train')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Export {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project that the agent to export is associated with.
     * Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1ExportAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Import {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project that the agent to import is associated with.
     * Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1ImportAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Restore {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project that the agent to restore is associated with.
     * Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1RestoreAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Search {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The project to list agents from. Format: `projects/<Project ID
     * or '-'>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Train {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project that the agent to train is associated with. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1TrainAgentRequest;
  }

  export class Resource$Projects$Agent$Entitytypes {
    root: Dialogflow;
    entities: Resource$Projects$Agent$Entitytypes$Entities;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.entities = new Resource$Projects$Agent$Entitytypes$Entities(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.entityTypes.batchDelete
     * @desc Deletes entity types in the specified agent.  Operation <response:
     * google.protobuf.Empty,            metadata: google.protobuf.Struct>
     * @alias dialogflow.projects.agent.entityTypes.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
        params?: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
        params: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(
        params: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(callback:
                    BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Entitytypes$Batchdelete|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entityTypes:batchDelete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.entityTypes.batchUpdate
     * @desc Updates/Creates multiple entity types in the specified agent.
     * Operation <response: BatchUpdateEntityTypesResponse,            metadata:
     * google.protobuf.Struct>
     * @alias dialogflow.projects.agent.entityTypes.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the agent to update or create entity types in. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
        params?: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
        params: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(
        params: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(callback:
                    BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Entitytypes$Batchupdate|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entityTypes:batchUpdate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.entityTypes.create
     * @desc Creates an entity type in the specified agent.
     * @alias dialogflow.projects.agent.entityTypes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
     * @param {string} params.parent Required. The agent to create a entity type for. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2beta1EntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Agent$Entitytypes$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1EntityType>;
    create(
        params: Params$Resource$Projects$Agent$Entitytypes$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    create(
        params: Params$Resource$Projects$Agent$Entitytypes$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Agent$Entitytypes$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1EntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entityTypes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.entityTypes.delete
     * @desc Deletes the specified entity type.
     * @alias dialogflow.projects.agent.entityTypes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Agent$Entitytypes$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params: Params$Resource$Projects$Agent$Entitytypes$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params: Params$Resource$Projects$Agent$Entitytypes$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Agent$Entitytypes$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.entityTypes.get
     * @desc Retrieves the specified entity type.
     * @alias dialogflow.projects.agent.entityTypes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode Optional. The language to retrieve entity synonyms for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
     * @param {string} params.name Required. The name of the entity type. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Agent$Entitytypes$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1EntityType>;
    get(params: Params$Resource$Projects$Agent$Entitytypes$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    get(params: Params$Resource$Projects$Agent$Entitytypes$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Agent$Entitytypes$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1EntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.entityTypes.list
     * @desc Returns the list of all entity types in the specified agent.
     * @alias dialogflow.projects.agent.entityTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode Optional. The language to list entity synonyms for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The agent to list all entity types from. Format: `projects/<Project ID>/agent`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Agent$Entitytypes$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>;
    list(
        params: Params$Resource$Projects$Agent$Entitytypes$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>): void;
    list(
        params: Params$Resource$Projects$Agent$Entitytypes$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Agent$Entitytypes$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entityTypes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListEntityTypesResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.entityTypes.patch
     * @desc Updates the specified entity type.
     * @alias dialogflow.projects.agent.entityTypes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
     * @param {string} params.name Required for all methods except `create` (`create` populates the name automatically. The unique identifier of the entity type. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1EntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Agent$Entitytypes$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1EntityType>;
    patch(
        params: Params$Resource$Projects$Agent$Entitytypes$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    patch(
        params: Params$Resource$Projects$Agent$Entitytypes$Patch,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    patch(callback: BodyResponseCallback<
          Schema$GoogleCloudDialogflowV2beta1EntityType>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Agent$Entitytypes$Patch|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1EntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1EntityType>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1EntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1EntityType>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Entitytypes$Batchdelete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the agent to delete all entities types for. Format:
     * `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?:
        Schema$GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Batchupdate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the agent to update or create entity types in.
     * Format: `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?:
        Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The language of entity synonyms defined in `entity_type`. If
     * not specified, the agent's default language is used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The agent to create a entity type for. Format:
     * `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1EntityType;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the entity type to delete. Format:
     * `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The language to retrieve entity synonyms for. If not specified,
     * the agent's default language is used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The name of the entity type. Format: `projects/<Project
     * ID>/agent/entityTypes/<EntityType ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The language to list entity synonyms for. If not specified, the
     * agent's default language is used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The agent to list all entity types from. Format:
     * `projects/<Project ID>/agent`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The language of entity synonyms defined in `entity_type`. If
     * not specified, the agent's default language is used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically. The unique identifier of the entity type. Format:
     * `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1EntityType;
  }

  export class Resource$Projects$Agent$Entitytypes$Entities {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.entityTypes.entities.batchCreate
     * @desc Creates multiple new entities in the specified entity type.
     * Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.entityTypes.entities.batchCreate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the entity type to create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     * @param {().GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate(
        params?:
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    batchCreate(
        params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchCreate(
        params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchCreate(callback:
                    BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchCreate(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entities:batchCreate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.entityTypes.entities.batchDelete
     * @desc Deletes entities in the specified entity type.  Operation
     * <response: google.protobuf.Empty,            metadata:
     * google.protobuf.Struct>
     * @alias dialogflow.projects.agent.entityTypes.entities.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the entity type to delete entries for. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     * @param {().GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
        params?:
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
        params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(
        params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(callback:
                    BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entities:batchDelete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.entityTypes.entities.batchUpdate
     * @desc Updates or creates multiple entities in the specified entity type.
     * This method does not affect entities in the entity type that aren't
     * explicitly specified in the request.  Operation <response:
     * google.protobuf.Empty,            metadata: google.protobuf.Struct>
     * @alias dialogflow.projects.agent.entityTypes.entities.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the entity type to update or create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     * @param {().GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
        params?:
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
        params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(
        params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(callback:
                    BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entities:batchUpdate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the entity type to create entities in. Format:
     * `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the entity type to delete entries for. Format:
     * `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the entity type to update or create entities in.
     * Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest;
  }



  export class Resource$Projects$Agent$Environments {
    root: Dialogflow;
    users: Resource$Projects$Agent$Environments$Users;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.users = new Resource$Projects$Agent$Environments$Users(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Agent$Environments$Users {
    root: Dialogflow;
    sessions: Resource$Projects$Agent$Environments$Users$Sessions;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.sessions =
          new Resource$Projects$Agent$Environments$Users$Sessions(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Agent$Environments$Users$Sessions {
    root: Dialogflow;
    contexts: Resource$Projects$Agent$Environments$Users$Sessions$Contexts;
    entityTypes:
        Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.contexts =
          new Resource$Projects$Agent$Environments$Users$Sessions$Contexts(
              root);
      this.entityTypes =
          new Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes(
              root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.deleteContexts
     * @desc Deletes all active contexts in the specified session.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.deleteContexts
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteContexts(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    deleteContexts(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    deleteContexts(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    deleteContexts(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void;
    deleteContexts(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.detectIntent
     * @desc Processes a natural language query and returns structured,
     * actionable data as a result. This method is not idempotent, because it
     * may cause contexts and session entity types to be updated, which in turn
     * might affect results of future queries.
     * @alias dialogflow.projects.agent.environments.users.sessions.detectIntent
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The name of the session this query is sent to. Format: `projects/<Project ID>/agent/sessions/<Session ID>`, or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we are using "-". It’s up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random numbers or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters.
     * @param {().GoogleCloudDialogflowV2beta1DetectIntentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    detectIntent(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>;
    detectIntent(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>): void;
    detectIntent(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>): void;
    detectIntent(callback: BodyResponseCallback<
                 Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>):
        void;
    detectIntent(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+session}:detectIntent')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the session to delete all contexts from. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the session this query is sent to. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>`, or
     * `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we
     * assume default 'draft' environment. If `User ID` is not specified, we are
     * using "-". It’s up to the API caller to choose an appropriate `Session
     * ID` and `User Id`. They can be a random numbers or some type of user and
     * session identifiers (preferably hashed). The length of the `Session ID`
     * and `User ID` must not exceed 36 characters.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1DetectIntentRequest;
  }

  export class Resource$Projects$Agent$Environments$Users$Sessions$Contexts {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.contexts.create
     * @desc Creates a context.  If the specified context already exists,
     * overrides the context.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.contexts.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    create(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.contexts.delete
     * @desc Deletes the specified context.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.contexts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the context to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.contexts.get
     * @desc Retrieves the specified context.
     * @alias dialogflow.projects.agent.environments.users.sessions.contexts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    get(params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.contexts.list
     * @desc Returns the list of all contexts in the specified session.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.contexts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The session to list all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>;
    list(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListContextsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.contexts.patch
     * @desc Updates the specified context.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.contexts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`, or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. The `Context ID` is always converted to lowercase. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    patch(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(callback:
              BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The session to create a context for. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Context;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the context to delete. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or
     * `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
     * not specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the context. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or
     * `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
     * not specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all contexts from. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of the context. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context
     * ID>`, or `projects/<Project ID>/agent/environments/<Environment
     * ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. The
     * `Context ID` is always converted to lowercase. If `Environment ID` is not
     * specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Context;
  }


  export class Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.create
     * @desc Creates a session entity type.  If the specified session entity
     * type already exists, overrides the session entity type.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/ sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {().GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>;
    create(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    create(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entityTypes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.delete
     * @desc Deletes the specified session entity type.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.get
     * @desc Retrieves the specified session entity type.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>;
    get(params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    get(params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.list
     * @desc Returns the list of all session entity types in the specified
     * session.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The session to list all session entity types from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/ sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>;
    list(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>):
        void;
    list(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entityTypes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.patch
     * @desc Updates the specified session entity type.
     * @alias
     * dialogflow.projects.agent.environments.users.sessions.entityTypes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of this session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`, or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.  `<Entity Type Display Name>` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>;
    patch(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    patch(
        params:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    patch(callback: BodyResponseCallback<
          Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The session to create a session entity type for. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/
     * sessions/<Session ID>`. If `Environment ID` is not specified, we assume
     * default 'draft' environment. If `User ID` is not specified, we assume
     * default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the entity type to delete. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity
     * Type Display Name>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not
     * specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the session entity type. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`
     * or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. If
     * `Environment ID` is not specified, we assume default 'draft' environment.
     * If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all session entity types from. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/
     * sessions/<Session ID>`. If `Environment ID` is not specified, we assume
     * default 'draft' environment. If `User ID` is not specified, we assume
     * default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of this session entity type. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity
     * Type Display Name>`, or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not
     * specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.  `<Entity Type Display Name>` must
     * be the display name of an existing entity type in the same agent that
     * will be overridden or supplemented.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType;
  }



  export class Resource$Projects$Agent$Intents {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.intents.batchDelete
     * @desc Deletes intents in the specified agent.  Operation <response:
     * google.protobuf.Empty>
     * @alias dialogflow.projects.agent.intents.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
        params?: Params$Resource$Projects$Agent$Intents$Batchdelete,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
        params: Params$Resource$Projects$Agent$Intents$Batchdelete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(
        params: Params$Resource$Projects$Agent$Intents$Batchdelete,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(callback:
                    BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchDelete(
        paramsOrCallback?: Params$Resource$Projects$Agent$Intents$Batchdelete|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Intents$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/intents:batchDelete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.intents.batchUpdate
     * @desc Updates/Creates multiple intents in the specified agent.  Operation
     * <response: BatchUpdateIntentsResponse>
     * @alias dialogflow.projects.agent.intents.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the agent to update or create intents in. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
        params?: Params$Resource$Projects$Agent$Intents$Batchupdate,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
        params: Params$Resource$Projects$Agent$Intents$Batchupdate,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(
        params: Params$Resource$Projects$Agent$Intents$Batchupdate,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(callback:
                    BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    batchUpdate(
        paramsOrCallback?: Params$Resource$Projects$Agent$Intents$Batchupdate|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Intents$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/intents:batchUpdate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.intents.create
     * @desc Creates an intent in the specified agent.
     * @alias dialogflow.projects.agent.intents.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
     * @param {string=} params.languageCode Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
     * @param {string} params.parent Required. The agent to create a intent for. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2beta1Intent} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Agent$Intents$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Intent>;
    create(
        params: Params$Resource$Projects$Agent$Intents$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    create(
        params: Params$Resource$Projects$Agent$Intents$Create,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    create(callback:
               BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Agent$Intents$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Intent> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Intents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/intents')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.intents.delete
     * @desc Deletes the specified intent and its direct or indirect followup
     * intents.
     * @alias dialogflow.projects.agent.intents.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them.  Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Agent$Intents$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params: Params$Resource$Projects$Agent$Intents$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params: Params$Resource$Projects$Agent$Intents$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Agent$Intents$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Intents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.intents.get
     * @desc Retrieves the specified intent.
     * @alias dialogflow.projects.agent.intents.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
     * @param {string=} params.languageCode Optional. The language to retrieve training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
     * @param {string} params.name Required. The name of the intent. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Agent$Intents$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Intent>;
    get(params: Params$Resource$Projects$Agent$Intents$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    get(params: Params$Resource$Projects$Agent$Intents$Get,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    get(callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    get(paramsOrCallback?: Params$Resource$Projects$Agent$Intents$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Intent> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Intents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.intents.list
     * @desc Returns the list of all intents in the specified agent.
     * @alias dialogflow.projects.agent.intents.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
     * @param {string=} params.languageCode Optional. The language to list training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The agent to list all intents from. Format: `projects/<Project ID>/agent`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Agent$Intents$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>;
    list(
        params: Params$Resource$Projects$Agent$Intents$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>): void;
    list(
        params: Params$Resource$Projects$Agent$Intents$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Agent$Intents$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Intents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/intents')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListIntentsResponse>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.intents.patch
     * @desc Updates the specified intent.
     * @alias dialogflow.projects.agent.intents.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
     * @param {string=} params.languageCode Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
     * @param {string} params.name Required for all methods except `create` (`create` populates the name automatically. The unique identifier of this intent. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1Intent} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Agent$Intents$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Intent>;
    patch(
        params: Params$Resource$Projects$Agent$Intents$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    patch(
        params: Params$Resource$Projects$Agent$Intents$Patch,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    patch(callback:
              BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Agent$Intents$Patch|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Intent>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Intent> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Intents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Intent>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Intents$Batchdelete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the agent to delete all entities types for. Format:
     * `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequest;
  }
  export interface Params$Resource$Projects$Agent$Intents$Batchupdate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the agent to update or create intents in. Format:
     * `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest;
  }
  export interface Params$Resource$Projects$Agent$Intents$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language of training phrases, parameters and rich messages
     * defined in `intent`. If not specified, the agent's default language is
     * used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The agent to create a intent for. Format: `projects/<Project
     * ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Intent;
  }
  export interface Params$Resource$Projects$Agent$Intents$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the intent to delete. If this intent has direct or
     * indirect followup intents, we also delete them.  Format:
     * `projects/<Project ID>/agent/intents/<Intent ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language to retrieve training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The name of the intent. Format: `projects/<Project
     * ID>/agent/intents/<Intent ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The agent to list all intents from. Format: `projects/<Project
     * ID>/agent`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language of training phrases, parameters and rich messages
     * defined in `intent`. If not specified, the agent's default language is
     * used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     */
    languageCode?: string;
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically. The unique identifier of this intent. Format:
     * `projects/<Project ID>/agent/intents/<Intent ID>`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Intent;
  }


  export class Resource$Projects$Agent$Knowledgebases {
    root: Dialogflow;
    documents: Resource$Projects$Agent$Knowledgebases$Documents;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.documents =
          new Resource$Projects$Agent$Knowledgebases$Documents(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.knowledgeBases.create
     * @desc Creates a knowledge base.
     * @alias dialogflow.projects.agent.knowledgeBases.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project to create a knowledge base for. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2beta1KnowledgeBase} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Agent$Knowledgebases$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>;
    create(
        params: Params$Resource$Projects$Agent$Knowledgebases$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    create(
        params: Params$Resource$Projects$Agent$Knowledgebases$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Agent$Knowledgebases$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Knowledgebases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Knowledgebases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/knowledgeBases')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.knowledgeBases.delete
     * @desc Deletes the specified knowledge base.
     * @alias dialogflow.projects.agent.knowledgeBases.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.force Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted.
     * @param {string} params.name Required. The name of the knowledge base to delete. Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Agent$Knowledgebases$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params: Params$Resource$Projects$Agent$Knowledgebases$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params: Params$Resource$Projects$Agent$Knowledgebases$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Agent$Knowledgebases$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Knowledgebases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Knowledgebases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.knowledgeBases.get
     * @desc Retrieves the specified knowledge base.
     * @alias dialogflow.projects.agent.knowledgeBases.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the knowledge base to retrieve. Format `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Agent$Knowledgebases$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>;
    get(params: Params$Resource$Projects$Agent$Knowledgebases$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    get(params: Params$Resource$Projects$Agent$Knowledgebases$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Agent$Knowledgebases$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Knowledgebases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Knowledgebases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.knowledgeBases.list
     * @desc Returns the list of all knowledge bases of the specified agent.
     * @alias dialogflow.projects.agent.knowledgeBases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The project to list of knowledge bases for. Format: `projects/<Project ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Agent$Knowledgebases$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>;
    list(
        params: Params$Resource$Projects$Agent$Knowledgebases$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>):
        void;
    list(
        params: Params$Resource$Projects$Agent$Knowledgebases$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Agent$Knowledgebases$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Knowledgebases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Knowledgebases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/knowledgeBases')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Knowledgebases$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project to create a knowledge base for. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1KnowledgeBase;
  }
  export interface Params$Resource$Projects$Agent$Knowledgebases$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. Force deletes the knowledge base. When set to true, any
     * documents in the knowledge base are also deleted.
     */
    force?: boolean;
    /**
     * Required. The name of the knowledge base to delete. Format:
     * `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Knowledgebases$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the knowledge base to retrieve. Format
     * `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Knowledgebases$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 10 and at most 100.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The project to list of knowledge bases for. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;
  }

  export class Resource$Projects$Agent$Knowledgebases$Documents {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.knowledgeBases.documents.create
     * @desc Creates a new document.  Operation <response: Document, metadata:
     * KnowledgeOperationMetadata>
     * @alias dialogflow.projects.agent.knowledgeBases.documents.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The knoweldge base to create a document for. Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     * @param {().GoogleCloudDialogflowV2beta1Document} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Agent$Knowledgebases$Documents$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
        params: Params$Resource$Projects$Agent$Knowledgebases$Documents$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(
        params: Params$Resource$Projects$Agent$Knowledgebases$Documents$Create,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Knowledgebases$Documents$Create|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Knowledgebases$Documents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Knowledgebases$Documents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/documents')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.knowledgeBases.documents.delete
     * @desc Deletes the specified document.  Operation <response:
     * google.protobuf.Empty,            metadata: KnowledgeOperationMetadata>
     * @alias dialogflow.projects.agent.knowledgeBases.documents.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the document to delete. Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Agent$Knowledgebases$Documents$Delete,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
        params: Params$Resource$Projects$Agent$Knowledgebases$Documents$Delete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    delete(
        params: Params$Resource$Projects$Agent$Knowledgebases$Documents$Delete,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    delete(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Knowledgebases$Documents$Delete|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Knowledgebases$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Knowledgebases$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.knowledgeBases.documents.get
     * @desc Retrieves the specified document.
     * @alias dialogflow.projects.agent.knowledgeBases.documents.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the document to retrieve. Format `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Agent$Knowledgebases$Documents$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Document>;
    get(params: Params$Resource$Projects$Agent$Knowledgebases$Documents$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>):
        void;
    get(params: Params$Resource$Projects$Agent$Knowledgebases$Documents$Get,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>):
        void;
    get(callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Agent$Knowledgebases$Documents$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Document> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Knowledgebases$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Knowledgebases$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Document>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Document>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.knowledgeBases.documents.list
     * @desc Returns the list of all documents of the knowledge base.
     * @alias dialogflow.projects.agent.knowledgeBases.documents.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The knowledge base to list all documents for. Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Agent$Knowledgebases$Documents$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>;
    list(
        params: Params$Resource$Projects$Agent$Knowledgebases$Documents$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>): void;
    list(
        params: Params$Resource$Projects$Agent$Knowledgebases$Documents$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Knowledgebases$Documents$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Knowledgebases$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Knowledgebases$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/documents')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Knowledgebases$Documents$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The knoweldge base to create a document for. Format:
     * `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Document;
  }
  export interface Params$Resource$Projects$Agent$Knowledgebases$Documents$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the document to delete. Format: `projects/<Project
     * ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Knowledgebases$Documents$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the document to retrieve. Format `projects/<Project
     * ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Knowledgebases$Documents$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 10 and at most 100.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The knowledge base to list all documents for. Format:
     * `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     */
    parent?: string;
  }



  export class Resource$Projects$Agent$Sessions {
    root: Dialogflow;
    contexts: Resource$Projects$Agent$Sessions$Contexts;
    entityTypes: Resource$Projects$Agent$Sessions$Entitytypes;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.contexts = new Resource$Projects$Agent$Sessions$Contexts(root);
      this.entityTypes = new Resource$Projects$Agent$Sessions$Entitytypes(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.sessions.deleteContexts
     * @desc Deletes all active contexts in the specified session.
     * @alias dialogflow.projects.agent.sessions.deleteContexts
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteContexts(
        params?: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    deleteContexts(
        params: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    deleteContexts(
        params: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    deleteContexts(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void;
    deleteContexts(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Deletecontexts|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Deletecontexts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Deletecontexts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.detectIntent
     * @desc Processes a natural language query and returns structured,
     * actionable data as a result. This method is not idempotent, because it
     * may cause contexts and session entity types to be updated, which in turn
     * might affect results of future queries.
     * @alias dialogflow.projects.agent.sessions.detectIntent
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The name of the session this query is sent to. Format: `projects/<Project ID>/agent/sessions/<Session ID>`, or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we are using "-". It’s up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random numbers or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters.
     * @param {().GoogleCloudDialogflowV2beta1DetectIntentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    detectIntent(
        params?: Params$Resource$Projects$Agent$Sessions$Detectintent,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>;
    detectIntent(
        params: Params$Resource$Projects$Agent$Sessions$Detectintent,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>): void;
    detectIntent(
        params: Params$Resource$Projects$Agent$Sessions$Detectintent,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>): void;
    detectIntent(callback: BodyResponseCallback<
                 Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>):
        void;
    detectIntent(
        paramsOrCallback?: Params$Resource$Projects$Agent$Sessions$Detectintent|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Detectintent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Detectintent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+session}:detectIntent')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1DetectIntentResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Deletecontexts {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the session to delete all contexts from. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Detectintent {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the session this query is sent to. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>`, or
     * `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we
     * assume default 'draft' environment. If `User ID` is not specified, we are
     * using "-". It’s up to the API caller to choose an appropriate `Session
     * ID` and `User Id`. They can be a random numbers or some type of user and
     * session identifiers (preferably hashed). The length of the `Session ID`
     * and `User ID` must not exceed 36 characters.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1DetectIntentRequest;
  }

  export class Resource$Projects$Agent$Sessions$Contexts {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.sessions.contexts.create
     * @desc Creates a context.  If the specified context already exists,
     * overrides the context.
     * @alias dialogflow.projects.agent.sessions.contexts.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    create(
        params: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        params: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Contexts$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Contexts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.contexts.delete
     * @desc Deletes the specified context.
     * @alias dialogflow.projects.agent.sessions.contexts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the context to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Contexts$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Contexts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.contexts.get
     * @desc Retrieves the specified context.
     * @alias dialogflow.projects.agent.sessions.contexts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    get(params: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(params: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(paramsOrCallback?: Params$Resource$Projects$Agent$Sessions$Contexts$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Contexts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.contexts.list
     * @desc Returns the list of all contexts in the specified session.
     * @alias dialogflow.projects.agent.sessions.contexts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The session to list all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Agent$Sessions$Contexts$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>;
    list(
        params: Params$Resource$Projects$Agent$Sessions$Contexts$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(
        params: Params$Resource$Projects$Agent$Sessions$Contexts$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Contexts$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListContextsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Contexts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.contexts.patch
     * @desc Updates the specified context.
     * @alias dialogflow.projects.agent.sessions.contexts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`, or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. The `Context ID` is always converted to lowercase. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    patch(
        params: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(
        params: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(callback:
              BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Contexts$Patch|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Contexts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The session to create a context for. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Context;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the context to delete. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or
     * `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
     * not specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the context. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or
     * `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
     * not specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all contexts from. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of the context. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context
     * ID>`, or `projects/<Project ID>/agent/environments/<Environment
     * ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. The
     * `Context ID` is always converted to lowercase. If `Environment ID` is not
     * specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Context;
  }


  export class Resource$Projects$Agent$Sessions$Entitytypes {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.agent.sessions.entityTypes.create
     * @desc Creates a session entity type.  If the specified session entity
     * type already exists, overrides the session entity type.
     * @alias dialogflow.projects.agent.sessions.entityTypes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/ sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {().GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>;
    create(
        params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    create(
        params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Entitytypes$Create|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Entitytypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Sessions$Entitytypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entityTypes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.entityTypes.delete
     * @desc Deletes the specified session entity type.
     * @alias dialogflow.projects.agent.sessions.entityTypes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.entityTypes.get
     * @desc Retrieves the specified session entity type.
     * @alias dialogflow.projects.agent.sessions.entityTypes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>;
    get(params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    get(params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Entitytypes$Get|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Entitytypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.entityTypes.list
     * @desc Returns the list of all session entity types in the specified
     * session.
     * @alias dialogflow.projects.agent.sessions.entityTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The session to list all session entity types from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/ sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>;
    list(
        params: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>):
        void;
    list(
        params: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Entitytypes$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Entitytypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/entityTypes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.agent.sessions.entityTypes.patch
     * @desc Updates the specified session entity type.
     * @alias dialogflow.projects.agent.sessions.entityTypes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of this session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`, or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.  `<Entity Type Display Name>` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1SessionEntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>;
    patch(
        params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    patch(
        params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    patch(callback: BodyResponseCallback<
          Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1SessionEntityType> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1SessionEntityType>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The session to create a session entity type for. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/
     * sessions/<Session ID>`. If `Environment ID` is not specified, we assume
     * default 'draft' environment. If `User ID` is not specified, we assume
     * default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the entity type to delete. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity
     * Type Display Name>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not
     * specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the session entity type. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`
     * or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`. If
     * `Environment ID` is not specified, we assume default 'draft' environment.
     * If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all session entity types from. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/
     * sessions/<Session ID>`. If `Environment ID` is not specified, we assume
     * default 'draft' environment. If `User ID` is not specified, we assume
     * default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of this session entity type. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity
     * Type Display Name>`, or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>/entityTypes/<Entity Type Display Name>`. If `Environment ID` is not
     * specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.  `<Entity Type Display Name>` must
     * be the display name of an existing entity type in the same agent that
     * will be overridden or supplemented.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType;
  }



  export class Resource$Projects$Conversationprofiles {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.conversationProfiles.create
     * @desc Creates a conversation profile in the specified project.
     * @alias dialogflow.projects.conversationProfiles.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project to create a conversation profile for. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2beta1ConversationProfile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Conversationprofiles$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ConversationProfile>;
    create(
        params: Params$Resource$Projects$Conversationprofiles$Create,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    create(
        params: Params$Resource$Projects$Conversationprofiles$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Conversationprofiles$Create|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ConversationProfile> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversationprofiles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversationprofiles$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/conversationProfiles')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>(parameters);
      }
    }


    /**
     * dialogflow.projects.conversationProfiles.delete
     * @desc Deletes the specified conversation profile.
     * @alias dialogflow.projects.conversationProfiles.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the conversation profile to delete. Format: `projects/<Project ID>/conversationProfiles/<Conversation Profile ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Conversationprofiles$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params: Params$Resource$Projects$Conversationprofiles$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params: Params$Resource$Projects$Conversationprofiles$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Conversationprofiles$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversationprofiles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversationprofiles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.conversationProfiles.get
     * @desc Retrieves the specified conversation profile.
     * @alias dialogflow.projects.conversationProfiles.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the conversation profile. Format: `projects/<Project ID>/conversationProfiles/<Conversation Profile ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Conversationprofiles$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ConversationProfile>;
    get(params: Params$Resource$Projects$Conversationprofiles$Get,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    get(params: Params$Resource$Projects$Conversationprofiles$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Conversationprofiles$Get|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ConversationProfile> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversationprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversationprofiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>(parameters);
      }
    }


    /**
     * dialogflow.projects.conversationProfiles.list
     * @desc Returns the list of all conversation profiles in the specified
     * project.
     * @alias dialogflow.projects.conversationProfiles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The project to list all conversation profiles from. Format: `projects/<Project ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Conversationprofiles$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>;
    list(
        params: Params$Resource$Projects$Conversationprofiles$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>):
        void;
    list(
        params: Params$Resource$Projects$Conversationprofiles$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Conversationprofiles$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversationprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversationprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/conversationProfiles')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListConversationProfilesResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.conversationProfiles.patch
     * @desc Updates the specified conversation profile.
     * @alias dialogflow.projects.conversationProfiles.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required for all methods except `create` (`create` populates the name automatically). The unique identifier of this conversation profile. Format: `projects/<Project ID>/conversationProfiles/<Conversation Profile ID>`.
     * @param {string=} params.updateMask Required. The mask to control which fields to update.
     * @param {().GoogleCloudDialogflowV2beta1ConversationProfile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Conversationprofiles$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ConversationProfile>;
    patch(
        params: Params$Resource$Projects$Conversationprofiles$Patch,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    patch(
        params: Params$Resource$Projects$Conversationprofiles$Patch,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    patch(callback: BodyResponseCallback<
          Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Conversationprofiles$Patch|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ConversationProfile> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversationprofiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversationprofiles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ConversationProfile>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Conversationprofiles$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project to create a conversation profile for. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1ConversationProfile;
  }
  export interface Params$Resource$Projects$Conversationprofiles$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the conversation profile to delete. Format:
     * `projects/<Project ID>/conversationProfiles/<Conversation Profile ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Conversationprofiles$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The resource name of the conversation profile. Format:
     * `projects/<Project ID>/conversationProfiles/<Conversation Profile ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Conversationprofiles$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The project to list all conversation profiles from. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Conversationprofiles$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically). The unique identifier of this conversation profile.
     * Format: `projects/<Project ID>/conversationProfiles/<Conversation Profile
     * ID>`.
     */
    name?: string;
    /**
     * Required. The mask to control which fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1ConversationProfile;
  }


  export class Resource$Projects$Conversations {
    root: Dialogflow;
    messages: Resource$Projects$Conversations$Messages;
    participants: Resource$Projects$Conversations$Participants;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.messages = new Resource$Projects$Conversations$Messages(root);
      this.participants =
          new Resource$Projects$Conversations$Participants(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.conversations.addConversationPhoneNumber
     * @desc Sets a phone number for this converstion to connect to.
     * @alias dialogflow.projects.conversations.addConversationPhoneNumber
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of this conversation. Format: `projects/<Project ID>/conversations/<Conversation ID>`.
     * @param {().GoogleCloudDialogflowV2beta1AddConversationPhoneNumberRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addConversationPhoneNumber(
        params?:
            Params$Resource$Projects$Conversations$Addconversationphonenumber,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>;
    addConversationPhoneNumber(
        params:
            Params$Resource$Projects$Conversations$Addconversationphonenumber,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>): void;
    addConversationPhoneNumber(
        params:
            Params$Resource$Projects$Conversations$Addconversationphonenumber,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>): void;
    addConversationPhoneNumber(
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>): void;
    addConversationPhoneNumber(
        paramsOrCallback?:
            Params$Resource$Projects$Conversations$Addconversationphonenumber|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Addconversationphonenumber;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Conversations$Addconversationphonenumber;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}:addConversationPhoneNumber')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ConversationPhoneNumber>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.conversations.complete
     * @desc Completes the specified conversation. Finished conversations are
     * purged from the database after 30 days.
     * @alias dialogflow.projects.conversations.complete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource identifier of the conversation to close. Format: `projects/<Project ID>/conversations/<Conversation ID>`.
     * @param {().GoogleCloudDialogflowV2beta1CompleteConversationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    complete(
        params?: Params$Resource$Projects$Conversations$Complete,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Conversation>;
    complete(
        params: Params$Resource$Projects$Conversations$Complete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    complete(
        params: Params$Resource$Projects$Conversations$Complete,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    complete(callback: BodyResponseCallback<
             Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    complete(
        paramsOrCallback?: Params$Resource$Projects$Conversations$Complete|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Conversation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Complete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversations$Complete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}:complete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Conversation>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1Conversation>(parameters);
      }
    }


    /**
     * dialogflow.projects.conversations.create
     * @desc Creates a new conversation. Conversation are auto-completed after
     * 24 hours.
     * @alias dialogflow.projects.conversations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource identifier of the project creating the conversation. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2beta1Conversation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Conversations$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Conversation>;
    create(
        params: Params$Resource$Projects$Conversations$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    create(
        params: Params$Resource$Projects$Conversations$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Conversations$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Conversation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/conversations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Conversation>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1Conversation>(parameters);
      }
    }


    /**
     * dialogflow.projects.conversations.get
     * @desc Retrieves the specific conversation.
     * @alias dialogflow.projects.conversations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the conversation. Format: `projects/<Project ID>/conversations/<Conversation ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Conversations$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Conversation>;
    get(params: Params$Resource$Projects$Conversations$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    get(params: Params$Resource$Projects$Conversations$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1Conversation>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Conversations$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Conversation>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Conversation>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Conversation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Conversation>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1Conversation>(parameters);
      }
    }


    /**
     * dialogflow.projects.conversations.list
     * @desc Returns the list of all conversations in the specified project.
     * @alias dialogflow.projects.conversations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A filter expression that filters conversations listed in the response. In general, the expression must specify the field name, a comparison operator, and the value to use for filtering: <ul>   <li>The value must be a string, a number, or a boolean.</li>   <li>The comparison operator must be either `=`,`!=`, `>`, or `<`.</li>   <li>To filter on multiple expressions, separate the       expressions with `AND` or `OR` (omitting both implies `AND`).</li>   <li>For clarity, expressions can be enclosed in parentheses.</li> </ul> Only `lifecycle_state` can be filtered on in this way. For example, the following expression only returns `FINISHED` conversations:  `lifecycle_state = "FINISHED"`
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The project from which to list all conversation. Format: `projects/<Project ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Conversations$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>;
    list(
        params: Params$Resource$Projects$Conversations$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>):
        void;
    list(
        params: Params$Resource$Projects$Conversations$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Conversations$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/conversations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListConversationsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Conversations$Addconversationphonenumber {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of this conversation. Format: `projects/<Project
     * ID>/conversations/<Conversation ID>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?:
        Schema$GoogleCloudDialogflowV2beta1AddConversationPhoneNumberRequest;
  }
  export interface Params$Resource$Projects$Conversations$Complete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Resource identifier of the conversation to close. Format:
     * `projects/<Project ID>/conversations/<Conversation ID>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?:
        Schema$GoogleCloudDialogflowV2beta1CompleteConversationRequest;
  }
  export interface Params$Resource$Projects$Conversations$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Resource identifier of the project creating the conversation.
     * Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Conversation;
  }
  export interface Params$Resource$Projects$Conversations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the conversation. Format: `projects/<Project
     * ID>/conversations/<Conversation ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Conversations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A filter expression that filters conversations listed in the response. In
     * general, the expression must specify the field name, a comparison
     * operator, and the value to use for filtering: <ul>   <li>The value must
     * be a string, a number, or a boolean.</li>   <li>The comparison operator
     * must be either `=`,`!=`, `>`, or `<`.</li>   <li>To filter on multiple
     * expressions, separate the       expressions with `AND` or `OR` (omitting
     * both implies `AND`).</li>   <li>For clarity, expressions can be enclosed
     * in parentheses.</li> </ul> Only `lifecycle_state` can be filtered on in
     * this way. For example, the following expression only returns `FINISHED`
     * conversations:  `lifecycle_state = "FINISHED"`
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The project from which to list all conversation. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;
  }

  export class Resource$Projects$Conversations$Messages {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.conversations.messages.list
     * @desc Lists messages that belong to a given conversation.
     * @alias dialogflow.projects.conversations.messages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The name of the conversation to list messages for. Format: `projects/<Project ID>/conversations/<Conversation ID>`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Conversations$Messages$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>;
    list(
        params: Params$Resource$Projects$Conversations$Messages$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>): void;
    list(
        params: Params$Resource$Projects$Conversations$Messages$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Conversations$Messages$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Messages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversations$Messages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/messages')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListMessagesResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Conversations$Messages$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The name of the conversation to list messages for. Format:
     * `projects/<Project ID>/conversations/<Conversation ID>`
     */
    parent?: string;
  }


  export class Resource$Projects$Conversations$Participants {
    root: Dialogflow;
    suggestions: Resource$Projects$Conversations$Participants$Suggestions;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.suggestions =
          new Resource$Projects$Conversations$Participants$Suggestions(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.conversations.participants.analyzeContent
     * @desc Adds a text (chat, for example), or audio (phone recording, for
     * example) message from a participan  into the conversation.
     * @alias dialogflow.projects.conversations.participants.analyzeContent
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.participant Required. The name of the participant this text comes from. Format: `projects/<Project ID>/conversations/<Conversation ID>/participants/<Participant ID>`.
     * @param {().GoogleCloudDialogflowV2beta1AnalyzeContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeContent(
        params?:
            Params$Resource$Projects$Conversations$Participants$Analyzecontent,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>;
    analyzeContent(
        params:
            Params$Resource$Projects$Conversations$Participants$Analyzecontent,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>): void;
    analyzeContent(
        params:
            Params$Resource$Projects$Conversations$Participants$Analyzecontent,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>): void;
    analyzeContent(callback: BodyResponseCallback<
                   Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>):
        void;
    analyzeContent(
        paramsOrCallback?:
            Params$Resource$Projects$Conversations$Participants$Analyzecontent|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Participants$Analyzecontent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Conversations$Participants$Analyzecontent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+participant}:analyzeContent')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['participant'],
        pathParams: ['participant'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1AnalyzeContentResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.conversations.participants.create
     * @desc Creates a new participant in a conversation.
     * @alias dialogflow.projects.conversations.participants.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource identifier of the conversation adding the participant. Format: `projects/<Project ID>/conversations/<Conversation ID>`.
     * @param {().GoogleCloudDialogflowV2beta1Participant} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Conversations$Participants$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Participant>;
    create(
        params: Params$Resource$Projects$Conversations$Participants$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Participant>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Participant>): void;
    create(
        params: Params$Resource$Projects$Conversations$Participants$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Participant>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1Participant>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Conversations$Participants$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Participant>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Participant>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Participant>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Participant> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Participants$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Conversations$Participants$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/participants')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Participant>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Participant>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.conversations.participants.get
     * @desc Retrieves a conversation participant.
     * @alias dialogflow.projects.conversations.participants.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the participant. Format: `projects/<Project ID>/conversations/<Conversation ID>/participants/<Participant ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Conversations$Participants$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Participant>;
    get(params: Params$Resource$Projects$Conversations$Participants$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Participant>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Participant>): void;
    get(params: Params$Resource$Projects$Conversations$Participants$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Participant>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1Participant>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Conversations$Participants$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Participant>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Participant>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1Participant>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Participant> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Participants$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversations$Participants$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Participant>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Participant>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.conversations.participants.list
     * @desc Returns the list of all participants in the specified conversation.
     * @alias dialogflow.projects.conversations.participants.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The conversation to list all contexts from. Format: `projects/<Project ID>/conversations/<Conversation ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Conversations$Participants$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>;
    list(
        params: Params$Resource$Projects$Conversations$Participants$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>): void;
    list(
        params: Params$Resource$Projects$Conversations$Participants$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Conversations$Participants$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Participants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Conversations$Participants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/participants')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListParticipantsResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.conversations.participants.streamingAnalyzeContent
     * @desc Adds a text (chat, for example), or audio (phone recording, for
     * example) message from a participan  into the conversation. Note: This
     * method is only available through the gRPC API (not REST).  The top-level
     * message sent to the client by the server is
     * `StreamingAnalyzeContentResponse`. Multiple response messages can be
     * returned in order. The first one or more messages contain the
     * `recognition_result` field. Each result represents a more complete
     * transcript of what the user said. The next message contains the
     * `reply_text` field and potentially the `reply_audio` field. The message
     * can also contain the `automated_agent_reply` field.
     * @alias
     * dialogflow.projects.conversations.participants.streamingAnalyzeContent
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.participant Required. The name of the participant this text comes from. Format: `projects/<Project ID>/conversations/<Conversation ID>/participants/<Participant ID>`.
     * @param {().GoogleCloudDialogflowV2beta1StreamingAnalyzeContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    streamingAnalyzeContent(
        params?:
            Params$Resource$Projects$Conversations$Participants$Streaminganalyzecontent,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>;
    streamingAnalyzeContent(
        params:
            Params$Resource$Projects$Conversations$Participants$Streaminganalyzecontent,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>):
        void;
    streamingAnalyzeContent(
        params:
            Params$Resource$Projects$Conversations$Participants$Streaminganalyzecontent,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>):
        void;
    streamingAnalyzeContent(
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>):
        void;
    streamingAnalyzeContent(
        paramsOrCallback?:
            Params$Resource$Projects$Conversations$Participants$Streaminganalyzecontent|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Participants$Streaminganalyzecontent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Conversations$Participants$Streaminganalyzecontent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+participant}:streamingAnalyzeContent')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['participant'],
        pathParams: ['participant'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Conversations$Participants$Analyzecontent {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the participant this text comes from. Format:
     * `projects/<Project ID>/conversations/<Conversation
     * ID>/participants/<Participant ID>`.
     */
    participant?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1AnalyzeContentRequest;
  }
  export interface Params$Resource$Projects$Conversations$Participants$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Resource identifier of the conversation adding the participant.
     * Format: `projects/<Project ID>/conversations/<Conversation ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Participant;
  }
  export interface Params$Resource$Projects$Conversations$Participants$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the participant. Format: `projects/<Project
     * ID>/conversations/<Conversation ID>/participants/<Participant ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Conversations$Participants$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The conversation to list all contexts from. Format:
     * `projects/<Project ID>/conversations/<Conversation ID>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Conversations$Participants$Streaminganalyzecontent {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the participant this text comes from. Format:
     * `projects/<Project ID>/conversations/<Conversation
     * ID>/participants/<Participant ID>`.
     */
    participant?: string;

    /**
     * Request body metadata
     */
    requestBody?:
        Schema$GoogleCloudDialogflowV2beta1StreamingAnalyzeContentRequest;
  }

  export class Resource$Projects$Conversations$Participants$Suggestions {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.conversations.participants.suggestions.list
     * @desc Retrieves suggestions for live agents.  This method should be used
     * by human agent client software to fetch suggestions in real-time, while
     * the conversation with an end user is in progress. The functionality is
     * implemented in terms of the [list
     * pagination](/apis/design/design_patterns#list_pagination) design pattern.
     * The client app should use the `next_page_token` field to fetch the next
     * batch of suggestions.
     * @alias dialogflow.projects.conversations.participants.suggestions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. The default value is 100; the maximum value is 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The name of the conversation participant for whom to fetch suggestions. Format: `projects/<Project ID>/conversations/<Conversation ID>/participants/<Participant ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Conversations$Participants$Suggestions$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>;
    list(
        params:
            Params$Resource$Projects$Conversations$Participants$Suggestions$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>): void;
    list(
        params:
            Params$Resource$Projects$Conversations$Participants$Suggestions$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Conversations$Participants$Suggestions$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Conversations$Participants$Suggestions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Conversations$Participants$Suggestions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/suggestions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListSuggestionsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Conversations$Participants$Suggestions$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. The
     * default value is 100; the maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The name of the conversation participant for whom to fetch
     * suggestions. Format: `projects/<Project ID>/conversations/<Conversation
     * ID>/participants/<Participant ID>`.
     */
    parent?: string;
  }



  export class Resource$Projects$Environments {
    root: Dialogflow;
    users: Resource$Projects$Environments$Users;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.users = new Resource$Projects$Environments$Users(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Environments$Users {
    root: Dialogflow;
    conversations: Resource$Projects$Environments$Users$Conversations;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.conversations =
          new Resource$Projects$Environments$Users$Conversations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Environments$Users$Conversations {
    root: Dialogflow;
    contexts: Resource$Projects$Environments$Users$Conversations$Contexts;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.contexts =
          new Resource$Projects$Environments$Users$Conversations$Contexts(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.environments.users.conversations.deleteContexts
     * @desc Deletes all active contexts in the specified session.
     * @alias
     * dialogflow.projects.environments.users.conversations.deleteContexts
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteContexts(
        params?:
            Params$Resource$Projects$Environments$Users$Conversations$Deletecontexts,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    deleteContexts(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Deletecontexts,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    deleteContexts(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Deletecontexts,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    deleteContexts(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void;
    deleteContexts(
        paramsOrCallback?:
            Params$Resource$Projects$Environments$Users$Conversations$Deletecontexts|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Environments$Users$Conversations$Deletecontexts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Environments$Users$Conversations$Deletecontexts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Environments$Users$Conversations$Deletecontexts {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the session to delete all contexts from. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }

  export class Resource$Projects$Environments$Users$Conversations$Contexts {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.environments.users.conversations.contexts.create
     * @desc Creates a context.  If the specified context already exists,
     * overrides the context.
     * @alias
     * dialogflow.projects.environments.users.conversations.contexts.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    create(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Create,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Environments$Users$Conversations$Contexts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.environments.users.conversations.contexts.delete
     * @desc Deletes the specified context.
     * @alias
     * dialogflow.projects.environments.users.conversations.contexts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the context to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Environments$Users$Conversations$Contexts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.environments.users.conversations.contexts.get
     * @desc Retrieves the specified context.
     * @alias dialogflow.projects.environments.users.conversations.contexts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    get(params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Get,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Environments$Users$Conversations$Contexts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.environments.users.conversations.contexts.list
     * @desc Returns the list of all contexts in the specified session.
     * @alias dialogflow.projects.environments.users.conversations.contexts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The session to list all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>;
    list(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListContextsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Environments$Users$Conversations$Contexts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/contexts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListContextsResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.environments.users.conversations.contexts.patch
     * @desc Updates the specified context.
     * @alias
     * dialogflow.projects.environments.users.conversations.contexts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`, or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. The `Context ID` is always converted to lowercase. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1Context} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context>;
    patch(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(
        params:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Patch,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(callback:
              BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Patch|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Context>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Context> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Environments$Users$Conversations$Contexts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Environments$Users$Conversations$Contexts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Context>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Environments$Users$Conversations$Contexts$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The session to create a context for. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Context;
  }
  export interface Params$Resource$Projects$Environments$Users$Conversations$Contexts$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the context to delete. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or
     * `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
     * not specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Environments$Users$Conversations$Contexts$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the context. Format: `projects/<Project
     * ID>/agent/sessions/<Session ID>/contexts/<Context ID>` or
     * `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     * ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
     * not specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Environments$Users$Conversations$Contexts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all contexts from. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
     * ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
     * ID>`. If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Environments$Users$Conversations$Contexts$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of the context. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context
     * ID>`, or `projects/<Project ID>/agent/environments/<Environment
     * ID>/users/<User ID>/sessions/<Session ID>/contexts/<Context ID>`. The
     * `Context ID` is always converted to lowercase. If `Environment ID` is not
     * specified, we assume default 'draft' environment. If `User ID` is not
     * specified, we assume default '-' user.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Context;
  }



  export class Resource$Projects$Humanagentassistants {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.humanAgentAssistants.compileSuggestions
     * @desc Uses the specified human agent assistant to come up with
     * suggestions (relevant articles and FAQs) on how to respond to a given
     * conversation.
     * @alias dialogflow.projects.humanAgentAssistants.compileSuggestions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the agent assistant. Format: `projects/<Project ID>/humanAgentAssistants/<Human Agent Assistant ID>`.
     * @param {().GoogleCloudDialogflowV2beta1CompileSuggestionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    compileSuggestions(
        params?:
            Params$Resource$Projects$Humanagentassistants$Compilesuggestions,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>;
    compileSuggestions(
        params:
            Params$Resource$Projects$Humanagentassistants$Compilesuggestions,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>):
        void;
    compileSuggestions(
        params:
            Params$Resource$Projects$Humanagentassistants$Compilesuggestions,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>):
        void;
    compileSuggestions(
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>):
        void;
    compileSuggestions(
        paramsOrCallback?:
            Params$Resource$Projects$Humanagentassistants$Compilesuggestions|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Humanagentassistants$Compilesuggestions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Humanagentassistants$Compilesuggestions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}:compileSuggestions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.humanAgentAssistants.create
     * @desc Creates a human agent assistant.
     * @alias dialogflow.projects.humanAgentAssistants.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project to create a agent assistant for. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2beta1HumanAgentAssistant} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Humanagentassistants$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>;
    create(
        params: Params$Resource$Projects$Humanagentassistants$Create,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    create(
        params: Params$Resource$Projects$Humanagentassistants$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Humanagentassistants$Create|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Humanagentassistants$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Humanagentassistants$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/humanAgentAssistants')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>(parameters);
      }
    }


    /**
     * dialogflow.projects.humanAgentAssistants.delete
     * @desc Deletes the specified human agent assistant.
     * @alias dialogflow.projects.humanAgentAssistants.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the agent assistant. Format: `projects/<Project ID>/humanAgentAssistants/<Human Agent Assistant ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Humanagentassistants$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params: Params$Resource$Projects$Humanagentassistants$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params: Params$Resource$Projects$Humanagentassistants$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Humanagentassistants$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Humanagentassistants$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Humanagentassistants$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.humanAgentAssistants.get
     * @desc Retrieves a human agent assistant.
     * @alias dialogflow.projects.humanAgentAssistants.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the agent assistant. Format: `projects/<Project ID>/humanAgentAssistants/<Human Agent Assistant ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Humanagentassistants$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>;
    get(params: Params$Resource$Projects$Humanagentassistants$Get,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    get(params: Params$Resource$Projects$Humanagentassistants$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Humanagentassistants$Get|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Humanagentassistants$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Humanagentassistants$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>(parameters);
      }
    }


    /**
     * dialogflow.projects.humanAgentAssistants.list
     * @desc Returns the list of all human agent assistants.
     * @alias dialogflow.projects.humanAgentAssistants.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. The default value is 100; the maximum value is 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The project to list all agent assistants from. Format: `projects/<Project ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Humanagentassistants$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>;
    list(
        params: Params$Resource$Projects$Humanagentassistants$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>):
        void;
    list(
        params: Params$Resource$Projects$Humanagentassistants$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Humanagentassistants$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Humanagentassistants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Humanagentassistants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/humanAgentAssistants')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListHumanAgentAssistantsResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.humanAgentAssistants.patch
     * @desc Updates the specified human agent assistant.
     * @alias dialogflow.projects.humanAgentAssistants.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required for all methods except `create` (`create` populates the name automatically). The unique identifier of human agent assistant. Format: `projects/<Project ID>/humanAgentAssistants/<Human Agent Assistant ID>`.
     * @param {string=} params.updateMask Optional. The mask to specify which fields to update.
     * @param {().GoogleCloudDialogflowV2beta1HumanAgentAssistant} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Humanagentassistants$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>;
    patch(
        params: Params$Resource$Projects$Humanagentassistants$Patch,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    patch(
        params: Params$Resource$Projects$Humanagentassistants$Patch,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    patch(callback: BodyResponseCallback<
          Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Humanagentassistants$Patch|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Humanagentassistants$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Humanagentassistants$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Humanagentassistants$Compilesuggestions {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The resource name of the agent assistant. Format:
     * `projects/<Project ID>/humanAgentAssistants/<Human Agent Assistant ID>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1CompileSuggestionsRequest;
  }
  export interface Params$Resource$Projects$Humanagentassistants$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project to create a agent assistant for. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant;
  }
  export interface Params$Resource$Projects$Humanagentassistants$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The resource name of the agent assistant. Format:
     * `projects/<Project ID>/humanAgentAssistants/<Human Agent Assistant ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Humanagentassistants$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The resource name of the agent assistant. Format:
     * `projects/<Project ID>/humanAgentAssistants/<Human Agent Assistant ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Humanagentassistants$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. The
     * default value is 100; the maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The project to list all agent assistants from. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Humanagentassistants$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically). The unique identifier of human agent assistant. Format:
     * `projects/<Project ID>/humanAgentAssistants/<Human Agent Assistant ID>`.
     */
    name?: string;
    /**
     * Optional. The mask to specify which fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistant;
  }


  export class Resource$Projects$Knowledgebases {
    root: Dialogflow;
    documents: Resource$Projects$Knowledgebases$Documents;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
      this.documents = new Resource$Projects$Knowledgebases$Documents(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.knowledgeBases.create
     * @desc Creates a knowledge base.
     * @alias dialogflow.projects.knowledgeBases.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project to create a knowledge base for. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2beta1KnowledgeBase} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Knowledgebases$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>;
    create(
        params: Params$Resource$Projects$Knowledgebases$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    create(
        params: Params$Resource$Projects$Knowledgebases$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Knowledgebases$Create|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Knowledgebases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Knowledgebases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/knowledgeBases')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>(parameters);
      }
    }


    /**
     * dialogflow.projects.knowledgeBases.delete
     * @desc Deletes the specified knowledge base.
     * @alias dialogflow.projects.knowledgeBases.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.force Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted.
     * @param {string} params.name Required. The name of the knowledge base to delete. Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Knowledgebases$Delete,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
        params: Params$Resource$Projects$Knowledgebases$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        params: Params$Resource$Projects$Knowledgebases$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Knowledgebases$Delete|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Knowledgebases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Knowledgebases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.knowledgeBases.get
     * @desc Retrieves the specified knowledge base.
     * @alias dialogflow.projects.knowledgeBases.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the knowledge base to retrieve. Format `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Knowledgebases$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>;
    get(params: Params$Resource$Projects$Knowledgebases$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    get(params: Params$Resource$Projects$Knowledgebases$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Knowledgebases$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Knowledgebases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Knowledgebases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1KnowledgeBase>(parameters);
      }
    }


    /**
     * dialogflow.projects.knowledgeBases.list
     * @desc Returns the list of all knowledge bases of the specified agent.
     * @alias dialogflow.projects.knowledgeBases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The project to list of knowledge bases for. Format: `projects/<Project ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Knowledgebases$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>;
    list(
        params: Params$Resource$Projects$Knowledgebases$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>):
        void;
    list(
        params: Params$Resource$Projects$Knowledgebases$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Knowledgebases$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Knowledgebases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Knowledgebases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/knowledgeBases')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Knowledgebases$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The project to create a knowledge base for. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1KnowledgeBase;
  }
  export interface Params$Resource$Projects$Knowledgebases$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. Force deletes the knowledge base. When set to true, any
     * documents in the knowledge base are also deleted.
     */
    force?: boolean;
    /**
     * Required. The name of the knowledge base to delete. Format:
     * `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Knowledgebases$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the knowledge base to retrieve. Format
     * `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Knowledgebases$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 10 and at most 100.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The project to list of knowledge bases for. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;
  }

  export class Resource$Projects$Knowledgebases$Documents {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.knowledgeBases.documents.create
     * @desc Creates a new document.  Operation <response: Document, metadata:
     * KnowledgeOperationMetadata>
     * @alias dialogflow.projects.knowledgeBases.documents.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The knoweldge base to create a document for. Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     * @param {().GoogleCloudDialogflowV2beta1Document} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Knowledgebases$Documents$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
        params: Params$Resource$Projects$Knowledgebases$Documents$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(
        params: Params$Resource$Projects$Knowledgebases$Documents$Create,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Knowledgebases$Documents$Create|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Knowledgebases$Documents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Knowledgebases$Documents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/documents')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.knowledgeBases.documents.delete
     * @desc Deletes the specified document.  Operation <response:
     * google.protobuf.Empty,            metadata: KnowledgeOperationMetadata>
     * @alias dialogflow.projects.knowledgeBases.documents.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the document to delete. Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Knowledgebases$Documents$Delete,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
        params: Params$Resource$Projects$Knowledgebases$Documents$Delete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    delete(
        params: Params$Resource$Projects$Knowledgebases$Documents$Delete,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    delete(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Knowledgebases$Documents$Delete|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Knowledgebases$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Knowledgebases$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * dialogflow.projects.knowledgeBases.documents.get
     * @desc Retrieves the specified document.
     * @alias dialogflow.projects.knowledgeBases.documents.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the document to retrieve. Format `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Knowledgebases$Documents$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Document>;
    get(params: Params$Resource$Projects$Knowledgebases$Documents$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>):
        void;
    get(params: Params$Resource$Projects$Knowledgebases$Documents$Get,
        callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>):
        void;
    get(callback:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Knowledgebases$Documents$Get|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>,
        callback?:
            BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1Document>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1Document> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Knowledgebases$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Knowledgebases$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Document>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1Document>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.knowledgeBases.documents.list
     * @desc Returns the list of all documents of the knowledge base.
     * @alias dialogflow.projects.knowledgeBases.documents.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The knowledge base to list all documents for. Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Knowledgebases$Documents$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>;
    list(
        params: Params$Resource$Projects$Knowledgebases$Documents$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>): void;
    list(
        params: Params$Resource$Projects$Knowledgebases$Documents$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Knowledgebases$Documents$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>): void|
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Knowledgebases$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Knowledgebases$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/documents')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListDocumentsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Knowledgebases$Documents$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The knoweldge base to create a document for. Format:
     * `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1Document;
  }
  export interface Params$Resource$Projects$Knowledgebases$Documents$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the document to delete. Format: `projects/<Project
     * ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Knowledgebases$Documents$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The name of the document to retrieve. Format `projects/<Project
     * ID>/knowledgeBases/<Knowledge Base ID>/documents/<Document ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Knowledgebases$Documents$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 10 and at most 100.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The knowledge base to list all documents for. Format:
     * `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
     */
    parent?: string;
  }



  export class Resource$Projects$Operations {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias dialogflow.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Operations$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    get(params: Params$Resource$Projects$Operations$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(params: Params$Resource$Projects$Operations$Get,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(paramsOrCallback?: Params$Resource$Projects$Operations$Get|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Operations$Get;
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

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }


  export class Resource$Projects$Phonenumberorders {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.phoneNumberOrders.cancel
     * @desc Cancels an `PhoneNumberOrder`. Returns an error if the order is in
     * state IN_PROGRESS or COMPLETED.
     * @alias dialogflow.projects.phoneNumberOrders.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of the order to delete. Format: `projects/<Project ID>/phoneNumberOrders/<Order ID>`.
     * @param {().GoogleCloudDialogflowV2beta1CancelPhoneNumberOrderRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
        params?: Params$Resource$Projects$Phonenumberorders$Cancel,
        options?: MethodOptions): AxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
        params: Params$Resource$Projects$Phonenumberorders$Cancel,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
        params: Params$Resource$Projects$Phonenumberorders$Cancel,
        callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Projects$Phonenumberorders$Cancel|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobufEmpty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>):
        void|AxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumberorders$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumberorders$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}:cancel')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }


    /**
     * dialogflow.projects.phoneNumberOrders.create
     * @desc Creates an order to request phone numbers be added to a project.
     * The initial `LifecycleState` of a newly created order is PENDING.
     * @alias dialogflow.projects.phoneNumberOrders.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource identifier of the project requesting the orders. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2beta1PhoneNumberOrder} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Phonenumberorders$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>;
    create(
        params: Params$Resource$Projects$Phonenumberorders$Create,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    create(
        params: Params$Resource$Projects$Phonenumberorders$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Phonenumberorders$Create|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumberorders$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumberorders$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/phoneNumberOrders')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>(parameters);
      }
    }


    /**
     * dialogflow.projects.phoneNumberOrders.get
     * @desc Returns a specific `PhoneNumberOrder`.
     * @alias dialogflow.projects.phoneNumberOrders.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of the order to retrieve. Format: `projects/<Project ID>/phoneNumberOrders/<Order ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Phonenumberorders$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>;
    get(params: Params$Resource$Projects$Phonenumberorders$Get,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    get(params: Params$Resource$Projects$Phonenumberorders$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Phonenumberorders$Get|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumberorders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumberorders$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>(parameters);
      }
    }


    /**
     * dialogflow.projects.phoneNumberOrders.list
     * @desc Lists of all `PhoneNumberOrder` resources in the specified project.
     * @alias dialogflow.projects.phoneNumberOrders.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. The default value is 100. The maximum value is 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The project to list all orders from. Format: `projects/<Project ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Phonenumberorders$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>;
    list(
        params: Params$Resource$Projects$Phonenumberorders$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>):
        void;
    list(
        params: Params$Resource$Projects$Phonenumberorders$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Phonenumberorders$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumberorders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumberorders$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/phoneNumberOrders')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumberOrdersResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.phoneNumberOrders.patch
     * @desc Updates the specified `PhoneNumberOrder` resource. Returns an error
     * if the order is in state IN_PROGRESS or COMPLETED.
     * @alias dialogflow.projects.phoneNumberOrders.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of this order. Format: `projects/<Project ID>/phoneNumberOrders/<Order ID>`.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1PhoneNumberOrder} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Phonenumberorders$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>;
    patch(
        params: Params$Resource$Projects$Phonenumberorders$Patch,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    patch(
        params: Params$Resource$Projects$Phonenumberorders$Patch,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    patch(callback: BodyResponseCallback<
          Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Phonenumberorders$Patch|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumberorders$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumberorders$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Phonenumberorders$Cancel {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of the order to delete. Format:
     * `projects/<Project ID>/phoneNumberOrders/<Order ID>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?:
        Schema$GoogleCloudDialogflowV2beta1CancelPhoneNumberOrderRequest;
  }
  export interface Params$Resource$Projects$Phonenumberorders$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Resource identifier of the project requesting the orders.
     * Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder;
  }
  export interface Params$Resource$Projects$Phonenumberorders$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of the order to retrieve. Format:
     * `projects/<Project ID>/phoneNumberOrders/<Order ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Phonenumberorders$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. The
     * default value is 100. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The project to list all orders from. Format: `projects/<Project
     * ID>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Phonenumberorders$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of this order. Format: `projects/<Project
     * ID>/phoneNumberOrders/<Order ID>`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1PhoneNumberOrder;
  }


  export class Resource$Projects$Phonenumbers {
    root: Dialogflow;
    constructor(root: Dialogflow) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * dialogflow.projects.phoneNumbers.delete
     * @desc Requests deletion of a `PhoneNumber`. The `PhoneNumber` is moved
     * into the DELETE_REQUESTED state immediately, and is deleted approximately
     * 30 days later. This method may only be called on a `PhoneNumber` in the
     * ACTIVE state.
     * @alias dialogflow.projects.phoneNumbers.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of the `PhoneNumber` to delete. Format: `projects/<Project ID>/phoneNumbers/<PhoneNumber ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Phonenumbers$Delete,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>;
    delete(
        params: Params$Resource$Projects$Phonenumbers$Delete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    delete(
        params: Params$Resource$Projects$Phonenumbers$Delete,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    delete(callback: BodyResponseCallback<
           Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Phonenumbers$Delete|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumber> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumbers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumbers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.phoneNumbers.list
     * @desc Returns the list of all phone numbers in the specified project.
     * @alias dialogflow.projects.phoneNumbers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. The default value is 100. The maximum value is 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The project to list all `PhoneNumber` resources from. Format: `projects/<Project ID>`.
     * @param {boolean=} params.showDeleted Optional. Controls whether `PhoneNumber` resources in the DELETE_REQUESTED state should be returned. Defaults to false.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Phonenumbers$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>;
    list(
        params: Params$Resource$Projects$Phonenumbers$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>): void;
    list(
        params: Params$Resource$Projects$Phonenumbers$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Phonenumbers$List|
        BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumbers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumbers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+parent}/phoneNumbers')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudDialogflowV2beta1ListPhoneNumbersResponse>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.phoneNumbers.patch
     * @desc Updates the specified `PhoneNumber`.
     * @alias dialogflow.projects.phoneNumbers.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of this phone number. Format: `projects/<Project ID>/phoneNumbers/<PhoneNumber ID>`.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2beta1PhoneNumber} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Phonenumbers$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>;
    patch(
        params: Params$Resource$Projects$Phonenumbers$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    patch(
        params: Params$Resource$Projects$Phonenumbers$Patch,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    patch(callback: BodyResponseCallback<
          Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Phonenumbers$Patch|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumber> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumbers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumbers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>(
            parameters);
      }
    }


    /**
     * dialogflow.projects.phoneNumbers.undelete
     * @desc Cancels the deletion request for a `PhoneNumber`. This method may
     * only be called on a `PhoneNumber` in the DELETE_REQUESTED state.
     * @alias dialogflow.projects.phoneNumbers.undelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of the `PhoneNumber` to delete. Format: `projects/<Project ID>/phoneNumbers/<PhoneNumber ID>`.
     * @param {().GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete(
        params?: Params$Resource$Projects$Phonenumbers$Undelete,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>;
    undelete(
        params: Params$Resource$Projects$Phonenumbers$Undelete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    undelete(
        params: Params$Resource$Projects$Phonenumbers$Undelete,
        callback: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    undelete(callback: BodyResponseCallback<
             Schema$GoogleCloudDialogflowV2beta1PhoneNumber>): void;
    undelete(
        paramsOrCallback?: Params$Resource$Projects$Phonenumbers$Undelete|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2beta1PhoneNumber>):
        void|AxiosPromise<Schema$GoogleCloudDialogflowV2beta1PhoneNumber> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Phonenumbers$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Phonenumbers$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}:undelete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2beta1PhoneNumber>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Phonenumbers$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of the `PhoneNumber` to delete. Format:
     * `projects/<Project ID>/phoneNumbers/<PhoneNumber ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Phonenumbers$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. The
     * default value is 100. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list
     * request.
     */
    pageToken?: string;
    /**
     * Required. The project to list all `PhoneNumber` resources from. Format:
     * `projects/<Project ID>`.
     */
    parent?: string;
    /**
     * Optional. Controls whether `PhoneNumber` resources in the
     * DELETE_REQUESTED state should be returned. Defaults to false.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Phonenumbers$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of this phone number. Format:
     * `projects/<Project ID>/phoneNumbers/<PhoneNumber ID>`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1PhoneNumber;
  }
  export interface Params$Resource$Projects$Phonenumbers$Undelete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The unique identifier of the `PhoneNumber` to delete. Format:
     * `projects/<Project ID>/phoneNumbers/<PhoneNumber ID>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2beta1UndeletePhoneNumberRequest;
  }
}
