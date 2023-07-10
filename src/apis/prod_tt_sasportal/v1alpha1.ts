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

export namespace prod_tt_sasportal_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
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
   * SAS Portal API (Testing)
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
   * ```
   */
  export class Prod_tt_sasportal {
    context: APIRequestContext;
    customers: Resource$Customers;
    deployments: Resource$Deployments;
    installer: Resource$Installer;
    nodes: Resource$Nodes;
    policies: Resource$Policies;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customers = new Resource$Customers(this.context);
      this.deployments = new Resource$Deployments(this.context);
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
     * The identities the role is assigned to. It can have the following values: * `{user_email\}`: An email address that represents a specific Google account. For example: `alice@gmail.com`. * `{group_email\}`: An email address that represents a Google group. For example, `viewers@gmail.com`.
     */
    members?: string[] | null;
    /**
     * Required. Role that is assigned to `members`.
     */
    role?: string | null;
  }
  /**
   * The channel with score.
   */
  export interface Schema$SasPortalChannelWithScore {
    /**
     * The frequency range of the channel.
     */
    frequencyRange?: Schema$SasPortalFrequencyRange;
    /**
     * The channel score, normalized to be in the range [0,100].
     */
    score?: number | null;
  }
  /**
   * Response for [CheckHasProvisionedDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.CheckHasProvisionedDeployment].
   */
  export interface Schema$SasPortalCheckHasProvisionedDeploymentResponse {
    /**
     * Whether a SAS deployment for the authentication context exists.
     */
    hasProvisionedDeployment?: boolean | null;
  }
  /**
   * Request for CreateSignedDevice.
   */
  export interface Schema$SasPortalCreateSignedDeviceRequest {
    /**
     * Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.
     */
    encodedDevice?: string | null;
    /**
     * Required. Unique installer id (CPI ID) from the Certified Professional Installers database.
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
  /**
   * The Deployment.
   */
  export interface Schema$SasPortalDeployment {
    /**
     * The deployment's display name.
     */
    displayName?: string | null;
    /**
     * Output only. The FCC Registration Numbers (FRNs) copied from its direct parent.
     */
    frns?: string[] | null;
    /**
     * Output only. Resource name.
     */
    name?: string | null;
    /**
     * User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.
     */
    sasUserIds?: string[] | null;
  }
  /**
   * Association between a gcp project and a SAS user id.
   */
  export interface Schema$SasPortalDeploymentAssociation {
    /**
     * GCP project id of the associated project.
     */
    gcpProjectId?: string | null;
    /**
     * User id of the deployment.
     */
    userId?: string | null;
  }
  export interface Schema$SasPortalDevice {
    /**
     * Output only. Current configuration of the device as registered to the SAS.
     */
    activeConfig?: Schema$SasPortalDeviceConfig;
    /**
     * Output only. Current channels with scores.
     */
    currentChannels?: Schema$SasPortalChannelWithScore[];
    /**
     * Device parameters that can be overridden by both SAS Portal and SAS registration requests.
     */
    deviceMetadata?: Schema$SasPortalDeviceMetadata;
    /**
     * Device display name.
     */
    displayName?: string | null;
    /**
     * The FCC identifier of the device.
     */
    fccId?: string | null;
    /**
     * Only ranges that are within the allowlists are available for new grants.
     */
    grantRangeAllowlists?: Schema$SasPortalFrequencyRange[];
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
   * Information about the device's air interface.
   */
  export interface Schema$SasPortalDeviceAirInterface {
    /**
     * Conditional. This field specifies the radio access technology that is used for the CBSD.
     */
    radioTechnology?: string | null;
    /**
     * Optional. This field is related to the `radioTechnology` and provides the air interface specification that the CBSD is compliant with at the time of registration.
     */
    supportedSpec?: string | null;
  }
  /**
   * Information about the device configuration.
   */
  export interface Schema$SasPortalDeviceConfig {
    /**
     * Information about this device's air interface.
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
     * Output only. Whether the configuration has been signed by a CPI.
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
     * Output only. The last time the device configuration was edited.
     */
    updateTime?: string | null;
    /**
     * The identifier of a device user.
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
     * Grant Id.
     */
    grantId?: string | null;
    /**
     * The transmit expiration time of the last heartbeat.
     */
    lastHeartbeatTransmitExpireTime?: string | null;
    /**
     * Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of `maxEirp` represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3).
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
    /**
     * If the grant is suspended, the reason(s) for suspension.
     */
    suspensionReason?: string[] | null;
  }
  /**
   * Device data overridable by both SAS Portal and registration requests.
   */
  export interface Schema$SasPortalDeviceMetadata {
    /**
     * If populated, the Antenna Model Pattern to use. Format is: `RecordCreatorId:PatternId`
     */
    antennaModel?: string | null;
    /**
     * Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).
     */
    commonChannelGroup?: string | null;
    /**
     * Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).
     */
    interferenceCoordinationGroup?: string | null;
    /**
     * Output only. Set to `true` if a CPI has validated that they have coordinated with the National Quiet Zone office.
     */
    nrqzValidated?: boolean | null;
    /**
     * Output only. National Radio Quiet Zone validation info.
     */
    nrqzValidation?: Schema$SasPortalNrqzValidation;
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
   * An entry in a DPA's move list.
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
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
   * Request for GenerateSecret.
   */
  export interface Schema$SasPortalGenerateSecretRequest {}
  /**
   * Response for GenerateSecret.
   */
  export interface Schema$SasPortalGenerateSecretResponse {
    /**
     * The secret generated by the string and used by ValidateInstaller.
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
     * 3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices.
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
     * As above, but as a DoubleValue.
     */
    antennaGainNewField?: number | null;
    /**
     * If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets.
     */
    antennaModel?: string | null;
    /**
     * If present, this parameter specifies whether the CBSD is a CPE-CBSD or not.
     */
    cpeCbsdIndication?: boolean | null;
    /**
     * This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category.
     */
    eirpCapability?: number | null;
    /**
     * As above, but as a DoubleValue.
     */
    eirpCapabilityNewField?: number | null;
    /**
     * Device antenna height in meters. When the `heightType` parameter value is "AGL", the antenna height should be given relative to ground level. When the `heightType` parameter value is "AMSL", it is given with respect to WGS84 datum.
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
     * Whether the device antenna is indoor or not. `true`: indoor. `false`: outdoor.
     */
    indoorDeployment?: boolean | null;
    /**
     * Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator.
     */
    latitude?: number | null;
    /**
     * Longitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian.
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
     * A pagination token returned from a previous call to ListCustomers that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListDeployments.
   */
  export interface Schema$SasPortalListDeploymentsResponse {
    /**
     * The deployments that match the request.
     */
    deployments?: Schema$SasPortalDeployment[];
    /**
     * A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListDevices.
   */
  export interface Schema$SasPortalListDevicesResponse {
    /**
     * The devices that match the request.
     */
    devices?: Schema$SasPortalDevice[];
    /**
     * A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListNodes.
   */
  export interface Schema$SasPortalListNodesResponse {
    /**
     * A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes.
     */
    nextPageToken?: string | null;
    /**
     * The nodes that match the request.
     */
    nodes?: Schema$SasPortalNode[];
  }
  /**
   * Long-running operation metadata message returned by the MigrateOrganization.
   */
  export interface Schema$SasPortalMigrateOrganizationMetadata {
    /**
     * Output only. Current operation state
     */
    operationState?: string | null;
  }
  /**
   * Request for [MigrateOrganization]. [spectrum.sas.portal.v1alpha1.Provisioning.MigrateOrganization]. GCP Project, Organization Info, and caller's GAIA ID should be retrieved from the RPC handler, and used to check authorization on SAS Portal organization and to create GCP Projects.
   */
  export interface Schema$SasPortalMigrateOrganizationRequest {
    /**
     * Required. Id of the SAS organization to be migrated.
     */
    organizationId?: string | null;
  }
  /**
   * Response for [MigrateOrganization]. [spectrum.sas.portal.v1alpha1.Provisioning.MigrateOrganization].
   */
  export interface Schema$SasPortalMigrateOrganizationResponse {
    /**
     * Optional. A list of deployment association that were created for the migration, or current associations if they already exist.
     */
    deploymentAssociation?: Schema$SasPortalDeploymentAssociation[];
  }
  /**
   * Request for MoveDeployment.
   */
  export interface Schema$SasPortalMoveDeploymentRequest {
    /**
     * Required. The name of the new parent resource node or customer to reparent the deployment under.
     */
    destination?: string | null;
  }
  /**
   * Request for MoveDevice.
   */
  export interface Schema$SasPortalMoveDeviceRequest {
    /**
     * Required. The name of the new parent resource node or customer to reparent the device under.
     */
    destination?: string | null;
  }
  /**
   * Request for MoveNode.
   */
  export interface Schema$SasPortalMoveNodeRequest {
    /**
     * Required. The name of the new parent resource node or customer to reparent the node under.
     */
    destination?: string | null;
  }
  /**
   * The Node.
   */
  export interface Schema$SasPortalNode {
    /**
     * The node's display name.
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
   * Information about National Radio Quiet Zone validation.
   */
  export interface Schema$SasPortalNrqzValidation {
    /**
     * Validation case ID.
     */
    caseId?: string | null;
    /**
     * CPI who signed the validation.
     */
    cpiId?: string | null;
    /**
     * Device latitude that's associated with the validation.
     */
    latitude?: number | null;
    /**
     * Device longitude that's associated with the validation.
     */
    longitude?: number | null;
    /**
     * State of the NRQZ validation info.
     */
    state?: string | null;
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
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Defines an access control policy to the resources.
   */
  export interface Schema$SasPortalPolicy {
    /**
     * List of assignments
     */
    assignments?: Schema$SasPortalAssignment[];
    /**
     * The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly.
     */
    etag?: string | null;
  }
  /**
   * Request for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. GCP Project, Organization Info, and caller’s GAIA ID should be retrieved from the RPC handler, and used as inputs to create a new SAS organization (if not exists) and a new SAS deployment.
   */
  export interface Schema$SasPortalProvisionDeploymentRequest {
    /**
     * Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field.
     */
    newDeploymentDisplayName?: string | null;
    /**
     * Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field.
     */
    newOrganizationDisplayName?: string | null;
    /**
     * Optional. If this field is set then a new deployment will be created under the organization specified by this id.
     */
    organizationId?: string | null;
  }
  /**
   * Response for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment].
   */
  export interface Schema$SasPortalProvisionDeploymentResponse {
    /**
     * Optional. Optional error message if the provisioning request is not successful.
     */
    errorMessage?: string | null;
  }
  /**
   * Request message for `SetPolicy` method.
   */
  export interface Schema$SasPortalSetPolicyRequest {
    /**
     * Optional. Set the field as `true` to disable the onboarding notification.
     */
    disableNotification?: boolean | null;
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
   * Request for SignDevice.
   */
  export interface Schema$SasPortalSignDeviceRequest {
    /**
     * Required. The device to sign. The device fields name, fcc_id and serial_number must be set. The user_id field must be set.
     */
    device?: Schema$SasPortalDevice;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$SasPortalStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
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
   * Request for UpdateSignedDevice.
   */
  export interface Schema$SasPortalUpdateSignedDeviceRequest {
    /**
     * Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.
     */
    encodedDevice?: string | null;
    /**
     * Required. Unique installer ID (CPI ID) from the Certified Professional Installers database.
     */
    installerId?: string | null;
  }
  /**
   * Request for ValidateInstaller.
   */
  export interface Schema$SasPortalValidateInstallerRequest {
    /**
     * Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret.
     */
    encodedSecret?: string | null;
    /**
     * Required. Unique installer id (CPI ID) from the Certified Professional Installers database.
     */
    installerId?: string | null;
    /**
     * Required. Secret returned by the GenerateSecret.
     */
    secret?: string | null;
  }
  /**
   * Response for ValidateInstaller.
   */
  export interface Schema$SasPortalValidateInstallerResponse {}

  export class Resource$Customers {
    context: APIRequestContext;
    deployments: Resource$Customers$Deployments;
    devices: Resource$Customers$Devices;
    nodes: Resource$Customers$Nodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deployments = new Resource$Customers$Deployments(this.context);
      this.devices = new Resource$Customers$Devices(this.context);
      this.nodes = new Resource$Customers$Nodes(this.context);
    }

    /**
     * Checks whether a SAS deployment for the authentication context exists.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.checkHasProvisionedDeployment(
     *     {}
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hasProvisionedDeployment": false
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
    checkHasProvisionedDeployment(
      params: Params$Resource$Customers$Checkhasprovisioneddeployment,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkHasProvisionedDeployment(
      params?: Params$Resource$Customers$Checkhasprovisioneddeployment,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalCheckHasProvisionedDeploymentResponse>;
    checkHasProvisionedDeployment(
      params: Params$Resource$Customers$Checkhasprovisioneddeployment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkHasProvisionedDeployment(
      params: Params$Resource$Customers$Checkhasprovisioneddeployment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalCheckHasProvisionedDeploymentResponse>,
      callback: BodyResponseCallback<Schema$SasPortalCheckHasProvisionedDeploymentResponse>
    ): void;
    checkHasProvisionedDeployment(
      params: Params$Resource$Customers$Checkhasprovisioneddeployment,
      callback: BodyResponseCallback<Schema$SasPortalCheckHasProvisionedDeploymentResponse>
    ): void;
    checkHasProvisionedDeployment(
      callback: BodyResponseCallback<Schema$SasPortalCheckHasProvisionedDeploymentResponse>
    ): void;
    checkHasProvisionedDeployment(
      paramsOrCallback?:
        | Params$Resource$Customers$Checkhasprovisioneddeployment
        | BodyResponseCallback<Schema$SasPortalCheckHasProvisionedDeploymentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalCheckHasProvisionedDeploymentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalCheckHasProvisionedDeploymentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalCheckHasProvisionedDeploymentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Checkhasprovisioneddeployment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Checkhasprovisioneddeployment;
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
            url: (
              rootUrl + '/v1alpha1/customers:checkHasProvisionedDeployment'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SasPortalCheckHasProvisionedDeploymentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalCheckHasProvisionedDeploymentResponse>(
          parameters
        );
      }
    }

    /**
     * Returns a requested customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.get({
     *     // Required. The name of the customer.
     *     name: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalCustomer>;
    get(
      params: Params$Resource$Customers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalCustomer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalCustomer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalCustomer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalCustomer>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalCustomer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalCustomer>(parameters);
      }
    }

    /**
     * Returns a list of requested customers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.list({
     *     // The maximum number of customers to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListCustomers that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customers": [],
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
      params: Params$Resource$Customers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListCustomersResponse>;
    list(
      params: Params$Resource$Customers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalListCustomersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListCustomersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListCustomersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListCustomersResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListCustomersResponse>(
          parameters
        );
      }
    }

    /**
     * Migrates a SAS organization to the cloud. This will create GCP projects for each deployment and associate them. The SAS Organization is linked to the gcp project that called the command. go/sas-legacy-customer-migration
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.migrateOrganization({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "organizationId": "my_organizationId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    migrateOrganization(
      params: Params$Resource$Customers$Migrateorganization,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    migrateOrganization(
      params?: Params$Resource$Customers$Migrateorganization,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    migrateOrganization(
      params: Params$Resource$Customers$Migrateorganization,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    migrateOrganization(
      params: Params$Resource$Customers$Migrateorganization,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalOperation>,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    migrateOrganization(
      params: Params$Resource$Customers$Migrateorganization,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    migrateOrganization(
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    migrateOrganization(
      paramsOrCallback?:
        | Params$Resource$Customers$Migrateorganization
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Migrateorganization;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Migrateorganization;
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
            url: (rootUrl + '/v1alpha1/customers:migrateOrganization').replace(
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
        createAPIRequest<Schema$SasPortalOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * Updates an existing customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.patch({
     *     // Output only. Resource name of the customer.
     *     name: 'customers/my-customer',
     *     // Fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Customers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalCustomer>;
    patch(
      params: Params$Resource$Customers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalCustomer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalCustomer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalCustomer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalCustomer>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalCustomer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalCustomer>(parameters);
      }
    }

    /**
     * Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.provisionDeployment({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "newDeploymentDisplayName": "my_newDeploymentDisplayName",
     *       //   "newOrganizationDisplayName": "my_newOrganizationDisplayName",
     *       //   "organizationId": "my_organizationId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errorMessage": "my_errorMessage"
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
    provisionDeployment(
      params: Params$Resource$Customers$Provisiondeployment,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    provisionDeployment(
      params?: Params$Resource$Customers$Provisiondeployment,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalProvisionDeploymentResponse>;
    provisionDeployment(
      params: Params$Resource$Customers$Provisiondeployment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    provisionDeployment(
      params: Params$Resource$Customers$Provisiondeployment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalProvisionDeploymentResponse>,
      callback: BodyResponseCallback<Schema$SasPortalProvisionDeploymentResponse>
    ): void;
    provisionDeployment(
      params: Params$Resource$Customers$Provisiondeployment,
      callback: BodyResponseCallback<Schema$SasPortalProvisionDeploymentResponse>
    ): void;
    provisionDeployment(
      callback: BodyResponseCallback<Schema$SasPortalProvisionDeploymentResponse>
    ): void;
    provisionDeployment(
      paramsOrCallback?:
        | Params$Resource$Customers$Provisiondeployment
        | BodyResponseCallback<Schema$SasPortalProvisionDeploymentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalProvisionDeploymentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalProvisionDeploymentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalProvisionDeploymentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Provisiondeployment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Provisiondeployment;
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
            url: (rootUrl + '/v1alpha1/customers:provisionDeployment').replace(
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
        createAPIRequest<Schema$SasPortalProvisionDeploymentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalProvisionDeploymentResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Checkhasprovisioneddeployment
    extends StandardParameters {}
  export interface Params$Resource$Customers$Get extends StandardParameters {
    /**
     * Required. The name of the customer.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$List extends StandardParameters {
    /**
     * The maximum number of customers to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListCustomers that indicates where this listing should continue from.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Customers$Migrateorganization
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalMigrateOrganizationRequest;
  }
  export interface Params$Resource$Customers$Patch extends StandardParameters {
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
  export interface Params$Resource$Customers$Provisiondeployment
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalProvisionDeploymentRequest;
  }

  export class Resource$Customers$Deployments {
    context: APIRequestContext;
    devices: Resource$Customers$Deployments$Devices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Customers$Deployments$Devices(this.context);
    }

    /**
     * Creates a new deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.deployments.create({
     *     // Required. The parent resource name where the deployment is to be created.
     *     parent: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "frns": [],
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "frns": [],
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Deployments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Deployments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDeployment>;
    create(
      params: Params$Resource$Customers$Deployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Deployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDeployment>,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    create(
      params: Params$Resource$Customers$Deployments$Create,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDeployment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$Create
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Deployments$Create;
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
            url: (rootUrl + '/v1alpha1/{+parent}/deployments').replace(
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
        createAPIRequest<Schema$SasPortalDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDeployment>(parameters);
      }
    }

    /**
     * Deletes a deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.deployments.delete({
     *     // Required. The name of the deployment.
     *     name: 'customers/my-customer/deployments/my-deployment',
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
      params: Params$Resource$Customers$Deployments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Customers$Deployments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Customers$Deployments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Customers$Deployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(
      params: Params$Resource$Customers$Deployments$Delete,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$Delete
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Deployments$Delete;
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Returns a requested deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.deployments.get({
     *     // Required. The name of the deployment.
     *     name: 'customers/my-customer/deployments/my-deployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "frns": [],
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Deployments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Deployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDeployment>;
    get(
      params: Params$Resource$Customers$Deployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Deployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDeployment>,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    get(
      params: Params$Resource$Customers$Deployments$Get,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalDeployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$Get
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Deployments$Get;
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
        createAPIRequest<Schema$SasPortalDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDeployment>(parameters);
      }
    }

    /**
     * Lists deployments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.deployments.list({
     *     // The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     *     filter: 'placeholder-value',
     *     // The maximum number of deployments to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     *     parent: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployments": [],
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
      params: Params$Resource$Customers$Deployments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Deployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDeploymentsResponse>;
    list(
      params: Params$Resource$Customers$Deployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Deployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Deployments$List,
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$List
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDeploymentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Deployments$List;
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
            url: (rootUrl + '/v1alpha1/{+parent}/deployments').replace(
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
        createAPIRequest<Schema$SasPortalListDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDeploymentsResponse>(
          parameters
        );
      }
    }

    /**
     * Moves a deployment under another node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.deployments.move({
     *     // Required. The name of the deployment to move.
     *     name: 'customers/my-customer/deployments/my-deployment',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destination": "my_destination"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    move(
      params: Params$Resource$Customers$Deployments$Move,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    move(
      params?: Params$Resource$Customers$Deployments$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Customers$Deployments$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    move(
      params: Params$Resource$Customers$Deployments$Move,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalOperation>,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(
      params: Params$Resource$Customers$Deployments$Move,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(callback: BodyResponseCallback<Schema$SasPortalOperation>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$Move
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Deployments$Move;
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
        createAPIRequest<Schema$SasPortalOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * Updates an existing deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.deployments.patch({
     *     // Output only. Resource name.
     *     name: 'customers/my-customer/deployments/my-deployment',
     *     // Fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "frns": [],
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "frns": [],
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Deployments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Customers$Deployments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDeployment>;
    patch(
      params: Params$Resource$Customers$Deployments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Customers$Deployments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDeployment>,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    patch(
      params: Params$Resource$Customers$Deployments$Patch,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SasPortalDeployment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$Patch
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Deployments$Patch;
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
        createAPIRequest<Schema$SasPortalDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDeployment>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Deployments$Create
    extends StandardParameters {
    /**
     * Required. The parent resource name where the deployment is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDeployment;
  }
  export interface Params$Resource$Customers$Deployments$Delete
    extends StandardParameters {
    /**
     * Required. The name of the deployment.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Deployments$Get
    extends StandardParameters {
    /**
     * Required. The name of the deployment.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Deployments$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     */
    filter?: string;
    /**
     * The maximum number of deployments to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     */
    parent?: string;
  }
  export interface Params$Resource$Customers$Deployments$Move
    extends StandardParameters {
    /**
     * Required. The name of the deployment to move.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalMoveDeploymentRequest;
  }
  export interface Params$Resource$Customers$Deployments$Patch
    extends StandardParameters {
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
    requestBody?: Schema$SasPortalDeployment;
  }

  export class Resource$Customers$Deployments$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.deployments.devices.create({
     *     // Required. The name of the parent resource.
     *     parent: 'customers/my-customer/deployments/my-deployment',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Customers$Deployments$Devices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Deployments$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    create(
      params: Params$Resource$Customers$Deployments$Devices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Deployments$Devices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(
      params: Params$Resource$Customers$Deployments$Devices$Create,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$Devices$Create
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$Devices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Deployments$Devices$Create;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Creates a signed device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await prod_tt_sasportal.customers.deployments.devices.createSigned({
     *       // Required. The name of the parent resource.
     *       parent: 'customers/my-customer/deployments/my-deployment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "encodedDevice": "my_encodedDevice",
     *         //   "installerId": "my_installerId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    createSigned(
      params: Params$Resource$Customers$Deployments$Devices$Createsigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createSigned(
      params?: Params$Resource$Customers$Deployments$Devices$Createsigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    createSigned(
      params: Params$Resource$Customers$Deployments$Devices$Createsigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createSigned(
      params: Params$Resource$Customers$Deployments$Devices$Createsigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(
      params: Params$Resource$Customers$Deployments$Devices$Createsigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    createSigned(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$Devices$Createsigned
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$Devices$Createsigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Deployments$Devices$Createsigned;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Lists devices under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.deployments.devices.list({
     *     // The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     *     filter: 'placeholder-value',
     *     // The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent resource.
     *     parent: 'customers/my-customer/deployments/my-deployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Customers$Deployments$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Deployments$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDevicesResponse>;
    list(
      params: Params$Resource$Customers$Deployments$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Deployments$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Deployments$Devices$List,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Deployments$Devices$List
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Deployments$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Deployments$Devices$List;
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Deployments$Devices$Create
    extends StandardParameters {
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDevice;
  }
  export interface Params$Resource$Customers$Deployments$Devices$Createsigned
    extends StandardParameters {
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalCreateSignedDeviceRequest;
  }
  export interface Params$Resource$Customers$Deployments$Devices$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
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

  export class Resource$Customers$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.create({
     *     // Required. The name of the parent resource.
     *     parent: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Customers$Devices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    create(
      params: Params$Resource$Customers$Devices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Creates a signed device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.createSigned({
     *     // Required. The name of the parent resource.
     *     parent: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedDevice": "my_encodedDevice",
     *       //   "installerId": "my_installerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    createSigned(
      params: Params$Resource$Customers$Devices$Createsigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createSigned(
      params?: Params$Resource$Customers$Devices$Createsigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    createSigned(
      params: Params$Resource$Customers$Devices$Createsigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Deletes a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.delete({
     *     // Required. The name of the device.
     *     name: 'customers/my-customer/devices/my-device',
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
      params: Params$Resource$Customers$Devices$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Customers$Devices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Customers$Devices$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Gets details about a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.get({
     *     // Required. The name of the device.
     *     name: 'customers/my-customer/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Customers$Devices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    get(
      params: Params$Resource$Customers$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Lists devices under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.list({
     *     // The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     *     filter: 'placeholder-value',
     *     // The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent resource.
     *     parent: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Customers$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDevicesResponse>;
    list(
      params: Params$Resource$Customers$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDevicesResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters
        );
      }
    }

    /**
     * Moves a device under another node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.move({
     *     // Required. The name of the device to move.
     *     name: 'customers/my-customer/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destination": "my_destination"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    move(
      params: Params$Resource$Customers$Devices$Move,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    move(
      params?: Params$Resource$Customers$Devices$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Customers$Devices$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalOperation>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * Updates a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.patch({
     *     // Output only. The resource path name.
     *     name: 'customers/my-customer/devices/my-device',
     *     // Fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    patch(
      params: Params$Resource$Customers$Devices$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Customers$Devices$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    patch(
      params: Params$Resource$Customers$Devices$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Signs a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.signDevice({
     *     // Output only. The resource path name.
     *     name: 'customers/my-customer/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "device": {}
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
    signDevice(
      params: Params$Resource$Customers$Devices$Signdevice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    signDevice(
      params?: Params$Resource$Customers$Devices$Signdevice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    signDevice(
      params: Params$Resource$Customers$Devices$Signdevice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Updates a signed device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.devices.updateSigned({
     *     // Required. The name of the device to update.
     *     name: 'customers/my-customer/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedDevice": "my_encodedDevice",
     *       //   "installerId": "my_installerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    updateSigned(
      params: Params$Resource$Customers$Devices$Updatesigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSigned(
      params?: Params$Resource$Customers$Devices$Updatesigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    updateSigned(
      params: Params$Resource$Customers$Devices$Updatesigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Devices$Create
    extends StandardParameters {
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
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Devices$Get
    extends StandardParameters {
    /**
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Devices$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
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
    deployments: Resource$Customers$Nodes$Deployments;
    devices: Resource$Customers$Nodes$Devices;
    nodes: Resource$Customers$Nodes$Nodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deployments = new Resource$Customers$Nodes$Deployments(this.context);
      this.devices = new Resource$Customers$Nodes$Devices(this.context);
      this.nodes = new Resource$Customers$Nodes$Nodes(this.context);
    }

    /**
     * Creates a new node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.create({
     *     // Required. The parent resource name where the node is to be created.
     *     parent: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Nodes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Nodes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    create(
      params: Params$Resource$Customers$Nodes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * Deletes a node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.delete({
     *     // Required. The name of the node.
     *     name: 'customers/my-customer/nodes/my-node',
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
      params: Params$Resource$Customers$Nodes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Customers$Nodes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Customers$Nodes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Returns a requested node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.get({
     *     // Required. The name of the node.
     *     name: 'customers/my-customer/nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Nodes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Nodes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    get(
      params: Params$Resource$Customers$Nodes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * Lists nodes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.list({
     *     // The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     *     filter: 'placeholder-value',
     *     // The maximum number of nodes to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, for example, "nodes/1".
     *     parent: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "nodes": []
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
      params: Params$Resource$Customers$Nodes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Nodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListNodesResponse>;
    list(
      params: Params$Resource$Customers$Nodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListNodesResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListNodesResponse>(parameters);
      }
    }

    /**
     * Moves a node under another node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.move({
     *     // Required. The name of the node to move.
     *     name: 'customers/my-customer/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destination": "my_destination"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    move(
      params: Params$Resource$Customers$Nodes$Move,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    move(
      params?: Params$Resource$Customers$Nodes$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Customers$Nodes$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalOperation>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * Updates an existing node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.patch({
     *     // Output only. Resource name.
     *     name: 'customers/my-customer/nodes/my-node',
     *     // Fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Nodes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Customers$Nodes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    patch(
      params: Params$Resource$Customers$Nodes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Nodes$Create
    extends StandardParameters {
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
     * Required. The name of the node.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Nodes$Get
    extends StandardParameters {
    /**
     * Required. The name of the node.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Nodes$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     */
    filter?: string;
    /**
     * The maximum number of nodes to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
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

  export class Resource$Customers$Nodes$Deployments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.deployments.create({
     *     // Required. The parent resource name where the deployment is to be created.
     *     parent: 'customers/my-customer/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "frns": [],
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "frns": [],
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Nodes$Deployments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Nodes$Deployments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDeployment>;
    create(
      params: Params$Resource$Customers$Nodes$Deployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Nodes$Deployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDeployment>,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    create(
      params: Params$Resource$Customers$Nodes$Deployments$Create,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDeployment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Deployments$Create
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Deployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Deployments$Create;
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
            url: (rootUrl + '/v1alpha1/{+parent}/deployments').replace(
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
        createAPIRequest<Schema$SasPortalDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDeployment>(parameters);
      }
    }

    /**
     * Lists deployments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.deployments.list({
     *     // The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     *     filter: 'placeholder-value',
     *     // The maximum number of deployments to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     *     parent: 'customers/my-customer/nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployments": [],
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
      params: Params$Resource$Customers$Nodes$Deployments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Nodes$Deployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDeploymentsResponse>;
    list(
      params: Params$Resource$Customers$Nodes$Deployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Nodes$Deployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Nodes$Deployments$List,
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Deployments$List
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDeploymentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Deployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Deployments$List;
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
            url: (rootUrl + '/v1alpha1/{+parent}/deployments').replace(
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
        createAPIRequest<Schema$SasPortalListDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDeploymentsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Nodes$Deployments$Create
    extends StandardParameters {
    /**
     * Required. The parent resource name where the deployment is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDeployment;
  }
  export interface Params$Resource$Customers$Nodes$Deployments$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     */
    filter?: string;
    /**
     * The maximum number of deployments to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     */
    parent?: string;
  }

  export class Resource$Customers$Nodes$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.devices.create({
     *     // Required. The name of the parent resource.
     *     parent: 'customers/my-customer/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Customers$Nodes$Devices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Nodes$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    create(
      params: Params$Resource$Customers$Nodes$Devices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Nodes$Devices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(
      params: Params$Resource$Customers$Nodes$Devices$Create,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Devices$Create
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Devices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Devices$Create;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Creates a signed device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.devices.createSigned({
     *     // Required. The name of the parent resource.
     *     parent: 'customers/my-customer/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedDevice": "my_encodedDevice",
     *       //   "installerId": "my_installerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    createSigned(
      params: Params$Resource$Customers$Nodes$Devices$Createsigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createSigned(
      params?: Params$Resource$Customers$Nodes$Devices$Createsigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    createSigned(
      params: Params$Resource$Customers$Nodes$Devices$Createsigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createSigned(
      params: Params$Resource$Customers$Nodes$Devices$Createsigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(
      params: Params$Resource$Customers$Nodes$Devices$Createsigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    createSigned(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Devices$Createsigned
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Devices$Createsigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Devices$Createsigned;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Lists devices under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.devices.list({
     *     // The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     *     filter: 'placeholder-value',
     *     // The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent resource.
     *     parent: 'customers/my-customer/nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Customers$Nodes$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Nodes$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDevicesResponse>;
    list(
      params: Params$Resource$Customers$Nodes$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Nodes$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Nodes$Devices$List,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Devices$List
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Devices$List;
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Nodes$Devices$Create
    extends StandardParameters {
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDevice;
  }
  export interface Params$Resource$Customers$Nodes$Devices$Createsigned
    extends StandardParameters {
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalCreateSignedDeviceRequest;
  }
  export interface Params$Resource$Customers$Nodes$Devices$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
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

  export class Resource$Customers$Nodes$Nodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.nodes.create({
     *     // Required. The parent resource name where the node is to be created.
     *     parent: 'customers/my-customer/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Customers$Nodes$Nodes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Customers$Nodes$Nodes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    create(
      params: Params$Resource$Customers$Nodes$Nodes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Nodes$Nodes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    create(
      params: Params$Resource$Customers$Nodes$Nodes$Create,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Nodes$Create
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Nodes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Nodes$Create;
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * Lists nodes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.customers.nodes.nodes.list({
     *     // The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     *     filter: 'placeholder-value',
     *     // The maximum number of nodes to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, for example, "nodes/1".
     *     parent: 'customers/my-customer/nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "nodes": []
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
      params: Params$Resource$Customers$Nodes$Nodes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Nodes$Nodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListNodesResponse>;
    list(
      params: Params$Resource$Customers$Nodes$Nodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Nodes$Nodes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Nodes$Nodes$List,
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Nodes$Nodes$List
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListNodesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Nodes$Nodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Nodes$Nodes$List;
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListNodesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Nodes$Nodes$Create
    extends StandardParameters {
    /**
     * Required. The parent resource name where the node is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalNode;
  }
  export interface Params$Resource$Customers$Nodes$Nodes$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     */
    filter?: string;
    /**
     * The maximum number of nodes to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1".
     */
    parent?: string;
  }

  export class Resource$Deployments {
    context: APIRequestContext;
    devices: Resource$Deployments$Devices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Deployments$Devices(this.context);
    }

    /**
     * Returns a requested deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.deployments.get({
     *     // Required. The name of the deployment.
     *     name: 'deployments/my-deployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "frns": [],
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Deployments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Deployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDeployment>;
    get(
      params: Params$Resource$Deployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Deployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDeployment>,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    get(
      params: Params$Resource$Deployments$Get,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalDeployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Deployments$Get
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Deployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Get;
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
        createAPIRequest<Schema$SasPortalDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDeployment>(parameters);
      }
    }
  }

  export interface Params$Resource$Deployments$Get extends StandardParameters {
    /**
     * Required. The name of the deployment.
     */
    name?: string;
  }

  export class Resource$Deployments$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.deployments.devices.delete({
     *     // Required. The name of the device.
     *     name: 'deployments/my-deployment/devices/my-device',
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
      params: Params$Resource$Deployments$Devices$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Deployments$Devices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Deployments$Devices$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Deployments$Devices$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(
      params: Params$Resource$Deployments$Devices$Delete,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Deployments$Devices$Delete
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Devices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Devices$Delete;
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Gets details about a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.deployments.devices.get({
     *     // Required. The name of the device.
     *     name: 'deployments/my-deployment/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Deployments$Devices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Deployments$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    get(
      params: Params$Resource$Deployments$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Deployments$Devices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    get(
      params: Params$Resource$Deployments$Devices$Get,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Deployments$Devices$Get
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Devices$Get;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Moves a device under another node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.deployments.devices.move({
     *     // Required. The name of the device to move.
     *     name: 'deployments/my-deployment/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destination": "my_destination"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    move(
      params: Params$Resource$Deployments$Devices$Move,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    move(
      params?: Params$Resource$Deployments$Devices$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Deployments$Devices$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    move(
      params: Params$Resource$Deployments$Devices$Move,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalOperation>,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(
      params: Params$Resource$Deployments$Devices$Move,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(callback: BodyResponseCallback<Schema$SasPortalOperation>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Deployments$Devices$Move
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Devices$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Devices$Move;
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
        createAPIRequest<Schema$SasPortalOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * Updates a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.deployments.devices.patch({
     *     // Output only. The resource path name.
     *     name: 'deployments/my-deployment/devices/my-device',
     *     // Fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    patch(
      params: Params$Resource$Deployments$Devices$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Deployments$Devices$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    patch(
      params: Params$Resource$Deployments$Devices$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Deployments$Devices$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    patch(
      params: Params$Resource$Deployments$Devices$Patch,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Deployments$Devices$Patch
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Devices$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Devices$Patch;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Signs a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.deployments.devices.signDevice({
     *     // Output only. The resource path name.
     *     name: 'deployments/my-deployment/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "device": {}
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
    signDevice(
      params: Params$Resource$Deployments$Devices$Signdevice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    signDevice(
      params?: Params$Resource$Deployments$Devices$Signdevice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    signDevice(
      params: Params$Resource$Deployments$Devices$Signdevice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signDevice(
      params: Params$Resource$Deployments$Devices$Signdevice,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    signDevice(
      params: Params$Resource$Deployments$Devices$Signdevice,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    signDevice(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    signDevice(
      paramsOrCallback?:
        | Params$Resource$Deployments$Devices$Signdevice
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Devices$Signdevice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Devices$Signdevice;
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Updates a signed device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.deployments.devices.updateSigned({
     *     // Required. The name of the device to update.
     *     name: 'deployments/my-deployment/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedDevice": "my_encodedDevice",
     *       //   "installerId": "my_installerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    updateSigned(
      params: Params$Resource$Deployments$Devices$Updatesigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSigned(
      params?: Params$Resource$Deployments$Devices$Updatesigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    updateSigned(
      params: Params$Resource$Deployments$Devices$Updatesigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSigned(
      params: Params$Resource$Deployments$Devices$Updatesigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    updateSigned(
      params: Params$Resource$Deployments$Devices$Updatesigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    updateSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    updateSigned(
      paramsOrCallback?:
        | Params$Resource$Deployments$Devices$Updatesigned
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Deployments$Devices$Updatesigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deployments$Devices$Updatesigned;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }
  }

  export interface Params$Resource$Deployments$Devices$Delete
    extends StandardParameters {
    /**
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Deployments$Devices$Get
    extends StandardParameters {
    /**
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Deployments$Devices$Move
    extends StandardParameters {
    /**
     * Required. The name of the device to move.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalMoveDeviceRequest;
  }
  export interface Params$Resource$Deployments$Devices$Patch
    extends StandardParameters {
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
  export interface Params$Resource$Deployments$Devices$Signdevice
    extends StandardParameters {
    /**
     * Output only. The resource path name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalSignDeviceRequest;
  }
  export interface Params$Resource$Deployments$Devices$Updatesigned
    extends StandardParameters {
    /**
     * Required. The name of the device to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalUpdateSignedDeviceRequest;
  }

  export class Resource$Installer {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates a secret to be used with the ValidateInstaller.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.installer.generateSecret({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "secret": "my_secret"
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
    generateSecret(
      params: Params$Resource$Installer$Generatesecret,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateSecret(
      params?: Params$Resource$Installer$Generatesecret,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalGenerateSecretResponse>;
    generateSecret(
      params: Params$Resource$Installer$Generatesecret,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalGenerateSecretResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalGenerateSecretResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalGenerateSecretResponse>(
          parameters
        );
      }
    }

    /**
     * Validates the identity of a Certified Professional Installer (CPI).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.installer.validate({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedSecret": "my_encodedSecret",
     *       //   "installerId": "my_installerId",
     *       //   "secret": "my_secret"
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
    validate(
      params: Params$Resource$Installer$Validate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    validate(
      params?: Params$Resource$Installer$Validate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalValidateInstallerResponse>;
    validate(
      params: Params$Resource$Installer$Validate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalValidateInstallerResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalValidateInstallerResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
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
     * Request body metadata
     */
    requestBody?: Schema$SasPortalGenerateSecretRequest;
  }
  export interface Params$Resource$Installer$Validate
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalValidateInstallerRequest;
  }

  export class Resource$Nodes {
    context: APIRequestContext;
    deployments: Resource$Nodes$Deployments;
    devices: Resource$Nodes$Devices;
    nodes: Resource$Nodes$Nodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deployments = new Resource$Nodes$Deployments(this.context);
      this.devices = new Resource$Nodes$Devices(this.context);
      this.nodes = new Resource$Nodes$Nodes(this.context);
    }

    /**
     * Returns a requested node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.get({
     *     // Required. The name of the node.
     *     name: 'nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Nodes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Nodes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    get(
      params: Params$Resource$Nodes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Nodes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    get(
      params: Params$Resource$Nodes$Get,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Nodes$Get
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Nodes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Get;
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }
  }

  export interface Params$Resource$Nodes$Get extends StandardParameters {
    /**
     * Required. The name of the node.
     */
    name?: string;
  }

  export class Resource$Nodes$Deployments {
    context: APIRequestContext;
    devices: Resource$Nodes$Deployments$Devices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Nodes$Deployments$Devices(this.context);
    }

    /**
     * Deletes a deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.deployments.delete({
     *     // Required. The name of the deployment.
     *     name: 'nodes/my-node/deployments/my-deployment',
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
      params: Params$Resource$Nodes$Deployments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Nodes$Deployments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Nodes$Deployments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Nodes$Deployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalEmpty>,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(
      params: Params$Resource$Nodes$Deployments$Delete,
      callback: BodyResponseCallback<Schema$SasPortalEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SasPortalEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Nodes$Deployments$Delete
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Deployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Deployments$Delete;
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Returns a requested deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.deployments.get({
     *     // Required. The name of the deployment.
     *     name: 'nodes/my-node/deployments/my-deployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "frns": [],
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Nodes$Deployments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Nodes$Deployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDeployment>;
    get(
      params: Params$Resource$Nodes$Deployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Nodes$Deployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDeployment>,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    get(
      params: Params$Resource$Nodes$Deployments$Get,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$SasPortalDeployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Nodes$Deployments$Get
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Deployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Deployments$Get;
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
        createAPIRequest<Schema$SasPortalDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDeployment>(parameters);
      }
    }

    /**
     * Lists deployments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.deployments.list({
     *     // The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     *     filter: 'placeholder-value',
     *     // The maximum number of deployments to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     *     parent: 'nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployments": [],
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
      params: Params$Resource$Nodes$Deployments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Nodes$Deployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDeploymentsResponse>;
    list(
      params: Params$Resource$Nodes$Deployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Nodes$Deployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Nodes$Deployments$List,
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Nodes$Deployments$List
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDeploymentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Deployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Deployments$List;
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
            url: (rootUrl + '/v1alpha1/{+parent}/deployments').replace(
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
        createAPIRequest<Schema$SasPortalListDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDeploymentsResponse>(
          parameters
        );
      }
    }

    /**
     * Moves a deployment under another node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.deployments.move({
     *     // Required. The name of the deployment to move.
     *     name: 'nodes/my-node/deployments/my-deployment',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destination": "my_destination"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    move(
      params: Params$Resource$Nodes$Deployments$Move,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    move(
      params?: Params$Resource$Nodes$Deployments$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Nodes$Deployments$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    move(
      params: Params$Resource$Nodes$Deployments$Move,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalOperation>,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(
      params: Params$Resource$Nodes$Deployments$Move,
      callback: BodyResponseCallback<Schema$SasPortalOperation>
    ): void;
    move(callback: BodyResponseCallback<Schema$SasPortalOperation>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Nodes$Deployments$Move
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Deployments$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Deployments$Move;
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
        createAPIRequest<Schema$SasPortalOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * Updates an existing deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.deployments.patch({
     *     // Output only. Resource name.
     *     name: 'nodes/my-node/deployments/my-deployment',
     *     // Fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "frns": [],
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "frns": [],
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Nodes$Deployments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Nodes$Deployments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDeployment>;
    patch(
      params: Params$Resource$Nodes$Deployments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Nodes$Deployments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDeployment>,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    patch(
      params: Params$Resource$Nodes$Deployments$Patch,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SasPortalDeployment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Nodes$Deployments$Patch
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Deployments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Deployments$Patch;
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
        createAPIRequest<Schema$SasPortalDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDeployment>(parameters);
      }
    }
  }

  export interface Params$Resource$Nodes$Deployments$Delete
    extends StandardParameters {
    /**
     * Required. The name of the deployment.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Deployments$Get
    extends StandardParameters {
    /**
     * Required. The name of the deployment.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Deployments$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     */
    filter?: string;
    /**
     * The maximum number of deployments to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     */
    parent?: string;
  }
  export interface Params$Resource$Nodes$Deployments$Move
    extends StandardParameters {
    /**
     * Required. The name of the deployment to move.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalMoveDeploymentRequest;
  }
  export interface Params$Resource$Nodes$Deployments$Patch
    extends StandardParameters {
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
    requestBody?: Schema$SasPortalDeployment;
  }

  export class Resource$Nodes$Deployments$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.deployments.devices.create({
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node/deployments/my-deployment',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Nodes$Deployments$Devices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Nodes$Deployments$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    create(
      params: Params$Resource$Nodes$Deployments$Devices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Nodes$Deployments$Devices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(
      params: Params$Resource$Nodes$Deployments$Devices$Create,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Nodes$Deployments$Devices$Create
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Deployments$Devices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Deployments$Devices$Create;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Creates a signed device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.deployments.devices.createSigned({
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node/deployments/my-deployment',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedDevice": "my_encodedDevice",
     *       //   "installerId": "my_installerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    createSigned(
      params: Params$Resource$Nodes$Deployments$Devices$Createsigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createSigned(
      params?: Params$Resource$Nodes$Deployments$Devices$Createsigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    createSigned(
      params: Params$Resource$Nodes$Deployments$Devices$Createsigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createSigned(
      params: Params$Resource$Nodes$Deployments$Devices$Createsigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(
      params: Params$Resource$Nodes$Deployments$Devices$Createsigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    createSigned(
      paramsOrCallback?:
        | Params$Resource$Nodes$Deployments$Devices$Createsigned
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Deployments$Devices$Createsigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Deployments$Devices$Createsigned;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Lists devices under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.deployments.devices.list({
     *     // The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     *     filter: 'placeholder-value',
     *     // The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node/deployments/my-deployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Nodes$Deployments$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Nodes$Deployments$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDevicesResponse>;
    list(
      params: Params$Resource$Nodes$Deployments$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Nodes$Deployments$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Nodes$Deployments$Devices$List,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Nodes$Deployments$Devices$List
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Deployments$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Deployments$Devices$List;
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Nodes$Deployments$Devices$Create
    extends StandardParameters {
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDevice;
  }
  export interface Params$Resource$Nodes$Deployments$Devices$Createsigned
    extends StandardParameters {
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalCreateSignedDeviceRequest;
  }
  export interface Params$Resource$Nodes$Deployments$Devices$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
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

  export class Resource$Nodes$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.create({
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Nodes$Devices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Nodes$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    create(
      params: Params$Resource$Nodes$Devices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Creates a signed device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.createSigned({
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedDevice": "my_encodedDevice",
     *       //   "installerId": "my_installerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    createSigned(
      params: Params$Resource$Nodes$Devices$Createsigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createSigned(
      params?: Params$Resource$Nodes$Devices$Createsigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    createSigned(
      params: Params$Resource$Nodes$Devices$Createsigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Deletes a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.delete({
     *     // Required. The name of the device.
     *     name: 'nodes/my-node/devices/my-device',
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
      params: Params$Resource$Nodes$Devices$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Nodes$Devices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Nodes$Devices$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Gets details about a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.get({
     *     // Required. The name of the device.
     *     name: 'nodes/my-node/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Nodes$Devices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Nodes$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    get(
      params: Params$Resource$Nodes$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Lists devices under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.list({
     *     // The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     *     filter: 'placeholder-value',
     *     // The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Nodes$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Nodes$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDevicesResponse>;
    list(
      params: Params$Resource$Nodes$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDevicesResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters
        );
      }
    }

    /**
     * Moves a device under another node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.move({
     *     // Required. The name of the device to move.
     *     name: 'nodes/my-node/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destination": "my_destination"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    move(
      params: Params$Resource$Nodes$Devices$Move,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    move(
      params?: Params$Resource$Nodes$Devices$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Nodes$Devices$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalOperation>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * Updates a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.patch({
     *     // Output only. The resource path name.
     *     name: 'nodes/my-node/devices/my-device',
     *     // Fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    patch(
      params: Params$Resource$Nodes$Devices$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Nodes$Devices$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    patch(
      params: Params$Resource$Nodes$Devices$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Signs a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.signDevice({
     *     // Output only. The resource path name.
     *     name: 'nodes/my-node/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "device": {}
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
    signDevice(
      params: Params$Resource$Nodes$Devices$Signdevice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    signDevice(
      params?: Params$Resource$Nodes$Devices$Signdevice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    signDevice(
      params: Params$Resource$Nodes$Devices$Signdevice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Updates a signed device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.devices.updateSigned({
     *     // Required. The name of the device to update.
     *     name: 'nodes/my-node/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedDevice": "my_encodedDevice",
     *       //   "installerId": "my_installerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    updateSigned(
      params: Params$Resource$Nodes$Devices$Updatesigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSigned(
      params?: Params$Resource$Nodes$Devices$Updatesigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    updateSigned(
      params: Params$Resource$Nodes$Devices$Updatesigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }
  }

  export interface Params$Resource$Nodes$Devices$Create
    extends StandardParameters {
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
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Devices$Get
    extends StandardParameters {
    /**
     * Required. The name of the device.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Devices$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
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
    deployments: Resource$Nodes$Nodes$Deployments;
    devices: Resource$Nodes$Nodes$Devices;
    nodes: Resource$Nodes$Nodes$Nodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deployments = new Resource$Nodes$Nodes$Deployments(this.context);
      this.devices = new Resource$Nodes$Nodes$Devices(this.context);
      this.nodes = new Resource$Nodes$Nodes$Nodes(this.context);
    }

    /**
     * Creates a new node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.create({
     *     // Required. The parent resource name where the node is to be created.
     *     parent: 'nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Nodes$Nodes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Nodes$Nodes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    create(
      params: Params$Resource$Nodes$Nodes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * Deletes a node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.delete({
     *     // Required. The name of the node.
     *     name: 'nodes/my-node/nodes/my-node',
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
      params: Params$Resource$Nodes$Nodes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Nodes$Nodes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalEmpty>;
    delete(
      params: Params$Resource$Nodes$Nodes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalEmpty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalEmpty> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalEmpty>(parameters);
      }
    }

    /**
     * Returns a requested node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.get({
     *     // Required. The name of the node.
     *     name: 'nodes/my-node/nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Nodes$Nodes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Nodes$Nodes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    get(
      params: Params$Resource$Nodes$Nodes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * Lists nodes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.list({
     *     // The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     *     filter: 'placeholder-value',
     *     // The maximum number of nodes to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, for example, "nodes/1".
     *     parent: 'nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "nodes": []
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
      params: Params$Resource$Nodes$Nodes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Nodes$Nodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListNodesResponse>;
    list(
      params: Params$Resource$Nodes$Nodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListNodesResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListNodesResponse>(parameters);
      }
    }

    /**
     * Moves a node under another node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.move({
     *     // Required. The name of the node to move.
     *     name: 'nodes/my-node/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destination": "my_destination"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    move(
      params: Params$Resource$Nodes$Nodes$Move,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    move(
      params?: Params$Resource$Nodes$Nodes$Move,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalOperation>;
    move(
      params: Params$Resource$Nodes$Nodes$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalOperation>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalOperation>(parameters);
      }
    }

    /**
     * Updates an existing node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.patch({
     *     // Output only. Resource name.
     *     name: 'nodes/my-node/nodes/my-node',
     *     // Fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Nodes$Nodes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Nodes$Nodes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    patch(
      params: Params$Resource$Nodes$Nodes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }
  }

  export interface Params$Resource$Nodes$Nodes$Create
    extends StandardParameters {
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
     * Required. The name of the node.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Nodes$Get extends StandardParameters {
    /**
     * Required. The name of the node.
     */
    name?: string;
  }
  export interface Params$Resource$Nodes$Nodes$List extends StandardParameters {
    /**
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     */
    filter?: string;
    /**
     * The maximum number of nodes to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1".
     */
    parent?: string;
  }
  export interface Params$Resource$Nodes$Nodes$Move extends StandardParameters {
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

  export class Resource$Nodes$Nodes$Deployments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.deployments.create({
     *     // Required. The parent resource name where the deployment is to be created.
     *     parent: 'nodes/my-node/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "frns": [],
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "frns": [],
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Nodes$Nodes$Deployments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Nodes$Nodes$Deployments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDeployment>;
    create(
      params: Params$Resource$Nodes$Nodes$Deployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Nodes$Nodes$Deployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDeployment>,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    create(
      params: Params$Resource$Nodes$Nodes$Deployments$Create,
      callback: BodyResponseCallback<Schema$SasPortalDeployment>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDeployment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Deployments$Create
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Deployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Deployments$Create;
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
            url: (rootUrl + '/v1alpha1/{+parent}/deployments').replace(
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
        createAPIRequest<Schema$SasPortalDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDeployment>(parameters);
      }
    }

    /**
     * Lists deployments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.deployments.list({
     *     // The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     *     filter: 'placeholder-value',
     *     // The maximum number of deployments to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     *     parent: 'nodes/my-node/nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployments": [],
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
      params: Params$Resource$Nodes$Nodes$Deployments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Nodes$Nodes$Deployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDeploymentsResponse>;
    list(
      params: Params$Resource$Nodes$Nodes$Deployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Nodes$Nodes$Deployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Nodes$Nodes$Deployments$List,
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Deployments$List
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDeploymentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Deployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Deployments$List;
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
            url: (rootUrl + '/v1alpha1/{+parent}/deployments').replace(
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
        createAPIRequest<Schema$SasPortalListDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDeploymentsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Nodes$Nodes$Deployments$Create
    extends StandardParameters {
    /**
     * Required. The parent resource name where the deployment is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDeployment;
  }
  export interface Params$Resource$Nodes$Nodes$Deployments$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.
     */
    filter?: string;
    /**
     * The maximum number of deployments to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.
     */
    parent?: string;
  }

  export class Resource$Nodes$Nodes$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.devices.create({
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeConfig": {},
     *       //   "currentChannels": [],
     *       //   "deviceMetadata": {},
     *       //   "displayName": "my_displayName",
     *       //   "fccId": "my_fccId",
     *       //   "grantRangeAllowlists": [],
     *       //   "grants": [],
     *       //   "name": "my_name",
     *       //   "preloadedConfig": {},
     *       //   "serialNumber": "my_serialNumber",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
      params: Params$Resource$Nodes$Nodes$Devices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Nodes$Nodes$Devices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    create(
      params: Params$Resource$Nodes$Nodes$Devices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Nodes$Nodes$Devices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(
      params: Params$Resource$Nodes$Nodes$Devices$Create,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Devices$Create
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Devices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Devices$Create;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Creates a signed device under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.devices.createSigned({
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encodedDevice": "my_encodedDevice",
     *       //   "installerId": "my_installerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConfig": {},
     *   //   "currentChannels": [],
     *   //   "deviceMetadata": {},
     *   //   "displayName": "my_displayName",
     *   //   "fccId": "my_fccId",
     *   //   "grantRangeAllowlists": [],
     *   //   "grants": [],
     *   //   "name": "my_name",
     *   //   "preloadedConfig": {},
     *   //   "serialNumber": "my_serialNumber",
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
    createSigned(
      params: Params$Resource$Nodes$Nodes$Devices$Createsigned,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createSigned(
      params?: Params$Resource$Nodes$Nodes$Devices$Createsigned,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalDevice>;
    createSigned(
      params: Params$Resource$Nodes$Nodes$Devices$Createsigned,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createSigned(
      params: Params$Resource$Nodes$Nodes$Devices$Createsigned,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalDevice>,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(
      params: Params$Resource$Nodes$Nodes$Devices$Createsigned,
      callback: BodyResponseCallback<Schema$SasPortalDevice>
    ): void;
    createSigned(callback: BodyResponseCallback<Schema$SasPortalDevice>): void;
    createSigned(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Devices$Createsigned
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalDevice>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalDevice> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Devices$Createsigned;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Devices$Createsigned;
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
        createAPIRequest<Schema$SasPortalDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalDevice>(parameters);
      }
    }

    /**
     * Lists devices under a node or customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.devices.list({
     *     // The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     *     filter: 'placeholder-value',
     *     // The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent resource.
     *     parent: 'nodes/my-node/nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Nodes$Nodes$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Nodes$Nodes$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListDevicesResponse>;
    list(
      params: Params$Resource$Nodes$Nodes$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Nodes$Nodes$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Nodes$Nodes$Devices$List,
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Devices$List
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Devices$List;
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListDevicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Nodes$Nodes$Devices$Create
    extends StandardParameters {
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalDevice;
  }
  export interface Params$Resource$Nodes$Nodes$Devices$Createsigned
    extends StandardParameters {
    /**
     * Required. The name of the parent resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalCreateSignedDeviceRequest;
  }
  export interface Params$Resource$Nodes$Nodes$Devices$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.
     */
    filter?: string;
    /**
     * The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].
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

  export class Resource$Nodes$Nodes$Nodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.nodes.create({
     *     // Required. The parent resource name where the node is to be created.
     *     parent: 'nodes/my-node/nodes/my-node',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "sasUserIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "sasUserIds": []
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
      params: Params$Resource$Nodes$Nodes$Nodes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Nodes$Nodes$Nodes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalNode>;
    create(
      params: Params$Resource$Nodes$Nodes$Nodes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Nodes$Nodes$Nodes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SasPortalNode>,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    create(
      params: Params$Resource$Nodes$Nodes$Nodes$Create,
      callback: BodyResponseCallback<Schema$SasPortalNode>
    ): void;
    create(callback: BodyResponseCallback<Schema$SasPortalNode>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Nodes$Create
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalNode>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalNode> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Nodes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Nodes$Create;
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
        createAPIRequest<Schema$SasPortalNode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalNode>(parameters);
      }
    }

    /**
     * Lists nodes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.nodes.nodes.nodes.list({
     *     // The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     *     filter: 'placeholder-value',
     *     // The maximum number of nodes to return in the response.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, for example, "nodes/1".
     *     parent: 'nodes/my-node/nodes/my-node',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "nodes": []
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
      params: Params$Resource$Nodes$Nodes$Nodes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Nodes$Nodes$Nodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalListNodesResponse>;
    list(
      params: Params$Resource$Nodes$Nodes$Nodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Nodes$Nodes$Nodes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>,
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      params: Params$Resource$Nodes$Nodes$Nodes$List,
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SasPortalListNodesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Nodes$Nodes$Nodes$List
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalListNodesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalListNodesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Nodes$Nodes$Nodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nodes$Nodes$Nodes$List;
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalListNodesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Nodes$Nodes$Nodes$Create
    extends StandardParameters {
    /**
     * Required. The parent resource name where the node is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalNode;
  }
  export interface Params$Resource$Nodes$Nodes$Nodes$List
    extends StandardParameters {
    /**
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
     */
    filter?: string;
    /**
     * The maximum number of nodes to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1".
     */
    parent?: string;
  }

  export class Resource$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.policies.get({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "resource": "my_resource"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignments": [],
     *   //   "etag": "my_etag"
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
      params: Params$Resource$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalPolicy>;
    get(
      params: Params$Resource$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalPolicy> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalPolicy>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.policies.set({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disableNotification": false,
     *       //   "policy": {},
     *       //   "resource": "my_resource"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignments": [],
     *   //   "etag": "my_etag"
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
    set(
      params: Params$Resource$Policies$Set,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    set(
      params?: Params$Resource$Policies$Set,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalPolicy>;
    set(
      params: Params$Resource$Policies$Set,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SasPortalPolicy> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SasPortalPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SasPortalPolicy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/prod_tt_sasportal.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const prod_tt_sasportal = google.prod_tt_sasportal('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sasportal',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await prod_tt_sasportal.policies.test({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": [],
     *       //   "resource": "my_resource"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    test(
      params: Params$Resource$Policies$Test,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    test(
      params?: Params$Resource$Policies$Test,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SasPortalTestPermissionsResponse>;
    test(
      params: Params$Resource$Policies$Test,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SasPortalTestPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SasPortalTestPermissionsResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<unknown>
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
     * Request body metadata
     */
    requestBody?: Schema$SasPortalGetPolicyRequest;
  }
  export interface Params$Resource$Policies$Set extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalSetPolicyRequest;
  }
  export interface Params$Resource$Policies$Test extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SasPortalTestPermissionsRequest;
  }
}
