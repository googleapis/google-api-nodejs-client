// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

export namespace admin_reports_v1 {
  export interface Options extends GlobalOptions {
    version: 'reports_v1';
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
   * Admin Reports API
   *
   * Fetches reports for the administrators of G Suite customers about the usage, collaboration, security, and risk for their users.
   *
   * @example
   * const {google} = require('googleapis');
   * const admin = google.admin('reports_v1');
   *
   * @namespace admin
   * @type {Function}
   * @version reports_v1
   * @variation reports_v1
   * @param {object=} options Options for Admin
   */
  export class Admin {
    context: APIRequestContext;
    activities: Resource$Activities;
    channels: Resource$Channels;
    customerUsageReports: Resource$Customerusagereports;
    entityUsageReports: Resource$Entityusagereports;
    userUsageReport: Resource$Userusagereport;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.activities = new Resource$Activities(this.context);
      this.channels = new Resource$Channels(this.context);
      this.customerUsageReports = new Resource$Customerusagereports(
        this.context
      );
      this.entityUsageReports = new Resource$Entityusagereports(this.context);
      this.userUsageReport = new Resource$Userusagereport(this.context);
    }
  }

  /**
   * JSON template for a collection of activites.
   */
  export interface Schema$Activities {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Each activity record in the response.
     */
    items?: Schema$Activity[];
    /**
     * The type of API resource. For an activity report, the value is reports#activities.
     */
    kind?: string | null;
    /**
     * Token for retrieving the follow-on next page of the report. The nextPageToken value is used in the request&#39;s pageToken query string.
     */
    nextPageToken?: string | null;
  }
  /**
   * JSON template for the activity resource.
   */
  export interface Schema$Activity {
    /**
     * User doing the action.
     */
    actor?: {
      callerType?: string;
      email?: string;
      key?: string;
      profileId?: string;
    } | null;
    /**
     * ETag of the entry.
     */
    etag?: string | null;
    /**
     * Activity events in the report.
     */
    events?: Array<{
      name?: string;
      parameters?: Array<{
        boolValue?: boolean;
        intValue?: string;
        messageValue?: {parameter?: Schema$NestedParameter[]};
        multiIntValue?: string[];
        multiMessageValue?: Array<{parameter?: Schema$NestedParameter[]}>;
        multiValue?: string[];
        name?: string;
        value?: string;
      }>;
      type?: string;
    }> | null;
    /**
     * Unique identifier for each activity record.
     */
    id?: {
      applicationName?: string;
      customerId?: string;
      time?: string;
      uniqueQualifier?: string;
    } | null;
    /**
     * IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into G Suite which may or may not reflect the user&#39;s physical location. For example, the IP address can be the user&#39;s proxy server&#39;s address or a virtual private network (VPN) address. The API supports IPv4 and IPv6.
     */
    ipAddress?: string | null;
    /**
     * The type of API resource. For an activity report, the value is audit#activity.
     */
    kind?: string | null;
    /**
     * This is the domain that is affected by the report&#39;s event. For example domain of Admin console or the Drive application&#39;s document owner.
     */
    ownerDomain?: string | null;
  }
  /**
   * An notification channel used to watch for resource changes.
   */
  export interface Schema$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address?: string | null;
    /**
     * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
     */
    expiration?: string | null;
    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id?: string | null;
    /**
     * Identifies this as a notification channel used to watch for changes to a resource, which is &quot;api#channel&quot;.
     */
    kind?: string | null;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params?: {[key: string]: string} | null;
    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload?: boolean | null;
    /**
     * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
     */
    resourceId?: string | null;
    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri?: string | null;
    /**
     * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
     */
    token?: string | null;
    /**
     * The type of delivery mechanism used for this channel.
     */
    type?: string | null;
  }
  /**
   * JSON template for a parameter used in various reports.
   */
  export interface Schema$NestedParameter {
    /**
     * Boolean value of the parameter.
     */
    boolValue?: boolean | null;
    /**
     * Integer value of the parameter.
     */
    intValue?: string | null;
    /**
     * Multiple boolean values of the parameter.
     */
    multiBoolValue?: boolean[] | null;
    /**
     * Multiple integer values of the parameter.
     */
    multiIntValue?: string[] | null;
    /**
     * Multiple string values of the parameter.
     */
    multiValue?: string[] | null;
    /**
     * The name of the parameter.
     */
    name?: string | null;
    /**
     * String value of the parameter.
     */
    value?: string | null;
  }
  /**
   * JSON template for a usage report.
   */
  export interface Schema$UsageReport {
    /**
     * The date of the report request.
     */
    date?: string | null;
    /**
     * Information about the type of the item.
     */
    entity?: {
      customerId?: string;
      entityId?: string;
      profileId?: string;
      type?: string;
      userEmail?: string;
    } | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of API resource. For a usage report, the value is admin#reports#usageReport.
     */
    kind?: string | null;
    /**
     * Parameter value pairs for various applications. For the Customers usage report parameters and values, see the customer usage parameters reference.
     */
    parameters?: Array<{
      boolValue?: boolean;
      datetimeValue?: string;
      intValue?: string;
      msgValue?: Array<{[key: string]: any}>;
      name?: string;
      stringValue?: string;
    }> | null;
  }
  export interface Schema$UsageReports {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of API resource. For a usage report, the value is admin#reports#usageReports.
     */
    kind?: string | null;
    /**
     * Token to specify next page. A report with multiple pages has a nextPageToken property in the response. For your follow-on requests getting all of the report&#39;s pages, enter the nextPageToken value in the pageToken query string.
     */
    nextPageToken?: string | null;
    /**
     * Various application parameter records.
     */
    usageReports?: Schema$UsageReport[];
    /**
     * Warnings, if any.
     */
    warnings?: Array<{
      code?: string;
      data?: Array<{key?: string; value?: string}>;
      message?: string;
    }> | null;
  }

  export class Resource$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * reports.activities.list
     * @desc Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides.
     * @alias reports.activities.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.actorIpAddress The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
     * @param {string} params.applicationName Application name for which the events are to be retrieved.
     * @param {string=} params.customerId The unique ID of the customer to retrieve data for.
     * @param {string=} params.endTime Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts:   - Date of the API's request for a report: When the API created and retrieved the report.  - Report's start time: The beginning of the timespan shown in the report. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.  - Report's end time: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August.  If the endTime is not specified, the report returns all activities from the startTime until the current time or the most recent 180 days if the startTime is more than 180 days in the past.
     * @param {string=} params.eventName The name of the event being queried by the API. Each eventName is related to a specific G Suite service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings type structure has all of the Calendar eventName activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings type and eventName parameters. For more information about eventName query strings and parameters, see the list of event names for various applications above in applicationName.
     * @param {string=} params.filters The filters query string is a comma-separated list. The list is composed of event parameters that are manipulated by relational operators. Event parameters are in the form [parameter1 name][relational operator][parameter1 value],[parameter2 name][relational operator][parameter2 value],...  These event parameters are associated with a specific eventName. An empty report is returned if the filtered request's parameter does not belong to the eventName. For more information about eventName parameters, see the list of event names for various applications above in applicationName.  In the following Admin Activity example, the <> operator is URL-encoded in the request's query string (%3C%3E): GET...&eventName=CHANGE_CALENDAR_SETTING &filters=NEW_VALUE%3C%3EREAD_ONLY_ACCESS  In the following Drive example, the list can be a view or edit event's doc_id parameter with a value that is manipulated by an 'equal to' (==) or 'not equal to' (<>) relational operator. In the first example, the report returns each edited document's doc_id. In the second example, the report returns each viewed document's doc_id that equals the value 12345 and does not return any viewed document's which have a doc_id value of 98765. The <> operator is URL-encoded in the request's query string (%3C%3E):  GET...&eventName=edit&filters=doc_id GET...&eventName=view&filters=doc_id==12345,doc_id%3C%3E98765  The relational operators include:   - == - 'equal to'.  - <> - 'not equal to'. It is URL-encoded (%3C%3E).  - < - 'less than'. It is URL-encoded (%3C).  - <= - 'less than or equal to'. It is URL-encoded (%3C=).  - > - 'greater than'. It is URL-encoded (%3E).  - >= - 'greater than or equal to'. It is URL-encoded (%3E=).   Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. If no parameters are requested, all parameters are returned.
     * @param {integer=} params.maxResults Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page. The maxResults query string is optional in the request. The default value is 1000.
     * @param {string=} params.orgUnitID ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     * @param {string=} params.pageToken The token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
     * @param {string=} params.startTime Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from startTime until endTime. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.
     * @param {string} params.userKey Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Activities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Activities>;
    list(
      params: Params$Resource$Activities$List,
      options: MethodOptions | BodyResponseCallback<Schema$Activities>,
      callback: BodyResponseCallback<Schema$Activities>
    ): void;
    list(
      params: Params$Resource$Activities$List,
      callback: BodyResponseCallback<Schema$Activities>
    ): void;
    list(callback: BodyResponseCallback<Schema$Activities>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Activities$List
        | BodyResponseCallback<Schema$Activities>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Activities>,
      callback?: BodyResponseCallback<Schema$Activities>
    ): void | GaxiosPromise<Schema$Activities> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$List;
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
              rootUrl +
              '/admin/reports/v1/activity/users/{userKey}/applications/{applicationName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'applicationName'],
        pathParams: ['applicationName', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Activities>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Activities>(parameters);
      }
    }

    /**
     * reports.activities.watch
     * @desc Start receiving notifications for account activities. For more information, see Receiving Push Notifications.
     * @alias reports.activities.watch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.actorIpAddress The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
     * @param {string} params.applicationName Application name for which the events are to be retrieved.
     * @param {string=} params.customerId The unique ID of the customer to retrieve data for.
     * @param {string=} params.endTime Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts:   - Date of the API's request for a report: When the API created and retrieved the report.  - Report's start time: The beginning of the timespan shown in the report. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.  - Report's end time: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August.  If the endTime is not specified, the report returns all activities from the startTime until the current time or the most recent 180 days if the startTime is more than 180 days in the past.
     * @param {string=} params.eventName The name of the event being queried by the API. Each eventName is related to a specific G Suite service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings type structure has all of the Calendar eventName activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings type and eventName parameters. For more information about eventName query strings and parameters, see the list of event names for various applications above in applicationName.
     * @param {string=} params.filters The filters query string is a comma-separated list. The list is composed of event parameters that are manipulated by relational operators. Event parameters are in the form [parameter1 name][relational operator][parameter1 value],[parameter2 name][relational operator][parameter2 value],...  These event parameters are associated with a specific eventName. An empty report is returned if the filtered request's parameter does not belong to the eventName. For more information about eventName parameters, see the list of event names for various applications above in applicationName.  In the following Admin Activity example, the <> operator is URL-encoded in the request's query string (%3C%3E): GET...&eventName=CHANGE_CALENDAR_SETTING &filters=NEW_VALUE%3C%3EREAD_ONLY_ACCESS  In the following Drive example, the list can be a view or edit event's doc_id parameter with a value that is manipulated by an 'equal to' (==) or 'not equal to' (<>) relational operator. In the first example, the report returns each edited document's doc_id. In the second example, the report returns each viewed document's doc_id that equals the value 12345 and does not return any viewed document's which have a doc_id value of 98765. The <> operator is URL-encoded in the request's query string (%3C%3E):  GET...&eventName=edit&filters=doc_id GET...&eventName=view&filters=doc_id==12345,doc_id%3C%3E98765  The relational operators include:   - == - 'equal to'.  - <> - 'not equal to'. It is URL-encoded (%3C%3E).  - < - 'less than'. It is URL-encoded (%3C).  - <= - 'less than or equal to'. It is URL-encoded (%3C=).  - > - 'greater than'. It is URL-encoded (%3E).  - >= - 'greater than or equal to'. It is URL-encoded (%3E=).   Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. If no parameters are requested, all parameters are returned.
     * @param {integer=} params.maxResults Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page. The maxResults query string is optional in the request. The default value is 1000.
     * @param {string=} params.orgUnitID ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     * @param {string=} params.pageToken The token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
     * @param {string=} params.startTime Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from startTime until endTime. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.
     * @param {string} params.userKey Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(
      params?: Params$Resource$Activities$Watch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    watch(
      params: Params$Resource$Activities$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Activities$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Activities$Watch
        | BodyResponseCallback<Schema$Channel>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>
    ): void | GaxiosPromise<Schema$Channel> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$Watch;
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
              rootUrl +
              '/admin/reports/v1/activity/users/{userKey}/applications/{applicationName}/watch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'applicationName'],
        pathParams: ['applicationName', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Activities$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
     */
    actorIpAddress?: string;
    /**
     * Application name for which the events are to be retrieved.
     */
    applicationName?: string;
    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts:   - Date of the API's request for a report: When the API created and retrieved the report.  - Report's start time: The beginning of the timespan shown in the report. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.  - Report's end time: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August.  If the endTime is not specified, the report returns all activities from the startTime until the current time or the most recent 180 days if the startTime is more than 180 days in the past.
     */
    endTime?: string;
    /**
     * The name of the event being queried by the API. Each eventName is related to a specific G Suite service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings type structure has all of the Calendar eventName activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings type and eventName parameters. For more information about eventName query strings and parameters, see the list of event names for various applications above in applicationName.
     */
    eventName?: string;
    /**
     * The filters query string is a comma-separated list. The list is composed of event parameters that are manipulated by relational operators. Event parameters are in the form [parameter1 name][relational operator][parameter1 value],[parameter2 name][relational operator][parameter2 value],...  These event parameters are associated with a specific eventName. An empty report is returned if the filtered request's parameter does not belong to the eventName. For more information about eventName parameters, see the list of event names for various applications above in applicationName.  In the following Admin Activity example, the <> operator is URL-encoded in the request's query string (%3C%3E): GET...&eventName=CHANGE_CALENDAR_SETTING &filters=NEW_VALUE%3C%3EREAD_ONLY_ACCESS  In the following Drive example, the list can be a view or edit event's doc_id parameter with a value that is manipulated by an 'equal to' (==) or 'not equal to' (<>) relational operator. In the first example, the report returns each edited document's doc_id. In the second example, the report returns each viewed document's doc_id that equals the value 12345 and does not return any viewed document's which have a doc_id value of 98765. The <> operator is URL-encoded in the request's query string (%3C%3E):  GET...&eventName=edit&filters=doc_id GET...&eventName=view&filters=doc_id==12345,doc_id%3C%3E98765  The relational operators include:   - == - 'equal to'.  - <> - 'not equal to'. It is URL-encoded (%3C%3E).  - < - 'less than'. It is URL-encoded (%3C).  - <= - 'less than or equal to'. It is URL-encoded (%3C=).  - > - 'greater than'. It is URL-encoded (%3E).  - >= - 'greater than or equal to'. It is URL-encoded (%3E=).   Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. If no parameters are requested, all parameters are returned.
     */
    filters?: string;
    /**
     * Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page. The maxResults query string is optional in the request. The default value is 1000.
     */
    maxResults?: number;
    /**
     * ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     */
    orgUnitID?: string;
    /**
     * The token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
     */
    pageToken?: string;
    /**
     * Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from startTime until endTime. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.
     */
    startTime?: string;
    /**
     * Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
     */
    userKey?: string;
  }
  export interface Params$Resource$Activities$Watch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
     */
    actorIpAddress?: string;
    /**
     * Application name for which the events are to be retrieved.
     */
    applicationName?: string;
    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts:   - Date of the API's request for a report: When the API created and retrieved the report.  - Report's start time: The beginning of the timespan shown in the report. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.  - Report's end time: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August.  If the endTime is not specified, the report returns all activities from the startTime until the current time or the most recent 180 days if the startTime is more than 180 days in the past.
     */
    endTime?: string;
    /**
     * The name of the event being queried by the API. Each eventName is related to a specific G Suite service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings type structure has all of the Calendar eventName activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings type and eventName parameters. For more information about eventName query strings and parameters, see the list of event names for various applications above in applicationName.
     */
    eventName?: string;
    /**
     * The filters query string is a comma-separated list. The list is composed of event parameters that are manipulated by relational operators. Event parameters are in the form [parameter1 name][relational operator][parameter1 value],[parameter2 name][relational operator][parameter2 value],...  These event parameters are associated with a specific eventName. An empty report is returned if the filtered request's parameter does not belong to the eventName. For more information about eventName parameters, see the list of event names for various applications above in applicationName.  In the following Admin Activity example, the <> operator is URL-encoded in the request's query string (%3C%3E): GET...&eventName=CHANGE_CALENDAR_SETTING &filters=NEW_VALUE%3C%3EREAD_ONLY_ACCESS  In the following Drive example, the list can be a view or edit event's doc_id parameter with a value that is manipulated by an 'equal to' (==) or 'not equal to' (<>) relational operator. In the first example, the report returns each edited document's doc_id. In the second example, the report returns each viewed document's doc_id that equals the value 12345 and does not return any viewed document's which have a doc_id value of 98765. The <> operator is URL-encoded in the request's query string (%3C%3E):  GET...&eventName=edit&filters=doc_id GET...&eventName=view&filters=doc_id==12345,doc_id%3C%3E98765  The relational operators include:   - == - 'equal to'.  - <> - 'not equal to'. It is URL-encoded (%3C%3E).  - < - 'less than'. It is URL-encoded (%3C).  - <= - 'less than or equal to'. It is URL-encoded (%3C=).  - > - 'greater than'. It is URL-encoded (%3E).  - >= - 'greater than or equal to'. It is URL-encoded (%3E=).   Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. If no parameters are requested, all parameters are returned.
     */
    filters?: string;
    /**
     * Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page. The maxResults query string is optional in the request. The default value is 1000.
     */
    maxResults?: number;
    /**
     * ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     */
    orgUnitID?: string;
    /**
     * The token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
     */
    pageToken?: string;
    /**
     * Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from startTime until endTime. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.
     */
    startTime?: string;
    /**
     * Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Channels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * admin.channels.stop
     * @desc Stop watching resources through this channel
     * @alias admin.channels.stop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop(
      params?: Params$Resource$Channels$Stop,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    stop(
      params: Params$Resource$Channels$Stop,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      callback: BodyResponseCallback<void>
    ): void;
    stop(callback: BodyResponseCallback<void>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Channels$Stop
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$Stop;
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
              rootUrl + '/admin/reports/v1/admin/reports_v1/channels/stop'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$Stop extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Customerusagereports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * reports.customerUsageReports.get
     * @desc Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides.
     * @alias reports.customerUsageReports.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customerId The unique ID of the customer to retrieve data for.
     * @param {string} params.date Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
     * @param {string=} params.pageToken Token to specify next page. A report with multiple pages has a nextPageToken property in the response. For your follow-on requests getting all of the report's pages, enter the nextPageToken value in the pageToken query string.
     * @param {string=} params.parameters The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include accounts, app_maker, apps_scripts, calendar, classroom, cros, docs, gmail, gplus, device_management, meet, and sites. A parameters query string is in the CSV form of app_name1:param_name1, app_name2:param_name2. Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.  An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Customerusagereports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UsageReports>;
    get(
      params: Params$Resource$Customerusagereports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UsageReports>,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(
      params: Params$Resource$Customerusagereports$Get,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(callback: BodyResponseCallback<Schema$UsageReports>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customerusagereports$Get
        | BodyResponseCallback<Schema$UsageReports>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UsageReports>,
      callback?: BodyResponseCallback<Schema$UsageReports>
    ): void | GaxiosPromise<Schema$UsageReports> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customerusagereports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customerusagereports$Get;
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
            url: (rootUrl + '/admin/reports/v1/usage/dates/{date}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['date'],
        pathParams: ['date'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UsageReports>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UsageReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Customerusagereports$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
     */
    date?: string;
    /**
     * Token to specify next page. A report with multiple pages has a nextPageToken property in the response. For your follow-on requests getting all of the report's pages, enter the nextPageToken value in the pageToken query string.
     */
    pageToken?: string;
    /**
     * The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include accounts, app_maker, apps_scripts, calendar, classroom, cros, docs, gmail, gplus, device_management, meet, and sites. A parameters query string is in the CSV form of app_name1:param_name1, app_name2:param_name2. Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.  An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     */
    parameters?: string;
  }

  export class Resource$Entityusagereports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * reports.entityUsageReports.get
     * @desc Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.
     * @alias reports.entityUsageReports.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customerId The unique ID of the customer to retrieve data for.
     * @param {string} params.date Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
     * @param {string} params.entityKey Represents the key of the object to filter the data with.
     * @param {string} params.entityType Represents the type of entity for the report.
     * @param {string=} params.filters The filters query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The filters query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include accounts, docs, and gmail. Filters are in the form [application name]:[parameter name][relational operator][parameter value],....  In this example, the <> 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters=gplus:community_name,gplus:num_total_members &filters=gplus:num_total_members>0   The relational operators include:   - == - 'equal to'.  - <> - 'not equal to'. It is URL-encoded (%3C%3E).  - < - 'less than'. It is URL-encoded (%3C).  - <= - 'less than or equal to'. It is URL-encoded (%3C=).  - > - 'greater than'. It is URL-encoded (%3E).  - >= - 'greater than or equal to'. It is URL-encoded (%3E=).  Filters can only be applied to numeric parameters.
     * @param {integer=} params.maxResults Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page.
     * @param {string=} params.pageToken Token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
     * @param {string=} params.parameters The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only gplus. A parameter query string is in the CSV form of [app_name1:param_name1], [app_name2:param_name2].... Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.  An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Entityusagereports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UsageReports>;
    get(
      params: Params$Resource$Entityusagereports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UsageReports>,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(
      params: Params$Resource$Entityusagereports$Get,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(callback: BodyResponseCallback<Schema$UsageReports>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Entityusagereports$Get
        | BodyResponseCallback<Schema$UsageReports>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UsageReports>,
      callback?: BodyResponseCallback<Schema$UsageReports>
    ): void | GaxiosPromise<Schema$UsageReports> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Entityusagereports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Entityusagereports$Get;
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
              rootUrl +
              '/admin/reports/v1/usage/{entityType}/{entityKey}/dates/{date}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['entityType', 'entityKey', 'date'],
        pathParams: ['date', 'entityKey', 'entityType'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UsageReports>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UsageReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Entityusagereports$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
     */
    date?: string;
    /**
     * Represents the key of the object to filter the data with.
     */
    entityKey?: string;
    /**
     * Represents the type of entity for the report.
     */
    entityType?: string;
    /**
     * The filters query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The filters query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include accounts, docs, and gmail. Filters are in the form [application name]:[parameter name][relational operator][parameter value],....  In this example, the <> 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters=gplus:community_name,gplus:num_total_members &filters=gplus:num_total_members>0   The relational operators include:   - == - 'equal to'.  - <> - 'not equal to'. It is URL-encoded (%3C%3E).  - < - 'less than'. It is URL-encoded (%3C).  - <= - 'less than or equal to'. It is URL-encoded (%3C=).  - > - 'greater than'. It is URL-encoded (%3E).  - >= - 'greater than or equal to'. It is URL-encoded (%3E=).  Filters can only be applied to numeric parameters.
     */
    filters?: string;
    /**
     * Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page.
     */
    maxResults?: number;
    /**
     * Token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
     */
    pageToken?: string;
    /**
     * The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only gplus. A parameter query string is in the CSV form of [app_name1:param_name1], [app_name2:param_name2].... Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.  An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     */
    parameters?: string;
  }

  export class Resource$Userusagereport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * reports.userUsageReport.get
     * @desc Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.
     * @alias reports.userUsageReport.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customerId The unique ID of the customer to retrieve data for.
     * @param {string} params.date Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
     * @param {string=} params.filters The filters query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The filters query string includes the name of the application whose usage is returned in the report. The application values for the Users Usage Report include accounts, docs, and gmail. Filters are in the form [application name]:[parameter name][relational operator][parameter value],....  In this example, the <> 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last_login_time &filters=accounts:last_login_time>2010-10-28T10:26:35.000Z   The relational operators include:   - == - 'equal to'.  - <> - 'not equal to'. It is URL-encoded (%3C%3E).  - < - 'less than'. It is URL-encoded (%3C).  - <= - 'less than or equal to'. It is URL-encoded (%3C=).  - > - 'greater than'. It is URL-encoded (%3E).  - >= - 'greater than or equal to'. It is URL-encoded (%3E=).
     * @param {integer=} params.maxResults Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page. The maxResults query string is optional.
     * @param {string=} params.orgUnitID ID of the organizational unit to report on. User activity will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     * @param {string=} params.pageToken Token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
     * @param {string=} params.parameters The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include accounts, app_maker, apps_scripts, calendar, classroom, cros, docs, gmail, gplus, device_management, meet, and sites. A parameters query string is in the CSV form of app_name1:param_name1, app_name2:param_name2. Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.  An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     * @param {string} params.userKey Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Userusagereport$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UsageReports>;
    get(
      params: Params$Resource$Userusagereport$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UsageReports>,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(
      params: Params$Resource$Userusagereport$Get,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(callback: BodyResponseCallback<Schema$UsageReports>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userusagereport$Get
        | BodyResponseCallback<Schema$UsageReports>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UsageReports>,
      callback?: BodyResponseCallback<Schema$UsageReports>
    ): void | GaxiosPromise<Schema$UsageReports> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userusagereport$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userusagereport$Get;
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
              rootUrl + '/admin/reports/v1/usage/users/{userKey}/dates/{date}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'date'],
        pathParams: ['date', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UsageReports>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UsageReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Userusagereport$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
     */
    date?: string;
    /**
     * The filters query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The filters query string includes the name of the application whose usage is returned in the report. The application values for the Users Usage Report include accounts, docs, and gmail. Filters are in the form [application name]:[parameter name][relational operator][parameter value],....  In this example, the <> 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last_login_time &filters=accounts:last_login_time>2010-10-28T10:26:35.000Z   The relational operators include:   - == - 'equal to'.  - <> - 'not equal to'. It is URL-encoded (%3C%3E).  - < - 'less than'. It is URL-encoded (%3C).  - <= - 'less than or equal to'. It is URL-encoded (%3C=).  - > - 'greater than'. It is URL-encoded (%3E).  - >= - 'greater than or equal to'. It is URL-encoded (%3E=).
     */
    filters?: string;
    /**
     * Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page. The maxResults query string is optional.
     */
    maxResults?: number;
    /**
     * ID of the organizational unit to report on. User activity will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     */
    orgUnitID?: string;
    /**
     * Token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
     */
    pageToken?: string;
    /**
     * The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include accounts, app_maker, apps_scripts, calendar, classroom, cros, docs, gmail, gplus, device_management, meet, and sites. A parameters query string is in the CSV form of app_name1:param_name1, app_name2:param_name2. Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.  An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     */
    parameters?: string;
    /**
     * Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
     */
    userKey?: string;
  }
}
