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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v2/blogs/{blogId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v2/blogs/{blogId}/posts/{postId}/comments/{commentId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v2/blogs/{blogId}/posts/{postId}/comments',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v2/blogs/{blogId}/pages/{pageId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v2/blogs/{blogId}/pages',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v2/blogs/{blogId}/posts/{postId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v2/blogs/{blogId}/posts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v2/users/{userId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    blogs: {

      /**
       * blogger.users.blogs.list
       *
       * @desc Retrieves a list of blogs, possibly filtered.
       *
       * @alias blogger.users.blogs.list
       * @memberOf! blogger(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.userId - ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/blogger/v2/users/{userId}/blogs',
            method: 'GET'
          },
          params: params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Blogger object
 * @type Blogger
 */
module.exports = Blogger;