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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace surveys_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  /**
   * Surveys API
   *
   * Creates and conducts surveys, lists the surveys that an authenticated user
   * owns, and retrieves survey results and information about specified surveys.
   *
   * @example
   * const google = require('googleapis');
   * const surveys = google.surveys('v2');
   *
   * @namespace surveys
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Surveys
   */
  export class Surveys {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    mobileapppanels: Resource$Mobileapppanels;
    results: Resource$Results;
    surveys: Resource$Surveys;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.mobileapppanels = new Resource$Mobileapppanels(this);
      this.results = new Resource$Results(this);
      this.surveys = new Resource$Surveys(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$FieldMask {
    fields?: Schema$FieldMask[];
    id?: number;
  }
  /**
   * Representation of an individual pre-defined panel object defining a
   * targeted audience of opinion rewards mobile app users.
   */
  export interface Schema$MobileAppPanel {
    /**
     * Country code for the country of the users that the panel contains. Uses
     * standard ISO 3166-1 2-character language codes. For instance,
     * &#39;US&#39; for the United States, and &#39;GB&#39; for the United
     * Kingdom. Any survey created targeting this panel must also target the
     * corresponding country.
     */
    country?: string;
    /**
     * Whether or not the panel is accessible to all API users.
     */
    isPublicPanel?: boolean;
    /**
     * Language code that the panel can target. For instance, &#39;en-US&#39;.
     * Uses standard BCP47 language codes. See specification. Any survey created
     * targeting this panel must also target the corresponding language.
     */
    language?: string;
    /**
     * Unique panel ID string. This corresponds to the mobile_app_panel_id used
     * in Survey Insert requests.
     */
    mobileAppPanelId?: string;
    /**
     * Human readable name of the audience panel.
     */
    name?: string;
    /**
     * List of email addresses for users who can target members of this panel.
     * Must contain at least the address of the user making the API call for
     * panels that are not public. This field will be empty for public panels.
     */
    owners?: string[];
  }
  export interface Schema$MobileAppPanelsListResponse {
    pageInfo?: Schema$PageInfo;
    /**
     * Unique request ID used for logging and debugging. Please include in any
     * error reporting or troubleshooting requests.
     */
    requestId?: string;
    /**
     * An individual predefined panel of Opinion Rewards mobile users.
     */
    resources?: Schema$MobileAppPanel[];
    tokenPagination?: Schema$TokenPagination;
  }
  export interface Schema$PageInfo {
    resultPerPage?: number;
    startIndex?: number;
    totalResults?: number;
  }
  export interface Schema$ResultsGetRequest {
    resultMask?: Schema$ResultsMask;
  }
  export interface Schema$ResultsMask {
    fields?: Schema$FieldMask[];
    projection?: string;
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
     * Additional information to store on behalf of the API consumer and
     * associate with this question. This binary blob is treated as opaque. This
     * field is limited to 64K bytes.
     */
    customerData?: string;
    /**
     * Text description of the survey.
     */
    description?: string;
    /**
     * List of email addresses for survey owners. Must contain at least the
     * address of the user making the API call.
     */
    owners?: string[];
    /**
     * List of questions defining the survey.
     */
    questions?: Schema$SurveyQuestion[];
    /**
     * Reason for the survey being rejected. Only present if the survey state is
     * rejected.
     */
    rejectionReason?: Schema$SurveyRejection;
    /**
     * State that the survey is in.
     */
    state?: string;
    /**
     * Unique survey ID, that is viewable in the URL of the Survey Creator UI
     */
    surveyUrlId?: string;
    /**
     * Optional name that will be given to the survey.
     */
    title?: string;
    /**
     * Number of responses desired for the survey.
     */
    wantedResponseCount?: number;
  }
  /**
   * Specifications for the target audience of a survey run through the API.
   */
  export interface Schema$SurveyAudience {
    /**
     * Optional list of age buckets to target. Supported age buckets are:
     * [&#39;18-24&#39;, &#39;25-34&#39;, &#39;35-44&#39;, &#39;45-54&#39;,
     * &#39;55-64&#39;, &#39;65+&#39;]
     */
    ages?: string[];
    /**
     * Required country code that surveys should be targeted to. Accepts
     * standard ISO 3166-1 2 character language codes. For instance,
     * &#39;US&#39; for the United States, and &#39;GB&#39; for the United
     * Kingdom.
     */
    country?: string;
    /**
     * Country subdivision (states/provinces/etc) that surveys should be
     * targeted to. For all countries except GB, ISO-3166-2 subdivision code is
     * required (eg. &#39;US-OH&#39; for Ohio, United States). For GB, NUTS 1
     * statistical region codes for the United Kingdom is required (eg.
     * &#39;UK-UKC&#39; for North East England).
     */
    countrySubdivision?: string;
    /**
     * Optional gender to target.
     */
    gender?: string;
    /**
     * Language code that surveys should be targeted to. For instance,
     * &#39;en-US&#39;. Surveys may target bilingual users by specifying a list
     * of language codes (for example, &#39;de&#39; and &#39;en-US&#39;). In
     * that case, all languages will be used for targeting users but the survey
     * content (which is displayed) must match the first language listed.
     * Accepts standard BCP47 language codes. See specification.
     */
    languages?: string[];
    /**
     * Key for predefined panel that causes survey to be sent to a predefined
     * set of Opinion Rewards App users. You must set PopulationSource to
     * ANDROID_APP_PANEL to use this field.
     */
    mobileAppPanelId?: string;
    /**
     * Online population source where the respondents are sampled from.
     */
    populationSource?: string;
  }
  /**
   * Message defining the cost to run a given survey through API.
   */
  export interface Schema$SurveyCost {
    /**
     * Cost per survey response in nano units of the given currency. To get the
     * total cost for a survey, multiply this value by wanted_response_count.
     */
    costPerResponseNanos?: string;
    /**
     * Currency code that the cost is given in.
     */
    currencyCode?: string;
    /**
     * Threshold to start a survey automatically if the quoted price is at most
     * this value. When a survey has a Screener (threshold) question, it must go
     * through an incidence pricing test to determine the final cost per
     * response. Typically you will have to make a followup call to start the
     * survey giving the final computed cost per response. If the survey has no
     * threshold_answers, setting this property will return an error. By
     * specifying this property, you indicate the max price per response you are
     * willing to pay in advance of the incidence test. If the price turns out
     * to be lower than the specified value, the survey will begin immediately
     * and you will be charged at the rate determined by the incidence pricing
     * test. If the price turns out to be greater than the specified value the
     * survey will not be started and you will instead be notified what price
     * was determined by the incidence test. At that point, you must raise the
     * value of this property to be greater than or equal to that cost before
     * attempting to start the survey again. This will immediately start the
     * survey as long the incidence test was run within the last 21 days.
     */
    maxCostPerResponseNanos?: string;
    /**
     * Cost of survey in nano units of the given currency. DEPRECATED in favor
     * of cost_per_response_nanos
     */
    nanos?: string;
  }
  /**
   * Message defining the question specifications.
   */
  export interface Schema$SurveyQuestion {
    /**
     * The randomization option for multiple choice and multi-select questions.
     * If not specified, this option defaults to randomize.
     */
    answerOrder?: string;
    /**
     * Required list of answer options for a question.
     */
    answers?: string[];
    /**
     * Option to allow open-ended text box for Single Answer and Multiple Answer
     * question types. This can be used with SINGLE_ANSWER,
     * SINGLE_ANSWER_WITH_IMAGE, MULTIPLE_ANSWERS, and
     * MULTIPLE_ANSWERS_WITH_IMAGE question types.
     */
    hasOther?: boolean;
    /**
     * For rating questions, the text for the higher end of the scale, such as
     * &#39;Best&#39;. For numeric questions, a string representing a
     * floating-point that is the maximum allowed number for a response.
     */
    highValueLabel?: string;
    images?: Schema$SurveyQuestionImage[];
    /**
     * Currently only support pinning an answer option to the last position.
     */
    lastAnswerPositionPinned?: boolean;
    /**
     * For rating questions, the text for the lower end of the scale, such as
     * &#39;Worst&#39;. For numeric questions, a string representing a
     * floating-point that is the minimum allowed number for a response.
     */
    lowValueLabel?: string;
    /**
     * Option to force the user to pick one of the open text suggestions. This
     * requires that suggestions are provided for this question.
     */
    mustPickSuggestion?: boolean;
    /**
     * Number of stars to use for ratings questions.
     */
    numStars?: string;
    /**
     * Placeholder text for an open text question.
     */
    openTextPlaceholder?: string;
    /**
     * A list of suggested answers for open text question auto-complete. This is
     * only valid if single_line_response is true.
     */
    openTextSuggestions?: string[];
    /**
     * Required question text shown to the respondent.
     */
    question?: string;
    /**
     * Used by the Rating Scale with Text question type. This text goes along
     * with the question field that is presented to the respondent, and is the
     * actual text that the respondent is asked to rate.
     */
    sentimentText?: string;
    /**
     * Option to allow multiple line open text responses instead of a single
     * line response. Note that we don&#39;t show auto-complete suggestions with
     * multiple line responses.
     */
    singleLineResponse?: boolean;
    /**
     * The threshold/screener answer options, which will screen a user into the
     * rest of the survey. These will be a subset of the answer option strings.
     */
    thresholdAnswers?: string[];
    /**
     * Required field defining the question type. For details about configuring
     * different type of questions, consult the question configuration guide.
     */
    type?: string;
    /**
     * Optional unit of measurement for display (for example: hours, people,
     * miles).
     */
    unitOfMeasurementLabel?: string;
    /**
     * The YouTube video ID to be show in video questions.
     */
    videoId?: string;
  }
  /**
   * Container object for image data and alt_text.
   */
  export interface Schema$SurveyQuestionImage {
    /**
     * The alt text property used in image tags is required for all images.
     */
    altText?: string;
    /**
     * Inline jpeg, gif, tiff, bmp, or png image raw bytes for an image question
     * types.
     */
    data?: string;
    /**
     * The read-only URL for the hosted images.
     */
    url?: string;
  }
  /**
   * Message representing why the survey was rejected from review, if it was.
   */
  export interface Schema$SurveyRejection {
    /**
     * A human-readable explanation of what was wrong with the survey.
     */
    explanation?: string;
    /**
     * Which category of rejection this was. See the  Google Surveys Help Center
     * for additional details on each category.
     */
    type?: string;
  }
  /**
   * Reference to the current results for a given survey.
   */
  export interface Schema$SurveyResults {
    /**
     * Human readable string describing the status of the request.
     */
    status?: string;
    /**
     * External survey ID as viewable by survey owners in the editor view.
     */
    surveyUrlId?: string;
  }
  export interface Schema$SurveysDeleteResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any
     * error reporting or troubleshooting requests.
     */
    requestId?: string;
  }
  export interface Schema$SurveysListResponse {
    pageInfo?: Schema$PageInfo;
    /**
     * Unique request ID used for logging and debugging. Please include in any
     * error reporting or troubleshooting requests.
     */
    requestId?: string;
    /**
     * An individual survey resource.
     */
    resources?: Schema$Survey[];
    tokenPagination?: Schema$TokenPagination;
  }
  export interface Schema$SurveysStartRequest {
    /**
     * Threshold to start a survey automically if the quoted prices is less than
     * or equal to this value. See Survey.Cost for more details.
     */
    maxCostPerResponseNanos?: string;
  }
  export interface Schema$SurveysStartResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any
     * error reporting or troubleshooting requests.
     */
    requestId?: string;
  }
  export interface Schema$SurveysStopResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any
     * error reporting or troubleshooting requests.
     */
    requestId?: string;
  }
  export interface Schema$TokenPagination {
    nextPageToken?: string;
    previousPageToken?: string;
  }


  export class Resource$Mobileapppanels {
    root: Surveys;
    constructor(root: Surveys) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * surveys.mobileapppanels.get
     * @desc Retrieves a MobileAppPanel that is available to the authenticated
     * user.
     * @alias surveys.mobileapppanels.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.panelId External URL ID for the panel.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Mobileapppanels$Get,
        options?: MethodOptions): AxiosPromise<Schema$MobileAppPanel>;
    get(params: Params$Resource$Mobileapppanels$Get,
        options: MethodOptions|BodyResponseCallback<Schema$MobileAppPanel>,
        callback: BodyResponseCallback<Schema$MobileAppPanel>): void;
    get(params: Params$Resource$Mobileapppanels$Get,
        callback: BodyResponseCallback<Schema$MobileAppPanel>): void;
    get(callback: BodyResponseCallback<Schema$MobileAppPanel>): void;
    get(paramsOrCallback?: Params$Resource$Mobileapppanels$Get|
        BodyResponseCallback<Schema$MobileAppPanel>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$MobileAppPanel>,
        callback?: BodyResponseCallback<Schema$MobileAppPanel>):
        void|AxiosPromise<Schema$MobileAppPanel> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Mobileapppanels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobileapppanels$Get;
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
              url: (rootUrl + '/surveys/v2/mobileAppPanels/{panelId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['panelId'],
        pathParams: ['panelId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$MobileAppPanel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MobileAppPanel>(parameters);
      }
    }


    /**
     * surveys.mobileapppanels.list
     * @desc Lists the MobileAppPanels available to the authenticated user.
     * @alias surveys.mobileapppanels.list
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
        params?: Params$Resource$Mobileapppanels$List, options?: MethodOptions):
        AxiosPromise<Schema$MobileAppPanelsListResponse>;
    list(
        params: Params$Resource$Mobileapppanels$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$MobileAppPanelsListResponse>,
        callback: BodyResponseCallback<Schema$MobileAppPanelsListResponse>):
        void;
    list(
        params: Params$Resource$Mobileapppanels$List,
        callback: BodyResponseCallback<Schema$MobileAppPanelsListResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$MobileAppPanelsListResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Mobileapppanels$List|
        BodyResponseCallback<Schema$MobileAppPanelsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$MobileAppPanelsListResponse>,
        callback?: BodyResponseCallback<Schema$MobileAppPanelsListResponse>):
        void|AxiosPromise<Schema$MobileAppPanelsListResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Mobileapppanels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobileapppanels$List;
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
              url: (rootUrl + '/surveys/v2/mobileAppPanels')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$MobileAppPanelsListResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$MobileAppPanelsListResponse>(parameters);
      }
    }


    /**
     * surveys.mobileapppanels.update
     * @desc Updates a MobileAppPanel. Currently the only property that can be
     * updated is the owners property.
     * @alias surveys.mobileapppanels.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.panelId External URL ID for the panel.
     * @param {().MobileAppPanel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Mobileapppanels$Update,
        options?: MethodOptions): AxiosPromise<Schema$MobileAppPanel>;
    update(
        params: Params$Resource$Mobileapppanels$Update,
        options: MethodOptions|BodyResponseCallback<Schema$MobileAppPanel>,
        callback: BodyResponseCallback<Schema$MobileAppPanel>): void;
    update(
        params: Params$Resource$Mobileapppanels$Update,
        callback: BodyResponseCallback<Schema$MobileAppPanel>): void;
    update(callback: BodyResponseCallback<Schema$MobileAppPanel>): void;
    update(
        paramsOrCallback?: Params$Resource$Mobileapppanels$Update|
        BodyResponseCallback<Schema$MobileAppPanel>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$MobileAppPanel>,
        callback?: BodyResponseCallback<Schema$MobileAppPanel>):
        void|AxiosPromise<Schema$MobileAppPanel> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Mobileapppanels$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobileapppanels$Update;
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
              url: (rootUrl + '/surveys/v2/mobileAppPanels/{panelId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['panelId'],
        pathParams: ['panelId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$MobileAppPanel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MobileAppPanel>(parameters);
      }
    }
  }

  export interface Params$Resource$Mobileapppanels$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * External URL ID for the panel.
     */
    panelId?: string;
  }
  export interface Params$Resource$Mobileapppanels$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
  export interface Params$Resource$Mobileapppanels$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * External URL ID for the panel.
     */
    panelId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MobileAppPanel;
  }


  export class Resource$Results {
    root: Surveys;
    constructor(root: Surveys) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * surveys.results.get
     * @desc Retrieves any survey results that have been produced so far.
     * Results are formatted as an Excel file. You must add "?alt=media" to the
     * URL as an argument to get results.
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
    get(params?: Params$Resource$Results$Get,
        options?: MethodOptions): AxiosPromise<Schema$SurveyResults>;
    get(params: Params$Resource$Results$Get,
        options: MethodOptions|BodyResponseCallback<Schema$SurveyResults>,
        callback: BodyResponseCallback<Schema$SurveyResults>): void;
    get(params: Params$Resource$Results$Get,
        callback: BodyResponseCallback<Schema$SurveyResults>): void;
    get(callback: BodyResponseCallback<Schema$SurveyResults>): void;
    get(paramsOrCallback?: Params$Resource$Results$Get|
        BodyResponseCallback<Schema$SurveyResults>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SurveyResults>,
        callback?: BodyResponseCallback<Schema$SurveyResults>):
        void|AxiosPromise<Schema$SurveyResults> {
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
              url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}/results')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SurveyResults>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SurveyResults>(parameters);
      }
    }
  }

  export interface Params$Resource$Results$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    root: Surveys;
    constructor(root: Surveys) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
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
    delete(params?: Params$Resource$Surveys$Delete, options?: MethodOptions):
        AxiosPromise<Schema$SurveysDeleteResponse>;
    delete(
        params: Params$Resource$Surveys$Delete,
        options: MethodOptions|
        BodyResponseCallback<Schema$SurveysDeleteResponse>,
        callback: BodyResponseCallback<Schema$SurveysDeleteResponse>): void;
    delete(
        params: Params$Resource$Surveys$Delete,
        callback: BodyResponseCallback<Schema$SurveysDeleteResponse>): void;
    delete(callback: BodyResponseCallback<Schema$SurveysDeleteResponse>): void;
    delete(
        paramsOrCallback?: Params$Resource$Surveys$Delete|
        BodyResponseCallback<Schema$SurveysDeleteResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SurveysDeleteResponse>,
        callback?: BodyResponseCallback<Schema$SurveysDeleteResponse>):
        void|AxiosPromise<Schema$SurveysDeleteResponse> {
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
              url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: this.getRoot()
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
    get(params?: Params$Resource$Surveys$Get,
        options?: MethodOptions): AxiosPromise<Schema$Survey>;
    get(params: Params$Resource$Surveys$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Survey>,
        callback: BodyResponseCallback<Schema$Survey>): void;
    get(params: Params$Resource$Surveys$Get,
        callback: BodyResponseCallback<Schema$Survey>): void;
    get(callback: BodyResponseCallback<Schema$Survey>): void;
    get(paramsOrCallback?: Params$Resource$Surveys$Get|
        BodyResponseCallback<Schema$Survey>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Survey>,
        callback?: BodyResponseCallback<Schema$Survey>):
        void|AxiosPromise<Schema$Survey> {
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
              url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: this.getRoot()
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
    insert(params?: Params$Resource$Surveys$Insert, options?: MethodOptions):
        AxiosPromise<Schema$Survey>;
    insert(
        params: Params$Resource$Surveys$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Survey>,
        callback: BodyResponseCallback<Schema$Survey>): void;
    insert(
        params: Params$Resource$Surveys$Insert,
        callback: BodyResponseCallback<Schema$Survey>): void;
    insert(callback: BodyResponseCallback<Schema$Survey>): void;
    insert(
        paramsOrCallback?: Params$Resource$Surveys$Insert|
        BodyResponseCallback<Schema$Survey>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Survey>,
        callback?: BodyResponseCallback<Schema$Survey>):
        void|AxiosPromise<Schema$Survey> {
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
              url: (rootUrl + '/surveys/v2/surveys')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
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
    list(params?: Params$Resource$Surveys$List, options?: MethodOptions):
        AxiosPromise<Schema$SurveysListResponse>;
    list(
        params: Params$Resource$Surveys$List,
        options: MethodOptions|BodyResponseCallback<Schema$SurveysListResponse>,
        callback: BodyResponseCallback<Schema$SurveysListResponse>): void;
    list(
        params: Params$Resource$Surveys$List,
        callback: BodyResponseCallback<Schema$SurveysListResponse>): void;
    list(callback: BodyResponseCallback<Schema$SurveysListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Surveys$List|
        BodyResponseCallback<Schema$SurveysListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SurveysListResponse>,
        callback?: BodyResponseCallback<Schema$SurveysListResponse>):
        void|AxiosPromise<Schema$SurveysListResponse> {
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
              url: (rootUrl + '/surveys/v2/surveys')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
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
    start(params?: Params$Resource$Surveys$Start, options?: MethodOptions):
        AxiosPromise<Schema$SurveysStartResponse>;
    start(
        params: Params$Resource$Surveys$Start,
        options: MethodOptions|
        BodyResponseCallback<Schema$SurveysStartResponse>,
        callback: BodyResponseCallback<Schema$SurveysStartResponse>): void;
    start(
        params: Params$Resource$Surveys$Start,
        callback: BodyResponseCallback<Schema$SurveysStartResponse>): void;
    start(callback: BodyResponseCallback<Schema$SurveysStartResponse>): void;
    start(
        paramsOrCallback?: Params$Resource$Surveys$Start|
        BodyResponseCallback<Schema$SurveysStartResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SurveysStartResponse>,
        callback?: BodyResponseCallback<Schema$SurveysStartResponse>):
        void|AxiosPromise<Schema$SurveysStartResponse> {
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
              url: (rootUrl + '/surveys/v2/surveys/{resourceId}/start')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.getRoot()
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
    stop(params?: Params$Resource$Surveys$Stop, options?: MethodOptions):
        AxiosPromise<Schema$SurveysStopResponse>;
    stop(
        params: Params$Resource$Surveys$Stop,
        options: MethodOptions|BodyResponseCallback<Schema$SurveysStopResponse>,
        callback: BodyResponseCallback<Schema$SurveysStopResponse>): void;
    stop(
        params: Params$Resource$Surveys$Stop,
        callback: BodyResponseCallback<Schema$SurveysStopResponse>): void;
    stop(callback: BodyResponseCallback<Schema$SurveysStopResponse>): void;
    stop(
        paramsOrCallback?: Params$Resource$Surveys$Stop|
        BodyResponseCallback<Schema$SurveysStopResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SurveysStopResponse>,
        callback?: BodyResponseCallback<Schema$SurveysStopResponse>):
        void|AxiosPromise<Schema$SurveysStopResponse> {
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
              url: (rootUrl + '/surveys/v2/surveys/{resourceId}/stop')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SurveysStopResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SurveysStopResponse>(parameters);
      }
    }


    /**
     * surveys.surveys.update
     * @desc Updates a survey. Currently the only property that can be updated
     * is the owners property.
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
    update(params?: Params$Resource$Surveys$Update, options?: MethodOptions):
        AxiosPromise<Schema$Survey>;
    update(
        params: Params$Resource$Surveys$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Survey>,
        callback: BodyResponseCallback<Schema$Survey>): void;
    update(
        params: Params$Resource$Surveys$Update,
        callback: BodyResponseCallback<Schema$Survey>): void;
    update(callback: BodyResponseCallback<Schema$Survey>): void;
    update(
        paramsOrCallback?: Params$Resource$Surveys$Update|
        BodyResponseCallback<Schema$Survey>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Survey>,
        callback?: BodyResponseCallback<Schema$Survey>):
        void|AxiosPromise<Schema$Survey> {
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
              url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['surveyUrlId'],
        pathParams: ['surveyUrlId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Survey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Survey>(parameters);
      }
    }
  }

  export interface Params$Resource$Surveys$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * External URL ID for the survey.
     */
    surveyUrlId?: string;
  }
  export interface Params$Resource$Surveys$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * External URL ID for the survey.
     */
    surveyUrlId?: string;
  }
  export interface Params$Resource$Surveys$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Survey;
  }
  export interface Params$Resource$Surveys$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
  export interface Params$Resource$Surveys$Start {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SurveysStartRequest;
  }
  export interface Params$Resource$Surveys$Stop {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    resourceId?: string;
  }
  export interface Params$Resource$Surveys$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
