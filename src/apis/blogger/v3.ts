/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace blogger_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Blogger API
   *
   * API for access to the data within Blogger.
   *
   * @example
   * const {google} = require('googleapis');
   * const blogger = google.blogger('v3');
   *
   * @namespace blogger
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Blogger
   */
  export class Blogger {
    context: APIRequestContext;
    blogs: Resource$Blogs;
    blogUserInfos: Resource$Bloguserinfos;
    comments: Resource$Comments;
    pages: Resource$Pages;
    pageViews: Resource$Pageviews;
    posts: Resource$Posts;
    postUserInfos: Resource$Postuserinfos;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.blogs = new Resource$Blogs(this.context);
      this.blogUserInfos = new Resource$Bloguserinfos(this.context);
      this.comments = new Resource$Comments(this.context);
      this.pages = new Resource$Pages(this.context);
      this.pageViews = new Resource$Pageviews(this.context);
      this.posts = new Resource$Posts(this.context);
      this.postUserInfos = new Resource$Postuserinfos(this.context);
      this.users = new Resource$Users(this.context);
    }
  }

  export interface Schema$Blog {
    /**
     * The JSON custom meta-data for the Blog
     */
    customMetaData?: string | null;
    /**
     * The description of this blog. This is displayed underneath the title.
     */
    description?: string | null;
    /**
     * The identifier for this resource.
     */
    id?: string | null;
    /**
     * The kind of this entry. Always blogger#blog
     */
    kind?: string | null;
    /**
     * The locale this Blog is set to.
     */
    locale?: {country?: string; language?: string; variant?: string} | null;
    /**
     * The name of this blog. This is displayed as the title.
     */
    name?: string | null;
    /**
     * The container of pages in this blog.
     */
    pages?: {selfLink?: string; totalItems?: number} | null;
    /**
     * The container of posts in this blog.
     */
    posts?: {
      items?: Schema$Post[];
      selfLink?: string;
      totalItems?: number;
    } | null;
    /**
     * RFC 3339 date-time when this blog was published.
     */
    published?: string | null;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string | null;
    /**
     * The status of the blog.
     */
    status?: string | null;
    /**
     * RFC 3339 date-time when this blog was last updated.
     */
    updated?: string | null;
    /**
     * The URL where this blog is published.
     */
    url?: string | null;
  }
  export interface Schema$BlogList {
    /**
     * Admin level list of blog per-user information
     */
    blogUserInfos?: Schema$BlogUserInfo[];
    /**
     * The list of Blogs this user has Authorship or Admin rights over.
     */
    items?: Schema$Blog[];
    /**
     * The kind of this entity. Always blogger#blogList
     */
    kind?: string | null;
  }
  export interface Schema$BlogPerUserInfo {
    /**
     * ID of the Blog resource
     */
    blogId?: string | null;
    /**
     * True if the user has Admin level access to the blog.
     */
    hasAdminAccess?: boolean | null;
    /**
     * The kind of this entity. Always blogger#blogPerUserInfo
     */
    kind?: string | null;
    /**
     * The Photo Album Key for the user when adding photos to the blog
     */
    photosAlbumKey?: string | null;
    /**
     * Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
     */
    role?: string | null;
    /**
     * ID of the User
     */
    userId?: string | null;
  }
  export interface Schema$BlogUserInfo {
    /**
     * The Blog resource.
     */
    blog?: Schema$Blog;
    /**
     * Information about a User for the Blog.
     */
    blog_user_info?: Schema$BlogPerUserInfo;
    /**
     * The kind of this entity. Always blogger#blogUserInfo
     */
    kind?: string | null;
  }
  export interface Schema$Comment {
    /**
     * The author of this Comment.
     */
    author?: {
      displayName?: string;
      id?: string;
      image?: {url?: string};
      url?: string;
    } | null;
    /**
     * Data about the blog containing this comment.
     */
    blog?: {id?: string} | null;
    /**
     * The actual content of the comment. May include HTML markup.
     */
    content?: string | null;
    /**
     * The identifier for this resource.
     */
    id?: string | null;
    /**
     * Data about the comment this is in reply to.
     */
    inReplyTo?: {id?: string} | null;
    /**
     * The kind of this entry. Always blogger#comment
     */
    kind?: string | null;
    /**
     * Data about the post containing this comment.
     */
    post?: {id?: string} | null;
    /**
     * RFC 3339 date-time when this comment was published.
     */
    published?: string | null;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string | null;
    /**
     * The status of the comment (only populated for admin users)
     */
    status?: string | null;
    /**
     * RFC 3339 date-time when this comment was last updated.
     */
    updated?: string | null;
  }
  export interface Schema$CommentList {
    /**
     * Etag of the response.
     */
    etag?: string | null;
    /**
     * The List of Comments for a Post.
     */
    items?: Schema$Comment[];
    /**
     * The kind of this entry. Always blogger#commentList
     */
    kind?: string | null;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string | null;
    /**
     * Pagination token to fetch the previous page, if one exists.
     */
    prevPageToken?: string | null;
  }
  export interface Schema$Page {
    /**
     * The author of this Page.
     */
    author?: {
      displayName?: string;
      id?: string;
      image?: {url?: string};
      url?: string;
    } | null;
    /**
     * Data about the blog containing this Page.
     */
    blog?: {id?: string} | null;
    /**
     * The body content of this Page, in HTML.
     */
    content?: string | null;
    /**
     * Etag of the resource.
     */
    etag?: string | null;
    /**
     * The identifier for this resource.
     */
    id?: string | null;
    /**
     * The kind of this entity. Always blogger#page
     */
    kind?: string | null;
    /**
     * RFC 3339 date-time when this Page was published.
     */
    published?: string | null;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string | null;
    /**
     * The status of the page for admin resources (either LIVE or DRAFT).
     */
    status?: string | null;
    /**
     * The title of this entity. This is the name displayed in the Admin user interface.
     */
    title?: string | null;
    /**
     * RFC 3339 date-time when this Page was last updated.
     */
    updated?: string | null;
    /**
     * The URL that this Page is displayed at.
     */
    url?: string | null;
  }
  export interface Schema$PageList {
    /**
     * Etag of the response.
     */
    etag?: string | null;
    /**
     * The list of Pages for a Blog.
     */
    items?: Schema$Page[];
    /**
     * The kind of this entity. Always blogger#pageList
     */
    kind?: string | null;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$Pageviews {
    /**
     * Blog Id
     */
    blogId?: string | null;
    /**
     * The container of posts in this blog.
     */
    counts?: Array<{count?: string; timeRange?: string}> | null;
    /**
     * The kind of this entry. Always blogger#page_views
     */
    kind?: string | null;
  }
  export interface Schema$Post {
    /**
     * The author of this Post.
     */
    author?: {
      displayName?: string;
      id?: string;
      image?: {url?: string};
      url?: string;
    } | null;
    /**
     * Data about the blog containing this Post.
     */
    blog?: {id?: string} | null;
    /**
     * The content of the Post. May contain HTML markup.
     */
    content?: string | null;
    /**
     * The JSON meta-data for the Post.
     */
    customMetaData?: string | null;
    /**
     * Etag of the resource.
     */
    etag?: string | null;
    /**
     * The identifier of this Post.
     */
    id?: string | null;
    /**
     * Display image for the Post.
     */
    images?: Array<{url?: string}> | null;
    /**
     * The kind of this entity. Always blogger#post
     */
    kind?: string | null;
    /**
     * The list of labels this Post was tagged with.
     */
    labels?: string[] | null;
    /**
     * The location for geotagged posts.
     */
    location?: {
      lat?: number;
      lng?: number;
      name?: string;
      span?: string;
    } | null;
    /**
     * RFC 3339 date-time when this Post was published.
     */
    published?: string | null;
    /**
     * Comment control and display setting for readers of this post.
     */
    readerComments?: string | null;
    /**
     * The container of comments on this Post.
     */
    replies?: {
      items?: Schema$Comment[];
      selfLink?: string;
      totalItems?: string;
    } | null;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string | null;
    /**
     * Status of the post. Only set for admin-level requests
     */
    status?: string | null;
    /**
     * The title of the Post.
     */
    title?: string | null;
    /**
     * The title link URL, similar to atom&#39;s related link.
     */
    titleLink?: string | null;
    /**
     * RFC 3339 date-time when this Post was last updated.
     */
    updated?: string | null;
    /**
     * The URL where this Post is displayed.
     */
    url?: string | null;
  }
  export interface Schema$PostList {
    /**
     * Etag of the response.
     */
    etag?: string | null;
    /**
     * The list of Posts for this Blog.
     */
    items?: Schema$Post[];
    /**
     * The kind of this entity. Always blogger#postList
     */
    kind?: string | null;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$PostPerUserInfo {
    /**
     * ID of the Blog that the post resource belongs to.
     */
    blogId?: string | null;
    /**
     * True if the user has Author level access to the post.
     */
    hasEditAccess?: boolean | null;
    /**
     * The kind of this entity. Always blogger#postPerUserInfo
     */
    kind?: string | null;
    /**
     * ID of the Post resource.
     */
    postId?: string | null;
    /**
     * ID of the User.
     */
    userId?: string | null;
  }
  export interface Schema$PostUserInfo {
    /**
     * The kind of this entity. Always blogger#postUserInfo
     */
    kind?: string | null;
    /**
     * The Post resource.
     */
    post?: Schema$Post;
    /**
     * Information about a User for the Post.
     */
    post_user_info?: Schema$PostPerUserInfo;
  }
  export interface Schema$PostUserInfosList {
    /**
     * The list of Posts with User information for the post, for this Blog.
     */
    items?: Schema$PostUserInfo[];
    /**
     * The kind of this entity. Always blogger#postList
     */
    kind?: string | null;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$User {
    /**
     * Profile summary information.
     */
    about?: string | null;
    /**
     * The container of blogs for this user.
     */
    blogs?: {selfLink?: string} | null;
    /**
     * The timestamp of when this profile was created, in seconds since epoch.
     */
    created?: string | null;
    /**
     * The display name.
     */
    displayName?: string | null;
    /**
     * The identifier for this User.
     */
    id?: string | null;
    /**
     * The kind of this entity. Always blogger#user
     */
    kind?: string | null;
    /**
     * This user&#39;s locale
     */
    locale?: {country?: string; language?: string; variant?: string} | null;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string | null;
    /**
     * The user&#39;s profile page.
     */
    url?: string | null;
  }

  export class Resource$Blogs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    get(
      params?: Params$Resource$Blogs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Blog>;
    get(
      params: Params$Resource$Blogs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Blog>,
      callback: BodyResponseCallback<Schema$Blog>
    ): void;
    get(
      params: Params$Resource$Blogs$Get,
      callback: BodyResponseCallback<Schema$Blog>
    ): void;
    get(callback: BodyResponseCallback<Schema$Blog>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Blogs$Get
        | BodyResponseCallback<Schema$Blog>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Blog>,
      callback?: BodyResponseCallback<Schema$Blog>
    ): void | GaxiosPromise<Schema$Blog> {
      let params = (paramsOrCallback || {}) as Params$Resource$Blogs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blogs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.context,
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
    getByUrl(
      params?: Params$Resource$Blogs$Getbyurl,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Blog>;
    getByUrl(
      params: Params$Resource$Blogs$Getbyurl,
      options: MethodOptions | BodyResponseCallback<Schema$Blog>,
      callback: BodyResponseCallback<Schema$Blog>
    ): void;
    getByUrl(
      params: Params$Resource$Blogs$Getbyurl,
      callback: BodyResponseCallback<Schema$Blog>
    ): void;
    getByUrl(callback: BodyResponseCallback<Schema$Blog>): void;
    getByUrl(
      paramsOrCallback?:
        | Params$Resource$Blogs$Getbyurl
        | BodyResponseCallback<Schema$Blog>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Blog>,
      callback?: BodyResponseCallback<Schema$Blog>
    ): void | GaxiosPromise<Schema$Blog> {
      let params = (paramsOrCallback || {}) as Params$Resource$Blogs$Getbyurl;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blogs$Getbyurl;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/byurl').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['url'],
        pathParams: [],
        context: this.context,
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
    listByUser(
      params?: Params$Resource$Blogs$Listbyuser,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BlogList>;
    listByUser(
      params: Params$Resource$Blogs$Listbyuser,
      options: MethodOptions | BodyResponseCallback<Schema$BlogList>,
      callback: BodyResponseCallback<Schema$BlogList>
    ): void;
    listByUser(
      params: Params$Resource$Blogs$Listbyuser,
      callback: BodyResponseCallback<Schema$BlogList>
    ): void;
    listByUser(callback: BodyResponseCallback<Schema$BlogList>): void;
    listByUser(
      paramsOrCallback?:
        | Params$Resource$Blogs$Listbyuser
        | BodyResponseCallback<Schema$BlogList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$BlogList>,
      callback?: BodyResponseCallback<Schema$BlogList>
    ): void | GaxiosPromise<Schema$BlogList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Blogs$Listbyuser;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blogs$Listbyuser;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/users/{userId}/blogs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BlogList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BlogList>(parameters);
      }
    }
  }

  export interface Params$Resource$Blogs$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the blog to get.
     */
    blogId?: string;
    /**
     * Maximum number of posts to pull back with the blog.
     */
    maxPosts?: number;
    /**
     * Access level with which to view the blog. Note that some fields require elevated access.
     */
    view?: string;
  }
  export interface Params$Resource$Blogs$Getbyurl extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The URL of the blog to retrieve.
     */
    url?: string;
    /**
     * Access level with which to view the blog. Note that some fields require elevated access.
     */
    view?: string;
  }
  export interface Params$Resource$Blogs$Listbyuser extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Whether the response is a list of blogs with per-user information instead of just blogs.
     */
    fetchUserInfo?: boolean;
    /**
     * User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified, defaults to ADMIN and AUTHOR roles.
     */
    role?: string[];
    /**
     * Blog statuses to include in the result (default: Live blogs only). Note that ADMIN access is required to view deleted blogs.
     */
    status?: string[];
    /**
     * ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     */
    userId?: string;
    /**
     * Access level with which to view the blogs. Note that some fields require elevated access.
     */
    view?: string;
  }

  export class Resource$Bloguserinfos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    get(
      params?: Params$Resource$Bloguserinfos$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BlogUserInfo>;
    get(
      params: Params$Resource$Bloguserinfos$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BlogUserInfo>,
      callback: BodyResponseCallback<Schema$BlogUserInfo>
    ): void;
    get(
      params: Params$Resource$Bloguserinfos$Get,
      callback: BodyResponseCallback<Schema$BlogUserInfo>
    ): void;
    get(callback: BodyResponseCallback<Schema$BlogUserInfo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Bloguserinfos$Get
        | BodyResponseCallback<Schema$BlogUserInfo>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BlogUserInfo>,
      callback?: BodyResponseCallback<Schema$BlogUserInfo>
    ): void | GaxiosPromise<Schema$BlogUserInfo> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bloguserinfos$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bloguserinfos$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/users/{userId}/blogs/{blogId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'blogId'],
        pathParams: ['blogId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BlogUserInfo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BlogUserInfo>(parameters);
      }
    }
  }

  export interface Params$Resource$Bloguserinfos$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the blog to get.
     */
    blogId?: string;
    /**
     * Maximum number of posts to pull back with the blog.
     */
    maxPosts?: number;
    /**
     * ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     */
    userId?: string;
  }

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    approve(
      params?: Params$Resource$Comments$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    approve(
      params: Params$Resource$Comments$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    approve(
      params: Params$Resource$Comments$Approve,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    approve(callback: BodyResponseCallback<Schema$Comment>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Comments$Approve
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: this.context,
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
    delete(
      params?: Params$Resource$Comments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Comments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Comments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Comments$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: this.context,
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
    get(
      params?: Params$Resource$Comments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    get(
      params: Params$Resource$Comments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(
      params: Params$Resource$Comments$Get,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Comment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Comments$Get
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: this.context,
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
    list(
      params?: Params$Resource$Comments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentList>;
    list(
      params: Params$Resource$Comments$List,
      options: MethodOptions | BodyResponseCallback<Schema$CommentList>,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    list(callback: BodyResponseCallback<Schema$CommentList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Comments$List
        | BodyResponseCallback<Schema$CommentList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentList>,
      callback?: BodyResponseCallback<Schema$CommentList>
    ): void | GaxiosPromise<Schema$CommentList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}/comments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommentList>(parameters);
      }
    }

    /**
     * blogger.comments.listByBlog
     * @desc Retrieves the comments for a blog, across all posts, possibly filtered.
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
    listByBlog(
      params?: Params$Resource$Comments$Listbyblog,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentList>;
    listByBlog(
      params: Params$Resource$Comments$Listbyblog,
      options: MethodOptions | BodyResponseCallback<Schema$CommentList>,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    listByBlog(
      params: Params$Resource$Comments$Listbyblog,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    listByBlog(callback: BodyResponseCallback<Schema$CommentList>): void;
    listByBlog(
      paramsOrCallback?:
        | Params$Resource$Comments$Listbyblog
        | BodyResponseCallback<Schema$CommentList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentList>,
      callback?: BodyResponseCallback<Schema$CommentList>
    ): void | GaxiosPromise<Schema$CommentList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Comments$Listbyblog;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Listbyblog;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.context,
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
    markAsSpam(
      params?: Params$Resource$Comments$Markasspam,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    markAsSpam(callback: BodyResponseCallback<Schema$Comment>): void;
    markAsSpam(
      paramsOrCallback?:
        | Params$Resource$Comments$Markasspam
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Comments$Markasspam;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Markasspam;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: this.context,
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
    removeContent(
      params?: Params$Resource$Comments$Removecontent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    removeContent(
      params: Params$Resource$Comments$Removecontent,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    removeContent(
      params: Params$Resource$Comments$Removecontent,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    removeContent(callback: BodyResponseCallback<Schema$Comment>): void;
    removeContent(
      paramsOrCallback?:
        | Params$Resource$Comments$Removecontent
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Comments$Removecontent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Removecontent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/blogger/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Approve extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the comment to mark as not spam.
     */
    commentId?: string;
    /**
     * The ID of the Post.
     */
    postId?: string;
  }
  export interface Params$Resource$Comments$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the comment to delete.
     */
    commentId?: string;
    /**
     * The ID of the Post.
     */
    postId?: string;
  }
  export interface Params$Resource$Comments$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to containing the comment.
     */
    blogId?: string;
    /**
     * The ID of the comment to get.
     */
    commentId?: string;
    /**
     * ID of the post to fetch posts from.
     */
    postId?: string;
    /**
     * Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the parent posts which is in a draft state, or comments that are pending moderation.
     */
    view?: string;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to fetch comments from.
     */
    blogId?: string;
    /**
     * Latest date of comment to fetch, a date-time with RFC 3339 formatting.
     */
    endDate?: string;
    /**
     * Whether the body content of the comments is included.
     */
    fetchBodies?: boolean;
    /**
     * Maximum number of comments to include in the result.
     */
    maxResults?: number;
    /**
     * Continuation token if request is paged.
     */
    pageToken?: string;
    /**
     * ID of the post to fetch posts from.
     */
    postId?: string;
    /**
     * Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
     */
    startDate?: string;
    /**
     *
     */
    status?: string[];
    /**
     * Access level with which to view the returned result. Note that some fields require elevated access.
     */
    view?: string;
  }
  export interface Params$Resource$Comments$Listbyblog
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to fetch comments from.
     */
    blogId?: string;
    /**
     * Latest date of comment to fetch, a date-time with RFC 3339 formatting.
     */
    endDate?: string;
    /**
     * Whether the body content of the comments is included.
     */
    fetchBodies?: boolean;
    /**
     * Maximum number of comments to include in the result.
     */
    maxResults?: number;
    /**
     * Continuation token if request is paged.
     */
    pageToken?: string;
    /**
     * Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
     */
    startDate?: string;
    /**
     *
     */
    status?: string[];
  }
  export interface Params$Resource$Comments$Markasspam
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the comment to mark as spam.
     */
    commentId?: string;
    /**
     * The ID of the Post.
     */
    postId?: string;
  }
  export interface Params$Resource$Comments$Removecontent
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the comment to delete content from.
     */
    commentId?: string;
    /**
     * The ID of the Post.
     */
    postId?: string;
  }

  export class Resource$Pages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    delete(
      params?: Params$Resource$Pages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Pages$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Pages$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Pages$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: this.context,
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
    get(
      params?: Params$Resource$Pages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Page>;
    get(
      params: Params$Resource$Pages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    get(
      params: Params$Resource$Pages$Get,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    get(callback: BodyResponseCallback<Schema$Page>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Pages$Get
        | BodyResponseCallback<Schema$Page>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>
    ): void | GaxiosPromise<Schema$Page> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: this.context,
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
    insert(
      params?: Params$Resource$Pages$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Page>;
    insert(
      params: Params$Resource$Pages$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    insert(
      params: Params$Resource$Pages$Insert,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Page>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Pages$Insert
        | BodyResponseCallback<Schema$Page>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>
    ): void | GaxiosPromise<Schema$Page> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Page>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Page>(parameters);
      }
    }

    /**
     * blogger.pages.list
     * @desc Retrieves the pages for a blog, optionally including non-LIVE statuses.
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
    list(
      params?: Params$Resource$Pages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PageList>;
    list(
      params: Params$Resource$Pages$List,
      options: MethodOptions | BodyResponseCallback<Schema$PageList>,
      callback: BodyResponseCallback<Schema$PageList>
    ): void;
    list(
      params: Params$Resource$Pages$List,
      callback: BodyResponseCallback<Schema$PageList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PageList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Pages$List
        | BodyResponseCallback<Schema$PageList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$PageList>,
      callback?: BodyResponseCallback<Schema$PageList>
    ): void | GaxiosPromise<Schema$PageList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.context,
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
    patch(
      params?: Params$Resource$Pages$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Page>;
    patch(
      params: Params$Resource$Pages$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    patch(
      params: Params$Resource$Pages$Patch,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Page>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Pages$Patch
        | BodyResponseCallback<Schema$Page>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>
    ): void | GaxiosPromise<Schema$Page> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: this.context,
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
    publish(
      params?: Params$Resource$Pages$Publish,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Page>;
    publish(
      params: Params$Resource$Pages$Publish,
      options: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    publish(
      params: Params$Resource$Pages$Publish,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    publish(callback: BodyResponseCallback<Schema$Page>): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Pages$Publish
        | BodyResponseCallback<Schema$Page>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>
    ): void | GaxiosPromise<Schema$Page> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}/publish'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: this.context,
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
    revert(
      params?: Params$Resource$Pages$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Page>;
    revert(
      params: Params$Resource$Pages$Revert,
      options: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    revert(
      params: Params$Resource$Pages$Revert,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    revert(callback: BodyResponseCallback<Schema$Page>): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Pages$Revert
        | BodyResponseCallback<Schema$Page>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>
    ): void | GaxiosPromise<Schema$Page> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Revert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}/revert'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: this.context,
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
    update(
      params?: Params$Resource$Pages$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Page>;
    update(
      params: Params$Resource$Pages$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    update(
      params: Params$Resource$Pages$Update,
      callback: BodyResponseCallback<Schema$Page>
    ): void;
    update(callback: BodyResponseCallback<Schema$Page>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Pages$Update
        | BodyResponseCallback<Schema$Page>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Page>,
      callback?: BodyResponseCallback<Schema$Page>
    ): void | GaxiosPromise<Schema$Page> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/pages/{pageId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Page>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Page>(parameters);
      }
    }
  }

  export interface Params$Resource$Pages$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the Page.
     */
    pageId?: string;
  }
  export interface Params$Resource$Pages$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog containing the page.
     */
    blogId?: string;
    /**
     * The ID of the page to get.
     */
    pageId?: string;
    /**
     *
     */
    view?: string;
  }
  export interface Params$Resource$Pages$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to add the page to.
     */
    blogId?: string;
    /**
     * Whether to create the page as a draft (default: false).
     */
    isDraft?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Page;
  }
  export interface Params$Resource$Pages$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to fetch Pages from.
     */
    blogId?: string;
    /**
     * Whether to retrieve the Page bodies.
     */
    fetchBodies?: boolean;
    /**
     * Maximum number of Pages to fetch.
     */
    maxResults?: number;
    /**
     * Continuation token if the request is paged.
     */
    pageToken?: string;
    /**
     *
     */
    status?: string[];
    /**
     * Access level with which to view the returned result. Note that some fields require elevated access.
     */
    view?: string;
  }
  export interface Params$Resource$Pages$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the Page.
     */
    pageId?: string;
    /**
     * Whether a publish action should be performed when the page is updated (default: false).
     */
    publish?: boolean;
    /**
     * Whether a revert action should be performed when the page is updated (default: false).
     */
    revert?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Page;
  }
  export interface Params$Resource$Pages$Publish extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the blog.
     */
    blogId?: string;
    /**
     * The ID of the page.
     */
    pageId?: string;
  }
  export interface Params$Resource$Pages$Revert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the blog.
     */
    blogId?: string;
    /**
     * The ID of the page.
     */
    pageId?: string;
  }
  export interface Params$Resource$Pages$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the Page.
     */
    pageId?: string;
    /**
     * Whether a publish action should be performed when the page is updated (default: false).
     */
    publish?: boolean;
    /**
     * Whether a revert action should be performed when the page is updated (default: false).
     */
    revert?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Page;
  }

  export class Resource$Pageviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    get(
      params?: Params$Resource$Pageviews$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Pageviews>;
    get(
      params: Params$Resource$Pageviews$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Pageviews>,
      callback: BodyResponseCallback<Schema$Pageviews>
    ): void;
    get(
      params: Params$Resource$Pageviews$Get,
      callback: BodyResponseCallback<Schema$Pageviews>
    ): void;
    get(callback: BodyResponseCallback<Schema$Pageviews>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Pageviews$Get
        | BodyResponseCallback<Schema$Pageviews>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Pageviews>,
      callback?: BodyResponseCallback<Schema$Pageviews>
    ): void | GaxiosPromise<Schema$Pageviews> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pageviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pageviews$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/pageviews').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Pageviews>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Pageviews>(parameters);
      }
    }
  }

  export interface Params$Resource$Pageviews$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the blog to get.
     */
    blogId?: string;
    /**
     *
     */
    range?: string[];
  }

  export class Resource$Posts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    delete(
      params?: Params$Resource$Posts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Posts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Posts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Posts$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.context,
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
    get(
      params?: Params$Resource$Posts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Post>;
    get(
      params: Params$Resource$Posts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    get(
      params: Params$Resource$Posts$Get,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    get(callback: BodyResponseCallback<Schema$Post>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Posts$Get
        | BodyResponseCallback<Schema$Post>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>
    ): void | GaxiosPromise<Schema$Post> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.context,
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
    getByPath(
      params?: Params$Resource$Posts$Getbypath,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Post>;
    getByPath(
      params: Params$Resource$Posts$Getbypath,
      options: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    getByPath(
      params: Params$Resource$Posts$Getbypath,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    getByPath(callback: BodyResponseCallback<Schema$Post>): void;
    getByPath(
      paramsOrCallback?:
        | Params$Resource$Posts$Getbypath
        | BodyResponseCallback<Schema$Post>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>
    ): void | GaxiosPromise<Schema$Post> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Getbypath;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Getbypath;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/bypath').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'path'],
        pathParams: ['blogId'],
        context: this.context,
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
    insert(
      params?: Params$Resource$Posts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Post>;
    insert(
      params: Params$Resource$Posts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    insert(
      params: Params$Resource$Posts$Insert,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Post>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Posts$Insert
        | BodyResponseCallback<Schema$Post>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>
    ): void | GaxiosPromise<Schema$Post> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.context,
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
    list(
      params?: Params$Resource$Posts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PostList>;
    list(
      params: Params$Resource$Posts$List,
      options: MethodOptions | BodyResponseCallback<Schema$PostList>,
      callback: BodyResponseCallback<Schema$PostList>
    ): void;
    list(
      params: Params$Resource$Posts$List,
      callback: BodyResponseCallback<Schema$PostList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PostList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Posts$List
        | BodyResponseCallback<Schema$PostList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$PostList>,
      callback?: BodyResponseCallback<Schema$PostList>
    ): void | GaxiosPromise<Schema$PostList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.context,
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
    patch(
      params?: Params$Resource$Posts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Post>;
    patch(
      params: Params$Resource$Posts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    patch(
      params: Params$Resource$Posts$Patch,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Post>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Posts$Patch
        | BodyResponseCallback<Schema$Post>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>
    ): void | GaxiosPromise<Schema$Post> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Post>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Post>(parameters);
      }
    }

    /**
     * blogger.posts.publish
     * @desc Publishes a draft post, optionally at the specific time of the given publishDate parameter.
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
    publish(
      params?: Params$Resource$Posts$Publish,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Post>;
    publish(
      params: Params$Resource$Posts$Publish,
      options: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    publish(
      params: Params$Resource$Posts$Publish,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    publish(callback: BodyResponseCallback<Schema$Post>): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Posts$Publish
        | BodyResponseCallback<Schema$Post>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>
    ): void | GaxiosPromise<Schema$Post> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}/publish'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.context,
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
    revert(
      params?: Params$Resource$Posts$Revert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Post>;
    revert(
      params: Params$Resource$Posts$Revert,
      options: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    revert(
      params: Params$Resource$Posts$Revert,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    revert(callback: BodyResponseCallback<Schema$Post>): void;
    revert(
      paramsOrCallback?:
        | Params$Resource$Posts$Revert
        | BodyResponseCallback<Schema$Post>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>
    ): void | GaxiosPromise<Schema$Post> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Revert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Revert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}/revert'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.context,
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
    search(
      params?: Params$Resource$Posts$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PostList>;
    search(
      params: Params$Resource$Posts$Search,
      options: MethodOptions | BodyResponseCallback<Schema$PostList>,
      callback: BodyResponseCallback<Schema$PostList>
    ): void;
    search(
      params: Params$Resource$Posts$Search,
      callback: BodyResponseCallback<Schema$PostList>
    ): void;
    search(callback: BodyResponseCallback<Schema$PostList>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Posts$Search
        | BodyResponseCallback<Schema$PostList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$PostList>,
      callback?: BodyResponseCallback<Schema$PostList>
    ): void | GaxiosPromise<Schema$PostList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/blogs/{blogId}/posts/search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'q'],
        pathParams: ['blogId'],
        context: this.context,
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
    update(
      params?: Params$Resource$Posts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Post>;
    update(
      params: Params$Resource$Posts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    update(
      params: Params$Resource$Posts$Update,
      callback: BodyResponseCallback<Schema$Post>
    ): void;
    update(callback: BodyResponseCallback<Schema$Post>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Posts$Update
        | BodyResponseCallback<Schema$Post>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Post>,
      callback?: BodyResponseCallback<Schema$Post>
    ): void | GaxiosPromise<Schema$Post> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/blogs/{blogId}/posts/{postId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Post>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Post>(parameters);
      }
    }
  }

  export interface Params$Resource$Posts$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the Post.
     */
    postId?: string;
  }
  export interface Params$Resource$Posts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to fetch the post from.
     */
    blogId?: string;
    /**
     * Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
     */
    fetchBody?: boolean;
    /**
     * Whether image URL metadata for each post is included (default: false).
     */
    fetchImages?: boolean;
    /**
     * Maximum number of comments to pull back on a post.
     */
    maxComments?: number;
    /**
     * The ID of the post
     */
    postId?: string;
    /**
     * Access level with which to view the returned result. Note that some fields require elevated access.
     */
    view?: string;
  }
  export interface Params$Resource$Posts$Getbypath extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to fetch the post from.
     */
    blogId?: string;
    /**
     * Maximum number of comments to pull back on a post.
     */
    maxComments?: number;
    /**
     * Path of the Post to retrieve.
     */
    path?: string;
    /**
     * Access level with which to view the returned result. Note that some fields require elevated access.
     */
    view?: string;
  }
  export interface Params$Resource$Posts$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to add the post to.
     */
    blogId?: string;
    /**
     * Whether the body content of the post is included with the result (default: true).
     */
    fetchBody?: boolean;
    /**
     * Whether image URL metadata for each post is included in the returned result (default: false).
     */
    fetchImages?: boolean;
    /**
     * Whether to create the post as a draft (default: false).
     */
    isDraft?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Post;
  }
  export interface Params$Resource$Posts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to fetch posts from.
     */
    blogId?: string;
    /**
     * Latest post date to fetch, a date-time with RFC 3339 formatting.
     */
    endDate?: string;
    /**
     * Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
     */
    fetchBodies?: boolean;
    /**
     * Whether image URL metadata for each post is included.
     */
    fetchImages?: boolean;
    /**
     * Comma-separated list of labels to search for.
     */
    labels?: string;
    /**
     * Maximum number of posts to fetch.
     */
    maxResults?: number;
    /**
     * Sort search results
     */
    orderBy?: string;
    /**
     * Continuation token if the request is paged.
     */
    pageToken?: string;
    /**
     * Earliest post date to fetch, a date-time with RFC 3339 formatting.
     */
    startDate?: string;
    /**
     * Statuses to include in the results.
     */
    status?: string[];
    /**
     * Access level with which to view the returned result. Note that some fields require escalated access.
     */
    view?: string;
  }
  export interface Params$Resource$Posts$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * Whether the body content of the post is included with the result (default: true).
     */
    fetchBody?: boolean;
    /**
     * Whether image URL metadata for each post is included in the returned result (default: false).
     */
    fetchImages?: boolean;
    /**
     * Maximum number of comments to retrieve with the returned post.
     */
    maxComments?: number;
    /**
     * The ID of the Post.
     */
    postId?: string;
    /**
     * Whether a publish action should be performed when the post is updated (default: false).
     */
    publish?: boolean;
    /**
     * Whether a revert action should be performed when the post is updated (default: false).
     */
    revert?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Post;
  }
  export interface Params$Resource$Posts$Publish extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the Post.
     */
    postId?: string;
    /**
     * Optional date and time to schedule the publishing of the Blog. If no publishDate parameter is given, the post is either published at the a previously saved schedule date (if present), or the current time. If a future date is given, the post will be scheduled to be published.
     */
    publishDate?: string;
  }
  export interface Params$Resource$Posts$Revert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * The ID of the Post.
     */
    postId?: string;
  }
  export interface Params$Resource$Posts$Search extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to fetch the post from.
     */
    blogId?: string;
    /**
     * Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize traffic.
     */
    fetchBodies?: boolean;
    /**
     * Sort search results
     */
    orderBy?: string;
    /**
     * Query terms to search this blog for matching posts.
     */
    q?: string;
  }
  export interface Params$Resource$Posts$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the Blog.
     */
    blogId?: string;
    /**
     * Whether the body content of the post is included with the result (default: true).
     */
    fetchBody?: boolean;
    /**
     * Whether image URL metadata for each post is included in the returned result (default: false).
     */
    fetchImages?: boolean;
    /**
     * Maximum number of comments to retrieve with the returned post.
     */
    maxComments?: number;
    /**
     * The ID of the Post.
     */
    postId?: string;
    /**
     * Whether a publish action should be performed when the post is updated (default: false).
     */
    publish?: boolean;
    /**
     * Whether a revert action should be performed when the post is updated (default: false).
     */
    revert?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Post;
  }

  export class Resource$Postuserinfos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * blogger.postUserInfos.get
     * @desc Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights, specific to the user.
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
    get(
      params?: Params$Resource$Postuserinfos$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PostUserInfo>;
    get(
      params: Params$Resource$Postuserinfos$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PostUserInfo>,
      callback: BodyResponseCallback<Schema$PostUserInfo>
    ): void;
    get(
      params: Params$Resource$Postuserinfos$Get,
      callback: BodyResponseCallback<Schema$PostUserInfo>
    ): void;
    get(callback: BodyResponseCallback<Schema$PostUserInfo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Postuserinfos$Get
        | BodyResponseCallback<Schema$PostUserInfo>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PostUserInfo>,
      callback?: BodyResponseCallback<Schema$PostUserInfo>
    ): void | GaxiosPromise<Schema$PostUserInfo> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Postuserinfos$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Postuserinfos$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/blogger/v3/users/{userId}/blogs/{blogId}/posts/{postId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'blogId', 'postId'],
        pathParams: ['blogId', 'postId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PostUserInfo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PostUserInfo>(parameters);
      }
    }

    /**
     * blogger.postUserInfos.list
     * @desc Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user.
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
    list(
      params?: Params$Resource$Postuserinfos$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PostUserInfosList>;
    list(
      params: Params$Resource$Postuserinfos$List,
      options: MethodOptions | BodyResponseCallback<Schema$PostUserInfosList>,
      callback: BodyResponseCallback<Schema$PostUserInfosList>
    ): void;
    list(
      params: Params$Resource$Postuserinfos$List,
      callback: BodyResponseCallback<Schema$PostUserInfosList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PostUserInfosList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Postuserinfos$List
        | BodyResponseCallback<Schema$PostUserInfosList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PostUserInfosList>,
      callback?: BodyResponseCallback<Schema$PostUserInfosList>
    ): void | GaxiosPromise<Schema$PostUserInfosList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Postuserinfos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Postuserinfos$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/blogger/v3/users/{userId}/blogs/{blogId}/posts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'blogId'],
        pathParams: ['blogId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PostUserInfosList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PostUserInfosList>(parameters);
      }
    }
  }

  export interface Params$Resource$Postuserinfos$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the blog.
     */
    blogId?: string;
    /**
     * Maximum number of comments to pull back on a post.
     */
    maxComments?: number;
    /**
     * The ID of the post to get.
     */
    postId?: string;
    /**
     * ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     */
    userId?: string;
  }
  export interface Params$Resource$Postuserinfos$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the blog to fetch posts from.
     */
    blogId?: string;
    /**
     * Latest post date to fetch, a date-time with RFC 3339 formatting.
     */
    endDate?: string;
    /**
     * Whether the body content of posts is included. Default is false.
     */
    fetchBodies?: boolean;
    /**
     * Comma-separated list of labels to search for.
     */
    labels?: string;
    /**
     * Maximum number of posts to fetch.
     */
    maxResults?: number;
    /**
     * Sort order applied to search results. Default is published.
     */
    orderBy?: string;
    /**
     * Continuation token if the request is paged.
     */
    pageToken?: string;
    /**
     * Earliest post date to fetch, a date-time with RFC 3339 formatting.
     */
    startDate?: string;
    /**
     *
     */
    status?: string[];
    /**
     * ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     */
    userId?: string;
    /**
     * Access level with which to view the returned result. Note that some fields require elevated access.
     */
    view?: string;
  }

  export class Resource$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    get(
      params?: Params$Resource$Users$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
    get(
      params: Params$Resource$Users$Get,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    get(
      params: Params$Resource$Users$Get,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    get(callback: BodyResponseCallback<Schema$User>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Get
        | BodyResponseCallback<Schema$User>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>
    ): void | GaxiosPromise<Schema$User> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/blogger/v3/users/{userId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$User>(parameters, callback);
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the user to get.
     */
    userId?: string;
  }
}
