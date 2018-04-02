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

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Blogger API
 *
 * API for access to the data within Blogger.
 *
 * @example
 * const google = require('googleapis');
 * const blogger = google.blogger('v3');
 *
 * @namespace blogger
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Blogger
 */
export class Blogger {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  blogs: Resource$Blogs;
  blogUserInfos: Resource$Bloguserinfos;
  comments: Resource$Comments;
  pages: Resource$Pages;
  pageViews: Resource$Pageviews;
  posts: Resource$Posts;
  postUserInfos: Resource$Postuserinfos;
  users: Resource$Users;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.blogs = new Resource$Blogs(this);
    this.blogUserInfos = new Resource$Bloguserinfos(this);
    this.comments = new Resource$Comments(this);
    this.pages = new Resource$Pages(this);
    this.pageViews = new Resource$Pageviews(this);
    this.posts = new Resource$Posts(this);
    this.postUserInfos = new Resource$Postuserinfos(this);
    this.users = new Resource$Users(this);
  }

  getRoot() {
    return this.root;
  }
}

export interface Schema$Blog {
  /**
   * The JSON custom meta-data for the Blog
   */
  customMetaData: string;
  /**
   * The description of this blog. This is displayed underneath the title.
   */
  description: string;
  /**
   * The identifier for this resource.
   */
  id: string;
  /**
   * The kind of this entry. Always blogger#blog
   */
  kind: string;
  /**
   * The locale this Blog is set to.
   */
  locale: any;
  /**
   * The name of this blog. This is displayed as the title.
   */
  name: string;
  /**
   * The container of pages in this blog.
   */
  pages: any;
  /**
   * The container of posts in this blog.
   */
  posts: any;
  /**
   * RFC 3339 date-time when this blog was published.
   */
  published: string;
  /**
   * The API REST URL to fetch this resource from.
   */
  selfLink: string;
  /**
   * The status of the blog.
   */
  status: string;
  /**
   * RFC 3339 date-time when this blog was last updated.
   */
  updated: string;
  /**
   * The URL where this blog is published.
   */
  url: string;
}
export interface Schema$BlogList {
  /**
   * Admin level list of blog per-user information
   */
  blogUserInfos: Schema$BlogUserInfo[];
  /**
   * The list of Blogs this user has Authorship or Admin rights over.
   */
  items: Schema$Blog[];
  /**
   * The kind of this entity. Always blogger#blogList
   */
  kind: string;
}
export interface Schema$BlogPerUserInfo {
  /**
   * ID of the Blog resource
   */
  blogId: string;
  /**
   * True if the user has Admin level access to the blog.
   */
  hasAdminAccess: boolean;
  /**
   * The kind of this entity. Always blogger#blogPerUserInfo
   */
  kind: string;
  /**
   * The Photo Album Key for the user when adding photos to the blog
   */
  photosAlbumKey: string;
  /**
   * Access permissions that the user has for the blog (ADMIN, AUTHOR, or
   * READER).
   */
  role: string;
  /**
   * ID of the User
   */
  userId: string;
}
export interface Schema$BlogUserInfo {
  /**
   * The Blog resource.
   */
  blog: Schema$Blog;
  /**
   * Information about a User for the Blog.
   */
  blog_user_info: Schema$BlogPerUserInfo;
  /**
   * The kind of this entity. Always blogger#blogUserInfo
   */
  kind: string;
}
export interface Schema$Comment {
  /**
   * The author of this Comment.
   */
  author: any;
  /**
   * Data about the blog containing this comment.
   */
  blog: any;
  /**
   * The actual content of the comment. May include HTML markup.
   */
  content: string;
  /**
   * The identifier for this resource.
   */
  id: string;
  /**
   * Data about the comment this is in reply to.
   */
  inReplyTo: any;
  /**
   * The kind of this entry. Always blogger#comment
   */
  kind: string;
  /**
   * Data about the post containing this comment.
   */
  post: any;
  /**
   * RFC 3339 date-time when this comment was published.
   */
  published: string;
  /**
   * The API REST URL to fetch this resource from.
   */
  selfLink: string;
  /**
   * The status of the comment (only populated for admin users)
   */
  status: string;
  /**
   * RFC 3339 date-time when this comment was last updated.
   */
  updated: string;
}
export interface Schema$CommentList {
  /**
   * Etag of the response.
   */
  etag: string;
  /**
   * The List of Comments for a Post.
   */
  items: Schema$Comment[];
  /**
   * The kind of this entry. Always blogger#commentList
   */
  kind: string;
  /**
   * Pagination token to fetch the next page, if one exists.
   */
  nextPageToken: string;
  /**
   * Pagination token to fetch the previous page, if one exists.
   */
  prevPageToken: string;
}
export interface Schema$Page {
  /**
   * The author of this Page.
   */
  author: any;
  /**
   * Data about the blog containing this Page.
   */
  blog: any;
  /**
   * The body content of this Page, in HTML.
   */
  content: string;
  /**
   * Etag of the resource.
   */
  etag: string;
  /**
   * The identifier for this resource.
   */
  id: string;
  /**
   * The kind of this entity. Always blogger#page
   */
  kind: string;
  /**
   * RFC 3339 date-time when this Page was published.
   */
  published: string;
  /**
   * The API REST URL to fetch this resource from.
   */
  selfLink: string;
  /**
   * The status of the page for admin resources (either LIVE or DRAFT).
   */
  status: string;
  /**
   * The title of this entity. This is the name displayed in the Admin user
   * interface.
   */
  title: string;
  /**
   * RFC 3339 date-time when this Page was last updated.
   */
  updated: string;
  /**
   * The URL that this Page is displayed at.
   */
  url: string;
}
export interface Schema$PageList {
  /**
   * Etag of the response.
   */
  etag: string;
  /**
   * The list of Pages for a Blog.
   */
  items: Schema$Page[];
  /**
   * The kind of this entity. Always blogger#pageList
   */
  kind: string;
  /**
   * Pagination token to fetch the next page, if one exists.
   */
  nextPageToken: string;
}
export interface Schema$Pageviews {
  /**
   * Blog Id
   */
  blogId: string;
  /**
   * The container of posts in this blog.
   */
  counts: any[];
  /**
   * The kind of this entry. Always blogger#page_views
   */
  kind: string;
}
export interface Schema$Post {
  /**
   * The author of this Post.
   */
  author: any;
  /**
   * Data about the blog containing this Post.
   */
  blog: any;
  /**
   * The content of the Post. May contain HTML markup.
   */
  content: string;
  /**
   * The JSON meta-data for the Post.
   */
  customMetaData: string;
  /**
   * Etag of the resource.
   */
  etag: string;
  /**
   * The identifier of this Post.
   */
  id: string;
  /**
   * Display image for the Post.
   */
  images: any[];
  /**
   * The kind of this entity. Always blogger#post
   */
  kind: string;
  /**
   * The list of labels this Post was tagged with.
   */
  labels: string[];
  /**
   * The location for geotagged posts.
   */
  location: any;
  /**
   * RFC 3339 date-time when this Post was published.
   */
  published: string;
  /**
   * Comment control and display setting for readers of this post.
   */
  readerComments: string;
  /**
   * The container of comments on this Post.
   */
  replies: any;
  /**
   * The API REST URL to fetch this resource from.
   */
  selfLink: string;
  /**
   * Status of the post. Only set for admin-level requests
   */
  status: string;
  /**
   * The title of the Post.
   */
  title: string;
  /**
   * The title link URL, similar to atom&#39;s related link.
   */
  titleLink: string;
  /**
   * RFC 3339 date-time when this Post was last updated.
   */
  updated: string;
  /**
   * The URL where this Post is displayed.
   */
  url: string;
}
export interface Schema$PostList {
  /**
   * Etag of the response.
   */
  etag: string;
  /**
   * The list of Posts for this Blog.
   */
  items: Schema$Post[];
  /**
   * The kind of this entity. Always blogger#postList
   */
  kind: string;
  /**
   * Pagination token to fetch the next page, if one exists.
   */
  nextPageToken: string;
}
export interface Schema$PostPerUserInfo {
  /**
   * ID of the Blog that the post resource belongs to.
   */
  blogId: string;
  /**
   * True if the user has Author level access to the post.
   */
  hasEditAccess: boolean;
  /**
   * The kind of this entity. Always blogger#postPerUserInfo
   */
  kind: string;
  /**
   * ID of the Post resource.
   */
  postId: string;
  /**
   * ID of the User.
   */
  userId: string;
}
export interface Schema$PostUserInfo {
  /**
   * The kind of this entity. Always blogger#postUserInfo
   */
  kind: string;
  /**
   * The Post resource.
   */
  post: Schema$Post;
  /**
   * Information about a User for the Post.
   */
  post_user_info: Schema$PostPerUserInfo;
}
export interface Schema$PostUserInfosList {
  /**
   * The list of Posts with User information for the post, for this Blog.
   */
  items: Schema$PostUserInfo[];
  /**
   * The kind of this entity. Always blogger#postList
   */
  kind: string;
  /**
   * Pagination token to fetch the next page, if one exists.
   */
  nextPageToken: string;
}
export interface Schema$User {
  /**
   * Profile summary information.
   */
  about: string;
  /**
   * The container of blogs for this user.
   */
  blogs: any;
  /**
   * The timestamp of when this profile was created, in seconds since epoch.
   */
  created: string;
  /**
   * The display name.
   */
  displayName: string;
  /**
   * The identifier for this User.
   */
  id: string;
  /**
   * The kind of this entity. Always blogger#user
   */
  kind: string;
  /**
   * This user&#39;s locale
   */
  locale: any;
  /**
   * The API REST URL to fetch this resource from.
   */
  selfLink: string;
  /**
   * The user&#39;s profile page.
   */
  url: string;
}

export class Resource$Blogs {
  root: Blogger;
  constructor(root: Blogger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * blogger.blogs.get
   * @desc Gets one blog by ID.
   * @alias blogger.blogs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the blog to get.
   * @param {integer=} params.maxPosts Maximum number of posts to pull back with the blog.
   * @param {string=} params.view Access level with which to view the blog. Note that some fields require elevated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Blog>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Blog>,
      callback?: BodyResponseCallback<Schema$Blog>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Blog>,
      callback?: BodyResponseCallback<Schema$Blog>):
      void|AxiosPromise<Schema$Blog> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Blog>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Blog>(parameters);
    }
  }


  /**
   * blogger.blogs.getByUrl
   * @desc Retrieve a Blog by URL.
   * @alias blogger.blogs.getByUrl
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.url The URL of the blog to retrieve.
   * @param {string=} params.view Access level with which to view the blog. Note that some fields require elevated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getByUrl(params?: any, options?: MethodOptions): AxiosPromise<Schema$Blog>;
  getByUrl(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Blog>,
      callback?: BodyResponseCallback<Schema$Blog>): void;
  getByUrl(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Blog>,
      callback?: BodyResponseCallback<Schema$Blog>):
      void|AxiosPromise<Schema$Blog> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/byurl')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['url'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Blog>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Blog>(parameters);
    }
  }


  /**
   * blogger.blogs.listByUser
   * @desc Retrieves a list of blogs, possibly filtered.
   * @alias blogger.blogs.listByUser
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.fetchUserInfo Whether the response is a list of blogs with per-user information instead of just blogs.
   * @param {string=} params.role User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified, defaults to ADMIN and AUTHOR roles.
   * @param {string=} params.status Blog statuses to include in the result (default: Live blogs only). Note that ADMIN access is required to view deleted blogs.
   * @param {string} params.userId ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
   * @param {string=} params.view Access level with which to view the blogs. Note that some fields require elevated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  listByUser(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$BlogList>;
  listByUser(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BlogList>,
      callback?: BodyResponseCallback<Schema$BlogList>): void;
  listByUser(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BlogList>,
      callback?: BodyResponseCallback<Schema$BlogList>):
      void|AxiosPromise<Schema$BlogList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/users/{userId}/blogs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$BlogList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$BlogList>(parameters);
    }
  }
}

export class Resource$Bloguserinfos {
  root: Blogger;
  constructor(root: Blogger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * blogger.blogUserInfos.get
   * @desc Gets one blog and user info pair by blogId and userId.
   * @alias blogger.blogUserInfos.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the blog to get.
   * @param {integer=} params.maxPosts Maximum number of posts to pull back with the blog.
   * @param {string} params.userId ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$BlogUserInfo>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BlogUserInfo>,
      callback?: BodyResponseCallback<Schema$BlogUserInfo>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BlogUserInfo>,
      callback?: BodyResponseCallback<Schema$BlogUserInfo>):
      void|AxiosPromise<Schema$BlogUserInfo> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/users/{userId}/blogs/{blogId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'blogId'],
      pathParams: ['blogId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$BlogUserInfo>(parameters, callback);
    } else {
      return createAPIRequest<Schema$BlogUserInfo>(parameters);
    }
  }
}

export class Resource$Comments {
  root: Blogger;
  constructor(root: Blogger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * blogger.comments.approve
   * @desc Marks a comment as not spam.
   * @alias blogger.comments.approve
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.commentId The ID of the comment to mark as not spam.
   * @param {string} params.postId The ID of the Post.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  approve(params?: any, options?: MethodOptions): AxiosPromise<Schema$Comment>;
  approve(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>): void;
  approve(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>):
      void|AxiosPromise<Schema$Comment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId', 'commentId'],
      pathParams: ['blogId', 'commentId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Comment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Comment>(parameters);
    }
  }


  /**
   * blogger.comments.delete
   * @desc Delete a comment by ID.
   * @alias blogger.comments.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.commentId The ID of the comment to delete.
   * @param {string} params.postId The ID of the Post.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId', 'commentId'],
      pathParams: ['blogId', 'commentId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * blogger.comments.get
   * @desc Gets one comment by ID.
   * @alias blogger.comments.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to containing the comment.
   * @param {string} params.commentId The ID of the comment to get.
   * @param {string} params.postId ID of the post to fetch posts from.
   * @param {string=} params.view Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the parent posts which is in a draft state, or comments that are pending moderation.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Comment>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>):
      void|AxiosPromise<Schema$Comment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId', 'commentId'],
      pathParams: ['blogId', 'commentId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Comment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Comment>(parameters);
    }
  }


  /**
   * blogger.comments.list
   * @desc Retrieves the comments for a post, possibly filtered.
   * @alias blogger.comments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to fetch comments from.
   * @param {string=} params.endDate Latest date of comment to fetch, a date-time with RFC 3339 formatting.
   * @param {boolean=} params.fetchBodies Whether the body content of the comments is included.
   * @param {integer=} params.maxResults Maximum number of comments to include in the result.
   * @param {string=} params.pageToken Continuation token if request is paged.
   * @param {string} params.postId ID of the post to fetch posts from.
   * @param {string=} params.startDate Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
   * @param {string=} params.status
   * @param {string=} params.view Access level with which to view the returned result. Note that some fields require elevated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$CommentList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentList>,
      callback?: BodyResponseCallback<Schema$CommentList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentList>,
      callback?: BodyResponseCallback<Schema$CommentList>):
      void|AxiosPromise<Schema$CommentList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}/comments')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId'],
      pathParams: ['blogId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CommentList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CommentList>(parameters);
    }
  }


  /**
   * blogger.comments.listByBlog
   * @desc Retrieves the comments for a blog, across all posts, possibly
   * filtered.
   * @alias blogger.comments.listByBlog
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to fetch comments from.
   * @param {string=} params.endDate Latest date of comment to fetch, a date-time with RFC 3339 formatting.
   * @param {boolean=} params.fetchBodies Whether the body content of the comments is included.
   * @param {integer=} params.maxResults Maximum number of comments to include in the result.
   * @param {string=} params.pageToken Continuation token if request is paged.
   * @param {string=} params.startDate Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
   * @param {string=} params.status
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  listByBlog(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CommentList>;
  listByBlog(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentList>,
      callback?: BodyResponseCallback<Schema$CommentList>): void;
  listByBlog(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CommentList>,
      callback?: BodyResponseCallback<Schema$CommentList>):
      void|AxiosPromise<Schema$CommentList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/comments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CommentList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CommentList>(parameters);
    }
  }


  /**
   * blogger.comments.markAsSpam
   * @desc Marks a comment as spam.
   * @alias blogger.comments.markAsSpam
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.commentId The ID of the comment to mark as spam.
   * @param {string} params.postId The ID of the Post.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  markAsSpam(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Comment>;
  markAsSpam(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>): void;
  markAsSpam(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>):
      void|AxiosPromise<Schema$Comment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId', 'commentId'],
      pathParams: ['blogId', 'commentId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Comment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Comment>(parameters);
    }
  }


  /**
   * blogger.comments.removeContent
   * @desc Removes the content of a comment.
   * @alias blogger.comments.removeContent
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.commentId The ID of the comment to delete content from.
   * @param {string} params.postId The ID of the Post.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  removeContent(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Comment>;
  removeContent(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>): void;
  removeContent(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>):
      void|AxiosPromise<Schema$Comment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId', 'commentId'],
      pathParams: ['blogId', 'commentId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Comment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Comment>(parameters);
    }
  }
}

export class Resource$Pages {
  root: Blogger;
  constructor(root: Blogger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * blogger.pages.delete
   * @desc Delete a page by ID.
   * @alias blogger.pages.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.pageId The ID of the Page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['blogId', 'pageId'],
      pathParams: ['blogId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * blogger.pages.get
   * @desc Gets one blog page by ID.
   * @alias blogger.pages.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog containing the page.
   * @param {string} params.pageId The ID of the page to get.
   * @param {string=} params.view
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Page>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>):
      void|AxiosPromise<Schema$Page> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId', 'pageId'],
      pathParams: ['blogId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Page>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Page>(parameters);
    }
  }


  /**
   * blogger.pages.insert
   * @desc Add a page.
   * @alias blogger.pages.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to add the page to.
   * @param {boolean=} params.isDraft Whether to create the page as a draft (default: false).
   * @param {().Page} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Page>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>):
      void|AxiosPromise<Schema$Page> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Page>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Page>(parameters);
    }
  }


  /**
   * blogger.pages.list
   * @desc Retrieves the pages for a blog, optionally including non-LIVE
   * statuses.
   * @alias blogger.pages.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to fetch Pages from.
   * @param {boolean=} params.fetchBodies Whether to retrieve the Page bodies.
   * @param {integer=} params.maxResults Maximum number of Pages to fetch.
   * @param {string=} params.pageToken Continuation token if the request is paged.
   * @param {string=} params.status
   * @param {string=} params.view Access level with which to view the returned result. Note that some fields require elevated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$PageList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PageList>,
      callback?: BodyResponseCallback<Schema$PageList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PageList>,
      callback?: BodyResponseCallback<Schema$PageList>):
      void|AxiosPromise<Schema$PageList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PageList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PageList>(parameters);
    }
  }


  /**
   * blogger.pages.patch
   * @desc Update a page. This method supports patch semantics.
   * @alias blogger.pages.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.pageId The ID of the Page.
   * @param {boolean=} params.publish Whether a publish action should be performed when the page is updated (default: false).
   * @param {boolean=} params.revert Whether a revert action should be performed when the page is updated (default: false).
   * @param {().Page} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Page>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>):
      void|AxiosPromise<Schema$Page> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['blogId', 'pageId'],
      pathParams: ['blogId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Page>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Page>(parameters);
    }
  }


  /**
   * blogger.pages.publish
   * @desc Publishes a draft page.
   * @alias blogger.pages.publish
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the blog.
   * @param {string} params.pageId The ID of the page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  publish(params?: any, options?: MethodOptions): AxiosPromise<Schema$Page>;
  publish(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>): void;
  publish(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>):
      void|AxiosPromise<Schema$Page> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}/publish')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId', 'pageId'],
      pathParams: ['blogId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Page>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Page>(parameters);
    }
  }


  /**
   * blogger.pages.revert
   * @desc Revert a published or scheduled page to draft state.
   * @alias blogger.pages.revert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the blog.
   * @param {string} params.pageId The ID of the page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Page>;
  revert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>): void;
  revert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>):
      void|AxiosPromise<Schema$Page> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}/revert')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId', 'pageId'],
      pathParams: ['blogId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Page>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Page>(parameters);
    }
  }


  /**
   * blogger.pages.update
   * @desc Update a page.
   * @alias blogger.pages.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.pageId The ID of the Page.
   * @param {boolean=} params.publish Whether a publish action should be performed when the page is updated (default: false).
   * @param {boolean=} params.revert Whether a revert action should be performed when the page is updated (default: false).
   * @param {().Page} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Page>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>):
      void|AxiosPromise<Schema$Page> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['blogId', 'pageId'],
      pathParams: ['blogId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Page>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Page>(parameters);
    }
  }
}

export class Resource$Pageviews {
  root: Blogger;
  constructor(root: Blogger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * blogger.pageViews.get
   * @desc Retrieve pageview stats for a Blog.
   * @alias blogger.pageViews.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the blog to get.
   * @param {string=} params.range
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Pageviews>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Pageviews>,
      callback?: BodyResponseCallback<Schema$Pageviews>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Pageviews>,
      callback?: BodyResponseCallback<Schema$Pageviews>):
      void|AxiosPromise<Schema$Pageviews> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pageviews')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Pageviews>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Pageviews>(parameters);
    }
  }
}

export class Resource$Posts {
  root: Blogger;
  constructor(root: Blogger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * blogger.posts.delete
   * @desc Delete a post by ID.
   * @alias blogger.posts.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.postId The ID of the Post.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId'],
      pathParams: ['blogId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * blogger.posts.get
   * @desc Get a post by ID.
   * @alias blogger.posts.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to fetch the post from.
   * @param {boolean=} params.fetchBody Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
   * @param {boolean=} params.fetchImages Whether image URL metadata for each post is included (default: false).
   * @param {integer=} params.maxComments Maximum number of comments to pull back on a post.
   * @param {string} params.postId The ID of the post
   * @param {string=} params.view Access level with which to view the returned result. Note that some fields require elevated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Post>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>):
      void|AxiosPromise<Schema$Post> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId'],
      pathParams: ['blogId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Post>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Post>(parameters);
    }
  }


  /**
   * blogger.posts.getByPath
   * @desc Retrieve a Post by Path.
   * @alias blogger.posts.getByPath
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to fetch the post from.
   * @param {integer=} params.maxComments Maximum number of comments to pull back on a post.
   * @param {string} params.path Path of the Post to retrieve.
   * @param {string=} params.view Access level with which to view the returned result. Note that some fields require elevated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getByPath(params?: any, options?: MethodOptions): AxiosPromise<Schema$Post>;
  getByPath(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>): void;
  getByPath(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>):
      void|AxiosPromise<Schema$Post> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/bypath')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId', 'path'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Post>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Post>(parameters);
    }
  }


  /**
   * blogger.posts.insert
   * @desc Add a post.
   * @alias blogger.posts.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to add the post to.
   * @param {boolean=} params.fetchBody Whether the body content of the post is included with the result (default: true).
   * @param {boolean=} params.fetchImages Whether image URL metadata for each post is included in the returned result (default: false).
   * @param {boolean=} params.isDraft Whether to create the post as a draft (default: false).
   * @param {().Post} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Post>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>):
      void|AxiosPromise<Schema$Post> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Post>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Post>(parameters);
    }
  }


  /**
   * blogger.posts.list
   * @desc Retrieves a list of posts, possibly filtered.
   * @alias blogger.posts.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to fetch posts from.
   * @param {string=} params.endDate Latest post date to fetch, a date-time with RFC 3339 formatting.
   * @param {boolean=} params.fetchBodies Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
   * @param {boolean=} params.fetchImages Whether image URL metadata for each post is included.
   * @param {string=} params.labels Comma-separated list of labels to search for.
   * @param {integer=} params.maxResults Maximum number of posts to fetch.
   * @param {string=} params.orderBy Sort search results
   * @param {string=} params.pageToken Continuation token if the request is paged.
   * @param {string=} params.startDate Earliest post date to fetch, a date-time with RFC 3339 formatting.
   * @param {string=} params.status Statuses to include in the results.
   * @param {string=} params.view Access level with which to view the returned result. Note that some fields require escalated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$PostList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PostList>,
      callback?: BodyResponseCallback<Schema$PostList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PostList>,
      callback?: BodyResponseCallback<Schema$PostList>):
      void|AxiosPromise<Schema$PostList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PostList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PostList>(parameters);
    }
  }


  /**
   * blogger.posts.patch
   * @desc Update a post. This method supports patch semantics.
   * @alias blogger.posts.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {boolean=} params.fetchBody Whether the body content of the post is included with the result (default: true).
   * @param {boolean=} params.fetchImages Whether image URL metadata for each post is included in the returned result (default: false).
   * @param {integer=} params.maxComments Maximum number of comments to retrieve with the returned post.
   * @param {string} params.postId The ID of the Post.
   * @param {boolean=} params.publish Whether a publish action should be performed when the post is updated (default: false).
   * @param {boolean=} params.revert Whether a revert action should be performed when the post is updated (default: false).
   * @param {().Post} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Post>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>):
      void|AxiosPromise<Schema$Post> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId'],
      pathParams: ['blogId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Post>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Post>(parameters);
    }
  }


  /**
   * blogger.posts.publish
   * @desc Publishes a draft post, optionally at the specific time of the given
   * publishDate parameter.
   * @alias blogger.posts.publish
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.postId The ID of the Post.
   * @param {string=} params.publishDate Optional date and time to schedule the publishing of the Blog. If no publishDate parameter is given, the post is either published at the a previously saved schedule date (if present), or the current time. If a future date is given, the post will be scheduled to be published.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  publish(params?: any, options?: MethodOptions): AxiosPromise<Schema$Post>;
  publish(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>): void;
  publish(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>):
      void|AxiosPromise<Schema$Post> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}/publish')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId'],
      pathParams: ['blogId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Post>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Post>(parameters);
    }
  }


  /**
   * blogger.posts.revert
   * @desc Revert a published or scheduled post to draft state.
   * @alias blogger.posts.revert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {string} params.postId The ID of the Post.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Post>;
  revert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>): void;
  revert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>):
      void|AxiosPromise<Schema$Post> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}/revert')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId'],
      pathParams: ['blogId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Post>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Post>(parameters);
    }
  }


  /**
   * blogger.posts.search
   * @desc Search for a post.
   * @alias blogger.posts.search
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to fetch the post from.
   * @param {boolean=} params.fetchBodies Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
   * @param {string=} params.orderBy Sort search results
   * @param {string} params.q Query terms to search this blog for matching posts.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  search(params?: any, options?: MethodOptions): AxiosPromise<Schema$PostList>;
  search(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PostList>,
      callback?: BodyResponseCallback<Schema$PostList>): void;
  search(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PostList>,
      callback?: BodyResponseCallback<Schema$PostList>):
      void|AxiosPromise<Schema$PostList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/search')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['blogId', 'q'],
      pathParams: ['blogId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PostList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PostList>(parameters);
    }
  }


  /**
   * blogger.posts.update
   * @desc Update a post.
   * @alias blogger.posts.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the Blog.
   * @param {boolean=} params.fetchBody Whether the body content of the post is included with the result (default: true).
   * @param {boolean=} params.fetchImages Whether image URL metadata for each post is included in the returned result (default: false).
   * @param {integer=} params.maxComments Maximum number of comments to retrieve with the returned post.
   * @param {string} params.postId The ID of the Post.
   * @param {boolean=} params.publish Whether a publish action should be performed when the post is updated (default: false).
   * @param {boolean=} params.revert Whether a revert action should be performed when the post is updated (default: false).
   * @param {().Post} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Post>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>):
      void|AxiosPromise<Schema$Post> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['blogId', 'postId'],
      pathParams: ['blogId', 'postId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Post>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Post>(parameters);
    }
  }
}

export class Resource$Postuserinfos {
  root: Blogger;
  constructor(root: Blogger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * blogger.postUserInfos.get
   * @desc Gets one post and user info pair, by post ID and user ID. The post
   * user info contains per-user information about the post, such as access
   * rights, specific to the user.
   * @alias blogger.postUserInfos.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId The ID of the blog.
   * @param {integer=} params.maxComments Maximum number of comments to pull back on a post.
   * @param {string} params.postId The ID of the post to get.
   * @param {string} params.userId ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$PostUserInfo>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PostUserInfo>,
      callback?: BodyResponseCallback<Schema$PostUserInfo>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PostUserInfo>,
      callback?: BodyResponseCallback<Schema$PostUserInfo>):
      void|AxiosPromise<Schema$PostUserInfo> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/blogger/v3/users/{userId}/blogs/{blogId}/posts/{postId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'blogId', 'postId'],
      pathParams: ['blogId', 'postId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PostUserInfo>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PostUserInfo>(parameters);
    }
  }


  /**
   * blogger.postUserInfos.list
   * @desc Retrieves a list of post and post user info pairs, possibly filtered.
   * The post user info contains per-user information about the post, such as
   * access rights, specific to the user.
   * @alias blogger.postUserInfos.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.blogId ID of the blog to fetch posts from.
   * @param {string=} params.endDate Latest post date to fetch, a date-time with RFC 3339 formatting.
   * @param {boolean=} params.fetchBodies Whether the body content of posts is included. Default is false.
   * @param {string=} params.labels Comma-separated list of labels to search for.
   * @param {integer=} params.maxResults Maximum number of posts to fetch.
   * @param {string=} params.orderBy Sort order applied to search results. Default is published.
   * @param {string=} params.pageToken Continuation token if the request is paged.
   * @param {string=} params.startDate Earliest post date to fetch, a date-time with RFC 3339 formatting.
   * @param {string=} params.status
   * @param {string} params.userId ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
   * @param {string=} params.view Access level with which to view the returned result. Note that some fields require elevated access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PostUserInfosList>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PostUserInfosList>,
      callback?: BodyResponseCallback<Schema$PostUserInfosList>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PostUserInfosList>,
      callback?: BodyResponseCallback<Schema$PostUserInfosList>):
      void|AxiosPromise<Schema$PostUserInfosList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/users/{userId}/blogs/{blogId}/posts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'blogId'],
      pathParams: ['blogId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PostUserInfosList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PostUserInfosList>(parameters);
    }
  }
}

export class Resource$Users {
  root: Blogger;
  constructor(root: Blogger) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * blogger.users.get
   * @desc Gets one user by ID.
   * @alias blogger.users.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userId The ID of the user to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/users/{userId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }
}
