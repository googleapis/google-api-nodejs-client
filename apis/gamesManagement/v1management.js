/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;

/**
 * Google Play Game Services Management API
 *
 * @classdesc The Management API for Google Play Game Services.
 * @namespace gamesManagement
 * @version  v1management
 * @variation v1management
 * @this Gamesmanagement
 * @param {object=} options Options for Gamesmanagement
 */
function Gamesmanagement(options) {

  var self = this;
  this._options = options || {};

  this.achievements = {

    /**
     * gamesManagement.achievements.reset
     *
     * @desc Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     *
     * @alias gamesManagement.achievements.reset
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reset: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/achievements/' + params.achievementId + '/reset',
          method: 'POST'
        },
        params: params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesManagement.achievements.resetAll
     *
     * @desc Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
     *
     * @alias gamesManagement.achievements.resetAll
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    resetAll: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/achievements/reset',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesManagement.achievements.resetForAllPlayers
     *
     * @desc Resets the achievement with the given ID for the all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
     *
     * @alias gamesManagement.achievements.resetForAllPlayers
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/achievements/' + params.achievementId + '/resetForAllPlayers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.applications = {

    /**
     * gamesManagement.applications.listHidden
     *
     * @desc Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
     *
     * @alias gamesManagement.applications.listHidden
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - The application being requested.
     * @param  {integer=} params.maxResults - The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listHidden: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/applications/' + params.applicationId + '/players/hidden',
          method: 'GET'
        },
        params: params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.events = {

    /**
     * gamesManagement.events.reset
     *
     * @desc Reset all player progress on the event for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All resources that use the event will also be reset.
     *
     * @alias gamesManagement.events.reset
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.eventId - The ID of the event.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reset: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/events/' + params.eventId + '/reset',
          method: 'POST'
        },
        params: params,
        requiredParams: ['eventId'],
        pathParams: ['eventId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesManagement.events.resetAll
     *
     * @desc Reset all player progress on all unpublished events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All resources that use the events will also be reset.
     *
     * @alias gamesManagement.events.resetAll
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    resetAll: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/events/reset',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesManagement.events.resetForAllPlayers
     *
     * @desc Reset all player progress on the event for all players. This method is only available to user accounts for your developer console. Only draft events can be reset. All resources that use the event will also be reset.
     *
     * @alias gamesManagement.events.resetForAllPlayers
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.eventId - The ID of the event.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/events/' + params.eventId + '/resetForAllPlayers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['eventId'],
        pathParams: ['eventId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.players = {

    /**
     * gamesManagement.players.hide
     *
     * @desc Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     *
     * @alias gamesManagement.players.hide
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - The application being requested.
     * @param  {string} params.playerId - A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    hide: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/applications/' + params.applicationId + '/players/hidden/' + params.playerId,
          method: 'POST'
        },
        params: params,
        requiredParams: ['applicationId', 'playerId'],
        pathParams: ['applicationId', 'playerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesManagement.players.unhide
     *
     * @desc Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     *
     * @alias gamesManagement.players.unhide
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - The application being requested.
     * @param  {string} params.playerId - A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    unhide: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/applications/' + params.applicationId + '/players/hidden/' + params.playerId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['applicationId', 'playerId'],
        pathParams: ['applicationId', 'playerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.quests = {

    /**
     * gamesManagement.quests.reset
     *
     * @desc Reset all player progress on the quest for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     *
     * @alias gamesManagement.quests.reset
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.questId - The ID of the quest.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reset: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/quests/' + params.questId + '/reset',
          method: 'POST'
        },
        params: params,
        requiredParams: ['questId'],
        pathParams: ['questId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.rooms = {

    /**
     * gamesManagement.rooms.reset
     *
     * @desc Reset all rooms for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
     *
     * @alias gamesManagement.rooms.reset
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reset: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/rooms/reset',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.scores = {

    /**
     * gamesManagement.scores.reset
     *
     * @desc Reset scores for the specified leaderboard for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     *
     * @alias gamesManagement.scores.reset
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reset: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/leaderboards/' + params.leaderboardId + '/scores/reset',
          method: 'POST'
        },
        params: params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesManagement.scores.resetForAllPlayers
     *
     * @desc Reset scores for the specified leaderboard for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
     *
     * @alias gamesManagement.scores.resetForAllPlayers
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    resetForAllPlayers: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/leaderboards/' + params.leaderboardId + '/scores/resetForAllPlayers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.turnBasedMatches = {

    /**
     * gamesManagement.turnBasedMatches.reset
     *
     * @desc Reset all turn-based match data for a user. This method is only accessible to whitelisted tester accounts for your application.
     *
     * @alias gamesManagement.turnBasedMatches.reset
     * @memberOf! gamesManagement(v1management)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reset: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1management/turnbasedmatches/reset',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Gamesmanagement object
 * @type Gamesmanagement
 */
module.exports = Gamesmanagement;