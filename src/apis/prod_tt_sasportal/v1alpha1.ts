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

export namespace prod_tt_sasportal_v1alpha1 {
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
   * SAS Portal API (Testing)
   *
   *
   *
   * @example
   * const {google} = require('googleapis');
   * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
   *
   * @namespace prod_tt_sasportal
   * @type {Function}
   * @version v1alpha1
   * @variation v1alpha1
   * @param {object=} options Options for Prod_tt_sasportal
   */
  export class Prod_tt_sasportal {
    context: APIRequestContext;
    customers: Resource$Customers;
    installer: Resource$Installer;
    nodes: Resource$Nodes;
    policies: Resource$Policies;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customers = new Resource$Customers(this.context);
      this.installer = new Resource$Installer(this.context);
      this.nodes = new Resource$Nodes(this.context);
      this.policies = new Resource$Policies(this.context);
    }
  }

  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$SasPortalAssignment {
    /**
     * The identities the role is assigned to. It can have the following values:  * `{user_email}`: An email address that represents a specific    Google account. For example: `alice@gmail.com`.  * `{group_email}`: An email address that represents a Google    group.  For example, `viewers@gmail.com`.
     */
    members?: string[] | null;
    /**
     * Required. Role that is assigned to `members`.
     */
    role?: string | null;
  }
  /**
   * Request for BulkCreateDevice method.
   */
  export interface Schema$SasPortalBulkCreateDeviceRequest {
    /**
     * Required. A csv with each row representing a [device]. Each row must conform to the regulations described on CreateDeviceRequest&#39;s device field.
     */
    csv?: string | null;
  }
  /**
   * Response for BulkCreateDevice method.
   */
  export interface Schema$SasPortalBulkCreateDeviceResponse {
    /**
     * Required. The devices that were imported.
     */
    devices?: Schema$SasPortalDevice[];
  }
  /**
   * Request for CreateSignedDevice method.
   */
  export interface Schema$SasPortalCreateSignedDeviceRequest {
    /**
     * Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the [Device].
     */
    encodedDevice?: string | null;
    /**
     * Required. Unique installer id (cpiId) from the Certified Professional Installers database.
     */
    installerId?: string | null;
  }
  /**
   * Entity representing a SAS customer.
   */
  export interface Schema$SasPortalCustomer {
    /**
     * Required. Name of the organization that the customer entity represents.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name of the customer.
     */
    name?: string | null;
    /**
     * User IDs used by the devices belonging to this customer.
     */
    sasUserIds?: string[] | null;
  }
  export interface Schema$SasPortalDevice {
    /**
     * Output only. Current configuration of the device as registered to the SAS.
     */
    activeConfig?: Schema$SasPortalDeviceConfig;
    /**
     * Device display name.
     */
    displayName?: string | null;
    /**
     * The FCC identifier of the device.
     */
    fccId?: string | null;
    /**
     * Output only. Grants held by the device.
     */
    grants?: Schema$SasPortalDeviceGrant[];
    /**
     * Output only. The resource path name.
     */
    name?: string | null;
    /**
     * Configuration of the device, as specified via SAS Portal API.
     */
    preloadedConfig?: Schema$SasPortalDeviceConfig;
    /**
     * A serial number assigned to the device by the device manufacturer.
     */
    serialNumber?: string | null;
    /**
     * Output only. Device state.
     */
    state?: string | null;
  }
  /**
   * Information about the device&#39;s air interface.
   */
  export interface Schema$SasPortalDeviceAirInterface {
    /**
     * This field specifies the radio access technology that is used for the CBSD.  Conditional
     */
    radioTechnology?: string | null;
    /**
     * This field is related to the radioTechnology field and provides the air interface specification that the CBSD is compliant with at the time of registration.  Optional
     */
    supportedSpec?: string | null;
  }
  /**
   * Information about the device configuration.
   */
  export interface Schema$SasPortalDeviceConfig {
    /**
     * Information about this device&#39;s air interface.
     */
    airInterface?: Schema$SasPortalDeviceAirInterface;
    /**
     * The call sign of the device operator.
     */
    callSign?: string | null;
    /**
     * FCC category of the device.
     */
    category?: string | null;
    /**
     * Installation parameters for the device.
     */
    installationParams?: Schema$SasPortalInstallationParams;
    /**
     * Output-only. Whether the configuration has been signed by a CPI.
     */
    isSigned?: boolean | null;
    /**
     * Measurement reporting capabilities of the device.
     */
    measurementCapabilities?: string[] | null;
    /**
     * Information about this device model.
     */
    model?: Schema$SasPortalDeviceModel;
    /**
     * State of the configuration.
     */
    state?: string | null;
    /**
     * Output-only. The last time the device configuration was edited.
     */
    updateTime?: string | null;
    /**
     * Output only. The identifier of a device user.
     */
    userId?: string | null;
  }
  /**
   * Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.
   */
  export interface Schema$SasPortalDeviceGrant {
    /**
     * Type of channel used.
     */
    channelType?: string | null;
    /**
     * The expiration time of the grant.
     */
    expireTime?: string | null;
    /**
     * The transmission frequency range.
     */
    frequencyRange?: Schema$SasPortalFrequencyRange;
    /**
     * Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of maxEirp represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3).
     */
    maxEirp?: number | null;
    /**
     * The DPA move lists on which this grant appears.
     */
    moveList?: Schema$SasPortalDpaMoveList[];
    /**
     * State of the grant.
     */
    state?: string | null;
  }
  /**
   * Information about the model of the device.
   */
  export interface Schema$SasPortalDeviceModel {
    /**
     * The firmware version of the device.
     */
    firmwareVersion?: string | null;
    /**
     * The hardware version of the device.
     */
    hardwareVersion?: string | null;
    /**
     * The name of the device model.
     */
    name?: string | null;
    /**
     * The software version of the device.
     */
    softwareVersion?: string | null;
    /**
     * The name of the device vendor.
     */
    vendor?: string | null;
  }
  /**
   * An entry in a DPA&#39;s move list.
   */
  export interface Schema$SasPortalDpaMoveList {
    /**
     * The ID of the DPA.
     */
    dpaId?: string | null;
    /**
     * The frequency range that the move list affects.
     */
    frequencyRange?: Schema$SasPortalFrequencyRange;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$SasPortalEmpty {}
  /**
   * Frequency range from `low_frequency` to `high_frequency`.
   */
  export interface Schema$SasPortalFrequencyRange {
    /**
     * The highest frequency of the frequency range in MHz.
     */
    highFrequencyMhz?: number | null;
    /**
     * The lowest frequency of the frequency range in MHz.
     */
    lowFrequencyMhz?: number | null;
  }
  /**
   * Request for GenerateSecret method] [spectrum.sas.portal.v1alpha1.DeviceManager.GenerateSecret].
   */
  export interface Schema$SasPortalGenerateSecretRequest {}
  /**
   * Response for GenerateSecret method.
   */
  export interface Schema$SasPortalGenerateSecretResponse {
    /**
     * The secret generated by the string and used by [ValidateInstaller] method.
     */
    secret?: string | null;
  }
  /**
   * Request message for `GetPolicy` method.
   */
  export interface Schema$SasPortalGetPolicyRequest {
    /**
     * Required. The resource for which the policy is being requested.
     */
    resource?: string | null;
  }
  /**
   * Information about the device installation parameters.
   */
  export interface Schema$SasPortalInstallationParams {
    /**
     * Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices.
     */
    antennaAzimuth?: number | null;
    /**
     * 3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees.  This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices.
     */
    antennaBeamwidth?: number | null;
    /**
     * Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices.
     */
    antennaDowntilt?: number | null;
    /**
     * Peak antenna gain in dBi. This parameter is an integer with a value between -127 and +128 (dBi) inclusive.
     */
    antennaGain?: number | null;
    /**
     * If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets.
     */
    antennaModel?: string | null;
    /**
     * This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category.
     */
    eirpCapability?: number | null;
    /**
     * Device antenna height in meters. When the heightType parameter value is &quot;AGL&quot;, the antenna height should be given relative to ground level. When the heightType parameter value is &quot;AMSL&quot;, it is given with respect to WGS84 datum.
     */
    height?: number | null;
    /**
     * Specifies how the height is measured.
     */
    heightType?: string | null;
    /**
     * A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters.
     */
    horizontalAccuracy?: number | null;
    /**
     * Whether the device antenna is indoor or not. True: indoor. False: outdoor.
     */
    indoorDeployment?: boolean | null;
    /**
     * Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator.
     */
    latitude?: number | null;
    /**
     * Longitude of the device antenna location. in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian.
     */
    longitude?: number | null;
    /**
     * A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters.
     */
    verticalAccuracy?: number | null;
  }
  /**
   * Response for `ListCustomers`.
   */
  export interface Schema$SasPortalListCustomersResponse {
    /**
     * The list of customers that match the request.
     */
    customers?: Schema$SasPortalCustomer[];
    /**
     * A pagination token returned from a previous call to ListCustomers method that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListDevices method.
   */
  export interface Schema$SasPortalListDevicesResponse {
    /**
     * The devices that match the request.
     */
    devices?: Schema$SasPortalDevice[];
    /**
     * A pagination token returned from a previous call to ListDevices method that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListNodes method.
   */
  export interface Schema$SasPortalListNodesResponse {
    /**
     * A pagination token returned from a previous call to ListNodes method that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes.
     */
    nextPageToken?: string | null;
    /**
     * The nodes that match the request.
     */
    nodes?: Schema$SasPortalNode[];
  }
  /**
   * Request for MoveDevice method.
   */
  export interface Schema$SasPortalMoveDeviceRequest {
    /**
     * Required. The name of the new parent resource (Node or Customer) to reparent the device under.
     */
    destination?: string | null;
  }
  /**
   * Request for MoveNode method.
   */
  export interface Schema$SasPortalMoveNodeRequest {
    /**
     * Required. The name of the new parent resource node or Customer) to reparent the node under.
     */
    destination?: string | null;
  }
  /**
   * The Node.
   */
  export interface Schema$SasPortalNode {
    /**
     * The node&#39;s display name.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name.
     */
    name?: string | null;
    /**
     * User ids used by the devices belonging to this node.
     */
    sasUserIds?: string[] | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$SasPortalOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$SasPortalStatus;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Defines an access control policy to the resources.
   */
  export interface Schema$SasPortalPolicy {
    assignments?: Schema$SasPortalAssignment[];
    /**
     * The [etag] is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other.  It is strongly suggested that systems make use of the [etag] in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An [etag] is returned in the response to [GetPolicy], and systems are expected to put that etag in the request to [SetPolicy] to ensure that their change will be applied to the same version of the policy.  If no [etag] is provided in the call to [SetPolicy], then the existing policy is overwritten blindly.
     */
    etag?: string | null;
  }
  /**
   * Request message for `SetPolicy` method.
   */
  export interface Schema$SasPortalSetPolicyRequest {
    /**
     * Required. The policy to be applied to the `resource`.
     */
    policy?: Schema$SasPortalPolicy;
    /**
     * Required. The resource for which the policy is being specified. This policy replaces any existing policy.
     */
    resource?: string | null;
  }
  /**
   * Request for SignDevice method.
   */
  export interface Schema$SasPortalSignDeviceRequest {
    /**
     * Required. The device to sign. The device fields name, fcc_id and serial_number must be set.
     */
    device?: Schema$SasPortalDevice;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$SasPortalStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Request message for `TestPermissions` method.
   */
  export interface Schema$SasPortalTestPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`.
     */
    permissions?: string[] | null;
    /**
     * Required. The resource for which the permissions are being requested.
     */
    resource?: string | null;
  }
  /**
   * Response message for `TestPermissions` method.
   */
  export interface Schema$SasPortalTestPermissionsResponse {
    /**
     * A set of permissions that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * Request for UpdateSignedDevice method.
   */
  export interface Schema$SasPortalUpdateSignedDeviceRequest {
    /**
     * Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device.
     */
    encodedDevice?: string | null;
    /**
     * Required. Unique installer ID (CPI ID) from the Certified Professional Installers database.
     */
    installerId?: string | null;
  }
  /**
   * Request for ValidateInstaller method.
   */
  export interface Schema$SasPortalValidateInstallerRequest {
    /**
     * Required. JSON Web Token signed using a CPI private key. Payload must include a &quot;secret&quot; claim whose value is the secret.
     */
    encodedSecret?: string | null;
    /**
     * Required. Unique installer id (cpiId) from the Certified Professional Installers database.
     */
    installerId?: string | null;
    /**
     * Required. Secret returned by the GenerateSecret method.
     */
    secret?: string | null;
  }
  /**
   * Response for ValidateInstaller method] [spectrum.sas.portal.v1alpha1.DeviceManager.ValidateInstaller].
   */
  export interface Schema$SasPortalValidateInstallerResponse {}

  export class Resource$Customers {
    context: APIRequestContext;
    devices: Resource$Customers$Devices;
    nodes: Resource$Customers$Nodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Customers$Devices(this.context);
      this.nodes = new Resource$Customers$Nodes(this.context);
    }

    /**
     * prod_tt_sasportal.customers.get
     * @desc Returns a requested customer.
     * @alias prod_tt_sasportal.customers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the customer.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Customers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalCustomer>;
    get(
      params: Params$Resource$Customers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalCustomer>,
      callback: BodyResponseCallback<Schema$SasPortalCustomer>
    ): void;
    get(
      params: Params$Resource$Customers$Get,
      callback: BodyResponseCallback<Schema$SasPortalCustomer>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalCustomer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Get
        | BodyResponseCallback<Schema$SasPortalCustomer>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalCustomer>,
      callback?: BodyResponseCallback<Schema$SasPortalCustomer>
    ): void | GaxiosPromise<Schema$SasPortalCustomer> {
      let params = (paramsOrCallback || {}) as Params$Resource$Customers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalCustomer>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalCustomer>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.list
     * @desc Returns a list of requested customers.
     * @alias prod_tt_sasportal.customers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of customers to return in the response.
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListCustomers method that indicates where this listing should continue from.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Customers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListCustomersResponse>;
    list(
      params: Params$Resource$Customers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListCustomersResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListCustomersResponse>
    ): void;
    list(
      params: Params$Resource$Customers$List,
      callback: BodyResponseCallback<Schema$SasPortalListCustomersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListCustomersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$List
        | BodyResponseCallback<Schema$SasPortalListCustomersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListCustomersResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalListCustomersResponse>
    ): void | GaxiosPromise<Schema$SasPortalListCustomersResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Customers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/customers').replace(
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
        createAPIRequest<Schema$SasPortalListCustomersResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalListCustomersResponse>(
          parameters
        );
      }
    }

    /**
     * prod_tt_sasportal.customers.patch
     * @desc Updates an existing customer.
     * @alias prod_tt_sasportal.customers.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of the customer.
     * @param {string=} params.updateMask Fields to be updated.
     * @param {().SasPortalCustomer} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Customers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalCustomer>;
    patch(
      params: Params$Resource$Customers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalCustomer>,
      callback: BodyResponseCallback<Schema$SasPortalCustomer>
    ): void;
    patch(
      params: Params$Resource$Customers$Patch,
      callback: BodyResponseCallback<Schema$SasPortalCustomer>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SasPortalCustomer>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customers$Patch
        | BodyResponseCallback<Schema$SasPortalCustomer>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalCustomer>,
      callback?: BodyResponseCallback<Schema$SasPortalCustomer>
    ): void | GaxiosPromise<Schema$SasPortalCustomer> {
      let params = (paramsOrCallback || {}) as Params$Resource$Customers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SasPortalCustomer>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalCustomer>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the customer.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of customers to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListCustomers method that indicates where this listing should continue from.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customers$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name of the customer.
     */
    name?: string;
    /**
     * Fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalCustomer;
  }

  export class Resource$Customers$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * prod_tt_sasportal.customers.devices.bulk
     * @desc Creates a device under a node or customer. Returned devices are unordered.
     * @alias prod_tt_sasportal.customers.devices.bulk
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the parent resource.
     * @param {().SasPortalBulkCreateDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    bulk(
      params?: Params$Resource$Customers$Devices$Bulk,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalBulkCreateDeviceResponse>;
    bulk(
      params: Params$Resource$Customers$Devices$Bulk,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>,
      callback: BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>
    ): void;
    bulk(
      params: Params$Resource$Customers$Devices$Bulk,
      callback: BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>
    ): void;
    bulk(
      callback: BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>
    ): void;
    bulk(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Bulk
        | BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>
    ): void | GaxiosPromise<Schema$SasPortalBulkCreateDeviceResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Bulk;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Bulk;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/devices:bulk').replace(
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
        createAPIRequest<Schema$SasPortalBulkCreateDeviceResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalBulkCreateDeviceResponse>(
          parameters
        );
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.create
     * @desc Creates a device under a node or customer.
     * @alias prod_tt_sasportal.customers.devices.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the parent resource.
     * @param {().SasPortalDevice} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Customers$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    create(
      params: Params$Resource$Customers$Devices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(
      params: Params$Resource$Customers$Devices$Create,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Create
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/devices').replace(
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.createSigned
     * @desc Creates a signed device under a node or customer.
     * @alias prod_tt_sasportal.customers.devices.createSigned
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the parent resource.
     * @param {().SasPortalCreateSignedDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createSigned(
      params?: Params$Resource$Customers$Devices$Createsigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    createSigned(
      params: Params$Resource$Customers$Devices$Createsigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(
      params: Params$Resource$Customers$Devices$Createsigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    createSigned(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Createsigned
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Createsigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Createsigned;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/devices:createSigned').replace(
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.delete
     * @desc Deletes a device.
     * @alias prod_tt_sasportal.customers.devices.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the device.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Customers$Devices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Customers$Devices$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(
      params: Params$Resource$Customers$Devices$Delete,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Delete
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback?: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.get
     * @desc Gets details about a device.
     * @alias prod_tt_sasportal.customers.devices.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the device.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Customers$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    get(
      params: Params$Resource$Customers$Devices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    get(
      params: Params$Resource$Customers$Devices$Get,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Get
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.list
     * @desc Lists devices under a node or customer.
     * @alias prod_tt_sasportal.customers.devices.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial_number of the device. The filter is case insensitive.
     * @param {integer=} params.pageSize The maximum number of devices to return in the response.
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     * @param {string} params.parent Required. The name of the parent resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Customers$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDevicesResponse>;
    list(
      params: Params$Resource$Customers$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Devices$List,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$List
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void | GaxiosPromise<Schema$SasPortalListDevicesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/devices').replace(
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
        createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters
        );
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.move
     * @desc Moves a device under another node or customer.
     * @alias prod_tt_sasportal.customers.devices.move
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the device to move.
     * @param {().SasPortalMoveDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    move(
      params?: Params$Resource$Customers$Devices$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Customers$Devices$Move,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalOperation>,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(
      params: Params$Resource$Customers$Devices$Move,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(callback: BodyResponseCallback<Schema$SasPortalOperation>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Move
        | BodyResponseCallback<Schema$SasPortalOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>,
      callback?: BodyResponseCallback<Schema$SasPortalOperation>
    ): void | GaxiosPromise<Schema$SasPortalOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Move;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:move').replace(
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
        createAPIRequest<Schema$SasPortalOperation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.patch
     * @desc Updates a device.
     * @alias prod_tt_sasportal.customers.devices.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource path name.
     * @param {string=} params.updateMask Fields to be updated.
     * @param {().SasPortalDevice} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Customers$Devices$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    patch(
      params: Params$Resource$Customers$Devices$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    patch(
      params: Params$Resource$Customers$Devices$Patch,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Patch
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.signDevice
     * @desc Signs a device.
     * @alias prod_tt_sasportal.customers.devices.signDevice
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource path name.
     * @param {().SasPortalSignDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    signDevice(
      params?: Params$Resource$Customers$Devices$Signdevice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    signDevice(
      params: Params$Resource$Customers$Devices$Signdevice,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    signDevice(
      params: Params$Resource$Customers$Devices$Signdevice,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    signDevice(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    signDevice(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Signdevice
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback?: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Signdevice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Signdevice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:signDevice').replace(
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
        createAPIRequest<Schema$SasPortalEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.devices.updateSigned
     * @desc Updates a signed device.
     * @alias prod_tt_sasportal.customers.devices.updateSigned
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the device to update.
     * @param {().SasPortalUpdateSignedDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateSigned(
      params?: Params$Resource$Customers$Devices$Updatesigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    updateSigned(
      params: Params$Resource$Customers$Devices$Updatesigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    updateSigned(
      params: Params$Resource$Customers$Devices$Updatesigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    updateSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    updateSigned(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Updatesigned
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Updatesigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Updatesigned;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:updateSigned').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Devices$Bulk
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalBulkCreateDeviceRequest;
  }
  export interface Params$Resource$Customers$Devices$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDevice;
  }
  export interface Params$Resource$Customers$Devices$Createsigned
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalCreateSignedDeviceRequest;
  }
  export interface Params$Resource$Customers$Devices$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Devices$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Devices$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial_number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * The maximum number of devices to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;
  }
  export interface Params$Resource$Customers$Devices$Move
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the device to move.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalMoveDeviceRequest;
  }
  export interface Params$Resource$Customers$Devices$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource path name.
     */
    name?: string;
    /**
     * Fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDevice;
  }
  export interface Params$Resource$Customers$Devices$Signdevice
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource path name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalSignDeviceRequest;
  }
  export interface Params$Resource$Customers$Devices$Updatesigned
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the device to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalUpdateSignedDeviceRequest;
  }

  export class Resource$Customers$Nodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * prod_tt_sasportal.customers.nodes.create
     * @desc Creates a new node.
     * @alias prod_tt_sasportal.customers.nodes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource name where the node is to be created.
     * @param {().SasPortalNode} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Customers$Nodes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    create(
      params: Params$Resource$Customers$Nodes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    create(
      params: Params$Resource$Customers$Nodes$Create,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Create
        | BodyResponseCallback<Schema$SasPortalNode>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>,
      callback?: BodyResponseCallback<Schema$SasPortalNode>
    ): void | GaxiosPromise<Schema$SasPortalNode> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/nodes').replace(
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
        createAPIRequest<Schema$SasPortalNode>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.nodes.delete
     * @desc Deletes a node.
     * @alias prod_tt_sasportal.customers.nodes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the node.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Customers$Nodes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Customers$Nodes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(
      params: Params$Resource$Customers$Nodes$Delete,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Delete
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback?: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.nodes.get
     * @desc Returns a requested node.
     * @alias prod_tt_sasportal.customers.nodes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the node.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Customers$Nodes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    get(
      params: Params$Resource$Customers$Nodes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    get(
      params: Params$Resource$Customers$Nodes$Get,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Get
        | BodyResponseCallback<Schema$SasPortalNode>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>,
      callback?: BodyResponseCallback<Schema$SasPortalNode>
    ): void | GaxiosPromise<Schema$SasPortalNode> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalNode>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.nodes.list
     * @desc Lists nodes.
     * @alias prod_tt_sasportal.customers.nodes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of nodes to return in the response.
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListNodes method that indicates where this listing should continue from.
     * @param {string} params.parent Required. The parent resource name, for example, "nodes/1".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Customers$Nodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListNodesResponse>;
    list(
      params: Params$Resource$Customers$Nodes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Nodes$List,
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$List
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void | GaxiosPromise<Schema$SasPortalListNodesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/nodes').replace(
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
        createAPIRequest<Schema$SasPortalListNodesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalListNodesResponse>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.nodes.move
     * @desc Moves a node under another node or customer.
     * @alias prod_tt_sasportal.customers.nodes.move
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the node to move.
     * @param {().SasPortalMoveNodeRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    move(
      params?: Params$Resource$Customers$Nodes$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Customers$Nodes$Move,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalOperation>,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(
      params: Params$Resource$Customers$Nodes$Move,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(callback: BodyResponseCallback<Schema$SasPortalOperation>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Move
        | BodyResponseCallback<Schema$SasPortalOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>,
      callback?: BodyResponseCallback<Schema$SasPortalOperation>
    ): void | GaxiosPromise<Schema$SasPortalOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Move;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:move').replace(
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
        createAPIRequest<Schema$SasPortalOperation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.customers.nodes.patch
     * @desc Updates an existing node.
     * @alias prod_tt_sasportal.customers.nodes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name.
     * @param {string=} params.updateMask Fields to be updated.
     * @param {().SasPortalNode} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Customers$Nodes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    patch(
      params: Params$Resource$Customers$Nodes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    patch(
      params: Params$Resource$Customers$Nodes$Patch,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Patch
        | BodyResponseCallback<Schema$SasPortalNode>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>,
      callback?: BodyResponseCallback<Schema$SasPortalNode>
    ): void | GaxiosPromise<Schema$SasPortalNode> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SasPortalNode>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Nodes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource name where the node is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalNode;
  }
  export interface Params$Resource$Customers$Nodes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the node.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Nodes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the node.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Nodes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of nodes to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListNodes method that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1".
     */
    parent?: string;
  }
  export interface Params$Resource$Customers$Nodes$Move
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the node to move.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalMoveNodeRequest;
  }
  export interface Params$Resource$Customers$Nodes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name.
     */
    name?: string;
    /**
     * Fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalNode;
  }

  export class Resource$Installer {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * prod_tt_sasportal.installer.generateSecret
     * @desc Generates a secret to be used with the ValidateInstaller method
     * @alias prod_tt_sasportal.installer.generateSecret
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SasPortalGenerateSecretRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateSecret(
      params?: Params$Resource$Installer$Generatesecret,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalGenerateSecretResponse>;
    generateSecret(
      params: Params$Resource$Installer$Generatesecret,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>,
      callback: BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>
    ): void;
    generateSecret(
      params: Params$Resource$Installer$Generatesecret,
      callback: BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>
    ): void;
    generateSecret(
      callback: BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>
    ): void;
    generateSecret(
      paramsOrCallback?:
        | Params$Resource$Installer$Generatesecret
        | BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>
    ): void | GaxiosPromise<Schema$SasPortalGenerateSecretResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Installer$Generatesecret;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Installer$Generatesecret;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/installer:generateSecret').replace(
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
        createAPIRequest<Schema$SasPortalGenerateSecretResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalGenerateSecretResponse>(
          parameters
        );
      }
    }

    /**
     * prod_tt_sasportal.installer.validate
     * @desc Validates the identity of a Certified Professional Installer (CPI).
     * @alias prod_tt_sasportal.installer.validate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SasPortalValidateInstallerRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    validate(
      params?: Params$Resource$Installer$Validate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalValidateInstallerResponse>;
    validate(
      params: Params$Resource$Installer$Validate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>,
      callback: BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>
    ): void;
    validate(
      params: Params$Resource$Installer$Validate,
      callback: BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>
    ): void;
    validate(
      callback: BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>
    ): void;
    validate(
      paramsOrCallback?:
        | Params$Resource$Installer$Validate
        | BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>
    ): void | GaxiosPromise<Schema$SasPortalValidateInstallerResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Installer$Validate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Installer$Validate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/installer:validate').replace(
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
        createAPIRequest<Schema$SasPortalValidateInstallerResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalValidateInstallerResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Installer$Generatesecret
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalGenerateSecretRequest;
  }
  export interface Params$Resource$Installer$Validate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalValidateInstallerRequest;
  }

  export class Resource$Nodes {
    context: APIRequestContext;
    devices: Resource$Nodes$Devices;
    nodes: Resource$Nodes$Nodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Nodes$Devices(this.context);
      this.nodes = new Resource$Nodes$Nodes(this.context);
    }
  }

  export class Resource$Nodes$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * prod_tt_sasportal.nodes.devices.bulk
     * @desc Creates a device under a node or customer. Returned devices are unordered.
     * @alias prod_tt_sasportal.nodes.devices.bulk
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the parent resource.
     * @param {().SasPortalBulkCreateDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    bulk(
      params?: Params$Resource$Nodes$Devices$Bulk,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalBulkCreateDeviceResponse>;
    bulk(
      params: Params$Resource$Nodes$Devices$Bulk,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>,
      callback: BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>
    ): void;
    bulk(
      params: Params$Resource$Nodes$Devices$Bulk,
      callback: BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>
    ): void;
    bulk(
      callback: BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>
    ): void;
    bulk(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Bulk
        | BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalBulkCreateDeviceResponse>
    ): void | GaxiosPromise<Schema$SasPortalBulkCreateDeviceResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Bulk;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Bulk;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/devices:bulk').replace(
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
        createAPIRequest<Schema$SasPortalBulkCreateDeviceResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalBulkCreateDeviceResponse>(
          parameters
        );
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.create
     * @desc Creates a device under a node or customer.
     * @alias prod_tt_sasportal.nodes.devices.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the parent resource.
     * @param {().SasPortalDevice} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Nodes$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    create(
      params: Params$Resource$Nodes$Devices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(
      params: Params$Resource$Nodes$Devices$Create,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Create
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/devices').replace(
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.createSigned
     * @desc Creates a signed device under a node or customer.
     * @alias prod_tt_sasportal.nodes.devices.createSigned
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the parent resource.
     * @param {().SasPortalCreateSignedDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createSigned(
      params?: Params$Resource$Nodes$Devices$Createsigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    createSigned(
      params: Params$Resource$Nodes$Devices$Createsigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(
      params: Params$Resource$Nodes$Devices$Createsigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    createSigned(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Createsigned
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Createsigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Createsigned;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/devices:createSigned').replace(
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.delete
     * @desc Deletes a device.
     * @alias prod_tt_sasportal.nodes.devices.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the device.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Nodes$Devices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Nodes$Devices$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(
      params: Params$Resource$Nodes$Devices$Delete,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Delete
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback?: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.get
     * @desc Gets details about a device.
     * @alias prod_tt_sasportal.nodes.devices.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the device.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Nodes$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    get(
      params: Params$Resource$Nodes$Devices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    get(
      params: Params$Resource$Nodes$Devices$Get,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Get
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.list
     * @desc Lists devices under a node or customer.
     * @alias prod_tt_sasportal.nodes.devices.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial_number of the device. The filter is case insensitive.
     * @param {integer=} params.pageSize The maximum number of devices to return in the response.
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     * @param {string} params.parent Required. The name of the parent resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Nodes$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDevicesResponse>;
    list(
      params: Params$Resource$Nodes$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Nodes$Devices$List,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$List
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void | GaxiosPromise<Schema$SasPortalListDevicesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/devices').replace(
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
        createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters
        );
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.move
     * @desc Moves a device under another node or customer.
     * @alias prod_tt_sasportal.nodes.devices.move
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the device to move.
     * @param {().SasPortalMoveDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    move(
      params?: Params$Resource$Nodes$Devices$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Nodes$Devices$Move,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalOperation>,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(
      params: Params$Resource$Nodes$Devices$Move,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(callback: BodyResponseCallback<Schema$SasPortalOperation>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Move
        | BodyResponseCallback<Schema$SasPortalOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>,
      callback?: BodyResponseCallback<Schema$SasPortalOperation>
    ): void | GaxiosPromise<Schema$SasPortalOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Move;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:move').replace(
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
        createAPIRequest<Schema$SasPortalOperation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.patch
     * @desc Updates a device.
     * @alias prod_tt_sasportal.nodes.devices.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource path name.
     * @param {string=} params.updateMask Fields to be updated.
     * @param {().SasPortalDevice} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Nodes$Devices$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    patch(
      params: Params$Resource$Nodes$Devices$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    patch(
      params: Params$Resource$Nodes$Devices$Patch,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Patch
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.signDevice
     * @desc Signs a device.
     * @alias prod_tt_sasportal.nodes.devices.signDevice
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource path name.
     * @param {().SasPortalSignDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    signDevice(
      params?: Params$Resource$Nodes$Devices$Signdevice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    signDevice(
      params: Params$Resource$Nodes$Devices$Signdevice,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    signDevice(
      params: Params$Resource$Nodes$Devices$Signdevice,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    signDevice(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    signDevice(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Signdevice
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback?: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Signdevice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Signdevice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:signDevice').replace(
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
        createAPIRequest<Schema$SasPortalEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.devices.updateSigned
     * @desc Updates a signed device.
     * @alias prod_tt_sasportal.nodes.devices.updateSigned
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the device to update.
     * @param {().SasPortalUpdateSignedDeviceRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateSigned(
      params?: Params$Resource$Nodes$Devices$Updatesigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    updateSigned(
      params: Params$Resource$Nodes$Devices$Updatesigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    updateSigned(
      params: Params$Resource$Nodes$Devices$Updatesigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    updateSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    updateSigned(
      paramsOrCallback?:
        | Params$Resource$Nodes$Devices$Updatesigned
        | BodyResponseCallback<Schema$SasPortalDevice>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>,
      callback?: BodyResponseCallback<Schema$SasPortalDevice>
    ): void | GaxiosPromise<Schema$SasPortalDevice> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Devices$Updatesigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Devices$Updatesigned;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:updateSigned').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$SasPortalDevice>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }
  }

  export interface Params$Resource$Nodes$Devices$Bulk
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalBulkCreateDeviceRequest;
  }
  export interface Params$Resource$Nodes$Devices$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDevice;
  }
  export interface Params$Resource$Nodes$Devices$Createsigned
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalCreateSignedDeviceRequest;
  }
  export interface Params$Resource$Nodes$Devices$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Devices$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Devices$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial_number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * The maximum number of devices to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;
  }
  export interface Params$Resource$Nodes$Devices$Move
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the device to move.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalMoveDeviceRequest;
  }
  export interface Params$Resource$Nodes$Devices$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource path name.
     */
    name?: string;
    /**
     * Fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDevice;
  }
  export interface Params$Resource$Nodes$Devices$Signdevice
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource path name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalSignDeviceRequest;
  }
  export interface Params$Resource$Nodes$Devices$Updatesigned
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the device to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalUpdateSignedDeviceRequest;
  }

  export class Resource$Nodes$Nodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * prod_tt_sasportal.nodes.nodes.create
     * @desc Creates a new node.
     * @alias prod_tt_sasportal.nodes.nodes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource name where the node is to be created.
     * @param {().SasPortalNode} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Nodes$Nodes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    create(
      params: Params$Resource$Nodes$Nodes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    create(
      params: Params$Resource$Nodes$Nodes$Create,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Create
        | BodyResponseCallback<Schema$SasPortalNode>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>,
      callback?: BodyResponseCallback<Schema$SasPortalNode>
    ): void | GaxiosPromise<Schema$SasPortalNode> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/nodes').replace(
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
        createAPIRequest<Schema$SasPortalNode>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.nodes.delete
     * @desc Deletes a node.
     * @alias prod_tt_sasportal.nodes.nodes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the node.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Nodes$Nodes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Nodes$Nodes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(
      params: Params$Resource$Nodes$Nodes$Delete,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Delete
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback?: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalEmpty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.nodes.get
     * @desc Returns a requested node.
     * @alias prod_tt_sasportal.nodes.nodes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the node.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Nodes$Nodes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    get(
      params: Params$Resource$Nodes$Nodes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    get(
      params: Params$Resource$Nodes$Nodes$Get,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Get
        | BodyResponseCallback<Schema$SasPortalNode>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>,
      callback?: BodyResponseCallback<Schema$SasPortalNode>
    ): void | GaxiosPromise<Schema$SasPortalNode> {
      let params = (paramsOrCallback || {}) as Params$Resource$Nodes$Nodes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
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
        createAPIRequest<Schema$SasPortalNode>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.nodes.list
     * @desc Lists nodes.
     * @alias prod_tt_sasportal.nodes.nodes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of nodes to return in the response.
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListNodes method that indicates where this listing should continue from.
     * @param {string} params.parent Required. The parent resource name, for example, "nodes/1".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Nodes$Nodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListNodesResponse>;
    list(
      params: Params$Resource$Nodes$Nodes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      params: Params$Resource$Nodes$Nodes$List,
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$List
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void | GaxiosPromise<Schema$SasPortalListNodesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Nodes$Nodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/nodes').replace(
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
        createAPIRequest<Schema$SasPortalListNodesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalListNodesResponse>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.nodes.move
     * @desc Moves a node under another node or customer.
     * @alias prod_tt_sasportal.nodes.nodes.move
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the node to move.
     * @param {().SasPortalMoveNodeRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    move(
      params?: Params$Resource$Nodes$Nodes$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Nodes$Nodes$Move,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalOperation>,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(
      params: Params$Resource$Nodes$Nodes$Move,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(callback: BodyResponseCallback<Schema$SasPortalOperation>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Move
        | BodyResponseCallback<Schema$SasPortalOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>,
      callback?: BodyResponseCallback<Schema$SasPortalOperation>
    ): void | GaxiosPromise<Schema$SasPortalOperation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Nodes$Nodes$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Move;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:move').replace(
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
        createAPIRequest<Schema$SasPortalOperation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.nodes.nodes.patch
     * @desc Updates an existing node.
     * @alias prod_tt_sasportal.nodes.nodes.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name.
     * @param {string=} params.updateMask Fields to be updated.
     * @param {().SasPortalNode} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Nodes$Nodes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    patch(
      params: Params$Resource$Nodes$Nodes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    patch(
      params: Params$Resource$Nodes$Nodes$Patch,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Patch
        | BodyResponseCallback<Schema$SasPortalNode>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>,
      callback?: BodyResponseCallback<Schema$SasPortalNode>
    ): void | GaxiosPromise<Schema$SasPortalNode> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SasPortalNode>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }
  }

  export interface Params$Resource$Nodes$Nodes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource name where the node is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalNode;
  }
  export interface Params$Resource$Nodes$Nodes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the node.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Nodes$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the node.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Nodes$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of nodes to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListNodes method that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1".
     */
    parent?: string;
  }
  export interface Params$Resource$Nodes$Nodes$Move extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the node to move.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalMoveNodeRequest;
  }
  export interface Params$Resource$Nodes$Nodes$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name.
     */
    name?: string;
    /**
     * Fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalNode;
  }

  export class Resource$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * prod_tt_sasportal.policies.get
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias prod_tt_sasportal.policies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SasPortalGetPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalPolicy>;
    get(
      params: Params$Resource$Policies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalPolicy>,
      callback: BodyResponseCallback<Schema$SasPortalPolicy>
    ): void;
    get(
      params: Params$Resource$Policies$Get,
      callback: BodyResponseCallback<Schema$SasPortalPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Policies$Get
        | BodyResponseCallback<Schema$SasPortalPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalPolicy>,
      callback?: BodyResponseCallback<Schema$SasPortalPolicy>
    ): void | GaxiosPromise<Schema$SasPortalPolicy> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/policies:get').replace(
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
        createAPIRequest<Schema$SasPortalPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalPolicy>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.policies.set
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias prod_tt_sasportal.policies.set
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SasPortalSetPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    set(
      params?: Params$Resource$Policies$Set,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalPolicy>;
    set(
      params: Params$Resource$Policies$Set,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalPolicy>,
      callback: BodyResponseCallback<Schema$SasPortalPolicy>
    ): void;
    set(
      params: Params$Resource$Policies$Set,
      callback: BodyResponseCallback<Schema$SasPortalPolicy>
    ): void;
    set(callback: BodyResponseCallback<Schema$SasPortalPolicy>): void;
    set(
      paramsOrCallback?:
        | Params$Resource$Policies$Set
        | BodyResponseCallback<Schema$SasPortalPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalPolicy>,
      callback?: BodyResponseCallback<Schema$SasPortalPolicy>
    ): void | GaxiosPromise<Schema$SasPortalPolicy> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Set;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Set;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/policies:set').replace(
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
        createAPIRequest<Schema$SasPortalPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SasPortalPolicy>(parameters);
      }
    }

    /**
     * prod_tt_sasportal.policies.test
     * @desc Returns permissions that a caller has on the specified resource.
     * @alias prod_tt_sasportal.policies.test
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SasPortalTestPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    test(
      params?: Params$Resource$Policies$Test,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalTestPermissionsResponse>;
    test(
      params: Params$Resource$Policies$Test,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>,
      callback: BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>
    ): void;
    test(
      params: Params$Resource$Policies$Test,
      callback: BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>
    ): void;
    test(
      callback: BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>
    ): void;
    test(
      paramsOrCallback?:
        | Params$Resource$Policies$Test
        | BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>
    ): void | GaxiosPromise<Schema$SasPortalTestPermissionsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Test;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Test;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://prod-tt-sasportal.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/policies:test').replace(
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
        createAPIRequest<Schema$SasPortalTestPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SasPortalTestPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Policies$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalGetPolicyRequest;
  }
  export interface Params$Resource$Policies$Set extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalSetPolicyRequest;
  }
  export interface Params$Resource$Policies$Test extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalTestPermissionsRequest;
  }
}
