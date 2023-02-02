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

export namespace mybusinessaccountmanagement_v1 {
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
   * My Business Account Management API
   *
   * The My Business Account Management API provides an interface for managing access to a location on Google. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
   * ```
   */
  export class Mybusinessaccountmanagement {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    locations: Resource$Locations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.locations = new Resource$Locations(this.context);
    }
  }

  /**
   * Request message for AccessControl.AcceptInvitation.
   */
  export interface Schema$AcceptInvitationRequest {}
  /**
   * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
   */
  export interface Schema$Account {
    /**
     * Required. The name of the account. For an account of type `PERSONAL`, this is the first and last name of the user account.
     */
    accountName?: string | null;
    /**
     * Output only. Account reference number if provisioned.
     */
    accountNumber?: string | null;
    /**
     * Immutable. The resource name, in the format `accounts/{account_id\}`.
     */
    name?: string | null;
    /**
     * Output only. Additional info for an organization. This is populated only for an organization account.
     */
    organizationInfo?: Schema$OrganizationInfo;
    /**
     * Output only. Specifies the permission level the user has for this account.
     */
    permissionLevel?: string | null;
    /**
     * Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id\}`.
     */
    primaryOwner?: string | null;
    /**
     * Output only. Specifies the AccountRole of this account.
     */
    role?: string | null;
    /**
     * Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API.
     */
    type?: string | null;
    /**
     * Output only. If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.
     */
    verificationState?: string | null;
    /**
     * Output only. Indicates whether the account is vetted by Google. A vetted account is able to verify locations via the VETTED_PARTNER method.
     */
    vettedState?: string | null;
  }
  /**
   * An administrator of an Account or a location.
   */
  export interface Schema$Admin {
    /**
     * Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account\}`.
     */
    account?: string | null;
    /**
     * Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation.
     */
    admin?: string | null;
    /**
     * Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id\}/admins/{admin_id\}` For location admins, this is in the form: `locations/{location_id\}/admins/{admin_id\}` This field will be ignored if set during admin creation.
     */
    name?: string | null;
    /**
     * Output only. Indicates whether this admin has a pending invitation for the specified resource.
     */
    pendingInvitation?: boolean | null;
    /**
     * Required. Specifies the role that this admin uses with the specified Account or Location.
     */
    role?: string | null;
  }
  /**
   * Request message for AccessControl.DeclineInvitation.
   */
  export interface Schema$DeclineInvitationRequest {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents a pending invitation.
   */
  export interface Schema$Invitation {
    /**
     * Required. The resource name for the invitation. `accounts/{account_id\}/invitations/{invitation_id\}`.
     */
    name?: string | null;
    /**
     * Output only. The invited role on the account.
     */
    role?: string | null;
    /**
     * The sparsely populated account this invitation is for.
     */
    targetAccount?: Schema$Account;
    /**
     * The target location this invitation is for.
     */
    targetLocation?: Schema$TargetLocation;
    /**
     * Output only. Specifies which target types should appear in the response.
     */
    targetType?: string | null;
  }
  /**
   * Response message for AccessControl.ListAccountAdmins.
   */
  export interface Schema$ListAccountAdminsResponse {
    /**
     * A collection of Admin instances.
     */
    accountAdmins?: Schema$Admin[];
  }
  /**
   * Response message for Accounts.ListAccounts.
   */
  export interface Schema$ListAccountsResponse {
    /**
     * A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out.
     */
    accounts?: Schema$Account[];
    /**
     * If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for AccessControl.ListInvitations.
   */
  export interface Schema$ListInvitationsResponse {
    /**
     * A collection of invitations that are pending for the account. The number of invitations listed here cannot exceed 1000.
     */
    invitations?: Schema$Invitation[];
  }
  /**
   * Response message for AccessControl.ListLocationAdmins.
   */
  export interface Schema$ListLocationAdminsResponse {
    /**
     * A collection of Admins.
     */
    admins?: Schema$Admin[];
  }
  /**
   * Additional information stored for an organization.
   */
  export interface Schema$OrganizationInfo {
    /**
     * Output only. The postal address for the account.
     */
    address?: Schema$PostalAddress;
    /**
     * Output only. The contact number for the organization.
     */
    phoneNumber?: string | null;
    /**
     * Output only. The registered domain for the account.
     */
    registeredDomain?: string | null;
  }
  /**
   * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
   */
  export interface Schema$PostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: string[] | null;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | null;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.
     */
    sublocality?: string | null;
  }
  /**
   * Represents a target location for a pending invitation.
   */
  export interface Schema$TargetLocation {
    /**
     * The address of the location to which the user is invited.
     */
    address?: string | null;
    /**
     * The name of the location to which the user is invited.
     */
    locationName?: string | null;
  }
  /**
   * Request message for AccessControl.TransferLocation.
   */
  export interface Schema$TransferLocationRequest {
    /**
     * Required. Name of the account resource to transfer the location to (for example, "accounts/{account\}").
     */
    destinationAccount?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    admins: Resource$Accounts$Admins;
    invitations: Resource$Accounts$Invitations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.admins = new Resource$Accounts$Admins(this.context);
      this.invitations = new Resource$Accounts$Invitations(this.context);
    }

    /**
     * Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountName": "my_accountName",
     *       //   "accountNumber": "my_accountNumber",
     *       //   "name": "my_name",
     *       //   "organizationInfo": {},
     *       //   "permissionLevel": "my_permissionLevel",
     *       //   "primaryOwner": "my_primaryOwner",
     *       //   "role": "my_role",
     *       //   "type": "my_type",
     *       //   "verificationState": "my_verificationState",
     *       //   "vettedState": "my_vettedState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountName": "my_accountName",
     *   //   "accountNumber": "my_accountNumber",
     *   //   "name": "my_name",
     *   //   "organizationInfo": {},
     *   //   "permissionLevel": "my_permissionLevel",
     *   //   "primaryOwner": "my_primaryOwner",
     *   //   "role": "my_role",
     *   //   "type": "my_type",
     *   //   "verificationState": "my_verificationState",
     *   //   "vettedState": "my_vettedState"
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
      params: Params$Resource$Accounts$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    create(
      params: Params$Resource$Accounts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    create(
      params: Params$Resource$Accounts$Create,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    create(callback: BodyResponseCallback<Schema$Account>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Create
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
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/accounts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.get({
     *     // Required. The name of the account to fetch.
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountName": "my_accountName",
     *   //   "accountNumber": "my_accountNumber",
     *   //   "name": "my_name",
     *   //   "organizationInfo": {},
     *   //   "permissionLevel": "my_permissionLevel",
     *   //   "primaryOwner": "my_primaryOwner",
     *   //   "role": "my_role",
     *   //   "type": "my_type",
     *   //   "verificationState": "my_verificationState",
     *   //   "vettedState": "my_vettedState"
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
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
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
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.list({
     *     // Optional. A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups. The `type` field is the only supported filter.
     *     filter: 'placeholder-value',
     *     // Optional. How many accounts to fetch per page. The default and maximum is 20.
     *     pageSize: 'placeholder-value',
     *     // Optional. If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.
     *     pageToken: 'placeholder-value',
     *     // Optional. The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user. `accounts/{account_id\}`.
     *     parentAccount: 'placeholder-value',
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
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAccountsResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
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
      | GaxiosPromise<Schema$ListAccountsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/accounts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountsResponse>(parameters);
      }
    }

    /**
     * Updates the specified business account. Personal accounts cannot be updated using this method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.patch({
     *     // Immutable. The resource name, in the format `accounts/{account_id\}`.
     *     name: 'accounts/my-account',
     *     // Required. The specific fields that should be updated. The only editable field is `accountName`.
     *     updateMask: 'placeholder-value',
     *     // Optional. If true, the request is validated without actually updating the account.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountName": "my_accountName",
     *       //   "accountNumber": "my_accountNumber",
     *       //   "name": "my_name",
     *       //   "organizationInfo": {},
     *       //   "permissionLevel": "my_permissionLevel",
     *       //   "primaryOwner": "my_primaryOwner",
     *       //   "role": "my_role",
     *       //   "type": "my_type",
     *       //   "verificationState": "my_verificationState",
     *       //   "vettedState": "my_vettedState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountName": "my_accountName",
     *   //   "accountNumber": "my_accountNumber",
     *   //   "name": "my_name",
     *   //   "organizationInfo": {},
     *   //   "permissionLevel": "my_permissionLevel",
     *   //   "primaryOwner": "my_primaryOwner",
     *   //   "role": "my_role",
     *   //   "type": "my_type",
     *   //   "verificationState": "my_verificationState",
     *   //   "vettedState": "my_vettedState"
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
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Account>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Patch
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
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Required. The name of the account to fetch.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Optional. A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups. The `type` field is the only supported filter.
     */
    filter?: string;
    /**
     * Optional. How many accounts to fetch per page. The default and maximum is 20.
     */
    pageSize?: number;
    /**
     * Optional. If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.
     */
    pageToken?: string;
    /**
     * Optional. The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user. `accounts/{account_id\}`.
     */
    parentAccount?: string;
  }
  export interface Params$Resource$Accounts$Patch extends StandardParameters {
    /**
     * Immutable. The resource name, in the format `accounts/{account_id\}`.
     */
    name?: string;
    /**
     * Required. The specific fields that should be updated. The only editable field is `accountName`.
     */
    updateMask?: string;
    /**
     * Optional. If true, the request is validated without actually updating the account.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }

  export class Resource$Accounts$Admins {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Invites the specified user to become an administrator for the specified account. The invitee must accept the invitation in order to be granted access to the account. See AcceptInvitation to programmatically accept an invitation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.admins.create({
     *     // Required. The resource name of the account this admin is created for. `accounts/{account_id\}`.
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": "my_account",
     *       //   "admin": "my_admin",
     *       //   "name": "my_name",
     *       //   "pendingInvitation": false,
     *       //   "role": "my_role"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "admin": "my_admin",
     *   //   "name": "my_name",
     *   //   "pendingInvitation": false,
     *   //   "role": "my_role"
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
      params: Params$Resource$Accounts$Admins$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Admins$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Admin>;
    create(
      params: Params$Resource$Accounts$Admins$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Admins$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Admin>,
      callback: BodyResponseCallback<Schema$Admin>
    ): void;
    create(
      params: Params$Resource$Accounts$Admins$Create,
      callback: BodyResponseCallback<Schema$Admin>
    ): void;
    create(callback: BodyResponseCallback<Schema$Admin>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Admins$Create
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Admin> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Admins$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Admins$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/admins').replace(
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
        createAPIRequest<Schema$Admin>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Admin>(parameters);
      }
    }

    /**
     * Removes the specified admin from the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.admins.delete({
     *     // Required. The resource name of the admin to remove from the account. `accounts/{account_id\}/admins/{admin_id\}`.
     *     name: 'accounts/my-account/admins/my-admin',
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
      params: Params$Resource$Accounts$Admins$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Admins$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Accounts$Admins$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Admins$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Admins$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Admins$Delete
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
        {}) as Params$Resource$Accounts$Admins$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Admins$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
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
     * Lists the admins for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.admins.list({
     *     // Required. The name of the account from which to retrieve a list of admins. `accounts/{account_id\}/admins`.
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountAdmins": []
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
      params: Params$Resource$Accounts$Admins$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Admins$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAccountAdminsResponse>;
    list(
      params: Params$Resource$Accounts$Admins$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Admins$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountAdminsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountAdminsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Admins$List,
      callback: BodyResponseCallback<Schema$ListAccountAdminsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccountAdminsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Admins$List
        | BodyResponseCallback<Schema$ListAccountAdminsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountAdminsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountAdminsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAccountAdminsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Admins$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Admins$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/admins').replace(
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
        createAPIRequest<Schema$ListAccountAdminsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountAdminsResponse>(parameters);
      }
    }

    /**
     * Updates the Admin for the specified Account Admin.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.admins.patch({
     *     // Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id\}/admins/{admin_id\}` For location admins, this is in the form: `locations/{location_id\}/admins/{admin_id\}` This field will be ignored if set during admin creation.
     *     name: 'accounts/my-account/admins/my-admin',
     *     // Required. The specific fields that should be updated. The only editable field is role.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": "my_account",
     *       //   "admin": "my_admin",
     *       //   "name": "my_name",
     *       //   "pendingInvitation": false,
     *       //   "role": "my_role"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "admin": "my_admin",
     *   //   "name": "my_name",
     *   //   "pendingInvitation": false,
     *   //   "role": "my_role"
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
      params: Params$Resource$Accounts$Admins$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Admins$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Admin>;
    patch(
      params: Params$Resource$Accounts$Admins$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Admins$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Admin>,
      callback: BodyResponseCallback<Schema$Admin>
    ): void;
    patch(
      params: Params$Resource$Accounts$Admins$Patch,
      callback: BodyResponseCallback<Schema$Admin>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Admin>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Admins$Patch
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Admin> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Admins$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Admins$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Admin>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Admin>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Admins$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the account this admin is created for. `accounts/{account_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Admin;
  }
  export interface Params$Resource$Accounts$Admins$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the admin to remove from the account. `accounts/{account_id\}/admins/{admin_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Admins$List
    extends StandardParameters {
    /**
     * Required. The name of the account from which to retrieve a list of admins. `accounts/{account_id\}/admins`.
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Admins$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id\}/admins/{admin_id\}` For location admins, this is in the form: `locations/{location_id\}/admins/{admin_id\}` This field will be ignored if set during admin creation.
     */
    name?: string;
    /**
     * Required. The specific fields that should be updated. The only editable field is role.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Admin;
  }

  export class Resource$Accounts$Invitations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Accepts the specified invitation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.invitations.accept({
     *     // Required. The name of the invitation that is being accepted. `accounts/{account_id\}/invitations/{invitation_id\}`
     *     name: 'accounts/my-account/invitations/my-invitation',
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
    accept(
      params: Params$Resource$Accounts$Invitations$Accept,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    accept(
      params?: Params$Resource$Accounts$Invitations$Accept,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    accept(
      params: Params$Resource$Accounts$Invitations$Accept,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accept(
      params: Params$Resource$Accounts$Invitations$Accept,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    accept(
      params: Params$Resource$Accounts$Invitations$Accept,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    accept(callback: BodyResponseCallback<Schema$Empty>): void;
    accept(
      paramsOrCallback?:
        | Params$Resource$Accounts$Invitations$Accept
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
        {}) as Params$Resource$Accounts$Invitations$Accept;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Invitations$Accept;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:accept').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Declines the specified invitation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.invitations.decline({
     *     // Required. The name of the account invitation that is being declined. `accounts/{account_id\}/invitations/{invitation_id\}`
     *     name: 'accounts/my-account/invitations/my-invitation',
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
    decline(
      params: Params$Resource$Accounts$Invitations$Decline,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    decline(
      params?: Params$Resource$Accounts$Invitations$Decline,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    decline(
      params: Params$Resource$Accounts$Invitations$Decline,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    decline(
      params: Params$Resource$Accounts$Invitations$Decline,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    decline(
      params: Params$Resource$Accounts$Invitations$Decline,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    decline(callback: BodyResponseCallback<Schema$Empty>): void;
    decline(
      paramsOrCallback?:
        | Params$Resource$Accounts$Invitations$Decline
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
        {}) as Params$Resource$Accounts$Invitations$Decline;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Invitations$Decline;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:decline').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Lists pending invitations for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.accounts.invitations.list({
     *     // Optional. Filtering the response is supported via the Invitation.target_type field.
     *     filter: 'placeholder-value',
     *     // Required. The name of the account from which the list of invitations is being retrieved. `accounts/{account_id\}/invitations`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "invitations": []
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
      params: Params$Resource$Accounts$Invitations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Invitations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInvitationsResponse>;
    list(
      params: Params$Resource$Accounts$Invitations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Invitations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInvitationsResponse>,
      callback: BodyResponseCallback<Schema$ListInvitationsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Invitations$List,
      callback: BodyResponseCallback<Schema$ListInvitationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInvitationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Invitations$List
        | BodyResponseCallback<Schema$ListInvitationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListInvitationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListInvitationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListInvitationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Invitations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Invitations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/invitations').replace(
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
        createAPIRequest<Schema$ListInvitationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListInvitationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Invitations$Accept
    extends StandardParameters {
    /**
     * Required. The name of the invitation that is being accepted. `accounts/{account_id\}/invitations/{invitation_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AcceptInvitationRequest;
  }
  export interface Params$Resource$Accounts$Invitations$Decline
    extends StandardParameters {
    /**
     * Required. The name of the account invitation that is being declined. `accounts/{account_id\}/invitations/{invitation_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeclineInvitationRequest;
  }
  export interface Params$Resource$Accounts$Invitations$List
    extends StandardParameters {
    /**
     * Optional. Filtering the response is supported via the Invitation.target_type field.
     */
    filter?: string;
    /**
     * Required. The name of the account from which the list of invitations is being retrieved. `accounts/{account_id\}/invitations`
     */
    parent?: string;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    admins: Resource$Locations$Admins;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.admins = new Resource$Locations$Admins(this.context);
    }

    /**
     * Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.locations.transfer({
     *     // Required. The name of the location to transfer. `locations/{location_id\}`.
     *     name: 'locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destinationAccount": "my_destinationAccount"
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
    transfer(
      params: Params$Resource$Locations$Transfer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    transfer(
      params?: Params$Resource$Locations$Transfer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    transfer(
      params: Params$Resource$Locations$Transfer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    transfer(
      params: Params$Resource$Locations$Transfer,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    transfer(
      params: Params$Resource$Locations$Transfer,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    transfer(callback: BodyResponseCallback<Schema$Empty>): void;
    transfer(
      paramsOrCallback?:
        | Params$Resource$Locations$Transfer
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
        {}) as Params$Resource$Locations$Transfer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Transfer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:transfer').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Transfer
    extends StandardParameters {
    /**
     * Required. The name of the location to transfer. `locations/{location_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferLocationRequest;
  }

  export class Resource$Locations$Admins {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.locations.admins.create({
     *     // Required. The resource name of the location this admin is created for. `locations/{location_id\}/admins`.
     *     parent: 'locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": "my_account",
     *       //   "admin": "my_admin",
     *       //   "name": "my_name",
     *       //   "pendingInvitation": false,
     *       //   "role": "my_role"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "admin": "my_admin",
     *   //   "name": "my_name",
     *   //   "pendingInvitation": false,
     *   //   "role": "my_role"
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
      params: Params$Resource$Locations$Admins$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Locations$Admins$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Admin>;
    create(
      params: Params$Resource$Locations$Admins$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Locations$Admins$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Admin>,
      callback: BodyResponseCallback<Schema$Admin>
    ): void;
    create(
      params: Params$Resource$Locations$Admins$Create,
      callback: BodyResponseCallback<Schema$Admin>
    ): void;
    create(callback: BodyResponseCallback<Schema$Admin>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Locations$Admins$Create
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Admin> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Admins$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Admins$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/admins').replace(
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
        createAPIRequest<Schema$Admin>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Admin>(parameters);
      }
    }

    /**
     * Removes the specified admin as a manager of the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.locations.admins.delete({
     *     // Required. The resource name of the admin to remove from the location.
     *     name: 'locations/my-location/admins/my-admin',
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
      params: Params$Resource$Locations$Admins$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Locations$Admins$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Locations$Admins$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Locations$Admins$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Locations$Admins$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Locations$Admins$Delete
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
        {}) as Params$Resource$Locations$Admins$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Admins$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
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
     * Lists all of the admins for the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.locations.admins.list({
     *     // Required. The name of the location to list admins of. `locations/{location_id\}/admins`.
     *     parent: 'locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "admins": []
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
      params: Params$Resource$Locations$Admins$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Locations$Admins$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationAdminsResponse>;
    list(
      params: Params$Resource$Locations$Admins$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Locations$Admins$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationAdminsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationAdminsResponse>
    ): void;
    list(
      params: Params$Resource$Locations$Admins$List,
      callback: BodyResponseCallback<Schema$ListLocationAdminsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListLocationAdminsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Locations$Admins$List
        | BodyResponseCallback<Schema$ListLocationAdminsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationAdminsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationAdminsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationAdminsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Admins$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Admins$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/admins').replace(
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
        createAPIRequest<Schema$ListLocationAdminsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationAdminsResponse>(parameters);
      }
    }

    /**
     * Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessaccountmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessaccountmanagement = google.mybusinessaccountmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessaccountmanagement.locations.admins.patch({
     *     // Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id\}/admins/{admin_id\}` For location admins, this is in the form: `locations/{location_id\}/admins/{admin_id\}` This field will be ignored if set during admin creation.
     *     name: 'locations/my-location/admins/my-admin',
     *     // Required. The specific fields that should be updated. The only editable field is role.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": "my_account",
     *       //   "admin": "my_admin",
     *       //   "name": "my_name",
     *       //   "pendingInvitation": false,
     *       //   "role": "my_role"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": "my_account",
     *   //   "admin": "my_admin",
     *   //   "name": "my_name",
     *   //   "pendingInvitation": false,
     *   //   "role": "my_role"
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
      params: Params$Resource$Locations$Admins$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Locations$Admins$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Admin>;
    patch(
      params: Params$Resource$Locations$Admins$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Locations$Admins$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Admin>,
      callback: BodyResponseCallback<Schema$Admin>
    ): void;
    patch(
      params: Params$Resource$Locations$Admins$Patch,
      callback: BodyResponseCallback<Schema$Admin>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Admin>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Locations$Admins$Patch
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Admin>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Admin> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Admins$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Admins$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessaccountmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Admin>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Admin>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Admins$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the location this admin is created for. `locations/{location_id\}/admins`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Admin;
  }
  export interface Params$Resource$Locations$Admins$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the admin to remove from the location.
     */
    name?: string;
  }
  export interface Params$Resource$Locations$Admins$List
    extends StandardParameters {
    /**
     * Required. The name of the location to list admins of. `locations/{location_id\}/admins`.
     */
    parent?: string;
  }
  export interface Params$Resource$Locations$Admins$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id\}/admins/{admin_id\}` For location admins, this is in the form: `locations/{location_id\}/admins/{admin_id\}` This field will be ignored if set during admin creation.
     */
    name?: string;
    /**
     * Required. The specific fields that should be updated. The only editable field is role.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Admin;
  }
}
