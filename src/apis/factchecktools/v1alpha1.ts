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

export namespace factchecktools_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
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
   * Fact Check Tools API
   *
   *
   *
   * @example
   * const {google} = require('googleapis');
   * const factchecktools = google.factchecktools('v1alpha1');
   *
   * @namespace factchecktools
   * @type {Function}
   * @version v1alpha1
   * @variation v1alpha1
   * @param {object=} options Options for Factchecktools
   */
  export class Factchecktools {
    context: APIRequestContext;
    claims: Resource$Claims;
    pages: Resource$Pages;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.claims = new Resource$Claims(this.context);
      this.pages = new Resource$Pages(this.context);
    }
  }

  /**
   * Information about the claim.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1Claim {
    /**
     * A person or organization stating the claim. For instance, &quot;John Doe&quot;.
     */
    claimant?: string | null;
    /**
     * The date that the claim was made.
     */
    claimDate?: string | null;
    /**
     * One or more reviews of this claim (namely, a fact-checking article).
     */
    claimReview?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[];
    /**
     * The claim text. For instance, &quot;Crime has doubled in the last 2 years.&quot;
     */
    text?: string | null;
  }
  /**
   * Information about the claim author.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor {
    /**
     * Corresponds to `ClaimReview.itemReviewed.author.image`.
     */
    imageUrl?: string | null;
    /**
     * Corresponds to `ClaimReview.itemReviewed.author.jobTitle`.
     */
    jobTitle?: string | null;
    /**
     * A person or organization stating the claim. For instance, &quot;John Doe&quot;.&lt;br&gt; Corresponds to `ClaimReview.itemReviewed.author.name`.
     */
    name?: string | null;
    /**
     * Corresponds to `ClaimReview.itemReviewed.author.sameAs`.
     */
    sameAs?: string | null;
  }
  /**
   * Information about the claim rating.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating {
    /**
     * For numeric ratings, the best value possible in the scale from worst to best.&lt;br&gt; Corresponds to `ClaimReview.reviewRating.bestRating`.
     */
    bestRating?: number | null;
    /**
     * Corresponds to `ClaimReview.reviewRating.image`.
     */
    imageUrl?: string | null;
    /**
     * Corresponds to `ClaimReview.reviewRating.ratingExplanation`.
     */
    ratingExplanation?: string | null;
    /**
     * A numeric rating of this claim, in the range worstRating — bestRating inclusive.&lt;br&gt; Corresponds to `ClaimReview.reviewRating.ratingValue`.
     */
    ratingValue?: number | null;
    /**
     * The truthfulness rating as a human-readible short word or phrase.&lt;br&gt; Corresponds to `ClaimReview.reviewRating.alternateName`.
     */
    textualRating?: string | null;
    /**
     * For numeric ratings, the worst value possible in the scale from worst to best.&lt;br&gt; Corresponds to `ClaimReview.reviewRating.worstRating`.
     */
    worstRating?: number | null;
  }
  /**
   * Information about a claim review.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview {
    /**
     * The language this review was written in. For instance, &quot;en&quot; or &quot;de&quot;.
     */
    languageCode?: string | null;
    /**
     * The publisher of this claim review.
     */
    publisher?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1Publisher;
    /**
     * The date the claim was reviewed.
     */
    reviewDate?: string | null;
    /**
     * Textual rating. For instance, &quot;Mostly false&quot;.
     */
    textualRating?: string | null;
    /**
     * The title of this claim review, if it can be determined.
     */
    title?: string | null;
    /**
     * The URL of this claim review.
     */
    url?: string | null;
  }
  /**
   * Information about the claim review author.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor {
    /**
     * Corresponds to `ClaimReview.author.image`.
     */
    imageUrl?: string | null;
    /**
     * Name of the organization that is publishing the fact check.&lt;br&gt; Corresponds to `ClaimReview.author.name`.
     */
    name?: string | null;
  }
  /**
   * Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup {
    /**
     * A list of links to works in which this claim appears, aside from the one specified in `claim_first_appearance`.&lt;br&gt; Corresponds to `ClaimReview.itemReviewed[@type=Claim].appearance.url`.
     */
    claimAppearances?: string[] | null;
    /**
     * Info about the author of this claim.
     */
    claimAuthor?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;
    /**
     * The date when the claim was made or entered public discourse.&lt;br&gt; Corresponds to `ClaimReview.itemReviewed.datePublished`.
     */
    claimDate?: string | null;
    /**
     * A link to a work in which this claim first appears.&lt;br&gt; Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`.
     */
    claimFirstAppearance?: string | null;
    /**
     * The location where this claim was made.&lt;br&gt; Corresponds to `ClaimReview.itemReviewed.name`.
     */
    claimLocation?: string | null;
    /**
     * A short summary of the claim being evaluated.&lt;br&gt; Corresponds to `ClaimReview.claimReviewed`.
     */
    claimReviewed?: string | null;
    /**
     * Info about the rating of this claim review.
     */
    rating?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;
    /**
     * This field is optional, and will default to the page URL. We provide this field to allow you the override the default value, but the only permitted override is the page URL plus an optional anchor link (&quot;page jump&quot;).&lt;br&gt; Corresponds to `ClaimReview.url`
     */
    url?: string | null;
  }
  /**
   * Holds one or more instances of `ClaimReview` markup for a webpage.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage {
    /**
     * Info about the author of this claim review. Similar to the above, semantically these are page-level fields, and each `ClaimReview` on this page will contain the same values.
     */
    claimReviewAuthor?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;
    /**
     * A list of individual claim reviews for this page. Each item in the list corresponds to one `ClaimReview` element.
     */
    claimReviewMarkups?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[];
    /**
     * The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.
     */
    name?: string | null;
    /**
     * The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden.&lt;br&gt; Corresponds to `ClaimReview.url`
     */
    pageUrl?: string | null;
    /**
     * The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value.&lt;br&gt; Corresponds to `ClaimReview.datePublished`
     */
    publishDate?: string | null;
    /**
     * The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user.
     */
    versionId?: string | null;
  }
  /**
   * Response from searching fact-checked claims.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse {
    /**
     * The list of claims and all of their associated information.
     */
    claims?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1Claim[];
    /**
     * The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response from listing `ClaimReview` markup.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse {
    /**
     * The result list of pages of `ClaimReview` markup.
     */
    claimReviewMarkupPages?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[];
    /**
     * The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Information about the publisher.
   */
  export interface Schema$GoogleFactcheckingFactchecktoolsV1alpha1Publisher {
    /**
     * The name of this publisher. For instance, &quot;Awesome Fact Checks&quot;.
     */
    name?: string | null;
    /**
     * Host-level site name, without the protocol or &quot;www&quot; prefix. For instance, &quot;awesomefactchecks.com&quot;. This value of this field is based purely on the claim review URL.
     */
    site?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobufEmpty {}

  export class Resource$Claims {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * factchecktools.claims.search
     * @desc Search through fact-checked claims.
     * @alias factchecktools.claims.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.
     * @param {integer=} params.maxAgeDays The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer.
     * @param {integer=} params.offset An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
     * @param {integer=} params.pageSize The pagination size. We will return up to that many results. Defaults to 10 if not set.
     * @param {string=} params.pageToken The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
     * @param {string=} params.query Textual query string. Required unless `review_publisher_site_filter` is specified.
     * @param {string=} params.reviewPublisherSiteFilter The review publisher site to filter results by, e.g. nytimes.com.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
      params?: Params$Resource$Claims$Search,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
    >;
    search(
      params: Params$Resource$Claims$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
      >
    ): void;
    search(
      params: Params$Resource$Claims$Search,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
      >
    ): void;
    search(
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
      >
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Claims$Search
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
    > {
      let params = (paramsOrCallback || {}) as Params$Resource$Claims$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Claims$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://factchecktools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/claims:search').replace(
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
        createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Claims$Search extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.
     */
    languageCode?: string;
    /**
     * The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer.
     */
    maxAgeDays?: number;
    /**
     * An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
     */
    offset?: number;
    /**
     * The pagination size. We will return up to that many results. Defaults to 10 if not set.
     */
    pageSize?: number;
    /**
     * The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
     */
    pageToken?: string;
    /**
     * Textual query string. Required unless `review_publisher_site_filter` is specified.
     */
    query?: string;
    /**
     * The review publisher site to filter results by, e.g. nytimes.com.
     */
    reviewPublisherSiteFilter?: string;
  }

  export class Resource$Pages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * factchecktools.pages.create
     * @desc Create `ClaimReview` markup on a page.
     * @alias factchecktools.pages.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Pages$Create,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
    >;
    create(
      params: Params$Resource$Pages$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    create(
      params: Params$Resource$Pages$Create,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Pages$Create
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void | GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
    > {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://factchecktools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/pages').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        >(parameters);
      }
    }

    /**
     * factchecktools.pages.delete
     * @desc Delete all `ClaimReview` markup on a page.
     * @alias factchecktools.pages.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to delete, in the form of `pages/{page_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Pages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Pages$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Pages$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Pages$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void | GaxiosPromise<Schema$GoogleProtobufEmpty> {
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

      const rootUrl =
        options.rootUrl || 'https://factchecktools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * factchecktools.pages.get
     * @desc Get all `ClaimReview` markup on a page.
     * @alias factchecktools.pages.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the resource to get, in the form of `pages/{page_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Pages$Get,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
    >;
    get(
      params: Params$Resource$Pages$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    get(
      params: Params$Resource$Pages$Get,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Pages$Get
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void | GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
    > {
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

      const rootUrl =
        options.rootUrl || 'https://factchecktools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        >(parameters);
      }
    }

    /**
     * factchecktools.pages.list
     * @desc List the `ClaimReview` markup pages for a specific URL or for an organization.
     * @alias factchecktools.pages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.offset An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset, and if the request is not for a specific URL. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
     * @param {string=} params.organization The organization for which we want to fetch markups for. For instance, "site.com". Cannot be specified along with an URL.
     * @param {integer=} params.pageSize The pagination size. We will return up to that many results. Defaults to 10 if not set. Has no effect if a URL is requested.
     * @param {string=} params.pageToken The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
     * @param {string=} params.url The URL from which to get `ClaimReview` markup. There will be at most one result. If markup is associated with a more canonical version of the URL provided, we will return that URL instead. Cannot be specified along with an organization.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Pages$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
    >;
    list(
      params: Params$Resource$Pages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
      >
    ): void;
    list(
      params: Params$Resource$Pages$List,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Pages$List
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
    > {
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

      const rootUrl =
        options.rootUrl || 'https://factchecktools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/pages').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
        >(parameters);
      }
    }

    /**
     * factchecktools.pages.update
     * @desc Update for all `ClaimReview` markup on a page  Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
     * @alias factchecktools.pages.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.
     * @param {().GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Pages$Update,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
    >;
    update(
      params: Params$Resource$Pages$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    update(
      params: Params$Resource$Pages$Update,
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    update(
      callback: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Pages$Update
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
      >
    ): void | GaxiosPromise<
      Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
    > {
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

      const rootUrl =
        options.rootUrl || 'https://factchecktools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Pages$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
  }
  export interface Params$Resource$Pages$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the resource to delete, in the form of `pages/{page_id}`.
     */
    name?: string;
  }
  export interface Params$Resource$Pages$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the resource to get, in the form of `pages/{page_id}`.
     */
    name?: string;
  }
  export interface Params$Resource$Pages$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset, and if the request is not for a specific URL. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
     */
    offset?: number;
    /**
     * The organization for which we want to fetch markups for. For instance, "site.com". Cannot be specified along with an URL.
     */
    organization?: string;
    /**
     * The pagination size. We will return up to that many results. Defaults to 10 if not set. Has no effect if a URL is requested.
     */
    pageSize?: number;
    /**
     * The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
     */
    pageToken?: string;
    /**
     * The URL from which to get `ClaimReview` markup. There will be at most one result. If markup is associated with a more canonical version of the URL provided, we will return that URL instead. Cannot be specified along with an organization.
     */
    url?: string;
  }
  export interface Params$Resource$Pages$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
  }
}
