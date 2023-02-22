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

export namespace cloudsearch_v1 {
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
   * Cloud Search API
   *
   * Cloud Search provides cloud-based search capabilities over Google Workspace data. The Cloud Search API allows indexing of non-Google Workspace data into Cloud Search.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudsearch = google.cloudsearch('v1');
   * ```
   */
  export class Cloudsearch {
    context: APIRequestContext;
    debug: Resource$Debug;
    indexing: Resource$Indexing;
    media: Resource$Media;
    operations: Resource$Operations;
    query: Resource$Query;
    settings: Resource$Settings;
    stats: Resource$Stats;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.debug = new Resource$Debug(this.context);
      this.indexing = new Resource$Indexing(this.context);
      this.media = new Resource$Media(this.context);
      this.operations = new Resource$Operations(this.context);
      this.query = new Resource$Query(this.context);
      this.settings = new Resource$Settings(this.context);
      this.stats = new Resource$Stats(this.context);
      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * Abuse reporting configuration outlining what is supported in this conference.
   */
  export interface Schema$AbuseReportingConfig {
    /**
     * Whether the current call may include video recordings in its abuse reports.
     */
    recordingAllowed?: boolean | null;
    /**
     * Whether the current call may include user generated content (chat, polls, Q&A...) in its abuse reports.
     */
    writtenUgcAllowed?: boolean | null;
  }
  /**
   * Information about how devices in a meeting have acked for a session/operation.
   */
  export interface Schema$AckInfo {
    /**
     * Output only. Number of meeting devices that have not acked yet.
     */
    unackedDeviceCount?: number | null;
    /**
     * Output only. IDs of meeting devices (at most ten are provided) that have not acked yet.
     */
    unackedDeviceIds?: string[] | null;
  }
  /**
   * The request set by clients to instruct Backend how the user intend to fix the ACL. Technically it's not a request to ACL Fixer, because Backend uses /DriveService.Share to modify Drive ACLs.
   */
  export interface Schema$AclFixRequest {
    /**
     * For Spaces messages: This field is ignored. For DMs messages: The list of email addresses that should be added to the Drive item's ACL. In general, the list should not be empty when the boolean "should_fix" field is set; otherwise, the list should be empty. During transition - when clients do not specify this field but the "should_fix" is true, we follow the legacy behavior: share to all users in the DM regardless of emails. This behavior is being phased out.
     */
    recipientEmails?: string[] | null;
    role?: string | null;
    /**
     * Whether to attempt to fix the ACL by adding the room or DM members to the Drive file's ACL.
     */
    shouldFix?: boolean | null;
  }
  /**
   * The message reconstructed based on information in the response of /PermissionFixOptionsService.Query (or the Apiary API that wraps it). Indicates the ability of the requester to change the access to the Drive file for the room roster or the DM members. Used in GetMessagePreviewMetadataResponse only.
   */
  export interface Schema$AclFixStatus {
    fixability?: string | null;
    /**
     * List of recipient email addresses for which access can be granted. This field contains the same email addresses from the GetMessagePreviewMetadata request if all recipients can be successfully added to the ACL as determined by Drive ACL Fixer. For now, the field is non-empty if and only if the "fixability" value is "CAN_FIX".
     */
    fixableEmailAddress?: string[] | null;
    /**
     * List of recipient email addresses for which an out-of-domain-sharing warning must be shown, stating that these email addresses are not in the Google Apps organization that the requested item belong to. Empty if all recipients are in the same Google Apps organization.
     */
    outOfDomainWarningEmailAddress?: string[] | null;
  }
  /**
   * Next tag: 4
   */
  export interface Schema$AclInfo {
    /**
     * Number of groups which have at least read access to the document.
     */
    groupsCount?: number | null;
    /**
     * The scope to which the content was shared.
     */
    scope?: string | null;
    /**
     * Number of users which have at least read access to the document.
     */
    usersCount?: number | null;
  }
  /**
   * List of string parameters that developers can specify when the above action method (in apps script) is invoked. An example use case is for 3 snooze buttons: snooze now, snooze 1 day, snooze next week. Developers can have action method = snooze() and pass the snooze type and snooze time in list of string parameters.
   */
  export interface Schema$ActionParameter {
    key?: string | null;
    value?: string | null;
  }
  export interface Schema$AddonComposeUiActionMarkup {
    type?: string | null;
  }
  /**
   * Earlier we used to populate just the affected_members list and inferred the new membership state (roles didn't exist back then) from the Type. go/dynamite-finra required backend to know the previous membership state to reconstruct membership history. The proper solution involved cleaning up up Type enum, but it was used in many, many places. This was added as a stop-gap solution to unblock FINRA without breaking everything. Later role update and target audience update started relying on this to communicate information to clients about what transition happened. So this is now required to be populated and should be in sync with affected_members for new messages.
   */
  export interface Schema$AffectedMembership {
    affectedMember?: Schema$MemberId;
    priorMembershipRole?: string | null;
    priorMembershipState?: string | null;
    targetMembershipRole?: string | null;
  }
  /**
   * Represents a principal who has authenticated as any kind of user which the application understands. This is typically used for "wiki-like" security, where anyone is allowed access so long as they can be held accountable for that access. Since the purpose is knowing whom to blame, it is up to the application to decide what kinds of users it knows how to blame. For example, an application might choose to include GAIA users in "all authenticated users", but not include MDB users. Nothing here.
   */
  export interface Schema$AllAuthenticatedUsersProto {}
  /**
   * NOTE WHEN ADDING NEW PROTO FIELDS: Be sure to add datapol annotations to new fields with potential PII, so they get scrubbed when logging protos for errors. NEXT TAG: 29
   */
  export interface Schema$Annotation {
    babelPlaceholderMetadata?: Schema$BabelPlaceholderMetadata;
    /**
     * LINT.ThenChange(//depot/google3/java/com/google/apps/dynamite/v1/backend/action/common/SystemMessageHelper.java)
     */
    cardCapabilityMetadata?: Schema$CardCapabilityMetadata;
    /**
     * Whether the annotation should be rendered as a chip. If this is missing or unspecified, fallback to should_not_render on the metadata.
     */
    chipRenderType?: string | null;
    consentedAppUnfurlMetadata?: Schema$ConsentedAppUnfurlMetadata;
    customEmojiMetadata?: Schema$CustomEmojiMetadata;
    dataLossPreventionMetadata?: Schema$DataLossPreventionMetadata;
    /**
     * Chip annotations
     */
    driveMetadata?: Schema$DriveMetadata;
    formatMetadata?: Schema$FormatMetadata;
    groupRetentionSettingsUpdated?: Schema$GroupRetentionSettingsUpdatedMetaData;
    /**
     * Metadata for 1P integrations like tasks, calendar. These are supported only through integration server as 1P integrations use the integration API (which in turn uses backend API with special permissions) to post messages. Clients should never set this. LINT.IfChange
     */
    gsuiteIntegrationMetadata?: Schema$GsuiteIntegrationMetadata;
    incomingWebhookChangedMetadata?: Schema$IncomingWebhookChangedMetadata;
    /**
     * LINT.ThenChange(//depot/google3/java/com/google/apps/dynamite/v1/backend/action/common/SystemMessageHelper.java)
     */
    integrationConfigUpdated?: Schema$IntegrationConfigUpdatedMetadata;
    /**
     * Length of the text_body substring beginning from start_index the Annotation corresponds to.
     */
    length?: number | null;
    /**
     * * A client-assigned ID for this annotation. This is helpful in matching the back-filled annotations to the original annotations on client side, without having to re-parse the message. There is no guarantee an annotation has a local_id, it's a purely client used and controlled field with no guarantee of uniqueness.
     */
    localId?: string | null;
    /**
     * Metadata for system messages. Clients should never set this. LINT.IfChange
     */
    membershipChanged?: Schema$MembershipChangedMetadata;
    readReceiptsSettingsMetadata?: Schema$ReadReceiptsSettingsUpdatedMetadata;
    /**
     * Metadata that defines all of the required features that must be rendered in the message. Clients can use this to see whether they support the entire message, or show a fallback chip otherwise. See go/message-quoting-client-to-server for details. LINT.ThenChange( //depot/google3/java/com/google/apps/dynamite/v1/allshared/parser/AnnotationSanitizer.java, //depot/google3/java/com/google/apps/dynamite/v1/backend/action/common/SystemMessageHelper.java, //depot/google3/java/com/google/caribou/eli/mediation/chat/AnnotationConverter.java )
     */
    requiredMessageFeaturesMetadata?: Schema$RequiredMessageFeaturesMetadata;
    roomUpdated?: Schema$RoomUpdatedMetadata;
    /**
     * Whether or not the annotation is invalidated by the server. Example of situations for invalidation include: when the URL is malformed, or when Drive item ID is rejected by Drive Service.
     */
    serverInvalidated?: boolean | null;
    slashCommandMetadata?: Schema$SlashCommandMetadata;
    /**
     * Start index (0-indexed) of the Message text the Annotation corresponds to, inclusive.
     */
    startIndex?: number | null;
    /**
     * Type of the Annotation.
     */
    type?: string | null;
    /**
     * * A unique server-assigned ID for this annotation. This is helpful in matching annotation objects when fetched from service. All uploads should have a unique_id after the message they are attached to is successfully sent. Url annotations that originally were uploads (i.e. policy violations) will have a unique_id after the message they are attached to is successfully sent. No other url annotations should have a unique_id. All drive annotations should have a unique_id after the message they are attached to is successfully sent.
     */
    uniqueId?: string | null;
    uploadMetadata?: Schema$UploadMetadata;
    urlMetadata?: Schema$UrlMetadata;
    /**
     * Metadata that clients can set for annotations. LINT.IfChange In-text annotations
     */
    userMentionMetadata?: Schema$UserMentionMetadata;
    videoCallMetadata?: Schema$VideoCallMetadata;
    youtubeMetadata?: Schema$YoutubeMetadata;
  }
  /**
   * Identifier of an App.
   */
  export interface Schema$AppId {
    /**
     * Enum indicating the type of App this is.
     */
    appType?: string | null;
    /**
     * Enum indicating which 1P App this is when app_type is GSUITE_APP. Determined & set by the 1P API as a convenience for all users of this identifier(Eg. clients, chime, backend etc.) to map to 1P properties.
     */
    gsuiteAppType?: string | null;
    /**
     * Numeric identifier of the App. Set to Project number for 1/3P Apps. For Webhook, this is WebhookId. Determined & set by the 1P API from App credentials on the side channel.
     */
    id?: string | null;
  }
  /**
   * Next Id: 7
   */
  export interface Schema$AppsDynamiteSharedActivityFeedAnnotationData {
    /**
     * Timestamp of when the Activity Feed message that contains this annotation was created. This is roughly when the activity happened, such as when a reaction happened, but will have at least some small delay, since the Activity Feed message is created asynchronously after. This timestamp should only be used for display when the activity create time is not available in the Chat UI, like the time of a reaction.
     */
    activityFeedMessageCreateTime?: string | null;
    /**
     * Unique id of the Activity Feed message used by clients to implement click-to-source. This is the same messageId as the top-level id field for the Activity Feed item.
     */
    activityFeedMessageId?: Schema$MessageId;
    chatItem?: Schema$AppsDynamiteSharedChatItem;
    /**
     * Only populated on read path and should not be persisted in storage.
     */
    sharedUserInfo?: Schema$UserInfo;
    /**
     * Use shared_user_info instead.
     */
    userInfo?: Schema$AppsDynamiteSharedActivityFeedAnnotationDataUserInfo;
  }
  /**
   * UserId of the AF item updater to show and the updater count to show.
   */
  export interface Schema$AppsDynamiteSharedActivityFeedAnnotationDataUserInfo {
    /**
     * Describes how updater_count_to_show should be used.
     */
    updaterCountDisplayType?: string | null;
    /**
     * The number of updaters for clients to show, currently set to the total number of updaters minus the one set in updater_to_show.
     */
    updaterCountToShow?: number | null;
    /**
     * The updater for clients to show.
     */
    updaterToShow?: Schema$UserId;
  }
  /**
   * Optional field for apps overriding display info
   */
  export interface Schema$AppsDynamiteSharedAppProfile {
    /**
     * Displayed user avatar emoji.
     */
    avatarEmoji?: string | null;
    /**
     * Displayed user avatar url.
     */
    avatarUrl?: string | null;
    /**
     * Displayed user name.
     */
    name?: string | null;
  }
  /**
   * This is the internal version of the API proto at google3/google/chat/v1/gsuite_message_integration.proto Data used to render Assistant suggestions. See go/bullseye-rendering.
   */
  export interface Schema$AppsDynamiteSharedAssistantAnnotationData {
    /**
     * The suggestion to render in the card.
     */
    suggestion?: Schema$AppsDynamiteSharedAssistantSuggestion;
    /**
     * Set when the initial query was unfulfillable. Only an on-demand unfulfillable query will result in a response (not a proactive query). 1. On-demand: user explicitly invokes the bot 2. Proactive: bot makes proactive suggestion (when available) by listening to all user messages.
     */
    unfulfillable?: Schema$AppsDynamiteSharedAssistantUnfulfillableRequest;
  }
  /**
   * Represents info regarding suggestion debug information.
   */
  export interface Schema$AppsDynamiteSharedAssistantDebugContext {
    /**
     * The query that triggered the resulting suggestion.
     */
    query?: string | null;
  }
  /**
   * Data needed to render feedback on the Assistant card
   */
  export interface Schema$AppsDynamiteSharedAssistantFeedbackContext {
    /**
     * Specifies a list of feedback chips to show
     */
    feedbackChips?: Schema$AppsDynamiteSharedAssistantFeedbackContextFeedbackChip[];
    /**
     * Whether the thumbs feedback is provided
     */
    thumbsFeedback?: string | null;
  }
  /**
   * Suggestion chips for users to indicate positive or negative feedback
   */
  export interface Schema$AppsDynamiteSharedAssistantFeedbackContextFeedbackChip {
    /**
     * What type of chip to display
     */
    feedbackChipType?: string | null;
    /**
     * Whether the chip has been selected
     */
    state?: string | null;
  }
  /**
   * Session context specific for Assistant suggestions.
   */
  export interface Schema$AppsDynamiteSharedAssistantSessionContext {
    /**
     * Unique identifier populated by the contextual request handler for each vertical (Ex: File Suggestions, Smart Scheduling, etc.) that can be used to track sessions end-to-end. May span multiple users (sender-specific).
     */
    contextualSessionId?: string | null;
  }
  /**
   * Data for an Assistant suggestion.
   */
  export interface Schema$AppsDynamiteSharedAssistantSuggestion {
    /**
     * Info regarding suggestion debug information.
     */
    debugContext?: Schema$AppsDynamiteSharedAssistantDebugContext;
    /**
     * Data for rendering feedback.
     */
    feedbackContext?: Schema$AppsDynamiteSharedAssistantFeedbackContext;
    /**
     * Suggestion type that suggests documents (docs, slides, sheets).
     */
    findDocumentSuggestion?: Schema$AppsDynamiteSharedFindDocumentSuggestion;
    /**
     * String representation of the suggestions provided.
     */
    serializedSuggestions?: string | null;
    /**
     * Session context specific to the Assistant suggestion.
     */
    sessionContext?: Schema$AppsDynamiteSharedAssistantSessionContext;
  }
  /**
   * Data for a response to an unfulfillable request.
   */
  export interface Schema$AppsDynamiteSharedAssistantUnfulfillableRequest {}
  export interface Schema$AppsDynamiteSharedAvatarInfo {
    emoji?: Schema$AppsDynamiteSharedEmoji;
  }
  /**
   * Metadata used only in Dynamite backend for uploaded attachments.
   */
  export interface Schema$AppsDynamiteSharedBackendUploadMetadata {
    /**
     * Blobstore path for the uploaded attachment
     */
    blobPath?: string | null;
    /**
     * The original file name for the content, not the full path.
     */
    contentName?: string | null;
    /**
     * Scotty reported content size by default. http://google3/uploader/agent/scotty_agent.proto?l=101&rcl=140889785
     */
    contentSize?: string | null;
    /**
     * Type is from Scotty's best_guess by default: http://google3/uploader/agent/scotty_agent.proto?l=51&rcl=140889785
     */
    contentType?: string | null;
    /**
     * The results of the Data Loss Prevention (DLP) scan of the attachment. DEPRECATED: use dlp_scan_summary instead.
     */
    dlpScanOutcome?: string | null;
    /**
     * Summary of a Data Loss Prevention (DLP) scan of the attachment. Attachments are evaluated in the backend when they are uploaded.
     */
    dlpScanSummary?: Schema$DlpScanSummary;
    /**
     * GroupId to which this attachment is uploaded.
     */
    groupId?: Schema$GroupId;
    /**
     * If the uploaded file is a video that has been transcoded on the client side Next tag: 18
     */
    isClientSideTranscodedVideo?: boolean | null;
    /**
     * Original dimension of the content. Only set for image attachments.
     */
    originalDimension?: Schema$AppsDynamiteSharedDimension;
    /**
     * The message id of a quote reply referencing this attachment. When present, this attachment has been quoted in a reply message. Normally, the attachment is fetched through the message id in the blob_path, but in the case of a quote reply, the blob_path would contain the quoted message id. Thus this message id field is needed to fetch the quote reply message instead. This field is conditionally populated at read time for quotes and never persisted in storage. See go/message-quoting-attachments for more context.
     */
    quoteReplyMessageId?: Schema$MessageId;
    /**
     * The SHA256 hash of the attachment bytes.
     */
    sha256?: string | null;
    /**
     * User IP address at upload time. Ex. "123.1.2.3". Used by Ares abuse scanning.
     */
    uploadIp?: string | null;
    /**
     * Timestamp of when user finished uploading the content.
     */
    uploadTimestampUsec?: string | null;
    /**
     * VideoID of the video attachments. This ID shall meets the Youtube ID format of 16 hex characters. For example, '4c14b8825af6059b' is a valid ID.
     */
    videoId?: string | null;
    /**
     * Full Blobstore ID for the video thumbnail.
     */
    videoThumbnailBlobId?: string | null;
    /**
     * Result for a virus scan.
     */
    virusScanResult?: string | null;
  }
  export interface Schema$AppsDynamiteSharedCalendarEventAnnotationData {
    calendarEvent?: Schema$AppsDynamiteSharedCalendarEventAnnotationDataCalendarEvent;
    /**
     * Notification about the creation of an event.
     */
    eventCreation?: Schema$AppsDynamiteSharedCalendarEventAnnotationDataEventCreation;
  }
  export interface Schema$AppsDynamiteSharedCalendarEventAnnotationDataCalendarEvent {
    /**
     * The end time of the event.
     */
    endTime?: Schema$AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventTime;
    /**
     * ID of the event.
     */
    eventId?: string | null;
    /**
     * The start time of the event.
     */
    startTime?: Schema$AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventTime;
    /**
     * Title of the event (at the time the message was generated).
     */
    title?: string | null;
  }
  export interface Schema$AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventTime {
    /**
     * All day event.
     */
    allDay?: Schema$Date;
    /**
     * Non all day event.
     */
    timed?: string | null;
  }
  /**
   * Creation of an event (no extra data for now).
   */
  export interface Schema$AppsDynamiteSharedCalendarEventAnnotationDataEventCreation {}
  /**
   * Data used to render Meet or Google Voice chips in Chat. See go/dynamite-calling-artifacts-in-chat.
   */
  export interface Schema$AppsDynamiteSharedCallAnnotationData {
    /**
     * Timestamp when the call ended. Used to render the call ended system message.
     */
    callEndedTimestamp?: string | null;
    /**
     * Required. Call metadata required to create the call artifacts. For now, the metadata contains only the call id to identify the call. This field allows additional data (e.g. voice call type) to be added if needed in the future.
     */
    callMetadata?: Schema$AppsDynamiteSharedCallMetadata;
    /**
     * Required. Indicates the call status for the space. Used to determine the chip's state.
     */
    callStatus?: string | null;
  }
  /**
   * Metadata required to generate call artifacts. This can either be the metadata for a Meet or, in the future, Google Voice call.
   */
  export interface Schema$AppsDynamiteSharedCallMetadata {
    /**
     * Metadata specific for the Meet call.
     */
    meetMetadata?: Schema$AppsDynamiteSharedMeetMetadata;
  }
  /**
   * Card click which identifies one suggestion provided by the app/bot.
   */
  export interface Schema$AppsDynamiteSharedCardClickSuggestion {
    /**
     * Identify the button/action that created the suggestion. A simple example would be a card button within the stream, or the id which can identify a specific suggestion.
     */
    actionId?: string | null;
    /**
     * The message_id for the message that was posted by the app/bot.
     */
    suggestionMessageId?: Schema$MessageId;
  }
  /**
   * Next Id: 5
   */
  export interface Schema$AppsDynamiteSharedChatItem {
    /**
     * Information needed to render the specific type of feed item.
     */
    activityInfo?: Schema$AppsDynamiteSharedChatItemActivityInfo[];
    /**
     * Only populated on read path and should not be persisted in storage.
     */
    groupInfo?: Schema$AppsDynamiteSharedChatItemGroupInfo;
    /**
     * Additional information about the original chat message that isn't captured in the top-level message proto.
     */
    messageInfo?: Schema$AppsDynamiteSharedMessageInfo;
  }
  export interface Schema$AppsDynamiteSharedChatItemActivityInfo {
    feedItemNudge?: Schema$AppsDynamiteSharedChatItemActivityInfoFeedItemNudge;
    feedItemReactions?: Schema$AppsDynamiteSharedChatItemActivityInfoFeedItemReactions;
    feedItemThreadReply?: Schema$AppsDynamiteSharedChatItemActivityInfoFeedItemThreadReply;
    feedItemUserMention?: Schema$AppsDynamiteSharedChatItemActivityInfoFeedItemUserMention;
  }
  /**
   * Existence of this attribute indicates that the AF item is for a message nudge item.
   */
  export interface Schema$AppsDynamiteSharedChatItemActivityInfoFeedItemNudge {
    /**
     * Nudge type of the nudge feed item.
     */
    nudgeType?: string | null;
  }
  /**
   * Existence of this attribute indicates that the AF item is for message reactions, but it is intentionally left empty since the list of reactions can be found in the top-level Message.Reactions.
   */
  export interface Schema$AppsDynamiteSharedChatItemActivityInfoFeedItemReactions {}
  /**
   * Existence of this attribute indicates that the AF item is for thread reply.
   */
  export interface Schema$AppsDynamiteSharedChatItemActivityInfoFeedItemThreadReply {
    /**
     * Reply type of the thread reply feed item. The field is not persisted in storage. It's populated when constructing Activity Feed payload.
     */
    replyType?: string | null;
  }
  /**
   * Existence of this attribute indicates that the AF item is for a user mention item.
   */
  export interface Schema$AppsDynamiteSharedChatItemActivityInfoFeedItemUserMention {
    /**
     * User mention type
     */
    type?: string | null;
  }
  /**
   * Information about the space that the item originated from. This will be used to display Activity Feed items from rooms, and only contain the necessary information, such as the space name and group attributes. NEXT TAG: 6
   */
  export interface Schema$AppsDynamiteSharedChatItemGroupInfo {
    /**
     * This is needed to determine what type of group the source message came from to support click-to-source.
     */
    attributeCheckerGroupType?: string | null;
    groupName?: string | null;
    /**
     * Timestamp of when the group containing the message has been read by the user.
     */
    groupReadTimeUsec?: string | null;
    /**
     * Indicates whether the group has inline replies enabled. If enabled, clients will render the space with inline replies.
     */
    inlineThreadingEnabled?: boolean | null;
  }
  /**
   * Denotes a type of content report a user can send.
   */
  export interface Schema$AppsDynamiteSharedContentReportType {
    /**
     * Required. Google-defined system violation, covering the most common violations.
     */
    systemViolation?: string | null;
  }
  /**
   * Proto representation of a custom emoji. May be used in both APIs and in Spanner, but certain fields should be restricted to one or the other. See the per-field documentation for details. NEXT_TAG: 14
   */
  export interface Schema$AppsDynamiteSharedCustomEmoji {
    /**
     * ID for the underlying image data in Blobstore. This field should *only* be present in Spanner or within the server, but should not be exposed in public APIs.
     */
    blobId?: string | null;
    /**
     * Content type of the file used to upload the emoji. Used for takeout. Written to Spanner when the emoji is created.
     */
    contentType?: string | null;
    /**
     * Time when the Emoji was created, in microseconds. This field may be present in Spanner, within the server, or in public APIs.
     */
    createTimeMicros?: string | null;
    /**
     * This field should *never* be persisted to Spanner.
     */
    creatorUserId?: Schema$UserId;
    /**
     * Time when the emoji was deleted, in microseconds. This field may be present in Spanner, within the server, or in public APIs. Only present if the emoji has been deleted.
     */
    deleteTimeMicros?: string | null;
    /**
     * Output only. A short-lived URL clients can use for directly accessing a custom emoji image. This field is intended for API consumption, and should *never* be persisted to Spanner.
     */
    ephemeralUrl?: string | null;
    /**
     * This field should *never* be persisted to Spanner.
     */
    ownerCustomerId?: Schema$CustomerId;
    /**
     * Opaque token that clients use to construct the URL for accessing the custom emoji’s image data. This field is intended for API consumption, and should *never* be persisted to Spanner.
     */
    readToken?: string | null;
    /**
     * User-provided, human-readable ID for the custom emoji. Users are expected to observe this field in the UI instead of the UUID. This shortcode should be unique within an organization, but has no global uniqueness guarantees, unlike the UUID. This field should *never* be persisted to Spanner.
     */
    shortcode?: string | null;
    /**
     * Snapshot of the current state of the emoji, which may differ from the source-of-truth in the CustomEmojis table. This field should *never* be persisted to Spanner.
     */
    state?: string | null;
    updateTimeMicros?: string | null;
    /**
     * Unique key for a custom emoji resource. Required. This field is *always* populated.
     */
    uuid?: string | null;
  }
  /**
   * Dimension for the uploaded attachments.
   */
  export interface Schema$AppsDynamiteSharedDimension {
    height?: number | null;
    width?: number | null;
  }
  /**
   * LINT.IfChange
   */
  export interface Schema$AppsDynamiteSharedDlpMetricsMetadata {
    /**
     * [required] Describes the DLP status of message send and attachment upload events.
     */
    dlpStatus?: string | null;
  }
  /**
   * Data for rendering a document.
   */
  export interface Schema$AppsDynamiteSharedDocument {
    /**
     * Unique file ID.
     */
    fileId?: string | null;
    /**
     * Justification to explain why this document is being suggested.
     */
    justification?: Schema$AppsDynamiteSharedJustification;
    /**
     * Time the document was last modified.
     */
    lastModifiedTime?: string | null;
    /**
     * Used to determine which icon to render (e.g. docs, slides, sheets)
     */
    mimeType?: string | null;
    /**
     * Title of the document.
     */
    title?: string | null;
    /**
     * URL of the document.
     */
    url?: string | null;
  }
  export interface Schema$AppsDynamiteSharedEmoji {
    /**
     * A custom emoji.
     */
    customEmoji?: Schema$AppsDynamiteSharedCustomEmoji;
    /**
     * A basic emoji represented by a unicode string.
     */
    unicode?: string | null;
  }
  /**
   * Data for a FindDocument suggestion type.
   */
  export interface Schema$AppsDynamiteSharedFindDocumentSuggestion {
    /**
     * List of documents to render as suggestions.
     */
    documentSuggestions?: Schema$AppsDynamiteSharedDocument[];
    /**
     * Whether to show the action buttons in the card for the suggestions.
     */
    showActionButtons?: boolean | null;
  }
  /**
   * NEXT TAG: 3 A GroupDetails proto will store the information pertaining to single Group.
   */
  export interface Schema$AppsDynamiteSharedGroupDetails {
    /**
     * A simple text that describes the purpose of a single Group, the general theme of the topics to be posted and/or the denominator of the Group participants.
     */
    description?: string | null;
    /**
     * A simple text describing the rules and expectations from members when participating in conversation.
     */
    guidelines?: string | null;
  }
  export interface Schema$AppsDynamiteSharedGroupVisibility {
    state?: string | null;
  }
  /**
   * Data for rendering a justification for a document.
   */
  export interface Schema$AppsDynamiteSharedJustification {
    /**
     * Time the action took place.
     */
    actionTime?: string | null;
    /**
     * Type of action performed on the document.
     */
    actionType?: string | null;
    /**
     * Owner of the document.
     */
    documentOwner?: Schema$AppsDynamiteSharedJustificationPerson;
    /**
     * Words or phrases from the user's query that describes the document content. (Ex: Users query is "Can you share the document about Bullseye?" the extracted topic would be "Bullseye").
     */
    topics?: string[] | null;
  }
  /**
   * Data for rendering a person associated with a document.
   */
  export interface Schema$AppsDynamiteSharedJustificationPerson {
    /**
     * Whether the person is the recipient of the suggestions.
     */
    isRecipient?: boolean | null;
    /**
     * Obfuscated user ID.
     */
    user?: Schema$UserId;
  }
  /**
   * Metadata specific for a Meet call that are required to generate call artifacts.
   */
  export interface Schema$AppsDynamiteSharedMeetMetadata {
    /**
     * Required. A globally unique code (e.g. "cxv-zbgj-wzw") that points to a meeting space. Note: Meeting codes may be regenerated, which will cause old meeting codes to become invalid.
     */
    meetingCode?: string | null;
    /**
     * Required. A URL, in the format "https://meet.google.com/x" (e.g. https://meet.google.com/cxv-zbgj-wzw), to identify and access the meeting space.
     */
    meetingUrl?: string | null;
  }
  /**
   * Information that references a Dynamite chat message. This is only used for Activity Feed messages.
   */
  export interface Schema$AppsDynamiteSharedMessageInfo {
    /**
     * Id of the source chat message. This is kept here because the top-level message ID to refers the AF message ID.
     */
    messageId?: Schema$MessageId;
    /**
     * The type of the source chat message.
     */
    messageType?: string | null;
    /**
     * Timestamp of when the topic containing the message has been read by the user. This is populated if the message references an inline reply, in which case the space may be marked as read but the topic still has unread messages.
     */
    topicReadTimeUsec?: string | null;
  }
  /**
   * The payload(restricted to 1P applications) to be stored with a specific message.
   */
  export interface Schema$AppsDynamiteSharedMessageIntegrationPayload {
    /**
     * Pantheon project number used to identify the calling app.
     */
    projectNumber?: string | null;
    tasksMessageIntegrationPayload?: Schema$AppsDynamiteSharedTasksMessageIntegrationPayload;
    /**
     * An enum indicating which 1P application's payload this is. This field is required to add 1P payload.
     */
    type?: string | null;
  }
  /**
   * Contains info about the entity that something is, or is owned by.
   */
  export interface Schema$AppsDynamiteSharedOrganizationInfo {
    consumerInfo?: Schema$AppsDynamiteSharedOrganizationInfoConsumerInfo;
    customerInfo?: Schema$AppsDynamiteSharedOrganizationInfoCustomerInfo;
  }
  /**
   * Intentionally empty. Used to disambiguate consumer and customer use cases in oneof below.
   */
  export interface Schema$AppsDynamiteSharedOrganizationInfoConsumerInfo {}
  export interface Schema$AppsDynamiteSharedOrganizationInfoCustomerInfo {
    customerId?: Schema$CustomerId;
  }
  /**
   * Stores the suggestion provided by apps/bots.
   */
  export interface Schema$AppsDynamiteSharedOriginAppSuggestion {
    appId?: Schema$AppId;
    cardClickSuggestion?: Schema$AppsDynamiteSharedCardClickSuggestion;
  }
  export interface Schema$AppsDynamiteSharedPhoneNumber {
    /**
     * The phone number type, e.g., work, mobile, etc.
     */
    type?: string | null;
    /**
     * The actual phone number.
     */
    value?: string | null;
  }
  export interface Schema$AppsDynamiteSharedReaction {
    /**
     * The total number of users who have reacted.
     */
    count?: number | null;
    /**
     * When the first emoji of this type was added.
     */
    createTimestamp?: string | null;
    /**
     * Whether the current user reacted using this emoji. Note: Unlike most properties of messages, this is different per-user.
     */
    currentUserParticipated?: boolean | null;
    emoji?: Schema$AppsDynamiteSharedEmoji;
  }
  /**
   * The settings of retention period of a message or topic.
   */
  export interface Schema$AppsDynamiteSharedRetentionSettings {
    /**
     * The timestamp after which the message/topic should be removed, in microseconds since the epoch, when state == EPHEMERAL_ONE_DAY. The value should not be set in other cases.
     */
    expiryTimestamp?: string | null;
    /**
     * The retention state.
     */
    state?: string | null;
  }
  /**
   * Contains info on membership count for member types: HUMAN_USER, APP_USER & ROSTER_MEMBER different states: INVITED, JOINED
   */
  export interface Schema$AppsDynamiteSharedSegmentedMembershipCount {
    /**
     * count of members with given type and state
     */
    membershipCount?: number | null;
    membershipState?: string | null;
    memberType?: string | null;
  }
  export interface Schema$AppsDynamiteSharedSegmentedMembershipCounts {
    value?: Schema$AppsDynamiteSharedSegmentedMembershipCount[];
  }
  /**
   * Defines the representation of a single matching space.
   */
  export interface Schema$AppsDynamiteSharedSpaceInfo {
    avatarInfo?: Schema$AppsDynamiteSharedAvatarInfo;
    avatarUrl?: string | null;
    description?: string | null;
    groupId?: Schema$GroupId;
    /**
     * The email address of the user that invited the calling user to the room, if available. This field will only be populated for direct invites, it will be empty if the user was indirectly invited to the group.
     */
    inviterEmail?: string | null;
    /**
     * Whether this is a space that enables guest access
     */
    isExternal?: boolean | null;
    name?: string | null;
    /**
     * Deprecated. Use segmented_membership_counts instead which also includes other counts such as rosters.
     */
    numMembers?: number | null;
    /**
     * Member counts object with types of members and their respective counts.
     */
    segmentedMembershipCounts?: Schema$AppsDynamiteSharedSegmentedMembershipCounts;
    /**
     * searching user's membership state in this space
     */
    userMembershipState?: string | null;
  }
  /**
   * This is the internal version of the API proto at google3/google/chat/v1/gsuite_message_integration.proto
   */
  export interface Schema$AppsDynamiteSharedTasksAnnotationData {
    assigneeChange?: Schema$AppsDynamiteSharedTasksAnnotationDataAssigneeChange;
    completionChange?: Schema$AppsDynamiteSharedTasksAnnotationDataCompletionChange;
    creation?: Schema$AppsDynamiteSharedTasksAnnotationDataCreation;
    deletionChange?: Schema$AppsDynamiteSharedTasksAnnotationDataDeletionChange;
    /**
     * ID of task. Will be used to create deep links to Tasks.
     */
    taskId?: string | null;
    /**
     * Task properties after the update has been applied.
     */
    taskProperties?: Schema$AppsDynamiteSharedTasksAnnotationDataTaskProperties;
    userDefinedMessage?: Schema$AppsDynamiteSharedTasksAnnotationDataUserDefinedMessage;
  }
  export interface Schema$AppsDynamiteSharedTasksAnnotationDataAssigneeChange {
    /**
     * Obfuscated user ID of previous assignee. Not set if the task was originally not assigned.
     */
    oldAssignee?: Schema$UserId;
  }
  export interface Schema$AppsDynamiteSharedTasksAnnotationDataCompletionChange {}
  export interface Schema$AppsDynamiteSharedTasksAnnotationDataCreation {}
  export interface Schema$AppsDynamiteSharedTasksAnnotationDataDeletionChange {}
  /**
   * All relevant task properties for a Chat message.
   */
  export interface Schema$AppsDynamiteSharedTasksAnnotationDataTaskProperties {
    /**
     * Obfuscated user ID of new assignee. Not set if the task doesn't have an assignee.
     */
    assignee?: Schema$UserId;
    /**
     * Whether the task is marked as completed.
     */
    completed?: boolean | null;
    /**
     * Whether the task is marked as deleted.
     */
    deleted?: boolean | null;
    /**
     * The description of the task. If Task original description's length is greater than 1024, then Task BE sends the truncated description to Dynamite Integration Server.
     */
    description?: string | null;
    /**
     * Set if the task has a date but no time. Source of truth in Tasks BE: http://shortn/_wyT7eB4Ixv
     */
    startDate?: Schema$Date;
    /**
     * Set if the task has both a date and a time. Source of truth in Tasks BE: http://shortn/_u6cr0F5ttE
     */
    startTime?: string | null;
    /**
     * The title of the task.
     */
    title?: string | null;
  }
  /**
   * Used for task card attachments on custom user messages that should be kept as is without generating an i18n event message, e.g. the user starts a conversation from an existing task. IMPORTANT: please don't populate this field yet as it could break existing flows until it's implemented. See code at http://shortn/_CM74CdENMx used by http://shortn/_5o85POJY8Q.
   */
  export interface Schema$AppsDynamiteSharedTasksAnnotationDataUserDefinedMessage {}
  /**
   * A payload containing Tasks metadata for rendering a live card. Currently not used by the Tasks integration.
   */
  export interface Schema$AppsDynamiteSharedTasksMessageIntegrationPayload {}
  /**
   * User-block relationship
   */
  export interface Schema$AppsDynamiteSharedUserBlockRelationship {
    hasBlockedRequester?: boolean | null;
    isBlockedByRequester?: boolean | null;
  }
  /**
   * Reference to a transcoded video attachment.
   */
  export interface Schema$AppsDynamiteSharedVideoReference {
    /**
     * Available transcode format. Value is defined in video/storage/proto/content_header.proto
     */
    format?: number[] | null;
    /**
     * Transcode status
     */
    status?: string | null;
  }
  /**
   * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
   */
  export interface Schema$AppsDynamiteStorageAction {
    /**
     * Apps Script function to invoke when the containing element is clicked/activated.
     */
    function?: string | null;
    interaction?: string | null;
    loadIndicator?: string | null;
    /**
     * List of action parameters.
     */
    parameters?: Schema$AppsDynamiteStorageActionActionParameter[];
    /**
     * Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. When using [LoadIndicator.NONE](workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) for actions, `persist_values` = `true`is recommended, as it ensures that any changes made by the user after form or on change actions are sent to the server are not overwritten by the response. If `false`, the form values are cleared when the action is triggered. When `persist_values` is set to `false`, it is strongly recommended that the card use [LoadIndicator.SPINNER](workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) for all actions, as this locks the UI to ensure no changes are made by the user while the action is being processed.
     */
    persistValues?: boolean | null;
  }
  /**
   * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.
   */
  export interface Schema$AppsDynamiteStorageActionActionParameter {
    /**
     * The name of the parameter for the action script.
     */
    key?: string | null;
    /**
     * The value of the parameter.
     */
    value?: string | null;
  }
  /**
   * Represents the complete border style applied to widgets.
   */
  export interface Schema$AppsDynamiteStorageBorderStyle {
    /**
     * The corner radius for the border.
     */
    cornerRadius?: number | null;
    /**
     * The colors to use when the type is `BORDER_TYPE_STROKE`.
     */
    strokeColor?: Schema$Color;
    /**
     * The border type.
     */
    type?: string | null;
  }
  /**
   * A button. Can be a text button or an image button.
   */
  export interface Schema$AppsDynamiteStorageButton {
    /**
     * The alternative text used for accessibility. Has no effect when an icon is set; use `icon.alt_text` instead.
     */
    altText?: string | null;
    /**
     * If set, the button is filled with a solid background.
     */
    color?: Schema$Color;
    /**
     * If true, the button is displayed in a disabled state and doesn't respond to user actions.
     */
    disabled?: boolean | null;
    /**
     * The icon image.
     */
    icon?: Schema$AppsDynamiteStorageIcon;
    /**
     * The action to perform when the button is clicked.
     */
    onClick?: Schema$AppsDynamiteStorageOnClick;
    /**
     * The text of the button.
     */
    text?: string | null;
  }
  /**
   * A list of buttons layed out horizontally.
   */
  export interface Schema$AppsDynamiteStorageButtonList {
    buttons?: Schema$AppsDynamiteStorageButton[];
  }
  /**
   * A card is a UI element that can contain UI widgets such as text and images. For more information, see Cards . For example, the following JSON creates a card that has a header with the name, position, icons, and link for a contact, followed by a section with contact information like email and phone number. ``` { "header": { "title": "Heba Salam", "subtitle": "Software Engineer", "imageStyle": "ImageStyle.AVATAR", "imageUrl": "https://example.com/heba_salam.png", "imageAltText": "Avatar for Heba Salam" \}, "sections" : [ { "header": "Contact Info", "widgets": [ { "decorated_text": { "icon": { "knownIcon": "EMAIL" \}, "content": "heba.salam@example.com" \} \}, { "decoratedText": { "icon": { "knownIcon": "PERSON" \}, "content": "Online" \} \}, { "decoratedText": { "icon": { "knownIcon": "PHONE" \}, "content": "+1 (555) 555-1234" \} \}, { "buttons": [ { "textButton": { "text": "Share", \}, "onClick": { "openLink": { "url": "https://example.com/share" \} \} \}, { "textButton": { "text": "Edit", \}, "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" \} ], "loadIndicator": "LoadIndicator.SPINNER" \} \} \} ] \} ], "collapsible": true, "uncollapsibleWidgetsCount": 3 \} ], "cardActions": [ { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" \} \} \} ], "name": "contact-card-K3wB6arF2H9L" \} ```
   */
  export interface Schema$AppsDynamiteStorageCard {
    /**
     * The actions of this card. They are added to a card's generated toolbar menu. For example, the following JSON constructs a card action menu with Settings and Send Feedback options: ``` "card_actions": [ { "actionLabel": "Setting", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" \} ], "loadIndicator": "LoadIndicator.SPINNER" \} \} \}, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" \} \} \} ] ```
     */
    cardActions?: Schema$AppsDynamiteStorageCardCardAction[];
    /**
     * The header of the card. A header usually contains a title and an image.
     */
    header?: Schema$AppsDynamiteStorageCardCardHeader;
    /**
     * Name of the card, which is used as a identifier for the card in card navigation.
     */
    name?: string | null;
    /**
     * Sections are separated by a line divider.
     */
    sections?: Schema$AppsDynamiteStorageCardSection[];
  }
  /**
   * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.
   */
  export interface Schema$AppsDynamiteStorageCardCardAction {
    /**
     * The label that displays as the action menu item.
     */
    actionLabel?: string | null;
    /**
     * The onclick action for this action item.
     */
    onClick?: Schema$AppsDynamiteStorageOnClick;
  }
  export interface Schema$AppsDynamiteStorageCardCardHeader {
    /**
     * The alternative text of this image which is used for accessibility.
     */
    imageAltText?: string | null;
    /**
     * The image's type.
     */
    imageType?: string | null;
    /**
     * The URL of the image in the card header.
     */
    imageUrl?: string | null;
    /**
     * The subtitle of the card header.
     */
    subtitle?: string | null;
    /**
     * The title of the card header. The title must be specified. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.
     */
    title?: string | null;
  }
  /**
   * A section contains a collection of widgets that are rendered vertically in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties, for example, float.
   */
  export interface Schema$AppsDynamiteStorageCardSection {
    /**
     * Indicates whether this section is collapsible. If a section is collapsible, the description must be given.
     */
    collapsible?: boolean | null;
    /**
     * The header of the section. Formatted text is supported.
     */
    header?: string | null;
    /**
     * The number of uncollapsible widgets. For example, when a section contains five widgets and the `numUncollapsibleWidget` is set to `2`, the first two widgets are always shown and the last three are collapsed as default. The `numUncollapsibleWidget` is taken into account only when collapsible is set to `true`.
     */
    uncollapsibleWidgetsCount?: number | null;
    /**
     * A section must contain at least 1 widget.
     */
    widgets?: Schema$AppsDynamiteStorageWidget[];
  }
  /**
   * Represents a Columns widget that displays a single row of columns.
   */
  export interface Schema$AppsDynamiteStorageColumns {
    /**
     * Each card supports up to 2 columns.
     */
    columnItems?: Schema$AppsDynamiteStorageColumnsColumn[];
    /**
     * Controls how the column resizes based on screen width.
     */
    wrapStyle?: string | null;
  }
  /**
   * Represents a Column that consists of widgets stacked vertically.
   */
  export interface Schema$AppsDynamiteStorageColumnsColumn {
    /**
     * The horizontal alignment of the column.
     */
    horizontalAlignment?: string | null;
    /**
     * Specifies how the column content is sized horizontally.
     */
    horizontalSizeStyle?: string | null;
    /**
     * The vertical alignment of the column.
     */
    verticalAlignment?: string | null;
    /**
     * LINT.ThenChange(//depot/google3/google/apps/card/v1/card.proto) Array of widgets included in the column.
     */
    widgets?: Schema$AppsDynamiteStorageColumnsColumnWidgets[];
  }
  /**
   * LINT.IfChange The `column` widget can contain these widgets.
   */
  export interface Schema$AppsDynamiteStorageColumnsColumnWidgets {
    /**
     * ButtonList widget.
     */
    buttonList?: Schema$AppsDynamiteStorageButtonList;
    /**
     * DateTimePicker widget.
     */
    dateTimePicker?: Schema$AppsDynamiteStorageDateTimePicker;
    /**
     * DecoratedText widget.
     */
    decoratedText?: Schema$AppsDynamiteStorageDecoratedText;
    /**
     * Image widget.
     */
    image?: Schema$AppsDynamiteStorageImage;
    /**
     * SelectionInput widget.
     */
    selectionInput?: Schema$AppsDynamiteStorageSelectionInput;
    /**
     * TextInput widget.
     */
    textInput?: Schema$AppsDynamiteStorageTextInput;
    /**
     * Text paragraph widget.
     */
    textParagraph?: Schema$AppsDynamiteStorageTextParagraph;
  }
  /**
   * The widget that lets users to specify a date and time.
   */
  export interface Schema$AppsDynamiteStorageDateTimePicker {
    /**
     * The label for the field that displays to the user.
     */
    label?: string | null;
    /**
     * The name of the text input that's used in formInput, and uniquely identifies this input.
     */
    name?: string | null;
    /**
     * Triggered when the user clicks Save or Clear from the date/time picker dialog. This is only triggered if the value changed as a result of the Save/Clear operation.
     */
    onChangeAction?: Schema$AppsDynamiteStorageAction;
    /**
     * The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If not set, it uses the user's time zone setting on the client side.
     */
    timezoneOffsetDate?: number | null;
    /**
     * The type of the date/time picker.
     */
    type?: string | null;
    /**
     * The value to display as the default value before user input or previous user input. It is represented in milliseconds (Epoch time). For `DATE_AND_TIME` type, the full epoch value is used. For `DATE_ONLY` type, only date of the epoch time is used. For `TIME_ONLY` type, only time of the epoch time is used. For example, you can set epoch time to `3 * 60 * 60 * 1000` to represent 3am.
     */
    valueMsEpoch?: string | null;
  }
  /**
   * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
   */
  export interface Schema$AppsDynamiteStorageDecoratedText {
    /**
     * The formatted text label that shows below the main text.
     */
    bottomLabel?: string | null;
    /**
     * A button that can be clicked to trigger an action.
     */
    button?: Schema$AppsDynamiteStorageButton;
    /**
     * An icon displayed after the text.
     */
    endIcon?: Schema$AppsDynamiteStorageIcon;
    /**
     * Deprecated in favor of start_icon.
     */
    icon?: Schema$AppsDynamiteStorageIcon;
    /**
     * Only the top and bottom label and content region are clickable.
     */
    onClick?: Schema$AppsDynamiteStorageOnClick;
    /**
     * The icon displayed in front of the text.
     */
    startIcon?: Schema$AppsDynamiteStorageIcon;
    /**
     * A switch widget can be clicked to change its state or trigger an action.
     */
    switchControl?: Schema$AppsDynamiteStorageDecoratedTextSwitchControl;
    /**
     * Required. The main widget formatted text. See Text formatting for details.
     */
    text?: string | null;
    /**
     * The formatted text label that shows above the main text.
     */
    topLabel?: string | null;
    /**
     * The wrap text setting. If `true`, the text is wrapped and displayed in multiline. Otherwise, the text is truncated.
     */
    wrapText?: boolean | null;
  }
  export interface Schema$AppsDynamiteStorageDecoratedTextSwitchControl {
    /**
     * The control type, either switch or checkbox.
     */
    controlType?: string | null;
    /**
     * The name of the switch widget that's used in formInput.
     */
    name?: string | null;
    /**
     * The action when the switch state is changed.
     */
    onChangeAction?: Schema$AppsDynamiteStorageAction;
    /**
     * If the switch is selected.
     */
    selected?: boolean | null;
    /**
     * The value is what is passed back in the callback.
     */
    value?: string | null;
  }
  /**
   * A divider that appears in between widgets.
   */
  export interface Schema$AppsDynamiteStorageDivider {}
  /**
   * Represents a Grid widget that displays items in a configurable grid layout.
   */
  export interface Schema$AppsDynamiteStorageGrid {
    /**
     * The border style to apply to each grid item.
     */
    borderStyle?: Schema$AppsDynamiteStorageBorderStyle;
    /**
     * The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).
     */
    columnCount?: number | null;
    /**
     * The items to display in the grid.
     */
    items?: Schema$AppsDynamiteStorageGridGridItem[];
    /**
     * This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.
     */
    onClick?: Schema$AppsDynamiteStorageOnClick;
    /**
     * The text that displays in the grid header.
     */
    title?: string | null;
  }
  /**
   * Represents a single item in the grid layout.
   */
  export interface Schema$AppsDynamiteStorageGridGridItem {
    /**
     * A user-specified identifier for this grid item. This identifier is returned in the parent Grid's onClick callback parameters.
     */
    id?: string | null;
    /**
     * The image that displays in the grid item.
     */
    image?: Schema$AppsDynamiteStorageImageComponent;
    /**
     * The layout to use for the grid item.
     */
    layout?: string | null;
    /**
     * The grid item's subtitle.
     */
    subtitle?: string | null;
    /**
     * The horizontal alignment of the grid item's text.
     */
    textAlignment?: string | null;
    /**
     * The grid item's title.
     */
    title?: string | null;
  }
  export interface Schema$AppsDynamiteStorageIcon {
    /**
     * The description of the icon, used for accessibility. The default value is provided if you don't specify one.
     */
    altText?: string | null;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string | null;
    /**
     * The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a standard icon.
     */
    imageType?: string | null;
    /**
     * The icon specified by the string name of a list of known icons
     */
    knownIcon?: string | null;
  }
  /**
   * An image that is specified by a URL and can have an onClick action.
   */
  export interface Schema$AppsDynamiteStorageImage {
    /**
     * The alternative text of this image, used for accessibility.
     */
    altText?: string | null;
    /**
     * An image URL.
     */
    imageUrl?: string | null;
    onClick?: Schema$AppsDynamiteStorageOnClick;
  }
  export interface Schema$AppsDynamiteStorageImageComponent {
    /**
     * The accessibility label for the image.
     */
    altText?: string | null;
    /**
     * The border style to apply to the image.
     */
    borderStyle?: Schema$AppsDynamiteStorageBorderStyle;
    /**
     * The crop style to apply to the image.
     */
    cropStyle?: Schema$AppsDynamiteStorageImageCropStyle;
    /**
     * The image URL.
     */
    imageUri?: string | null;
  }
  /**
   * Represents the crop style applied to an image.
   */
  export interface Schema$AppsDynamiteStorageImageCropStyle {
    /**
     * The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`.
     */
    aspectRatio?: number | null;
    /**
     * The crop type.
     */
    type?: string | null;
  }
  export interface Schema$AppsDynamiteStorageOnClick {
    /**
     * If specified, an action is triggered by this onClick.
     */
    action?: Schema$AppsDynamiteStorageAction;
    /**
     * Triggers host app action on click directly without invoking form actions. This is currently not available to end-users and is used internal only.
     */
    hostAppAction?: Schema$HostAppActionMarkup;
    /**
     * An add-on triggers this action when the action needs to open a link. This differs from the open_link above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.
     */
    openDynamicLinkAction?: Schema$AppsDynamiteStorageAction;
    /**
     * If specified, this onClick triggers an open link action.
     */
    openLink?: Schema$AppsDynamiteStorageOpenLink;
  }
  export interface Schema$AppsDynamiteStorageOpenLink {
    /**
     * Represents the platform specific uri/intent to open on each client. For example: A companion_url will open in a companion window on the web. An iOS URL and android intent will open in the corresponding hosting apps. If these platform specific URLs can't be handled correctly, i.e. if the companion isn't supported on web and the hosting apps aren't available on the mobile platforms then the `uri` will open in a new browser window on all the platforms.
     */
    appUri?: Schema$AppsDynamiteStorageOpenLinkAppUri;
    onClose?: string | null;
    openAs?: string | null;
    /**
     * The URL to open.
     */
    url?: string | null;
  }
  /**
   * Represents the platform specific uri/intent to open for each client.
   */
  export interface Schema$AppsDynamiteStorageOpenLinkAppUri {
    /**
     * An intent object to be opened in the corresponding android hosting app.
     */
    androidIntent?: Schema$AppsDynamiteStorageOpenLinkAppUriIntent;
    /**
     * A companion uri string to be opened in the chat companion window. on the web.
     */
    companionUri?: string | null;
    /**
     * A uri string to be opened in the corresponding iOS hosting app.
     */
    iosUri?: string | null;
  }
  /**
   * Android intent.
   */
  export interface Schema$AppsDynamiteStorageOpenLinkAppUriIntent {
    /**
     * A list of extra data for the android intent. For example, for a calendar event edit intent, the event title information can be passed as extra data.
     */
    extraData?: Schema$AppsDynamiteStorageOpenLinkAppUriIntentExtraData[];
    /**
     * An android intent action string for the {@link android.content.Intent\} object. For example: for the view intent action type, a valid value will be android.content.Intent.ACTION_VIEW.
     */
    intentAction?: string | null;
  }
  /**
   * Extra data for an android intent. Valid keys are defined in the hosting app contract.
   */
  export interface Schema$AppsDynamiteStorageOpenLinkAppUriIntentExtraData {
    /**
     * A key for the intent extra data.
     */
    key?: string | null;
    /**
     * Value for the given extra data key.
     */
    value?: string | null;
  }
  /**
   * A widget that creates a UI item (for example, a drop-down list) with options for users to select.
   */
  export interface Schema$AppsDynamiteStorageSelectionInput {
    items?: Schema$AppsDynamiteStorageSelectionInputSelectionItem[];
    /**
     * The label displayed ahead of the switch control.
     */
    label?: string | null;
    /**
     * The name of the text input which is used in formInput.
     */
    name?: string | null;
    /**
     * If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button.
     */
    onChangeAction?: Schema$AppsDynamiteStorageAction;
    type?: string | null;
  }
  /**
   * The item in the switch control. A radio button, at most one of the items is selected.
   */
  export interface Schema$AppsDynamiteStorageSelectionInputSelectionItem {
    /**
     * If more than one item is selected for `RADIO_BUTTON` and `DROPDOWN`, the first selected item is treated as selected and the ones after are ignored.
     */
    selected?: boolean | null;
    /**
     * The text to be displayed.
     */
    text?: string | null;
    /**
     * The value associated with this item. The client should use this as a form input value.
     */
    value?: string | null;
  }
  /**
   * A container wrapping elements necessary for showing suggestion items used in text input autocomplete.
   */
  export interface Schema$AppsDynamiteStorageSuggestions {
    /**
     * A list of suggestions items which will be used in are used in autocomplete.
     */
    items?: Schema$AppsDynamiteStorageSuggestionsSuggestionItem[];
  }
  /**
   * A suggestion item. Only supports text for now.
   */
  export interface Schema$AppsDynamiteStorageSuggestionsSuggestionItem {
    text?: string | null;
  }
  /**
   * A text input is a UI item where users can input text. A text input can also have an onChange action and suggestions.
   */
  export interface Schema$AppsDynamiteStorageTextInput {
    /**
     * The refresh function that returns suggestions based on the user's input text. If the callback is not specified, autocomplete is done in client side based on the initial suggestion items.
     */
    autoCompleteAction?: Schema$AppsDynamiteStorageAction;
    /**
     * The hint text.
     */
    hintText?: string | null;
    /**
     * The initial suggestions made before any user input.
     */
    initialSuggestions?: Schema$AppsDynamiteStorageSuggestions;
    /**
     * At least one of label and hintText must be specified.
     */
    label?: string | null;
    /**
     * The name of the text input which is used in formInput.
     */
    name?: string | null;
    /**
     * The onChange action, for example, invoke a function.
     */
    onChangeAction?: Schema$AppsDynamiteStorageAction;
    /**
     * The style of the text, for example, a single line or multiple lines.
     */
    type?: string | null;
    /**
     * The default value when there is no input from the user.
     */
    value?: string | null;
  }
  /**
   * A paragraph of text that supports formatting. See [Text formatting](workspace/add-ons/concepts/widgets#text_formatting") for details.
   */
  export interface Schema$AppsDynamiteStorageTextParagraph {
    /**
     * The text that's shown in the widget.
     */
    text?: string | null;
  }
  /**
   * A widget is a UI element that presents texts, images, etc.
   */
  export interface Schema$AppsDynamiteStorageWidget {
    /**
     * A list of buttons. For example, the following JSON creates two buttons. The first is a filled text button and the second is an image button that opens a link: ``` "buttonList": { "buttons": [ "button": { "text": "Edit", "Color": { "Red": 255 "Green": 255 "Blue": 255 \} "disabled": true \}, "button": { "icon": { "knownIcon": "INVITE" "altText": "check calendar" \}, "onClick": { "openLink": { "url": "https://example.com/calendar" \} \} \}, ] \} ```
     */
    buttonList?: Schema$AppsDynamiteStorageButtonList;
    /**
     * Displays a single row of columns with widgets stacked vertically in each column. For example, the following JSON creates a 2 column widget each containing a single item. ``` "columns": { "wrapStyle": "WRAP", "columnItems": [ { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment" : "CENTER", "widgets": [ { "textParagraph": { "text": "First column text paragraph", \} \} ] \}, { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment" : "CENTER", "widgets": [ { "textParagraph": { "text": "Second column text paragraph", \} \} ] \}, ] \} \} ```
     */
    columns?: Schema$AppsDynamiteStorageColumns;
    /**
     * Displays a selection/input widget for date/time. For example, the following JSON creates a date/time picker for an appointment time: ``` "date_time_picker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DateTimePickerType.DATE_AND_TIME", "valueMsEpoch": "796435200000" \} ```
     */
    dateTimePicker?: Schema$AppsDynamiteStorageDateTimePicker;
    /**
     * Displays a decorated text item in this widget. For example, the following JSON creates a decorated text widget showing email address: ``` "decoratedText": { "icon": { "knownIcon": "EMAIL" \}, "topLabel": "Email Address", "content": "heba.salam@example.com", "bottomLabel": "This is a new Email address!", "switchWidget": { "name": "has_send_welcome_email_to_heba_salam", "selected": false, "controlType": "ControlType.CHECKBOX" \} \} ```
     */
    decoratedText?: Schema$AppsDynamiteStorageDecoratedText;
    /**
     * Displays a divider. For example, the following JSON creates a divider: ``` "divider": { \} ```
     */
    divider?: Schema$AppsDynamiteStorageDivider;
    /**
     * Displays a grid with a collection of items. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "numColumns": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4.0 \}, "items": [ "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" \}, "borderStyle": { "type": "STROKE" \} \}, "title": "An item", "textAlignment": "CENTER" ], "onClick": { "openLink": { "url":"https://www.example.com" \} \} \} ```
     */
    grid?: Schema$AppsDynamiteStorageGrid;
    /**
     * The horizontal alignment of this widget.
     */
    horizontalAlignment?: string | null;
    /**
     * Displays an image in this widget. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://example.com/heba_salam.png" "altText": "Avatar for Heba Salam" \} ```
     */
    image?: Schema$AppsDynamiteStorageImage;
    /**
     * Displays a switch control in this widget. For example, the following JSON creates a dropdown selection for size: ``` "switchControl": { "name": "size", "label": "Size" "type": "SelectionType.DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false \}, { "text": "M", "value": "medium", "selected": true \}, { "text": "L", "value": "large", "selected": false \}, { "text": "XL", "value": "extra_large", "selected": false \} ] \} ```
     */
    selectionInput?: Schema$AppsDynamiteStorageSelectionInput;
    /**
     * Displays a text input in this widget. For example, the following JSON creates a text input for mail address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" \} ``` As another example, the following JSON creates a text input for programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" \}, { "text": "Java" \}, { "text": "JavaScript" \}, { "text": "Python" \} ] \} \} ```
     */
    textInput?: Schema$AppsDynamiteStorageTextInput;
    /**
     * Displays a text paragraph in this widget. For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" \} ```
     */
    textParagraph?: Schema$AppsDynamiteStorageTextParagraph;
  }
  /**
   * Interactive objects inside a message. Documentation: - https://api.slack.com/docs/message-buttons
   */
  export interface Schema$AppsDynamiteV1ApiCompatV1Action {
    /**
     * Confirmation dialog config.
     */
    confirm?: Schema$AppsDynamiteV1ApiCompatV1ActionConfirm;
    /**
     * Unique identifier for this action.
     */
    name?: string | null;
    /**
     * Button style ("default", "primary", or "danger").
     */
    style?: string | null;
    /**
     * User-facing label for the action.
     */
    text?: string | null;
    /**
     * Action type - currently only "button".
     */
    type?: string | null;
    /**
     * Payload for this action. Will be sent to the action handler along with name.
     */
    value?: string | null;
  }
  /**
   * Confirmation dialog config.
   */
  export interface Schema$AppsDynamiteV1ApiCompatV1ActionConfirm {
    /**
     * "Cancel" button label.
     */
    dismiss_text?: string | null;
    /**
     * "OK" button label.
     */
    ok_text?: string | null;
    /**
     * Confirmation dialog body text.
     */
    text?: string | null;
    /**
     * Confirmation dialog title.
     */
    title?: string | null;
  }
  /**
   * Richly formatted attachments. Documentation: - https://api.slack.com/docs/message-attachments
   */
  export interface Schema$AppsDynamiteV1ApiCompatV1Attachment {
    /**
     * Array of actions (currently only buttons).
     */
    actions?: Schema$AppsDynamiteV1ApiCompatV1Action[];
    /**
     * Undocumented - used in interactive button examples. The only valid value appears to be "default".
     */
    attachment_type?: string | null;
    /**
     * Avatar URL for the user.
     */
    author_icon?: string | null;
    /**
     * URL that the user name should link to.
     */
    author_link?: string | null;
    /**
     * User name to display as the author of the message.
     */
    author_name?: string | null;
    /**
     * Unique identifier for the collection of buttons within this attachment. Will be sent back to the action handler URL when a button is clicked.
     */
    callback_id?: string | null;
    /**
     * A color "bar" to display to the left of the attachment.
     */
    color?: string | null;
    /**
     * Fallback plain-text string for clients that don't support attachments.
     */
    fallback?: string | null;
    /**
     * Columns of text inside the attachment body.
     */
    fields?: Schema$AppsDynamiteV1ApiCompatV1Field[];
    /**
     * A string displayed at the bottom of the attachment.
     */
    footer?: string | null;
    /**
     * Avatar URL displayed to the left of the footer.
     */
    footer_icon?: string | null;
    /**
     * URL of an image to display in an image chip.
     */
    image_url?: string | null;
    /**
     * List of fields to apply formatting to.
     */
    mrkdwn_in?: string[] | null;
    /**
     * A string to show above the attachment.
     */
    pretext?: string | null;
    /**
     * Main text.
     */
    text?: string | null;
    /**
     * URL of a thumbnail image to display to the right of the attachment body.
     */
    thumb_url?: string | null;
    /**
     * Title string of this attachment.
     */
    title?: string | null;
    /**
     * URL that the title string should link to.
     */
    title_link?: string | null;
    /**
     * UNIX timestamp of the attachment.
     */
    ts?: number | null;
  }
  /**
   * A column of text in an attachment. Documentation: - https://api.slack.com/docs/message-attachments
   */
  export interface Schema$AppsDynamiteV1ApiCompatV1Field {
    /**
     * Whether the field can be shown side-by-side with another field.
     */
    short?: boolean | null;
    /**
     * The heading text, shown in bold.
     */
    title?: string | null;
    /**
     * The text value of the field.
     */
    value?: string | null;
  }
  export interface Schema$AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkup {
    addonAttachments?: Schema$AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkupAddonAttachment[];
  }
  export interface Schema$AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkupAddonAttachment {
    /**
     * Link to the resource's icon.
     */
    iconUrl?: string | null;
    /**
     * MIME type of the content in resource_url.
     */
    mimeType?: string | null;
    resourceUrl?: string | null;
    /**
     * Title of the attachment.
     */
    title?: string | null;
  }
  /**
   * Markup that defines conference data associated to a Google Calendar event.
   */
  export interface Schema$AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkup {
    /**
     * Unique identifier for this conference data. Maximum 512 characters long.
     */
    conferenceId?: string | null;
    /**
     * An identifier of the conferencing solution. Must match a value from the deployment's `calendar.conferenceSolution.id` field.
     */
    conferenceSolutionId?: string | null;
    /**
     * Entry points to the conference. Maximum 300 entry points are allowed.
     */
    entryPoints?: Schema$AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupEntryPointMarkup[];
    /**
     * If set, it means an error occurred during conference creation.
     */
    error?: Schema$AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupError;
    /**
     * Additional notes (such as instructions from the administrator, legal notices) to display to the user. Can contain HTML. Max length 2048 characters.
     */
    note?: string | null;
    /**
     * Additional add-on parameters. Maximum 300 parameters are allowed.
     */
    parameters?: Schema$AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupParameter[];
  }
  /**
   * A way to join the conference.
   */
  export interface Schema$AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupEntryPointMarkup {
    /**
     * An access code for accessing the conference. Maximum 128 characters long.
     */
    accessCode?: string | null;
    /**
     * Features of the entry point, such as being toll or toll-free. One entry point can have multiple features.
     */
    features?: string[] | null;
    /**
     * The label of the entry point to display to the user. Maximum 512 characters long.
     */
    label?: string | null;
    /**
     * A meeting code for accessing the conference. Maximum 128 characters long.
     */
    meetingCode?: string | null;
    /**
     * A passcode for accessing the conference. Maximum 128 characters long.
     */
    passcode?: string | null;
    /**
     * A password for accessing the conference. Maximum 128 characters long.
     */
    password?: string | null;
    /**
     * A PIN for accessing the conference. Maximum 128 characters long.
     */
    pin?: string | null;
    /**
     * The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only to `Type.PHONE`.
     */
    regionCode?: string | null;
    /**
     * The type of the entry point. Required.
     */
    type?: string | null;
    /**
     * A URI for joining the conference. Supports tel: and http(s): and should be at most 1300 characters long. Required.
     */
    uri?: string | null;
  }
  /**
   * Represents an error that occurred during conference creation.
   */
  export interface Schema$AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupError {
    /**
     * If the error type is `AUTHENTICATION`, the add-on can provide a URL allowing users to log in. Maximum 1300 characters long.
     */
    authenticationUrl?: string | null;
    /**
     * The type of error. Required.
     */
    type?: string | null;
  }
  /**
   * Solution-specific parameters that are persisted with the event data and, if an update or delete is needed, are passed to the add-on. For example: `[{key: 'sessionKey', value: '123'\}, {key: 'meetingId', value: '456'\}]`
   */
  export interface Schema$AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupParameter {
    /**
     * The key of the parameter. Maximum 50 characters long. Required.
     */
    key?: string | null;
    /**
     * The value of the parameter. Maximum 1024 characters long. Required.
     */
    value?: string | null;
  }
  export interface Schema$AppsExtensionsMarkupCalendarClientActionMarkupEditAttendeesActionMarkup {
    /**
     * A list of attendees to add to the Google Calendar event.
     */
    addAttendeeEmails?: string[] | null;
  }
  export interface Schema$AppsExtensionsMarkupCalendarClientActionMarkupEditConferenceDataActionMarkup {
    /**
     * The conference data to add to the Google Calendar event.
     */
    conferenceData?: Schema$AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkup;
  }
  /**
   * Attachments that follow the message text.
   */
  export interface Schema$Attachment {
    /**
     * Revised version of Gmail AddOn attachment approved by API design review.
     */
    addOnData?: Schema$GoogleChatV1ContextualAddOnMarkup;
    /**
     * The userId for the bot/app that created this data, to be used for attribution of attachments when the attachment was not created by the message sender.
     */
    appId?: Schema$UserId;
    /**
     * To identify an attachment within repeated in a message
     */
    attachmentId?: string | null;
    /**
     * Card AddOn attachment with the possibility for specifying editable widgets.
     */
    cardAddOnData?: Schema$AppsDynamiteStorageCard;
    /**
     * Deprecated version of Gmail AddOn attachment.
     */
    deprecatedAddOnData?: Schema$ContextualAddOnMarkup;
    /**
     * Slack attachment.
     */
    slackData?: Schema$AppsDynamiteV1ApiCompatV1Attachment;
    /**
     * The height of image url as fetched by fife. This field is asynchronously filled.
     */
    slackDataImageUrlHeight?: number | null;
  }
  /**
   * An Attribute is a piece of data attached an Item. Attributes are opaque to the Starbox and have no effect on, nor are they effected by, message storage, indexing, or search.
   */
  export interface Schema$Attribute {
    /**
     * The name of the attribute. Required - If a write is attempted with an empty string, the server will return an error.
     */
    name?: string | null;
    value?: Schema$CaribouAttributeValue;
  }
  /**
   * An attribute was deleted from some (subset of the) messages in this thread.
   */
  export interface Schema$AttributeRemoved {
    attributeId?: string | null;
    messageKeys?: Schema$MultiKey[];
  }
  export interface Schema$Attributes {
    attribute?: Schema$Attribute[];
  }
  /**
   * An attribute was added to some (subset of the) messages in this thread.
   */
  export interface Schema$AttributeSet {
    attributeId?: string | null;
    /**
     * The serialized attribute_value as persisted in the storage layer. The application is responsible for deserializing it to an Attribute.Value if appropriate.
     */
    attributeValue?: string | null;
    messageKeys?: Schema$MultiKey[];
  }
  /**
   * Represents the settings for Cloud audit logging
   */
  export interface Schema$AuditLoggingSettings {
    /**
     * Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc.
     */
    logAdminReadActions?: boolean | null;
    /**
     * Indicates whether audit logging is on/off for data access read APIs i.e. ListItems, GetItem etc.
     */
    logDataReadActions?: boolean | null;
    /**
     * Indicates whether audit logging is on/off for data access write APIs i.e. IndexItem etc.
     */
    logDataWriteActions?: boolean | null;
    /**
     * The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{project_id\}
     */
    project?: string | null;
  }
  /**
   * A combination of an identifier for a Drive resource (e.g. file, folder, or drive) and any secrets needed to access it. The secrets should never be logged, and this proto annotates those secret fields to ensure that they are not. Clients are encouraged to use this proto rather than defining their own, to ensure that secrets are correctly annotated.
   */
  export interface Schema$AuthorizedItemId {
    /**
     * Serialized ID of the Drive resource
     */
    id?: string | null;
    /**
     * Resource key of the Drive item. This field should be unset if, depending on the context, the item does not have a resource key, or if none was specified. This must never be logged.
     */
    resourceKey?: string | null;
  }
  export interface Schema$AutoComplete {
    items?: Schema$AutoCompleteItem[];
  }
  export interface Schema$AutoCompleteItem {
    text?: string | null;
  }
  /**
   * Container for Babel (Hangouts Classic) only message properties. The properties here will not be consumed by Dynamite clients. They are relevant only for Hangouts Classic.
   */
  export interface Schema$BabelMessageProps {
    /**
     * Babel clients locally generate this ID to dedupe against the async fanout.
     */
    clientGeneratedId?: string | null;
    /**
     * Stores additional Babel-specific properties (such as event metadata).
     */
    contentExtension?: Schema$ChatContentExtension;
    /**
     * Stores the delivery source of messages (such as phone number for SMS).
     */
    deliveryMedium?: Schema$DeliveryMedium;
    /**
     * Primary identifier used by Hangouts Classic for its events (messages).
     */
    eventId?: string | null;
    /**
     * Stores message segments (text content) and attachments (media URLs).
     */
    messageContent?: Schema$ChatConserverMessageContent;
    /**
     * Whether or not these message properties were backfilled by go/dinnertrain.
     */
    wasUpdatedByBackfill?: boolean | null;
  }
  /**
   * Annotation metadata for Babel-only items that signals which type of placeholder message should be displayed in Babel clients.
   */
  export interface Schema$BabelPlaceholderMetadata {
    deleteMetadata?: Schema$DeleteMetadata;
    editMetadata?: Schema$EditMetadata;
    hangoutVideoMetadata?: Schema$HangoutVideoEventMetadata;
  }
  /**
   * Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$BooleanOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is *closed* and the property's name is *isClosed*, then queries like *closed:<value\>* show results only where the value of the property named *isClosed* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * The options for boolean properties.
   */
  export interface Schema$BooleanPropertyOptions {
    /**
     * If set, describes how the boolean should be used as a search operator.
     */
    operatorOptions?: Schema$BooleanOperatorOptions;
  }
  /**
   * Represents a complete border style that can be applied to widgets.
   */
  export interface Schema$BorderStyle {
    /**
     * The corner radius for the border.
     */
    cornerRadius?: number | null;
    /**
     * The colors to use when the type is STROKE.
     */
    strokeColor?: string | null;
    /**
     * The border type.
     */
    type?: string | null;
  }
  /**
   * Bot-specific profile information.
   */
  export interface Schema$BotInfo {
    appAllowlistStatus?: string | null;
    /**
     * Identifier of the application associated with the bot.
     */
    appId?: Schema$AppId;
    /**
     * URL for the avatar picture of the User in dynamite. This field should be populated if the request is FetchBotCategories/ListBotCatalogEntries
     */
    botAvatarUrl?: string | null;
    /**
     * Non-unique, user-defined display name of the Bot. This field should be populated if the request is FetchBotCategories/ListBotCatalogEntries.
     */
    botName?: string | null;
    /**
     * Short description for the bot.
     */
    description?: string | null;
    /**
     * Name of bot developer.
     */
    developerName?: string | null;
    /**
     * URL for the banner image in GSuite Market Place. The banner will be 220x140.
     */
    marketPlaceBannerUrl?: string | null;
    /**
     * Indicates whether bot is enabled/disabled.
     */
    status?: string | null;
    /**
     * The supported uses are limited according to the user that made the request. If the user does not have permission to use the bot, the list will be empty. This could occur for non whitelisted bots in the catalog.
     */
    supportedUses?: string[] | null;
    /**
     * If the app supports a home screen.
     */
    supportHomeScreen?: boolean | null;
    /**
     * Urls with additional information related to the bot. This field should always be set even if all the fields within it are empty, so that it is convenient for clients to work with this field in javascript.
     */
    supportUrls?: Schema$SupportUrls;
  }
  /**
   * Information about a bot response, branched from shared/bot_response.proto without frontend User proto as we never store it.
   */
  export interface Schema$BotResponse {
    botId?: Schema$UserId;
    requiredAction?: string | null;
    responseType?: string | null;
    /**
     * URL for setting up bot.
     */
    setupUrl?: string | null;
  }
  /**
   * Broadcast access information of a meeting space.
   */
  export interface Schema$BroadcastAccess {
    /**
     * The policy that controls the broadcast's viewer access.
     */
    accessPolicy?: string | null;
    /**
     * A URL that can be used to access the broadcast of the meeting. This field will be empty if broadcast is not enabled. It will be populated by the backend. Clients cannot modify the value.
     */
    viewUrl?: string | null;
  }
  /**
   * Information about a broadcast session.
   */
  export interface Schema$BroadcastSessionInfo {
    /**
     * A unique server-generated ID for the broadcast session.
     */
    broadcastSessionId?: string | null;
    /**
     * Output only. Current broadcast session's statistics.
     */
    broadcastStats?: Schema$BroadcastStats;
    /**
     * Input only. Deprecated field, should not be used.
     */
    ingestionId?: string | null;
    /**
     * Broadcast session's state information.
     */
    sessionStateInfo?: Schema$SessionStateInfo;
  }
  /**
   * Statistics of the broadcast session.
   */
  export interface Schema$BroadcastStats {
    /**
     * Estimated concurrent viewer count.
     */
    estimatedViewerCount?: string | null;
  }
  export interface Schema$Button {
    imageButton?: Schema$ImageButton;
    textButton?: Schema$TextButton;
  }
  export interface Schema$CalendarClientActionMarkup {
    /**
     * An action that adds attachments to the Google Calendar event.
     */
    addAttachmentsActionMarkup?: Schema$AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkup;
    /**
     * An action that adds attendees to the Google Calendar event.
     */
    editAttendeesActionMarkup?: Schema$AppsExtensionsMarkupCalendarClientActionMarkupEditAttendeesActionMarkup;
    /**
     * An action that adds conference data to the Google Calendar event.
     */
    editConferenceDataActionMarkup?: Schema$AppsExtensionsMarkupCalendarClientActionMarkupEditConferenceDataActionMarkup;
  }
  /**
   * Contains information regarding an ongoing conference (aka call) for a meeting space.
   */
  export interface Schema$CallInfo {
    /**
     * Abuse reporting configuration for the ongoing conference.
     */
    abuseReportingConfig?: Schema$AbuseReportingConfig;
    /**
     * Output only. Display name of the owner of artifacts generated in this conference. The expected use of this in clients is to present info like "This recording will be sent to John Doe's Drive". This field can be empty if preferred display name determination fails for any reason.
     */
    artifactOwner?: Schema$UserDisplayInfo;
    /**
     * Output only. Documents attached to an ongoing conference.
     */
    attachedDocuments?: Schema$DocumentInfo[];
    /**
     * List of available access types of the conference.
     */
    availableAccessTypes?: string[] | null;
    /**
     * Output only. The set of reactions that clients are allowed to send and can expect to receive. Note that a device in the conference should have the MAY_SEND_REACTIONS privilege to be able to send reactions.
     */
    availableReactions?: Schema$ReactionInfo[];
    /**
     * Information about active broadcast session in the ongoing conference.
     */
    broadcastSessionInfo?: Schema$BroadcastSessionInfo;
    /**
     * Output only. The calendar event ID of a Google Calendar event that the meeting space is associated with. If the meeting space is not associated with an event in Google Calendar, this field is empty. For recurring events, it refers to the recurring instance associated with the current call, as determined by the server.
     */
    calendarEventId?: string | null;
    /**
     * The current co-activity session, or unset if there is none in progress. A co-activity session can be initiated by devices in JOINED state . Initiator of the co-activity is expected to populate this field to start the session. Once clients detect that the co-activity has finished, any JOINED device can clear this field to end the co-activity session. In the case of switching activities, the initiator of the new activity merely needs to override this with the new co-activity data, and all connected clients are expected to handle the transition gracefully.
     */
    coActivity?: Schema$CoActivity;
    /**
     * The current collaboration session, or unset if no collaboration is in progress.
     */
    collaboration?: Schema$Collaboration;
    /**
     * CSE information for the ongoing conference.
     */
    cseInfo?: Schema$CseInfo;
    /**
     * Output only. The maximum number of devices that may be in the joined state simultaneously in this conference. This can be used by clients to guess whether it will be possible to join, but the only way to know is to try to join. It can also be used to inform users about the limit that is in effect. This limit is normally set when the conference is created and not changed during the lifetime of the conference. But there are some cases where it may change, so clients should be aware that the information may be stale.
     */
    maxJoinedDevices?: number | null;
    /**
     * Output only. The name or description of the organization or domain that the organizer belongs to. The expected use of this in clients is to present messages like "John Doe (outside of Google.com) is trying to join this call", where "Google.com" is the organization name. The field will be empty if the organization name could not be determined, possibly because of a backend error.
     */
    organizationName?: string | null;
    /**
     * Paygate information to clients.
     */
    paygateInfo?: Schema$PaygateInfo;
    /**
     * The current presenter in the call, or unset if there is no current presenter. Clients can set this to change the presenter.
     */
    presenter?: Schema$Presenter;
    /**
     * Deprecated, use RecordingSessionInfo instead. Info about recording for this conference. This will always be set in server responses, with a valid recording status. This is superseded by streaming_sessions field, which contains the same information about this recording as well as additional information about other application type at the same time. This will be deprecated and removed at some point.
     */
    recordingInfo?: Schema$RecordingInfo;
    /**
     * Information about active recording session in the ongoing conference.
     */
    recordingSessionInfo?: Schema$RecordingSessionInfo;
    /**
     * Settings of the ongoing conference.
     */
    settings?: Schema$CallSettings;
    /**
     * Output only. Info about streaming sessions (recording or broadcast) for this conference. This should contain all active sessions. Currently, it's guaranteed to have at most one recording and at most one broadcast (at most two sessions in total). For each application type (recording or broadcast), latest inactive session is included if there's no active one.
     */
    streamingSessions?: Schema$StreamingSessionInfo[];
    /**
     * Information about active transcription session in the ongoing conference.
     */
    transcriptionSessionInfo?: Schema$TranscriptionSessionInfo;
    /**
     * The number of devices viewing the conference - MeetingDevices that are in VIEWER role and JOINED state in the conference.
     */
    viewerCount?: number | null;
    /**
     * Information about active YouTube broadcast sessions in the ongoing conference.
     */
    youTubeBroadcastSessionInfos?: Schema$YouTubeBroadcastSessionInfo[];
  }
  /**
   * Effective settings of the ongoing conference.
   */
  export interface Schema$CallSettings {
    /**
     * Indicates whether the access lock is currently on or off.
     */
    accessLock?: boolean | null;
    /**
     * The current access type of the conference.
     */
    accessType?: string | null;
    /**
     * Whether users can join this conference before a host (Host or Cohost).
     */
    allowJoiningBeforeHost?: boolean | null;
    /**
     * Indicates whether the attendance report is currently enabled or disabled.
     */
    attendanceReportEnabled?: boolean | null;
    /**
     * Indicates whether the audio lock is currently on or off.
     */
    audioLock?: boolean | null;
    /**
     * Indicates whether the chat lock is currently on or off.
     */
    chatLock?: boolean | null;
    /**
     * Whether Client-side Encryption is enabled for this conference.
     */
    cseEnabled?: boolean | null;
    /**
     * Indicates whether moderation is currently on or off.
     */
    moderationEnabled?: boolean | null;
    /**
     * Indicates whether the present lock is currently on or off.
     */
    presentLock?: boolean | null;
    /**
     * Indicates whether the reactions lock is currently on or off.
     */
    reactionsLock?: boolean | null;
    /**
     * Indicates whether the video lock is currently on or off.
     */
    videoLock?: boolean | null;
  }
  /**
   * Represents a principal which possesses a particular secret string whose cryptographic hash is specified here. CapTokens ("Capability Tokens") are used in ACLProto. It's expected that ACLs with CapTokenHolders will strongly enforce them by Keystore-wrapping crypto keys for the corresponding CapTokens.
   */
  export interface Schema$CapTokenHolderProto {
    /**
     * The hash of the corresponding capability token. The value is defined to be identical to the one in acl.proto's CapTokenMetadata: 10-byte prefix of HMAC-SHA1 of the token. The HMAC key is the following fixed (non-secret) 512-bit value: 79b1c8f4 82baf523 b8a9ab4a e960f438 c45be041 11f1f222 e8a3f64d aeb05e3d c3576acc ec649194 aede422c 4e48e0d1 ff21234a a6ed6b49 a7fa592e efd7bba3
     */
    tokenHmacSha1Prefix?: string | null;
  }
  export interface Schema$Card {
    cardActions?: Schema$CardAction[];
    displayStyle?: string | null;
    fixedFooter?: Schema$FixedFooter;
    header?: Schema$CardHeader;
    /**
     * Name of the card used in CardNavigation.pop_to_card_name.
     */
    name?: string | null;
    /**
     * When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
     */
    peekCardHeader?: Schema$CardHeader;
    sections?: Schema$Section[];
  }
  /**
   * When an AddOn Card is shown in detailed view, a card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.
   */
  export interface Schema$CardAction {
    /**
     * The label used to be displayed in the action menu item.
     */
    actionLabel?: string | null;
    onClick?: Schema$OnClick;
  }
  export interface Schema$CardCapabilityMetadata {
    /**
     * NEXT TAG : 2
     */
    requiredCapabilities?: string[] | null;
  }
  export interface Schema$CardHeader {
    /**
     * The alternative text of this image which will be used for accessibility.
     */
    imageAltText?: string | null;
    imageStyle?: string | null;
    imageUrl?: string | null;
    subtitle?: string | null;
    /**
     * The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines. The header is rendered in collapsed and detailed view.
     */
    title?: string | null;
  }
  export interface Schema$CaribouAttributeValue {
    /**
     * Tags 1 through 15 are reserved for the most commonly used fields.
     */
    booleanValue?: boolean | null;
    intValue?: number | null;
    longValue?: string | null;
    /**
     * Generally, applications should avoid storing raw bytes and instead store structured data as protocol buffer extensions. This both reduces the amount of ad-hoc attribute parsing code as well as eliminates an intermediate copy of the data when deserializing the value. The rawByteValue field is mainly provided for compatibility with attributes stored before the introduction of the Attribute.Value.
     */
    rawByteValue?: string | null;
    stringValue?: string | null;
  }
  /**
   * Actions handled by Chat Clients.
   */
  export interface Schema$ChatClientActionMarkup {}
  /**
   * Metadata used as inputs to the localization that is performed on Dynamite-originated messages that are incompatible with Hangouts clients. See go/localization-of-system-messages for more details.
   */
  export interface Schema$ChatConserverDynamitePlaceholderMetadata {
    attachmentMetadata?: Schema$ChatConserverDynamitePlaceholderMetadataAttachmentMetadata;
    botMessageMetadata?: Schema$ChatConserverDynamitePlaceholderMetadataBotMessageMetadata;
    calendarEventMetadata?: Schema$ChatConserverDynamitePlaceholderMetadataCalendarEventMetadata;
    deleteMetadata?: Schema$ChatConserverDynamitePlaceholderMetadataDeleteMetadata;
    editMetadata?: Schema$ChatConserverDynamitePlaceholderMetadataEditMetadata;
    /**
     * The space URL embedded in the localized string.
     */
    spaceUrl?: string | null;
    tasksMetadata?: Schema$ChatConserverDynamitePlaceholderMetadataTasksMetadata;
    videoCallMetadata?: Schema$ChatConserverDynamitePlaceholderMetadataVideoCallMetadata;
  }
  /**
   * An attachment uploaded in Dynamite and its filename.
   */
  export interface Schema$ChatConserverDynamitePlaceholderMetadataAttachmentMetadata {
    filename?: string | null;
  }
  /**
   * A bot sent a message in Dynamite.
   */
  export interface Schema$ChatConserverDynamitePlaceholderMetadataBotMessageMetadata {}
  /**
   * A Calendar event message in Dynamite.
   */
  export interface Schema$ChatConserverDynamitePlaceholderMetadataCalendarEventMetadata {}
  /**
   * A message was deleted in Dynamite.
   */
  export interface Schema$ChatConserverDynamitePlaceholderMetadataDeleteMetadata {}
  /**
   * An edit was made in Dynamite.
   */
  export interface Schema$ChatConserverDynamitePlaceholderMetadataEditMetadata {}
  /**
   * A Tasks message in Dynamite.
   */
  export interface Schema$ChatConserverDynamitePlaceholderMetadataTasksMetadata {}
  /**
   * A Meet initiated in Dynamite and its URL.
   */
  export interface Schema$ChatConserverDynamitePlaceholderMetadataVideoCallMetadata {
    meetingUrl?: string | null;
  }
  /**
   * The content of a chat message, which includes 0 or more segments along with 0 or more embeds, which represent various attachment types (like photos).
   */
  export interface Schema$ChatConserverMessageContent {
    /**
     * Items attached to this message, such as photos. This should *NOT* be set by clients. It will be automatically set from media uploaded along with this request and using the information provided in existing_media.
     */
    attachment?: Schema$SocialCommonAttachmentAttachment[];
    /**
     * The text part of the message content. Segments are concatenated together to yield the full message. A message can have zero or more segments.
     */
    segment?: Schema$Segment[];
  }
  /**
   * NEXT ID: 12
   */
  export interface Schema$ChatContentExtension {
    /**
     * Annotations to decorate this event.
     */
    annotation?: Schema$EventAnnotation[];
    /**
     * This metadata informs how the placeholder string will be localized dynamically in Hangouts. See go/localization-of-system-messages. This is only used as part of REGULAR_CHAT_MESSAGE events.
     */
    dynamitePlaceholderMetadata?: Schema$ChatConserverDynamitePlaceholderMetadata;
    /**
     * Is this event OnTR or OffTR? Since some events can be ON_THE_RECORD and have an expiration_timestamp (for example enterprise retention users) we need to store the otr status.
     */
    eventOtrStatus?: string | null;
    /**
     * Group-link sharing toggle event.
     */
    groupLinkSharingModificationEvent?: Schema$GroupLinkSharingModificationEvent;
    /**
     * Audio/video Hangout event.
     */
    hangoutEvent?: Schema$HangoutEvent;
    /**
     * Invite accepted events. Note: this is only used ephemerally to sync to Gmail. No actual cent is stored in Papyrus.
     */
    inviteAcceptedEvent?: Schema$InviteAcceptedEvent;
    /**
     * Join/leave events.
     */
    membershipChangeEvent?: Schema$MembershipChangeEvent;
    /**
     * Metadata for off-the-record message.
     */
    otrChatMessageEvent?: Schema$OtrChatMessageEvent;
    otrModificationEvent?: Schema$OtrModificationEvent;
    renameEvent?: Schema$RenameEvent;
  }
  /**
   * Represents the invitees or other users associated with a Babel Chat (see http://goto/babel). Corresponds to GroupType CHAT in //social/graph/storage/proto/data.proto.
   */
  export interface Schema$ChatProto {
    /**
     * Chat IDs consist of alphanumeric characters and colons. Currently required.
     */
    chatId?: string | null;
    /**
     * The type of Chat members to consider, e.g. "all members" vs. "invitee" These are defined by legacy_relation_id values in social.graph.storage.EdgeTypeEnum.EdgeType enum options in social/graph/storage/proto/id.proto. See chat.pb (defined in production/config/cdd/socialgraph/mixer_config/prod/node_type_config) for all valid edge types associated with chat. Currently required.
     */
    memberType?: number | null;
  }
  export interface Schema$CheckAccessResponse {
    /**
     * Returns true if principal has access. Returns false otherwise.
     */
    hasAccess?: boolean | null;
  }
  /**
   * Represents a Google+ Circle. Currently (12/2011), a Circle is identical to the ContactGroup with matching parameters, but Circle must only be used for true Circles and not other Focus groups, and should be preferred over ContactGroup where applicable. Soon it may become more efficient to check membership in a Circle than in a ContactGroup (see http://go/superglue). Support for this principal type is currently (12/2011) incomplete -- e.g., Keystore does not support it yet (see b/5703421).
   */
  export interface Schema$CircleProto {
    /**
     * Circle ID is unique only relative to the owner's Gaia ID. Currently required.
     */
    circleId?: string | null;
    /**
     * The owner of the circle. Currently required.
     */
    ownerGaiaId?: string | null;
    /**
     * If present, then tests for membership in this circle must use data known to be at least as fresh as the given (FBS-assigned) timestamp. See http://go/fbs-consistent-read-after-important-write Before using this, be sure that any service checking authorization against this circle supports checking consistency timestamps. For example, as of 12/2011, Keystore only supports this for the Moonshine configuration, and in others authorization checks will fail if the timestamp is present.
     */
    requiredConsistencyTimestampUsec?: string | null;
  }
  /**
   * Represents the context of the client on behalf of which a HistoryRecord is produced. The ClientContext message can be used to hold context about the service client (e.g. the internal server making fusebox requests) or the user client (e.g. the IP address of the end user).
   */
  export interface Schema$ClientContext {
    /**
     * The client operation to which this history record belongs. The notion of a client operation is provided to keep track of client operations which might span multiple transactions in the lower level.
     */
    clientOperationId?: string | null;
    /**
     * E.g. "pinto", "imap", "bigtop", "upload"
     */
    clientType?: string | null;
    /**
     * Contains information about the session which created this history record. This will be empty if the history record was generated by an internal request.
     */
    sessionContext?: Schema$SessionContext;
    /**
     * Textual representation of the user's IP address, if available.
     */
    userIp?: string | null;
  }
  /**
   * Principal associated with a Cloud Principal representing third party user.
   */
  export interface Schema$CloudPrincipalProto {
    /**
     * Format: "{identity-pool\}:{subject\}#" Details: go/cloud-principal-identifiers
     */
    id?: string | null;
  }
  /**
   * ClusterInfo contains clustering related information for a particular thread that would be sent as part of the conversation view. Today, this information would be used by iOS notification server to identify whether the thread belongs to a cluster. If the thread belongs to a grouped cluster, it would identify whether the cluster is throttled.
   */
  export interface Schema$ClusterInfo {
    /**
     * IDs of the highest priority clusters to which the thread belongs to. If this field is not present, the thread does not belong to any cluster and would be shown in the inbox, unclustered.
     */
    clusterId?: string[] | null;
    /**
     * If the thread belongs to a grouped cluster and all of those clusters are throttled, then this field is set to true.
     */
    throttled?: boolean | null;
  }
  /**
   * Metadata about a co-activity session.
   */
  export interface Schema$CoActivity {
    /**
     * The title of the activity in this co-activity session. For example, this might be the title of the video being co-watched, or the name of the round of a game being co-played.
     */
    activityTitle?: string | null;
    /**
     * Identifies the app handling this co-activity.
     */
    coActivityApp?: string | null;
  }
  /**
   * Information about a collaboration session.
   */
  export interface Schema$Collaboration {
    /**
     * The attachment being collaborated on.
     */
    attachmentId?: string | null;
    /**
     * Display info of the user who initiated the collaboration session.
     */
    initiator?: Schema$UserDisplayInfo;
    /**
     * The uri of the artifact being collaborated on.
     */
    uri?: string | null;
  }
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
   */
  export interface Schema$Color {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
     */
    alpha?: number | null;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
  /**
   * An individual instance (or "tag") of a label configured as a communal type that's associated with a message.
   */
  export interface Schema$CommunalLabelTag {
    /**
     * Gaia ID of the user who added the tag, if any. Not present for any tags automatically created by server-side processing.
     */
    creatorUserId?: string | null;
    /**
     * A string ID representing the label. Possible ID values are documented at go/chat-labels-howto:ids. Example: "^*t_p" for "Pinned".
     */
    labelId?: string | null;
  }
  export interface Schema$CompositeFilter {
    /**
     * The logic operator of the sub filter.
     */
    logicOperator?: string | null;
    /**
     * Sub filters.
     */
    subFilters?: Schema$Filter[];
  }
  /**
   * Annotation metadata app unfurl consent.
   */
  export interface Schema$ConsentedAppUnfurlMetadata {
    /**
     * Client specified AppId, which will not be sanitized and is untrusted.
     */
    clientSpecifiedAppId?: Schema$UserId;
  }
  /**
   * A group of contacts for a given user, as described in http://cs/p#google3/focus/backend/proto/backend.proto Historically (and in still-existing ACLs), this was used to represent Google+ circles as well as contact groups, but this use is now deprecated. New code should use the CIRCLE principal type to represent Google+ circles.
   */
  export interface Schema$ContactGroupProto {
    /**
     * Group ID is unique only relative to the owner's Gaia ID.
     */
    groupId?: string | null;
    ownerGaiaId?: string | null;
    /**
     * If present, then tests for membership in this ContactGroup must use data known to be at least as fresh as the given (FBS-assigned) timestamp. See http://go/fbs-consistent-read-after-important-write Before using this, be sure that any service checking authorization against this group supports checking consistency timestamps. For example, as of 12/2011, Keystore only supports this for the Moonshine configuration, and in others authorization checks will fail if the timestamp is present.
     */
    requiredConsistencyTimestampUsec?: string | null;
  }
  export interface Schema$ContentReport {
    /**
     * The time at which the report is generated. Always populated when it is in a response.
     */
    reportCreateTimestamp?: string | null;
    /**
     * User ID of the reporter. Always populated when it is in a response.
     */
    reporterUserId?: Schema$UserId;
    /**
     * Additional user-provided justification on the report. Optional.
     */
    reportJustification?: Schema$ContentReportJustification;
    /**
     * Type of the report. Always populated when it is in a response.
     */
    reportType?: Schema$AppsDynamiteSharedContentReportType;
    /**
     * Create timestamp of the revisions of the message when it's reported. Always populated when it is in a response.
     */
    revisionCreateTimestamp?: string | null;
  }
  export interface Schema$ContentReportJustification {
    /**
     * Optional. User-generated free-text justification for the content report.
     */
    userJustification?: string | null;
  }
  /**
   * Summarized info of content reports. Usually less expensive to fetch than to fetch all detailed reports. Set only when the request asks for it.
   */
  export interface Schema$ContentReportSummary {
    /**
     * Total number of reports attached to this (revision of) message.
     */
    numberReports?: number | null;
    /**
     * Totoal number of reports attached to all revisions of this message (i.e. since creation). Set only when the request asks for it.
     */
    numberReportsAllRevisions?: number | null;
  }
  /**
   * A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.
   */
  export interface Schema$ContextAttribute {
    /**
     * The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched.
     */
    name?: string | null;
    /**
     * Text values of the attribute. The maximum number of elements is 10. The maximum length of an element in the array is 32 characters. The value will be normalized (lower-cased) before being matched.
     */
    values?: string[] | null;
  }
  /**
   * The markup for developers to specify the contents of a contextual AddOn. A contextual AddOn is triggered in context of an email. For that email, there can be N items that are associated with the email (e.g. contacts, sales lead, meeting information). Each item is represented as a "card". A card has two views, collapsed and detailed. If there are more than 1 card, the cards are show as a list of collapsed views. The end user can expand into the detailed view for each of those cards. In the detailed view, developers have the freedom to use a variety of "widgets" to construct it. The model here is to restrict (make consistent for end users) the navigation of the N cards but providing developers the freedom to build the detailed view that can best represent their use case/content. Go http://go/aoig-widgets1 to see the mocks. Post v1, we plan to support new AddOn use cases that will require different and separate 'templates'. For example, a compose triggered AddOn which will support a new set of use cases with different user interaction patterns. As a result, we will likely need a very different template than this one.
   */
  export interface Schema$ContextualAddOnMarkup {
    /**
     * A card must contain a header and at least 1 section.
     */
    cards?: Schema$Card[];
    /**
     * Deprecated.
     */
    toolbar?: Schema$Toolbar;
  }
  /**
   * Information needed for Client-side Encryption.
   */
  export interface Schema$CseInfo {
    /**
     * CSE domain name claimed by the meeting owner's company. This field is expected to be used for display purposes only, i.e., "Extra encryption added by $cse_domain". It can differ from the `cse_domain` as defined elsewhere on the User, in the case of cross-domain meetings.
     */
    cseDomain?: string | null;
    /**
     * The wrapped CSE key used by this conference.
     */
    wrappedKey?: string | null;
  }
  export interface Schema$CustomEmojiMetadata {
    customEmoji?: Schema$AppsDynamiteSharedCustomEmoji;
  }
  /**
   * Represents a GSuite customer ID. Obfuscated with CustomerIdObfuscator.
   */
  export interface Schema$CustomerId {
    customerId?: string | null;
  }
  /**
   * Aggregation of items by status code as of the specified date.
   */
  export interface Schema$CustomerIndexStats {
    /**
     * The date for which statistics were calculated.
     */
    date?: Schema$Date;
    /**
     * Number of items aggregrated by status code.
     */
    itemCountByStatus?: Schema$ItemCountByStatus[];
  }
  export interface Schema$CustomerQueryStats {
    /**
     * The date for which query stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    queryCountByStatus?: Schema$QueryCountByStatus[];
  }
  /**
   * Search application stats for a customer for the given date.
   */
  export interface Schema$CustomerSearchApplicationStats {
    /**
     * The count of search applications for the date.
     */
    count?: string | null;
    /**
     * The date for which search application stats were calculated.
     */
    date?: Schema$Date;
  }
  export interface Schema$CustomerSessionStats {
    /**
     * The date for which session stats were calculated. Stats are calculated on the following day, close to midnight PST, and then returned.
     */
    date?: Schema$Date;
    /**
     * The count of search sessions on the day
     */
    searchSessionsCount?: string | null;
  }
  /**
   * Represents settings at a customer level.
   */
  export interface Schema$CustomerSettings {
    /**
     * Audit Logging settings for the customer. If update_mask is empty then this field will be updated based on UpdateCustomerSettings request.
     */
    auditLoggingSettings?: Schema$AuditLoggingSettings;
    /**
     * VPC SC settings for the customer. If update_mask is empty then this field will be updated based on UpdateCustomerSettings request.
     */
    vpcSettings?: Schema$VPCSettings;
  }
  export interface Schema$CustomerUserStats {
    /**
     * The date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    /**
     * The count of unique active users in the past one day
     */
    oneDayActiveUsersCount?: string | null;
    /**
     * The count of unique active users in the past seven days
     */
    sevenDaysActiveUsersCount?: string | null;
    /**
     * The count of unique active users in the past thirty days
     */
    thirtyDaysActiveUsersCount?: string | null;
  }
  /**
   * The result of a user running a custom function.
   */
  export interface Schema$CustomFunctionReturnValueMarkup {
    /**
     * The error message to show to the user if something went wrong.
     */
    errorMessage?: string | null;
    /**
     * The value that resulted from running the custom function.
     */
    value?: any | null;
  }
  /**
   * Annotation metadata for Data Loss Prevention that pertains to DLP violation on message send or edit events. It is used for client -\> BE communication and other downstream process in BE (e.g. storage and audit logging), and it should never be returned to the client.
   */
  export interface Schema$DataLossPreventionMetadata {
    /**
     * The DLP scan summary that should only be set after the message is scanned in the Chat backend.
     */
    dlpScanSummary?: Schema$DlpScanSummary;
    /**
     * Flag set by client on message resend to bypass WARN violation.
     */
    warnAcknowledged?: boolean | null;
  }
  /**
   * Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
   */
  export interface Schema$DataSource {
    /**
     * If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data.
     */
    disableModifications?: boolean | null;
    /**
     * Disable serving any search or assist results.
     */
    disableServing?: boolean | null;
    /**
     * Required. Display name of the datasource The maximum length is 300 characters.
     */
    displayName?: string | null;
    /**
     * List of service accounts that have indexing access.
     */
    indexingServiceAccounts?: string[] | null;
    /**
     * This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility.
     */
    itemsVisibility?: Schema$GSuitePrincipal[];
    /**
     * The name of the datasource resource. Format: datasources/{source_id\}. The name is ignored when creating a datasource.
     */
    name?: string | null;
    /**
     * IDs of the Long Running Operations (LROs) currently running for this schema.
     */
    operationIds?: string[] | null;
    /**
     * Can a user request to get thumbnail URI for Items indexed in this data source.
     */
    returnThumbnailUrls?: boolean | null;
    /**
     * A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is *<value\>* then queries like *source:<value\>* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters.
     */
    shortName?: string | null;
  }
  /**
   * Aggregation of items by status code as of the specified date.
   */
  export interface Schema$DataSourceIndexStats {
    /**
     * The date for which index stats were calculated. If the date of request is not the current date then stats calculated on the next day are returned. Stats are calculated close to mid night in this case. If date of request is current date, then real time stats are returned.
     */
    date?: Schema$Date;
    /**
     * Number of items aggregrated by status code.
     */
    itemCountByStatus?: Schema$ItemCountByStatus[];
  }
  /**
   * Restriction on Datasource.
   */
  export interface Schema$DataSourceRestriction {
    /**
     * Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively. The maximum number of elements is 20. NOTE: Suggest API supports only few filters at the moment: "objecttype", "type" and "mimetype". For now, schema specific filters cannot be used to filter suggestions.
     */
    filterOptions?: Schema$FilterOptions[];
    /**
     * The source of restriction.
     */
    source?: Schema$Source;
  }
  /**
   * Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    day?: number | null;
    /**
     * Month of date. Must be from 1 to 12.
     */
    month?: number | null;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    year?: number | null;
  }
  /**
   * Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$DateOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the date property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value\>* show results only where the value of the property named *closeDate* is later than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    greaterThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the date property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value\>* show results only where the value of the property named *closeDate* is earlier than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    lessThanOperatorName?: string | null;
    /**
     * Indicates the actual string required in the query in order to isolate the date property. For example, suppose an issue tracking schema object has a property named *closeDate* that specifies an operator with an operatorName of *closedon*. For searches on that data, queries like *closedon:<value\>* show results only where the value of the *closeDate* property matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the indexed datasource. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * The options for date properties.
   */
  export interface Schema$DatePropertyOptions {
    /**
     * If set, describes how the date should be used as a search operator.
     */
    operatorOptions?: Schema$DateOperatorOptions;
  }
  export interface Schema$DateTimePicker {
    /**
     * The label for the field, which is displayed to the user.
     */
    label?: string | null;
    /**
     * The name of the text field which is used in FormInput, and uniquely identifies this input.
     */
    name?: string | null;
    /**
     * Triggered when the user clicks on the Save, or Clear button from the date / time picker dialog. Will only be triggered if the value changed as a result of the Save / Clear operation.
     */
    onChange?: Schema$FormAction;
    /**
     * The number representing the time-zone offset from UTC, in minutes. If set, the value_ms_epoch will be displayed in the specified time zone. If not set, it will use the user's timezone setting in client side.
     */
    timezoneOffsetDate?: number | null;
    /**
     * The type of the DateTimePicker.
     */
    type?: string | null;
    /**
     * The value to display which can be the default value before user input or previous user input. It is represented in milliseconds (Epoch time). - For DATE_AND_TIME type, the full epoch value is used. - For DATE_ONLY type, only date of the epoch time is used. - For TIME_ONLY type, only time of the epoch time is used. For example, you can set epoch time to 3 * 60 * 60 * 1000 to represent 3am.
     */
    valueMsEpoch?: string | null;
  }
  /**
   * List of date values.
   */
  export interface Schema$DateValues {
    values?: Schema$Date[];
  }
  /**
   * Shared request debug options for all cloudsearch RPC methods.
   */
  export interface Schema$DebugOptions {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    enableDebugging?: boolean | null;
  }
  /**
   * Deep-linking data is used to construct a deep-link URI for an activity or frame's embed, such that on click, the user is taken to the right place in a mobile app. If the app is not installed, the user is taken to the app store. If not on mobile, an analogous web uri is used.
   */
  export interface Schema$DeepLinkData {
    /**
     * Application ID (or project ID) from Google API Console.
     */
    appId?: string | null;
    /**
     * The data for a Google API Console client is entered by a developer during client registration and is stored in PackagingService.
     */
    client?: Schema$PackagingServiceClient[];
    /**
     * The ID for non-URL content. Embeds may either have no analogous web presence or prefer a native mobile experience if supported. In the case of no web presence, instead of setting the "url" field of an embed, such developers will set this field and other content fields, e.g. thumbnail, title, description. If set, this field is used to construct the deep-link URI. Note that the native experience is preferred over the web link and the web link is used as a fallback.
     */
    deepLinkId?: string | null;
    /**
     * Analogous web presence. Used as desktop fallback or when no native link data is present.
     */
    url?: string | null;
  }
  /**
   * A message delete in Dynamite inserts a Babel-only item containing this field. This is only inserted for messages before the source-of-truth flip. See go/hsc-message-deletions for more details.
   */
  export interface Schema$DeleteMetadata {}
  export interface Schema$DeleteQueueItemsRequest {
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * The name of a queue to delete items from.
     */
    queue?: string | null;
  }
  export interface Schema$DeliveryMedium {
    /**
     * Describes the medium the cent was sent/received. For example, if I receive an SMS via GV, the medium_type will be GV.
     */
    mediumType?: string | null;
    /**
     * In the case of multiple GV/native numbers, this defines the exact number to send from. It is used to differentiate mediums that have the same type, but different addresses (e.g. two android phones).
     */
    selfPhone?: Schema$VoicePhoneNumber;
  }
  /**
   * A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown.
   */
  export interface Schema$DisplayedProperty {
    /**
     * The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema.
     */
    propertyName?: string | null;
  }
  export interface Schema$Divider {}
  /**
   * A summary of a DLP scan event. This is a summary and should contain the minimum amount of data required to identify and process DLP scans. It is written to Starcast and encoded & returned to the client on attachment upload.
   */
  export interface Schema$DlpScanSummary {
    /**
     * The scan ID of the corresponding {@link DlpViolationScanRecord\} in the {@link EphemeralDlpScans\} Spanner table. This can be used to fetch additional details about the scan, e.g. for audit logging.
     */
    scanId?: string | null;
    /**
     * Indicates that was no attempt to scan a message or attachment because it was not applicable in the given context (e.g. atomic mutuate). If this is true, scan_outcome should not be set. This flag is used to identify messages that DLP did not attempt to scan for monitoring scan coverage. Contents that DLP attempted to scan but skipped can be identified by DlpScanOutcome.SCAN_SKIPPED_* reasons.
     */
    scanNotApplicableForContext?: boolean | null;
    /**
     * The outcome of a DLP Scan. If this is set, scan_not_applicable_for_context should not be true.
     */
    scanOutcome?: string | null;
  }
  export interface Schema$DmId {
    /**
     * Unique server assigned Id, per Direct Message Space.
     */
    dmId?: string | null;
  }
  /**
   * Information on a document attached to an active conference.
   */
  export interface Schema$DocumentInfo {
    /**
     * A whiteboard document.
     */
    whiteboardInfo?: Schema$WhiteboardInfo;
  }
  /**
   * Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$DoubleOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * The options for double properties.
   */
  export interface Schema$DoublePropertyOptions {
    /**
     * If set, describes how the double should be used as a search operator.
     */
    operatorOptions?: Schema$DoubleOperatorOptions;
  }
  /**
   * List of double values.
   */
  export interface Schema$DoubleValues {
    values?: number[] | null;
  }
  export interface Schema$DriveClientActionMarkup {
    requestFileScope?: Schema$RequestFileScope;
  }
  /**
   * Drive follow-up search restricts (e.g. "followup:suggestions").
   */
  export interface Schema$DriveFollowUpRestrict {
    type?: string | null;
  }
  /**
   * Drive location search restricts (e.g. "is:starred").
   */
  export interface Schema$DriveLocationRestrict {
    type?: string | null;
  }
  /**
   * Annotation metadata for Drive artifacts.
   */
  export interface Schema$DriveMetadata {
    aclFixRequest?: Schema$AclFixRequest;
    aclFixStatus?: Schema$AclFixStatus;
    /**
     * Can the current user edit this resource
     */
    canEdit?: boolean | null;
    /**
     * Can the current user share this resource
     */
    canShare?: boolean | null;
    /**
     * Can the current user view this resource
     */
    canView?: boolean | null;
    /**
     * DriveAction for organizing this file in Drive. If the user does not have access to the Drive file, the value will be DriveAction.DRIVE_ACTION_UNSPECIFIED. This field is only set when part of a FileResult in a ListFilesResponse.
     */
    driveAction?: string | null;
    driveState?: string | null;
    /**
     * Output only. Trusted Resource URL for drive file embedding.
     */
    embedUrl?: Schema$TrustedResourceUrlProto;
    /**
     * Indicates whether the Drive link contains an encrypted doc ID. If true, Dynamite should not attempt to query the doc ID in Drive Service. See go/docid-encryption for details.
     */
    encryptedDocId?: boolean | null;
    /**
     * This is deprecated and unneeded. TODO (b/182479059): Remove this.
     */
    encryptedResourceKey?: string | null;
    /**
     * External mimetype of the Drive Resource (Useful for creating Drive URL) See: http://b/35219462
     */
    externalMimetype?: string | null;
    /**
     * Drive resource ID of the artifact.
     */
    id?: string | null;
    /**
     * Deprecated. Whether the setting to restrict downloads is enabled for this file. This was previously used to determine whether to hide the download and print buttons in the UI, but is no longer used by clients, because Projector now independently queries Drive to ensure that we have the most up-to-date value.
     */
    isDownloadRestricted?: boolean | null;
    /**
     * If the current user is the Drive file's owner. The field is currently only set for Annotations for the ListFiles action (as opposed to fetching Topics/Messages with Drive annotations).
     */
    isOwner?: boolean | null;
    /**
     * Only present if this DriveMetadata is converted from an UploadMetadata.
     */
    legacyUploadMetadata?: Schema$LegacyUploadMetadata;
    /**
     * Mimetype of the Drive Resource
     */
    mimetype?: string | null;
    /**
     * The display name of the organization owning the Drive item.
     */
    organizationDisplayName?: string | null;
    /**
     * Shortcut ID of this drive file in the shared drive, which is associated with a named room this file was shared in. Shortcuts will not be created for DMs or unnamed rooms. This is populated after the DriveMetadata is migrated to shared drive. go/chat-shared-drive-uploads.
     */
    shortcutAuthorizedItemId?: Schema$AuthorizedItemId;
    /**
     * If this field is set to true, server should still contact external backends to get metadata for search but clients should not render this chip.
     */
    shouldNotRender?: boolean | null;
    /**
     * Thumbnail image of the Drive Resource
     */
    thumbnailHeight?: number | null;
    /**
     * Thumbnail image of the Drive Resource
     */
    thumbnailUrl?: string | null;
    /**
     * Thumbnail image of the Drive Resource
     */
    thumbnailWidth?: number | null;
    /**
     * Title of the Drive Resource
     */
    title?: string | null;
    /**
     * Url string fragment that generally indicates the specific location in the linked file. Example: #header=h.123abc456. If the fragment is not present this will not be present and therefore default to an empty string. The "#" will not be included.
     */
    urlFragment?: string | null;
    /**
     * This is considered SPII and should not be logged.
     */
    wrappedResourceKey?: Schema$WrappedResourceKey;
  }
  /**
   * Drive mime-type search restricts (e.g. "type:pdf").
   */
  export interface Schema$DriveMimeTypeRestrict {
    type?: string | null;
  }
  /**
   * The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12").
   */
  export interface Schema$DriveTimeSpanRestrict {
    type?: string | null;
  }
  /**
   * This is the proto for holding message level scoring information. This data is used for logging in query-api server and for testing purposes.
   */
  export interface Schema$DynamiteMessagesScoringInfo {
    commonContactCount?: string | null;
    commonCountToContactListCountRatio?: number | null;
    commonCountToMembershipCountRatio?: number | null;
    creatorGaiaId?: string | null;
    creatorInSearcherContactList?: boolean | null;
    dasContactCount?: string | null;
    finalScore?: number | null;
    freshnessScore?: number | null;
    joinedSpaceAffinityScore?: number | null;
    lastReadTimestampAgeInDays?: number | null;
    messageAgeInDays?: number | null;
    messageSenderAffinityScore?: number | null;
    spaceId?: string | null;
    spaceMembershipCount?: string | null;
    topicalityScore?: number | null;
    unjoinedSpaceAffinityScore?: number | null;
  }
  /**
   * This is the proto for holding space level scoring information. This data is used for logging in query-api server and for testing purposes.
   */
  export interface Schema$DynamiteSpacesScoringInfo {
    affinityScore?: number | null;
    commonContactCountAffinityScore?: number | null;
    contactsIntersectionCount?: number | null;
    finalScore?: number | null;
    freshnessScore?: number | null;
    joinedSpacesAffinityScore?: number | null;
    lastMessagePostedTimestampSecs?: string | null;
    lastReadTimestampSecs?: string | null;
    memberMetadataCount?: number | null;
    messageScore?: number | null;
    numAucContacts?: string | null;
    smallContactListAffinityScore?: number | null;
    smallUnjoinedSpacesAffinityScore?: number | null;
    spaceAgeInDays?: number | null;
    spaceCreationTimestampSecs?: string | null;
    topicalityScore?: number | null;
  }
  /**
   * A message edit in Dynamite inserts a Babel-only item containing this field.
   */
  export interface Schema$EditMetadata {}
  export interface Schema$EditorClientActionMarkup {
    requestFileScopeForActiveDocument?: Schema$RequestFileScopeForActiveDocument;
  }
  /**
   * A person's email address.
   */
  export interface Schema$EmailAddress {
    /**
     * If the value of type is custom, this property contains the custom type string.
     */
    customType?: string | null;
    /**
     * The email address.
     */
    emailAddress?: string | null;
    /**
     * The URL to send email.
     */
    emailUrl?: string | null;
    /**
     * Indicates if this is the user's primary email. Only one entry can be marked as primary.
     */
    primary?: boolean | null;
    /**
     * The type of the email account. Acceptable values are: "custom", "home", "other", "work".
     */
    type?: string | null;
  }
  /**
   * Represents a verified owner of the given email address. Note that a single address may have many owners, and a single user may own many addresses. (All lower-case, in display form -- see com.google.gaia.client.GaiaEmail)
   */
  export interface Schema$EmailOwnerProto {
    email?: string | null;
  }
  /**
   * Represents an embedded object in an update. This is a wrapper class that can contain a single specific item proto in an extension field. Think of it as a base class like `Message` in Java. Each item proto must declare that it extends this proto: message ExampleObject { option (item_type) = EXAMPLE_OBJECT; extend EmbedClientItem { optional ExampleObject example_object = ; \} \} See go/es-embeds for details.
   */
  export interface Schema$EmbedClientItem {
    /**
     * The canonical ID of the embed. If absent, the canonical ID is equal to the ID; if present, then the canonical ID represents an "equivalence class" of embeds which really refer to the same object. (For example, the URLs http://www.foo.com/ and http://foo.com/ refer to the same object) This field may be updated periodically by background processes.
     */
    canonicalId?: string | null;
    /**
     * Deep-linking data to take the user to the right place in a mobile app. This is only used for preview and attribution. Links that are specific to a given embed type should live on that specific embed's proto by using Link. See http://goto.google.com/mariana-design.
     */
    deepLinkData?: Schema$DeepLinkData;
    /**
     * The ID of the embed. This corresponds to the schema.org ID, as represented in the ItemScope.id field.
     */
    id?: string | null;
    /**
     * The provenance of the embed, populated when the embed originated from a web fetch. The provenance captures information about the web page the embed had originated, like the URL that was retrieved and the retrieved URL's canonical form. This is useful in the case where the URL shared by the URL redirects (e.g., in the case of a shortened URL).
     */
    provenance?: Schema$Provenance;
    /**
     * The ID used to identify the embed during rendering. This field will match ID, if set, otherwise it will be the ID of the parent activity. This field is only populated on the server for client use and is not persisted to storage.
     */
    renderId?: string | null;
    /**
     * Signature of the embed, used for verification.
     */
    signature?: string | null;
    /**
     * Transient generic data that will not be saved on the server.
     */
    transientData?: Schema$TransientData;
    /**
     * The first value in `type` determines which extension field will be set. When creating an EmbedClientItem, you only need to set the first (primary) type in this field. When the server receives the item, it will populate the full type list using the parent annotations in the ItemType enum.
     */
    type?: string[] | null;
  }
  /**
   * Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.
   */
  export interface Schema$EnumOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value\>* show results only where the value of the property named *priorityVal* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.
   */
  export interface Schema$EnumPropertyOptions {
    /**
     * If set, describes how the enum should be used as a search operator.
     */
    operatorOptions?: Schema$EnumOperatorOptions;
    /**
     * Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if isRepeatable is false.
     */
    orderedRanking?: string | null;
    /**
     * The list of possible values for the enumeration property. All EnumValuePairs must provide a string value. If you specify an integer value for one EnumValuePair, then all possible EnumValuePairs must provide an integer value. Both the string value and integer value must be unique over all possible values. Once set, possible values cannot be removed or modified. If you supply an ordered ranking and think you might insert additional enum values in the future, leave gaps in the initial integer values to allow adding a value in between previously registered values. The maximum number of elements is 100.
     */
    possibleValues?: Schema$EnumValuePair[];
  }
  /**
   * The enumeration value pair defines two things: a required string value and an optional integer value. The string value defines the necessary query term required to retrieve that item, such as *p0* for a priority item. The integer value determines the ranking of that string value relative to other enumerated values for the same property. For example, you might associate *p0* with *0* and define another enum pair such as *p1* and *1*. You must use the integer value in combination with ordered ranking to set the ranking of a given value relative to other enumerated values for the same property name. Here, a ranking order of DESCENDING for *priority* properties results in a ranking boost for items indexed with a value of *p0* compared to items indexed with a value of *p1*. Without a specified ranking order, the integer value has no effect on item ranking.
   */
  export interface Schema$EnumValuePair {
    /**
     * The integer value of the EnumValuePair which must be non-negative. Optional.
     */
    integerValue?: number | null;
    /**
     * The string value of the EnumValuePair. The maximum length is 32 characters.
     */
    stringValue?: string | null;
  }
  /**
   * List of enum values.
   */
  export interface Schema$EnumValues {
    /**
     * The maximum allowable length for string values is 32 characters.
     */
    values?: string[] | null;
  }
  /**
   * Error information about the response.
   */
  export interface Schema$ErrorInfo {
    errorMessages?: Schema$ErrorMessage[];
  }
  /**
   * Error message per source response.
   */
  export interface Schema$ErrorMessage {
    errorMessage?: string | null;
    source?: Schema$Source;
  }
  export interface Schema$EventAnnotation {
    type?: number | null;
    value?: string | null;
  }
  /**
   * Represents the invitees or other users associated with a Google+ Event (see http://goto/events-backend-design).
   */
  export interface Schema$EventProto {
    /**
     * Event IDs consist of alphanumeric characters and colons. Currently required.
     */
    eventId?: string | null;
    /**
     * The type of Event members to consider, e.g. "all members" vs. "owners" vs. "admins". These are defined by legacy_relation_id values in social.graph.storage.EdgeTypeEnum.EdgeType enum options in social/graph/storage/proto/id.proto. See event.pb (defined in production/config/cdd/socialgraph/mixer_config/prod/node_type_config) for all valid edge types associated with event. Currently required.
     */
    memberType?: number | null;
  }
  /**
   * A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.
   */
  export interface Schema$FacetBucket {
    /**
     * Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Cloud Search does not guarantee facet counts for any query and facet counts might be present only intermittently, even for identical queries. Do not build dependencies on facet count existence; instead use facet ount percentages which are always returned.
     */
    count?: number | null;
    /**
     * Filter to be passed in the search request if the corresponding bucket is selected.
     */
    filter?: Schema$Filter;
    /**
     * Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts.
     */
    percentage?: number | null;
    value?: Schema$Value;
  }
  /**
   * Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
   */
  export interface Schema$FacetOptions {
    /**
     * If set, describes integer faceting options for the given integer property. The corresponding integer property in the schema should be marked isFacetable. The number of buckets returned would be minimum of this and num_facet_buckets.
     */
    integerFacetingOptions?: Schema$IntegerFacetingOptions;
    /**
     * Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100.
     */
    numFacetBuckets?: number | null;
    /**
     * If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets.
     */
    objectType?: string | null;
    /**
     * The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions
     */
    operatorName?: string | null;
    /**
     * Source name to facet on. Format: datasources/{source_id\} If empty, all data sources will be used.
     */
    sourceName?: string | null;
  }
  /**
   * Source specific facet response
   */
  export interface Schema$FacetResult {
    /**
     * FacetBuckets for values in response containing at least a single result with the corresponding filter.
     */
    buckets?: Schema$FacetBucket[];
    /**
     * Object type for which facet results are returned. Can be empty.
     */
    objectType?: string | null;
    /**
     * The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions
     */
    operatorName?: string | null;
    /**
     * Source name for which facet results are returned. Will not be empty.
     */
    sourceName?: string | null;
  }
  export interface Schema$FieldViolation {
    /**
     * The description of the error.
     */
    description?: string | null;
    /**
     * Path of field with violation.
     */
    field?: string | null;
  }
  /**
   * A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND.
   */
  export interface Schema$Filter {
    compositeFilter?: Schema$CompositeFilter;
    valueFilter?: Schema$ValueFilter;
  }
  /**
   * A filter was created.
   */
  export interface Schema$FilterCreated {}
  /**
   * A filter was deleted.
   */
  export interface Schema$FilterDeleted {}
  /**
   * Filter options to be applied on query.
   */
  export interface Schema$FilterOptions {
    /**
     * Generic filter to restrict the search, such as `lang:en`, `site:xyz`.
     */
    filter?: Schema$Filter;
    /**
     * If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters.
     */
    objectType?: string | null;
  }
  /**
   * HistoryRecord for changes associated with a filter, namely: FILTER_CREATED FILTER_DELETED
   */
  export interface Schema$FilterUpdate {
    filterCreated?: Schema$FilterCreated;
    filterDeleted?: Schema$FilterDeleted;
    filterId?: string | null;
  }
  /**
   * A persistent (sticky) footer that is added to the bottom of the card.
   */
  export interface Schema$FixedFooter {
    buttons?: Schema$Button[];
    primaryButton?: Schema$TextButton;
    secondaryButton?: Schema$TextButton;
  }
  export interface Schema$Folder {
    /**
     * Folder mapping id.
     */
    id?: string | null;
    /**
     * One for each copy of the message in the IMAP folder.
     */
    message?: Schema$ImapsyncFolderAttributeFolderMessage[];
  }
  /**
   * This is the content of //imapsync/folder attribute.
   */
  export interface Schema$FolderAttribute {
    /**
     * List of all IMAP folders where the message presents.
     */
    folder?: Schema$Folder[];
  }
  export interface Schema$FormAction {
    /**
     * Apps script function that should be invoked in the developer's apps script when the containing element is clicked/activated.
     */
    actionMethodName?: string | null;
    loadIndicator?: string | null;
    parameters?: Schema$ActionParameter[];
    /**
     * Indicates whether form values persist after the action. When false, the Apps Script is responsible for persisting values, by setting any form field values using the formInputs in the event. Disabling this behavior can be used if the add-on needs the ability to clear form fields, for example, as with persistent values, there is no means for clearing existing values. When disabling persistent values, it is strongly recommended that the add-on use LoadIndicator.SPINNER for all events, as this locks the UI to ensure no changes are made by the user while the action is being processed. When using LoadIndicator.NONE for any of the actions, persistent values are recommended, as it ensures that any changes made by the user after form / on change actions are sent to the server are not overwritten by the response. Persistent values disabled by default. While we recommend persistent values be used in the typical use case, we do not enable by default, as doing so would change the current behavior of existing add-ons in prod.
     */
    persistValues?: boolean | null;
  }
  /**
   * Annotation metadata for markup formatting
   */
  export interface Schema$FormatMetadata {
    /**
     * Font color is set if and only if format_type is FONT_COLOR. The components are stored as (alpha << 24) | (red << 16) | (green << 8) | blue. Clients should always set the alpha component to 0xFF. NEXT TAG: 3
     */
    fontColor?: number | null;
    /**
     * LINT.ThenChange(//depot/google3/apps/dynamite/v1/web/datakeys/annotated_span.proto)
     */
    formatType?: string | null;
  }
  /**
   * Formatting information for a segment.
   */
  export interface Schema$Formatting {
    bold?: boolean | null;
    /**
     * This indicates that the segment should be rendered as highlighted or visually emphasized.
     */
    highlight?: boolean | null;
    italics?: boolean | null;
    strikethrough?: boolean | null;
    /**
     * If set, this indicates that the segment should be rendered with the specified style. The absence of an explicit style represents "no style", i.e. the segment can be rendered with the default style chosen by the application.
     */
    style?: string | null;
    underline?: boolean | null;
  }
  /**
   * Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.
   */
  export interface Schema$FreshnessOptions {
    /**
     * The duration after which an object should be considered stale. The default value is 180 days (in seconds).
     */
    freshnessDuration?: string | null;
    /**
     * This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time.
     */
    freshnessProperty?: string | null;
  }
  /**
   * The Item message is the read interface for user data (traditionally referred to as a "message", such as a mail message or a chat message, but generalized to encompass other types such as tasks) and stored in Tingle. Each Item is associated with a single Thread. An Item contains three classes of data. (1): Item "fields" are common to items of all message types (e.g. mail, chat, task, etc.) and are identified by the ItemFieldSpec.FetchType enum when fetching Items. (2): Item "attributes" represent data associated with an Item that is stored on behalf of the client but to which the fusebox and storage layers are otherwise agnostic. (3): Item "parts" are application-defined protocol buffers that affect how the Item is indexed. Item parts are referenced as extensions to the ItemParts message. By default the application specifies the index terms associated with an Item part. For performance sensitive applications, the storage layer can be modified to understand and index data types natively.
   */
  export interface Schema$FuseboxItem {
    attributes?: Schema$Attributes;
    /**
     * The creation time of the Item in micro seconds.
     */
    creationTimeMicroseconds?: string | null;
    history?: Schema$History;
    /**
     * The key is used to refer to an item. Note that every field of the MultiKey is unique to the Item, and thus the Item can be looked up by any of the fields.
     */
    itemKey?: Schema$MultiKey;
    labels?: Schema$Labels;
    /**
     * The modification time of the Item in micro seconds. Modifications to the message include label addition, deletion, etc.
     */
    lastModificationTimeUs?: string | null;
    /**
     * go/lockpicker Locker counterpart of references.
     */
    lockerReferences?: Schema$References;
    matchInfo?: Schema$MatchInfo;
    /**
     * Type-specific data are represented as extensions to the ItemParts message.
     */
    parts?: Schema$ItemParts;
    /**
     * The read timestamp at which this item was read. This is a temporary field used to check if two items streamed during dual reading were read at the same timestamp. This will be populated by Fusebox RPCs. "DO NOT USE UNLESS YOU TALK TO FUSEBOX TEAM (gmail-fusebox@)".
     */
    readTs?: string | null;
    /**
     * References to attachments, video attachments in Youtube and Hangout messages.
     */
    references?: Schema$References;
    /**
     * The snippet is a brief bit of text describing this item.
     */
    snippet?: string | null;
    /**
     * The key of the Thread with which this Item is associated.
     */
    threadKey?: Schema$MultiKey;
    /**
     * A base64 encoded and encrypted string generated from the Gaia Id and the thread id. Used to generate the permalink for this thread, exposed from Gmail API.
     */
    threadLocator?: string | null;
    triggers?: Schema$Triggers;
    /**
     * The latest history operation id that resulted in a mutation of the item.
     */
    version?: string | null;
  }
  /**
   * In the context of a search, the MatchInfo contains information about which Items matched the query.
   */
  export interface Schema$FuseboxItemThreadMatchInfo {
    /**
     * If SearchQuery.Options.Clustering is present, the query will be treated as a cluster query, and this field may be populated with the cluster ID of the cluster to which this thread belongs, if any. The cluster ID will be a label on the message.
     */
    clusterId?: string | null;
    /**
     * The server id of the last item that matched the query. This is always set, regardless of the compute_matching_items_per_thread option. This is the value by which search results are sorted, in descending (i.e. newest first) order.
     */
    lastMatchingItemId?: string | null;
    /**
     * The MultiKey of the last item that matched the query. This is always set, regardless of the compute_matching_items_per_thread option. This is the value by which search results are sorted, in descending (i.e. newest first) order.
     */
    lastMatchingItemKey?: Schema$MultiKey;
    /**
     * If SearchQuery.Options.compute_matching_items_per_thread, this field will contain the keys of all items that matched the query, in ascending order. Note that this option requires extra computation.
     */
    matchingItemKey?: Schema$MultiKey[];
    /**
     * The rank of this ItemThread in the result set of the query. This rank may be used to sort ItemThreads in proper order. Ranks are specific to a query, and stable for a given query at a specific time.
     */
    rank?: Schema$Rank;
  }
  /**
   * If the Value field is not set this means the pref did not exist.
   */
  export interface Schema$FuseboxPrefUpdatePreState {
    value?: string | null;
  }
  export interface Schema$GaiaGroupProto {
    groupId?: string | null;
  }
  /**
   * A Gaia account, which may represent a user, device, service account, etc. For prod (@prod.google.com) accounts, use MdbUserProto instead.
   */
  export interface Schema$GaiaUserProto {
    userId?: string | null;
  }
  /**
   * Details on the third-party interoperability settings for the meeting space.
   */
  export interface Schema$GatewayAccess {
    /**
     * Whether third-party gateway accesses are enabled for this meeting space. If enabled, the actual access code can be retrieved by calling the GetGatewayAccess RPC method.
     */
    enabled?: boolean | null;
  }
  /**
   * Details how to join the conference via a SIP gateway.
   */
  export interface Schema$GatewaySipAccess {
    /**
     * Permanent numeric code for manual entry on specially configured devices, currently the same as the PSTN "Universal pin".
     */
    sipAccessCode?: string | null;
    /**
     * The SIP URI the conference can be reached through. The string is on one of the formats: "sip:@" "sips:@" where currently is the 13-digit universal pin (with the future option to support using a Meet meeting code as well), and is a valid address to be resolved using a DNS SRV lookup, or a dotted quad.
     */
    uri?: string | null;
  }
  export interface Schema$GetCustomerIndexStatsResponse {
    /**
     * Average item count for the given date range for which billing is done.
     */
    averageIndexedItemCount?: string | null;
    /**
     * Summary of indexed item counts, one for each day in the requested range.
     */
    stats?: Schema$CustomerIndexStats[];
  }
  export interface Schema$GetCustomerQueryStatsResponse {
    stats?: Schema$CustomerQueryStats[];
    /**
     * Total successful query count (status code 200) for the given date range.
     */
    totalQueryCount?: string | null;
  }
  /**
   * Response format for search application stats for a customer.
   */
  export interface Schema$GetCustomerSearchApplicationStatsResponse {
    /**
     * Average search application count for the given date range.
     */
    averageSearchApplicationCount?: string | null;
    /**
     * Search application stats by date.
     */
    stats?: Schema$CustomerSearchApplicationStats[];
  }
  export interface Schema$GetCustomerSessionStatsResponse {
    stats?: Schema$CustomerSessionStats[];
  }
  export interface Schema$GetCustomerUserStatsResponse {
    stats?: Schema$CustomerUserStats[];
  }
  export interface Schema$GetDataSourceIndexStatsResponse {
    /**
     * Average item count for the given date range for which billing is done.
     */
    averageIndexedItemCount?: string | null;
    /**
     * Summary of indexed item counts, one for each day in the requested range.
     */
    stats?: Schema$DataSourceIndexStats[];
  }
  /**
   * Response format for getting query stats for a search application between given dates.
   */
  export interface Schema$GetSearchApplicationQueryStatsResponse {
    /**
     * Query stats per date for a search application.
     */
    stats?: Schema$SearchApplicationQueryStats[];
    /**
     * Total successful query count (status code 200) for the given date range.
     */
    totalQueryCount?: string | null;
  }
  export interface Schema$GetSearchApplicationSessionStatsResponse {
    stats?: Schema$SearchApplicationSessionStats[];
  }
  export interface Schema$GetSearchApplicationUserStatsResponse {
    stats?: Schema$SearchApplicationUserStats[];
  }
  export interface Schema$GmailClientActionMarkup {
    addonComposeUiActionMarkup?: Schema$AddonComposeUiActionMarkup;
    openCreatedDraftActionMarkup?: Schema$OpenCreatedDraftActionMarkup;
    taskAction?: Schema$TaskActionMarkup;
    updateDraftActionMarkup?: Schema$UpdateDraftActionMarkup;
  }
  /**
   * The markup for developers to specify the contents of a contextual AddOn.
   */
  export interface Schema$GoogleChatV1ContextualAddOnMarkup {
    /**
     * A list of cards. A card must contain a header and at least 1 section.
     */
    cards?: Schema$GoogleChatV1ContextualAddOnMarkupCard[];
  }
  /**
   * A card is a UI element that can contain UI widgets such as texts, images.
   */
  export interface Schema$GoogleChatV1ContextualAddOnMarkupCard {
    /**
     * The actions of this card.
     */
    cardActions?: Schema$GoogleChatV1ContextualAddOnMarkupCardCardAction[];
    /**
     * The header of the card. A header usually contains a title and an image.
     */
    header?: Schema$GoogleChatV1ContextualAddOnMarkupCardCardHeader;
    /**
     * Name of the card.
     */
    name?: string | null;
    /**
     * Sections are separated by a line divider.
     */
    sections?: Schema$GoogleChatV1ContextualAddOnMarkupCardSection[];
  }
  /**
   * A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.
   */
  export interface Schema$GoogleChatV1ContextualAddOnMarkupCardCardAction {
    /**
     * The label used to be displayed in the action menu item.
     */
    actionLabel?: string | null;
    /**
     * The onclick action for this action item.
     */
    onClick?: Schema$GoogleChatV1WidgetMarkupOnClick;
  }
  export interface Schema$GoogleChatV1ContextualAddOnMarkupCardCardHeader {
    /**
     * The image's type (e.g. square border or circular border).
     */
    imageStyle?: string | null;
    /**
     * The URL of the image in the card header.
     */
    imageUrl?: string | null;
    /**
     * The subtitle of the card header.
     */
    subtitle?: string | null;
    /**
     * The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines.
     */
    title?: string | null;
  }
  /**
   * A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
   */
  export interface Schema$GoogleChatV1ContextualAddOnMarkupCardSection {
    /**
     * The header of the section, text formatted supported.
     */
    header?: string | null;
    /**
     * A section must contain at least 1 widget.
     */
    widgets?: Schema$GoogleChatV1WidgetMarkup[];
  }
  /**
   * A widget is a UI element that presents texts, images, etc.
   */
  export interface Schema$GoogleChatV1WidgetMarkup {
    /**
     * A list of buttons. Buttons is also oneof data and only one of these fields should be set.
     */
    buttons?: Schema$GoogleChatV1WidgetMarkupButton[];
    /**
     * Display an image in this widget.
     */
    image?: Schema$GoogleChatV1WidgetMarkupImage;
    /**
     * Display a key value item in this widget.
     */
    keyValue?: Schema$GoogleChatV1WidgetMarkupKeyValue;
    /**
     * Display a text paragraph in this widget.
     */
    textParagraph?: Schema$GoogleChatV1WidgetMarkupTextParagraph;
  }
  /**
   * A button. Can be a text button or an image button.
   */
  export interface Schema$GoogleChatV1WidgetMarkupButton {
    /**
     * A button with image and onclick action.
     */
    imageButton?: Schema$GoogleChatV1WidgetMarkupImageButton;
    /**
     * A button with text and onclick action.
     */
    textButton?: Schema$GoogleChatV1WidgetMarkupTextButton;
  }
  /**
   * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
   */
  export interface Schema$GoogleChatV1WidgetMarkupFormAction {
    /**
     * The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. The same method name can be used for several elements that trigger a common behavior if desired.
     */
    actionMethodName?: string | null;
    /**
     * List of action parameters.
     */
    parameters?: Schema$GoogleChatV1WidgetMarkupFormActionActionParameter[];
  }
  /**
   * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.
   */
  export interface Schema$GoogleChatV1WidgetMarkupFormActionActionParameter {
    /**
     * The name of the parameter for the action script.
     */
    key?: string | null;
    /**
     * The value of the parameter.
     */
    value?: string | null;
  }
  /**
   * An image that is specified by a URL and can have an onclick action.
   */
  export interface Schema$GoogleChatV1WidgetMarkupImage {
    /**
     * The aspect ratio of this image (width/height). This field allows clients to reserve the right height for the image while waiting for it to load. It's not meant to override the native aspect ratio of the image. If unset, the server fills it by prefetching the image.
     */
    aspectRatio?: number | null;
    /**
     * The URL of the image.
     */
    imageUrl?: string | null;
    /**
     * The onclick action.
     */
    onClick?: Schema$GoogleChatV1WidgetMarkupOnClick;
  }
  /**
   * An image button with an onclick action.
   */
  export interface Schema$GoogleChatV1WidgetMarkupImageButton {
    /**
     * The icon specified by an enum that indices to an icon provided by Chat API.
     */
    icon?: string | null;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string | null;
    /**
     * The name of this image_button which will be used for accessibility. Default value will be provided if developers don't specify.
     */
    name?: string | null;
    /**
     * The onclick action.
     */
    onClick?: Schema$GoogleChatV1WidgetMarkupOnClick;
  }
  /**
   * A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
   */
  export interface Schema$GoogleChatV1WidgetMarkupKeyValue {
    /**
     * The text of the bottom label. Formatted text supported.
     */
    bottomLabel?: string | null;
    /**
     * A button that can be clicked to trigger an action.
     */
    button?: Schema$GoogleChatV1WidgetMarkupButton;
    /**
     * The text of the content. Formatted text supported and always required.
     */
    content?: string | null;
    /**
     * If the content should be multiline.
     */
    contentMultiline?: boolean | null;
    /**
     * An enum value that will be replaced by the Chat API with the corresponding icon image.
     */
    icon?: string | null;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string | null;
    /**
     * The onclick action. Only the top label, bottom label and content region are clickable.
     */
    onClick?: Schema$GoogleChatV1WidgetMarkupOnClick;
    /**
     * The text of the top label. Formatted text supported.
     */
    topLabel?: string | null;
  }
  /**
   * An onclick action (e.g. open a link).
   */
  export interface Schema$GoogleChatV1WidgetMarkupOnClick {
    /**
     * A form action will be triggered by this onclick if specified.
     */
    action?: Schema$GoogleChatV1WidgetMarkupFormAction;
    /**
     * This onclick triggers an open link action if specified.
     */
    openLink?: Schema$GoogleChatV1WidgetMarkupOpenLink;
  }
  /**
   * A link that opens a new window.
   */
  export interface Schema$GoogleChatV1WidgetMarkupOpenLink {
    /**
     * The URL to open.
     */
    url?: string | null;
  }
  /**
   * A button with text and onclick action.
   */
  export interface Schema$GoogleChatV1WidgetMarkupTextButton {
    /**
     * The onclick action of the button.
     */
    onClick?: Schema$GoogleChatV1WidgetMarkupOnClick;
    /**
     * The text of the button.
     */
    text?: string | null;
  }
  /**
   * A paragraph of text. Formatted text supported.
   */
  export interface Schema$GoogleChatV1WidgetMarkupTextParagraph {
    text?: string | null;
  }
  /**
   * The corpus specific metadata for office-type documents, from Google Docs and other sources. This message is passed to the scorer and beyond. Next tag: 9
   */
  export interface Schema$GoogleDocsMetadata {
    /**
     * Contains number of users and groups which can access the document.
     */
    aclInfo?: Schema$AclInfo;
    /**
     * The conceptual type (presentation, document, etc.) of this document.
     */
    documentType?: string | null;
    /**
     * The file extension of the document. NOTE: As of October 2018 this field is not backfilled for old documents.
     */
    fileExtension?: string | null;
    /**
     * The last time this document was modified, in seconds since epoch. Only counts content modifications.
     */
    lastContentModifiedTimestamp?: string | null;
    /**
     * Contains number of subscribers for the document.
     */
    numSubscribers?: number | null;
    /**
     * Size of untruncated viewers list.
     */
    numViewers?: number | null;
    /**
     * Additional per-result information, akin to Gmail's SingleThreadResponse. Note: GWS no longer seems to use this field, but there's still one reference to it for Scribe, so we can't remove it.
     */
    resultInfo?: Schema$GoogleDocsResultInfo;
    /**
     * Contains additional information about the document depending on its type.
     */
    typeInfo?: Schema$TypeInfo;
  }
  /**
   * A message containing information about a specific result. This information is passed to the scorer and beyond; in particular, GWS relies on it to format the result in the UI. Split from GoogleDocsMetadata in case we later want to reuse the message.
   */
  export interface Schema$GoogleDocsResultInfo {
    /**
     * The SHA1 hash of the object in Drive, if any.
     */
    attachmentSha1?: string | null;
    /**
     * The storage identifier for the object in Cosmo. This field is intended to used by Stratus/Moonshine integration only. It should not be exposed externally (please refer to encrypted_id for that purpose).
     */
    cosmoId?: Schema$Id;
    /**
     * For Cosmo objects, the Cosmo namespace the object was in. This allows downstream clients to identify whether a document was created in Writely or Kix, Presently or Punch, or whether it was uploaded from GDrive. See storage_cosmo.Id.NAME_SPACE for a list of all Cosmo name spaces.
     */
    cosmoNameSpace?: number | null;
    /**
     * The encrypted (user-visible) id of this object. Knowing the id is sufficient to create a canonical URL for this document.
     */
    encryptedId?: string | null;
    /**
     * The mimetype of the document.
     */
    mimeType?: string | null;
    /**
     * The visibility indicator in the UI will be based upon this.
     */
    shareScope?: Schema$ShareScope;
  }
  export interface Schema$Grid {
    /**
     * The border style to apply to each grid item.
     */
    borderStyle?: Schema$BorderStyle;
    /**
     * The items to display in the grid.
     */
    items?: Schema$GridItem[];
    /**
     * The number of columns to display in the grid. Note that a default value will be used if this field is not specified, and that default value will be different depending on where the grid is shown (dialog vs companion).
     */
    numColumns?: number | null;
    /**
     * This callback will be reused by each individual GridItem, but with the item's identifier and index in the items list added to the callback's parameters.
     */
    onClick?: Schema$OnClick;
    /**
     * The text to display in the grid header.
     */
    title?: string | null;
  }
  export interface Schema$GridItem {
    /**
     * A user-specified identifier for this grid item. This identifier will be returned in the parent Grid's on_click callback's parameters.
     */
    identifier?: string | null;
    image?: Schema$ImageComponent;
    layout?: string | null;
    subtitle?: string | null;
    textAlignment?: string | null;
    /**
     * Text properties.
     */
    title?: string | null;
  }
  export interface Schema$GroupDetailsUpdatedMetadata {
    newGroupDetails?: Schema$AppsDynamiteSharedGroupDetails;
    prevGroupDetails?: Schema$AppsDynamiteSharedGroupDetails;
  }
  /**
   * Id representing a group that could be a space, a chat, or a direct message space. Which ID is set here will determine which group
   */
  export interface Schema$GroupId {
    /**
     * Unique, immutable ID of the Direct Message Space
     */
    dmId?: Schema$DmId;
    /**
     * Unique, immutable ID of the Space
     */
    spaceId?: Schema$SpaceId;
  }
  export interface Schema$GroupLinkSharingModificationEvent {
    newStatus?: string | null;
  }
  export interface Schema$GroupRetentionSettingsUpdatedMetaData {
    /**
     * The user who triggered the retention settings update
     */
    initiator?: Schema$UserId;
    /**
     * The updated space retention settings
     */
    retentionSettings?: Schema$AppsDynamiteSharedRetentionSettings;
  }
  /**
   * Annotation metadata for an GsuiteIntegration artifact.
   */
  export interface Schema$GsuiteIntegrationMetadata {
    activityFeedData?: Schema$AppsDynamiteSharedActivityFeedAnnotationData;
    assistantData?: Schema$AppsDynamiteSharedAssistantAnnotationData;
    calendarEventData?: Schema$AppsDynamiteSharedCalendarEventAnnotationData;
    /**
     * Data used to render call artifacts.
     */
    callData?: Schema$AppsDynamiteSharedCallAnnotationData;
    clientType?: string | null;
    /**
     * A list of all strings that are to be indexed for this 1P chip. Each string in this list would be the contents of a single string field in the 1P chip. Eg. For Tasks[title = “hello world”, description = “good bye”]. If we want to index only the title, this would be set to [“hello world”]. If both title and description, then this would be [“hello world”, “good bye”]. Please make sure that the contents of this field is a subset of strings that are rendered as part of the 1P Chip.
     */
    indexableTexts?: string[] | null;
    tasksData?: Schema$AppsDynamiteSharedTasksAnnotationData;
  }
  export interface Schema$GSuitePrincipal {
    /**
     * This principal represents all users of the Google Workspace domain of the customer.
     */
    gsuiteDomain?: boolean | null;
    /**
     * This principal references a Google Workspace group name.
     */
    gsuiteGroupEmail?: string | null;
    /**
     * This principal references a Google Workspace user account.
     */
    gsuiteUserEmail?: string | null;
  }
  export interface Schema$HangoutEvent {
    hangoutDurationSecs?: string | null;
    mediaType?: string | null;
    participantId?: Schema$StoredParticipantId[];
    type?: string | null;
  }
  /**
   * A message representing the Hangout video start/end events in Babel
   */
  export interface Schema$HangoutVideoEventMetadata {
    hangoutVideoType?: string | null;
  }
  /**
   * Hashtag metadata, for HASHTAG segments. For a hashtag, the "text" field should contain the display text, and the search_text field should represent the topic being referenced, without the hash symbol; for example, we might have: text = "#Google" hashtag_data.search_text = "Google" Another example: text = "#pikachu" hashtag_data.search_text = "Pokemon" Both strings should be considered part of the searchable text. In go/sbe, both are indexed and searchable.
   */
  export interface Schema$HashtagData {
    searchText?: string | null;
  }
  /**
   * The most recent history records associated with the item.
   */
  export interface Schema$History {
    record?: Schema$HistoryRecord[];
  }
  export interface Schema$HistoryRecord {
    /**
     * This will almost always be set, but there are corner cases in which the information is not available, and thus applications must handle its absence appropriately.
     */
    clientContext?: Schema$ClientContext;
    filterUpdate?: Schema$FilterUpdate;
    imapUpdate?: Schema$ImapUpdate;
    labelUpdate?: Schema$LabelUpdate;
    prefUpdate?: Schema$PrefUpdate;
    /**
     * Each HistoryRecord has a unique id. Ids are monotonically increasing, and not necessarily contiguous.
     */
    recordId?: string | null;
    threadUpdate?: Schema$ThreadUpdate;
    /**
     * This will almost always be set, but there are corner cases in which the information is not available, and thus applications must handle its absence appropriately.
     */
    transactionContext?: Schema$TransactionContext;
    txnDebugInfo?: Schema$TransactionDebugInfo;
    type?: string | null;
  }
  /**
   * Actions handled by individual host apps.
   */
  export interface Schema$HostAppActionMarkup {
    /**
     * Actions handled by Calendar.
     */
    calendarAction?: Schema$CalendarClientActionMarkup;
    /**
     * Actions handled by Chat.
     */
    chatAction?: Schema$ChatClientActionMarkup;
    /**
     * Actions handled by Drive.
     */
    driveAction?: Schema$DriveClientActionMarkup;
    /**
     * Actions handled by Docs, Sheets, or Slides.
     */
    editorAction?: Schema$EditorClientActionMarkup;
    /**
     * Actions handled by Gmail.
     */
    gmailAction?: Schema$GmailClientActionMarkup;
    /**
     * Actions handled by Sheets.
     */
    sheetsAction?: Schema$SheetsClientActionMarkup;
  }
  /**
   * Represents a single host. Optionally, the MDB owner of the host can be specified.
   */
  export interface Schema$HostProto {
    /**
     * Lower-case, fully qualified hostname.
     */
    hostName?: string | null;
    /**
     * If present, then any checks that compare this Principal to LOAS peer info must confirm the peer's machine owner is equal to 'host_owner'. If absent, then any peer machine owner is acceptable.
     */
    hostOwner?: string | null;
  }
  /**
   * Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$HtmlOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value\>* show results only where the value of the property named *subjectLine* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator return all items where *<value\>* matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * The options for html properties.
   */
  export interface Schema$HtmlPropertyOptions {
    /**
     * If set, describes how the property should be used as a search operator.
     */
    operatorOptions?: Schema$HtmlOperatorOptions;
    /**
     * Indicates the search quality importance of the tokens within the field when used for retrieval. Can only be set to DEFAULT or NONE.
     */
    retrievalImportance?: Schema$RetrievalImportance;
  }
  /**
   * List of html values.
   */
  export interface Schema$HtmlValues {
    /**
     * The maximum allowable length for html values is 2048 characters.
     */
    values?: string[] | null;
  }
  export interface Schema$IconImage {
    /**
     * The alternative text of this icon_url which will be used for accessibility.
     */
    altText?: string | null;
    icon?: string | null;
    iconUrl?: string | null;
    /**
     * The image cropping style. Note that icons with a CIRCLE style are rendered larger than the default icon size.
     */
    imageStyle?: string | null;
  }
  /**
   * Identifies a particular object, including both Users and DirEntries. This Id is unique across the entire server instance, such as the production or qa instance.
   */
  export interface Schema$Id {
    /**
     * The User account in which the DirEntry was originally created. If name_space==GAIA, then it's the gaia_id of the user this id is referring to.
     */
    creatorUserId?: string | null;
    /**
     * The local identifier for the DirEntry (local to the creator's account). local_id + app_name is guaranteed to be unique within the creator account, but not across all User accounts. The string is case sensitive. Ignore if name_space==GAIA. NB For name_space==COSMO, all local_id's should be defined in google3/java/com/google/storage/cosmo/server/api/SpecialObjectIds.java as they have a special predefined meaning. See cosmo.client.CosmoIdFactory.createObjectId(long,String) for IMPORTANT recommendations when generating IDs.
     */
    localId?: string | null;
    /**
     * The name space in which this id is unique (typically the application that created it). Values should be drawn from the above enum, but for experimentation, use values greater than 1000.
     */
    nameSpace?: number | null;
  }
  export interface Schema$Image {
    /**
     * The alternative text of this image which will be used for accessibility.
     */
    altText?: string | null;
    /**
     * The aspect ratio of this image (width/height).
     */
    aspectRatio?: number | null;
    /**
     * Image url specified by developers. Server side, we will wrap with FIFE so client apps can configure size/cropping/etc.
     */
    imageUrl?: string | null;
    onClick?: Schema$OnClick;
  }
  export interface Schema$ImageButton {
    icon?: string | null;
    iconUrl?: string | null;
    name?: string | null;
    onClick?: Schema$OnClick;
  }
  /**
   * NOTE: Through future refactoring work, this image component will eventually be used in the Image widget, and will likely replace the Icon proto as well.
   */
  export interface Schema$ImageComponent {
    altText?: string | null;
    borderStyle?: Schema$BorderStyle;
    cropStyle?: Schema$ImageCropStyle;
    imageUrl?: string | null;
  }
  /**
   * Represents a crop style that can be applied to an image.
   */
  export interface Schema$ImageCropStyle {
    /**
     * The aspect ratio to use if the crop type is RECTANGLE_CUSTOM.
     */
    aspectRatio?: number | null;
    /**
     * The crop type.
     */
    type?: string | null;
  }
  /**
   * This is deprecated and please use KeyValue.
   */
  export interface Schema$ImageKeyValue {
    icon?: string | null;
    iconUrl?: string | null;
    onClick?: Schema$OnClick;
    text?: string | null;
  }
  export interface Schema$ImapSessionContext {
    app?: string | null;
    /**
     * User agent information
     */
    deviceType?: string | null;
    /**
     * As agreed with Bond team, this holds the fingerprint of any "aguid" or "guid" provided by the ID command. The fingerprint should be calculated by fingerprint2011. Note that not all clients will provide aguid or guid through ID command.
     */
    guidFingerprint?: string | null;
    os?: string | null;
    osVersion?: Schema$OsVersion;
    possiblyTrimmedModel?: Schema$PossiblyTrimmedModel;
  }
  /**
   * Message delete history record extension that exports //imapsync/folder attribute of deleted messages which have ^is label.
   */
  export interface Schema$ImapSyncDelete {
    /**
     * Contains the value of //imapsync/folder attribute of deleted message.
     */
    mappings?: Schema$FolderAttribute;
    msgId?: string | null;
  }
  export interface Schema$ImapsyncFolderAttributeFolderMessage {
    /**
     * Flags of the message. Represents unseen and flagged state.
     */
    flags?: Schema$ImapsyncFolderAttributeFolderMessageFlags;
    /**
     * UID of the message.
     */
    uid?: string | null;
  }
  export interface Schema$ImapsyncFolderAttributeFolderMessageFlags {
    /**
     * Flagged state of the message.
     */
    flagged?: boolean | null;
    /**
     * Seen state of the message.
     */
    seen?: boolean | null;
  }
  export interface Schema$ImapUidsReassign {
    /**
     * Label
     */
    labelId?: string | null;
    /**
     * The message Ids
     */
    messageId?: string[] | null;
  }
  /**
   * HistoryRecord for changes associated with IMAP, namely: IMAP_UIDS_REASSIGN
   */
  export interface Schema$ImapUpdate {
    imapUidsReassign?: Schema$ImapUidsReassign;
  }
  /**
   * Annotation metadata to display system messages for incoming webhook events. Next Tag: 7
   */
  export interface Schema$IncomingWebhookChangedMetadata {
    /**
     * The webhook name at the time of the change. Used in Spanner storage, BE API responses and FE API responses.
     */
    incomingWebhookName?: string | null;
    /**
     * The user id of the user whose action triggered this system message. Used in Spanner storage, BE API responses and FE API responses.
     */
    initiatorId?: Schema$UserId;
    /**
     * Complete profile when ListTopicsRequest FetchOptions.USER is set. Otherwise, only the id will be filled in. Used in FE API responses.
     */
    initiatorProfile?: Schema$User;
    /**
     * The webhook id of the incoming webhook in question. This field should not be used to load webhook information dynamically and is only present for debugging purposes. Used in Spanner storage, BE API responses and FE API responses.
     */
    obfuscatedIncomingWebhookId?: string | null;
    /**
     * Only populated for UPDATED_NAME and UPDATED_NAME_AND_AVATAR events, where the webhook name was changed. Used in Spanner storage, BE API responses and FE API responses.
     */
    oldIncomingWebhookName?: string | null;
    /**
     * Used in Spanner storage, BE API responses and FE API responses.
     */
    type?: string | null;
  }
  export interface Schema$IndexItemOptions {
    /**
     * Specifies if the index request should allow Google Workspace principals that do not exist or are deleted.
     */
    allowUnknownGsuitePrincipals?: boolean | null;
  }
  export interface Schema$IndexItemRequest {
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    indexItemOptions?: Schema$IndexItemOptions;
    /**
     * The name of the item. Format: datasources/{source_id\}/items/{item_id\}
     */
    item?: Schema$Item;
    /**
     * Required. The RequestMode for this request.
     */
    mode?: string | null;
  }
  /**
   * Request message for `InitializeCustomer` method.
   */
  export interface Schema$InitializeCustomerRequest {}
  export interface Schema$InsertContent {
    /**
     * The content to be inserted.
     */
    content?: string | null;
    /**
     * The type of inserted content.
     */
    contentType?: string | null;
    mimeType?: string | null;
  }
  /**
   * Used to specify integer faceting options.
   */
  export interface Schema$IntegerFacetingOptions {
    /**
     * Buckets for given integer values should be in strictly ascending order. For example, if values supplied are (1,5,10,100), the following facet buckets will be formed {<1, [1,5), [5-10), [10-100), \>=100\}.
     */
    integerBuckets?: string[] | null;
  }
  /**
   * Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$IntegerOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the integer property using the greater-than operator. For example, if greaterThanOperatorName is *priorityabove* and the property's name is *priorityVal*, then queries like *priorityabove:<value\>* show results only where the value of the property named *priorityVal* is greater than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    greaterThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the integer property using the less-than operator. For example, if lessThanOperatorName is *prioritybelow* and the property's name is *priorityVal*, then queries like *prioritybelow:<value\>* show results only where the value of the property named *priorityVal* is less than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    lessThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the integer property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value\>* show results only where the value of the property named *priorityVal* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * The options for integer properties.
   */
  export interface Schema$IntegerPropertyOptions {
    /**
     * If set, describes integer faceting options for the given integer property. The corresponding integer property should be marked isFacetable.
     */
    integerFacetingOptions?: Schema$IntegerFacetingOptions;
    /**
     * The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value.
     */
    maximumValue?: string | null;
    /**
     * The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value.
     */
    minimumValue?: string | null;
    /**
     * If set, describes how the integer should be used as a search operator.
     */
    operatorOptions?: Schema$IntegerOperatorOptions;
    /**
     * Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false.
     */
    orderedRanking?: string | null;
  }
  /**
   * List of integer values.
   */
  export interface Schema$IntegerValues {
    values?: string[] | null;
  }
  export interface Schema$IntegrationConfigMutation {
    /**
     * Add an app using its identifier.
     */
    addApp?: Schema$AppId;
    /**
     * Add a pinned tab using its identifier.
     */
    addPinnedItem?: Schema$PinnedItemId;
    /**
     * Remove an active app using its identifier.
     */
    removeApp?: Schema$AppId;
    /**
     * Remove an active pinned tab using its identifier.
     */
    removePinnedItem?: Schema$PinnedItemId;
  }
  /**
   * Annotation metadata to display system message for integration config updated event. This metadata is stored in spanner, and can be dispatched to clients without any field modification or transformation.
   */
  export interface Schema$IntegrationConfigUpdatedMetadata {
    /**
     * The user whose action triggered this system message.
     */
    initiatorId?: Schema$UserId;
    /**
     * A list of updates applied on the integration config.
     */
    mutations?: Schema$IntegrationConfigMutation[];
  }
  /**
   * Represents an interaction between a user and an item.
   */
  export interface Schema$Interaction {
    /**
     * The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded.
     */
    interactionTime?: string | null;
    /**
     * The user that acted on the item.
     */
    principal?: Schema$Principal;
    type?: string | null;
  }
  export interface Schema$InviteAcceptedEvent {
    participantId?: Schema$StoredParticipantId[];
  }
  /**
   * Invitee information from a Dynamite invitation. See go/dynamite-invitee-mgmt.
   */
  export interface Schema$InviteeInfo {
    /**
     * Email as typed by the user when invited to Room or DM. This value will be canonicalized and hashed before retained in storage.
     */
    email?: string | null;
    /**
     * Unique, immutable ID of the User.
     */
    userId?: Schema$UserId;
  }
  /**
   * Represents a single object that is an item in the search index, such as a file, folder, or a database record.
   */
  export interface Schema$Item {
    /**
     * Access control list for this item.
     */
    acl?: Schema$ItemAcl;
    /**
     * Item content to be indexed and made text searchable.
     */
    content?: Schema$ItemContent;
    /**
     * The type for this item.
     */
    itemType?: string | null;
    /**
     * The metadata information.
     */
    metadata?: Schema$ItemMetadata;
    /**
     * The name of the Item. Format: datasources/{source_id\}/items/{item_id\} This is a required field. The maximum length is 1536 characters.
     */
    name?: string | null;
    /**
     * Additional state connector can store for this item. The maximum length is 10000 bytes.
     */
    payload?: string | null;
    /**
     * Queue this item belongs to. The maximum length is 100 characters.
     */
    queue?: string | null;
    /**
     * Status of the item. Output only field.
     */
    status?: Schema$ItemStatus;
    /**
     * The structured data for the item that should conform to a registered object definition in the schema for the data source.
     */
    structuredData?: Schema$ItemStructuredData;
    /**
     * Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).
     */
    version?: string | null;
  }
  /**
   * Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls).
   */
  export interface Schema$ItemAcl {
    /**
     * Sets the type of access rules to apply when an item inherits its ACL from a parent. This should always be set in tandem with the inheritAclFrom field. Also, when the inheritAclFrom field is set, this field should be set to a valid AclInheritanceType.
     */
    aclInheritanceType?: string | null;
    /**
     * List of principals who are explicitly denied access to the item in search results. While principals are denied access by default, use denied readers to handle exceptions and override the list allowed readers. The maximum number of elements is 100.
     */
    deniedReaders?: Schema$Principal[];
    /**
     * The name of the item to inherit the Access Permission List (ACL) from. Note: ACL inheritance *only* provides access permissions to child items and does not define structural relationships, nor does it provide convenient ways to delete large groups of items. Deleting an ACL parent from the index only alters the access permissions of child items that reference the parent in the inheritAclFrom field. The item is still in the index, but may not visible in search results. By contrast, deletion of a container item also deletes all items that reference the container via the containerName field. The maximum length for this field is 1536 characters.
     */
    inheritAclFrom?: string | null;
    /**
     * Optional. List of owners for the item. This field has no bearing on document access permissions. It does, however, offer a slight ranking boosts items where the querying user is an owner. The maximum number of elements is 5.
     */
    owners?: Schema$Principal[];
    /**
     * List of principals who are allowed to see the item in search results. Optional if inheriting permissions from another item or if the item is not intended to be visible, such as virtual containers. The maximum number of elements is 1000.
     */
    readers?: Schema$Principal[];
  }
  /**
   * Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
   */
  export interface Schema$ItemContent {
    /**
     * Upload reference ID of a previously uploaded content via write method.
     */
    contentDataRef?: Schema$UploadItemRef;
    contentFormat?: string | null;
    /**
     * Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string | null;
    /**
     * Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB).
     */
    inlineContent?: string | null;
  }
  export interface Schema$ItemCountByStatus {
    /**
     * Number of items matching the status code.
     */
    count?: string | null;
    /**
     * Number of items matching the status code for which billing is done. This excludes virtual container items from the total count. This count would not be applicable for items with ERROR or NEW_ITEM status code.
     */
    indexedItemsCount?: string | null;
    /**
     * Status of the items.
     */
    statusCode?: string | null;
  }
  /**
   * Available metadata fields for the item.
   */
  export interface Schema$ItemMetadata {
    /**
     * The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters.
     */
    containerName?: string | null;
    /**
     * The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters.
     */
    contentLanguage?: string | null;
    /**
     * A set of named attributes associated with the item. This can be used for influencing the ranking of the item based on the context in the request. The maximum number of elements is 10.
     */
    contextAttributes?: Schema$ContextAttribute[];
    /**
     * The time when the item was created in the source repository.
     */
    createTime?: string | null;
    /**
     * Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string | null;
    /**
     * A list of interactions for the item. Interactions are used to improve Search quality, but are not exposed to end users. The maximum number of elements is 1000.
     */
    interactions?: Schema$Interaction[];
    /**
     * Additional keywords or phrases that should match the item. Used internally for user generated content. The maximum number of elements is 100. The maximum length is 8192 characters.
     */
    keywords?: string[] | null;
    /**
     * The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters.
     */
    mimeType?: string | null;
    /**
     * The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name 'document', then item indexing requests for objects of that type should set objectType to 'document'. The maximum length is 256 characters.
     */
    objectType?: string | null;
    /**
     * Additional search quality metadata of the item
     */
    searchQualityMetadata?: Schema$SearchQualityMetadata;
    /**
     * Link to the source repository serving the data. Seach results apply this link to the title. Whitespace or special characters may cause Cloud Seach result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters.
     */
    sourceRepositoryUrl?: string | null;
    /**
     * The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters.
     */
    title?: string | null;
    /**
     * The time when the item was last modified in the source repository.
     */
    updateTime?: string | null;
  }
  /**
   * Container for type-specific extensions of an Item. This protobuf is defined in a separate file to allow types to reference/extend the message without depending on other fusebox protobufs. See items.proto.
   */
  export interface Schema$ItemParts {}
  /**
   * This contains item's status and any errors.
   */
  export interface Schema$ItemStatus {
    /**
     * Status code.
     */
    code?: string | null;
    /**
     * Error details in case the item is in ERROR state.
     */
    processingErrors?: Schema$ProcessingError[];
    /**
     * Repository error reported by connector.
     */
    repositoryErrors?: Schema$RepositoryError[];
  }
  /**
   * Available structured data fields for the item.
   */
  export interface Schema$ItemStructuredData {
    /**
     * Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string | null;
    /**
     * The structured data object that should conform to a registered object definition in the schema for the data source.
     */
    object?: Schema$StructuredDataObject;
  }
  /**
   * An ItemThread is an ordered list of Items. An ItemThread corresponds to a "conversation" in the context of mail. An Item belongs to exactly one ItemThread.
   */
  export interface Schema$ItemThread {
    clusterInfo?: Schema$ClusterInfo;
    /**
     * The Items in the ItemThread. In the context of a search, the list of Items may be a subset of those that logically belong to the ItemThread. The details of which items are included are available in the ItemThreadView returned in the overall rpc response.
     */
    item?: Schema$FuseboxItem[];
    /**
     * The server id of the last item returned in the ItemThread. This can be deduced from the [item] list but is provided for convenience. When manually constructing an ItemThreadViewSpec to perform operations on the ItemThread, this value can be used as the [high_item_id_watermark].
     */
    lastItemId?: string | null;
    matchInfo?: Schema$FuseboxItemThreadMatchInfo;
    /**
     * A snippet summarizing the thread. This field is only populated for searches.
     */
    snippet?: string | null;
    /**
     * The MultiKey that identifies this thread. This value never changes, i.e. remains constant across modifications to the thread, including addition, relabeling, or deletion of contained Items. As such, the thread key may not necessarily correspond to the key of an contained Item. Legacy note: The "server_id" of the thread key is equivalent to the notion of the "original thread id" in the CSS API.
     */
    threadKey?: Schema$MultiKey;
    /**
     * A base64 encoded and encrypted string generated from the Gaia Id and the thread id. Used to generate the permalink for this thread, exposed from Gmail API.
     */
    threadLocator?: string | null;
    /**
     * Next available id : 10
     */
    topicState?: Schema$TopicState;
    /**
     * The latest history operation id that resulted in a mutation of any item in the thread.
     */
    version?: string | null;
  }
  /**
   * Identifies a jobsetted server as a target for Trigger dispatch.
   */
  export interface Schema$JobsettedServerSpec {
    /**
     * E.g. "gateway", "stubby" etc. Leave unset to use the default unnamed port.
     */
    portName?: string | null;
    /**
     * E.g. "satellite-server", "bigtop-sync", etc.
     */
    serverName?: string | null;
  }
  export interface Schema$KeyValue {
    /**
     * Formatted text supported.
     */
    bottomLabel?: string | null;
    button?: Schema$Button;
    /**
     * Formatted text supported and always required.
     */
    content?: string | null;
    contentMultiline?: boolean | null;
    endIcon?: Schema$IconImage;
    icon?: string | null;
    /**
     * The alternative text of this icon_url which will be used for accessibility.
     */
    iconAltText?: string | null;
    iconUrl?: string | null;
    imageStyle?: string | null;
    /**
     * Only the top/bottom label + content region is clickable.
     */
    onClick?: Schema$OnClick;
    /**
     * The optional icon to display before the text content.
     */
    startIcon?: Schema$IconImage;
    switchWidget?: Schema$SwitchWidget;
    /**
     * Formatted text supported.
     */
    topLabel?: string | null;
  }
  /**
   * A label was added to some (subset of the) messages in this thread.
   */
  export interface Schema$LabelAdded {
    labelId?: string | null;
    labelName?: string | null;
    messageKeys?: Schema$MultiKey[];
    syncId?: number | null;
  }
  /**
   * A label was created.
   */
  export interface Schema$LabelCreated {}
  /**
   * A label was deleted.
   */
  export interface Schema$LabelDeleted {}
  /**
   * A label was removed from some (subset of the) messages in this thread.
   */
  export interface Schema$LabelRemoved {
    labelId?: string | null;
    labelName?: string | null;
    messageKeys?: Schema$MultiKey[];
    syncId?: number | null;
  }
  /**
   * A label was renamed.
   */
  export interface Schema$LabelRenamed {
    oldCanonicalName?: string | null;
  }
  export interface Schema$Labels {
    /**
     * The display name of the labels. This is populated (instead of the id) when the request fetch_spec has LABEL_DISPLAY_NAMES.
     */
    displayName?: string[] | null;
    /**
     * The ids of the labels attached to the Item, e.g. "^i", "^x_1"
     */
    id?: string[] | null;
  }
  /**
   * HistoryRecord for changes associated with a label, namely: LABEL_CREATED LABEL_DELETED LABEL_RENAMED LABEL_UPDATED
   */
  export interface Schema$LabelUpdate {
    canonicalName?: string | null;
    labelCreated?: Schema$LabelCreated;
    labelDeleted?: Schema$LabelDeleted;
    labelId?: string | null;
    labelRenamed?: Schema$LabelRenamed;
    labelUpdated?: Schema$LabelUpdated;
    syncId?: number | null;
  }
  /**
   * A label pref was updated outside of a rename, create, or delete.
   */
  export interface Schema$LabelUpdated {}
  /**
   * The language configuration for the session.
   */
  export interface Schema$LanguageConfig {
    /**
     * The spoken language(s) in BCP47 language code.
     */
    spokenLanguages?: string[] | null;
  }
  export interface Schema$LdapGroupProto {
    groupName?: string | null;
  }
  export interface Schema$LdapUserProto {
    userName?: string | null;
  }
  /**
   * The original UploadMetadata that this DriveMetadata was converted from.
   */
  export interface Schema$LegacyUploadMetadata {
    /**
     * A unique ID generated from legacy UploadMetadata. This is used for interopping URLs after uploading blob to shared drive. Links in Classic might break without this. go/drive-file-attachment-interop-from-dynamite.
     */
    legacyUniqueId?: string | null;
    /**
     * The blob in this UploadMetadata has been uploaded to shared drive. This UploadMetadata is no longer attached to a message. go/shared-drive-data-migration.
     */
    uploadMetadata?: Schema$UploadMetadata;
  }
  /**
   * Link metadata, for LINK segments. Anchor text should be stored in the "text" field of the Segment, which can also serve as a fallback.
   */
  export interface Schema$LinkData {
    /**
     * An Attachment represents the structured entity to which we are linking. It contains an Embed (apps/tacotown/proto/embeds/embed_client.proto) with fields specific to the appropriate type of linked entity. For example, if we are linking to a photo album, the Embed may include the album ID and gaia ID of the creator. Clients that understand the Embed type within the Attachment may construct and/or decorate their link appropriately e.g. to make use of type-specific functionality or first-party integrations. The link_target and (if appropriate) display_url fields must still be set even when an Attachment is present, so that clients who do not know how to interpret the Attachment can fall back to those fields, and render the Segment as an ordinary web link. N.B. Even when an Attachment is present, the intention of a "LINK" Segment is for the Segment to be presented inline with the rest of the text of a post or comment, with a clickable link or other UI suitable for inlining (though the client may modify the UI based on Attachment data, e.g. to add appropriate hovers, icons, etc.). When an entity is intended to be rendered separately from the main body of the post/comment, a separate Attachment proto can be added outside the set of Segments. N.B. Within the Attachment, fields of EmbedClientItem have their own visibility annotations, which should be enforced separately from Segment visibility annotations. See: apps/tacotown/proto/embeds/embed_annotations.proto
     */
    attachment?: Schema$SocialCommonAttachmentAttachment;
    /**
     * The hint to use when rendering the associated attachment. Ignored if there is no associated attachment.
     */
    attachmentRenderHint?: string | null;
    /**
     * If we wish to show the user a different (e.g. shortened) version of the URL for display purposes, then that version should be set here. If this field isn't set, link_target will be used for both purposes.
     */
    displayUrl?: string | null;
    /**
     * link_target is the URL to navigate to when clicked. This could be the original URL, or a URL signed by the GWS URL signing service.
     */
    linkTarget?: string | null;
    /**
     * LinkType is an optional field that provides additional information regarding link target. For example, link type can be identified as the SELF_LINK when the request was executed from the same link as the link target.
     */
    linkType?: string | null;
    /**
     * Title is an optional field that provides a short string that describes the link or its destination. User interfaces often use title as a tooltip or for accessibility purposes. However, they are of course free to present this data in any form. This field is plain text.
     */
    title?: string | null;
  }
  export interface Schema$ListDataSourceResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    sources?: Schema$DataSource[];
  }
  export interface Schema$ListItemNamesForUnmappedIdentityResponse {
    itemNames?: string[] | null;
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListItemsResponse {
    items?: Schema$Item[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
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
  }
  /**
   * List sources response.
   */
  export interface Schema$ListQuerySourcesResponse {
    nextPageToken?: string | null;
    sources?: Schema$QuerySource[];
  }
  export interface Schema$ListSearchApplicationsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    searchApplications?: Schema$SearchApplication[];
  }
  export interface Schema$ListUnmappedIdentitiesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    unmappedIdentities?: Schema$UnmappedIdentity[];
  }
  export interface Schema$MatchInfo {
    /**
     * Reference keys for image attachments that matches search query.
     */
    matchingImageReferenceKey?: string[] | null;
  }
  /**
   * Matched range of a snippet [start, end).
   */
  export interface Schema$MatchRange {
    /**
     * End of the match in the snippet.
     */
    end?: number | null;
    /**
     * Starting position of the match in the snippet.
     */
    start?: number | null;
  }
  /**
   * An entity from the MDB namespace that is to be interpreted as a group. If using this for authorization, you should do an exact match of the peer role against group_name or any of the names in the Chubby expansion of the MDB group named group_name.
   */
  export interface Schema$MdbGroupProto {
    groupName?: string | null;
  }
  /**
   * An entity from the MDB namespace that is to be interpreted as a user. If using this for authorization, you should only do an exact match on the peer role against user_name.
   */
  export interface Schema$MdbUserProto {
    /**
     * Do not set this field. Contact credentials-eng@ if you believe you absolutely need to use it. This is the @prod.google.com Gaia ID that corresponds to the MDB user, see go/authn-merge for details. This field may always be safely ignored when performing an authorization check.
     */
    gaiaId?: string | null;
    userName?: string | null;
  }
  /**
   * Media resource.
   */
  export interface Schema$Media {
    /**
     * Name of the media resource.
     */
    resourceName?: string | null;
  }
  /**
   *  A meeting space is a persistent object that is the context for one or more calls. The meeting space is what makes users find each other when they want to meet and to find shared resources. With two exceptions, all the fields in the meeting space resource are visible publicly to any client, even anonymous users. The exceptions are that * The call_info field is only visible to clients that have a device (as indicated by the meeting token) in the JOINED or HIDDEN state. * The meeting_alias field will only be set for users who are in the same domain as the meeting space. The meeting space resource (outside call_info) should only contain information necessary to join a call in the meeting space, and not any other metadata about the meeting space, such as what organization it belongs to or things related to ongoing calls.
   */
  export interface Schema$MeetingSpace {
    /**
     * Which number classes are accepted by this meeting at the moment? When there is no ongoing conference, this field may change independent of the version number of the MeetingSpace. When a conference starts, this field will be locked to the value at that time, and then will be unlocked again at the end of the conference.
     */
    acceptedNumberClass?: string[] | null;
    /**
     * Broadcast access information for this meeting space.
     */
    broadcastAccess?: Schema$BroadcastAccess;
    /**
     * Information relevant to an ongoing conference. This field will be set in responses if the client requesting the meeting space has a device in one of the JOINED, HIDDEN, or MISSING_PREREQUISITES states. The field will also be set without a created device if the client requesting the meeting space is eligible to directly create a device in the JOINED state without knocking, eg a same-domain joiner. Can also only be updated by clients with a device in the JOINED state.
     */
    callInfo?: Schema$CallInfo;
    /**
     * The interop gateway access information for the meeting space. A gateway access can be used when joining conferences from non-Google equipment through an interop gateway.
     */
    gatewayAccess?: Schema$GatewayAccess;
    /**
     * The SIP based access methods that can be used to join the conference.
     */
    gatewaySipAccess?: Schema$GatewaySipAccess[];
    /**
     * An optional alias for the meeting space. The alias can in some cases be resolved to the meeting space, similar to the meeting code. The limitation is that the user needs to be in the same meeting domain as the meeting space.
     */
    meetingAlias?: string | null;
    /**
     * A meeting code is a globally unique code which points to a meeting space. Note: Meeting codes may be regenerated, which will cause old meeting codes to become invalid.
     */
    meetingCode?: string | null;
    /**
     * A unique server-generated ID for the meeting space. This is the resource name of the meeting space resource and has the form `spaces/`, where is a sequence of characters in the [base64url set](https://tools.ietf.org/html/rfc4648#section-5), without any `=` characters.
     */
    meetingSpaceId?: string | null;
    /**
     * A URL to identify and access the meeting space. Output only.
     */
    meetingUrl?: string | null;
    /**
     * Output only. A URL that clients (e.g. Calendar) can use to show the web page with all join methods available for this meeting space. This link is also used in iOS universal links and Android intents, used for opening the "More ways to join" view in the Meet mobile apps. Example: https://tel.meet/mee-ting-cod?pin=1234567891011 Here, "pin" is the universal phone PIN. We include it explicitly to better support the offline case on the mobile. This is set when the meeting space has either a universal PIN or an interop PIN and clients who can show a "more ways to join" button should show it whenever this field is set.
     */
    moreJoinUrl?: string | null;
    /**
     * All regional phone access methods for this meeting space. Can be empty.
     */
    phoneAccess?: Schema$PhoneAccess[];
    /**
     * Settings of the meeting space.
     */
    settings?: Schema$Settings;
    /**
     * A universal phone access method for this meeting space. Can be unset.
     */
    universalPhoneAccess?: Schema$UniversalPhoneAccess;
  }
  export interface Schema$Member {
    roster?: Schema$Roster;
    user?: Schema$User;
  }
  /**
   * Eventually this can be updated to a oneOf User, Space (for nested spaces), Bots or Service, as and when these use cases come up.
   */
  export interface Schema$MemberId {
    /**
     * Unique, immutable ID of the Roster.
     */
    rosterId?: Schema$RosterId;
    /**
     * Unique, immutable ID of the User.
     */
    userId?: Schema$UserId;
  }
  /**
   * Annotation metadata to display system messages for membership changes. Next Tag: 8
   */
  export interface Schema$MembershipChangedMetadata {
    affectedMemberProfiles?: Schema$Member[];
    /**
     * List of users and rosters whose membership status changed.
     */
    affectedMembers?: Schema$MemberId[];
    affectedMemberships?: Schema$AffectedMembership[];
    /**
     * The user whose action triggered this system message.
     */
    initiator?: Schema$UserId;
    /**
     * Complete member profiles, when ListTopicsRequest FetchOptions.USER is set. Otherwise, only the id will be filled in.
     */
    initiatorProfile?: Schema$User;
    /**
     * The type of the user who initiated this membership change.
     */
    initiatorType?: string | null;
    type?: string | null;
  }
  export interface Schema$MembershipChangeEvent {
    /**
     * This should only be set when MembershipChange type is LEAVE.
     */
    leaveReason?: string | null;
    participantId?: Schema$StoredParticipantId[];
    type?: string | null;
  }
  /**
   * This is deprecated and please use SelectionControl by setting type to DROPDOWN.
   */
  export interface Schema$Menu {
    items?: Schema$MenuItem[];
    /**
     * Label used to be displayed ahead of the menu. It is optional.
     */
    label?: string | null;
    /**
     * The name of the text field which is will be used in FormInput.
     */
    name?: string | null;
    /**
     * If specified, form is submitted when selection changed. If not specified, developer will need to specify a separate button.
     */
    onChange?: Schema$FormAction;
  }
  export interface Schema$MenuItem {
    selected?: boolean | null;
    /**
     * The text to be displayed.
     */
    text?: string | null;
    /**
     * The value associated with this item which will be sent back to app scripts. Client should use as a form input value.
     */
    value?: string | null;
  }
  /**
   * Message posted to a Space.
   */
  export interface Schema$Message {
    /**
     * Annotations parsed and extracted from the text body.
     */
    annotations?: Schema$Annotation[];
    /**
     * Custom display profile info for apps. Leave the field empty for real users.
     */
    appProfile?: Schema$AppsDynamiteSharedAppProfile;
    /**
     * Attachments parsed from incoming webhooks
     */
    attachments?: Schema$Attachment[];
    /**
     * Lightweight message attributes which values are calculated and set in the servers.
     */
    attributes?: Schema$MessageAttributes;
    /**
     * Responses from bots indicating if extra auth/config is needed.
     */
    botResponses?: Schema$BotResponse[];
    /**
     * Communal labels associated with a message. These exist on the message itself regardless of which user fetches them. Order of entries is arbitrary and will not list duplicates of the same label_id. See go/chat-labels-design for details.
     */
    communalLabels?: Schema$CommunalLabelTag[];
    contentReportSummary?: Schema$ContentReportSummary;
    /**
     * Time when the Message was posted in microseconds.
     */
    createTime?: string | null;
    /**
     * ID of the User who posted the Message. This includes information to identify if this was posted by an App on behalf of a user.
     */
    creatorId?: Schema$UserId;
    /**
     * Indicates who can delete the message. This field is set on the read path (e.g. ListTopics) but doesn’t have any effect on the write path (e.g. CreateMessageRequest).
     */
    deletableBy?: string | null;
    /**
     * Was this message deleted by Vault (Only used for Vault support) This is false if message is live or message was deleted by user.
     */
    deletedByVault?: boolean | null;
    /**
     * Time when the Message was deleted in microseconds. This field is set to nonzero value only for Messages deleted globally.
     */
    deleteTime?: string | null;
    /**
     * Time when the Message was per-user deleted by the message requester in microseconds. This field is set to nonzero value only for Message per-user deleted by the requester.
     */
    deleteTimeForRequester?: string | null;
    /**
     * Data Loss Prevention scan information for this message. Messages are evaluated in the backend on create message/topic and edit message actions. DEPRECATED: use dlp_scan_summary instead.
     */
    dlpScanOutcome?: string | null;
    /**
     * Data Loss Prevention scan information for this message. Messages are evaluated in the backend on create message/topic and edit message actions.
     */
    dlpScanSummary?: Schema$DlpScanSummary;
    /**
     * Indicates who can edit the message. This field is set on the read path (e.g. ListTopics) but doesn’t have any effect on the write path (e.g. CreateMessageRequest).
     */
    editableBy?: string | null;
    /**
     * A plain-text description of the attachment, used when clients cannot display formatted attachment (e.g. mobile push notifications).
     */
    fallbackText?: string | null;
    /**
     * ID of the resource.
     */
    id?: Schema$MessageId;
    /**
     * Whether the message is content purged. Content purged messages contain only data required for tombstone (see go/chat-infinite-tombstone). This field is only used by Vault to display tombstone and should only be set to true if the message is a tombstone.
     */
    isContentPurged?: boolean | null;
    /**
     * Output only. Indicates if the message is an inline reply. Set to true only if the message's ParentPath is non-NULL. Currently, only inline replies have non-NULL ParentPath. See go/chat-be-inline-reply-indicator.
     */
    isInlineReply?: boolean | null;
    /**
     * If the message was edited by a user, timestamp of the last edit, in microseconds.
     */
    lastEditTime?: string | null;
    /**
     * Time when the Message text was last updated in microseconds.
     */
    lastUpdateTime?: string | null;
    /**
     * A unique id specified on the client side.
     */
    localId?: string | null;
    /**
     * An optional payload (restricted to 1P applications) that will be stored with this message. This can only be set by the 1P API and should be used to deliver additional data such a 1P sync version, 1P entity ID to the client for more advanced functionality [Eg. inform Group Tasks tab of new version while linking, fetch & render a live Task/Meet call tile].
     */
    messageIntegrationPayload?: Schema$AppsDynamiteSharedMessageIntegrationPayload;
    /**
     * Where the message was posted from
     */
    messageOrigin?: string | null;
    /**
     * State of the message, indicating whether the message is visible to all members in the group or is only visible to the sender only, or the private_message_viewer if it is set.
     */
    messageState?: string | null;
    /**
     * Indicates if this message contains any suggestions that were provided by any Apps.
     */
    originAppSuggestions?: Schema$AppsDynamiteSharedOriginAppSuggestion[];
    /**
     * Personal labels associated with a message for the viewing user. Order of entries is arbitrary and will not list duplicates of the same label_id. See go/chat-labels-design for details. NOTE: This will be unpopulated in the case of SpaceChangelog events.
     */
    personalLabels?: Schema$PersonalLabelTag[];
    /**
     * A list of per-user private information. This is deprecated, because we no longer plan to support partially private messages or private messages for multiple users. The message_state and private_message_viewer fields should be sufficient for this infrastructure.
     */
    privateMessageInfos?: Schema$PrivateMessageInfo[];
    /**
     * Should only be set if the Message State is PRIVATE. If set, the message content is only visible to this user (and any apps associated with the message), as well as the message creator. If unset, a private message is visible to the message creator only.
     */
    privateMessageViewer?: Schema$UserId;
    /**
     * Contains additional (currently Hangouts Classic only) properties applicable to this message.
     */
    props?: Schema$MessageProps;
    /**
     * Output only. Whether this message has been quoted by another message or not. Used by clients to handle message edit flows for messages that have been quoted.
     */
    quotedByState?: string | null;
    /**
     * Output only. Metadata for a message that is quoted by this message.
     */
    quotedMessageMetadata?: Schema$QuotedMessageMetadata;
    /**
     * A list of user reactions to this message. Ordered by the timestamp of the first reaction, ascending (oldest to newest).
     */
    reactions?: Schema$AppsDynamiteSharedReaction[];
    /**
     * Output only. Details of content reports. Set only when the request asks for it.
     */
    reports?: Schema$ContentReport[];
    /**
     * The retention settings of the message.
     */
    retentionSettings?: Schema$AppsDynamiteSharedRetentionSettings;
    /**
     * Used by clients to correctly log format type for message creation due to complexity with client side optimistic update (see go/content-metric-post-send-logging for details). Currently, only set by server in the message or topic creation path.
     */
    richTextFormattingType?: string | null;
    /**
     * A client-specified string that can be used to uniquely identify a message in a space, in lieu of `id.message_id`.
     */
    secondaryMessageKey?: string | null;
    /**
     * Plaintext body of the Message.
     */
    textBody?: string | null;
    /**
     * Information for the stoning of a Message.
     */
    tombstoneMetadata?: Schema$TombstoneMetadata;
    /**
     * ID of the User who last updated (created/edited/deleted) the Message. This includes information to identify if this was updated by an App on behalf of a user.
     */
    updaterId?: Schema$UserId;
    /**
     * UploadMetadata b/36864213 is an ongoing effort to move UploadMetadata out of annotations field and save it to upload_metadata field only. After the migration, UploadMetadata will only be saved in this field.
     */
    uploadMetadata?: Schema$UploadMetadata[];
  }
  /**
   * A message was added. Specifying id and initial labels.
   */
  export interface Schema$MessageAdded {
    attributeIds?: string[] | null;
    labelIds?: string[] | null;
    messageKey?: Schema$MultiKey;
    /**
     * Note that there can be fewer sync ids than label ids.
     */
    syncIds?: number[] | null;
  }
  /**
   * Stores tombstone message attributes: go/tombstone-message-attributes-overview
   */
  export interface Schema$MessageAttributes {
    /**
     * If true: message is a tombstone in the client. Default false.
     */
    isTombstone?: boolean | null;
  }
  /**
   * Some (subset of the) messages in this thread were deleted.
   */
  export interface Schema$MessageDeleted {
    /**
     * Value of coproc's message delete history record extension that exports /imapsync/folder attribute of deleted messages which have ^is label.
     */
    imapSyncMappings?: Schema$ImapSyncDelete[];
    messageKeys?: Schema$MultiKey[];
    /**
     * Value of coproc's message delete history record extension that exports /wonder/message_mapping/{vertical\} attribute of deleted messages which have smartmail label (eg. ^cob_sm_invoice, etc).
     */
    wonderCardMappings?: Schema$WonderCardDelete[];
  }
  /**
   * Primary key for Message resource.
   */
  export interface Schema$MessageId {
    /**
     * Opaque, server-assigned ID of the Message. While this ID is guaranteed to be unique within the Space, it's not guaranteed to be globally unique.
     */
    messageId?: string | null;
    /**
     * ID of the Message's immediate parent.
     */
    parentId?: Schema$MessageParentId;
  }
  export interface Schema$MessageInfo {
    /**
     * The content of a matching message.
     */
    message?: Schema$Message;
    /**
     * Searcher's membership state in the space where the message is posted.
     */
    searcherMembershipState?: string | null;
  }
  /**
   * Primary key identifying Message resource's immediate parent. For top-level Messages, either topic_id or chat_id is populated. For replies, message_id is populated with the topic Message's ID.
   */
  export interface Schema$MessageParentId {
    /**
     * ID of the Topic this Message is posted to. NEXT TAG : 5
     */
    topicId?: Schema$TopicId;
  }
  /**
   * Container for storing properties applicable to messages. For now (until storage consolidation is complete), it will only be used for babel props. In the future it could be used to house Dynamite properties for experimenting/rapid prototyping.
   */
  export interface Schema$MessageProps {
    babelProps?: Schema$BabelMessageProps;
  }
  /**
   * This is proto2's version of MessageSet.
   */
  export interface Schema$MessageSet {}
  /**
   * Metadata of a matched search result.
   */
  export interface Schema$Metadata {
    /**
     * The creation time for this document or object in the search result.
     */
    createTime?: string | null;
    /**
     * Options that specify how to display a structured data search result.
     */
    displayOptions?: Schema$ResultDisplayMetadata;
    /**
     * Indexed fields in structured data, returned as a generic named property.
     */
    fields?: Schema$NamedProperty[];
    /**
     * Mime type of the search result.
     */
    mimeType?: string | null;
    /**
     * Object type of the search result.
     */
    objectType?: string | null;
    /**
     * Owner (usually creator) of the document or object of the search result.
     */
    owner?: Schema$Person;
    /**
     * The named source for the result, such as Gmail.
     */
    source?: Schema$Source;
    /**
     * The thumbnail URL of the result.
     */
    thumbnailUrl?: string | null;
    /**
     * The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When `updateTime` is used for calculating freshness and is not set, this value defaults to 2 years from the current time.
     */
    updateTime?: string | null;
  }
  /**
   * A metaline is a list of properties that are displayed along with the search result to provide context.
   */
  export interface Schema$Metaline {
    /**
     * The list of displayed properties for the metaline. The maximum number of properties is 5.
     */
    properties?: Schema$DisplayedProperty[];
  }
  /**
   * A union-like type for identifiying an object in storage. MultiKeys contain multiple key fields, each in a separate key space. At least one key field must be set. More than one key field may be set as long as all key values refer to the same object. All objects in storage have unique server_id keys. All MultiKeys returned from storage to storage clients will always have the server_id field set. When creating an object, if a MultiKey without a server_id is supplied to storage, the storage system will auto-assign a server ID to the new object. For all other storage requests (i.e. those not creating new objects), clients may omit server_id (as long as they supply another key). Instead of server ids, clients can specify string based client_assigned_perm_id keys. Mail message drafts are a prime example of these kinds of objects. Each time a user saves a new version of a draft, the storage system needs to create a new object with the updated draft content and needs to delete the object containing the old content. The new object gets a new SERVER_ID but should get the same CLIENT_ASSIGNED_PERM_ID as the now-deleted object containing the old content. Carrying forward the perm ID allows it to be used to consistently refer to the same logical object across revisions. These perm IDs save sync clients from having to deal with changing object IDs. For example, assume there's a mail message in storage with SERVER_ID = 123 and CLIENT_ASSIGNED_PERM_ID = "foo". The following are all valid ways of addressing the object using MultiKeys: 1) MultiKey { server_id = 123 \} 2) MultiKey { server_id = 123, client_assigned_perm_id = "foo" \} 3) MultiKey { client_assigned_perm_id = "foo" \} Multikeys are never serialized in the storage. The individual keys are extracted and processed separately. Both the integer ids as well as string ids are indexed for efficient retrieval using the same fields in the backend. See go/tingle-multikeys for more information on background and motivation.
   */
  export interface Schema$MultiKey {
    /**
     * A client-assigned string based key.
     */
    clientAssignedPermId?: string | null;
    /**
     * A server-assigned ID. This ID must be used only by Gmail and is constructed using millesecond ts << 20 + randomness. The ID affects the sort order of the index.
     */
    serverId?: string | null;
  }
  /**
   * A person's name.
   */
  export interface Schema$Name {
    /**
     * The read-only display name formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header.
     */
    displayName?: string | null;
  }
  /**
   * A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
   */
  export interface Schema$NamedProperty {
    booleanValue?: boolean | null;
    dateValues?: Schema$DateValues;
    doubleValues?: Schema$DoubleValues;
    enumValues?: Schema$EnumValues;
    htmlValues?: Schema$HtmlValues;
    integerValues?: Schema$IntegerValues;
    /**
     * The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters.
     */
    name?: string | null;
    objectValues?: Schema$ObjectValues;
    textValues?: Schema$TextValues;
    timestampValues?: Schema$TimestampValues;
  }
  /**
   * Represents an OAuth consumer, a/k/a AuthSub target. These principals are identified by domain name (e.g., example.com). Historically, Dasher domain GAIA group IDs have been used instead, but that doesn't work: http://go/tricky-gaia-ids
   */
  export interface Schema$OAuthConsumerProto {
    domain?: string | null;
  }
  /**
   * The definition for an object within a data source.
   */
  export interface Schema$ObjectDefinition {
    /**
     * The name for the object, which then defines its type. Item indexing requests should set the objectType field equal to this value. For example, if *name* is *Document*, then indexing requests for items of type Document should set objectType equal to *Document*. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.
     */
    name?: string | null;
    /**
     * The optional object-specific options.
     */
    options?: Schema$ObjectOptions;
    /**
     * The property definitions for the object. The maximum number of elements is 1000.
     */
    propertyDefinitions?: Schema$PropertyDefinition[];
  }
  /**
   * The display options for an object.
   */
  export interface Schema$ObjectDisplayOptions {
    /**
     * Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set is_returnable to true. The maximum number of metalines is 3.
     */
    metalines?: Schema$Metaline[];
    /**
     * The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters.
     */
    objectDisplayLabel?: string | null;
  }
  /**
   * The options for an object.
   */
  export interface Schema$ObjectOptions {
    /**
     * The options that determine how the object is displayed in the Cloud Search results page.
     */
    displayOptions?: Schema$ObjectDisplayOptions;
    /**
     * The freshness options for an object.
     */
    freshnessOptions?: Schema$FreshnessOptions;
    /**
     * Operators that can be used to filter suggestions. For Suggest API, only operators mentioned here will be honored in the FilterOptions. Only TEXT and ENUM operators are supported. NOTE: "objecttype", "type" and "mimetype" are already supported. This property is to configure schema specific operators. Even though this is an array, only one operator can be specified. This is an array for future extensibility. Operators mapping to multiple properties within the same object are not supported. If the operator spans across different object types, this option has to be set once for each object definition.
     */
    suggestionFilteringOperators?: string[] | null;
  }
  /**
   * The options for object properties.
   */
  export interface Schema$ObjectPropertyOptions {
    /**
     * The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000.
     */
    subobjectProperties?: Schema$PropertyDefinition[];
  }
  /**
   * List of object values.
   */
  export interface Schema$ObjectValues {
    values?: Schema$StructuredDataObject[];
  }
  export interface Schema$OnClick {
    action?: Schema$FormAction;
    /**
     * This can be used as a short form for OpenLink with the default OpenAs and OnClose. It may be undeprecated if this proves to be handy for developers.
     */
    link?: string | null;
    openLink?: Schema$OpenLink;
    /**
     * An add-on triggers this action when the form action needs to open a link. This differs from the open_link above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.
     */
    openLinkAction?: Schema$FormAction;
  }
  export interface Schema$OpenCreatedDraftActionMarkup {
    /**
     * The ID of the newly created draft in the form "r123".
     */
    draftId?: string | null;
    /**
     * The server storage ID in hex format, for example,"15e9fa622ce1029d".
     */
    draftStorageId?: string | null;
    /**
     * The ID of the thread containing the newly created draft, for example, "15e9fa622ce1029d".
     */
    draftThreadId?: string | null;
    /**
     * The server permanent ID for the draft's thread. This field isn't set anywhere, and it's ignored when processing OpenCreatedDraftActionMarkup. Supply and use draftThreadStorageId instead.
     */
    draftThreadServerPermId?: string | null;
  }
  export interface Schema$OpenLink {
    /**
     * Next available ID: 5
     */
    loadIndicator?: string | null;
    onClose?: string | null;
    openAs?: string | null;
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
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  export interface Schema$OsVersion {
    majorVersion?: number | null;
    minorVersion?: number | null;
    tertiaryVersion?: number | null;
  }
  export interface Schema$OtrChatMessageEvent {
    expirationTimestampUsec?: string | null;
    kansasRowId?: string | null;
    kansasVersionInfo?: string | null;
    messageOtrStatus?: string | null;
  }
  export interface Schema$OtrModificationEvent {
    newOtrStatus?: string | null;
    newOtrToggle?: string | null;
    oldOtrStatus?: string | null;
    oldOtrToggle?: string | null;
  }
  /**
   * Developers register a client in Google API Console to get the deep-linking feature on Google+ posts or frames about their apps. The client data is stored in this proto.
   */
  export interface Schema$PackagingServiceClient {
    /**
     * Android app's package name to generate the deep-link URI.
     */
    androidPackageName?: string | null;
    /**
     * iOS app's App Store ID to generate the App Store URL when app is not installed on device.
     */
    iosAppStoreId?: string | null;
    /**
     * iOS app's bundle ID to generate the deep-link URI.
     */
    iosBundleId?: string | null;
    /**
     * Type of Google API Console client.
     */
    type?: string | null;
  }
  /**
   * Information provided to clients so that they can show upgrade promos and warnings on call ending early (for non-paying users).
   */
  export interface Schema$PaygateInfo {
    /**
     * Time when client should show message that the call is ending soon.
     */
    callEndingSoonWarningTime?: string | null;
    /**
     * Time when the call will end if the user does not upgrade (after in-call upgrade support check has been implemented).
     */
    callEndingTime?: string | null;
    /**
     * This boolean is used by clients to decide whether the user should be shown promos to upgrade.
     */
    showUpgradePromos?: boolean | null;
  }
  /**
   * This field contains information about the person being suggested.
   */
  export interface Schema$PeopleSuggestion {
    /**
     * Suggested person. All fields of the person object might not be populated.
     */
    person?: Schema$Person;
  }
  /**
   * Object to represent a person.
   */
  export interface Schema$Person {
    /**
     * The person's email addresses
     */
    emailAddresses?: Schema$EmailAddress[];
    /**
     * The resource name of the person to provide information about. See [`People.get`](https://developers.google.com/people/api/rest/v1/people/get) from the Google People API.
     */
    name?: string | null;
    /**
     * Obfuscated ID of a person.
     */
    obfuscatedId?: string | null;
    /**
     * The person's name
     */
    personNames?: Schema$Name[];
    /**
     * The person's phone numbers
     */
    phoneNumbers?: Schema$PhoneNumber[];
    /**
     * A person's read-only photo. A picture shown next to the person's name to help others recognize the person in search results.
     */
    photos?: Schema$Photo[];
  }
  /**
   * An individual instance (or "tag") of a label configured as a personal type that's associated with a message.
   */
  export interface Schema$PersonalLabelTag {
    /**
     * A string ID representing the label. Possible ID values are documented at go/chat-labels-howto:ids. Examples: "^t" for "Starred", "^nu" for "Nudged".
     */
    labelId?: string | null;
  }
  /**
   * Phone access contains information required to dial into a conference using a regional phone number and a PIN that is specific to that phone number.
   */
  export interface Schema$PhoneAccess {
    /**
     * The phone number to dial for this meeting space in INTERNATIONAL format. Full phone number with a leading '+' character and whitespace separations.
     */
    formattedPhoneNumber?: string | null;
    /**
     * The BCP 47/LDML language code for the language associated with this phone access. To be parsed by the i18n LanguageCode utility. Examples: "es-419" for Latin American Spanish, "fr-CA" for Canadian French.
     */
    languageCode?: string | null;
    /**
     * The phone number to dial for this meeting space in E.164 format. Full phone number with a leading '+' character.
     */
    phoneNumber?: string | null;
    /**
     * The PIN that users must enter after dialing the given number. The PIN consists of only decimal digits and the length may vary.
     */
    pin?: string | null;
    /**
     * The CLDR/ISO 3166 region code for the country associated with this phone access. To be parsed by the i18n RegionCode utility. Example: "SE" for Sweden.
     */
    regionCode?: string | null;
  }
  /**
   * A person's Phone Number
   */
  export interface Schema$PhoneNumber {
    /**
     * The phone number of the person.
     */
    phoneNumber?: string | null;
    type?: string | null;
  }
  /**
   * A person's photo.
   */
  export interface Schema$Photo {
    /**
     * The URL of the photo.
     */
    url?: string | null;
  }
  export interface Schema$PinnedItemId {
    /**
     * Identifier for a Drive file (e.g. Docs, Sheets, Slides).
     */
    driveId?: string | null;
  }
  export interface Schema$PollItemsRequest {
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * Maximum number of items to return. The maximum value is 100 and the default value is 20.
     */
    limit?: number | null;
    /**
     * Queue name to fetch items from. If unspecified, PollItems will fetch from 'default' queue. The maximum length is 100 characters.
     */
    queue?: string | null;
    /**
     * Limit the items polled to the ones with these statuses.
     */
    statusCodes?: string[] | null;
  }
  export interface Schema$PollItemsResponse {
    /**
     * Set of items from the queue available for connector to process. These items have the following subset of fields populated: version metadata.hash structured_data.hash content.hash payload status queue
     */
    items?: Schema$Item[];
  }
  /**
   * This message contains either the device model, or a prefix of the device model (AKA a trimmed device model). The "is_trimmed" field indicates which one it is.
   */
  export interface Schema$PossiblyTrimmedModel {
    isTrimmed?: boolean | null;
    model?: string | null;
  }
  /**
   * See http://s/?fileprint=//depot/google3/security/authentication/postini/auth_token.proto
   */
  export interface Schema$PostiniUserProto {
    postiniUserId?: string | null;
  }
  /**
   * PREF_DELETED
   */
  export interface Schema$PrefDeleted {}
  /**
   * HistoryRecord for changes associated with prefs, namely: PREF_WRITTEN PREF_DELETED
   */
  export interface Schema$PrefUpdate {
    /**
     * Name of the affected preference.
     */
    name?: string | null;
    prefDeleted?: Schema$PrefDeleted;
    prefWritten?: Schema$PrefWritten;
    preState?: Schema$FuseboxPrefUpdatePreState;
  }
  /**
   * PREF_WRITTEN
   */
  export interface Schema$PrefWritten {
    value?: string | null;
  }
  /**
   * Presenter contains information about which device is currently presenting as well as which device requested the presenter to be set.
   */
  export interface Schema$Presenter {
    /**
     * The device resource name of the device which requested the current presenter to be set. This field can not be modified by clients.
     */
    byDeviceId?: string | null;
    /**
     * The device resource names of other devices which can control the current presentation.
     */
    copresenterDeviceIds?: string[] | null;
    /**
     * The device resource name of the currently presenting device.
     */
    presenterDeviceId?: string | null;
  }
  /**
   * State of the thread previous to the update. This really just describes the label state of all messages before the update.
   */
  export interface Schema$PreState {
    labelIds?: string[] | null;
    messageKey?: Schema$MultiKey;
    /**
     * Note that there can be fewer sync ids than label ids.
     */
    syncIds?: number[] | null;
    threadKey?: Schema$MultiKey;
  }
  /**
   * Reference to a user, group, or domain.
   */
  export interface Schema$Principal {
    /**
     * This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id\}/groups/{ID\}
     */
    groupResourceName?: string | null;
    /**
     * This principal is a Google Workspace user, group or domain.
     */
    gsuitePrincipal?: Schema$GSuitePrincipal;
    /**
     * This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id\}/users/{ID\}
     */
    userResourceName?: string | null;
  }
  /**
   * A Principal represents something to which permissions are assigned, often but not always a user or group of some kind. It is most appropriate for use in ACLs and authorization checks. Callers should prefer to use the wrapper classes in google3/security/credentials/public/principal.h google3/java/com/google/security/credentials/Principal.java google3/security/credentials/go/principal.go unless direct proto access is essential. If you update this protocol buffer, please update the wrapper classes as well. LINT.IfChange
   */
  export interface Schema$PrincipalProto {
    /**
     * scope = ALL_AUTHENTICATED_USERS
     */
    allAuthenticatedUsers?: Schema$AllAuthenticatedUsersProto;
    /**
     * scope = CAP_TOKEN_HOLDER
     */
    capTokenHolder?: Schema$CapTokenHolderProto;
    /**
     * scope = CHAT
     */
    chat?: Schema$ChatProto;
    /**
     * scope = CIRCLE
     */
    circle?: Schema$CircleProto;
    /**
     * scope = CLOUD_PRINCIPAL
     */
    cloudPrincipal?: Schema$CloudPrincipalProto;
    /**
     * scope = CONTACT_GROUP
     */
    contactGroup?: Schema$ContactGroupProto;
    /**
     * scope = EMAIL_OWNER
     */
    emailOwner?: Schema$EmailOwnerProto;
    /**
     * scope = EVENT
     */
    event?: Schema$EventProto;
    /**
     * scope = GAIA_GROUP
     */
    gaiaGroup?: Schema$GaiaGroupProto;
    /**
     * scope = GAIA_USER
     */
    gaiaUser?: Schema$GaiaUserProto;
    /**
     * scope = HOST
     */
    host?: Schema$HostProto;
    /**
     * scope = LDAP_GROUP
     */
    ldapGroup?: Schema$LdapGroupProto;
    /**
     * scope = LDAP_USER
     */
    ldapUser?: Schema$LdapUserProto;
    /**
     * scope = MDB_GROUP
     */
    mdbGroup?: Schema$MdbGroupProto;
    /**
     * scope = MDB_USER
     */
    mdbUser?: Schema$MdbUserProto;
    /**
     * scope = OAUTH_CONSUMER;
     */
    oauthConsumer?: Schema$OAuthConsumerProto;
    /**
     * scope = POSTINI_USER
     */
    postiniUser?: Schema$PostiniUserProto;
    /**
     * scope = RBAC_ROLE
     */
    rbacRole?: Schema$RbacRoleProto;
    /**
     * scope = RBAC_SUBJECT
     */
    rbacSubject?: Schema$RbacSubjectProto;
    /**
     * scope = RESOURCE_ROLE
     */
    resourceRole?: Schema$ResourceRoleProto;
    /**
     * This is only optional because required enums cannot be extended. Currently required.
     */
    scope?: string | null;
    /**
     * scope = SIGNING_KEY_POSSESSOR
     */
    signingKeyPossessor?: Schema$SigningKeyPossessorProto;
    /**
     * scope = SIMPLE_SECRET_HOLDER
     */
    simpleSecretHolder?: Schema$SimpleSecretHolderProto;
    /**
     * scope = SOCIAL_GRAPH_NODE
     */
    socialGraphNode?: Schema$SocialGraphNodeProto;
    /**
     * scope = SQUARE
     */
    square?: Schema$SquareProto;
    /**
     * scope = YOUTUBE_USER
     */
    youtubeUser?: Schema$YoutubeUserProto;
    /**
     * scope = ZWIEBACK_SESSION
     */
    zwiebackSession?: Schema$ZwiebackSessionProto;
  }
  /**
   * Private message information specific to a given user. DEPRECATED: Use the privateMessageViewer field in CreateMessageInfo instead.
   */
  export interface Schema$PrivateMessageInfo {
    /**
     * Annotations private to {@code userId\}.
     */
    annotations?: Schema$Annotation[];
    /**
     * Attachments private to {@code userId\}.
     */
    attachments?: Schema$Attachment[];
    contextualAddOnMarkup?: Schema$GoogleChatV1ContextualAddOnMarkup[];
    gsuiteIntegrationMetadata?: Schema$GsuiteIntegrationMetadata[];
    /**
     * Text private to {@code user_id\}. Initial restriction: Only one of public text or private text is rendered on the client. So if public text is set, private text is ignored.
     */
    text?: string | null;
    /**
     * Required. The elements in this struct are visible to this user.
     */
    userId?: Schema$UserId;
  }
  export interface Schema$ProcessingError {
    /**
     * Error code indicating the nature of the error.
     */
    code?: string | null;
    /**
     * The description of the error.
     */
    errorMessage?: string | null;
    /**
     * In case the item fields are invalid, this field contains the details about the validation errors.
     */
    fieldViolations?: Schema$FieldViolation[];
  }
  /**
   * The definition of a property within an object.
   */
  export interface Schema$PropertyDefinition {
    booleanPropertyOptions?: Schema$BooleanPropertyOptions;
    datePropertyOptions?: Schema$DatePropertyOptions;
    /**
     * The options that determine how the property is displayed in the Cloud Search results page if it's specified to be displayed in the object's display options.
     */
    displayOptions?: Schema$PropertyDisplayOptions;
    doublePropertyOptions?: Schema$DoublePropertyOptions;
    enumPropertyOptions?: Schema$EnumPropertyOptions;
    htmlPropertyOptions?: Schema$HtmlPropertyOptions;
    integerPropertyOptions?: Schema$IntegerPropertyOptions;
    /**
     * Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, enum, integer, and text properties.
     */
    isFacetable?: boolean | null;
    /**
     * Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected.
     */
    isRepeatable?: boolean | null;
    /**
     * Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object.
     */
    isReturnable?: boolean | null;
    /**
     * Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, date, double, integer, and timestamp properties.
     */
    isSortable?: boolean | null;
    /**
     * Indicates that the property can be used for generating query suggestions.
     */
    isSuggestable?: boolean | null;
    /**
     * Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable. For more details, see [Define object properties](https://developers.google.com/cloud-search/docs/guides/schema-guide#properties)
     */
    isWildcardSearchable?: boolean | null;
    /**
     * The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.
     */
    name?: string | null;
    objectPropertyOptions?: Schema$ObjectPropertyOptions;
    textPropertyOptions?: Schema$TextPropertyOptions;
    timestampPropertyOptions?: Schema$TimestampPropertyOptions;
  }
  /**
   * The display options for a property.
   */
  export interface Schema$PropertyDisplayOptions {
    /**
     * The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is '1', the value by itself may not be useful context for the user. If the display name given was 'priority', then the user sees 'priority : 1' in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters.
     */
    displayLabel?: string | null;
  }
  /**
   * This field records where the ItemScope was retrieved, if it was created via a web fetch.
   */
  export interface Schema$Provenance {
    /**
     * Annotation blob from Annotation Service.
     */
    annotationBlob?: string | null;
    /**
     * Canonical url of the retrieved_url, if one was resolved during retrieval, for example, if a rel="canonical" link tag was provided in the retrieved web page.
     */
    canonicalUrl?: string | null;
    /**
     * The url originally passed in the PRS request, which should be used to re-discover the content. Note that this URL may be a forwarding service or link shortener (bit.ly), so it should not be assumed to be canonical, but should be used for navigation back to the original source of the itemscope.
     */
    inputUrl?: string | null;
    /**
     * Contains exact types as parsed, whether or not we recognized that type at parse time. If an itemscope is created by merging SchemaOrg markup and open graph markup then the first itemtype would be schemaorg type, the second would be open graph and so on. example: http://schema.org/VideoObject, og:video.movie Plain text; usually a URL
     */
    itemtype?: string[] | null;
    /**
     * The server retrieved timestamp (in msec).
     */
    retrievedTimestampMsec?: string | null;
    /**
     * The final URL that was the actual source of the itemscope, after any redirects.
     */
    retrievedUrl?: string | null;
  }
  /**
   * Represents an item to be pushed to the indexing queue.
   */
  export interface Schema$PushItem {
    /**
     * Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    contentHash?: string | null;
    /**
     * The metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    metadataHash?: string | null;
    /**
     * Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes.
     */
    payload?: string | null;
    /**
     * Queue to which this item belongs. The `default` queue is chosen if this field is not specified. The maximum length is 512 characters.
     */
    queue?: string | null;
    /**
     * Populate this field to store Connector or repository error details. This information is displayed in the Admin Console. This field may only be populated when the Type is REPOSITORY_ERROR.
     */
    repositoryError?: Schema$RepositoryError;
    /**
     * Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    structuredDataHash?: string | null;
    /**
     * The type of the push operation that defines the push behavior.
     */
    type?: string | null;
  }
  export interface Schema$PushItemRequest {
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * Item to push onto the queue.
     */
    item?: Schema$PushItem;
  }
  export interface Schema$QueryCountByStatus {
    count?: string | null;
    /**
     * This represents the http status code.
     */
    statusCode?: number | null;
  }
  export interface Schema$QueryInterpretation {
    interpretationType?: string | null;
    /**
     * The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY.
     */
    interpretedQuery?: string | null;
    /**
     * The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE.
     */
    reason?: string | null;
  }
  /**
   * Default options to interpret user query.
   */
  export interface Schema$QueryInterpretationConfig {
    /**
     * Set this flag to disable supplemental results retrieval, setting a flag here will not retrieve supplemental results for queries associated with a given search application. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for supplemental results.
     */
    forceDisableSupplementalResults?: boolean | null;
    /**
     * Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental results retrieval, and usage of synonyms including custom ones. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for verbatim mode.
     */
    forceVerbatimMode?: boolean | null;
  }
  /**
   * Options to interpret user query.
   */
  export interface Schema$QueryInterpretationOptions {
    /**
     * Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources.
     */
    disableNlInterpretation?: boolean | null;
    /**
     * Use this flag to disable supplemental results for a query. Supplemental results setting chosen at SearchApplication level will take precedence if set to True.
     */
    disableSupplementalResults?: boolean | null;
    /**
     * Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true.
     */
    enableVerbatimMode?: boolean | null;
  }
  /**
   * Information relevant only to a query entry.
   */
  export interface Schema$QueryItem {
    /**
     * True if the text was generated by means other than a previous user search.
     */
    isSynthetic?: boolean | null;
  }
  /**
   * The definition of a operator that can be used in a Search/Suggest request.
   */
  export interface Schema$QueryOperator {
    /**
     * Display name of the operator
     */
    displayName?: string | null;
    /**
     * Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator.
     */
    enumValues?: string[] | null;
    /**
     * Indicates the operator name that can be used to isolate the property using the greater-than operator.
     */
    greaterThanOperatorName?: string | null;
    /**
     * Can this operator be used to get facets.
     */
    isFacetable?: boolean | null;
    /**
     * Indicates if multiple values can be set for this property.
     */
    isRepeatable?: boolean | null;
    /**
     * Will the property associated with this facet be returned as part of search results.
     */
    isReturnable?: boolean | null;
    /**
     * Can this operator be used to sort results.
     */
    isSortable?: boolean | null;
    /**
     * Can get suggestions for this field.
     */
    isSuggestable?: boolean | null;
    /**
     * Indicates the operator name that can be used to isolate the property using the less-than operator.
     */
    lessThanOperatorName?: string | null;
    /**
     * The name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators.
     */
    objectType?: string | null;
    /**
     * The name of the operator.
     */
    operatorName?: string | null;
    /**
     * The type of the operator.
     */
    type?: string | null;
  }
  /**
   * List of sources that the user can search using the query API.
   */
  export interface Schema$QuerySource {
    /**
     * Display name of the data source.
     */
    displayName?: string | null;
    /**
     * List of all operators applicable for this source.
     */
    operators?: Schema$QueryOperator[];
    /**
     * A short name or alias for the source. This value can be used with the 'source' operator.
     */
    shortName?: string | null;
    /**
     * The name of the source
     */
    source?: Schema$Source;
  }
  /**
   * This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion.
   */
  export interface Schema$QuerySuggestion {}
  /**
   * Quote metadata: go/message-quoting-be-dd-v2. This proto is only used on the read path. For the request proto, refer to `QuotedMessagePayload`. Fields are either derived from storage directly from the Item this metadata belongs to, or is hydrated at read time from another Item read. Note: QuotedMessageMetadata proto is similar to Message proto with less field. Reasons to differtiate QuotedMessageMetadata from Message are: 1. Not all fields for original message is applicable for quoted message. (E.g. reactions, is_inline_reply, etc.), thus separting out for confusion. 2. We don't support nested message quoting. For more detailed discussion, please see http://shortn/_VsSXQb2C7P. For future reference: if your new feature/field will be supported in message quoting feature (go/chat-quoting-prd), you will need to add that field within QuotedMessageMetadata
   */
  export interface Schema$QuotedMessageMetadata {
    /**
     * Output only. Snapshot of the annotations of the quoted message.
     */
    annotations?: Schema$Annotation[];
    /**
     * Output only. Custom display profile info for apps. Will be empty for real users.
     */
    appProfile?: Schema$AppsDynamiteSharedAppProfile;
    /**
     * Output only. The bot attachment state of the quoted message. Used by clients to display a bot attachment indicator in the UI.
     */
    botAttachmentState?: string | null;
    /**
     * Output only. Time when the quoted message was posted in microseconds.
     */
    createTimeMicros?: string | null;
    /**
     * Output only. ID of the User who posted the quoted message. This includes information to identify if the quoted message was posted by an App on behalf of a user.
     */
    creatorId?: Schema$UserId;
    /**
     * Output only. Time when the quoted message was last edited by a user at the time when quoting action happens. Time is in microseconds.
     */
    lastEditTimeMicros?: string | null;
    /**
     * The `last_update_time` of the original message when the client initiated the quote creation. This is derived from the request payload passed from clients. Used to fetch the quoted message contents at a specific time on the read path. This field is populated from storage directly.
     */
    lastUpdateTimeWhenQuotedMicros?: string | null;
    /**
     * MessageId of the original message that is being quoted. This is derived from the request payload passed from clients. This field is populated from storage directly.
     */
    messageId?: Schema$MessageId;
    /**
     * Output only. The state of the quoted message. Used by clients to display tombstones for quotes that reference a deleted message.
     */
    messageState?: string | null;
    /**
     * Output only. The retention (OTR) settings of the quoted message.
     */
    retentionSettings?: Schema$AppsDynamiteSharedRetentionSettings;
    /**
     * Output only. Snapshot of the text body of the quoted message.
     */
    textBody?: string | null;
    /**
     * Output only. ID of the User who last updated (created/edited/deleted) the quoted message at the time when quoting action happens. This includes information to identify if the quoted message was posted by an App on behalf of a user.
     */
    updaterId?: Schema$UserId;
    /**
     * Output only. Upload metadata of the quoted message.
     */
    uploadMetadata?: Schema$UploadMetadata[];
  }
  /**
   * The rank contains a tuple of numbers which may be used as a general sort order. The rank should be treated as an ordered set of numbers, where the ordering is done in descending order of the most significant rank member. For example, given the following ranks described as (primary, secondary): (1,1), (1,2), (2,2) (2,1) The descending rank-order is: (2,2) \> (2,1) \> (1,2) \> (1,1)
   */
  export interface Schema$Rank {
    /**
     * The primary rank is the most significant rank member. This rank element should always be present. Items with higher primary rank are always considered of higher rank than those of lower primary rank.
     */
    primary?: string | null;
    /**
     * The secondary rank may be used to rank items of identical primary rank. This rank element should always be present.
     */
    secondary?: string | null;
  }
  /**
   * Principal associated with a given RBAC role. This principal is used by Sphinx Provisioning Service for RBAC provisionable (go/sphinx-rbacz).
   */
  export interface Schema$RbacRoleProto {
    name?: string | null;
    objectId?: string | null;
    /**
     * DEPRECATED as of 01.11.2019
     */
    rbacNamespace?: string | null;
    /**
     * Format: "role/z?" - "role" is the Sphinx globally unique name of the Sphinx role that provisions the RBAC role. - "/z?" suffix indicates which Zanzibar environment stores the role membership data ("/zd": dev, "/zs": staging, "/zp": prod, "/zt": local test instance). Example: "mysystem_myrole/zp"
     */
    rbacRoleName?: string | null;
  }
  /**
   * Principal associated with a given RBAC subject. This principal is used by Sphinx Provisioning Service for RBAC provisionable (go/sphinx-rbacz).
   */
  export interface Schema$RbacSubjectProto {
    /**
     * Format "username" without "@domain", e.g., "bogdand".
     */
    username?: string | null;
  }
  /**
   * Contains information about an emoji reaction.
   */
  export interface Schema$ReactionInfo {
    /**
     * Unicode string representing a single emoji.
     */
    emoji?: string | null;
  }
  export interface Schema$ReadReceiptsSettingsUpdatedMetadata {
    /**
     * The new read receipts state.
     */
    readReceiptsEnabled?: boolean | null;
  }
  export interface Schema$Recipient {
    email?: string | null;
  }
  /**
   * A recording event is something that happens to the recording in a conference.
   */
  export interface Schema$RecordingEvent {
    /**
     * The initiator of the latest event of the recording. It will be set for all user events (`type` is 100-199) and unset for all server events (`type` is 200-299).
     */
    deviceId?: string | null;
    /**
     * The type of event.
     */
    type?: string | null;
  }
  /**
   * This message is deprecated, please use RecordingSessionInfo instead. Information about recording in the current conference.
   */
  export interface Schema$RecordingInfo {
    /**
     * The latest recording event. This can be used by clients to help explain what is going on, why recording stopped, etc. This will always be set if there is or was an active recording, which means there can be latest event when recording is INACTIVE.
     */
    latestRecordingEvent?: Schema$RecordingEvent;
    /**
     * The display name of the owner of the recording output. Email notifications about uploaded recordings will also be sent to this owner.
     */
    ownerDisplayName?: string | null;
    /**
     * The device resource name of the producer device for the currently active recording. Note that, after the producer drops/leaves the conference, this field will be cleaned up by the server after a delay.
     */
    producerDeviceId?: string | null;
    /**
     * The application type of the current active recording. `RECORDING_APPLICATION_TYPE_UNSPECIFIED` if `recording_status` is inactive.
     */
    recordingApplicationType?: string | null;
    /**
     * An identifier for the current recording, if any. This is returned whenever recording_status is either `RECORDING_STARTING` or `RECORDING_STARTED`.
     */
    recordingId?: string | null;
    /**
     * The current status of the recording. This can be used by clients to show a recording dot or similar to indicated to the user that a recording is taking place.
     */
    recordingStatus?: string | null;
  }
  /**
   * Information about a recording session.
   */
  export interface Schema$RecordingSessionInfo {
    /**
     * Input only. Deprecated field, should not be used.
     */
    ownerEmail?: string | null;
    /**
     * A unique server-generated ID for the recording session.
     */
    recordingSessionId?: string | null;
    /**
     * Recording session's state information.
     */
    sessionStateInfo?: Schema$SessionStateInfo;
  }
  /**
   * All fields in this proto are now columns in spanner see google3/storage/slice/production/gmail/user_data_tables.pi for documentation.
   */
  export interface Schema$Reference {
    blobId?: string | null;
    contentType?: string | null;
    hash?: string | null;
    /**
     * LINT.IfChange
     */
    key?: string | null;
    /**
     * LINT.ThenChange(//depot/google3/storage/slice/production/gmail/ user_data_tables.pi)
     */
    name?: string | null;
    size?: string | null;
  }
  export interface Schema$References {
    references?: Schema$Reference[];
  }
  export interface Schema$RenameEvent {
    newName?: string | null;
    originalName?: string | null;
  }
  /**
   * Errors when the connector is communicating to the source repository.
   */
  export interface Schema$RepositoryError {
    /**
     * Message that describes the error. The maximum allowable length of the message is 8192 characters.
     */
    errorMessage?: string | null;
    /**
     * Error codes. Matches the definition of HTTP status codes.
     */
    httpStatusCode?: number | null;
    /**
     * The type of error.
     */
    type?: string | null;
  }
  export interface Schema$RequestFileScope {
    itemId?: string | null;
  }
  export interface Schema$RequestFileScopeForActiveDocument {}
  /**
   * Shared request options for all RPC methods.
   */
  export interface Schema$RequestOptions {
    /**
     * Debug options of the request
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. From Suggest API perspective, for 3p suggest this is used as a hint while making predictions to add language boosting.
     */
    languageCode?: string | null;
    /**
     * The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
     */
    searchApplicationId?: string | null;
    /**
     * Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
     */
    timeZone?: string | null;
  }
  /**
   * A list of capabilities that are used in this message.
   */
  export interface Schema$RequiredMessageFeaturesMetadata {
    requiredFeatures?: string[] | null;
  }
  export interface Schema$ResetSearchApplicationRequest {
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
  }
  /**
   * A type of sharing target that points to some resource's ACL. Used to refer to the set of Principals that have the given privilege ('role_id') for the given resource ('application_id', 'object_id', 'object_part'). The meaning of 'role_id' is interpreted only by implementations of AclRpcService and is usually dependent on 'application_id' All fields except object_part are required. If present, object_part must be non-empty.
   */
  export interface Schema$ResourceRoleProto {
    applicationId?: string | null;
    objectId?: string | null;
    objectPart?: string | null;
    roleId?: number | null;
  }
  /**
   * Debugging information about the response.
   */
  export interface Schema$ResponseDebugInfo {
    /**
     * General debug info formatted for display.
     */
    formattedDebugInfo?: string | null;
  }
  /**
   * Information relevant only to a restrict entry. NextId: 12
   */
  export interface Schema$RestrictItem {
    driveFollowUpRestrict?: Schema$DriveFollowUpRestrict;
    driveLocationRestrict?: Schema$DriveLocationRestrict;
    /**
     * Drive Types.
     */
    driveMimeTypeRestrict?: Schema$DriveMimeTypeRestrict;
    driveTimeSpanRestrict?: Schema$DriveTimeSpanRestrict;
    /**
     * The search restrict (e.g. "after:2017-09-11 before:2017-09-12").
     */
    searchOperator?: string | null;
  }
  /**
   * Result count information
   */
  export interface Schema$ResultCounts {
    /**
     * Result count information for each source with results.
     */
    sourceResultCounts?: Schema$SourceResultCount[];
  }
  /**
   * Debugging information about the result.
   */
  export interface Schema$ResultDebugInfo {
    /**
     * General debug info formatted for display.
     */
    formattedDebugInfo?: string | null;
  }
  /**
   * Display Fields for Search Results
   */
  export interface Schema$ResultDisplayField {
    /**
     * The display label for the property.
     */
    label?: string | null;
    /**
     * The operator name of the property.
     */
    operatorName?: string | null;
    /**
     * The name value pair for the property.
     */
    property?: Schema$NamedProperty;
  }
  /**
   * The collection of fields that make up a displayed line
   */
  export interface Schema$ResultDisplayLine {
    fields?: Schema$ResultDisplayField[];
  }
  export interface Schema$ResultDisplayMetadata {
    /**
     * The metalines content to be displayed with the result.
     */
    metalines?: Schema$ResultDisplayLine[];
    /**
     * The display label for the object.
     */
    objectTypeLabel?: string | null;
  }
  export interface Schema$RetrievalImportance {
    /**
     * Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed.
     */
    importance?: string | null;
  }
  export interface Schema$RoomRenameMetadata {
    newName?: string | null;
    /**
     * NEXT_TAG: 3
     */
    prevName?: string | null;
  }
  export interface Schema$RoomUpdatedMetadata {
    groupDetailsMetadata?: Schema$GroupDetailsUpdatedMetadata;
    groupLinkSharingEnabled?: boolean | null;
    /**
     * The user who initiated this room update. Complete member profiles, when ListTopicsRequest FetchOptions.USER is set. Otherwise, only the id will be filled in.
     */
    initiator?: Schema$User;
    /**
     * The type of the user who initiated this room update.
     */
    initiatorType?: string | null;
    /**
     * What was updated in the room.
     */
    name?: string | null;
    renameMetadata?: Schema$RoomRenameMetadata;
    /**
     * DEPRECATED: See GroupVisibility proto definition.
     */
    visibility?: Schema$AppsDynamiteSharedGroupVisibility;
  }
  /**
   * Roster profile information.
   */
  export interface Schema$Roster {
    avatarUrl?: string | null;
    id?: Schema$RosterId;
    /**
     * Whether caller has visibility into members of the roster.
     */
    isMembershipVisibleToCaller?: boolean | null;
    membershipCount?: number | null;
    name?: string | null;
    /**
     * Roster gaia key, usually an email address. Set in looking up rosters response.
     */
    rosterGaiaKey?: string | null;
    /**
     * Roster deletion state - considered active unless set to deleted
     */
    rosterState?: string | null;
    /**
     * Roster membership count. May contain counts based on member type and membership state.
     */
    segmentedMembershipCounts?: Schema$AppsDynamiteSharedSegmentedMembershipCounts;
  }
  /**
   * Primary key for Roster resource.
   */
  export interface Schema$RosterId {
    /**
     * Opaque, server-assigned ID of the Roster.
     */
    id?: string | null;
  }
  /**
   * Options for Triggers dispatched via RPC.
   */
  export interface Schema$RpcOptions {
    /**
     * The RPC's request extensions (i.e. RPC::request_extensions(), a.k.a. the Stubby side channel) will be merged with the specified [request_extensions]. When Triggers are batched, the RPC's request extensions will be merged with all of the [request_extensions] of the Triggers in the batch. Note that merging of request extensions follows standard protocol buffer semantics; values of singular fields override previous values, and values of repeated fields are appended (In the case of Triggers, Triggers with later fire times will be merged after Triggers with earlier fire times in the same batch). It is not advised to specify extensions with repeated fields on batchable Triggers.
     */
    requestExtensions?: Schema$MessageSet;
  }
  /**
   * Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code.
   */
  export interface Schema$SafeUrlProto {
    /**
     * IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message.
     */
    privateDoNotAccessOrElseSafeUrlWrappedValue?: string | null;
  }
  /**
   * The schema definition for a data source.
   */
  export interface Schema$Schema {
    /**
     * The list of top-level objects for the data source. The maximum number of elements is 10.
     */
    objectDefinitions?: Schema$ObjectDefinition[];
    /**
     * IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content.
     */
    operationIds?: string[] | null;
  }
  /**
   * Scoring configurations for a source while processing a Search or Suggest request.
   */
  export interface Schema$ScoringConfig {
    /**
     * Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI.
     */
    disableFreshness?: boolean | null;
    /**
     * Whether to personalize the results. By default, personal signals will be used to boost results.
     */
    disablePersonalization?: boolean | null;
  }
  /**
   * SearchApplication
   */
  export interface Schema$SearchApplication {
    /**
     * Retrictions applied to the configurations. The maximum number of elements is 10.
     */
    dataSourceRestrictions?: Schema$DataSourceRestriction[];
    /**
     * The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above.
     */
    defaultFacetOptions?: Schema$FacetOptions[];
    /**
     * The default options for sorting the search results
     */
    defaultSortOptions?: Schema$SortOptions;
    /**
     * Display name of the Search Application. The maximum length is 300 characters.
     */
    displayName?: string | null;
    /**
     * Indicates whether audit logging is on/off for requests made for the search application in query APIs.
     */
    enableAuditLog?: boolean | null;
    /**
     * The name of the Search Application. Format: searchapplications/{application_id\}.
     */
    name?: string | null;
    /**
     * Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field.
     */
    operationIds?: string[] | null;
    /**
     * The default options for query interpretation
     */
    queryInterpretationConfig?: Schema$QueryInterpretationConfig;
    /**
     * With each result we should return the URI for its thumbnail (when applicable)
     */
    returnResultThumbnailUrls?: boolean | null;
    /**
     * Configuration for ranking results.
     */
    scoringConfig?: Schema$ScoringConfig;
    /**
     * Configuration for a sources specified in data_source_restrictions.
     */
    sourceConfig?: Schema$SourceConfig[];
  }
  /**
   * Search application level query stats per date
   */
  export interface Schema$SearchApplicationQueryStats {
    /**
     * The date for which query stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    queryCountByStatus?: Schema$QueryCountByStatus[];
  }
  export interface Schema$SearchApplicationSessionStats {
    /**
     * The date for which session stats were calculated. Stats are calculated on the following day, close to midnight PST, and then returned.
     */
    date?: Schema$Date;
    /**
     * The count of search sessions on the day
     */
    searchSessionsCount?: string | null;
  }
  export interface Schema$SearchApplicationUserStats {
    /**
     * The date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    /**
     * The count of unique active users in the past one day
     */
    oneDayActiveUsersCount?: string | null;
    /**
     * The count of unique active users in the past seven days
     */
    sevenDaysActiveUsersCount?: string | null;
    /**
     * The count of unique active users in the past thirty days
     */
    thirtyDaysActiveUsersCount?: string | null;
  }
  export interface Schema$SearchItemsByViewUrlRequest {
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * The next_page_token value returned from a previous request, if any.
     */
    pageToken?: string | null;
    /**
     * Specify the full view URL to find the corresponding item. The maximum length is 2048 characters.
     */
    viewUrl?: string | null;
  }
  export interface Schema$SearchItemsByViewUrlResponse {
    items?: Schema$Item[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Additional search quality metadata of the item.
   */
  export interface Schema$SearchQualityMetadata {
    /**
     * An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0.
     */
    quality?: number | null;
  }
  /**
   * The search API request.
   */
  export interface Schema$SearchRequest {
    /**
     * Context attributes for the request which will be used to adjust ranking of search results. The maximum number of elements is 10.
     */
    contextAttributes?: Schema$ContextAttribute[];
    /**
     * The sources to use for querying. If not specified, all data sources from the current search application are used.
     */
    dataSourceRestrictions?: Schema$DataSourceRestriction[];
    facetOptions?: Schema$FacetOptions[];
    /**
     * Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested.
     */
    pageSize?: number | null;
    /**
     * The raw query string. See supported search operators in the [Narrow your search with operators](https://support.google.com/cloudsearch/answer/6172299)
     */
    query?: string | null;
    /**
     * Options to interpret the user query.
     */
    queryInterpretationOptions?: Schema$QueryInterpretationOptions;
    /**
     * Request options, such as the search application and user timezone.
     */
    requestOptions?: Schema$RequestOptions;
    /**
     * The options for sorting the search results
     */
    sortOptions?: Schema$SortOptions;
    /**
     * Starting index of the results.
     */
    start?: number | null;
  }
  /**
   * The search API response.
   */
  export interface Schema$SearchResponse {
    /**
     * Debugging information about the response.
     */
    debugInfo?: Schema$ResponseDebugInfo;
    /**
     * Error information about the response.
     */
    errorInfo?: Schema$ErrorInfo;
    /**
     * Repeated facet results.
     */
    facetResults?: Schema$FacetResult[];
    /**
     * Whether there are more search results matching the query.
     */
    hasMoreResults?: boolean | null;
    /**
     * Query interpretation result for user query. Empty if query interpretation is disabled.
     */
    queryInterpretation?: Schema$QueryInterpretation;
    /**
     * The estimated result count for this query.
     */
    resultCountEstimate?: string | null;
    /**
     * The exact result count for this query.
     */
    resultCountExact?: string | null;
    /**
     * Expanded result count information.
     */
    resultCounts?: Schema$ResultCounts;
    /**
     * Results from a search query.
     */
    results?: Schema$SearchResult[];
    /**
     * Suggested spelling for the query.
     */
    spellResults?: Schema$SpellResult[];
    /**
     * Structured results for the user query. These results are not counted against the page_size.
     */
    structuredResults?: Schema$StructuredResult[];
  }
  /**
   * Results containing indexed information for a document.
   */
  export interface Schema$SearchResult {
    /**
     * If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty.
     */
    clusteredResults?: Schema$SearchResult[];
    /**
     * Debugging information about this search result.
     */
    debugInfo?: Schema$ResultDebugInfo;
    /**
     * Metadata of the search result.
     */
    metadata?: Schema$Metadata;
    /**
     * The concatenation of all snippets (summaries) available for this result.
     */
    snippet?: Schema$Snippet;
    /**
     * Title of the search result.
     */
    title?: string | null;
    /**
     * The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed.
     */
    url?: string | null;
  }
  /**
   * Sections are separated by a line divider. They contain a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, AddOns have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
   */
  export interface Schema$Section {
    /**
     * Indicating whether this section is collapsable. If a section is collapsable, the description must be given.
     */
    collapsable?: boolean | null;
    /**
     * The header of the section, text formatted supported.
     */
    description?: string | null;
    /**
     * The number of uncollapsable widgets. For example, when a section contains 5 widgets and the num_uncollapsable_widget are set to be 2, The first 2 widgets will always shown and the last 3 is collapsed as default. Only when collapsable is set to be true, the num_uncollapsable_widget will be taken into account.
     */
    numUncollapsableWidgets?: number | null;
    /**
     * A section must contain at least 1 widget.
     */
    widgets?: Schema$WidgetMarkup[];
  }
  export interface Schema$Segment {
    /**
     * Formatting to be applied when rendering the Segment. For all segment types, this is the standard way of representing that the Segment should be rendered in bold, italics, etc.
     */
    formatting?: Schema$Formatting;
    /**
     * For HASHTAG type:
     */
    hashtagData?: Schema$HashtagData;
    /**
     * Type-specific metadata. At most one of these should be populated, and the one that is populated should correspond to the type of the Segment. For LINK type:
     */
    linkData?: Schema$LinkData;
    /**
     * Text content of the Segment. As a general rule, this field should contain the actual text that should be rendered in the UI. Thus, for a hashtag, it should be "#Foo", and for a link, it should be the display text. Clients that do not understand a particular segment type may use this text, along with the Formatting info below, as a fallback for display. The field is not required -- if all relevant information is carried in other metadata fields and there is no need for a fallback, or it is not practical for a fallback to be provided for any other reason, the field may be left blank. A standard example would be a user reference being transmitted between server layers, where a gaia-ID representation may be sufficient and there is no need for a textual fallback. In such a case, it would be valid and useful - though not required - for servers to compute and populate a fallback on the serving path.
     */
    text?: string | null;
    /**
     * Type of Segment.
     */
    type?: string | null;
    /**
     * For USER_MENTION type:
     */
    userMentionData?: Schema$UserMentionData;
  }
  export interface Schema$SelectionControl {
    /**
     * For radio button, at most one of the items will be selected.
     */
    items?: Schema$SelectionItem[];
    /**
     * Label used to be displayed ahead of the selection control. It is optional.
     */
    label?: string | null;
    /**
     * The name of the text field which is will be used in FormInput.
     */
    name?: string | null;
    /**
     * If specified, form is submitted when selection changed. If not specified, developer will need to specify a separate button.
     */
    onChange?: Schema$FormAction;
    type?: string | null;
  }
  export interface Schema$SelectionItem {
    /**
     * If more than one items are selected for RADIO_BUTTON and DROPDOWN, the first selected item is treated as sElected and the after ones are all ignored.
     */
    selected?: boolean | null;
    /**
     * The text to be displayed.
     */
    text?: string | null;
    /**
     * The value associated with this item which will be sent back to app scripts. Client should use as a form input value.
     */
    value?: string | null;
  }
  export interface Schema$SessionContext {
    /**
     * Time at which this activity's session was authenticated, in seconds since the epoch.
     */
    authTime?: string | null;
    /**
     * Gaia ID of the authenticated user when delegate access is active. In such sessions the main gaia ID is that of the delegator, i.e. the account being accessed.
     */
    delegateUserId?: string | null;
    /**
     * Device User Session ID, see go/dusi.
     */
    dusi?: string | null;
    /**
     * Imap session context for Bond/Gmail integration
     */
    imapSessionContext?: Schema$ImapSessionContext;
    /**
     * OAuth login ID.
     */
    oauthLoginId?: number | null;
    /**
     * The devconsole project ID of the developer who authenticated with OAuth.
     */
    oauthProjectId?: string | null;
  }
  /**
   * A session event is something that happens to the streaming session in a conference.
   */
  export interface Schema$SessionEvent {
    /**
     * The initiator of the latest event of the streaming session. It will be set for all user events (`type` is 100-199) and unset for all server events(`type` is 200-299).
     */
    deviceId?: string | null;
    /**
     * The type of event.
     */
    type?: string | null;
  }
  /**
   * Information about the state of a (recording, broadcast, transcription...) session in a conference.
   */
  export interface Schema$SessionStateInfo {
    /**
     * Output only. The ack info of the session.
     */
    ackInfo?: Schema$AckInfo;
    /**
     * Immutable. The language configuration used by this session. When empty, captions will be disabled. It's a required field for transcription sessions.
     */
    languageConfig?: Schema$LanguageConfig;
    /**
     * Output only. The device id of the actor is set if the current state is a result of a user action, is empty otherwise.
     */
    lastActorDeviceId?: string | null;
    /**
     * Output only. The max end time of the session, at this time the session will be force stopped/terminated. Clients are expected to use this timestamp to warn users about the force stop.
     */
    maxEndTime?: string | null;
    /**
     * State of the session.
     */
    sessionState?: string | null;
    /**
     * Output only. The reason the session was transitioned to STOPPED state.
     */
    sessionStopReason?: string | null;
  }
  /**
   * Settings of a meeting space that can be edited by users with corresponding manage privilege. These settings are always populated in responses.
   */
  export interface Schema$Settings {
    /**
     * The access lock of the meeting space that lets hosts control who can join the meeting.
     */
    accessLock?: boolean | null;
    /**
     * The access type of the meeting space.
     */
    accessType?: string | null;
    /**
     * Whether users can join before host in the conferences of this meeting space.
     */
    allowJoiningBeforeHost?: boolean | null;
    /**
     * Whether attendance report is enabled for the meeting space.
     */
    attendanceReportEnabled?: boolean | null;
    /**
     * The chat lock of the meeting space that lets owner control whether the participants can send chat messages.
     */
    chatLock?: boolean | null;
    /**
     * Whether meeting artifacts will be shared with cohosts.
     */
    cohostArtifactSharingEnabled?: boolean | null;
    /**
     * Whether Client-side Encryption is enabled for the meeting space.
     */
    cseEnabled?: boolean | null;
    /**
     * Whether the default role is viewer or not.
     */
    defaultAsViewer?: boolean | null;
    /**
     * Indicates whether the meeting space is moderated.
     */
    moderationEnabled?: boolean | null;
    /**
     * The present lock of the meeting space that lets owner control whether the participants can present their screen.
     */
    presentLock?: boolean | null;
    /**
     * The reactions lock of the meeting space that lets owner control whether the participants can send reactions.
     */
    reactionsLock?: boolean | null;
  }
  export interface Schema$ShareScope {
    /**
     * If scope is DOMAIN, this field contains the dasher domain, for example "google.com".
     */
    domain?: string | null;
    /**
     * The scope to which the content was shared.
     */
    scope?: string | null;
  }
  export interface Schema$SheetsClientActionMarkup {
    customFunctionReturnValueMarkup?: Schema$CustomFunctionReturnValueMarkup;
  }
  /**
   * Represents a principal who possesses a signing key corresponding to the verification key or keyset described here.
   */
  export interface Schema$SigningKeyPossessorProto {
    /**
     * This value must be from the KeyMetadata.Type enum in keymaster.proto.
     */
    keymasterKeyType?: number | null;
    /**
     * The actual verification key bytes corresponding to the above type.
     */
    serializedVerificationKey?: string | null;
    /**
     * The binary serialized Keymaster SerializedReader of a public keyset. The keyset must contain exactly one key. N.B.: If this field is populated, serialized_verification_key should be set to the empty string and keymaster_key_type should be set to zero.
     */
    serializedVerificationKeyset?: string | null;
  }
  /**
   * Represents a principal which possesses a particular, presumably secret, string. Useful for things like "auth keys," used for anonymous sharing. Since representing this principal with the actual secret included reveals the secret, it's best if the requisite condition is enforced in some other way, for example via Keystore wrapping attributes (Keystore will unwrap only if the specified secret, aka "attribute", is presented). All that's stored here is an identifying label.
   */
  export interface Schema$SimpleSecretHolderProto {
    /**
     * A descriptive label to help identify a relevant ACL entry or otherwise disambiguate this instance.
     */
    label?: Schema$SimpleSecretLabelProto;
  }
  /**
   * SimpleSecretProto (in authenticator.proto) and SimpleSecretHolderProto (below) share the notion of a "label", which identifies a particular secret without (hopefully) revealing the secret. Note that a SimpleSecretLabel only disambiguates between secrets used to get access to some particular object. Two different secrets that apply to two different objects could have the same label. For example, in the common sharing model, each object has no more than one "auth key". Therefore, the label for an auth key simply has type = AUTH_KEY with no additional information. In theory, we could add some sort of resource ID to SimpleSecretLabel to make it more explicit. However, in practice, this is never really needed. A SimpleSecret for one object is never used to authorize a request on some other object, so there is no ambiguity. Also, since SimpleSecrets must obviously be unguessable, there is no risk that a SimpleSecret intended for one object will accidentally grant access to another.
   */
  export interface Schema$SimpleSecretLabelProto {
    /**
     * ***DEPRECATED (3-Oct-2011) *** This field should be deleted when code stops using CAP_TOKEN labels. Used when type = CAP_TOKEN. When a CAP_TOKEN label appears in a SimpleSecretHolder Principal, |capability_id| must be filled in to identify one of the capabilities on the ACL. When a CAP_TOKEN label appears in a SimpleSecret Authenticator, it is NOT necessary to fill in |capability_id| -- ACL Service will find the ID by searching all capabilities on the ACL for one associated with the token given by the SimpleSecret's secret data. If |capability_id| is specified, though, then the Authenticator will only be accepted if it actually matches that particular token ID.
     */
    capabilityId?: number | null;
    /**
     * Used when type = GENERIC_SECRET
     */
    genericLabel?: string | null;
    /**
     * Used when type == INVITE.
     */
    inviteId?: string | null;
    /**
     * This is optional because required enums cannot be extended.
     */
    type?: string | null;
  }
  /**
   * Annotation metadata for slash commands (/).
   */
  export interface Schema$SlashCommandMetadata {
    /**
     * Hint string for the arguments expected by the slash command.
     */
    argumentsHint?: string | null;
    /**
     * Unique id for the slash command.
     */
    commandId?: string | null;
    /**
     * Name of the slash command.
     */
    commandName?: string | null;
    /**
     * ID of the bot which owns the slash command.
     */
    id?: Schema$UserId;
    /**
     * Whether or not this slash command should trigger a dialog.
     */
    triggersDialog?: boolean | null;
    type?: string | null;
  }
  /**
   * Snippet of the search result, which summarizes the content of the resulting page.
   */
  export interface Schema$Snippet {
    /**
     * The matched ranges in the snippet.
     */
    matchRanges?: Schema$MatchRange[];
    /**
     * The snippet of the document. The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering.
     */
    snippet?: string | null;
  }
  /**
   * An Attachment represents a linked entity associated with a piece of social content. This may be a 1st-party or 3rd-party entity. In the Papyrus context, an Attachment is part of a Cent, and sits alongside the main content of the cent, which is represented as a sequence of Segments. Right now an Attachment is just a wrapper around an Embed, but we provide the extra layer of abstraction since, as Embeds move to separate storage in Briefcase, we may want to add additional fields that are not part of the Embed proper, but that (for example) relate to the usage of the linked content within the particular post/cent.
   */
  export interface Schema$SocialCommonAttachmentAttachment {
    /**
     * An embed represents an external entity. See go/es-embeds.
     */
    embedItem?: Schema$EmbedClientItem;
    /**
     * An id to uniquely identify an attachment when several attachments are in a collection.
     */
    id?: string | null;
  }
  /**
   * Represents a user pseudonym. Pseudonyms are linked accounts on Google and third-party services (e.g. YouTube or Twitter) and are described by a Social Graph Node.
   */
  export interface Schema$SocialGraphNodeProto {
    /**
     * The fields from ccc/socialgraph/socialgraphnode.proto:SgnNode that uniquely identify a social graph node. The 'ident' field is not included here because its value can be changed.
     */
    sgnDomain?: string | null;
    sgnPk?: string | null;
  }
  export interface Schema$SortOptions {
    /**
     * The name of the operator corresponding to the field to sort on. The corresponding property must be marked as sortable.
     */
    operatorName?: string | null;
    /**
     * Ascending is the default sort order
     */
    sortOrder?: string | null;
  }
  /**
   * Defines sources for the suggest/search APIs.
   */
  export interface Schema$Source {
    /**
     * Source name for content indexed by the Indexing API.
     */
    name?: string | null;
    /**
     * Predefined content source for Google Apps.
     */
    predefinedSource?: string | null;
  }
  /**
   * Configurations for a source while processing a Search or Suggest request.
   */
  export interface Schema$SourceConfig {
    /**
     * The crowding configuration for the source.
     */
    crowdingConfig?: Schema$SourceCrowdingConfig;
    /**
     * The scoring configuration for the source.
     */
    scoringConfig?: Schema$SourceScoringConfig;
    /**
     * The source for which this configuration is to be used.
     */
    source?: Schema$Source;
  }
  /**
   * Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.
   */
  export interface Schema$SourceCrowdingConfig {
    /**
     * Maximum number of results allowed from a datasource in a result page as long as results from other sources are not exhausted. Value specified must not be negative. A default value is used if this value is equal to 0. To disable crowding, set the value greater than 100.
     */
    numResults?: number | null;
    /**
     * Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0.
     */
    numSuggestions?: number | null;
  }
  /**
   * Per source result count information.
   */
  export interface Schema$SourceResultCount {
    /**
     * Whether there are more search results for this source.
     */
    hasMoreResults?: boolean | null;
    /**
     * The estimated result count for this source.
     */
    resultCountEstimate?: string | null;
    /**
     * The exact result count for this source.
     */
    resultCountExact?: string | null;
    /**
     * The source the result count information is associated with.
     */
    source?: Schema$Source;
  }
  /**
   * Set the scoring configuration. This allows modifying the ranking of results for a source.
   */
  export interface Schema$SourceScoringConfig {
    /**
     * Importance of the source.
     */
    sourceImportance?: string | null;
  }
  /**
   * Primary key for Space resource.
   */
  export interface Schema$SpaceId {
    /**
     * Unique, immutable ID of the Space
     */
    spaceId?: string | null;
  }
  export interface Schema$SpellResult {
    /**
     * The suggested spelling of the query.
     */
    suggestedQuery?: string | null;
  }
  /**
   * Represents the set of members (of a given type) in a Google+ Square (see http://go/squares). A Square with default member_type is currently (1/2012) identical to the GaiaGroup with the same ID, but that is expected to change soon (see http://go/superglue). Support for this principal type is currently (1/2012) incomplete -- e.g., Keystore does not support it yet (see b/5703421).
   */
  export interface Schema$SquareProto {
    /**
     * The type of Square members to consider, e.g. "all members" vs. "owners" vs. "admins". These are defined by legacy_relation_id values in social.graph.storage.EdgeTypeEnum.EdgeType enum options in social/graph/storage/proto/id.proto. See square.pb (defined in production/config/cdd/socialgraph/mixer_config/prod/node_type_config) for all valid edge types associated with square. Currently required.
     */
    memberType?: number | null;
    /**
     * Currently required.
     */
    squareId?: string | null;
  }
  /**
   * Start upload file request.
   */
  export interface Schema$StartUploadItemRequest {
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
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
  export interface Schema$StoredParticipantId {
    gaiaId?: string | null;
  }
  /**
   * Information about a streaming session in conference.
   */
  export interface Schema$StreamingSessionInfo {
    /**
     * The application type of the current streaming session.
     */
    applicationType?: string | null;
    /**
     * The latest streaming session event. This can be used by clients to help explain what is going on, why recording stopped, etc. This will always be set to a valid event and consistent with the status. It can be set when current session is inactive to indicate latest event that makes current session to become inactive.
     */
    latestSessionEvent?: Schema$SessionEvent;
    /**
     * The display name of the owner of the recording output. It's only set when there will be uploaded recordings. Currently, it's only set when application type is RECORDING or GLIVE_STREAM.
     */
    ownerDisplayName?: string | null;
    /**
     * This is the REST name and unique identifier of this streaming session and has the form `spaces//recordings/` This is returned whenever status is either `STARTING` or `STARTED`.
     */
    sessionId?: string | null;
    /**
     * The current status of this streaming session. This can be used by clients to show session status indicator and/or notification.
     */
    status?: string | null;
    /**
     * When true, this recording may be used for training new transcription models.
     */
    trainingEnabled?: boolean | null;
    /**
     * The policy that controls who can view the broadcast. This setting applies for broadcast session.
     */
    viewerAccessPolicy?: string | null;
    /**
     * Contains information about viewers of the livestream. It is only set when application type is BROADCAST.
     */
    viewerStats?: Schema$StreamViewerStats;
  }
  /**
   * Information about viewers of the stream.
   */
  export interface Schema$StreamViewerStats {
    /**
     * The estimate of the current viewer count.
     */
    estimatedViewerCount?: string | null;
  }
  /**
   * A structured data object consisting of named properties.
   */
  export interface Schema$StructuredDataObject {
    /**
     * The properties for the object. The maximum number of elements is 1000.
     */
    properties?: Schema$NamedProperty[];
  }
  /**
   * Structured results that are returned as part of search request.
   */
  export interface Schema$StructuredResult {
    /**
     * Representation of a person
     */
    person?: Schema$Person;
  }
  /**
   * Request of suggest API.
   */
  export interface Schema$SuggestRequest {
    /**
     * The sources to use for suggestions. If not specified, the data sources are taken from the current search application. NOTE: Suggestions are only supported for the following sources: * Third-party data sources * PredefinedSource.PERSON * PredefinedSource.GOOGLE_DRIVE
     */
    dataSourceRestrictions?: Schema$DataSourceRestriction[];
    /**
     * Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on.
     */
    query?: string | null;
    /**
     * Request options, such as the search application and user timezone.
     */
    requestOptions?: Schema$RequestOptions;
  }
  /**
   * Response of the suggest API.
   */
  export interface Schema$SuggestResponse {
    /**
     * List of suggestions.
     */
    suggestResults?: Schema$SuggestResult[];
  }
  /**
   * One suggestion result.
   */
  export interface Schema$SuggestResult {
    /**
     * This is present when the suggestion indicates a person. It contains more information about the person - like their email ID, name etc.
     */
    peopleSuggestion?: Schema$PeopleSuggestion;
    /**
     * This field will be present if the suggested query is a word/phrase completion.
     */
    querySuggestion?: Schema$QuerySuggestion;
    /**
     * The source of the suggestion.
     */
    source?: Schema$Source;
    /**
     * The suggested query that will be used for search, when the user clicks on the suggestion
     */
    suggestedQuery?: string | null;
  }
  /**
   * Urls with additional bot related information.
   */
  export interface Schema$SupportUrls {
    /**
     * Link to the admin configuration webpage for the bot. Configured by Pantheon, may be empty.
     */
    adminConfigUrl?: string | null;
    /**
     * Link to the deletion policy webpage for the bot. Configured by Pantheon, may be empty.
     */
    deletionPolicyUrl?: string | null;
    /**
     * Link to GWM page of the app. May be empty.
     */
    gwmUrl?: string | null;
    /**
     * Link to the privacy policy webpage for the bot. May be empty.
     */
    privacyPolicyUrl?: string | null;
    /**
     * Link to the setup webpage for the bot. Configured by Pantheon, may be empty.
     */
    setupUrl?: string | null;
    /**
     * Link to the support webpage for the developer of the bot. May be empty.
     */
    supportUrl?: string | null;
    /**
     * Link to the terms of service webpage for the bot. May be empty.
     */
    tosUrl?: string | null;
  }
  export interface Schema$SwitchWidget {
    controlType?: string | null;
    /**
     * The name of the switch widget which is will be used in FormInput.
     */
    name?: string | null;
    onChange?: Schema$FormAction;
    selected?: boolean | null;
    /**
     * The value is what is passed back in apps script callback.
     */
    value?: string | null;
  }
  export interface Schema$TaskActionMarkup {
    reloadTasks?: boolean | null;
  }
  export interface Schema$TextButton {
    /**
     * The alternative text used for accessibility Next field number: 7.
     */
    altText?: string | null;
    /**
     * Optional color of the button's background in RAISE mode. The default is the secondary color from addon's manifest.
     */
    backgroundColor?: string | null;
    disabled?: boolean | null;
    onClick?: Schema$OnClick;
    style?: string | null;
    /**
     * Text color can be set via HTML markup.
     */
    text?: string | null;
  }
  export interface Schema$TextField {
    /**
     * The initial set of auto complete items without any user input.
     */
    autoComplete?: Schema$AutoComplete;
    /**
     * The refresh function which returns AutoComplete based on the user's input text. If the callback is not specified, auto complete will be purely done in client side based on the auto_complete items.
     */
    autoCompleteCallback?: Schema$FormAction;
    /**
     * When set to true, a user can input multiple auto-complet items.
     */
    autoCompleteMultipleSelections?: boolean | null;
    hintText?: string | null;
    /**
     * One of label or hint_text is required to be specified by the developers.
     */
    label?: string | null;
    maxLines?: number | null;
    /**
     * The name of the text field which is will be used in FormInput.
     */
    name?: string | null;
    onChange?: Schema$FormAction;
    type?: string | null;
    /**
     * The default value when no input from user.
     */
    value?: string | null;
  }
  /**
   * This is deprecated and please use KeyValue.
   */
  export interface Schema$TextKeyValue {
    key?: string | null;
    onClick?: Schema$OnClick;
    text?: string | null;
  }
  /**
   * Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$TextOperatorOptions {
    /**
     * If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is "genre" and the value is "science-fiction" the query restrictions "genre:science" and "genre:fiction" doesn't match the item; "genre:science-fiction" does. Text value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is "science-fiction" the queries "genre:science" and "genre:fiction" matches the item.
     */
    exactMatchWithOperator?: boolean | null;
    /**
     * Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value\>* show results only where the value of the property named *subjectLine* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  export interface Schema$TextParagraph {
    text?: string | null;
  }
  /**
   * The options for text properties.
   */
  export interface Schema$TextPropertyOptions {
    /**
     * If set, describes how the property should be used as a search operator.
     */
    operatorOptions?: Schema$TextOperatorOptions;
    /**
     * Indicates the search quality importance of the tokens within the field when used for retrieval.
     */
    retrievalImportance?: Schema$RetrievalImportance;
  }
  /**
   * List of text values.
   */
  export interface Schema$TextValues {
    /**
     * The maximum allowable length for text values is 2048 characters.
     */
    values?: string[] | null;
  }
  /**
   * The ThreadKey was set on some (subset of the) messages in this thread.
   */
  export interface Schema$ThreadKeySet {
    /**
     * Messages on which the thread_key was changed.
     */
    messageKeys?: Schema$MultiKey[];
    /**
     * The new thread_key for this thread
     */
    newThreadKey?: Schema$MultiKey;
  }
  /**
   * HistoryRecord for changes associated with a thread, namely: MESSAGE_ADDED MESSAGE_DELETED LABEL_ADDED LABEL_REMOVED ATTRIBUTE_SET ATTRIBUTE_REMOVED THREAD_KEY_SET All label_ids refer to the (unchanging) value as defined by the Label.id field in labels.proto. In particular, it is *not* the canonical_name.
   */
  export interface Schema$ThreadUpdate {
    attributeRemoved?: Schema$AttributeRemoved;
    attributeSet?: Schema$AttributeSet;
    labelAdded?: Schema$LabelAdded;
    labelRemoved?: Schema$LabelRemoved;
    /**
     * Indicates the record id of the last operation that modified this thread.
     */
    lastHistoryRecordId?: string | null;
    messageAdded?: Schema$MessageAdded;
    messageDeleted?: Schema$MessageDeleted;
    /**
     * The first non-empty thread-key on any message in the thread (including deleted messages). This field has been introduced to maintain backward compatibility for clients that are not subthread aware.
     */
    originalThreadKey?: Schema$MultiKey;
    /**
     * The PreStates of all messages before the transaction. These are suppressed if the client requested that prestates not be included in the output of the GetHistoryRequest.
     */
    preState?: Schema$PreState[];
    /**
     * Affected thread
     */
    threadKey?: Schema$MultiKey;
    threadKeySet?: Schema$ThreadKeySet;
    /**
     * Thread PLID
     */
    threadLocator?: string | null;
    topicStateUpdate?: Schema$TopicStateUpdate;
  }
  /**
   * Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$TimestampOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the timestamp property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value\>* show results only where the value of the property named *closeDate* is later than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    greaterThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the timestamp property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value\>* show results only where the value of the property named *closeDate* is earlier than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    lessThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the timestamp property. For example, if operatorName is *closedon* and the property's name is *closeDate*, then queries like *closedon:<value\>* show results only where the value of the property named *closeDate* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * The options for timestamp properties.
   */
  export interface Schema$TimestampPropertyOptions {
    /**
     * If set, describes how the timestamp should be used as a search operator.
     */
    operatorOptions?: Schema$TimestampOperatorOptions;
  }
  /**
   * List of timestamp values.
   */
  export interface Schema$TimestampValues {
    values?: string[] | null;
  }
  /**
   * Tombstoning is the act of leaving a contextual trace when deleting a message. See more: go/tombstone-prd, go/hub-dynamite-tombstones-server-design-v2.
   */
  export interface Schema$TombstoneMetadata {
    /**
     * Indicates the type of Tombstone.
     */
    tombstoneType?: string | null;
  }
  /**
   * The Toolbar markup has been deprecated. The information is now specified in the manifest.
   */
  export interface Schema$Toolbar {
    /**
     * Background color of the toolbar in RBG hex representation.
     */
    color?: string | null;
    iconUrl?: string | null;
    name?: string | null;
  }
  export interface Schema$TopicId {
    /**
     * The Space or DM that the topic belongs to.
     */
    groupId?: Schema$GroupId;
    /**
     * Opaque, server-assigned ID of the Topic. While this ID is guaranteed to be unique within the Space, it's not guaranteed to be globally unique. Internal usage: this field can be empty in the following cases: 1. To create the first message in a topic. 2. To list last N messages of a Space (regardless of topic).
     */
    topicId?: string | null;
  }
  /**
   * State of an topic thread as maintained within Tingle.
   */
  export interface Schema$TopicState {
    /**
     * Map of label =\> count of topic constituent messages with label These only contain counts of labels that are relevant for topic normalization/denormalization. Eg. If a topic thread has 5 constituents, 4 of which are in inbox, this will contain ^i =\> 4. Some labels of interest are archive, inbox, trash, spam, etc.
     */
    labelIdMessageCount?: {[key: string]: number} | null;
    /**
     * Number of constituents for this entity.
     */
    numConstituents?: number | null;
  }
  export interface Schema$TopicStateUpdate {
    topicState?: Schema$TopicState;
  }
  /**
   * Storage information pertaining to the transaction with which a HistoryRecord is associated.
   */
  export interface Schema$TransactionContext {
    /**
     * The last HistoryRecord of the transaction. Note that this may correspond to a record that is filtered by Tingle (and thus not returned to the client). See http://b/9513464.
     */
    endingRecordId?: string | null;
    /**
     * The first HistoryRecord of the transaction. Note that this may be a record of type INTERNAL.
     */
    startingRecordId?: string | null;
    /**
     * The microsecond timestamp of the transaction.
     */
    writeTimestampUs?: string | null;
  }
  /**
   * HistoryRecord for debug info associated with the transaction, namely: TXN_DEBUG_INFO TODO(b/143845917) This is a short-term workaround for unblocking fusebox writes migration. Clean up the code or land a long-term solution after the rollout. go/diff-to-historyrecord
   */
  export interface Schema$TransactionDebugInfo {}
  /**
   * Information about a transcription session.
   */
  export interface Schema$TranscriptionSessionInfo {
    /**
     * Transcription session's state information.
     */
    sessionStateInfo?: Schema$SessionStateInfo;
    /**
     * A unique server-generated ID for the transcription session.
     */
    transcriptionSessionId?: string | null;
  }
  /**
   * Transient generic data that will not be saved on the server.
   */
  export interface Schema$TransientData {}
  export interface Schema$Trigger {
    /**
     * Each dispatcher should use an enum to for the actions that it supports. If a dispatcher has only one action, this does not need to be set. (It can be expanded later, defining the default behaviour as type 0.) For purposes such as batching, the type of a trigger is (dispatcher, action_type).
     */
    actionType?: number | null;
    /**
     * Maximum possible delay in micros that can be tolerated so triggers can be batched, which makes processing more efficient compared to firing triggers individually. Note that the actual fire time will be somewhere in the timerange interval [fire_time_us, fire_time_us + batch_time_us).
     */
    batchTimeUs?: string | null;
    /**
     * Which server should interpret action_type.
     */
    dispatcher?: string | null;
    /**
     * Must be set for DISPATCHER_STUBBY_DISPATCHER.
     */
    dispatchId?: number | null;
    /**
     * Earliest time to fire at in microseconds. The actual time that the trigger will fire will be in the timerange: [fire_time_us, fire_time_us + batch_time_us).
     */
    fireTimeUs?: string | null;
    /**
     * Must be set for DISPATCHER_JOBSETTED_PRIMARY.
     */
    jobsettedServerSpec?: Schema$JobsettedServerSpec;
    /**
     * The trigger key, if applicable.
     */
    key?: string | null;
    rpcOptions?: Schema$RpcOptions;
    /**
     * The slice_fire_time_us is automatically computed and stored as part of the trigger write. It represents the exact fire time at which the trigger will be queued to fire and will satisfy fire_time_us < slice_fire_time_us <= fire_time_us + batch_time_us Triggers have an index row in the slice trigger index with the row prefix matching this time. Note that this field is internal to gmail_cp and is ignored if set by external clients when adding / updating triggers.
     */
    sliceFireTimeUs?: string | null;
    /**
     * Trigger action to perform. This should always be set.
     */
    triggerAction?: Schema$TriggerAction;
    /**
     * The TriggerKey will uniquely determine a trigger within a given context. A context is a single message for message triggers or a single account for account triggers.
     */
    triggerKey?: Schema$TriggerKey;
  }
  export interface Schema$TriggerAction {
    action?: string | null;
    /**
     * Clients should use extensions on the Trigger message instead.
     */
    data?: string | null;
    dataInt?: string | null;
  }
  /**
   * A TriggerKey (type + instance_id) uniquely identifies a trigger within a message for a message-trigger and within an account for an account-trigger.
   */
  export interface Schema$TriggerKey {
    /**
     * Identifier to distinguish multiple Triggers of the same type (per message or per account).
     */
    instanceId?: string | null;
    /**
     * A non-empty string that identifies the type of Trigger. Triggers of the same type may be batched together. The universe of values for the type field should be finite as it is used as a stats key.
     */
    type?: string | null;
  }
  export interface Schema$Triggers {
    /**
     * A list of triggers.
     */
    triggers?: Schema$Trigger[];
  }
  /**
   * Message containing a string that is safe to use in all URL contexts in DOM APIs and HTML documents; even where the referred-to resource is interpreted as code, e.g., as the src of a script element.
   */
  export interface Schema$TrustedResourceUrlProto {
    /**
     * IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message.
     */
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue?: string | null;
  }
  /**
   * Next tag: 2
   */
  export interface Schema$TypeInfo {
    /**
     * Contains additional video information only if document_type is VIDEO.
     */
    videoInfo?: Schema$VideoInfo;
  }
  /**
   * Universal phone access contains information required to dial into a conference using one of a static list of phone numbers and a universal PIN. The phone number list is distributed separately.
   */
  export interface Schema$UniversalPhoneAccess {
    /**
     * The PIN that users must enter after dialing a universal number. The pin consists of only decimal digits and the length may vary, though it generally is longer than a PhoneAccess.pin.
     */
    pin?: string | null;
    /**
     * This field has the same contents as the MeetingSpace.more_join_url field, and is included for compatibility reasons. Clients should use the other field instead. This field is deprecated and will be removed.
     */
    pstnInfoUrl?: string | null;
  }
  export interface Schema$UnmappedIdentity {
    /**
     * The resource name for an external user.
     */
    externalIdentity?: Schema$Principal;
    /**
     * The resolution status for the external identity.
     */
    resolutionStatusCode?: string | null;
  }
  export interface Schema$UnreserveItemsRequest {
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * The name of a queue to unreserve items from.
     */
    queue?: string | null;
  }
  export interface Schema$UpdateBccRecipients {
    bccRecipients?: Schema$Recipient[];
  }
  export interface Schema$UpdateBody {
    /**
     * A repeated field that contains a series of content to insert into the draft that the user is currently editing. The content can contain HTML content or plain text content.
     */
    insertContents?: Schema$InsertContent[];
    type?: string | null;
  }
  export interface Schema$UpdateCcRecipients {
    ccRecipients?: Schema$Recipient[];
  }
  export interface Schema$UpdateDataSourceRequest {
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    source?: Schema$DataSource;
    /**
     * Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     */
    updateMask?: string | null;
  }
  export interface Schema$UpdateDraftActionMarkup {
    /**
     * If set, replaces the existing Bcc recipients of the draft the user is currently editing.
     */
    updateBccRecipients?: Schema$UpdateBccRecipients;
    /**
     * A field that contains a series of update actions to perform on the draft body that the user is currently editing.
     */
    updateBody?: Schema$UpdateBody;
    /**
     * If set, replaces the existing Cc recipients of the draft the user is currently editing.
     */
    updateCcRecipients?: Schema$UpdateCcRecipients;
    /**
     * If set, replaces the existing subject of the draft the user is currently editing.
     */
    updateSubject?: Schema$UpdateSubject;
    /**
     * If set, replaces the existing To recipients of the draft the user is currently editing.
     */
    updateToRecipients?: Schema$UpdateToRecipients;
  }
  export interface Schema$UpdateSchemaRequest {
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * The new schema for the source.
     */
    schema?: Schema$Schema;
    /**
     * If true, the schema will be checked for validity, but will not be registered with the data source, even if valid.
     */
    validateOnly?: boolean | null;
  }
  export interface Schema$UpdateSubject {
    subject?: string | null;
  }
  export interface Schema$UpdateToRecipients {
    toRecipients?: Schema$Recipient[];
  }
  /**
   * Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef.
   */
  export interface Schema$UploadItemRef {
    /**
     * The name of the content reference. The maximum length is 2048 characters.
     */
    name?: string | null;
  }
  /**
   * Annotation metadata for user Upload artifacts.
   */
  export interface Schema$UploadMetadata {
    /**
     * Opaque token. Clients shall simply pass it back to the Backend. There is no guarantee the attachment_token returned on subsequent reads is the same even if nothing has changed. This field will NOT be saved into storage.
     */
    attachmentToken?: string | null;
    /**
     * Information about the uploaded attachment that is only used in Backend. This field will NOT be sent out of Google.
     */
    backendUploadMetadata?: Schema$AppsDynamiteSharedBackendUploadMetadata;
    /**
     * The "new" secure identifier for Drive files. Should be used instead of the deprecated string drive_id field above. This should only be set if the upload file has been added to Drive. Note that older Drive files that do not have a ResourceKey should still use this field, with the resource_key field unset.
     */
    clonedAuthorizedItemId?: Schema$AuthorizedItemId;
    /**
     * DriveAction for organizing the cloned version of this upload in Drive, if the file has been added to Drive. This field is not set if the file has not been added to Drive. Additionally, this field is only set when part of a FileResult in a ListFilesResponse.
     */
    clonedDriveAction?: string | null;
    /**
     * Reference to a Drive ID, if this upload file has been previously cloned to Drive. Note: this is deprecated in favor of the AuthorizedItemId below.
     */
    clonedDriveId?: string | null;
    /**
     * The original file name for the content, not the full path.
     */
    contentName?: string | null;
    /**
     * Type is from Scotty's best_guess by default: http://google3/uploader/agent/scotty_agent.proto?l=51&rcl=140889785
     */
    contentType?: string | null;
    /**
     * The metrics metadata of the Data Loss Prevention attachment scan.
     */
    dlpMetricsMetadata?: Schema$AppsDynamiteSharedDlpMetricsMetadata;
    /**
     * The timestamp of the most recent virus scan completed (in microseconds).
     */
    latestVirusScanTimestamp?: string | null;
    /**
     * A copy of the LocalId in Annotation. This field is supposed to be filled by server only.
     */
    localId?: string | null;
    /**
     * Original dimension of the content. Only set for image attachments.
     */
    originalDimension?: Schema$AppsDynamiteSharedDimension;
    /**
     * Reference to a transcoded video attachment. Only set for video attachments.
     */
    videoReference?: Schema$AppsDynamiteSharedVideoReference;
    /**
     * Result for a virus scan. It's duplicated in the above field apps.dynamite.shared.BackendUploadMetadata
     */
    virusScanResult?: string | null;
  }
  /**
   * Annotation metadata for a Weblink. In case of pasted link it can qualify to be other types in addition to being a URL - like DRIVE_DOC/DRIVE_SHEET and so on. The URL metadata will also be present and it's up to the client to decide which metadata to render it with. These fields are filled in using page render service.
   */
  export interface Schema$UrlMetadata {
    /**
     * Domain for this url. If it's an IP address the address is returned.
     */
    domain?: string | null;
    /**
     * The signed GWS URL.
     */
    gwsUrl?: Schema$SafeUrlProto;
    /**
     * The expiration timestamp for GWS URL, only set when gws_url is set.
     */
    gwsUrlExpirationTimestamp?: string | null;
    /**
     * Dimensions of the image: height. This field is string to match with page render service response. Deprecated. Use int_image_height instead.
     */
    imageHeight?: string | null;
    /**
     * Representative image of the website.
     */
    imageUrl?: string | null;
    /**
     * Dimensions of the image: width. This field is string to match with page render service response. Deprecated. Use int_image_height instead.
     */
    imageWidth?: string | null;
    /**
     * Dimensions of the image: height.
     */
    intImageHeight?: number | null;
    /**
     * Dimensions of the image: width.
     */
    intImageWidth?: number | null;
    /**
     * Mime type of the content (Currently mapped from Page Render Service ItemType) Note that this is not necessarily the mime type of the http resource. For example a text/html from youtube or vimeo may actually be classified as a video type. Then we shall mark it as video/x since we don't know exactly what type of video it is.
     */
    mimeType?: string | null;
    /**
     * The stable redirect URL pointing to frontend server.
     */
    redirectUrl?: Schema$SafeUrlProto;
    /**
     * If the UrlMetadata is missing data for rendering a chip. Deprecated. Use Annotation.ChipRenderType instead.
     */
    shouldNotRender?: boolean | null;
    /**
     * Snippet/small description of the weblink.
     */
    snippet?: string | null;
    /**
     * Title of the Weblink.
     */
    title?: string | null;
    /**
     * The original URL.
     */
    url?: Schema$SafeUrlProto;
    urlSource?: string | null;
  }
  /**
   * User profile information. This user is not necessarily member of a space.
   */
  export interface Schema$User {
    /**
     * URL for the avatar picture of the User in dynamite
     */
    avatarUrl?: string | null;
    /**
     * Information about whether the user is blocked by requester and/or has blocked requester.
     */
    blockRelationship?: Schema$AppsDynamiteSharedUserBlockRelationship;
    /**
     * Bot-specific profile information. Leave it empty for human users.
     */
    botInfo?: Schema$BotInfo;
    /**
     * Deleted flag, if true, means User has been soft-deleted/purged Deprecated. Use user_account_state field instead.
     */
    deleted?: boolean | null;
    /**
     * Email ID of the user
     */
    email?: string | null;
    /**
     * First or given name of the user
     */
    firstName?: string | null;
    /**
     * Gender of the user
     */
    gender?: string | null;
    /**
     * UserId
     */
    id?: Schema$UserId;
    /**
     * Set to true if none of the depending services (Gaia, PeopleApi) returns any info for this user.
     */
    isAnonymous?: boolean | null;
    /**
     * Last or family name of the user
     */
    lastName?: string | null;
    /**
     * Non-unique, user-defined display name of the User
     */
    name?: string | null;
    /**
     * Information about whether the user is a consumer user, or the GSuite customer that they belong to.
     */
    organizationInfo?: Schema$AppsDynamiteSharedOrganizationInfo;
    /**
     * Phone number(s) of the user
     */
    phoneNumber?: Schema$AppsDynamiteSharedPhoneNumber[];
    /**
     * State of user's Gaia Account
     */
    userAccountState?: string | null;
    /**
     * Visibility of user's Profile
     */
    userProfileVisibility?: string | null;
  }
  /**
   * Resource for displaying user info
   */
  export interface Schema$UserDisplayInfo {
    /**
     * The avatar to show for this user
     */
    avatarUrl?: string | null;
    /**
     * The name to show for this user
     */
    displayName?: string | null;
  }
  /**
   * Primary key for User resource.
   */
  export interface Schema$UserId {
    /**
     * Optional. Opaque, server-assigned ID of the user profile associated with App/user acting on behalf of the human user. This is currently only set when a 3P application is acting on the user's behalf.
     */
    actingUserId?: string | null;
    /**
     * Opaque, server-assigned ID of the User.
     */
    id?: string | null;
    /**
     * Optional. Identifier of the App involved (directly or on behalf of a human creator) in creating this message. This is not set if the user posted a message directly, but is used in the case of, for example, a message being generated by a 1P integration based on a user action (creating an event, creating a task etc). This should only be used on the BE. For clients, please use the field in the FE message proto instead (google3/apps/dynamite/v1/frontend/api/message.proto?q=origin_app_id).
     */
    originAppId?: Schema$AppId;
    /**
     * Clients do not need to send UserType to Backend, but Backend will always send this field to clients per the following rule: 1. For HUMAN Ids, the field is empty but by default .getType() will return HUMAN. 2. For BOT Ids, the field is ALWAYS set to BOT.
     */
    type?: string | null;
  }
  /**
   * Contains info regarding the updater of an Activity Feed item. Next Id: 8
   */
  export interface Schema$UserInfo {
    /**
     * Avatar url of the user who triggered the Drive Notification email. This field will be populated if we can extract such information from the Drive Notification email. This should only be used to fetch user avatars when updater_to_show_email is not populated. This field is not set for non-Drive Notification items.
     */
    driveNotificationAvatarUrl?: string | null;
    /**
     * Describes how updater_count_to_show should be used.
     */
    updaterCountDisplayType?: string | null;
    /**
     * The number of updaters for clients to show depending on UpdaterCountDisplayType.
     */
    updaterCountToShow?: number | null;
    /**
     * The email of the updater for clients to show used for Gmail items. For Drive Notifications, this is the email of the user who triggered the Drive Notification email. This field will be populated if we can extract such information from the Drive Notification email. This is not the actual sender of the email, as the sender is always comments-noreply@docs.google.com.
     */
    updaterToShowEmail?: string | null;
    /**
     * The gaia id of the updater for clients to show used for Gmail items. If the updater is an external user, the email field below should be populated.
     */
    updaterToShowGaiaId?: string | null;
    /**
     * The display name of the updater for clients to show used for Gmail items. For non-Drive Notification items, this field will always be populated. If the display name cannot be found for the user, the fallback string will be the email address. For Drive Notification items, this is the name of the user who triggered the Drive notification email. This field will be populated if we can extract such information from the Drive Notification email. If the name cannot be extracted, then the email will be the fallback string, which is used as the display name text in the UI when needed. This is not the actual sender of the email, as the sender is always comments-noreply@docs.google.com.
     */
    updaterToShowName?: string | null;
    /**
     * The updater for clients to show used for Dynamite Chat items.
     */
    updaterToShowUserId?: Schema$UserId;
  }
  /**
   * Person metadata, for USER_MENTION segments. Should always contain at least one of user_gaia_id, user_id, email or user. The exact set of populated fields may differ depending on the context and the level in the serving stack; for example, emails will be elided on the viewing path. But as a general rule, a proto having any one of the four is valid, subject to the standard constraints of the applied annotations -- that is, communication between servers and clients will ignore jspb.ignore fields, and communication between servers and other servers (or between servers and storage) will ignore client_only fields. For more on the annotations, see the comments in social/common/segment_annotations.proto
   */
  export interface Schema$UserMentionData {
    email?: string | null;
    /**
     * If the principal is backed by a gaia id, DO NOT use this field. Use user_gaia_id/user_id fields instead.
     */
    user?: Schema$PrincipalProto;
    /**
     * An unobfuscated gaia ID:
     */
    userGaiaId?: string | null;
    /**
     * An obfuscated gaia ID:
     */
    userId?: string | null;
  }
  /**
   * Annotation metadata for user mentions (+/@/-).
   */
  export interface Schema$UserMentionMetadata {
    /**
     * Display name of the mentioned user. This field should remain empty when clients resolve a UserMention annotation. It will be filled in when a UserMention is generated by the Integration Server.
     */
    displayName?: string | null;
    /**
     * Gender of the mentioned user. One of "female", "male" or "other". Used for choosing accurate translations for strings that contain the UserMention, when these need to be constructed (e.g. task assignment update message). This field should remain empty when clients resolve a UserMention. It will be filled in when a UserMention is generated by the Integration Server.
     */
    gender?: string | null;
    /**
     * To be deprecated. Use invitee_info field instead. ID of the User mentioned. This field should remain empty when type == MENTION_ALL.
     */
    id?: Schema$UserId;
    /**
     * Invitee UserId and email used when mentioned. This field should remain empty when type == MENTION_ALL. Invitee_info.email is only used when a user is @-mentioned with an email address, and it will be empty when clients get messages from Backend.
     */
    inviteeInfo?: Schema$InviteeInfo;
    type?: string | null;
    /**
     * Specific reason for the user mention failing, for fine-grained processing by clients (i.e. specific error message for space limit exceeded case) IMPORTANT: Set this only for FAILED_TO_ADD case.
     */
    userMentionError?: string | null;
  }
  /**
   * Definition of a single value with generic type.
   */
  export interface Schema$Value {
    booleanValue?: boolean | null;
    dateValue?: Schema$Date;
    doubleValue?: number | null;
    integerValue?: string | null;
    stringValue?: string | null;
    timestampValue?: string | null;
  }
  export interface Schema$ValueFilter {
    /**
     * The `operator_name` applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. `operator_name`, where the query filters results by the property that matches the value. 2. `greater_than_operator_name` or `less_than_operator_name` in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query.
     */
    operatorName?: string | null;
    /**
     * The value to be compared with.
     */
    value?: Schema$Value;
  }
  export interface Schema$VideoCallMetadata {
    /**
     * Thor meeting space.
     */
    meetingSpace?: Schema$MeetingSpace;
    /**
     * If this field is set to true, server should still contact external backends to get metadata for search but clients should not render this chip.
     */
    shouldNotRender?: boolean | null;
    /**
     * Whether this meeting space was created via Dynamite in this Dynamite group.
     */
    wasCreatedInCurrentGroup?: boolean | null;
  }
  /**
   * Next tag: 2
   */
  export interface Schema$VideoInfo {
    /**
     * Duration of the video in milliseconds. This field can be absent for recently uploaded video or inaccurate sometimes.
     */
    duration?: number | null;
  }
  /**
   * Represents both long and short phone number that can be called or texted. Short telephone numbers are used to reach local services. Short numbers and their purpose differ from country to country. These numbers in US are in the form of N11 which is a three-digit abbreviated dialing telephone number.
   */
  export interface Schema$VoicePhoneNumber {
    /**
     * E.164 formatted full phone number with leading +. This field also represents encoded form of short telephone numbers in E.164 format. e.g. "911" is encoded as "+1911".
     */
    e164?: string | null;
    /**
     * Additional data that could be added using the libphonenumber API.
     */
    i18nData?: Schema$VoicePhoneNumberI18nData;
  }
  export interface Schema$VoicePhoneNumberI18nData {
    /**
     * The country calling code for this number, as defined by the ITU. For example, this would be 1 for NANPA countries, and 33 for France (for more info see i18n.phonenumbers.PhoneNumber.country_code).
     */
    countryCode?: number | null;
    /**
     * Display number formatted using the INTERNATIONAL format.
     */
    internationalNumber?: string | null;
    /**
     * When present, indicates the number is valid according to the libphonenumber's isValidNumber API (see https://code.google.com/p/libphonenumber/).
     */
    isValid?: boolean | null;
    /**
     * Display number formatted using the NATIONAL format.
     */
    nationalNumber?: string | null;
    /**
     * A region (country, territory, continent, etc), as defined by Unicode's "CLDR", itself based on ISO 3166 (UN country codes). For details, see https://www.corp.google.com/~engdocs/java/com/google/i18n/identifiers/RegionCode.html
     */
    regionCode?: string | null;
    /**
     * When set to a non-default value, indicates the validation reason that is set when phone number is invalid (is_valid is false).
     */
    validationResult?: string | null;
  }
  export interface Schema$VPCSettings {
    /**
     * The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{project_id\}
     */
    project?: string | null;
  }
  /**
   * Information on a whiteboard attached to an active conference. A whiteboard is a Jam document.
   */
  export interface Schema$WhiteboardInfo {
    /**
     * The Cosmo Id of the whiteboard document (Jam).
     */
    id?: string | null;
    /**
     * Title of the whiteboard document.
     */
    title?: string | null;
    /**
     * The uri for whiteboard document.
     */
    uri?: string | null;
  }
  export interface Schema$WidgetMarkup {
    /**
     * buttons is also oneof data and only one of these fields should be set.
     */
    buttons?: Schema$Button[];
    dateTimePicker?: Schema$DateTimePicker;
    divider?: Schema$Divider;
    grid?: Schema$Grid;
    /**
     * The horizontal alignment of this widget.
     */
    horizontalAlignment?: string | null;
    image?: Schema$Image;
    imageKeyValue?: Schema$ImageKeyValue;
    keyValue?: Schema$KeyValue;
    /**
     * Input Widgets
     */
    menu?: Schema$Menu;
    selectionControl?: Schema$SelectionControl;
    textField?: Schema$TextField;
    textKeyValue?: Schema$TextKeyValue;
    /**
     * Read-only Widgets
     */
    textParagraph?: Schema$TextParagraph;
  }
  /**
   * Message delete history record extension that exports /wonder/message_mapping/{vertical\} attribute of deleted messages which have any smartmail label (eg. ^cob_sm_invoice). go/how-dd-card-deletion
   */
  export interface Schema$WonderCardDelete {
    /**
     * Contains <{@code WonderCardType\} enum value, value of /wonder/message_mapping/{vertical\} attribute of deleted message\> pairs.
     */
    messageMappings?: {[key: string]: Schema$WonderMessageMapping} | null;
    /**
     * Message ID of the original deleted message
     */
    msgId?: string | null;
  }
  /**
   * Card mapping attached to original message as an attribute stored at /wonder/message_mapping/{vertical\} Next ID: 2
   */
  export interface Schema$WonderMessageMapping {
    /**
     * List of wonder card (client-generated) message IDs generated based on the original message.
     */
    wonderCardMessageId?: string[] | null;
  }
  /**
   * A wrapper around a raw resource key. The secret should never be logged, and this proto annotates those secret fields to ensure that they are not. Clients are encouraged to use this proto rather than defining their own, to ensure that secrets are correctly annotated.
   */
  export interface Schema$WrappedResourceKey {
    /**
     * Resource key of the Drive item. This field should be unset if, depending on the context, the item does not have a resource key, or if none was specified. This must never be logged.
     */
    resourceKey?: string | null;
  }
  /**
   * Information about a YouTube broadcast session.
   */
  export interface Schema$YouTubeBroadcastSessionInfo {
    /**
     * Current broadcast session's statistics.
     */
    broadcastStats?: Schema$YouTubeBroadcastStats;
    /**
     * YouTube broadcast session's state information.
     */
    sessionStateInfo?: Schema$SessionStateInfo;
    /**
     * A unique server-generated ID for the broadcast session.
     */
    youTubeBroadcastSessionId?: string | null;
    /**
     * The YouTube Live broadcast event that is being streamed to.
     */
    youTubeLiveBroadcastEvent?: Schema$YouTubeLiveBroadcastEvent;
  }
  /**
   * Statistics of the YouTube broadcast session.
   */
  export interface Schema$YouTubeBroadcastStats {
    /**
     * Estimated concurrent viewer count.
     */
    estimatedViewerCount?: string | null;
  }
  /**
   * Information about the broadcast to YouTube.
   */
  export interface Schema$YouTubeLiveBroadcastEvent {
    /**
     * Input only. If the channel_id is for a YouTube Channel owned by a Brand Account, client is required to populate this field with the obfuscated gaia id of the Brand account when starting the broadcast.
     */
    brandAccountGaiaId?: string | null;
    /**
     * Input only. The broadcast id, used to control the lifecycle of the event on YouTube
     */
    broadcastId?: string | null;
    /**
     * YouTube Channel associated with the broadcast.
     */
    channelId?: string | null;
    /**
     * Output only. A URL that can be used to watch the meeting broadcast. Will be populated by the backend.
     */
    viewUrl?: string | null;
  }
  /**
   * Annotation metadata for YouTube artifact.
   */
  export interface Schema$YoutubeMetadata {
    /**
     * YouTube resource ID of the artifact.
     */
    id?: string | null;
    /**
     * If this field is set to true, server should still contact external backends to get metadata for search but clients should not render this chip.
     */
    shouldNotRender?: boolean | null;
    /**
     * YouTube query parameter for timestamp. YouTube specific flag that allows users to embed time token when sharing a link. This property contains parsed time token in seconds.
     */
    startTime?: number | null;
  }
  export interface Schema$YoutubeUserProto {
    youtubeUserId?: string | null;
  }
  /**
   * See go/zwieback. New uses of Zwieback sessions must be approved via go/zwieback-request.
   */
  export interface Schema$ZwiebackSessionProto {
    zwiebackSessionId?: string | null;
  }

  export class Resource$Debug {
    context: APIRequestContext;
    datasources: Resource$Debug$Datasources;
    identitysources: Resource$Debug$Identitysources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasources = new Resource$Debug$Datasources(this.context);
      this.identitysources = new Resource$Debug$Identitysources(this.context);
    }
  }

  export class Resource$Debug$Datasources {
    context: APIRequestContext;
    items: Resource$Debug$Datasources$Items;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.items = new Resource$Debug$Datasources$Items(this.context);
    }
  }

  export class Resource$Debug$Datasources$Items {
    context: APIRequestContext;
    unmappedids: Resource$Debug$Datasources$Items$Unmappedids;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.unmappedids = new Resource$Debug$Datasources$Items$Unmappedids(
        this.context
      );
    }

    /**
     * Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.debug.datasources.items.checkAccess({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Item name, format: datasources/{source_id\}/items/{item_id\}
     *     name: 'datasources/my-datasource/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "groupResourceName": "my_groupResourceName",
     *       //   "gsuitePrincipal": {},
     *       //   "userResourceName": "my_userResourceName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hasAccess": false
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
    checkAccess(
      params: Params$Resource$Debug$Datasources$Items$Checkaccess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkAccess(
      params?: Params$Resource$Debug$Datasources$Items$Checkaccess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckAccessResponse>;
    checkAccess(
      params: Params$Resource$Debug$Datasources$Items$Checkaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkAccess(
      params: Params$Resource$Debug$Datasources$Items$Checkaccess,
      options: MethodOptions | BodyResponseCallback<Schema$CheckAccessResponse>,
      callback: BodyResponseCallback<Schema$CheckAccessResponse>
    ): void;
    checkAccess(
      params: Params$Resource$Debug$Datasources$Items$Checkaccess,
      callback: BodyResponseCallback<Schema$CheckAccessResponse>
    ): void;
    checkAccess(
      callback: BodyResponseCallback<Schema$CheckAccessResponse>
    ): void;
    checkAccess(
      paramsOrCallback?:
        | Params$Resource$Debug$Datasources$Items$Checkaccess
        | BodyResponseCallback<Schema$CheckAccessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckAccessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckAccessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CheckAccessResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Datasources$Items$Checkaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Debug$Datasources$Items$Checkaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/debug/{+name}:checkAccess').replace(
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
        createAPIRequest<Schema$CheckAccessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckAccessResponse>(parameters);
      }
    }

    /**
     * Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.debug.datasources.items.searchByViewUrl({
     *     // Source name, format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugOptions": {},
     *       //   "pageToken": "my_pageToken",
     *       //   "viewUrl": "my_viewUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
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
    searchByViewUrl(
      params: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchByViewUrl(
      params?: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchItemsByViewUrlResponse>;
    searchByViewUrl(
      params: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchByViewUrl(
      params: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>,
      callback: BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
    ): void;
    searchByViewUrl(
      params: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      callback: BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
    ): void;
    searchByViewUrl(
      callback: BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
    ): void;
    searchByViewUrl(
      paramsOrCallback?:
        | Params$Resource$Debug$Datasources$Items$Searchbyviewurl
        | BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchItemsByViewUrlResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Datasources$Items$Searchbyviewurl;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Debug$Datasources$Items$Searchbyviewurl;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/debug/{+name}/items:searchByViewUrl').replace(
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
        createAPIRequest<Schema$SearchItemsByViewUrlResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchItemsByViewUrlResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Debug$Datasources$Items$Checkaccess
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Item name, format: datasources/{source_id\}/items/{item_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Principal;
  }
  export interface Params$Resource$Debug$Datasources$Items$Searchbyviewurl
    extends StandardParameters {
    /**
     * Source name, format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchItemsByViewUrlRequest;
  }

  export class Resource$Debug$Datasources$Items$Unmappedids {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all unmapped identities for a specific item. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.debug.datasources.items.unmappedids.list({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Maximum number of items to fetch in a request. Defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The name of the item, in the following format: datasources/{source_id\}/items/{ID\}
     *     parent: 'datasources/my-datasource/items/my-item',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unmappedIdentities": []
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
      params: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUnmappedIdentitiesResponse>;
    list(
      params: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>,
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      params: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Debug$Datasources$Items$Unmappedids$List
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUnmappedIdentitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Datasources$Items$Unmappedids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Debug$Datasources$Items$Unmappedids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/debug/{+parent}/unmappedids').replace(
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
        createAPIRequest<Schema$ListUnmappedIdentitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUnmappedIdentitiesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Debug$Datasources$Items$Unmappedids$List
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Maximum number of items to fetch in a request. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the item, in the following format: datasources/{source_id\}/items/{ID\}
     */
    parent?: string;
  }

  export class Resource$Debug$Identitysources {
    context: APIRequestContext;
    items: Resource$Debug$Identitysources$Items;
    unmappedids: Resource$Debug$Identitysources$Unmappedids;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.items = new Resource$Debug$Identitysources$Items(this.context);
      this.unmappedids = new Resource$Debug$Identitysources$Unmappedids(
        this.context
      );
    }
  }

  export class Resource$Debug$Identitysources$Items {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudsearch.debug.identitysources.items.listForunmappedidentity({
     *       // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *       'debugOptions.enableDebugging': 'placeholder-value',
     *
     *       groupResourceName: 'placeholder-value',
     *       // Maximum number of items to fetch in a request. Defaults to 100.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // The name of the identity source, in the following format: identitysources/{source_id\}\}
     *       parent: 'identitysources/my-identitysource',
     *
     *       userResourceName: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "itemNames": [],
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
    listForunmappedidentity(
      params: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listForunmappedidentity(
      params?: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListItemNamesForUnmappedIdentityResponse>;
    listForunmappedidentity(
      params: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listForunmappedidentity(
      params: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>,
      callback: BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
    ): void;
    listForunmappedidentity(
      params: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      callback: BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
    ): void;
    listForunmappedidentity(
      callback: BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
    ): void;
    listForunmappedidentity(
      paramsOrCallback?:
        | Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity
        | BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListItemNamesForUnmappedIdentityResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/debug/{+parent}/items:forunmappedidentity'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListItemNamesForUnmappedIdentityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListItemNamesForUnmappedIdentityResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     *
     */
    groupResourceName?: string;
    /**
     * Maximum number of items to fetch in a request. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the identity source, in the following format: identitysources/{source_id\}\}
     */
    parent?: string;
    /**
     *
     */
    userResourceName?: string;
  }

  export class Resource$Debug$Identitysources$Unmappedids {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.debug.identitysources.unmappedids.list({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Maximum number of items to fetch in a request. Defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The name of the identity source, in the following format: identitysources/{source_id\}
     *     parent: 'identitysources/my-identitysource',
     *     // Limit users selection to this status.
     *     resolutionStatusCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unmappedIdentities": []
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
      params: Params$Resource$Debug$Identitysources$Unmappedids$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Debug$Identitysources$Unmappedids$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUnmappedIdentitiesResponse>;
    list(
      params: Params$Resource$Debug$Identitysources$Unmappedids$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Debug$Identitysources$Unmappedids$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>,
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      params: Params$Resource$Debug$Identitysources$Unmappedids$List,
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Debug$Identitysources$Unmappedids$List
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUnmappedIdentitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Identitysources$Unmappedids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Debug$Identitysources$Unmappedids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/debug/{+parent}/unmappedids').replace(
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
        createAPIRequest<Schema$ListUnmappedIdentitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUnmappedIdentitiesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Debug$Identitysources$Unmappedids$List
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Maximum number of items to fetch in a request. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the identity source, in the following format: identitysources/{source_id\}
     */
    parent?: string;
    /**
     * Limit users selection to this status.
     */
    resolutionStatusCode?: string;
  }

  export class Resource$Indexing {
    context: APIRequestContext;
    datasources: Resource$Indexing$Datasources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasources = new Resource$Indexing$Datasources(this.context);
    }
  }

  export class Resource$Indexing$Datasources {
    context: APIRequestContext;
    items: Resource$Indexing$Datasources$Items;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.items = new Resource$Indexing$Datasources$Items(this.context);
    }

    /**
     * Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.deleteSchema({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the data source to delete Schema. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
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
    deleteSchema(
      params: Params$Resource$Indexing$Datasources$Deleteschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteSchema(
      params?: Params$Resource$Indexing$Datasources$Deleteschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    deleteSchema(
      params: Params$Resource$Indexing$Datasources$Deleteschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteSchema(
      params: Params$Resource$Indexing$Datasources$Deleteschema,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteSchema(
      params: Params$Resource$Indexing$Datasources$Deleteschema,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteSchema(callback: BodyResponseCallback<Schema$Operation>): void;
    deleteSchema(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Deleteschema
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Deleteschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Deleteschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/schema').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.getSchema({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the data source to get Schema. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "objectDefinitions": [],
     *   //   "operationIds": []
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
    getSchema(
      params: Params$Resource$Indexing$Datasources$Getschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSchema(
      params?: Params$Resource$Indexing$Datasources$Getschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Schema>;
    getSchema(
      params: Params$Resource$Indexing$Datasources$Getschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSchema(
      params: Params$Resource$Indexing$Datasources$Getschema,
      options: MethodOptions | BodyResponseCallback<Schema$Schema>,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    getSchema(
      params: Params$Resource$Indexing$Datasources$Getschema,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    getSchema(callback: BodyResponseCallback<Schema$Schema>): void;
    getSchema(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Getschema
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Schema> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Getschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Getschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/schema').replace(
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
        createAPIRequest<Schema$Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schema>(parameters);
      }
    }

    /**
     * Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.updateSchema({
     *     // The name of the data source to update Schema. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugOptions": {},
     *       //   "schema": {},
     *       //   "validateOnly": false
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
    updateSchema(
      params: Params$Resource$Indexing$Datasources$Updateschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSchema(
      params?: Params$Resource$Indexing$Datasources$Updateschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateSchema(
      params: Params$Resource$Indexing$Datasources$Updateschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSchema(
      params: Params$Resource$Indexing$Datasources$Updateschema,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSchema(
      params: Params$Resource$Indexing$Datasources$Updateschema,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSchema(callback: BodyResponseCallback<Schema$Operation>): void;
    updateSchema(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Updateschema
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Updateschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Updateschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/schema').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
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

  export interface Params$Resource$Indexing$Datasources$Deleteschema
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the data source to delete Schema. Format: datasources/{source_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Getschema
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the data source to get Schema. Format: datasources/{source_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Updateschema
    extends StandardParameters {
    /**
     * The name of the data source to update Schema. Format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateSchemaRequest;
  }

  export class Resource$Indexing$Datasources$Items {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.delete({
     *     // The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     *     connectorName: 'placeholder-value',
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Required. The RequestMode for this request.
     *     mode: 'placeholder-value',
     *     // Required. The name of the item to delete. Format: datasources/{source_id\}/items/{item_id\}
     *     name: 'datasources/my-datasource/items/my-item',
     *     // Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).
     *     version: 'placeholder-value',
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
      params: Params$Resource$Indexing$Datasources$Items$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Indexing$Datasources$Items$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Indexing$Datasources$Items$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Indexing$Datasources$Items$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Indexing$Datasources$Items$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Delete
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.deleteQueueItems({
     *     // The name of the Data Source to delete items in a queue. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "queue": "my_queue"
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
    deleteQueueItems(
      params: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteQueueItems(
      params?: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    deleteQueueItems(
      params: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteQueueItems(
      params: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteQueueItems(
      params: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteQueueItems(callback: BodyResponseCallback<Schema$Operation>): void;
    deleteQueueItems(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Deletequeueitems
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Deletequeueitems;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Indexing$Datasources$Items$Deletequeueitems;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/indexing/{+name}/items:deleteQueueItems'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.get({
     *     // The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     *     connectorName: 'placeholder-value',
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the item to get info. Format: datasources/{source_id\}/items/{item_id\}
     *     name: 'datasources/my-datasource/items/my-item',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acl": {},
     *   //   "content": {},
     *   //   "itemType": "my_itemType",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "payload": "my_payload",
     *   //   "queue": "my_queue",
     *   //   "status": {},
     *   //   "structuredData": {},
     *   //   "version": "my_version"
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
      params: Params$Resource$Indexing$Datasources$Items$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Indexing$Datasources$Items$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Item>;
    get(
      params: Params$Resource$Indexing$Datasources$Items$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Indexing$Datasources$Items$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Item>,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    get(
      params: Params$Resource$Indexing$Datasources$Items$Get,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    get(callback: BodyResponseCallback<Schema$Item>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Get
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Item> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}').replace(
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
        createAPIRequest<Schema$Item>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Item>(parameters);
      }
    }

    /**
     * Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.index({
     *     // The name of the Item. Format: datasources/{source_id\}/items/{item_id\} This is a required field. The maximum length is 1536 characters.
     *     name: 'datasources/my-datasource/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "indexItemOptions": {},
     *       //   "item": {},
     *       //   "mode": "my_mode"
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
    index(
      params: Params$Resource$Indexing$Datasources$Items$Index,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    index(
      params?: Params$Resource$Indexing$Datasources$Items$Index,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    index(
      params: Params$Resource$Indexing$Datasources$Items$Index,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    index(
      params: Params$Resource$Indexing$Datasources$Items$Index,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    index(
      params: Params$Resource$Indexing$Datasources$Items$Index,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    index(callback: BodyResponseCallback<Schema$Operation>): void;
    index(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Index
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Index;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Index;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}:index').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.list({
     *     // When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.
     *     brief: 'placeholder-value',
     *     // The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     *     connectorName: 'placeholder-value',
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the Data Source to list Items. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *     // Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
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
      params: Params$Resource$Indexing$Datasources$Items$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Indexing$Datasources$Items$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListItemsResponse>;
    list(
      params: Params$Resource$Indexing$Datasources$Items$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Indexing$Datasources$Items$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListItemsResponse>,
      callback: BodyResponseCallback<Schema$ListItemsResponse>
    ): void;
    list(
      params: Params$Resource$Indexing$Datasources$Items$List,
      callback: BodyResponseCallback<Schema$ListItemsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListItemsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$List
        | BodyResponseCallback<Schema$ListItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListItemsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/items').replace(
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
        createAPIRequest<Schema$ListItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListItemsResponse>(parameters);
      }
    }

    /**
     * Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.poll({
     *     // The name of the Data Source to poll items. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "limit": 0,
     *       //   "queue": "my_queue",
     *       //   "statusCodes": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": []
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
    poll(
      params: Params$Resource$Indexing$Datasources$Items$Poll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    poll(
      params?: Params$Resource$Indexing$Datasources$Items$Poll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PollItemsResponse>;
    poll(
      params: Params$Resource$Indexing$Datasources$Items$Poll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    poll(
      params: Params$Resource$Indexing$Datasources$Items$Poll,
      options: MethodOptions | BodyResponseCallback<Schema$PollItemsResponse>,
      callback: BodyResponseCallback<Schema$PollItemsResponse>
    ): void;
    poll(
      params: Params$Resource$Indexing$Datasources$Items$Poll,
      callback: BodyResponseCallback<Schema$PollItemsResponse>
    ): void;
    poll(callback: BodyResponseCallback<Schema$PollItemsResponse>): void;
    poll(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Poll
        | BodyResponseCallback<Schema$PollItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PollItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PollItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PollItemsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Poll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Poll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/items:poll').replace(
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
        createAPIRequest<Schema$PollItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PollItemsResponse>(parameters);
      }
    }

    /**
     * Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.push({
     *     // The name of the item to push into the indexing queue. Format: datasources/{source_id\}/items/{ID\} This is a required field. The maximum length is 1536 characters.
     *     name: 'datasources/my-datasource/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "item": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acl": {},
     *   //   "content": {},
     *   //   "itemType": "my_itemType",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "payload": "my_payload",
     *   //   "queue": "my_queue",
     *   //   "status": {},
     *   //   "structuredData": {},
     *   //   "version": "my_version"
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
    push(
      params: Params$Resource$Indexing$Datasources$Items$Push,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    push(
      params?: Params$Resource$Indexing$Datasources$Items$Push,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Item>;
    push(
      params: Params$Resource$Indexing$Datasources$Items$Push,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    push(
      params: Params$Resource$Indexing$Datasources$Items$Push,
      options: MethodOptions | BodyResponseCallback<Schema$Item>,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    push(
      params: Params$Resource$Indexing$Datasources$Items$Push,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    push(callback: BodyResponseCallback<Schema$Item>): void;
    push(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Push
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Item> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Push;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Push;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}:push').replace(
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
        createAPIRequest<Schema$Item>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Item>(parameters);
      }
    }

    /**
     * Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.unreserve({
     *     // The name of the Data Source to unreserve all items. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "queue": "my_queue"
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
    unreserve(
      params: Params$Resource$Indexing$Datasources$Items$Unreserve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unreserve(
      params?: Params$Resource$Indexing$Datasources$Items$Unreserve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    unreserve(
      params: Params$Resource$Indexing$Datasources$Items$Unreserve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unreserve(
      params: Params$Resource$Indexing$Datasources$Items$Unreserve,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unreserve(
      params: Params$Resource$Indexing$Datasources$Items$Unreserve,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unreserve(callback: BodyResponseCallback<Schema$Operation>): void;
    unreserve(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Unreserve
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Unreserve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Unreserve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/items:unreserve').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.upload({
     *     // The name of the Item to start a resumable upload. Format: datasources/{source_id\}/items/{item_id\}. The maximum length is 1536 bytes.
     *     name: 'datasources/my-datasource/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
    upload(
      params: Params$Resource$Indexing$Datasources$Items$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Indexing$Datasources$Items$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadItemRef>;
    upload(
      params: Params$Resource$Indexing$Datasources$Items$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Indexing$Datasources$Items$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$UploadItemRef>,
      callback: BodyResponseCallback<Schema$UploadItemRef>
    ): void;
    upload(
      params: Params$Resource$Indexing$Datasources$Items$Upload,
      callback: BodyResponseCallback<Schema$UploadItemRef>
    ): void;
    upload(callback: BodyResponseCallback<Schema$UploadItemRef>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Upload
        | BodyResponseCallback<Schema$UploadItemRef>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadItemRef>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadItemRef>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UploadItemRef> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}:upload').replace(
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
        createAPIRequest<Schema$UploadItemRef>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadItemRef>(parameters);
      }
    }
  }

  export interface Params$Resource$Indexing$Datasources$Items$Delete
    extends StandardParameters {
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Required. The RequestMode for this request.
     */
    mode?: string;
    /**
     * Required. The name of the item to delete. Format: datasources/{source_id\}/items/{item_id\}
     */
    name?: string;
    /**
     * Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).
     */
    version?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Deletequeueitems
    extends StandardParameters {
    /**
     * The name of the Data Source to delete items in a queue. Format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeleteQueueItemsRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Get
    extends StandardParameters {
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the item to get info. Format: datasources/{source_id\}/items/{item_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Index
    extends StandardParameters {
    /**
     * The name of the Item. Format: datasources/{source_id\}/items/{item_id\} This is a required field. The maximum length is 1536 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IndexItemRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$List
    extends StandardParameters {
    /**
     * When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.
     */
    brief?: boolean;
    /**
     * The name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the Data Source to list Items. Format: datasources/{source_id\}
     */
    name?: string;
    /**
     * Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Poll
    extends StandardParameters {
    /**
     * The name of the Data Source to poll items. Format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PollItemsRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Push
    extends StandardParameters {
    /**
     * The name of the item to push into the indexing queue. Format: datasources/{source_id\}/items/{ID\} This is a required field. The maximum length is 1536 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PushItemRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Unreserve
    extends StandardParameters {
    /**
     * The name of the Data Source to unreserve all items. Format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnreserveItemsRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Upload
    extends StandardParameters {
    /**
     * The name of the Item to start a resumable upload. Format: datasources/{source_id\}/items/{item_id\}. The maximum length is 1536 bytes.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartUploadItemRequest;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.media.upload({
     *     // Name of the media that is being downloaded. See ReadRequest.resource_name.
     *     resourceName: '.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "resourceName": "my_resourceName"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "resourceName": "my_resourceName"
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
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Media>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$Media>,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    upload(callback: BodyResponseCallback<Schema$Media>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Media> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/media/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v1/media/{+resourceName}').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Media>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Media>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Name of the media that is being downloaded. See ReadRequest.resource_name.
     */
    resourceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Media;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Operations {
    context: APIRequestContext;
    lro: Resource$Operations$Lro;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.lro = new Resource$Operations$Lro(this.context);
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Operations$Lro {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.operations.lro.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'operations/.*',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Operations$Lro$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Operations$Lro$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Operations$Lro$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$Lro$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$Lro$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$Lro$List
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
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Lro$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Lro$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/lro').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Lro$List
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

  export class Resource$Query {
    context: APIRequestContext;
    sources: Resource$Query$Sources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.sources = new Resource$Query$Sources(this.context);
    }

    /**
     * The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.query.search({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contextAttributes": [],
     *       //   "dataSourceRestrictions": [],
     *       //   "facetOptions": [],
     *       //   "pageSize": 0,
     *       //   "query": "my_query",
     *       //   "queryInterpretationOptions": {},
     *       //   "requestOptions": {},
     *       //   "sortOptions": {},
     *       //   "start": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "debugInfo": {},
     *   //   "errorInfo": {},
     *   //   "facetResults": [],
     *   //   "hasMoreResults": false,
     *   //   "queryInterpretation": {},
     *   //   "resultCountEstimate": "my_resultCountEstimate",
     *   //   "resultCountExact": "my_resultCountExact",
     *   //   "resultCounts": {},
     *   //   "results": [],
     *   //   "spellResults": [],
     *   //   "structuredResults": []
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
    search(
      params: Params$Resource$Query$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Query$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchResponse>;
    search(
      params: Params$Resource$Query$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Query$Search,
      options: MethodOptions | BodyResponseCallback<Schema$SearchResponse>,
      callback: BodyResponseCallback<Schema$SearchResponse>
    ): void;
    search(
      params: Params$Resource$Query$Search,
      callback: BodyResponseCallback<Schema$SearchResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Query$Search
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SearchResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Query$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Query$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/query/search').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchResponse>(parameters);
      }
    }

    /**
     * Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.query.suggest({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceRestrictions": [],
     *       //   "query": "my_query",
     *       //   "requestOptions": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "suggestResults": []
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
    suggest(
      params: Params$Resource$Query$Suggest,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    suggest(
      params?: Params$Resource$Query$Suggest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SuggestResponse>;
    suggest(
      params: Params$Resource$Query$Suggest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    suggest(
      params: Params$Resource$Query$Suggest,
      options: MethodOptions | BodyResponseCallback<Schema$SuggestResponse>,
      callback: BodyResponseCallback<Schema$SuggestResponse>
    ): void;
    suggest(
      params: Params$Resource$Query$Suggest,
      callback: BodyResponseCallback<Schema$SuggestResponse>
    ): void;
    suggest(callback: BodyResponseCallback<Schema$SuggestResponse>): void;
    suggest(
      paramsOrCallback?:
        | Params$Resource$Query$Suggest
        | BodyResponseCallback<Schema$SuggestResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SuggestResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SuggestResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SuggestResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Query$Suggest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Query$Suggest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/query/suggest').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SuggestResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SuggestResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Query$Search extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchRequest;
  }
  export interface Params$Resource$Query$Suggest extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SuggestRequest;
  }

  export class Resource$Query$Sources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.query.sources.list({
     *     // Number of sources to return in the response.
     *     pageToken: 'placeholder-value',
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'requestOptions.debugOptions.enableDebugging': 'placeholder-value',
     *     // The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. From Suggest API perspective, for 3p suggest this is used as a hint while making predictions to add language boosting.
     *     'requestOptions.languageCode': 'placeholder-value',
     *     // The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
     *     'requestOptions.searchApplicationId': 'placeholder-value',
     *     // Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
     *     'requestOptions.timeZone': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sources": []
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
      params: Params$Resource$Query$Sources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Query$Sources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListQuerySourcesResponse>;
    list(
      params: Params$Resource$Query$Sources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Query$Sources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListQuerySourcesResponse>,
      callback: BodyResponseCallback<Schema$ListQuerySourcesResponse>
    ): void;
    list(
      params: Params$Resource$Query$Sources$List,
      callback: BodyResponseCallback<Schema$ListQuerySourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListQuerySourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Query$Sources$List
        | BodyResponseCallback<Schema$ListQuerySourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListQuerySourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListQuerySourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListQuerySourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Query$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Query$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/query/sources').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListQuerySourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListQuerySourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Query$Sources$List
    extends StandardParameters {
    /**
     * Number of sources to return in the response.
     */
    pageToken?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'requestOptions.debugOptions.enableDebugging'?: boolean;
    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. From Suggest API perspective, for 3p suggest this is used as a hint while making predictions to add language boosting.
     */
    'requestOptions.languageCode'?: string;
    /**
     * The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
     */
    'requestOptions.searchApplicationId'?: string;
    /**
     * Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
     */
    'requestOptions.timeZone'?: string;
  }

  export class Resource$Settings {
    context: APIRequestContext;
    datasources: Resource$Settings$Datasources;
    searchapplications: Resource$Settings$Searchapplications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasources = new Resource$Settings$Datasources(this.context);
      this.searchapplications = new Resource$Settings$Searchapplications(
        this.context
      );
    }

    /**
     * Get customer settings. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.getCustomer({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditLoggingSettings": {},
     *   //   "vpcSettings": {}
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
    getCustomer(
      params: Params$Resource$Settings$Getcustomer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getCustomer(
      params?: Params$Resource$Settings$Getcustomer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomerSettings>;
    getCustomer(
      params: Params$Resource$Settings$Getcustomer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getCustomer(
      params: Params$Resource$Settings$Getcustomer,
      options: MethodOptions | BodyResponseCallback<Schema$CustomerSettings>,
      callback: BodyResponseCallback<Schema$CustomerSettings>
    ): void;
    getCustomer(
      params: Params$Resource$Settings$Getcustomer,
      callback: BodyResponseCallback<Schema$CustomerSettings>
    ): void;
    getCustomer(callback: BodyResponseCallback<Schema$CustomerSettings>): void;
    getCustomer(
      paramsOrCallback?:
        | Params$Resource$Settings$Getcustomer
        | BodyResponseCallback<Schema$CustomerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomerSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomerSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Getcustomer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Getcustomer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/customer').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomerSettings>(parameters);
      }
    }

    /**
     * Update customer settings. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.updateCustomer({
     *     // Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "auditLoggingSettings": {},
     *       //   "vpcSettings": {}
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
    updateCustomer(
      params: Params$Resource$Settings$Updatecustomer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateCustomer(
      params?: Params$Resource$Settings$Updatecustomer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateCustomer(
      params: Params$Resource$Settings$Updatecustomer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateCustomer(
      params: Params$Resource$Settings$Updatecustomer,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateCustomer(
      params: Params$Resource$Settings$Updatecustomer,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateCustomer(callback: BodyResponseCallback<Schema$Operation>): void;
    updateCustomer(
      paramsOrCallback?:
        | Params$Resource$Settings$Updatecustomer
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Updatecustomer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Updatecustomer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/customer').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
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

  export interface Params$Resource$Settings$Getcustomer
    extends StandardParameters {}
  export interface Params$Resource$Settings$Updatecustomer
    extends StandardParameters {
    /**
     * Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomerSettings;
  }

  export class Resource$Settings$Datasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disableModifications": false,
     *       //   "disableServing": false,
     *       //   "displayName": "my_displayName",
     *       //   "indexingServiceAccounts": [],
     *       //   "itemsVisibility": [],
     *       //   "name": "my_name",
     *       //   "operationIds": [],
     *       //   "returnThumbnailUrls": false,
     *       //   "shortName": "my_shortName"
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
      params: Params$Resource$Settings$Datasources$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Settings$Datasources$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Settings$Datasources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Settings$Datasources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Settings$Datasources$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Create
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/datasources').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.delete({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the datasource. Format: datasources/{source_id\}.
     *     name: 'datasources/my-datasource',
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
      params: Params$Resource$Settings$Datasources$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Settings$Datasources$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Settings$Datasources$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Settings$Datasources$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Settings$Datasources$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Delete
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.get({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the datasource resource. Format: datasources/{source_id\}.
     *     name: 'datasources/my-datasource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableModifications": false,
     *   //   "disableServing": false,
     *   //   "displayName": "my_displayName",
     *   //   "indexingServiceAccounts": [],
     *   //   "itemsVisibility": [],
     *   //   "name": "my_name",
     *   //   "operationIds": [],
     *   //   "returnThumbnailUrls": false,
     *   //   "shortName": "my_shortName"
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
      params: Params$Resource$Settings$Datasources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Settings$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    get(
      params: Params$Resource$Settings$Datasources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Settings$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Settings$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DataSource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
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
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * Lists datasources. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.list({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Maximum number of datasources to fetch in a request. The max value is 1000. The default value is 1000.
     *     pageSize: 'placeholder-value',
     *     // Starting index of the results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sources": []
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
      params: Params$Resource$Settings$Datasources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Settings$Datasources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataSourceResponse>;
    list(
      params: Params$Resource$Settings$Datasources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Settings$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourceResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourceResponse>
    ): void;
    list(
      params: Params$Resource$Settings$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourceResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourceResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSourceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSourceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDataSourceResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/datasources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDataSourceResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataSourceResponse>(parameters);
      }
    }

    /**
     * Updates a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.patch({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the datasource resource. Format: datasources/{source_id\}. The name is ignored when creating a datasource.
     *     name: 'datasources/my-datasource',
     *     // Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disableModifications": false,
     *       //   "disableServing": false,
     *       //   "displayName": "my_displayName",
     *       //   "indexingServiceAccounts": [],
     *       //   "itemsVisibility": [],
     *       //   "name": "my_name",
     *       //   "operationIds": [],
     *       //   "returnThumbnailUrls": false,
     *       //   "shortName": "my_shortName"
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
    patch(
      params: Params$Resource$Settings$Datasources$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Settings$Datasources$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Settings$Datasources$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Settings$Datasources$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Settings$Datasources$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Patch
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Updates a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.update({
     *     // The name of the datasource resource. Format: datasources/{source_id\}. The name is ignored when creating a datasource.
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugOptions": {},
     *       //   "source": {},
     *       //   "updateMask": "my_updateMask"
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
    update(
      params: Params$Resource$Settings$Datasources$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Settings$Datasources$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Settings$Datasources$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Settings$Datasources$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Settings$Datasources$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Update
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
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

  export interface Params$Resource$Settings$Datasources$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }
  export interface Params$Resource$Settings$Datasources$Delete
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the datasource. Format: datasources/{source_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Settings$Datasources$Get
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the datasource resource. Format: datasources/{source_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Settings$Datasources$List
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Maximum number of datasources to fetch in a request. The max value is 1000. The default value is 1000.
     */
    pageSize?: number;
    /**
     * Starting index of the results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Settings$Datasources$Patch
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the datasource resource. Format: datasources/{source_id\}. The name is ignored when creating a datasource.
     */
    name?: string;
    /**
     * Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }
  export interface Params$Resource$Settings$Datasources$Update
    extends StandardParameters {
    /**
     * The name of the datasource resource. Format: datasources/{source_id\}. The name is ignored when creating a datasource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateDataSourceRequest;
  }

  export class Resource$Settings$Searchapplications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceRestrictions": [],
     *       //   "defaultFacetOptions": [],
     *       //   "defaultSortOptions": {},
     *       //   "displayName": "my_displayName",
     *       //   "enableAuditLog": false,
     *       //   "name": "my_name",
     *       //   "operationIds": [],
     *       //   "queryInterpretationConfig": {},
     *       //   "returnResultThumbnailUrls": false,
     *       //   "scoringConfig": {},
     *       //   "sourceConfig": []
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
      params: Params$Resource$Settings$Searchapplications$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Settings$Searchapplications$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Settings$Searchapplications$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Settings$Searchapplications$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Settings$Searchapplications$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Create
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/searchapplications').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.delete({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the search application to be deleted. Format: applications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
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
      params: Params$Resource$Settings$Searchapplications$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Settings$Searchapplications$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Settings$Searchapplications$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Settings$Searchapplications$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Settings$Searchapplications$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Delete
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the specified search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.get({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the search application. Format: searchapplications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceRestrictions": [],
     *   //   "defaultFacetOptions": [],
     *   //   "defaultSortOptions": {},
     *   //   "displayName": "my_displayName",
     *   //   "enableAuditLog": false,
     *   //   "name": "my_name",
     *   //   "operationIds": [],
     *   //   "queryInterpretationConfig": {},
     *   //   "returnResultThumbnailUrls": false,
     *   //   "scoringConfig": {},
     *   //   "sourceConfig": []
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
      params: Params$Resource$Settings$Searchapplications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Settings$Searchapplications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchApplication>;
    get(
      params: Params$Resource$Settings$Searchapplications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Settings$Searchapplications$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SearchApplication>,
      callback: BodyResponseCallback<Schema$SearchApplication>
    ): void;
    get(
      params: Params$Resource$Settings$Searchapplications$Get,
      callback: BodyResponseCallback<Schema$SearchApplication>
    ): void;
    get(callback: BodyResponseCallback<Schema$SearchApplication>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Get
        | BodyResponseCallback<Schema$SearchApplication>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchApplication>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchApplication>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchApplication>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
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
        createAPIRequest<Schema$SearchApplication>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchApplication>(parameters);
      }
    }

    /**
     * Lists all search applications. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.list({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any. The default value is 10
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "searchApplications": []
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
      params: Params$Resource$Settings$Searchapplications$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Settings$Searchapplications$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSearchApplicationsResponse>;
    list(
      params: Params$Resource$Settings$Searchapplications$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Settings$Searchapplications$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSearchApplicationsResponse>,
      callback: BodyResponseCallback<Schema$ListSearchApplicationsResponse>
    ): void;
    list(
      params: Params$Resource$Settings$Searchapplications$List,
      callback: BodyResponseCallback<Schema$ListSearchApplicationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSearchApplicationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$List
        | BodyResponseCallback<Schema$ListSearchApplicationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSearchApplicationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSearchApplicationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSearchApplicationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/searchapplications').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSearchApplicationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSearchApplicationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.patch({
     *     // The name of the Search Application. Format: searchapplications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
     *     // Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceRestrictions": [],
     *       //   "defaultFacetOptions": [],
     *       //   "defaultSortOptions": {},
     *       //   "displayName": "my_displayName",
     *       //   "enableAuditLog": false,
     *       //   "name": "my_name",
     *       //   "operationIds": [],
     *       //   "queryInterpretationConfig": {},
     *       //   "returnResultThumbnailUrls": false,
     *       //   "scoringConfig": {},
     *       //   "sourceConfig": []
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
    patch(
      params: Params$Resource$Settings$Searchapplications$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Settings$Searchapplications$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Settings$Searchapplications$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Settings$Searchapplications$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Settings$Searchapplications$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Patch
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.reset({
     *     // The name of the search application to be reset. Format: applications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugOptions": {}
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
    reset(
      params: Params$Resource$Settings$Searchapplications$Reset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reset(
      params?: Params$Resource$Settings$Searchapplications$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    reset(
      params: Params$Resource$Settings$Searchapplications$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Settings$Searchapplications$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(
      params: Params$Resource$Settings$Searchapplications$Reset,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Operation>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Reset
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}:reset').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.update({
     *     // The name of the Search Application. Format: searchapplications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
     *     // Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceRestrictions": [],
     *       //   "defaultFacetOptions": [],
     *       //   "defaultSortOptions": {},
     *       //   "displayName": "my_displayName",
     *       //   "enableAuditLog": false,
     *       //   "name": "my_name",
     *       //   "operationIds": [],
     *       //   "queryInterpretationConfig": {},
     *       //   "returnResultThumbnailUrls": false,
     *       //   "scoringConfig": {},
     *       //   "sourceConfig": []
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
    update(
      params: Params$Resource$Settings$Searchapplications$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Settings$Searchapplications$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Settings$Searchapplications$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Settings$Searchapplications$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Settings$Searchapplications$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Update
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
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

  export interface Params$Resource$Settings$Searchapplications$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchApplication;
  }
  export interface Params$Resource$Settings$Searchapplications$Delete
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the search application to be deleted. Format: applications/{application_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Settings$Searchapplications$Get
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the search application. Format: searchapplications/{application_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Settings$Searchapplications$List
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any. The default value is 10
     */
    pageToken?: string;
  }
  export interface Params$Resource$Settings$Searchapplications$Patch
    extends StandardParameters {
    /**
     * The name of the Search Application. Format: searchapplications/{application_id\}.
     */
    name?: string;
    /**
     * Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchApplication;
  }
  export interface Params$Resource$Settings$Searchapplications$Reset
    extends StandardParameters {
    /**
     * The name of the search application to be reset. Format: applications/{application_id\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetSearchApplicationRequest;
  }
  export interface Params$Resource$Settings$Searchapplications$Update
    extends StandardParameters {
    /**
     * The name of the Search Application. Format: searchapplications/{application_id\}.
     */
    name?: string;
    /**
     * Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchApplication;
  }

  export class Resource$Stats {
    context: APIRequestContext;
    index: Resource$Stats$Index;
    query: Resource$Stats$Query;
    session: Resource$Stats$Session;
    user: Resource$Stats$User;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.index = new Resource$Stats$Index(this.context);
      this.query = new Resource$Stats$Query(this.context);
      this.session = new Resource$Stats$Session(this.context);
      this.user = new Resource$Stats$User(this.context);
    }

    /**
     * Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getIndex({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averageIndexedItemCount": "my_averageIndexedItemCount",
     *   //   "stats": []
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
    getIndex(
      params: Params$Resource$Stats$Getindex,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIndex(
      params?: Params$Resource$Stats$Getindex,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerIndexStatsResponse>;
    getIndex(
      params: Params$Resource$Stats$Getindex,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIndex(
      params: Params$Resource$Stats$Getindex,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
    ): void;
    getIndex(
      params: Params$Resource$Stats$Getindex,
      callback: BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
    ): void;
    getIndex(
      callback: BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
    ): void;
    getIndex(
      paramsOrCallback?:
        | Params$Resource$Stats$Getindex
        | BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerIndexStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Stats$Getindex;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getindex;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/index').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetCustomerIndexStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerIndexStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getQuery({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": [],
     *   //   "totalQueryCount": "my_totalQueryCount"
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
    getQuery(
      params: Params$Resource$Stats$Getquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getQuery(
      params?: Params$Resource$Stats$Getquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerQueryStatsResponse>;
    getQuery(
      params: Params$Resource$Stats$Getquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getQuery(
      params: Params$Resource$Stats$Getquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
    ): void;
    getQuery(
      params: Params$Resource$Stats$Getquery,
      callback: BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
    ): void;
    getQuery(
      callback: BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
    ): void;
    getQuery(
      paramsOrCallback?:
        | Params$Resource$Stats$Getquery
        | BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerQueryStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Stats$Getquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/query').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetCustomerQueryStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerQueryStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getSearchapplication({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'endDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'endDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'endDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'startDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'startDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'startDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averageSearchApplicationCount": "my_averageSearchApplicationCount",
     *   //   "stats": []
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
    getSearchapplication(
      params: Params$Resource$Stats$Getsearchapplication,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSearchapplication(
      params?: Params$Resource$Stats$Getsearchapplication,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerSearchApplicationStatsResponse>;
    getSearchapplication(
      params: Params$Resource$Stats$Getsearchapplication,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSearchapplication(
      params: Params$Resource$Stats$Getsearchapplication,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerSearchApplicationStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerSearchApplicationStatsResponse>
    ): void;
    getSearchapplication(
      params: Params$Resource$Stats$Getsearchapplication,
      callback: BodyResponseCallback<Schema$GetCustomerSearchApplicationStatsResponse>
    ): void;
    getSearchapplication(
      callback: BodyResponseCallback<Schema$GetCustomerSearchApplicationStatsResponse>
    ): void;
    getSearchapplication(
      paramsOrCallback?:
        | Params$Resource$Stats$Getsearchapplication
        | BodyResponseCallback<Schema$GetCustomerSearchApplicationStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerSearchApplicationStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerSearchApplicationStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerSearchApplicationStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$Getsearchapplication;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getsearchapplication;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/searchapplication').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetCustomerSearchApplicationStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerSearchApplicationStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getSession({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
    getSession(
      params: Params$Resource$Stats$Getsession,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSession(
      params?: Params$Resource$Stats$Getsession,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerSessionStatsResponse>;
    getSession(
      params: Params$Resource$Stats$Getsession,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSession(
      params: Params$Resource$Stats$Getsession,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
    ): void;
    getSession(
      params: Params$Resource$Stats$Getsession,
      callback: BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
    ): void;
    getSession(
      callback: BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
    ): void;
    getSession(
      paramsOrCallback?:
        | Params$Resource$Stats$Getsession
        | BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerSessionStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Stats$Getsession;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getsession;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/session').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetCustomerSessionStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerSessionStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getUser({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
    getUser(
      params: Params$Resource$Stats$Getuser,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getUser(
      params?: Params$Resource$Stats$Getuser,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerUserStatsResponse>;
    getUser(
      params: Params$Resource$Stats$Getuser,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getUser(
      params: Params$Resource$Stats$Getuser,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerUserStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
    ): void;
    getUser(
      params: Params$Resource$Stats$Getuser,
      callback: BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
    ): void;
    getUser(
      callback: BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
    ): void;
    getUser(
      paramsOrCallback?:
        | Params$Resource$Stats$Getuser
        | BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerUserStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Stats$Getuser;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getuser;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/user').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetCustomerUserStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerUserStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$Getindex extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }
  export interface Params$Resource$Stats$Getquery extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }
  export interface Params$Resource$Stats$Getsearchapplication
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'endDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'endDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'endDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'startDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'startDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'startDate.year'?: number;
  }
  export interface Params$Resource$Stats$Getsession extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }
  export interface Params$Resource$Stats$Getuser extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$Stats$Index {
    context: APIRequestContext;
    datasources: Resource$Stats$Index$Datasources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasources = new Resource$Stats$Index$Datasources(this.context);
    }
  }

  export class Resource$Stats$Index$Datasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.index.datasources.get({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id\}"
     *     name: 'datasources/my-datasource',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "averageIndexedItemCount": "my_averageIndexedItemCount",
     *   //   "stats": []
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
      params: Params$Resource$Stats$Index$Datasources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Stats$Index$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetDataSourceIndexStatsResponse>;
    get(
      params: Params$Resource$Stats$Index$Datasources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Stats$Index$Datasources$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>,
      callback: BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
    ): void;
    get(
      params: Params$Resource$Stats$Index$Datasources$Get,
      callback: BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Stats$Index$Datasources$Get
        | BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetDataSourceIndexStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$Index$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Index$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/index/{+name}').replace(
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
        createAPIRequest<Schema$GetDataSourceIndexStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetDataSourceIndexStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$Index$Datasources$Get
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id\}"
     */
    name?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$Stats$Query {
    context: APIRequestContext;
    searchapplications: Resource$Stats$Query$Searchapplications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.searchapplications = new Resource$Stats$Query$Searchapplications(
        this.context
      );
    }
  }

  export class Resource$Stats$Query$Searchapplications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.query.searchapplications.get({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // The resource id of the search application query stats, in the following format: searchapplications/{application_id\}
     *     name: 'searchapplications/my-searchapplication',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": [],
     *   //   "totalQueryCount": "my_totalQueryCount"
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
      params: Params$Resource$Stats$Query$Searchapplications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Stats$Query$Searchapplications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetSearchApplicationQueryStatsResponse>;
    get(
      params: Params$Resource$Stats$Query$Searchapplications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Stats$Query$Searchapplications$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>,
      callback: BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
    ): void;
    get(
      params: Params$Resource$Stats$Query$Searchapplications$Get,
      callback: BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Stats$Query$Searchapplications$Get
        | BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetSearchApplicationQueryStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$Query$Searchapplications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Query$Searchapplications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/query/{+name}').replace(
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
        createAPIRequest<Schema$GetSearchApplicationQueryStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetSearchApplicationQueryStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$Query$Searchapplications$Get
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * The resource id of the search application query stats, in the following format: searchapplications/{application_id\}
     */
    name?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$Stats$Session {
    context: APIRequestContext;
    searchapplications: Resource$Stats$Session$Searchapplications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.searchapplications = new Resource$Stats$Session$Searchapplications(
        this.context
      );
    }
  }

  export class Resource$Stats$Session$Searchapplications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.session.searchapplications.get({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // The resource id of the search application session stats, in the following format: searchapplications/{application_id\}
     *     name: 'searchapplications/my-searchapplication',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
      params: Params$Resource$Stats$Session$Searchapplications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Stats$Session$Searchapplications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetSearchApplicationSessionStatsResponse>;
    get(
      params: Params$Resource$Stats$Session$Searchapplications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Stats$Session$Searchapplications$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>,
      callback: BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
    ): void;
    get(
      params: Params$Resource$Stats$Session$Searchapplications$Get,
      callback: BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Stats$Session$Searchapplications$Get
        | BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetSearchApplicationSessionStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$Session$Searchapplications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Session$Searchapplications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/session/{+name}').replace(
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
        createAPIRequest<Schema$GetSearchApplicationSessionStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetSearchApplicationSessionStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$Session$Searchapplications$Get
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * The resource id of the search application session stats, in the following format: searchapplications/{application_id\}
     */
    name?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$Stats$User {
    context: APIRequestContext;
    searchapplications: Resource$Stats$User$Searchapplications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.searchapplications = new Resource$Stats$User$Searchapplications(
        this.context
      );
    }
  }

  export class Resource$Stats$User$Searchapplications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.user.searchapplications.get({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // The resource id of the search application session stats, in the following format: searchapplications/{application_id\}
     *     name: 'searchapplications/my-searchapplication',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
      params: Params$Resource$Stats$User$Searchapplications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Stats$User$Searchapplications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetSearchApplicationUserStatsResponse>;
    get(
      params: Params$Resource$Stats$User$Searchapplications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Stats$User$Searchapplications$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>,
      callback: BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
    ): void;
    get(
      params: Params$Resource$Stats$User$Searchapplications$Get,
      callback: BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Stats$User$Searchapplications$Get
        | BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetSearchApplicationUserStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$User$Searchapplications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$User$Searchapplications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/user/{+name}').replace(
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
        createAPIRequest<Schema$GetSearchApplicationUserStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetSearchApplicationUserStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$User$Searchapplications$Get
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * The resource id of the search application session stats, in the following format: searchapplications/{application_id\}
     */
    name?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.initializeCustomer({
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
    initializeCustomer(
      params: Params$Resource$V1$Initializecustomer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    initializeCustomer(
      params?: Params$Resource$V1$Initializecustomer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    initializeCustomer(
      params: Params$Resource$V1$Initializecustomer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    initializeCustomer(
      params: Params$Resource$V1$Initializecustomer,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    initializeCustomer(
      params: Params$Resource$V1$Initializecustomer,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    initializeCustomer(callback: BodyResponseCallback<Schema$Operation>): void;
    initializeCustomer(
      paramsOrCallback?:
        | Params$Resource$V1$Initializecustomer
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Initializecustomer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Initializecustomer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1:initializeCustomer').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$V1$Initializecustomer
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$InitializeCustomerRequest;
  }
}
