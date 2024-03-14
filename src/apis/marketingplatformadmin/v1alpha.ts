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

export namespace marketingplatformadmin_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * Google Marketing Platform Admin API
   *
   * The Google Marketing Platform Admin API allows for programmatic access to the Google Marketing Platform configuration data. You can use the Google Marketing Platform Admin API to manage links between your Google Marketing Platform organization and Google Analytics accounts, set the service level of your GA4 properties.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
   * ```
   */
  export class Marketingplatformadmin {
    context: APIRequestContext;
    organizations: Resource$Organizations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
    }
  }

  /**
   * A resource message representing the link between a Google Analytics account and a Google Marketing Platform organization.
   */
  export interface Schema$AnalyticsAccountLink {
    /**
     * Required. Immutable. The resource name of the AnalyticsAdmin API account. The account ID will be used as the ID of this AnalyticsAccountLink resource, which will become the final component of the resource name. Format: analyticsadmin.googleapis.com/accounts/{account_id\}
     */
    analyticsAccount?: string | null;
    /**
     * Output only. The human-readable name for the Analytics account.
     */
    displayName?: string | null;
    /**
     * Output only. The verification state of the link between the Analytics account and the parent organization.
     */
    linkVerificationState?: string | null;
    /**
     * Identifier. Resource name of this AnalyticsAccountLink. Note the resource ID is the same as the ID of the Analtyics account. Format: organizations/{org_id\}/analyticsAccountLinks/{analytics_account_link_id\} Example: "organizations/xyz/analyticsAccountLinks/1234"
     */
    name?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Response message for ListAnalyticsAccountLinks RPC.
   */
  export interface Schema$ListAnalyticsAccountLinksResponse {
    /**
     * Analytics account links in this organization.
     */
    analyticsAccountLinks?: Schema$AnalyticsAccountLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for SetPropertyServiceLevel RPC.
   */
  export interface Schema$SetPropertyServiceLevelRequest {
    /**
     * Required. The Analytics property to change the ServiceLevel setting. This field is the name of the Google Analytics Admin API property resource. Format: analyticsadmin.googleapis.com/properties/{property_id\}
     */
    analyticsProperty?: string | null;
    /**
     * Required. The service level to set for this property.
     */
    serviceLevel?: string | null;
  }
  /**
   * Response message for SetPropertyServiceLevel RPC.
   */
  export interface Schema$SetPropertyServiceLevelResponse {}

  export class Resource$Organizations {
    context: APIRequestContext;
    analyticsAccountLinks: Resource$Organizations$Analyticsaccountlinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.analyticsAccountLinks =
        new Resource$Organizations$Analyticsaccountlinks(this.context);
    }
  }

  export class Resource$Organizations$Analyticsaccountlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates the link between the Analytics account and the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account to create the link. If the account is already linked to an organization, user needs to unlink the account from the current organization, then try link again.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyticsAccountLink>;
    create(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyticsAccountLink>,
      callback: BodyResponseCallback<Schema$AnalyticsAccountLink>
    ): void;
    create(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      callback: BodyResponseCallback<Schema$AnalyticsAccountLink>
    ): void;
    create(callback: BodyResponseCallback<Schema$AnalyticsAccountLink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Analyticsaccountlinks$Create
        | BodyResponseCallback<Schema$AnalyticsAccountLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyticsAccountLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyticsAccountLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnalyticsAccountLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Analyticsaccountlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Analyticsaccountlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://marketingplatformadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/analyticsAccountLinks').replace(
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
        createAPIRequest<Schema$AnalyticsAccountLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyticsAccountLink>(parameters);
      }
    }

    /**
     * Deletes the AnalyticsAccountLink, which detaches the Analytics account from the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account in order to delete the link.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Analyticsaccountlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Analyticsaccountlinks$Delete
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
        {}) as Params$Resource$Organizations$Analyticsaccountlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Analyticsaccountlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://marketingplatformadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists the Google Analytics accounts link to the specified Google Marketing Platform organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Analyticsaccountlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Analyticsaccountlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAnalyticsAccountLinksResponse>;
    list(
      params: Params$Resource$Organizations$Analyticsaccountlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Analyticsaccountlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAnalyticsAccountLinksResponse>,
      callback: BodyResponseCallback<Schema$ListAnalyticsAccountLinksResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Analyticsaccountlinks$List,
      callback: BodyResponseCallback<Schema$ListAnalyticsAccountLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAnalyticsAccountLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Analyticsaccountlinks$List
        | BodyResponseCallback<Schema$ListAnalyticsAccountLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAnalyticsAccountLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAnalyticsAccountLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAnalyticsAccountLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Analyticsaccountlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Analyticsaccountlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://marketingplatformadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/analyticsAccountLinks').replace(
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
        createAPIRequest<Schema$ListAnalyticsAccountLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAnalyticsAccountLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the service level for an Analytics property.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setPropertyServiceLevel(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setPropertyServiceLevel(
      params?: Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SetPropertyServiceLevelResponse>;
    setPropertyServiceLevel(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setPropertyServiceLevel(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SetPropertyServiceLevelResponse>,
      callback: BodyResponseCallback<Schema$SetPropertyServiceLevelResponse>
    ): void;
    setPropertyServiceLevel(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel,
      callback: BodyResponseCallback<Schema$SetPropertyServiceLevelResponse>
    ): void;
    setPropertyServiceLevel(
      callback: BodyResponseCallback<Schema$SetPropertyServiceLevelResponse>
    ): void;
    setPropertyServiceLevel(
      paramsOrCallback?:
        | Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel
        | BodyResponseCallback<Schema$SetPropertyServiceLevelResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SetPropertyServiceLevelResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SetPropertyServiceLevelResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SetPropertyServiceLevelResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://marketingplatformadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/{+analyticsAccountLink}:setPropertyServiceLevel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['analyticsAccountLink'],
        pathParams: ['analyticsAccountLink'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SetPropertyServiceLevelResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SetPropertyServiceLevelResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Analyticsaccountlinks$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this Analytics account link will be created. Format: organizations/{org_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyticsAccountLink;
  }
  export interface Params$Resource$Organizations$Analyticsaccountlinks$Delete
    extends StandardParameters {
    /**
     * Required. The name of the Analytics account link to delete. Format: organizations/{org_id\}/analyticsAccountLinks/{analytics_account_link_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Analyticsaccountlinks$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of Analytics account links to return in one call. The service may return fewer than this value. If unspecified, at most 50 Analytics account links will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous ListAnalyticsAccountLinks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAnalyticsAccountLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent organization, which owns this collection of Analytics account links. Format: organizations/{org_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel
    extends StandardParameters {
    /**
     * Required. The parent AnalyticsAccountLink scope where this property is in. Format: organizations/{org_id\}/analyticsAccountLinks/{analytics_account_link_id\}
     */
    analyticsAccountLink?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetPropertyServiceLevelRequest;
  }
}
