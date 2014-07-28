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
 * Blogger API
 *
 * @classdesc API for access to the data within Blogger.
 * @namespace blogger
 * @version  v3
 * @variation v3
 * @this Blogger
 * @param {object=} options Options for Blogger
 */
function Blogger(options) {

  var self = this;
  this._options = options || {};

  this.blogUserInfos = {

    /**
     * blogger.blogUserInfos.get
     *
     * @desc Gets one blog and user info pair by blogId and userId.
     *
     * @alias blogger.blogUserInfos.get
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the blog to get.
     * @param  {integer=} params.maxPosts - Maximum number of posts to pull back with the blog.
     * @param  {string} params.userId - ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/users/' + params.userId + '/blogs/' + params.blogId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId', 'blogId'],
        pathParams: ['blogId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.blogs = {

    /**
     * blogger.blogs.get
     *
     * @desc Gets one blog by ID.
     *
     * @alias blogger.blogs.get
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the blog to get.
     * @param  {integer=} params.maxPosts - Maximum number of posts to pull back with the blog.
     * @param  {string=} params.view - Access level with which to view the blog. Note that some fields require elevated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.blogs.getByUrl
     *
     * @desc Retrieve a Blog by URL.
     *
     * @alias blogger.blogs.getByUrl
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.url - The URL of the blog to retrieve.
     * @param  {string=} params.view - Access level with which to view the blog. Note that some fields require elevated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getByUrl: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/byurl',
          method: 'GET'
        },
        params: params,
        requiredParams: ['url'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.blogs.listByUser
     *
     * @desc Retrieves a list of blogs, possibly filtered.
     *
     * @alias blogger.blogs.listByUser
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.fetchUserInfo - Whether the response is a list of blogs with per-user information instead of just blogs.
     * @param  {string=} params.role - User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified, defaults to ADMIN and AUTHOR roles.
     * @param  {string=} params.status - Blog statuses to include in the result (default: Live blogs only). Note that ADMIN access is required to view deleted blogs.
     * @param  {string} params.userId - ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     * @param  {string=} params.view - Access level with which to view the blogs. Note that some fields require elevated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listByUser: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/users/' + params.userId + '/blogs',
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

  this.comments = {

    /**
     * blogger.comments.approve
     *
     * @desc Marks a comment as not spam.
     *
     * @alias blogger.comments.approve
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.commentId - The ID of the comment to mark as not spam.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    approve: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId + '/comments/' + params.commentId + '/approve',
          method: 'POST'
        },
        params: params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.comments.delete
     *
     * @desc Delete a comment by ID.
     *
     * @alias blogger.comments.delete
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.commentId - The ID of the comment to delete.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId + '/comments/' + params.commentId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.comments.get
     *
     * @desc Gets one comment by ID.
     *
     * @alias blogger.comments.get
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to containing the comment.
     * @param  {string} params.commentId - The ID of the comment to get.
     * @param  {string} params.postId - ID of the post to fetch posts from.
     * @param  {string=} params.view - Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the parent posts which is in a draft state, or comments that are pending moderation.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId + '/comments/' + params.commentId,
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
     * @desc Retrieves the comments for a post, possibly filtered.
     *
     * @alias blogger.comments.list
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch comments from.
     * @param  {string=} params.endDate - Latest date of comment to fetch, a date-time with RFC 3339 formatting.
     * @param  {boolean=} params.fetchBodies - Whether the body content of the comments is included.
     * @param  {integer=} params.maxResults - Maximum number of comments to include in the result.
     * @param  {string=} params.pageToken - Continuation token if request is paged.
     * @param  {string} params.postId - ID of the post to fetch posts from.
     * @param  {string=} params.startDate - Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
     * @param  {string=} params.status -
     * @param  {string=} params.view - Access level with which to view the returned result. Note that some fields require elevated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId + '/comments',
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
     * blogger.comments.listByBlog
     *
     * @desc Retrieves the comments for a blog, across all posts, possibly filtered.
     *
     * @alias blogger.comments.listByBlog
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch comments from.
     * @param  {string=} params.endDate - Latest date of comment to fetch, a date-time with RFC 3339 formatting.
     * @param  {boolean=} params.fetchBodies - Whether the body content of the comments is included.
     * @param  {integer=} params.maxResults - Maximum number of comments to include in the result.
     * @param  {string=} params.pageToken - Continuation token if request is paged.
     * @param  {string=} params.startDate - Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    listByBlog: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/comments',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.comments.markAsSpam
     *
     * @desc Marks a comment as spam.
     *
     * @alias blogger.comments.markAsSpam
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.commentId - The ID of the comment to mark as spam.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    markAsSpam: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId + '/comments/' + params.commentId + '/spam',
          method: 'POST'
        },
        params: params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.comments.removeContent
     *
     * @desc Removes the content of a comment.
     *
     * @alias blogger.comments.removeContent
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.commentId - The ID of the comment to delete content from.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeContent: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId + '/comments/' + params.commentId + '/removecontent',
          method: 'POST'
        },
        params: params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.pageViews = {

    /**
     * blogger.pageViews.get
     *
     * @desc Retrieve pageview stats for a Blog.
     *
     * @alias blogger.pageViews.get
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the blog to get.
     * @param  {string=} params.range -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/pageviews',
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

  this.pages = {

    /**
     * blogger.pages.delete
     *
     * @desc Delete a page by ID.
     *
     * @alias blogger.pages.delete
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.pageId - The ID of the Page.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/pages/' + params.pageId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.pages.get
     *
     * @desc Gets one blog page by ID.
     *
     * @alias blogger.pages.get
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog containing the page.
     * @param  {string} params.pageId - The ID of the page to get.
     * @param  {string=} params.view -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/pages/' + params.pageId,
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
     * blogger.pages.insert
     *
     * @desc Add a page.
     *
     * @alias blogger.pages.insert
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to add the page to.
     * @param  {boolean=} params.isDraft - Whether to create the page as a draft (default: false).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/pages',
          method: 'POST'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.pages.list
     *
     * @desc Retrieves the pages for a blog, optionally including non-LIVE statuses.
     *
     * @alias blogger.pages.list
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch pages from.
     * @param  {boolean=} params.fetchBodies - Whether to retrieve the Page bodies.
     * @param  {string=} params.status -
     * @param  {string=} params.view - Access level with which to view the returned result. Note that some fields require elevated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/pages',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.pages.patch
     *
     * @desc Update a page. This method supports patch semantics.
     *
     * @alias blogger.pages.patch
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.pageId - The ID of the Page.
     * @param  {boolean=} params.publish - Whether a publish action should be performed when the page is updated (default: false).
     * @param  {boolean=} params.revert - Whether a revert action should be performed when the page is updated (default: false).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/pages/' + params.pageId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.pages.update
     *
     * @desc Update a page.
     *
     * @alias blogger.pages.update
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.pageId - The ID of the Page.
     * @param  {boolean=} params.publish - Whether a publish action should be performed when the page is updated (default: false).
     * @param  {boolean=} params.revert - Whether a revert action should be performed when the page is updated (default: false).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/pages/' + params.pageId,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.postUserInfos = {

    /**
     * blogger.postUserInfos.get
     *
     * @desc Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights, specific to the user.
     *
     * @alias blogger.postUserInfos.get
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the blog.
     * @param  {integer=} params.maxComments - Maximum number of comments to pull back on a post.
     * @param  {string} params.postId - The ID of the post to get.
     * @param  {string} params.userId - ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/users/' + params.userId + '/blogs/' + params.blogId + '/posts/' + params.postId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId', 'blogId', 'postId'],
        pathParams: ['blogId', 'postId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.postUserInfos.list
     *
     * @desc Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user.
     *
     * @alias blogger.postUserInfos.list
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch posts from.
     * @param  {string=} params.endDate - Latest post date to fetch, a date-time with RFC 3339 formatting.
     * @param  {boolean=} params.fetchBodies - Whether the body content of posts is included. Default is false.
     * @param  {string=} params.labels - Comma-separated list of labels to search for.
     * @param  {integer=} params.maxResults - Maximum number of posts to fetch.
     * @param  {string=} params.orderBy - Sort order applied to search results. Default is published.
     * @param  {string=} params.pageToken - Continuation token if the request is paged.
     * @param  {string=} params.startDate - Earliest post date to fetch, a date-time with RFC 3339 formatting.
     * @param  {string=} params.status -
     * @param  {string} params.userId - ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     * @param  {string=} params.view - Access level with which to view the returned result. Note that some fields require elevated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/users/' + params.userId + '/blogs/' + params.blogId + '/posts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId', 'blogId'],
        pathParams: ['blogId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.posts = {

    /**
     * blogger.posts.delete
     *
     * @desc Delete a post by ID.
     *
     * @alias blogger.posts.delete
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.posts.get
     *
     * @desc Get a post by ID.
     *
     * @alias blogger.posts.get
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch the post from.
     * @param  {boolean=} params.fetchBody - Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
     * @param  {boolean=} params.fetchImages - Whether image URL metadata for each post is included (default: false).
     * @param  {integer=} params.maxComments - Maximum number of comments to pull back on a post.
     * @param  {string} params.postId - The ID of the post
     * @param  {string=} params.view - Access level with which to view the returned result. Note that some fields require elevated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId,
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
     * blogger.posts.getByPath
     *
     * @desc Retrieve a Post by Path.
     *
     * @alias blogger.posts.getByPath
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch the post from.
     * @param  {integer=} params.maxComments - Maximum number of comments to pull back on a post.
     * @param  {string} params.path - Path of the Post to retrieve.
     * @param  {string=} params.view - Access level with which to view the returned result. Note that some fields require elevated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getByPath: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/bypath',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId', 'path'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.posts.insert
     *
     * @desc Add a post.
     *
     * @alias blogger.posts.insert
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to add the post to.
     * @param  {boolean=} params.fetchBody - Whether the body content of the post is included with the result (default: true).
     * @param  {boolean=} params.fetchImages - Whether image URL metadata for each post is included in the returned result (default: false).
     * @param  {boolean=} params.isDraft - Whether to create the post as a draft (default: false).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts',
          method: 'POST'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
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
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch posts from.
     * @param  {string=} params.endDate - Latest post date to fetch, a date-time with RFC 3339 formatting.
     * @param  {boolean=} params.fetchBodies - Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
     * @param  {boolean=} params.fetchImages - Whether image URL metadata for each post is included.
     * @param  {string=} params.labels - Comma-separated list of labels to search for.
     * @param  {integer=} params.maxResults - Maximum number of posts to fetch.
     * @param  {string=} params.orderBy - Sort search results
     * @param  {string=} params.pageToken - Continuation token if the request is paged.
     * @param  {string=} params.startDate - Earliest post date to fetch, a date-time with RFC 3339 formatting.
     * @param  {string=} params.status - Statuses to include in the results.
     * @param  {string=} params.view - Access level with which to view the returned result. Note that some fields require escalated access.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.posts.patch
     *
     * @desc Update a post. This method supports patch semantics.
     *
     * @alias blogger.posts.patch
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {boolean=} params.fetchBody - Whether the body content of the post is included with the result (default: true).
     * @param  {boolean=} params.fetchImages - Whether image URL metadata for each post is included in the returned result (default: false).
     * @param  {integer=} params.maxComments - Maximum number of comments to retrieve with the returned post.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {boolean=} params.publish - Whether a publish action should be performed when the post is updated (default: false).
     * @param  {boolean=} params.revert - Whether a revert action should be performed when the post is updated (default: false).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.posts.publish
     *
     * @desc Publishes a draft post, optionally at the specific time of the given publishDate parameter.
     *
     * @alias blogger.posts.publish
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {string=} params.publishDate - Optional date and time to schedule the publishing of the Blog. If no publishDate parameter is given, the post is either published at the a previously saved schedule date (if present), or the current time. If a future date is given, the post will be scheduled to be published.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    publish: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId + '/publish',
          method: 'POST'
        },
        params: params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.posts.revert
     *
     * @desc Revert a published or scheduled post to draft state.
     *
     * @alias blogger.posts.revert
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    revert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId + '/revert',
          method: 'POST'
        },
        params: params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.posts.search
     *
     * @desc Search for a post.
     *
     * @alias blogger.posts.search
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - ID of the blog to fetch the post from.
     * @param  {boolean=} params.fetchBodies - Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
     * @param  {string=} params.orderBy - Sort search results
     * @param  {string} params.q - Query terms to search this blog for matching posts.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/search',
          method: 'GET'
        },
        params: params,
        requiredParams: ['blogId', 'q'],
        pathParams: ['blogId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * blogger.posts.update
     *
     * @desc Update a post.
     *
     * @alias blogger.posts.update
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.blogId - The ID of the Blog.
     * @param  {boolean=} params.fetchBody - Whether the body content of the post is included with the result (default: true).
     * @param  {boolean=} params.fetchImages - Whether image URL metadata for each post is included in the returned result (default: false).
     * @param  {integer=} params.maxComments - Maximum number of comments to retrieve with the returned post.
     * @param  {string} params.postId - The ID of the Post.
     * @param  {boolean=} params.publish - Whether a publish action should be performed when the post is updated (default: false).
     * @param  {boolean=} params.revert - Whether a revert action should be performed when the post is updated (default: false).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/blogs/' + params.blogId + '/posts/' + params.postId,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.users = {

    /**
     * blogger.users.get
     *
     * @desc Gets one user by ID.
     *
     * @alias blogger.users.get
     * @memberOf! blogger(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userId - The ID of the user to get.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/blogger/v3/users/' + params.userId,
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
}

/**
 * Exports Blogger object
 * @type Blogger
 */
module.exports = Blogger;