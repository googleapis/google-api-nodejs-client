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
 * Orkut API
 *
 * @classdesc Lets you manage activities, comments and badges in Orkut. More stuff coming in time.
 * @namespace orkut
 * @version  v2
 * @variation v2
 * @this Orkut
 * @param {object=} options Options for Orkut
 */
function Orkut(options) {

  var self = this;
  this._options = options || {};

  this.acl = {

    /**
     * orkut.acl.delete
     *
     * @desc Excludes an element from the ACL of the activity.
     *
     * @alias orkut.acl.delete
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - ID of the activity.
     * @param  {string} params.userId - ID of the user to be removed from the activity.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/activities/' + params.activityId + '/acl/' + params.userId,
        method: 'DELETE'
      };

      delete params.activityId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.activities = {

    /**
     * orkut.activities.delete
     *
     * @desc Deletes an existing activity, if the access controls allow it.
     *
     * @alias orkut.activities.delete
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - ID of the activity to remove.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/activities/' + params.activityId,
        method: 'DELETE'
      };

      delete params.activityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.activities.list
     *
     * @desc Retrieves a list of activities.
     *
     * @alias orkut.activities.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of activities to list.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {integer=} params.maxResults - The maximum number of activities to include in the response.
     * @param  {string=} params.pageToken - A continuation token that allows pagination.
     * @param  {string} params.userId - The ID of the user whose activities will be listed. Can be me to refer to the viewer (i.e. the authenticated user).
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId', 'collection']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/people/' + params.userId + '/activities/' + params.collection,
        method: 'GET'
      };

      delete params.collection;

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.activityVisibility = {

    /**
     * orkut.activityVisibility.get
     *
     * @desc Gets the visibility of an existing activity.
     *
     * @alias orkut.activityVisibility.get
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - ID of the activity to get the visibility.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/activities/' + params.activityId + '/visibility',
        method: 'GET'
      };

      delete params.activityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.activityVisibility.patch
     *
     * @desc Updates the visibility of an existing activity. This method supports patch semantics.
     *
     * @alias orkut.activityVisibility.patch
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - ID of the activity.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/activities/' + params.activityId + '/visibility',
        method: 'PATCH'
      };

      delete params.activityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.activityVisibility.update
     *
     * @desc Updates the visibility of an existing activity.
     *
     * @alias orkut.activityVisibility.update
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - ID of the activity.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/activities/' + params.activityId + '/visibility',
        method: 'PUT'
      };

      delete params.activityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.badges = {

    /**
     * orkut.badges.get
     *
     * @desc Retrieves a badge from a user.
     *
     * @alias orkut.badges.get
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.badgeId - The ID of the badge that will be retrieved.
     * @param  {string} params.userId - The ID of the user whose badges will be listed. Can be me to refer to caller.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId', 'badgeId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/people/' + params.userId + '/badges/' + params.badgeId,
        method: 'GET'
      };

      delete params.badgeId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.badges.list
     *
     * @desc Retrieves the list of visible badges of a user.
     *
     * @alias orkut.badges.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userId - The id of the user whose badges will be listed. Can be me to refer to caller.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/people/' + params.userId + '/badges',
        method: 'GET'
      };

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.comments = {

    /**
     * orkut.comments.delete
     *
     * @desc Deletes an existing comment.
     *
     * @alias orkut.comments.delete
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - ID of the comment to remove.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/comments/' + params.commentId,
        method: 'DELETE'
      };

      delete params.commentId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.comments.get
     *
     * @desc Retrieves an existing comment.
     *
     * @alias orkut.comments.get
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - ID of the comment to get.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/comments/' + params.commentId,
        method: 'GET'
      };

      delete params.commentId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.comments.insert
     *
     * @desc Inserts a new comment to an activity.
     *
     * @alias orkut.comments.insert
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity to contain the new comment.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/activities/' + params.activityId + '/comments',
        method: 'POST'
      };

      delete params.activityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.comments.list
     *
     * @desc Retrieves a list of comments, possibly filtered.
     *
     * @alias orkut.comments.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity containing the comments.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {integer=} params.maxResults - The maximum number of activities to include in the response.
     * @param  {string=} params.orderBy - Sort search results.
     * @param  {string=} params.pageToken - A continuation token that allows pagination.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['activityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/activities/' + params.activityId + '/comments',
        method: 'GET'
      };

      delete params.activityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communities = {

    /**
     * orkut.communities.get
     *
     * @desc Retrieves the basic information (aka. profile) of a community.
     *
     * @alias orkut.communities.get
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community to get.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId,
        method: 'GET'
      };

      delete params.communityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communities.list
     *
     * @desc Retrieves the list of communities the current user is a member of.
     *
     * @alias orkut.communities.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {integer=} params.maxResults - The maximum number of communities to include in the response.
     * @param  {string=} params.orderBy - How to order the communities by.
     * @param  {string} params.userId - The ID of the user whose communities will be listed. Can be me to refer to caller.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/people/' + params.userId + '/communities',
        method: 'GET'
      };

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communityFollow = {

    /**
     * orkut.communityFollow.delete
     *
     * @desc Removes a user from the followers of a community.
     *
     * @alias orkut.communityFollow.delete
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - ID of the community.
     * @param  {string} params.userId - ID of the user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/followers/' + params.userId,
        method: 'DELETE'
      };

      delete params.communityId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityFollow.insert
     *
     * @desc Adds a user as a follower of a community.
     *
     * @alias orkut.communityFollow.insert
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - ID of the community.
     * @param  {string} params.userId - ID of the user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/followers/' + params.userId,
        method: 'POST'
      };

      delete params.communityId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communityMembers = {

    /**
     * orkut.communityMembers.delete
     *
     * @desc Makes the user leave a community.
     *
     * @alias orkut.communityMembers.delete
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - ID of the community.
     * @param  {string} params.userId - ID of the user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/members/' + params.userId,
        method: 'DELETE'
      };

      delete params.communityId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityMembers.get
     *
     * @desc Retrieves the relationship between a user and a community.
     *
     * @alias orkut.communityMembers.get
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - ID of the community.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {string} params.userId - ID of the user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/members/' + params.userId,
        method: 'GET'
      };

      delete params.communityId;

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityMembers.insert
     *
     * @desc Makes the user join a community.
     *
     * @alias orkut.communityMembers.insert
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - ID of the community.
     * @param  {string} params.userId - ID of the user.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/members/' + params.userId,
        method: 'POST'
      };

      delete params.communityId;
      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityMembers.list
     *
     * @desc Lists members of a community. Use the pagination tokens to retrieve the full list; do not rely on the member count available in the community profile information to know when to stop iterating, as that count may be approximate.
     *
     * @alias orkut.communityMembers.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community whose members will be listed.
     * @param  {boolean=} params.friendsOnly - Whether to list only community members who are friends of the user.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {integer=} params.maxResults - The maximum number of members to include in the response.
     * @param  {string=} params.pageToken - A continuation token that allows pagination.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/members',
        method: 'GET'
      };

      delete params.communityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communityMessages = {

    /**
     * orkut.communityMessages.delete
     *
     * @desc Moves a message of the community to the trash folder.
     *
     * @alias orkut.communityMessages.delete
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community whose message will be moved to the trash folder.
     * @param  {string} params.messageId - The ID of the message to be moved to the trash folder.
     * @param  {string} params.topicId - The ID of the topic whose message will be moved to the trash folder.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'topicId', 'messageId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/topics/' + params.topicId + '/messages/' + params.messageId,
        method: 'DELETE'
      };

      delete params.communityId;
      delete params.messageId;
      delete params.topicId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityMessages.insert
     *
     * @desc Adds a message to a given community topic.
     *
     * @alias orkut.communityMessages.insert
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community the message should be added to.
     * @param  {string} params.topicId - The ID of the topic the message should be added to.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'topicId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/topics/' + params.topicId + '/messages',
        method: 'POST'
      };

      delete params.communityId;
      delete params.topicId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityMessages.list
     *
     * @desc Retrieves the messages of a topic of a community.
     *
     * @alias orkut.communityMessages.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community which messages will be listed.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {integer=} params.maxResults - The maximum number of messages to include in the response.
     * @param  {string=} params.pageToken - A continuation token that allows pagination.
     * @param  {string} params.topicId - The ID of the topic which messages will be listed.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'topicId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/topics/' + params.topicId + '/messages',
        method: 'GET'
      };

      delete params.communityId;

      delete params.topicId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communityPollComments = {

    /**
     * orkut.communityPollComments.insert
     *
     * @desc Adds a comment on a community poll.
     *
     * @alias orkut.communityPollComments.insert
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community whose poll is being commented.
     * @param  {string} params.pollId - The ID of the poll being commented.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'pollId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/polls/' + params.pollId + '/comments',
        method: 'POST'
      };

      delete params.communityId;
      delete params.pollId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityPollComments.list
     *
     * @desc Retrieves the comments of a community poll.
     *
     * @alias orkut.communityPollComments.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community whose poll is having its comments listed.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {integer=} params.maxResults - The maximum number of comments to include in the response.
     * @param  {string=} params.pageToken - A continuation token that allows pagination.
     * @param  {string} params.pollId - The ID of the community whose polls will be listed.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'pollId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/polls/' + params.pollId + '/comments',
        method: 'GET'
      };

      delete params.communityId;

      delete params.pollId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communityPollVotes = {

    /**
     * orkut.communityPollVotes.insert
     *
     * @desc Votes on a community poll.
     *
     * @alias orkut.communityPollVotes.insert
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community whose poll is being voted.
     * @param  {string} params.pollId - The ID of the poll being voted.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'pollId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/polls/' + params.pollId + '/votes',
        method: 'POST'
      };

      delete params.communityId;
      delete params.pollId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communityPolls = {

    /**
     * orkut.communityPolls.get
     *
     * @desc Retrieves one specific poll of a community.
     *
     * @alias orkut.communityPolls.get
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community for whose poll will be retrieved.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {string} params.pollId - The ID of the poll to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'pollId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/polls/' + params.pollId,
        method: 'GET'
      };

      delete params.communityId;

      delete params.pollId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityPolls.list
     *
     * @desc Retrieves the polls of a community.
     *
     * @alias orkut.communityPolls.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community which polls will be listed.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {integer=} params.maxResults - The maximum number of polls to include in the response.
     * @param  {string=} params.pageToken - A continuation token that allows pagination.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/polls',
        method: 'GET'
      };

      delete params.communityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communityRelated = {

    /**
     * orkut.communityRelated.list
     *
     * @desc Retrieves the communities related to another one.
     *
     * @alias orkut.communityRelated.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community whose related communities will be listed.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/related',
        method: 'GET'
      };

      delete params.communityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.communityTopics = {

    /**
     * orkut.communityTopics.delete
     *
     * @desc Moves a topic of the community to the trash folder.
     *
     * @alias orkut.communityTopics.delete
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community whose topic will be moved to the trash folder.
     * @param  {string} params.topicId - The ID of the topic to be moved to the trash folder.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'topicId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/topics/' + params.topicId,
        method: 'DELETE'
      };

      delete params.communityId;
      delete params.topicId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityTopics.get
     *
     * @desc Retrieves a topic of a community.
     *
     * @alias orkut.communityTopics.get
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community whose topic will be retrieved.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {string} params.topicId - The ID of the topic to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId', 'topicId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/topics/' + params.topicId,
        method: 'GET'
      };

      delete params.communityId;

      delete params.topicId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityTopics.insert
     *
     * @desc Adds a topic to a given community.
     *
     * @alias orkut.communityTopics.insert
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community the topic should be added to.
     * @param  {boolean=} params.isShout - Whether this topic is a shout.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/topics',
        method: 'POST'
      };

      delete params.communityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * orkut.communityTopics.list
     *
     * @desc Retrieves the topics of a community.
     *
     * @alias orkut.communityTopics.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.communityId - The ID of the community which topics will be listed.
     * @param  {string=} params.hl - Specifies the interface language (host language) of your user interface.
     * @param  {integer=} params.maxResults - The maximum number of topics to include in the response.
     * @param  {string=} params.pageToken - A continuation token that allows pagination.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['communityId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/communities/' + params.communityId + '/topics',
        method: 'GET'
      };

      delete params.communityId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.counters = {

    /**
     * orkut.counters.list
     *
     * @desc Retrieves the counters of a user.
     *
     * @alias orkut.counters.list
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userId - The ID of the user whose counters will be listed. Can be me to refer to caller.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/people/' + params.userId + '/counters',
        method: 'GET'
      };

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.scraps = {

    /**
     * orkut.scraps.insert
     *
     * @desc Creates a new scrap.
     *
     * @alias orkut.scraps.insert
     * @memberOf! orkut(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/orkut/v2/activities/scraps',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Orkut object
 * @type Orkut
 */
module.exports = Orkut;