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
 * Google Play Game Services API
 *
 * @classdesc The API for Google Play Game Services.
 * @namespace games
 * @version  v1
 * @variation v1
 * @this Games
 * @param {object=} options Options for Games
 */
function Games(options) {

  var self = this;
  this._options = options || {};

  this.achievementDefinitions = {

    /**
     * games.achievementDefinitions.list
     *
     * @desc Lists all the achievement definitions for your application.
     *
     * @alias games.achievementDefinitions.list
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/achievements',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.achievements = {

    /**
     * games.achievements.increment
     *
     * @desc Increments the steps of the achievement with the given ID for the currently authenticated player.
     *
     * @alias games.achievements.increment
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {string=} params.requestId - A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
     * @param  {integer} params.stepsToIncrement - The number of steps to increment.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    increment: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/achievements/' + params.achievementId + '/increment',
          method: 'POST'
        },
        params: params,
        requiredParams: ['achievementId', 'stepsToIncrement'],
        pathParams: ['achievementId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.achievements.list
     *
     * @desc Lists the progress for all your application's achievements for the currently authenticated player.
     *
     * @alias games.achievements.list
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {string} params.playerId - A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param  {string=} params.state - Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/players/' + params.playerId + '/achievements',
          method: 'GET'
        },
        params: params,
        requiredParams: ['playerId'],
        pathParams: ['playerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.achievements.reveal
     *
     * @desc Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.
     *
     * @alias games.achievements.reveal
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reveal: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/achievements/' + params.achievementId + '/reveal',
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
     * games.achievements.setStepsAtLeast
     *
     * @desc Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
     *
     * @alias games.achievements.setStepsAtLeast
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {integer} params.steps - The minimum value to set the steps to.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setStepsAtLeast: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/achievements/' + params.achievementId + '/setStepsAtLeast',
          method: 'POST'
        },
        params: params,
        requiredParams: ['achievementId', 'steps'],
        pathParams: ['achievementId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.achievements.unlock
     *
     * @desc Unlocks this achievement for the currently authenticated player.
     *
     * @alias games.achievements.unlock
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    unlock: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/achievements/' + params.achievementId + '/unlock',
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
     * games.achievements.updateMultiple
     *
     * @desc Updates multiple achievements for the currently authenticated player.
     *
     * @alias games.achievements.updateMultiple
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    updateMultiple: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/achievements/updateMultiple',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.applications = {

    /**
     * games.applications.get
     *
     * @desc Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.
     *
     * @alias games.applications.get
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - The application being requested.
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string=} params.platformType - Restrict application details returned to the specific platform.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/applications/' + params.applicationId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.applications.played
     *
     * @desc Indicate that the the currently authenticated user is playing your application.
     *
     * @alias games.applications.played
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    played: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/applications/played',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.events = {

    /**
     * games.events.listByPlayer
     *
     * @desc Returns a list showing the current progress on events in this application for the currently authenticated user.
     *
     * @alias games.events.listByPlayer
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listByPlayer: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/events',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.events.listDefinitions
     *
     * @desc Returns a list of the event definitions in this application.
     *
     * @alias games.events.listDefinitions
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listDefinitions: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/eventDefinitions',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.events.record
     *
     * @desc Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
     *
     * @alias games.events.record
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    record: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/events',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.leaderboards = {

    /**
     * games.leaderboards.get
     *
     * @desc Retrieves the metadata of the leaderboard with the given ID.
     *
     * @alias games.leaderboards.get
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/leaderboards/' + params.leaderboardId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.leaderboards.list
     *
     * @desc Lists all the leaderboard metadata for your application.
     *
     * @alias games.leaderboards.list
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/leaderboards',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.metagame = {

    /**
     * games.metagame.getMetagameConfig
     *
     * @desc Return the metagame configuration data for the calling application.
     *
     * @alias games.metagame.getMetagameConfig
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getMetagameConfig: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/metagameConfig',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.metagame.listCategoriesByPlayer
     *
     * @desc List play data aggregated per category for the player corresponding to playerId.
     *
     * @alias games.metagame.listCategoriesByPlayer
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of categories for which data will be returned.
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {string} params.playerId - A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listCategoriesByPlayer: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/players/' + params.playerId + '/categories/' + params.collection,
          method: 'GET'
        },
        params: params,
        requiredParams: ['playerId', 'collection'],
        pathParams: ['collection', 'playerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.players = {

    /**
     * games.players.get
     *
     * @desc Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.
     *
     * @alias games.players.get
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.playerId - A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/players/' + params.playerId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['playerId'],
        pathParams: ['playerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.players.list
     *
     * @desc Get the collection of players for the currently authenticated user.
     *
     * @alias games.players.list
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - Collection of players being retrieved
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/players/me/players/' + params.collection,
          method: 'GET'
        },
        params: params,
        requiredParams: ['collection'],
        pathParams: ['collection'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.pushtokens = {

    /**
     * games.pushtokens.remove
     *
     * @desc Removes a push token for the current user and application. Removing a non-existent push token will report success.
     *
     * @alias games.pushtokens.remove
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    remove: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/pushtokens/remove',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.pushtokens.update
     *
     * @desc Registers a push token for the current user and application.
     *
     * @alias games.pushtokens.update
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/pushtokens',
          method: 'PUT'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.questMilestones = {

    /**
     * games.questMilestones.claim
     *
     * @desc Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user.
     *
     * @alias games.questMilestones.claim
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.milestoneId - The ID of the milestone.
     * @param  {string} params.questId - The ID of the quest.
     * @param  {string} params.requestId - A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    claim: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/quests/' + params.questId + '/milestones/' + params.milestoneId + '/claim',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['questId', 'milestoneId', 'requestId'],
        pathParams: ['milestoneId', 'questId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.quests = {

    /**
     * games.quests.accept
     *
     * @desc Indicates that the currently authorized user will participate in the quest.
     *
     * @alias games.quests.accept
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.questId - The ID of the quest.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    accept: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/quests/' + params.questId + '/accept',
          method: 'POST'
        },
        params: params,
        requiredParams: ['questId'],
        pathParams: ['questId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.quests.list
     *
     * @desc Get a list of quests for your application and the currently authenticated player.
     *
     * @alias games.quests.list
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {string} params.playerId - A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/players/' + params.playerId + '/quests',
          method: 'GET'
        },
        params: params,
        requiredParams: ['playerId'],
        pathParams: ['playerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.revisions = {

    /**
     * games.revisions.check
     *
     * @desc Checks whether the games client is out of date.
     *
     * @alias games.revisions.check
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.clientRevision - The revision of the client SDK used by your application. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:   - "ANDROID" - Client is running the Android SDK.  - "IOS" - Client is running the iOS SDK.  - "WEB_APP" - Client is running as a Web App.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    check: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/revisions/check',
          method: 'GET'
        },
        params: params,
        requiredParams: ['clientRevision'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.rooms = {

    /**
     * games.rooms.create
     *
     * @desc Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     *
     * @alias games.rooms.create
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/rooms/create',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.rooms.decline
     *
     * @desc Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     *
     * @alias games.rooms.decline
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.roomId - The ID of the room.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    decline: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/rooms/' + params.roomId + '/decline',
          method: 'POST'
        },
        params: params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.rooms.dismiss
     *
     * @desc Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     *
     * @alias games.rooms.dismiss
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.roomId - The ID of the room.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    dismiss: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/rooms/' + params.roomId + '/dismiss',
          method: 'POST'
        },
        params: params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.rooms.get
     *
     * @desc Get the data for a room.
     *
     * @alias games.rooms.get
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.roomId - The ID of the room.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/rooms/' + params.roomId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.rooms.join
     *
     * @desc Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     *
     * @alias games.rooms.join
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.roomId - The ID of the room.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    join: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/rooms/' + params.roomId + '/join',
          method: 'POST'
        },
        params: params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.rooms.leave
     *
     * @desc Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     *
     * @alias games.rooms.leave
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.roomId - The ID of the room.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    leave: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/rooms/' + params.roomId + '/leave',
          method: 'POST'
        },
        params: params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.rooms.list
     *
     * @desc Returns invitations to join rooms.
     *
     * @alias games.rooms.list
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/rooms',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.rooms.reportStatus
     *
     * @desc Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
     *
     * @alias games.rooms.reportStatus
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.roomId - The ID of the room.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    reportStatus: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/rooms/' + params.roomId + '/reportstatus',
          method: 'POST'
        },
        params: params,
        requiredParams: ['roomId'],
        pathParams: ['roomId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.scores = {

    /**
     * games.scores.get
     *
     * @desc Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span. NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
     *
     * @alias games.scores.get
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.includeRankType - The types of ranks to return. If the parameter is omitted, no ranks will be returned.
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.leaderboardId - The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
     * @param  {integer=} params.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {string} params.playerId - A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param  {string} params.timeSpan - The time span for the scores and ranks you're requesting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/players/' + params.playerId + '/leaderboards/' + params.leaderboardId + '/scores/' + params.timeSpan,
          method: 'GET'
        },
        params: params,
        requiredParams: ['playerId', 'leaderboardId', 'timeSpan'],
        pathParams: ['leaderboardId', 'playerId', 'timeSpan'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.scores.list
     *
     * @desc Lists the scores in a leaderboard, starting from the top.
     *
     * @alias games.scores.list
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of scores you're requesting.
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {integer=} params.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {string} params.timeSpan - The time span for the scores and ranks you're requesting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/leaderboards/' + params.leaderboardId + '/scores/' + params.collection,
          method: 'GET'
        },
        params: params,
        requiredParams: ['leaderboardId', 'collection', 'timeSpan'],
        pathParams: ['collection', 'leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.scores.listWindow
     *
     * @desc Lists the scores in a leaderboard around (and including) a player's score.
     *
     * @alias games.scores.listWindow
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of scores you're requesting.
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {integer=} params.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {integer=} params.resultsAbove - The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
     * @param  {boolean=} params.returnTopIfAbsent - True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
     * @param  {string} params.timeSpan - The time span for the scores and ranks you're requesting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listWindow: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/leaderboards/' + params.leaderboardId + '/window/' + params.collection,
          method: 'GET'
        },
        params: params,
        requiredParams: ['leaderboardId', 'collection', 'timeSpan'],
        pathParams: ['collection', 'leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.scores.submit
     *
     * @desc Submits a score to the specified leaderboard.
     *
     * @alias games.scores.submit
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {string} params.score - The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
     * @param  {string=} params.scoreTag - Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    submit: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/leaderboards/' + params.leaderboardId + '/scores',
          method: 'POST'
        },
        params: params,
        requiredParams: ['leaderboardId', 'score'],
        pathParams: ['leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.scores.submitMultiple
     *
     * @desc Submits multiple scores to leaderboards.
     *
     * @alias games.scores.submitMultiple
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    submitMultiple: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/leaderboards/scores',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.snapshots = {

    /**
     * games.snapshots.get
     *
     * @desc Retrieves the metadata for a given snapshot ID.
     *
     * @alias games.snapshots.get
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.snapshotId - The ID of the snapshot.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/snapshots/' + params.snapshotId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['snapshotId'],
        pathParams: ['snapshotId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.snapshots.list
     *
     * @desc Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
     *
     * @alias games.snapshots.list
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxResults - The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {string} params.playerId - A player ID. A value of me may be used in place of the authenticated player's ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/players/' + params.playerId + '/snapshots',
          method: 'GET'
        },
        params: params,
        requiredParams: ['playerId'],
        pathParams: ['playerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.turnBasedMatches = {

    /**
     * games.turnBasedMatches.cancel
     *
     * @desc Cancel a turn-based match.
     *
     * @alias games.turnBasedMatches.cancel
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.matchId - The ID of the match.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/cancel',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.create
     *
     * @desc Create a turn-based match.
     *
     * @alias games.turnBasedMatches.create
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/create',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.decline
     *
     * @desc Decline an invitation to play a turn-based match.
     *
     * @alias games.turnBasedMatches.decline
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.matchId - The ID of the match.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    decline: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/decline',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.dismiss
     *
     * @desc Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.
     *
     * @alias games.turnBasedMatches.dismiss
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.matchId - The ID of the match.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    dismiss: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/dismiss',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.finish
     *
     * @desc Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.
     *
     * @alias games.turnBasedMatches.finish
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.matchId - The ID of the match.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    finish: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/finish',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.get
     *
     * @desc Get the data for a turn-based match.
     *
     * @alias games.turnBasedMatches.get
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.includeMatchData - Get match data along with metadata.
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.matchId - The ID of the match.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.join
     *
     * @desc Join a turn-based match.
     *
     * @alias games.turnBasedMatches.join
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.matchId - The ID of the match.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    join: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/join',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.leave
     *
     * @desc Leave a turn-based match when it is not the current player's turn, without canceling the match.
     *
     * @alias games.turnBasedMatches.leave
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.matchId - The ID of the match.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    leave: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/leave',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.leaveTurn
     *
     * @desc Leave a turn-based match during the current player's turn, without canceling the match.
     *
     * @alias games.turnBasedMatches.leaveTurn
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.matchId - The ID of the match.
     * @param  {integer} params.matchVersion - The version of the match being updated.
     * @param  {string=} params.pendingParticipantId - The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    leaveTurn: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/leaveTurn',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['matchId', 'matchVersion'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.list
     *
     * @desc Returns turn-based matches the player is or was involved in.
     *
     * @alias games.turnBasedMatches.list
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {boolean=} params.includeMatchData - True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxCompletedMatches - The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
     * @param  {integer=} params.maxResults - The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.rematch
     *
     * @desc Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.
     *
     * @alias games.turnBasedMatches.rematch
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.matchId - The ID of the match.
     * @param  {string=} params.requestId - A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    rematch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/rematch',
          method: 'POST'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.sync
     *
     * @desc Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.
     *
     * @alias games.turnBasedMatches.sync
     * @memberOf! games(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {boolean=} params.includeMatchData - True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {integer=} params.maxCompletedMatches - The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
     * @param  {integer=} params.maxResults - The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    sync: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/sync',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * games.turnBasedMatches.takeTurn
     *
     * @desc Commit the results of a player turn.
     *
     * @alias games.turnBasedMatches.takeTurn
     * @memberOf! games(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The preferred language to use for strings returned by this method.
     * @param  {string} params.matchId - The ID of the match.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    takeTurn: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1/turnbasedmatches/' + params.matchId + '/turn',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['matchId'],
        pathParams: ['matchId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Games object
 * @type Games
 */
module.exports = Games;