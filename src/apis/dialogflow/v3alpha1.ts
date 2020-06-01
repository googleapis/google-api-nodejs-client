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
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace dialogflow_v3alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v3alpha1';
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
   * const dialogflow = google.dialogflow('v3alpha1');
   *
   * @namespace dialogflow
   * @type {Function}
   * @version v3alpha1
   * @variation v3alpha1
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
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
    /**
     * Uncompressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in ExportAgentRequest.
     */
    agentUri?: string | null;
  }
  /**
   * Represents page information communicated to and from the webhook.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfo {
    /**
     * Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects/&lt;Project ID&gt;/locations/&lt;Location ID&gt;/agents/&lt;Agent ID&gt;/flows/&lt;Flow ID&gt;/pages/&lt;Page ID&gt;`.
     */
    currentPage?: string | null;
    /**
     * Optional for both WebhookRequest and WebhookResponse. Information about the form.
     */
    formInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
    /**
     * Deprecated. Please use WebhookResponse.target_page or WebhookResponse.target_flow instead.  Optional for WebhookResponse. The unique identifier of the next page. This field can be set by the webhook to immediately transition to a page different from `current_page`. Format: `projects/&lt;Project ID&gt;/locations/&lt;Location ID&gt;/agents/&lt;Agent ID&gt;/flows/&lt;Flow ID&gt;/pages/&lt;Page ID&gt;`.
     */
    nextPage?: string | null;
  }
  /**
   * Represents form information.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfo {
    /**
     * Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter.
     */
    parameterInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo[];
    /**
     * Always present for WebhookRequest. Ignored for WebhookResponse. The current state of the form.
     */
    state?: string | null;
  }
  /**
   * Represents parameter information.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
    /**
     * Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook.
     */
    displayName?: string | null;
    /**
     * Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn.
     */
    justCollected?: boolean | null;
    /**
     * Not set for WebhookRequest. Optional for WebhookResponse. The prompt to send to the user to fill a required form parameter. This field can be set by the webhook. If set, this field overrides the prompt defined for the form parameter.
     */
    prompt?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
    /**
     * Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
     */
    required?: boolean | null;
    /**
     * Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored.
     */
    state?: string | null;
    /**
     * Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value.
     */
    value?: any | null;
  }
  /**
   * Represents a response message that can be returned by a conversational agent.  Response messages are also used for output audio synthesis. The approach is as follows:  * If at least one OutputAudioText response is present, then all   OutputAudioText responses are linearly concatenated, and the result is used   for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the   concatenated result is treated as SSML; otherwise, the result is treated as   either text or SSML as appropriate. The agent designer should ideally use   either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is   used for output audio synthesis.  This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage {
    /**
     * Indicates that the conversation succeeded.
     */
    conversationSuccess?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
    /**
     * Hands off conversation to a human agent.
     */
    humanAgentHandoff?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageHumanAgentHandoff;
    /**
     * Returns a response containing a custom, platform-specific payload.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Returns a text response.
     */
    text?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageText;
  }
  /**
   * Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about.  Dialogflow only uses this to determine which conversations should be counted as successful and doesn&#39;t process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don&#39;t return ConversationSuccess.  You may set this, for example: * In the entry_fulfillment of a Page if   entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer   issue.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess {
    /**
     * Custom metadata. Dialogflow doesn&#39;t impose any structure on this.
     */
    metadata?: {[key: string]: any} | null;
  }
  /**
   * Indicates that the conversation should be handed off to a human agent.  Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.  You may set this, for example: * In the entry_fulfillment of a Page if   entering the page indicates something went extremely wrong in the   conversation. * In a webhook response when you determine that the customer issue can only   be handled by a human.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageHumanAgentHandoff {
    /**
     * Custom metadata for your handoff procedure. Dialogflow doesn&#39;t impose any structure on this.
     */
    metadata?: {[key: string]: any} | null;
  }
  /**
   * The text response message.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageText {
    /**
     * A collection of text responses.
     */
    text?: string[] | null;
  }
  /**
   * Represents session information communicated to and from the webhook.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1SessionInfo {
    /**
     * Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters&#39; display names.
     */
    parameters?: {[key: string]: any} | null;
    /**
     * Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a user. Format: `projects/&lt;Project ID&gt;/locations/&lt;Location ID&gt;/agents/&lt;Agent ID&gt;/sessions/&lt;Session ID&gt;`.
     */
    session?: string | null;
  }
  /**
   * The request message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequest {
    /**
     * Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller.
     */
    detectIntentResponseId?: string | null;
    /**
     * Always present. Information about the fulfillment that triggered this webhook call.
     */
    fulfillmentInfo?: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
    /**
     * Information about the last matched intent.
     */
    intentInfo?: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
    /**
     * The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response;
     */
    messages?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
    /**
     * Information about page status.
     */
    pageInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfo;
    /**
     * Custom data set in QueryParameters.payload.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Information about session status.
     */
    sessionInfo?: Schema$GoogleCloudDialogflowCxV3beta1SessionInfo;
  }
  /**
   * Represents fulfillment information communicated to the webhook.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {
    /**
     * Always present. The tag used to identify which fulfillment is being called.
     */
    tag?: string | null;
  }
  /**
   * Represents intent information communicated to the webhook.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {
    /**
     * Always present. The unique identifier of the last matched intent. Format: `projects/&lt;Project ID&gt;/locations/&lt;Location ID&gt;/agents/&lt;Agent ID&gt;/intents/&lt;Intent ID&gt;`.
     */
    lastMatchedIntent?: string | null;
    /**
     * Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user&#39;s utterance. All parameters defined in the matched intent that are identified will be surfaced here.
     */
    parameters?: {
      [
        key: string
      ]: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue;
    } | null;
  }
  /**
   * Represents a value for an intent parameter.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue {
    /**
     * Always present. Original text value extracted from user utterance.
     */
    originalValue?: string | null;
    /**
     * Always present. Structured value for the parameter extracted from user utterance.
     */
    resolvedValue?: any | null;
  }
  /**
   * The response message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookResponse {
    /**
     * The fulfillment response to send to the user. This field can be omitted by the webhook if it does not intend to send any response to the user.
     */
    fulfillmentResponse?: Schema$GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
    /**
     * Information about page status. This field can be omitted by the webhook if it does not intend to modify page status.
     */
    pageInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfo;
    /**
     * Value to append directly to QueryResult.webhook_payloads.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Information about session status. This field can be omitted by the webhook if it does not intend to modify session status.
     */
    sessionInfo?: Schema$GoogleCloudDialogflowCxV3beta1SessionInfo;
    /**
     * The target flow to transition to. Format: `projects/&lt;Project ID&gt;/locations/&lt;Location ID&gt;/agents/&lt;Agent ID&gt;/flows/&lt;Flow ID&gt;`.
     */
    targetFlow?: string | null;
    /**
     * The target page to transition to. Format: `projects/&lt;Project ID&gt;/locations/&lt;Location ID&gt;/agents/&lt;Agent ID&gt;/flows/&lt;Flow ID&gt;/pages/&lt;Page ID&gt;`.
     */
    targetPage?: string | null;
  }
  /**
   * Represents a fulfillment response to the user.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse {
    /**
     * Merge behavior for `messages`.
     */
    mergeBehavior?: string | null;
    /**
     * The list of rich message responses to present to the user.
     */
    messages?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
  }
  /**
   * Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
   */
  export interface Schema$GoogleCloudDialogflowV2AnnotatedMessagePart {
    /**
     * The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity.
     */
    entityType?: string | null;
    /**
     * The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: &lt;pre&gt; {   &quot;amount&quot;: 5,   &quot;currency&quot;: &quot;USD&quot; } &lt;/pre&gt;
     */
    formattedValue?: any | null;
    /**
     * A part of a message possibly annotated with an entity.
     */
    text?: string | null;
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
   * Represents an annotated conversation dataset. ConversationDataset can have multiple AnnotatedConversationDataset, each of them represents one result from one annotation task. AnnotatedConversationDataset can only be generated from annotation task, which will be triggered by LabelConversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1AnnotatedConversationDataset {
    /**
     * Output only. Number of examples that have annotations in the annotated conversation dataset.
     */
    completedExampleCount?: string | null;
    /**
     * Output only. Creation time of this annotated conversation dataset.
     */
    createTime?: string | null;
    /**
     * Optional. The description of the annotated conversation dataset. Maximum of 10000 bytes.
     */
    description?: string | null;
    /**
     * Required. The display name of the annotated conversation dataset. It&#39;s specified when user starts an annotation task. Maximum of 64 bytes.
     */
    displayName?: string | null;
    /**
     * Output only. Number of examples in the annotated conversation dataset.
     */
    exampleCount?: string | null;
    /**
     * Output only. AnnotatedConversationDataset resource name. Format: `projects/&lt;Project ID&gt;/conversationDatasets/&lt;Conversation Dataset ID&gt;/annotatedConversationDatasets/&lt;Annotated Conversation Dataset ID&gt;`
     */
    name?: string | null;
    /**
     * Output only. Question type name that identifies a labeling task. A question is a single task that a worker answers. A question type is set of related questions. Each question belongs to a particular question type. It can be used in CrowdCompute UI to filter and manage labeling tasks.
     */
    questionTypeName?: string | null;
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
     * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
     */
    lifespanCount?: number | null;
    /**
     * Required. The unique identifier of the context. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`.  The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long.  If `Environment ID` is not specified, we assume default &#39;draft&#39; environment. If `User ID` is not specified, we assume default &#39;-&#39; user.  The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names:  * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     */
    name?: string | null;
    /**
     * Optional. The collection of parameters associated with this context.  Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs:  -   MapKey type: string -   MapKey value: parameter name -   MapValue type:     -   If parameter&#39;s entity type is a composite entity: map     -   Else: string or number, depending on parameter value type -   MapValue value:     -   If parameter&#39;s entity type is a composite entity:         map from composite entity property names to property values     -   Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * Represents an entity type. Entity types serve as a tool for extracting parameter values from natural language queries.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityType {
    /**
     * Optional. Indicates whether the entity type can be automatically expanded.
     */
    autoExpansionMode?: string | null;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string | null;
    /**
     * Optional. Enables fuzzy entity extraction during classification.
     */
    enableFuzzyExtraction?: boolean | null;
    /**
     * Optional. The collection of entity entries associated with the entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: string | null;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
     */
    name?: string | null;
  }
  /**
   * An **entity entry** for an associated entity type.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity {
    /**
     * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*.  For `KIND_LIST` entity types:  *   This collection must contain exactly one synonym equal to `value`.
     */
    synonyms?: string[] | null;
    /**
     * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*.  For `KIND_MAP` entity types:  *   A reference value to be used in place of synonyms.  For `KIND_LIST` entity types:  *   A string that can contain references to other entity types (with or     without aliases).
     */
    value?: string | null;
  }
  /**
   * Events allow for matching intents by event name instead of the natural language input. For instance, input `&lt;event: { name: &quot;welcome_event&quot;, parameters: { name: &quot;Sam&quot; } }&gt;` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `&quot;Hello #welcome_event.name! What can I do for you today?&quot;`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EventInput {
    /**
     * Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string | null;
    /**
     * Required. The unique identifier of the event.
     */
    name?: string | null;
    /**
     * The collection of parameters associated with the event.  Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs:  -   MapKey type: string -   MapKey value: parameter name -   MapValue type:     -   If parameter&#39;s entity type is a composite entity: map     -   Else: string or number, depending on parameter value type -   MapValue value:     -   If parameter&#39;s entity type is a composite entity:         map from composite entity property names to property values     -   Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ExportAgentResponse {
    /**
     * Zip compressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
     */
    agentUri?: string | null;
  }
  /**
   * Represents an intent. Intents convert a number of user expressions or patterns into an action. An action is an extraction of a user command or sentence semantics.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Intent {
    /**
     * Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
     */
    action?: string | null;
    /**
     * Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
     */
    defaultResponsePlatforms?: string[] | null;
    /**
     * Required. The name of this intent.
     */
    displayName?: string | null;
    /**
     * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
     */
    endInteraction?: boolean | null;
    /**
     * Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters.
     */
    events?: string[] | null;
    /**
     * Output only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
     */
    followupIntentInfo?: Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];
    /**
     * Optional. The list of context names required for this intent to be triggered. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    inputContextNames?: string[] | null;
    /**
     * Optional. Indicates whether this is a fallback intent.
     */
    isFallback?: boolean | null;
    /**
     * Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
     */
    messages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
     */
    mlDisabled?: boolean | null;
    /**
     * Optional. Indicates whether Machine Learning is enabled for the intent. Note: If `ml_enabled` setting is set to false, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled` field instead. NOTE: If both `ml_enabled` and `ml_disabled` are either not set or false, then the default value is determined as follows: - Before April 15th, 2018 the default is:   ml_enabled = false / ml_disabled = true. - After April 15th, 2018 the default is:   ml_enabled = true / ml_disabled = false.
     */
    mlEnabled?: boolean | null;
    /**
     * Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    name?: string | null;
    /**
     * Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. The collection of parameters associated with the intent.
     */
    parameters?: Schema$GoogleCloudDialogflowV2beta1IntentParameter[];
    /**
     * Optional. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent.  It identifies the parent followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    parentFollowupIntentName?: string | null;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher priorities.  - If the supplied value is unspecified or 0, the service   translates the value to 500,000, which corresponds to the   `Normal` priority in the console. - If the supplied value is negative, the intent is ignored   in runtime detect intent requests.
     */
    priority?: number | null;
    /**
     * Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
     */
    resetContexts?: boolean | null;
    /**
     * Output only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent.  Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    rootFollowupIntentName?: string | null;
    /**
     * Optional. The collection of examples that the agent is trained on.
     */
    trainingPhrases?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];
    /**
     * Optional. Indicates whether webhooks are enabled for the intent.
     */
    webhookState?: string | null;
  }
  /**
   * Represents a single followup intent in the chain.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
    /**
     * The unique identifier of the followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    followupIntentName?: string | null;
    /**
     * The unique identifier of the followup intent&#39;s parent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    parentFollowupIntentName?: string | null;
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
     * Browse carousel card for Actions on Google.
     */
    browseCarouselCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
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
     * The media content card for Actions on Google.
     */
    mediaContent?: Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
    /**
     * A custom platform-specific response.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. The platform that this message is intended for.
     */
    platform?: string | null;
    /**
     * Displays quick replies.
     */
    quickReplies?: Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
    /**
     * Rich Business Messaging (RBM) carousel rich card response.
     */
    rbmCarouselRichCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
    /**
     * Standalone Rich Business Messaging (RBM) rich card response.
     */
    rbmStandaloneRichCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
    /**
     * Rich Business Messaging (RBM) text response.  RBM allows businesses to send enriched and branded versions of SMS. See https://jibe.google.com/business-messaging.
     */
    rbmText?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmText;
    /**
     * Returns a voice or text-only response for Actions on Google.
     */
    simpleResponses?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
    /**
     * Displays suggestion chips for Actions on Google.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
    /**
     * Table card for Actions on Google.
     */
    tableCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCard;
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
    formattedText?: string | null;
    /**
     * Optional. The image for the card.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string | null;
    /**
     * Optional. The title of the card.
     */
    title?: string | null;
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
    title?: string | null;
  }
  /**
   * Opens the given URI.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {
    /**
     * Required. The HTTP or HTTPS scheme URI.
     */
    uri?: string | null;
  }
  /**
   * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard {
    /**
     * Optional. Settings for displaying the image. Applies to every image in items.
     */
    imageDisplayOptions?: string | null;
    /**
     * Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten.
     */
    items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
  }
  /**
   * Browsing carousel tile
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
    /**
     * Optional. Description of the carousel item. Maximum of four lines of text.
     */
    description?: string | null;
    /**
     * Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
     */
    footer?: string | null;
    /**
     * Optional. Hero image for the carousel item.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Action to present to the user.
     */
    openUriAction?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
    /**
     * Required. Title of the carousel item. Maximum of two lines of text.
     */
    title?: string | null;
  }
  /**
   * Actions on Google action to open a given url.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
    /**
     * Required. URL
     */
    url?: string | null;
    /**
     * Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.
     */
    urlTypeHint?: string | null;
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
    imageUri?: string | null;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string | null;
    /**
     * Optional. The title of the card.
     */
    title?: string | null;
  }
  /**
   * Optional. Contains information about a button.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton {
    /**
     * Optional. The text to send back to the Dialogflow API or a URI to open.
     */
    postback?: string | null;
    /**
     * Optional. The text to show on the button.
     */
    text?: string | null;
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
    description?: string | null;
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
    title?: string | null;
  }
  /**
   * Column properties for TableCard.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageColumnProperties {
    /**
     * Required. Column heading.
     */
    header?: string | null;
    /**
     * Optional. Defines text alignment for all cells in this column.
     */
    horizontalAlignment?: string | null;
  }
  /**
   * The image response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageImage {
    /**
     * A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect.
     */
    accessibilityText?: string | null;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string | null;
  }
  /**
   * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string | null;
    /**
     * Required. The URI of the app or site to open when the user taps the suggestion chip.
     */
    uri?: string | null;
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
     * Optional. Subtitle of the list.
     */
    subtitle?: string | null;
    /**
     * Optional. The overall title of the list.
     */
    title?: string | null;
  }
  /**
   * An item in the list.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
    /**
     * Optional. The main text describing the item.
     */
    description?: string | null;
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
    title?: string | null;
  }
  /**
   * The media content card for Actions on Google.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContent {
    /**
     * Required. List of media objects.
     */
    mediaObjects?: Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject[];
    /**
     * Optional. What type of media is the content (ie &quot;audio&quot;).
     */
    mediaType?: string | null;
  }
  /**
   * Response media object for media content card.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
    /**
     * Required. Url where the media is stored.
     */
    contentUrl?: string | null;
    /**
     * Optional. Description of media card.
     */
    description?: string | null;
    /**
     * Optional. Icon to display above media content.
     */
    icon?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. Image to display above media content.
     */
    largeImage?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Name of media card.
     */
    name?: string | null;
  }
  /**
   * The quick replies response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
    /**
     * Optional. The collection of quick replies.
     */
    quickReplies?: string[] | null;
    /**
     * Optional. The title of the collection of quick replies.
     */
    title?: string | null;
  }
  /**
   * Rich Business Messaging (RBM) Card content
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent {
    /**
     * Optional. Description of the card (at most 2000 bytes).  At least one of the title, description or media must be set.
     */
    description?: string | null;
    /**
     * Optional. However at least one of the title, description or media must be set. Media (image, GIF or a video) to include in the card.
     */
    media?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
    /**
     * Optional. List of suggestions to include in the card.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
    /**
     * Optional. Title of the card (at most 200 bytes).  At least one of the title, description or media must be set.
     */
    title?: string | null;
  }
  /**
   * Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported:  Image Types  * image/jpeg * image/jpg&#39; * image/gif * image/png  Video Types  * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia {
    /**
     * Required. Publicly reachable URI of the file. The RBM platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL.
     */
    fileUri?: string | null;
    /**
     * Required for cards with vertical orientation. The height of the media within a rich card with a vertical layout. (https://goo.gl/NeFCjz). For a standalone card with horizontal layout, height is not customizable, and this field is ignored.
     */
    height?: string | null;
    /**
     * Optional. Publicly reachable URI of the thumbnail.If you don&#39;t provide a thumbnail URI, the RBM platform displays a blank placeholder thumbnail until the user&#39;s device downloads the file. Depending on the user&#39;s setting, the file may not download automatically and may require the user to tap a download button.
     */
    thumbnailUri?: string | null;
  }
  /**
   * Carousel Rich Business Messaging (RBM) rich card.  Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions.  For more details about RBM rich cards, please see: https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send#rich-cards If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard {
    /**
     * Required. The cards in the carousel. A carousel must have at least 2 cards and at most 10.
     */
    cardContents?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent[];
    /**
     * Required. The width of the cards in the carousel.
     */
    cardWidth?: string | null;
  }
  /**
   * Standalone Rich Business Messaging (RBM) rich card.  Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions.  For more details about RBM rich cards, please see: https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send#rich-cards You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard {
    /**
     * Required. Card content.
     */
    cardContent?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
    /**
     * Required. Orientation of the card.
     */
    cardOrientation?: string | null;
    /**
     * Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout.
     */
    thumbnailImageAlignment?: string | null;
  }
  /**
   * Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {
    /**
     * Suggested client side action: Dial a phone number
     */
    dial?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
    /**
     * Suggested client side action: Open a URI on device
     */
    openUrl?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
    /**
     * Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic.
     */
    postbackData?: string | null;
    /**
     * Suggested client side action: Share user location
     */
    shareLocation?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
    /**
     * Text to display alongside the action.
     */
    text?: string | null;
  }
  /**
   * Opens the user&#39;s default dialer app with the specified phone number but does not dial automatically (https://goo.gl/ergbB2).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial {
    /**
     * Required. The phone number to fill in the default dialer app. This field should be in [E.164](https://en.wikipedia.org/wiki/E.164) format. An example of a correctly formatted phone number: +15556767888.
     */
    phoneNumber?: string | null;
  }
  /**
   * Opens the user&#39;s default web browser app to the specified uri (https://goo.gl/6GLJD2). If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri {
    /**
     * Required. The uri to open on the user device
     */
    uri?: string | null;
  }
  /**
   * Opens the device&#39;s location chooser so the user can pick a location to send back to the agent (https://goo.gl/GXotJW).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation {}
  /**
   * Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply {
    /**
     * Opaque payload that the Dialogflow receives in a user event when the user taps the suggested reply. This data will be also forwarded to webhook to allow performing custom business logic.
     */
    postbackData?: string | null;
    /**
     * Suggested reply text.
     */
    text?: string | null;
  }
  /**
   * Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion {
    /**
     * Predefined client side actions that user can choose
     */
    action?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
    /**
     * Predefined replies for user to select instead of typing
     */
    reply?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
  }
  /**
   * Rich Business Messaging (RBM) text response with suggestions.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmText {
    /**
     * Optional. One or more suggestions to show to the user.
     */
    rbmSuggestion?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
    /**
     * Required. Text sent and displayed to the user.
     */
    text?: string | null;
  }
  /**
   * Additional info about the select item for when it is triggered in a dialog.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
    /**
     * Required. A unique key that will be sent back to the agent if this response is given.
     */
    key?: string | null;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item in dialog.
     */
    synonyms?: string[] | null;
  }
  /**
   * The simple response message containing speech or text.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
    /**
     * Optional. The text to display.
     */
    displayText?: string | null;
    /**
     * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
     */
    ssml?: string | null;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string | null;
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
    title?: string | null;
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
   * Table card for Actions on Google.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCard {
    /**
     * Optional. List of buttons for the card.
     */
    buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
    /**
     * Optional. Display properties for the columns in this table.
     */
    columnProperties?: Schema$GoogleCloudDialogflowV2beta1IntentMessageColumnProperties[];
    /**
     * Optional. Image which should be displayed on the card.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. Rows in this table of data.
     */
    rows?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardRow[];
    /**
     * Optional. Subtitle to the title.
     */
    subtitle?: string | null;
    /**
     * Required. Title of the card.
     */
    title?: string | null;
  }
  /**
   * Cell of TableCardRow.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardCell {
    /**
     * Required. Text in this cell.
     */
    text?: string | null;
  }
  /**
   * Row of TableCard.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardRow {
    /**
     * Optional. List of cells that make up this row.
     */
    cells?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardCell[];
    /**
     * Optional. Whether to add a visual divider after this row.
     */
    dividerAfter?: boolean | null;
  }
  /**
   * Plays audio from a file in Telephony Gateway.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
    /**
     * Required. URI to a Google Cloud Storage object containing the audio to play, e.g., &quot;gs://bucket/object&quot;. The object must contain a single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz.  This object must be readable by the `service-&lt;Project Number&gt;@gcp-sa-dialogflow.iam.gserviceaccount.com` service account where &lt;Project Number&gt; is the number of the Telephony Gateway project (usually the same as the Dialogflow agent project). If the Google Cloud Storage bucket is in the Telephony Gateway project, this permission is added by default when enabling the Dialogflow V2 API.  For audio from other sources, consider using the `TelephonySynthesizeSpeech` message with SSML.
     */
    audioUri?: string | null;
  }
  /**
   * Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway.  Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
    /**
     * The SSML to be synthesized. For more information, see [SSML](https://developers.google.com/actions/reference/ssml).
     */
    ssml?: string | null;
    /**
     * The raw text to be synthesized.
     */
    text?: string | null;
  }
  /**
   * Transfers the call in Telephony Gateway.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall {
    /**
     * Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164).  We currently only allow transferring to US numbers (+1xxxyyyzzzz).
     */
    phoneNumber?: string | null;
  }
  /**
   * The text response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageText {
    /**
     * Optional. The collection of the agent&#39;s responses.
     */
    text?: string[] | null;
  }
  /**
   * Represents intent parameters.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentParameter {
    /**
     * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string | null;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string | null;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
     */
    entityTypeDisplayName?: string | null;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean | null;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean | null;
    /**
     * The unique identifier of this parameter.
     */
    name?: string | null;
    /**
     * Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
     */
    prompts?: string[] | null;
    /**
     * Optional. The definition of the parameter value. It can be:  - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as   `#context_name.parameter_name`.
     */
    value?: string | null;
  }
  /**
   * Represents an example that the agent is trained on.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string | null;
    /**
     * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase.  Note: The API does not automatically annotate training phrases like the Dialogflow Console does.  Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated.  If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set.  If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways:  -   `Part.text` is set to a part of the phrase that has no parameters. -   `Part.text` is set to a part of the phrase that you want to annotate,     and the `entity_type`, `alias`, and `user_defined` fields are all     set.
     */
    parts?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
     */
    timesAddedCount?: number | null;
    /**
     * Required. The type of the training phrase.
     */
    type?: string | null;
  }
  /**
   * Represents a part of a training phrase.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
    /**
     * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
     */
    alias?: string | null;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
     */
    entityType?: string | null;
    /**
     * Required. The text for this part.
     */
    text?: string | null;
    /**
     * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
     */
    userDefined?: boolean | null;
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
    answer?: string | null;
    /**
     * The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise.
     */
    faqQuestion?: string | null;
    /**
     * The system&#39;s confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using `match_confidence_level` which should be generally more stable.
     */
    matchConfidence?: number | null;
    /**
     * The system&#39;s confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `&lt;query, answer&gt;` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer.
     */
    matchConfidenceLevel?: string | null;
    /**
     * Indicates which Knowledge Document this answer was extracted from. Format: `projects/&lt;Project ID&gt;/knowledgeBases/&lt;Knowledge Base ID&gt;/documents/&lt;Document ID&gt;`.
     */
    source?: string | null;
  }
  /**
   * Metadata in google::longrunning::Operation for Knowledge operations.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {
    /**
     * Required. Output only. The current state of this operation.
     */
    state?: string | null;
  }
  /**
   * The response for ConversationDatasets.LabelConversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1LabelConversationResponse {
    /**
     * New annotated conversation dataset created by the labeling task.
     */
    annotatedConversationDataset?: Schema$GoogleCloudDialogflowV2beta1AnnotatedConversationDataset;
  }
  /**
   * Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload.  In particular, for the Dialogflow Phone Gateway integration, this field has the form: &lt;pre&gt;{  &quot;telephony&quot;: {    &quot;caller_id&quot;: &quot;+18558363987&quot;  } }&lt;/pre&gt; Note: The caller ID field (`caller_id`) will be redacted for Standard Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Enterprise Edition agents.
     */
    payload?: {[key: string]: any} | null;
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
     */
    source?: string | null;
    /**
     * Optional. The version of the protocol used for this request. This field is AoG-specific.
     */
    version?: string | null;
  }
  /**
   * Represents the result of conversational query or event processing.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1QueryResult {
    /**
     * The action name from the matched intent.
     */
    action?: string | null;
    /**
     * This field is set to:  - `false` if the matched intent has required parameters and not all of    the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the    matched intent doesn&#39;t contain any required parameters.
     */
    allRequiredParamsPresent?: boolean | null;
    /**
     * Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain:  - webhook call latency - webhook errors
     */
    diagnosticInfo?: {[key: string]: any} | null;
    /**
     * The collection of rich messages to present to the user.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
     */
    fulfillmentText?: string | null;
    /**
     * The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name`, `end_interaction` and `is_fallback`.
     */
    intent?: Schema$GoogleCloudDialogflowV2beta1Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
     */
    intentDetectionConfidence?: number | null;
    /**
     * The result from Knowledge Connector (if any), ordered by decreasing `KnowledgeAnswers.match_confidence`.
     */
    knowledgeAnswers?: Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswers;
    /**
     * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
     */
    languageCode?: string | null;
    /**
     * The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `&lt;parameter name&gt;.original` containing the original parameter values before the query.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * The collection of extracted parameters.  Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs:  -   MapKey type: string -   MapKey value: parameter name -   MapValue type:     -   If parameter&#39;s entity type is a composite entity: map     -   Else: string or number, depending on parameter value type -   MapValue value:     -   If parameter&#39;s entity type is a composite entity:         map from composite entity property names to property values     -   Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
    /**
     * The original conversational query text:  - If natural language text was provided as input, `query_text` contains   a copy of the input. - If natural language speech audio was provided as input, `query_text`   contains the speech recognition result. If speech recognizer produced   multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the   corrected user input.
     */
    queryText?: string | null;
    /**
     * The sentiment analysis result, which depends on the `sentiment_analysis_request_config` specified in the request.
     */
    sentimentAnalysisResult?: Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set.  This field is not guaranteed to be accurate or set. In particular this field isn&#39;t set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
     */
    speechRecognitionConfidence?: number | null;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
     */
    webhookPayload?: {[key: string]: any} | null;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
     */
    webhookSource?: string | null;
  }
  /**
   * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
     */
    magnitude?: number | null;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number | null;
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
   * Represents a session entity type.  Extends or replaces a custom entity type at the user session level (we refer to the entity types defined at the agent level as &quot;custom entity types&quot;).  Note: session entity types apply to all queries, regardless of the language.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SessionEntityType {
    /**
     * Required. The collection of entities associated with this session entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
     */
    entityOverrideMode?: string | null;
    /**
     * Required. The unique identifier of this session entity type. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`. If `Environment ID` is not specified, we assume default &#39;draft&#39; environment. If `User ID` is not specified, we assume default &#39;-&#39; user.  `&lt;Entity Type Display Name&gt;` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string | null;
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
    responseId?: string | null;
    /**
     * The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;`.
     */
    session?: string | null;
  }
  /**
   * The response message for a webhook call.  This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error:  - Use `&quot;&quot;` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays  For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1WebhookResponse {
    /**
     * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
     */
    endInteraction?: boolean | null;
    /**
     * Optional. Invokes the supplied events. When this field is set, Dialogflow ignores the `fulfillment_text`, `fulfillment_messages`, and `payload` fields.
     */
    followupEventInput?: Schema$GoogleCloudDialogflowV2beta1EventInput;
    /**
     * Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller.
     */
    fulfillmentText?: string | null;
    /**
     * Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json)
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType[];
    /**
     * Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller.
     */
    source?: string | null;
  }
  /**
   * Represents a context.
   */
  export interface Schema$GoogleCloudDialogflowV2Context {
    /**
     * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
     */
    lifespanCount?: number | null;
    /**
     * Required. The unique identifier of the context. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`.  The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long.  If `Environment ID` is not specified, we assume default &#39;draft&#39; environment. If `User ID` is not specified, we assume default &#39;-&#39; user.  The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names:  * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     */
    name?: string | null;
    /**
     * Optional. The collection of parameters associated with this context.  Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs:  -   MapKey type: string -   MapKey value: parameter name -   MapValue type:     -   If parameter&#39;s entity type is a composite entity: map     -   Else: string or number, depending on parameter value type -   MapValue value:     -   If parameter&#39;s entity type is a composite entity:         map from composite entity property names to property values     -   Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * Represents a notification sent to Cloud Pub/Sub subscribers for conversation lifecycle events.
   */
  export interface Schema$GoogleCloudDialogflowV2ConversationEvent {
    /**
     * The unique identifier of the conversation this notification refers to. Format: `projects/&lt;Project ID&gt;/conversations/&lt;Conversation ID&gt;`.
     */
    conversation?: string | null;
    /**
     * More detailed information about an error. Only set for type UNRECOVERABLE_ERROR_IN_PHONE_CALL.
     */
    errorStatus?: Schema$GoogleRpcStatus;
    /**
     * Payload of NEW_MESSAGE event.
     */
    newMessagePayload?: Schema$GoogleCloudDialogflowV2Message;
    /**
     * The type of the event that this notification refers to.
     */
    type?: string | null;
  }
  /**
   * Represents an entity type. Entity types serve as a tool for extracting parameter values from natural language queries.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityType {
    /**
     * Optional. Indicates whether the entity type can be automatically expanded.
     */
    autoExpansionMode?: string | null;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string | null;
    /**
     * Optional. Enables fuzzy entity extraction during classification.
     */
    enableFuzzyExtraction?: boolean | null;
    /**
     * Optional. The collection of entity entries associated with the entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: string | null;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
     */
    name?: string | null;
  }
  /**
   * An **entity entry** for an associated entity type.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityTypeEntity {
    /**
     * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*.  For `KIND_LIST` entity types:  *   This collection must contain exactly one synonym equal to `value`.
     */
    synonyms?: string[] | null;
    /**
     * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*.  For `KIND_MAP` entity types:  *   A reference value to be used in place of synonyms.  For `KIND_LIST` entity types:  *   A string that can contain references to other entity types (with or     without aliases).
     */
    value?: string | null;
  }
  /**
   * Events allow for matching intents by event name instead of the natural language input. For instance, input `&lt;event: { name: &quot;welcome_event&quot;, parameters: { name: &quot;Sam&quot; } }&gt;` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `&quot;Hello #welcome_event.name! What can I do for you today?&quot;`.
   */
  export interface Schema$GoogleCloudDialogflowV2EventInput {
    /**
     * Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string | null;
    /**
     * Required. The unique identifier of the event.
     */
    name?: string | null;
    /**
     * The collection of parameters associated with the event.  Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs:  -   MapKey type: string -   MapKey value: parameter name -   MapValue type:     -   If parameter&#39;s entity type is a composite entity: map     -   Else: string or number, depending on parameter value type -   MapValue value:     -   If parameter&#39;s entity type is a composite entity:         map from composite entity property names to property values     -   Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2ExportAgentResponse {
    /**
     * Zip compressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
     */
    agentUri?: string | null;
  }
  /**
   * Represents an intent. Intents convert a number of user expressions or patterns into an action. An action is an extraction of a user command or sentence semantics.
   */
  export interface Schema$GoogleCloudDialogflowV2Intent {
    /**
     * Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
     */
    action?: string | null;
    /**
     * Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
     */
    defaultResponsePlatforms?: string[] | null;
    /**
     * Required. The name of this intent.
     */
    displayName?: string | null;
    /**
     * Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters.
     */
    events?: string[] | null;
    /**
     * Read-only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
     */
    followupIntentInfo?: Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo[];
    /**
     * Optional. The list of context names required for this intent to be triggered. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
     */
    inputContextNames?: string[] | null;
    /**
     * Optional. Indicates whether this is a fallback intent.
     */
    isFallback?: boolean | null;
    /**
     * Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
     */
    messages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
     */
    mlDisabled?: boolean | null;
    /**
     * Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    name?: string | null;
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
    parentFollowupIntentName?: string | null;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher priorities.  - If the supplied value is unspecified or 0, the service   translates the value to 500,000, which corresponds to the   `Normal` priority in the console. - If the supplied value is negative, the intent is ignored   in runtime detect intent requests.
     */
    priority?: number | null;
    /**
     * Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
     */
    resetContexts?: boolean | null;
    /**
     * Read-only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. We populate this field only in the output.  Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    rootFollowupIntentName?: string | null;
    /**
     * Optional. The collection of examples that the agent is trained on.
     */
    trainingPhrases?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrase[];
    /**
     * Optional. Indicates whether webhooks are enabled for the intent.
     */
    webhookState?: string | null;
  }
  /**
   * Represents a single followup intent in the chain.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo {
    /**
     * The unique identifier of the followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    followupIntentName?: string | null;
    /**
     * The unique identifier of the followup intent&#39;s parent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
     */
    parentFollowupIntentName?: string | null;
  }
  /**
   * A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessage {
    /**
     * The basic card response for Actions on Google.
     */
    basicCard?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCard;
    /**
     * Browse carousel card for Actions on Google.
     */
    browseCarouselCard?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
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
     * The media content card for Actions on Google.
     */
    mediaContent?: Schema$GoogleCloudDialogflowV2IntentMessageMediaContent;
    /**
     * A custom platform-specific response.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. The platform that this message is intended for.
     */
    platform?: string | null;
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
     * Table card for Actions on Google.
     */
    tableCard?: Schema$GoogleCloudDialogflowV2IntentMessageTableCard;
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
    formattedText?: string | null;
    /**
     * Optional. The image for the card.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string | null;
    /**
     * Optional. The title of the card.
     */
    title?: string | null;
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
    title?: string | null;
  }
  /**
   * Opens the given URI.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {
    /**
     * Required. The HTTP or HTTPS scheme URI.
     */
    uri?: string | null;
  }
  /**
   * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard {
    /**
     * Optional. Settings for displaying the image. Applies to every image in items.
     */
    imageDisplayOptions?: string | null;
    /**
     * Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten.
     */
    items?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
  }
  /**
   * Browsing carousel tile
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
    /**
     * Optional. Description of the carousel item. Maximum of four lines of text.
     */
    description?: string | null;
    /**
     * Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
     */
    footer?: string | null;
    /**
     * Optional. Hero image for the carousel item.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Action to present to the user.
     */
    openUriAction?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
    /**
     * Required. Title of the carousel item. Maximum of two lines of text.
     */
    title?: string | null;
  }
  /**
   * Actions on Google action to open a given url.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
    /**
     * Required. URL
     */
    url?: string | null;
    /**
     * Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.
     */
    urlTypeHint?: string | null;
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
    imageUri?: string | null;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string | null;
    /**
     * Optional. The title of the card.
     */
    title?: string | null;
  }
  /**
   * Contains information about a button.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCardButton {
    /**
     * Optional. The text to send back to the Dialogflow API or a URI to open.
     */
    postback?: string | null;
    /**
     * Optional. The text to show on the button.
     */
    text?: string | null;
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
    description?: string | null;
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
    title?: string | null;
  }
  /**
   * Column properties for TableCard.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageColumnProperties {
    /**
     * Required. Column heading.
     */
    header?: string | null;
    /**
     * Optional. Defines text alignment for all cells in this column.
     */
    horizontalAlignment?: string | null;
  }
  /**
   * The image response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageImage {
    /**
     * Optional. A text description of the image to be used for accessibility, e.g., screen readers.
     */
    accessibilityText?: string | null;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string | null;
  }
  /**
   * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string | null;
    /**
     * Required. The URI of the app or site to open when the user taps the suggestion chip.
     */
    uri?: string | null;
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
     * Optional. Subtitle of the list.
     */
    subtitle?: string | null;
    /**
     * Optional. The overall title of the list.
     */
    title?: string | null;
  }
  /**
   * An item in the list.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem {
    /**
     * Optional. The main text describing the item.
     */
    description?: string | null;
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
    title?: string | null;
  }
  /**
   * The media content card for Actions on Google.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageMediaContent {
    /**
     * Required. List of media objects.
     */
    mediaObjects?: Schema$GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[];
    /**
     * Optional. What type of media is the content (ie &quot;audio&quot;).
     */
    mediaType?: string | null;
  }
  /**
   * Response media object for media content card.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
    /**
     * Required. Url where the media is stored.
     */
    contentUrl?: string | null;
    /**
     * Optional. Description of media card.
     */
    description?: string | null;
    /**
     * Optional. Icon to display above media content.
     */
    icon?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Optional. Image to display above media content.
     */
    largeImage?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Name of media card.
     */
    name?: string | null;
  }
  /**
   * The quick replies response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies {
    /**
     * Optional. The collection of quick replies.
     */
    quickReplies?: string[] | null;
    /**
     * Optional. The title of the collection of quick replies.
     */
    title?: string | null;
  }
  /**
   * Additional info about the select item for when it is triggered in a dialog.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
    /**
     * Required. A unique key that will be sent back to the agent if this response is given.
     */
    key?: string | null;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item in dialog.
     */
    synonyms?: string[] | null;
  }
  /**
   * The simple response message containing speech or text.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse {
    /**
     * Optional. The text to display.
     */
    displayText?: string | null;
    /**
     * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
     */
    ssml?: string | null;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string | null;
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
    title?: string | null;
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
   * Table card for Actions on Google.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCard {
    /**
     * Optional. List of buttons for the card.
     */
    buttons?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
    /**
     * Optional. Display properties for the columns in this table.
     */
    columnProperties?: Schema$GoogleCloudDialogflowV2IntentMessageColumnProperties[];
    /**
     * Optional. Image which should be displayed on the card.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Optional. Rows in this table of data.
     */
    rows?: Schema$GoogleCloudDialogflowV2IntentMessageTableCardRow[];
    /**
     * Optional. Subtitle to the title.
     */
    subtitle?: string | null;
    /**
     * Required. Title of the card.
     */
    title?: string | null;
  }
  /**
   * Cell of TableCardRow.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCardCell {
    /**
     * Required. Text in this cell.
     */
    text?: string | null;
  }
  /**
   * Row of TableCard.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCardRow {
    /**
     * Optional. List of cells that make up this row.
     */
    cells?: Schema$GoogleCloudDialogflowV2IntentMessageTableCardCell[];
    /**
     * Optional. Whether to add a visual divider after this row.
     */
    dividerAfter?: boolean | null;
  }
  /**
   * The text response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageText {
    /**
     * Optional. The collection of the agent&#39;s responses.
     */
    text?: string[] | null;
  }
  /**
   * Represents intent parameters.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentParameter {
    /**
     * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string | null;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string | null;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
     */
    entityTypeDisplayName?: string | null;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean | null;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean | null;
    /**
     * The unique identifier of this parameter.
     */
    name?: string | null;
    /**
     * Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
     */
    prompts?: string[] | null;
    /**
     * Optional. The definition of the parameter value. It can be:  - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as   `#context_name.parameter_name`.
     */
    value?: string | null;
  }
  /**
   * Represents an example that the agent is trained on.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string | null;
    /**
     * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase.  Note: The API does not automatically annotate training phrases like the Dialogflow Console does.  Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated.  If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set.  If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways:  -   `Part.text` is set to a part of the phrase that has no parameters. -   `Part.text` is set to a part of the phrase that you want to annotate,     and the `entity_type`, `alias`, and `user_defined` fields are all     set.
     */
    parts?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
     */
    timesAddedCount?: number | null;
    /**
     * Required. The type of the training phrase.
     */
    type?: string | null;
  }
  /**
   * Represents a part of a training phrase.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart {
    /**
     * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
     */
    alias?: string | null;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
     */
    entityType?: string | null;
    /**
     * Required. The text for this part.
     */
    text?: string | null;
    /**
     * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
     */
    userDefined?: boolean | null;
  }
  /**
   * Represents a message posted into a conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2Message {
    /**
     * Required. The message content.
     */
    content?: string | null;
    /**
     * Output only. The time when the message was created.
     */
    createTime?: string | null;
    /**
     * Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: &quot;en-US&quot;.
     */
    languageCode?: string | null;
    /**
     * Output only. The annotation for the message.
     */
    messageAnnotation?: Schema$GoogleCloudDialogflowV2MessageAnnotation;
    /**
     * The unique identifier of the message. Format: `projects/&lt;Project ID&gt;/conversations/&lt;Conversation ID&gt;/messages/&lt;Message ID&gt;`.
     */
    name?: string | null;
    /**
     * Output only. The participant that sends this message.
     */
    participant?: string | null;
    /**
     * Output only. The role of the participant.
     */
    participantRole?: string | null;
  }
  /**
   * Represents the result of annotation for the message.
   */
  export interface Schema$GoogleCloudDialogflowV2MessageAnnotation {
    /**
     * Indicates whether the text message contains entities.
     */
    containEntities?: boolean | null;
    /**
     * The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text].
     */
    parts?: Schema$GoogleCloudDialogflowV2AnnotatedMessagePart[];
  }
  /**
   * Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
   */
  export interface Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest {
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload.  In particular, for the Dialogflow Phone Gateway integration, this field has the form: &lt;pre&gt;{  &quot;telephony&quot;: {    &quot;caller_id&quot;: &quot;+18558363987&quot;  } }&lt;/pre&gt; Note: The caller ID field (`caller_id`) will be redacted for Standard Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Enterprise Edition agents.
     */
    payload?: {[key: string]: any} | null;
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
     */
    source?: string | null;
    /**
     * Optional. The version of the protocol used for this request. This field is AoG-specific.
     */
    version?: string | null;
  }
  /**
   * Represents the result of conversational query or event processing.
   */
  export interface Schema$GoogleCloudDialogflowV2QueryResult {
    /**
     * The action name from the matched intent.
     */
    action?: string | null;
    /**
     * This field is set to:  - `false` if the matched intent has required parameters and not all of    the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the    matched intent doesn&#39;t contain any required parameters.
     */
    allRequiredParamsPresent?: boolean | null;
    /**
     * Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain:  - webhook call latency - webhook errors
     */
    diagnosticInfo?: {[key: string]: any} | null;
    /**
     * The collection of rich messages to present to the user.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
     */
    fulfillmentText?: string | null;
    /**
     * The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name`, `end_interaction` and `is_fallback`.
     */
    intent?: Schema$GoogleCloudDialogflowV2Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
     */
    intentDetectionConfidence?: number | null;
    /**
     * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
     */
    languageCode?: string | null;
    /**
     * The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `&lt;parameter name&gt;.original` containing the original parameter values before the query.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * The collection of extracted parameters.  Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs:  -   MapKey type: string -   MapKey value: parameter name -   MapValue type:     -   If parameter&#39;s entity type is a composite entity: map     -   Else: string or number, depending on parameter value type -   MapValue value:     -   If parameter&#39;s entity type is a composite entity:         map from composite entity property names to property values     -   Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
    /**
     * The original conversational query text:  - If natural language text was provided as input, `query_text` contains   a copy of the input. - If natural language speech audio was provided as input, `query_text`   contains the speech recognition result. If speech recognizer produced   multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the   corrected user input.
     */
    queryText?: string | null;
    /**
     * The sentiment analysis result, which depends on the `sentiment_analysis_request_config` specified in the request.
     */
    sentimentAnalysisResult?: Schema$GoogleCloudDialogflowV2SentimentAnalysisResult;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set.  This field is not guaranteed to be accurate or set. In particular this field isn&#39;t set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
     */
    speechRecognitionConfidence?: number | null;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
     */
    webhookPayload?: {[key: string]: any} | null;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
     */
    webhookSource?: string | null;
  }
  /**
   * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
   */
  export interface Schema$GoogleCloudDialogflowV2Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
     */
    magnitude?: number | null;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number | null;
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
   * Represents a session entity type.  Extends or replaces a custom entity type at the user session level (we refer to the entity types defined at the agent level as &quot;custom entity types&quot;).  Note: session entity types apply to all queries, regardless of the language.
   */
  export interface Schema$GoogleCloudDialogflowV2SessionEntityType {
    /**
     * Required. The collection of entities associated with this session entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
     */
    entityOverrideMode?: string | null;
    /**
     * Required. The unique identifier of this session entity type. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`. If `Environment ID` is not specified, we assume default &#39;draft&#39; environment. If `User ID` is not specified, we assume default &#39;-&#39; user.  `&lt;Entity Type Display Name&gt;` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string | null;
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
    responseId?: string | null;
    /**
     * The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`, or `projects/&lt;Project ID&gt;/agent/environments/&lt;Environment ID&gt;/users/&lt;User ID&gt;/sessions/&lt;Session ID&gt;`.
     */
    session?: string | null;
  }
  /**
   * The response message for a webhook call.  This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error:  - Use `&quot;&quot;` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays  For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).
   */
  export interface Schema$GoogleCloudDialogflowV2WebhookResponse {
    /**
     * Optional. Invokes the supplied events. When this field is set, Dialogflow ignores the `fulfillment_text`, `fulfillment_messages`, and `payload` fields.
     */
    followupEventInput?: Schema$GoogleCloudDialogflowV2EventInput;
    /**
     * Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller.
     */
    fulfillmentText?: string | null;
    /**
     * Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json)
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2SessionEntityType[];
    /**
     * Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller.
     */
    source?: string | null;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV3alpha1ExportAgentResponse {
    /**
     * Uncompressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in ExportAgentRequest.
     */
    agentUri?: string | null;
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
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
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
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dialogflow.projects.locations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v3alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dialogflow.projects.locations.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3alpha1/{+name}:cancel').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dialogflow.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v3alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dialogflow.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.locations.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v3alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dialogflow.projects.locations.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleLongrunningListOperationsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<
        Schema$GoogleLongrunningListOperationsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleLongrunningListOperationsResponse
      >
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

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3alpha1/{+name}/operations').replace(
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
          callback as BodyResponseCallback<{} | void>
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
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
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * dialogflow.projects.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v3alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dialogflow.projects.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Cancel
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
        {}) as Params$Resource$Projects$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Cancel;
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
            url: (rootUrl + '/v3alpha1/{+name}:cancel').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * dialogflow.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v3alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
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

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * dialogflow.projects.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v3alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias dialogflow.projects.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleLongrunningListOperationsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      callback: BodyResponseCallback<
        Schema$GoogleLongrunningListOperationsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleLongrunningListOperationsResponse
      >
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

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3alpha1/{+name}/operations').replace(
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
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
  export interface Params$Resource$Projects$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
