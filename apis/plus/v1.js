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
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Google+ API
 *
 * @classdesc The Google+ API enables developers to build on top of the Google+ platform.
 * @namespace plus
 * @version  v1
 * @variation v1
 * @this Plus
 * @param {object=} options Options for Plus
 */
function Plus(options) {

  var self = this;
  this._options = options || {};

  this.activities = {

    /**
     * plus.activities.get
     *
     * @desc Get an activity.
     *
     * @alias plus.activities.get
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/activities/' + params.activityId,
        method: 'GET'
      };

      delete params.activityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * plus.activities.list
     *
     * @desc List all of the activities in the specified collection for a particular user.
     *
     * @alias plus.activities.list
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of activities to list.
     * @param  {integer=} params.maxResults - The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string} params.userId - The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId', 'collection']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/people/' + params.userId + '/activities/' + params.collection,
        method: 'GET'
      };

      delete params.collection;

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * plus.activities.search
     *
     * @desc Search public activities.
     *
     * @alias plus.activities.search
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - Specify the preferred language to search with. See search language codes for available values.
     * @param  {integer=} params.maxResults - The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.orderBy - Specifies how to order search results.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
     * @param  {string} params.query - Full-text search query string.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['query']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/activities',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.comments = {

    /**
     * plus.comments.get
     *
     * @desc Get a comment.
     *
     * @alias plus.comments.get
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/comments/' + params.commentId,
        method: 'GET'
      };

      delete params.commentId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * plus.comments.list
     *
     * @desc List all of the comments for an activity.
     *
     * @alias plus.comments.list
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity to get comments for.
     * @param  {integer=} params.maxResults - The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string=} params.sortOrder - The order in which to sort the list of comments.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/activities/' + params.activityId + '/comments',
        method: 'GET'
      };

      delete params.activityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.moments = {

    /**
     * plus.moments.insert
     *
     * @desc Record a moment representing a user's action such as making a purchase or commenting on a blog.
     *
     * @alias plus.moments.insert
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection to which to write moments.
     * @param  {boolean=} params.debug - Return the moment as written. Should be used only for debugging.
     * @param  {string} params.userId - The ID of the user to record actions for. The only valid values are "me" and the ID of the authenticated user.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId', 'collection']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/people/' + params.userId + '/moments/' + params.collection,
        method: 'POST'
      };

      delete params.collection;

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * plus.moments.list
     *
     * @desc List all of the moments for a particular user.
     *
     * @alias plus.moments.list
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of moments to list.
     * @param  {integer=} params.maxResults - The maximum number of moments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string=} params.targetUrl - Only moments containing this targetUrl will be returned.
     * @param  {string=} params.type - Only moments of this type will be returned.
     * @param  {string} params.userId - The ID of the user to get moments for. The special value "me" can be used to indicate the authenticated user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId', 'collection']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/people/' + params.userId + '/moments/' + params.collection,
        method: 'GET'
      };

      delete params.collection;

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * plus.moments.remove
     *
     * @desc Delete a moment.
     *
     * @alias plus.moments.remove
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the moment to delete.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    remove: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['id']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/moments/' + params.id,
        method: 'DELETE'
      };

      delete params.id;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.people = {

    /**
     * plus.people.get
     *
     * @desc Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
     *
     * @alias plus.people.get
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userId - The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/people/' + params.userId,
        method: 'GET'
      };

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * plus.people.list
     *
     * @desc List all of the people in the specified collection.
     *
     * @alias plus.people.list
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of people to list.
     * @param  {integer=} params.maxResults - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.orderBy - The order to return people in.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string} params.userId - Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId', 'collection']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/people/' + params.userId + '/people/' + params.collection,
        method: 'GET'
      };

      delete params.collection;

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * plus.people.listByActivity
     *
     * @desc List all of the people in the specified collection for a particular activity.
     *
     * @alias plus.people.listByActivity
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity to get the list of people for.
     * @param  {string} params.collection - The collection of people to list.
     * @param  {integer=} params.maxResults - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listByActivity: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId', 'collection']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/activities/' + params.activityId + '/people/' + params.collection,
        method: 'GET'
      };

      delete params.activityId;
      delete params.collection;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * plus.people.search
     *
     * @desc Search all public profiles.
     *
     * @alias plus.people.search
     * @memberOf! plus(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - Specify the preferred language to search with. See search language codes for available values.
     * @param  {integer=} params.maxResults - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
     * @param  {string} params.query - Specify a query string for full text search of public text in all profiles.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['query']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/plus/v1/people',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Plus object
 * @type Plus
 */
module.exports = Plus;