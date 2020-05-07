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
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';

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
   * Third-party device ID for one device.
   */
  export interface Schema$AgentDeviceId {
    /**
     * Third-party device ID.
     */
    id?: string | null;
  }
  /**
   * Alternate third-party device ID.
   */
  export interface Schema$AgentOtherDeviceId {
    /**
     * Project ID for your smart home Action.
     */
    agentId?: string | null;
    /**
     * Unique third-party device ID.
     */
    deviceId?: string | null;
  }
  /**
   * Third-party device definition.
   */
  export interface Schema$Device {
    /**
     * Attributes for the traits supported by the device.
     */
    attributes?: {[key: string]: any} | null;
    /**
     * Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.google.com/assistant/smarthome/reference/intent/query) and [EXECUTE](https://developers.google.com/assistant/smarthome/reference/intent/execute) intent.
     */
    customData?: {[key: string]: any} | null;
    /**
     * Device manufacturer, model, hardware version, and software version.
     */
    deviceInfo?: Schema$DeviceInfo;
    /**
     * Third-party device ID.
     */
    id?: string | null;
    /**
     * Names given to this device by your smart home Action.
     */
    name?: Schema$DeviceNames;
    /**
     * Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification.  If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices.
     */
    notificationSupportedByAgent?: boolean | null;
    /**
     * Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.google.com/assistant/smarthome/concepts/local).
     */
    otherDeviceIds?: Schema$AgentOtherDeviceId[];
    /**
     * Suggested name for the room where this device is installed. Google attempts to use this value during user setup.
     */
    roomHint?: string | null;
    /**
     * Suggested name for the structure where this device is installed. Google attempts to use this value during user setup.
     */
    structureHint?: string | null;
    /**
     * Traits supported by the device. See [device traits](https://developers.google.com/assistant/smarthome/traits).
     */
    traits?: string[] | null;
    /**
     * Hardware type of the device. See [device types](https://developers.google.com/assistant/smarthome/guides).
     */
    type?: string | null;
    /**
     * Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification.
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
   * Identifiers used to describe the device.
   */
  export interface Schema$DeviceNames {
    /**
     * List of names provided by the manufacturer rather than the user, such as serial numbers, SKUs, etc.
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
   * Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
   */
  export interface Schema$QueryRequest {
    /**
     * Required. Third-party user ID.
     */
    agentUserId?: string | null;
    /**
     * Required. Inputs containing third-party device IDs for which to get the device states.
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
     * Payload containing third-party device IDs.
     */
    payload?: Schema$QueryRequestPayload;
  }
  /**
   * Payload containing device IDs.
   */
  export interface Schema$QueryRequestPayload {
    /**
     * Third-party device IDs for which to get the device states.
     */
    devices?: Schema$AgentDeviceId[];
  }
  /**
   * Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.google.com/assistant/smarthome/reference/intent/query). # Example  ```json {   &quot;requestId&quot;: &quot;ff36a3cc-ec34-11e6-b1a0-64510650abcf&quot;,   &quot;payload&quot;: {     &quot;devices&quot;: {       &quot;123&quot;: {         &quot;on&quot;: true,         &quot;online&quot;: true       },       &quot;456&quot;: {         &quot;on&quot;: true,         &quot;online&quot;: true,         &quot;brightness&quot;: 80,         &quot;color&quot;: {           &quot;name&quot;: &quot;cerulean&quot;,           &quot;spectrumRGB&quot;: 31655         }       }     }   } } ```
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
     * Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.google.com/assistant/smarthome/traits).
     */
    notifications?: {[key: string]: any} | null;
    /**
     * States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.google.com/assistant/smarthome/traits).
     */
    states?: {[key: string]: any} | null;
  }
  /**
   * Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, &quot;123&quot; and &quot;456&quot; in the following example). # Example  ```json {   &quot;requestId&quot;: &quot;ff36a3cc-ec34-11e6-b1a0-64510650abcf&quot;,   &quot;agentUserId&quot;: &quot;1234&quot;,   &quot;payload&quot;: {     &quot;devices&quot;: {       &quot;states&quot;: {         &quot;123&quot;: {           &quot;on&quot;: true         },         &quot;456&quot;: {           &quot;on&quot;: true,           &quot;brightness&quot;: 10         }       },     }   } } ```
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
     * Required. State of devices to update and notification metadata for devices.
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
     * Required. Third-party user ID.
     */
    agentUserId?: string | null;
    /**
     * Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses.
     */
    async?: boolean | null;
  }
  /**
   * Response type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.  Intentionally empty upon success. An HTTP response code is returned with more details upon failure.
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
   * Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.
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
   * Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.google.com/assistant/smarthome/reference/intent/sync). # Example  ```json {   &quot;requestId&quot;: &quot;ff36a3cc-ec34-11e6-b1a0-64510650abcf&quot;,   &quot;payload&quot;: {     &quot;agentUserId&quot;: &quot;1836.15267389&quot;,     &quot;devices&quot;: [{       &quot;id&quot;: &quot;123&quot;,       &quot;type&quot;: &quot;action.devices.types.OUTLET&quot;,       &quot;traits&quot;: [         &quot;action.devices.traits.OnOff&quot;       ],       &quot;name&quot;: {         &quot;defaultNames&quot;: [&quot;My Outlet 1234&quot;],         &quot;name&quot;: &quot;Night light&quot;,         &quot;nicknames&quot;: [&quot;wall plug&quot;]       },       &quot;willReportState&quot;: false,       &quot;deviceInfo&quot;: {         &quot;manufacturer&quot;: &quot;lights-out-inc&quot;,         &quot;model&quot;: &quot;hs1234&quot;,         &quot;hwVersion&quot;: &quot;3.2&quot;,         &quot;swVersion&quot;: &quot;11.4&quot;       },       &quot;customData&quot;: {         &quot;fooValue&quot;: 74,         &quot;barValue&quot;: true,         &quot;bazValue&quot;: &quot;foo&quot;       }     }]   } } ```
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
     * @desc Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted.  For more details on how users link their accounts, see [fulfillment and authentication](https://developers.google.com/assistant/smarthome/concepts/fulfillment-authentication).  The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/homegraph.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const homegraph = google.homegraph('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await homegraph.agentUsers.delete({
     *     // Required. Third-party user ID.
     *     agentUserId: 'agentUsers/.*',
     *     // Request ID used for debugging.
     *     requestId: 'placeholder-value',
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
     * @desc Gets the current states in Home Graph for the given set of the third-party user's devices.  The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/homegraph.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const homegraph = google.homegraph('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await homegraph.devices.query({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentUserId": "my_agentUserId",
     *       //   "inputs": [],
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "payload": {},
     *   //   "requestId": "my_requestId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias homegraph.devices.query
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().QueryRequest} params.requestBody Request body data
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
     * @desc Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.google.com/assistant/smarthome/develop/report-state) for more information.  This method updates the device state according to its declared [traits](https://developers.google.com/assistant/smarthome/concepts/devices-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response.  The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/homegraph.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const homegraph = google.homegraph('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await homegraph.devices.reportStateAndNotification({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentUserId": "my_agentUserId",
     *       //   "eventId": "my_eventId",
     *       //   "followUpToken": "my_followUpToken",
     *       //   "payload": {},
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "requestId": "my_requestId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias homegraph.devices.reportStateAndNotification
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().ReportStateAndNotificationRequest} params.requestBody Request body data
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
     * @desc Requests Google to send an `action.devices.SYNC` [intent](https://developers.google.com/assistant/smarthome/reference/intent/sync) to your smart home Action to update device metadata for the given user.   The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/homegraph.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const homegraph = google.homegraph('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await homegraph.devices.requestSync({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentUserId": "my_agentUserId",
     *       //   "async": false
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
     * @alias homegraph.devices.requestSync
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().RequestSyncDevicesRequest} params.requestBody Request body data
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
     * @desc Gets all the devices associated with the given third-party user.  The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/homegraph.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const homegraph = google.homegraph('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await homegraph.devices.sync({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentUserId": "my_agentUserId",
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "payload": {},
     *   //   "requestId": "my_requestId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias homegraph.devices.sync
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SyncRequest} params.requestBody Request body data
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
