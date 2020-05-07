// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';

export namespace blogger_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
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
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Blogger API v3
   *
   * The Blogger API provides access to posts, comments and pages of a     Blogger blog.
   *
   * @example
   * const {google} = require('googleapis');
   * const blogger = google.blogger('v2');
   *
   * @namespace blogger
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Blogger
   */
  export class Blogger {
    context: APIRequestContext;
    blogs: Resource$Blogs;
    comments: Resource$Comments;
    pages: Resource$Pages;
    posts: Resource$Posts;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.blogs = new Resource$Blogs(this.context);
      this.comments = new Resource$Comments(this.context);
      this.pages = new Resource$Pages(this.context);
      this.posts = new Resource$Posts(this.context);
      this.users = new Resource$Users(this.context);
    }
  }

  export interface Schema$Blog {
    /**
     * The JSON custom meta-data for the Blog.
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
     * The kind of this entry. Always blogger#blog.
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
     * Admin level list of blog per-user information.
     */
    blogUserInfos?: Schema$BlogUserInfo[];
    /**
     * The list of Blogs this user has Authorship or Admin rights over.
     */
    items?: Schema$Blog[];
    /**
     * The kind of this entity. Always blogger#blogList.
     */
    kind?: string | null;
  }
  export interface Schema$BlogPerUserInfo {
    /**
     * ID of the Blog resource.
     */
    blogId?: string | null;
    /**
     * True if the user has Admin level access to the blog.
     */
    hasAdminAccess?: boolean | null;
    /**
     * The kind of this entity. Always blogger#blogPerUserInfo.
     */
    kind?: string | null;
    /**
     * The Photo Album Key for the user when adding photos to the blog.
     */
    photosAlbumKey?: string | null;
    /**
     * Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
     */
    role?: string | null;
    /**
     * ID of the User.
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
     * The kind of this entity. Always blogger#blogUserInfo.
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
     * The kind of this entry. Always blogger#comment.
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
     * The status of the comment (only populated for admin users).
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
     * The kind of this entry. Always blogger#commentList.
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
     * The kind of this entity. Always blogger#page.
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
     * The kind of this entity. Always blogger#pageList.
     */
    kind?: string | null;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string | null;
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
     * The kind of this entity. Always blogger#post.
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
     * Status of the post. Only set for admin-level requests.
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
     * The kind of this entity. Always blogger#postList.
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
     * The kind of this entity. Always blogger#user.
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
     * @desc Gets a blog by id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.blogs.get({
     *     blogId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customMetaData": "my_customMetaData",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "locale": {},
     *   //   "name": "my_name",
     *   //   "pages": {},
     *   //   "posts": {},
     *   //   "published": "my_published",
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "updated": "my_updated",
     *   //   "url": "my_url"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.blogs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId
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

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/blogs/{blogId}').replace(/([^:]\/)\/+/g, '$1'),
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
     * blogger.blogs.list
     * @desc Lists blogs by user id, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.blogs.list({
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blogUserInfos": [],
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.blogs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Blogs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BlogList>;
    list(
      params: Params$Resource$Blogs$List,
      options: MethodOptions | BodyResponseCallback<Schema$BlogList>,
      callback: BodyResponseCallback<Schema$BlogList>
    ): void;
    list(
      params: Params$Resource$Blogs$List,
      callback: BodyResponseCallback<Schema$BlogList>
    ): void;
    list(callback: BodyResponseCallback<Schema$BlogList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Blogs$List
        | BodyResponseCallback<Schema$BlogList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$BlogList>,
      callback?: BodyResponseCallback<Schema$BlogList>
    ): void | GaxiosPromise<Schema$BlogList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Blogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/users/{userId}/blogs').replace(
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
     *
     */
    blogId?: string;
  }
  export interface Params$Resource$Blogs$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    userId?: string;
  }

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * blogger.comments.get
     * @desc Gets a comment by blog id, post id and comment id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.comments.get({
     *     blogId: 'placeholder-value',
     *
     *     commentId: 'placeholder-value',
     *
     *     postId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": {},
     *   //   "blog": {},
     *   //   "content": "my_content",
     *   //   "id": "my_id",
     *   //   "inReplyTo": {},
     *   //   "kind": "my_kind",
     *   //   "post": {},
     *   //   "published": "my_published",
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "updated": "my_updated"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.comments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId
     * @param {string} params.commentId
     * @param {string} params.postId
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

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/blogs/{blogId}/posts/{postId}/comments/{commentId}'
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
     * @desc Lists comments.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.comments.list({
     *     blogId: 'placeholder-value',
     *
     *     fetchBodies: 'placeholder-value',
     *
     *     maxResults: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     postId: 'placeholder-value',
     *
     *     startDate: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "prevPageToken": "my_prevPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.comments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId
     * @param {boolean=} params.fetchBodies
     * @param {integer=} params.maxResults
     * @param {string=} params.pageToken
     * @param {string} params.postId
     * @param {string=} params.startDate
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

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/blogs/{blogId}/posts/{postId}/comments'
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
  }

  export interface Params$Resource$Comments$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    blogId?: string;
    /**
     *
     */
    commentId?: string;
    /**
     *
     */
    postId?: string;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    blogId?: string;
    /**
     *
     */
    fetchBodies?: boolean;
    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    postId?: string;
    /**
     *
     */
    startDate?: string;
  }

  export class Resource$Pages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * blogger.pages.get
     * @desc Gets a page by blog id and page id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.pages.get({
     *     blogId: 'placeholder-value',
     *
     *     pageId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": {},
     *   //   "blog": {},
     *   //   "content": "my_content",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "published": "my_published",
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "url": "my_url"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.pages.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId
     * @param {string} params.pageId
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

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/blogs/{blogId}/pages/{pageId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * blogger.pages.list
     * @desc Lists pages.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.pages.list({
     *     blogId: 'placeholder-value',
     *
     *     fetchBodies: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.pages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId
     * @param {boolean=} params.fetchBodies
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

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/blogs/{blogId}/pages').replace(
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
  }

  export interface Params$Resource$Pages$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    blogId?: string;
    /**
     *
     */
    pageId?: string;
  }
  export interface Params$Resource$Pages$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    blogId?: string;
    /**
     *
     */
    fetchBodies?: boolean;
  }

  export class Resource$Posts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * blogger.posts.get
     * @desc Gets a post by blog id and post id
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.posts.get({
     *     blogId: 'placeholder-value',
     *
     *     postId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": {},
     *   //   "blog": {},
     *   //   "content": "my_content",
     *   //   "customMetaData": "my_customMetaData",
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "kind": "my_kind",
     *   //   "labels": [],
     *   //   "location": {},
     *   //   "published": "my_published",
     *   //   "readerComments": "my_readerComments",
     *   //   "replies": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "titleLink": "my_titleLink",
     *   //   "updated": "my_updated",
     *   //   "url": "my_url"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.posts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId
     * @param {string} params.postId
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

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/blogs/{blogId}/posts/{postId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * blogger.posts.list
     * @desc Lists posts.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.posts.list({
     *     blogId: 'placeholder-value',
     *
     *     fetchBodies: 'placeholder-value',
     *
     *     maxResults: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     startDate: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "prevPageToken": "my_prevPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.posts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId
     * @param {boolean=} params.fetchBodies
     * @param {integer=} params.maxResults
     * @param {string=} params.pageToken
     * @param {string=} params.startDate
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

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/blogs/{blogId}/posts').replace(
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
  }

  export interface Params$Resource$Posts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    blogId?: string;
    /**
     *
     */
    postId?: string;
  }
  export interface Params$Resource$Posts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    blogId?: string;
    /**
     *
     */
    fetchBodies?: boolean;
    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    startDate?: string;
  }

  export class Resource$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * blogger.users.get
     * @desc Gets a user by user id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/blogger'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await blogger.users.get({
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "about": "my_about",
     *   //   "blogs": {},
     *   //   "created": "my_created",
     *   //   "displayName": "my_displayName",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "locale": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "url": "my_url"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias blogger.users.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId
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

      const rootUrl = options.rootUrl || 'https://blogger.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/users/{userId}').replace(/([^:]\/)\/+/g, '$1'),
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
     *
     */
    userId?: string;
  }
}
