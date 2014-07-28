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
 * Google+ Domains API
 *
 * @classdesc The Google+ API enables developers to build on top of the Google+ platform.
 * @namespace plusDomains
 * @version  v1
 * @variation v1
 * @this Plusdomains
 * @param {object=} options Options for Plusdomains
 */
function Plusdomains(options) {

  var self = this;
  this._options = options || {};

  this.activities = {

    /**
     * plusDomains.activities.get
     *
     * @desc Get an activity.
     *
     * @alias plusDomains.activities.get
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity to get.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/activities/' + params.activityId,
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
     * plusDomains.activities.insert
     *
     * @desc Create a new activity for the authenticated user.
     *
     * @alias plusDomains.activities.insert
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.preview - If "true", extract the potential media attachments for a URL. The response will include all possible attachments for a URL, including video, photos, and articles based on the content of the page.
     * @param  {string} params.userId - The ID of the user to create the activity on behalf of. Its value should be "me", to indicate the authenticated user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/people/' + params.userId + '/activities',
          method: 'POST'
        },
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plusDomains.activities.list
     *
     * @desc List all of the activities in the specified collection for a particular user.
     *
     * @alias plusDomains.activities.list
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of activities to list.
     * @param  {integer=} params.maxResults - The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string} params.userId - The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/people/' + params.userId + '/activities/' + params.collection,
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.audiences = {

    /**
     * plusDomains.audiences.list
     *
     * @desc List all of the audiences to which a user can share.
     *
     * @alias plusDomains.audiences.list
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string} params.userId - The ID of the user to get audiences for. The special value "me" can be used to indicate the authenticated user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/people/' + params.userId + '/audiences',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.circles = {

    /**
     * plusDomains.circles.addPeople
     *
     * @desc Add a person to a circle. Google+ limits certain circle operations, including the number of circle adds. Learn More.
     *
     * @alias plusDomains.circles.addPeople
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.circleId - The ID of the circle to add the person to.
     * @param  {string=} params.email - Email of the people to add to the circle. Optional, can be repeated.
     * @param  {string=} params.userId - IDs of the people to add to the circle. Optional, can be repeated.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addPeople: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/circles/' + params.circleId + '/people',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['circleId'],
        pathParams: ['circleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plusDomains.circles.get
     *
     * @desc Get a circle.
     *
     * @alias plusDomains.circles.get
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.circleId - The ID of the circle to get.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/circles/' + params.circleId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['circleId'],
        pathParams: ['circleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plusDomains.circles.insert
     *
     * @desc Create a new circle for the authenticated user.
     *
     * @alias plusDomains.circles.insert
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userId - The ID of the user to create the circle on behalf of. The value "me" can be used to indicate the authenticated user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/people/' + params.userId + '/circles',
          method: 'POST'
        },
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plusDomains.circles.list
     *
     * @desc List all of the circles for a user.
     *
     * @alias plusDomains.circles.list
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string} params.userId - The ID of the user to get circles for. The special value "me" can be used to indicate the authenticated user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/people/' + params.userId + '/circles',
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
     * plusDomains.circles.patch
     *
     * @desc Update a circle's description. This method supports patch semantics.
     *
     * @alias plusDomains.circles.patch
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.circleId - The ID of the circle to update.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/circles/' + params.circleId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['circleId'],
        pathParams: ['circleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plusDomains.circles.remove
     *
     * @desc Delete a circle.
     *
     * @alias plusDomains.circles.remove
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.circleId - The ID of the circle to delete.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    remove: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/circles/' + params.circleId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['circleId'],
        pathParams: ['circleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plusDomains.circles.removePeople
     *
     * @desc Remove a person from a circle.
     *
     * @alias plusDomains.circles.removePeople
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.circleId - The ID of the circle to remove the person from.
     * @param  {string=} params.email - Email of the people to add to the circle. Optional, can be repeated.
     * @param  {string=} params.userId - IDs of the people to remove from the circle. Optional, can be repeated.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removePeople: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/circles/' + params.circleId + '/people',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['circleId'],
        pathParams: ['circleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plusDomains.circles.update
     *
     * @desc Update a circle's description.
     *
     * @alias plusDomains.circles.update
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.circleId - The ID of the circle to update.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/circles/' + params.circleId,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['circleId'],
        pathParams: ['circleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.comments = {

    /**
     * plusDomains.comments.get
     *
     * @desc Get a comment.
     *
     * @alias plusDomains.comments.get
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.commentId - The ID of the comment to get.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/comments/' + params.commentId,
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
     * plusDomains.comments.insert
     *
     * @desc Create a new comment in reply to an activity.
     *
     * @alias plusDomains.comments.insert
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity to reply to.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/activities/' + params.activityId + '/comments',
          method: 'POST'
        },
        params: params,
        requiredParams: ['activityId'],
        pathParams: ['activityId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * plusDomains.comments.list
     *
     * @desc List all of the comments for an activity.
     *
     * @alias plusDomains.comments.list
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity to get comments for.
     * @param  {integer=} params.maxResults - The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string=} params.sortOrder - The order in which to sort the list of comments.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/activities/' + params.activityId + '/comments',
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

  this.media = {

    /**
     * plusDomains.media.insert
     *
     * @desc Add a new media item to an album. The current upload size limitations are 36MB for a photo and 1GB for a video. Uploads do not count against quota if photos are less than 2048 pixels on their longest side or videos are less than 15 minutes in length.
     *
     * @alias plusDomains.media.insert
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection -
     * @param  {string} params.userId - The ID of the user to create the activity on behalf of.
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/people/' + params.userId + '/media/' + params.collection,
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/plusDomains/v1/people/' + params.userId + '/media/' + params.collection,
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.people = {

    /**
     * plusDomains.people.get
     *
     * @desc Get a person's profile.
     *
     * @alias plusDomains.people.get
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userId - The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/people/' + params.userId,
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
     * plusDomains.people.list
     *
     * @desc List all of the people in the specified collection.
     *
     * @alias plusDomains.people.list
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collection - The collection of people to list.
     * @param  {integer=} params.maxResults - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.orderBy - The order to return people in.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string} params.userId - Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/people/' + params.userId + '/people/' + params.collection,
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
     * plusDomains.people.listByActivity
     *
     * @desc List all of the people in the specified collection for a particular activity.
     *
     * @alias plusDomains.people.listByActivity
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.activityId - The ID of the activity to get the list of people for.
     * @param  {string} params.collection - The collection of people to list.
     * @param  {integer=} params.maxResults - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listByActivity: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/activities/' + params.activityId + '/people/' + params.collection,
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
     * plusDomains.people.listByCircle
     *
     * @desc List all of the people who are members of a circle.
     *
     * @alias plusDomains.people.listByCircle
     * @memberOf! plusDomains(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.circleId - The ID of the circle to get the members of.
     * @param  {integer=} params.maxResults - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listByCircle: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/plusDomains/v1/circles/' + params.circleId + '/people',
          method: 'GET'
        },
        params: params,
        requiredParams: ['circleId'],
        pathParams: ['circleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Plusdomains object
 * @type Plusdomains
 */
module.exports = Plusdomains;