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
   * The Google Marketing Platform Admin API allows for programmatic access to the Google Marketing Platform configuration data. You can use the Google Marketing Platform Admin API to manage links between your Google Marketing Platform organization and Google Analytics accounts, and to set the service level of your GA4 properties.
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
   * A resource message representing a binding to a set of roles.
   */
  export interface Schema$AdminAccessBinding {
    /**
     * Identifier. The resource name of this AdminAccessBinding. Format: organizations/{org_id\}/adminAccessBindings/{admin_access_binding_id\} Example: "organizations/123abc/adminAccessBindings/456def"
     */
    name?: string | null;
    /**
     * Optional. A list of roles granted to the parent organization. USER_ADMIN_ROLE and BILLING_ADMIN_ROLE will be automatically added if ORG_ADMIN_ROLE is assigned. No roles will be assigned if no roles are specified.
     */
    organizationRoles?: string[] | null;
    /**
     * Email address of the user.
     */
    userEmail?: string | null;
    /**
     * Resource name of the user group.
     */
    userGroup?: string | null;
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
   * Contains the bill amount.
   */
  export interface Schema$BillInfo {
    /**
     * The amount of the monthly base fee.
     */
    baseFee?: Schema$Money;
    /**
     * The amount of the event fee.
     */
    eventFee?: Schema$Money;
    /**
     * The amount of the price protection credit, this is only available for eligible customers.
     */
    priceProtectionCredit?: Schema$Money;
    /**
     * The total amount of the bill.
     */
    total?: Schema$Money;
  }
  /**
   * Contains the client data.
   */
  export interface Schema$ClientData {
    /**
     * The end date of the contract between the sales org and the end client.
     */
    endDate?: Schema$Date;
    /**
     * The end client that has/had contract with the requested sales org.
     */
    organization?: Schema$Organization;
    /**
     * The start date of the contract between the sales org and the end client.
     */
    startDate?: Schema$Date;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Request message for FindSalesPartnerManagedClients RPC.
   */
  export interface Schema$FindSalesPartnerManagedClientsRequest {
    /**
     * Optional. If set, only active and just ended clients will be returned.
     */
    isActive?: boolean | null;
  }
  /**
   * Response message for FindSalesPartnerManagedClients RPC.
   */
  export interface Schema$FindSalesPartnerManagedClientsResponse {
    /**
     * The clients managed by the sales org.
     */
    clientData?: Schema$ClientData[];
  }
  /**
   * Response message for ListAdminAccessBindings RPC.
   */
  export interface Schema$ListAdminAccessBindingsResponse {
    /**
     * Admin Access Bindings in the organization.
     */
    adminAccessBindings?: Schema$AdminAccessBinding[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
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
   * Response message for ListOrganizations RPC.
   */
  export interface Schema$ListOrganizationsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The Organization resource that the user has access to, which includes the org id and display name.
     */
    organizations?: Schema$Organization[];
  }
  /**
   * Response message for ListUserGroupMembers RPC.
   */
  export interface Schema$ListUserGroupMembersResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * User group members in the user group.
     */
    userGroupMembers?: Schema$UserGroupMember[];
  }
  /**
   * Response message for ListUserGroups RPC.
   */
  export interface Schema$ListUserGroupsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * User groups in the organization.
     */
    userGroups?: Schema$UserGroup[];
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * A resource message representing a Google Marketing Platform organization.
   */
  export interface Schema$Organization {
    /**
     * The human-readable name for the organization.
     */
    displayName?: string | null;
    /**
     * Identifier. The resource name of the GMP organization. Format: organizations/{org_id\}
     */
    name?: string | null;
  }
  /**
   * Contains the count of events received by the property, along with metadata that influences the volume of `billable` events.
   */
  export interface Schema$PropertyUsage {
    /**
     * The ID of the property's parent account.
     */
    accountId?: string | null;
    /**
     * The number of events for which the property is billed in the requested month.
     */
    billableEventCount?: string | null;
    /**
     * The display name of the property.
     */
    displayName?: string | null;
    /**
     * The name of the Google Analytics Admin API property resource. Format: analyticsadmin.googleapis.com/properties/{property_id\}
     */
    property?: string | null;
    /**
     * The subtype of the analytics property. This affects the billable event count.
     */
    propertyType?: string | null;
    /**
     * The service level of the property.
     */
    serviceLevel?: string | null;
    /**
     * Total event count that the property received during the requested month.
     */
    totalEventCount?: string | null;
  }
  /**
   * Request message for ReportPropertyUsage RPC.
   */
  export interface Schema$ReportPropertyUsageRequest {
    /**
     * Required. The target month to list property usages. Format: YYYY-MM. For example, "2025-05"
     */
    month?: string | null;
  }
  /**
   * Response message for ReportPropertyUsage RPC.
   */
  export interface Schema$ReportPropertyUsageResponse {
    /**
     * Bill amount in the specified organization and month. Will be empty if user only has access to usage data.
     */
    billInfo?: Schema$BillInfo;
    /**
     * Usage data for all properties in the specified organization and month.
     */
    propertyUsages?: Schema$PropertyUsage[];
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
  /**
   * A resource message representing a user group in a GMP organization.
   */
  export interface Schema$UserGroup {
    /**
     * Optional. The description of the user group.
     */
    description?: string | null;
    /**
     * Optional. The human-readable name for the user group.
     */
    displayName?: string | null;
    /**
     * Identifier. Resource name of this UserGroup. Format: organizations/{org_id\}/userGroups/{user_group_id\} Example: "organizations/123abc/userGroups/456def"
     */
    name?: string | null;
  }
  /**
   * A resource message representing a member of a user group.
   */
  export interface Schema$UserGroupMember {
    /**
     * Optional. The role of the member in the user group.
     */
    membershipRole?: string | null;
    /**
     * Identifier. The resource name of this UserGroupMember. Format: organizations/{org_id\}/userGroups/{user_group_id\}/members/{member_id\} Example: "organizations/123abc/userGroups/456def/members/789ghi"
     */
    name?: string | null;
    /**
     * Email address of the user member.
     */
    userEmail?: string | null;
    /**
     * User group resource name of the group member.
     */
    userGroup?: string | null;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    adminAccessBindings: Resource$Organizations$Adminaccessbindings;
    analyticsAccountLinks: Resource$Organizations$Analyticsaccountlinks;
    userGroups: Resource$Organizations$Usergroups;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.adminAccessBindings = new Resource$Organizations$Adminaccessbindings(
        this.context
      );
      this.analyticsAccountLinks =
        new Resource$Organizations$Analyticsaccountlinks(this.context);
      this.userGroups = new Resource$Organizations$Usergroups(this.context);
    }

    /**
     * Returns a list of clients managed by the sales partner organization. User needs to be an OrgAdmin/BillingAdmin on the sales partner organization in order to view the end clients.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.findSalesPartnerManagedClients({
     *       // Required. The name of the sales partner organization. Format: organizations/{org_id\}
     *       organization: 'organizations/my-organization',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "isActive": false
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientData": []
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
    findSalesPartnerManagedClients(
      params: Params$Resource$Organizations$Findsalespartnermanagedclients,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    findSalesPartnerManagedClients(
      params?: Params$Resource$Organizations$Findsalespartnermanagedclients,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$FindSalesPartnerManagedClientsResponse>
    >;
    findSalesPartnerManagedClients(
      params: Params$Resource$Organizations$Findsalespartnermanagedclients,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    findSalesPartnerManagedClients(
      params: Params$Resource$Organizations$Findsalespartnermanagedclients,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FindSalesPartnerManagedClientsResponse>,
      callback: BodyResponseCallback<Schema$FindSalesPartnerManagedClientsResponse>
    ): void;
    findSalesPartnerManagedClients(
      params: Params$Resource$Organizations$Findsalespartnermanagedclients,
      callback: BodyResponseCallback<Schema$FindSalesPartnerManagedClientsResponse>
    ): void;
    findSalesPartnerManagedClients(
      callback: BodyResponseCallback<Schema$FindSalesPartnerManagedClientsResponse>
    ): void;
    findSalesPartnerManagedClients(
      paramsOrCallback?:
        | Params$Resource$Organizations$Findsalespartnermanagedclients
        | BodyResponseCallback<Schema$FindSalesPartnerManagedClientsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FindSalesPartnerManagedClientsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FindSalesPartnerManagedClientsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$FindSalesPartnerManagedClientsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Findsalespartnermanagedclients;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Findsalespartnermanagedclients;
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
              '/v1alpha/{+organization}:findSalesPartnerManagedClients'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['organization'],
        pathParams: ['organization'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FindSalesPartnerManagedClientsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FindSalesPartnerManagedClientsResponse>(
          parameters
        );
      }
    }

    /**
     * Looks up a single organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.get({
     *     // Required. The name of the Organization to retrieve. Format: organizations/{org_id\}
     *     name: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
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
      params: Params$Resource$Organizations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Organization>>;
    get(
      params: Params$Resource$Organizations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Organization>,
      callback: BodyResponseCallback<Schema$Organization>
    ): void;
    get(
      params: Params$Resource$Organizations$Get,
      callback: BodyResponseCallback<Schema$Organization>
    ): void;
    get(callback: BodyResponseCallback<Schema$Organization>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Get
        | BodyResponseCallback<Schema$Organization>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Organization>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Organization>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Organization>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Get;
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
        createAPIRequest<Schema$Organization>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Organization>(parameters);
      }
    }

    /**
     * Returns a list of organizations that the user has access to.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.list({
     *     // Optional. The maximum number of organizations to return in one call. The service may return fewer than this value. If unspecified, at most 50 organizations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous ListOrganizations call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrganizations` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "organizations": []
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
      params: Params$Resource$Organizations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOrganizationsResponse>>;
    list(
      params: Params$Resource$Organizations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListOrganizationsResponse>,
      callback: BodyResponseCallback<Schema$ListOrganizationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$List,
      callback: BodyResponseCallback<Schema$ListOrganizationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOrganizationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$List
        | BodyResponseCallback<Schema$ListOrganizationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOrganizationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOrganizationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOrganizationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$List;
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
            url: (rootUrl + '/v1alpha/organizations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOrganizationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOrganizationsResponse>(parameters);
      }
    }

    /**
     * Gets the usage and billing data for properties within the organization for the specified month. Per direct client org, user needs to be OrgAdmin/BillingAdmin on the organization in order to view the billing and usage data. Per sales partner client org, user needs to be OrgAdmin/BillingAdmin on the sales partner org in order to view the billing and usage data, or OrgAdmin/BillingAdmin on the sales partner client org in order to view the usage data only.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.reportPropertyUsage({
     *     // Required. Specifies the organization whose property usage will be listed. Format: organizations/{org_id\}
     *     organization: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "month": "my_month"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billInfo": {},
     *   //   "propertyUsages": []
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
    reportPropertyUsage(
      params: Params$Resource$Organizations$Reportpropertyusage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reportPropertyUsage(
      params?: Params$Resource$Organizations$Reportpropertyusage,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReportPropertyUsageResponse>>;
    reportPropertyUsage(
      params: Params$Resource$Organizations$Reportpropertyusage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reportPropertyUsage(
      params: Params$Resource$Organizations$Reportpropertyusage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReportPropertyUsageResponse>,
      callback: BodyResponseCallback<Schema$ReportPropertyUsageResponse>
    ): void;
    reportPropertyUsage(
      params: Params$Resource$Organizations$Reportpropertyusage,
      callback: BodyResponseCallback<Schema$ReportPropertyUsageResponse>
    ): void;
    reportPropertyUsage(
      callback: BodyResponseCallback<Schema$ReportPropertyUsageResponse>
    ): void;
    reportPropertyUsage(
      paramsOrCallback?:
        | Params$Resource$Organizations$Reportpropertyusage
        | BodyResponseCallback<Schema$ReportPropertyUsageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportPropertyUsageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportPropertyUsageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReportPropertyUsageResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Reportpropertyusage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Reportpropertyusage;
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
              rootUrl + '/v1alpha/{+organization}:reportPropertyUsage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['organization'],
        pathParams: ['organization'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReportPropertyUsageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportPropertyUsageResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Findsalespartnermanagedclients extends StandardParameters {
    /**
     * Required. The name of the sales partner organization. Format: organizations/{org_id\}
     */
    organization?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FindSalesPartnerManagedClientsRequest;
  }
  export interface Params$Resource$Organizations$Get extends StandardParameters {
    /**
     * Required. The name of the Organization to retrieve. Format: organizations/{org_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$List extends StandardParameters {
    /**
     * Optional. The maximum number of organizations to return in one call. The service may return fewer than this value. If unspecified, at most 50 organizations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous ListOrganizations call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrganizations` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Organizations$Reportpropertyusage extends StandardParameters {
    /**
     * Required. Specifies the organization whose property usage will be listed. Format: organizations/{org_id\}
     */
    organization?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportPropertyUsageRequest;
  }

  export class Resource$Organizations$Adminaccessbindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an admin access binding in the specified GMP organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.adminAccessBindings.create({
     *       // Required. The parent organization, which owns this Admin Access Binding. Format: organizations/{org_id\}
     *       parent: 'organizations/my-organization',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "name": "my_name",
     *         //   "organizationRoles": [],
     *         //   "userEmail": "my_userEmail",
     *         //   "userGroup": "my_userGroup"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "organizationRoles": [],
     *   //   "userEmail": "my_userEmail",
     *   //   "userGroup": "my_userGroup"
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
      params: Params$Resource$Organizations$Adminaccessbindings$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Adminaccessbindings$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdminAccessBinding>>;
    create(
      params: Params$Resource$Organizations$Adminaccessbindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Adminaccessbindings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AdminAccessBinding>,
      callback: BodyResponseCallback<Schema$AdminAccessBinding>
    ): void;
    create(
      params: Params$Resource$Organizations$Adminaccessbindings$Create,
      callback: BodyResponseCallback<Schema$AdminAccessBinding>
    ): void;
    create(callback: BodyResponseCallback<Schema$AdminAccessBinding>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Adminaccessbindings$Create
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdminAccessBinding>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Adminaccessbindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Adminaccessbindings$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/adminAccessBindings').replace(
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
        createAPIRequest<Schema$AdminAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdminAccessBinding>(parameters);
      }
    }

    /**
     * Looks up a single admin access binding.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.adminAccessBindings.get({
     *       // Required. The name of the AdminAccessBinding to retrieve. Format: organizations/{org_id\}/adminAccessBindings/{admin_access_binding_id\}
     *       name: 'organizations/my-organization/adminAccessBindings/my-adminAccessBinding',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "organizationRoles": [],
     *   //   "userEmail": "my_userEmail",
     *   //   "userGroup": "my_userGroup"
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
      params: Params$Resource$Organizations$Adminaccessbindings$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Adminaccessbindings$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdminAccessBinding>>;
    get(
      params: Params$Resource$Organizations$Adminaccessbindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Adminaccessbindings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdminAccessBinding>,
      callback: BodyResponseCallback<Schema$AdminAccessBinding>
    ): void;
    get(
      params: Params$Resource$Organizations$Adminaccessbindings$Get,
      callback: BodyResponseCallback<Schema$AdminAccessBinding>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdminAccessBinding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Adminaccessbindings$Get
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdminAccessBinding>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Adminaccessbindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Adminaccessbindings$Get;
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
        createAPIRequest<Schema$AdminAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdminAccessBinding>(parameters);
      }
    }

    /**
     * Returns a list of admin access bindings in the specified GMP organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.adminAccessBindings.list({
     *       // Optional. The maximum number of Admin Access Bindings to return in one call. The service may return fewer than this value. If unspecified, at most 50 Admin Access Bindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous ListAdminAccessBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdminAccessBindings` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent organization, which owns this collection of Admin Access Bindings. Format: organizations/{org_id\}
     *       parent: 'organizations/my-organization',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminAccessBindings": [],
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
      params: Params$Resource$Organizations$Adminaccessbindings$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Adminaccessbindings$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAdminAccessBindingsResponse>>;
    list(
      params: Params$Resource$Organizations$Adminaccessbindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Adminaccessbindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAdminAccessBindingsResponse>,
      callback: BodyResponseCallback<Schema$ListAdminAccessBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Adminaccessbindings$List,
      callback: BodyResponseCallback<Schema$ListAdminAccessBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAdminAccessBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Adminaccessbindings$List
        | BodyResponseCallback<Schema$ListAdminAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAdminAccessBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAdminAccessBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAdminAccessBindingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Adminaccessbindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Adminaccessbindings$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/adminAccessBindings').replace(
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
        createAPIRequest<Schema$ListAdminAccessBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAdminAccessBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an admin access binding in the specified GMP organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.adminAccessBindings.patch({
     *       // Identifier. The resource name of this AdminAccessBinding. Format: organizations/{org_id\}/adminAccessBindings/{admin_access_binding_id\} Example: "organizations/123abc/adminAccessBindings/456def"
     *       name: 'organizations/my-organization/adminAccessBindings/my-adminAccessBinding',
     *       // Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "name": "my_name",
     *         //   "organizationRoles": [],
     *         //   "userEmail": "my_userEmail",
     *         //   "userGroup": "my_userGroup"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "organizationRoles": [],
     *   //   "userEmail": "my_userEmail",
     *   //   "userGroup": "my_userGroup"
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
      params: Params$Resource$Organizations$Adminaccessbindings$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Organizations$Adminaccessbindings$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdminAccessBinding>>;
    patch(
      params: Params$Resource$Organizations$Adminaccessbindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Adminaccessbindings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AdminAccessBinding>,
      callback: BodyResponseCallback<Schema$AdminAccessBinding>
    ): void;
    patch(
      params: Params$Resource$Organizations$Adminaccessbindings$Patch,
      callback: BodyResponseCallback<Schema$AdminAccessBinding>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AdminAccessBinding>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Adminaccessbindings$Patch
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdminAccessBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdminAccessBinding>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Adminaccessbindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Adminaccessbindings$Patch;
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
        createAPIRequest<Schema$AdminAccessBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdminAccessBinding>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Adminaccessbindings$Create extends StandardParameters {
    /**
     * Required. The parent organization, which owns this Admin Access Binding. Format: organizations/{org_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdminAccessBinding;
  }
  export interface Params$Resource$Organizations$Adminaccessbindings$Get extends StandardParameters {
    /**
     * Required. The name of the AdminAccessBinding to retrieve. Format: organizations/{org_id\}/adminAccessBindings/{admin_access_binding_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Adminaccessbindings$List extends StandardParameters {
    /**
     * Optional. The maximum number of Admin Access Bindings to return in one call. The service may return fewer than this value. If unspecified, at most 50 Admin Access Bindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous ListAdminAccessBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdminAccessBindings` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent organization, which owns this collection of Admin Access Bindings. Format: organizations/{org_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Adminaccessbindings$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of this AdminAccessBinding. Format: organizations/{org_id\}/adminAccessBindings/{admin_access_binding_id\} Example: "organizations/123abc/adminAccessBindings/456def"
     */
    name?: string;
    /**
     * Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdminAccessBinding;
  }

  export class Resource$Organizations$Analyticsaccountlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates the link between the Analytics account and the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account to create the link. If the account is already linked to an organization, user needs to unlink the account from the current organization, then try link again.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.analyticsAccountLinks.create({
     *       // Required. The parent resource where this Analytics account link will be created. Format: organizations/{org_id\}
     *       parent: 'organizations/my-organization',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "analyticsAccount": "my_analyticsAccount",
     *         //   "displayName": "my_displayName",
     *         //   "linkVerificationState": "my_linkVerificationState",
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "analyticsAccount": "my_analyticsAccount",
     *   //   "displayName": "my_displayName",
     *   //   "linkVerificationState": "my_linkVerificationState",
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
    create(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AnalyticsAccountLink>>;
    create(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Create,
      options:
        MethodOptions | BodyResponseCallback<Schema$AnalyticsAccountLink>,
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
      | Promise<GaxiosResponseWithHTTP2<Schema$AnalyticsAccountLink>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.analyticsAccountLinks.delete({
     *       // Required. The name of the Analytics account link to delete. Format: organizations/{org_id\}/analyticsAccountLinks/{analytics_account_link_id\}
     *       name: 'organizations/my-organization/analyticsAccountLinks/my-analyticsAccountLink',
     *     });
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
      params: Params$Resource$Organizations$Analyticsaccountlinks$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Organizations$Analyticsaccountlinks$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
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
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * Lists the Google Analytics accounts link to the specified Google Marketing Platform organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.analyticsAccountLinks.list({
     *       // Optional. The maximum number of Analytics account links to return in one call. The service may return fewer than this value. If unspecified, at most 50 Analytics account links will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous ListAnalyticsAccountLinks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAnalyticsAccountLinks` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent organization, which owns this collection of Analytics account links. Format: organizations/{org_id\}
     *       parent: 'organizations/my-organization',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "analyticsAccountLinks": [],
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
      params: Params$Resource$Organizations$Analyticsaccountlinks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Analyticsaccountlinks$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListAnalyticsAccountLinksResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListAnalyticsAccountLinksResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.analyticsAccountLinks.setPropertyServiceLevel(
     *       {
     *         // Required. The parent AnalyticsAccountLink scope where this property is in. Format: organizations/{org_id\}/analyticsAccountLinks/{analytics_account_link_id\}
     *         analyticsAccountLink:
     *           'organizations/my-organization/analyticsAccountLinks/my-analyticsAccountLink',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "analyticsProperty": "my_analyticsProperty",
     *           //   "serviceLevel": "my_serviceLevel"
     *           // }
     *         },
     *       },
     *     );
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
    setPropertyServiceLevel(
      params: Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setPropertyServiceLevel(
      params?: Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SetPropertyServiceLevelResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$SetPropertyServiceLevelResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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

  export interface Params$Resource$Organizations$Analyticsaccountlinks$Create extends StandardParameters {
    /**
     * Required. The parent resource where this Analytics account link will be created. Format: organizations/{org_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyticsAccountLink;
  }
  export interface Params$Resource$Organizations$Analyticsaccountlinks$Delete extends StandardParameters {
    /**
     * Required. The name of the Analytics account link to delete. Format: organizations/{org_id\}/analyticsAccountLinks/{analytics_account_link_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Analyticsaccountlinks$List extends StandardParameters {
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
  export interface Params$Resource$Organizations$Analyticsaccountlinks$Setpropertyservicelevel extends StandardParameters {
    /**
     * Required. The parent AnalyticsAccountLink scope where this property is in. Format: organizations/{org_id\}/analyticsAccountLinks/{analytics_account_link_id\}
     */
    analyticsAccountLink?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetPropertyServiceLevelRequest;
  }

  export class Resource$Organizations$Usergroups {
    context: APIRequestContext;
    members: Resource$Organizations$Usergroups$Members;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.members = new Resource$Organizations$Usergroups$Members(
        this.context
      );
    }

    /**
     * Creates a user group in the specified GMP organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.userGroups.create({
     *     // Required. The parent resource where this UserGroup will be created. Format: organizations/{org_id\}
     *     parent: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
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
    create(
      params: Params$Resource$Organizations$Usergroups$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Usergroups$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserGroup>>;
    create(
      params: Params$Resource$Organizations$Usergroups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Usergroups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$UserGroup>,
      callback: BodyResponseCallback<Schema$UserGroup>
    ): void;
    create(
      params: Params$Resource$Organizations$Usergroups$Create,
      callback: BodyResponseCallback<Schema$UserGroup>
    ): void;
    create(callback: BodyResponseCallback<Schema$UserGroup>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Create
        | BodyResponseCallback<Schema$UserGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$UserGroup> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/userGroups').replace(
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
        createAPIRequest<Schema$UserGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserGroup>(parameters);
      }
    }

    /**
     * Deletes a user group in the specified GMP organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.userGroups.delete({
     *     // Required. The name of the user group to delete. Format: organizations/{org_id\}/userGroups/{user_group_id\}
     *     name: 'organizations/my-organization/userGroups/my-userGroup',
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
      params: Params$Resource$Organizations$Usergroups$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Organizations$Usergroups$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Organizations$Usergroups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Usergroups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Usergroups$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Delete;
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
     * Looks up a single user group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.userGroups.get({
     *     // Required. The name of the UserGroup to retrieve. Format: organizations/{org_id\}/userGroups/{user_group_id\}
     *     name: 'organizations/my-organization/userGroups/my-userGroup',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
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
      params: Params$Resource$Organizations$Usergroups$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Usergroups$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserGroup>>;
    get(
      params: Params$Resource$Organizations$Usergroups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Usergroups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserGroup>,
      callback: BodyResponseCallback<Schema$UserGroup>
    ): void;
    get(
      params: Params$Resource$Organizations$Usergroups$Get,
      callback: BodyResponseCallback<Schema$UserGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Get
        | BodyResponseCallback<Schema$UserGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$UserGroup> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Get;
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
        createAPIRequest<Schema$UserGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserGroup>(parameters);
      }
    }

    /**
     * Returns a list of user groups in the specified GMP organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.userGroups.list({
     *     // Optional. The maximum number of user groups to return in one call. The service may return fewer than this value. If unspecified, at most 50 user groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous ListUserGroups call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserGroups` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent org where this UserGroup will be listed. Format: organizations/{org_id\}
     *     parent: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userGroups": []
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
      params: Params$Resource$Organizations$Usergroups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Usergroups$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUserGroupsResponse>>;
    list(
      params: Params$Resource$Organizations$Usergroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Usergroups$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListUserGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListUserGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Usergroups$List,
      callback: BodyResponseCallback<Schema$ListUserGroupsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUserGroupsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$List
        | BodyResponseCallback<Schema$ListUserGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUserGroupsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/userGroups').replace(
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
        createAPIRequest<Schema$ListUserGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserGroupsResponse>(parameters);
      }
    }

    /**
     * Updates a user group in the specified GMP organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.userGroups.patch({
     *     // Identifier. Resource name of this UserGroup. Format: organizations/{org_id\}/userGroups/{user_group_id\} Example: "organizations/123abc/userGroups/456def"
     *     name: 'organizations/my-organization/userGroups/my-userGroup',
     *     // Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
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
    patch(
      params: Params$Resource$Organizations$Usergroups$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Organizations$Usergroups$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserGroup>>;
    patch(
      params: Params$Resource$Organizations$Usergroups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Usergroups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$UserGroup>,
      callback: BodyResponseCallback<Schema$UserGroup>
    ): void;
    patch(
      params: Params$Resource$Organizations$Usergroups$Patch,
      callback: BodyResponseCallback<Schema$UserGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UserGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Patch
        | BodyResponseCallback<Schema$UserGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$UserGroup> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Patch;
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
        createAPIRequest<Schema$UserGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Usergroups$Create extends StandardParameters {
    /**
     * Required. The parent resource where this UserGroup will be created. Format: organizations/{org_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserGroup;
  }
  export interface Params$Resource$Organizations$Usergroups$Delete extends StandardParameters {
    /**
     * Required. The name of the user group to delete. Format: organizations/{org_id\}/userGroups/{user_group_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Usergroups$Get extends StandardParameters {
    /**
     * Required. The name of the UserGroup to retrieve. Format: organizations/{org_id\}/userGroups/{user_group_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Usergroups$List extends StandardParameters {
    /**
     * Optional. The maximum number of user groups to return in one call. The service may return fewer than this value. If unspecified, at most 50 user groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous ListUserGroups call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent org where this UserGroup will be listed. Format: organizations/{org_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Usergroups$Patch extends StandardParameters {
    /**
     * Identifier. Resource name of this UserGroup. Format: organizations/{org_id\}/userGroups/{user_group_id\} Example: "organizations/123abc/userGroups/456def"
     */
    name?: string;
    /**
     * Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserGroup;
  }

  export class Resource$Organizations$Usergroups$Members {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a member to the specified GMP user group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.userGroups.members.create({
     *       // Required. The parent resource where this UserGroupMember will be created. Format: organizations/{org_id\}/userGroups/{user_group_id\}
     *       parent: 'organizations/my-organization/userGroups/my-userGroup',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "membershipRole": "my_membershipRole",
     *         //   "name": "my_name",
     *         //   "userEmail": "my_userEmail",
     *         //   "userGroup": "my_userGroup"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "membershipRole": "my_membershipRole",
     *   //   "name": "my_name",
     *   //   "userEmail": "my_userEmail",
     *   //   "userGroup": "my_userGroup"
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
      params: Params$Resource$Organizations$Usergroups$Members$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Usergroups$Members$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserGroupMember>>;
    create(
      params: Params$Resource$Organizations$Usergroups$Members$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Usergroups$Members$Create,
      options: MethodOptions | BodyResponseCallback<Schema$UserGroupMember>,
      callback: BodyResponseCallback<Schema$UserGroupMember>
    ): void;
    create(
      params: Params$Resource$Organizations$Usergroups$Members$Create,
      callback: BodyResponseCallback<Schema$UserGroupMember>
    ): void;
    create(callback: BodyResponseCallback<Schema$UserGroupMember>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Members$Create
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserGroupMember>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Members$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Members$Create;
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
            url: (rootUrl + '/v1alpha/{+parent}/members').replace(
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
        createAPIRequest<Schema$UserGroupMember>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserGroupMember>(parameters);
      }
    }

    /**
     * Deletes a member in the specified GMP user group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.userGroups.members.delete({
     *       // Required. The name of the user group member to delete. Format: organizations/{org_id\}/userGroups/{user_group_id\}/members/{member_id\}
     *       name: 'organizations/my-organization/userGroups/my-userGroup/members/my-member',
     *     });
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
      params: Params$Resource$Organizations$Usergroups$Members$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Organizations$Usergroups$Members$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Organizations$Usergroups$Members$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Usergroups$Members$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Usergroups$Members$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Members$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Members$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Members$Delete;
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
     * Looks up a single user group member.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await marketingplatformadmin.organizations.userGroups.members.get(
     *     {
     *       // Required. The name of the user group member to retrieve. Format: organizations/{org_id\}/userGroups/{user_group_id\}/members/{member_id\}
     *       name: 'organizations/my-organization/userGroups/my-userGroup/members/my-member',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "membershipRole": "my_membershipRole",
     *   //   "name": "my_name",
     *   //   "userEmail": "my_userEmail",
     *   //   "userGroup": "my_userGroup"
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
      params: Params$Resource$Organizations$Usergroups$Members$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Usergroups$Members$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserGroupMember>>;
    get(
      params: Params$Resource$Organizations$Usergroups$Members$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Usergroups$Members$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserGroupMember>,
      callback: BodyResponseCallback<Schema$UserGroupMember>
    ): void;
    get(
      params: Params$Resource$Organizations$Usergroups$Members$Get,
      callback: BodyResponseCallback<Schema$UserGroupMember>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserGroupMember>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Members$Get
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserGroupMember>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Members$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Members$Get;
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
        createAPIRequest<Schema$UserGroupMember>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserGroupMember>(parameters);
      }
    }

    /**
     * Returns a list of members in the specified user group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.read',
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.userGroups.members.list({
     *       // Optional. The maximum number of user group members to return in one call. The service may return fewer than this value. If unspecified, at most 50 user group members will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous ListUserGroupMembers call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserGroupMembers` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent user group where this UserGroupMember will be listed. Format: organizations/{org_id\}/userGroups/{user_group_id\}
     *       parent: 'organizations/my-organization/userGroups/my-userGroup',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userGroupMembers": []
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
      params: Params$Resource$Organizations$Usergroups$Members$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Usergroups$Members$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUserGroupMembersResponse>>;
    list(
      params: Params$Resource$Organizations$Usergroups$Members$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Usergroups$Members$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserGroupMembersResponse>,
      callback: BodyResponseCallback<Schema$ListUserGroupMembersResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Usergroups$Members$List,
      callback: BodyResponseCallback<Schema$ListUserGroupMembersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUserGroupMembersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Members$List
        | BodyResponseCallback<Schema$ListUserGroupMembersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserGroupMembersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserGroupMembersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUserGroupMembersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Members$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Members$List;
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
            url: (rootUrl + '/v1alpha/{+parent}/members').replace(
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
        createAPIRequest<Schema$ListUserGroupMembersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserGroupMembersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a member in the specified GMP user group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/marketingplatformadmin.googleapis.com
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
     * const marketingplatformadmin = google.marketingplatformadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/marketingplatformadmin.analytics.update',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await marketingplatformadmin.organizations.userGroups.members.patch({
     *       // Identifier. The resource name of this UserGroupMember. Format: organizations/{org_id\}/userGroups/{user_group_id\}/members/{member_id\} Example: "organizations/123abc/userGroups/456def/members/789ghi"
     *       name: 'organizations/my-organization/userGroups/my-userGroup/members/my-member',
     *       // Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "membershipRole": "my_membershipRole",
     *         //   "name": "my_name",
     *         //   "userEmail": "my_userEmail",
     *         //   "userGroup": "my_userGroup"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "membershipRole": "my_membershipRole",
     *   //   "name": "my_name",
     *   //   "userEmail": "my_userEmail",
     *   //   "userGroup": "my_userGroup"
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
      params: Params$Resource$Organizations$Usergroups$Members$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Organizations$Usergroups$Members$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserGroupMember>>;
    patch(
      params: Params$Resource$Organizations$Usergroups$Members$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Usergroups$Members$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$UserGroupMember>,
      callback: BodyResponseCallback<Schema$UserGroupMember>
    ): void;
    patch(
      params: Params$Resource$Organizations$Usergroups$Members$Patch,
      callback: BodyResponseCallback<Schema$UserGroupMember>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UserGroupMember>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Usergroups$Members$Patch
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserGroupMember>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserGroupMember>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Usergroups$Members$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Usergroups$Members$Patch;
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
        createAPIRequest<Schema$UserGroupMember>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserGroupMember>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Usergroups$Members$Create extends StandardParameters {
    /**
     * Required. The parent resource where this UserGroupMember will be created. Format: organizations/{org_id\}/userGroups/{user_group_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserGroupMember;
  }
  export interface Params$Resource$Organizations$Usergroups$Members$Delete extends StandardParameters {
    /**
     * Required. The name of the user group member to delete. Format: organizations/{org_id\}/userGroups/{user_group_id\}/members/{member_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Usergroups$Members$Get extends StandardParameters {
    /**
     * Required. The name of the user group member to retrieve. Format: organizations/{org_id\}/userGroups/{user_group_id\}/members/{member_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Usergroups$Members$List extends StandardParameters {
    /**
     * Optional. The maximum number of user group members to return in one call. The service may return fewer than this value. If unspecified, at most 50 user group members will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous ListUserGroupMembers call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserGroupMembers` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent user group where this UserGroupMember will be listed. Format: organizations/{org_id\}/userGroups/{user_group_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Usergroups$Members$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of this UserGroupMember. Format: organizations/{org_id\}/userGroups/{user_group_id\}/members/{member_id\} Example: "organizations/123abc/userGroups/456def/members/789ghi"
     */
    name?: string;
    /**
     * Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserGroupMember;
  }
}
