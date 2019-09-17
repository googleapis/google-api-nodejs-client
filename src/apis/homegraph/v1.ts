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

export namespace homegraph_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * HomeGraph API
   *
   *
   *
   * @example
   * const {google} = require('googleapis');
   * const homegraph = google.homegraph('v1');
   *
   * @namespace homegraph
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Homegraph
   */
  export class Homegraph {
    context: APIRequestContext;
    agentUsers: Resource$Agentusers;
    devices: Resource$Devices;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.agentUsers = new Resource$Agentusers(this.context);
      this.devices = new Resource$Devices(this.context);
    }
  }

  /**
   * Third-party partner&#39;s device ID for one device.
   */
  export interface Schema$AgentDeviceId {
    /**
     * Third-party partner&#39;s device ID.
     */
    id?: string | null;
  }
  /**
   * Identifies a device in the third party or first party system.
   */
  export interface Schema$AgentOtherDeviceId {
    /**
     * The agent&#39;s ID. Generally it is the agent&#39;s AoG project id.
     */
    agentId?: string | null;
    /**
     * Device ID defined by the agent. The device_id must be unique.
     */
    deviceId?: string | null;
  }
  /**
   * Third-party partner&#39;s device definition.
   */
  export interface Schema$Device {
    /**
     * Attributes for the traits supported by the device.
     */
    attributes?: {[key: string]: any} | null;
    /**
     * Custom JSON data provided by the manufacturer and attached to QUERY and EXECUTE requests in AoG.
     */
    customData?: string | null;
    /**
     * Device manufacturer, model, hardware version, and software version.
     */
    deviceInfo?: Schema$DeviceInfo;
    /**
     * Third-party partner&#39;s device ID.
     */
    id?: string | null;
    /**
     * Name of the device given by the third party. This includes names given to the device via third party device manufacturer&#39;s app, model names for the device, etc.
     */
    name?: Schema$DeviceNames;
    /**
     * IDs of other devices associated with this device. This is used to represent a device group (e.g. bonded zone) or &quot;facets&quot; synced through different flows (e.g. Google Nest Hub Max with a Nest Camera).  This may also be used to pass in alternate IDs used to identify a cloud synced device for local execution (i.e. local verification). If used for local verification, this field is synced from the cloud.
     */
    otherDeviceIds?: Schema$AgentOtherDeviceId[];
    /**
     * If the third-party partner&#39;s cloud configuration includes placing devices in rooms, the name of the room can be provided here.
     */
    roomHint?: string | null;
    /**
     * As in roomHint, for structures that users set up in the partner&#39;s system.
     */
    structureHint?: string | null;
    /**
     * Traits supported by the device.
     */
    traits?: string[] | null;
    /**
     * Hardware type of the device (e.g. light, outlet, etc).
     */
    type?: string | null;
    /**
     * Indicates whether the state of this device is being reported to Google through ReportStateAndNotification call.
     */
    willReportState?: boolean | null;
  }
  /**
   * Device information.
   */
  export interface Schema$DeviceInfo {
    /**
     * Device hardware version.
     */
    hwVersion?: string | null;
    /**
     * Device manufacturer.
     */
    manufacturer?: string | null;
    /**
     * Device model.
     */
    model?: string | null;
    /**
     * Device software version.
     */
    swVersion?: string | null;
  }
  /**
   * Different names for the device.
   */
  export interface Schema$DeviceNames {
    /**
     * List of names provided by the partner rather than the user, often manufacturer names, SKUs, etc.
     */
    defaultNames?: string[] | null;
    /**
     * Primary name of the device, generally provided by the user.
     */
    name?: string | null;
    /**
     * Additional names provided by the user for the device.
     */
    nicknames?: string[] | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should be the same format as the Actions on Google `action.devices.QUERY` [request](/actions/smarthome/create-app#actiondevicesquery) with the exception of the extra `agent_user_id` and no `intent` and `customData` fields.
   */
  export interface Schema$QueryRequest {
    /**
     * Required. Third-party user ID.
     */
    agentUserId?: string | null;
    /**
     * Required. Inputs containing third-party partner&#39;s device IDs for which to get the device states.
     */
    inputs?: Schema$QueryRequestInput[];
    /**
     * Request ID used for debugging.
     */
    requestId?: string | null;
  }
  /**
   * Device ID inputs to QueryRequest.
   */
  export interface Schema$QueryRequestInput {
    /**
     * Payload containing third-party partner&#39;s device IDs.
     */
    payload?: Schema$QueryRequestPayload;
  }
  /**
   * Payload containing device IDs.
   */
  export interface Schema$QueryRequestPayload {
    /**
     * Third-party partner&#39;s device IDs for which to get the device states.
     */
    devices?: Schema$AgentDeviceId[];
  }
  /**
   * Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Actions on Google `action.devices.QUERY` [response](/actions/smarthome/create-app#actiondevicesquery). # Example  ```json {   &quot;requestId&quot;: &quot;ff36a3cc-ec34-11e6-b1a0-64510650abcf&quot;,   &quot;payload&quot;: {     &quot;devices&quot;: {       &quot;123&quot;: {         &quot;on&quot;: true,         &quot;online&quot;: true       },       &quot;456&quot;: {         &quot;on&quot;: true,         &quot;online&quot;: true,         &quot;brightness&quot;: 80,         &quot;color&quot;: {           &quot;name&quot;: &quot;cerulean&quot;,           &quot;spectrumRGB&quot;: 31655         }       }     }   } } ```
   */
  export interface Schema$QueryResponse {
    /**
     * Device states for the devices given in the request.
     */
    payload?: Schema$QueryResponsePayload;
    /**
     * Request ID used for debugging. Copied from the request.
     */
    requestId?: string | null;
  }
  /**
   * Payload containing device states information.
   */
  export interface Schema$QueryResponsePayload {
    /**
     * States of the devices. Map of third-party device ID to struct of device states.
     */
    devices?: {[key: string]: {[key: string]: any}} | null;
  }
  /**
   * The states and notifications specific to a device.
   */
  export interface Schema$ReportStateAndNotificationDevice {
    /**
     * Notifications metadata for devices.
     */
    notifications?: {[key: string]: any} | null;
    /**
     * States of devices to update.
     */
    states?: {[key: string]: any} | null;
  }
  /**
   * Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include States, Notifications, or both. This request uses globally unique flattened state names instead of namespaces based on traits to align with the existing QUERY and EXECUTE APIs implemented by 90+ Smart Home partners. States and notifications are defined per `device_id` (for example, &quot;123&quot; and &quot;456&quot; in the following example). # Example ```json {   &quot;requestId&quot;: &quot;ff36a3cc-ec34-11e6-b1a0-64510650abcf&quot;,   &quot;agentUserId&quot;: &quot;1234&quot;,   &quot;payload&quot;: {     &quot;devices&quot;: {       &quot;states&quot;: {         &quot;123&quot;: {           &quot;on&quot;: true         },         &quot;456&quot;: {           &quot;on&quot;: true,           &quot;brightness&quot;: 10         }       },     }   } } ```
   */
  export interface Schema$ReportStateAndNotificationRequest {
    /**
     * Required. Third-party user ID.
     */
    agentUserId?: string | null;
    /**
     * Unique identifier per event (for example, a doorbell press).
     */
    eventId?: string | null;
    /**
     * Token to maintain state in the follow up notification response.
     */
    followUpToken?: string | null;
    /**
     * State of devices to update and notification metadata for devices. For example, if a user turns a light on manually, a state update should be sent so that the information is always the current status of the device. Notifications are independent from the state and its piece of the payload should contain everything necessary to notify the user. Although it may be related to a state change, it does not need to be. For example, if a device can turn on/off and change temperature, the states reported would include both &quot;on&quot; and &quot;70 degrees&quot; but the 3p may choose not to send any notification for that, or to only say that the &quot;the room is heating up&quot;, keeping state and notification independent.
     */
    payload?: Schema$StateAndNotificationPayload;
    /**
     * Request ID used for debugging.
     */
    requestId?: string | null;
  }
  /**
   * Response type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call.
   */
  export interface Schema$ReportStateAndNotificationResponse {
    /**
     * Request ID copied from ReportStateAndNotificationRequest.
     */
    requestId?: string | null;
  }
  /**
   * Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.
   */
  export interface Schema$RequestSyncDevicesRequest {
    /**
     * Required. Third-party user ID issued by agent&#39;s third-party identity provider.
     */
    agentUserId?: string | null;
    /**
     * Optional. If set, the request will be added to a queue and a response will be returned immediately. The queue allows for de-duplication of simultaneous requests.
     */
    async?: boolean | null;
  }
  /**
   * Response type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call. Intentionally empty upon success. An HTTP response code is returned with more details upon failure.
   */
  export interface Schema$RequestSyncDevicesResponse {}
  /**
   * Payload containing the state and notification information for devices.
   */
  export interface Schema$StateAndNotificationPayload {
    /**
     * The devices for updating state and sending notifications.
     */
    devices?: Schema$ReportStateAndNotificationDevice;
  }
  /**
   * Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Actions on Google `action.devices.SYNC` [request](/actions/smarthome/create-app#actiondevicessync) with the exception of the extra `agent_user_id` and no `intent` field.
   */
  export interface Schema$SyncRequest {
    /**
     * Required. Third-party user ID.
     */
    agentUserId?: string | null;
    /**
     * Request ID used for debugging.
     */
    requestId?: string | null;
  }
  /**
   * Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Actions on Google `action.devices.SYNC` [response](/actions/smarthome/create-app#actiondevicessync). # Example  ```json {   &quot;requestId&quot;: &quot;ff36a3cc-ec34-11e6-b1a0-64510650abcf&quot;,   &quot;payload&quot;: {     &quot;agentUserId&quot;: &quot;1836.15267389&quot;,     &quot;devices&quot;: [{       &quot;id&quot;: &quot;123&quot;,       &quot;type&quot;: &quot;action.devices.types.OUTLET&quot;,       &quot;traits&quot;: [         &quot;action.devices.traits.OnOff&quot;       ],       &quot;name&quot;: {         &quot;defaultNames&quot;: [&quot;My Outlet 1234&quot;],         &quot;name&quot;: &quot;Night light&quot;,         &quot;nicknames&quot;: [&quot;wall plug&quot;]       },       &quot;willReportState&quot;: false,       &quot;deviceInfo&quot;: {         &quot;manufacturer&quot;: &quot;lights-out-inc&quot;,         &quot;model&quot;: &quot;hs1234&quot;,         &quot;hwVersion&quot;: &quot;3.2&quot;,         &quot;swVersion&quot;: &quot;11.4&quot;       },       &quot;customData&quot;: {         &quot;fooValue&quot;: 74,         &quot;barValue&quot;: true,         &quot;bazValue&quot;: &quot;foo&quot;       }     }]   } } ```
   */
  export interface Schema$SyncResponse {
    /**
     * Devices associated with the third-party user.
     */
    payload?: Schema$SyncResponsePayload;
    /**
     * Request ID used for debugging. Copied from the request.
     */
    requestId?: string | null;
  }
  /**
   * Payload containing device information.
   */
  export interface Schema$SyncResponsePayload {
    /**
     * Third-party user ID
     */
    agentUserId?: string | null;
    /**
     * Devices associated with the third-party user.
     */
    devices?: Schema$Device[];
  }

  export class Resource$Agentusers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * homegraph.agentUsers.delete
     * @desc Unlinks an agent user from Google. As a result, all data related to this user will be deleted.  Here is how the agent user is created in Google:  1.  When a user opens their Google Home App, they can begin linking a 3p     partner. 2.  User is guided through the OAuth process. 3.  After entering the 3p credentials, Google gets the 3p OAuth token and     uses it to make a Sync call to the 3p partner and gets back all of the     user's data, including `agent_user_id` and devices. 4.  Google creates the agent user and stores a mapping from the     `agent_user_id` -> Google ID mapping. Google also     stores all of the user's devices under that Google ID.  The mapping from `agent_user_id` to Google ID is many to many, since one Google user can have multiple 3p accounts, and multiple Google users can map to one `agent_user_id` (e.g., a husband and wife share one Nest account username/password).  The third-party user's identity is passed in as `agent_user_id`. The agent is identified by the JWT signed by the partner's service account.  Note: Special characters (except "/") in `agent_user_id` must be URL-encoded.
     * @alias homegraph.agentUsers.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.agentUserId Required. Third-party user ID.
     * @param {string=} params.requestId Request ID used for debugging.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Agentusers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Agentusers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Agentusers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Agentusers$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Agentusers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Agentusers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://homegraph.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+agentUserId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['agentUserId'],
        pathParams: ['agentUserId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Agentusers$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Third-party user ID.
     */
    agentUserId?: string;
    /**
     * Request ID used for debugging.
     */
    requestId?: string;
  }

  export class Resource$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * homegraph.devices.query
     * @desc Gets the device states for the devices in QueryRequest. The third-party user's identity is passed in as `agent_user_id`. The agent is identified by the JWT signed by the third-party partner's service account.
     * @alias homegraph.devices.query
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().QueryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query(
      params?: Params$Resource$Devices$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryResponse>;
    query(
      params: Params$Resource$Devices$Query,
      options: MethodOptions | BodyResponseCallback<Schema$QueryResponse>,
      callback: BodyResponseCallback<Schema$QueryResponse>
    ): void;
    query(
      params: Params$Resource$Devices$Query,
      callback: BodyResponseCallback<Schema$QueryResponse>
    ): void;
    query(callback: BodyResponseCallback<Schema$QueryResponse>): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Devices$Query
        | BodyResponseCallback<Schema$QueryResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryResponse>,
      callback?: BodyResponseCallback<Schema$QueryResponse>
    ): void | GaxiosPromise<Schema$QueryResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://homegraph.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/devices:query').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$QueryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$QueryResponse>(parameters);
      }
    }

    /**
     * homegraph.devices.reportStateAndNotification
     * @desc Reports device state and optionally sends device notifications. Called by an agent when the device state of a third-party changes or the agent wants to send a notification about the device. See [Implement Report State](/actions/smarthome/report-state) for more information. This method updates a predefined set of states for a device, which all devices have according to their prescribed traits (for example, a light will have the [OnOff](/actions/smarthome/traits/onoff) trait that reports the state `on` as a boolean value). A new state may not be created and an INVALID_ARGUMENT code will be thrown if so. It also optionally takes in a list of Notifications that may be created, which are associated to this state change.  The third-party user's identity is passed in as `agent_user_id`. The agent is identified by the JWT signed by the partner's service account.
     * @alias homegraph.devices.reportStateAndNotification
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().ReportStateAndNotificationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reportStateAndNotification(
      params?: Params$Resource$Devices$Reportstateandnotification,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReportStateAndNotificationResponse>;
    reportStateAndNotification(
      params: Params$Resource$Devices$Reportstateandnotification,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReportStateAndNotificationResponse>,
      callback: BodyResponseCallback<Schema$ReportStateAndNotificationResponse>
    ): void;
    reportStateAndNotification(
      params: Params$Resource$Devices$Reportstateandnotification,
      callback: BodyResponseCallback<Schema$ReportStateAndNotificationResponse>
    ): void;
    reportStateAndNotification(
      callback: BodyResponseCallback<Schema$ReportStateAndNotificationResponse>
    ): void;
    reportStateAndNotification(
      paramsOrCallback?:
        | Params$Resource$Devices$Reportstateandnotification
        | BodyResponseCallback<Schema$ReportStateAndNotificationResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReportStateAndNotificationResponse>,
      callback?: BodyResponseCallback<Schema$ReportStateAndNotificationResponse>
    ): void | GaxiosPromise<Schema$ReportStateAndNotificationResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Reportstateandnotification;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Reportstateandnotification;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://homegraph.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/devices:reportStateAndNotification').replace(
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
        createAPIRequest<Schema$ReportStateAndNotificationResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ReportStateAndNotificationResponse>(
          parameters
        );
      }
    }

    /**
     * homegraph.devices.requestSync
     * @desc Requests a `SYNC` call from Google to a 3p partner's home control agent for a user.   The third-party user's identity is passed in as `agent_user_id` (see RequestSyncDevicesRequest) and forwarded back to the agent. The agent is identified by the API key or JWT signed by the partner's service account.
     * @alias homegraph.devices.requestSync
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().RequestSyncDevicesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    requestSync(
      params?: Params$Resource$Devices$Requestsync,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RequestSyncDevicesResponse>;
    requestSync(
      params: Params$Resource$Devices$Requestsync,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RequestSyncDevicesResponse>,
      callback: BodyResponseCallback<Schema$RequestSyncDevicesResponse>
    ): void;
    requestSync(
      params: Params$Resource$Devices$Requestsync,
      callback: BodyResponseCallback<Schema$RequestSyncDevicesResponse>
    ): void;
    requestSync(
      callback: BodyResponseCallback<Schema$RequestSyncDevicesResponse>
    ): void;
    requestSync(
      paramsOrCallback?:
        | Params$Resource$Devices$Requestsync
        | BodyResponseCallback<Schema$RequestSyncDevicesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RequestSyncDevicesResponse>,
      callback?: BodyResponseCallback<Schema$RequestSyncDevicesResponse>
    ): void | GaxiosPromise<Schema$RequestSyncDevicesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Devices$Requestsync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Requestsync;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://homegraph.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/devices:requestSync').replace(
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
        createAPIRequest<Schema$RequestSyncDevicesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$RequestSyncDevicesResponse>(parameters);
      }
    }

    /**
     * homegraph.devices.sync
     * @desc Gets all the devices associated with the given third-party user. The third-party user's identity is passed in as `agent_user_id`. The agent is identified by the JWT signed by the third-party partner's service account.
     * @alias homegraph.devices.sync
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SyncRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sync(
      params?: Params$Resource$Devices$Sync,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SyncResponse>;
    sync(
      params: Params$Resource$Devices$Sync,
      options: MethodOptions | BodyResponseCallback<Schema$SyncResponse>,
      callback: BodyResponseCallback<Schema$SyncResponse>
    ): void;
    sync(
      params: Params$Resource$Devices$Sync,
      callback: BodyResponseCallback<Schema$SyncResponse>
    ): void;
    sync(callback: BodyResponseCallback<Schema$SyncResponse>): void;
    sync(
      paramsOrCallback?:
        | Params$Resource$Devices$Sync
        | BodyResponseCallback<Schema$SyncResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SyncResponse>,
      callback?: BodyResponseCallback<Schema$SyncResponse>
    ): void | GaxiosPromise<Schema$SyncResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Devices$Sync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Devices$Sync;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://homegraph.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/devices:sync').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SyncResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SyncResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Devices$Query extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryRequest;
  }
  export interface Params$Resource$Devices$Reportstateandnotification
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportStateAndNotificationRequest;
  }
  export interface Params$Resource$Devices$Requestsync
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RequestSyncDevicesRequest;
  }
  export interface Params$Resource$Devices$Sync extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SyncRequest;
  }
}
