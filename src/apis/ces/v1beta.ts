// Copyright 2026 Google LLC
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

export namespace ces_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Gemini Enterprise for Customer Experience API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const ces = google.ces('v1beta');
   * ```
   */
  export class Ces {
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
   * Configuration of an Action for the tool to use. Note: This can be either an Action or an Operation. See https://cloud.google.com/integration-connectors/docs/entities-operation-action for details.
   */
  export interface Schema$Action {
    /**
     * ID of a Connection action for the tool to use.
     */
    connectionActionId?: string | null;
    /**
     * Entity operation configuration for the tool to use.
     */
    entityOperation?: Schema$ActionEntityOperation;
    /**
     * Optional. Entity fields to use as inputs for the operation. If no fields are specified, all fields of the Entity will be used.
     */
    inputFields?: string[] | null;
    /**
     * Optional. Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.
     */
    outputFields?: string[] | null;
  }
  /**
   * Entity CRUD operation specification.
   */
  export interface Schema$ActionEntityOperation {
    /**
     * Required. ID of the entity.
     */
    entityId?: string | null;
    /**
     * Required. Operation to perform on the entity.
     */
    operation?: string | null;
  }
  /**
   * An agent acts as the fundamental building block that provides instructions to the Large Language Model (LLM) for executing specific tasks.
   */
  export interface Schema$Agent {
    /**
     * Optional. The callbacks to execute after the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
     */
    afterAgentCallbacks?: Schema$Callback[];
    /**
     * Optional. The callbacks to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
     */
    afterModelCallbacks?: Schema$Callback[];
    /**
     * Optional. The callbacks to execute after the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
     */
    afterToolCallbacks?: Schema$Callback[];
    /**
     * Optional. The callbacks to execute before the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
     */
    beforeAgentCallbacks?: Schema$Callback[];
    /**
     * Optional. The callbacks to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
     */
    beforeModelCallbacks?: Schema$Callback[];
    /**
     * Optional. The callbacks to execute before the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
     */
    beforeToolCallbacks?: Schema$Callback[];
    /**
     * Optional. List of child agents in the agent tree. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    childAgents?: string[] | null;
    /**
     * Output only. Timestamp when the agent was created.
     */
    createTime?: string | null;
    /**
     * Optional. Human-readable description of the agent.
     */
    description?: string | null;
    /**
     * Required. Display name of the agent.
     */
    displayName?: string | null;
    /**
     * Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Output only. If the agent is generated by the LLM assistant, this field contains a descriptive summary of the generation.
     */
    generatedSummary?: string | null;
    /**
     * Optional. List of guardrails for the agent. Format: `projects/{project\}/locations/{location\}/apps/{app\}/guardrails/{guardrail\}`
     */
    guardrails?: string[] | null;
    /**
     * Optional. Instructions for the LLM model to guide the agent's behavior.
     */
    instruction?: string | null;
    /**
     * Optional. The default agent type.
     */
    llmAgent?: Schema$AgentLlmAgent;
    /**
     * Optional. Configurations for the LLM model.
     */
    modelSettings?: Schema$ModelSettings;
    /**
     * Identifier. The unique identifier of the agent. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    name?: string | null;
    /**
     * Optional. The remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent to be used for the agent execution. If this field is set, all other agent level properties will be ignored. Note: If the Dialogflow agent is in a different project from the app, you should grant `roles/dialogflow.client` to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`.
     */
    remoteDialogflowAgent?: Schema$AgentRemoteDialogflowAgent;
    /**
     * Optional. List of available tools for the agent. Format: `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}`
     */
    tools?: string[] | null;
    /**
     * Optional. List of toolsets for the agent.
     */
    toolsets?: Schema$AgentAgentToolset[];
    /**
     * Optional. Agent transfer rules. If multiple rules match, the first one in the list will be used.
     */
    transferRules?: Schema$TransferRule[];
    /**
     * Output only. Timestamp when the agent was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A toolset with a selection of its tools.
   */
  export interface Schema$AgentAgentToolset {
    /**
     * Optional. The tools IDs to filter the toolset.
     */
    toolIds?: string[] | null;
    /**
     * Required. The resource name of the toolset. Format: `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}`
     */
    toolset?: string | null;
  }
  /**
   * Default agent type. The agent uses instructions and callbacks specified in the agent to perform the task using a large language model.
   */
  export interface Schema$AgentLlmAgent {}
  /**
   * The agent which will transfer execution to a remote [Dialogflow CX](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent) agent. The Dialogflow agent will process subsequent user queries until the session ends or flow ends, and the control is transferred back to the parent CES agent.
   */
  export interface Schema$AgentRemoteDialogflowAgent {
    /**
     * Required. The [Dialogflow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent) agent resource name. Format: `projects/{project\}/locations/{location\}/agents/{agent\}`
     */
    agent?: string | null;
    /**
     * Optional. The environment ID of the Dialogflow agent to be used for the agent execution. If not specified, the draft environment will be used.
     */
    environmentId?: string | null;
    /**
     * Optional. The flow ID of the flow in the Dialogflow agent.
     */
    flowId?: string | null;
    /**
     * Optional. The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.
     */
    inputVariableMapping?: {[key: string]: string} | null;
    /**
     * Optional. The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.
     */
    outputVariableMapping?: {[key: string]: string} | null;
    /**
     * Optional. Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. * If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with [`allow_playback_interruption`](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.
     */
    respectResponseInterruptionSettings?: boolean | null;
  }
  /**
   * Represents an event indicating the transfer of a conversation to a different agent.
   */
  export interface Schema$AgentTransfer {
    /**
     * Output only. Display name of the agent.
     */
    displayName?: string | null;
    /**
     * Required. The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    targetAgent?: string | null;
  }
  /**
   * Aggregated metrics for an evaluation or evaluation dataset.
   */
  export interface Schema$AggregatedMetrics {
    /**
     * Output only. Aggregated metrics, grouped by app version ID.
     */
    metricsByAppVersion?: Schema$AggregatedMetricsMetricsByAppVersion[];
  }
  /**
   * Metrics for hallucination results.
   */
  export interface Schema$AggregatedMetricsHallucinationMetrics {
    /**
     * Output only. The average hallucination score (0 to 1).
     */
    score?: number | null;
  }
  /**
   * Metrics aggregated per app version.
   */
  export interface Schema$AggregatedMetricsMetricsByAppVersion {
    /**
     * Output only. The app version ID.
     */
    appVersionId?: string | null;
    /**
     * Output only. The number of times the evaluation failed.
     */
    failCount?: number | null;
    /**
     * Output only. Metrics for hallucination within this app version.
     */
    hallucinationMetrics?: Schema$AggregatedMetricsHallucinationMetrics[];
    /**
     * Output only. Metrics aggregated per turn within this app version.
     */
    metricsByTurn?: Schema$AggregatedMetricsMetricsByTurn[];
    /**
     * Output only. The number of times the evaluation passed.
     */
    passCount?: number | null;
    /**
     * Output only. Metrics for semantic similarity within this app version.
     */
    semanticSimilarityMetrics?: Schema$AggregatedMetricsSemanticSimilarityMetrics[];
    /**
     * Output only. Metrics for tool call latency within this app version.
     */
    toolCallLatencyMetrics?: Schema$AggregatedMetricsToolCallLatencyMetrics[];
    /**
     * Output only. Metrics for each tool within this app version.
     */
    toolMetrics?: Schema$AggregatedMetricsToolMetrics[];
    /**
     * Output only. Metrics for turn latency within this app version.
     */
    turnLatencyMetrics?: Schema$AggregatedMetricsTurnLatencyMetrics[];
  }
  /**
   * Metrics aggregated per turn.
   */
  export interface Schema$AggregatedMetricsMetricsByTurn {
    /**
     * Output only. Metrics for hallucination within this turn.
     */
    hallucinationMetrics?: Schema$AggregatedMetricsHallucinationMetrics[];
    /**
     * Output only. Metrics for semantic similarity within this turn.
     */
    semanticSimilarityMetrics?: Schema$AggregatedMetricsSemanticSimilarityMetrics[];
    /**
     * Output only. Metrics for tool call latency within this turn.
     */
    toolCallLatencyMetrics?: Schema$AggregatedMetricsToolCallLatencyMetrics[];
    /**
     * Output only. Metrics for each tool within this turn.
     */
    toolMetrics?: Schema$AggregatedMetricsToolMetrics[];
    /**
     * Output only. The turn index (0-based).
     */
    turnIndex?: number | null;
    /**
     * Output only. Metrics for turn latency within this turn.
     */
    turnLatencyMetrics?: Schema$AggregatedMetricsTurnLatencyMetrics[];
  }
  /**
   * Metrics for semantic similarity results.
   */
  export interface Schema$AggregatedMetricsSemanticSimilarityMetrics {
    /**
     * Output only. The average semantic similarity score (0-4).
     */
    score?: number | null;
  }
  /**
   * Metrics for tool call latency.
   */
  export interface Schema$AggregatedMetricsToolCallLatencyMetrics {
    /**
     * Output only. The average latency of the tool calls.
     */
    averageLatency?: string | null;
    /**
     * Output only. The name of the tool.
     */
    tool?: string | null;
  }
  /**
   * Metrics for a single tool.
   */
  export interface Schema$AggregatedMetricsToolMetrics {
    /**
     * Output only. The number of times the tool failed.
     */
    failCount?: number | null;
    /**
     * Output only. The number of times the tool passed.
     */
    passCount?: number | null;
    /**
     * Output only. The name of the tool.
     */
    tool?: string | null;
  }
  /**
   * Metrics for turn latency.
   */
  export interface Schema$AggregatedMetricsTurnLatencyMetrics {
    /**
     * Output only. The average latency of the turns.
     */
    averageLatency?: string | null;
  }
  /**
   * Configuration for the ambient sound to be played with the synthesized agent response, to enhance the naturalness of the conversation.
   */
  export interface Schema$AmbientSoundConfig {
    /**
     * Optional. Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com` has `storage.objects.get` permission to the Cloud Storage object.
     */
    gcsUri?: string | null;
    /**
     * Optional. Deprecated: `prebuilt_ambient_noise` is deprecated in favor of `prebuilt_ambient_sound`.
     */
    prebuiltAmbientNoise?: string | null;
    /**
     * Optional. Name of the prebuilt ambient sound. Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum" - "office_1" - "office_2" - "office_3" - "room_1" - "room_2" - "room_3" - "room_4" - "room_5" - "air_conditioner"
     */
    prebuiltAmbientSound?: string | null;
    /**
     * Optional. Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
     */
    volumeGainDb?: number | null;
  }
  /**
   * Authentication information required for API calls.
   */
  export interface Schema$ApiAuthentication {
    /**
     * Optional. Config for API key auth.
     */
    apiKeyConfig?: Schema$ApiKeyConfig;
    /**
     * Optional. Config for bearer token auth.
     */
    bearerTokenConfig?: Schema$BearerTokenConfig;
    /**
     * Optional. Config for OAuth.
     */
    oauthConfig?: Schema$OAuthConfig;
    /**
     * Optional. Config for service account authentication.
     */
    serviceAccountAuthConfig?: Schema$ServiceAccountAuthConfig;
    /**
     * Optional. Config for ID token auth generated from CES service agent.
     */
    serviceAgentIdTokenAuthConfig?: Schema$ServiceAgentIdTokenAuthConfig;
  }
  /**
   * Configurations for authentication with API key.
   */
  export interface Schema$ApiKeyConfig {
    /**
     * Required. The name of the SecretManager secret version resource storing the API key. Format: `projects/{project\}/secrets/{secret\}/versions/{version\}` Note: You should grant `roles/secretmanager.secretAccessor` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`.
     */
    apiKeySecretVersion?: string | null;
    /**
     * Required. The parameter name or the header name of the API key. E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
     */
    keyName?: string | null;
    /**
     * Required. Key location in the request.
     */
    requestLocation?: string | null;
  }
  /**
   * An app serves as a top-level container for a group of agents, including the root agent and its sub-agents, along with their associated configurations. These agents work together to achieve specific goals within the app's context.
   */
  export interface Schema$App {
    /**
     * Optional. Audio processing configuration of the app.
     */
    audioProcessingConfig?: Schema$AudioProcessingConfig;
    /**
     * Optional. The default client certificate settings for the app.
     */
    clientCertificateSettings?: Schema$ClientCertificateSettings;
    /**
     * Output only. Timestamp when the app was created.
     */
    createTime?: string | null;
    /**
     * Optional. The data store settings for the app.
     */
    dataStoreSettings?: Schema$DataStoreSettings;
    /**
     * Optional. The default channel profile used by the app.
     */
    defaultChannelProfile?: Schema$ChannelProfile;
    /**
     * Output only. Number of deployments in the app.
     */
    deploymentCount?: number | null;
    /**
     * Optional. Human-readable description of the app.
     */
    description?: string | null;
    /**
     * Required. Display name of the app.
     */
    displayName?: string | null;
    /**
     * Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Optional. The evaluation thresholds for the app.
     */
    evaluationMetricsThresholds?: Schema$EvaluationMetricsThresholds;
    /**
     * Optional. The evaluation personas for the app. This field is used to define the personas that can be used for evaluation. Maximum of 30 personas can be defined.
     */
    evaluationPersonas?: Schema$EvaluationPersona[];
    /**
     * Optional. The evaluation settings for the app.
     */
    evaluationSettings?: Schema$EvaluationSettings;
    /**
     * Optional. Instructions for all the agents in the app. You can use this instruction to set up a stable identity or personality across all the agents.
     */
    globalInstruction?: string | null;
    /**
     * Optional. List of guardrails for the app. Format: `projects/{project\}/locations/{location\}/apps/{app\}/guardrails/{guardrail\}`
     */
    guardrails?: string[] | null;
    /**
     * Optional. Language settings of the app.
     */
    languageSettings?: Schema$LanguageSettings;
    /**
     * Optional. Indicates whether the app is locked for changes. If the app is locked, modifications to the app resources will be rejected.
     */
    locked?: boolean | null;
    /**
     * Optional. Logging settings of the app.
     */
    loggingSettings?: Schema$LoggingSettings;
    /**
     * Optional. Metadata about the app. This field can be used to store additional information relevant to the app's details or intended usages.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Optional. The default LLM model settings for the app. Individual resources (e.g. agents, guardrails) can override these configurations as needed.
     */
    modelSettings?: Schema$ModelSettings;
    /**
     * Identifier. The unique identifier of the app. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    name?: string | null;
    /**
     * Optional. Whether the app is pinned in the app list.
     */
    pinned?: boolean | null;
    /**
     * Output only. The declarations of predefined variables for the app.
     */
    predefinedVariableDeclarations?: Schema$AppVariableDeclaration[];
    /**
     * Optional. The root agent is the entry point of the app. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    rootAgent?: string | null;
    /**
     * Optional. TimeZone settings of the app.
     */
    timeZoneSettings?: Schema$TimeZoneSettings;
    /**
     * Optional. The tool execution mode for the app. If not provided, will default to PARALLEL.
     */
    toolExecutionMode?: string | null;
    /**
     * Output only. Timestamp when the app was last updated.
     */
    updateTime?: string | null;
    /**
     * Optional. The declarations of the variables.
     */
    variableDeclarations?: Schema$AppVariableDeclaration[];
  }
  /**
   * A snapshot of the app.
   */
  export interface Schema$AppSnapshot {
    /**
     * Optional. List of agents in the app.
     */
    agents?: Schema$Agent[];
    /**
     * Optional. The basic settings for the app.
     */
    app?: Schema$App;
    /**
     * Optional. List of examples in the app.
     */
    examples?: Schema$Example[];
    /**
     * Optional. List of guardrails in the app.
     */
    guardrails?: Schema$Guardrail[];
    /**
     * Optional. List of tools in the app.
     */
    tools?: Schema$Tool[];
    /**
     * Optional. List of toolsets in the app.
     */
    toolsets?: Schema$Toolset[];
  }
  /**
   * Defines the structure and metadata for a variable.
   */
  export interface Schema$AppVariableDeclaration {
    /**
     * Required. The description of the variable.
     */
    description?: string | null;
    /**
     * Required. The name of the variable. The name must start with a letter or underscore and contain only letters, numbers, or underscores.
     */
    name?: string | null;
    /**
     * Required. The schema of the variable.
     */
    schema?: Schema$Schema;
  }
  /**
   * In Customer Engagement Suite (CES), an app version is a snapshot of the app at a specific point in time. It is immutable and cannot be modified once created.
   */
  export interface Schema$AppVersion {
    /**
     * Output only. Timestamp when the app version was created.
     */
    createTime?: string | null;
    /**
     * Output only. Email of the user who created the app version.
     */
    creator?: string | null;
    /**
     * Optional. The description of the app version.
     */
    description?: string | null;
    /**
     * Optional. The display name of the app version.
     */
    displayName?: string | null;
    /**
     * Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Identifier. The unique identifier of the app version. Format: `projects/{project\}/locations/{location\}/apps/{app\}/versions/{version\}`
     */
    name?: string | null;
    /**
     * Output only. The snapshot of the app when the version is created.
     */
    snapshot?: Schema$AppSnapshot;
  }
  /**
   * Configuration for how the input and output audio should be processed and delivered.
   */
  export interface Schema$AudioProcessingConfig {
    /**
     * Optional. Configuration for the ambient sound to be played with the synthesized agent response, to enhance the naturalness of the conversation.
     */
    ambientSoundConfig?: Schema$AmbientSoundConfig;
    /**
     * Optional. Configures the agent behavior for the user barge-in activities.
     */
    bargeInConfig?: Schema$BargeInConfig;
    /**
     * Optional. The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. If not set, the agent will not prompt the user for reengagement.
     */
    inactivityTimeout?: string | null;
    /**
     * Optional. Configuration of how the agent response should be synthesized, mapping from the language code to SynthesizeSpeechConfig. If the configuration for the specified language code is not found, the configuration for the root language code will be used. For example, if the map contains "en-us" and "en", and the specified language code is "en-gb", then "en" configuration will be used. Note: Language code is case-insensitive.
     */
    synthesizeSpeechConfigs?: {
      [key: string]: Schema$SynthesizeSpeechConfig;
    } | null;
  }
  /**
   * Configuration for how the audio interactions should be recorded.
   */
  export interface Schema$AudioRecordingConfig {
    /**
     * Optional. The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Please choose a bucket location that meets your data residency requirements. Note: If the Cloud Storage bucket is in a different project from the app, you should grant `storage.objects.create` permission to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`.
     */
    gcsBucket?: string | null;
    /**
     * Optional. The Cloud Storage path prefix for audio recordings. This prefix can include the following placeholders, which will be dynamically substituted at serving time: - $project: project ID - $location: app location - $app: app ID - $date: session date in YYYY-MM-DD format - $session: session ID If the path prefix is not specified, the default prefix `$project/$location/$app/$date/$session/` will be used.
     */
    gcsPathPrefix?: string | null;
  }
  /**
   * Configuration for how the user barge-in activities should be handled.
   */
  export interface Schema$BargeInConfig {
    /**
     * Optional. If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. This should not be used in scenarios where agent responses are displayed visually.
     */
    bargeInAwareness?: boolean | null;
    /**
     * Optional. Disables user barge-in while the agent is speaking. If true, user input during agent response playback will be ignored. Deprecated: `disable_barge_in` is deprecated in favor of `disable_barge_in_control` in ChannelProfile.
     */
    disableBargeIn?: boolean | null;
  }
  /**
   * Request message for AgentService.BatchDeleteConversations.
   */
  export interface Schema$BatchDeleteConversationsRequest {
    /**
     * Required. The resource names of the conversations to delete.
     */
    conversations?: string[] | null;
  }
  /**
   * Response message for AgentService.BatchDeleteConversations.
   */
  export interface Schema$BatchDeleteConversationsResponse {
    /**
     * The list of conversations that were successfully deleted.
     */
    deletedConversations?: string[] | null;
    /**
     * Optional. A list of error messages associated with conversations that failed to be deleted.
     */
    errorMessages?: string[] | null;
    /**
     * The list of conversations that failed to be deleted.
     */
    failedConversations?: string[] | null;
  }
  /**
   * Configurations for authentication with a bearer token.
   */
  export interface Schema$BearerTokenConfig {
    /**
     * Required. The bearer token. Must be in the format `$context.variables.`.
     */
    token?: string | null;
  }
  /**
   * Settings to describe the BigQuery export behaviors for the app.
   */
  export interface Schema$BigQueryExportSettings {
    /**
     * Optional. The BigQuery dataset to export the data to.
     */
    dataset?: string | null;
    /**
     * Optional. Indicates whether the BigQuery export is enabled.
     */
    enabled?: boolean | null;
    /**
     * Optional. The project ID of the BigQuery dataset to export the data to. Note: If the BigQuery dataset is in a different project from the app, you should grant `roles/bigquery.admin` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`.
     */
    project?: string | null;
  }
  /**
   * Represents a blob input or output in the conversation.
   */
  export interface Schema$Blob {
    /**
     * Required. Raw bytes of the blob.
     */
    data?: string | null;
    /**
     * Required. The IANA standard MIME type of the source data.
     */
    mimeType?: string | null;
  }
  /**
   * A callback defines the custom logic to be executed at various stages of agent interaction.
   */
  export interface Schema$Callback {
    /**
     * Optional. Human-readable description of the callback.
     */
    description?: string | null;
    /**
     * Optional. Whether the callback is disabled. Disabled callbacks are ignored by the agent.
     */
    disabled?: boolean | null;
    /**
     * Optional. If enabled, the callback will also be executed on intermediate model outputs. This setting only affects after model callback. **ENABLE WITH CAUTION**. Typically after model callback only needs to be executed after receiving all model responses. Enabling proactive execution may have negative implication on the execution cost and latency, and should only be enabled in rare situations.
     */
    proactiveExecutionEnabled?: boolean | null;
    /**
     * Required. The python code to execute for the callback.
     */
    pythonCode?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Changelogs represent a change made to the app or to an resource within the app.
   */
  export interface Schema$Changelog {
    /**
     * Output only. The action that was performed on the resource.
     */
    action?: string | null;
    /**
     * Output only. Email address of the change author.
     */
    author?: string | null;
    /**
     * Output only. The time when the change was made.
     */
    createTime?: string | null;
    /**
     * Output only. The dependent resources that were changed.
     */
    dependentResources?: Array<{[key: string]: any}> | null;
    /**
     * Output only. Description of the change. which typically captures the changed fields in the resource.
     */
    description?: string | null;
    /**
     * Output only. Display name of the change. It typically should be the display name of the resource that was changed.
     */
    displayName?: string | null;
    /**
     * Identifier. The unique identifier of the changelog. Format: `projects/{project\}/locations/{location\}/apps/{app\}/changelogs/{changelog\}`
     */
    name?: string | null;
    /**
     * Output only. The new resource after the change.
     */
    newResource?: {[key: string]: any} | null;
    /**
     * Output only. The original resource before the change.
     */
    originalResource?: {[key: string]: any} | null;
    /**
     * Output only. The resource that was changed.
     */
    resource?: string | null;
    /**
     * Output only. The type of the resource that was changed.
     */
    resourceType?: string | null;
    /**
     * Output only. The monotonically increasing sequence number of the changelog.
     */
    sequenceNumber?: string | null;
  }
  /**
   * A ChannelProfile configures the agent's behavior for a specific communication channel, such as web UI or telephony.
   */
  export interface Schema$ChannelProfile {
    /**
     * Optional. The type of the channel profile.
     */
    channelType?: string | null;
    /**
     * Optional. Whether to disable user barge-in control in the conversation. - **true**: User interruptions are disabled while the agent is speaking. - **false**: The agent retains automatic control over when the user can interrupt.
     */
    disableBargeInControl?: boolean | null;
    /**
     * Optional. Whether to disable DTMF (dual-tone multi-frequency).
     */
    disableDtmf?: boolean | null;
    /**
     * Optional. The noise suppression level of the channel profile. Available values are "low", "moderate", "high", "very_high".
     */
    noiseSuppressionLevel?: string | null;
    /**
     * Optional. The persona property of the channel profile.
     */
    personaProperty?: Schema$ChannelProfilePersonaProperty;
    /**
     * Optional. The unique identifier of the channel profile.
     */
    profileId?: string | null;
    /**
     * Optional. The configuration for the web widget.
     */
    webWidgetConfig?: Schema$ChannelProfileWebWidgetConfig;
  }
  /**
   * Represents the persona property of a channel.
   */
  export interface Schema$ChannelProfilePersonaProperty {
    /**
     * Optional. The persona of the channel.
     */
    persona?: string | null;
  }
  /**
   * Message for configuration for the web widget.
   */
  export interface Schema$ChannelProfileWebWidgetConfig {
    /**
     * Optional. The modality of the web widget.
     */
    modality?: string | null;
    /**
     * Optional. The security settings of the web widget.
     */
    securitySettings?: Schema$ChannelProfileWebWidgetConfigSecuritySettings;
    /**
     * Optional. The theme of the web widget.
     */
    theme?: string | null;
    /**
     * Optional. The title of the web widget.
     */
    webWidgetTitle?: string | null;
  }
  /**
   * Security settings for the web widget.
   */
  export interface Schema$ChannelProfileWebWidgetConfigSecuritySettings {
    /**
     * Optional. The origins that are allowed to host the web widget. An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com"
     */
    allowedOrigins?: string[] | null;
    /**
     * Optional. Indicates whether origin check for the web widget is enabled. If `true`, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins.
     */
    enableOriginCheck?: boolean | null;
    /**
     * Optional. Indicates whether public access to the web widget is enabled. If `true`, the web widget will be publicly accessible. If `false`, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent.
     */
    enablePublicAccess?: boolean | null;
    /**
     * Optional. Indicates whether reCAPTCHA verification for the web widget is enabled.
     */
    enableRecaptcha?: boolean | null;
  }
  /**
   * A chunk of content within a message.
   */
  export interface Schema$Chunk {
    /**
     * Optional. Agent transfer event.
     */
    agentTransfer?: Schema$AgentTransfer;
    /**
     * A struct represents default variables at the start of the conversation, keyed by variable names.
     */
    defaultVariables?: {[key: string]: any} | null;
    /**
     * Optional. Image data.
     */
    image?: Schema$Image;
    /**
     * Optional. Custom payload data.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. Text data.
     */
    text?: string | null;
    /**
     * Optional. Tool execution request.
     */
    toolCall?: Schema$ToolCall;
    /**
     * Optional. Tool execution response.
     */
    toolResponse?: Schema$ToolResponse;
    /**
     * Optional. Transcript associated with the audio.
     */
    transcript?: string | null;
    /**
     * A struct represents variables that were updated in the conversation, keyed by variable names.
     */
    updatedVariables?: {[key: string]: any} | null;
  }
  /**
   * Citations associated with the agent response.
   */
  export interface Schema$Citations {
    /**
     * List of cited pieces of information.
     */
    citedChunks?: Schema$CitationsCitedChunk[];
  }
  /**
   * Piece of cited information.
   */
  export interface Schema$CitationsCitedChunk {
    /**
     * Text used for citation.
     */
    text?: string | null;
    /**
     * Title of the cited document.
     */
    title?: string | null;
    /**
     * URI used for citation.
     */
    uri?: string | null;
  }
  /**
   * Settings for custom client certificates.
   */
  export interface Schema$ClientCertificateSettings {
    /**
     * Optional. The name of the SecretManager secret version resource storing the passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. Format: `projects/{project\}/secrets/{secret\}/versions/{version\}`
     */
    passphrase?: string | null;
    /**
     * Required. The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: `projects/{project\}/secrets/{secret\}/versions/{version\}`
     */
    privateKey?: string | null;
    /**
     * Required. The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.
     */
    tlsCertificate?: string | null;
  }
  /**
   * Represents a client-side function that the agent can invoke. When the tool is chosen by the agent, control is handed off to the client. The client is responsible for executing the function and returning the result as a ToolResponse to continue the interaction with the agent.
   */
  export interface Schema$ClientFunction {
    /**
     * Optional. The function description.
     */
    description?: string | null;
    /**
     * Required. The function name.
     */
    name?: string | null;
    /**
     * Optional. The schema of the function parameters.
     */
    parameters?: Schema$Schema;
    /**
     * Optional. The schema of the function response.
     */
    response?: Schema$Schema;
  }
  /**
   * Settings to describe the Cloud Logging behaviors for the app.
   */
  export interface Schema$CloudLoggingSettings {
    /**
     * Optional. Whether to enable Cloud Logging for the sessions.
     */
    enableCloudLogging?: boolean | null;
  }
  /**
   * A code block to be executed instead of a real tool call.
   */
  export interface Schema$CodeBlock {
    /**
     * Required. Python code which will be invoked in tool fake mode. Expected Python function signature - To catch all tool calls: def fake_tool_call(tool: Tool, input: dict[str, Any], callback_context: CallbackContext) -\> Optional[dict[str, Any]]: To catch a specific tool call: def fake_{tool_id\}(tool: Tool, input: dict[str, Any], callback_context: CallbackContext) -\> Optional[dict[str, Any]]: If the function returns None, the real tool will be invoked instead.
     */
    pythonCode?: string | null;
  }
  /**
   * A ConnectorTool allows connections to different integrations. See: https://cloud.google.com/integration-connectors/docs/overview.
   */
  export interface Schema$ConnectorTool {
    /**
     * Required. Action for the tool to use.
     */
    action?: Schema$Action;
    /**
     * Optional. Configures how authentication is handled in Integration Connectors. By default, an admin authentication is passed in the Integration Connectors API requests. You can override it with a different end-user authentication config. **Note**: The Connection must have authentication override enabled in order to specify an EUC configuration here - otherwise, the ConnectorTool creation will fail. See https://cloud.google.com/application-integration/docs/configure-connectors-task#configure-authentication-override for details.
     */
    authConfig?: Schema$EndUserAuthConfig;
    /**
     * Required. The full resource name of the referenced Integration Connectors Connection. Format: `projects/{project\}/locations/{location\}/connections/{connection\}`
     */
    connection?: string | null;
    /**
     * Optional. The description of the tool that can be used by the Agent to decide whether to call this ConnectorTool.
     */
    description?: string | null;
    /**
     * Optional. The name of the tool that can be used by the Agent to decide whether to call this ConnectorTool.
     */
    name?: string | null;
  }
  /**
   * A toolset that generates tools from an Integration Connectors Connection.
   */
  export interface Schema$ConnectorToolset {
    /**
     * Optional. Configures how authentication is handled in Integration Connectors. By default, an admin authentication is passed in the Integration Connectors API requests. You can override it with a different end-user authentication config. **Note**: The Connection must have authentication override enabled in order to specify an EUC configuration here - otherwise, the Toolset creation will fail. See: https://cloud.google.com/application-integration/docs/configure-connectors-task#configure-authentication-override
     */
    authConfig?: Schema$EndUserAuthConfig;
    /**
     * Required. The full resource name of the referenced Integration Connectors Connection. Format: `projects/{project\}/locations/{location\}/connections/{connection\}`
     */
    connection?: string | null;
    /**
     * Required. The list of connector actions/entity operations to generate tools for.
     */
    connectorActions?: Schema$Action[];
  }
  /**
   * A conversation represents an interaction between an end user and the CES app.
   */
  export interface Schema$Conversation {
    /**
     * Output only. The version of the app used for processing the conversation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/versions/{version\}`
     */
    appVersion?: string | null;
    /**
     * DEPRECATED. Please use input_types instead.
     */
    channelType?: string | null;
    /**
     * Output only. The deployment of the app used for processing the conversation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}`
     */
    deployment?: string | null;
    /**
     * Output only. Timestamp when the conversation was completed.
     */
    endTime?: string | null;
    /**
     * Output only. The agent that initially handles the conversation. If not specified, the conversation is handled by the root agent. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    entryAgent?: string | null;
    /**
     * Output only. The input types of the conversation.
     */
    inputTypes?: string[] | null;
    /**
     * Output only. The language code of the conversation.
     */
    languageCode?: string | null;
    /**
     * Deprecated. Use turns instead.
     */
    messages?: Schema$Message[];
    /**
     * Identifier. The unique identifier of the conversation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/conversations/{conversation\}`
     */
    name?: string | null;
    /**
     * Output only. Indicate the source of the conversation.
     */
    source?: string | null;
    /**
     * Output only. Timestamp when the conversation was created.
     */
    startTime?: string | null;
    /**
     * Output only. The number of turns in the conversation.
     */
    turnCount?: number | null;
    /**
     * Required. The turns in the conversation.
     */
    turns?: Schema$ConversationTurn[];
  }
  /**
   * Settings to describe the conversation logging behaviors for the app.
   */
  export interface Schema$ConversationLoggingSettings {
    /**
     * Optional. Whether to disable conversation logging for the sessions.
     */
    disableConversationLogging?: boolean | null;
  }
  /**
   * All information about a single turn in the conversation.
   */
  export interface Schema$ConversationTurn {
    /**
     * Optional. List of messages in the conversation turn, including user input, agent responses and intermediate events during the processing.
     */
    messages?: Schema$Message[];
    /**
     * Optional. The root span of the action processing.
     */
    rootSpan?: Schema$Span;
  }
  /**
   * A DataStore resource in Vertex AI Search.
   */
  export interface Schema$DataStore {
    /**
     * Output only. The connector config for the data store connection.
     */
    connectorConfig?: Schema$DataStoreConnectorConfig;
    /**
     * Output only. Timestamp when the data store was created.
     */
    createTime?: string | null;
    /**
     * Output only. The display name of the data store.
     */
    displayName?: string | null;
    /**
     * Output only. The document processing mode for the data store connection. Only set for PUBLIC_WEB and UNSTRUCTURED data stores.
     */
    documentProcessingMode?: string | null;
    /**
     * Required. Full resource name of the DataStore. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{dataStore\}`
     */
    name?: string | null;
    /**
     * Output only. The type of the data store. This field is readonly and populated by the server.
     */
    type?: string | null;
  }
  /**
   * The connector config for the data store connection.
   */
  export interface Schema$DataStoreConnectorConfig {
    /**
     * Resource name of the collection the data store belongs to.
     */
    collection?: string | null;
    /**
     * Display name of the collection the data store belongs to.
     */
    collectionDisplayName?: string | null;
    /**
     * The name of the data source. Example: `salesforce`, `jira`, `confluence`, `bigquery`.
     */
    dataSource?: string | null;
  }
  /**
   * Data store related settings for the app.
   */
  export interface Schema$DataStoreSettings {
    /**
     * Output only. The engines for the app.
     */
    engines?: Schema$DataStoreSettingsEngine[];
  }
  /**
   * An engine to which the data stores are connected. See Vertex AI Search: https://cloud.google.com/generative-ai-app-builder/docs/enterprise-search-introduction.
   */
  export interface Schema$DataStoreSettingsEngine {
    /**
     * Output only. The resource name of the engine. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/engines/{engine\}`
     */
    name?: string | null;
    /**
     * Output only. The type of the engine.
     */
    type?: string | null;
  }
  /**
   * Tool to retrieve from Vertex AI Search datastore or engine for grounding. Accepts either a datastore or an engine, but not both. See Vertex AI Search: https://cloud.google.com/generative-ai-app-builder/docs/enterprise-search-introduction.
   */
  export interface Schema$DataStoreTool {
    /**
     * Optional. Boost specification to boost certain documents.
     */
    boostSpecs?: Schema$DataStoreToolBoostSpecs[];
    /**
     * Optional. Search within a single specific DataStore.
     */
    dataStoreSource?: Schema$DataStoreToolDataStoreSource;
    /**
     * Optional. The tool description.
     */
    description?: string | null;
    /**
     * Optional. Search within an Engine (potentially across multiple DataStores).
     */
    engineSource?: Schema$DataStoreToolEngineSource;
    /**
     * Optional. The filter parameter behavior.
     */
    filterParameterBehavior?: string | null;
    /**
     * Optional. The modality configs for the data store.
     */
    modalityConfigs?: Schema$DataStoreToolModalityConfig[];
    /**
     * Required. The data store tool name.
     */
    name?: string | null;
  }
  /**
   * Boost specification to boost certain documents.
   */
  export interface Schema$DataStoreToolBoostSpec {
    /**
     * Required. A list of boosting specifications.
     */
    conditionBoostSpecs?: Schema$DataStoreToolBoostSpecConditionBoostSpec[];
  }
  /**
   * Boost specification for a condition.
   */
  export interface Schema$DataStoreToolBoostSpecConditionBoostSpec {
    /**
     * Optional. Strength of the boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the suggestions a big promotion. However, it does not necessarily mean that the top result will be a boosted suggestion. Setting to -1.0 gives the suggestions a big demotion. However, other suggestions that are relevant might still be shown. Setting to 0.0 means no boost applied. The boosting condition is ignored.
     */
    boost?: number | null;
    /**
     * Optional. Complex specification for custom ranking based on customer defined attribute value.
     */
    boostControlSpec?: Schema$DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec;
    /**
     * Required. An expression which specifies a boost condition. The syntax is the same as filter expression syntax. Currently, the only supported condition is a list of BCP-47 lang codes. Example: To boost suggestions in languages en or fr: (lang_code: ANY("en", "fr"))
     */
    condition?: string | null;
  }
  /**
   * Specification for custom ranking based on customer specified attribute value. It provides more controls for customized ranking than the simple (condition, boost) combination above.
   */
  export interface Schema$DataStoreToolBoostSpecConditionBoostSpecBoostControlSpec {
    /**
     * Optional. The attribute type to be used to determine the boost amount. The attribute value can be derived from the field value of the specified field_name. In the case of numerical it is straightforward i.e. attribute_value = numerical_field_value. In the case of freshness however, attribute_value = (time.now() - datetime_field_value).
     */
    attributeType?: string | null;
    /**
     * Optional. The control points used to define the curve. The monotonic function (defined through the interpolation_type above) passes through the control points listed here.
     */
    controlPoints?: Schema$DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint[];
    /**
     * Optional. The name of the field whose value will be used to determine the boost amount.
     */
    fieldName?: string | null;
    /**
     * Optional. The interpolation type to be applied to connect the control points listed below.
     */
    interpolationType?: string | null;
  }
  /**
   * The control points used to define the curve. The curve defined through these control points can only be monotonically increasing or decreasing(constant values are acceptable).
   */
  export interface Schema$DataStoreToolBoostSpecConditionBoostSpecBoostControlSpecControlPoint {
    /**
     * Optional. Can be one of: 1. The numerical field value. 2. The duration spec for freshness: The value must be formatted as an XSD `dayTimeDuration` value (a restricted subset of an ISO 8601 duration value). The pattern for this is: `nDnM]`.
     */
    attributeValue?: string | null;
    /**
     * Optional. The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above.
     */
    boostAmount?: number | null;
  }
  /**
   * Boost specifications to boost certain documents. For more information, please refer to https://cloud.google.com/generative-ai-app-builder/docs/boosting.
   */
  export interface Schema$DataStoreToolBoostSpecs {
    /**
     * Required. The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{dataStore\}.
     */
    dataStores?: string[] | null;
    /**
     * Required. A list of boosting specifications.
     */
    spec?: Schema$DataStoreToolBoostSpec[];
  }
  /**
   * Configuration for searching within a specific DataStore.
   */
  export interface Schema$DataStoreToolDataStoreSource {
    /**
     * Optional. The data store.
     */
    dataStore?: Schema$DataStore;
    /**
     * Optional. Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata
     */
    filter?: string | null;
  }
  /**
   * Configuration for searching within an Engine, potentially targeting specific DataStores.
   */
  export interface Schema$DataStoreToolEngineSource {
    /**
     * Optional. Use to target specific DataStores within the Engine. If empty, the search applies to all DataStores associated with the Engine.
     */
    dataStoreSources?: Schema$DataStoreToolDataStoreSource[];
    /**
     * Required. Full resource name of the Engine. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/engines/{engine\}`
     */
    engine?: string | null;
    /**
     * Optional. A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata
     */
    filter?: string | null;
  }
  /**
   * Grounding configuration.
   */
  export interface Schema$DataStoreToolGroundingConfig {
    /**
     * Optional. Whether grounding is disabled.
     */
    disabled?: boolean | null;
    /**
     * Optional. The groundedness threshold of the answer based on the retrieved sources. The value has a configurable range of [1, 5]. The level is used to threshold the groundedness of the answer, meaning that all responses with a groundedness score below the threshold will fall back to returning relevant snippets only. For example, a level of 3 means that the groundedness score must be 3 or higher for the response to be returned.
     */
    groundingLevel?: number | null;
  }
  /**
   * If specified, will apply the given configuration for the specified modality.
   */
  export interface Schema$DataStoreToolModalityConfig {
    /**
     * Optional. The grounding configuration.
     */
    groundingConfig?: Schema$DataStoreToolGroundingConfig;
    /**
     * Required. The modality type.
     */
    modalityType?: string | null;
    /**
     * Optional. The rewriter config.
     */
    rewriterConfig?: Schema$DataStoreToolRewriterConfig;
    /**
     * Optional. The summarization config.
     */
    summarizationConfig?: Schema$DataStoreToolSummarizationConfig;
  }
  /**
   * Rewriter configuration.
   */
  export interface Schema$DataStoreToolRewriterConfig {
    /**
     * Optional. Whether the rewriter is disabled.
     */
    disabled?: boolean | null;
    /**
     * Required. Configurations for the LLM model.
     */
    modelSettings?: Schema$ModelSettings;
    /**
     * Optional. The prompt definition. If not set, default prompt will be used.
     */
    prompt?: string | null;
  }
  /**
   * Summarization configuration.
   */
  export interface Schema$DataStoreToolSummarizationConfig {
    /**
     * Optional. Whether summarization is disabled.
     */
    disabled?: boolean | null;
    /**
     * Optional. Configurations for the LLM model.
     */
    modelSettings?: Schema$ModelSettings;
    /**
     * Optional. The prompt definition. If not set, default prompt will be used.
     */
    prompt?: string | null;
  }
  /**
   * Operation metadata for EvaluationService.DeleteEvaluationRun.
   */
  export interface Schema$DeleteEvaluationRunOperationMetadata {}
  /**
   * A deployment represents an immutable, queryable version of the app. It is used to deploy an app version with a specific channel profile.
   */
  export interface Schema$Deployment {
    /**
     * Required. The resource name of the app version to deploy. Format: projects/{project\}/locations/{location\}/apps/{app\}/versions/{version\}
     */
    appVersion?: string | null;
    /**
     * Required. The channel profile used in the deployment.
     */
    channelProfile?: Schema$ChannelProfile;
    /**
     * Output only. Timestamp when this deployment was created.
     */
    createTime?: string | null;
    /**
     * Required. Display name of the deployment.
     */
    displayName?: string | null;
    /**
     * Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Identifier. The resource name of the deployment. Format: projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}
     */
    name?: string | null;
    /**
     * Output only. Timestamp when this deployment was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Indicates the session has terminated, due to either successful completion (e.g. user says "Good bye!" ) or an agent escalation. The agent will not process any further inputs after session is terminated and the client should half-close and disconnect after receiving all remaining responses from the agent.
   */
  export interface Schema$EndSession {
    /**
     * Optional. Provides additional information about the end session signal, such as the reason for ending the session.
     */
    metadata?: {[key: string]: any} | null;
  }
  /**
   * End-user authentication configuration used for Connection calls. The field values must be the names of context variables in the format `$context.variables.`.
   */
  export interface Schema$EndUserAuthConfig {
    /**
     * Oauth 2.0 Authorization Code authentication.
     */
    oauth2AuthCodeConfig?: Schema$EndUserAuthConfigOauth2AuthCodeConfig;
    /**
     * JWT Profile Oauth 2.0 Authorization Grant authentication.
     */
    oauth2JwtBearerConfig?: Schema$EndUserAuthConfigOauth2JwtBearerConfig;
  }
  /**
   * Oauth 2.0 Authorization Code authentication configuration.
   */
  export interface Schema$EndUserAuthConfigOauth2AuthCodeConfig {
    /**
     * Required. Oauth token parameter name to pass through. Must be in the format `$context.variables.`.
     */
    oauthToken?: string | null;
  }
  /**
   * JWT Profile Oauth 2.0 Authorization Grant authentication configuration.
   */
  export interface Schema$EndUserAuthConfigOauth2JwtBearerConfig {
    /**
     * Required. Client parameter name to pass through. Must be in the format `$context.variables.`.
     */
    clientKey?: string | null;
    /**
     * Required. Issuer parameter name to pass through. Must be in the format `$context.variables.`.
     */
    issuer?: string | null;
    /**
     * Required. Subject parameter name to pass through. Must be in the format `$context.variables.`.
     */
    subject?: string | null;
  }
  /**
   * An evaluation represents all of the information needed to simulate and evaluate an agent.
   */
  export interface Schema$Evaluation {
    /**
     * Output only. The aggregated metrics for this evaluation across all runs.
     */
    aggregatedMetrics?: Schema$AggregatedMetrics;
    /**
     * Output only. The user who created the evaluation.
     */
    createdBy?: string | null;
    /**
     * Output only. Timestamp when the evaluation was created.
     */
    createTime?: string | null;
    /**
     * Optional. User-defined description of the evaluation.
     */
    description?: string | null;
    /**
     * Required. User-defined display name of the evaluation. Unique within an App.
     */
    displayName?: string | null;
    /**
     * Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Output only. List of evaluation datasets the evaluation belongs to. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationDatasets/{evaluationDataset\}`
     */
    evaluationDatasets?: string[] | null;
    /**
     * Output only. The EvaluationRuns that this Evaluation is associated with.
     */
    evaluationRuns?: string[] | null;
    /**
     * Optional. The golden steps to be evaluated.
     */
    golden?: Schema$EvaluationGolden;
    /**
     * Output only. Whether the evaluation is invalid. This can happen if an evaluation is referencing a tool, toolset, or agent that has since been deleted.
     */
    invalid?: boolean | null;
    /**
     * Output only. The latest evaluation result for this evaluation.
     */
    lastCompletedResult?: Schema$EvaluationResult;
    /**
     * Output only. The last 10 evaluation results for this evaluation. This is only populated if include_last_ten_results is set to true in the ListEvaluationsRequest or GetEvaluationRequest.
     */
    lastTenResults?: Schema$EvaluationResult[];
    /**
     * Output only. The user who last updated the evaluation.
     */
    lastUpdatedBy?: string | null;
    /**
     * Identifier. The unique identifier of this evaluation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/{evaluation\}`
     */
    name?: string | null;
    /**
     * Optional. The config for a scenario.
     */
    scenario?: Schema$EvaluationScenario;
    /**
     * Optional. User defined tags to categorize the evaluation.
     */
    tags?: string[] | null;
    /**
     * Output only. Timestamp when the evaluation was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * EvaluationConfig configures settings for running the evaluation.
   */
  export interface Schema$EvaluationConfig {
    /**
     * Optional. The channel to evaluate.
     */
    evaluationChannel?: string | null;
    /**
     * Optional. Configuration for processing the input audio.
     */
    inputAudioConfig?: Schema$InputAudioConfig;
    /**
     * Optional. Configuration for generating the output audio.
     */
    outputAudioConfig?: Schema$OutputAudioConfig;
    /**
     * Optional. Specifies whether the evaluation should use real tool calls or fake tools.
     */
    toolCallBehaviour?: string | null;
  }
  /**
   * An evaluation dataset represents a set of evaluations that are grouped together basaed on shared tags.
   */
  export interface Schema$EvaluationDataset {
    /**
     * Output only. The aggregated metrics for this evaluation dataset across all runs.
     */
    aggregatedMetrics?: Schema$AggregatedMetrics;
    /**
     * Output only. The user who created the evaluation dataset.
     */
    createdBy?: string | null;
    /**
     * Output only. Timestamp when the evaluation dataset was created.
     */
    createTime?: string | null;
    /**
     * Required. User-defined display name of the evaluation dataset. Unique within an App.
     */
    displayName?: string | null;
    /**
     * Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Optional. Evaluations that are included in this dataset.
     */
    evaluations?: string[] | null;
    /**
     * Output only. The user who last updated the evaluation dataset.
     */
    lastUpdatedBy?: string | null;
    /**
     * Identifier. The unique identifier of this evaluation dataset. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationDatasets/{evaluationDataset\}`
     */
    name?: string | null;
    /**
     * Output only. Timestamp when the evaluation dataset was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Information about an error encountered during an evaluation execution.
   */
  export interface Schema$EvaluationErrorInfo {
    /**
     * Output only. The error message.
     */
    errorMessage?: string | null;
    /**
     * Output only. The type of error.
     */
    errorType?: string | null;
    /**
     * Output only. The session ID for the conversation that caused the error.
     */
    sessionId?: string | null;
  }
  /**
   * An evaluation expectation represents a specific criteria to evaluate against.
   */
  export interface Schema$EvaluationExpectation {
    /**
     * Output only. Timestamp when the evaluation expectation was created.
     */
    createTime?: string | null;
    /**
     * Required. User-defined display name. Must be unique within the app.
     */
    displayName?: string | null;
    /**
     * Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Optional. Evaluation criteria based on an LLM prompt.
     */
    llmCriteria?: Schema$EvaluationExpectationLlmCriteria;
    /**
     * Identifier. The unique identifier of this evaluation expectation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationExpectations/{evaluation_expectation\}`
     */
    name?: string | null;
    /**
     * Optional. User-defined tags for expectations. Can be used to filter expectations.
     */
    tags?: string[] | null;
    /**
     * Output only. Timestamp when the evaluation expectation was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configuration for LLM-based evaluation criteria.
   */
  export interface Schema$EvaluationExpectationLlmCriteria {
    /**
     * Required. The prompt/instructions provided to the LLM judge.
     */
    prompt?: string | null;
  }
  /**
   * The steps required to replay a golden conversation.
   */
  export interface Schema$EvaluationGolden {
    /**
     * Optional. The evaluation expectations to evaluate the replayed conversation against. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationExpectations/{evaluationExpectation\}`
     */
    evaluationExpectations?: string[] | null;
    /**
     * Required. The golden turns required to replay a golden conversation.
     */
    turns?: Schema$EvaluationGoldenTurn[];
  }
  /**
   * Represents a single, checkable requirement.
   */
  export interface Schema$EvaluationGoldenExpectation {
    /**
     * Optional. Check that the agent responded with the correct response. The role "agent" is implied.
     */
    agentResponse?: Schema$Message;
    /**
     * Optional. Check that the agent transferred the conversation to a different agent.
     */
    agentTransfer?: Schema$AgentTransfer;
    /**
     * Optional. The tool response to mock, with the parameters of interest specified. Any parameters not specified will be hallucinated by the LLM.
     */
    mockToolResponse?: Schema$ToolResponse;
    /**
     * Optional. A note for this requirement, useful in reporting when specific checks fail. E.g., "Check_Payment_Tool_Called".
     */
    note?: string | null;
    /**
     * Optional. Check that a specific tool was called with the parameters.
     */
    toolCall?: Schema$ToolCall;
    /**
     * Optional. Check that a specific tool had the expected response.
     */
    toolResponse?: Schema$ToolResponse;
    /**
     * Optional. Check that the agent updated the session variables to the expected values. Used to also capture agent variable updates for golden evals.
     */
    updatedVariables?: {[key: string]: any} | null;
  }
  /**
   * A golden turn defines a single turn in a golden conversation.
   */
  export interface Schema$EvaluationGoldenTurn {
    /**
     * Optional. The root span of the golden turn for processing and maintaining audio information.
     */
    rootSpan?: Schema$Span;
    /**
     * Required. The steps required to replay a golden conversation.
     */
    steps?: Schema$EvaluationStep[];
  }
  /**
   * Threshold settings for metrics in an Evaluation.
   */
  export interface Schema$EvaluationMetricsThresholds {
    /**
     * Optional. The golden evaluation metrics thresholds.
     */
    goldenEvaluationMetricsThresholds?: Schema$EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;
    /**
     * Optional. The hallucination metric behavior for golden evaluations.
     */
    goldenHallucinationMetricBehavior?: string | null;
    /**
     * Optional. Deprecated: Use `golden_hallucination_metric_behavior` instead. The hallucination metric behavior is currently used for golden evaluations.
     */
    hallucinationMetricBehavior?: string | null;
    /**
     * Optional. The hallucination metric behavior for scenario evaluations.
     */
    scenarioHallucinationMetricBehavior?: string | null;
  }
  /**
   * Settings for golden evaluations.
   */
  export interface Schema$EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
    /**
     * Optional. The expectation level metrics thresholds.
     */
    expectationLevelMetricsThresholds?: Schema$EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
    /**
     * Optional. The tool matching settings. An extra tool call is a tool call that is present in the execution but does not match any tool call in the golden expectation.
     */
    toolMatchingSettings?: Schema$EvaluationMetricsThresholdsToolMatchingSettings;
    /**
     * Optional. The turn level metrics thresholds.
     */
    turnLevelMetricsThresholds?: Schema$EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
  }
  /**
   * Expectation level metrics thresholds.
   */
  export interface Schema$EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds {
    /**
     * Optional. The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.
     */
    toolInvocationParameterCorrectnessThreshold?: number | null;
  }
  /**
   * Turn level metrics thresholds.
   */
  export interface Schema$EvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds {
    /**
     * Optional. The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.
     */
    overallToolInvocationCorrectnessThreshold?: number | null;
    /**
     * Optional. The semantic similarity channel to use for evaluation.
     */
    semanticSimilarityChannel?: string | null;
    /**
     * Optional. The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is \>= 3.
     */
    semanticSimilaritySuccessThreshold?: number | null;
  }
  /**
   * Settings for matching tool calls.
   */
  export interface Schema$EvaluationMetricsThresholdsToolMatchingSettings {
    /**
     * Optional. Behavior for extra tool calls. Defaults to FAIL.
     */
    extraToolCallBehavior?: string | null;
  }
  /**
   * A persona represents an end user in an evaluation.
   */
  export interface Schema$EvaluationPersona {
    /**
     * Optional. The description of the persona.
     */
    description?: string | null;
    /**
     * Required. The display name of the persona. Unique within an app.
     */
    displayName?: string | null;
    /**
     * Required. The unique identifier of the persona. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationPersonas/{evaluationPersona\}`
     */
    name?: string | null;
    /**
     * Required. An instruction for the agent on how to behave in the evaluation.
     */
    personality?: string | null;
    /**
     * Optional. Configuration for how the persona sounds (TTS settings).
     */
    speechConfig?: Schema$EvaluationPersonaSpeechConfig;
  }
  /**
   * Configuration for Text-to-Speech generation.
   */
  export interface Schema$EvaluationPersonaSpeechConfig {
    /**
     * Optional. The simulated audio environment.
     */
    environment?: string | null;
    /**
     * Optional. The speaking rate. 1.0 is normal. Lower is slower (e.g., 0.8), higher is faster (e.g., 1.5). Useful for testing how the agent handles fast talkers.
     */
    speakingRate?: number | null;
    /**
     * Optional. The specific voice identifier/accent to use. Example: "en-US-Wavenet-D" or "en-GB-Standard-A"
     */
    voiceId?: string | null;
  }
  /**
   * An evaluation result represents the output of running an Evaluation.
   */
  export interface Schema$EvaluationResult {
    /**
     * Output only. The app version used to generate the conversation that resulted in this result. Format: `projects/{project\}/locations/{location\}/apps/{app\}/versions/{version\}`
     */
    appVersion?: string | null;
    /**
     * Output only. The display name of the `app_version` that the evaluation ran against.
     */
    appVersionDisplayName?: string | null;
    /**
     * Output only. The changelog of the app version that the evaluation ran against. This is populated if user runs evaluation on latest/draft.
     */
    changelog?: string | null;
    /**
     * Output only. The create time of the changelog of the app version that the evaluation ran against. This is populated if user runs evaluation on latest/draft.
     */
    changelogCreateTime?: string | null;
    /**
     * Output only. The configuration used in the evaluation run that resulted in this result.
     */
    config?: Schema$EvaluationConfig;
    /**
     * Output only. Timestamp when the evaluation result was created.
     */
    createTime?: string | null;
    /**
     * Required. Display name of the Evaluation Result. Unique within an Evaluation. By default, it has the following format: " result - ".
     */
    displayName?: string | null;
    /**
     * Output only. Deprecated: Use `error_info` instead. Errors encountered during execution.
     */
    error?: Schema$Status;
    /**
     * Output only. Error information for the evaluation result.
     */
    errorInfo?: Schema$EvaluationErrorInfo;
    /**
     * Output only. The evaluation thresholds for the result.
     */
    evaluationMetricsThresholds?: Schema$EvaluationMetricsThresholds;
    /**
     * Output only. The evaluation run that produced this result. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationRuns/{evaluationRun\}`
     */
    evaluationRun?: string | null;
    /**
     * Output only. The outcome of the evaluation. Only populated if execution_state is COMPLETE.
     */
    evaluationStatus?: string | null;
    /**
     * Output only. The state of the evaluation result execution.
     */
    executionState?: string | null;
    /**
     * Output only. The outcome of a golden evaluation.
     */
    goldenResult?: Schema$EvaluationResultGoldenResult;
    /**
     * Output only. The method used to run the golden evaluation.
     */
    goldenRunMethod?: string | null;
    /**
     * Output only. The user who initiated the evaluation run that resulted in this result.
     */
    initiatedBy?: string | null;
    /**
     * Identifier. The unique identifier of the evaluation result. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/{evaluation\}/results/{result\}`
     */
    name?: string | null;
    /**
     * Output only. The persona used to generate the conversation for the evaluation result.
     */
    persona?: Schema$EvaluationPersona;
    /**
     * Output only. The outcome of a scenario evaluation.
     */
    scenarioResult?: Schema$EvaluationResultScenarioResult;
  }
  /**
   * The result of a single evaluation expectation.
   */
  export interface Schema$EvaluationResultEvaluationExpectationResult {
    /**
     * Output only. The evaluation expectation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationExpectations/{evaluation_expectation\}`
     */
    evaluationExpectation?: string | null;
    /**
     * Output only. The explanation for the result.
     */
    explanation?: string | null;
    /**
     * Output only. The outcome of the evaluation expectation.
     */
    outcome?: string | null;
    /**
     * Output only. The prompt that was used for the evaluation.
     */
    prompt?: string | null;
  }
  /**
   * Specifies the expectation and the result of that expectation.
   */
  export interface Schema$EvaluationResultGoldenExpectationOutcome {
    /**
     * Output only. The expectation that was evaluated.
     */
    expectation?: Schema$EvaluationGoldenExpectation;
    /**
     * Output only. The result of the agent response expectation.
     */
    observedAgentResponse?: Schema$Message;
    /**
     * Output only. The result of the agent transfer expectation.
     */
    observedAgentTransfer?: Schema$AgentTransfer;
    /**
     * Output only. The result of the tool call expectation.
     */
    observedToolCall?: Schema$ToolCall;
    /**
     * Output only. The result of the tool response expectation.
     */
    observedToolResponse?: Schema$ToolResponse;
    /**
     * Output only. The outcome of the expectation.
     */
    outcome?: string | null;
    /**
     * Output only. The result of the semantic similarity check.
     */
    semanticSimilarityResult?: Schema$EvaluationResultSemanticSimilarityResult;
    /**
     * Output only. The result of the tool invocation check.
     */
    toolInvocationResult?: Schema$EvaluationResultGoldenExpectationOutcomeToolInvocationResult;
  }
  /**
   * The result of the tool invocation check.
   */
  export interface Schema$EvaluationResultGoldenExpectationOutcomeToolInvocationResult {
    /**
     * Output only. A free text explanation for the tool invocation result.
     */
    explanation?: string | null;
    /**
     * Output only. The outcome of the tool invocation check. This is determined by comparing the parameter_correctness_score to the threshold. If the score is equal to or above the threshold, the outcome will be PASS. Otherwise, the outcome will be FAIL.
     */
    outcome?: string | null;
    /**
     * Output only. The tool invocation parameter correctness score. This indicates the percent of parameters from the expected tool call that were also present in the actual tool call.
     */
    parameterCorrectnessScore?: number | null;
  }
  /**
   * The result of a golden evaluation.
   */
  export interface Schema$EvaluationResultGoldenResult {
    /**
     * Output only. The results of the evaluation expectations.
     */
    evaluationExpectationResults?: Schema$EvaluationResultEvaluationExpectationResult[];
    /**
     * Output only. The result of running each turn of the golden conversation.
     */
    turnReplayResults?: Schema$EvaluationResultGoldenResultTurnReplayResult[];
  }
  /**
   * The result of running a single turn of the golden conversation.
   */
  export interface Schema$EvaluationResultGoldenResultTurnReplayResult {
    /**
     * Output only. The conversation that was generated for this turn.
     */
    conversation?: string | null;
    /**
     * Output only. Information about the error that occurred during this turn.
     */
    errorInfo?: Schema$EvaluationErrorInfo;
    /**
     * Output only. The outcome of each expectation.
     */
    expectationOutcome?: Schema$EvaluationResultGoldenExpectationOutcome[];
    /**
     * Output only. The result of the hallucination check.
     */
    hallucinationResult?: Schema$EvaluationResultHallucinationResult;
    /**
     * Output only. The result of the overall tool invocation check.
     */
    overallToolInvocationResult?: Schema$EvaluationResultOverallToolInvocationResult;
    /**
     * Output only. The result of the semantic similarity check.
     */
    semanticSimilarityResult?: Schema$EvaluationResultSemanticSimilarityResult;
    /**
     * Output only. The latency of spans in the turn.
     */
    spanLatencies?: Schema$EvaluationResultSpanLatency[];
    /**
     * Output only. The latency of each tool call in the turn.
     */
    toolCallLatencies?: Schema$EvaluationResultToolCallLatency[];
    /**
     * Output only. Deprecated. Use OverallToolInvocationResult instead.
     */
    toolInvocationScore?: number | null;
    /**
     * Output only. The overall tool ordered invocation score for this turn. This indicates the overall percent of tools from the expected turn that were actually invoked in the expected order.
     */
    toolOrderedInvocationScore?: number | null;
    /**
     * Output only. Duration of the turn.
     */
    turnLatency?: string | null;
  }
  /**
   * The result of the hallucination check for a single turn.
   */
  export interface Schema$EvaluationResultHallucinationResult {
    /**
     * Output only. The explanation for the hallucination score.
     */
    explanation?: string | null;
    /**
     * Output only. The label associated with each score. Score 1: Justified Score 0: Not Justified Score -1: No Claim To Assess
     */
    label?: string | null;
    /**
     * Output only. The hallucination score. Can be -1, 0, 1.
     */
    score?: number | null;
  }
  /**
   * The result of the overall tool invocation check.
   */
  export interface Schema$EvaluationResultOverallToolInvocationResult {
    /**
     * Output only. The outcome of the tool invocation check. This is determined by comparing the tool_invocation_score to the overall_tool_invocation_correctness_threshold. If the score is equal to or above the threshold, the outcome will be PASS. Otherwise, the outcome will be FAIL.
     */
    outcome?: string | null;
    /**
     * The overall tool invocation score for this turn. This indicates the overall percent of tools from the expected turn that were actually invoked.
     */
    toolInvocationScore?: number | null;
  }
  /**
   * The outcome of a scenario expectation.
   */
  export interface Schema$EvaluationResultScenarioExpectationOutcome {
    /**
     * Output only. The expectation that was evaluated.
     */
    expectation?: Schema$EvaluationScenarioExpectation;
    /**
     * Output only. The observed agent response.
     */
    observedAgentResponse?: Schema$Message;
    /**
     * Output only. The observed tool call.
     */
    observedToolCall?: Schema$EvaluationResultScenarioExpectationOutcomeObservedToolCall;
    /**
     * Output only. The outcome of the ScenarioExpectation.
     */
    outcome?: string | null;
  }
  /**
   * The observed tool call and response.
   */
  export interface Schema$EvaluationResultScenarioExpectationOutcomeObservedToolCall {
    /**
     * Output only. The observed tool call.
     */
    toolCall?: Schema$ToolCall;
    /**
     * Output only. The observed tool response.
     */
    toolResponse?: Schema$ToolResponse;
  }
  /**
   * The outcome of a scenario evaluation.
   */
  export interface Schema$EvaluationResultScenarioResult {
    /**
     * Output only. Whether all expectations were satisfied for this turn.
     */
    allExpectationsSatisfied?: boolean | null;
    /**
     * Output only. The conversation that was generated in the scenario.
     */
    conversation?: string | null;
    /**
     * Output only. The results of the evaluation expectations.
     */
    evaluationExpectationResults?: Schema$EvaluationResultEvaluationExpectationResult[];
    /**
     * Output only. The outcome of each expectation.
     */
    expectationOutcomes?: Schema$EvaluationResultScenarioExpectationOutcome[];
    /**
     * Output only. The result of the hallucination check. There will be one hallucination result for each turn in the conversation.
     */
    hallucinationResult?: Schema$EvaluationResultHallucinationResult[];
    /**
     * Output only. The outcome of the rubric.
     */
    rubricOutcomes?: Schema$EvaluationResultScenarioRubricOutcome[];
    /**
     * Output only. The latency of spans in the conversation.
     */
    spanLatencies?: Schema$EvaluationResultSpanLatency[];
    /**
     * Output only. The task that was used when running the scenario for this result.
     */
    task?: string | null;
    /**
     * Output only. Whether the task was completed for this turn. This is a composite of all expectations satisfied, no hallucinations, and user goal satisfaction.
     */
    taskCompleted?: boolean | null;
    /**
     * Output only. The result of the task completion check.
     */
    taskCompletionResult?: Schema$EvaluationResultTaskCompletionResult;
    /**
     * Output only. The latency of each tool call execution in the conversation.
     */
    toolCallLatencies?: Schema$EvaluationResultToolCallLatency[];
    /**
     * Output only. The user facts that were used by the scenario for this result.
     */
    userFacts?: Schema$EvaluationScenarioUserFact[];
    /**
     * Output only. The result of the user goal satisfaction check.
     */
    userGoalSatisfactionResult?: Schema$EvaluationResultUserGoalSatisfactionResult;
  }
  /**
   * The outcome of the evaluation against the rubric.
   */
  export interface Schema$EvaluationResultScenarioRubricOutcome {
    /**
     * Output only. The rubric that was used to evaluate the conversation.
     */
    rubric?: string | null;
    /**
     * Output only. The score of the conversation against the rubric.
     */
    score?: number | null;
    /**
     * Output only. The rater's response to the rubric.
     */
    scoreExplanation?: string | null;
  }
  /**
   * The result of the semantic similarity check.
   */
  export interface Schema$EvaluationResultSemanticSimilarityResult {
    /**
     * Output only. The explanation for the semantic similarity score.
     */
    explanation?: string | null;
    /**
     * Output only. The label associated with each score. Score 4: Fully Consistent Score 3: Mostly Consistent Score 2: Partially Consistent (Minor Omissions) Score 1: Largely Inconsistent (Major Omissions) Score 0: Completely Inconsistent / Contradictory
     */
    label?: string | null;
    /**
     * Output only. The outcome of the semantic similarity check. This is determined by comparing the score to the semantic_similarity_success_threshold. If the score is equal to or above the threshold, the outcome will be PASS. Otherwise, the outcome will be FAIL.
     */
    outcome?: string | null;
    /**
     * Output only. The semantic similarity score. Can be 0, 1, 2, 3, or 4.
     */
    score?: number | null;
  }
  /**
   * The latency of a span execution.
   */
  export interface Schema$EvaluationResultSpanLatency {
    /**
     * Output only. The name of the user callback span.
     */
    callback?: string | null;
    /**
     * Output only. The display name of the span. Applicable to tool and guardrail spans.
     */
    displayName?: string | null;
    /**
     * Output only. The end time of span.
     */
    endTime?: string | null;
    /**
     * Output only. The latency of span.
     */
    executionLatency?: string | null;
    /**
     * Output only. The name of the LLM span.
     */
    model?: string | null;
    /**
     * Output only. The resource name of the guardrail or tool spans.
     */
    resource?: string | null;
    /**
     * Output only. The start time of span.
     */
    startTime?: string | null;
    /**
     * Output only. The toolset tool identifier.
     */
    toolset?: Schema$ToolsetTool;
    /**
     * Output only. The type of span.
     */
    type?: string | null;
  }
  /**
   * The result of the task completion check for the conversation.
   */
  export interface Schema$EvaluationResultTaskCompletionResult {
    /**
     * Output only. The explanation for the task completion score.
     */
    explanation?: string | null;
    /**
     * Output only. The label associated with each score. Score 1: Task Completed Score 0: Task Not Completed Score -1: User Goal Undefined
     */
    label?: string | null;
    /**
     * Output only. The task completion score. Can be -1, 0, 1
     */
    score?: number | null;
  }
  /**
   * The latency of a tool call execution.
   */
  export interface Schema$EvaluationResultToolCallLatency {
    /**
     * Output only. The display name of the tool.
     */
    displayName?: string | null;
    /**
     * Output only. The end time of the tool call execution.
     */
    endTime?: string | null;
    /**
     * Output only. The latency of the tool call execution.
     */
    executionLatency?: string | null;
    /**
     * Output only. The start time of the tool call execution.
     */
    startTime?: string | null;
    /**
     * Output only. The name of the tool that got executed. Format: `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}`.
     */
    tool?: string | null;
  }
  /**
   * The result of a user goal satisfaction check for a conversation.
   */
  export interface Schema$EvaluationResultUserGoalSatisfactionResult {
    /**
     * Output only. The explanation for the user task satisfaction score.
     */
    explanation?: string | null;
    /**
     * Output only. The label associated with each score. Score 1: User Task Satisfied Score 0: User Task Not Satisfied Score -1: User Task Unspecified
     */
    label?: string | null;
    /**
     * Output only. The user task satisfaction score. Can be -1, 0, 1.
     */
    score?: number | null;
  }
  /**
   * An evaluation run represents an all the evaluation results from an evaluation execution.
   */
  export interface Schema$EvaluationRun {
    /**
     * Output only. The app version to evaluate. Format: `projects/{project\}/locations/{location\}/apps/{app\}/versions/{version\}`
     */
    appVersion?: string | null;
    /**
     * Output only. The display name of the `app_version` that the evaluation ran against.
     */
    appVersionDisplayName?: string | null;
    /**
     * Output only. The changelog of the app version that the evaluation ran against. This is populated if user runs evaluation on latest/draft.
     */
    changelog?: string | null;
    /**
     * Output only. The create time of the changelog of the app version that the evaluation ran against. This is populated if user runs evaluation on latest/draft.
     */
    changelogCreateTime?: string | null;
    /**
     * Output only. The configuration used in the run.
     */
    config?: Schema$EvaluationConfig;
    /**
     * Output only. Timestamp when the evaluation run was created.
     */
    createTime?: string | null;
    /**
     * Optional. User-defined display name of the evaluation run. default: " run - ".
     */
    displayName?: string | null;
    /**
     * Output only. Deprecated: Use error_info instead. Errors encountered during execution.
     */
    error?: Schema$Status;
    /**
     * Output only. Error information for the evaluation run.
     */
    errorInfo?: Schema$EvaluationErrorInfo;
    /**
     * Output only. The evaluation dataset that this run is associated with. This field is mutually exclusive with `evaluations`. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationDatasets/{evaluationDataset\}`
     */
    evaluationDataset?: string | null;
    /**
     * Output only. The evaluation results that are part of this run. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/{evaluation\}/results/{result\}`
     */
    evaluationResults?: string[] | null;
    /**
     * Output only. Map of evaluation name to EvaluationRunSummary.
     */
    evaluationRunSummaries?: {
      [key: string]: Schema$EvaluationRunEvaluationRunSummary;
    } | null;
    /**
     * Output only. The evaluations that are part of this run. The list may contain evaluations of either type. This field is mutually exclusive with `evaluation_dataset`. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/{evaluation\}`
     */
    evaluations?: string[] | null;
    /**
     * Output only. The type of the evaluations in this run.
     */
    evaluationType?: string | null;
    /**
     * Output only. The method used to run the evaluation.
     */
    goldenRunMethod?: string | null;
    /**
     * Output only. The user who initiated the evaluation run.
     */
    initiatedBy?: string | null;
    /**
     * Output only. Latency report for the evaluation run.
     */
    latencyReport?: Schema$LatencyReport;
    /**
     * Identifier. The unique identifier of the evaluation run. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationRuns/{evaluationRun\}`
     */
    name?: string | null;
    /**
     * Optional. Configuration for running the optimization step after the evaluation run. If not set, the optimization step will not be run.
     */
    optimizationConfig?: Schema$OptimizationConfig;
    /**
     * Output only. The configuration to use for the run per persona.
     */
    personaRunConfigs?: Schema$PersonaRunConfig[];
    /**
     * Output only. The progress of the evaluation run.
     */
    progress?: Schema$EvaluationRunProgress;
    /**
     * Output only. The number of times the evaluations inside the run were run.
     */
    runCount?: number | null;
    /**
     * Output only. The scheduled evaluation run resource name that created this evaluation run. This field is only set if the evaluation run was created by a scheduled evaluation run. Format: `projects/{project\}/locations/{location\}/apps/{app\}/scheduledEvaluationRuns/{scheduled_evaluation_run\}`
     */
    scheduledEvaluationRun?: string | null;
    /**
     * Output only. The state of the evaluation run.
     */
    state?: string | null;
  }
  /**
   * Contains the summary of passed and failed result counts for a specific evaluation in an evaluation run.
   */
  export interface Schema$EvaluationRunEvaluationRunSummary {
    /**
     * Output only. Number of error results for the associated Evaluation in this run.
     */
    errorCount?: number | null;
    /**
     * Output only. Number of failed results for the associated Evaluation in this run.
     */
    failedCount?: number | null;
    /**
     * Output only. Number of passed results for the associated Evaluation in this run.
     */
    passedCount?: number | null;
  }
  /**
   * The progress of the evaluation run.
   */
  export interface Schema$EvaluationRunProgress {
    /**
     * Output only. Number of evaluation results that finished successfully. (EvaluationResult.execution_state is COMPLETED).
     */
    completedCount?: number | null;
    /**
     * Output only. Number of evaluation results that failed to execute. (EvaluationResult.execution_state is ERROR).
     */
    errorCount?: number | null;
    /**
     * Output only. Number of completed evaluation results with an outcome of FAIL. (EvaluationResult.execution_state is COMPLETED and EvaluationResult.evaluation_status is FAIL).
     */
    failedCount?: number | null;
    /**
     * Output only. Number of completed evaluation results with an outcome of PASS. (EvaluationResult.execution_state is COMPLETED and EvaluationResult.evaluation_status is PASS).
     */
    passedCount?: number | null;
    /**
     * Output only. Total number of evaluation results in this run.
     */
    totalCount?: number | null;
  }
  /**
   * The config for a scenario
   */
  export interface Schema$EvaluationScenario {
    /**
     * Optional. The evaluation expectations to evaluate the conversation produced by the simulation against. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationExpectations/{evaluationExpectation\}`
     */
    evaluationExpectations?: string[] | null;
    /**
     * Optional. The maximum number of turns to simulate. If not specified, the simulation will continue until the task is complete.
     */
    maxTurns?: number | null;
    /**
     * Required. The rubrics to score the scenario against.
     */
    rubrics?: string[] | null;
    /**
     * Required. The ScenarioExpectations to evaluate the conversation produced by the user simulation.
     */
    scenarioExpectations?: Schema$EvaluationScenarioExpectation[];
    /**
     * Required. The task to be targeted by the scenario.
     */
    task?: string | null;
    /**
     * Optional. Deprecated. Use user_goal_behavior instead.
     */
    taskCompletionBehavior?: string | null;
    /**
     * Optional. The user facts to be used by the scenario.
     */
    userFacts?: Schema$EvaluationScenarioUserFact[];
    /**
     * Optional. The expected behavior of the user goal.
     */
    userGoalBehavior?: string | null;
    /**
     * Optional. Variables / Session Parameters as context for the session, keyed by variable names. Members of this struct will override any default values set by the system. Note, these are different from user facts, which are facts known to the user. Variables are parameters known to the agent: i.e. MDN (phone number) passed by the telephony system.
     */
    variableOverrides?: {[key: string]: any} | null;
  }
  /**
   * The expectation to evaluate the conversation produced by the simulation.
   */
  export interface Schema$EvaluationScenarioExpectation {
    /**
     * Optional. The agent response to be evaluated.
     */
    agentResponse?: Schema$Message;
    /**
     * Optional. The tool call and response pair to be evaluated.
     */
    toolExpectation?: Schema$EvaluationScenarioExpectationToolExpectation;
  }
  /**
   * The tool call and response pair to be evaluated.
   */
  export interface Schema$EvaluationScenarioExpectationToolExpectation {
    /**
     * Required. The expected tool call, with the parameters of interest specified. Any parameters not specified will be hallucinated by the LLM.
     */
    expectedToolCall?: Schema$ToolCall;
    /**
     * Required. The tool response to mock, with the parameters of interest specified. Any parameters not specified will be hallucinated by the LLM.
     */
    mockToolResponse?: Schema$ToolResponse;
  }
  /**
   * Facts about the user as a key value pair.
   */
  export interface Schema$EvaluationScenarioUserFact {
    /**
     * Required. The name of the user fact.
     */
    name?: string | null;
    /**
     * Required. The value of the user fact.
     */
    value?: string | null;
  }
  /**
   * Settings for evaluation.
   */
  export interface Schema$EvaluationSettings {
    /**
     * Optional. Configures the default tool call behaviour for golden evaluations.
     */
    goldenEvaluationToolCallBehaviour?: string | null;
    /**
     * Optional. The default method used to run golden evaluations. This will be used if no golden_run_method is specified in the RunEvaluationRequest.
     */
    goldenRunMethod?: string | null;
    /**
     * Optional. Who starts the conversation in a scenario evaluation.
     */
    scenarioConversationInitiator?: string | null;
    /**
     * Optional. Configures the default tool call behaviour for scenario evaluations.
     */
    scenarioEvaluationToolCallBehaviour?: string | null;
  }
  /**
   * A step defines a singular action to happen during the evaluation.
   */
  export interface Schema$EvaluationStep {
    /**
     * Optional. Transfer the conversation to a different agent.
     */
    agentTransfer?: Schema$AgentTransfer;
    /**
     * Optional. Executes an expectation on the current turn.
     */
    expectation?: Schema$EvaluationGoldenExpectation;
    /**
     * Optional. User input for the conversation.
     */
    userInput?: Schema$SessionInput;
  }
  /**
   * Event input.
   */
  export interface Schema$Event {
    /**
     * Required. The name of the event.
     */
    event?: string | null;
  }
  /**
   * An example represents a sample conversation between the user and the agent(s).
   */
  export interface Schema$Example {
    /**
     * Output only. Timestamp when the example was created.
     */
    createTime?: string | null;
    /**
     * Optional. Human-readable description of the example.
     */
    description?: string | null;
    /**
     * Required. Display name of the example.
     */
    displayName?: string | null;
    /**
     * Optional. The agent that initially handles the conversation. If not specified, the example represents a conversation that is handled by the root agent. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    entryAgent?: string | null;
    /**
     * Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Output only. The example may become invalid if referencing resources are deleted. Invalid examples will not be used as few-shot examples.
     */
    invalid?: boolean | null;
    /**
     * Optional. The collection of messages that make up the conversation.
     */
    messages?: Schema$Message[];
    /**
     * Identifier. The unique identifier of the example. Format: `projects/{project\}/locations/{location\}/apps/{app\}/examples/{example\}`
     */
    name?: string | null;
    /**
     * Output only. Timestamp when the example was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for ToolService.ExecuteTool.
   */
  export interface Schema$ExecuteToolRequest {
    /**
     * Optional. The input parameters and values for the tool in JSON object format.
     */
    args?: {[key: string]: any} | null;
    /**
     * Optional. The name of the tool to execute. Format: projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}
     */
    tool?: string | null;
    /**
     * Optional. The toolset tool to execute. Only one tool should match the predicate from the toolset. Otherwise, an error will be returned.
     */
    toolsetTool?: Schema$ToolsetTool;
    /**
     * Optional. The variables that are available for the tool execution.
     */
    variables?: {[key: string]: any} | null;
  }
  /**
   * Response message for ToolService.ExecuteTool.
   */
  export interface Schema$ExecuteToolResponse {
    /**
     * The tool execution result in JSON object format. Use "output" key to specify tool response and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as tool execution result.
     */
    response?: {[key: string]: any} | null;
    /**
     * The name of the tool that got executed. Format: `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}`
     */
    tool?: string | null;
    /**
     * The toolset tool that got executed.
     */
    toolsetTool?: Schema$ToolsetTool;
    /**
     * The variable values at the end of the tool execution.
     */
    variables?: {[key: string]: any} | null;
  }
  /**
   * Request message for AgentService.ExportApp.
   */
  export interface Schema$ExportAppRequest {
    /**
     * Required. The format to export the app in.
     */
    exportFormat?: string | null;
    /**
     * Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to which to export the app. The format of this URI must be `gs:///`. The exported app archive will be written directly to the specified GCS object.
     */
    gcsUri?: string | null;
  }
  /**
   * Response message for AgentService.ExportApp.
   */
  export interface Schema$ExportAppResponse {
    /**
     * App folder compressed as a zip file.
     */
    appContent?: string | null;
    /**
     * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to which the app was exported.
     */
    appUri?: string | null;
  }
  /**
   * Expression condition based on session state.
   */
  export interface Schema$ExpressionCondition {
    /**
     * Required. The string representation of cloud.api.Expression condition.
     */
    expression?: string | null;
  }
  /**
   * The file search tool allows the agent to search across the files uploaded by the app/agent developer. It has presets to give relatively good quality search over the uploaded files and summarization of the retrieved results.
   */
  export interface Schema$FileSearchTool {
    /**
     * Optional. The type of the corpus. Default is FULLY_MANAGED.
     */
    corpusType?: string | null;
    /**
     * Optional. The tool description.
     */
    description?: string | null;
    /**
     * Optional. The corpus where files are stored. Format: projects/{project\}/locations/{location\}/ragCorpora/{rag_corpus\}
     */
    fileCorpus?: string | null;
    /**
     * Required. The tool name.
     */
    name?: string | null;
  }
  /**
   * Response message for AgentService.GenerateAppResource.
   */
  export interface Schema$GenerateAppResourceResponse {
    /**
     * Agent generated by the LLM assistant.
     */
    agent?: Schema$Agent;
    /**
     * The app resources generated by the LLM assistant.
     */
    appResources?: Schema$GenerateAppResourceResponseAppResources;
    /**
     * App snapshot generated by the LLM assistant. This snapshot contains the app, agents & tools generated by the LLM assistant.
     */
    appSnapshot?: Schema$AppSnapshot;
    /**
     * Evaluations generated by the LLM assistant.
     */
    evaluations?: Schema$GenerateAppResourceResponseEvaluations;
    /**
     * Additional information about the generated result.
     */
    generateResultInfo?: Schema$GenerateAppResourceResponseGenerateResultInfo;
    /**
     * The list of tools generated by the LLM assistant.
     */
    tools?: Schema$GenerateAppResourceResponseTools;
    /**
     * Toolset generated by the LLM assistant. Supports Open API toolset schema generation.
     */
    toolset?: Schema$Toolset;
  }
  /**
   * The list of app resources generated by the LLM assistant.
   */
  export interface Schema$GenerateAppResourceResponseAppResources {
    /**
     * The app snapshot generated by the LLM assistant. This snapshot contains the app, agents & tools generated by the LLM assistant.
     */
    appSnapshot?: Schema$AppSnapshot;
    /**
     * The list of evaluations generated by the LLM assistant.
     */
    evaluations?: Schema$Evaluation[];
  }
  /**
   * The list of evaluations generated by the LLM assistant.
   */
  export interface Schema$GenerateAppResourceResponseEvaluations {
    /**
     * The list of generated evaluations.
     */
    evaluations?: Schema$Evaluation[];
  }
  /**
   * This provides additional information about the generated result.
   */
  export interface Schema$GenerateAppResourceResponseGenerateResultInfo {
    /**
     * An explanation of the changes in the generated resource.
     */
    explanation?: string | null;
  }
  /**
   * The list of tools generated by the LLM assistant.
   */
  export interface Schema$GenerateAppResourceResponseTools {
    /**
     * The list of tools generated by the LLM assistant.
     */
    tools?: Schema$Tool[];
  }
  /**
   * Request message for WidgetService.GenerateChatToken.
   */
  export interface Schema$GenerateChatTokenRequest {
    /**
     * Required. The deployment of the app to use for the session. Format: projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}
     */
    deployment?: string | null;
    /**
     * Optional. The reCAPTCHA token generated by the client-side chat widget.
     */
    recaptchaToken?: string | null;
  }
  /**
   * Response message for WidgetService.GenerateChatToken.
   */
  export interface Schema$GenerateChatTokenResponse {
    /**
     * The session scoped token for chat widget to authenticate with Session APIs.
     */
    chatToken?: string | null;
    /**
     * The time at which the chat token expires.
     */
    expireTime?: string | null;
  }
  /**
   * Operation metadata for EvaluationService.GenerateEvaluation.
   */
  export interface Schema$GenerateEvaluationOperationMetadata {}
  /**
   * Request message for EvaluationService.GenerateEvaluation.
   */
  export interface Schema$GenerateEvaluationRequest {
    /**
     * Optional. Indicate the source of the conversation. If not set, all sources will be searched.
     */
    source?: string | null;
  }
  /**
   * Search suggestions from Google Search Tool.
   */
  export interface Schema$GoogleSearchSuggestions {
    /**
     * Compliant HTML and CSS styling for search suggestions. The provided HTML and CSS automatically adapts to your device settings, displaying in either light or dark mode indicated by `@media(prefers-color-scheme)`.
     */
    htmls?: string[] | null;
    /**
     * List of queries used to perform the google search along with the search result URIs forming the search suggestions.
     */
    webSearchQueries?: Schema$WebSearchQuery[];
  }
  /**
   * Represents a tool to perform Google web searches for grounding. See https://cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool#google-search.
   */
  export interface Schema$GoogleSearchTool {
    /**
     * Optional. Content will be fetched directly from these URLs for context and grounding. Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.
     */
    contextUrls?: string[] | null;
    /**
     * Optional. Description of the tool's purpose.
     */
    description?: string | null;
    /**
     * Optional. List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded.
     */
    excludeDomains?: string[] | null;
    /**
     * Required. The name of the tool.
     */
    name?: string | null;
    /**
     * Optional. Specifies domains to restrict search results to. Example: "example.com", "another.site". A maximum of 20 domains can be specified.
     */
    preferredDomains?: string[] | null;
    /**
     * Optional. Prompt instructions passed to planner on how the search results should be processed for text and voice.
     */
    promptConfig?: Schema$GoogleSearchToolPromptConfig;
  }
  /**
   * Prompt settings used by the model when processing or summarizing the google search results.
   */
  export interface Schema$GoogleSearchToolPromptConfig {
    /**
     * Optional. Defines the prompt used for the system instructions when interacting with the agent in chat conversations. If not set, default prompt will be used.
     */
    textPrompt?: string | null;
    /**
     * Optional. Defines the prompt used for the system instructions when interacting with the agent in voice conversations. If not set, default prompt will be used.
     */
    voicePrompt?: string | null;
  }
  /**
   * Guardrail contains a list of checks and balances to keep the agents safe and secure.
   */
  export interface Schema$Guardrail {
    /**
     * Optional. Action to take when the guardrail is triggered.
     */
    action?: Schema$TriggerAction;
    /**
     * Optional. Guardrail that potentially blocks the conversation based on the result of the callback execution.
     */
    codeCallback?: Schema$GuardrailCodeCallback;
    /**
     * Optional. Guardrail that bans certain content from being used in the conversation.
     */
    contentFilter?: Schema$GuardrailContentFilter;
    /**
     * Output only. Timestamp when the guardrail was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the guardrail.
     */
    description?: string | null;
    /**
     * Required. Display name of the guardrail.
     */
    displayName?: string | null;
    /**
     * Optional. Whether the guardrail is enabled.
     */
    enabled?: boolean | null;
    /**
     * Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Optional. Guardrail that blocks the conversation if the LLM response is considered violating the policy based on the LLM classification.
     */
    llmPolicy?: Schema$GuardrailLlmPolicy;
    /**
     * Optional. Guardrail that blocks the conversation if the prompt is considered unsafe based on the LLM classification.
     */
    llmPromptSecurity?: Schema$GuardrailLlmPromptSecurity;
    /**
     * Optional. Guardrail that blocks the conversation if the LLM response is considered unsafe based on the model safety settings.
     */
    modelSafety?: Schema$GuardrailModelSafety;
    /**
     * Identifier. The unique identifier of the guardrail. Format: `projects/{project\}/locations/{location\}/apps/{app\}/guardrails/{guardrail\}`
     */
    name?: string | null;
    /**
     * Output only. Timestamp when the guardrail was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Guardrail that blocks the conversation based on the code callbacks provided.
   */
  export interface Schema$GuardrailCodeCallback {
    /**
     * Optional. The callback to execute after the agent is called. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing.
     */
    afterAgentCallback?: Schema$Callback;
    /**
     * Optional. The callback to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing.
     */
    afterModelCallback?: Schema$Callback;
    /**
     * Optional. The callback to execute before the agent is called. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing.
     */
    beforeAgentCallback?: Schema$Callback;
    /**
     * Optional. The callback to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. Each callback function is expected to return a structure (e.g., a dict or object) containing at least: - 'decision': Either 'OK' or 'TRIGGER'. - 'reason': A string explaining the decision. A 'TRIGGER' decision may halt further processing.
     */
    beforeModelCallback?: Schema$Callback;
  }
  /**
   * Guardrail that bans certain content from being used in the conversation.
   */
  export interface Schema$GuardrailContentFilter {
    /**
     * Optional. List of banned phrases. Applies to both user inputs and agent responses.
     */
    bannedContents?: string[] | null;
    /**
     * Optional. List of banned phrases. Applies only to agent responses.
     */
    bannedContentsInAgentResponse?: string[] | null;
    /**
     * Optional. List of banned phrases. Applies only to user inputs.
     */
    bannedContentsInUserInput?: string[] | null;
    /**
     * Optional. If true, diacritics are ignored during matching.
     */
    disregardDiacritics?: boolean | null;
    /**
     * Required. Match type for the content filter.
     */
    matchType?: string | null;
  }
  /**
   * Guardrail that blocks the conversation if the LLM response is considered violating the policy based on the LLM classification.
   */
  export interface Schema$GuardrailLlmPolicy {
    /**
     * Optional. By default, the LLM policy check is bypassed for short utterances. Enabling this setting applies the policy check to all utterances, including those that would normally be skipped.
     */
    allowShortUtterance?: boolean | null;
    /**
     * Optional. If an error occurs during the policy check, fail open and do not trigger the guardrail.
     */
    failOpen?: boolean | null;
    /**
     * Optional. When checking this policy, consider the last 'n' messages in the conversation. When not set a default value of 10 will be used.
     */
    maxConversationMessages?: number | null;
    /**
     * Optional. Model settings.
     */
    modelSettings?: Schema$ModelSettings;
    /**
     * Required. Defines when to apply the policy check during the conversation. If set to `POLICY_SCOPE_UNSPECIFIED`, the policy will be applied to the user input. When applying the policy to the agent response, additional latency will be introduced before the agent can respond.
     */
    policyScope?: string | null;
    /**
     * Required. Policy prompt.
     */
    prompt?: string | null;
  }
  /**
   * Guardrail that blocks the conversation if the input is considered unsafe based on the LLM classification.
   */
  export interface Schema$GuardrailLlmPromptSecurity {
    /**
     * Optional. Use a user-defined LlmPolicy to configure the security guardrail.
     */
    customPolicy?: Schema$GuardrailLlmPolicy;
    /**
     * Optional. Use the system's predefined default security settings. To select this mode, include an empty 'default_settings' message in the request. The 'default_prompt_template' field within will be populated by the server in the response.
     */
    defaultSettings?: Schema$GuardrailLlmPromptSecurityDefaultSecuritySettings;
    /**
     * Optional. Determines the behavior when the guardrail encounters an LLM error. - If true: the guardrail is bypassed. - If false (default): the guardrail triggers/blocks. Note: If a custom policy is provided, this field is ignored in favor of the policy's 'fail_open' configuration.
     */
    failOpen?: boolean | null;
  }
  /**
   * Configuration for default system security settings.
   */
  export interface Schema$GuardrailLlmPromptSecurityDefaultSecuritySettings {
    /**
     * Output only. The default prompt template used by the system. This field is for display purposes to show the user what prompt the system uses by default. It is OUTPUT_ONLY.
     */
    defaultPromptTemplate?: string | null;
  }
  /**
   * Model safety settings overrides. When this is set, it will override the default settings and trigger the guardrail if the response is considered unsafe.
   */
  export interface Schema$GuardrailModelSafety {
    /**
     * Required. List of safety settings.
     */
    safetySettings?: Schema$GuardrailModelSafetySafetySetting[];
  }
  /**
   * Safety setting.
   */
  export interface Schema$GuardrailModelSafetySafetySetting {
    /**
     * Required. The harm category.
     */
    category?: string | null;
    /**
     * Required. The harm block threshold.
     */
    threshold?: string | null;
  }
  /**
   * Represents an image input or output in the conversation.
   */
  export interface Schema$Image {
    /**
     * Required. Raw bytes of the image.
     */
    data?: string | null;
    /**
     * Required. The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp
     */
    mimeType?: string | null;
  }
  /**
   * Request message for AgentService.ImportApp.
   */
  export interface Schema$ImportAppRequest {
    /**
     * Raw bytes representing the compressed zip file with the app folder structure.
     */
    appContent?: string | null;
    /**
     * Optional. The ID to use for the imported app. * If not specified, a unique ID will be automatically assigned for the app. * Otherwise, the imported app will use this ID as the final component of its resource name. If an app with the same ID already exists at the specified location in the project, the content of the existing app will be replaced.
     */
    appId?: string | null;
    /**
     * Optional. The display name of the app to import. * If the app is created on import, and the display name is specified, the imported app will use this display name. If a conflict is detected with an existing app, a timestamp will be appended to the display name to make it unique. * If the app is a reimport, this field should not be set. Providing a display name during reimport will result in an INVALID_ARGUMENT error.
     */
    displayName?: string | null;
    /**
     * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI from which to import app. The format of this URI must be `gs:///`.
     */
    gcsUri?: string | null;
    /**
     * Optional. Flag for overriding the app lock during import. If set to true, the import process will ignore the app lock.
     */
    ignoreAppLock?: boolean | null;
    /**
     * Optional. Options governing the import process for the app.
     */
    importOptions?: Schema$ImportAppRequestImportOptions;
  }
  /**
   * Configuration options for the app import process. These options control how the import behaves, particularly when conflicts arise with existing app data.
   */
  export interface Schema$ImportAppRequestImportOptions {
    /**
     * Optional. The strategy to use when resolving conflicts during import.
     */
    conflictResolutionStrategy?: string | null;
  }
  /**
   * Response message for AgentService.ImportApp.
   */
  export interface Schema$ImportAppResponse {
    /**
     * The resource name of the app that was imported.
     */
    name?: string | null;
    /**
     * Warning messages generated during the import process. If errors occur for specific resources, they will not be included in the imported app and the error will be mentioned here.
     */
    warnings?: string[] | null;
  }
  /**
   * Represents the metadata of the long-running operation for EvaluationService.ImportEvaluations.
   */
  export interface Schema$ImportEvaluationsOperationMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
  }
  /**
   * Request message for EvaluationService.ImportEvaluations.
   */
  export interface Schema$ImportEvaluationsRequest {
    /**
     * The conversations to import the evaluations from.
     */
    conversationList?: Schema$ImportEvaluationsRequestConversationList;
    /**
     * Raw bytes representing the csv file with the evaluations structure.
     */
    csvContent?: string | null;
    /**
     * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI from which to import evaluations. The format of this URI must be `gs:///`.
     */
    gcsUri?: string | null;
    /**
     * Optional. Options governing the import process for the evaluations.
     */
    importOptions?: Schema$ImportEvaluationsRequestImportOptions;
  }
  /**
   * A list of conversation resource names.
   */
  export interface Schema$ImportEvaluationsRequestConversationList {
    /**
     * Optional. Conversation resource names.
     */
    conversations?: string[] | null;
  }
  /**
   * Configuration options for the evaluation import process. These options control how the import behaves, particularly when conflicts arise with existing evaluations data.
   */
  export interface Schema$ImportEvaluationsRequestImportOptions {
    /**
     * Optional. The strategy to use when resolving conflicts during import.
     */
    conflictResolutionStrategy?: string | null;
  }
  /**
   * Response message for EvaluationService.ImportEvaluations.
   */
  export interface Schema$ImportEvaluationsResponse {
    /**
     * Optional. A list of error messages associated with evaluations that failed to be imported.
     */
    errorMessages?: string[] | null;
    /**
     * The list of evaluations that were imported into the app.
     */
    evaluations?: Schema$Evaluation[];
    /**
     * The number of evaluations that were not imported due to errors.
     */
    importFailureCount?: number | null;
  }
  /**
   * InputAudioConfig configures how the CES agent should interpret the incoming audio data.
   */
  export interface Schema$InputAudioConfig {
    /**
     * Required. The encoding of the input audio data.
     */
    audioEncoding?: string | null;
    /**
     * Optional. Whether to enable noise suppression on the input audio. Available values are "low", "moderate", "high", "very_high".
     */
    noiseSuppressionLevel?: string | null;
    /**
     * Required. The sample rate (in Hertz) of the input audio data.
     */
    sampleRateHertz?: number | null;
  }
  /**
   * Language settings of the app.
   */
  export interface Schema$LanguageSettings {
    /**
     * Optional. The default language code of the app.
     */
    defaultLanguageCode?: string | null;
    /**
     * Optional. Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.
     */
    enableMultilingualSupport?: boolean | null;
    /**
     * Optional. The action to perform when an agent receives input in an unsupported language. This can be a predefined action or a custom tool call. Valid values are: - A tool's full resource name, which triggers a specific tool execution. - A predefined system action, such as "escalate" or "exit", which triggers an EndSession signal with corresponding metadata to terminate the conversation.
     */
    fallbackAction?: string | null;
    /**
     * Optional. List of languages codes supported by the app, in addition to the `default_language_code`.
     */
    supportedLanguageCodes?: string[] | null;
  }
  /**
   * Latency report for the evaluation run.
   */
  export interface Schema$LatencyReport {
    /**
     * Output only. Unordered list. Latency metrics for each callback.
     */
    callbackLatencies?: Schema$LatencyReportCallbackLatency[];
    /**
     * Output only. Unordered list. Latency metrics for each guardrail.
     */
    guardrailLatencies?: Schema$LatencyReportGuardrailLatency[];
    /**
     * Output only. Unordered list. Latency metrics for each LLM call.
     */
    llmCallLatencies?: Schema$LatencyReportLlmCallLatency[];
    /**
     * Output only. The total number of sessions considered in the latency report.
     */
    sessionCount?: number | null;
    /**
     * Output only. Unordered list. Latency metrics for each tool.
     */
    toolLatencies?: Schema$LatencyReportToolLatency[];
  }
  /**
   * Latency metrics for a single callback.
   */
  export interface Schema$LatencyReportCallbackLatency {
    /**
     * Output only. The latency metrics for the callback.
     */
    latencyMetrics?: Schema$LatencyReportLatencyMetrics;
    /**
     * Output only. The stage of the callback.
     */
    stage?: string | null;
  }
  /**
   * Latency metrics for a single guardrail.
   */
  export interface Schema$LatencyReportGuardrailLatency {
    /**
     * Output only. The name of the guardrail. Format: `projects/{project\}/locations/{location\}/apps/{app\}/guardrails/{guardrail\}`.
     */
    guardrail?: string | null;
    /**
     * Output only. The display name of the guardrail.
     */
    guardrailDisplayName?: string | null;
    /**
     * Output only. The latency metrics for the guardrail.
     */
    latencyMetrics?: Schema$LatencyReportLatencyMetrics;
  }
  /**
   * Latency metrics for a component.
   */
  export interface Schema$LatencyReportLatencyMetrics {
    /**
     * Output only. The number of times the resource was called.
     */
    callCount?: number | null;
    /**
     * Output only. The 50th percentile latency.
     */
    p50Latency?: string | null;
    /**
     * Output only. The 90th percentile latency.
     */
    p90Latency?: string | null;
    /**
     * Output only. The 99th percentile latency.
     */
    p99Latency?: string | null;
  }
  /**
   * Latency metrics for a single LLM call.
   */
  export interface Schema$LatencyReportLlmCallLatency {
    /**
     * Output only. The latency metrics for the LLM call.
     */
    latencyMetrics?: Schema$LatencyReportLatencyMetrics;
    /**
     * Output only. The name of the model.
     */
    model?: string | null;
  }
  /**
   * Latency metrics for a single tool.
   */
  export interface Schema$LatencyReportToolLatency {
    /**
     * Output only. The latency metrics for the tool.
     */
    latencyMetrics?: Schema$LatencyReportLatencyMetrics;
    /**
     * Output only. Format: `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}`.
     */
    tool?: string | null;
    /**
     * Output only. The display name of the tool.
     */
    toolDisplayName?: string | null;
    /**
     * Output only. The toolset tool identifier.
     */
    toolsetTool?: Schema$ToolsetTool;
  }
  /**
   * Response message for AgentService.ListAgents.
   */
  export interface Schema$ListAgentsResponse {
    /**
     * The list of agents.
     */
    agents?: Schema$Agent[];
    /**
     * A token that can be sent as ListAgentsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for AgentService.ListApps.
   */
  export interface Schema$ListAppsResponse {
    /**
     * The list of apps.
     */
    apps?: Schema$App[];
    /**
     * A token that can be sent as ListAppsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Unordered list. Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for AgentService.ListAppVersions.
   */
  export interface Schema$ListAppVersionsResponse {
    /**
     * The list of app versions.
     */
    appVersions?: Schema$AppVersion[];
    /**
     * A token that can be sent as ListAppVersionsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for AgentService.ListChangelogs.
   */
  export interface Schema$ListChangelogsResponse {
    /**
     * The list of changelogs.
     */
    changelogs?: Schema$Changelog[];
    /**
     * A token that can be sent as ListChangelogsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for AgentService.ListConversations.
   */
  export interface Schema$ListConversationsResponse {
    /**
     * The list of conversations.
     */
    conversations?: Schema$Conversation[];
    /**
     * A token that can be sent as ListConversationsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for AgentService.ListDeployments.
   */
  export interface Schema$ListDeploymentsResponse {
    /**
     * The list of deployments.
     */
    deployments?: Schema$Deployment[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EvaluationService.ListEvaluationDatasets.
   */
  export interface Schema$ListEvaluationDatasetsResponse {
    /**
     * The list of evaluation datasets.
     */
    evaluationDatasets?: Schema$EvaluationDataset[];
    /**
     * A token that can be sent as ListEvaluationDatasetsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EvaluationService.ListEvaluationExpectations.
   */
  export interface Schema$ListEvaluationExpectationsResponse {
    /**
     * The list of evaluation expectations.
     */
    evaluationExpectations?: Schema$EvaluationExpectation[];
    /**
     * A token that can be sent as ListEvaluationExpectationsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EvaluationService.ListEvaluationResults.
   */
  export interface Schema$ListEvaluationResultsResponse {
    /**
     * The list of evaluation results.
     */
    evaluationResults?: Schema$EvaluationResult[];
    /**
     * A token that can be sent as ListEvaluationResultsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EvaluationService.ListEvaluationRuns.
   */
  export interface Schema$ListEvaluationRunsResponse {
    /**
     * The list of evaluation runs.
     */
    evaluationRuns?: Schema$EvaluationRun[];
    /**
     * A token that can be sent as ListEvaluationRunsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EvaluationService.ListEvaluations.
   */
  export interface Schema$ListEvaluationsResponse {
    /**
     * The list of evaluations.
     */
    evaluations?: Schema$Evaluation[];
    /**
     * A token that can be sent as ListEvaluationsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for AgentService.ListExamples.
   */
  export interface Schema$ListExamplesResponse {
    /**
     * The list of examples.
     */
    examples?: Schema$Example[];
    /**
     * A token that can be sent as ListExamplesRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for AgentService.ListGuardrails.
   */
  export interface Schema$ListGuardrailsResponse {
    /**
     * The list of guardrails.
     */
    guardrails?: Schema$Guardrail[];
    /**
     * A token that can be sent as ListGuardrailsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for EvaluationService.ListScheduledEvaluationRuns.
   */
  export interface Schema$ListScheduledEvaluationRunsResponse {
    /**
     * A token that can be sent as ListScheduledEvaluationRunsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The list of scheduled evaluation runs.
     */
    scheduledEvaluationRuns?: Schema$ScheduledEvaluationRun[];
  }
  /**
   * Response message for AgentService.ListToolsets.
   */
  export interface Schema$ListToolsetsResponse {
    /**
     * A token that can be sent as ListToolsetsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The list of toolsets.
     */
    toolsets?: Schema$Toolset[];
  }
  /**
   * Response message for AgentService.ListTools.
   */
  export interface Schema$ListToolsResponse {
    /**
     * A token that can be sent as ListToolsRequest.page_token to retrieve the next page. Absence of this field indicates there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The list of tools.
     */
    tools?: Schema$Tool[];
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Settings to describe the logging behaviors for the app.
   */
  export interface Schema$LoggingSettings {
    /**
     * Optional. Configuration for how audio interactions should be recorded.
     */
    audioRecordingConfig?: Schema$AudioRecordingConfig;
    /**
     * Optional. Settings to describe the BigQuery export behaviors for the app. The conversation data will be exported to BigQuery tables if it is enabled.
     */
    bigqueryExportSettings?: Schema$BigQueryExportSettings;
    /**
     * Optional. Settings to describe the Cloud Logging behaviors for the app.
     */
    cloudLoggingSettings?: Schema$CloudLoggingSettings;
    /**
     * Optional. Settings to describe the conversation logging behaviors for the app.
     */
    conversationLoggingSettings?: Schema$ConversationLoggingSettings;
    /**
     * Optional. Configuration for how audio interactions should be recorded for the evaluation. By default, audio recording is not enabled for evaluation sessions.
     */
    evaluationAudioRecordingConfig?: Schema$AudioRecordingConfig;
    /**
     * Optional. Settings to describe the conversation data collection behaviors for the LLM analysis pipeline for the app.
     */
    metricAnalysisSettings?: Schema$MetricAnalysisSettings;
    /**
     * Optional. Configuration for how sensitive data should be redacted.
     */
    redactionConfig?: Schema$RedactionConfig;
  }
  /**
   * An MCP tool. See https://modelcontextprotocol.io/specification/2025-06-18/server/tools for more details.
   */
  export interface Schema$McpTool {
    /**
     * Optional. Authentication information required to execute the tool against the MCP server. For bearer token authentication, the token applies only to tool execution, not to listing tools. This requires that tools can be listed without authentication.
     */
    apiAuthentication?: Schema$ApiAuthentication;
    /**
     * Optional. The description of the MCP tool.
     */
    description?: string | null;
    /**
     * Optional. The schema of the input arguments of the MCP tool.
     */
    inputSchema?: Schema$Schema;
    /**
     * Required. The name of the MCP tool.
     */
    name?: string | null;
    /**
     * Optional. The schema of the output arguments of the MCP tool.
     */
    outputSchema?: Schema$Schema;
    /**
     * Required. The server address of the MCP server, e.g., "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. This is the same as the server_address in the McpToolset. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.
     */
    serverAddress?: string | null;
    /**
     * Optional. Service Directory configuration for VPC-SC, used to resolve service names within a perimeter.
     */
    serviceDirectoryConfig?: Schema$ServiceDirectoryConfig;
    /**
     * Optional. The TLS configuration. Includes the custom server certificates that the client should trust.
     */
    tlsConfig?: Schema$TlsConfig;
  }
  /**
   * A toolset that contains a list of tools that are offered by the MCP server.
   */
  export interface Schema$McpToolset {
    /**
     * Optional. Authentication information required to access tools and execute a tool against the MCP server. For bearer token authentication, the token applies only to tool execution, not to listing tools. This requires that tools can be listed without authentication.
     */
    apiAuthentication?: Schema$ApiAuthentication;
    /**
     * Required. The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.
     */
    serverAddress?: string | null;
    /**
     * Optional. Service Directory configuration for VPC-SC, used to resolve service names within a perimeter.
     */
    serviceDirectoryConfig?: Schema$ServiceDirectoryConfig;
    /**
     * Optional. The TLS configuration. Includes the custom server certificates that the client should trust.
     */
    tlsConfig?: Schema$TlsConfig;
  }
  /**
   * A message within a conversation.
   */
  export interface Schema$Message {
    /**
     * Optional. Content of the message as a series of chunks.
     */
    chunks?: Schema$Chunk[];
    /**
     * Optional. Timestamp when the message was sent or received. Should not be used if the message is part of an example.
     */
    eventTime?: string | null;
    /**
     * Optional. The role within the conversation, e.g., user, agent.
     */
    role?: string | null;
  }
  /**
   * Settings to describe the conversation data collection behaviors for LLM analysis metrics pipeline.
   */
  export interface Schema$MetricAnalysisSettings {
    /**
     * Optional. Whether to collect conversation data for llm analysis metrics. If true, conversation data will not be collected for llm analysis metrics; otherwise, conversation data will be collected.
     */
    llmMetricsOptedOut?: boolean | null;
  }
  /**
   * Model settings contains various configurations for the LLM model.
   */
  export interface Schema$ModelSettings {
    /**
     * Optional. The LLM model that the agent should use. If not set, the agent will inherit the model from its parent agent.
     */
    model?: string | null;
    /**
     * Optional. If set, this temperature will be used for the LLM model. Temperature controls the randomness of the model's responses. Lower temperatures produce responses that are more predictable. Higher temperatures produce responses that are more creative.
     */
    temperature?: number | null;
  }
  /**
   * Configurations for authentication with OAuth.
   */
  export interface Schema$OAuthConfig {
    /**
     * Required. The client ID from the OAuth provider.
     */
    clientId?: string | null;
    /**
     * Required. The name of the SecretManager secret version resource storing the client secret. Format: `projects/{project\}/secrets/{secret\}/versions/{version\}` Note: You should grant `roles/secretmanager.secretAccessor` role to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`.
     */
    clientSecretVersion?: string | null;
    /**
     * Required. OAuth grant types.
     */
    oauthGrantType?: string | null;
    /**
     * Optional. The OAuth scopes to grant.
     */
    scopes?: string[] | null;
    /**
     * Required. The token endpoint in the OAuth provider to exchange for an access token.
     */
    tokenEndpoint?: string | null;
  }
  /**
   * Represents an Omnichannel resource.
   */
  export interface Schema$Omnichannel {
    /**
     * Output only. Timestamp when the omnichannel resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Human-readable description of the omnichannel resource.
     */
    description?: string | null;
    /**
     * Required. Display name of the omnichannel resource.
     */
    displayName?: string | null;
    /**
     * Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation.
     */
    etag?: string | null;
    /**
     * Optional. The integration config for the omnichannel resource.
     */
    integrationConfig?: Schema$OmnichannelIntegrationConfig;
    /**
     * Identifier. The unique identifier of the omnichannel resource. Format: `projects/{project\}/locations/{location\}/omnichannels/{omnichannel\}`
     */
    name?: string | null;
    /**
     * Output only. Timestamp when the omnichannel resource was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * OmnichannelIntegrationConfig contains all App integration configs.
   */
  export interface Schema$OmnichannelIntegrationConfig {
    /**
     * Optional. Various of configuration for handling App events.
     */
    channelConfigs?: {
      [key: string]: Schema$OmnichannelIntegrationConfigChannelConfig;
    } | null;
    /**
     * Optional. The key of routing_configs is a key of `app_configs`, value is a `RoutingConfig`, which contains subscriber's key.
     */
    routingConfigs?: {
      [key: string]: Schema$OmnichannelIntegrationConfigRoutingConfig;
    } | null;
    /**
     * Optional. Various of subscribers configs.
     */
    subscriberConfigs?: {
      [key: string]: Schema$OmnichannelIntegrationConfigSubscriberConfig;
    } | null;
  }
  /**
   * Configs for CES app.
   */
  export interface Schema$OmnichannelIntegrationConfigCesAppConfig {
    /**
     * The unique identifier of the CES app. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    app?: string | null;
  }
  /**
   * ChannelConfig contains config for various of app integration.
   */
  export interface Schema$OmnichannelIntegrationConfigChannelConfig {
    /**
     * WhatsApp config.
     */
    whatsappConfig?: Schema$OmnichannelIntegrationConfigWhatsappConfig;
  }
  /**
   * Routing config specify how/who to route app events to a subscriber.
   */
  export interface Schema$OmnichannelIntegrationConfigRoutingConfig {
    /**
     * The key of the subscriber.
     */
    subscriberKey?: string | null;
  }
  /**
   * Configs of subscribers.
   */
  export interface Schema$OmnichannelIntegrationConfigSubscriberConfig {
    /**
     * Ces app config.
     */
    cesAppConfig?: Schema$OmnichannelIntegrationConfigCesAppConfig;
  }
  /**
   * How Omnichannel should receive/reply events from WhatsApp.
   */
  export interface Schema$OmnichannelIntegrationConfigWhatsappConfig {
    /**
     * The Meta Business Portfolio (MBP) ID. https://www.facebook.com/business/help/1710077379203657
     */
    metaBusinessPortfolioId?: string | null;
    /**
     * The phone number used for sending/receiving messages.
     */
    phoneNumber?: string | null;
    /**
     * The Phone Number ID associated with the WhatsApp Business Account.
     */
    phoneNumberId?: string | null;
    /**
     * The verify token configured in the Meta App Dashboard for webhook verification.
     */
    webhookVerifyToken?: string | null;
    /**
     * The customer's WhatsApp Business Account (WABA) ID.
     */
    whatsappBusinessAccountId?: string | null;
    /**
     * The access token for authenticating API calls to the WhatsApp Cloud API. https://developers.facebook.com/docs/whatsapp/business-management-api/get-started/#business-integration-system-user-access-tokens
     */
    whatsappBusinessToken?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OmnichannelOperationMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
  }
  /**
   * A remote API tool defined by an OpenAPI schema.
   */
  export interface Schema$OpenApiTool {
    /**
     * Optional. Authentication information required by the API.
     */
    apiAuthentication?: Schema$ApiAuthentication;
    /**
     * Optional. The description of the tool. If not provided, the description of the tool will be derived from the OpenAPI schema, from `operation.description` or `operation.summary`.
     */
    description?: string | null;
    /**
     * Optional. If true, the agent will ignore unknown fields in the API response.
     */
    ignoreUnknownFields?: boolean | null;
    /**
     * Optional. The name of the tool. If not provided, the name of the tool will be derived from the OpenAPI schema, from `operation.operationId`.
     */
    name?: string | null;
    /**
     * Required. The OpenAPI schema in JSON or YAML format.
     */
    openApiSchema?: string | null;
    /**
     * Optional. Service Directory configuration.
     */
    serviceDirectoryConfig?: Schema$ServiceDirectoryConfig;
    /**
     * Optional. The TLS configuration. Includes the custom server certificates that the client will trust.
     */
    tlsConfig?: Schema$TlsConfig;
    /**
     * Optional. The server URL of the Open API schema. This field is only set in tools in the environment dependencies during the export process if the schema contains a server url. During the import process, if this url is present in the environment dependencies and the schema has the $env_var placeholder, it will replace the placeholder in the schema.
     */
    url?: string | null;
  }
  /**
   * A toolset that contains a list of tools that are defined by an OpenAPI schema.
   */
  export interface Schema$OpenApiToolset {
    /**
     * Optional. Authentication information required by the API.
     */
    apiAuthentication?: Schema$ApiAuthentication;
    /**
     * Optional. If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema.
     */
    ignoreUnknownFields?: boolean | null;
    /**
     * Required. The OpenAPI schema of the toolset.
     */
    openApiSchema?: string | null;
    /**
     * Optional. Service Directory configuration.
     */
    serviceDirectoryConfig?: Schema$ServiceDirectoryConfig;
    /**
     * Optional. The TLS configuration. Includes the custom server certificates
     */
    tlsConfig?: Schema$TlsConfig;
    /**
     * Optional. The server URL of the Open API schema. This field is only set in toolsets in the environment dependencies during the export process if the schema contains a server url. During the import process, if this url is present in the environment dependencies and the schema has the $env_var placeholder, it will replace the placeholder in the schema.
     */
    url?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
  }
  /**
   * Configuration for running the optimization step after the evaluation run.
   */
  export interface Schema$OptimizationConfig {
    /**
     * Output only. The assistant session to use for the optimization based on this evaluation run. Format: `projects/{project\}/locations/{location\}/apps/{app\}/assistantSessions/{assistantSession\}`
     */
    assistantSession?: string | null;
    /**
     * Output only. The error message if the optimization run failed.
     */
    errorMessage?: string | null;
    /**
     * Optional. Whether to generate a loss report.
     */
    generateLossReport?: boolean | null;
    /**
     * Output only. The generated loss report.
     */
    lossReport?: {[key: string]: any} | null;
    /**
     * Output only. The summary of the loss report.
     */
    reportSummary?: string | null;
    /**
     * Output only. Whether to suggest a fix for the losses.
     */
    shouldSuggestFix?: boolean | null;
    /**
     * Output only. The status of the optimization run.
     */
    status?: string | null;
  }
  /**
   * OutputAudioConfig configures how the CES agent should synthesize outgoing audio responses.
   */
  export interface Schema$OutputAudioConfig {
    /**
     * Required. The encoding of the output audio data.
     */
    audioEncoding?: string | null;
    /**
     * Required. The sample rate (in Hertz) of the output audio data.
     */
    sampleRateHertz?: number | null;
  }
  /**
   * Configuration for running an evaluation for a specific persona.
   */
  export interface Schema$PersonaRunConfig {
    /**
     * Optional. The persona to use for the evaluation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationPersonas/{evaluationPersona\}`
     */
    persona?: string | null;
    /**
     * Optional. The number of tasks to run for the persona.
     */
    taskCount?: number | null;
  }
  /**
   * Python code block to evaluate the condition.
   */
  export interface Schema$PythonCodeCondition {
    /**
     * Required. The python code to execute.
     */
    pythonCode?: string | null;
  }
  /**
   * A Python function tool.
   */
  export interface Schema$PythonFunction {
    /**
     * Output only. The description of the Python function, parsed from the python code's docstring.
     */
    description?: string | null;
    /**
     * Optional. The name of the Python function to execute. Must match a Python function name defined in the python code. Case sensitive. If the name is not provided, the first function defined in the python code will be used.
     */
    name?: string | null;
    /**
     * Optional. The Python code to execute for the tool.
     */
    pythonCode?: string | null;
  }
  /**
   * Configuration to instruct how sensitive data should be handled.
   */
  export interface Schema$RedactionConfig {
    /**
     * Optional. [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: `projects/{project\}/locations/{location\}/deidentifyTemplates/{deidentify_template\}`
     */
    deidentifyTemplate?: string | null;
    /**
     * Optional. If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.
     */
    enableRedaction?: boolean | null;
    /**
     * Optional. [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: `projects/{project\}/locations/{location\}/inspectTemplates/{inspect_template\}`
     */
    inspectTemplate?: string | null;
  }
  /**
   * Request message for AgentService.RestoreAppVersion
   */
  export interface Schema$RestoreAppVersionRequest {}
  /**
   * Request message for ToolService.RetrieveToolSchema.
   */
  export interface Schema$RetrieveToolSchemaRequest {
    /**
     * Optional. The name of the tool to retrieve the schema for. Format: projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}
     */
    tool?: string | null;
    /**
     * Optional. The toolset tool to retrieve the schema for. Only one tool should match the predicate from the toolset. Otherwise, an error will be returned.
     */
    toolsetTool?: Schema$ToolsetTool;
  }
  /**
   * Response message for ToolService.RetrieveToolSchema.
   */
  export interface Schema$RetrieveToolSchemaResponse {
    /**
     * The schema of the tool input parameters.
     */
    inputSchema?: Schema$Schema;
    /**
     * The schema of the tool output parameters.
     */
    outputSchema?: Schema$Schema;
    /**
     * The name of the tool that the schema is for. Format: `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}`
     */
    tool?: string | null;
    /**
     * The toolset tool that the schema is for.
     */
    toolsetTool?: Schema$ToolsetTool;
  }
  /**
   * Request message for ToolService.RetrieveTools.
   */
  export interface Schema$RetrieveToolsRequest {
    /**
     * Optional. The identifiers of the tools to retrieve from the toolset. If empty, all tools in the toolset will be returned.
     */
    toolIds?: string[] | null;
  }
  /**
   * Response message for ToolService.RetrieveTools.
   */
  export interface Schema$RetrieveToolsResponse {
    /**
     * The list of tools that are included in the specified toolset.
     */
    tools?: Schema$Tool[];
  }
  /**
   * Request message for EvaluationService.RunEvaluation.
   */
  export interface Schema$RunEvaluationRequest {
    /**
     * Required. The app to evaluate. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    app?: string | null;
    /**
     * Optional. The app version to evaluate. Format: `projects/{project\}/locations/{location\}/apps/{app\}/versions/{version\}`
     */
    appVersion?: string | null;
    /**
     * Optional. The configuration to use for the run.
     */
    config?: Schema$EvaluationConfig;
    /**
     * Optional. The display name of the evaluation run.
     */
    displayName?: string | null;
    /**
     * Optional. An evaluation dataset to run. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationDatasets/{evaluationDataset\}`
     */
    evaluationDataset?: string | null;
    /**
     * Optional. List of evaluations to run. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/{evaluation\}`
     */
    evaluations?: string[] | null;
    /**
     * Optional. Whether to generate a latency report for the evaluation run.
     */
    generateLatencyReport?: boolean | null;
    /**
     * Optional. The method to run the evaluation if it is a golden evaluation. If not set, default to STABLE.
     */
    goldenRunMethod?: string | null;
    /**
     * Optional. Configuration for running the optimization step after the evaluation run. If not set, the optimization step will not be run.
     */
    optimizationConfig?: Schema$OptimizationConfig;
    /**
     * Optional. The configuration to use for the run per persona.
     */
    personaRunConfigs?: Schema$PersonaRunConfig[];
    /**
     * Optional. The number of times to run the evaluation. If not set, the default value is 1 per golden, and 5 per scenario.
     */
    runCount?: number | null;
    /**
     * Optional. The resource name of the `ScheduledEvaluationRun` that is triggering this evaluation run. If this field is set, the `scheduled_evaluation_run` field on the created `EvaluationRun` resource will be populated from this value. Format: `projects/{project\}/locations/{location\}/apps/{app\}/scheduledEvaluationRuns/{scheduled_evaluation_run\}`
     */
    scheduledEvaluationRun?: string | null;
  }
  /**
   * Request message for SessionService.RunSession.
   */
  export interface Schema$RunSessionRequest {
    /**
     * Required. The configuration for the session.
     */
    config?: Schema$SessionConfig;
    /**
     * Required. Inputs for the session.
     */
    inputs?: Schema$SessionInput[];
  }
  /**
   * Response message for SessionService.RunSession.
   */
  export interface Schema$RunSessionResponse {
    /**
     * Outputs for the session.
     */
    outputs?: Schema$SessionOutput[];
  }
  /**
   * Represents a scheduled evaluation run configuration.
   */
  export interface Schema$ScheduledEvaluationRun {
    /**
     * Optional. Whether this config is active
     */
    active?: boolean | null;
    /**
     * Output only. The user who created the scheduled evaluation run.
     */
    createdBy?: string | null;
    /**
     * Output only. Timestamp when the scheduled evaluation run was created.
     */
    createTime?: string | null;
    /**
     * Optional. User-defined description of the scheduled evaluation run.
     */
    description?: string | null;
    /**
     * Required. User-defined display name of the scheduled evaluation run config.
     */
    displayName?: string | null;
    /**
     * Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Output only. The last successful EvaluationRun of this scheduled execution. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationRuns/{evaluationRun\}`
     */
    lastCompletedRun?: string | null;
    /**
     * Output only. The user who last updated the evaluation.
     */
    lastUpdatedBy?: string | null;
    /**
     * Identifier. The unique identifier of the scheduled evaluation run config. Format: projects/{projectId\}/locations/{locationId\}/apps/{appId\}/scheduledEvaluationRuns/{scheduledEvaluationRunId\}
     */
    name?: string | null;
    /**
     * Output only. The next time this is scheduled to execute
     */
    nextScheduledExecutionTime?: string | null;
    /**
     * Required. The RunEvaluationRequest to schedule
     */
    request?: Schema$RunEvaluationRequest;
    /**
     * Required. Configuration for the timing and frequency with which to execute the evaluations.
     */
    schedulingConfig?: Schema$ScheduledEvaluationRunSchedulingConfig;
    /**
     * Output only. The total number of times this run has been executed
     */
    totalExecutions?: number | null;
    /**
     * Output only. Timestamp when the evaluation was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Eval scheduling configuration details
   */
  export interface Schema$ScheduledEvaluationRunSchedulingConfig {
    /**
     * Optional. The days of the week to run the eval. Applicable only for Weekly and Biweekly frequencies. 1 is Monday, 2 is Tuesday, ..., 7 is Sunday.
     */
    daysOfWeek?: number[] | null;
    /**
     * Required. The frequency with which to run the eval
     */
    frequency?: string | null;
    /**
     * Required. Timestamp when the eval should start.
     */
    startTime?: string | null;
  }
  /**
   * Represents a select subset of an OpenAPI 3.0 schema object.
   */
  export interface Schema$Schema {
    /**
     * Optional. Can either be a boolean or an object, controls the presence of additional properties.
     */
    additionalProperties?: Schema$Schema;
    /**
     * Optional. The value should be validated against any (one or more) of the subschemas in the list.
     */
    anyOf?: Schema$Schema[];
    /**
     * Optional. Default value of the data.
     */
    default?: any | null;
    /**
     * Optional. A map of definitions for use by `ref`. Only allowed at the root of the schema.
     */
    defs?: {[key: string]: Schema$Schema} | null;
    /**
     * Optional. The description of the data.
     */
    description?: string | null;
    /**
     * Optional. Possible values of the element of primitive type with enum format. Examples: 1. We can define direction as : {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]\} 2. We can define apartment number as : {type:INTEGER, format:enum, enum:["101", "201", "301"]\}
     */
    enum?: string[] | null;
    /**
     * Optional. Schema of the elements of Type.ARRAY.
     */
    items?: Schema$Schema;
    /**
     * Optional. Maximum value for Type.INTEGER and Type.NUMBER.
     */
    maximum?: number | null;
    /**
     * Optional. Maximum number of the elements for Type.ARRAY.
     */
    maxItems?: string | null;
    /**
     * Optional. Minimum value for Type.INTEGER and Type.NUMBER.
     */
    minimum?: number | null;
    /**
     * Optional. Minimum number of the elements for Type.ARRAY.
     */
    minItems?: string | null;
    /**
     * Optional. Indicates if the value may be null.
     */
    nullable?: boolean | null;
    /**
     * Optional. Schemas of initial elements of Type.ARRAY.
     */
    prefixItems?: Schema$Schema[];
    /**
     * Optional. Properties of Type.OBJECT.
     */
    properties?: {[key: string]: Schema$Schema} | null;
    /**
     * Optional. Allows indirect references between schema nodes. The value should be a valid reference to a child of the root `defs`. For example, the following schema defines a reference to a schema node named "Pet": ``` type: object properties: pet: ref: #/defs/Pet defs: Pet: type: object properties: name: type: string ``` The value of the "pet" property is a reference to the schema node named "Pet". See details in https://json-schema.org/understanding-json-schema/structuring.
     */
    ref?: string | null;
    /**
     * Optional. Required properties of Type.OBJECT.
     */
    required?: string[] | null;
    /**
     * Optional. The title of the schema.
     */
    title?: string | null;
    /**
     * Required. The type of the data.
     */
    type?: string | null;
    /**
     * Optional. Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.
     */
    uniqueItems?: boolean | null;
  }
  /**
   * Configurations for authentication using a custom service account.
   */
  export interface Schema$ServiceAccountAuthConfig {
    /**
     * Optional. The OAuth scopes to grant. If not specified, the default scope `https://www.googleapis.com/auth/cloud-platform` is used.
     */
    scopes?: string[] | null;
    /**
     * Required. The email address of the service account used for authentication. CES uses this service account to exchange an access token and the access token is then sent in the `Authorization` header of the request. The service account must have the `roles/iam.serviceAccountTokenCreator` role granted to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`.
     */
    serviceAccount?: string | null;
  }
  /**
   * Configurations for authentication with [ID token](https://cloud.google.com/docs/authentication/token-types#id) generated from service agent.
   */
  export interface Schema$ServiceAgentIdTokenAuthConfig {}
  /**
   * Configuration for tools using Service Directory.
   */
  export interface Schema$ServiceDirectoryConfig {
    /**
     * Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects/{project\}/locations/{location\}/namespaces/{namespace\}/services/{service\}`. Location of the service directory must be the same as the location of the app.
     */
    service?: string | null;
  }
  /**
   * The configuration for the session.
   */
  export interface Schema$SessionConfig {
    /**
     * Optional. The deployment of the app to use for the session. Format: `projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}`
     */
    deployment?: string | null;
    /**
     * Optional. The entry agent to handle the session. If not specified, the session will be handled by the root agent of the app. Format: `projects/{project\}/locations/{location\}/agents/{agent\}`
     */
    entryAgent?: string | null;
    /**
     * Optional. The historical context of the session, including user inputs, agent responses, and other messages. Typically, CES agent would manage session automatically so client doesn't need to explicitly populate this field. However, client can optionally override the historical contexts to force the session start from certain state.
     */
    historicalContexts?: Schema$Message[];
    /**
     * Optional. Configuration for processing the input audio.
     */
    inputAudioConfig?: Schema$InputAudioConfig;
    /**
     * Optional. Configuration for generating the output audio.
     */
    outputAudioConfig?: Schema$OutputAudioConfig;
    /**
     * Optional. [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters) to send to the remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent when the session control is transferred to the remote agent.
     */
    remoteDialogflowQueryParameters?: Schema$SessionConfigRemoteDialogflowQueryParameters;
    /**
     * Optional. The time zone of the user. If provided, the agent will use the time zone for date and time related variables. Otherwise, the agent will use the time zone specified in the App.time_zone_settings. The format is the IANA Time Zone Database time zone, e.g. "America/Los_Angeles".
     */
    timeZone?: string | null;
  }
  /**
   * [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters) to send to the remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent when the session control is transferred to the remote agent.
   */
  export interface Schema$SessionConfigRemoteDialogflowQueryParameters {
    /**
     * Optional. The end user metadata to be sent in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters).
     */
    endUserMetadata?: {[key: string]: any} | null;
    /**
     * Optional. The payload to be sent in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters).
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. The HTTP headers to be sent as webhook_headers in [QueryParameters](https://cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#queryparameters).
     */
    webhookHeaders?: {[key: string]: string} | null;
  }
  /**
   * Input for the session.
   */
  export interface Schema$SessionInput {
    /**
     * Optional. Audio data from the end user.
     */
    audio?: string | null;
    /**
     * Optional. Blob data from the end user.
     */
    blob?: Schema$Blob;
    /**
     * Optional. DTMF digits from the end user.
     */
    dtmf?: string | null;
    /**
     * Optional. Event input.
     */
    event?: Schema$Event;
    /**
     * Optional. Image data from the end user.
     */
    image?: Schema$Image;
    /**
     * Optional. Text data from the end user.
     */
    text?: string | null;
    /**
     * Optional. Execution results for the tool calls from the client.
     */
    toolResponses?: Schema$ToolResponses;
    /**
     * Optional. Contextual variables for the session, keyed by name. Only variables declared in the app will be used by the CES agent. Unrecognized variables will still be sent to the Dialogflow agent as additional session parameters.
     */
    variables?: {[key: string]: any} | null;
    /**
     * Optional. A flag to indicate if the current message is a fragment of a larger input in the bidi streaming session. When set to `true`, the agent defers processing until it receives a subsequent message where `will_continue` is `false`, or until the system detects an endpoint in the audio input. NOTE: This field does not apply to audio and DTMF inputs, as they are always processed automatically based on the endpointing signal.
     */
    willContinue?: boolean | null;
  }
  /**
   * Output for the session.
   */
  export interface Schema$SessionOutput {
    /**
     * Output audio from the CES agent.
     */
    audio?: string | null;
    /**
     * Citations that provide the source information for the agent's generated text.
     */
    citations?: Schema$Citations;
    /**
     * Optional. Diagnostic information contains execution details during the processing of the input. Only populated in the last SessionOutput (with `turn_completed=true`) for each turn.
     */
    diagnosticInfo?: Schema$SessionOutputDiagnosticInfo;
    /**
     * Indicates the session has ended.
     */
    endSession?: Schema$EndSession;
    /**
     * The suggestions returned from Google Search as a result of invoking the GoogleSearchTool.
     */
    googleSearchSuggestions?: Schema$GoogleSearchSuggestions;
    /**
     * Custom payload with structured output from the CES agent.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Output text from the CES agent.
     */
    text?: string | null;
    /**
     * Request for the client to execute the tools.
     */
    toolCalls?: Schema$ToolCalls;
    /**
     * If true, the CES agent has detected the end of the current conversation turn and will provide no further output for this turn.
     */
    turnCompleted?: boolean | null;
    /**
     * Indicates the sequential order of conversation turn to which this output belongs to, starting from 1.
     */
    turnIndex?: number | null;
  }
  /**
   * Contains execution details during the processing.
   */
  export interface Schema$SessionOutputDiagnosticInfo {
    /**
     * List of the messages that happened during the processing.
     */
    messages?: Schema$Message[];
    /**
     * A trace of the entire request processing, represented as a root span. This span can contain nested child spans for specific operations.
     */
    rootSpan?: Schema$Span;
  }
  /**
   * A span is a unit of work or a single operation during the request processing.
   */
  export interface Schema$Span {
    /**
     * Output only. Key-value attributes associated with the span.
     */
    attributes?: {[key: string]: any} | null;
    /**
     * Output only. The child spans that are nested under this span.
     */
    childSpans?: Schema$Span[];
    /**
     * Output only. The duration of the span.
     */
    duration?: string | null;
    /**
     * Output only. The end time of the span.
     */
    endTime?: string | null;
    /**
     * Output only. The name of the span.
     */
    name?: string | null;
    /**
     * Output only. The start time of the span.
     */
    startTime?: string | null;
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
   * Configuration for how the agent response should be synthesized.
   */
  export interface Schema$SynthesizeSpeechConfig {
    /**
     * Optional. The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error.
     */
    speakingRate?: number | null;
    /**
     * Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code. For the list of available voices, please refer to [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/voices) from Cloud Text-to-Speech.
     */
    voice?: string | null;
  }
  /**
   * Pre-defined system tool.
   */
  export interface Schema$SystemTool {
    /**
     * Output only. The description of the system tool.
     */
    description?: string | null;
    /**
     * Required. The name of the system tool.
     */
    name?: string | null;
  }
  /**
   * Request message for EvaluationService.TestPersonaVoice.
   */
  export interface Schema$TestPersonaVoiceRequest {
    /**
     * Required. The persona ID to test the voice for. Also accepts "default".
     */
    personaId?: string | null;
    /**
     * Required. The text to test the voice for.
     */
    text?: string | null;
  }
  /**
   * Response message for EvaluationService.TestPersonaVoice.
   */
  export interface Schema$TestPersonaVoiceResponse {
    /**
     * The audio data bytes of the synthesized voice.
     */
    audio?: string | null;
  }
  /**
   * TimeZone settings of the app.
   */
  export interface Schema$TimeZoneSettings {
    /**
     * Optional. The time zone of the app from the [time zone database](https://www.iana.org/time-zones), e.g., America/Los_Angeles, Europe/Paris.
     */
    timeZone?: string | null;
  }
  /**
   * The TLS configuration.
   */
  export interface Schema$TlsConfig {
    /**
     * Required. Specifies a list of allowed custom CA certificates for HTTPS verification.
     */
    caCerts?: Schema$TlsConfigCaCert[];
  }
  /**
   * The CA certificate.
   */
  export interface Schema$TlsConfigCaCert {
    /**
     * Required. The allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store. If this is empty or unspecified, CES will use Google's default trust store to verify certificates. N.B. Make sure the HTTPS server certificates are signed with "subject alt name". For instance a certificate can be self-signed using the following command, openssl x509 -req -days 200 -in example.com.csr \ -signkey example.com.key \ -out example.com.crt \ -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
     */
    cert?: string | null;
    /**
     * Required. The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.
     */
    displayName?: string | null;
  }
  /**
   * A tool represents an action that the CES agent can take to achieve certain goals.
   */
  export interface Schema$Tool {
    /**
     * Optional. The client function.
     */
    clientFunction?: Schema$ClientFunction;
    /**
     * Optional. The Integration Connector tool.
     */
    connectorTool?: Schema$ConnectorTool;
    /**
     * Output only. Timestamp when the tool was created.
     */
    createTime?: string | null;
    /**
     * Optional. The data store tool.
     */
    dataStoreTool?: Schema$DataStoreTool;
    /**
     * Output only. The display name of the tool, derived based on the tool's type. For example, display name of a ClientFunction is derived from its `name` property.
     */
    displayName?: string | null;
    /**
     * Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Optional. The execution type of the tool.
     */
    executionType?: string | null;
    /**
     * Optional. The file search tool.
     */
    fileSearchTool?: Schema$FileSearchTool;
    /**
     * Output only. If the tool is generated by the LLM assistant, this field contains a descriptive summary of the generation.
     */
    generatedSummary?: string | null;
    /**
     * Optional. The google search tool.
     */
    googleSearchTool?: Schema$GoogleSearchTool;
    /**
     * Optional. The MCP tool. An MCP tool cannot be created or updated directly and is managed by the MCP toolset.
     */
    mcpTool?: Schema$McpTool;
    /**
     * Identifier. The unique identifier of the tool. Format: - `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}` for ## standalone tools. `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}/tools/{tool\}` for tools retrieved from a toolset. These tools are dynamic and output-only, they cannot be referenced directly where a tool is expected.
     */
    name?: string | null;
    /**
     * Optional. The open API tool.
     */
    openApiTool?: Schema$OpenApiTool;
    /**
     * Optional. The python function tool.
     */
    pythonFunction?: Schema$PythonFunction;
    /**
     * Optional. The system tool.
     */
    systemTool?: Schema$SystemTool;
    /**
     * Optional. Configuration for tool behavior in fake mode.
     */
    toolFakeConfig?: Schema$ToolFakeConfig;
    /**
     * Output only. Timestamp when the tool was last updated.
     */
    updateTime?: string | null;
    /**
     * Optional. The widget tool.
     */
    widgetTool?: Schema$WidgetTool;
  }
  /**
   * Request for the client or the agent to execute the specified tool.
   */
  export interface Schema$ToolCall {
    /**
     * Optional. The input parameters and values for the tool in JSON object format.
     */
    args?: {[key: string]: any} | null;
    /**
     * Output only. Display name of the tool.
     */
    displayName?: string | null;
    /**
     * Optional. The unique identifier of the tool call. If populated, the client should return the execution result with the matching ID in ToolResponse.
     */
    id?: string | null;
    /**
     * Optional. The name of the tool to execute. Format: `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}`
     */
    tool?: string | null;
    /**
     * Optional. The toolset tool to execute.
     */
    toolsetTool?: Schema$ToolsetTool;
  }
  /**
   * Request for the client to execute the tools and return the execution results before continuing the session.
   */
  export interface Schema$ToolCalls {
    /**
     * Optional. The list of tool calls to execute.
     */
    toolCalls?: Schema$ToolCall[];
  }
  /**
   * Configuration for tool behavior in fake mode.
   */
  export interface Schema$ToolFakeConfig {
    /**
     * Optional. Code block which will be executed instead of a real tool call.
     */
    codeBlock?: Schema$CodeBlock;
    /**
     * Optional. Whether the tool is using fake mode.
     */
    enableFakeMode?: boolean | null;
  }
  /**
   * The execution result of a specific tool from the client or the agent.
   */
  export interface Schema$ToolResponse {
    /**
     * Output only. Display name of the tool.
     */
    displayName?: string | null;
    /**
     * Optional. The matching ID of the tool call the response is for.
     */
    id?: string | null;
    /**
     * Required. The tool execution result in JSON object format. Use "output" key to specify tool response and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as tool execution result.
     */
    response?: {[key: string]: any} | null;
    /**
     * Optional. The name of the tool to execute. Format: `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}`
     */
    tool?: string | null;
    /**
     * Optional. The toolset tool that got executed.
     */
    toolsetTool?: Schema$ToolsetTool;
  }
  /**
   * Execution results for the requested tool calls from the client.
   */
  export interface Schema$ToolResponses {
    /**
     * Optional. The list of tool execution results.
     */
    toolResponses?: Schema$ToolResponse[];
  }
  /**
   * A toolset represents a group of dynamically managed tools that can be used by the agent.
   */
  export interface Schema$Toolset {
    /**
     * Optional. A toolset that generates tools from an Integration Connectors Connection.
     */
    connectorToolset?: Schema$ConnectorToolset;
    /**
     * Output only. Timestamp when the toolset was created.
     */
    createTime?: string | null;
    /**
     * Optional. The description of the toolset.
     */
    description?: string | null;
    /**
     * Optional. The display name of the toolset. Must be unique within the same app.
     */
    displayName?: string | null;
    /**
     * ETag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
     */
    etag?: string | null;
    /**
     * Optional. The execution type of the tools in the toolset.
     */
    executionType?: string | null;
    /**
     * Optional. A toolset that contains a list of tools that are offered by the MCP server.
     */
    mcpToolset?: Schema$McpToolset;
    /**
     * Identifier. The unique identifier of the toolset. Format: `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}`
     */
    name?: string | null;
    /**
     * Optional. A toolset that contains a list of tools that are defined by an OpenAPI schema.
     */
    openApiToolset?: Schema$OpenApiToolset;
    /**
     * Optional. Configuration for tools behavior in fake mode.
     */
    toolFakeConfig?: Schema$ToolFakeConfig;
    /**
     * Output only. Timestamp when the toolset was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A tool that is created from a toolset.
   */
  export interface Schema$ToolsetTool {
    /**
     * Optional. The tool ID to filter the tools to retrieve the schema for.
     */
    toolId?: string | null;
    /**
     * Required. The resource name of the Toolset from which this tool is derived. Format: `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}`
     */
    toolset?: string | null;
  }
  /**
   * Rule for transferring to a specific agent.
   */
  export interface Schema$TransferRule {
    /**
     * Required. The resource name of the child agent the rule applies to. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    childAgent?: string | null;
    /**
     * Optional. A rule that immediately transfers to the target agent when the condition is met.
     */
    deterministicTransfer?: Schema$TransferRuleDeterministicTransfer;
    /**
     * Required. The direction of the transfer.
     */
    direction?: string | null;
    /**
     * Optional. Rule that prevents the planner from transferring to the target agent.
     */
    disablePlannerTransfer?: Schema$TransferRuleDisablePlannerTransfer;
  }
  /**
   * Deterministic transfer rule. When the condition evaluates to true, the transfer occurs.
   */
  export interface Schema$TransferRuleDeterministicTransfer {
    /**
     * Optional. A rule that evaluates a session state condition. If the condition evaluates to true, the transfer occurs.
     */
    expressionCondition?: Schema$ExpressionCondition;
    /**
     * Optional. A rule that uses Python code block to evaluate the conditions. If the condition evaluates to true, the transfer occurs.
     */
    pythonCodeCondition?: Schema$PythonCodeCondition;
  }
  /**
   * A rule that prevents the planner from transferring to the target agent.
   */
  export interface Schema$TransferRuleDisablePlannerTransfer {
    /**
     * Required. If the condition evaluates to true, planner will not be allowed to transfer to the target agent.
     */
    expressionCondition?: Schema$ExpressionCondition;
  }
  /**
   * Action that is taken when a certain precondition is met.
   */
  export interface Schema$TriggerAction {
    /**
     * Optional. Respond with a generative answer.
     */
    generativeAnswer?: Schema$TriggerActionGenerativeAnswer;
    /**
     * Optional. Immediately respond with a preconfigured response.
     */
    respondImmediately?: Schema$TriggerActionRespondImmediately;
    /**
     * Optional. Transfer the conversation to a different agent.
     */
    transferAgent?: Schema$TriggerActionTransferAgent;
  }
  /**
   * The agent will immediately respond with a generative answer.
   */
  export interface Schema$TriggerActionGenerativeAnswer {
    /**
     * Required. The prompt to use for the generative answer.
     */
    prompt?: string | null;
  }
  /**
   * The agent will immediately respond with a preconfigured response.
   */
  export interface Schema$TriggerActionRespondImmediately {
    /**
     * Required. The canned responses for the agent to choose from. The response is chosen randomly.
     */
    responses?: Schema$TriggerActionResponse[];
  }
  /**
   * Represents a response from the agent.
   */
  export interface Schema$TriggerActionResponse {
    /**
     * Optional. Whether the response is disabled. Disabled responses are not used by the agent.
     */
    disabled?: boolean | null;
    /**
     * Required. Text for the agent to respond with.
     */
    text?: string | null;
  }
  /**
   * The agent will transfer the conversation to a different agent.
   */
  export interface Schema$TriggerActionTransferAgent {
    /**
     * Required. The name of the agent to transfer the conversation to. The agent must be in the same app as the current agent. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    agent?: string | null;
  }
  /**
   * Represents a single web search query and its associated search uri.
   */
  export interface Schema$WebSearchQuery {
    /**
     * The search query text.
     */
    query?: string | null;
    /**
     * The URI to the Google Search results page for the query.
     */
    uri?: string | null;
  }
  /**
   * Represents a widget tool that the agent can invoke. When the tool is chosen by the agent, agent will return the widget to the client. The client is responsible for processing the widget and generating the next user query to continue the interaction with the agent.
   */
  export interface Schema$WidgetTool {
    /**
     * Optional. The description of the widget tool.
     */
    description?: string | null;
    /**
     * Required. The display name of the widget tool.
     */
    name?: string | null;
    /**
     * Optional. The input parameters of the widget tool.
     */
    parameters?: Schema$Schema;
    /**
     * Optional. The type of the widget tool. If not specified, the default type will be CUSTOMIZED.
     */
    widgetType?: string | null;
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
    apps: Resource$Projects$Locations$Apps;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Projects$Locations$Apps(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
     *   //   "name": "my_name"
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
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service. This method can be called in two ways: * **List all public locations:** Use the path `GET /v1/locations`. * **List project-visible locations:** Use the path `GET /v1/projects/{project_id\}/locations`. This may include public locations as well as private or other locations specifically visible to the project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.list({
     *     // Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends StandardParameters {
    /**
     * Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Apps {
    context: APIRequestContext;
    agents: Resource$Projects$Locations$Apps$Agents;
    changelogs: Resource$Projects$Locations$Apps$Changelogs;
    conversations: Resource$Projects$Locations$Apps$Conversations;
    deployments: Resource$Projects$Locations$Apps$Deployments;
    evaluationDatasets: Resource$Projects$Locations$Apps$Evaluationdatasets;
    evaluationExpectations: Resource$Projects$Locations$Apps$Evaluationexpectations;
    evaluationRuns: Resource$Projects$Locations$Apps$Evaluationruns;
    evaluations: Resource$Projects$Locations$Apps$Evaluations;
    examples: Resource$Projects$Locations$Apps$Examples;
    guardrails: Resource$Projects$Locations$Apps$Guardrails;
    scheduledEvaluationRuns: Resource$Projects$Locations$Apps$Scheduledevaluationruns;
    sessions: Resource$Projects$Locations$Apps$Sessions;
    tools: Resource$Projects$Locations$Apps$Tools;
    toolsets: Resource$Projects$Locations$Apps$Toolsets;
    versions: Resource$Projects$Locations$Apps$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.agents = new Resource$Projects$Locations$Apps$Agents(this.context);
      this.changelogs = new Resource$Projects$Locations$Apps$Changelogs(
        this.context
      );
      this.conversations = new Resource$Projects$Locations$Apps$Conversations(
        this.context
      );
      this.deployments = new Resource$Projects$Locations$Apps$Deployments(
        this.context
      );
      this.evaluationDatasets =
        new Resource$Projects$Locations$Apps$Evaluationdatasets(this.context);
      this.evaluationExpectations =
        new Resource$Projects$Locations$Apps$Evaluationexpectations(
          this.context
        );
      this.evaluationRuns = new Resource$Projects$Locations$Apps$Evaluationruns(
        this.context
      );
      this.evaluations = new Resource$Projects$Locations$Apps$Evaluations(
        this.context
      );
      this.examples = new Resource$Projects$Locations$Apps$Examples(
        this.context
      );
      this.guardrails = new Resource$Projects$Locations$Apps$Guardrails(
        this.context
      );
      this.scheduledEvaluationRuns =
        new Resource$Projects$Locations$Apps$Scheduledevaluationruns(
          this.context
        );
      this.sessions = new Resource$Projects$Locations$Apps$Sessions(
        this.context
      );
      this.tools = new Resource$Projects$Locations$Apps$Tools(this.context);
      this.toolsets = new Resource$Projects$Locations$Apps$Toolsets(
        this.context
      );
      this.versions = new Resource$Projects$Locations$Apps$Versions(
        this.context
      );
    }

    /**
     * Creates a new app in the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.create({
     *     // Optional. The ID to use for the app, which will become the final component of the app's resource name. If not provided, a unique ID will be automatically assigned for the app.
     *     appId: 'placeholder-value',
     *     // Required. The resource name of the location to create an app in.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audioProcessingConfig": {},
     *       //   "clientCertificateSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "dataStoreSettings": {},
     *       //   "defaultChannelProfile": {},
     *       //   "deploymentCount": 0,
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "evaluationMetricsThresholds": {},
     *       //   "evaluationPersonas": [],
     *       //   "evaluationSettings": {},
     *       //   "globalInstruction": "my_globalInstruction",
     *       //   "guardrails": [],
     *       //   "languageSettings": {},
     *       //   "locked": false,
     *       //   "loggingSettings": {},
     *       //   "metadata": {},
     *       //   "modelSettings": {},
     *       //   "name": "my_name",
     *       //   "pinned": false,
     *       //   "predefinedVariableDeclarations": [],
     *       //   "rootAgent": "my_rootAgent",
     *       //   "timeZoneSettings": {},
     *       //   "toolExecutionMode": "my_toolExecutionMode",
     *       //   "updateTime": "my_updateTime",
     *       //   "variableDeclarations": []
     *       // }
     *     },
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Apps$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/apps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.delete({
     *     // Optional. The current etag of the app. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the app to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Executes the given tool with the given arguments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.executeTool({
     *     // Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "args": {},
     *       //   "tool": "my_tool",
     *       //   "toolsetTool": {},
     *       //   "variables": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "response": {},
     *   //   "tool": "my_tool",
     *   //   "toolsetTool": {},
     *   //   "variables": {}
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
    executeTool(
      params: Params$Resource$Projects$Locations$Apps$Executetool,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    executeTool(
      params?: Params$Resource$Projects$Locations$Apps$Executetool,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExecuteToolResponse>>;
    executeTool(
      params: Params$Resource$Projects$Locations$Apps$Executetool,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    executeTool(
      params: Params$Resource$Projects$Locations$Apps$Executetool,
      options: MethodOptions | BodyResponseCallback<Schema$ExecuteToolResponse>,
      callback: BodyResponseCallback<Schema$ExecuteToolResponse>
    ): void;
    executeTool(
      params: Params$Resource$Projects$Locations$Apps$Executetool,
      callback: BodyResponseCallback<Schema$ExecuteToolResponse>
    ): void;
    executeTool(
      callback: BodyResponseCallback<Schema$ExecuteToolResponse>
    ): void;
    executeTool(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Executetool
        | BodyResponseCallback<Schema$ExecuteToolResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExecuteToolResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExecuteToolResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExecuteToolResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Executetool;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Executetool;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:executeTool').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExecuteToolResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExecuteToolResponse>(parameters);
      }
    }

    /**
     * Exports the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.exportApp({
     *     // Required. The resource name of the app to export.
     *     name: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "exportFormat": "my_exportFormat",
     *       //   "gcsUri": "my_gcsUri"
     *       // }
     *     },
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    exportApp(
      params: Params$Resource$Projects$Locations$Apps$Exportapp,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportApp(
      params?: Params$Resource$Projects$Locations$Apps$Exportapp,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    exportApp(
      params: Params$Resource$Projects$Locations$Apps$Exportapp,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportApp(
      params: Params$Resource$Projects$Locations$Apps$Exportapp,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    exportApp(
      params: Params$Resource$Projects$Locations$Apps$Exportapp,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    exportApp(callback: BodyResponseCallback<Schema$Operation>): void;
    exportApp(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Exportapp
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Exportapp;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Exportapp;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:exportApp').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.get({
     *     // Required. The resource name of the app to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audioProcessingConfig": {},
     *   //   "clientCertificateSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "dataStoreSettings": {},
     *   //   "defaultChannelProfile": {},
     *   //   "deploymentCount": 0,
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "evaluationMetricsThresholds": {},
     *   //   "evaluationPersonas": [],
     *   //   "evaluationSettings": {},
     *   //   "globalInstruction": "my_globalInstruction",
     *   //   "guardrails": [],
     *   //   "languageSettings": {},
     *   //   "locked": false,
     *   //   "loggingSettings": {},
     *   //   "metadata": {},
     *   //   "modelSettings": {},
     *   //   "name": "my_name",
     *   //   "pinned": false,
     *   //   "predefinedVariableDeclarations": [],
     *   //   "rootAgent": "my_rootAgent",
     *   //   "timeZoneSettings": {},
     *   //   "toolExecutionMode": "my_toolExecutionMode",
     *   //   "updateTime": "my_updateTime",
     *   //   "variableDeclarations": []
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$App>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$App>,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Get,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    get(callback: BodyResponseCallback<Schema$App>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Get
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$App>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$App>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$App>(parameters);
      }
    }

    /**
     * Imports the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.importApp({
     *     // Required. The parent resource name with the location of the app to import.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appContent": "my_appContent",
     *       //   "appId": "my_appId",
     *       //   "displayName": "my_displayName",
     *       //   "gcsUri": "my_gcsUri",
     *       //   "ignoreAppLock": false,
     *       //   "importOptions": {}
     *       // }
     *     },
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    importApp(
      params: Params$Resource$Projects$Locations$Apps$Importapp,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    importApp(
      params?: Params$Resource$Projects$Locations$Apps$Importapp,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    importApp(
      params: Params$Resource$Projects$Locations$Apps$Importapp,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    importApp(
      params: Params$Resource$Projects$Locations$Apps$Importapp,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    importApp(
      params: Params$Resource$Projects$Locations$Apps$Importapp,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    importApp(callback: BodyResponseCallback<Schema$Operation>): void;
    importApp(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Importapp
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Importapp;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Importapp;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/apps:importApp').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Imports evaluations into the app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.importEvaluations({
     *     // Required. The app to import the evaluations into. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "conversationList": {},
     *       //   "csvContent": "my_csvContent",
     *       //   "gcsUri": "my_gcsUri",
     *       //   "importOptions": {}
     *       // }
     *     },
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    importEvaluations(
      params: Params$Resource$Projects$Locations$Apps$Importevaluations,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    importEvaluations(
      params?: Params$Resource$Projects$Locations$Apps$Importevaluations,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    importEvaluations(
      params: Params$Resource$Projects$Locations$Apps$Importevaluations,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    importEvaluations(
      params: Params$Resource$Projects$Locations$Apps$Importevaluations,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    importEvaluations(
      params: Params$Resource$Projects$Locations$Apps$Importevaluations,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    importEvaluations(callback: BodyResponseCallback<Schema$Operation>): void;
    importEvaluations(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Importevaluations
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Importevaluations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Importevaluations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:importEvaluations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists apps in the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.list({
     *     // Optional. Filter to be applied when listing the apps. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListApps call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the location to list apps from.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apps": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Apps$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAppsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAppsResponse>,
      callback: BodyResponseCallback<Schema$ListAppsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$List,
      callback: BodyResponseCallback<Schema$ListAppsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAppsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$List
        | BodyResponseCallback<Schema$ListAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAppsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/apps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAppsResponse>(parameters);
      }
    }

    /**
     * Updates the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.patch({
     *     // Identifier. The unique identifier of the app. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audioProcessingConfig": {},
     *       //   "clientCertificateSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "dataStoreSettings": {},
     *       //   "defaultChannelProfile": {},
     *       //   "deploymentCount": 0,
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "evaluationMetricsThresholds": {},
     *       //   "evaluationPersonas": [],
     *       //   "evaluationSettings": {},
     *       //   "globalInstruction": "my_globalInstruction",
     *       //   "guardrails": [],
     *       //   "languageSettings": {},
     *       //   "locked": false,
     *       //   "loggingSettings": {},
     *       //   "metadata": {},
     *       //   "modelSettings": {},
     *       //   "name": "my_name",
     *       //   "pinned": false,
     *       //   "predefinedVariableDeclarations": [],
     *       //   "rootAgent": "my_rootAgent",
     *       //   "timeZoneSettings": {},
     *       //   "toolExecutionMode": "my_toolExecutionMode",
     *       //   "updateTime": "my_updateTime",
     *       //   "variableDeclarations": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audioProcessingConfig": {},
     *   //   "clientCertificateSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "dataStoreSettings": {},
     *   //   "defaultChannelProfile": {},
     *   //   "deploymentCount": 0,
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "evaluationMetricsThresholds": {},
     *   //   "evaluationPersonas": [],
     *   //   "evaluationSettings": {},
     *   //   "globalInstruction": "my_globalInstruction",
     *   //   "guardrails": [],
     *   //   "languageSettings": {},
     *   //   "locked": false,
     *   //   "loggingSettings": {},
     *   //   "metadata": {},
     *   //   "modelSettings": {},
     *   //   "name": "my_name",
     *   //   "pinned": false,
     *   //   "predefinedVariableDeclarations": [],
     *   //   "rootAgent": "my_rootAgent",
     *   //   "timeZoneSettings": {},
     *   //   "toolExecutionMode": "my_toolExecutionMode",
     *   //   "updateTime": "my_updateTime",
     *   //   "variableDeclarations": []
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$App>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$App>,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Patch,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    patch(callback: BodyResponseCallback<Schema$App>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Patch
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$App>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$App>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$App>(parameters);
      }
    }

    /**
     * Retrieve the schema of the given tool. The schema is computed on the fly for the given instance of the tool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.retrieveToolSchema({
     *     // Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "tool": "my_tool",
     *       //   "toolsetTool": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "inputSchema": {},
     *   //   "outputSchema": {},
     *   //   "tool": "my_tool",
     *   //   "toolsetTool": {}
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
    retrieveToolSchema(
      params: Params$Resource$Projects$Locations$Apps$Retrievetoolschema,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retrieveToolSchema(
      params?: Params$Resource$Projects$Locations$Apps$Retrievetoolschema,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RetrieveToolSchemaResponse>>;
    retrieveToolSchema(
      params: Params$Resource$Projects$Locations$Apps$Retrievetoolschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveToolSchema(
      params: Params$Resource$Projects$Locations$Apps$Retrievetoolschema,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RetrieveToolSchemaResponse>,
      callback: BodyResponseCallback<Schema$RetrieveToolSchemaResponse>
    ): void;
    retrieveToolSchema(
      params: Params$Resource$Projects$Locations$Apps$Retrievetoolschema,
      callback: BodyResponseCallback<Schema$RetrieveToolSchemaResponse>
    ): void;
    retrieveToolSchema(
      callback: BodyResponseCallback<Schema$RetrieveToolSchemaResponse>
    ): void;
    retrieveToolSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Retrievetoolschema
        | BodyResponseCallback<Schema$RetrieveToolSchemaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RetrieveToolSchemaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RetrieveToolSchemaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RetrieveToolSchemaResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Retrievetoolschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Retrievetoolschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:retrieveToolSchema').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RetrieveToolSchemaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RetrieveToolSchemaResponse>(parameters);
      }
    }

    /**
     * Runs an evaluation of the app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.runEvaluation({
     *     // Required. The app to evaluate. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     app: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "app": "my_app",
     *       //   "appVersion": "my_appVersion",
     *       //   "config": {},
     *       //   "displayName": "my_displayName",
     *       //   "evaluationDataset": "my_evaluationDataset",
     *       //   "evaluations": [],
     *       //   "generateLatencyReport": false,
     *       //   "goldenRunMethod": "my_goldenRunMethod",
     *       //   "optimizationConfig": {},
     *       //   "personaRunConfigs": [],
     *       //   "runCount": 0,
     *       //   "scheduledEvaluationRun": "my_scheduledEvaluationRun"
     *       // }
     *     },
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    runEvaluation(
      params: Params$Resource$Projects$Locations$Apps$Runevaluation,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    runEvaluation(
      params?: Params$Resource$Projects$Locations$Apps$Runevaluation,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    runEvaluation(
      params: Params$Resource$Projects$Locations$Apps$Runevaluation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runEvaluation(
      params: Params$Resource$Projects$Locations$Apps$Runevaluation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    runEvaluation(
      params: Params$Resource$Projects$Locations$Apps$Runevaluation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    runEvaluation(callback: BodyResponseCallback<Schema$Operation>): void;
    runEvaluation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Runevaluation
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Runevaluation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Runevaluation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+app}:runEvaluation').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Tests the voice of a persona. Also accepts a default persona.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.testPersonaVoice({
     *     // Required. the resource name of the app to test the persona voice for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     app: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "personaId": "my_personaId",
     *       //   "text": "my_text"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audio": "my_audio"
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
    testPersonaVoice(
      params: Params$Resource$Projects$Locations$Apps$Testpersonavoice,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testPersonaVoice(
      params?: Params$Resource$Projects$Locations$Apps$Testpersonavoice,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestPersonaVoiceResponse>>;
    testPersonaVoice(
      params: Params$Resource$Projects$Locations$Apps$Testpersonavoice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testPersonaVoice(
      params: Params$Resource$Projects$Locations$Apps$Testpersonavoice,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestPersonaVoiceResponse>,
      callback: BodyResponseCallback<Schema$TestPersonaVoiceResponse>
    ): void;
    testPersonaVoice(
      params: Params$Resource$Projects$Locations$Apps$Testpersonavoice,
      callback: BodyResponseCallback<Schema$TestPersonaVoiceResponse>
    ): void;
    testPersonaVoice(
      callback: BodyResponseCallback<Schema$TestPersonaVoiceResponse>
    ): void;
    testPersonaVoice(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Testpersonavoice
        | BodyResponseCallback<Schema$TestPersonaVoiceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestPersonaVoiceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestPersonaVoiceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TestPersonaVoiceResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Testpersonavoice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Testpersonavoice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+app}:testPersonaVoice').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestPersonaVoiceResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestPersonaVoiceResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the app, which will become the final component of the app's resource name. If not provided, a unique ID will be automatically assigned for the app.
     */
    appId?: string;
    /**
     * Required. The resource name of the location to create an app in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$App;
  }
  export interface Params$Resource$Projects$Locations$Apps$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the app. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The resource name of the app to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Executetool extends StandardParameters {
    /**
     * Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteToolRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$Exportapp extends StandardParameters {
    /**
     * Required. The resource name of the app to export.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportAppRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$Get extends StandardParameters {
    /**
     * Required. The resource name of the app to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Importapp extends StandardParameters {
    /**
     * Required. The parent resource name with the location of the app to import.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportAppRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$Importevaluations extends StandardParameters {
    /**
     * Required. The app to import the evaluations into. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportEvaluationsRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the apps. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListApps call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location to list apps from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of the app. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$App;
  }
  export interface Params$Resource$Projects$Locations$Apps$Retrievetoolschema extends StandardParameters {
    /**
     * Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetrieveToolSchemaRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$Runevaluation extends StandardParameters {
    /**
     * Required. The app to evaluate. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunEvaluationRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$Testpersonavoice extends StandardParameters {
    /**
     * Required. the resource name of the app to test the persona voice for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestPersonaVoiceRequest;
  }

  export class Resource$Projects$Locations$Apps$Agents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new agent in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.agents.create({
     *     // Optional. The ID to use for the agent, which will become the final component of the agent's resource name. If not provided, a unique ID will be automatically assigned for the agent.
     *     agentId: 'placeholder-value',
     *     // Required. The resource name of the app to create an agent in.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "afterAgentCallbacks": [],
     *       //   "afterModelCallbacks": [],
     *       //   "afterToolCallbacks": [],
     *       //   "beforeAgentCallbacks": [],
     *       //   "beforeModelCallbacks": [],
     *       //   "beforeToolCallbacks": [],
     *       //   "childAgents": [],
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "generatedSummary": "my_generatedSummary",
     *       //   "guardrails": [],
     *       //   "instruction": "my_instruction",
     *       //   "llmAgent": {},
     *       //   "modelSettings": {},
     *       //   "name": "my_name",
     *       //   "remoteDialogflowAgent": {},
     *       //   "tools": [],
     *       //   "toolsets": [],
     *       //   "transferRules": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "afterAgentCallbacks": [],
     *   //   "afterModelCallbacks": [],
     *   //   "afterToolCallbacks": [],
     *   //   "beforeAgentCallbacks": [],
     *   //   "beforeModelCallbacks": [],
     *   //   "beforeToolCallbacks": [],
     *   //   "childAgents": [],
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "generatedSummary": "my_generatedSummary",
     *   //   "guardrails": [],
     *   //   "instruction": "my_instruction",
     *   //   "llmAgent": {},
     *   //   "modelSettings": {},
     *   //   "name": "my_name",
     *   //   "remoteDialogflowAgent": {},
     *   //   "tools": [],
     *   //   "toolsets": [],
     *   //   "transferRules": [],
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Agents$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Agents$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Agent>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Agents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Agents$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Agent>,
      callback: BodyResponseCallback<Schema$Agent>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Agents$Create,
      callback: BodyResponseCallback<Schema$Agent>
    ): void;
    create(callback: BodyResponseCallback<Schema$Agent>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Agents$Create
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Agent>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Agents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Agents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/agents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Agent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Agent>(parameters);
      }
    }

    /**
     * Deletes the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.agents.delete({
     *     // Optional. The current etag of the agent. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the agent, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Optional. Indicates whether to forcefully delete the agent, even if it is still referenced by other app/agents/examples. * If `force = false`, the deletion fails if other agents/examples reference it. * If `force = true`, delete the agent and remove it from all referencing apps/agents/examples.
     *     force: 'placeholder-value',
     *     // Required. The resource name of the agent to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/agents/my-agent',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Agents$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Agents$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Agents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Agents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Agents$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Agents$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Agents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Agents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.agents.get({
     *     // Required. The resource name of the agent to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/agents/my-agent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "afterAgentCallbacks": [],
     *   //   "afterModelCallbacks": [],
     *   //   "afterToolCallbacks": [],
     *   //   "beforeAgentCallbacks": [],
     *   //   "beforeModelCallbacks": [],
     *   //   "beforeToolCallbacks": [],
     *   //   "childAgents": [],
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "generatedSummary": "my_generatedSummary",
     *   //   "guardrails": [],
     *   //   "instruction": "my_instruction",
     *   //   "llmAgent": {},
     *   //   "modelSettings": {},
     *   //   "name": "my_name",
     *   //   "remoteDialogflowAgent": {},
     *   //   "tools": [],
     *   //   "toolsets": [],
     *   //   "transferRules": [],
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Agents$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Agents$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Agent>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Agents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Agents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Agent>,
      callback: BodyResponseCallback<Schema$Agent>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Agents$Get,
      callback: BodyResponseCallback<Schema$Agent>
    ): void;
    get(callback: BodyResponseCallback<Schema$Agent>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Agents$Get
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Agent>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Agents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Agents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Agent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Agent>(parameters);
      }
    }

    /**
     * Lists agents in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.agents.list({
     *     // Optional. Filter to be applied when listing the agents. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListAgents call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list agents from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "agents": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Agents$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Agents$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAgentsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Agents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Agents$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAgentsResponse>,
      callback: BodyResponseCallback<Schema$ListAgentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Agents$List,
      callback: BodyResponseCallback<Schema$ListAgentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAgentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Agents$List
        | BodyResponseCallback<Schema$ListAgentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAgentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAgentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAgentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Agents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Agents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/agents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAgentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAgentsResponse>(parameters);
      }
    }

    /**
     * Updates the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.agents.patch({
     *     // Identifier. The unique identifier of the agent. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/agents/my-agent',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "afterAgentCallbacks": [],
     *       //   "afterModelCallbacks": [],
     *       //   "afterToolCallbacks": [],
     *       //   "beforeAgentCallbacks": [],
     *       //   "beforeModelCallbacks": [],
     *       //   "beforeToolCallbacks": [],
     *       //   "childAgents": [],
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "generatedSummary": "my_generatedSummary",
     *       //   "guardrails": [],
     *       //   "instruction": "my_instruction",
     *       //   "llmAgent": {},
     *       //   "modelSettings": {},
     *       //   "name": "my_name",
     *       //   "remoteDialogflowAgent": {},
     *       //   "tools": [],
     *       //   "toolsets": [],
     *       //   "transferRules": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "afterAgentCallbacks": [],
     *   //   "afterModelCallbacks": [],
     *   //   "afterToolCallbacks": [],
     *   //   "beforeAgentCallbacks": [],
     *   //   "beforeModelCallbacks": [],
     *   //   "beforeToolCallbacks": [],
     *   //   "childAgents": [],
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "generatedSummary": "my_generatedSummary",
     *   //   "guardrails": [],
     *   //   "instruction": "my_instruction",
     *   //   "llmAgent": {},
     *   //   "modelSettings": {},
     *   //   "name": "my_name",
     *   //   "remoteDialogflowAgent": {},
     *   //   "tools": [],
     *   //   "toolsets": [],
     *   //   "transferRules": [],
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Agents$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Agents$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Agent>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Agents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Agents$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Agent>,
      callback: BodyResponseCallback<Schema$Agent>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Agents$Patch,
      callback: BodyResponseCallback<Schema$Agent>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Agent>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Agents$Patch
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Agent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Agent>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Agents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Agents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Agent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Agent>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Agents$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the agent, which will become the final component of the agent's resource name. If not provided, a unique ID will be automatically assigned for the agent.
     */
    agentId?: string;
    /**
     * Required. The resource name of the app to create an agent in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Agent;
  }
  export interface Params$Resource$Projects$Locations$Apps$Agents$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the agent. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the agent, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Optional. Indicates whether to forcefully delete the agent, even if it is still referenced by other app/agents/examples. * If `force = false`, the deletion fails if other agents/examples reference it. * If `force = true`, delete the agent and remove it from all referencing apps/agents/examples.
     */
    force?: boolean;
    /**
     * Required. The resource name of the agent to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Agents$Get extends StandardParameters {
    /**
     * Required. The resource name of the agent to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Agents$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the agents. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListAgents call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list agents from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Agents$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of the agent. Format: `projects/{project\}/locations/{location\}/apps/{app\}/agents/{agent\}`
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Agent;
  }

  export class Resource$Projects$Locations$Apps$Changelogs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the specified changelog.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.changelogs.get({
     *     // Required. The resource name of the changelog to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/changelogs/my-changelog',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "author": "my_author",
     *   //   "createTime": "my_createTime",
     *   //   "dependentResources": [],
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "newResource": {},
     *   //   "originalResource": {},
     *   //   "resource": "my_resource",
     *   //   "resourceType": "my_resourceType",
     *   //   "sequenceNumber": "my_sequenceNumber"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Changelogs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Changelogs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Changelog>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Changelogs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Changelogs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Changelog>,
      callback: BodyResponseCallback<Schema$Changelog>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Changelogs$Get,
      callback: BodyResponseCallback<Schema$Changelog>
    ): void;
    get(callback: BodyResponseCallback<Schema$Changelog>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Changelogs$Get
        | BodyResponseCallback<Schema$Changelog>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Changelog>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Changelog>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Changelog>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Changelogs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Changelogs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Changelog>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Changelog>(parameters);
      }
    }

    /**
     * Lists the changelogs of the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.changelogs.list({
     *     // Optional. Filter to be applied when listing the changelogs. See https://google.aip.dev/160 for more details. The filter string can be used to filter by `action`, `resource_type`, `resource_name`, `author`, and `create_time`. The `:` comparator can be used for case-insensitive partial matching on string fields, while `=` performs an exact case-sensitive match. Examples: * `action:update` (case-insensitive partial match) * `action="Create"` (case-sensitive exact match) * `resource_type:agent` * `resource_name:my-agent` * `author:me@example.com` * `create_time \> "2025-01-01T00:00:00Z"` * `create_time <= "2025-01-01T00:00:00Z" AND resource_type:tool`
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListChangelogs call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list changelogs from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "changelogs": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Changelogs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Changelogs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListChangelogsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Changelogs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Changelogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListChangelogsResponse>,
      callback: BodyResponseCallback<Schema$ListChangelogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Changelogs$List,
      callback: BodyResponseCallback<Schema$ListChangelogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListChangelogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Changelogs$List
        | BodyResponseCallback<Schema$ListChangelogsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListChangelogsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListChangelogsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListChangelogsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Changelogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Changelogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/changelogs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListChangelogsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListChangelogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Changelogs$Get extends StandardParameters {
    /**
     * Required. The resource name of the changelog to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Changelogs$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the changelogs. See https://google.aip.dev/160 for more details. The filter string can be used to filter by `action`, `resource_type`, `resource_name`, `author`, and `create_time`. The `:` comparator can be used for case-insensitive partial matching on string fields, while `=` performs an exact case-sensitive match. Examples: * `action:update` (case-insensitive partial match) * `action="Create"` (case-sensitive exact match) * `resource_type:agent` * `resource_name:my-agent` * `author:me@example.com` * `create_time \> "2025-01-01T00:00:00Z"` * `create_time <= "2025-01-01T00:00:00Z" AND resource_type:tool`
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListChangelogs call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list changelogs from.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Apps$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batch deletes the specified conversations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.conversations.batchDelete({
     *     // Required. The resource name of the app to delete conversations from. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "conversations": []
     *       // }
     *     },
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDelete(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    batchDelete(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchDelete(callback: BodyResponseCallback<Schema$Operation>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/conversations:batchDelete'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes the specified conversation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.conversations.delete({
     *     // Required. The resource name of the conversation to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/conversations/my-conversation',
     *     // Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default.
     *     source: 'placeholder-value',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Conversations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Conversations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Conversations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Conversations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Creates a golden evaluation from a conversation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await ces.projects.locations.apps.conversations.generateEvaluation({
     *       // Required. The conversation to create the golden evaluation for. Format: `projects/{project\}/locations/{location\}/apps/{app\}/conversations/{conversation\}`
     *       conversation:
     *         'projects/my-project/locations/my-location/apps/my-app/conversations/my-conversation',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "source": "my_source"
     *         // }
     *       },
     *     });
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateEvaluation(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateEvaluation(
      params?: Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    generateEvaluation(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateEvaluation(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    generateEvaluation(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    generateEvaluation(callback: BodyResponseCallback<Schema$Operation>): void;
    generateEvaluation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+conversation}:generateEvaluation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['conversation'],
        pathParams: ['conversation'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of the specified conversation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.conversations.get({
     *     // Required. The resource name of the conversation to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/conversations/my-conversation',
     *     // Optional. Indicate the source of the conversation. If not set, all source will be searched.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appVersion": "my_appVersion",
     *   //   "channelType": "my_channelType",
     *   //   "deployment": "my_deployment",
     *   //   "endTime": "my_endTime",
     *   //   "entryAgent": "my_entryAgent",
     *   //   "inputTypes": [],
     *   //   "languageCode": "my_languageCode",
     *   //   "messages": [],
     *   //   "name": "my_name",
     *   //   "source": "my_source",
     *   //   "startTime": "my_startTime",
     *   //   "turnCount": 0,
     *   //   "turns": []
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Conversations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Conversation>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Conversation>,
      callback: BodyResponseCallback<Schema$Conversation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Conversations$Get,
      callback: BodyResponseCallback<Schema$Conversation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Conversation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Conversations$Get
        | BodyResponseCallback<Schema$Conversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Conversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Conversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Conversation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Conversations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Conversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Conversation>(parameters);
      }
    }

    /**
     * Lists conversations in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.conversations.list({
     *     // Optional. Filter to be applied when listing the conversations. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListConversations call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list conversations from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *     // Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default. Will be deprecated in favor of `sources` field.
     *     source: 'placeholder-value',
     *     // Optional. Indicate the sources of the conversations. If not set, all available sources will be applied by default.
     *     sources: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "conversations": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Conversations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Conversations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConversationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Conversations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Conversations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConversationsResponse>,
      callback: BodyResponseCallback<Schema$ListConversationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Conversations$List,
      callback: BodyResponseCallback<Schema$ListConversationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConversationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Conversations$List
        | BodyResponseCallback<Schema$ListConversationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConversationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConversationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConversationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Conversations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/conversations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListConversationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConversationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Conversations$Batchdelete extends StandardParameters {
    /**
     * Required. The resource name of the app to delete conversations from. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteConversationsRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$Conversations$Delete extends StandardParameters {
    /**
     * Required. The resource name of the conversation to delete.
     */
    name?: string;
    /**
     * Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default.
     */
    source?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Conversations$Generateevaluation extends StandardParameters {
    /**
     * Required. The conversation to create the golden evaluation for. Format: `projects/{project\}/locations/{location\}/apps/{app\}/conversations/{conversation\}`
     */
    conversation?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateEvaluationRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$Conversations$Get extends StandardParameters {
    /**
     * Required. The resource name of the conversation to retrieve.
     */
    name?: string;
    /**
     * Optional. Indicate the source of the conversation. If not set, all source will be searched.
     */
    source?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Conversations$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the conversations. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListConversations call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list conversations from.
     */
    parent?: string;
    /**
     * Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default. Will be deprecated in favor of `sources` field.
     */
    source?: string;
    /**
     * Optional. Indicate the sources of the conversations. If not set, all available sources will be applied by default.
     */
    sources?: string[];
  }

  export class Resource$Projects$Locations$Apps$Deployments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new deployment in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.deployments.create({
     *     // Optional. The ID to use for the deployment, which will become the final component of the deployment's resource name. If not provided, a unique ID will be automatically assigned for the deployment.
     *     deploymentId: 'placeholder-value',
     *     // Required. The parent app. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appVersion": "my_appVersion",
     *       //   "channelProfile": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appVersion": "my_appVersion",
     *   //   "channelProfile": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Deployments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Deployment>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Deployment>,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Create,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Deployment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Deployments$Create
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Deployment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Deployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Deployments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/deployments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Deployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Deployment>(parameters);
      }
    }

    /**
     * Deletes the specified deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.deployments.delete({
     *     // Optional. The etag of the deployment. If an etag is provided and does not match the current etag of the deployment, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Required. The name of the deployment to delete. Format: `projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/deployments/my-deployment',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Deployments$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Deployments$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Deployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Deployments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.deployments.get({
     *     // Required. The name of the deployment. Format: `projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/deployments/my-deployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appVersion": "my_appVersion",
     *   //   "channelProfile": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Deployments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Deployment>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Deployment>,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Get,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Deployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Deployments$Get
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Deployment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Deployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Deployments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Deployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Deployment>(parameters);
      }
    }

    /**
     * Lists deployments in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.deployments.list({
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeployments` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent app. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployments": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Deployments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Deployments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDeploymentsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Deployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Deployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$ListDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Deployments$List,
      callback: BodyResponseCallback<Schema$ListDeploymentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDeploymentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Deployments$List
        | BodyResponseCallback<Schema$ListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDeploymentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Deployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Deployments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/deployments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDeploymentsResponse>(parameters);
      }
    }

    /**
     * Updates the specified deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.deployments.patch({
     *     // Identifier. The resource name of the deployment. Format: projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}
     *     name: 'projects/my-project/locations/my-location/apps/my-app/deployments/my-deployment',
     *     // Optional. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appVersion": "my_appVersion",
     *       //   "channelProfile": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appVersion": "my_appVersion",
     *   //   "channelProfile": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Deployments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Deployment>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Deployment>,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Deployments$Patch,
      callback: BodyResponseCallback<Schema$Deployment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Deployment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Deployments$Patch
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Deployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Deployment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Deployments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Deployments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Deployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Deployment>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Deployments$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the deployment, which will become the final component of the deployment's resource name. If not provided, a unique ID will be automatically assigned for the deployment.
     */
    deploymentId?: string;
    /**
     * Required. The parent app. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Deployment;
  }
  export interface Params$Resource$Projects$Locations$Apps$Deployments$Delete extends StandardParameters {
    /**
     * Optional. The etag of the deployment. If an etag is provided and does not match the current etag of the deployment, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The name of the deployment to delete. Format: `projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Deployments$Get extends StandardParameters {
    /**
     * Required. The name of the deployment. Format: `projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Deployments$List extends StandardParameters {
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeployments` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent app. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Deployments$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the deployment. Format: projects/{project\}/locations/{location\}/apps/{app\}/deployments/{deployment\}
     */
    name?: string;
    /**
     * Optional. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Deployment;
  }

  export class Resource$Projects$Locations$Apps$Evaluationdatasets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an evaluation dataset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationDatasets.create({
     *     // Optional. The ID to use for the evaluation dataset, which will become the final component of the evaluation dataset's resource name. If not provided, a unique ID will be automatically assigned for the evaluation.
     *     evaluationDatasetId: 'placeholder-value',
     *     // Required. The app to create the evaluation for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aggregatedMetrics": {},
     *       //   "createTime": "my_createTime",
     *       //   "createdBy": "my_createdBy",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "evaluations": [],
     *       //   "lastUpdatedBy": "my_lastUpdatedBy",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedMetrics": {},
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "evaluations": [],
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EvaluationDataset>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$EvaluationDataset>,
      callback: BodyResponseCallback<Schema$EvaluationDataset>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create,
      callback: BodyResponseCallback<Schema$EvaluationDataset>
    ): void;
    create(callback: BodyResponseCallback<Schema$EvaluationDataset>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EvaluationDataset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/evaluationDatasets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluationDataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluationDataset>(parameters);
      }
    }

    /**
     * Deletes an evaluation dataset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationDatasets.delete({
     *     // Optional. The current etag of the evaluation dataset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation dataset, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the evaluation dataset to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluationDatasets/my-evaluationDataset',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified evaluation dataset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationDatasets.get({
     *     // Required. The resource name of the evaluation dataset to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluationDatasets/my-evaluationDataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedMetrics": {},
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "evaluations": [],
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EvaluationDataset>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EvaluationDataset>,
      callback: BodyResponseCallback<Schema$EvaluationDataset>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get,
      callback: BodyResponseCallback<Schema$EvaluationDataset>
    ): void;
    get(callback: BodyResponseCallback<Schema$EvaluationDataset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EvaluationDataset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluationDataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluationDataset>(parameters);
      }
    }

    /**
     * Lists all evaluation datasets in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationDatasets.list({
     *     // Optional. Filter to be applied when listing the evaluation datasets. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationDatasets call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list evaluation datasets from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "evaluationDatasets": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationDatasetsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEvaluationDatasetsResponse>,
      callback: BodyResponseCallback<Schema$ListEvaluationDatasetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List,
      callback: BodyResponseCallback<Schema$ListEvaluationDatasetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEvaluationDatasetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List
        | BodyResponseCallback<Schema$ListEvaluationDatasetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEvaluationDatasetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEvaluationDatasetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationDatasetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/evaluationDatasets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEvaluationDatasetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEvaluationDatasetsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an evaluation dataset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationDatasets.patch({
     *     // Identifier. The unique identifier of this evaluation dataset. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationDatasets/{evaluationDataset\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluationDatasets/my-evaluationDataset',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aggregatedMetrics": {},
     *       //   "createTime": "my_createTime",
     *       //   "createdBy": "my_createdBy",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "evaluations": [],
     *       //   "lastUpdatedBy": "my_lastUpdatedBy",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedMetrics": {},
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "evaluations": [],
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EvaluationDataset>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$EvaluationDataset>,
      callback: BodyResponseCallback<Schema$EvaluationDataset>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch,
      callback: BodyResponseCallback<Schema$EvaluationDataset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$EvaluationDataset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluationDataset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EvaluationDataset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluationDataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluationDataset>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the evaluation dataset, which will become the final component of the evaluation dataset's resource name. If not provided, a unique ID will be automatically assigned for the evaluation.
     */
    evaluationDatasetId?: string;
    /**
     * Required. The app to create the evaluation for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EvaluationDataset;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the evaluation dataset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation dataset, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The resource name of the evaluation dataset to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Get extends StandardParameters {
    /**
     * Required. The resource name of the evaluation dataset to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationdatasets$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the evaluation datasets. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationDatasets call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list evaluation datasets from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationdatasets$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of this evaluation dataset. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationDatasets/{evaluationDataset\}`
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EvaluationDataset;
  }

  export class Resource$Projects$Locations$Apps$Evaluationexpectations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an evaluation expectation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationExpectations.create({
     *     // Optional. The ID to use for the evaluation expectation, which will become the final component of the evaluation expectation's resource name. If not provided, a unique ID will be automatically assigned for the evaluation expectation.
     *     evaluationExpectationId: 'placeholder-value',
     *     // Required. The app to create the evaluation expectation for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "llmCriteria": {},
     *       //   "name": "my_name",
     *       //   "tags": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "llmCriteria": {},
     *   //   "name": "my_name",
     *   //   "tags": [],
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EvaluationExpectation>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EvaluationExpectation>,
      callback: BodyResponseCallback<Schema$EvaluationExpectation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create,
      callback: BodyResponseCallback<Schema$EvaluationExpectation>
    ): void;
    create(callback: BodyResponseCallback<Schema$EvaluationExpectation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EvaluationExpectation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/evaluationExpectations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluationExpectation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluationExpectation>(parameters);
      }
    }

    /**
     * Deletes an evaluation expectation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationExpectations.delete({
     *     // Optional. The current etag of the evaluation expectation. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation expectation, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the evaluation expectation to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluationExpectations/my-evaluationExpectation',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified evaluation expectation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationExpectations.get({
     *     // Required. The resource name of the evaluation expectation to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluationExpectations/my-evaluationExpectation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "llmCriteria": {},
     *   //   "name": "my_name",
     *   //   "tags": [],
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EvaluationExpectation>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EvaluationExpectation>,
      callback: BodyResponseCallback<Schema$EvaluationExpectation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get,
      callback: BodyResponseCallback<Schema$EvaluationExpectation>
    ): void;
    get(callback: BodyResponseCallback<Schema$EvaluationExpectation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EvaluationExpectation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluationExpectation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluationExpectation>(parameters);
      }
    }

    /**
     * Lists all evaluation expectations in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationExpectations.list({
     *     // Optional. Filter to be applied when listing the evaluation expectations. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationExpectations call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list evaluation expectations from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "evaluationExpectations": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListEvaluationExpectationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEvaluationExpectationsResponse>,
      callback: BodyResponseCallback<Schema$ListEvaluationExpectationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List,
      callback: BodyResponseCallback<Schema$ListEvaluationExpectationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEvaluationExpectationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List
        | BodyResponseCallback<Schema$ListEvaluationExpectationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEvaluationExpectationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEvaluationExpectationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListEvaluationExpectationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/evaluationExpectations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEvaluationExpectationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEvaluationExpectationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an evaluation expectation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationExpectations.patch({
     *     // Identifier. The unique identifier of this evaluation expectation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationExpectations/{evaluation_expectation\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluationExpectations/my-evaluationExpectation',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "llmCriteria": {},
     *       //   "name": "my_name",
     *       //   "tags": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "llmCriteria": {},
     *   //   "name": "my_name",
     *   //   "tags": [],
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EvaluationExpectation>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EvaluationExpectation>,
      callback: BodyResponseCallback<Schema$EvaluationExpectation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch,
      callback: BodyResponseCallback<Schema$EvaluationExpectation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$EvaluationExpectation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluationExpectation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EvaluationExpectation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluationExpectation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluationExpectation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the evaluation expectation, which will become the final component of the evaluation expectation's resource name. If not provided, a unique ID will be automatically assigned for the evaluation expectation.
     */
    evaluationExpectationId?: string;
    /**
     * Required. The app to create the evaluation expectation for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EvaluationExpectation;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the evaluation expectation. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation expectation, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The resource name of the evaluation expectation to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Get extends StandardParameters {
    /**
     * Required. The resource name of the evaluation expectation to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationexpectations$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the evaluation expectations. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationExpectations call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list evaluation expectations from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationexpectations$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of this evaluation expectation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluationExpectations/{evaluation_expectation\}`
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EvaluationExpectation;
  }

  export class Resource$Projects$Locations$Apps$Evaluationruns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes an evaluation run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationRuns.delete({
     *     // Required. The resource name of the evaluation run to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluationRuns/my-evaluationRun',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of the specified evaluation run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationRuns.get({
     *     // Required. The resource name of the evaluation run to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluationRuns/my-evaluationRun',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appVersion": "my_appVersion",
     *   //   "appVersionDisplayName": "my_appVersionDisplayName",
     *   //   "changelog": "my_changelog",
     *   //   "changelogCreateTime": "my_changelogCreateTime",
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "error": {},
     *   //   "errorInfo": {},
     *   //   "evaluationDataset": "my_evaluationDataset",
     *   //   "evaluationResults": [],
     *   //   "evaluationRunSummaries": {},
     *   //   "evaluationType": "my_evaluationType",
     *   //   "evaluations": [],
     *   //   "goldenRunMethod": "my_goldenRunMethod",
     *   //   "initiatedBy": "my_initiatedBy",
     *   //   "latencyReport": {},
     *   //   "name": "my_name",
     *   //   "optimizationConfig": {},
     *   //   "personaRunConfigs": [],
     *   //   "progress": {},
     *   //   "runCount": 0,
     *   //   "scheduledEvaluationRun": "my_scheduledEvaluationRun",
     *   //   "state": "my_state"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationruns$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EvaluationRun>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EvaluationRun>,
      callback: BodyResponseCallback<Schema$EvaluationRun>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$Get,
      callback: BodyResponseCallback<Schema$EvaluationRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$EvaluationRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationruns$Get
        | BodyResponseCallback<Schema$EvaluationRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluationRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluationRun>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EvaluationRun>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationruns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationruns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluationRun>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluationRun>(parameters);
      }
    }

    /**
     * Lists all evaluation runs in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluationRuns.list({
     *     // Optional. Filter to be applied when listing the evaluation runs. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationRuns call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list evaluation runs from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "evaluationRuns": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Evaluationruns$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationRunsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEvaluationRunsResponse>,
      callback: BodyResponseCallback<Schema$ListEvaluationRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluationruns$List,
      callback: BodyResponseCallback<Schema$ListEvaluationRunsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEvaluationRunsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluationruns$List
        | BodyResponseCallback<Schema$ListEvaluationRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEvaluationRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEvaluationRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationRunsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluationruns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluationruns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/evaluationRuns').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEvaluationRunsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEvaluationRunsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Evaluationruns$Delete extends StandardParameters {
    /**
     * Required. The resource name of the evaluation run to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationruns$Get extends StandardParameters {
    /**
     * Required. The resource name of the evaluation run to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluationruns$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the evaluation runs. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationRuns call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list evaluation runs from.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Apps$Evaluations {
    context: APIRequestContext;
    results: Resource$Projects$Locations$Apps$Evaluations$Results;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.results = new Resource$Projects$Locations$Apps$Evaluations$Results(
        this.context
      );
    }

    /**
     * Creates an evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluations.create({
     *     // Optional. The ID to use for the evaluation, which will become the final component of the evaluation's resource name. If not provided, a unique ID will be automatically assigned for the evaluation.
     *     evaluationId: 'placeholder-value',
     *     // Required. The app to create the evaluation for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aggregatedMetrics": {},
     *       //   "createTime": "my_createTime",
     *       //   "createdBy": "my_createdBy",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "evaluationDatasets": [],
     *       //   "evaluationRuns": [],
     *       //   "golden": {},
     *       //   "invalid": false,
     *       //   "lastCompletedResult": {},
     *       //   "lastTenResults": [],
     *       //   "lastUpdatedBy": "my_lastUpdatedBy",
     *       //   "name": "my_name",
     *       //   "scenario": {},
     *       //   "tags": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedMetrics": {},
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "evaluationDatasets": [],
     *   //   "evaluationRuns": [],
     *   //   "golden": {},
     *   //   "invalid": false,
     *   //   "lastCompletedResult": {},
     *   //   "lastTenResults": [],
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "scenario": {},
     *   //   "tags": [],
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Evaluations$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Evaluation>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Evaluation>,
      callback: BodyResponseCallback<Schema$Evaluation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Create,
      callback: BodyResponseCallback<Schema$Evaluation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Evaluation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluations$Create
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Evaluation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/evaluations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Evaluation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Evaluation>(parameters);
      }
    }

    /**
     * Deletes an evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluations.delete({
     *     // Optional. The current etag of the evaluation. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Optional. Indicates whether to forcefully delete the evaluation, even if it is still referenced by evaluation datasets. * If `force = false`, the deletion will fail if any datasets still reference the evaluation. * If `force = true`, all existing references from datasets will be removed and the evaluation will be deleted.
     *     force: 'placeholder-value',
     *     // Required. The resource name of the evaluation to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluations/my-evaluation',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Evaluations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluations.get({
     *     // Required. The resource name of the evaluation to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluations/my-evaluation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedMetrics": {},
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "evaluationDatasets": [],
     *   //   "evaluationRuns": [],
     *   //   "golden": {},
     *   //   "invalid": false,
     *   //   "lastCompletedResult": {},
     *   //   "lastTenResults": [],
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "scenario": {},
     *   //   "tags": [],
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Evaluations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Evaluation>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Evaluation>,
      callback: BodyResponseCallback<Schema$Evaluation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Get,
      callback: BodyResponseCallback<Schema$Evaluation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Evaluation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluations$Get
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Evaluation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Evaluations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Evaluation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Evaluation>(parameters);
      }
    }

    /**
     * Lists all evaluations in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluations.list({
     *     // Optional. Filter to be applied on the evaluation when listing the evaluations. See https://google.aip.dev/160 for more details. Supported fields: evaluation_datasets
     *     evaluationFilter: 'placeholder-value',
     *     // Optional. Filter string for fields on the associated EvaluationRun resources. See https://google.aip.dev/160 for more details. Supported fields: create_time, initiated_by, app_version_display_name
     *     evaluationRunFilter: 'placeholder-value',
     *     // Optional. Deprecated: Use evaluation_filter and evaluation_run_filter instead.
     *     filter: 'placeholder-value',
     *     // Optional. Whether to include the last 10 evaluation results for each evaluation in the response.
     *     lastTenResults: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluations call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list evaluations from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "evaluations": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Evaluations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEvaluationsResponse>,
      callback: BodyResponseCallback<Schema$ListEvaluationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$List,
      callback: BodyResponseCallback<Schema$ListEvaluationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEvaluationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluations$List
        | BodyResponseCallback<Schema$ListEvaluationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEvaluationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEvaluationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Evaluations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/evaluations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEvaluationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEvaluationsResponse>(parameters);
      }
    }

    /**
     * Updates an evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluations.patch({
     *     // Identifier. The unique identifier of this evaluation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/{evaluation\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluations/my-evaluation',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aggregatedMetrics": {},
     *       //   "createTime": "my_createTime",
     *       //   "createdBy": "my_createdBy",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "evaluationDatasets": [],
     *       //   "evaluationRuns": [],
     *       //   "golden": {},
     *       //   "invalid": false,
     *       //   "lastCompletedResult": {},
     *       //   "lastTenResults": [],
     *       //   "lastUpdatedBy": "my_lastUpdatedBy",
     *       //   "name": "my_name",
     *       //   "scenario": {},
     *       //   "tags": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedMetrics": {},
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "evaluationDatasets": [],
     *   //   "evaluationRuns": [],
     *   //   "golden": {},
     *   //   "invalid": false,
     *   //   "lastCompletedResult": {},
     *   //   "lastTenResults": [],
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "scenario": {},
     *   //   "tags": [],
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Evaluations$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Evaluation>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Evaluation>,
      callback: BodyResponseCallback<Schema$Evaluation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Patch,
      callback: BodyResponseCallback<Schema$Evaluation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Evaluation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluations$Patch
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Evaluation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Evaluation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Evaluation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Evaluations$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the evaluation, which will become the final component of the evaluation's resource name. If not provided, a unique ID will be automatically assigned for the evaluation.
     */
    evaluationId?: string;
    /**
     * Required. The app to create the evaluation for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Evaluation;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluations$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the evaluation. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Optional. Indicates whether to forcefully delete the evaluation, even if it is still referenced by evaluation datasets. * If `force = false`, the deletion will fail if any datasets still reference the evaluation. * If `force = true`, all existing references from datasets will be removed and the evaluation will be deleted.
     */
    force?: boolean;
    /**
     * Required. The resource name of the evaluation to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluations$Get extends StandardParameters {
    /**
     * Required. The resource name of the evaluation to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluations$List extends StandardParameters {
    /**
     * Optional. Filter to be applied on the evaluation when listing the evaluations. See https://google.aip.dev/160 for more details. Supported fields: evaluation_datasets
     */
    evaluationFilter?: string;
    /**
     * Optional. Filter string for fields on the associated EvaluationRun resources. See https://google.aip.dev/160 for more details. Supported fields: create_time, initiated_by, app_version_display_name
     */
    evaluationRunFilter?: string;
    /**
     * Optional. Deprecated: Use evaluation_filter and evaluation_run_filter instead.
     */
    filter?: string;
    /**
     * Optional. Whether to include the last 10 evaluation results for each evaluation in the response.
     */
    lastTenResults?: boolean;
    /**
     * Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluations call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list evaluations from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluations$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of this evaluation. Format: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/{evaluation\}`
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Evaluation;
  }

  export class Resource$Projects$Locations$Apps$Evaluations$Results {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes an evaluation result.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluations.results.delete({
     *     // Required. The resource name of the evaluation result to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluations/my-evaluation/results/my-result',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified evaluation result.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluations.results.get({
     *     // Required. The resource name of the evaluation result to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/evaluations/my-evaluation/results/my-result',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appVersion": "my_appVersion",
     *   //   "appVersionDisplayName": "my_appVersionDisplayName",
     *   //   "changelog": "my_changelog",
     *   //   "changelogCreateTime": "my_changelogCreateTime",
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "error": {},
     *   //   "errorInfo": {},
     *   //   "evaluationMetricsThresholds": {},
     *   //   "evaluationRun": "my_evaluationRun",
     *   //   "evaluationStatus": "my_evaluationStatus",
     *   //   "executionState": "my_executionState",
     *   //   "goldenResult": {},
     *   //   "goldenRunMethod": "my_goldenRunMethod",
     *   //   "initiatedBy": "my_initiatedBy",
     *   //   "name": "my_name",
     *   //   "persona": {},
     *   //   "scenarioResult": {}
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EvaluationResult>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EvaluationResult>,
      callback: BodyResponseCallback<Schema$EvaluationResult>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get,
      callback: BodyResponseCallback<Schema$EvaluationResult>
    ): void;
    get(callback: BodyResponseCallback<Schema$EvaluationResult>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get
        | BodyResponseCallback<Schema$EvaluationResult>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EvaluationResult>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EvaluationResult>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EvaluationResult>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EvaluationResult>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EvaluationResult>(parameters);
      }
    }

    /**
     * Lists all evaluation results for a given evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.evaluations.results.list({
     *     // Optional. Filter to be applied when listing the evaluation results. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationResults call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the evaluation to list evaluation results from. To filter by evaluation run, use `-` as the evaluation ID and specify the evaluation run ID in the filter. For example: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/-`
     *     parent:
     *       'projects/my-project/locations/my-location/apps/my-app/evaluations/my-evaluation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "evaluationResults": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Evaluations$Results$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationResultsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEvaluationResultsResponse>,
      callback: BodyResponseCallback<Schema$ListEvaluationResultsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Evaluations$Results$List,
      callback: BodyResponseCallback<Schema$ListEvaluationResultsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEvaluationResultsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Evaluations$Results$List
        | BodyResponseCallback<Schema$ListEvaluationResultsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEvaluationResultsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEvaluationResultsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationResultsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Evaluations$Results$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Evaluations$Results$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/results').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEvaluationResultsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEvaluationResultsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Evaluations$Results$Delete extends StandardParameters {
    /**
     * Required. The resource name of the evaluation result to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluations$Results$Get extends StandardParameters {
    /**
     * Required. The resource name of the evaluation result to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Evaluations$Results$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the evaluation results. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationResults call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the evaluation to list evaluation results from. To filter by evaluation run, use `-` as the evaluation ID and specify the evaluation run ID in the filter. For example: `projects/{project\}/locations/{location\}/apps/{app\}/evaluations/-`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Apps$Examples {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new example in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.examples.create({
     *     // Optional. The ID to use for the example, which will become the final component of the example's resource name. If not provided, a unique ID will be automatically assigned for the example.
     *     exampleId: 'placeholder-value',
     *     // Required. The resource name of the app to create an example in.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "entryAgent": "my_entryAgent",
     *       //   "etag": "my_etag",
     *       //   "invalid": false,
     *       //   "messages": [],
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "entryAgent": "my_entryAgent",
     *   //   "etag": "my_etag",
     *   //   "invalid": false,
     *   //   "messages": [],
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Examples$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Examples$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Example>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Examples$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Examples$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Example>,
      callback: BodyResponseCallback<Schema$Example>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Examples$Create,
      callback: BodyResponseCallback<Schema$Example>
    ): void;
    create(callback: BodyResponseCallback<Schema$Example>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Examples$Create
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Example>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Examples$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Examples$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/examples').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Example>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Example>(parameters);
      }
    }

    /**
     * Deletes the specified example.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.examples.delete({
     *     // Optional. The current etag of the example. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the example, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the example to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/examples/my-example',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Examples$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Examples$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Examples$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Examples$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Examples$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Examples$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Examples$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Examples$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified example.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.examples.get({
     *     // Required. The resource name of the example to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/examples/my-example',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "entryAgent": "my_entryAgent",
     *   //   "etag": "my_etag",
     *   //   "invalid": false,
     *   //   "messages": [],
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Examples$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Examples$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Example>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Examples$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Examples$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Example>,
      callback: BodyResponseCallback<Schema$Example>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Examples$Get,
      callback: BodyResponseCallback<Schema$Example>
    ): void;
    get(callback: BodyResponseCallback<Schema$Example>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Examples$Get
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Example>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Examples$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Examples$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Example>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Example>(parameters);
      }
    }

    /**
     * Lists examples in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.examples.list({
     *     // Optional. Filter to be applied when listing the examples. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListExamples call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list examples from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "examples": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Examples$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Examples$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListExamplesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Examples$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Examples$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExamplesResponse>,
      callback: BodyResponseCallback<Schema$ListExamplesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Examples$List,
      callback: BodyResponseCallback<Schema$ListExamplesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExamplesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Examples$List
        | BodyResponseCallback<Schema$ListExamplesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExamplesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExamplesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListExamplesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Examples$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Examples$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/examples').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListExamplesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExamplesResponse>(parameters);
      }
    }

    /**
     * Updates the specified example.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.examples.patch({
     *     // Identifier. The unique identifier of the example. Format: `projects/{project\}/locations/{location\}/apps/{app\}/examples/{example\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/examples/my-example',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "entryAgent": "my_entryAgent",
     *       //   "etag": "my_etag",
     *       //   "invalid": false,
     *       //   "messages": [],
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "entryAgent": "my_entryAgent",
     *   //   "etag": "my_etag",
     *   //   "invalid": false,
     *   //   "messages": [],
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Examples$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Examples$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Example>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Examples$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Examples$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Example>,
      callback: BodyResponseCallback<Schema$Example>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Examples$Patch,
      callback: BodyResponseCallback<Schema$Example>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Example>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Examples$Patch
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Example>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Example>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Examples$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Examples$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Example>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Example>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Examples$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the example, which will become the final component of the example's resource name. If not provided, a unique ID will be automatically assigned for the example.
     */
    exampleId?: string;
    /**
     * Required. The resource name of the app to create an example in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Example;
  }
  export interface Params$Resource$Projects$Locations$Apps$Examples$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the example. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the example, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The resource name of the example to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Examples$Get extends StandardParameters {
    /**
     * Required. The resource name of the example to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Examples$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the examples. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListExamples call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list examples from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Examples$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of the example. Format: `projects/{project\}/locations/{location\}/apps/{app\}/examples/{example\}`
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Example;
  }

  export class Resource$Projects$Locations$Apps$Guardrails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new guardrail in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.guardrails.create({
     *     // Optional. The ID to use for the guardrail, which will become the final component of the guardrail's resource name. If not provided, a unique ID will be automatically assigned for the guardrail.
     *     guardrailId: 'placeholder-value',
     *     // Required. The resource name of the app to create a guardrail in.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": {},
     *       //   "codeCallback": {},
     *       //   "contentFilter": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "etag": "my_etag",
     *       //   "llmPolicy": {},
     *       //   "llmPromptSecurity": {},
     *       //   "modelSafety": {},
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": {},
     *   //   "codeCallback": {},
     *   //   "contentFilter": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "etag": "my_etag",
     *   //   "llmPolicy": {},
     *   //   "llmPromptSecurity": {},
     *   //   "modelSafety": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Guardrails$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Guardrail>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Guardrail>,
      callback: BodyResponseCallback<Schema$Guardrail>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Create,
      callback: BodyResponseCallback<Schema$Guardrail>
    ): void;
    create(callback: BodyResponseCallback<Schema$Guardrail>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Guardrails$Create
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Guardrail>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Guardrails$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Guardrails$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/guardrails').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Guardrail>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Guardrail>(parameters);
      }
    }

    /**
     * Deletes the specified guardrail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.guardrails.delete({
     *     // Optional. The current etag of the guardrail. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the guardrail, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Optional. Indicates whether to forcefully delete the guardrail, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any apps/agents still reference the guardrail. * If `force = true`, all existing references from apps/agents will be removed and the guardrail will be deleted.
     *     force: 'placeholder-value',
     *     // Required. The resource name of the guardrail to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/guardrails/my-guardrail',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Guardrails$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Guardrails$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Guardrails$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Guardrails$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified guardrail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.guardrails.get({
     *     // Required. The resource name of the guardrail to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/guardrails/my-guardrail',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": {},
     *   //   "codeCallback": {},
     *   //   "contentFilter": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "etag": "my_etag",
     *   //   "llmPolicy": {},
     *   //   "llmPromptSecurity": {},
     *   //   "modelSafety": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Guardrails$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Guardrail>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Guardrail>,
      callback: BodyResponseCallback<Schema$Guardrail>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Get,
      callback: BodyResponseCallback<Schema$Guardrail>
    ): void;
    get(callback: BodyResponseCallback<Schema$Guardrail>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Guardrails$Get
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Guardrail>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Guardrails$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Guardrails$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Guardrail>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Guardrail>(parameters);
      }
    }

    /**
     * Lists guardrails in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.guardrails.list({
     *     // Optional. Filter to be applied when listing the guardrails. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListGuardrails call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list guardrails from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "guardrails": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Guardrails$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGuardrailsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGuardrailsResponse>,
      callback: BodyResponseCallback<Schema$ListGuardrailsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$List,
      callback: BodyResponseCallback<Schema$ListGuardrailsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGuardrailsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Guardrails$List
        | BodyResponseCallback<Schema$ListGuardrailsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGuardrailsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGuardrailsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGuardrailsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Guardrails$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Guardrails$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/guardrails').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGuardrailsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGuardrailsResponse>(parameters);
      }
    }

    /**
     * Updates the specified guardrail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.guardrails.patch({
     *     // Identifier. The unique identifier of the guardrail. Format: `projects/{project\}/locations/{location\}/apps/{app\}/guardrails/{guardrail\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/guardrails/my-guardrail',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": {},
     *       //   "codeCallback": {},
     *       //   "contentFilter": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "etag": "my_etag",
     *       //   "llmPolicy": {},
     *       //   "llmPromptSecurity": {},
     *       //   "modelSafety": {},
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": {},
     *   //   "codeCallback": {},
     *   //   "contentFilter": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "etag": "my_etag",
     *   //   "llmPolicy": {},
     *   //   "llmPromptSecurity": {},
     *   //   "modelSafety": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Guardrails$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Guardrail>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Guardrail>,
      callback: BodyResponseCallback<Schema$Guardrail>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Guardrails$Patch,
      callback: BodyResponseCallback<Schema$Guardrail>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Guardrail>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Guardrails$Patch
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Guardrail>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Guardrail>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Guardrails$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Guardrails$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Guardrail>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Guardrail>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Guardrails$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the guardrail, which will become the final component of the guardrail's resource name. If not provided, a unique ID will be automatically assigned for the guardrail.
     */
    guardrailId?: string;
    /**
     * Required. The resource name of the app to create a guardrail in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Guardrail;
  }
  export interface Params$Resource$Projects$Locations$Apps$Guardrails$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the guardrail. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the guardrail, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Optional. Indicates whether to forcefully delete the guardrail, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any apps/agents still reference the guardrail. * If `force = true`, all existing references from apps/agents will be removed and the guardrail will be deleted.
     */
    force?: boolean;
    /**
     * Required. The resource name of the guardrail to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Guardrails$Get extends StandardParameters {
    /**
     * Required. The resource name of the guardrail to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Guardrails$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the guardrails. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListGuardrails call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list guardrails from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Guardrails$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of the guardrail. Format: `projects/{project\}/locations/{location\}/apps/{app\}/guardrails/{guardrail\}`
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Guardrail;
  }

  export class Resource$Projects$Locations$Apps$Scheduledevaluationruns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a scheduled evaluation run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.scheduledEvaluationRuns.create({
     *     // Required. The app to create the scheduled evaluation run for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *     // Optional. The ID to use for the scheduled evaluation run, which will become the final component of the scheduled evaluation run's resource name. If not provided, a unique ID will be automatically assigned.
     *     scheduledEvaluationRunId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "active": false,
     *       //   "createTime": "my_createTime",
     *       //   "createdBy": "my_createdBy",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "lastCompletedRun": "my_lastCompletedRun",
     *       //   "lastUpdatedBy": "my_lastUpdatedBy",
     *       //   "name": "my_name",
     *       //   "nextScheduledExecutionTime": "my_nextScheduledExecutionTime",
     *       //   "request": {},
     *       //   "schedulingConfig": {},
     *       //   "totalExecutions": 0,
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "active": false,
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "lastCompletedRun": "my_lastCompletedRun",
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "nextScheduledExecutionTime": "my_nextScheduledExecutionTime",
     *   //   "request": {},
     *   //   "schedulingConfig": {},
     *   //   "totalExecutions": 0,
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ScheduledEvaluationRun>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>,
      callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create,
      callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>
    ): void;
    create(callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ScheduledEvaluationRun>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/scheduledEvaluationRuns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScheduledEvaluationRun>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ScheduledEvaluationRun>(parameters);
      }
    }

    /**
     * Deletes a scheduled evaluation run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.scheduledEvaluationRuns.delete({
     *     // Optional. The etag of the ScheduledEvaluationRun. If provided, it must match the server's etag.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the scheduled evaluation run to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/scheduledEvaluationRuns/my-scheduledEvaluationRun',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified scheduled evaluation run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.scheduledEvaluationRuns.get({
     *     // Required. The resource name of the scheduled evaluation run to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/scheduledEvaluationRuns/my-scheduledEvaluationRun',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "active": false,
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "lastCompletedRun": "my_lastCompletedRun",
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "nextScheduledExecutionTime": "my_nextScheduledExecutionTime",
     *   //   "request": {},
     *   //   "schedulingConfig": {},
     *   //   "totalExecutions": 0,
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ScheduledEvaluationRun>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>,
      callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get,
      callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ScheduledEvaluationRun>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScheduledEvaluationRun>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ScheduledEvaluationRun>(parameters);
      }
    }

    /**
     * Lists all scheduled evaluation runs in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.scheduledEvaluationRuns.list({
     *     // Optional. Filter to be applied when listing the scheduled evaluation runs. See https://google.aip.dev/160 for more details. Currently supports filtering by: * request.evaluations:evaluation_id * request.evaluation_dataset:evaluation_dataset_id
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Supported fields are: "name" (ascending), "create_time" (descending), "update_time" (descending), "next_scheduled_execution" (ascending), and "last_completed_run.create_time" (descending). If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list EvaluationService.ListScheduledEvaluationRuns call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list scheduled evaluation runs from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "scheduledEvaluationRuns": []
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListScheduledEvaluationRunsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScheduledEvaluationRunsResponse>,
      callback: BodyResponseCallback<Schema$ListScheduledEvaluationRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List,
      callback: BodyResponseCallback<Schema$ListScheduledEvaluationRunsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListScheduledEvaluationRunsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List
        | BodyResponseCallback<Schema$ListScheduledEvaluationRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListScheduledEvaluationRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListScheduledEvaluationRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListScheduledEvaluationRunsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/scheduledEvaluationRuns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListScheduledEvaluationRunsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListScheduledEvaluationRunsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a scheduled evaluation run.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.scheduledEvaluationRuns.patch({
     *     // Identifier. The unique identifier of the scheduled evaluation run config. Format: projects/{projectId\}/locations/{locationId\}/apps/{appId\}/scheduledEvaluationRuns/{scheduledEvaluationRunId\}
     *     name: 'projects/my-project/locations/my-location/apps/my-app/scheduledEvaluationRuns/my-scheduledEvaluationRun',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "active": false,
     *       //   "createTime": "my_createTime",
     *       //   "createdBy": "my_createdBy",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "lastCompletedRun": "my_lastCompletedRun",
     *       //   "lastUpdatedBy": "my_lastUpdatedBy",
     *       //   "name": "my_name",
     *       //   "nextScheduledExecutionTime": "my_nextScheduledExecutionTime",
     *       //   "request": {},
     *       //   "schedulingConfig": {},
     *       //   "totalExecutions": 0,
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "active": false,
     *   //   "createTime": "my_createTime",
     *   //   "createdBy": "my_createdBy",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "lastCompletedRun": "my_lastCompletedRun",
     *   //   "lastUpdatedBy": "my_lastUpdatedBy",
     *   //   "name": "my_name",
     *   //   "nextScheduledExecutionTime": "my_nextScheduledExecutionTime",
     *   //   "request": {},
     *   //   "schedulingConfig": {},
     *   //   "totalExecutions": 0,
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ScheduledEvaluationRun>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>,
      callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch,
      callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ScheduledEvaluationRun>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ScheduledEvaluationRun>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ScheduledEvaluationRun>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScheduledEvaluationRun>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ScheduledEvaluationRun>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Create extends StandardParameters {
    /**
     * Required. The app to create the scheduled evaluation run for. Format: `projects/{project\}/locations/{location\}/apps/{app\}`
     */
    parent?: string;
    /**
     * Optional. The ID to use for the scheduled evaluation run, which will become the final component of the scheduled evaluation run's resource name. If not provided, a unique ID will be automatically assigned.
     */
    scheduledEvaluationRunId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScheduledEvaluationRun;
  }
  export interface Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Delete extends StandardParameters {
    /**
     * Optional. The etag of the ScheduledEvaluationRun. If provided, it must match the server's etag.
     */
    etag?: string;
    /**
     * Required. The resource name of the scheduled evaluation run to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Get extends StandardParameters {
    /**
     * Required. The resource name of the scheduled evaluation run to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the scheduled evaluation runs. See https://google.aip.dev/160 for more details. Currently supports filtering by: * request.evaluations:evaluation_id * request.evaluation_dataset:evaluation_dataset_id
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Supported fields are: "name" (ascending), "create_time" (descending), "update_time" (descending), "next_scheduled_execution" (ascending), and "last_completed_run.create_time" (descending). If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list EvaluationService.ListScheduledEvaluationRuns call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list scheduled evaluation runs from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Scheduledevaluationruns$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of the scheduled evaluation run config. Format: projects/{projectId\}/locations/{locationId\}/apps/{appId\}/scheduledEvaluationRuns/{scheduledEvaluationRunId\}
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScheduledEvaluationRun;
  }

  export class Resource$Projects$Locations$Apps$Sessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates a session scoped token for chat widget to authenticate with Session APIs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.sessions.generateChatToken({
     *     // Required. The session name to generate the chat token for. Format: projects/{project\}/locations/{location\}/apps/{app\}/sessions/{session\}
     *     name: 'projects/my-project/locations/my-location/apps/my-app/sessions/my-session',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deployment": "my_deployment",
     *       //   "recaptchaToken": "my_recaptchaToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "chatToken": "my_chatToken",
     *   //   "expireTime": "my_expireTime"
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
    generateChatToken(
      params: Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateChatToken(
      params?: Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GenerateChatTokenResponse>>;
    generateChatToken(
      params: Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateChatToken(
      params: Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateChatTokenResponse>,
      callback: BodyResponseCallback<Schema$GenerateChatTokenResponse>
    ): void;
    generateChatToken(
      params: Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken,
      callback: BodyResponseCallback<Schema$GenerateChatTokenResponse>
    ): void;
    generateChatToken(
      callback: BodyResponseCallback<Schema$GenerateChatTokenResponse>
    ): void;
    generateChatToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken
        | BodyResponseCallback<Schema$GenerateChatTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateChatTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateChatTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GenerateChatTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:generateChatToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateChatTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateChatTokenResponse>(parameters);
      }
    }

    /**
     * Initiates a single turn interaction with the CES agent within a session.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.sessions.runSession({
     *     // Required. The unique identifier of the session. Format: `projects/{project\}/locations/{location\}/apps/{app\}/sessions/{session\}`
     *     session:
     *       'projects/my-project/locations/my-location/apps/my-app/sessions/my-session',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "inputs": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "outputs": []
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
    runSession(
      params: Params$Resource$Projects$Locations$Apps$Sessions$Runsession,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    runSession(
      params?: Params$Resource$Projects$Locations$Apps$Sessions$Runsession,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RunSessionResponse>>;
    runSession(
      params: Params$Resource$Projects$Locations$Apps$Sessions$Runsession,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runSession(
      params: Params$Resource$Projects$Locations$Apps$Sessions$Runsession,
      options: MethodOptions | BodyResponseCallback<Schema$RunSessionResponse>,
      callback: BodyResponseCallback<Schema$RunSessionResponse>
    ): void;
    runSession(
      params: Params$Resource$Projects$Locations$Apps$Sessions$Runsession,
      callback: BodyResponseCallback<Schema$RunSessionResponse>
    ): void;
    runSession(callback: BodyResponseCallback<Schema$RunSessionResponse>): void;
    runSession(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Sessions$Runsession
        | BodyResponseCallback<Schema$RunSessionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunSessionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunSessionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RunSessionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Sessions$Runsession;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Sessions$Runsession;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+session}:runSession').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RunSessionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunSessionResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Sessions$Generatechattoken extends StandardParameters {
    /**
     * Required. The session name to generate the chat token for. Format: projects/{project\}/locations/{location\}/apps/{app\}/sessions/{session\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateChatTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Apps$Sessions$Runsession extends StandardParameters {
    /**
     * Required. The unique identifier of the session. Format: `projects/{project\}/locations/{location\}/apps/{app\}/sessions/{session\}`
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunSessionRequest;
  }

  export class Resource$Projects$Locations$Apps$Tools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new tool in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.tools.create({
     *     // Required. The resource name of the app to create a tool in.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *     // Optional. The ID to use for the tool, which will become the final component of the tool's resource name. If not provided, a unique ID will be automatically assigned for the tool.
     *     toolId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientFunction": {},
     *       //   "connectorTool": {},
     *       //   "createTime": "my_createTime",
     *       //   "dataStoreTool": {},
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "executionType": "my_executionType",
     *       //   "fileSearchTool": {},
     *       //   "generatedSummary": "my_generatedSummary",
     *       //   "googleSearchTool": {},
     *       //   "mcpTool": {},
     *       //   "name": "my_name",
     *       //   "openApiTool": {},
     *       //   "pythonFunction": {},
     *       //   "systemTool": {},
     *       //   "toolFakeConfig": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "widgetTool": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientFunction": {},
     *   //   "connectorTool": {},
     *   //   "createTime": "my_createTime",
     *   //   "dataStoreTool": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "executionType": "my_executionType",
     *   //   "fileSearchTool": {},
     *   //   "generatedSummary": "my_generatedSummary",
     *   //   "googleSearchTool": {},
     *   //   "mcpTool": {},
     *   //   "name": "my_name",
     *   //   "openApiTool": {},
     *   //   "pythonFunction": {},
     *   //   "systemTool": {},
     *   //   "toolFakeConfig": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "widgetTool": {}
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Tools$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Tools$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tool>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Tools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Tools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Tool>,
      callback: BodyResponseCallback<Schema$Tool>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Tools$Create,
      callback: BodyResponseCallback<Schema$Tool>
    ): void;
    create(callback: BodyResponseCallback<Schema$Tool>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Tools$Create
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tool>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Tools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Tools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/tools').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tool>(parameters);
      }
    }

    /**
     * Deletes the specified tool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.tools.delete({
     *     // Optional. The current etag of the tool. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the tool, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Optional. Indicates whether to forcefully delete the tool, even if it is still referenced by agents/examples. * If `force = false`, the deletion will fail if any agents still reference the tool. * If `force = true`, all existing references from agents will be removed and the tool will be deleted.
     *     force: 'placeholder-value',
     *     // Required. The resource name of the tool to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/tools/my-tool',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Tools$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Tools$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Tools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Tools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Tools$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Tools$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Tools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Tools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified tool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.tools.get({
     *     // Required. The resource name of the tool to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/tools/my-tool',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientFunction": {},
     *   //   "connectorTool": {},
     *   //   "createTime": "my_createTime",
     *   //   "dataStoreTool": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "executionType": "my_executionType",
     *   //   "fileSearchTool": {},
     *   //   "generatedSummary": "my_generatedSummary",
     *   //   "googleSearchTool": {},
     *   //   "mcpTool": {},
     *   //   "name": "my_name",
     *   //   "openApiTool": {},
     *   //   "pythonFunction": {},
     *   //   "systemTool": {},
     *   //   "toolFakeConfig": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "widgetTool": {}
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Tools$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Tools$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tool>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Tools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Tools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Tool>,
      callback: BodyResponseCallback<Schema$Tool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Tools$Get,
      callback: BodyResponseCallback<Schema$Tool>
    ): void;
    get(callback: BodyResponseCallback<Schema$Tool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Tools$Get
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tool>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Tools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Tools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tool>(parameters);
      }
    }

    /**
     * Lists tools in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.tools.list({
     *     // Optional. Filter to be applied when listing the tools. Use "include_system_tools=true" to include system tools in the response. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListTools call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list tools from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tools": []
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Tools$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Tools$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListToolsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Tools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Tools$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListToolsResponse>,
      callback: BodyResponseCallback<Schema$ListToolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Tools$List,
      callback: BodyResponseCallback<Schema$ListToolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListToolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Tools$List
        | BodyResponseCallback<Schema$ListToolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListToolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListToolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListToolsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Tools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Tools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/tools').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListToolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListToolsResponse>(parameters);
      }
    }

    /**
     * Updates the specified tool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.tools.patch({
     *     // Identifier. The unique identifier of the tool. Format: - `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}` for ## standalone tools. `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}/tools/{tool\}` for tools retrieved from a toolset. These tools are dynamic and output-only, they cannot be referenced directly where a tool is expected.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/tools/my-tool',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientFunction": {},
     *       //   "connectorTool": {},
     *       //   "createTime": "my_createTime",
     *       //   "dataStoreTool": {},
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "executionType": "my_executionType",
     *       //   "fileSearchTool": {},
     *       //   "generatedSummary": "my_generatedSummary",
     *       //   "googleSearchTool": {},
     *       //   "mcpTool": {},
     *       //   "name": "my_name",
     *       //   "openApiTool": {},
     *       //   "pythonFunction": {},
     *       //   "systemTool": {},
     *       //   "toolFakeConfig": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "widgetTool": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientFunction": {},
     *   //   "connectorTool": {},
     *   //   "createTime": "my_createTime",
     *   //   "dataStoreTool": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "executionType": "my_executionType",
     *   //   "fileSearchTool": {},
     *   //   "generatedSummary": "my_generatedSummary",
     *   //   "googleSearchTool": {},
     *   //   "mcpTool": {},
     *   //   "name": "my_name",
     *   //   "openApiTool": {},
     *   //   "pythonFunction": {},
     *   //   "systemTool": {},
     *   //   "toolFakeConfig": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "widgetTool": {}
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Tools$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Tools$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tool>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Tools$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Tools$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Tool>,
      callback: BodyResponseCallback<Schema$Tool>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Tools$Patch,
      callback: BodyResponseCallback<Schema$Tool>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Tool>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Tools$Patch
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tool>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tool>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Tools$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Tools$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tool>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Tools$Create extends StandardParameters {
    /**
     * Required. The resource name of the app to create a tool in.
     */
    parent?: string;
    /**
     * Optional. The ID to use for the tool, which will become the final component of the tool's resource name. If not provided, a unique ID will be automatically assigned for the tool.
     */
    toolId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tool;
  }
  export interface Params$Resource$Projects$Locations$Apps$Tools$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the tool. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the tool, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Optional. Indicates whether to forcefully delete the tool, even if it is still referenced by agents/examples. * If `force = false`, the deletion will fail if any agents still reference the tool. * If `force = true`, all existing references from agents will be removed and the tool will be deleted.
     */
    force?: boolean;
    /**
     * Required. The resource name of the tool to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Tools$Get extends StandardParameters {
    /**
     * Required. The resource name of the tool to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Tools$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the tools. Use "include_system_tools=true" to include system tools in the response. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListTools call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list tools from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Tools$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of the tool. Format: - `projects/{project\}/locations/{location\}/apps/{app\}/tools/{tool\}` for ## standalone tools. `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}/tools/{tool\}` for tools retrieved from a toolset. These tools are dynamic and output-only, they cannot be referenced directly where a tool is expected.
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tool;
  }

  export class Resource$Projects$Locations$Apps$Toolsets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new toolset in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.toolsets.create({
     *     // Required. The resource name of the app to create a toolset in.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *     // Optional. The ID to use for the toolset, which will become the final component of the toolset's resource name. If not provided, a unique ID will be automatically assigned for the toolset.
     *     toolsetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorToolset": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "executionType": "my_executionType",
     *       //   "mcpToolset": {},
     *       //   "name": "my_name",
     *       //   "openApiToolset": {},
     *       //   "toolFakeConfig": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectorToolset": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "executionType": "my_executionType",
     *   //   "mcpToolset": {},
     *   //   "name": "my_name",
     *   //   "openApiToolset": {},
     *   //   "toolFakeConfig": {},
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Toolsets$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Toolset>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Toolset>,
      callback: BodyResponseCallback<Schema$Toolset>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Create,
      callback: BodyResponseCallback<Schema$Toolset>
    ): void;
    create(callback: BodyResponseCallback<Schema$Toolset>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Toolsets$Create
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Toolset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Toolsets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Toolsets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/toolsets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Toolset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Toolset>(parameters);
      }
    }

    /**
     * Deletes the specified toolset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.toolsets.delete({
     *     // Optional. The current etag of the toolset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the toolset, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Optional. Indicates whether to forcefully delete the toolset, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any agents still reference the toolset. * If `force = true`, all existing references from agents will be removed and the toolset will be deleted.
     *     force: 'placeholder-value',
     *     // Required. The resource name of the toolset to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/toolsets/my-toolset',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Toolsets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Toolsets$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Toolsets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Toolsets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified toolset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.toolsets.get({
     *     // Required. The resource name of the toolset to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/toolsets/my-toolset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectorToolset": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "executionType": "my_executionType",
     *   //   "mcpToolset": {},
     *   //   "name": "my_name",
     *   //   "openApiToolset": {},
     *   //   "toolFakeConfig": {},
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Toolsets$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Toolset>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Toolset>,
      callback: BodyResponseCallback<Schema$Toolset>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Get,
      callback: BodyResponseCallback<Schema$Toolset>
    ): void;
    get(callback: BodyResponseCallback<Schema$Toolset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Toolsets$Get
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Toolset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Toolsets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Toolsets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Toolset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Toolset>(parameters);
      }
    }

    /**
     * Lists toolsets in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.toolsets.list({
     *     // Optional. Filter to be applied when listing the toolsets. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListToolsets call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list toolsets from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "toolsets": []
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Toolsets$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListToolsetsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListToolsetsResponse>,
      callback: BodyResponseCallback<Schema$ListToolsetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$List,
      callback: BodyResponseCallback<Schema$ListToolsetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListToolsetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Toolsets$List
        | BodyResponseCallback<Schema$ListToolsetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListToolsetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListToolsetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListToolsetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Toolsets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Toolsets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/toolsets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListToolsetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListToolsetsResponse>(parameters);
      }
    }

    /**
     * Updates the specified toolset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.toolsets.patch({
     *     // Identifier. The unique identifier of the toolset. Format: `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}`
     *     name: 'projects/my-project/locations/my-location/apps/my-app/toolsets/my-toolset',
     *     // Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorToolset": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "executionType": "my_executionType",
     *       //   "mcpToolset": {},
     *       //   "name": "my_name",
     *       //   "openApiToolset": {},
     *       //   "toolFakeConfig": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectorToolset": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "executionType": "my_executionType",
     *   //   "mcpToolset": {},
     *   //   "name": "my_name",
     *   //   "openApiToolset": {},
     *   //   "toolFakeConfig": {},
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Apps$Toolsets$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Toolset>>;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Toolset>,
      callback: BodyResponseCallback<Schema$Toolset>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Patch,
      callback: BodyResponseCallback<Schema$Toolset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Toolset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Toolsets$Patch
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Toolset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Toolset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Toolsets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Toolsets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Toolset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Toolset>(parameters);
      }
    }

    /**
     * Retrieve the list of tools included in the specified toolset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.toolsets.retrieveTools({
     *     // Required. The name of the toolset to retrieve the tools for. Format: `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}`
     *     toolset:
     *       'projects/my-project/locations/my-location/apps/my-app/toolsets/my-toolset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "toolIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "tools": []
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
    retrieveTools(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retrieveTools(
      params?: Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RetrieveToolsResponse>>;
    retrieveTools(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveTools(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RetrieveToolsResponse>,
      callback: BodyResponseCallback<Schema$RetrieveToolsResponse>
    ): void;
    retrieveTools(
      params: Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools,
      callback: BodyResponseCallback<Schema$RetrieveToolsResponse>
    ): void;
    retrieveTools(
      callback: BodyResponseCallback<Schema$RetrieveToolsResponse>
    ): void;
    retrieveTools(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools
        | BodyResponseCallback<Schema$RetrieveToolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RetrieveToolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RetrieveToolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RetrieveToolsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+toolset}:retrieveTools').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['toolset'],
        pathParams: ['toolset'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RetrieveToolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RetrieveToolsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Toolsets$Create extends StandardParameters {
    /**
     * Required. The resource name of the app to create a toolset in.
     */
    parent?: string;
    /**
     * Optional. The ID to use for the toolset, which will become the final component of the toolset's resource name. If not provided, a unique ID will be automatically assigned for the toolset.
     */
    toolsetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Toolset;
  }
  export interface Params$Resource$Projects$Locations$Apps$Toolsets$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the toolset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the toolset, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Optional. Indicates whether to forcefully delete the toolset, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any agents still reference the toolset. * If `force = true`, all existing references from agents will be removed and the toolset will be deleted.
     */
    force?: boolean;
    /**
     * Required. The resource name of the toolset to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Toolsets$Get extends StandardParameters {
    /**
     * Required. The resource name of the toolset to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Toolsets$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the toolsets. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListToolsets call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list toolsets from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Toolsets$Patch extends StandardParameters {
    /**
     * Identifier. The unique identifier of the toolset. Format: `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}`
     */
    name?: string;
    /**
     * Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Toolset;
  }
  export interface Params$Resource$Projects$Locations$Apps$Toolsets$Retrievetools extends StandardParameters {
    /**
     * Required. The name of the toolset to retrieve the tools for. Format: `projects/{project\}/locations/{location\}/apps/{app\}/toolsets/{toolset\}`
     */
    toolset?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetrieveToolsRequest;
  }

  export class Resource$Projects$Locations$Apps$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new app version in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.versions.create({
     *     // Optional. The ID to use for the app version, which will become the final component of the app version's resource name. If not provided, a unique ID will be automatically assigned for the app version.
     *     appVersionId: 'placeholder-value',
     *     // Required. The resource name of the app to create an app version in.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "creator": "my_creator",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "snapshot": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "creator": "my_creator",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "snapshot": {}
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
    create(
      params: Params$Resource$Projects$Locations$Apps$Versions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Apps$Versions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AppVersion>>;
    create(
      params: Params$Resource$Projects$Locations$Apps$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Versions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AppVersion>,
      callback: BodyResponseCallback<Schema$AppVersion>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Apps$Versions$Create,
      callback: BodyResponseCallback<Schema$AppVersion>
    ): void;
    create(callback: BodyResponseCallback<Schema$AppVersion>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Versions$Create
        | BodyResponseCallback<Schema$AppVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AppVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/versions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppVersion>(parameters);
      }
    }

    /**
     * Deletes the specified app version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.versions.delete({
     *     // Optional. The current etag of the app version. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app version, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the app version to delete.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/versions/my-version',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Apps$Versions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Apps$Versions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Apps$Versions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Versions$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets details of the specified app version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.versions.get({
     *     // Required. The resource name of the app version to retrieve.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/versions/my-version',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "creator": "my_creator",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "snapshot": {}
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
    get(
      params: Params$Resource$Projects$Locations$Apps$Versions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Apps$Versions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AppVersion>>;
    get(
      params: Params$Resource$Projects$Locations$Apps$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AppVersion>,
      callback: BodyResponseCallback<Schema$AppVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Apps$Versions$Get,
      callback: BodyResponseCallback<Schema$AppVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$AppVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Versions$Get
        | BodyResponseCallback<Schema$AppVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AppVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppVersion>(parameters);
      }
    }

    /**
     * Lists all app versions in the given app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.versions.list({
     *     // Optional. Filter to be applied when listing the app versions. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list AgentService.ListAppVersions call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the app to list app versions from.
     *     parent: 'projects/my-project/locations/my-location/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appVersions": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Locations$Apps$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Apps$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAppVersionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Apps$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAppVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListAppVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Apps$Versions$List,
      callback: BodyResponseCallback<Schema$ListAppVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAppVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Versions$List
        | BodyResponseCallback<Schema$ListAppVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAppVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAppVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAppVersionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/versions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAppVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAppVersionsResponse>(parameters);
      }
    }

    /**
     * Restores the specified app version. This will create a new app version from the current draft app and overwrite the current draft with the specified app version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.apps.versions.restore({
     *     // Required. The resource name of the app version to restore.
     *     name: 'projects/my-project/locations/my-location/apps/my-app/versions/my-version',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restore(
      params: Params$Resource$Projects$Locations$Apps$Versions$Restore,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    restore(
      params?: Params$Resource$Projects$Locations$Apps$Versions$Restore,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    restore(
      params: Params$Resource$Projects$Locations$Apps$Versions$Restore,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Apps$Versions$Restore,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Apps$Versions$Restore,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restore(callback: BodyResponseCallback<Schema$Operation>): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Apps$Versions$Restore
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Apps$Versions$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Apps$Versions$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:restore').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Apps$Versions$Create extends StandardParameters {
    /**
     * Optional. The ID to use for the app version, which will become the final component of the app version's resource name. If not provided, a unique ID will be automatically assigned for the app version.
     */
    appVersionId?: string;
    /**
     * Required. The resource name of the app to create an app version in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppVersion;
  }
  export interface Params$Resource$Projects$Locations$Apps$Versions$Delete extends StandardParameters {
    /**
     * Optional. The current etag of the app version. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app version, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The resource name of the app version to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Versions$Get extends StandardParameters {
    /**
     * Required. The resource name of the app version to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Versions$List extends StandardParameters {
    /**
     * Optional. Filter to be applied when listing the app versions. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list AgentService.ListAppVersions call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the app to list app versions from.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Apps$Versions$Restore extends StandardParameters {
    /**
     * Required. The resource name of the app version to restore.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestoreAppVersionRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.operations.get({
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ces.googleapis.com
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
     * const ces = google.ces('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/ces',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ces.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": [],
     *   //   "unreachable": []
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
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl = options.rootUrl || 'https://ces.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
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
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }
}
