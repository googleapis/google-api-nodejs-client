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

export namespace games_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Play Game Services API
   *
   * The API for Google Play Game Services.
   *
   * @example
   * const {google} = require('googleapis');
   * const games = google.games('v1');
   *
   * @namespace games
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Games
   */
  export class Games {
    context: APIRequestContext;
    achievementDefinitions: Resource$Achievementdefinitions;
    achievements: Resource$Achievements;
    applications: Resource$Applications;
    events: Resource$Events;
    leaderboards: Resource$Leaderboards;
    metagame: Resource$Metagame;
    players: Resource$Players;
    pushtokens: Resource$Pushtokens;
    questMilestones: Resource$Questmilestones;
    quests: Resource$Quests;
    revisions: Resource$Revisions;
    rooms: Resource$Rooms;
    scores: Resource$Scores;
    snapshots: Resource$Snapshots;
    turnBasedMatches: Resource$Turnbasedmatches;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.achievementDefinitions = new Resource$Achievementdefinitions(
        this.context
      );
      this.achievements = new Resource$Achievements(this.context);
      this.applications = new Resource$Applications(this.context);
      this.events = new Resource$Events(this.context);
      this.leaderboards = new Resource$Leaderboards(this.context);
      this.metagame = new Resource$Metagame(this.context);
      this.players = new Resource$Players(this.context);
      this.pushtokens = new Resource$Pushtokens(this.context);
      this.questMilestones = new Resource$Questmilestones(this.context);
      this.quests = new Resource$Quests(this.context);
      this.revisions = new Resource$Revisions(this.context);
      this.rooms = new Resource$Rooms(this.context);
      this.scores = new Resource$Scores(this.context);
      this.snapshots = new Resource$Snapshots(this.context);
      this.turnBasedMatches = new Resource$Turnbasedmatches(this.context);
    }
  }

  /**
   * This is a JSON template for an achievement definition object.
   */
  export interface Schema$AchievementDefinition {
    /**
     * The type of the achievement. Possible values are:   - &quot;STANDARD&quot; - Achievement is either locked or unlocked.  - &quot;INCREMENTAL&quot; - Achievement is incremental.
     */
    achievementType?: string | null;
    /**
     * The description of the achievement.
     */
    description?: string | null;
    /**
     * Experience points which will be earned when unlocking this achievement.
     */
    experiencePoints?: string | null;
    /**
     * The total steps for an incremental achievement as a string.
     */
    formattedTotalSteps?: string | null;
    /**
     * The ID of the achievement.
     */
    id?: string | null;
    /**
     * The initial state of the achievement. Possible values are:   - &quot;HIDDEN&quot; - Achievement is hidden.  - &quot;REVEALED&quot; - Achievement is revealed.  - &quot;UNLOCKED&quot; - Achievement is unlocked.
     */
    initialState?: string | null;
    /**
     * Indicates whether the revealed icon image being returned is a default image, or is provided by the game.
     */
    isRevealedIconUrlDefault?: boolean | null;
    /**
     * Indicates whether the unlocked icon image being returned is a default image, or is game-provided.
     */
    isUnlockedIconUrlDefault?: boolean | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinition.
     */
    kind?: string | null;
    /**
     * The name of the achievement.
     */
    name?: string | null;
    /**
     * The image URL for the revealed achievement icon.
     */
    revealedIconUrl?: string | null;
    /**
     * The total steps for an incremental achievement.
     */
    totalSteps?: number | null;
    /**
     * The image URL for the unlocked achievement icon.
     */
    unlockedIconUrl?: string | null;
  }
  /**
   * This is a JSON template for a list of achievement definition objects.
   */
  export interface Schema$AchievementDefinitionsListResponse {
    /**
     * The achievement definitions.
     */
    items?: Schema$AchievementDefinition[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinitionsListResponse.
     */
    kind?: string | null;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for an achievement increment response
   */
  export interface Schema$AchievementIncrementResponse {
    /**
     * The current steps recorded for this incremental achievement.
     */
    currentSteps?: number | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementIncrementResponse.
     */
    kind?: string | null;
    /**
     * Whether the current steps for the achievement has reached the number of steps required to unlock.
     */
    newlyUnlocked?: boolean | null;
  }
  /**
   * This is a JSON template for an achievement reveal response
   */
  export interface Schema$AchievementRevealResponse {
    /**
     * The current state of the achievement for which a reveal was attempted. This might be UNLOCKED if the achievement was already unlocked. Possible values are:   - &quot;REVEALED&quot; - Achievement is revealed.  - &quot;UNLOCKED&quot; - Achievement is unlocked.
     */
    currentState?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementRevealResponse.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for an achievement set steps at least response.
   */
  export interface Schema$AchievementSetStepsAtLeastResponse {
    /**
     * The current steps recorded for this incremental achievement.
     */
    currentSteps?: number | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementSetStepsAtLeastResponse.
     */
    kind?: string | null;
    /**
     * Whether the the current steps for the achievement has reached the number of steps required to unlock.
     */
    newlyUnlocked?: boolean | null;
  }
  /**
   * This is a JSON template for an achievement unlock response
   */
  export interface Schema$AchievementUnlockResponse {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUnlockResponse.
     */
    kind?: string | null;
    /**
     * Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
     */
    newlyUnlocked?: boolean | null;
  }
  /**
   * This is a JSON template for a list of achievement update requests.
   */
  export interface Schema$AchievementUpdateMultipleRequest {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateMultipleRequest.
     */
    kind?: string | null;
    /**
     * The individual achievement update requests.
     */
    updates?: Schema$AchievementUpdateRequest[];
  }
  /**
   * This is a JSON template for an achievement unlock response.
   */
  export interface Schema$AchievementUpdateMultipleResponse {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateListResponse.
     */
    kind?: string | null;
    /**
     * The updated state of the achievements.
     */
    updatedAchievements?: Schema$AchievementUpdateResponse[];
  }
  /**
   * This is a JSON template for a request to update an achievement.
   */
  export interface Schema$AchievementUpdateRequest {
    /**
     * The achievement this update is being applied to.
     */
    achievementId?: string | null;
    /**
     * The payload if an update of type INCREMENT was requested for the achievement.
     */
    incrementPayload?: Schema$GamesAchievementIncrement;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateRequest.
     */
    kind?: string | null;
    /**
     * The payload if an update of type SET_STEPS_AT_LEAST was requested for the achievement.
     */
    setStepsAtLeastPayload?: Schema$GamesAchievementSetStepsAtLeast;
    /**
     * The type of update being applied. Possible values are:   - &quot;REVEAL&quot; - Achievement is revealed.  - &quot;UNLOCK&quot; - Achievement is unlocked.  - &quot;INCREMENT&quot; - Achievement is incremented.  - &quot;SET_STEPS_AT_LEAST&quot; - Achievement progress is set to at least the passed value.
     */
    updateType?: string | null;
  }
  /**
   * This is a JSON template for an achievement update response.
   */
  export interface Schema$AchievementUpdateResponse {
    /**
     * The achievement this update is was applied to.
     */
    achievementId?: string | null;
    /**
     * The current state of the achievement. Possible values are:   - &quot;HIDDEN&quot; - Achievement is hidden.  - &quot;REVEALED&quot; - Achievement is revealed.  - &quot;UNLOCKED&quot; - Achievement is unlocked.
     */
    currentState?: string | null;
    /**
     * The current steps recorded for this achievement if it is incremental.
     */
    currentSteps?: number | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateResponse.
     */
    kind?: string | null;
    /**
     * Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
     */
    newlyUnlocked?: boolean | null;
    /**
     * Whether the requested updates actually affected the achievement.
     */
    updateOccurred?: boolean | null;
  }
  /**
   * This is a JSON template for aggregate stats.
   */
  export interface Schema$AggregateStats {
    /**
     * The number of messages sent between a pair of peers.
     */
    count?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#aggregateStats.
     */
    kind?: string | null;
    /**
     * The maximum amount.
     */
    max?: string | null;
    /**
     * The minimum amount.
     */
    min?: string | null;
    /**
     * The total number of bytes sent for messages between a pair of peers.
     */
    sum?: string | null;
  }
  /**
   * This is a JSON template for an anonymous player
   */
  export interface Schema$AnonymousPlayer {
    /**
     * The base URL for the image to display for the anonymous player.
     */
    avatarImageUrl?: string | null;
    /**
     * The name to display for the anonymous player.
     */
    displayName?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#anonymousPlayer.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for the Application resource.
   */
  export interface Schema$Application {
    /**
     * The number of achievements visible to the currently authenticated player.
     */
    achievement_count?: number | null;
    /**
     * The assets of the application.
     */
    assets?: Schema$ImageAsset[];
    /**
     * The author of the application.
     */
    author?: string | null;
    /**
     * The category of the application.
     */
    category?: Schema$ApplicationCategory;
    /**
     * The description of the application.
     */
    description?: string | null;
    /**
     * A list of features that have been enabled for the application. Possible values are:   - &quot;SNAPSHOTS&quot; - Snapshots has been enabled
     */
    enabledFeatures?: string[] | null;
    /**
     * The ID of the application.
     */
    id?: string | null;
    /**
     * The instances of the application.
     */
    instances?: Schema$Instance[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#application.
     */
    kind?: string | null;
    /**
     * The last updated timestamp of the application.
     */
    lastUpdatedTimestamp?: string | null;
    /**
     * The number of leaderboards visible to the currently authenticated player.
     */
    leaderboard_count?: number | null;
    /**
     * The name of the application.
     */
    name?: string | null;
    /**
     * A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. &quot;E0E0E0&quot;).
     */
    themeColor?: string | null;
  }
  /**
   * This is a JSON template for an application category object.
   */
  export interface Schema$ApplicationCategory {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#applicationCategory.
     */
    kind?: string | null;
    /**
     * The primary category.
     */
    primary?: string | null;
    /**
     * The secondary category.
     */
    secondary?: string | null;
  }
  /**
   * This is a JSON template for a third party application verification response resource.
   */
  export interface Schema$ApplicationVerifyResponse {
    /**
     * An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.)
     */
    alternate_player_id?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#applicationVerifyResponse.
     */
    kind?: string | null;
    /**
     * The ID of the player that was issued the auth token used in this request.
     */
    player_id?: string | null;
  }
  /**
   * This is a JSON template for data related to individual game categories.
   */
  export interface Schema$Category {
    /**
     * The category name.
     */
    category?: string | null;
    /**
     * Experience points earned in this category.
     */
    experiencePoints?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#category.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for a list of category data objects.
   */
  export interface Schema$CategoryListResponse {
    /**
     * The list of categories with usage data.
     */
    items?: Schema$Category[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#categoryListResponse.
     */
    kind?: string | null;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for a batch update failure resource.
   */
  export interface Schema$EventBatchRecordFailure {
    /**
     * The cause for the update failure. Possible values are:   - &quot;TOO_LARGE&quot;: A batch request was issued with more events than are allowed in a single batch.  - &quot;TIME_PERIOD_EXPIRED&quot;: A batch was sent with data too far in the past to record.  - &quot;TIME_PERIOD_SHORT&quot;: A batch was sent with a time range that was too short.  - &quot;TIME_PERIOD_LONG&quot;: A batch was sent with a time range that was too long.  - &quot;ALREADY_UPDATED&quot;: An attempt was made to record a batch of data which was already seen.  - &quot;RECORD_RATE_HIGH&quot;: An attempt was made to record data faster than the server will apply updates.
     */
    failureCause?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventBatchRecordFailure.
     */
    kind?: string | null;
    /**
     * The time range which was rejected; empty for a request-wide failure.
     */
    range?: Schema$EventPeriodRange;
  }
  /**
   * This is a JSON template for an event child relationship resource.
   */
  export interface Schema$EventChild {
    /**
     * The ID of the child event.
     */
    childId?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventChild.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for an event definition resource.
   */
  export interface Schema$EventDefinition {
    /**
     * A list of events that are a child of this event.
     */
    childEvents?: Schema$EventChild[];
    /**
     * Description of what this event represents.
     */
    description?: string | null;
    /**
     * The name to display for the event.
     */
    displayName?: string | null;
    /**
     * The ID of the event.
     */
    id?: string | null;
    /**
     * The base URL for the image that represents the event.
     */
    imageUrl?: string | null;
    /**
     * Indicates whether the icon image being returned is a default image, or is game-provided.
     */
    isDefaultImageUrl?: boolean | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinition.
     */
    kind?: string | null;
    /**
     * The visibility of event being tracked in this definition. Possible values are:   - &quot;REVEALED&quot;: This event should be visible to all users.  - &quot;HIDDEN&quot;: This event should only be shown to users that have recorded this event at least once.
     */
    visibility?: string | null;
  }
  /**
   * This is a JSON template for a ListDefinitions response.
   */
  export interface Schema$EventDefinitionListResponse {
    /**
     * The event definitions.
     */
    items?: Schema$EventDefinition[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinitionListResponse.
     */
    kind?: string | null;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for an event period time range.
   */
  export interface Schema$EventPeriodRange {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodRange.
     */
    kind?: string | null;
    /**
     * The time when this update period ends, in millis, since 1970 UTC (Unix Epoch).
     */
    periodEndMillis?: string | null;
    /**
     * The time when this update period begins, in millis, since 1970 UTC (Unix Epoch).
     */
    periodStartMillis?: string | null;
  }
  /**
   * This is a JSON template for an event period update resource.
   */
  export interface Schema$EventPeriodUpdate {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodUpdate.
     */
    kind?: string | null;
    /**
     * The time period being covered by this update.
     */
    timePeriod?: Schema$EventPeriodRange;
    /**
     * The updates being made for this time period.
     */
    updates?: Schema$EventUpdateRequest[];
  }
  /**
   * This is a JSON template for an event update failure resource.
   */
  export interface Schema$EventRecordFailure {
    /**
     * The ID of the event that was not updated.
     */
    eventId?: string | null;
    /**
     * The cause for the update failure. Possible values are:   - &quot;NOT_FOUND&quot; - An attempt was made to set an event that was not defined.  - &quot;INVALID_UPDATE_VALUE&quot; - An attempt was made to increment an event by a non-positive value.
     */
    failureCause?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordFailure.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for an event period update resource.
   */
  export interface Schema$EventRecordRequest {
    /**
     * The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).
     */
    currentTimeMillis?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordRequest.
     */
    kind?: string | null;
    /**
     * The request ID used to identify this attempt to record events.
     */
    requestId?: string | null;
    /**
     * A list of the time period updates being made in this request.
     */
    timePeriods?: Schema$EventPeriodUpdate[];
  }
  /**
   * This is a JSON template for an event period update resource.
   */
  export interface Schema$EventUpdateRequest {
    /**
     * The ID of the event being modified in this update.
     */
    definitionId?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateRequest.
     */
    kind?: string | null;
    /**
     * The number of times this event occurred in this time period.
     */
    updateCount?: string | null;
  }
  /**
   * This is a JSON template for an event period update resource.
   */
  export interface Schema$EventUpdateResponse {
    /**
     * Any batch-wide failures which occurred applying updates.
     */
    batchFailures?: Schema$EventBatchRecordFailure[];
    /**
     * Any failures updating a particular event.
     */
    eventFailures?: Schema$EventRecordFailure[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateResponse.
     */
    kind?: string | null;
    /**
     * The current status of any updated events
     */
    playerEvents?: Schema$PlayerEvent[];
  }
  /**
   * This is a JSON template for the payload to request to increment an achievement.
   */
  export interface Schema$GamesAchievementIncrement {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementIncrement.
     */
    kind?: string | null;
    /**
     * The requestId associated with an increment to an achievement.
     */
    requestId?: string | null;
    /**
     * The number of steps to be incremented.
     */
    steps?: number | null;
  }
  /**
   * This is a JSON template for the payload to request to increment an achievement.
   */
  export interface Schema$GamesAchievementSetStepsAtLeast {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementSetStepsAtLeast.
     */
    kind?: string | null;
    /**
     * The minimum number of steps for the achievement to be set to.
     */
    steps?: number | null;
  }
  /**
   * This is a JSON template for an image asset object.
   */
  export interface Schema$ImageAsset {
    /**
     * The height of the asset.
     */
    height?: number | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#imageAsset.
     */
    kind?: string | null;
    /**
     * The name of the asset.
     */
    name?: string | null;
    /**
     * The URL of the asset.
     */
    url?: string | null;
    /**
     * The width of the asset.
     */
    width?: number | null;
  }
  /**
   * This is a JSON template for the Instance resource.
   */
  export interface Schema$Instance {
    /**
     * URI which shows where a user can acquire this instance.
     */
    acquisitionUri?: string | null;
    /**
     * Platform dependent details for Android.
     */
    androidInstance?: Schema$InstanceAndroidDetails;
    /**
     * Platform dependent details for iOS.
     */
    iosInstance?: Schema$InstanceIosDetails;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#instance.
     */
    kind?: string | null;
    /**
     * Localized display name.
     */
    name?: string | null;
    /**
     * The platform type. Possible values are:   - &quot;ANDROID&quot; - Instance is for Android.  - &quot;IOS&quot; - Instance is for iOS  - &quot;WEB_APP&quot; - Instance is for Web App.
     */
    platformType?: string | null;
    /**
     * Flag to show if this game instance supports realtime play.
     */
    realtimePlay?: boolean | null;
    /**
     * Flag to show if this game instance supports turn based play.
     */
    turnBasedPlay?: boolean | null;
    /**
     * Platform dependent details for Web.
     */
    webInstance?: Schema$InstanceWebDetails;
  }
  /**
   * This is a JSON template for the Android instance details resource.
   */
  export interface Schema$InstanceAndroidDetails {
    /**
     * Flag indicating whether the anti-piracy check is enabled.
     */
    enablePiracyCheck?: boolean | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#instanceAndroidDetails.
     */
    kind?: string | null;
    /**
     * Android package name which maps to Google Play URL.
     */
    packageName?: string | null;
    /**
     * Indicates that this instance is the default for new installations.
     */
    preferred?: boolean | null;
  }
  /**
   * This is a JSON template for the iOS details resource.
   */
  export interface Schema$InstanceIosDetails {
    /**
     * Bundle identifier.
     */
    bundleIdentifier?: string | null;
    /**
     * iTunes App ID.
     */
    itunesAppId?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#instanceIosDetails.
     */
    kind?: string | null;
    /**
     * Indicates that this instance is the default for new installations on iPad devices.
     */
    preferredForIpad?: boolean | null;
    /**
     * Indicates that this instance is the default for new installations on iPhone devices.
     */
    preferredForIphone?: boolean | null;
    /**
     * Flag to indicate if this instance supports iPad.
     */
    supportIpad?: boolean | null;
    /**
     * Flag to indicate if this instance supports iPhone.
     */
    supportIphone?: boolean | null;
  }
  /**
   * This is a JSON template for the Web details resource.
   */
  export interface Schema$InstanceWebDetails {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#instanceWebDetails.
     */
    kind?: string | null;
    /**
     * Launch URL for the game.
     */
    launchUrl?: string | null;
    /**
     * Indicates that this instance is the default for new installations.
     */
    preferred?: boolean | null;
  }
  /**
   * This is a JSON template for the Leaderboard resource.
   */
  export interface Schema$Leaderboard {
    /**
     * The icon for the leaderboard.
     */
    iconUrl?: string | null;
    /**
     * The leaderboard ID.
     */
    id?: string | null;
    /**
     * Indicates whether the icon image being returned is a default image, or is game-provided.
     */
    isIconUrlDefault?: boolean | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboard.
     */
    kind?: string | null;
    /**
     * The name of the leaderboard.
     */
    name?: string | null;
    /**
     * How scores are ordered. Possible values are:   - &quot;LARGER_IS_BETTER&quot; - Larger values are better; scores are sorted in descending order.  - &quot;SMALLER_IS_BETTER&quot; - Smaller values are better; scores are sorted in ascending order.
     */
    order?: string | null;
  }
  /**
   * This is a JSON template for the Leaderboard Entry resource.
   */
  export interface Schema$LeaderboardEntry {
    /**
     * The localized string for the numerical value of this score.
     */
    formattedScore?: string | null;
    /**
     * The localized string for the rank of this score for this leaderboard.
     */
    formattedScoreRank?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardEntry.
     */
    kind?: string | null;
    /**
     * The player who holds this score.
     */
    player?: Schema$Player;
    /**
     * The rank of this score for this leaderboard.
     */
    scoreRank?: string | null;
    /**
     * Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string | null;
    /**
     * The numerical value of this score.
     */
    scoreValue?: string | null;
    /**
     * The time span of this high score. Possible values are:   - &quot;ALL_TIME&quot; - The score is an all-time high score.  - &quot;WEEKLY&quot; - The score is a weekly high score.  - &quot;DAILY&quot; - The score is a daily high score.
     */
    timeSpan?: string | null;
    /**
     * The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
     */
    writeTimestampMillis?: string | null;
  }
  /**
   * This is a JSON template for a list of leaderboard objects.
   */
  export interface Schema$LeaderboardListResponse {
    /**
     * The leaderboards.
     */
    items?: Schema$Leaderboard[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardListResponse.
     */
    kind?: string | null;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for a score rank in a leaderboard.
   */
  export interface Schema$LeaderboardScoreRank {
    /**
     * The number of scores in the leaderboard as a string.
     */
    formattedNumScores?: string | null;
    /**
     * The rank in the leaderboard as a string.
     */
    formattedRank?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScoreRank.
     */
    kind?: string | null;
    /**
     * The number of scores in the leaderboard.
     */
    numScores?: string | null;
    /**
     * The rank in the leaderboard.
     */
    rank?: string | null;
  }
  /**
   * This is a JSON template for a ListScores response.
   */
  export interface Schema$LeaderboardScores {
    /**
     * The scores in the leaderboard.
     */
    items?: Schema$LeaderboardEntry[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScores.
     */
    kind?: string | null;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The total number of scores in the leaderboard.
     */
    numScores?: string | null;
    /**
     * The score of the requesting player on the leaderboard. The player&#39;s score may appear both here and in the list of scores above. If you are viewing a public leaderboard and the player is not sharing their gameplay information publicly, the scoreRank and formattedScoreRank values will not be present.
     */
    playerScore?: Schema$LeaderboardEntry;
    /**
     * The pagination token for the previous page of results.
     */
    prevPageToken?: string | null;
  }
  /**
   * This is a JSON template for the metagame config resource
   */
  export interface Schema$MetagameConfig {
    /**
     * Current version of the metagame configuration data. When this data is updated, the version number will be increased by one.
     */
    currentVersion?: number | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#metagameConfig.
     */
    kind?: string | null;
    /**
     * The list of player levels.
     */
    playerLevels?: Schema$PlayerLevel[];
  }
  /**
   * This is a JSON template for network diagnostics reported for a client.
   */
  export interface Schema$NetworkDiagnostics {
    /**
     * The Android network subtype.
     */
    androidNetworkSubtype?: number | null;
    /**
     * The Android network type.
     */
    androidNetworkType?: number | null;
    /**
     * iOS network type as defined in Reachability.h.
     */
    iosNetworkType?: number | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#networkDiagnostics.
     */
    kind?: string | null;
    /**
     * The MCC+MNC code for the client&#39;s network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
     */
    networkOperatorCode?: string | null;
    /**
     * The name of the carrier of the client&#39;s network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
     */
    networkOperatorName?: string | null;
    /**
     * The amount of time in milliseconds it took for the client to establish a connection with the XMPP server.
     */
    registrationLatencyMillis?: number | null;
  }
  /**
   * This is a JSON template for a result for a match participant.
   */
  export interface Schema$ParticipantResult {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#participantResult.
     */
    kind?: string | null;
    /**
     * The ID of the participant.
     */
    participantId?: string | null;
    /**
     * The placement or ranking of the participant in the match results; a number from one to the number of participants in the match. Multiple participants may have the same placing value in case of a type.
     */
    placing?: number | null;
    /**
     * The result of the participant for this match. Possible values are:   - &quot;MATCH_RESULT_WIN&quot; - The participant won the match.  - &quot;MATCH_RESULT_LOSS&quot; - The participant lost the match.  - &quot;MATCH_RESULT_TIE&quot; - The participant tied the match.  - &quot;MATCH_RESULT_NONE&quot; - There was no winner for the match (nobody wins or loses this kind of game.)  - &quot;MATCH_RESULT_DISCONNECT&quot; - The participant disconnected / left during the match.  - &quot;MATCH_RESULT_DISAGREED&quot; - Different clients reported different results for this participant.
     */
    result?: string | null;
  }
  /**
   * This is a JSON template for peer channel diagnostics.
   */
  export interface Schema$PeerChannelDiagnostics {
    /**
     * Number of bytes received.
     */
    bytesReceived?: Schema$AggregateStats;
    /**
     * Number of bytes sent.
     */
    bytesSent?: Schema$AggregateStats;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#peerChannelDiagnostics.
     */
    kind?: string | null;
    /**
     * Number of messages lost.
     */
    numMessagesLost?: number | null;
    /**
     * Number of messages received.
     */
    numMessagesReceived?: number | null;
    /**
     * Number of messages sent.
     */
    numMessagesSent?: number | null;
    /**
     * Number of send failures.
     */
    numSendFailures?: number | null;
    /**
     * Roundtrip latency stats in milliseconds.
     */
    roundtripLatencyMillis?: Schema$AggregateStats;
  }
  /**
   * This is a JSON template for peer session diagnostics.
   */
  export interface Schema$PeerSessionDiagnostics {
    /**
     * Connected time in milliseconds.
     */
    connectedTimestampMillis?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#peerSessionDiagnostics.
     */
    kind?: string | null;
    /**
     * The participant ID of the peer.
     */
    participantId?: string | null;
    /**
     * Reliable channel diagnostics.
     */
    reliableChannel?: Schema$PeerChannelDiagnostics;
    /**
     * Unreliable channel diagnostics.
     */
    unreliableChannel?: Schema$PeerChannelDiagnostics;
  }
  /**
   * This is a JSON template for metadata about a player playing a game with the currently authenticated user.
   */
  export interface Schema$Played {
    /**
     * True if the player was auto-matched with the currently authenticated user.
     */
    autoMatched?: boolean | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#played.
     */
    kind?: string | null;
    /**
     * The last time the player played the game in milliseconds since the epoch in UTC.
     */
    timeMillis?: string | null;
  }
  /**
   * This is a JSON template for a Player resource.
   */
  export interface Schema$Player {
    /**
     * The base URL for the image that represents the player.
     */
    avatarImageUrl?: string | null;
    /**
     * The url to the landscape mode player banner image.
     */
    bannerUrlLandscape?: string | null;
    /**
     * The url to the portrait mode player banner image.
     */
    bannerUrlPortrait?: string | null;
    /**
     * The name to display for the player.
     */
    displayName?: string | null;
    /**
     * An object to represent Play Game experience information for the player.
     */
    experienceInfo?: Schema$PlayerExperienceInfo;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#player.
     */
    kind?: string | null;
    /**
     * Details about the last time this player played a multiplayer game with the currently authenticated player. Populated for PLAYED_WITH player collection members.
     */
    lastPlayedWith?: Schema$Played;
    /**
     * An object representation of the individual components of the player&#39;s name. For some players, these fields may not be present.
     */
    name?: {familyName?: string; givenName?: string} | null;
    /**
     * The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.
     */
    originalPlayerId?: string | null;
    /**
     * The ID of the player.
     */
    playerId?: string | null;
    /**
     * The player&#39;s profile settings. Controls whether or not the player&#39;s profile is visible to other players.
     */
    profileSettings?: Schema$ProfileSettings;
    /**
     * The player&#39;s title rewarded for their game activities.
     */
    title?: string | null;
  }
  /**
   * This is a JSON template for an achievement object.
   */
  export interface Schema$PlayerAchievement {
    /**
     * The state of the achievement. Possible values are:   - &quot;HIDDEN&quot; - Achievement is hidden.  - &quot;REVEALED&quot; - Achievement is revealed.  - &quot;UNLOCKED&quot; - Achievement is unlocked.
     */
    achievementState?: string | null;
    /**
     * The current steps for an incremental achievement.
     */
    currentSteps?: number | null;
    /**
     * Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.
     */
    experiencePoints?: string | null;
    /**
     * The current steps for an incremental achievement as a string.
     */
    formattedCurrentStepsString?: string | null;
    /**
     * The ID of the achievement.
     */
    id?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievement.
     */
    kind?: string | null;
    /**
     * The timestamp of the last modification to this achievement&#39;s state.
     */
    lastUpdatedTimestamp?: string | null;
  }
  /**
   * This is a JSON template for a list of achievement objects.
   */
  export interface Schema$PlayerAchievementListResponse {
    /**
     * The achievements.
     */
    items?: Schema$PlayerAchievement[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievementListResponse.
     */
    kind?: string | null;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for an event status resource.
   */
  export interface Schema$PlayerEvent {
    /**
     * The ID of the event definition.
     */
    definitionId?: string | null;
    /**
     * The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.
     */
    formattedNumEvents?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerEvent.
     */
    kind?: string | null;
    /**
     * The current number of times this event has occurred.
     */
    numEvents?: string | null;
    /**
     * The ID of the player.
     */
    playerId?: string | null;
  }
  /**
   * This is a JSON template for a ListByPlayer response.
   */
  export interface Schema$PlayerEventListResponse {
    /**
     * The player events.
     */
    items?: Schema$PlayerEvent[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerEventListResponse.
     */
    kind?: string | null;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for 1P/3P metadata about the player&#39;s experience.
   */
  export interface Schema$PlayerExperienceInfo {
    /**
     * The current number of experience points for the player.
     */
    currentExperiencePoints?: string | null;
    /**
     * The current level of the player.
     */
    currentLevel?: Schema$PlayerLevel;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerExperienceInfo.
     */
    kind?: string | null;
    /**
     * The timestamp when the player was leveled up, in millis since Unix epoch UTC.
     */
    lastLevelUpTimestampMillis?: string | null;
    /**
     * The next level of the player. If the current level is the maximum level, this should be same as the current level.
     */
    nextLevel?: Schema$PlayerLevel;
  }
  /**
   * This is a JSON template for a player leaderboard score object.
   */
  export interface Schema$PlayerLeaderboardScore {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScore.
     */
    kind?: string | null;
    /**
     * The ID of the leaderboard this score is in.
     */
    leaderboard_id?: string | null;
    /**
     * The public rank of the score in this leaderboard. This object will not be present if the user is not sharing their scores publicly.
     */
    publicRank?: Schema$LeaderboardScoreRank;
    /**
     * The formatted value of this score.
     */
    scoreString?: string | null;
    /**
     * Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string | null;
    /**
     * The numerical value of this score.
     */
    scoreValue?: string | null;
    /**
     * The social rank of the score in this leaderboard.
     */
    socialRank?: Schema$LeaderboardScoreRank;
    /**
     * The time span of this score. Possible values are:   - &quot;ALL_TIME&quot; - The score is an all-time score.  - &quot;WEEKLY&quot; - The score is a weekly score.  - &quot;DAILY&quot; - The score is a daily score.
     */
    timeSpan?: string | null;
    /**
     * The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
     */
    writeTimestamp?: string | null;
  }
  /**
   * This is a JSON template for a list of player leaderboard scores.
   */
  export interface Schema$PlayerLeaderboardScoreListResponse {
    /**
     * The leaderboard scores.
     */
    items?: Schema$PlayerLeaderboardScore[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScoreListResponse.
     */
    kind?: string | null;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The Player resources for the owner of this score.
     */
    player?: Schema$Player;
  }
  /**
   * This is a JSON template for 1P/3P metadata about a user&#39;s level.
   */
  export interface Schema$PlayerLevel {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerLevel.
     */
    kind?: string | null;
    /**
     * The level for the user.
     */
    level?: number | null;
    /**
     * The maximum experience points for this level.
     */
    maxExperiencePoints?: string | null;
    /**
     * The minimum experience points for this level.
     */
    minExperiencePoints?: string | null;
  }
  /**
   * This is a JSON template for a third party player list response.
   */
  export interface Schema$PlayerListResponse {
    /**
     * The players.
     */
    items?: Schema$Player[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerListResponse.
     */
    kind?: string | null;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for a player score.
   */
  export interface Schema$PlayerScore {
    /**
     * The formatted score for this player score.
     */
    formattedScore?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerScore.
     */
    kind?: string | null;
    /**
     * The numerical value for this player score.
     */
    score?: string | null;
    /**
     * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string | null;
    /**
     * The time span for this player score. Possible values are:   - &quot;ALL_TIME&quot; - The score is an all-time score.  - &quot;WEEKLY&quot; - The score is a weekly score.  - &quot;DAILY&quot; - The score is a daily score.
     */
    timeSpan?: string | null;
  }
  /**
   * This is a JSON template for a list of score submission statuses.
   */
  export interface Schema$PlayerScoreListResponse {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreListResponse.
     */
    kind?: string | null;
    /**
     * The score submissions statuses.
     */
    submittedScores?: Schema$PlayerScoreResponse[];
  }
  /**
   * This is a JSON template for a list of leaderboard entry resources.
   */
  export interface Schema$PlayerScoreResponse {
    /**
     * The time spans where the submitted score is better than the existing score for that time span. Possible values are:   - &quot;ALL_TIME&quot; - The score is an all-time score.  - &quot;WEEKLY&quot; - The score is a weekly score.  - &quot;DAILY&quot; - The score is a daily score.
     */
    beatenScoreTimeSpans?: string[] | null;
    /**
     * The formatted value of the submitted score.
     */
    formattedScore?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreResponse.
     */
    kind?: string | null;
    /**
     * The leaderboard ID that this score was submitted to.
     */
    leaderboardId?: string | null;
    /**
     * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string | null;
    /**
     * The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player&#39;s DAILY score, but not better than the player&#39;s scores for the WEEKLY or ALL_TIME time spans.
     */
    unbeatenScores?: Schema$PlayerScore[];
  }
  /**
   * This is a JSON template for a list of score submission requests
   */
  export interface Schema$PlayerScoreSubmissionList {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreSubmissionList.
     */
    kind?: string | null;
    /**
     * The score submissions.
     */
    scores?: Schema$ScoreSubmission[];
  }
  /**
   * This is a JSON template for profile settings
   */
  export interface Schema$ProfileSettings {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#profileSettings.
     */
    kind?: string | null;
    profileVisible?: boolean | null;
  }
  /**
   * This is a JSON template for a push token resource.
   */
  export interface Schema$PushToken {
    /**
     * The revision of the client SDK used by your application, in the same format that&#39;s used by revisions.check. Used to send backward compatible messages. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:   - IOS - Push token is for iOS
     */
    clientRevision?: string | null;
    /**
     * Unique identifier for this push token.
     */
    id?: Schema$PushTokenId;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#pushToken.
     */
    kind?: string | null;
    /**
     * The preferred language for notifications that are sent using this token.
     */
    language?: string | null;
  }
  /**
   * This is a JSON template for a push token ID resource.
   */
  export interface Schema$PushTokenId {
    /**
     * A push token ID for iOS devices.
     */
    ios?: {apns_device_token?: string; apns_environment?: string} | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#pushTokenId.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for a Quest resource.
   */
  export interface Schema$Quest {
    /**
     * The timestamp at which the user accepted the quest in milliseconds since the epoch in UTC. Only present if the player has accepted the quest.
     */
    acceptedTimestampMillis?: string | null;
    /**
     * The ID of the application this quest is part of.
     */
    applicationId?: string | null;
    /**
     * The banner image URL for the quest.
     */
    bannerUrl?: string | null;
    /**
     * The description of the quest.
     */
    description?: string | null;
    /**
     * The timestamp at which the quest ceases to be active in milliseconds since the epoch in UTC.
     */
    endTimestampMillis?: string | null;
    /**
     * The icon image URL for the quest.
     */
    iconUrl?: string | null;
    /**
     * The ID of the quest.
     */
    id?: string | null;
    /**
     * Indicates whether the banner image being returned is a default image, or is game-provided.
     */
    isDefaultBannerUrl?: boolean | null;
    /**
     * Indicates whether the icon image being returned is a default image, or is game-provided.
     */
    isDefaultIconUrl?: boolean | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#quest.
     */
    kind?: string | null;
    /**
     * The timestamp at which the quest was last updated by the user in milliseconds since the epoch in UTC. Only present if the player has accepted the quest.
     */
    lastUpdatedTimestampMillis?: string | null;
    /**
     * The quest milestones.
     */
    milestones?: Schema$QuestMilestone[];
    /**
     * The name of the quest.
     */
    name?: string | null;
    /**
     * The timestamp at which the user should be notified that the quest will end soon in milliseconds since the epoch in UTC.
     */
    notifyTimestampMillis?: string | null;
    /**
     * The timestamp at which the quest becomes active in milliseconds since the epoch in UTC.
     */
    startTimestampMillis?: string | null;
    /**
     * The state of the quest. Possible values are:   - &quot;UPCOMING&quot;: The quest is upcoming. The user can see the quest, but cannot accept it until it is open.  - &quot;OPEN&quot;: The quest is currently open and may be accepted at this time.  - &quot;ACCEPTED&quot;: The user is currently participating in this quest.  - &quot;COMPLETED&quot;: The user has completed the quest.  - &quot;FAILED&quot;: The quest was attempted but was not completed before the deadline expired.  - &quot;EXPIRED&quot;: The quest has expired and was not accepted.  - &quot;DELETED&quot;: The quest should be deleted from the local database.
     */
    state?: string | null;
  }
  /**
   * This is a JSON template for a Quest Criterion Contribution resource.
   */
  export interface Schema$QuestContribution {
    /**
     * The formatted value of the contribution as a string. Format depends on the configuration for the associated event definition in the Play Games Developer Console.
     */
    formattedValue?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#questContribution.
     */
    kind?: string | null;
    /**
     * The value of the contribution.
     */
    value?: string | null;
  }
  /**
   * This is a JSON template for a Quest Criterion resource.
   */
  export interface Schema$QuestCriterion {
    /**
     * The total number of times the associated event must be incremented for the player to complete this quest.
     */
    completionContribution?: Schema$QuestContribution;
    /**
     * The number of increments the player has made toward the completion count event increments required to complete the quest. This value will not exceed the completion contribution. There will be no currentContribution until the player has accepted the quest.
     */
    currentContribution?: Schema$QuestContribution;
    /**
     * The ID of the event the criterion corresponds to.
     */
    eventId?: string | null;
    /**
     * The value of the event associated with this quest at the time that the quest was accepted. This value may change if event increments that took place before the start of quest are uploaded after the quest starts. There will be no initialPlayerProgress until the player has accepted the quest.
     */
    initialPlayerProgress?: Schema$QuestContribution;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#questCriterion.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for a list of quest objects.
   */
  export interface Schema$QuestListResponse {
    /**
     * The quests.
     */
    items?: Schema$Quest[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#questListResponse.
     */
    kind?: string | null;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for a Quest Milestone resource.
   */
  export interface Schema$QuestMilestone {
    /**
     * The completion reward data of the milestone, represented as a Base64-encoded string. This is a developer-specified binary blob with size between 0 and 2 KB before encoding.
     */
    completionRewardData?: string | null;
    /**
     * The criteria of the milestone.
     */
    criteria?: Schema$QuestCriterion[];
    /**
     * The milestone ID.
     */
    id?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#questMilestone.
     */
    kind?: string | null;
    /**
     * The current state of the milestone. Possible values are:   - &quot;COMPLETED_NOT_CLAIMED&quot; - The milestone is complete, but has not yet been claimed.  - &quot;CLAIMED&quot; - The milestone is complete and has been claimed.  - &quot;NOT_COMPLETED&quot; - The milestone has not yet been completed.  - &quot;NOT_STARTED&quot; - The milestone is for a quest that has not yet been accepted.
     */
    state?: string | null;
  }
  /**
   * This is a JSON template for the result of checking a revision.
   */
  export interface Schema$RevisionCheckResponse {
    /**
     * The version of the API this client revision should use when calling API methods.
     */
    apiVersion?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#revisionCheckResponse.
     */
    kind?: string | null;
    /**
     * The result of the revision check. Possible values are:   - &quot;OK&quot; - The revision being used is current.  - &quot;DEPRECATED&quot; - There is currently a newer version available, but the revision being used still works.  - &quot;INVALID&quot; - The revision being used is not supported in any released version.
     */
    revisionStatus?: string | null;
  }
  /**
   * This is a JSON template for a room resource object.
   */
  export interface Schema$Room {
    /**
     * The ID of the application being played.
     */
    applicationId?: string | null;
    /**
     * Criteria for auto-matching players into this room.
     */
    autoMatchingCriteria?: Schema$RoomAutoMatchingCriteria;
    /**
     * Auto-matching status for this room. Not set if the room is not currently in the auto-matching queue.
     */
    autoMatchingStatus?: Schema$RoomAutoMatchStatus;
    /**
     * Details about the room creation.
     */
    creationDetails?: Schema$RoomModification;
    /**
     * This short description is generated by our servers and worded relative to the player requesting the room. It is intended to be displayed when the room is shown in a list (that is, an invitation to a room.)
     */
    description?: string | null;
    /**
     * The ID of the participant that invited the user to the room. Not set if the user was not invited to the room.
     */
    inviterId?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#room.
     */
    kind?: string | null;
    /**
     * Details about the last update to the room.
     */
    lastUpdateDetails?: Schema$RoomModification;
    /**
     * The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations.
     */
    participants?: Schema$RoomParticipant[];
    /**
     * Globally unique ID for a room.
     */
    roomId?: string | null;
    /**
     * The version of the room status: an increasing counter, used by the client to ignore out-of-order updates to room status.
     */
    roomStatusVersion?: number | null;
    /**
     * The status of the room. Possible values are:   - &quot;ROOM_INVITING&quot; - One or more players have been invited and not responded.  - &quot;ROOM_AUTO_MATCHING&quot; - One or more slots need to be filled by auto-matching.  - &quot;ROOM_CONNECTING&quot; - Players have joined and are connecting to each other (either before or after auto-matching).  - &quot;ROOM_ACTIVE&quot; - All players have joined and connected to each other.  - &quot;ROOM_DELETED&quot; - The room should no longer be shown on the client. Returned in sync calls when a player joins a room (as a tombstone), or for rooms where all joined participants have left.
     */
    status?: string | null;
    /**
     * The variant / mode of the application being played; can be any integer value, or left blank.
     */
    variant?: number | null;
  }
  /**
   * This is a JSON template for a room auto-match criteria object.
   */
  export interface Schema$RoomAutoMatchingCriteria {
    /**
     * A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game.
     */
    exclusiveBitmask?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchingCriteria.
     */
    kind?: string | null;
    /**
     * The maximum number of players that should be added to the room by auto-matching.
     */
    maxAutoMatchingPlayers?: number | null;
    /**
     * The minimum number of players that should be added to the room by auto-matching.
     */
    minAutoMatchingPlayers?: number | null;
  }
  /**
   * This is a JSON template for status of room automatching that is in progress.
   */
  export interface Schema$RoomAutoMatchStatus {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchStatus.
     */
    kind?: string | null;
    /**
     * An estimate for the amount of time (in seconds) that auto-matching is expected to take to complete.
     */
    waitEstimateSeconds?: number | null;
  }
  /**
   * This is a JSON template for the client address when setting up a room.
   */
  export interface Schema$RoomClientAddress {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomClientAddress.
     */
    kind?: string | null;
    /**
     * The XMPP address of the client on the Google Games XMPP network.
     */
    xmppAddress?: string | null;
  }
  /**
   * This is a JSON template for a room creation request.
   */
  export interface Schema$RoomCreateRequest {
    /**
     * Criteria for auto-matching players into this room.
     */
    autoMatchingCriteria?: Schema$RoomAutoMatchingCriteria;
    /**
     * The capabilities that this client supports for realtime communication.
     */
    capabilities?: string[] | null;
    /**
     * Client address for the player creating the room.
     */
    clientAddress?: Schema$RoomClientAddress;
    /**
     * The player IDs to invite to the room.
     */
    invitedPlayerIds?: string[] | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomCreateRequest.
     */
    kind?: string | null;
    /**
     * Network diagnostics for the client creating the room.
     */
    networkDiagnostics?: Schema$NetworkDiagnostics;
    /**
     * A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries.
     */
    requestId?: string | null;
    /**
     * The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible.
     */
    variant?: number | null;
  }
  /**
   * This is a JSON template for a join room request.
   */
  export interface Schema$RoomJoinRequest {
    /**
     * The capabilities that this client supports for realtime communication.
     */
    capabilities?: string[] | null;
    /**
     * Client address for the player joining the room.
     */
    clientAddress?: Schema$RoomClientAddress;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomJoinRequest.
     */
    kind?: string | null;
    /**
     * Network diagnostics for the client joining the room.
     */
    networkDiagnostics?: Schema$NetworkDiagnostics;
  }
  /**
   * This is a JSON template for room leave diagnostics.
   */
  export interface Schema$RoomLeaveDiagnostics {
    /**
     * Android network subtype. http://developer.android.com/reference/android/net/NetworkInfo.html#getSubtype()
     */
    androidNetworkSubtype?: number | null;
    /**
     * Android network type. http://developer.android.com/reference/android/net/NetworkInfo.html#getType()
     */
    androidNetworkType?: number | null;
    /**
     * iOS network type as defined in Reachability.h.
     */
    iosNetworkType?: number | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveDiagnostics.
     */
    kind?: string | null;
    /**
     * The MCC+MNC code for the client&#39;s network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
     */
    networkOperatorCode?: string | null;
    /**
     * The name of the carrier of the client&#39;s network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
     */
    networkOperatorName?: string | null;
    /**
     * Diagnostics about all peer sessions.
     */
    peerSession?: Schema$PeerSessionDiagnostics[];
    /**
     * Whether or not sockets were used.
     */
    socketsUsed?: boolean | null;
  }
  /**
   * This is a JSON template for a leave room request.
   */
  export interface Schema$RoomLeaveRequest {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveRequest.
     */
    kind?: string | null;
    /**
     * Diagnostics for a player leaving the room.
     */
    leaveDiagnostics?: Schema$RoomLeaveDiagnostics;
    /**
     * Reason for leaving the match. Possible values are:   - &quot;PLAYER_LEFT&quot; - The player chose to leave the room..  - &quot;GAME_LEFT&quot; - The game chose to remove the player from the room.  - &quot;REALTIME_ABANDONED&quot; - The player switched to another application and abandoned the room.  - &quot;REALTIME_PEER_CONNECTION_FAILURE&quot; - The client was unable to establish a connection to other peer(s).  - &quot;REALTIME_SERVER_CONNECTION_FAILURE&quot; - The client was unable to communicate with the server.  - &quot;REALTIME_SERVER_ERROR&quot; - The client received an error response when it tried to communicate with the server.  - &quot;REALTIME_TIMEOUT&quot; - The client timed out while waiting for a room.  - &quot;REALTIME_CLIENT_DISCONNECTING&quot; - The client disconnects without first calling Leave.  - &quot;REALTIME_SIGN_OUT&quot; - The user signed out of G+ while in the room.  - &quot;REALTIME_GAME_CRASHED&quot; - The game crashed.  - &quot;REALTIME_ROOM_SERVICE_CRASHED&quot; - RoomAndroidService crashed.  - &quot;REALTIME_DIFFERENT_CLIENT_ROOM_OPERATION&quot; - Another client is trying to enter a room.  - &quot;REALTIME_SAME_CLIENT_ROOM_OPERATION&quot; - The same client is trying to enter a new room.
     */
    reason?: string | null;
  }
  /**
   * This is a JSON template for a list of rooms.
   */
  export interface Schema$RoomList {
    /**
     * The rooms.
     */
    items?: Schema$Room[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomList.
     */
    kind?: string | null;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for room modification metadata.
   */
  export interface Schema$RoomModification {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomModification.
     */
    kind?: string | null;
    /**
     * The timestamp at which they modified the room, in milliseconds since the epoch in UTC.
     */
    modifiedTimestampMillis?: string | null;
    /**
     * The ID of the participant that modified the room.
     */
    participantId?: string | null;
  }
  /**
   * This is a JSON template for an update on the status of a peer in a room.
   */
  export interface Schema$RoomP2PStatus {
    /**
     * The amount of time in milliseconds it took to establish connections with this peer.
     */
    connectionSetupLatencyMillis?: number | null;
    /**
     * The error code in event of a failure. Possible values are:   - &quot;P2P_FAILED&quot; - The client failed to establish a P2P connection with the peer.  - &quot;PRESENCE_FAILED&quot; - The client failed to register to receive P2P connections.  - &quot;RELAY_SERVER_FAILED&quot; - The client received an error when trying to use the relay server to establish a P2P connection with the peer.
     */
    error?: string | null;
    /**
     * More detailed diagnostic message returned in event of a failure.
     */
    error_reason?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatus.
     */
    kind?: string | null;
    /**
     * The ID of the participant.
     */
    participantId?: string | null;
    /**
     * The status of the peer in the room. Possible values are:   - &quot;CONNECTION_ESTABLISHED&quot; - The client established a P2P connection with the peer.  - &quot;CONNECTION_FAILED&quot; - The client failed to establish directed presence with the peer.
     */
    status?: string | null;
    /**
     * The amount of time in milliseconds it took to send packets back and forth on the unreliable channel with this peer.
     */
    unreliableRoundtripLatencyMillis?: number | null;
  }
  /**
   * This is a JSON template for an update on the status of peers in a room.
   */
  export interface Schema$RoomP2PStatuses {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatuses.
     */
    kind?: string | null;
    /**
     * The updates for the peers.
     */
    updates?: Schema$RoomP2PStatus[];
  }
  /**
   * This is a JSON template for a participant in a room.
   */
  export interface Schema$RoomParticipant {
    /**
     * True if this participant was auto-matched with the requesting player.
     */
    autoMatched?: boolean | null;
    /**
     * Information about a player that has been anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
     */
    autoMatchedPlayer?: Schema$AnonymousPlayer;
    /**
     * The capabilities which can be used when communicating with this participant.
     */
    capabilities?: string[] | null;
    /**
     * Client address for the participant.
     */
    clientAddress?: Schema$RoomClientAddress;
    /**
     * True if this participant is in the fully connected set of peers in the room.
     */
    connected?: boolean | null;
    /**
     * An identifier for the participant in the scope of the room. Cannot be used to identify a player across rooms or in other contexts.
     */
    id?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomParticipant.
     */
    kind?: string | null;
    /**
     * The reason the participant left the room; populated if the participant status is PARTICIPANT_LEFT. Possible values are:   - &quot;PLAYER_LEFT&quot; - The player explicitly chose to leave the room.  - &quot;GAME_LEFT&quot; - The game chose to remove the player from the room.  - &quot;ABANDONED&quot; - The player switched to another application and abandoned the room. - &quot;PEER_CONNECTION_FAILURE&quot; - The client was unable to establish or maintain a connection to other peer(s) in the room. - &quot;SERVER_ERROR&quot; - The client received an error response when it tried to communicate with the server.  - &quot;TIMEOUT&quot; - The client timed out while waiting for players to join and connect.  - &quot;PRESENCE_FAILURE&quot; - The client&#39;s XMPP connection ended abruptly.
     */
    leaveReason?: string | null;
    /**
     * Information about the player. Not populated if this player was anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
     */
    player?: Schema$Player;
    /**
     * The status of the participant with respect to the room. Possible values are:   - &quot;PARTICIPANT_INVITED&quot; - The participant has been invited to join the room, but has not yet responded.  - &quot;PARTICIPANT_JOINED&quot; - The participant has joined the room (either after creating it or accepting an invitation.)  - &quot;PARTICIPANT_DECLINED&quot; - The participant declined an invitation to join the room.  - &quot;PARTICIPANT_LEFT&quot; - The participant joined the room and then left it.
     */
    status?: string | null;
  }
  /**
   * This is a JSON template for the status of a room that the player has joined.
   */
  export interface Schema$RoomStatus {
    /**
     * Auto-matching status for this room. Not set if the room is not currently in the automatching queue.
     */
    autoMatchingStatus?: Schema$RoomAutoMatchStatus;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#roomStatus.
     */
    kind?: string | null;
    /**
     * The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations.
     */
    participants?: Schema$RoomParticipant[];
    /**
     * Globally unique ID for a room.
     */
    roomId?: string | null;
    /**
     * The status of the room. Possible values are:   - &quot;ROOM_INVITING&quot; - One or more players have been invited and not responded.  - &quot;ROOM_AUTO_MATCHING&quot; - One or more slots need to be filled by auto-matching.  - &quot;ROOM_CONNECTING&quot; - Players have joined are connecting to each other (either before or after auto-matching).  - &quot;ROOM_ACTIVE&quot; - All players have joined and connected to each other.  - &quot;ROOM_DELETED&quot; - All joined players have left.
     */
    status?: string | null;
    /**
     * The version of the status for the room: an increasing counter, used by the client to ignore out-of-order updates to room status.
     */
    statusVersion?: number | null;
  }
  /**
   * This is a JSON template for a request to submit a score to leaderboards.
   */
  export interface Schema$ScoreSubmission {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#scoreSubmission.
     */
    kind?: string | null;
    /**
     * The leaderboard this score is being submitted to.
     */
    leaderboardId?: string | null;
    /**
     * The new score being submitted.
     */
    score?: string | null;
    /**
     * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string | null;
    /**
     * Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    signature?: string | null;
  }
  /**
   * This is a JSON template for an snapshot object.
   */
  export interface Schema$Snapshot {
    /**
     * The cover image of this snapshot. May be absent if there is no image.
     */
    coverImage?: Schema$SnapshotImage;
    /**
     * The description of this snapshot.
     */
    description?: string | null;
    /**
     * The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller.
     */
    driveId?: string | null;
    /**
     * The duration associated with this snapshot, in millis.
     */
    durationMillis?: string | null;
    /**
     * The ID of the snapshot.
     */
    id?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#snapshot.
     */
    kind?: string | null;
    /**
     * The timestamp (in millis since Unix epoch) of the last modification to this snapshot.
     */
    lastModifiedMillis?: string | null;
    /**
     * The progress value (64-bit integer set by developer) associated with this snapshot.
     */
    progressValue?: string | null;
    /**
     * The title of this snapshot.
     */
    title?: string | null;
    /**
     * The type of this snapshot. Possible values are:   - &quot;SAVE_GAME&quot; - A snapshot representing a save game.
     */
    type?: string | null;
    /**
     * The unique name provided when the snapshot was created.
     */
    uniqueName?: string | null;
  }
  /**
   * This is a JSON template for an image of a snapshot.
   */
  export interface Schema$SnapshotImage {
    /**
     * The height of the image.
     */
    height?: number | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotImage.
     */
    kind?: string | null;
    /**
     * The MIME type of the image.
     */
    mime_type?: string | null;
    /**
     * The URL of the image. This URL may be invalidated at any time and should not be cached.
     */
    url?: string | null;
    /**
     * The width of the image.
     */
    width?: number | null;
  }
  /**
   * This is a JSON template for a list of snapshot objects.
   */
  export interface Schema$SnapshotListResponse {
    /**
     * The snapshots.
     */
    items?: Schema$Snapshot[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotListResponse.
     */
    kind?: string | null;
    /**
     * Token corresponding to the next page of results. If there are no more results, the token is omitted.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for an turn-based auto-match criteria object.
   */
  export interface Schema$TurnBasedAutoMatchingCriteria {
    /**
     * A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game.
     */
    exclusiveBitmask?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedAutoMatchingCriteria.
     */
    kind?: string | null;
    /**
     * The maximum number of players that should be added to the match by auto-matching.
     */
    maxAutoMatchingPlayers?: number | null;
    /**
     * The minimum number of players that should be added to the match by auto-matching.
     */
    minAutoMatchingPlayers?: number | null;
  }
  /**
   * This is a JSON template for a turn-based match resource object.
   */
  export interface Schema$TurnBasedMatch {
    /**
     * The ID of the application being played.
     */
    applicationId?: string | null;
    /**
     * Criteria for auto-matching players into this match.
     */
    autoMatchingCriteria?: Schema$TurnBasedAutoMatchingCriteria;
    /**
     * Details about the match creation.
     */
    creationDetails?: Schema$TurnBasedMatchModification;
    /**
     * The data / game state for this match.
     */
    data?: Schema$TurnBasedMatchData;
    /**
     * This short description is generated by our servers based on turn state and is localized and worded relative to the player requesting the match. It is intended to be displayed when the match is shown in a list.
     */
    description?: string | null;
    /**
     * The ID of the participant that invited the user to the match. Not set if the user was not invited to the match.
     */
    inviterId?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatch.
     */
    kind?: string | null;
    /**
     * Details about the last update to the match.
     */
    lastUpdateDetails?: Schema$TurnBasedMatchModification;
    /**
     * Globally unique ID for a turn-based match.
     */
    matchId?: string | null;
    /**
     * The number of the match in a chain of rematches. Will be set to 1 for the first match and incremented by 1 for each rematch.
     */
    matchNumber?: number | null;
    /**
     * The version of this match: an increasing counter, used to avoid out-of-date updates to the match.
     */
    matchVersion?: number | null;
    /**
     * The participants involved in the match, along with their statuses. Includes participants who have left or declined invitations.
     */
    participants?: Schema$TurnBasedMatchParticipant[];
    /**
     * The ID of the participant that is taking a turn.
     */
    pendingParticipantId?: string | null;
    /**
     * The data / game state for the previous match; set for the first turn of rematches only.
     */
    previousMatchData?: Schema$TurnBasedMatchData;
    /**
     * The ID of a rematch of this match. Only set for completed matches that have been rematched.
     */
    rematchId?: string | null;
    /**
     * The results reported for this match.
     */
    results?: Schema$ParticipantResult[];
    /**
     * The status of the match. Possible values are:   - &quot;MATCH_AUTO_MATCHING&quot; - One or more slots need to be filled by auto-matching; the match cannot be established until they are filled.  - &quot;MATCH_ACTIVE&quot; - The match has started.  - &quot;MATCH_COMPLETE&quot; - The match has finished.  - &quot;MATCH_CANCELED&quot; - The match was canceled.  - &quot;MATCH_EXPIRED&quot; - The match expired due to inactivity.  - &quot;MATCH_DELETED&quot; - The match should no longer be shown on the client. Returned only for tombstones for matches when sync is called.
     */
    status?: string | null;
    /**
     * The status of the current user in the match. Derived from the match type, match status, the user&#39;s participant status, and the pending participant for the match. Possible values are:   - &quot;USER_INVITED&quot; - The user has been invited to join the match and has not responded yet.  - &quot;USER_AWAITING_TURN&quot; - The user is waiting for their turn.  - &quot;USER_TURN&quot; - The user has an action to take in the match.  - &quot;USER_MATCH_COMPLETED&quot; - The match has ended (it is completed, canceled, or expired.)
     */
    userMatchStatus?: string | null;
    /**
     * The variant / mode of the application being played; can be any integer value, or left blank.
     */
    variant?: number | null;
    /**
     * The ID of another participant in the match that can be used when describing the participants the user is playing with.
     */
    withParticipantId?: string | null;
  }
  /**
   * This is a JSON template for a turn-based match creation request.
   */
  export interface Schema$TurnBasedMatchCreateRequest {
    /**
     * Criteria for auto-matching players into this match.
     */
    autoMatchingCriteria?: Schema$TurnBasedAutoMatchingCriteria;
    /**
     * The player ids to invite to the match.
     */
    invitedPlayerIds?: string[] | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchCreateRequest.
     */
    kind?: string | null;
    /**
     * A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries.
     */
    requestId?: string | null;
    /**
     * The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible.
     */
    variant?: number | null;
  }
  /**
   * This is a JSON template for a turn-based match data object.
   */
  export interface Schema$TurnBasedMatchData {
    /**
     * The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option.
     */
    data?: string | null;
    /**
     * True if this match has data available but it wasn&#39;t returned in a list response; fetching the match individually will retrieve this data.
     */
    dataAvailable?: boolean | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchData.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for sending a turn-based match data object.
   */
  export interface Schema$TurnBasedMatchDataRequest {
    /**
     * The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option.
     */
    data?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchDataRequest.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for a list of turn-based matches.
   */
  export interface Schema$TurnBasedMatchList {
    /**
     * The matches.
     */
    items?: Schema$TurnBasedMatch[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchList.
     */
    kind?: string | null;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for turn-based match modification metadata.
   */
  export interface Schema$TurnBasedMatchModification {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchModification.
     */
    kind?: string | null;
    /**
     * The timestamp at which they modified the match, in milliseconds since the epoch in UTC.
     */
    modifiedTimestampMillis?: string | null;
    /**
     * The ID of the participant that modified the match.
     */
    participantId?: string | null;
  }
  /**
   * This is a JSON template for a participant in a turn-based match.
   */
  export interface Schema$TurnBasedMatchParticipant {
    /**
     * True if this participant was auto-matched with the requesting player.
     */
    autoMatched?: boolean | null;
    /**
     * Information about a player that has been anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
     */
    autoMatchedPlayer?: Schema$AnonymousPlayer;
    /**
     * An identifier for the participant in the scope of the match. Cannot be used to identify a player across matches or in other contexts.
     */
    id?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchParticipant.
     */
    kind?: string | null;
    /**
     * Information about the player. Not populated if this player was anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
     */
    player?: Schema$Player;
    /**
     * The status of the participant with respect to the match. Possible values are:   - &quot;PARTICIPANT_NOT_INVITED_YET&quot; - The participant is slated to be invited to the match, but the invitation has not been sent; the invite will be sent when it becomes their turn.  - &quot;PARTICIPANT_INVITED&quot; - The participant has been invited to join the match, but has not yet responded.  - &quot;PARTICIPANT_JOINED&quot; - The participant has joined the match (either after creating it or accepting an invitation.)  - &quot;PARTICIPANT_DECLINED&quot; - The participant declined an invitation to join the match.  - &quot;PARTICIPANT_LEFT&quot; - The participant joined the match and then left it.  - &quot;PARTICIPANT_FINISHED&quot; - The participant finished playing in the match.  - &quot;PARTICIPANT_UNRESPONSIVE&quot; - The participant did not take their turn in the allotted time.
     */
    status?: string | null;
  }
  /**
   * This is a JSON template for a rematch response.
   */
  export interface Schema$TurnBasedMatchRematch {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchRematch.
     */
    kind?: string | null;
    /**
     * The old match that the rematch was created from; will be updated such that the rematchId field will point at the new match.
     */
    previousMatch?: Schema$TurnBasedMatch;
    /**
     * The newly created match; a rematch of the old match with the same participants.
     */
    rematch?: Schema$TurnBasedMatch;
  }
  /**
   * This is a JSON template for a turn-based match results object.
   */
  export interface Schema$TurnBasedMatchResults {
    /**
     * The final match data.
     */
    data?: Schema$TurnBasedMatchDataRequest;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchResults.
     */
    kind?: string | null;
    /**
     * The version of the match being updated.
     */
    matchVersion?: number | null;
    /**
     * The match results for the participants in the match.
     */
    results?: Schema$ParticipantResult[];
  }
  /**
   * This is a JSON template for a list of turn-based matches returned from a sync.
   */
  export interface Schema$TurnBasedMatchSync {
    /**
     * The matches.
     */
    items?: Schema$TurnBasedMatch[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchSync.
     */
    kind?: string | null;
    /**
     * True if there were more matches available to fetch at the time the response was generated (which were not returned due to page size limits.)
     */
    moreAvailable?: boolean | null;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * This is a JSON template for the object representing a turn.
   */
  export interface Schema$TurnBasedMatchTurn {
    /**
     * The shared game state data after the turn is over.
     */
    data?: Schema$TurnBasedMatchDataRequest;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchTurn.
     */
    kind?: string | null;
    /**
     * The version of this match: an increasing counter, used to avoid out-of-date updates to the match.
     */
    matchVersion?: number | null;
    /**
     * The ID of the participant who should take their turn next. May be set to the current player&#39;s participant ID to update match state without changing the turn. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
     */
    pendingParticipantId?: string | null;
    /**
     * The match results for the participants in the match.
     */
    results?: Schema$ParticipantResult[];
  }

  export class Resource$Achievementdefinitions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.achievementDefinitions.list
     * @desc Lists all the achievement definitions for your application.
     * @alias games.achievementDefinitions.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Achievementdefinitions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AchievementDefinitionsListResponse>;
    list(
      params: Params$Resource$Achievementdefinitions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementDefinitionsListResponse>,
      callback: BodyResponseCallback<Schema$AchievementDefinitionsListResponse>
    ): void;
    list(
      params: Params$Resource$Achievementdefinitions$List,
      callback: BodyResponseCallback<Schema$AchievementDefinitionsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AchievementDefinitionsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Achievementdefinitions$List
        | BodyResponseCallback<Schema$AchievementDefinitionsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementDefinitionsListResponse>,
      callback?: BodyResponseCallback<Schema$AchievementDefinitionsListResponse>
    ): void | GaxiosPromise<Schema$AchievementDefinitionsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievementdefinitions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievementdefinitions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/achievements').replace(
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
        createAPIRequest<Schema$AchievementDefinitionsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AchievementDefinitionsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Achievementdefinitions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Achievements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.achievements.increment
     * @desc Increments the steps of the achievement with the given ID for the currently authenticated player.
     * @alias games.achievements.increment
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {string=} params.requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
     * @param {integer} params.stepsToIncrement The number of steps to increment.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    increment(
      params?: Params$Resource$Achievements$Increment,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AchievementIncrementResponse>;
    increment(
      params: Params$Resource$Achievements$Increment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementIncrementResponse>,
      callback: BodyResponseCallback<Schema$AchievementIncrementResponse>
    ): void;
    increment(
      params: Params$Resource$Achievements$Increment,
      callback: BodyResponseCallback<Schema$AchievementIncrementResponse>
    ): void;
    increment(
      callback: BodyResponseCallback<Schema$AchievementIncrementResponse>
    ): void;
    increment(
      paramsOrCallback?:
        | Params$Resource$Achievements$Increment
        | BodyResponseCallback<Schema$AchievementIncrementResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementIncrementResponse>,
      callback?: BodyResponseCallback<Schema$AchievementIncrementResponse>
    ): void | GaxiosPromise<Schema$AchievementIncrementResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Increment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Increment;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/achievements/{achievementId}/increment'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['achievementId', 'stepsToIncrement'],
        pathParams: ['achievementId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AchievementIncrementResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AchievementIncrementResponse>(
          parameters
        );
      }
    }

    /**
     * games.achievements.list
     * @desc Lists the progress for all your application's achievements for the currently authenticated player.
     * @alias games.achievements.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param {string=} params.state Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Achievements$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlayerAchievementListResponse>;
    list(
      params: Params$Resource$Achievements$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerAchievementListResponse>,
      callback: BodyResponseCallback<Schema$PlayerAchievementListResponse>
    ): void;
    list(
      params: Params$Resource$Achievements$List,
      callback: BodyResponseCallback<Schema$PlayerAchievementListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$PlayerAchievementListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Achievements$List
        | BodyResponseCallback<Schema$PlayerAchievementListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerAchievementListResponse>,
      callback?: BodyResponseCallback<Schema$PlayerAchievementListResponse>
    ): void | GaxiosPromise<Schema$PlayerAchievementListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/players/{playerId}/achievements'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['playerId'],
        pathParams: ['playerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlayerAchievementListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PlayerAchievementListResponse>(
          parameters
        );
      }
    }

    /**
     * games.achievements.reveal
     * @desc Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.
     * @alias games.achievements.reveal
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reveal(
      params?: Params$Resource$Achievements$Reveal,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AchievementRevealResponse>;
    reveal(
      params: Params$Resource$Achievements$Reveal,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementRevealResponse>,
      callback: BodyResponseCallback<Schema$AchievementRevealResponse>
    ): void;
    reveal(
      params: Params$Resource$Achievements$Reveal,
      callback: BodyResponseCallback<Schema$AchievementRevealResponse>
    ): void;
    reveal(
      callback: BodyResponseCallback<Schema$AchievementRevealResponse>
    ): void;
    reveal(
      paramsOrCallback?:
        | Params$Resource$Achievements$Reveal
        | BodyResponseCallback<Schema$AchievementRevealResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementRevealResponse>,
      callback?: BodyResponseCallback<Schema$AchievementRevealResponse>
    ): void | GaxiosPromise<Schema$AchievementRevealResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Reveal;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Reveal;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/achievements/{achievementId}/reveal'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AchievementRevealResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AchievementRevealResponse>(parameters);
      }
    }

    /**
     * games.achievements.setStepsAtLeast
     * @desc Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
     * @alias games.achievements.setStepsAtLeast
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {integer} params.steps The minimum value to set the steps to.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setStepsAtLeast(
      params?: Params$Resource$Achievements$Setstepsatleast,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AchievementSetStepsAtLeastResponse>;
    setStepsAtLeast(
      params: Params$Resource$Achievements$Setstepsatleast,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>,
      callback: BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>
    ): void;
    setStepsAtLeast(
      params: Params$Resource$Achievements$Setstepsatleast,
      callback: BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>
    ): void;
    setStepsAtLeast(
      callback: BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>
    ): void;
    setStepsAtLeast(
      paramsOrCallback?:
        | Params$Resource$Achievements$Setstepsatleast
        | BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>,
      callback?: BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>
    ): void | GaxiosPromise<Schema$AchievementSetStepsAtLeastResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Setstepsatleast;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Setstepsatleast;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/achievements/{achievementId}/setStepsAtLeast'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['achievementId', 'steps'],
        pathParams: ['achievementId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AchievementSetStepsAtLeastResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AchievementSetStepsAtLeastResponse>(
          parameters
        );
      }
    }

    /**
     * games.achievements.unlock
     * @desc Unlocks this achievement for the currently authenticated player.
     * @alias games.achievements.unlock
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {string=} params.builtinGameId Override used only by built-in games in Play Games application.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unlock(
      params?: Params$Resource$Achievements$Unlock,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AchievementUnlockResponse>;
    unlock(
      params: Params$Resource$Achievements$Unlock,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementUnlockResponse>,
      callback: BodyResponseCallback<Schema$AchievementUnlockResponse>
    ): void;
    unlock(
      params: Params$Resource$Achievements$Unlock,
      callback: BodyResponseCallback<Schema$AchievementUnlockResponse>
    ): void;
    unlock(
      callback: BodyResponseCallback<Schema$AchievementUnlockResponse>
    ): void;
    unlock(
      paramsOrCallback?:
        | Params$Resource$Achievements$Unlock
        | BodyResponseCallback<Schema$AchievementUnlockResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementUnlockResponse>,
      callback?: BodyResponseCallback<Schema$AchievementUnlockResponse>
    ): void | GaxiosPromise<Schema$AchievementUnlockResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Unlock;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Unlock;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/achievements/{achievementId}/unlock'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AchievementUnlockResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AchievementUnlockResponse>(parameters);
      }
    }

    /**
     * games.achievements.updateMultiple
     * @desc Updates multiple achievements for the currently authenticated player.
     * @alias games.achievements.updateMultiple
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.builtinGameId Override used only by built-in games in Play Games application.
     * @param {().AchievementUpdateMultipleRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateMultiple(
      params?: Params$Resource$Achievements$Updatemultiple,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AchievementUpdateMultipleResponse>;
    updateMultiple(
      params: Params$Resource$Achievements$Updatemultiple,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>,
      callback: BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>
    ): void;
    updateMultiple(
      params: Params$Resource$Achievements$Updatemultiple,
      callback: BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>
    ): void;
    updateMultiple(
      callback: BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>
    ): void;
    updateMultiple(
      paramsOrCallback?:
        | Params$Resource$Achievements$Updatemultiple
        | BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>,
      callback?: BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>
    ): void | GaxiosPromise<Schema$AchievementUpdateMultipleResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Updatemultiple;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Updatemultiple;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/achievements/updateMultiple').replace(
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
        createAPIRequest<Schema$AchievementUpdateMultipleResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AchievementUpdateMultipleResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Achievements$Increment
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the achievement used by this method.
     */
    achievementId?: string;
    /**
     * A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
     */
    requestId?: string;
    /**
     * The number of steps to increment.
     */
    stepsToIncrement?: number;
  }
  export interface Params$Resource$Achievements$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * A player ID. A value of me may be used in place of the authenticated player's ID.
     */
    playerId?: string;
    /**
     * Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
     */
    state?: string;
  }
  export interface Params$Resource$Achievements$Reveal
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the achievement used by this method.
     */
    achievementId?: string;
  }
  export interface Params$Resource$Achievements$Setstepsatleast
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the achievement used by this method.
     */
    achievementId?: string;
    /**
     * The minimum value to set the steps to.
     */
    steps?: number;
  }
  export interface Params$Resource$Achievements$Unlock
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the achievement used by this method.
     */
    achievementId?: string;
    /**
     * Override used only by built-in games in Play Games application.
     */
    builtinGameId?: string;
  }
  export interface Params$Resource$Achievements$Updatemultiple
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Override used only by built-in games in Play Games application.
     */
    builtinGameId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AchievementUpdateMultipleRequest;
  }

  export class Resource$Applications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.applications.get
     * @desc Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.
     * @alias games.applications.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string=} params.platformType Restrict application details returned to the specific platform.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Applications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Application>;
    get(
      params: Params$Resource$Applications$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Application>,
      callback: BodyResponseCallback<Schema$Application>
    ): void;
    get(
      params: Params$Resource$Applications$Get,
      callback: BodyResponseCallback<Schema$Application>
    ): void;
    get(callback: BodyResponseCallback<Schema$Application>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Applications$Get
        | BodyResponseCallback<Schema$Application>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Application>,
      callback?: BodyResponseCallback<Schema$Application>
    ): void | GaxiosPromise<Schema$Application> {
      let params = (paramsOrCallback || {}) as Params$Resource$Applications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/applications/{applicationId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Application>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Application>(parameters);
      }
    }

    /**
     * games.applications.played
     * @desc Indicate that the the currently authenticated user is playing your application.
     * @alias games.applications.played
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.builtinGameId Override used only by built-in games in Play Games application.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    played(
      params?: Params$Resource$Applications$Played,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    played(
      params: Params$Resource$Applications$Played,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    played(
      params: Params$Resource$Applications$Played,
      callback: BodyResponseCallback<void>
    ): void;
    played(callback: BodyResponseCallback<void>): void;
    played(
      paramsOrCallback?:
        | Params$Resource$Applications$Played
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Applications$Played;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$Played;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/applications/played').replace(
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * games.applications.verify
     * @desc Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
     * @alias games.applications.verify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verify(
      params?: Params$Resource$Applications$Verify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApplicationVerifyResponse>;
    verify(
      params: Params$Resource$Applications$Verify,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ApplicationVerifyResponse>,
      callback: BodyResponseCallback<Schema$ApplicationVerifyResponse>
    ): void;
    verify(
      params: Params$Resource$Applications$Verify,
      callback: BodyResponseCallback<Schema$ApplicationVerifyResponse>
    ): void;
    verify(
      callback: BodyResponseCallback<Schema$ApplicationVerifyResponse>
    ): void;
    verify(
      paramsOrCallback?:
        | Params$Resource$Applications$Verify
        | BodyResponseCallback<Schema$ApplicationVerifyResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApplicationVerifyResponse>,
      callback?: BodyResponseCallback<Schema$ApplicationVerifyResponse>
    ): void | GaxiosPromise<Schema$ApplicationVerifyResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Applications$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$Verify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/applications/{applicationId}/verify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApplicationVerifyResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ApplicationVerifyResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Applications$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * Restrict application details returned to the specific platform.
     */
    platformType?: string;
  }
  export interface Params$Resource$Applications$Played
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Override used only by built-in games in Play Games application.
     */
    builtinGameId?: string;
  }
  export interface Params$Resource$Applications$Verify
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;
  }

  export class Resource$Events {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.events.listByPlayer
     * @desc Returns a list showing the current progress on events in this application for the currently authenticated user.
     * @alias games.events.listByPlayer
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listByPlayer(
      params?: Params$Resource$Events$Listbyplayer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlayerEventListResponse>;
    listByPlayer(
      params: Params$Resource$Events$Listbyplayer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerEventListResponse>,
      callback: BodyResponseCallback<Schema$PlayerEventListResponse>
    ): void;
    listByPlayer(
      params: Params$Resource$Events$Listbyplayer,
      callback: BodyResponseCallback<Schema$PlayerEventListResponse>
    ): void;
    listByPlayer(
      callback: BodyResponseCallback<Schema$PlayerEventListResponse>
    ): void;
    listByPlayer(
      paramsOrCallback?:
        | Params$Resource$Events$Listbyplayer
        | BodyResponseCallback<Schema$PlayerEventListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerEventListResponse>,
      callback?: BodyResponseCallback<Schema$PlayerEventListResponse>
    ): void | GaxiosPromise<Schema$PlayerEventListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Events$Listbyplayer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Listbyplayer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/events').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PlayerEventListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlayerEventListResponse>(parameters);
      }
    }

    /**
     * games.events.listDefinitions
     * @desc Returns a list of the event definitions in this application.
     * @alias games.events.listDefinitions
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listDefinitions(
      params?: Params$Resource$Events$Listdefinitions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventDefinitionListResponse>;
    listDefinitions(
      params: Params$Resource$Events$Listdefinitions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventDefinitionListResponse>,
      callback: BodyResponseCallback<Schema$EventDefinitionListResponse>
    ): void;
    listDefinitions(
      params: Params$Resource$Events$Listdefinitions,
      callback: BodyResponseCallback<Schema$EventDefinitionListResponse>
    ): void;
    listDefinitions(
      callback: BodyResponseCallback<Schema$EventDefinitionListResponse>
    ): void;
    listDefinitions(
      paramsOrCallback?:
        | Params$Resource$Events$Listdefinitions
        | BodyResponseCallback<Schema$EventDefinitionListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$EventDefinitionListResponse>,
      callback?: BodyResponseCallback<Schema$EventDefinitionListResponse>
    ): void | GaxiosPromise<Schema$EventDefinitionListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Events$Listdefinitions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Listdefinitions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/eventDefinitions').replace(
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
        createAPIRequest<Schema$EventDefinitionListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$EventDefinitionListResponse>(parameters);
      }
    }

    /**
     * games.events.record
     * @desc Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
     * @alias games.events.record
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {().EventRecordRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    record(
      params?: Params$Resource$Events$Record,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventUpdateResponse>;
    record(
      params: Params$Resource$Events$Record,
      options: MethodOptions | BodyResponseCallback<Schema$EventUpdateResponse>,
      callback: BodyResponseCallback<Schema$EventUpdateResponse>
    ): void;
    record(
      params: Params$Resource$Events$Record,
      callback: BodyResponseCallback<Schema$EventUpdateResponse>
    ): void;
    record(callback: BodyResponseCallback<Schema$EventUpdateResponse>): void;
    record(
      paramsOrCallback?:
        | Params$Resource$Events$Record
        | BodyResponseCallback<Schema$EventUpdateResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$EventUpdateResponse>,
      callback?: BodyResponseCallback<Schema$EventUpdateResponse>
    ): void | GaxiosPromise<Schema$EventUpdateResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Events$Record;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Record;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/events').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventUpdateResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EventUpdateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Events$Listbyplayer
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Events$Listdefinitions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Events$Record extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventRecordRequest;
  }

  export class Resource$Leaderboards {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.leaderboards.get
     * @desc Retrieves the metadata of the leaderboard with the given ID.
     * @alias games.leaderboards.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Leaderboards$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Leaderboard>;
    get(
      params: Params$Resource$Leaderboards$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Leaderboard>,
      callback: BodyResponseCallback<Schema$Leaderboard>
    ): void;
    get(
      params: Params$Resource$Leaderboards$Get,
      callback: BodyResponseCallback<Schema$Leaderboard>
    ): void;
    get(callback: BodyResponseCallback<Schema$Leaderboard>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Leaderboards$Get
        | BodyResponseCallback<Schema$Leaderboard>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Leaderboard>,
      callback?: BodyResponseCallback<Schema$Leaderboard>
    ): void | GaxiosPromise<Schema$Leaderboard> {
      let params = (paramsOrCallback || {}) as Params$Resource$Leaderboards$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Leaderboards$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/leaderboards/{leaderboardId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Leaderboard>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Leaderboard>(parameters);
      }
    }

    /**
     * games.leaderboards.list
     * @desc Lists all the leaderboard metadata for your application.
     * @alias games.leaderboards.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Leaderboards$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LeaderboardListResponse>;
    list(
      params: Params$Resource$Leaderboards$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LeaderboardListResponse>,
      callback: BodyResponseCallback<Schema$LeaderboardListResponse>
    ): void;
    list(
      params: Params$Resource$Leaderboards$List,
      callback: BodyResponseCallback<Schema$LeaderboardListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LeaderboardListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Leaderboards$List
        | BodyResponseCallback<Schema$LeaderboardListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LeaderboardListResponse>,
      callback?: BodyResponseCallback<Schema$LeaderboardListResponse>
    ): void | GaxiosPromise<Schema$LeaderboardListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Leaderboards$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Leaderboards$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/leaderboards').replace(
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
        createAPIRequest<Schema$LeaderboardListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LeaderboardListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Leaderboards$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;
  }
  export interface Params$Resource$Leaderboards$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Metagame {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.metagame.getMetagameConfig
     * @desc Return the metagame configuration data for the calling application.
     * @alias games.metagame.getMetagameConfig
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getMetagameConfig(
      params?: Params$Resource$Metagame$Getmetagameconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MetagameConfig>;
    getMetagameConfig(
      params: Params$Resource$Metagame$Getmetagameconfig,
      options: MethodOptions | BodyResponseCallback<Schema$MetagameConfig>,
      callback: BodyResponseCallback<Schema$MetagameConfig>
    ): void;
    getMetagameConfig(
      params: Params$Resource$Metagame$Getmetagameconfig,
      callback: BodyResponseCallback<Schema$MetagameConfig>
    ): void;
    getMetagameConfig(
      callback: BodyResponseCallback<Schema$MetagameConfig>
    ): void;
    getMetagameConfig(
      paramsOrCallback?:
        | Params$Resource$Metagame$Getmetagameconfig
        | BodyResponseCallback<Schema$MetagameConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MetagameConfig>,
      callback?: BodyResponseCallback<Schema$MetagameConfig>
    ): void | GaxiosPromise<Schema$MetagameConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Metagame$Getmetagameconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Metagame$Getmetagameconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/metagameConfig').replace(
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
        createAPIRequest<Schema$MetagameConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MetagameConfig>(parameters);
      }
    }

    /**
     * games.metagame.listCategoriesByPlayer
     * @desc List play data aggregated per category for the player corresponding to playerId.
     * @alias games.metagame.listCategoriesByPlayer
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection The collection of categories for which data will be returned.
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listCategoriesByPlayer(
      params?: Params$Resource$Metagame$Listcategoriesbyplayer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CategoryListResponse>;
    listCategoriesByPlayer(
      params: Params$Resource$Metagame$Listcategoriesbyplayer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CategoryListResponse>,
      callback: BodyResponseCallback<Schema$CategoryListResponse>
    ): void;
    listCategoriesByPlayer(
      params: Params$Resource$Metagame$Listcategoriesbyplayer,
      callback: BodyResponseCallback<Schema$CategoryListResponse>
    ): void;
    listCategoriesByPlayer(
      callback: BodyResponseCallback<Schema$CategoryListResponse>
    ): void;
    listCategoriesByPlayer(
      paramsOrCallback?:
        | Params$Resource$Metagame$Listcategoriesbyplayer
        | BodyResponseCallback<Schema$CategoryListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CategoryListResponse>,
      callback?: BodyResponseCallback<Schema$CategoryListResponse>
    ): void | GaxiosPromise<Schema$CategoryListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Metagame$Listcategoriesbyplayer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Metagame$Listcategoriesbyplayer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/players/{playerId}/categories/{collection}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['playerId', 'collection'],
        pathParams: ['collection', 'playerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CategoryListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CategoryListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Metagame$Getmetagameconfig
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Metagame$Listcategoriesbyplayer
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The collection of categories for which data will be returned.
     */
    collection?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * A player ID. A value of me may be used in place of the authenticated player's ID.
     */
    playerId?: string;
  }

  export class Resource$Players {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.players.get
     * @desc Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.
     * @alias games.players.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Players$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Player>;
    get(
      params: Params$Resource$Players$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Player>,
      callback: BodyResponseCallback<Schema$Player>
    ): void;
    get(
      params: Params$Resource$Players$Get,
      callback: BodyResponseCallback<Schema$Player>
    ): void;
    get(callback: BodyResponseCallback<Schema$Player>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Players$Get
        | BodyResponseCallback<Schema$Player>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Player>,
      callback?: BodyResponseCallback<Schema$Player>
    ): void | GaxiosPromise<Schema$Player> {
      let params = (paramsOrCallback || {}) as Params$Resource$Players$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Players$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/players/{playerId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['playerId'],
        pathParams: ['playerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Player>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Player>(parameters);
      }
    }

    /**
     * games.players.list
     * @desc Get the collection of players for the currently authenticated user.
     * @alias games.players.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection Collection of players being retrieved
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Players$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlayerListResponse>;
    list(
      params: Params$Resource$Players$List,
      options: MethodOptions | BodyResponseCallback<Schema$PlayerListResponse>,
      callback: BodyResponseCallback<Schema$PlayerListResponse>
    ): void;
    list(
      params: Params$Resource$Players$List,
      callback: BodyResponseCallback<Schema$PlayerListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PlayerListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Players$List
        | BodyResponseCallback<Schema$PlayerListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerListResponse>,
      callback?: BodyResponseCallback<Schema$PlayerListResponse>
    ): void | GaxiosPromise<Schema$PlayerListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Players$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Players$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/players/me/players/{collection}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['collection'],
        pathParams: ['collection'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlayerListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlayerListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Players$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * A player ID. A value of me may be used in place of the authenticated player's ID.
     */
    playerId?: string;
  }
  export interface Params$Resource$Players$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Collection of players being retrieved
     */
    collection?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Pushtokens {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.pushtokens.remove
     * @desc Removes a push token for the current user and application. Removing a non-existent push token will report success.
     * @alias games.pushtokens.remove
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().PushTokenId} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    remove(
      params?: Params$Resource$Pushtokens$Remove,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    remove(
      params: Params$Resource$Pushtokens$Remove,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    remove(
      params: Params$Resource$Pushtokens$Remove,
      callback: BodyResponseCallback<void>
    ): void;
    remove(callback: BodyResponseCallback<void>): void;
    remove(
      paramsOrCallback?:
        | Params$Resource$Pushtokens$Remove
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pushtokens$Remove;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pushtokens$Remove;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/pushtokens/remove').replace(
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * games.pushtokens.update
     * @desc Registers a push token for the current user and application.
     * @alias games.pushtokens.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().PushToken} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Pushtokens$Update,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    update(
      params: Params$Resource$Pushtokens$Update,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    update(
      params: Params$Resource$Pushtokens$Update,
      callback: BodyResponseCallback<void>
    ): void;
    update(callback: BodyResponseCallback<void>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Pushtokens$Update
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pushtokens$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pushtokens$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/pushtokens').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Pushtokens$Remove
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PushTokenId;
  }
  export interface Params$Resource$Pushtokens$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PushToken;
  }

  export class Resource$Questmilestones {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.questMilestones.claim
     * @desc Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user.
     * @alias games.questMilestones.claim
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.milestoneId The ID of the milestone.
     * @param {string} params.questId The ID of the quest.
     * @param {string} params.requestId A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    claim(
      params?: Params$Resource$Questmilestones$Claim,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    claim(
      params: Params$Resource$Questmilestones$Claim,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    claim(
      params: Params$Resource$Questmilestones$Claim,
      callback: BodyResponseCallback<void>
    ): void;
    claim(callback: BodyResponseCallback<void>): void;
    claim(
      paramsOrCallback?:
        | Params$Resource$Questmilestones$Claim
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Questmilestones$Claim;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Questmilestones$Claim;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/games/v1/quests/{questId}/milestones/{milestoneId}/claim'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['questId', 'milestoneId', 'requestId'],
        pathParams: ['milestoneId', 'questId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Questmilestones$Claim
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the milestone.
     */
    milestoneId?: string;
    /**
     * The ID of the quest.
     */
    questId?: string;
    /**
     * A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly.
     */
    requestId?: string;
  }

  export class Resource$Quests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.quests.accept
     * @desc Indicates that the currently authorized user will participate in the quest.
     * @alias games.quests.accept
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.questId The ID of the quest.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    accept(
      params?: Params$Resource$Quests$Accept,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Quest>;
    accept(
      params: Params$Resource$Quests$Accept,
      options: MethodOptions | BodyResponseCallback<Schema$Quest>,
      callback: BodyResponseCallback<Schema$Quest>
    ): void;
    accept(
      params: Params$Resource$Quests$Accept,
      callback: BodyResponseCallback<Schema$Quest>
    ): void;
    accept(callback: BodyResponseCallback<Schema$Quest>): void;
    accept(
      paramsOrCallback?:
        | Params$Resource$Quests$Accept
        | BodyResponseCallback<Schema$Quest>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Quest>,
      callback?: BodyResponseCallback<Schema$Quest>
    ): void | GaxiosPromise<Schema$Quest> {
      let params = (paramsOrCallback || {}) as Params$Resource$Quests$Accept;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Quests$Accept;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/quests/{questId}/accept').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['questId'],
        pathParams: ['questId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Quest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Quest>(parameters);
      }
    }

    /**
     * games.quests.list
     * @desc Get a list of quests for your application and the currently authenticated player.
     * @alias games.quests.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Quests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QuestListResponse>;
    list(
      params: Params$Resource$Quests$List,
      options: MethodOptions | BodyResponseCallback<Schema$QuestListResponse>,
      callback: BodyResponseCallback<Schema$QuestListResponse>
    ): void;
    list(
      params: Params$Resource$Quests$List,
      callback: BodyResponseCallback<Schema$QuestListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$QuestListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Quests$List
        | BodyResponseCallback<Schema$QuestListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$QuestListResponse>,
      callback?: BodyResponseCallback<Schema$QuestListResponse>
    ): void | GaxiosPromise<Schema$QuestListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Quests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Quests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/players/{playerId}/quests').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['playerId'],
        pathParams: ['playerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$QuestListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$QuestListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Quests$Accept extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the quest.
     */
    questId?: string;
  }
  export interface Params$Resource$Quests$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * A player ID. A value of me may be used in place of the authenticated player's ID.
     */
    playerId?: string;
  }

  export class Resource$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.revisions.check
     * @desc Checks whether the games client is out of date.
     * @alias games.revisions.check
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.clientRevision The revision of the client SDK used by your application. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:   - "ANDROID" - Client is running the Android SDK.  - "IOS" - Client is running the iOS SDK.  - "WEB_APP" - Client is running as a Web App.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    check(
      params?: Params$Resource$Revisions$Check,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RevisionCheckResponse>;
    check(
      params: Params$Resource$Revisions$Check,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RevisionCheckResponse>,
      callback: BodyResponseCallback<Schema$RevisionCheckResponse>
    ): void;
    check(
      params: Params$Resource$Revisions$Check,
      callback: BodyResponseCallback<Schema$RevisionCheckResponse>
    ): void;
    check(callback: BodyResponseCallback<Schema$RevisionCheckResponse>): void;
    check(
      paramsOrCallback?:
        | Params$Resource$Revisions$Check
        | BodyResponseCallback<Schema$RevisionCheckResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RevisionCheckResponse>,
      callback?: BodyResponseCallback<Schema$RevisionCheckResponse>
    ): void | GaxiosPromise<Schema$RevisionCheckResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Check;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Check;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/revisions/check').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['clientRevision'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RevisionCheckResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RevisionCheckResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Revisions$Check extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The revision of the client SDK used by your application. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:   - "ANDROID" - Client is running the Android SDK.  - "IOS" - Client is running the iOS SDK.  - "WEB_APP" - Client is running as a Web App.
     */
    clientRevision?: string;
  }

  export class Resource$Rooms {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.rooms.create
     * @desc Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     * @alias games.rooms.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {().RoomCreateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Rooms$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Room>;
    create(
      params: Params$Resource$Rooms$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    create(
      params: Params$Resource$Rooms$Create,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    create(callback: BodyResponseCallback<Schema$Room>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Rooms$Create
        | BodyResponseCallback<Schema$Room>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback?: BodyResponseCallback<Schema$Room>
    ): void | GaxiosPromise<Schema$Room> {
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/rooms/create').replace(
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
        createAPIRequest<Schema$Room>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Room>(parameters);
      }
    }

    /**
     * games.rooms.decline
     * @desc Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     * @alias games.rooms.decline
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.roomId The ID of the room.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    decline(
      params?: Params$Resource$Rooms$Decline,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Room>;
    decline(
      params: Params$Resource$Rooms$Decline,
      options: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    decline(
      params: Params$Resource$Rooms$Decline,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    decline(callback: BodyResponseCallback<Schema$Room>): void;
    decline(
      paramsOrCallback?:
        | Params$Resource$Rooms$Decline
        | BodyResponseCallback<Schema$Room>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback?: BodyResponseCallback<Schema$Room>
    ): void | GaxiosPromise<Schema$Room> {
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Decline;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Decline;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/rooms/{roomId}/decline').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Room>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Room>(parameters);
      }
    }

    /**
     * games.rooms.dismiss
     * @desc Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     * @alias games.rooms.dismiss
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.roomId The ID of the room.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dismiss(
      params?: Params$Resource$Rooms$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    dismiss(
      params: Params$Resource$Rooms$Dismiss,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    dismiss(
      params: Params$Resource$Rooms$Dismiss,
      callback: BodyResponseCallback<void>
    ): void;
    dismiss(callback: BodyResponseCallback<void>): void;
    dismiss(
      paramsOrCallback?:
        | Params$Resource$Rooms$Dismiss
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Dismiss;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Dismiss;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/rooms/{roomId}/dismiss').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * games.rooms.get
     * @desc Get the data for a room.
     * @alias games.rooms.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.roomId The ID of the room.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Rooms$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Room>;
    get(
      params: Params$Resource$Rooms$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    get(
      params: Params$Resource$Rooms$Get,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    get(callback: BodyResponseCallback<Schema$Room>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Rooms$Get
        | BodyResponseCallback<Schema$Room>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback?: BodyResponseCallback<Schema$Room>
    ): void | GaxiosPromise<Schema$Room> {
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/rooms/{roomId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Room>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Room>(parameters);
      }
    }

    /**
     * games.rooms.join
     * @desc Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     * @alias games.rooms.join
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.roomId The ID of the room.
     * @param {().RoomJoinRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    join(
      params?: Params$Resource$Rooms$Join,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Room>;
    join(
      params: Params$Resource$Rooms$Join,
      options: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    join(
      params: Params$Resource$Rooms$Join,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    join(callback: BodyResponseCallback<Schema$Room>): void;
    join(
      paramsOrCallback?:
        | Params$Resource$Rooms$Join
        | BodyResponseCallback<Schema$Room>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback?: BodyResponseCallback<Schema$Room>
    ): void | GaxiosPromise<Schema$Room> {
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Join;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Join;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/rooms/{roomId}/join').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Room>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Room>(parameters);
      }
    }

    /**
     * games.rooms.leave
     * @desc Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     * @alias games.rooms.leave
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.roomId The ID of the room.
     * @param {().RoomLeaveRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    leave(
      params?: Params$Resource$Rooms$Leave,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Room>;
    leave(
      params: Params$Resource$Rooms$Leave,
      options: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    leave(
      params: Params$Resource$Rooms$Leave,
      callback: BodyResponseCallback<Schema$Room>
    ): void;
    leave(callback: BodyResponseCallback<Schema$Room>): void;
    leave(
      paramsOrCallback?:
        | Params$Resource$Rooms$Leave
        | BodyResponseCallback<Schema$Room>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Room>,
      callback?: BodyResponseCallback<Schema$Room>
    ): void | GaxiosPromise<Schema$Room> {
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Leave;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Leave;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/rooms/{roomId}/leave').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Room>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Room>(parameters);
      }
    }

    /**
     * games.rooms.list
     * @desc Returns invitations to join rooms.
     * @alias games.rooms.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Rooms$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RoomList>;
    list(
      params: Params$Resource$Rooms$List,
      options: MethodOptions | BodyResponseCallback<Schema$RoomList>,
      callback: BodyResponseCallback<Schema$RoomList>
    ): void;
    list(
      params: Params$Resource$Rooms$List,
      callback: BodyResponseCallback<Schema$RoomList>
    ): void;
    list(callback: BodyResponseCallback<Schema$RoomList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Rooms$List
        | BodyResponseCallback<Schema$RoomList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$RoomList>,
      callback?: BodyResponseCallback<Schema$RoomList>
    ): void | GaxiosPromise<Schema$RoomList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/rooms').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RoomList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RoomList>(parameters);
      }
    }

    /**
     * games.rooms.reportStatus
     * @desc Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     * @alias games.rooms.reportStatus
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.roomId The ID of the room.
     * @param {().RoomP2PStatuses} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reportStatus(
      params?: Params$Resource$Rooms$Reportstatus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RoomStatus>;
    reportStatus(
      params: Params$Resource$Rooms$Reportstatus,
      options: MethodOptions | BodyResponseCallback<Schema$RoomStatus>,
      callback: BodyResponseCallback<Schema$RoomStatus>
    ): void;
    reportStatus(
      params: Params$Resource$Rooms$Reportstatus,
      callback: BodyResponseCallback<Schema$RoomStatus>
    ): void;
    reportStatus(callback: BodyResponseCallback<Schema$RoomStatus>): void;
    reportStatus(
      paramsOrCallback?:
        | Params$Resource$Rooms$Reportstatus
        | BodyResponseCallback<Schema$RoomStatus>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RoomStatus>,
      callback?: BodyResponseCallback<Schema$RoomStatus>
    ): void | GaxiosPromise<Schema$RoomStatus> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Rooms$Reportstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Reportstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/rooms/{roomId}/reportstatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RoomStatus>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RoomStatus>(parameters);
      }
    }
  }

  export interface Params$Resource$Rooms$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RoomCreateRequest;
  }
  export interface Params$Resource$Rooms$Decline extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the room.
     */
    roomId?: string;
  }
  export interface Params$Resource$Rooms$Dismiss extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the room.
     */
    roomId?: string;
  }
  export interface Params$Resource$Rooms$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the room.
     */
    roomId?: string;
  }
  export interface Params$Resource$Rooms$Join extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the room.
     */
    roomId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RoomJoinRequest;
  }
  export interface Params$Resource$Rooms$Leave extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the room.
     */
    roomId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RoomLeaveRequest;
  }
  export interface Params$Resource$Rooms$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Rooms$Reportstatus
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the room.
     */
    roomId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RoomP2PStatuses;
  }

  export class Resource$Scores {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.scores.get
     * @desc Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span. NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
     * @alias games.scores.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.includeRankType The types of ranks to return. If the parameter is omitted, no ranks will be returned.
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
     * @param {integer=} params.maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param {string} params.timeSpan The time span for the scores and ranks you're requesting.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Scores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlayerLeaderboardScoreListResponse>;
    get(
      params: Params$Resource$Scores$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>,
      callback: BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>
    ): void;
    get(
      params: Params$Resource$Scores$Get,
      callback: BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Scores$Get
        | BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>,
      callback?: BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>
    ): void | GaxiosPromise<Schema$PlayerLeaderboardScoreListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Scores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['playerId', 'leaderboardId', 'timeSpan'],
        pathParams: ['leaderboardId', 'playerId', 'timeSpan'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlayerLeaderboardScoreListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PlayerLeaderboardScoreListResponse>(
          parameters
        );
      }
    }

    /**
     * games.scores.list
     * @desc Lists the scores in a leaderboard, starting from the top.
     * @alias games.scores.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection The collection of scores you're requesting.
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {integer=} params.maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string} params.timeSpan The time span for the scores and ranks you're requesting.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Scores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LeaderboardScores>;
    list(
      params: Params$Resource$Scores$List,
      options: MethodOptions | BodyResponseCallback<Schema$LeaderboardScores>,
      callback: BodyResponseCallback<Schema$LeaderboardScores>
    ): void;
    list(
      params: Params$Resource$Scores$List,
      callback: BodyResponseCallback<Schema$LeaderboardScores>
    ): void;
    list(callback: BodyResponseCallback<Schema$LeaderboardScores>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Scores$List
        | BodyResponseCallback<Schema$LeaderboardScores>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LeaderboardScores>,
      callback?: BodyResponseCallback<Schema$LeaderboardScores>
    ): void | GaxiosPromise<Schema$LeaderboardScores> {
      let params = (paramsOrCallback || {}) as Params$Resource$Scores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/games/v1/leaderboards/{leaderboardId}/scores/{collection}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['leaderboardId', 'collection', 'timeSpan'],
        pathParams: ['collection', 'leaderboardId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LeaderboardScores>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LeaderboardScores>(parameters);
      }
    }

    /**
     * games.scores.listWindow
     * @desc Lists the scores in a leaderboard around (and including) a player's score.
     * @alias games.scores.listWindow
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection The collection of scores you're requesting.
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {integer=} params.maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {integer=} params.resultsAbove The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
     * @param {boolean=} params.returnTopIfAbsent True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
     * @param {string} params.timeSpan The time span for the scores and ranks you're requesting.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listWindow(
      params?: Params$Resource$Scores$Listwindow,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LeaderboardScores>;
    listWindow(
      params: Params$Resource$Scores$Listwindow,
      options: MethodOptions | BodyResponseCallback<Schema$LeaderboardScores>,
      callback: BodyResponseCallback<Schema$LeaderboardScores>
    ): void;
    listWindow(
      params: Params$Resource$Scores$Listwindow,
      callback: BodyResponseCallback<Schema$LeaderboardScores>
    ): void;
    listWindow(callback: BodyResponseCallback<Schema$LeaderboardScores>): void;
    listWindow(
      paramsOrCallback?:
        | Params$Resource$Scores$Listwindow
        | BodyResponseCallback<Schema$LeaderboardScores>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LeaderboardScores>,
      callback?: BodyResponseCallback<Schema$LeaderboardScores>
    ): void | GaxiosPromise<Schema$LeaderboardScores> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Scores$Listwindow;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Listwindow;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/games/v1/leaderboards/{leaderboardId}/window/{collection}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['leaderboardId', 'collection', 'timeSpan'],
        pathParams: ['collection', 'leaderboardId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LeaderboardScores>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LeaderboardScores>(parameters);
      }
    }

    /**
     * games.scores.submit
     * @desc Submits a score to the specified leaderboard.
     * @alias games.scores.submit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {string} params.score The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
     * @param {string=} params.scoreTag Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    submit(
      params?: Params$Resource$Scores$Submit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlayerScoreResponse>;
    submit(
      params: Params$Resource$Scores$Submit,
      options: MethodOptions | BodyResponseCallback<Schema$PlayerScoreResponse>,
      callback: BodyResponseCallback<Schema$PlayerScoreResponse>
    ): void;
    submit(
      params: Params$Resource$Scores$Submit,
      callback: BodyResponseCallback<Schema$PlayerScoreResponse>
    ): void;
    submit(callback: BodyResponseCallback<Schema$PlayerScoreResponse>): void;
    submit(
      paramsOrCallback?:
        | Params$Resource$Scores$Submit
        | BodyResponseCallback<Schema$PlayerScoreResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerScoreResponse>,
      callback?: BodyResponseCallback<Schema$PlayerScoreResponse>
    ): void | GaxiosPromise<Schema$PlayerScoreResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Scores$Submit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Submit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/leaderboards/{leaderboardId}/scores'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['leaderboardId', 'score'],
        pathParams: ['leaderboardId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlayerScoreResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlayerScoreResponse>(parameters);
      }
    }

    /**
     * games.scores.submitMultiple
     * @desc Submits multiple scores to leaderboards.
     * @alias games.scores.submitMultiple
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {().PlayerScoreSubmissionList} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    submitMultiple(
      params?: Params$Resource$Scores$Submitmultiple,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlayerScoreListResponse>;
    submitMultiple(
      params: Params$Resource$Scores$Submitmultiple,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerScoreListResponse>,
      callback: BodyResponseCallback<Schema$PlayerScoreListResponse>
    ): void;
    submitMultiple(
      params: Params$Resource$Scores$Submitmultiple,
      callback: BodyResponseCallback<Schema$PlayerScoreListResponse>
    ): void;
    submitMultiple(
      callback: BodyResponseCallback<Schema$PlayerScoreListResponse>
    ): void;
    submitMultiple(
      paramsOrCallback?:
        | Params$Resource$Scores$Submitmultiple
        | BodyResponseCallback<Schema$PlayerScoreListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerScoreListResponse>,
      callback?: BodyResponseCallback<Schema$PlayerScoreListResponse>
    ): void | GaxiosPromise<Schema$PlayerScoreListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Scores$Submitmultiple;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Submitmultiple;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/leaderboards/scores').replace(
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
        createAPIRequest<Schema$PlayerScoreListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlayerScoreListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Scores$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The types of ranks to return. If the parameter is omitted, no ranks will be returned.
     */
    includeRankType?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
     */
    leaderboardId?: string;
    /**
     * The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * A player ID. A value of me may be used in place of the authenticated player's ID.
     */
    playerId?: string;
    /**
     * The time span for the scores and ranks you're requesting.
     */
    timeSpan?: string;
  }
  export interface Params$Resource$Scores$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The collection of scores you're requesting.
     */
    collection?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;
    /**
     * The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * The time span for the scores and ranks you're requesting.
     */
    timeSpan?: string;
  }
  export interface Params$Resource$Scores$Listwindow
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The collection of scores you're requesting.
     */
    collection?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;
    /**
     * The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
     */
    resultsAbove?: number;
    /**
     * True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
     */
    returnTopIfAbsent?: boolean;
    /**
     * The time span for the scores and ranks you're requesting.
     */
    timeSpan?: string;
  }
  export interface Params$Resource$Scores$Submit extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;
    /**
     * The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
     */
    score?: string;
    /**
     * Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string;
  }
  export interface Params$Resource$Scores$Submitmultiple
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlayerScoreSubmissionList;
  }

  export class Resource$Snapshots {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.snapshots.get
     * @desc Retrieves the metadata for a given snapshot ID.
     * @alias games.snapshots.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.snapshotId The ID of the snapshot.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Snapshots$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Snapshot>;
    get(
      params: Params$Resource$Snapshots$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Snapshot>,
      callback: BodyResponseCallback<Schema$Snapshot>
    ): void;
    get(
      params: Params$Resource$Snapshots$Get,
      callback: BodyResponseCallback<Schema$Snapshot>
    ): void;
    get(callback: BodyResponseCallback<Schema$Snapshot>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Snapshots$Get
        | BodyResponseCallback<Schema$Snapshot>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>
    ): void | GaxiosPromise<Schema$Snapshot> {
      let params = (paramsOrCallback || {}) as Params$Resource$Snapshots$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Snapshots$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/snapshots/{snapshotId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['snapshotId'],
        pathParams: ['snapshotId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Snapshot>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Snapshot>(parameters);
      }
    }

    /**
     * games.snapshots.list
     * @desc Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
     * @alias games.snapshots.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxResults The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Snapshots$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SnapshotListResponse>;
    list(
      params: Params$Resource$Snapshots$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SnapshotListResponse>,
      callback: BodyResponseCallback<Schema$SnapshotListResponse>
    ): void;
    list(
      params: Params$Resource$Snapshots$List,
      callback: BodyResponseCallback<Schema$SnapshotListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SnapshotListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Snapshots$List
        | BodyResponseCallback<Schema$SnapshotListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SnapshotListResponse>,
      callback?: BodyResponseCallback<Schema$SnapshotListResponse>
    ): void | GaxiosPromise<Schema$SnapshotListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Snapshots$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Snapshots$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/players/{playerId}/snapshots').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['playerId'],
        pathParams: ['playerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SnapshotListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SnapshotListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Snapshots$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the snapshot.
     */
    snapshotId?: string;
  }
  export interface Params$Resource$Snapshots$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * A player ID. A value of me may be used in place of the authenticated player's ID.
     */
    playerId?: string;
  }

  export class Resource$Turnbasedmatches {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * games.turnBasedMatches.cancel
     * @desc Cancel a turn-based match.
     * @alias games.turnBasedMatches.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matchId The ID of the match.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Turnbasedmatches$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    cancel(
      params: Params$Resource$Turnbasedmatches$Cancel,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    cancel(
      params: Params$Resource$Turnbasedmatches$Cancel,
      callback: BodyResponseCallback<void>
    ): void;
    cancel(callback: BodyResponseCallback<void>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Cancel
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.create
     * @desc Create a turn-based match.
     * @alias games.turnBasedMatches.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {().TurnBasedMatchCreateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Turnbasedmatches$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatch>;
    create(
      params: Params$Resource$Turnbasedmatches$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    create(
      params: Params$Resource$Turnbasedmatches$Create,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    create(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Create
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void | GaxiosPromise<Schema$TurnBasedMatch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/turnbasedmatches/create').replace(
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
        createAPIRequest<Schema$TurnBasedMatch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatch>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.decline
     * @desc Decline an invitation to play a turn-based match.
     * @alias games.turnBasedMatches.decline
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.matchId The ID of the match.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    decline(
      params?: Params$Resource$Turnbasedmatches$Decline,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatch>;
    decline(
      params: Params$Resource$Turnbasedmatches$Decline,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    decline(
      params: Params$Resource$Turnbasedmatches$Decline,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    decline(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    decline(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Decline
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void | GaxiosPromise<Schema$TurnBasedMatch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Decline;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Decline;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/decline'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TurnBasedMatch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatch>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.dismiss
     * @desc Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.
     * @alias games.turnBasedMatches.dismiss
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.matchId The ID of the match.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dismiss(
      params?: Params$Resource$Turnbasedmatches$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    dismiss(
      params: Params$Resource$Turnbasedmatches$Dismiss,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    dismiss(
      params: Params$Resource$Turnbasedmatches$Dismiss,
      callback: BodyResponseCallback<void>
    ): void;
    dismiss(callback: BodyResponseCallback<void>): void;
    dismiss(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Dismiss
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Dismiss;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Dismiss;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/dismiss'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.finish
     * @desc Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.
     * @alias games.turnBasedMatches.finish
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.matchId The ID of the match.
     * @param {().TurnBasedMatchResults} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    finish(
      params?: Params$Resource$Turnbasedmatches$Finish,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatch>;
    finish(
      params: Params$Resource$Turnbasedmatches$Finish,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    finish(
      params: Params$Resource$Turnbasedmatches$Finish,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    finish(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    finish(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Finish
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void | GaxiosPromise<Schema$TurnBasedMatch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Finish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Finish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/finish'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TurnBasedMatch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatch>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.get
     * @desc Get the data for a turn-based match.
     * @alias games.turnBasedMatches.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeMatchData Get match data along with metadata.
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.matchId The ID of the match.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Turnbasedmatches$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatch>;
    get(
      params: Params$Resource$Turnbasedmatches$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    get(
      params: Params$Resource$Turnbasedmatches$Get,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    get(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Get
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void | GaxiosPromise<Schema$TurnBasedMatch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/turnbasedmatches/{matchId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TurnBasedMatch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatch>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.join
     * @desc Join a turn-based match.
     * @alias games.turnBasedMatches.join
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.matchId The ID of the match.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    join(
      params?: Params$Resource$Turnbasedmatches$Join,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatch>;
    join(
      params: Params$Resource$Turnbasedmatches$Join,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    join(
      params: Params$Resource$Turnbasedmatches$Join,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    join(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    join(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Join
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void | GaxiosPromise<Schema$TurnBasedMatch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Join;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Join;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/join'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TurnBasedMatch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatch>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.leave
     * @desc Leave a turn-based match when it is not the current player's turn, without canceling the match.
     * @alias games.turnBasedMatches.leave
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.matchId The ID of the match.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    leave(
      params?: Params$Resource$Turnbasedmatches$Leave,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatch>;
    leave(
      params: Params$Resource$Turnbasedmatches$Leave,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    leave(
      params: Params$Resource$Turnbasedmatches$Leave,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    leave(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    leave(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Leave
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void | GaxiosPromise<Schema$TurnBasedMatch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Leave;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Leave;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/leave'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TurnBasedMatch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatch>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.leaveTurn
     * @desc Leave a turn-based match during the current player's turn, without canceling the match.
     * @alias games.turnBasedMatches.leaveTurn
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.matchId The ID of the match.
     * @param {integer} params.matchVersion The version of the match being updated.
     * @param {string=} params.pendingParticipantId The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    leaveTurn(
      params?: Params$Resource$Turnbasedmatches$Leaveturn,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatch>;
    leaveTurn(
      params: Params$Resource$Turnbasedmatches$Leaveturn,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    leaveTurn(
      params: Params$Resource$Turnbasedmatches$Leaveturn,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    leaveTurn(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    leaveTurn(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Leaveturn
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void | GaxiosPromise<Schema$TurnBasedMatch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Leaveturn;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Leaveturn;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/leaveTurn'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matchId', 'matchVersion'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TurnBasedMatch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatch>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.list
     * @desc Returns turn-based matches the player is or was involved in.
     * @alias games.turnBasedMatches.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.includeMatchData True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxCompletedMatches The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
     * @param {integer=} params.maxResults The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Turnbasedmatches$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatchList>;
    list(
      params: Params$Resource$Turnbasedmatches$List,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatchList>,
      callback: BodyResponseCallback<Schema$TurnBasedMatchList>
    ): void;
    list(
      params: Params$Resource$Turnbasedmatches$List,
      callback: BodyResponseCallback<Schema$TurnBasedMatchList>
    ): void;
    list(callback: BodyResponseCallback<Schema$TurnBasedMatchList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$List
        | BodyResponseCallback<Schema$TurnBasedMatchList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatchList>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatchList>
    ): void | GaxiosPromise<Schema$TurnBasedMatchList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/turnbasedmatches').replace(
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
        createAPIRequest<Schema$TurnBasedMatchList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatchList>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.rematch
     * @desc Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.
     * @alias games.turnBasedMatches.rematch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.matchId The ID of the match.
     * @param {string=} params.requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rematch(
      params?: Params$Resource$Turnbasedmatches$Rematch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatchRematch>;
    rematch(
      params: Params$Resource$Turnbasedmatches$Rematch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatchRematch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatchRematch>
    ): void;
    rematch(
      params: Params$Resource$Turnbasedmatches$Rematch,
      callback: BodyResponseCallback<Schema$TurnBasedMatchRematch>
    ): void;
    rematch(callback: BodyResponseCallback<Schema$TurnBasedMatchRematch>): void;
    rematch(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Rematch
        | BodyResponseCallback<Schema$TurnBasedMatchRematch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatchRematch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatchRematch>
    ): void | GaxiosPromise<Schema$TurnBasedMatchRematch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Rematch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Rematch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/rematch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TurnBasedMatchRematch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatchRematch>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.sync
     * @desc Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.
     * @alias games.turnBasedMatches.sync
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.includeMatchData True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {integer=} params.maxCompletedMatches The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
     * @param {integer=} params.maxResults The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sync(
      params?: Params$Resource$Turnbasedmatches$Sync,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatchSync>;
    sync(
      params: Params$Resource$Turnbasedmatches$Sync,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatchSync>,
      callback: BodyResponseCallback<Schema$TurnBasedMatchSync>
    ): void;
    sync(
      params: Params$Resource$Turnbasedmatches$Sync,
      callback: BodyResponseCallback<Schema$TurnBasedMatchSync>
    ): void;
    sync(callback: BodyResponseCallback<Schema$TurnBasedMatchSync>): void;
    sync(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Sync
        | BodyResponseCallback<Schema$TurnBasedMatchSync>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatchSync>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatchSync>
    ): void | GaxiosPromise<Schema$TurnBasedMatchSync> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Sync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Sync;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/games/v1/turnbasedmatches/sync').replace(
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
        createAPIRequest<Schema$TurnBasedMatchSync>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatchSync>(parameters);
      }
    }

    /**
     * games.turnBasedMatches.takeTurn
     * @desc Commit the results of a player turn.
     * @alias games.turnBasedMatches.takeTurn
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language The preferred language to use for strings returned by this method.
     * @param {string} params.matchId The ID of the match.
     * @param {().TurnBasedMatchTurn} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    takeTurn(
      params?: Params$Resource$Turnbasedmatches$Taketurn,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TurnBasedMatch>;
    takeTurn(
      params: Params$Resource$Turnbasedmatches$Taketurn,
      options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    takeTurn(
      params: Params$Resource$Turnbasedmatches$Taketurn,
      callback: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void;
    takeTurn(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    takeTurn(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Taketurn
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TurnBasedMatch>,
      callback?: BodyResponseCallback<Schema$TurnBasedMatch>
    ): void | GaxiosPromise<Schema$TurnBasedMatch> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Taketurn;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Taketurn;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/games/v1/turnbasedmatches/{matchId}/turn'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TurnBasedMatch>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TurnBasedMatch>(parameters);
      }
    }
  }

  export interface Params$Resource$Turnbasedmatches$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the match.
     */
    matchId?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TurnBasedMatchCreateRequest;
  }
  export interface Params$Resource$Turnbasedmatches$Decline
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the match.
     */
    matchId?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Dismiss
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the match.
     */
    matchId?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Finish
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the match.
     */
    matchId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TurnBasedMatchResults;
  }
  export interface Params$Resource$Turnbasedmatches$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Get match data along with metadata.
     */
    includeMatchData?: boolean;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the match.
     */
    matchId?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Join
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the match.
     */
    matchId?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Leave
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the match.
     */
    matchId?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Leaveturn
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the match.
     */
    matchId?: string;
    /**
     * The version of the match being updated.
     */
    matchVersion?: number;
    /**
     * The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
     */
    pendingParticipantId?: string;
  }
  export interface Params$Resource$Turnbasedmatches$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
     */
    includeMatchData?: boolean;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
     */
    maxCompletedMatches?: number;
    /**
     * The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Rematch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the match.
     */
    matchId?: string;
    /**
     * A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
     */
    requestId?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Sync
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
     */
    includeMatchData?: boolean;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
     */
    maxCompletedMatches?: number;
    /**
     * The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Turnbasedmatches$Taketurn
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the match.
     */
    matchId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TurnBasedMatchTurn;
  }
}
