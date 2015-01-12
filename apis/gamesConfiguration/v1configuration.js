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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Play Game Services Publishing API
 *
 * @classdesc The Publishing API for Google Play Game Services.
 * @namespace gamesConfiguration
 * @version  v1configuration
 * @variation v1configuration
 * @this Gamesconfiguration
 * @param {object=} options Options for Gamesconfiguration
 */
function Gamesconfiguration(options) {

  var self = this;
  this._options = options || {};

  this.achievementConfigurations = {

    /**
     * gamesConfiguration.achievementConfigurations.delete
     *
     * @desc Delete the achievement configuration with the given ID.
     *
     * @alias gamesConfiguration.achievementConfigurations.delete
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/achievements/{achievementId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesConfiguration.achievementConfigurations.get
     *
     * @desc Retrieves the metadata of the achievement configuration with the given ID.
     *
     * @alias gamesConfiguration.achievementConfigurations.get
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/achievements/{achievementId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesConfiguration.achievementConfigurations.insert
     *
     * @desc Insert a new achievement configuration in this application.
     *
     * @alias gamesConfiguration.achievementConfigurations.insert
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - The application ID from the Google Play developer console.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/applications/{applicationId}/achievements',
          method: 'POST'
        },
        params: params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesConfiguration.achievementConfigurations.list
     *
     * @desc Returns a list of the achievement configurations in this application.
     *
     * @alias gamesConfiguration.achievementConfigurations.list
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - The application ID from the Google Play developer console.
     * @param  {integer=} params.maxResults - The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/applications/{applicationId}/achievements',
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
     * gamesConfiguration.achievementConfigurations.patch
     *
     * @desc Update the metadata of the achievement configuration with the given ID. This method supports patch semantics.
     *
     * @alias gamesConfiguration.achievementConfigurations.patch
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/achievements/{achievementId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesConfiguration.achievementConfigurations.update
     *
     * @desc Update the metadata of the achievement configuration with the given ID.
     *
     * @alias gamesConfiguration.achievementConfigurations.update
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.achievementId - The ID of the achievement used by this method.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/achievements/{achievementId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.imageConfigurations = {

    /**
     * gamesConfiguration.imageConfigurations.upload
     *
     * @desc Uploads an image for a resource with the given ID and image type.
     *
     * @alias gamesConfiguration.imageConfigurations.upload
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.imageType - Selects which image in a resource for this method.
     * @param  {string} params.resourceId - The ID of the resource used by this method.
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    upload: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/images/{resourceId}/imageType/{imageType}',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/games/v1configuration/images/{resourceId}/imageType/{imageType}',
        requiredParams: ['resourceId', 'imageType'],
        pathParams: ['imageType', 'resourceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.leaderboardConfigurations = {

    /**
     * gamesConfiguration.leaderboardConfigurations.delete
     *
     * @desc Delete the leaderboard configuration with the given ID.
     *
     * @alias gamesConfiguration.leaderboardConfigurations.delete
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/leaderboards/{leaderboardId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesConfiguration.leaderboardConfigurations.get
     *
     * @desc Retrieves the metadata of the leaderboard configuration with the given ID.
     *
     * @alias gamesConfiguration.leaderboardConfigurations.get
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/leaderboards/{leaderboardId}',
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
     * gamesConfiguration.leaderboardConfigurations.insert
     *
     * @desc Insert a new leaderboard configuration in this application.
     *
     * @alias gamesConfiguration.leaderboardConfigurations.insert
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - The application ID from the Google Play developer console.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/applications/{applicationId}/leaderboards',
          method: 'POST'
        },
        params: params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesConfiguration.leaderboardConfigurations.list
     *
     * @desc Returns a list of the leaderboard configurations in this application.
     *
     * @alias gamesConfiguration.leaderboardConfigurations.list
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.applicationId - The application ID from the Google Play developer console.
     * @param  {integer=} params.maxResults - The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified maxResults.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/applications/{applicationId}/leaderboards',
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
     * gamesConfiguration.leaderboardConfigurations.patch
     *
     * @desc Update the metadata of the leaderboard configuration with the given ID. This method supports patch semantics.
     *
     * @alias gamesConfiguration.leaderboardConfigurations.patch
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/leaderboards/{leaderboardId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * gamesConfiguration.leaderboardConfigurations.update
     *
     * @desc Update the metadata of the leaderboard configuration with the given ID.
     *
     * @alias gamesConfiguration.leaderboardConfigurations.update
     * @memberOf! gamesConfiguration(v1configuration)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.leaderboardId - The ID of the leaderboard.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/games/v1configuration/leaderboards/{leaderboardId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Gamesconfiguration object
 * @type Gamesconfiguration
 */
module.exports = Gamesconfiguration;