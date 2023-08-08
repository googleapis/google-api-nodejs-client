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

export namespace smartdevicemanagement_v1 {
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
   * Smart Device Management API
   *
   * Allow select enterprise partners to access, control, and manage Google and Nest devices programmatically.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const smartdevicemanagement = google.smartdevicemanagement('v1');
   * ```
   */
  export class Smartdevicemanagement {
    context: APIRequestContext;
    enterprises: Resource$Enterprises;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.enterprises = new Resource$Enterprises(this.context);
    }
  }

  /**
   * Device resource represents an instance of enterprise managed device in the property.
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1Device {
    /**
     * Required. The resource name of the device. For example: "enterprises/XYZ/devices/123".
     */
    name?: string | null;
    /**
     * Assignee details of the device.
     */
    parentRelations?: Schema$GoogleHomeEnterpriseSdmV1ParentRelation[];
    /**
     * Output only. Device traits.
     */
    traits?: {[key: string]: any} | null;
    /**
     * Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device.
     */
    type?: string | null;
  }
  /**
   * Request message for SmartDeviceManagementService.ExecuteDeviceCommand
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest {
    /**
     * The command name to execute, represented by the fully qualified protobuf message name.
     */
    command?: string | null;
    /**
     * The command message to execute, represented as a Struct.
     */
    params?: {[key: string]: any} | null;
  }
  /**
   * Response message for SmartDeviceManagementService.ExecuteDeviceCommand
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse {
    /**
     * The results of executing the command.
     */
    results?: {[key: string]: any} | null;
  }
  /**
   * Response message for SmartDeviceManagementService.ListDevices
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse {
    /**
     * The list of devices.
     */
    devices?: Schema$GoogleHomeEnterpriseSdmV1Device[];
  }
  /**
   * Response message for SmartDeviceManagementService.ListRooms
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse {
    /**
     * The list of rooms.
     */
    rooms?: Schema$GoogleHomeEnterpriseSdmV1Room[];
  }
  /**
   * Response message for SmartDeviceManagementService.ListStructures
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse {
    /**
     * The list of structures.
     */
    structures?: Schema$GoogleHomeEnterpriseSdmV1Structure[];
  }
  /**
   * Represents device relationships, for instance, structure/room to which the device is assigned to.
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1ParentRelation {
    /**
     * Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to.
     */
    displayName?: string | null;
    /**
     * Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123"
     */
    parent?: string | null;
  }
  /**
   * Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1Room {
    /**
     * Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123".
     */
    name?: string | null;
    /**
     * Room traits.
     */
    traits?: {[key: string]: any} | null;
  }
  /**
   * Structure resource represents an instance of enterprise managed home or hotel room.
   */
  export interface Schema$GoogleHomeEnterpriseSdmV1Structure {
    /**
     * Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC".
     */
    name?: string | null;
    /**
     * Structure traits.
     */
    traits?: {[key: string]: any} | null;
  }

  export class Resource$Enterprises {
    context: APIRequestContext;
    devices: Resource$Enterprises$Devices;
    structures: Resource$Enterprises$Structures;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Enterprises$Devices(this.context);
      this.structures = new Resource$Enterprises$Structures(this.context);
    }
  }

  export class Resource$Enterprises$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Executes a command to device managed by the enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/smartdevicemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const smartdevicemanagement = google.smartdevicemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/sdm.service',
     *       'https://www.googleapis.com/auth/userinfo.email',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await smartdevicemanagement.enterprises.devices.executeCommand({
     *     // The name of the device requested. For example: "enterprises/XYZ/devices/123"
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "command": "my_command",
     *       //   "params": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "results": {}
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
    executeCommand(
      params: Params$Resource$Enterprises$Devices$Executecommand,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    executeCommand(
      params?: Params$Resource$Enterprises$Devices$Executecommand,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>;
    executeCommand(
      params: Params$Resource$Enterprises$Devices$Executecommand,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    executeCommand(
      params: Params$Resource$Enterprises$Devices$Executecommand,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>
    ): void;
    executeCommand(
      params: Params$Resource$Enterprises$Devices$Executecommand,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>
    ): void;
    executeCommand(
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>
    ): void;
    executeCommand(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Executecommand
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$Executecommand;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Executecommand;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://smartdevicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:executeCommand').replace(
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
        createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>(
          parameters
        );
      }
    }

    /**
     * Gets a device managed by the enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/smartdevicemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const smartdevicemanagement = google.smartdevicemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/sdm.service',
     *       'https://www.googleapis.com/auth/userinfo.email',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await smartdevicemanagement.enterprises.devices.get({
     *     // The name of the device requested. For example: "enterprises/XYZ/devices/123"
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "parentRelations": [],
     *   //   "traits": {},
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
      params: Params$Resource$Enterprises$Devices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Device>;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Get
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Device>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://smartdevicemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1Device>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1Device>(
          parameters
        );
      }
    }

    /**
     * Lists devices managed by the enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/smartdevicemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const smartdevicemanagement = google.smartdevicemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/sdm.service',
     *       'https://www.googleapis.com/auth/userinfo.email',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await smartdevicemanagement.enterprises.devices.list({
     *     // Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'
     *     filter: 'placeholder-value',
     *     // The parent enterprise to list devices under. E.g. "enterprises/XYZ".
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": []
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
      params: Params$Resource$Enterprises$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Enterprises$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$List
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://smartdevicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/devices').replace(
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
        createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Enterprises$Devices$Executecommand
    extends StandardParameters {
    /**
     * The name of the device requested. For example: "enterprises/XYZ/devices/123"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
  }
  export interface Params$Resource$Enterprises$Devices$Get
    extends StandardParameters {
    /**
     * The name of the device requested. For example: "enterprises/XYZ/devices/123"
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$List
    extends StandardParameters {
    /**
     * Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'
     */
    filter?: string;
    /**
     * The parent enterprise to list devices under. E.g. "enterprises/XYZ".
     */
    parent?: string;
  }

  export class Resource$Enterprises$Structures {
    context: APIRequestContext;
    rooms: Resource$Enterprises$Structures$Rooms;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.rooms = new Resource$Enterprises$Structures$Rooms(this.context);
    }

    /**
     * Gets a structure managed by the enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/smartdevicemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const smartdevicemanagement = google.smartdevicemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/sdm.service',
     *       'https://www.googleapis.com/auth/userinfo.email',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await smartdevicemanagement.enterprises.structures.get({
     *     // The name of the structure requested. For example: "enterprises/XYZ/structures/ABC".
     *     name: 'enterprises/my-enterprise/structures/my-structure',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "traits": {}
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
      params: Params$Resource$Enterprises$Structures$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Structures$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Structure>;
    get(
      params: Params$Resource$Enterprises$Structures$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Structures$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>
    ): void;
    get(
      params: Params$Resource$Enterprises$Structures$Get,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Structures$Get
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Structure>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Structures$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Structures$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://smartdevicemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1Structure>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1Structure>(
          parameters
        );
      }
    }

    /**
     * Lists structures managed by the enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/smartdevicemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const smartdevicemanagement = google.smartdevicemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/sdm.service',
     *       'https://www.googleapis.com/auth/userinfo.email',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await smartdevicemanagement.enterprises.structures.list({
     *     // Optional filter to list structures.
     *     filter: 'placeholder-value',
     *     // The parent enterprise to list structures under. E.g. "enterprises/XYZ".
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "structures": []
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
      params: Params$Resource$Enterprises$Structures$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Enterprises$Structures$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>;
    list(
      params: Params$Resource$Enterprises$Structures$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Structures$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Structures$List,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Structures$List
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Structures$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Structures$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://smartdevicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/structures').replace(
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
        createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Enterprises$Structures$Get
    extends StandardParameters {
    /**
     * The name of the structure requested. For example: "enterprises/XYZ/structures/ABC".
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Structures$List
    extends StandardParameters {
    /**
     * Optional filter to list structures.
     */
    filter?: string;
    /**
     * The parent enterprise to list structures under. E.g. "enterprises/XYZ".
     */
    parent?: string;
  }

  export class Resource$Enterprises$Structures$Rooms {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a room managed by the enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/smartdevicemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const smartdevicemanagement = google.smartdevicemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/sdm.service',
     *       'https://www.googleapis.com/auth/userinfo.email',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await smartdevicemanagement.enterprises.structures.rooms.get({
     *     // The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".
     *     name: 'enterprises/my-enterprise/structures/my-structure/rooms/my-room',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "traits": {}
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
      params: Params$Resource$Enterprises$Structures$Rooms$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Structures$Rooms$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Room>;
    get(
      params: Params$Resource$Enterprises$Structures$Rooms$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Structures$Rooms$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>
    ): void;
    get(
      params: Params$Resource$Enterprises$Structures$Rooms$Get,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Structures$Rooms$Get
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Room>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Structures$Rooms$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Structures$Rooms$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://smartdevicemanagement.googleapis.com/';
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
        createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1Room>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1Room>(
          parameters
        );
      }
    }

    /**
     * Lists rooms managed by the enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/smartdevicemanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const smartdevicemanagement = google.smartdevicemanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/sdm.service',
     *       'https://www.googleapis.com/auth/userinfo.email',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await smartdevicemanagement.enterprises.structures.rooms.list({
     *     // The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".
     *     parent: 'enterprises/my-enterprise/structures/my-structure',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "rooms": []
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
      params: Params$Resource$Enterprises$Structures$Rooms$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Enterprises$Structures$Rooms$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>;
    list(
      params: Params$Resource$Enterprises$Structures$Rooms$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Structures$Rooms$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Structures$Rooms$List,
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Structures$Rooms$List
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Structures$Rooms$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Structures$Rooms$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://smartdevicemanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/rooms').replace(
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
        createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Enterprises$Structures$Rooms$Get
    extends StandardParameters {
    /**
     * The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Structures$Rooms$List
    extends StandardParameters {
    /**
     * The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".
     */
    parent?: string;
  }
}
