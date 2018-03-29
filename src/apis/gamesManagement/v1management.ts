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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Google Play Game Services Management API
 *
 * The Management API for Google Play Game Services.
 *
 * @example
 * const google = require('googleapis');
 * const gamesManagement = google.gamesManagement('v1management');
 *
 * @namespace gamesManagement
 * @type {Function}
 * @version v1management
 * @variation v1management
 * @param {object=} options Options for Gamesmanagement
 */
export class Gamesmanagement {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  achievements: Resource$Achievements;
  applications: Resource$Applications;
  events: Resource$Events;
  players: Resource$Players;
  quests: Resource$Quests;
  rooms: Resource$Rooms;
  scores: Resource$Scores;
  turnBasedMatches: Resource$Turnbasedmatches;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.achievements = new Resource$Achievements(this);
    this.applications = new Resource$Applications(this);
    this.events = new Resource$Events(this);
    this.players = new Resource$Players(this);
    this.quests = new Resource$Quests(this);
    this.rooms = new Resource$Rooms(this);
    this.scores = new Resource$Scores(this);
    this.turnBasedMatches = new Resource$Turnbasedmatches(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * This is a JSON template for achievement reset all response.
 */
export interface Schema$AchievementResetAllResponse {
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#achievementResetAllResponse.
   */
  kind: string;
  /**
   * The achievement reset results.
   */
  results: Schema$AchievementResetResponse[];
}
/**
 * This is a JSON template for multiple achievements reset all request.
 */
export interface Schema$AchievementResetMultipleForAllRequest {
  /**
   * The IDs of achievements to reset.
   */
  achievement_ids: string[];
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#achievementResetMultipleForAllRequest.
   */
  kind: string;
}
/**
 * This is a JSON template for an achievement reset response.
 */
export interface Schema$AchievementResetResponse {
  /**
   * The current state of the achievement. This is the same as the initial state
   * of the achievement. Possible values are:   - &quot;HIDDEN&quot;-
   * Achievement is hidden.  - &quot;REVEALED&quot; - Achievement is revealed.
   * - &quot;UNLOCKED&quot; - Achievement is unlocked.
   */
  currentState: string;
  /**
   * The ID of an achievement for which player state has been updated.
   */
  definitionId: string;
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#achievementResetResponse.
   */
  kind: string;
  /**
   * Flag to indicate if the requested update actually occurred.
   */
  updateOccurred: boolean;
}
/**
 * This is a JSON template for multiple events reset all request.
 */
export interface Schema$EventsResetMultipleForAllRequest {
  /**
   * The IDs of events to reset.
   */
  event_ids: string[];
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#eventsResetMultipleForAllRequest.
   */
  kind: string;
}
/**
 * This is a JSON template for metadata about a player playing a game with the
 * currently authenticated user.
 */
export interface Schema$GamesPlayedResource {
  /**
   * True if the player was auto-matched with the currently authenticated user.
   */
  autoMatched: boolean;
  /**
   * The last time the player played the game in milliseconds since the epoch in
   * UTC.
   */
  timeMillis: string;
}
/**
 * This is a JSON template for 1P/3P metadata about the player&#39;s experience.
 */
export interface Schema$GamesPlayerExperienceInfoResource {
  /**
   * The current number of experience points for the player.
   */
  currentExperiencePoints: string;
  /**
   * The current level of the player.
   */
  currentLevel: Schema$GamesPlayerLevelResource;
  /**
   * The timestamp when the player was leveled up, in millis since Unix epoch
   * UTC.
   */
  lastLevelUpTimestampMillis: string;
  /**
   * The next level of the player. If the current level is the maximum level,
   * this should be same as the current level.
   */
  nextLevel: Schema$GamesPlayerLevelResource;
}
/**
 * This is a JSON template for 1P/3P metadata about a user&#39;s level.
 */
export interface Schema$GamesPlayerLevelResource {
  /**
   * The level for the user.
   */
  level: number;
  /**
   * The maximum experience points for this level.
   */
  maxExperiencePoints: string;
  /**
   * The minimum experience points for this level.
   */
  minExperiencePoints: string;
}
/**
 * This is a JSON template for the HiddenPlayer resource.
 */
export interface Schema$HiddenPlayer {
  /**
   * The time this player was hidden.
   */
  hiddenTimeMillis: string;
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#hiddenPlayer.
   */
  kind: string;
  /**
   * The player information.
   */
  player: Schema$Player;
}
/**
 * This is a JSON template for a list of hidden players.
 */
export interface Schema$HiddenPlayerList {
  /**
   * The players.
   */
  items: Schema$HiddenPlayer[];
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#hiddenPlayerList.
   */
  kind: string;
  /**
   * The pagination token for the next page of results.
   */
  nextPageToken: string;
}
/**
 * This is a JSON template for a Player resource.
 */
export interface Schema$Player {
  /**
   * The base URL for the image that represents the player.
   */
  avatarImageUrl: string;
  /**
   * The url to the landscape mode player banner image.
   */
  bannerUrlLandscape: string;
  /**
   * The url to the portrait mode player banner image.
   */
  bannerUrlPortrait: string;
  /**
   * The name to display for the player.
   */
  displayName: string;
  /**
   * An object to represent Play Game experience information for the player.
   */
  experienceInfo: Schema$GamesPlayerExperienceInfoResource;
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#player.
   */
  kind: string;
  /**
   * Details about the last time this player played a multiplayer game with the
   * currently authenticated player. Populated for PLAYED_WITH player collection
   * members.
   */
  lastPlayedWith: Schema$GamesPlayedResource;
  /**
   * An object representation of the individual components of the player&#39;s
   * name. For some players, these fields may not be present.
   */
  name: any;
  /**
   * The player ID that was used for this player the first time they signed into
   * the game in question. This is only populated for calls to player.get for
   * the requesting player, only if the player ID has subsequently changed, and
   * only to clients that support remapping player IDs.
   */
  originalPlayerId: string;
  /**
   * The ID of the player.
   */
  playerId: string;
  /**
   * The player&#39;s profile settings. Controls whether or not the player&#39;s
   * profile is visible to other players.
   */
  profileSettings: Schema$ProfileSettings;
  /**
   * The player&#39;s title rewarded for their game activities.
   */
  title: string;
}
/**
 * This is a JSON template for a list of leaderboard reset resources.
 */
export interface Schema$PlayerScoreResetAllResponse {
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#playerScoreResetResponse.
   */
  kind: string;
  /**
   * The leaderboard reset results.
   */
  results: Schema$PlayerScoreResetResponse[];
}
/**
 * This is a JSON template for a list of reset leaderboard entry resources.
 */
export interface Schema$PlayerScoreResetResponse {
  /**
   * The ID of an leaderboard for which player state has been updated.
   */
  definitionId: string;
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#playerScoreResetResponse.
   */
  kind: string;
  /**
   * The time spans of the updated score. Possible values are:   -
   * &quot;ALL_TIME&quot; - The score is an all-time score.  -
   * &quot;WEEKLY&quot; - The score is a weekly score.  - &quot;DAILY&quot; -
   * The score is a daily score.
   */
  resetScoreTimeSpans: string[];
}
/**
 * This is a JSON template for profile settings
 */
export interface Schema$ProfileSettings {
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#profileSettings.
   */
  kind: string;
  /**
   * The player&#39;s current profile visibility. This field is visible to both
   * 1P and 3P APIs.
   */
  profileVisible: boolean;
}
/**
 * This is a JSON template for multiple quests reset all request.
 */
export interface Schema$QuestsResetMultipleForAllRequest {
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#questsResetMultipleForAllRequest.
   */
  kind: string;
  /**
   * The IDs of quests to reset.
   */
  quest_ids: string[];
}
/**
 * This is a JSON template for multiple scores reset all request.
 */
export interface Schema$ScoresResetMultipleForAllRequest {
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed
   * string gamesManagement#scoresResetMultipleForAllRequest.
   */
  kind: string;
  /**
   * The IDs of leaderboards to reset.
   */
  leaderboard_ids: string[];
}

export class Resource$Achievements {
  root: Gamesmanagement;
  constructor(root: Gamesmanagement) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gamesManagement.achievements.reset
   * @desc Resets the achievement with the given ID for the currently
   * authenticated player. This method is only accessible to whitelisted tester
   * accounts for your application.
   * @alias gamesManagement.achievements.reset
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.achievementId The ID of the achievement used by this method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reset(params: any, options?: MethodOptions):
      AxiosPromise<Schema$AchievementResetResponse>;
  reset(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$AchievementResetResponse>,
      callback?: BodyResponseCallback<Schema$AchievementResetResponse>): void;
  reset(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AchievementResetResponse>,
      callback?: BodyResponseCallback<Schema$AchievementResetResponse>):
      void|AxiosPromise<Schema$AchievementResetResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/achievements/{achievementId}/reset')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['achievementId'],
      pathParams: ['achievementId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AchievementResetResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AchievementResetResponse>(parameters);
    }
  }


  /**
   * gamesManagement.achievements.resetAll
   * @desc Resets all achievements for the currently authenticated player for
   * your application. This method is only accessible to whitelisted tester
   * accounts for your application.
   * @alias gamesManagement.achievements.resetAll
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetAll(params: any, options?: MethodOptions):
      AxiosPromise<Schema$AchievementResetAllResponse>;
  resetAll(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$AchievementResetAllResponse>,
      callback?: BodyResponseCallback<Schema$AchievementResetAllResponse>):
      void;
  resetAll(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AchievementResetAllResponse>,
      callback?: BodyResponseCallback<Schema$AchievementResetAllResponse>):
      void|AxiosPromise<Schema$AchievementResetAllResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/achievements/reset')
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
      createAPIRequest<Schema$AchievementResetAllResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$AchievementResetAllResponse>(parameters);
    }
  }


  /**
   * gamesManagement.achievements.resetAllForAllPlayers
   * @desc Resets all draft achievements for all players. This method is only
   * available to user accounts for your developer console.
   * @alias gamesManagement.achievements.resetAllForAllPlayers
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetAllForAllPlayers(params: any, options?: MethodOptions):
      AxiosPromise<void>;
  resetAllForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetAllForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/achievements/resetAllForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.achievements.resetForAllPlayers
   * @desc Resets the achievement with the given ID for all players. This method
   * is only available to user accounts for your developer console. Only draft
   * achievements can be reset.
   * @alias gamesManagement.achievements.resetForAllPlayers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.achievementId The ID of the achievement used by this method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetForAllPlayers(params: any, options?: MethodOptions): AxiosPromise<void>;
  resetForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/games/v1management/achievements/{achievementId}/resetForAllPlayers')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['achievementId'],
      pathParams: ['achievementId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.achievements.resetMultipleForAllPlayers
   * @desc Resets achievements with the given IDs for all players. This method
   * is only available to user accounts for your developer console. Only draft
   * achievements may be reset.
   * @alias gamesManagement.achievements.resetMultipleForAllPlayers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().AchievementResetMultipleForAllRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetMultipleForAllPlayers(params: any, options?: MethodOptions):
      AxiosPromise<void>;
  resetMultipleForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetMultipleForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/achievements/resetMultipleForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Applications {
  root: Gamesmanagement;
  constructor(root: Gamesmanagement) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gamesManagement.applications.listHidden
   * @desc Get the list of players hidden from the given application. This
   * method is only available to user accounts for your developer console.
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
  listHidden(params: any, options?: MethodOptions):
      AxiosPromise<Schema$HiddenPlayerList>;
  listHidden(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$HiddenPlayerList>,
      callback?: BodyResponseCallback<Schema$HiddenPlayerList>): void;
  listHidden(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$HiddenPlayerList>,
      callback?: BodyResponseCallback<Schema$HiddenPlayerList>):
      void|AxiosPromise<Schema$HiddenPlayerList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/games/v1management/applications/{applicationId}/players/hidden')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['applicationId'],
      pathParams: ['applicationId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$HiddenPlayerList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$HiddenPlayerList>(parameters);
    }
  }
}

export class Resource$Events {
  root: Gamesmanagement;
  constructor(root: Gamesmanagement) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gamesManagement.events.reset
   * @desc Resets all player progress on the event with the given ID for the
   * currently authenticated player. This method is only accessible to
   * whitelisted tester accounts for your application. All quests for this
   * player that use the event will also be reset.
   * @alias gamesManagement.events.reset
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.eventId The ID of the event.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reset(params: any, options?: MethodOptions): AxiosPromise<void>;
  reset(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  reset(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/events/{eventId}/reset')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['eventId'],
      pathParams: ['eventId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.events.resetAll
   * @desc Resets all player progress on all events for the currently
   * authenticated player. This method is only accessible to whitelisted tester
   * accounts for your application. All quests for this player will also be
   * reset.
   * @alias gamesManagement.events.resetAll
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetAll(params: any, options?: MethodOptions): AxiosPromise<void>;
  resetAll(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetAll(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/events/reset')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.events.resetAllForAllPlayers
   * @desc Resets all draft events for all players. This method is only
   * available to user accounts for your developer console. All quests that use
   * any of these events will also be reset.
   * @alias gamesManagement.events.resetAllForAllPlayers
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetAllForAllPlayers(params: any, options?: MethodOptions):
      AxiosPromise<void>;
  resetAllForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetAllForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/events/resetAllForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.events.resetForAllPlayers
   * @desc Resets the event with the given ID for all players. This method is
   * only available to user accounts for your developer console. Only draft
   * events can be reset. All quests that use the event will also be reset.
   * @alias gamesManagement.events.resetForAllPlayers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.eventId The ID of the event.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetForAllPlayers(params: any, options?: MethodOptions): AxiosPromise<void>;
  resetForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/events/{eventId}/resetForAllPlayers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['eventId'],
      pathParams: ['eventId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.events.resetMultipleForAllPlayers
   * @desc Resets events with the given IDs for all players. This method is only
   * available to user accounts for your developer console. Only draft events
   * may be reset. All quests that use any of the events will also be reset.
   * @alias gamesManagement.events.resetMultipleForAllPlayers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().EventsResetMultipleForAllRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetMultipleForAllPlayers(params: any, options?: MethodOptions):
      AxiosPromise<void>;
  resetMultipleForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetMultipleForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/events/resetMultipleForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Players {
  root: Gamesmanagement;
  constructor(root: Gamesmanagement) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gamesManagement.players.hide
   * @desc Hide the given player's leaderboard scores from the given
   * application. This method is only available to user accounts for your
   * developer console.
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
  hide(params: any, options?: MethodOptions): AxiosPromise<void>;
  hide(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  hide(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/games/v1management/applications/{applicationId}/players/hidden/{playerId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['applicationId', 'playerId'],
      pathParams: ['applicationId', 'playerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.players.unhide
   * @desc Unhide the given player's leaderboard scores from the given
   * application. This method is only available to user accounts for your
   * developer console.
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
  unhide(params: any, options?: MethodOptions): AxiosPromise<void>;
  unhide(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  unhide(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/games/v1management/applications/{applicationId}/players/hidden/{playerId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['applicationId', 'playerId'],
      pathParams: ['applicationId', 'playerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Quests {
  root: Gamesmanagement;
  constructor(root: Gamesmanagement) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gamesManagement.quests.reset
   * @desc Resets all player progress on the quest with the given ID for the
   * currently authenticated player. This method is only accessible to
   * whitelisted tester accounts for your application.
   * @alias gamesManagement.quests.reset
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.questId The ID of the quest.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reset(params: any, options?: MethodOptions): AxiosPromise<void>;
  reset(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  reset(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/quests/{questId}/reset')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['questId'],
      pathParams: ['questId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.quests.resetAll
   * @desc Resets all player progress on all quests for the currently
   * authenticated player. This method is only accessible to whitelisted tester
   * accounts for your application.
   * @alias gamesManagement.quests.resetAll
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetAll(params: any, options?: MethodOptions): AxiosPromise<void>;
  resetAll(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetAll(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/quests/reset')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.quests.resetAllForAllPlayers
   * @desc Resets all draft quests for all players. This method is only
   * available to user accounts for your developer console.
   * @alias gamesManagement.quests.resetAllForAllPlayers
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetAllForAllPlayers(params: any, options?: MethodOptions):
      AxiosPromise<void>;
  resetAllForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetAllForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/quests/resetAllForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.quests.resetForAllPlayers
   * @desc Resets all player progress on the quest with the given ID for all
   * players. This method is only available to user accounts for your developer
   * console. Only draft quests can be reset.
   * @alias gamesManagement.quests.resetForAllPlayers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.questId The ID of the quest.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetForAllPlayers(params: any, options?: MethodOptions): AxiosPromise<void>;
  resetForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/quests/{questId}/resetForAllPlayers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['questId'],
      pathParams: ['questId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.quests.resetMultipleForAllPlayers
   * @desc Resets quests with the given IDs for all players. This method is only
   * available to user accounts for your developer console. Only draft quests
   * may be reset.
   * @alias gamesManagement.quests.resetMultipleForAllPlayers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().QuestsResetMultipleForAllRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetMultipleForAllPlayers(params: any, options?: MethodOptions):
      AxiosPromise<void>;
  resetMultipleForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetMultipleForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/quests/resetMultipleForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Rooms {
  root: Gamesmanagement;
  constructor(root: Gamesmanagement) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gamesManagement.rooms.reset
   * @desc Reset all rooms for the currently authenticated player for your
   * application. This method is only accessible to whitelisted tester accounts
   * for your application.
   * @alias gamesManagement.rooms.reset
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reset(params: any, options?: MethodOptions): AxiosPromise<void>;
  reset(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  reset(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/rooms/reset')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.rooms.resetForAllPlayers
   * @desc Deletes rooms where the only room participants are from whitelisted
   * tester accounts for your application. This method is only available to user
   * accounts for your developer console.
   * @alias gamesManagement.rooms.resetForAllPlayers
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetForAllPlayers(params: any, options?: MethodOptions): AxiosPromise<void>;
  resetForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/rooms/resetForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Scores {
  root: Gamesmanagement;
  constructor(root: Gamesmanagement) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gamesManagement.scores.reset
   * @desc Resets scores for the leaderboard with the given ID for the currently
   * authenticated player. This method is only accessible to whitelisted tester
   * accounts for your application.
   * @alias gamesManagement.scores.reset
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.leaderboardId The ID of the leaderboard.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reset(params: any, options?: MethodOptions):
      AxiosPromise<Schema$PlayerScoreResetResponse>;
  reset(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$PlayerScoreResetResponse>,
      callback?: BodyResponseCallback<Schema$PlayerScoreResetResponse>): void;
  reset(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$PlayerScoreResetResponse>,
      callback?: BodyResponseCallback<Schema$PlayerScoreResetResponse>):
      void|AxiosPromise<Schema$PlayerScoreResetResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/games/v1management/leaderboards/{leaderboardId}/scores/reset')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['leaderboardId'],
      pathParams: ['leaderboardId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PlayerScoreResetResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PlayerScoreResetResponse>(parameters);
    }
  }


  /**
   * gamesManagement.scores.resetAll
   * @desc Resets all scores for all leaderboards for the currently
   * authenticated players. This method is only accessible to whitelisted tester
   * accounts for your application.
   * @alias gamesManagement.scores.resetAll
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetAll(params: any, options?: MethodOptions):
      AxiosPromise<Schema$PlayerScoreResetAllResponse>;
  resetAll(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$PlayerScoreResetAllResponse>,
      callback?: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>):
      void;
  resetAll(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$PlayerScoreResetAllResponse>,
      callback?: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>):
      void|AxiosPromise<Schema$PlayerScoreResetAllResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/scores/reset')
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
      createAPIRequest<Schema$PlayerScoreResetAllResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$PlayerScoreResetAllResponse>(parameters);
    }
  }


  /**
   * gamesManagement.scores.resetAllForAllPlayers
   * @desc Resets scores for all draft leaderboards for all players. This method
   * is only available to user accounts for your developer console.
   * @alias gamesManagement.scores.resetAllForAllPlayers
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetAllForAllPlayers(params: any, options?: MethodOptions):
      AxiosPromise<void>;
  resetAllForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetAllForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/scores/resetAllForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.scores.resetForAllPlayers
   * @desc Resets scores for the leaderboard with the given ID for all players.
   * This method is only available to user accounts for your developer console.
   * Only draft leaderboards can be reset.
   * @alias gamesManagement.scores.resetForAllPlayers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.leaderboardId The ID of the leaderboard.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetForAllPlayers(params: any, options?: MethodOptions): AxiosPromise<void>;
  resetForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['leaderboardId'],
      pathParams: ['leaderboardId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.scores.resetMultipleForAllPlayers
   * @desc Resets scores for the leaderboards with the given IDs for all
   * players. This method is only available to user accounts for your developer
   * console. Only draft leaderboards may be reset.
   * @alias gamesManagement.scores.resetMultipleForAllPlayers
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().ScoresResetMultipleForAllRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetMultipleForAllPlayers(params: any, options?: MethodOptions):
      AxiosPromise<void>;
  resetMultipleForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetMultipleForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/scores/resetMultipleForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Turnbasedmatches {
  root: Gamesmanagement;
  constructor(root: Gamesmanagement) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gamesManagement.turnBasedMatches.reset
   * @desc Reset all turn-based match data for a user. This method is only
   * accessible to whitelisted tester accounts for your application.
   * @alias gamesManagement.turnBasedMatches.reset
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reset(params: any, options?: MethodOptions): AxiosPromise<void>;
  reset(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  reset(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/games/v1management/turnbasedmatches/reset')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gamesManagement.turnBasedMatches.resetForAllPlayers
   * @desc Deletes turn-based matches where the only match participants are from
   * whitelisted tester accounts for your application. This method is only
   * available to user accounts for your developer console.
   * @alias gamesManagement.turnBasedMatches.resetForAllPlayers
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  resetForAllPlayers(params: any, options?: MethodOptions): AxiosPromise<void>;
  resetForAllPlayers(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  resetForAllPlayers(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/games/v1management/turnbasedmatches/resetForAllPlayers')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}
