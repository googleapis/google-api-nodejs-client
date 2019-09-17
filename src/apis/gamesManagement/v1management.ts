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

export namespace gamesManagement_v1management {
  export interface Options extends GlobalOptions {
    version: 'v1management';
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
   * Google Play Game Services Management API
   *
   * The Management API for Google Play Game Services.
   *
   * @example
   * const {google} = require('googleapis');
   * const gamesManagement = google.gamesManagement('v1management');
   *
   * @namespace gamesManagement
   * @type {Function}
   * @version v1management
   * @variation v1management
   * @param {object=} options Options for Gamesmanagement
   */
  export class Gamesmanagement {
    context: APIRequestContext;
    achievements: Resource$Achievements;
    applications: Resource$Applications;
    events: Resource$Events;
    players: Resource$Players;
    quests: Resource$Quests;
    rooms: Resource$Rooms;
    scores: Resource$Scores;
    turnBasedMatches: Resource$Turnbasedmatches;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.achievements = new Resource$Achievements(this.context);
      this.applications = new Resource$Applications(this.context);
      this.events = new Resource$Events(this.context);
      this.players = new Resource$Players(this.context);
      this.quests = new Resource$Quests(this.context);
      this.rooms = new Resource$Rooms(this.context);
      this.scores = new Resource$Scores(this.context);
      this.turnBasedMatches = new Resource$Turnbasedmatches(this.context);
    }
  }

  /**
   * This is a JSON template for achievement reset all response.
   */
  export interface Schema$AchievementResetAllResponse {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetAllResponse.
     */
    kind?: string | null;
    /**
     * The achievement reset results.
     */
    results?: Schema$AchievementResetResponse[];
  }
  /**
   * This is a JSON template for multiple achievements reset all request.
   */
  export interface Schema$AchievementResetMultipleForAllRequest {
    /**
     * The IDs of achievements to reset.
     */
    achievement_ids?: string[] | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetMultipleForAllRequest.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for an achievement reset response.
   */
  export interface Schema$AchievementResetResponse {
    /**
     * The current state of the achievement. This is the same as the initial state of the achievement. Possible values are:   - &quot;HIDDEN&quot;- Achievement is hidden.  - &quot;REVEALED&quot; - Achievement is revealed.  - &quot;UNLOCKED&quot; - Achievement is unlocked.
     */
    currentState?: string | null;
    /**
     * The ID of an achievement for which player state has been updated.
     */
    definitionId?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetResponse.
     */
    kind?: string | null;
    /**
     * Flag to indicate if the requested update actually occurred.
     */
    updateOccurred?: boolean | null;
  }
  /**
   * This is a JSON template for multiple events reset all request.
   */
  export interface Schema$EventsResetMultipleForAllRequest {
    /**
     * The IDs of events to reset.
     */
    event_ids?: string[] | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#eventsResetMultipleForAllRequest.
     */
    kind?: string | null;
  }
  /**
   * This is a JSON template for metadata about a player playing a game with the currently authenticated user.
   */
  export interface Schema$GamesPlayedResource {
    /**
     * True if the player was auto-matched with the currently authenticated user.
     */
    autoMatched?: boolean | null;
    /**
     * The last time the player played the game in milliseconds since the epoch in UTC.
     */
    timeMillis?: string | null;
  }
  /**
   * This is a JSON template for 1P/3P metadata about the player&#39;s experience.
   */
  export interface Schema$GamesPlayerExperienceInfoResource {
    /**
     * The current number of experience points for the player.
     */
    currentExperiencePoints?: string | null;
    /**
     * The current level of the player.
     */
    currentLevel?: Schema$GamesPlayerLevelResource;
    /**
     * The timestamp when the player was leveled up, in millis since Unix epoch UTC.
     */
    lastLevelUpTimestampMillis?: string | null;
    /**
     * The next level of the player. If the current level is the maximum level, this should be same as the current level.
     */
    nextLevel?: Schema$GamesPlayerLevelResource;
  }
  /**
   * This is a JSON template for 1P/3P metadata about a user&#39;s level.
   */
  export interface Schema$GamesPlayerLevelResource {
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
   * This is a JSON template for the HiddenPlayer resource.
   */
  export interface Schema$HiddenPlayer {
    /**
     * The time this player was hidden.
     */
    hiddenTimeMillis?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#hiddenPlayer.
     */
    kind?: string | null;
    /**
     * The player information.
     */
    player?: Schema$Player;
  }
  /**
   * This is a JSON template for a list of hidden players.
   */
  export interface Schema$HiddenPlayerList {
    /**
     * The players.
     */
    items?: Schema$HiddenPlayer[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#hiddenPlayerList.
     */
    kind?: string | null;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string | null;
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
    experienceInfo?: Schema$GamesPlayerExperienceInfoResource;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#player.
     */
    kind?: string | null;
    /**
     * Details about the last time this player played a multiplayer game with the currently authenticated player. Populated for PLAYED_WITH player collection members.
     */
    lastPlayedWith?: Schema$GamesPlayedResource;
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
   * This is a JSON template for a list of leaderboard reset resources.
   */
  export interface Schema$PlayerScoreResetAllResponse {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#playerScoreResetResponse.
     */
    kind?: string | null;
    /**
     * The leaderboard reset results.
     */
    results?: Schema$PlayerScoreResetResponse[];
  }
  /**
   * This is a JSON template for a list of reset leaderboard entry resources.
   */
  export interface Schema$PlayerScoreResetResponse {
    /**
     * The ID of an leaderboard for which player state has been updated.
     */
    definitionId?: string | null;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#playerScoreResetResponse.
     */
    kind?: string | null;
    /**
     * The time spans of the updated score. Possible values are:   - &quot;ALL_TIME&quot; - The score is an all-time score.  - &quot;WEEKLY&quot; - The score is a weekly score.  - &quot;DAILY&quot; - The score is a daily score.
     */
    resetScoreTimeSpans?: string[] | null;
  }
  /**
   * This is a JSON template for profile settings
   */
  export interface Schema$ProfileSettings {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#profileSettings.
     */
    kind?: string | null;
    profileVisible?: boolean | null;
  }
  /**
   * This is a JSON template for multiple quests reset all request.
   */
  export interface Schema$QuestsResetMultipleForAllRequest {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#questsResetMultipleForAllRequest.
     */
    kind?: string | null;
    /**
     * The IDs of quests to reset.
     */
    quest_ids?: string[] | null;
  }
  /**
   * This is a JSON template for multiple scores reset all request.
   */
  export interface Schema$ScoresResetMultipleForAllRequest {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#scoresResetMultipleForAllRequest.
     */
    kind?: string | null;
    /**
     * The IDs of leaderboards to reset.
     */
    leaderboard_ids?: string[] | null;
  }

  export class Resource$Achievements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gamesManagement.achievements.reset
     * @desc Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @alias gamesManagement.achievements.reset
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reset(
      params?: Params$Resource$Achievements$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AchievementResetResponse>;
    reset(
      params: Params$Resource$Achievements$Reset,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementResetResponse>,
      callback: BodyResponseCallback<Schema$AchievementResetResponse>
    ): void;
    reset(
      params: Params$Resource$Achievements$Reset,
      callback: BodyResponseCallback<Schema$AchievementResetResponse>
    ): void;
    reset(
      callback: BodyResponseCallback<Schema$AchievementResetResponse>
    ): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Achievements$Reset
        | BodyResponseCallback<Schema$AchievementResetResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementResetResponse>,
      callback?: BodyResponseCallback<Schema$AchievementResetResponse>
    ): void | GaxiosPromise<Schema$AchievementResetResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Reset;
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
              rootUrl + '/games/v1management/achievements/{achievementId}/reset'
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
        createAPIRequest<Schema$AchievementResetResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AchievementResetResponse>(parameters);
      }
    }

    /**
     * gamesManagement.achievements.resetAll
     * @desc Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
     * @alias gamesManagement.achievements.resetAll
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetAll(
      params?: Params$Resource$Achievements$Resetall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AchievementResetAllResponse>;
    resetAll(
      params: Params$Resource$Achievements$Resetall,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementResetAllResponse>,
      callback: BodyResponseCallback<Schema$AchievementResetAllResponse>
    ): void;
    resetAll(
      params: Params$Resource$Achievements$Resetall,
      callback: BodyResponseCallback<Schema$AchievementResetAllResponse>
    ): void;
    resetAll(
      callback: BodyResponseCallback<Schema$AchievementResetAllResponse>
    ): void;
    resetAll(
      paramsOrCallback?:
        | Params$Resource$Achievements$Resetall
        | BodyResponseCallback<Schema$AchievementResetAllResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AchievementResetAllResponse>,
      callback?: BodyResponseCallback<Schema$AchievementResetAllResponse>
    ): void | GaxiosPromise<Schema$AchievementResetAllResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Resetall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Resetall;
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
            url: (rootUrl + '/games/v1management/achievements/reset').replace(
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
        createAPIRequest<Schema$AchievementResetAllResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AchievementResetAllResponse>(parameters);
      }
    }

    /**
     * gamesManagement.achievements.resetAllForAllPlayers
     * @desc Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
     * @alias gamesManagement.achievements.resetAllForAllPlayers
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetAllForAllPlayers(
      params?: Params$Resource$Achievements$Resetallforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetAllForAllPlayers(
      params: Params$Resource$Achievements$Resetallforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetAllForAllPlayers(
      params: Params$Resource$Achievements$Resetallforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetAllForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetAllForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Achievements$Resetallforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Resetallforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Resetallforallplayers;
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
              rootUrl + '/games/v1management/achievements/resetAllForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.achievements.resetForAllPlayers
     * @desc Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
     * @alias gamesManagement.achievements.resetForAllPlayers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers(
      params?: Params$Resource$Achievements$Resetforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetForAllPlayers(
      params: Params$Resource$Achievements$Resetforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(
      params: Params$Resource$Achievements$Resetforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Achievements$Resetforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Resetforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Resetforallplayers;
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
              '/games/v1management/achievements/{achievementId}/resetForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.achievements.resetMultipleForAllPlayers
     * @desc Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.
     * @alias gamesManagement.achievements.resetMultipleForAllPlayers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AchievementResetMultipleForAllRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetMultipleForAllPlayers(
      params?: Params$Resource$Achievements$Resetmultipleforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetMultipleForAllPlayers(
      params: Params$Resource$Achievements$Resetmultipleforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetMultipleForAllPlayers(
      params: Params$Resource$Achievements$Resetmultipleforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetMultipleForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetMultipleForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Achievements$Resetmultipleforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Achievements$Resetmultipleforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievements$Resetmultipleforallplayers;
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
              '/games/v1management/achievements/resetMultipleForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Achievements$Reset
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
  export interface Params$Resource$Achievements$Resetall
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Achievements$Resetallforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Achievements$Resetforallplayers
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
  export interface Params$Resource$Achievements$Resetmultipleforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AchievementResetMultipleForAllRequest;
  }

  export class Resource$Applications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gamesManagement.applications.listHidden
     * @desc Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
     * @alias gamesManagement.applications.listHidden
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {integer=} params.maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listHidden(
      params?: Params$Resource$Applications$Listhidden,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HiddenPlayerList>;
    listHidden(
      params: Params$Resource$Applications$Listhidden,
      options: MethodOptions | BodyResponseCallback<Schema$HiddenPlayerList>,
      callback: BodyResponseCallback<Schema$HiddenPlayerList>
    ): void;
    listHidden(
      params: Params$Resource$Applications$Listhidden,
      callback: BodyResponseCallback<Schema$HiddenPlayerList>
    ): void;
    listHidden(callback: BodyResponseCallback<Schema$HiddenPlayerList>): void;
    listHidden(
      paramsOrCallback?:
        | Params$Resource$Applications$Listhidden
        | BodyResponseCallback<Schema$HiddenPlayerList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$HiddenPlayerList>,
      callback?: BodyResponseCallback<Schema$HiddenPlayerList>
    ): void | GaxiosPromise<Schema$HiddenPlayerList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Applications$Listhidden;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applications$Listhidden;
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
              '/games/v1management/applications/{applicationId}/players/hidden'
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
        createAPIRequest<Schema$HiddenPlayerList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HiddenPlayerList>(parameters);
      }
    }
  }

  export interface Params$Resource$Applications$Listhidden
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;
    /**
     * The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Events {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gamesManagement.events.reset
     * @desc Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All quests for this player that use the event will also be reset.
     * @alias gamesManagement.events.reset
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.eventId The ID of the event.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reset(
      params?: Params$Resource$Events$Reset,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    reset(
      params: Params$Resource$Events$Reset,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    reset(
      params: Params$Resource$Events$Reset,
      callback: BodyResponseCallback<void>
    ): void;
    reset(callback: BodyResponseCallback<void>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Events$Reset
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Events$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Reset;
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
              rootUrl + '/games/v1management/events/{eventId}/reset'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['eventId'],
        pathParams: ['eventId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.events.resetAll
     * @desc Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All quests for this player will also be reset.
     * @alias gamesManagement.events.resetAll
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetAll(
      params?: Params$Resource$Events$Resetall,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetAll(
      params: Params$Resource$Events$Resetall,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetAll(
      params: Params$Resource$Events$Resetall,
      callback: BodyResponseCallback<void>
    ): void;
    resetAll(callback: BodyResponseCallback<void>): void;
    resetAll(
      paramsOrCallback?:
        | Params$Resource$Events$Resetall
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Events$Resetall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Resetall;
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
            url: (rootUrl + '/games/v1management/events/reset').replace(
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
     * gamesManagement.events.resetAllForAllPlayers
     * @desc Resets all draft events for all players. This method is only available to user accounts for your developer console. All quests that use any of these events will also be reset.
     * @alias gamesManagement.events.resetAllForAllPlayers
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetAllForAllPlayers(
      params?: Params$Resource$Events$Resetallforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetAllForAllPlayers(
      params: Params$Resource$Events$Resetallforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetAllForAllPlayers(
      params: Params$Resource$Events$Resetallforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetAllForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetAllForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Events$Resetallforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Events$Resetallforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Resetallforallplayers;
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
              rootUrl + '/games/v1management/events/resetAllForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.events.resetForAllPlayers
     * @desc Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset. All quests that use the event will also be reset.
     * @alias gamesManagement.events.resetForAllPlayers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.eventId The ID of the event.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers(
      params?: Params$Resource$Events$Resetforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetForAllPlayers(
      params: Params$Resource$Events$Resetforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(
      params: Params$Resource$Events$Resetforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Events$Resetforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Events$Resetforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Resetforallplayers;
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
              '/games/v1management/events/{eventId}/resetForAllPlayers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['eventId'],
        pathParams: ['eventId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.events.resetMultipleForAllPlayers
     * @desc Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset. All quests that use any of the events will also be reset.
     * @alias gamesManagement.events.resetMultipleForAllPlayers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().EventsResetMultipleForAllRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetMultipleForAllPlayers(
      params?: Params$Resource$Events$Resetmultipleforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetMultipleForAllPlayers(
      params: Params$Resource$Events$Resetmultipleforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetMultipleForAllPlayers(
      params: Params$Resource$Events$Resetmultipleforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetMultipleForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetMultipleForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Events$Resetmultipleforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Events$Resetmultipleforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Resetmultipleforallplayers;
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
              rootUrl + '/games/v1management/events/resetMultipleForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Events$Reset extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the event.
     */
    eventId?: string;
  }
  export interface Params$Resource$Events$Resetall extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Events$Resetallforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Events$Resetforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the event.
     */
    eventId?: string;
  }
  export interface Params$Resource$Events$Resetmultipleforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventsResetMultipleForAllRequest;
  }

  export class Resource$Players {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gamesManagement.players.hide
     * @desc Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     * @alias gamesManagement.players.hide
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    hide(
      params?: Params$Resource$Players$Hide,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    hide(
      params: Params$Resource$Players$Hide,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    hide(
      params: Params$Resource$Players$Hide,
      callback: BodyResponseCallback<void>
    ): void;
    hide(callback: BodyResponseCallback<void>): void;
    hide(
      paramsOrCallback?:
        | Params$Resource$Players$Hide
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Players$Hide;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Players$Hide;
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
              '/games/v1management/applications/{applicationId}/players/hidden/{playerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['applicationId', 'playerId'],
        pathParams: ['applicationId', 'playerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.players.unhide
     * @desc Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     * @alias gamesManagement.players.unhide
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unhide(
      params?: Params$Resource$Players$Unhide,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    unhide(
      params: Params$Resource$Players$Unhide,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    unhide(
      params: Params$Resource$Players$Unhide,
      callback: BodyResponseCallback<void>
    ): void;
    unhide(callback: BodyResponseCallback<void>): void;
    unhide(
      paramsOrCallback?:
        | Params$Resource$Players$Unhide
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Players$Unhide;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Players$Unhide;
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
              '/games/v1management/applications/{applicationId}/players/hidden/{playerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['applicationId', 'playerId'],
        pathParams: ['applicationId', 'playerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Players$Hide extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;
    /**
     * A player ID. A value of me may be used in place of the authenticated player's ID.
     */
    playerId?: string;
  }
  export interface Params$Resource$Players$Unhide extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;
    /**
     * A player ID. A value of me may be used in place of the authenticated player's ID.
     */
    playerId?: string;
  }

  export class Resource$Quests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gamesManagement.quests.reset
     * @desc Resets all player progress on the quest with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @alias gamesManagement.quests.reset
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.questId The ID of the quest.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reset(
      params?: Params$Resource$Quests$Reset,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    reset(
      params: Params$Resource$Quests$Reset,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    reset(
      params: Params$Resource$Quests$Reset,
      callback: BodyResponseCallback<void>
    ): void;
    reset(callback: BodyResponseCallback<void>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Quests$Reset
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Quests$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Quests$Reset;
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
              rootUrl + '/games/v1management/quests/{questId}/reset'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.quests.resetAll
     * @desc Resets all player progress on all quests for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @alias gamesManagement.quests.resetAll
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetAll(
      params?: Params$Resource$Quests$Resetall,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetAll(
      params: Params$Resource$Quests$Resetall,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetAll(
      params: Params$Resource$Quests$Resetall,
      callback: BodyResponseCallback<void>
    ): void;
    resetAll(callback: BodyResponseCallback<void>): void;
    resetAll(
      paramsOrCallback?:
        | Params$Resource$Quests$Resetall
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Quests$Resetall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Quests$Resetall;
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
            url: (rootUrl + '/games/v1management/quests/reset').replace(
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
     * gamesManagement.quests.resetAllForAllPlayers
     * @desc Resets all draft quests for all players. This method is only available to user accounts for your developer console.
     * @alias gamesManagement.quests.resetAllForAllPlayers
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetAllForAllPlayers(
      params?: Params$Resource$Quests$Resetallforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetAllForAllPlayers(
      params: Params$Resource$Quests$Resetallforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetAllForAllPlayers(
      params: Params$Resource$Quests$Resetallforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetAllForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetAllForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Quests$Resetallforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Quests$Resetallforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Quests$Resetallforallplayers;
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
              rootUrl + '/games/v1management/quests/resetAllForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.quests.resetForAllPlayers
     * @desc Resets all player progress on the quest with the given ID for all players. This method is only available to user accounts for your developer console. Only draft quests can be reset.
     * @alias gamesManagement.quests.resetForAllPlayers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.questId The ID of the quest.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers(
      params?: Params$Resource$Quests$Resetforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetForAllPlayers(
      params: Params$Resource$Quests$Resetforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(
      params: Params$Resource$Quests$Resetforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Quests$Resetforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Quests$Resetforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Quests$Resetforallplayers;
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
              '/games/v1management/quests/{questId}/resetForAllPlayers'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.quests.resetMultipleForAllPlayers
     * @desc Resets quests with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft quests may be reset.
     * @alias gamesManagement.quests.resetMultipleForAllPlayers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().QuestsResetMultipleForAllRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetMultipleForAllPlayers(
      params?: Params$Resource$Quests$Resetmultipleforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetMultipleForAllPlayers(
      params: Params$Resource$Quests$Resetmultipleforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetMultipleForAllPlayers(
      params: Params$Resource$Quests$Resetmultipleforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetMultipleForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetMultipleForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Quests$Resetmultipleforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Quests$Resetmultipleforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Quests$Resetmultipleforallplayers;
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
              rootUrl + '/games/v1management/quests/resetMultipleForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Quests$Reset extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the quest.
     */
    questId?: string;
  }
  export interface Params$Resource$Quests$Resetall extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Quests$Resetallforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Quests$Resetforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the quest.
     */
    questId?: string;
  }
  export interface Params$Resource$Quests$Resetmultipleforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$QuestsResetMultipleForAllRequest;
  }

  export class Resource$Rooms {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gamesManagement.rooms.reset
     * @desc Reset all rooms for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
     * @alias gamesManagement.rooms.reset
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reset(
      params?: Params$Resource$Rooms$Reset,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    reset(
      params: Params$Resource$Rooms$Reset,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    reset(
      params: Params$Resource$Rooms$Reset,
      callback: BodyResponseCallback<void>
    ): void;
    reset(callback: BodyResponseCallback<void>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Rooms$Reset
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Reset;
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
            url: (rootUrl + '/games/v1management/rooms/reset').replace(
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
     * gamesManagement.rooms.resetForAllPlayers
     * @desc Deletes rooms where the only room participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.
     * @alias gamesManagement.rooms.resetForAllPlayers
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers(
      params?: Params$Resource$Rooms$Resetforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetForAllPlayers(
      params: Params$Resource$Rooms$Resetforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(
      params: Params$Resource$Rooms$Resetforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Rooms$Resetforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Rooms$Resetforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Resetforallplayers;
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
              rootUrl + '/games/v1management/rooms/resetForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Rooms$Reset extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Rooms$Resetforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }

  export class Resource$Scores {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gamesManagement.scores.reset
     * @desc Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @alias gamesManagement.scores.reset
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reset(
      params?: Params$Resource$Scores$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlayerScoreResetResponse>;
    reset(
      params: Params$Resource$Scores$Reset,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerScoreResetResponse>,
      callback: BodyResponseCallback<Schema$PlayerScoreResetResponse>
    ): void;
    reset(
      params: Params$Resource$Scores$Reset,
      callback: BodyResponseCallback<Schema$PlayerScoreResetResponse>
    ): void;
    reset(
      callback: BodyResponseCallback<Schema$PlayerScoreResetResponse>
    ): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Scores$Reset
        | BodyResponseCallback<Schema$PlayerScoreResetResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerScoreResetResponse>,
      callback?: BodyResponseCallback<Schema$PlayerScoreResetResponse>
    ): void | GaxiosPromise<Schema$PlayerScoreResetResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Scores$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Reset;
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
              '/games/v1management/leaderboards/{leaderboardId}/scores/reset'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlayerScoreResetResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlayerScoreResetResponse>(parameters);
      }
    }

    /**
     * gamesManagement.scores.resetAll
     * @desc Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
     * @alias gamesManagement.scores.resetAll
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetAll(
      params?: Params$Resource$Scores$Resetall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlayerScoreResetAllResponse>;
    resetAll(
      params: Params$Resource$Scores$Resetall,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerScoreResetAllResponse>,
      callback: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>
    ): void;
    resetAll(
      params: Params$Resource$Scores$Resetall,
      callback: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>
    ): void;
    resetAll(
      callback: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>
    ): void;
    resetAll(
      paramsOrCallback?:
        | Params$Resource$Scores$Resetall
        | BodyResponseCallback<Schema$PlayerScoreResetAllResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlayerScoreResetAllResponse>,
      callback?: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>
    ): void | GaxiosPromise<Schema$PlayerScoreResetAllResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Scores$Resetall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Resetall;
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
            url: (rootUrl + '/games/v1management/scores/reset').replace(
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
        createAPIRequest<Schema$PlayerScoreResetAllResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PlayerScoreResetAllResponse>(parameters);
      }
    }

    /**
     * gamesManagement.scores.resetAllForAllPlayers
     * @desc Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
     * @alias gamesManagement.scores.resetAllForAllPlayers
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetAllForAllPlayers(
      params?: Params$Resource$Scores$Resetallforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetAllForAllPlayers(
      params: Params$Resource$Scores$Resetallforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetAllForAllPlayers(
      params: Params$Resource$Scores$Resetallforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetAllForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetAllForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Scores$Resetallforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Scores$Resetallforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Resetallforallplayers;
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
              rootUrl + '/games/v1management/scores/resetAllForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.scores.resetForAllPlayers
     * @desc Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
     * @alias gamesManagement.scores.resetForAllPlayers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers(
      params?: Params$Resource$Scores$Resetforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetForAllPlayers(
      params: Params$Resource$Scores$Resetforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(
      params: Params$Resource$Scores$Resetforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Scores$Resetforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Scores$Resetforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Resetforallplayers;
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
              '/games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.scores.resetMultipleForAllPlayers
     * @desc Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
     * @alias gamesManagement.scores.resetMultipleForAllPlayers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().ScoresResetMultipleForAllRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetMultipleForAllPlayers(
      params?: Params$Resource$Scores$Resetmultipleforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetMultipleForAllPlayers(
      params: Params$Resource$Scores$Resetmultipleforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetMultipleForAllPlayers(
      params: Params$Resource$Scores$Resetmultipleforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetMultipleForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetMultipleForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Scores$Resetmultipleforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Scores$Resetmultipleforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Scores$Resetmultipleforallplayers;
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
              rootUrl + '/games/v1management/scores/resetMultipleForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Scores$Reset extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;
  }
  export interface Params$Resource$Scores$Resetall extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Scores$Resetallforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Scores$Resetforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;
  }
  export interface Params$Resource$Scores$Resetmultipleforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScoresResetMultipleForAllRequest;
  }

  export class Resource$Turnbasedmatches {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gamesManagement.turnBasedMatches.reset
     * @desc Reset all turn-based match data for a user. This method is only accessible to whitelisted tester accounts for your application.
     * @alias gamesManagement.turnBasedMatches.reset
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reset(
      params?: Params$Resource$Turnbasedmatches$Reset,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    reset(
      params: Params$Resource$Turnbasedmatches$Reset,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    reset(
      params: Params$Resource$Turnbasedmatches$Reset,
      callback: BodyResponseCallback<void>
    ): void;
    reset(callback: BodyResponseCallback<void>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Reset
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Reset;
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
              rootUrl + '/games/v1management/turnbasedmatches/reset'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gamesManagement.turnBasedMatches.resetForAllPlayers
     * @desc Deletes turn-based matches where the only match participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.
     * @alias gamesManagement.turnBasedMatches.resetForAllPlayers
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers(
      params?: Params$Resource$Turnbasedmatches$Resetforallplayers,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    resetForAllPlayers(
      params: Params$Resource$Turnbasedmatches$Resetforallplayers,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(
      params: Params$Resource$Turnbasedmatches$Resetforallplayers,
      callback: BodyResponseCallback<void>
    ): void;
    resetForAllPlayers(callback: BodyResponseCallback<void>): void;
    resetForAllPlayers(
      paramsOrCallback?:
        | Params$Resource$Turnbasedmatches$Resetforallplayers
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Turnbasedmatches$Resetforallplayers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Turnbasedmatches$Resetforallplayers;
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
              '/games/v1management/turnbasedmatches/resetForAllPlayers'
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Turnbasedmatches$Reset
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Turnbasedmatches$Resetforallplayers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
}
