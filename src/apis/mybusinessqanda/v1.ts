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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace mybusinessqanda_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

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
   * My Business Q&amp;A API
   *
   * The My Business Q&amp;A API allows questions and answers to be posted for specific listings. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const mybusinessqanda = google.mybusinessqanda('v1');
   * ```
   */
  export class Mybusinessqanda {
    context: APIRequestContext;
    locations: Resource$Locations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.locations = new Resource$Locations(this.context);
    }
  }

  /**
   * Represents an answer to a question
   */
  export interface Schema$Answer {
    /**
     * Output only. The author of the answer. Will only be set during list operations.
     */
    author?: Schema$Author;
    /**
     * Output only. The timestamp for when the answer was written. Only retrieved during ListResponse fetching.
     */
    createTime?: string | null;
    /**
     * Output only. The unique name for the answer locations/x/questions/x/answers/x
     */
    name?: string | null;
    /**
     * Required. The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters.
     */
    text?: string | null;
    /**
     * Output only. The timestamp for when the answer was last modified.
     */
    updateTime?: string | null;
    /**
     * Output only. The number of upvotes for the answer.
     */
    upvoteCount?: number | null;
  }
  /**
   * Represents the author of a question or answer
   */
  export interface Schema$Author {
    /**
     * The display name of the user
     */
    displayName?: string | null;
    /**
     * The profile photo URI of the user.
     */
    profilePhotoUri?: string | null;
    /**
     * The type of user the author is.
     */
    type?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Response message for QuestionsAndAnswers.ListAnswers
   */
  export interface Schema$ListAnswersResponse {
    /**
     * The requested answers.
     */
    answers?: Schema$Answer[];
    /**
     * If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response.
     */
    nextPageToken?: string | null;
    /**
     * The total number of answers posted for this question across all pages.
     */
    totalSize?: number | null;
  }
  /**
   * Response message for QuestionsAndAnswers.ListQuestions
   */
  export interface Schema$ListQuestionsResponse {
    /**
     * If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response.
     */
    nextPageToken?: string | null;
    /**
     * The requested questions,
     */
    questions?: Schema$Question[];
    /**
     * The total number of questions posted for this location across all pages.
     */
    totalSize?: number | null;
  }
  /**
   * Represents a single question and some of its answers.
   */
  export interface Schema$Question {
    /**
     * Output only. The author of the question.
     */
    author?: Schema$Author;
    /**
     * Output only. The timestamp for when the question was written.
     */
    createTime?: string | null;
    /**
     * Immutable. The unique name for the question. locations/x/questions/x This field will be ignored if set during question creation.
     */
    name?: string | null;
    /**
     * Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.
     */
    text?: string | null;
    /**
     * Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question)
     */
    topAnswers?: Schema$Answer[];
    /**
     * Output only. The total number of answers posted for this question.
     */
    totalAnswerCount?: number | null;
    /**
     * Output only. The timestamp for when the question was last modified.
     */
    updateTime?: string | null;
    /**
     * Output only. The number of upvotes for the question.
     */
    upvoteCount?: number | null;
  }
  /**
   * Request message for QuestionsAndAnswers.UpsertAnswer
   */
  export interface Schema$UpsertAnswerRequest {
    /**
     * Required. The new answer.
     */
    answer?: Schema$Answer;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    questions: Resource$Locations$Questions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.questions = new Resource$Locations$Questions(this.context);
    }
  }

  export class Resource$Locations$Questions {
    context: APIRequestContext;
    answers: Resource$Locations$Questions$Answers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.answers = new Resource$Locations$Questions$Answers(this.context);
    }

    /**
     * Adds a question for the specified location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Locations$Questions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Locations$Questions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Question>;
    create(
      params: Params$Resource$Locations$Questions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Locations$Questions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Question>,
      callback: BodyResponseCallback<Schema$Question>
    ): void;
    create(
      params: Params$Resource$Locations$Questions$Create,
      callback: BodyResponseCallback<Schema$Question>
    ): void;
    create(callback: BodyResponseCallback<Schema$Question>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Locations$Questions$Create
        | BodyResponseCallback<Schema$Question>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Question>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Question>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Question> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Questions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Questions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessqanda.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Question>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Question>(parameters);
      }
    }

    /**
     * Deletes a specific question written by the current user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Locations$Questions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Locations$Questions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Locations$Questions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Locations$Questions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Locations$Questions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Locations$Questions$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Questions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Questions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessqanda.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Locations$Questions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Locations$Questions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListQuestionsResponse>;
    list(
      params: Params$Resource$Locations$Questions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Locations$Questions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListQuestionsResponse>,
      callback: BodyResponseCallback<Schema$ListQuestionsResponse>
    ): void;
    list(
      params: Params$Resource$Locations$Questions$List,
      callback: BodyResponseCallback<Schema$ListQuestionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListQuestionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Locations$Questions$List
        | BodyResponseCallback<Schema$ListQuestionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListQuestionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListQuestionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListQuestionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Questions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Questions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessqanda.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListQuestionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListQuestionsResponse>(parameters);
      }
    }

    /**
     * Updates a specific question written by the current user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Locations$Questions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Locations$Questions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Question>;
    patch(
      params: Params$Resource$Locations$Questions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Locations$Questions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Question>,
      callback: BodyResponseCallback<Schema$Question>
    ): void;
    patch(
      params: Params$Resource$Locations$Questions$Patch,
      callback: BodyResponseCallback<Schema$Question>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Question>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Locations$Questions$Patch
        | BodyResponseCallback<Schema$Question>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Question>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Question>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Question> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Questions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Questions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessqanda.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Question>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Question>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Questions$Create
    extends StandardParameters {
    /**
     * Required. The name of the location to write a question for.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Question;
  }
  export interface Params$Resource$Locations$Questions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the question to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Locations$Questions$List
    extends StandardParameters {
    /**
     * Optional. How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.
     */
    answersPerQuestion?: number;
    /**
     * Optional. A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"
     */
    filter?: string;
    /**
     * Optional. The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.
     */
    orderBy?: string;
    /**
     * Optional. How many questions to fetch per page. The default and maximum `page_size` values are 10.
     */
    pageSize?: number;
    /**
     * Optional. If specified, the next page of questions is retrieved.
     */
    pageToken?: string;
    /**
     * Required. The name of the location to fetch questions for.
     */
    parent?: string;
  }
  export interface Params$Resource$Locations$Questions$Patch
    extends StandardParameters {
    /**
     * Immutable. The unique name for the question. locations/x/questions/x This field will be ignored if set during question creation.
     */
    name?: string;
    /**
     * Required. The specific fields to update. Only question text can be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Question;
  }

  export class Resource$Locations$Questions$Answers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the answer written by the current user to a question.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Locations$Questions$Answers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Locations$Questions$Answers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Locations$Questions$Answers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Locations$Questions$Answers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Locations$Questions$Answers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Locations$Questions$Answers$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Questions$Answers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Questions$Answers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessqanda.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/answers:delete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns the paginated list of answers for a specified question.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Locations$Questions$Answers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Locations$Questions$Answers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAnswersResponse>;
    list(
      params: Params$Resource$Locations$Questions$Answers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Locations$Questions$Answers$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAnswersResponse>,
      callback: BodyResponseCallback<Schema$ListAnswersResponse>
    ): void;
    list(
      params: Params$Resource$Locations$Questions$Answers$List,
      callback: BodyResponseCallback<Schema$ListAnswersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAnswersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Locations$Questions$Answers$List
        | BodyResponseCallback<Schema$ListAnswersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAnswersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAnswersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAnswersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Questions$Answers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Questions$Answers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessqanda.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/answers').replace(
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
        createAPIRequest<Schema$ListAnswersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAnswersResponse>(parameters);
      }
    }

    /**
     * Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upsert(
      params: Params$Resource$Locations$Questions$Answers$Upsert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upsert(
      params?: Params$Resource$Locations$Questions$Answers$Upsert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Answer>;
    upsert(
      params: Params$Resource$Locations$Questions$Answers$Upsert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upsert(
      params: Params$Resource$Locations$Questions$Answers$Upsert,
      options: MethodOptions | BodyResponseCallback<Schema$Answer>,
      callback: BodyResponseCallback<Schema$Answer>
    ): void;
    upsert(
      params: Params$Resource$Locations$Questions$Answers$Upsert,
      callback: BodyResponseCallback<Schema$Answer>
    ): void;
    upsert(callback: BodyResponseCallback<Schema$Answer>): void;
    upsert(
      paramsOrCallback?:
        | Params$Resource$Locations$Questions$Answers$Upsert
        | BodyResponseCallback<Schema$Answer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Answer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Answer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Answer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Questions$Answers$Upsert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Questions$Answers$Upsert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessqanda.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/answers:upsert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Answer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Answer>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Questions$Answers$Delete
    extends StandardParameters {
    /**
     * Required. The name of the question to delete an answer for.
     */
    name?: string;
  }
  export interface Params$Resource$Locations$Questions$Answers$List
    extends StandardParameters {
    /**
     * Optional. The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'.
     */
    orderBy?: string;
    /**
     * Optional. How many answers to fetch per page. The default and maximum `page_size` values are 10.
     */
    pageSize?: number;
    /**
     * Optional. If specified, the next page of answers is retrieved.
     */
    pageToken?: string;
    /**
     * Required. The name of the question to fetch answers for.
     */
    parent?: string;
  }
  export interface Params$Resource$Locations$Questions$Answers$Upsert
    extends StandardParameters {
    /**
     * Required. The name of the question to write an answer for.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpsertAnswerRequest;
  }
}
