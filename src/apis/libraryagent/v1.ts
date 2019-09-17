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

export namespace libraryagent_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Library Agent API
   *
   * A simple Google Example Library API.
   *
   * @example
   * const {google} = require('googleapis');
   * const libraryagent = google.libraryagent('v1');
   *
   * @namespace libraryagent
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Libraryagent
   */
  export class Libraryagent {
    context: APIRequestContext;
    shelves: Resource$Shelves;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.shelves = new Resource$Shelves(this.context);
    }
  }

  /**
   * A single book in the library.
   */
  export interface Schema$GoogleExampleLibraryagentV1Book {
    /**
     * The name of the book author.
     */
    author?: string | null;
    /**
     * The resource name of the book. Book names have the form `shelves/{shelf_id}/books/{book_id}`. The name is ignored when creating a book.
     */
    name?: string | null;
    /**
     * Value indicating whether the book has been read.
     */
    read?: boolean | null;
    /**
     * The title of the book.
     */
    title?: string | null;
  }
  /**
   * Response message for LibraryAgent.ListBooks.
   */
  export interface Schema$GoogleExampleLibraryagentV1ListBooksResponse {
    /**
     * The list of books.
     */
    books?: Schema$GoogleExampleLibraryagentV1Book[];
    /**
     * A token to retrieve next page of results. Pass this value in the ListBooksRequest.page_token field in the subsequent call to `ListBooks` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for LibraryAgent.ListShelves.
   */
  export interface Schema$GoogleExampleLibraryagentV1ListShelvesResponse {
    /**
     * A token to retrieve next page of results. Pass this value in the ListShelvesRequest.page_token field in the subsequent call to `ListShelves` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of shelves.
     */
    shelves?: Schema$GoogleExampleLibraryagentV1Shelf[];
  }
  /**
   * A Shelf contains a collection of books with a theme.
   */
  export interface Schema$GoogleExampleLibraryagentV1Shelf {
    /**
     * Output only. The resource name of the shelf. Shelf names have the form `shelves/{shelf_id}`. The name is ignored when creating a shelf.
     */
    name?: string | null;
    /**
     * The theme of the shelf
     */
    theme?: string | null;
  }

  export class Resource$Shelves {
    context: APIRequestContext;
    books: Resource$Shelves$Books;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.books = new Resource$Shelves$Books(this.context);
    }

    /**
     * libraryagent.shelves.get
     * @desc Gets a shelf. Returns NOT_FOUND if the shelf does not exist.
     * @alias libraryagent.shelves.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the shelf to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Shelves$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleExampleLibraryagentV1Shelf>;
    get(
      params: Params$Resource$Shelves$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Shelf>,
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Shelf>
    ): void;
    get(
      params: Params$Resource$Shelves$Get,
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Shelf>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Shelf>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Shelves$Get
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Shelf>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Shelf>,
      callback?: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Shelf>
    ): void | GaxiosPromise<Schema$GoogleExampleLibraryagentV1Shelf> {
      let params = (paramsOrCallback || {}) as Params$Resource$Shelves$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shelves$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://libraryagent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleExampleLibraryagentV1Shelf>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleExampleLibraryagentV1Shelf>(
          parameters
        );
      }
    }

    /**
     * libraryagent.shelves.list
     * @desc Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
     * @alias libraryagent.shelves.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested page size. Server may return fewer shelves than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListShelvesResponse.next_page_token returned from the previous call to `ListShelves` method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Shelves$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleExampleLibraryagentV1ListShelvesResponse>;
    list(
      params: Params$Resource$Shelves$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleExampleLibraryagentV1ListShelvesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleExampleLibraryagentV1ListShelvesResponse
      >
    ): void;
    list(
      params: Params$Resource$Shelves$List,
      callback: BodyResponseCallback<
        Schema$GoogleExampleLibraryagentV1ListShelvesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleExampleLibraryagentV1ListShelvesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Shelves$List
        | BodyResponseCallback<
            Schema$GoogleExampleLibraryagentV1ListShelvesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleExampleLibraryagentV1ListShelvesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleExampleLibraryagentV1ListShelvesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleExampleLibraryagentV1ListShelvesResponse
    > {
      let params = (paramsOrCallback || {}) as Params$Resource$Shelves$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shelves$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://libraryagent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/shelves').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleExampleLibraryagentV1ListShelvesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleExampleLibraryagentV1ListShelvesResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Shelves$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the shelf to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Shelves$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Requested page size. Server may return fewer shelves than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListShelvesResponse.next_page_token returned from the previous call to `ListShelves` method.
     */
    pageToken?: string;
  }

  export class Resource$Shelves$Books {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * libraryagent.shelves.books.borrow
     * @desc Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
     * @alias libraryagent.shelves.books.borrow
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the book to borrow.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    borrow(
      params?: Params$Resource$Shelves$Books$Borrow,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleExampleLibraryagentV1Book>;
    borrow(
      params: Params$Resource$Shelves$Books$Borrow,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    borrow(
      params: Params$Resource$Shelves$Books$Borrow,
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    borrow(
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    borrow(
      paramsOrCallback?:
        | Params$Resource$Shelves$Books$Borrow
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      callback?: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void | GaxiosPromise<Schema$GoogleExampleLibraryagentV1Book> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shelves$Books$Borrow;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shelves$Books$Borrow;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://libraryagent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:borrow').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleExampleLibraryagentV1Book>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleExampleLibraryagentV1Book>(
          parameters
        );
      }
    }

    /**
     * libraryagent.shelves.books.get
     * @desc Gets a book. Returns NOT_FOUND if the book does not exist.
     * @alias libraryagent.shelves.books.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the book to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Shelves$Books$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleExampleLibraryagentV1Book>;
    get(
      params: Params$Resource$Shelves$Books$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    get(
      params: Params$Resource$Shelves$Books$Get,
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Shelves$Books$Get
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      callback?: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void | GaxiosPromise<Schema$GoogleExampleLibraryagentV1Book> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shelves$Books$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shelves$Books$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://libraryagent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleExampleLibraryagentV1Book>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleExampleLibraryagentV1Book>(
          parameters
        );
      }
    }

    /**
     * libraryagent.shelves.books.list
     * @desc Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
     * @alias libraryagent.shelves.books.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested page size. Server may return fewer books than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBooksResponse.next_page_token. returned from the previous call to `ListBooks` method.
     * @param {string} params.parent Required. The name of the shelf whose books we'd like to list.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Shelves$Books$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleExampleLibraryagentV1ListBooksResponse>;
    list(
      params: Params$Resource$Shelves$Books$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleExampleLibraryagentV1ListBooksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleExampleLibraryagentV1ListBooksResponse
      >
    ): void;
    list(
      params: Params$Resource$Shelves$Books$List,
      callback: BodyResponseCallback<
        Schema$GoogleExampleLibraryagentV1ListBooksResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleExampleLibraryagentV1ListBooksResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Shelves$Books$List
        | BodyResponseCallback<
            Schema$GoogleExampleLibraryagentV1ListBooksResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleExampleLibraryagentV1ListBooksResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleExampleLibraryagentV1ListBooksResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleExampleLibraryagentV1ListBooksResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shelves$Books$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shelves$Books$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://libraryagent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/books').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleExampleLibraryagentV1ListBooksResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleExampleLibraryagentV1ListBooksResponse
        >(parameters);
      }
    }

    /**
     * libraryagent.shelves.books.return
     * @desc Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
     * @alias libraryagent.shelves.books.return
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the book to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    return(
      params?: Params$Resource$Shelves$Books$Return,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleExampleLibraryagentV1Book>;
    return(
      params: Params$Resource$Shelves$Books$Return,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    return(
      params: Params$Resource$Shelves$Books$Return,
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    return(
      callback: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void;
    return(
      paramsOrCallback?:
        | Params$Resource$Shelves$Books$Return
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>,
      callback?: BodyResponseCallback<Schema$GoogleExampleLibraryagentV1Book>
    ): void | GaxiosPromise<Schema$GoogleExampleLibraryagentV1Book> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shelves$Books$Return;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shelves$Books$Return;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://libraryagent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:return').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleExampleLibraryagentV1Book>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleExampleLibraryagentV1Book>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Shelves$Books$Borrow
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the book to borrow.
     */
    name?: string;
  }
  export interface Params$Resource$Shelves$Books$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the book to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Shelves$Books$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Requested page size. Server may return fewer books than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListBooksResponse.next_page_token. returned from the previous call to `ListBooks` method.
     */
    pageToken?: string;
    /**
     * Required. The name of the shelf whose books we'd like to list.
     */
    parent?: string;
  }
  export interface Params$Resource$Shelves$Books$Return
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the book to return.
     */
    name?: string;
  }
}
