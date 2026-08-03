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
  GaxiosResponseWithHTTP2,
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

export namespace webcontentpublisher_v1 {
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
   * Web Content Publisher API
   *
   * webcontentpublisher.googleapis.com API, a service for web content publishers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const webcontentpublisher = google.webcontentpublisher('v1');
   * ```
   */
  export class Webcontentpublisher {
    context: APIRequestContext;
    organizations: Resource$Organizations;
    publications: Resource$Publications;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
      this.publications = new Resource$Publications(this.context);
    }
  }

  /**
   * Response message for CheckFreeAccess
   */
  export interface Schema$CheckFreeAccessResponse {
    /**
     * Output only. True if free access should be allowed, false otherwise.
     */
    isAllowed?: boolean | null;
  }
  /**
   * The content policy status of the publication, indicating any violations.
   */
  export interface Schema$ContentPolicyStatus {
    /**
     * Output only. URL pointing to more details about the policy violation or status.
     */
    policyInfoUrl?: string | null;
    /**
     * Output only. The current policy state.
     */
    state?: string | null;
  }
  /**
   * Represents a Call-To-Action (CTA) configuration for a publication.
   */
  export interface Schema$Cta {
    /**
     * Required. The user-visible display name of the CTA.
     */
    displayName?: string | null;
    /**
     * Identifier. The resource name of the Cta. Format: organizations/{organization\}/publications/{publication\}/ctas/{cta\}
     */
    name?: string | null;
    /**
     * Optional. Configuration specific to newsletter signup CTAs. Only populated if type is `NEWSLETTER_SIGNUP`.
     */
    newsletterConfig?: Schema$NewsletterConfig;
    /**
     * Output only. The current state of this CTA.
     */
    state?: string | null;
    /**
     * Required. The type of this CTA.
     */
    type?: string | null;
  }
  /**
   * Represents a domain property associated with a publication, typically used to verify ownership and scope access.
   */
  export interface Schema$DomainProperty {
    /**
     * Optional. Whether the domain ownership has been verified (e.g., via Google Search Console).
     */
    ownershipVerified?: boolean | null;
    /**
     * Required. The URL of the domain property (e.g., "https://example.com").
     */
    url?: string | null;
  }
  /**
   * Response message for `ListCtas`.
   */
  export interface Schema$ListCtasResponse {
    /**
     * Output only. The list of CTAs.
     */
    ctas?: Schema$Cta[];
    /**
     * Output only. A token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for `ListPublications`.
   */
  export interface Schema$ListPublicationsResponse {
    /**
     * Output only. A token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The list of publications.
     */
    publications?: Schema$Publication[];
  }
  /**
   * Configuration for newsletter signup calls-to-action (CTAs).
   */
  export interface Schema$NewsletterConfig {
    /**
     * Optional. Custom consent or disclosure text shown to the user.
     */
    customConsentText?: string | null;
    /**
     * Optional. A custom message displayed to the user in the signup prompt.
     */
    customMessage?: string | null;
    /**
     * Optional. Whether the user is required to provide their name to sign up.
     */
    nameRequired?: boolean | null;
    /**
     * Required. The title of the newsletter signup prompt.
     */
    title?: string | null;
  }
  /**
   * Represents a publisher's publication in Reader Revenue Manager.
   */
  export interface Schema$Publication {
    /**
     * Optional. Additional domain properties verified for the publication.
     */
    additionalDomains?: Schema$DomainProperty[];
    /**
     * Output only. The content policy compliance status of the publication.
     */
    contentPolicyStatus?: Schema$ContentPolicyStatus;
    /**
     * Required. The user-visible display name of the publication.
     */
    displayName?: string | null;
    /**
     * Required. The primary language of the publication (BCP-47 code, e.g., "en-US").
     */
    languageCode?: string | null;
    /**
     * Identifier. The resource name of the publication. Format: organizations/{organization\}/publications/{publication\}
     */
    name?: string | null;
    /**
     * Output only. The current onboarding state.
     */
    onboardingState?: string | null;
    /**
     * Output only. The unique identifier of the organization that owns this publication.
     */
    organizationId?: string | null;
    /**
     * Output only. The configured payment option.
     */
    paymentOption?: string | null;
    /**
     * Required. The primary domain property associated with the publication.
     */
    primaryDomain?: Schema$DomainProperty;
    /**
     * Output only. The list of active products/features enabled for this publication.
     */
    products?: string[] | null;
    /**
     * Output only. The unique identifier of the publication.
     */
    publicationId?: string | null;
    /**
     * Optional. The URL to the publisher's Privacy Policy.
     */
    publicationPrivacyPolicyUrl?: string | null;
    /**
     * Optional. The URL to the publisher's own Terms of Service.
     */
    publicationTosUrl?: string | null;
    /**
     * Optional. The publication entity type (for-profit vs non-profit). Defaults to FOR_PROFIT if omitted.
     */
    publicationType?: string | null;
    /**
     * Required. The ISO 3166-1 alpha-2 region code where the publication is registered (e.g., "US").
     */
    regionCode?: string | null;
    /**
     * Optional. Reader Revenue Manager product settings and status.
     */
    rrmProduct?: Schema$RrmProduct;
    /**
     * Optional. Subscription Linking product configurations.
     */
    slProduct?: Schema$SlProduct;
  }
  /**
   * Configuration and status of the Reader Revenue Manager (RRM) product for a publication.
   */
  export interface Schema$RrmProduct {
    /**
     * Optional. Whether the RRM product is enabled for the publication.
     */
    enabled?: boolean | null;
    /**
     * Output only. The URL to the product-specific Terms of Service.
     */
    productTosUrl?: string | null;
    /**
     * Optional. The details of the TOS acceptance.
     */
    tosAcceptance?: Schema$TosAcceptance;
  }
  /**
   * Subscription Linking (SL) product settings and status.
   */
  export interface Schema$SlProduct {
    /**
     * Optional. Whether the Subscription Linking product is enabled.
     */
    enabled?: boolean | null;
    /**
     * Optional. The Google Cloud Project number associated with the publication.
     */
    gcpProjectNumber?: string | null;
  }
  /**
   * Details about the acceptance of the Terms of Service (TOS).
   */
  export interface Schema$TosAcceptance {
    /**
     * Optional. Whether the user opted in to receive product updates and email communications.
     */
    emailOptIn?: boolean | null;
    /**
     * Optional. The name of the person who accepted the TOS.
     */
    signer?: string | null;
    /**
     * Optional. The job title or role of the signer.
     */
    signerTitle?: string | null;
    /**
     * Required. Whether the user has accepted the Terms of Service.
     */
    userAccepted?: boolean | null;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    publications: Resource$Organizations$Publications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.publications = new Resource$Organizations$Publications(this.context);
    }
  }

  export class Resource$Organizations$Publications {
    context: APIRequestContext;
    ctas: Resource$Organizations$Publications$Ctas;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.ctas = new Resource$Organizations$Publications$Ctas(this.context);
    }

    /**
     * Creates a publication.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.manage',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.organizations.publications.create({
     *     // Required. The parent resource where this publication will be created. Format: `organizations/{organization\}`.
     *     parent: 'organizations/my-organization',
     *     // Optional. The unique identifier of the publication to create. If not specified, the server will generate a random publication ID.
     *     publicationId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalDomains": [],
     *       //   "contentPolicyStatus": {},
     *       //   "displayName": "my_displayName",
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "onboardingState": "my_onboardingState",
     *       //   "organizationId": "my_organizationId",
     *       //   "paymentOption": "my_paymentOption",
     *       //   "primaryDomain": {},
     *       //   "products": [],
     *       //   "publicationId": "my_publicationId",
     *       //   "publicationPrivacyPolicyUrl": "my_publicationPrivacyPolicyUrl",
     *       //   "publicationTosUrl": "my_publicationTosUrl",
     *       //   "publicationType": "my_publicationType",
     *       //   "regionCode": "my_regionCode",
     *       //   "rrmProduct": {},
     *       //   "slProduct": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalDomains": [],
     *   //   "contentPolicyStatus": {},
     *   //   "displayName": "my_displayName",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "onboardingState": "my_onboardingState",
     *   //   "organizationId": "my_organizationId",
     *   //   "paymentOption": "my_paymentOption",
     *   //   "primaryDomain": {},
     *   //   "products": [],
     *   //   "publicationId": "my_publicationId",
     *   //   "publicationPrivacyPolicyUrl": "my_publicationPrivacyPolicyUrl",
     *   //   "publicationTosUrl": "my_publicationTosUrl",
     *   //   "publicationType": "my_publicationType",
     *   //   "regionCode": "my_regionCode",
     *   //   "rrmProduct": {},
     *   //   "slProduct": {}
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
      params: Params$Resource$Organizations$Publications$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Publications$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Publication>>;
    create(
      params: Params$Resource$Organizations$Publications$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Publications$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Publication>,
      callback: BodyResponseCallback<Schema$Publication>
    ): void;
    create(
      params: Params$Resource$Organizations$Publications$Create,
      callback: BodyResponseCallback<Schema$Publication>
    ): void;
    create(callback: BodyResponseCallback<Schema$Publication>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Publications$Create
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Publication>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Publications$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Publications$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/publications').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Publication>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Publication>(parameters);
      }
    }

    /**
     * Gets a publication.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.manage',
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.organizations.publications.get({
     *     // Required. The resource name of the publication to retrieve. Format: `organizations/{organization\}/publications/{publication\}`.
     *     name: 'organizations/my-organization/publications/my-publication',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalDomains": [],
     *   //   "contentPolicyStatus": {},
     *   //   "displayName": "my_displayName",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "onboardingState": "my_onboardingState",
     *   //   "organizationId": "my_organizationId",
     *   //   "paymentOption": "my_paymentOption",
     *   //   "primaryDomain": {},
     *   //   "products": [],
     *   //   "publicationId": "my_publicationId",
     *   //   "publicationPrivacyPolicyUrl": "my_publicationPrivacyPolicyUrl",
     *   //   "publicationTosUrl": "my_publicationTosUrl",
     *   //   "publicationType": "my_publicationType",
     *   //   "regionCode": "my_regionCode",
     *   //   "rrmProduct": {},
     *   //   "slProduct": {}
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
      params: Params$Resource$Organizations$Publications$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Publications$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Publication>>;
    get(
      params: Params$Resource$Organizations$Publications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Publications$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Publication>,
      callback: BodyResponseCallback<Schema$Publication>
    ): void;
    get(
      params: Params$Resource$Organizations$Publications$Get,
      callback: BodyResponseCallback<Schema$Publication>
    ): void;
    get(callback: BodyResponseCallback<Schema$Publication>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Publications$Get
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Publication>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Publications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Publications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Publication>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Publication>(parameters);
      }
    }

    /**
     * Lists publications.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.manage',
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.organizations.publications.list({
     *     // Optional. A filter expression to filter the publications returned.
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of publications to return. The service may return fewer than this value. If unspecified, at most 50 publications will be returned.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListPublications` call, to retrieve the next page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent organization whose publications to list. Format: `organizations/{organization\}`.
     *     parent: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "publications": []
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
      params: Params$Resource$Organizations$Publications$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Publications$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPublicationsResponse>>;
    list(
      params: Params$Resource$Organizations$Publications$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Publications$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListPublicationsResponse>,
      callback: BodyResponseCallback<Schema$ListPublicationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Publications$List,
      callback: BodyResponseCallback<Schema$ListPublicationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPublicationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Publications$List
        | BodyResponseCallback<Schema$ListPublicationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPublicationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPublicationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPublicationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Publications$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Publications$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/publications').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPublicationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPublicationsResponse>(parameters);
      }
    }

    /**
     * Updates a publication.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.manage',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.organizations.publications.patch({
     *     // Identifier. The resource name of the publication. Format: organizations/{organization\}/publications/{publication\}
     *     name: 'organizations/my-organization/publications/my-publication',
     *     // Optional. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalDomains": [],
     *       //   "contentPolicyStatus": {},
     *       //   "displayName": "my_displayName",
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "onboardingState": "my_onboardingState",
     *       //   "organizationId": "my_organizationId",
     *       //   "paymentOption": "my_paymentOption",
     *       //   "primaryDomain": {},
     *       //   "products": [],
     *       //   "publicationId": "my_publicationId",
     *       //   "publicationPrivacyPolicyUrl": "my_publicationPrivacyPolicyUrl",
     *       //   "publicationTosUrl": "my_publicationTosUrl",
     *       //   "publicationType": "my_publicationType",
     *       //   "regionCode": "my_regionCode",
     *       //   "rrmProduct": {},
     *       //   "slProduct": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalDomains": [],
     *   //   "contentPolicyStatus": {},
     *   //   "displayName": "my_displayName",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "onboardingState": "my_onboardingState",
     *   //   "organizationId": "my_organizationId",
     *   //   "paymentOption": "my_paymentOption",
     *   //   "primaryDomain": {},
     *   //   "products": [],
     *   //   "publicationId": "my_publicationId",
     *   //   "publicationPrivacyPolicyUrl": "my_publicationPrivacyPolicyUrl",
     *   //   "publicationTosUrl": "my_publicationTosUrl",
     *   //   "publicationType": "my_publicationType",
     *   //   "regionCode": "my_regionCode",
     *   //   "rrmProduct": {},
     *   //   "slProduct": {}
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
      params: Params$Resource$Organizations$Publications$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Organizations$Publications$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Publication>>;
    patch(
      params: Params$Resource$Organizations$Publications$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Publications$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Publication>,
      callback: BodyResponseCallback<Schema$Publication>
    ): void;
    patch(
      params: Params$Resource$Organizations$Publications$Patch,
      callback: BodyResponseCallback<Schema$Publication>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Publication>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Publications$Patch
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Publication>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Publication>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Publications$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Publications$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Publication>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Publication>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Publications$Create extends StandardParameters {
    /**
     * Required. The parent resource where this publication will be created. Format: `organizations/{organization\}`.
     */
    parent?: string;
    /**
     * Optional. The unique identifier of the publication to create. If not specified, the server will generate a random publication ID.
     */
    publicationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Publication;
  }
  export interface Params$Resource$Organizations$Publications$Get extends StandardParameters {
    /**
     * Required. The resource name of the publication to retrieve. Format: `organizations/{organization\}/publications/{publication\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Publications$List extends StandardParameters {
    /**
     * Optional. A filter expression to filter the publications returned.
     */
    filter?: string;
    /**
     * Optional. The maximum number of publications to return. The service may return fewer than this value. If unspecified, at most 50 publications will be returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPublications` call, to retrieve the next page.
     */
    pageToken?: string;
    /**
     * Required. The parent organization whose publications to list. Format: `organizations/{organization\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Publications$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the publication. Format: organizations/{organization\}/publications/{publication\}
     */
    name?: string;
    /**
     * Optional. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Publication;
  }

  export class Resource$Organizations$Publications$Ctas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a CTA.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.manage',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.organizations.publications.ctas.create({
     *     // Optional. The unique identifier of the CTA to create. If not specified, the server will generate a random CTA ID.
     *     ctaId: 'placeholder-value',
     *     // Required. The parent publication resource where this CTA will be created. Format: `organizations/{organization\}/publications/{publication\}`.
     *     parent: 'organizations/my-organization/publications/my-publication',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "newsletterConfig": {},
     *       //   "state": "my_state",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "newsletterConfig": {},
     *   //   "state": "my_state",
     *   //   "type": "my_type"
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
      params: Params$Resource$Organizations$Publications$Ctas$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Publications$Ctas$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Cta>>;
    create(
      params: Params$Resource$Organizations$Publications$Ctas$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Publications$Ctas$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Cta>,
      callback: BodyResponseCallback<Schema$Cta>
    ): void;
    create(
      params: Params$Resource$Organizations$Publications$Ctas$Create,
      callback: BodyResponseCallback<Schema$Cta>
    ): void;
    create(callback: BodyResponseCallback<Schema$Cta>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Publications$Ctas$Create
        | BodyResponseCallback<Schema$Cta>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Cta>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Cta> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Cta>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Publications$Ctas$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Publications$Ctas$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/ctas').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Cta>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Cta>(parameters);
      }
    }

    /**
     * Gets a CTA.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.manage',
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.organizations.publications.ctas.get({
     *     // Required. The resource name of the CTA to retrieve. Format: `organizations/{organization\}/publications/{publication\}/ctas/{cta\}`.
     *     name: 'organizations/my-organization/publications/my-publication/ctas/my-cta',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "newsletterConfig": {},
     *   //   "state": "my_state",
     *   //   "type": "my_type"
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
      params: Params$Resource$Organizations$Publications$Ctas$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Publications$Ctas$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Cta>>;
    get(
      params: Params$Resource$Organizations$Publications$Ctas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Publications$Ctas$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cta>,
      callback: BodyResponseCallback<Schema$Cta>
    ): void;
    get(
      params: Params$Resource$Organizations$Publications$Ctas$Get,
      callback: BodyResponseCallback<Schema$Cta>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cta>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Publications$Ctas$Get
        | BodyResponseCallback<Schema$Cta>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Cta>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Cta> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Cta>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Publications$Ctas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Publications$Ctas$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Cta>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Cta>(parameters);
      }
    }

    /**
     * Lists CTAs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.manage',
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.organizations.publications.ctas.list({
     *     // Optional. The maximum number of CTAs to return. The service may return fewer than this value. If unspecified, at most 50 CTAs will be returned.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListCtas` call, to retrieve the next page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent publication resource whose CTAs to list. Format: `organizations/{organization\}/publications/{publication\}`.
     *     parent: 'organizations/my-organization/publications/my-publication',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ctas": [],
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
      params: Params$Resource$Organizations$Publications$Ctas$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Publications$Ctas$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCtasResponse>>;
    list(
      params: Params$Resource$Organizations$Publications$Ctas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Publications$Ctas$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListCtasResponse>,
      callback: BodyResponseCallback<Schema$ListCtasResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Publications$Ctas$List,
      callback: BodyResponseCallback<Schema$ListCtasResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCtasResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Publications$Ctas$List
        | BodyResponseCallback<Schema$ListCtasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCtasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCtasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCtasResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Publications$Ctas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Publications$Ctas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/ctas').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCtasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCtasResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Publications$Ctas$Create extends StandardParameters {
    /**
     * Optional. The unique identifier of the CTA to create. If not specified, the server will generate a random CTA ID.
     */
    ctaId?: string;
    /**
     * Required. The parent publication resource where this CTA will be created. Format: `organizations/{organization\}/publications/{publication\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cta;
  }
  export interface Params$Resource$Organizations$Publications$Ctas$Get extends StandardParameters {
    /**
     * Required. The resource name of the CTA to retrieve. Format: `organizations/{organization\}/publications/{publication\}/ctas/{cta\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Publications$Ctas$List extends StandardParameters {
    /**
     * Optional. The maximum number of CTAs to return. The service may return fewer than this value. If unspecified, at most 50 CTAs will be returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListCtas` call, to retrieve the next page.
     */
    pageToken?: string;
    /**
     * Required. The parent publication resource whose CTAs to list. Format: `organizations/{organization\}/publications/{publication\}`.
     */
    parent?: string;
  }

  export class Resource$Publications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Checks if a user is eligible for free article access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/webcontentpublisher.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const webcontentpublisher = google.webcontentpublisher('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.manage',
     *       'https://www.googleapis.com/auth/subscribewithgoogle.publications.entitlements.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await webcontentpublisher.publications.checkFreeAccess({
     *     // Required. The HTTP referrer.
     *     httpReferrer: 'placeholder-value',
     *     // Required. The resource name of the publication. Format: publications/{publication_id\}
     *     name: 'publications/my-publication',
     *     // Required. The URI of the content.
     *     uri: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "isAllowed": false
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
    checkFreeAccess(
      params: Params$Resource$Publications$Checkfreeaccess,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    checkFreeAccess(
      params?: Params$Resource$Publications$Checkfreeaccess,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckFreeAccessResponse>>;
    checkFreeAccess(
      params: Params$Resource$Publications$Checkfreeaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkFreeAccess(
      params: Params$Resource$Publications$Checkfreeaccess,
      options:
        MethodOptions | BodyResponseCallback<Schema$CheckFreeAccessResponse>,
      callback: BodyResponseCallback<Schema$CheckFreeAccessResponse>
    ): void;
    checkFreeAccess(
      params: Params$Resource$Publications$Checkfreeaccess,
      callback: BodyResponseCallback<Schema$CheckFreeAccessResponse>
    ): void;
    checkFreeAccess(
      callback: BodyResponseCallback<Schema$CheckFreeAccessResponse>
    ): void;
    checkFreeAccess(
      paramsOrCallback?:
        | Params$Resource$Publications$Checkfreeaccess
        | BodyResponseCallback<Schema$CheckFreeAccessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckFreeAccessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckFreeAccessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckFreeAccessResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publications$Checkfreeaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publications$Checkfreeaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://webcontentpublisher.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkFreeAccess').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckFreeAccessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckFreeAccessResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Publications$Checkfreeaccess extends StandardParameters {
    /**
     * Required. The HTTP referrer.
     */
    httpReferrer?: string;
    /**
     * Required. The resource name of the publication. Format: publications/{publication_id\}
     */
    name?: string;
    /**
     * Required. The URI of the content.
     */
    uri?: string;
  }
}
