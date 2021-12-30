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

export namespace recaptchaenterprise_v1 {
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
   * reCAPTCHA Enterprise API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const recaptchaenterprise = google.recaptchaenterprise('v1');
   * ```
   */
  export class Recaptchaenterprise {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Account Defender risk assessment.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment {
    /**
     * Labels for this request.
     */
    labels?: string[] | null;
    /**
     * Recommended action after this request.
     */
    recommendedAction?: string | null;
  }
  /**
   * Settings specific to keys that can be used by Android apps.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AndroidKeySettings {
    /**
     * If set to true, allowed_package_names are not enforced.
     */
    allowAllPackageNames?: boolean | null;
    /**
     * Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
     */
    allowedPackageNames?: string[] | null;
  }
  /**
   * The request message to annotate an Assessment.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest {
    /**
     * Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.
     */
    annotation?: string | null;
    /**
     * Optional. Optional unique stable hashed user identifier to apply to the assessment. This is an alternative to setting the hashed_account_id in CreateAssessment, for example when the account identifier is not yet known in the initial request. It is recommended that the identifier is hashed using hmac-sha256 with stable secret.
     */
    hashedAccountId?: string | null;
    /**
     * Optional. Optional reasons for the annotation that will be assigned to the Event.
     */
    reasons?: string[] | null;
  }
  /**
   * Empty response for AnnotateAssessment.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse {}
  /**
   * A recaptcha assessment resource.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Assessment {
    /**
     * Assessment returned by Account Defender when a hashed_account_id is provided.
     */
    accountDefenderAssessment?: Schema$GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
    /**
     * The event being assessed.
     */
    event?: Schema$GoogleCloudRecaptchaenterpriseV1Event;
    /**
     * Output only. The resource name for the Assessment in the format "projects/{project\}/assessments/{assessment\}".
     */
    name?: string | null;
    /**
     * Output only. The risk analysis result for the event being assessed.
     */
    riskAnalysis?: Schema$GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
    /**
     * Output only. Properties of the provided event token.
     */
    tokenProperties?: Schema$GoogleCloudRecaptchaenterpriseV1TokenProperties;
  }
  /**
   * Metrics related to challenges.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ChallengeMetrics {
    /**
     * Count of submitted challenge solutions that were incorrect or otherwise deemed suspicious such that a subsequent challenge was triggered.
     */
    failedCount?: string | null;
    /**
     * Count of nocaptchas (successful verification without a challenge) issued.
     */
    nocaptchaCount?: string | null;
    /**
     * Count of reCAPTCHA checkboxes or badges rendered. This is mostly equivalent to a count of pageloads for pages that include reCAPTCHA.
     */
    pageloadCount?: string | null;
    /**
     * Count of nocaptchas (successful verification without a challenge) plus submitted challenge solutions that were correct and resulted in verification.
     */
    passedCount?: string | null;
  }
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Event {
    /**
     * Optional. The expected action for this type of event. This should be the same action provided at token generation time on client-side platforms already integrated with recaptcha enterprise.
     */
    expectedAction?: string | null;
    /**
     * Optional. The site key that was used to invoke reCAPTCHA on your site and generate the token.
     */
    siteKey?: string | null;
    /**
     * Optional. The user response token provided by the reCAPTCHA client-side integration on your site.
     */
    token?: string | null;
    /**
     * Optional. The user agent present in the request from the user's device related to this event.
     */
    userAgent?: string | null;
    /**
     * Optional. The IP address in the request from the user's device related to this event.
     */
    userIpAddress?: string | null;
  }
  /**
   * Settings specific to keys that can be used by iOS apps.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1IOSKeySettings {
    /**
     * If set to true, allowed_bundle_ids are not enforced.
     */
    allowAllBundleIds?: boolean | null;
    /**
     * iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
     */
    allowedBundleIds?: string[] | null;
  }
  /**
   * A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Key {
    /**
     * Settings for keys that can be used by Android apps.
     */
    androidSettings?: Schema$GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
    /**
     * The timestamp corresponding to the creation of this Key.
     */
    createTime?: string | null;
    /**
     * Human-readable display name of this key. Modifiable by user.
     */
    displayName?: string | null;
    /**
     * Settings for keys that can be used by iOS apps.
     */
    iosSettings?: Schema$GoogleCloudRecaptchaenterpriseV1IOSKeySettings;
    /**
     * See Creating and managing labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name for the Key in the format "projects/{project\}/keys/{key\}".
     */
    name?: string | null;
    /**
     * Options for user acceptance testing.
     */
    testingOptions?: Schema$GoogleCloudRecaptchaenterpriseV1TestingOptions;
    /**
     * Settings for WAF
     */
    wafSettings?: Schema$GoogleCloudRecaptchaenterpriseV1WafSettings;
    /**
     * Settings for keys that can be used by websites.
     */
    webSettings?: Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettings;
  }
  /**
   * Response to request to list keys in a project.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse {
    /**
     * Key details.
     */
    keys?: Schema$GoogleCloudRecaptchaenterpriseV1Key[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no keys remain in results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response to a `ListRelatedAccountGroupMemberships` call.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The memberships listed by the query.
     */
    relatedAccountGroupMemberships?: Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
  }
  /**
   * The response to a `ListRelatedAccountGroups` call.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The groups of related accounts listed by the query.
     */
    relatedAccountGroups?: Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[];
  }
  /**
   * Metrics for a single Key.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Metrics {
    /**
     * Metrics will be continuous and in order by dates, and in the granularity of day. Only challenge-based keys (CHECKBOX, INVISIBLE), will have challenge-based data.
     */
    challengeMetrics?: Schema$GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[];
    /**
     * Output only. The name of the metrics, in the format "projects/{project\}/keys/{key\}/metrics".
     */
    name?: string | null;
    /**
     * Metrics will be continuous and in order by dates, and in the granularity of day. All Key types should have score-based data.
     */
    scoreMetrics?: Schema$GoogleCloudRecaptchaenterpriseV1ScoreMetrics[];
    /**
     * Inclusive start time aligned to a day (UTC).
     */
    startTime?: string | null;
  }
  /**
   * The migrate key request message.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest {}
  /**
   * A group of related accounts.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup {
    /**
     * Required. The resource name for the related account group in the format `projects/{project\}/relatedaccountgroups/{related_account_group\}`.
     */
    name?: string | null;
  }
  /**
   * A membership in a group of related accounts.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership {
    /**
     * The unique stable hashed user identifier of the member. The identifier corresponds to a `hashed_account_id` provided in a previous CreateAssessment or AnnotateAssessment call.
     */
    hashedAccountId?: string | null;
    /**
     * Required. The resource name for this membership in the format `projects/{project\}/relatedaccountgroups/{relatedaccountgroup\}/memberships/{membership\}`.
     */
    name?: string | null;
  }
  /**
   * Risk analysis result for an event.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RiskAnalysis {
    /**
     * Reasons contributing to the risk analysis verdict.
     */
    reasons?: string[] | null;
    /**
     * Legitimate event score from 0.0 to 1.0. (1.0 means very likely legitimate traffic while 0.0 means very likely non-legitimate traffic).
     */
    score?: number | null;
  }
  /**
   * Score distribution.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ScoreDistribution {
    /**
     * Map key is score value multiplied by 100. The scores are discrete values between [0, 1]. The maximum number of buckets is on order of a few dozen, but typically much lower (ie. 10).
     */
    scoreBuckets?: {[key: string]: string} | null;
  }
  /**
   * Metrics related to scoring.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ScoreMetrics {
    /**
     * Action-based metrics. The map key is the action name which specified by the site owners at time of the "execute" client-side call. Populated only for SCORE keys.
     */
    actionMetrics?: {
      [key: string]: Schema$GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
    } | null;
    /**
     * Aggregated score metrics for all traffic.
     */
    overallMetrics?: Schema$GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
  }
  /**
   * The request message to search related account group memberships.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest {
    /**
     * Optional. The unique stable hashed user identifier we should search connections to. The identifier should correspond to a `hashed_account_id` provided in a previous CreateAssessment or AnnotateAssessment call.
     */
    hashedAccountId?: string | null;
    /**
     * Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 50 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number | null;
    /**
     * Optional. A page token, received from a previous `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchRelatedAccountGroupMemberships` must match the call that provided the page token.
     */
    pageToken?: string | null;
  }
  /**
   * The response to a `SearchRelatedAccountGroupMemberships` call.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The queried memberships.
     */
    relatedAccountGroupMemberships?: Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
  }
  /**
   * Options for user acceptance testing.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TestingOptions {
    /**
     * For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE.
     */
    testingChallenge?: string | null;
    /**
     * All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
     */
    testingScore?: number | null;
  }
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TokenProperties {
    /**
     * Action name provided at token generation.
     */
    action?: string | null;
    /**
     * The timestamp corresponding to the generation of the token.
     */
    createTime?: string | null;
    /**
     * The hostname of the page on which the token was generated.
     */
    hostname?: string | null;
    /**
     * Reason associated with the response when valid = false.
     */
    invalidReason?: string | null;
    /**
     * Whether the provided user response token is valid. When valid = false, the reason could be specified in invalid_reason or it could also be due to a user failing to solve a challenge or a sitekey mismatch (i.e the sitekey used to generate the token was different than the one specified in the assessment).
     */
    valid?: boolean | null;
  }
  /**
   * Settings specific to keys that can be used for WAF (Web Application Firewall).
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1WafSettings {
    /**
     * Required. The WAF feature for which this key is enabled.
     */
    wafFeature?: string | null;
    /**
     * Required. The WAF service that uses this key.
     */
    wafService?: string | null;
  }
  /**
   * Settings specific to keys that can be used by websites.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettings {
    /**
     * If set to true, it means allowed_domains will not be enforced.
     */
    allowAllDomains?: boolean | null;
    /**
     * If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
     */
    allowAmpTraffic?: boolean | null;
    /**
     * Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
     */
    allowedDomains?: string[] | null;
    /**
     * Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE.
     */
    challengeSecurityPreference?: string | null;
    /**
     * Required. Describes how this key is integrated with the website.
     */
    integrationType?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$GoogleProtobufEmpty {}

  export class Resource$Projects {
    context: APIRequestContext;
    assessments: Resource$Projects$Assessments;
    keys: Resource$Projects$Keys;
    relatedaccountgroupmemberships: Resource$Projects$Relatedaccountgroupmemberships;
    relatedaccountgroups: Resource$Projects$Relatedaccountgroups;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assessments = new Resource$Projects$Assessments(this.context);
      this.keys = new Resource$Projects$Keys(this.context);
      this.relatedaccountgroupmemberships =
        new Resource$Projects$Relatedaccountgroupmemberships(this.context);
      this.relatedaccountgroups = new Resource$Projects$Relatedaccountgroups(
        this.context
      );
    }
  }

  export class Resource$Projects$Assessments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.assessments.annotate({
     *     // Required. The resource name of the Assessment, in the format "projects/{project\}/assessments/{assessment\}".
     *     name: 'projects/my-project/assessments/my-assessment',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotation": "my_annotation",
     *       //   "hashedAccountId": "my_hashedAccountId",
     *       //   "reasons": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    annotate(
      params: Params$Resource$Projects$Assessments$Annotate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    annotate(
      params?: Params$Resource$Projects$Assessments$Annotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>;
    annotate(
      params: Params$Resource$Projects$Assessments$Annotate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    annotate(
      params: Params$Resource$Projects$Assessments$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
    ): void;
    annotate(
      params: Params$Resource$Projects$Assessments$Annotate,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Assessments$Annotate
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Assessments$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Assessments$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:annotate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>(
          parameters
        );
      }
    }

    /**
     * Creates an Assessment of the likelihood an event is legitimate.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.assessments.create({
     *     // Required. The name of the project in which the assessment will be created, in the format "projects/{project\}".
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountDefenderAssessment": {},
     *       //   "event": {},
     *       //   "name": "my_name",
     *       //   "riskAnalysis": {},
     *       //   "tokenProperties": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountDefenderAssessment": {},
     *   //   "event": {},
     *   //   "name": "my_name",
     *   //   "riskAnalysis": {},
     *   //   "tokenProperties": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Assessments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Assessments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>;
    create(
      params: Params$Resource$Projects$Assessments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Assessments$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
    ): void;
    create(
      params: Params$Resource$Projects$Assessments$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Assessments$Create
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Assessments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Assessments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assessments').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Assessments$Annotate
    extends StandardParameters {
    /**
     * Required. The resource name of the Assessment, in the format "projects/{project\}/assessments/{assessment\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
  }
  export interface Params$Resource$Projects$Assessments$Create
    extends StandardParameters {
    /**
     * Required. The name of the project in which the assessment will be created, in the format "projects/{project\}".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1Assessment;
  }

  export class Resource$Projects$Keys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new reCAPTCHA Enterprise key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.create({
     *     // Required. The name of the project in which the key will be created, in the format "projects/{project\}".
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "iosSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "testingOptions": {},
     *       //   "wafSettings": {},
     *       //   "webSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "iosSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "testingOptions": {},
     *   //   "wafSettings": {},
     *   //   "webSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Keys$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Keys$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Key>;
    create(
      params: Params$Resource$Projects$Keys$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Keys$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    create(
      params: Params$Resource$Projects$Keys$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Create
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Key>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/keys').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.delete({
     *     // Required. The name of the key to be deleted, in the format "projects/{project\}/keys/{key\}".
     *     name: 'projects/my-project/keys/my-key',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Keys$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Keys$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Keys$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Keys$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Keys$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Returns the specified key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.get({
     *     // Required. The name of the requested key, in the format "projects/{project\}/keys/{key\}".
     *     name: 'projects/my-project/keys/my-key',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "iosSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "testingOptions": {},
     *   //   "wafSettings": {},
     *   //   "webSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Keys$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Keys$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Key>;
    get(
      params: Params$Resource$Projects$Keys$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Keys$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    get(
      params: Params$Resource$Projects$Keys$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Get
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Key>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters
        );
      }
    }

    /**
     * Get some aggregated metrics for a Key. This data can be used to build dashboards.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.getMetrics({
     *     // Required. The name of the requested metrics, in the format "projects/{project\}/keys/{key\}/metrics".
     *     name: 'projects/my-project/keys/my-key/metrics',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "challengeMetrics": [],
     *   //   "name": "my_name",
     *   //   "scoreMetrics": [],
     *   //   "startTime": "my_startTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getMetrics(
      params: Params$Resource$Projects$Keys$Getmetrics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getMetrics(
      params?: Params$Resource$Projects$Keys$Getmetrics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>;
    getMetrics(
      params: Params$Resource$Projects$Keys$Getmetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMetrics(
      params: Params$Resource$Projects$Keys$Getmetrics,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
    ): void;
    getMetrics(
      params: Params$Resource$Projects$Keys$Getmetrics,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
    ): void;
    getMetrics(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
    ): void;
    getMetrics(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Getmetrics
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Getmetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Getmetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all keys that belong to a project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.list({
     *     // Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project that contains the keys that will be listed, in the format "projects/{project\}".
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keys": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Keys$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Keys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>;
    list(
      params: Params$Resource$Projects$Keys$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Keys$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Keys$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$List
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/keys').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>(
          parameters
        );
      }
    }

    /**
     * Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.migrate({
     *     // Required. The name of the key to be migrated, in the format "projects/{project\}/keys/{key\}".
     *     name: 'projects/my-project/keys/my-key',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "iosSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "testingOptions": {},
     *   //   "wafSettings": {},
     *   //   "webSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    migrate(
      params: Params$Resource$Projects$Keys$Migrate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    migrate(
      params?: Params$Resource$Projects$Keys$Migrate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Key>;
    migrate(
      params: Params$Resource$Projects$Keys$Migrate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    migrate(
      params: Params$Resource$Projects$Keys$Migrate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    migrate(
      params: Params$Resource$Projects$Keys$Migrate,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    migrate(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    migrate(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Migrate
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Key>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Migrate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Migrate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:migrate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters
        );
      }
    }

    /**
     * Updates the specified key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.patch({
     *     // The resource name for the Key in the format "projects/{project\}/keys/{key\}".
     *     name: 'projects/my-project/keys/my-key',
     *     // Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "iosSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "testingOptions": {},
     *       //   "wafSettings": {},
     *       //   "webSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "iosSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "testingOptions": {},
     *   //   "wafSettings": {},
     *   //   "webSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Keys$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Keys$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Key>;
    patch(
      params: Params$Resource$Projects$Keys$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Keys$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    patch(
      params: Params$Resource$Projects$Keys$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Patch
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1Key>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Keys$Create
    extends StandardParameters {
    /**
     * Required. The name of the project in which the key will be created, in the format "projects/{project\}".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1Key;
  }
  export interface Params$Resource$Projects$Keys$Delete
    extends StandardParameters {
    /**
     * Required. The name of the key to be deleted, in the format "projects/{project\}/keys/{key\}".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Keys$Get
    extends StandardParameters {
    /**
     * Required. The name of the requested key, in the format "projects/{project\}/keys/{key\}".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Keys$Getmetrics
    extends StandardParameters {
    /**
     * Required. The name of the requested metrics, in the format "projects/{project\}/keys/{key\}/metrics".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Keys$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the project that contains the keys that will be listed, in the format "projects/{project\}".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Keys$Migrate
    extends StandardParameters {
    /**
     * Required. The name of the key to be migrated, in the format "projects/{project\}/keys/{key\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest;
  }
  export interface Params$Resource$Projects$Keys$Patch
    extends StandardParameters {
    /**
     * The resource name for the Key in the format "projects/{project\}/keys/{key\}".
     */
    name?: string;
    /**
     * Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1Key;
  }

  export class Resource$Projects$Relatedaccountgroupmemberships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Search group memberships related to a given account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recaptchaenterprise.projects.relatedaccountgroupmemberships.search({
     *       // Required. The name of the project to search related account group memberships from, in the format "projects/{project\}".
     *       project: 'projects/my-project',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "hashedAccountId": "my_hashedAccountId",
     *         //   "pageSize": 0,
     *         //   "pageToken": "my_pageToken"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "relatedAccountGroupMemberships": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>;
    search(
      params: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Relatedaccountgroupmemberships$Search
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Relatedaccountgroupmemberships$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Relatedaccountgroupmemberships$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+project}/relatedaccountgroupmemberships:search'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Relatedaccountgroupmemberships$Search
    extends StandardParameters {
    /**
     * Required. The name of the project to search related account group memberships from, in the format "projects/{project\}".
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest;
  }

  export class Resource$Projects$Relatedaccountgroups {
    context: APIRequestContext;
    memberships: Resource$Projects$Relatedaccountgroups$Memberships;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.memberships = new Resource$Projects$Relatedaccountgroups$Memberships(
        this.context
      );
    }

    /**
     * List groups of related accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.relatedaccountgroups.list({
     *     // Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 50 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list related account groups from, in the format "projects/{project\}".
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "relatedAccountGroups": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Relatedaccountgroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Relatedaccountgroups$List
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Relatedaccountgroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Relatedaccountgroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/relatedaccountgroups').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Relatedaccountgroups$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 50 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list related account groups from, in the format "projects/{project\}".
     */
    parent?: string;
  }

  export class Resource$Projects$Relatedaccountgroups$Memberships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the memberships in a group of related accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await recaptchaenterprise.projects.relatedaccountgroups.memberships.list({
     *       // Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 50 accounts will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name for the related account group in the format `projects/{project\}/relatedaccountgroups/{relatedaccountgroup\}`.
     *       parent: 'projects/my-project/relatedaccountgroups/my-relatedaccountgroup',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "relatedAccountGroupMemberships": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Relatedaccountgroups$Memberships$List
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Relatedaccountgroups$Memberships$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Relatedaccountgroups$Memberships$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Relatedaccountgroups$Memberships$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 50 accounts will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name for the related account group in the format `projects/{project\}/relatedaccountgroups/{relatedaccountgroup\}`.
     */
    parent?: string;
  }
}
