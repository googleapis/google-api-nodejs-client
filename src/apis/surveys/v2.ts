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

export namespace surveys_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Surveys API
   *
   * Creates and conducts surveys, lists the surveys that an authenticated user owns, and retrieves survey results and information about specified surveys.
   *
   * @example
   * const {google} = require('googleapis');
   * const surveys = google.surveys('v2');
   *
   * @namespace surveys
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Surveys
   */
  export class Surveys {
    context: APIRequestContext;
    results: Resource$Results;
    surveys: Resource$Surveys;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.results = new Resource$Results(this.context);
      this.surveys = new Resource$Surveys(this.context);
    }
  }

  export interface Schema$FieldMask {
    fields?: Schema$FieldMask[];
    id?: number | null;
  }
  export interface Schema$PageInfo {
    resultPerPage?: number | null;
    startIndex?: number | null;
    totalResults?: number | null;
  }
  export interface Schema$ResultsGetRequest {
    resultMask?: Schema$ResultsMask;
  }
  export interface Schema$ResultsMask {
    fields?: Schema$FieldMask[];
    projection?: string | null;
  }
  /**
   * Representation of an individual survey object.
   */
  export interface Schema$Survey {
    /**
     * Targeting-criteria message containing demographic information
     */
    audience?: Schema$SurveyAudience;
    /**
     * Cost to run the survey and collect the necessary number of responses.
     */
    cost?: Schema$SurveyCost;
    /**
     * Additional information to store on behalf of the API consumer and associate with this question. This binary blob is treated as opaque. This field is limited to 64K bytes.
     */
    customerData?: string | null;
    /**
     * Text description of the survey.
     */
    description?: string | null;
    /**
     * List of email addresses for survey owners. Must contain at least the address of the user making the API call.
     */
    owners?: string[] | null;
    /**
     * List of questions defining the survey.
     */
    questions?: Schema$SurveyQuestion[];
    /**
     * Reason for the survey being rejected. Only present if the survey state is rejected.
     */
    rejectionReason?: Schema$SurveyRejection;
    /**
     * State that the survey is in.
     */
    state?: string | null;
    /**
     * Unique survey ID, that is viewable in the URL of the Survey Creator UI
     */
    surveyUrlId?: string | null;
    /**
     * Optional name that will be given to the survey.
     */
    title?: string | null;
    /**
     * Number of responses desired for the survey.
     */
    wantedResponseCount?: number | null;
  }
  /**
   * Specifications for the target audience of a survey run through the API.
   */
  export interface Schema$SurveyAudience {
    /**
     * Optional list of age buckets to target. Supported age buckets are: [&#39;18-24&#39;, &#39;25-34&#39;, &#39;35-44&#39;, &#39;45-54&#39;, &#39;55-64&#39;, &#39;65+&#39;]
     */
    ages?: string[] | null;
    /**
     * Required country code that surveys should be targeted to. Accepts standard ISO 3166-1 2 character language codes. For instance, &#39;US&#39; for the United States, and &#39;GB&#39; for the United Kingdom.
     */
    country?: string | null;
    /**
     * Country subdivision (states/provinces/etc) that surveys should be targeted to. For all countries except GB, ISO-3166-2 subdivision code is required (eg. &#39;US-OH&#39; for Ohio, United States). For GB, NUTS 1 statistical region codes for the United Kingdom is required (eg. &#39;UK-UKC&#39; for North East England).
     */
    countrySubdivision?: string | null;
    /**
     * Optional gender to target.
     */
    gender?: string | null;
    /**
     * Language code that surveys should be targeted to. For instance, &#39;en-US&#39;. Surveys may target bilingual users by specifying a list of language codes (for example, &#39;de&#39; and &#39;en-US&#39;). In that case, all languages will be used for targeting users but the survey content (which is displayed) must match the first language listed. Accepts standard BCP47 language codes. See specification.
     */
    languages?: string[] | null;
    /**
     * Online population source where the respondents are sampled from.
     */
    populationSource?: string | null;
  }
  /**
   * Message defining the cost to run a given survey through API.
   */
  export interface Schema$SurveyCost {
    /**
     * Cost per survey response in nano units of the given currency. To get the total cost for a survey, multiply this value by wanted_response_count.
     */
    costPerResponseNanos?: string | null;
    /**
     * Currency code that the cost is given in.
     */
    currencyCode?: string | null;
    /**
     * *Deprecated* Threshold to start a survey automatically if the quoted price is at most this value. When a survey has a Screener (threshold) question, it must go through an incidence pricing test to determine the final cost per response. Typically you will have to make a followup call to start the survey giving the final computed cost per response. If the survey has no threshold_answers, setting this property will return an error. By specifying this property, you indicate the max price per response you are willing to pay in advance of the incidence test. If the price turns out to be lower than the specified value, the survey will begin immediately and you will be charged at the rate determined by the incidence pricing test. If the price turns out to be greater than the specified value the survey will not be started and you will instead be notified what price was determined by the incidence test. At that point, you must raise the value of this property to be greater than or equal to that cost before attempting to start the survey again. This will immediately start the survey as long the incidence test was run within the last 21 days. This will no longer be available after June 2018.
     */
    maxCostPerResponseNanos?: string | null;
    /**
     * Cost of survey in nano units of the given currency. DEPRECATED in favor of cost_per_response_nanos
     */
    nanos?: string | null;
  }
  /**
   * Message defining the question specifications.
   */
  export interface Schema$SurveyQuestion {
    /**
     * The randomization option for multiple choice and multi-select questions. If not specified, this option defaults to randomize.
     */
    answerOrder?: string | null;
    /**
     * Required list of answer options for a question.
     */
    answers?: string[] | null;
    /**
     * Option to allow open-ended text box for Single Answer and Multiple Answer question types. This can be used with SINGLE_ANSWER, SINGLE_ANSWER_WITH_IMAGE, MULTIPLE_ANSWERS, and MULTIPLE_ANSWERS_WITH_IMAGE question types.
     */
    hasOther?: boolean | null;
    /**
     * For rating questions, the text for the higher end of the scale, such as &#39;Best&#39;. For numeric questions, a string representing a floating-point that is the maximum allowed number for a response.
     */
    highValueLabel?: string | null;
    images?: Schema$SurveyQuestionImage[];
    /**
     * Currently only support pinning an answer option to the last position.
     */
    lastAnswerPositionPinned?: boolean | null;
    /**
     * For rating questions, the text for the lower end of the scale, such as &#39;Worst&#39;. For numeric questions, a string representing a floating-point that is the minimum allowed number for a response.
     */
    lowValueLabel?: string | null;
    /**
     * Option to force the user to pick one of the open text suggestions. This requires that suggestions are provided for this question.
     */
    mustPickSuggestion?: boolean | null;
    /**
     * Number of stars to use for ratings questions.
     */
    numStars?: string | null;
    /**
     * Placeholder text for an open text question.
     */
    openTextPlaceholder?: string | null;
    /**
     * A list of suggested answers for open text question auto-complete. This is only valid if single_line_response is true.
     */
    openTextSuggestions?: string[] | null;
    /**
     * Required question text shown to the respondent.
     */
    question?: string | null;
    /**
     * Used by the Rating Scale with Text question type. This text goes along with the question field that is presented to the respondent, and is the actual text that the respondent is asked to rate.
     */
    sentimentText?: string | null;
    /**
     * Option to allow multiple line open text responses instead of a single line response. Note that we don&#39;t show auto-complete suggestions with multiple line responses.
     */
    singleLineResponse?: boolean | null;
    /**
     * The threshold/screener answer options, which will screen a user into the rest of the survey. These will be a subset of the answer option strings.
     */
    thresholdAnswers?: string[] | null;
    /**
     * Required field defining the question type. For details about configuring different type of questions, consult the question configuration guide.
     */
    type?: string | null;
    /**
     * Optional unit of measurement for display (for example: hours, people, miles).
     */
    unitOfMeasurementLabel?: string | null;
    /**
     * The YouTube video ID to be show in video questions.
     */
    videoId?: string | null;
  }
  /**
   * Container object for image data and alt_text.
   */
  export interface Schema$SurveyQuestionImage {
    /**
     * The alt text property used in image tags is required for all images.
     */
    altText?: string | null;
    /**
     * Inline jpeg, gif, tiff, bmp, or png image raw bytes for an image question types.
     */
    data?: string | null;
    /**
     * The read-only URL for the hosted images.
     */
    url?: string | null;
  }
  /**
   * Message representing why the survey was rejected from review, if it was.
   */
  export interface Schema$SurveyRejection {
    /**
     * A human-readable explanation of what was wrong with the survey.
     */
    explanation?: string | null;
    /**
     * Which category of rejection this was. See the  Google Surveys Help Center for additional details on each category.
     */
    type?: string | null;
  }
  /**
   * Reference to the current results for a given survey.
   */
  export interface Schema$SurveyResults {
    /**
     * Human readable string describing the status of the request.
     */
    status?: string | null;
    /**
     * External survey ID as viewable by survey owners in the editor view.
     */
    surveyUrlId?: string | null;
  }
  export interface Schema$SurveysDeleteResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string | null;
  }
  export interface Schema$SurveysListResponse {
    pageInfo?: Schema$PageInfo;
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string | null;
    /**
     * An individual survey resource.
     */
    resources?: Schema$Survey[];
    tokenPagination?: Schema$TokenPagination;
  }
  export interface Schema$SurveysStartRequest {
    /**
     * *Deprecated* Threshold to start a survey automatically if the quoted prices is less than or equal to this value. See Survey.Cost for more details. This will no longer be available after June 2018.
     */
    maxCostPerResponseNanos?: string | null;
  }
  export interface Schema$SurveysStartResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string | null;
  }
  export interface Schema$SurveysStopResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string | null;
  }
  export interface Schema$TokenPagination {
    nextPageToken?: string | null;
    previousPageToken?: string | null;
  }

  export class Resource$Results {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * surveys.results.get
     * @desc Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an argument to get results.
     * @alias surveys.results.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.surveyUrlId External URL ID for the survey.
     * @param {().ResultsGetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Results$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SurveyResults>;
    get(
      params: Params$Resource$Results$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SurveyResults>,
      callback: BodyResponseCallback<Schema$SurveyResults>
    ): void;
    get(
      params: Params$Resource$Results$Get,
      callback: BodyResponseCallback<Schema$SurveyResults>
    ): void;
    get(callback: BodyResponseCallback<Schema$SurveyResults>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Results$Get
        | BodyResponseCallback<Schema$SurveyResults>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SurveyResults>,
      callback?: BodyResponseCallback<Schema$SurveyResults>
    ): void | GaxiosPromise<Schema$SurveyResults> {
      let params = (paramsOrCallback || {}) as Params$Resource$Results$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Results$Get;
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
              rootUrl + '/surveys/v2/surveys/{surveyUrlId}/results'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SurveyResults>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SurveyResults>(parameters);
      }
    }
  }

  export interface Params$Resource$Results$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * External URL ID for the survey.
     */
    surveyUrlId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResultsGetRequest;
  }

  export class Resource$Surveys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * surveys.surveys.delete
     * @desc Removes a survey from view in all user GET requests.
     * @alias surveys.surveys.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.surveyUrlId External URL ID for the survey.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Surveys$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SurveysDeleteResponse>;
    delete(
      params: Params$Resource$Surveys$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SurveysDeleteResponse>,
      callback: BodyResponseCallback<Schema$SurveysDeleteResponse>
    ): void;
    delete(
      params: Params$Resource$Surveys$Delete,
      callback: BodyResponseCallback<Schema$SurveysDeleteResponse>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SurveysDeleteResponse>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Surveys$Delete
        | BodyResponseCallback<Schema$SurveysDeleteResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SurveysDeleteResponse>,
      callback?: BodyResponseCallback<Schema$SurveysDeleteResponse>
    ): void | GaxiosPromise<Schema$SurveysDeleteResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Surveys$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Surveys$Delete;
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
            url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SurveysDeleteResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SurveysDeleteResponse>(parameters);
      }
    }

    /**
     * surveys.surveys.get
     * @desc Retrieves information about the specified survey.
     * @alias surveys.surveys.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.surveyUrlId External URL ID for the survey.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Surveys$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Survey>;
    get(
      params: Params$Resource$Surveys$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Survey>,
      callback: BodyResponseCallback<Schema$Survey>
    ): void;
    get(
      params: Params$Resource$Surveys$Get,
      callback: BodyResponseCallback<Schema$Survey>
    ): void;
    get(callback: BodyResponseCallback<Schema$Survey>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Surveys$Get
        | BodyResponseCallback<Schema$Survey>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Survey>,
      callback?: BodyResponseCallback<Schema$Survey>
    ): void | GaxiosPromise<Schema$Survey> {
      let params = (paramsOrCallback || {}) as Params$Resource$Surveys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Surveys$Get;
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
            url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Survey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Survey>(parameters);
      }
    }

    /**
     * surveys.surveys.insert
     * @desc Creates a survey.
     * @alias surveys.surveys.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Survey} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Surveys$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Survey>;
    insert(
      params: Params$Resource$Surveys$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Survey>,
      callback: BodyResponseCallback<Schema$Survey>
    ): void;
    insert(
      params: Params$Resource$Surveys$Insert,
      callback: BodyResponseCallback<Schema$Survey>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Survey>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Surveys$Insert
        | BodyResponseCallback<Schema$Survey>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Survey>,
      callback?: BodyResponseCallback<Schema$Survey>
    ): void | GaxiosPromise<Schema$Survey> {
      let params = (paramsOrCallback || {}) as Params$Resource$Surveys$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Surveys$Insert;
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
            url: (rootUrl + '/surveys/v2/surveys').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Survey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Survey>(parameters);
      }
    }

    /**
     * surveys.surveys.list
     * @desc Lists the surveys owned by the authenticated user.
     * @alias surveys.surveys.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults
     * @param {integer=} params.startIndex
     * @param {string=} params.token
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Surveys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SurveysListResponse>;
    list(
      params: Params$Resource$Surveys$List,
      options: MethodOptions | BodyResponseCallback<Schema$SurveysListResponse>,
      callback: BodyResponseCallback<Schema$SurveysListResponse>
    ): void;
    list(
      params: Params$Resource$Surveys$List,
      callback: BodyResponseCallback<Schema$SurveysListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SurveysListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Surveys$List
        | BodyResponseCallback<Schema$SurveysListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SurveysListResponse>,
      callback?: BodyResponseCallback<Schema$SurveysListResponse>
    ): void | GaxiosPromise<Schema$SurveysListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Surveys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Surveys$List;
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
            url: (rootUrl + '/surveys/v2/surveys').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$SurveysListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SurveysListResponse>(parameters);
      }
    }

    /**
     * surveys.surveys.start
     * @desc Begins running a survey.
     * @alias surveys.surveys.start
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceId
     * @param {().SurveysStartRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    start(
      params?: Params$Resource$Surveys$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SurveysStartResponse>;
    start(
      params: Params$Resource$Surveys$Start,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SurveysStartResponse>,
      callback: BodyResponseCallback<Schema$SurveysStartResponse>
    ): void;
    start(
      params: Params$Resource$Surveys$Start,
      callback: BodyResponseCallback<Schema$SurveysStartResponse>
    ): void;
    start(callback: BodyResponseCallback<Schema$SurveysStartResponse>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Surveys$Start
        | BodyResponseCallback<Schema$SurveysStartResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SurveysStartResponse>,
      callback?: BodyResponseCallback<Schema$SurveysStartResponse>
    ): void | GaxiosPromise<Schema$SurveysStartResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Surveys$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Surveys$Start;
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
            url: (rootUrl + '/surveys/v2/surveys/{resourceId}/start').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SurveysStartResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SurveysStartResponse>(parameters);
      }
    }

    /**
     * surveys.surveys.stop
     * @desc Stops a running survey.
     * @alias surveys.surveys.stop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop(
      params?: Params$Resource$Surveys$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SurveysStopResponse>;
    stop(
      params: Params$Resource$Surveys$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$SurveysStopResponse>,
      callback: BodyResponseCallback<Schema$SurveysStopResponse>
    ): void;
    stop(
      params: Params$Resource$Surveys$Stop,
      callback: BodyResponseCallback<Schema$SurveysStopResponse>
    ): void;
    stop(callback: BodyResponseCallback<Schema$SurveysStopResponse>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Surveys$Stop
        | BodyResponseCallback<Schema$SurveysStopResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SurveysStopResponse>,
      callback?: BodyResponseCallback<Schema$SurveysStopResponse>
    ): void | GaxiosPromise<Schema$SurveysStopResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Surveys$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Surveys$Stop;
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
            url: (rootUrl + '/surveys/v2/surveys/{resourceId}/stop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SurveysStopResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SurveysStopResponse>(parameters);
      }
    }

    /**
     * surveys.surveys.update
     * @desc Updates a survey. Currently the only property that can be updated is the owners property.
     * @alias surveys.surveys.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.surveyUrlId External URL ID for the survey.
     * @param {().Survey} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Surveys$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Survey>;
    update(
      params: Params$Resource$Surveys$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Survey>,
      callback: BodyResponseCallback<Schema$Survey>
    ): void;
    update(
      params: Params$Resource$Surveys$Update,
      callback: BodyResponseCallback<Schema$Survey>
    ): void;
    update(callback: BodyResponseCallback<Schema$Survey>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Surveys$Update
        | BodyResponseCallback<Schema$Survey>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Survey>,
      callback?: BodyResponseCallback<Schema$Survey>
    ): void | GaxiosPromise<Schema$Survey> {
      let params = (paramsOrCallback || {}) as Params$Resource$Surveys$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Surveys$Update;
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
            url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Survey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Survey>(parameters);
      }
    }
  }

  export interface Params$Resource$Surveys$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * External URL ID for the survey.
     */
    surveyUrlId?: string;
  }
  export interface Params$Resource$Surveys$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * External URL ID for the survey.
     */
    surveyUrlId?: string;
  }
  export interface Params$Resource$Surveys$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Survey;
  }
  export interface Params$Resource$Surveys$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    maxResults?: number;
    /**
     *
     */
    startIndex?: number;
    /**
     *
     */
    token?: string;
  }
  export interface Params$Resource$Surveys$Start extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SurveysStartRequest;
  }
  export interface Params$Resource$Surveys$Stop extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    resourceId?: string;
  }
  export interface Params$Resource$Surveys$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * External URL ID for the survey.
     */
    surveyUrlId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Survey;
  }
}
