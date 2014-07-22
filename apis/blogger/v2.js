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
 * Blogger API
 *
 * @classdesc API for access to the data within Blogger.
 * @namespace blogger
 * @version  v2
 * @variation v2
 * @this Blogger
 * @param {object=} options Options for Blogger
 */
function Blogger(options) {

  var self = this;
  this._options = options || {};

  this.blogs = {

    /**
     * blogger.blogs.get
     *
     * @desc Gets one blog by id.
     *
     * @alias blogger.blogs.get
     * @memberOf! blogger(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the blog to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['blogId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/blogger/v2/blogs/' + params.blogId,
        method: 'GET'
      };

      delete params.blogId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.comments = {

    /**
     * blogger.comments.get
     *
     * @desc Gets one comment by id.
     *
     * @alias blogger.comments.get
     * @memberOf! blogger(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to containing the comment.
     * @param  {string} params.commentId - The ID of the comment to get.
     * @param  {string} params.postId - ID of the post to fetch posts from.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['blogId', 'postId', 'commentId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/blogger/v2/blogs/' + params.blogId + '/posts/' + params.postId + '/comments/' + params.commentId,
        method: 'GET'
      };

      delete params.blogId;
      delete params.commentId;
      delete params.postId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * blogger.comments.list
     *
     * @desc Retrieves the comments for a blog, possibly filtered.
     *
     * @alias blogger.comments.list
     * @memberOf! blogger(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch comments from.
     * @param  {boolean=} params.fetchBodies - Whether the body content of the comments is included.
     * @param  {integer=} params.maxResults - Maximum number of comments to include in the result.
     * @param  {string=} params.pageToken - Continuation token if request is paged.
     * @param  {string} params.postId - ID of the post to fetch posts from.
     * @param  {string=} params.startDate - Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['blogId', 'postId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/blogger/v2/blogs/' + params.blogId + '/posts/' + params.postId + '/comments',
        method: 'GET'
      };

      delete params.blogId;

      delete params.postId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.pages = {

    /**
     * blogger.pages.get
     *
     * @desc Gets one blog page by id.
     *
     * @alias blogger.pages.get
     * @memberOf! blogger(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog containing the page.
     * @param  {string} params.pageId - The ID of the page to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['blogId', 'pageId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/blogger/v2/blogs/' + params.blogId + '/pages/' + params.pageId,
        method: 'GET'
      };

      delete params.blogId;
      delete params.pageId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * blogger.pages.list
     *
     * @desc Retrieves pages for a blog, possibly filtered.
     *
     * @alias blogger.pages.list
     * @memberOf! blogger(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch pages from.
     * @param  {boolean=} params.fetchBodies - Whether to retrieve the Page bodies.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['blogId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/blogger/v2/blogs/' + params.blogId + '/pages',
        method: 'GET'
      };

      delete params.blogId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.posts = {

    /**
     * blogger.posts.get
     *
     * @desc Get a post by id.
     *
     * @alias blogger.posts.get
     * @memberOf! blogger(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch the post from.
     * @param  {string} params.postId - The ID of the post
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['blogId', 'postId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/blogger/v2/blogs/' + params.blogId + '/posts/' + params.postId,
        method: 'GET'
      };

      delete params.blogId;
      delete params.postId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * blogger.posts.list
     *
     * @desc Retrieves a list of posts, possibly filtered.
     *
     * @alias blogger.posts.list
     * @memberOf! blogger(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch posts from.
     * @param  {boolean=} params.fetchBodies - Whether the body content of posts is included.
     * @param  {integer=} params.maxResults - Maximum number of posts to fetch.
     * @param  {string=} params.pageToken - Continuation token if the request is paged.
     * @param  {string=} params.startDate - Earliest post date to fetch, a date-time with RFC 3339 formatting.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['blogId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/blogger/v2/blogs/' + params.blogId + '/posts',
        method: 'GET'
      };

      delete params.blogId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.users = {

    /**
     * blogger.users.get
     *
     * @desc Gets one user by id.
     *
     * @alias blogger.users.get
     * @memberOf! blogger(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userId - The ID of the user to get.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/blogger/v2/users/' + params.userId,
        method: 'GET'
      };

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Blogger object
 * @type Blogger
 */
module.exports = Blogger;