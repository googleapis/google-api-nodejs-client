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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google+ API
 *
 * Builds on top of the Google+ platform.
 *
 * @example
 * var google = require('googleapis');
 * var plus = google.plus('v1');
 *
 * @namespace plus
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Plus
 */
function Plus(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.activities = {

    /**
     * plus.activities.get
     *
     * @desc Get an activity.
     *
     * @alias plus.activities.get
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.activityId The ID of the activity to get.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/activities/{activityId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['activityId'],
        pathParams: ['activityId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plus.activities.list
     *
     * @desc List all of the activities in the specified collection for a particular user.
     *
     * @alias plus.activities.list
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection The collection of activities to list.
     * @param {integer=} params.maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string} params.userId The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/people/{userId}/activities/{collection}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plus.activities.search
     *
     * @desc Search public activities.
     *
     * @alias plus.activities.search
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language Specify the preferred language to search with. See search language codes for available values.
     * @param {integer=} params.maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.orderBy Specifies how to order search results.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
     * @param {string} params.query Full-text search query string.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/activities',
          method: 'GET'
        },
        params: params,
        requiredParams: ['query'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.comments = {

    /**
     * plus.comments.get
     *
     * @desc Get a comment.
     *
     * @alias plus.comments.get
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment to get.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/comments/{commentId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['commentId'],
        pathParams: ['commentId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plus.comments.list
     *
     * @desc List all of the comments for an activity.
     *
     * @alias plus.comments.list
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.activityId The ID of the activity to get comments for.
     * @param {integer=} params.maxResults The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string=} params.sortOrder The order in which to sort the list of comments.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/activities/{activityId}/comments',
          method: 'GET'
        },
        params: params,
        requiredParams: ['activityId'],
        pathParams: ['activityId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.people = {

    /**
     * plus.people.get
     *
     * @desc Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
     *
     * @alias plus.people.get
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/people/{userId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plus.people.list
     *
     * @desc List all of the people in the specified collection.
     *
     * @alias plus.people.list
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection The collection of people to list.
     * @param {integer=} params.maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.orderBy The order to return people in.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string} params.userId Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/people/{userId}/people/{collection}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plus.people.listByActivity
     *
     * @desc List all of the people in the specified collection for a particular activity.
     *
     * @alias plus.people.listByActivity
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.activityId The ID of the activity to get the list of people for.
     * @param {string} params.collection The collection of people to list.
     * @param {integer=} params.maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listByActivity: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/activities/{activityId}/people/{collection}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['activityId', 'collection'],
        pathParams: ['activityId', 'collection'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plus.people.search
     *
     * @desc Search all public profiles.
     *
     * @alias plus.people.search
     * @memberOf! plus(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language Specify the preferred language to search with. See search language codes for available values.
     * @param {integer=} params.maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
     * @param {string} params.query Specify a query string for full text search of public text in all profiles.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plus/v1/people',
          method: 'GET'
        },
        params: params,
        requiredParams: ['query'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Plus;
