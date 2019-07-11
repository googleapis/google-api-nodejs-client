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

export namespace dialogflow_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Dialogflow API
   *
   * Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).
   *
   * @example
   * const {google} = require('googleapis');
   * const dialogflow = google.dialogflow('v2');
   *
   * @namespace dialogflow
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Dialogflow
   */
  export class Dialogflow {
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
   * Represents a conversational agent.
   */
  export interface Schema$GoogleCloudDialogflowV2Agent {
    /**
     * Optional. The URI of the agent&#39;s avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow-enterprise/docs/integrations/web-demo) integration.
     */
    avatarUri?: string;
    /**
     * Optional. To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
     */
    classificationThreshold?: number;
    /**
     * Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the `Update` method.
     */
    defaultLanguageCode?: string;
    /**
     * Optional. The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
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
     * Required. The project of this agent. Format: `projects/&lt;Project ID&gt;`.
     */
    parent?: string;
    /**
     * Optional. The list of all languages supported by this agent (except for the `default_language_code`).
     */
    supportedLanguageCodes?: string[];
    /**
     * Required. The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
     */
    timeZone?: string;
  }
  /**
   * The request message for EntityTypes.BatchCreateEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchCreateEntitiesRequest {
    /**
     * Required. The entities to create.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Optional. The language of entity synonyms defined in `entities`. If not specified, the agent&#39;s default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
  }
  /**
   * The request message for EntityTypes.BatchDeleteEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchDeleteEntitiesRequest {
    /**
     * Required. The canonical `values` of the entities to delete. Note that these are not fully-qualified names, i.e. they don&#39;t start with `projects/&lt;Project ID&gt;`.
     */
    entityValues?: string[];
    /**
     * Optional. The language of entity synonyms defined in `entities`. If not specified, the agent&#39;s default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
  }
  /**
   * The request message for EntityTypes.BatchDeleteEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest {
    /**
     * Required. The names entity types to delete. All names must point to the same agent as `parent`.
     */
    entityTypeNames?: string[];
  }
  /**
   * The request message for Intents.BatchDeleteIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchDeleteIntentsRequest {
    /**
     * Required. The collection of intents to delete. Only intent `name` must be filled in.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
  }
  /**
   * The request message for EntityTypes.BatchUpdateEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntitiesRequest {
    /**
     * Required. The entities to update or create.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Optional. The language of entity synonyms defined in `entities`. If not specified, the agent&#39;s default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
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
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest {
    /**
     * The collection of entity types to update or create.
     */
    entityTypeBatchInline?: Schema$GoogleCloudDialogflowV2EntityTypeBatch;
    /**
     * The URI to a Google Cloud Storage file containing entity types to update or create. The file format can either be a serialized proto (of EntityBatch type) or a JSON object. Note: The URI must start with &quot;gs://&quot;.
     */
    entityTypeBatchUri?: string;
    /**
     * Optional. The language of entity synonyms defined in `entity_types`. If not specified, the agent&#39;s default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
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
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {
    /**
     * The collection of updated or created entity types.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2EntityType[];
  }
  /**
   * The request message for Intents.BatchUpdateIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateIntentsRequest {
    /**
     * The collection of intents to update or create.
     */
    intentBatchInline?: Schema$GoogleCloudDialogflowV2IntentBatch;
    /**
     * The URI to a Google Cloud Storage file containing intents to update or create. The file format can either be a serialized proto (of IntentBatch type) or JSON object. Note: The URI must start with &quot;gs://&quot;.
     */
    intentBatchUri?: string;
    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language of training phrases, parameters and rich messages defined in `intents`. If not specified, the agent&#39;s default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
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
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
    /**
     * The collection of updated or created intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
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
   * The response message for Intents.BatchUpdateIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
    /**
     * The collection of updated or created intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2beta1Intent[];
  }
  /**
   * Represents a context.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Context {
    /**
     * Optional. The number of conversational query requests after which the context expires. If set to `0` (the default) the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
     */
    lifespanCount?: number;
    /**
     * Required. The unique identifier of the context. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`.  The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long.  If `Environment ID` is not specified, we assume default &#39;draft&#39; environment. If `User ID` is not specified, we assume default &#39;-&#39; user.
     */
    name?: string;
    /**
     * Optional. The collection of parameters associated with this context. Refer to [this doc](https://cloud.google.com/dialogflow-enterprise/docs/intents-actions-parameters) for syntax.
     */
    parameters?: {[key: string]: any};
  }
  /**
   * Represents an entity type. Entity types serve as a tool for extracting parameter values from natural language queries.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityType {
    /**
     * Optional. Indicates whether the entity type can be automatically expanded.
     */
    autoExpansionMode?: string;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string;
    /**
     * Optional. The collection of entity entries associated with the entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: string;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
     */
    name?: string;
  }
  /**
   * An **entity entry** for an associated entity type.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity {
    /**
     * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*.  For `KIND_LIST` entity types:  *   This collection must contain exactly one synonym equal to `value`.
     */
    synonyms?: string[];
    /**
     * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*.  For `KIND_MAP` entity types:  *   A canonical value to be used in place of synonyms.  For `KIND_LIST` entity types:  *   A string that can contain references to other entity types (with or     without aliases).
     */
    value?: string;
  }
  /**
   * Events allow for matching intents by event name instead of the natural language input. For instance, input `&lt;event: { name: &quot;welcome_event&quot;, parameters: { name: &quot;Sam&quot; } }&gt;` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `&quot;Hello #welcome_event.name! What can I do for you today?&quot;`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EventInput {
    /**
     * Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Required. The unique identifier of the event.
     */
    name?: string;
    /**
     * Optional. The collection of parameters associated with the event.
     */
    parameters?: {[key: string]: any};
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ExportAgentResponse {
    /**
     * The exported agent.  Example for how to export an agent to a zip file via a command line: &lt;pre&gt;curl \   &#39;https://dialogflow.googleapis.com/v2beta1/projects/&amp;lt;project_name&amp;gt;/agent:export&#39;\   -X POST \   -H &#39;Authorization: Bearer &#39;$(gcloud auth application-default   print-access-token) \   -H &#39;Accept: application/json&#39; \   -H &#39;Content-Type: application/json&#39; \   --compressed \   --data-binary &#39;{}&#39; \ | grep agentContent | sed -e &#39;s/.*&quot;agentContent&quot;: &quot;\([^&quot;]*\)&quot;.x/\1/&#39; \ | base64 --decode &gt; &amp;lt;agent zip file&amp;gt;&lt;/pre&gt;
     */
    agentContent?: string;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
     */
    agentUri?: string;
  }
  /**
   * Represents an intent. Intents convert a number of user expressions or patterns into an action. An action is an extraction of a user command or sentence semantics.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Intent {
    /**
     * Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
     */
    action?: string;
    /**
     * Optional. The list of platforms for which the first response will be taken from among the messages assigned to the DEFAULT_PLATFORM.
     */
    defaultResponsePlatforms?: string[];
    /**
     * Required. The name of this intent.
     */
    displayName?: string;
    /**
     * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
     */
    endInteraction?: boolean;
    /**
     * Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent.
     */
    events?: string[];
    /**
     * Read-only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
     */
    followupIntentInfo?: Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];
    /**
     * Optional. The list of context names required for this intent to be triggered. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    inputContextNames?: string[];
    /**
     * Optional. Indicates whether this is a fallback intent.
     */
    isFallback?: boolean;
    /**
     * Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
     */
    messages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
     */
    mlDisabled?: boolean;
    /**
     * Optional. Indicates whether Machine Learning is enabled for the intent. Note: If `ml_enabled` setting is set to false, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled` field instead. NOTE: If both `ml_enabled` and `ml_disabled` are either not set or false, then the default value is determined as follows: - Before April 15th, 2018 the default is:   ml_enabled = false / ml_disabled = true. - After April 15th, 2018 the default is:   ml_enabled = true / ml_disabled = false.
     */
    mlEnabled?: boolean;
    /**
     * The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    name?: string;
    /**
     * Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. The collection of parameters associated with the intent.
     */
    parameters?: Schema$GoogleCloudDialogflowV2beta1IntentParameter[];
    /**
     * Read-only after creation. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent.  It identifies the parent followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    parentFollowupIntentName?: string;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher priorities. If this is zero or unspecified, we use the default priority 500000.  Negative numbers mean that the intent is disabled.
     */
    priority?: number;
    /**
     * Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
     */
    resetContexts?: boolean;
    /**
     * Read-only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. We populate this field only in the output.  Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    rootFollowupIntentName?: string;
    /**
     * Optional. The collection of examples that the agent is trained on.
     */
    trainingPhrases?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];
    /**
     * Optional. Indicates whether webhooks are enabled for the intent.
     */
    webhookState?: string;
  }
  /**
   * Represents a single followup intent in the chain.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
    /**
     * The unique identifier of the followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    followupIntentName?: string;
    /**
     * The unique identifier of the followup intent&#39;s parent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
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
    carouselSelect?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
    /**
     * Displays an image.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Displays a link out suggestion chip for Actions on Google.
     */
    linkOutSuggestion?: Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
    /**
     * Displays a list card for Actions on Google.
     */
    listSelect?: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect;
    /**
     * Returns a response containing a custom, platform-specific payload. See the Intent.Message.Platform type for a description of the structure that may be required for your platform.
     */
    payload?: {[key: string]: any};
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
    simpleResponses?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
    /**
     * Displays suggestion chips for Actions on Google.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
    /**
     * Plays audio from a file in Telephony Gateway.
     */
    telephonyPlayAudio?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
    /**
     * Synthesizes speech in Telephony Gateway.
     */
    telephonySynthesizeSpeech?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
    /**
     * Transfers the call in Telephony Gateway.
     */
    telephonyTransferCall?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
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
    openUriAction?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
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
    items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem[];
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
     * A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect.
     */
    accessibilityText?: string;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string;
  }
  /**
   * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string;
    /**
     * Required. The URI of the app or site to open when the user taps the suggestion chip.
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
     * Required. A unique key that will be sent back to the agent if this response is given.
     */
    key?: string;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item in dialog.
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
     * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
     */
    ssml?: string;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string;
  }
  /**
   * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses {
    /**
     * Required. The list of simple responses.
     */
    simpleResponses?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse[];
  }
  /**
   * The suggestion chip message that the user can tap to quickly post a reply to the conversation.
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
     * Required. URI to a Google Cloud Storage object containing the audio to play, e.g., &quot;gs://bucket/object&quot;. The object must contain a single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz.  This object must be readable by the `service-&lt;Project Number&gt;@gcp-sa-dialogflow.iam.gserviceaccount.com` service account where &lt;Project Number&gt; is the number of the Telephony Gateway project (usually the same as the Dialogflow agent project). If the Google Cloud Storage bucket is in the Telephony Gateway project, this permission is added by default when enabling the Dialogflow V2 API.  For audio from other sources, consider using the `TelephonySynthesizeSpeech` message with SSML.
     */
    audioUri?: string;
  }
  /**
   * Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway.  Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
    /**
     * The SSML to be synthesized. For more information, see [SSML](https://developers.google.com/actions/reference/ssml).
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
     * Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164).  We currently only allow transferring to US numbers (+1xxxyyyzzzz).
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
     * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
     */
    entityTypeDisplayName?: string;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean;
    /**
     * The unique identifier of this parameter.
     */
    name?: string;
    /**
     * Optional. The collection of prompts that the agent can present to the user in order to collect value for the parameter.
     */
    prompts?: string[];
    /**
     * Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as   `#context_name.parameter_name`.
     */
    value?: string;
  }
  /**
   * Represents an example that the agent is trained on.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string;
    /**
     * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase.  Note: The API does not automatically annotate training phrases like the Dialogflow Console does.  Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated.  If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set.  If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways:  -   `Part.text` is set to a part of the phrase that has no parameters. -   `Part.text` is set to a part of the phrase that you want to annotate,     and the `entity_type`, `alias`, and `user_defined` fields are all     set.
     */
    parts?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
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
     * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
     */
    alias?: string;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
     */
    entityType?: string;
    /**
     * Required. The text for this part.
     */
    text?: string;
    /**
     * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
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
     * The piece of text from the `source` knowledge base document that answers this conversational query.
     */
    answer?: string;
    /**
     * The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise.
     */
    faqQuestion?: string;
    /**
     * The system&#39;s confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using `match_confidence_level` which should be generally more stable.
     */
    matchConfidence?: number;
    /**
     * The system&#39;s confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `&lt;query, answer&gt;` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer.
     */
    matchConfidenceLevel?: string;
    /**
     * Indicates which Knowledge Document this answer was extracted from. Format: `projects/&lt;Project ID&gt;/knowledgeBases/&lt;Knowledge Base ID&gt;/documents/&lt;Document ID&gt;`.
     */
    source?: string;
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
   * Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload.  In particular for the Telephony Gateway this field has the form: &lt;pre&gt;{  &quot;telephony&quot;: {    &quot;caller_id&quot;: &quot;+18558363987&quot;  } }&lt;/pre&gt; Note: The caller ID field (`caller_id`) will be redacted for Standard Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Enterprise Edition agents.
     */
    payload?: {[key: string]: any};
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
     */
    source?: string;
    /**
     * Optional. The version of the protocol used for this request. This field is AoG-specific.
     */
    version?: string;
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
     * This field is set to: - `false` if the matched intent has required parameters and not all of    the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the    matched intent doesn&#39;t contain any required parameters.
     */
    allRequiredParamsPresent?: boolean;
    /**
     * The free-form diagnostic info. For example, this field could contain webhook call latency. The string keys of the Struct&#39;s fields map can change without notice.
     */
    diagnosticInfo?: {[key: string]: any};
    /**
     * The collection of rich messages to present to the user.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
     */
    fulfillmentText?: string;
    /**
     * The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name` and `webhook_state`.
     */
    intent?: Schema$GoogleCloudDialogflowV2beta1Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
     */
    intentDetectionConfidence?: number;
    /**
     * The result from Knowledge Connector (if any), ordered by decreasing `KnowledgeAnswers.match_confidence`.
     */
    knowledgeAnswers?: Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswers;
    /**
     * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) for a list of the currently supported language codes.
     */
    languageCode?: string;
    /**
     * The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `&lt;parameter name&gt;.original` containing the original parameter values before the query.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * The collection of extracted parameters.
     */
    parameters?: {[key: string]: any};
    /**
     * The original conversational query text: - If natural language text was provided as input, `query_text` contains   a copy of the input. - If natural language speech audio was provided as input, `query_text`   contains the speech recognition result. If speech recognizer produced   multiple alternatives, a particular one is picked. - If an event was provided as input, `query_text` is not set.
     */
    queryText?: string;
    /**
     * The sentiment analysis result, which depends on the `sentiment_analysis_request_config` specified in the request.
     */
    sentimentAnalysisResult?: Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set.  This field is not guaranteed to be accurate or set. In particular this field isn&#39;t set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
     */
    speechRecognitionConfidence?: number;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
     */
    webhookPayload?: {[key: string]: any};
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
     */
    webhookSource?: string;
  }
  /**
   * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
     */
    magnitude?: number;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number;
  }
  /**
   * The result of sentiment analysis as configured by `sentiment_analysis_request_config`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult {
    /**
     * The sentiment analysis result for `query_text`.
     */
    queryTextSentiment?: Schema$GoogleCloudDialogflowV2beta1Sentiment;
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
     * Optional. The contents of the original request that was passed to `[Streaming]DetectIntent` call.
     */
    originalDetectIntentRequest?: Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
    /**
     * The result of the conversational query or event processing. Contains the same value as `[Streaming]DetectIntentResponse.query_result`.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2beta1QueryResult;
    /**
     * The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
     */
    responseId?: string;
    /**
     * The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;`.
     */
    session?: string;
  }
  /**
   * The response message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1WebhookResponse {
    /**
     * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
     */
    endInteraction?: boolean;
    /**
     * Optional. Makes the platform immediately invoke another `DetectIntent` call internally with the specified event as input.
     */
    followupEventInput?: Schema$GoogleCloudDialogflowV2beta1EventInput;
    /**
     * Optional. The collection of rich messages to present to the user. This value is passed directly to `QueryResult.fulfillment_messages`.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * Optional. The text to be shown on the screen. This value is passed directly to `QueryResult.fulfillment_text`.
     */
    fulfillmentText?: string;
    /**
     * Optional. The collection of output contexts. This value is passed directly to `QueryResult.output_contexts`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_payload`. See the related `fulfillment_messages[i].payload field`, which may be used as an alternative to this field.  This field can be used for Actions on Google responses. It should have a structure similar to the JSON message shown here. For more information, see [Actions on Google Webhook Format](https://developers.google.com/actions/dialogflow/webhook) &lt;pre&gt;{   &quot;google&quot;: {     &quot;expectUserResponse&quot;: true,     &quot;richResponse&quot;: {       &quot;items&quot;: [         {           &quot;simpleResponse&quot;: {             &quot;textToSpeech&quot;: &quot;this is a simple response&quot;           }         }       ]     }   } }&lt;/pre&gt;
     */
    payload?: {[key: string]: any};
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
     * Optional. The number of conversational query requests after which the context expires. If set to `0` (the default) the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
     */
    lifespanCount?: number;
    /**
     * Required. The unique identifier of the context. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`.  The `Context ID` is always converted to lowercase, may only contain characters in [a-zA-Z0-9_-%] and may be at most 250 bytes long.
     */
    name?: string;
    /**
     * Optional. The collection of parameters associated with this context. Refer to [this doc](https://cloud.google.com/dialogflow-enterprise/docs/intents-actions-parameters) for syntax.
     */
    parameters?: {[key: string]: any};
  }
  /**
   * The request to detect user&#39;s intent.
   */
  export interface Schema$GoogleCloudDialogflowV2DetectIntentRequest {
    /**
     * Optional. The natural language speech audio to be processed. This field should be populated iff `query_input` is set to an input audio config. A single request can contain up to 1 minute of speech audio data.
     */
    inputAudio?: string;
    /**
     * Optional. Instructs the speech synthesizer how to generate the output audio. If this field is not set and agent-level speech synthesizer is not configured, no output audio is generated.
     */
    outputAudioConfig?: Schema$GoogleCloudDialogflowV2OutputAudioConfig;
    /**
     * Required. The input specification. It can be set to:  1.  an audio config     which instructs the speech recognizer how to process the speech audio,  2.  a conversational query in the form of text, or  3.  an event that specifies which intent to trigger.
     */
    queryInput?: Schema$GoogleCloudDialogflowV2QueryInput;
    /**
     * Optional. The parameters of this query.
     */
    queryParams?: Schema$GoogleCloudDialogflowV2QueryParameters;
  }
  /**
   * The message returned from the DetectIntent method.
   */
  export interface Schema$GoogleCloudDialogflowV2DetectIntentResponse {
    /**
     * The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.fulfillment_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty.
     */
    outputAudio?: string;
    /**
     * The config used by the speech synthesizer to generate the output audio.
     */
    outputAudioConfig?: Schema$GoogleCloudDialogflowV2OutputAudioConfig;
    /**
     * The selected results of the conversational query or event processing. See `alternative_query_results` for additional potential results.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2QueryResult;
    /**
     * The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.
     */
    responseId?: string;
    /**
     * Specifies the status of the webhook request.
     */
    webhookStatus?: Schema$GoogleRpcStatus;
  }
  /**
   * Represents an entity type. Entity types serve as a tool for extracting parameter values from natural language queries.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityType {
    /**
     * Optional. Indicates whether the entity type can be automatically expanded.
     */
    autoExpansionMode?: string;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string;
    /**
     * Optional. The collection of entity entries associated with the entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: string;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
     */
    name?: string;
  }
  /**
   * This message is a wrapper around a collection of entity types.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityTypeBatch {
    /**
     * A collection of entity types.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2EntityType[];
  }
  /**
   * An **entity entry** for an associated entity type.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityTypeEntity {
    /**
     * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*.  For `KIND_LIST` entity types:  *   This collection must contain exactly one synonym equal to `value`.
     */
    synonyms?: string[];
    /**
     * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*.  For `KIND_MAP` entity types:  *   A canonical value to be used in place of synonyms.  For `KIND_LIST` entity types:  *   A string that can contain references to other entity types (with or     without aliases).
     */
    value?: string;
  }
  /**
   * Events allow for matching intents by event name instead of the natural language input. For instance, input `&lt;event: { name: &quot;welcome_event&quot;, parameters: { name: &quot;Sam&quot; } }&gt;` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `&quot;Hello #welcome_event.name! What can I do for you today?&quot;`.
   */
  export interface Schema$GoogleCloudDialogflowV2EventInput {
    /**
     * Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Required. The unique identifier of the event.
     */
    name?: string;
    /**
     * Optional. The collection of parameters associated with the event.
     */
    parameters?: {[key: string]: any};
  }
  /**
   * The request message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2ExportAgentRequest {
    /**
     * Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be `gs://&lt;bucket-name&gt;/&lt;object-name&gt;`. If left unspecified, the serialized agent is returned inline.
     */
    agentUri?: string;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2ExportAgentResponse {
    /**
     * The exported agent.  Example for how to export an agent to a zip file via a command line: &lt;pre&gt;curl \   &#39;https://dialogflow.googleapis.com/v2/projects/&amp;lt;project_name&amp;gt;/agent:export&#39;\   -X POST \   -H &#39;Authorization: Bearer &#39;$(gcloud auth application-default   print-access-token) \   -H &#39;Accept: application/json&#39; \   -H &#39;Content-Type: application/json&#39; \   --compressed \   --data-binary &#39;{}&#39; \ | grep agentContent | sed -e &#39;s/.*&quot;agentContent&quot;: &quot;\([^&quot;]*\)&quot;.x/\1/&#39; \ | base64 --decode &gt; &amp;lt;agent zip file&amp;gt;&lt;/pre&gt;
     */
    agentContent?: string;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
     */
    agentUri?: string;
  }
  /**
   * The request message for Agents.ImportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2ImportAgentRequest {
    /**
     * The agent to import.  Example for how to import an agent via the command line: &lt;pre&gt;curl \   &#39;https://dialogflow.googleapis.com/v2/projects/&amp;lt;project_name&amp;gt;/agent:import\    -X POST \    -H &#39;Authorization: Bearer &#39;$(gcloud auth application-default    print-access-token) \    -H &#39;Accept: application/json&#39; \    -H &#39;Content-Type: application/json&#39; \    --compressed \    --data-binary &quot;{       &#39;agentContent&#39;: &#39;$(cat &amp;lt;agent zip file&amp;gt; | base64 -w 0)&#39;    }&quot;&lt;/pre&gt;
     */
    agentContent?: string;
    /**
     * The URI to a Google Cloud Storage file containing the agent to import. Note: The URI must start with &quot;gs://&quot;.
     */
    agentUri?: string;
  }
  /**
   * Instructs the speech recognizer how to process the audio content.
   */
  export interface Schema$GoogleCloudDialogflowV2InputAudioConfig {
    /**
     * Required. Audio encoding of the audio content to process.
     */
    audioEncoding?: string;
    /**
     * Required. The language of the supplied audio. Dialogflow does not do translations. See [Language Support](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Optional. Which variant of the Speech model to use.
     */
    modelVariant?: string;
    /**
     * Optional. The collection of phrase hints which are used to boost accuracy of speech recognition. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details.
     */
    phraseHints?: string[];
    /**
     * Required. Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
     */
    sampleRateHertz?: number;
  }
  /**
   * Represents an intent. Intents convert a number of user expressions or patterns into an action. An action is an extraction of a user command or sentence semantics.
   */
  export interface Schema$GoogleCloudDialogflowV2Intent {
    /**
     * Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
     */
    action?: string;
    /**
     * Optional. The list of platforms for which the first response will be taken from among the messages assigned to the DEFAULT_PLATFORM.
     */
    defaultResponsePlatforms?: string[];
    /**
     * Required. The name of this intent.
     */
    displayName?: string;
    /**
     * Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent.
     */
    events?: string[];
    /**
     * Read-only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
     */
    followupIntentInfo?: Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo[];
    /**
     * Optional. The list of context names required for this intent to be triggered. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    inputContextNames?: string[];
    /**
     * Optional. Indicates whether this is a fallback intent.
     */
    isFallback?: boolean;
    /**
     * Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
     */
    messages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_diabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
     */
    mlDisabled?: boolean;
    /**
     * The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    name?: string;
    /**
     * Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Optional. The collection of parameters associated with the intent.
     */
    parameters?: Schema$GoogleCloudDialogflowV2IntentParameter[];
    /**
     * Read-only after creation. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent.  It identifies the parent followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    parentFollowupIntentName?: string;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher priorities. If this is zero or unspecified, we use the default priority 500000.  Negative numbers mean that the intent is disabled.
     */
    priority?: number;
    /**
     * Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
     */
    resetContexts?: boolean;
    /**
     * Read-only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. We populate this field only in the output.  Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    rootFollowupIntentName?: string;
    /**
     * Optional. The collection of examples that the agent is trained on.
     */
    trainingPhrases?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrase[];
    /**
     * Optional. Indicates whether webhooks are enabled for the intent.
     */
    webhookState?: string;
  }
  /**
   * This message is a wrapper around a collection of intents.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentBatch {
    /**
     * A collection of intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
  }
  /**
   * Represents a single followup intent in the chain.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo {
    /**
     * The unique identifier of the followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    followupIntentName?: string;
    /**
     * The unique identifier of the followup intent&#39;s parent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
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
    linkOutSuggestion?: Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
    /**
     * The list card response for Actions on Google.
     */
    listSelect?: Schema$GoogleCloudDialogflowV2IntentMessageListSelect;
    /**
     * Returns a response containing a custom, platform-specific payload. See the Intent.Message.Platform type for a description of the structure that may be required for your platform.
     */
    payload?: {[key: string]: any};
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
    simpleResponses?: Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses;
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
    openUriAction?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
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
     * Optional. A text description of the image to be used for accessibility, e.g., screen readers.
     */
    accessibilityText?: string;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string;
  }
  /**
   * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string;
    /**
     * Required. The URI of the app or site to open when the user taps the suggestion chip.
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
     * Required. A unique key that will be sent back to the agent if this response is given.
     */
    key?: string;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item in dialog.
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
     * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
     */
    ssml?: string;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string;
  }
  /**
   * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses {
    /**
     * Required. The list of simple responses.
     */
    simpleResponses?: Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse[];
  }
  /**
   * The suggestion chip message that the user can tap to quickly post a reply to the conversation.
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
     * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
     */
    entityTypeDisplayName?: string;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean;
    /**
     * The unique identifier of this parameter.
     */
    name?: string;
    /**
     * Optional. The collection of prompts that the agent can present to the user in order to collect value for the parameter.
     */
    prompts?: string[];
    /**
     * Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as   `#context_name.parameter_name`.
     */
    value?: string;
  }
  /**
   * Represents an example that the agent is trained on.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string;
    /**
     * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase.  Note: The API does not automatically annotate training phrases like the Dialogflow Console does.  Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated.  If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set.  If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways:  -   `Part.text` is set to a part of the phrase that has no parameters. -   `Part.text` is set to a part of the phrase that you want to annotate,     and the `entity_type`, `alias`, and `user_defined` fields are all     set.
     */
    parts?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
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
     * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
     */
    alias?: string;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
     */
    entityType?: string;
    /**
     * Required. The text for this part.
     */
    text?: string;
    /**
     * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
     */
    userDefined?: boolean;
  }
  /**
   * The response message for Contexts.ListContexts.
   */
  export interface Schema$GoogleCloudDialogflowV2ListContextsResponse {
    /**
     * The list of contexts. There will be a maximum number of items returned based on the page_size field in the request.
     */
    contexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for EntityTypes.ListEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2ListEntityTypesResponse {
    /**
     * The list of agent entity types. There will be a maximum number of items returned based on the page_size field in the request.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2EntityType[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Intents.ListIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2ListIntentsResponse {
    /**
     * The list of agent intents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for SessionEntityTypes.ListSessionEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2SessionEntityType[];
  }
  /**
   * Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
   */
  export interface Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest {
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload.  In particular for the Telephony Gateway this field has the form: &lt;pre&gt;{  &quot;telephony&quot;: {    &quot;caller_id&quot;: &quot;+18558363987&quot;  } }&lt;/pre&gt; Note: The caller ID field (`caller_id`) will be redacted for Standard Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Enterprise Edition agents.
     */
    payload?: {[key: string]: any};
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
     */
    source?: string;
    /**
     * Optional. The version of the protocol used for this request. This field is AoG-specific.
     */
    version?: string;
  }
  /**
   * Instructs the speech synthesizer on how to generate the output audio content.
   */
  export interface Schema$GoogleCloudDialogflowV2OutputAudioConfig {
    /**
     * Required. Audio encoding of the synthesized audio content.
     */
    audioEncoding?: string;
    /**
     * Optional. The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice&#39;s natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality).
     */
    sampleRateHertz?: number;
    /**
     * Optional. Configuration of how speech should be synthesized.
     */
    synthesizeSpeechConfig?: Schema$GoogleCloudDialogflowV2SynthesizeSpeechConfig;
  }
  /**
   * Represents the query input. It can contain either:  1.  An audio config which     instructs the speech recognizer how to process the speech audio.  2.  A conversational query in the form of text,.  3.  An event that specifies which intent to trigger.
   */
  export interface Schema$GoogleCloudDialogflowV2QueryInput {
    /**
     * Instructs the speech recognizer how to process the speech audio.
     */
    audioConfig?: Schema$GoogleCloudDialogflowV2InputAudioConfig;
    /**
     * The event to be processed.
     */
    event?: Schema$GoogleCloudDialogflowV2EventInput;
    /**
     * The natural language text to be processed.
     */
    text?: Schema$GoogleCloudDialogflowV2TextInput;
  }
  /**
   * Represents the parameters of the conversational query.
   */
  export interface Schema$GoogleCloudDialogflowV2QueryParameters {
    /**
     * Optional. The collection of contexts to be activated before this query is executed.
     */
    contexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Optional. The geo location of this conversational query.
     */
    geoLocation?: Schema$GoogleTypeLatLng;
    /**
     * Optional. This field can be used to pass custom data into the webhook associated with the agent. Arbitrary JSON objects are supported.
     */
    payload?: {[key: string]: any};
    /**
     * Optional. Specifies whether to delete all contexts in the current session before the new ones are activated.
     */
    resetContexts?: boolean;
    /**
     * Optional. Configures the type of sentiment analysis to perform. If not provided, sentiment analysis is not performed.
     */
    sentimentAnalysisRequestConfig?: Schema$GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
    /**
     * Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2SessionEntityType[];
    /**
     * Optional. The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in agent settings is used.
     */
    timeZone?: string;
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
     * This field is set to: - `false` if the matched intent has required parameters and not all of    the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the    matched intent doesn&#39;t contain any required parameters.
     */
    allRequiredParamsPresent?: boolean;
    /**
     * The free-form diagnostic info. For example, this field could contain webhook call latency. The string keys of the Struct&#39;s fields map can change without notice.
     */
    diagnosticInfo?: {[key: string]: any};
    /**
     * The collection of rich messages to present to the user.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
     */
    fulfillmentText?: string;
    /**
     * The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name` and `webhook_state`.
     */
    intent?: Schema$GoogleCloudDialogflowV2Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
     */
    intentDetectionConfidence?: number;
    /**
     * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) for a list of the currently supported language codes.
     */
    languageCode?: string;
    /**
     * The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `&lt;parameter name&gt;.original` containing the original parameter values before the query.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * The collection of extracted parameters.
     */
    parameters?: {[key: string]: any};
    /**
     * The original conversational query text: - If natural language text was provided as input, `query_text` contains   a copy of the input. - If natural language speech audio was provided as input, `query_text`   contains the speech recognition result. If speech recognizer produced   multiple alternatives, a particular one is picked. - If an event was provided as input, `query_text` is not set.
     */
    queryText?: string;
    /**
     * The sentiment analysis result, which depends on the `sentiment_analysis_request_config` specified in the request.
     */
    sentimentAnalysisResult?: Schema$GoogleCloudDialogflowV2SentimentAnalysisResult;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set.  This field is not guaranteed to be accurate or set. In particular this field isn&#39;t set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
     */
    speechRecognitionConfidence?: number;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
     */
    webhookPayload?: {[key: string]: any};
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
     */
    webhookSource?: string;
  }
  /**
   * The request message for Agents.RestoreAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2RestoreAgentRequest {
    /**
     * The agent to restore.  Example for how to restore an agent via the command line: &lt;pre&gt;curl \   &#39;https://dialogflow.googleapis.com/v2/projects/&amp;lt;project_name&amp;gt;/agent:restore\    -X POST \    -H &#39;Authorization: Bearer &#39;$(gcloud auth application-default    print-access-token) \    -H &#39;Accept: application/json&#39; \    -H &#39;Content-Type: application/json&#39; \    --compressed \    --data-binary &quot;{        &#39;agentContent&#39;: &#39;$(cat &amp;lt;agent zip file&amp;gt; | base64 -w 0)&#39;    }&quot;&lt;/pre&gt;
     */
    agentContent?: string;
    /**
     * The URI to a Google Cloud Storage file containing the agent to restore. Note: The URI must start with &quot;gs://&quot;.
     */
    agentUri?: string;
  }
  /**
   * The response message for Agents.SearchAgents.
   */
  export interface Schema$GoogleCloudDialogflowV2SearchAgentsResponse {
    /**
     * The list of agents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    agents?: Schema$GoogleCloudDialogflowV2Agent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
   */
  export interface Schema$GoogleCloudDialogflowV2Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
     */
    magnitude?: number;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number;
  }
  /**
   * Configures the types of sentiment analysis to perform.
   */
  export interface Schema$GoogleCloudDialogflowV2SentimentAnalysisRequestConfig {
    /**
     * Optional. Instructs the service to perform sentiment analysis on `query_text`. If not provided, sentiment analysis is not performed on `query_text`.
     */
    analyzeQueryTextSentiment?: boolean;
  }
  /**
   * The result of sentiment analysis as configured by `sentiment_analysis_request_config`.
   */
  export interface Schema$GoogleCloudDialogflowV2SentimentAnalysisResult {
    /**
     * The sentiment analysis result for `query_text`.
     */
    queryTextSentiment?: Schema$GoogleCloudDialogflowV2Sentiment;
  }
  /**
   * Represents a session entity type.  Extends or replaces a developer entity type at the user session level (we refer to the entity types defined at the agent level as &quot;developer entity types&quot;).  Note: session entity types apply to all queries, regardless of the language.
   */
  export interface Schema$GoogleCloudDialogflowV2SessionEntityType {
    /**
     * Required. The collection of entities associated with this session entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates whether the additional data should override or supplement the developer entity type definition.
     */
    entityOverrideMode?: string;
    /**
     * Required. The unique identifier of this session entity type. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`.  `&lt;Entity Type Display Name&gt;` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string;
  }
  /**
   * Configuration of how speech should be synthesized.
   */
  export interface Schema$GoogleCloudDialogflowV2SynthesizeSpeechConfig {
    /**
     * Optional. An identifier which selects &#39;audio effects&#39; profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given.
     */
    effectsProfileId?: string[];
    /**
     * Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
     */
    pitch?: number;
    /**
     * Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values &lt; 0.25 or &gt; 4.0 will return an error.
     */
    speakingRate?: number;
    /**
     * Optional. The desired voice of the synthesized audio.
     */
    voice?: Schema$GoogleCloudDialogflowV2VoiceSelectionParams;
    /**
     * Optional. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there&#39;s usually no effective increase in loudness for any value greater than that.
     */
    volumeGainDb?: number;
  }
  /**
   * Represents the natural language text to be processed.
   */
  export interface Schema$GoogleCloudDialogflowV2TextInput {
    /**
     * Required. The language of this conversational query. See [Language Support](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string;
    /**
     * Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters.
     */
    text?: string;
  }
  /**
   * The request message for Agents.TrainAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2TrainAgentRequest {}
  /**
   * Description of which voice to use for speech synthesis.
   */
  export interface Schema$GoogleCloudDialogflowV2VoiceSelectionParams {
    /**
     * Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender.
     */
    name?: string;
    /**
     * Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
     */
    ssmlGender?: string;
  }
  /**
   * The request message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2WebhookRequest {
    /**
     * Optional. The contents of the original request that was passed to `[Streaming]DetectIntent` call.
     */
    originalDetectIntentRequest?: Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest;
    /**
     * The result of the conversational query or event processing. Contains the same value as `[Streaming]DetectIntentResponse.query_result`.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2QueryResult;
    /**
     * The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
     */
    responseId?: string;
    /**
     * The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;`.
     */
    session?: string;
  }
  /**
   * The response message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2WebhookResponse {
    /**
     * Optional. Makes the platform immediately invoke another `DetectIntent` call internally with the specified event as input.
     */
    followupEventInput?: Schema$GoogleCloudDialogflowV2EventInput;
    /**
     * Optional. The collection of rich messages to present to the user. This value is passed directly to `QueryResult.fulfillment_messages`.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * Optional. The text to be shown on the screen. This value is passed directly to `QueryResult.fulfillment_text`.
     */
    fulfillmentText?: string;
    /**
     * Optional. The collection of output contexts. This value is passed directly to `QueryResult.output_contexts`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_payload`. See the related `fulfillment_messages[i].payload field`, which may be used as an alternative to this field.  This field can be used for Actions on Google responses. It should have a structure similar to the JSON message shown here. For more information, see [Actions on Google Webhook Format](https://developers.google.com/actions/dialogflow/webhook) &lt;pre&gt;{   &quot;google&quot;: {     &quot;expectUserResponse&quot;: true,     &quot;richResponse&quot;: {       &quot;items&quot;: [         {           &quot;simpleResponse&quot;: {             &quot;textToSpeech&quot;: &quot;this is a simple response&quot;           }         }       ]     }   } }&lt;/pre&gt;
     */
    payload?: {[key: string]: any};
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_source`.
     */
    source?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any};
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any};
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). The error model is designed to be:  - Simple to use and understand for most users - Flexible enough to meet unexpected needs  # Overview  The `Status` message contains three pieces of data: error code, error message, and error details. The error code should be an enum value of google.rpc.Code, but it may accept additional error codes if needed.  The error message should be a developer-facing English message that helps developers *understand* and *resolve* the error. If a localized user-facing error message is needed, put the localized message in the error details or localize it in the client. The optional error details may contain arbitrary information about the error. There is a predefined set of error detail types in the package `google.rpc` that can be used for common error conditions.  # Language mapping  The `Status` message is the logical representation of the error model, but it is not necessarily the actual wire format. When the `Status` message is exposed in different client libraries and different wire protocols, it can be mapped differently. For example, it will likely be mapped to some exceptions in Java, but more likely mapped to some error codes in C.  # Other uses  The error model and the `Status` message can be used in a variety of environments, either with or without APIs, to provide a consistent developer experience across different environments.  Example uses of this error model include:  - Partial errors. If a service needs to return partial errors to the client,     it may embed the `Status` in the normal response to indicate the partial     errors.  - Workflow errors. A typical workflow has multiple steps. Each step may     have a `Status` message for error reporting.  - Batch operations. If a client uses batch request and batch response, the     `Status` message should be used directly inside batch response, one for     each error sub-response.  - Asynchronous operations. If an API call embeds asynchronous operation     results in its response, the status of those operations should be     represented directly using the `Status` message.  - Logging. If some API errors are stored in logs, the message `Status` could     be used directly after any stripping needed for security/privacy reasons.
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}>;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * An object representing a latitude/longitude pair. This is expressed as a pair of doubles representing degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the &lt;a href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84 standard&lt;/a&gt;. Values must be within normalized ranges.
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
    context: APIRequestContext;
    agent: Resource$Projects$Agent;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.agent = new Resource$Projects$Agent(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
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
      params?: Params$Resource$Projects$Getagent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Agent>;
    getAgent(
      params: Params$Resource$Projects$Getagent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    getAgent(
      params: Params$Resource$Projects$Getagent,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    getAgent(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    getAgent(
      paramsOrCallback?:
        | Params$Resource$Projects$Getagent
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2Agent> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getagent;
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
            url: (rootUrl + '/v2/{+parent}/agent').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2Agent>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Agent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Getagent
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project that the agent to fetch is associated with. Format: `projects/<Project ID>`.
     */
    parent?: string;
  }

  export class Resource$Projects$Agent {
    context: APIRequestContext;
    entityTypes: Resource$Projects$Agent$Entitytypes;
    intents: Resource$Projects$Agent$Intents;
    sessions: Resource$Projects$Agent$Sessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entityTypes = new Resource$Projects$Agent$Entitytypes(this.context);
      this.intents = new Resource$Projects$Agent$Intents(this.context);
      this.sessions = new Resource$Projects$Agent$Sessions(this.context);
    }

    /**
     * dialogflow.projects.agent.export
     * @desc Exports the specified agent to a ZIP file.  Operation <response: ExportAgentResponse>
     * @alias dialogflow.projects.agent.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project that the agent to export is associated with. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2ExportAgentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(
      params?: Params$Resource$Projects$Agent$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    export(
      params: Params$Resource$Projects$Agent$Export,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      params: Params$Resource$Projects$Agent$Export,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Export
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Export;
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
            url: (rootUrl + '/v2/{+parent}/agent:export').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.import
     * @desc Imports the specified agent from a ZIP file.  Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest.  Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project that the agent to import is associated with. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2ImportAgentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import(
      params?: Params$Resource$Projects$Agent$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Agent$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Agent$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Import;
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
            url: (rootUrl + '/v2/{+parent}/agent:import').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.restore
     * @desc Restores the specified agent from a ZIP file.  Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted.  Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.restore
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project that the agent to restore is associated with. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2RestoreAgentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    restore(
      params?: Params$Resource$Projects$Agent$Restore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    restore(
      params: Params$Resource$Projects$Agent$Restore,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      params: Params$Resource$Projects$Agent$Restore,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Restore
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Restore;
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
            url: (rootUrl + '/v2/{+parent}/agent:restore').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.search
     * @desc Returns the list of agents.  Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
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
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>;
    search(
      params: Params$Resource$Projects$Agent$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2SearchAgentsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SearchAgentsResponse
      >
    ): void;
    search(
      params: Params$Resource$Projects$Agent$Search,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SearchAgentsResponse
      >
    ): void;
    search(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SearchAgentsResponse
      >
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Search
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2SearchAgentsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2SearchAgentsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SearchAgentsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDialogflowV2SearchAgentsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Search;
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
            url: (rootUrl + '/v2/{+parent}/agent:search').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2SearchAgentsResponse
        >(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.train
     * @desc Trains the specified agent.  Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.train
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project that the agent to train is associated with. Format: `projects/<Project ID>`.
     * @param {().GoogleCloudDialogflowV2TrainAgentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    train(
      params?: Params$Resource$Projects$Agent$Train,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    train(
      params: Params$Resource$Projects$Agent$Train,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      params: Params$Resource$Projects$Agent$Train,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Train
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Train;
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
            url: (rootUrl + '/v2/{+parent}/agent:train').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Export
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project that the agent to export is associated with. Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2ExportAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Import
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project that the agent to import is associated with. Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2ImportAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Restore
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project that the agent to restore is associated with. Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2RestoreAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Search
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The project to list agents from. Format: `projects/<Project ID or '-'>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Train
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project that the agent to train is associated with. Format: `projects/<Project ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2TrainAgentRequest;
  }

  export class Resource$Projects$Agent$Entitytypes {
    context: APIRequestContext;
    entities: Resource$Projects$Agent$Entitytypes$Entities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entities = new Resource$Projects$Agent$Entitytypes$Entities(
        this.context
      );
    }

    /**
     * dialogflow.projects.agent.entityTypes.batchDelete
     * @desc Deletes entity types in the specified agent.  Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.entityTypes.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
      params?: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Batchdelete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Batchdelete;
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
            url: (rootUrl + '/v2/{+parent}/entityTypes:batchDelete').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.entityTypes.batchUpdate
     * @desc Updates/Creates multiple entity types in the specified agent.  Operation <response: BatchUpdateEntityTypesResponse>
     * @alias dialogflow.projects.agent.entityTypes.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the agent to update or create entity types in. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
      params?: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Batchupdate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Batchupdate;
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
            url: (rootUrl + '/v2/{+parent}/entityTypes:batchUpdate').replace(
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
          callback
        );
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
     * @param {string=} params.languageCode Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent Required. The agent to create a entity type for. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2EntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Agent$Entitytypes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>;
    create(
      params: Params$Resource$Projects$Agent$Entitytypes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Entitytypes$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Create;
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
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters
        );
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
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Entitytypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Entitytypes$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {string=} params.languageCode Optional. The language to retrieve entity synonyms for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name Required. The name of the entity type. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Agent$Entitytypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>;
    get(
      params: Params$Resource$Projects$Agent$Entitytypes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Entitytypes$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters
        );
      }
    }

    /**
     * dialogflow.projects.agent.entityTypes.list
     * @desc Returns the list of all entity types in the specified agent.
     * @alias dialogflow.projects.agent.entityTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode Optional. The language to list entity synonyms for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The agent to list all entity types from. Format: `projects/<Project ID>/agent`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Agent$Entitytypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>;
    list(
      params: Params$Resource$Projects$Agent$Entitytypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Entitytypes$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$List
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$List;
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
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2ListEntityTypesResponse
        >(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.entityTypes.patch
     * @desc Updates the specified entity type.
     * @alias dialogflow.projects.agent.entityTypes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2EntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Agent$Entitytypes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>;
    patch(
      params: Params$Resource$Projects$Agent$Entitytypes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Entitytypes$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Patch;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Entitytypes$Batchdelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Batchupdate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the agent to update or create entity types in. Format: `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The agent to create a entity type for. Format: `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2EntityType;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The language to retrieve entity synonyms for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The name of the entity type. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The language to list entity synonyms for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The agent to list all entity types from. Format: `projects/<Project ID>/agent`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2EntityType;
  }

  export class Resource$Projects$Agent$Entitytypes$Entities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dialogflow.projects.agent.entityTypes.entities.batchCreate
     * @desc Creates multiple new entities in the specified entity type.  Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.entityTypes.entities.batchCreate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the entity type to create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     * @param {().GoogleCloudDialogflowV2BatchCreateEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate(
      params?: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchCreate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate;
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
            url: (rootUrl + '/v2/{+parent}/entities:batchCreate').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.entityTypes.entities.batchDelete
     * @desc Deletes entities in the specified entity type.  Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.entityTypes.entities.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the entity type to delete entries for. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     * @param {().GoogleCloudDialogflowV2BatchDeleteEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
      params?: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete;
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
            url: (rootUrl + '/v2/{+parent}/entities:batchDelete').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.entityTypes.entities.batchUpdate
     * @desc Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.  Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.entityTypes.entities.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the entity type to update or create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     * @param {().GoogleCloudDialogflowV2BatchUpdateEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
      params?: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate;
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
            url: (rootUrl + '/v2/{+parent}/entities:batchUpdate').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the entity type to create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchCreateEntitiesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the entity type to delete entries for. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchDeleteEntitiesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the entity type to update or create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchUpdateEntitiesRequest;
  }

  export class Resource$Projects$Agent$Intents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dialogflow.projects.agent.intents.batchDelete
     * @desc Deletes intents in the specified agent.  Operation <response: google.protobuf.Empty>
     * @alias dialogflow.projects.agent.intents.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2BatchDeleteIntentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
      params?: Params$Resource$Projects$Agent$Intents$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
      params: Params$Resource$Projects$Agent$Intents$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Intents$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Batchdelete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Batchdelete;
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
            url: (rootUrl + '/v2/{+parent}/intents:batchDelete').replace(
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.intents.batchUpdate
     * @desc Updates/Creates multiple intents in the specified agent.  Operation <response: BatchUpdateIntentsResponse>
     * @alias dialogflow.projects.agent.intents.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the agent to update or create intents in. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2BatchUpdateIntentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
      params?: Params$Resource$Projects$Agent$Intents$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Intents$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Intents$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Batchupdate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Batchupdate;
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
            url: (rootUrl + '/v2/{+parent}/intents:batchUpdate').replace(
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
          callback
        );
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
     * @param {string=} params.languageCode Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent Required. The agent to create a intent for. Format: `projects/<Project ID>/agent`.
     * @param {().GoogleCloudDialogflowV2Intent} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Agent$Intents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>;
    create(
      params: Params$Resource$Projects$Agent$Intents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Intents$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Create;
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
            url: (rootUrl + '/v2/{+parent}/intents').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters
        );
      }
    }

    /**
     * dialogflow.projects.agent.intents.delete
     * @desc Deletes the specified intent and its direct or indirect followup intents.
     * @alias dialogflow.projects.agent.intents.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Agent$Intents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Intents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Intents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {string=} params.languageCode Optional. The language to retrieve training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name Required. The name of the intent. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Agent$Intents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>;
    get(
      params: Params$Resource$Projects$Agent$Intents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Intents$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters
        );
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
     * @param {string=} params.languageCode Optional. The language to list training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The agent to list all intents from. Format: `projects/<Project ID>/agent`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Agent$Intents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListIntentsResponse>;
    list(
      params: Params$Resource$Projects$Agent$Intents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListIntentsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListIntentsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Intents$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListIntentsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListIntentsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$List
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListIntentsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListIntentsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListIntentsResponse
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2ListIntentsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$List;
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
            url: (rootUrl + '/v2/{+parent}/intents').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListIntentsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2ListIntentsResponse
        >(parameters);
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
     * @param {string=} params.languageCode Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2Intent} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Agent$Intents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>;
    patch(
      params: Params$Resource$Projects$Agent$Intents$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Intents$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Patch;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Intents$Batchdelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchDeleteIntentsRequest;
  }
  export interface Params$Resource$Projects$Agent$Intents$Batchupdate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the agent to update or create intents in. Format: `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchUpdateIntentsRequest;
  }
  export interface Params$Resource$Projects$Agent$Intents$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The agent to create a intent for. Format: `projects/<Project ID>/agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Intent;
  }
  export interface Params$Resource$Projects$Agent$Intents$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language to retrieve training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The name of the intent. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language to list training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The agent to list all intents from. Format: `projects/<Project ID>/agent`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow-enterprise/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Intent;
  }

  export class Resource$Projects$Agent$Sessions {
    context: APIRequestContext;
    contexts: Resource$Projects$Agent$Sessions$Contexts;
    entityTypes: Resource$Projects$Agent$Sessions$Entitytypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.contexts = new Resource$Projects$Agent$Sessions$Contexts(
        this.context
      );
      this.entityTypes = new Resource$Projects$Agent$Sessions$Entitytypes(
        this.context
      );
    }

    /**
     * dialogflow.projects.agent.sessions.deleteContexts
     * @desc Deletes all active contexts in the specified session.
     * @alias dialogflow.projects.agent.sessions.deleteContexts
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteContexts(
      params?: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    deleteContexts(
      params: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      params: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Deletecontexts
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Deletecontexts;
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
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.sessions.detectIntent
     * @desc Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries.
     * @alias dialogflow.projects.agent.sessions.detectIntent
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.session Required. The name of the session this query is sent to. Format: `projects/<Project ID>/agent/sessions/<Session ID>`. It's up to the API caller to choose an appropriate session ID. It can be a random number or some type of user identifier (preferably hashed). The length of the session ID must not exceed 36 bytes.
     * @param {().GoogleCloudDialogflowV2DetectIntentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    detectIntent(
      params?: Params$Resource$Projects$Agent$Sessions$Detectintent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2DetectIntentResponse>;
    detectIntent(
      params: Params$Resource$Projects$Agent$Sessions$Detectintent,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2DetectIntentResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2DetectIntentResponse
      >
    ): void;
    detectIntent(
      params: Params$Resource$Projects$Agent$Sessions$Detectintent,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2DetectIntentResponse
      >
    ): void;
    detectIntent(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2DetectIntentResponse
      >
    ): void;
    detectIntent(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Detectintent
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2DetectIntentResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2DetectIntentResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2DetectIntentResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDialogflowV2DetectIntentResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Detectintent;
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
            url: (rootUrl + '/v2/{+session}:detectIntent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2DetectIntentResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2DetectIntentResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Deletecontexts
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Detectintent
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the session this query is sent to. Format: `projects/<Project ID>/agent/sessions/<Session ID>`. It's up to the API caller to choose an appropriate session ID. It can be a random number or some type of user identifier (preferably hashed). The length of the session ID must not exceed 36 bytes.
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2DetectIntentRequest;
  }

  export class Resource$Projects$Agent$Sessions$Contexts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dialogflow.projects.agent.sessions.contexts.create
     * @desc Creates a context.  If the specified context already exists, overrides the context.
     * @alias dialogflow.projects.agent.sessions.contexts.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     * @param {().GoogleCloudDialogflowV2Context} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$Create;
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
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
      }
    }

    /**
     * dialogflow.projects.agent.sessions.contexts.delete
     * @desc Deletes the specified context.
     * @alias dialogflow.projects.agent.sessions.contexts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the context to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {string} params.name Required. The name of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
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
     * @param {string} params.parent Required. The session to list all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListContextsResponse>;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListContextsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListContextsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListContextsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListContextsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$List
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListContextsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListContextsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListContextsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDialogflowV2ListContextsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$List;
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
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListContextsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2ListContextsResponse
        >(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.sessions.contexts.patch
     * @desc Updates the specified context.
     * @alias dialogflow.projects.agent.sessions.contexts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.  The `Context ID` is always converted to lowercase, may only contain characters in [a-zA-Z0-9_-%] and may be at most 250 bytes long.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2Context} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$Patch;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Context;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the context to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The unique identifier of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.  The `Context ID` is always converted to lowercase, may only contain characters in [a-zA-Z0-9_-%] and may be at most 250 bytes long.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Context;
  }

  export class Resource$Projects$Agent$Sessions$Entitytypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dialogflow.projects.agent.sessions.entityTypes.create
     * @desc Creates a session entity type.  If the specified session entity type already exists, overrides the session entity type.
     * @alias dialogflow.projects.agent.sessions.entityTypes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     * @param {().GoogleCloudDialogflowV2SessionEntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$Create;
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
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2SessionEntityType
        >(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.sessions.entityTypes.delete
     * @desc Deletes the specified session entity type.
     * @alias dialogflow.projects.agent.sessions.entityTypes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * @param {string} params.name Required. The name of the session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2SessionEntityType
        >(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.sessions.entityTypes.list
     * @desc Returns the list of all session entity types in the specified session.
     * @alias dialogflow.projects.agent.sessions.entityTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent Required. The session to list all session entity types from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
    >;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$List
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$List;
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
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
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
        createAPIRequest<
          Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse
        >(parameters);
      }
    }

    /**
     * dialogflow.projects.agent.sessions.entityTypes.patch
     * @desc Updates the specified session entity type.
     * @alias dialogflow.projects.agent.sessions.entityTypes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The unique identifier of this session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.  `<Entity Type Display Name>` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
     * @param {().GoogleCloudDialogflowV2SessionEntityType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDialogflowV2SessionEntityType
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDialogflowV2SessionEntityType
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2SessionEntityType;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all session entity types from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The unique identifier of this session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.  `<Entity Type Display Name>` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2SessionEntityType;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dialogflow.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias dialogflow.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
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
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
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

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
