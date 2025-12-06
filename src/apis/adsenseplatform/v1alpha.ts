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

export namespace adsenseplatform_v1alpha {
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
   * AdSense Platform API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const adsenseplatform = google.adsenseplatform('v1alpha');
   * ```
   */
  export class Adsenseplatform {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    platforms: Resource$Platforms;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.platforms = new Resource$Platforms(this.context);
    }
  }

  /**
   * Representation of an Account.
   */
  export interface Schema$Account {
    /**
     * Output only. Creation time of the account.
     */
    createTime?: string | null;
    /**
     * Required. An opaque token that uniquely identifies the account among all the platform's accounts. This string may contain at most 64 non-whitespace ASCII characters, but otherwise has no predefined structure. However, it is expected to be a platform-specific identifier for the user creating the account, so that only a single account can be created for any given user. This field must not contain any information that is recognizable as personally identifiable information. e.g. it should not be an email address or login name. Once an account has been created, a second attempt to create an account using the same creation_request_id will result in an ALREADY_EXISTS error.
     */
    creationRequestId?: string | null;
    /**
     * Display name of this account.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name of the account. Format: platforms/pub-[0-9]+/accounts/pub-[0-9]+
     */
    name?: string | null;
    /**
     * Required. Input only. CLDR region code of the country/region of the address. Set this to country code of the child account if known, otherwise to your own country code.
     */
    regionCode?: string | null;
    /**
     * Output only. Approval state of the account.
     */
    state?: string | null;
    /**
     * Required. The IANA TZ timezone code of this account. For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. This field is used for reporting. It is recommended to set it to the same value for all child accounts.
     */
    timeZone?: Schema$TimeZone;
  }
  /**
   * Address data.
   */
  export interface Schema$Address {
    /**
     * First line of address. Max length 64 bytes or 30 characters.
     */
    address1?: string | null;
    /**
     * Second line of address. Max length 64 bytes or 30 characters.
     */
    address2?: string | null;
    /**
     * City. Max length 60 bytes or 30 characters.
     */
    city?: string | null;
    /**
     * Name of the company. Max length 255 bytes or 34 characters.
     */
    company?: string | null;
    /**
     * Contact name of the company. Max length 128 bytes or 34 characters.
     */
    contact?: string | null;
    /**
     * Fax number with international code (i.e. +441234567890).
     */
    fax?: string | null;
    /**
     * Phone number with international code (i.e. +441234567890).
     */
    phone?: string | null;
    /**
     * Country/Region code. The region is specified as a CLDR region code (e.g. "US", "FR").
     */
    regionCode?: string | null;
    /**
     * State. Max length 60 bytes or 30 characters.
     */
    state?: string | null;
    /**
     * Zip/post code. Max length 10 bytes or 10 characters.
     */
    zip?: string | null;
  }
  /**
   * Request definition for the account close rpc.
   */
  export interface Schema$CloseAccountRequest {}
  /**
   * Response definition for the account close rpc.
   */
  export interface Schema$CloseAccountResponse {}
  /**
   * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html) or Python's [decimal.Decimal](https://docs.python.org/3/library/decimal.html).
   */
  export interface Schema$Decimal {
    /**
     * The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -\> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -\> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -\> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -\> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-\> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' \}; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range.
     */
    value?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A platform sub-account event to record spam signals.
   */
  export interface Schema$Event {
    /**
     * Required. Information associated with the event.
     */
    eventInfo?: Schema$EventInfo;
    /**
     * Required. Event timestamp.
     */
    eventTime?: string | null;
    /**
     * Required. Event type.
     */
    eventType?: string | null;
  }
  /**
   * Private information for partner recorded events (PII).
   */
  export interface Schema$EventInfo {
    /**
     * The billing address of the publisher associated with this event, if available.
     */
    billingAddress?: Schema$Address;
    /**
     * Required. The email address that is associated with the publisher when performing the event.
     */
    email?: string | null;
  }
  /**
   * Response definition for the list accounts rpc.
   */
  export interface Schema$ListAccountsResponse {
    /**
     * The Accounts returned in the list response. Represented by a partial view of the Account resource, populating `name` and `creation_request_id`.
     */
    accounts?: Schema$Account[];
    /**
     * Continuation token used to page through accounts. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response definition for the list platform child sites rpc.
   */
  export interface Schema$ListPlatformChildSitesResponse {
    /**
     * Continuation token used to page through platforms. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
    /**
     * The platform child sites returned in this list response.
     */
    platformChildSites?: Schema$PlatformChildSite[];
  }
  /**
   * Response definition for the platform groups list rpc.
   */
  export interface Schema$ListPlatformGroupsResponse {
    /**
     * Continuation token used to page through platforms. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
    /**
     * The platform groups returned in this list response.
     */
    platformGroups?: Schema$PlatformGroup[];
  }
  /**
   * Response definition for the platform list rpc.
   */
  export interface Schema$ListPlatformsResponse {
    /**
     * Continuation token used to page through platforms. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
    /**
     * The platforms returned in this list response.
     */
    platforms?: Schema$Platform[];
  }
  /**
   * Response definition for the site list rpc.
   */
  export interface Schema$ListSitesResponse {
    /**
     * Continuation token used to page through sites. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string | null;
    /**
     * The sites returned in this list response.
     */
    sites?: Schema$Site[];
  }
  /**
   * Response definition for the lookup account rpc.
   */
  export interface Schema$LookupAccountResponse {
    /**
     * The name of the Account Format: platforms/{platform\}/accounts/{account_id\}
     */
    name?: string | null;
  }
  /**
   * Representation of a Transparent Platform.
   */
  export interface Schema$Platform {
    /**
     * Default platform group for the platform.
     */
    defaultPlatformGroup?: string | null;
    /**
     * Output only. Description of the platform.
     */
    description?: string | null;
    /**
     * Identifier. Resource name of a platform. Format: accounts/{account\}/platforms/{platform\}
     */
    name?: string | null;
  }
  /**
   * Representation of a Transparent Platform Child Site.
   */
  export interface Schema$PlatformChildSite {
    /**
     * Output only. Domain URL of the Platform Child Site. Part of the PlatformChildSite name.
     */
    domain?: string | null;
    /**
     * Identifier. Format: accounts/{account\}/platforms/{platform\}/childAccounts/{child_account\}/sites/{platform_child_site\}
     */
    name?: string | null;
    /**
     * Resource name of the Platform Group of the Platform Child Site.
     */
    platformGroup?: string | null;
  }
  /**
   * Representation of a Transparent Platform Group.
   */
  export interface Schema$PlatformGroup {
    /**
     * Required. Description of the PlatformGroup.
     */
    description?: string | null;
    /**
     * Identifier. Format: accounts/{account\}/platforms/{platform\}/groups/{platform_group\}
     */
    name?: string | null;
    /**
     * Output only. The revenue share of the PlatformGroup, in millipercent (e.g. 15000 = 15%).
     */
    revshareMillipercent?: Schema$Decimal;
  }
  /**
   * Response definition for the site request review rpc.
   */
  export interface Schema$RequestSiteReviewResponse {}
  /**
   * Representation of a Site.
   */
  export interface Schema$Site {
    /**
     * Domain/sub-domain of the site. Must be a valid domain complying with [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt) and formatted as punycode [RFC 3492](https://www.ietf.org/rfc/rfc3492.txt) in case the domain contains unicode characters.
     */
    domain?: string | null;
    /**
     * Output only. Resource name of a site. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
     */
    name?: string | null;
    /**
     * Output only. State of a site.
     */
    state?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone. For example "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number. For example "2019a".
     */
    version?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    platforms: Resource$Accounts$Platforms;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.platforms = new Resource$Accounts$Platforms(this.context);
    }
  }

  export class Resource$Accounts$Platforms {
    context: APIRequestContext;
    childAccounts: Resource$Accounts$Platforms$Childaccounts;
    groups: Resource$Accounts$Platforms$Groups;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.childAccounts = new Resource$Accounts$Platforms$Childaccounts(
        this.context
      );
      this.groups = new Resource$Accounts$Platforms$Groups(this.context);
    }

    /**
     * Gets a platform.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.accounts.platforms.get({
     *     // Required. The name of the platform to retrieve. Format: accounts/{account\}/platforms/{platform\}
     *     name: 'accounts/my-account/platforms/my-platform',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultPlatformGroup": "my_defaultPlatformGroup",
     *   //   "description": "my_description",
     *   //   "name": "my_name"
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
      params: Params$Resource$Accounts$Platforms$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Platforms$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Platform>>;
    get(
      params: Params$Resource$Accounts$Platforms$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Platforms$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Platform>,
      callback: BodyResponseCallback<Schema$Platform>
    ): void;
    get(
      params: Params$Resource$Accounts$Platforms$Get,
      callback: BodyResponseCallback<Schema$Platform>
    ): void;
    get(callback: BodyResponseCallback<Schema$Platform>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Platforms$Get
        | BodyResponseCallback<Schema$Platform>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Platform>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Platform>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Platform>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Platforms$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Platforms$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Platform>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Platform>(parameters);
      }
    }

    /**
     * Lists platforms for a specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.accounts.platforms.list({
     *     // Optional. The maximum number of platforms to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListPlatforms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatforms` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account which owns the platforms. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "platforms": []
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
      params: Params$Resource$Accounts$Platforms$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Platforms$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPlatformsResponse>>;
    list(
      params: Params$Resource$Accounts$Platforms$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Platforms$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPlatformsResponse>,
      callback: BodyResponseCallback<Schema$ListPlatformsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Platforms$List,
      callback: BodyResponseCallback<Schema$ListPlatformsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPlatformsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Platforms$List
        | BodyResponseCallback<Schema$ListPlatformsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPlatformsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPlatformsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPlatformsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Platforms$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Platforms$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/platforms').replace(
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
        createAPIRequest<Schema$ListPlatformsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPlatformsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Platforms$Get extends StandardParameters {
    /**
     * Required. The name of the platform to retrieve. Format: accounts/{account\}/platforms/{platform\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Platforms$List extends StandardParameters {
    /**
     * Optional. The maximum number of platforms to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPlatforms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatforms` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account which owns the platforms. Format: accounts/{account\}
     */
    parent?: string;
  }

  export class Resource$Accounts$Platforms$Childaccounts {
    context: APIRequestContext;
    sites: Resource$Accounts$Platforms$Childaccounts$Sites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.sites = new Resource$Accounts$Platforms$Childaccounts$Sites(
        this.context
      );
    }
  }

  export class Resource$Accounts$Platforms$Childaccounts$Sites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a Platform Child Site for a specified Platform Child Account and site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.accounts.platforms.childAccounts.sites.get({
     *     // Required. The name of the platform child site to retrieve. Format: accounts/{account\}/platforms/{platform\}/childAccounts/{child_account\}/sites/{platform_child_site\}
     *     name: 'accounts/my-account/platforms/my-platform/childAccounts/my-childAccount/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domain": "my_domain",
     *   //   "name": "my_name",
     *   //   "platformGroup": "my_platformGroup"
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
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlatformChildSite>>;
    get(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PlatformChildSite>,
      callback: BodyResponseCallback<Schema$PlatformChildSite>
    ): void;
    get(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get,
      callback: BodyResponseCallback<Schema$PlatformChildSite>
    ): void;
    get(callback: BodyResponseCallback<Schema$PlatformChildSite>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get
        | BodyResponseCallback<Schema$PlatformChildSite>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlatformChildSite>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlatformChildSite>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlatformChildSite>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PlatformChildSite>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlatformChildSite>(parameters);
      }
    }

    /**
     * Lists Platform Child Sites for a specified Platform Child Account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.accounts.platforms.childAccounts.sites.list(
     *     {
     *       // Optional. The maximum number of children to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListPlatformChildSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformChildSites` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The name of the child account under the given platform which owns the platform child sites. Format: accounts/{account\}/platforms/{platform\}/childAccounts/{child_account\}
     *       parent:
     *         'accounts/my-account/platforms/my-platform/childAccounts/my-childAccount',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "platformChildSites": []
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
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Platforms$Childaccounts$Sites$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPlatformChildSitesResponse>>;
    list(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPlatformChildSitesResponse>,
      callback: BodyResponseCallback<Schema$ListPlatformChildSitesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$List,
      callback: BodyResponseCallback<Schema$ListPlatformChildSitesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPlatformChildSitesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Platforms$Childaccounts$Sites$List
        | BodyResponseCallback<Schema$ListPlatformChildSitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPlatformChildSitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPlatformChildSitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPlatformChildSitesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Platforms$Childaccounts$Sites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Platforms$Childaccounts$Sites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/sites').replace(
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
        createAPIRequest<Schema$ListPlatformChildSitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPlatformChildSitesResponse>(
          parameters
        );
      }
    }

    /**
     * Update a Platform Child Site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await adsenseplatform.accounts.platforms.childAccounts.sites.patch({
     *       // Identifier. Format: accounts/{account\}/platforms/{platform\}/childAccounts/{child_account\}/sites/{platform_child_site\}
     *       name: 'accounts/my-account/platforms/my-platform/childAccounts/my-childAccount/sites/my-site',
     *       // Optional. The list of fields to update - currently only supports updating the `platform_group` field.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "domain": "my_domain",
     *         //   "name": "my_name",
     *         //   "platformGroup": "my_platformGroup"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domain": "my_domain",
     *   //   "name": "my_name",
     *   //   "platformGroup": "my_platformGroup"
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
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlatformChildSite>>;
    patch(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PlatformChildSite>,
      callback: BodyResponseCallback<Schema$PlatformChildSite>
    ): void;
    patch(
      params: Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch,
      callback: BodyResponseCallback<Schema$PlatformChildSite>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PlatformChildSite>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch
        | BodyResponseCallback<Schema$PlatformChildSite>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlatformChildSite>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlatformChildSite>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlatformChildSite>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PlatformChildSite>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlatformChildSite>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Platforms$Childaccounts$Sites$Get extends StandardParameters {
    /**
     * Required. The name of the platform child site to retrieve. Format: accounts/{account\}/platforms/{platform\}/childAccounts/{child_account\}/sites/{platform_child_site\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Platforms$Childaccounts$Sites$List extends StandardParameters {
    /**
     * Optional. The maximum number of children to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPlatformChildSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformChildSites` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the child account under the given platform which owns the platform child sites. Format: accounts/{account\}/platforms/{platform\}/childAccounts/{child_account\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Platforms$Childaccounts$Sites$Patch extends StandardParameters {
    /**
     * Identifier. Format: accounts/{account\}/platforms/{platform\}/childAccounts/{child_account\}/sites/{platform_child_site\}
     */
    name?: string;
    /**
     * Optional. The list of fields to update - currently only supports updating the `platform_group` field.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlatformChildSite;
  }

  export class Resource$Accounts$Platforms$Groups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a Platform Group for a specified Platform and group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.accounts.platforms.groups.get({
     *     // Required. The name of the platform group to retrieve. Format: accounts/{account\}/platforms/{platform\}/groups/{group\}
     *     name: 'accounts/my-account/platforms/my-platform/groups/my-group',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "name": "my_name",
     *   //   "revshareMillipercent": {}
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
      params: Params$Resource$Accounts$Platforms$Groups$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Platforms$Groups$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlatformGroup>>;
    get(
      params: Params$Resource$Accounts$Platforms$Groups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Platforms$Groups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PlatformGroup>,
      callback: BodyResponseCallback<Schema$PlatformGroup>
    ): void;
    get(
      params: Params$Resource$Accounts$Platforms$Groups$Get,
      callback: BodyResponseCallback<Schema$PlatformGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$PlatformGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Platforms$Groups$Get
        | BodyResponseCallback<Schema$PlatformGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlatformGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlatformGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlatformGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Platforms$Groups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Platforms$Groups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PlatformGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlatformGroup>(parameters);
      }
    }

    /**
     * Lists Platform Groups for a specified Platform.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.accounts.platforms.groups.list({
     *     // Optional. The maximum number of groups to include in the response, used for paging. If unspecified, at most 10000 groups will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListPlatformGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformGroups` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the platform to retrieve. Format: accounts/{account\}/platforms/{platform\}
     *     parent: 'accounts/my-account/platforms/my-platform',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "platformGroups": []
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
      params: Params$Resource$Accounts$Platforms$Groups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Platforms$Groups$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPlatformGroupsResponse>>;
    list(
      params: Params$Resource$Accounts$Platforms$Groups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Platforms$Groups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPlatformGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListPlatformGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Platforms$Groups$List,
      callback: BodyResponseCallback<Schema$ListPlatformGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPlatformGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Platforms$Groups$List
        | BodyResponseCallback<Schema$ListPlatformGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPlatformGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPlatformGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPlatformGroupsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Platforms$Groups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Platforms$Groups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/groups').replace(
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
        createAPIRequest<Schema$ListPlatformGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPlatformGroupsResponse>(parameters);
      }
    }

    /**
     * Update a Platform Group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.accounts.platforms.groups.patch({
     *     // Identifier. Format: accounts/{account\}/platforms/{platform\}/groups/{platform_group\}
     *     name: 'accounts/my-account/platforms/my-platform/groups/my-group',
     *     // Optional. The list of fields to update - currently only supports updating the `description` field.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "name": "my_name",
     *       //   "revshareMillipercent": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "name": "my_name",
     *   //   "revshareMillipercent": {}
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
      params: Params$Resource$Accounts$Platforms$Groups$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Platforms$Groups$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlatformGroup>>;
    patch(
      params: Params$Resource$Accounts$Platforms$Groups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Platforms$Groups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PlatformGroup>,
      callback: BodyResponseCallback<Schema$PlatformGroup>
    ): void;
    patch(
      params: Params$Resource$Accounts$Platforms$Groups$Patch,
      callback: BodyResponseCallback<Schema$PlatformGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PlatformGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Platforms$Groups$Patch
        | BodyResponseCallback<Schema$PlatformGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlatformGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlatformGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlatformGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Platforms$Groups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Platforms$Groups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PlatformGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlatformGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Platforms$Groups$Get extends StandardParameters {
    /**
     * Required. The name of the platform group to retrieve. Format: accounts/{account\}/platforms/{platform\}/groups/{group\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Platforms$Groups$List extends StandardParameters {
    /**
     * Optional. The maximum number of groups to include in the response, used for paging. If unspecified, at most 10000 groups will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPlatformGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the platform to retrieve. Format: accounts/{account\}/platforms/{platform\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Platforms$Groups$Patch extends StandardParameters {
    /**
     * Identifier. Format: accounts/{account\}/platforms/{platform\}/groups/{platform_group\}
     */
    name?: string;
    /**
     * Optional. The list of fields to update - currently only supports updating the `description` field.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlatformGroup;
  }

  export class Resource$Platforms {
    context: APIRequestContext;
    accounts: Resource$Platforms$Accounts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accounts = new Resource$Platforms$Accounts(this.context);
    }
  }

  export class Resource$Platforms$Accounts {
    context: APIRequestContext;
    events: Resource$Platforms$Accounts$Events;
    sites: Resource$Platforms$Accounts$Sites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.events = new Resource$Platforms$Accounts$Events(this.context);
      this.sites = new Resource$Platforms$Accounts$Sites(this.context);
    }

    /**
     * Closes a sub-account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.close({
     *     // Required. Account to close. Format: platforms/{platform\}/accounts/{account_id\}
     *     name: 'platforms/my-platform/accounts/my-account',
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
    close(
      params: Params$Resource$Platforms$Accounts$Close,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    close(
      params?: Params$Resource$Platforms$Accounts$Close,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CloseAccountResponse>>;
    close(
      params: Params$Resource$Platforms$Accounts$Close,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    close(
      params: Params$Resource$Platforms$Accounts$Close,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CloseAccountResponse>,
      callback: BodyResponseCallback<Schema$CloseAccountResponse>
    ): void;
    close(
      params: Params$Resource$Platforms$Accounts$Close,
      callback: BodyResponseCallback<Schema$CloseAccountResponse>
    ): void;
    close(callback: BodyResponseCallback<Schema$CloseAccountResponse>): void;
    close(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Close
        | BodyResponseCallback<Schema$CloseAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CloseAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CloseAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CloseAccountResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Close;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Close;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:close').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$CloseAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CloseAccountResponse>(parameters);
      }
    }

    /**
     * Creates a sub-account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.create({
     *     // Required. Platform to create an account for. Format: platforms/{platform\}
     *     parent: 'platforms/my-platform',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "creationRequestId": "my_creationRequestId",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "regionCode": "my_regionCode",
     *       //   "state": "my_state",
     *       //   "timeZone": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "creationRequestId": "my_creationRequestId",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "regionCode": "my_regionCode",
     *   //   "state": "my_state",
     *   //   "timeZone": {}
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
      params: Params$Resource$Platforms$Accounts$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Platforms$Accounts$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    create(
      params: Params$Resource$Platforms$Accounts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Platforms$Accounts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    create(
      params: Params$Resource$Platforms$Accounts$Create,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    create(callback: BodyResponseCallback<Schema$Account>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Create
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Account>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/accounts').replace(
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Gets information about the selected sub-account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.get({
     *     // Required. Account to get information about. Format: platforms/{platform\}/accounts/{account_id\}
     *     name: 'platforms/my-platform/accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "creationRequestId": "my_creationRequestId",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "regionCode": "my_regionCode",
     *   //   "state": "my_state",
     *   //   "timeZone": {}
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
      params: Params$Resource$Platforms$Accounts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Platforms$Accounts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    get(
      params: Params$Resource$Platforms$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Platforms$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Platforms$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Get
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Account>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Lists a partial view of sub-accounts for a specific parent account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.list({
     *     // Optional. The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. Platform who parents the accounts. Format: platforms/{platform\}
     *     parent: 'platforms/my-platform',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
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
      params: Params$Resource$Platforms$Accounts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Platforms$Accounts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAccountsResponse>>;
    list(
      params: Params$Resource$Platforms$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Platforms$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Platforms$Accounts$List,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$List
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/accounts').replace(
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
        createAPIRequest<Schema$ListAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountsResponse>(parameters);
      }
    }

    /**
     * Looks up information about a sub-account for a specified creation_request_id. If no account exists for the given creation_request_id, returns 404.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.lookup({
     *     // Optional. The creation_request_id provided when calling createAccount.
     *     creationRequestId: 'placeholder-value',
     *     // Required. Platform who parents the account. Format: platforms/{platform\}
     *     parent: 'platforms/my-platform',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name"
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
    lookup(
      params: Params$Resource$Platforms$Accounts$Lookup,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookup(
      params?: Params$Resource$Platforms$Accounts$Lookup,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LookupAccountResponse>>;
    lookup(
      params: Params$Resource$Platforms$Accounts$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Platforms$Accounts$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupAccountResponse>,
      callback: BodyResponseCallback<Schema$LookupAccountResponse>
    ): void;
    lookup(
      params: Params$Resource$Platforms$Accounts$Lookup,
      callback: BodyResponseCallback<Schema$LookupAccountResponse>
    ): void;
    lookup(callback: BodyResponseCallback<Schema$LookupAccountResponse>): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Lookup
        | BodyResponseCallback<Schema$LookupAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LookupAccountResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/accounts:lookup').replace(
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
        createAPIRequest<Schema$LookupAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupAccountResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Platforms$Accounts$Close extends StandardParameters {
    /**
     * Required. Account to close. Format: platforms/{platform\}/accounts/{account_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloseAccountRequest;
  }
  export interface Params$Resource$Platforms$Accounts$Create extends StandardParameters {
    /**
     * Required. Platform to create an account for. Format: platforms/{platform\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Platforms$Accounts$Get extends StandardParameters {
    /**
     * Required. Account to get information about. Format: platforms/{platform\}/accounts/{account_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Platforms$Accounts$List extends StandardParameters {
    /**
     * Optional. The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. Platform who parents the accounts. Format: platforms/{platform\}
     */
    parent?: string;
  }
  export interface Params$Resource$Platforms$Accounts$Lookup extends StandardParameters {
    /**
     * Optional. The creation_request_id provided when calling createAccount.
     */
    creationRequestId?: string;
    /**
     * Required. Platform who parents the account. Format: platforms/{platform\}
     */
    parent?: string;
  }

  export class Resource$Platforms$Accounts$Events {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an account event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.events.create({
     *     // Required. Account to log events about. Format: platforms/{platform\}/accounts/{account\}
     *     parent: 'platforms/my-platform/accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "eventInfo": {},
     *       //   "eventTime": "my_eventTime",
     *       //   "eventType": "my_eventType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eventInfo": {},
     *   //   "eventTime": "my_eventTime",
     *   //   "eventType": "my_eventType"
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
      params: Params$Resource$Platforms$Accounts$Events$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Platforms$Accounts$Events$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Event>>;
    create(
      params: Params$Resource$Platforms$Accounts$Events$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Platforms$Accounts$Events$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Event>,
      callback: BodyResponseCallback<Schema$Event>
    ): void;
    create(
      params: Params$Resource$Platforms$Accounts$Events$Create,
      callback: BodyResponseCallback<Schema$Event>
    ): void;
    create(callback: BodyResponseCallback<Schema$Event>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Events$Create
        | BodyResponseCallback<Schema$Event>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Event>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Event>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Event>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Events$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Events$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/events').replace(
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
        createAPIRequest<Schema$Event>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Event>(parameters);
      }
    }
  }

  export interface Params$Resource$Platforms$Accounts$Events$Create extends StandardParameters {
    /**
     * Required. Account to log events about. Format: platforms/{platform\}/accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Event;
  }

  export class Resource$Platforms$Accounts$Sites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a site for a specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.sites.create({
     *     // Required. Account to create site. Format: platforms/{platform\}/accounts/{account_id\}
     *     parent: 'platforms/my-platform/accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domain": "my_domain",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domain": "my_domain",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Platforms$Accounts$Sites$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Platforms$Accounts$Sites$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Site>>;
    create(
      params: Params$Resource$Platforms$Accounts$Sites$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Platforms$Accounts$Sites$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    create(
      params: Params$Resource$Platforms$Accounts$Sites$Create,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    create(callback: BodyResponseCallback<Schema$Site>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Sites$Create
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Site>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Sites$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Sites$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/sites').replace(
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
        createAPIRequest<Schema$Site>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * Deletes a site from a specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.sites.delete({
     *     // Required. The name of the site to delete. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
     *     name: 'platforms/my-platform/accounts/my-account/sites/my-site',
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
      params: Params$Resource$Platforms$Accounts$Sites$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Platforms$Accounts$Sites$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Platforms$Accounts$Sites$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Platforms$Accounts$Sites$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Platforms$Accounts$Sites$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Sites$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Sites$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Sites$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets a site from a specified sub-account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.sites.get({
     *     // Required. The name of the site to retrieve. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
     *     name: 'platforms/my-platform/accounts/my-account/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domain": "my_domain",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Platforms$Accounts$Sites$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Platforms$Accounts$Sites$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Site>>;
    get(
      params: Params$Resource$Platforms$Accounts$Sites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Platforms$Accounts$Sites$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    get(
      params: Params$Resource$Platforms$Accounts$Sites$Get,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    get(callback: BodyResponseCallback<Schema$Site>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Sites$Get
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Site>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Sites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Sites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Site>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * Lists sites for a specific account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/adsense',
     *       'https://www.googleapis.com/auth/adsense.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.sites.list({
     *     // The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account which owns the sites. Format: platforms/{platform\}/accounts/{account\}
     *     parent: 'platforms/my-platform/accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sites": []
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
      params: Params$Resource$Platforms$Accounts$Sites$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Platforms$Accounts$Sites$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSitesResponse>>;
    list(
      params: Params$Resource$Platforms$Accounts$Sites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Platforms$Accounts$Sites$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSitesResponse>,
      callback: BodyResponseCallback<Schema$ListSitesResponse>
    ): void;
    list(
      params: Params$Resource$Platforms$Accounts$Sites$List,
      callback: BodyResponseCallback<Schema$ListSitesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSitesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Sites$List
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSitesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Sites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Sites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/sites').replace(
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
        createAPIRequest<Schema$ListSitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSitesResponse>(parameters);
      }
    }

    /**
     * Requests the review of a site. The site should be in REQUIRES_REVIEW or NEEDS_ATTENTION state. Note: Make sure you place an [ad tag](https://developers.google.com/adsense/platforms/direct/ad-tags) on your site before requesting a review.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adsenseplatform.googleapis.com
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
     * const adsenseplatform = google.adsenseplatform('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adsense'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adsenseplatform.platforms.accounts.sites.requestReview({
     *     // Required. The name of the site to submit for review. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
     *     name: 'platforms/my-platform/accounts/my-account/sites/my-site',
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
    requestReview(
      params: Params$Resource$Platforms$Accounts$Sites$Requestreview,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    requestReview(
      params?: Params$Resource$Platforms$Accounts$Sites$Requestreview,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RequestSiteReviewResponse>>;
    requestReview(
      params: Params$Resource$Platforms$Accounts$Sites$Requestreview,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestReview(
      params: Params$Resource$Platforms$Accounts$Sites$Requestreview,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RequestSiteReviewResponse>,
      callback: BodyResponseCallback<Schema$RequestSiteReviewResponse>
    ): void;
    requestReview(
      params: Params$Resource$Platforms$Accounts$Sites$Requestreview,
      callback: BodyResponseCallback<Schema$RequestSiteReviewResponse>
    ): void;
    requestReview(
      callback: BodyResponseCallback<Schema$RequestSiteReviewResponse>
    ): void;
    requestReview(
      paramsOrCallback?:
        | Params$Resource$Platforms$Accounts$Sites$Requestreview
        | BodyResponseCallback<Schema$RequestSiteReviewResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RequestSiteReviewResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RequestSiteReviewResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RequestSiteReviewResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platforms$Accounts$Sites$Requestreview;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platforms$Accounts$Sites$Requestreview;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://adsenseplatform.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:requestReview').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$RequestSiteReviewResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RequestSiteReviewResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Platforms$Accounts$Sites$Create extends StandardParameters {
    /**
     * Required. Account to create site. Format: platforms/{platform\}/accounts/{account_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Site;
  }
  export interface Params$Resource$Platforms$Accounts$Sites$Delete extends StandardParameters {
    /**
     * Required. The name of the site to delete. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
     */
    name?: string;
  }
  export interface Params$Resource$Platforms$Accounts$Sites$Get extends StandardParameters {
    /**
     * Required. The name of the site to retrieve. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
     */
    name?: string;
  }
  export interface Params$Resource$Platforms$Accounts$Sites$List extends StandardParameters {
    /**
     * The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account which owns the sites. Format: platforms/{platform\}/accounts/{account\}
     */
    parent?: string;
  }
  export interface Params$Resource$Platforms$Accounts$Sites$Requestreview extends StandardParameters {
    /**
     * Required. The name of the site to submit for review. Format: platforms/{platform\}/accounts/{account\}/sites/{site\}
     */
    name?: string;
  }
}
