/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Proximity Beacon API
 *
 * Registers, manages, indexes, and searches beacons.
 *
 * @example
 * const google = require('googleapis');
 * const proximitybeacon = google.proximitybeacon('v1beta1');
 *
 * @namespace proximitybeacon
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Proximitybeacon
 */
export class Proximitybeacon {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  beaconinfo: Resource$Beaconinfo;
  beacons: Resource$Beacons;
  namespaces: Resource$Namespaces;
  v1beta1: Resource$V1beta1;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.beaconinfo = new Resource$Beaconinfo(this);
    this.beacons = new Resource$Beacons(this);
    this.namespaces = new Resource$Namespaces(this);
    this.v1beta1 = new Resource$V1beta1(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Defines a unique identifier of a beacon as broadcast by the device.
 */
export interface Schema$AdvertisedId {
  /**
   * The actual beacon identifier, as broadcast by the beacon hardware. Must be
   * [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP
   * requests, and will be so encoded (with padding) in responses. The base64
   * encoding should be of the binary byte-stream and not any textual (such as
   * hex) representation thereof. Required.
   */
  id: string;
  /**
   * Specifies the identifier type. Required.
   */
  type: string;
}
/**
 * A subset of attachment information served via the `beaconinfo.getforobserved`
 * method, used when your users encounter your beacons.
 */
export interface Schema$AttachmentInfo {
  /**
   * An opaque data container for client-provided data.
   */
  data: string;
  /**
   * The distance away from the beacon at which this attachment should be
   * delivered to a mobile app.  Setting this to a value greater than zero
   * indicates that the app should behave as if the beacon is &quot;seen&quot;
   * when the mobile device is less than this distance away from the beacon.
   * Different attachments on the same beacon can have different max distances.
   * Note that even though this value is expressed with fractional meter
   * precision, real-world behavior is likley to be much less precise than one
   * meter, due to the nature of current Bluetooth radio technology.  Optional.
   * When not set or zero, the attachment should be delivered at the
   * beacon&#39;s outer limit of detection.
   */
  maxDistanceMeters: number;
  /**
   * Specifies what kind of attachment this is. Tells a client how to interpret
   * the `data` field. Format is &lt;var&gt;namespace/type&lt;/var&gt;, for
   * example &lt;code&gt;scrupulous-wombat-12345/welcome-message&lt;/code&gt;
   */
  namespacedType: string;
}
/**
 * Details of a beacon device.
 */
export interface Schema$Beacon {
  /**
   * The identifier of a beacon as advertised by it. This field must be
   * populated when registering. It may be empty when updating a beacon record
   * because it is ignored in updates.  When registering a beacon that
   * broadcasts Eddystone-EID, this field should contain a &quot;stable&quot;
   * Eddystone-UID that identifies the beacon and links it to its attachments.
   * The stable Eddystone-UID is only used for administering the beacon.
   */
  advertisedId: Schema$AdvertisedId;
  /**
   * Resource name of this beacon. A beacon name has the format
   * &quot;beacons/N!beaconId&quot; where the beaconId is the base16 ID
   * broadcast by the beacon and N is a code for the beacon&#39;s type. Possible
   * values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon.  This
   * field must be left empty when registering. After reading a beacon, clients
   * can use the name for future operations.
   */
  beaconName: string;
  /**
   * Free text used to identify and describe the beacon. Maximum length 140
   * characters. Optional.
   */
  description: string;
  /**
   * Write-only registration parameters for beacons using Eddystone-EID
   * (remotely resolved ephemeral ID) format. This information will not be
   * populated in API responses. When submitting this data, the `advertised_id`
   * field must contain an ID of type Eddystone-UID. Any other ID type will
   * result in an error.
   */
  ephemeralIdRegistration: Schema$EphemeralIdRegistration;
  /**
   * Expected location stability. This is set when the beacon is registered or
   * updated, not automatically detected in any way. Optional.
   */
  expectedStability: string;
  /**
   * The indoor level information for this beacon, if known. As returned by the
   * Google Maps API. Optional.
   */
  indoorLevel: Schema$IndoorLevel;
  /**
   * The location of the beacon, expressed as a latitude and longitude pair.
   * This location is given when the beacon is registered or updated. It does
   * not necessarily indicate the actual current location of the beacon.
   * Optional.
   */
  latLng: Schema$LatLng;
  /**
   * The [Google Places API](/places/place-id) Place ID of the place where the
   * beacon is deployed. This is given when the beacon is registered or updated,
   * not automatically detected in any way. Optional.
   */
  placeId: string;
  /**
   * Properties of the beacon device, for example battery type or firmware
   * version. Optional.
   */
  properties: any;
  /**
   * Some beacons may require a user to provide an authorization key before
   * changing any of its configuration (e.g. broadcast frames, transmit power).
   * This field provides a place to store and control access to that key. This
   * field is populated in responses to `GET /v1beta1/beacons/3!beaconId` from
   * users with write access to the given beacon. That is to say: If the user is
   * authorized to write the beacon&#39;s confidential data in the service, the
   * service considers them authorized to configure the beacon. Note that this
   * key grants nothing on the service, only on the beacon itself.
   */
  provisioningKey: string;
  /**
   * Current status of the beacon. Required.
   */
  status: string;
}
/**
 * Project-specific data associated with a beacon.
 */
export interface Schema$BeaconAttachment {
  /**
   * Resource name of this attachment. Attachment names have the format:
   * &lt;code&gt;beacons/&lt;var&gt;beacon_id&lt;/var&gt;/attachments/&lt;var&gt;attachment_id&lt;/var&gt;&lt;/code&gt;.
   * Leave this empty on creation.
   */
  attachmentName: string;
  /**
   * The UTC time when this attachment was created, in milliseconds since the
   * UNIX epoch.
   */
  creationTimeMs: string;
  /**
   * An opaque data container for client-provided data. Must be
   * [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP
   * requests, and will be so encoded (with padding) in responses. Required.
   */
  data: string;
  /**
   * The distance away from the beacon at which this attachment should be
   * delivered to a mobile app.  Setting this to a value greater than zero
   * indicates that the app should behave as if the beacon is &quot;seen&quot;
   * when the mobile device is less than this distance away from the beacon.
   * Different attachments on the same beacon can have different max distances.
   * Note that even though this value is expressed with fractional meter
   * precision, real-world behavior is likley to be much less precise than one
   * meter, due to the nature of current Bluetooth radio technology.  Optional.
   * When not set or zero, the attachment should be delivered at the
   * beacon&#39;s outer limit of detection.  Negative values are invalid and
   * return an error.
   */
  maxDistanceMeters: number;
  /**
   * Specifies what kind of attachment this is. Tells a client how to interpret
   * the `data` field. Format is &lt;var&gt;namespace/type&lt;/var&gt;.
   * Namespace provides type separation between clients. Type describes the type
   * of `data`, for use by the client when parsing the `data` field. Required.
   */
  namespacedType: string;
}
/**
 * A subset of beacon information served via the `beaconinfo.getforobserved`
 * method, which you call when users of your app encounter your beacons.
 */
export interface Schema$BeaconInfo {
  /**
   * The ID advertised by the beacon.
   */
  advertisedId: Schema$AdvertisedId;
  /**
   * Attachments matching the type(s) requested. May be empty if no attachment
   * types were requested.
   */
  attachments: Schema$AttachmentInfo[];
  /**
   * The name under which the beacon is registered.
   */
  beaconName: string;
}
/**
 * Represents a whole calendar date, e.g. date of birth. The time of day and
 * time zone are either specified elsewhere or are not significant. The date is
 * relative to the Proleptic Gregorian Calendar. The day may be 0 to represent a
 * year and month where the day is not significant, e.g. credit card expiration
 * date. The year may be 0 to represent a month and day independent of year,
 * e.g. anniversary date. Related types are google.type.TimeOfDay and
 * `google.protobuf.Timestamp`.
 */
export interface Schema$Date {
  /**
   * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
   * if specifying a year/month where the day is not significant.
   */
  day: number;
  /**
   * Month of year. Must be from 1 to 12.
   */
  month: number;
  /**
   * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
   * year.
   */
  year: number;
}
/**
 * Response for a request to delete attachments.
 */
export interface Schema$DeleteAttachmentsResponse {
  /**
   * The number of attachments that were deleted.
   */
  numDeleted: number;
}
/**
 * Diagnostics for a single beacon.
 */
export interface Schema$Diagnostics {
  /**
   * An unordered list of Alerts that the beacon has.
   */
  alerts: string[];
  /**
   * Resource name of the beacon. For Eddystone-EID beacons, this may be the
   * beacon&#39;s current EID, or the beacon&#39;s &quot;stable&quot;
   * Eddystone-UID.
   */
  beaconName: string;
  /**
   * The date when the battery is expected to be low. If the value is missing
   * then there is no estimate for when the battery will be low. This value is
   * only an estimate, not an exact date.
   */
  estimatedLowBatteryDate: Schema$Date;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * Write-only registration parameters for beacons using Eddystone-EID format.
 * Two ways of securely registering an Eddystone-EID beacon with the service are
 * supported:  1. Perform an ECDH key exchange via this API, including a
 * previous call    to `GET /v1beta1/eidparams`. In this case the fields
 * `beacon_ecdh_public_key` and `service_ecdh_public_key` should be    populated
 * and `beacon_identity_key` should not be populated. This    method ensures
 * that only the two parties in the ECDH key exchange can    compute the
 * identity key, which becomes a secret between them. 2. Derive or obtain the
 * beacon&#39;s identity key via other secure means    (perhaps an ECDH key
 * exchange between the beacon and a mobile device    or any other secure
 * method), and then submit the resulting identity key    to the service. In
 * this case `beacon_identity_key` field should be    populated, and neither of
 * `beacon_ecdh_public_key` nor    `service_ecdh_public_key` fields should be.
 * The security of this method    depends on how securely the parties involved
 * (in particular the    bluetooth client) handle the identity key, and
 * obviously on how    securely the identity key was generated.  See [the
 * Eddystone
 * specification](https://github.com/google/eddystone/tree/master/eddystone-eid)
 * at GitHub.
 */
export interface Schema$EphemeralIdRegistration {
  /**
   * The beacon&#39;s public key used for the Elliptic curve Diffie-Hellman key
   * exchange. When this field is populated, `service_ecdh_public_key` must also
   * be populated, and `beacon_identity_key` must not be.
   */
  beaconEcdhPublicKey: string;
  /**
   * The private key of the beacon. If this field is populated,
   * `beacon_ecdh_public_key` and `service_ecdh_public_key` must not be
   * populated.
   */
  beaconIdentityKey: string;
  /**
   * The initial clock value of the beacon. The beacon&#39;s clock must have
   * begun counting at this value immediately prior to transmitting this value
   * to the resolving service. Significant delay in transmitting this value to
   * the service risks registration or resolution failures. If a value is not
   * provided, the default is zero.
   */
  initialClockValue: string;
  /**
   * An initial ephemeral ID calculated using the clock value submitted as
   * `initial_clock_value`, and the secret key generated by the Diffie-Hellman
   * key exchange using `service_ecdh_public_key` and `service_ecdh_public_key`.
   * This initial EID value will be used by the service to confirm that the key
   * exchange process was successful.
   */
  initialEid: string;
  /**
   * Indicates the nominal period between each rotation of the beacon&#39;s
   * ephemeral ID. &quot;Nominal&quot; because the beacon should randomize the
   * actual interval. See [the spec at
   * github](https://github.com/google/eddystone/tree/master/eddystone-eid) for
   * details. This value corresponds to a power-of-two scaler on the
   * beacon&#39;s clock: when the scaler value is K, the beacon will begin
   * broadcasting a new ephemeral ID on average every 2^K seconds.
   */
  rotationPeriodExponent: number;
  /**
   * The service&#39;s public key used for the Elliptic curve Diffie-Hellman key
   * exchange. When this field is populated, `beacon_ecdh_public_key` must also
   * be populated, and `beacon_identity_key` must not be.
   */
  serviceEcdhPublicKey: string;
}
/**
 * Information a client needs to provision and register beacons that broadcast
 * Eddystone-EID format beacon IDs, using Elliptic curve Diffie-Hellman key
 * exchange. See [the Eddystone
 * specification](https://github.com/google/eddystone/tree/master/eddystone-eid)
 * at GitHub.
 */
export interface Schema$EphemeralIdRegistrationParams {
  /**
   * Indicates the maximum rotation period supported by the service. See
   * EddystoneEidRegistration.rotation_period_exponent
   */
  maxRotationPeriodExponent: number;
  /**
   * Indicates the minimum rotation period supported by the service. See
   * EddystoneEidRegistration.rotation_period_exponent
   */
  minRotationPeriodExponent: number;
  /**
   * The beacon service&#39;s public key for use by a beacon to derive its
   * Identity Key using Elliptic Curve Diffie-Hellman key exchange.
   */
  serviceEcdhPublicKey: string;
}
/**
 * Request for beacon and attachment information about beacons that a mobile
 * client has encountered &quot;in the wild&quot;.
 */
export interface Schema$GetInfoForObservedBeaconsRequest {
  /**
   * Specifies what kind of attachments to include in the response. When given,
   * the response will include only attachments of the given types. When empty,
   * no attachments will be returned. Must be in the format
   * &lt;var&gt;namespace/type&lt;/var&gt;. Accepts `*` to specify all types in
   * all namespaces owned by the client. Optional.
   */
  namespacedTypes: string[];
  /**
   * The beacons that the client has encountered. At least one must be given.
   */
  observations: Schema$Observation[];
}
/**
 * Information about the requested beacons, optionally including attachment
 * data.
 */
export interface Schema$GetInfoForObservedBeaconsResponse {
  /**
   * Public information about beacons. May be empty if the request matched no
   * beacons.
   */
  beacons: Schema$BeaconInfo[];
}
/**
 * Indoor level, a human-readable string as returned by Google Maps APIs, useful
 * to indicate which floor of a building a beacon is located on.
 */
export interface Schema$IndoorLevel {
  /**
   * The name of this level.
   */
  name: string;
}
/**
 * An object representing a latitude/longitude pair. This is expressed as a pair
 * of doubles representing degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the &lt;a
 * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
 * standard&lt;/a&gt;. Values must be within normalized ranges.
 */
export interface Schema$LatLng {
  /**
   * The latitude in degrees. It must be in the range [-90.0, +90.0].
   */
  latitude: number;
  /**
   * The longitude in degrees. It must be in the range [-180.0, +180.0].
   */
  longitude: number;
}
/**
 * Response to `ListBeaconAttachments` that contains the requested attachments.
 */
export interface Schema$ListBeaconAttachmentsResponse {
  /**
   * The attachments that corresponded to the request params.
   */
  attachments: Schema$BeaconAttachment[];
}
/**
 * Response that contains list beacon results and pagination help.
 */
export interface Schema$ListBeaconsResponse {
  /**
   * The beacons that matched the search criteria.
   */
  beacons: Schema$Beacon[];
  /**
   * An opaque pagination token that the client may provide in their next
   * request to retrieve the next page of results.
   */
  nextPageToken: string;
  /**
   * Estimate of the total number of beacons matched by the query. Higher values
   * may be less accurate.
   */
  totalCount: string;
}
/**
 * Response that contains the requested diagnostics.
 */
export interface Schema$ListDiagnosticsResponse {
  /**
   * The diagnostics matching the given request.
   */
  diagnostics: Schema$Diagnostics[];
  /**
   * Token that can be used for pagination. Returned only if the request matches
   * more beacons than can be returned in this response.
   */
  nextPageToken: string;
}
/**
 * Response to ListNamespacesRequest that contains all the project&#39;s
 * namespaces.
 */
export interface Schema$ListNamespacesResponse {
  /**
   * The attachments that corresponded to the request params.
   */
  namespaces: Schema$Namespace[];
}
/**
 * An attachment namespace defines read and write access for all the attachments
 * created under it. Each namespace is globally unique, and owned by one project
 * which is the only project that can create attachments under it.
 */
export interface Schema$Namespace {
  /**
   * Resource name of this namespace. Namespaces names have the format:
   * &lt;code&gt;namespaces/&lt;var&gt;namespace&lt;/var&gt;&lt;/code&gt;.
   */
  namespaceName: string;
  /**
   * Specifies what clients may receive attachments under this namespace via
   * `beaconinfo.getforobserved`.
   */
  servingVisibility: string;
}
/**
 * Represents one beacon observed once.
 */
export interface Schema$Observation {
  /**
   * The ID advertised by the beacon the client has encountered.  If the
   * submitted `advertised_id` type is Eddystone-EID, then the client must be
   * authorized to resolve the given beacon. Otherwise no data will be returned
   * for that beacon. Required.
   */
  advertisedId: Schema$AdvertisedId;
  /**
   * The array of telemetry bytes received from the beacon. The server is
   * responsible for parsing it. This field may frequently be empty, as with a
   * beacon that transmits telemetry only occasionally.
   */
  telemetry: string;
  /**
   * Time when the beacon was observed.
   */
  timestampMs: string;
}

export class Resource$Beaconinfo {
  root: Proximitybeacon;
  constructor(root: Proximitybeacon) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * proximitybeacon.beaconinfo.getforobserved
   * @desc Given one or more beacon observations, returns any beacon information
   * and attachments accessible to your application. Authorize by using the [API
   * key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key)
   * for the application.
   * @alias proximitybeacon.beaconinfo.getforobserved
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().GetInfoForObservedBeaconsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getforobserved(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GetInfoForObservedBeaconsResponse>;
  getforobserved(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetInfoForObservedBeaconsResponse>,
      callback?:
          BodyResponseCallback<Schema$GetInfoForObservedBeaconsResponse>): void;
  getforobserved(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetInfoForObservedBeaconsResponse>,
      callback?:
          BodyResponseCallback<Schema$GetInfoForObservedBeaconsResponse>):
      void|AxiosPromise<Schema$GetInfoForObservedBeaconsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/beaconinfo:getforobserved')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetInfoForObservedBeaconsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GetInfoForObservedBeaconsResponse>(
          parameters);
    }
  }
}

export class Resource$Beacons {
  root: Proximitybeacon;
  attachments: Resource$Beacons$Attachments;
  diagnostics: Resource$Beacons$Diagnostics;
  constructor(root: Proximitybeacon) {
    this.root = root;
    this.getRoot.bind(this);
    this.attachments = new Resource$Beacons$Attachments(root);
    this.diagnostics = new Resource$Beacons$Diagnostics(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * proximitybeacon.beacons.activate
   * @desc Activates a beacon. A beacon that is active will return information
   * and attachment data when queried via `beaconinfo.getforobserved`. Calling
   * this method on an already active beacon will do nothing (but will return a
   * successful response code).  Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.activate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName Beacon that should be activated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
   * @param {string=} params.projectId The project id of the beacon to activate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  activate(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  activate(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  activate(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}:activate')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.deactivate
   * @desc Deactivates a beacon. Once deactivated, the API will not return
   * information nor attachment data for the beacon when queried via
   * `beaconinfo.getforobserved`. Calling this method on an already inactive
   * beacon will do nothing (but will return a successful response code).
   * Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.deactivate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName Beacon that should be deactivated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
   * @param {string=} params.projectId The project id of the beacon to deactivate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  deactivate(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  deactivate(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  deactivate(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}:deactivate')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.decommission
   * @desc Decommissions the specified beacon in the service. This beacon will
   * no longer be returned from `beaconinfo.getforobserved`. This operation is
   * permanent -- you will not be able to re-register a beacon with this ID
   * again.  Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.decommission
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName Beacon that should be decommissioned. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID of the beacon's "stable" UID. Required.
   * @param {string=} params.projectId The project id of the beacon to decommission. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  decommission(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Empty>;
  decommission(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  decommission(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}:decommission')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.delete
   * @desc Deletes the specified beacon including all diagnostics data for the
   * beacon as well as any attachments on the beacon (including those belonging
   * to other projects). This operation cannot be undone.  Authenticate using an
   * [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName Beacon that should be deleted. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
   * @param {string=} params.projectId The project id of the beacon to delete. If not provided, the project that is making the request is used. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.get
   * @desc Returns detailed information about the specified beacon. Authenticate
   * using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
   * the Google Developers Console project.  Requests may supply an
   * Eddystone-EID beacon name in the form: `beacons/4!beaconId` where the
   * `beaconId` is the base16 ephemeral ID broadcast by the beacon. The returned
   * `Beacon` object will contain the beacon's stable Eddystone-UID. Clients not
   * authorized to resolve the beacon's ephemeral Eddystone-EID broadcast will
   * receive an error.
   * @alias proximitybeacon.beacons.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
   * @param {string=} params.projectId The project id of the beacon to request. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Beacon>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Beacon>,
      callback?: BodyResponseCallback<Schema$Beacon>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Beacon>,
      callback?: BodyResponseCallback<Schema$Beacon>):
      void|AxiosPromise<Schema$Beacon> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Beacon>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Beacon>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.list
   * @desc Searches the beacon registry for beacons that match the given search
   * criteria. Only those beacons that the client has permission to list will be
   * returned.  Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
   * the Google Developers Console project.
   * @alias proximitybeacon.beacons.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize The maximum number of records to return for this request, up to a server-defined upper limit.
   * @param {string=} params.pageToken A pagination token obtained from a previous request to list beacons.
   * @param {string=} params.projectId The project id to list beacons under. If not present then the project credential that made the request is used as the project. Optional.
   * @param {string=} params.q Filter query string that supports the following field filters:  * **description:`"<string>"`**   For example: **description:"Room 3"**   Returns beacons whose description matches tokens in the string "Room 3"   (not necessarily that exact string).   The string must be double-quoted. * **status:`<enum>`**   For example: **status:active**   Returns beacons whose status matches the given value. Values must be   one of the Beacon.Status enum values (case insensitive). Accepts   multiple filters which will be combined with OR logic. * **stability:`<enum>`**   For example: **stability:mobile**   Returns beacons whose expected stability matches the given value.   Values must be one of the Beacon.Stability enum values (case   insensitive). Accepts multiple filters which will be combined with   OR logic. * **place\_id:`"<string>"`**   For example: **place\_id:"ChIJVSZzVR8FdkgRXGmmm6SslKw="**   Returns beacons explicitly registered at the given place, expressed as   a Place ID obtained from [Google Places API](/places/place-id). Does not   match places inside the given place. Does not consider the beacon's   actual location (which may be different from its registered place).   Accepts multiple filters that will be combined with OR logic. The place   ID must be double-quoted. * **registration\_time`[<|>|<=|>=]<integer>`**   For example: **registration\_time>=1433116800**   Returns beacons whose registration time matches the given filter.   Supports the operators: <, >, <=, and >=. Timestamp must be expressed as   an integer number of seconds since midnight January 1, 1970 UTC. Accepts   at most two filters that will be combined with AND logic, to support   "between" semantics. If more than two are supplied, the latter ones are   ignored. * **lat:`<double> lng:<double> radius:<integer>`**   For example: **lat:51.1232343 lng:-1.093852 radius:1000**   Returns beacons whose registered location is within the given circle.   When any of these fields are given, all are required. Latitude and   longitude must be decimal degrees between -90.0 and 90.0 and between   -180.0 and 180.0 respectively. Radius must be an integer number of   meters between 10 and 1,000,000 (1000 km). * **property:`"<string>=<string>"`**   For example: **property:"battery-type=CR2032"**   Returns beacons which have a property of the given name and value.   Supports multiple filters which will be combined with OR logic.   The entire name=value string must be double-quoted as one string. * **attachment\_type:`"<string>"`**   For example: **attachment_type:"my-namespace/my-type"**   Returns beacons having at least one attachment of the given namespaced   type. Supports "any within this namespace" via the partial wildcard   syntax: "my-namespace/x". Supports multiple filters which will be   combined with OR logic. The string must be double-quoted. * **indoor\_level:`"<string>"`**   For example: **indoor\_level:"1"**   Returns beacons which are located on the given indoor level. Accepts   multiple filters that will be combined with OR logic.  Multiple filters on the same field are combined with OR logic (except registration_time which is combined with AND logic). Multiple filters on different fields are combined with AND logic. Filters should be separated by spaces.  As with any HTTP query string parameter, the whole filter expression must be URL-encoded.  Example REST request: `GET /v1beta1/beacons?q=status:active%20lat:51.123%20lng:-1.095%20radius:1000`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBeaconsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListBeaconsResponse>,
      callback?: BodyResponseCallback<Schema$ListBeaconsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListBeaconsResponse>,
      callback?: BodyResponseCallback<Schema$ListBeaconsResponse>):
      void|AxiosPromise<Schema$ListBeaconsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/beacons').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBeaconsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBeaconsResponse>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.register
   * @desc Registers a previously unregistered beacon given its `advertisedId`.
   * These IDs are unique within the system. An ID can be registered only once.
   * Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.register
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.projectId The project id of the project the beacon will be registered to. If the project id is not specified then the project making the request is used. Optional.
   * @param {().Beacon} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  register(params?: any, options?: MethodOptions): AxiosPromise<Schema$Beacon>;
  register(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Beacon>,
      callback?: BodyResponseCallback<Schema$Beacon>): void;
  register(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Beacon>,
      callback?: BodyResponseCallback<Schema$Beacon>):
      void|AxiosPromise<Schema$Beacon> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/beacons:register')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Beacon>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Beacon>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.update
   * @desc Updates the information about the specified beacon. **Any field that
   * you do not populate in the submitted beacon will be permanently erased**,
   * so you should follow the "read, modify, write" pattern to avoid
   * inadvertently destroying data.  Changes to the beacon status via this
   * method will be  silently ignored. To update beacon status, use the separate
   * methods on this API for activation, deactivation, and decommissioning.
   * Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon.  This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.
   * @param {string=} params.projectId The project id of the beacon to update. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
   * @param {().Beacon} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Beacon>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Beacon>,
      callback?: BodyResponseCallback<Schema$Beacon>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Beacon>,
      callback?: BodyResponseCallback<Schema$Beacon>):
      void|AxiosPromise<Schema$Beacon> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Beacon>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Beacon>(parameters);
    }
  }
}
export class Resource$Beacons$Attachments {
  root: Proximitybeacon;
  constructor(root: Proximitybeacon) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * proximitybeacon.beacons.attachments.batchDelete
   * @desc Deletes multiple attachments on a given beacon. This operation is
   * permanent and cannot be undone.  You can optionally specify
   * `namespacedType` to choose which attachments should be deleted. If you do
   * not specify `namespacedType`,  all your attachments on the given beacon
   * will be deleted. You also may explicitly specify `x/x` to delete all.
   * Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.attachments.batchDelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName The beacon whose attachments should be deleted. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
   * @param {string=} params.namespacedType Specifies the namespace and type of attachments to delete in `namespace/type` format. Accepts `x/x` to specify "all types in all namespaces". Optional.
   * @param {string=} params.projectId The project id to delete beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchDelete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DeleteAttachmentsResponse>;
  batchDelete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DeleteAttachmentsResponse>,
      callback?: BodyResponseCallback<Schema$DeleteAttachmentsResponse>): void;
  batchDelete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$DeleteAttachmentsResponse>,
      callback?: BodyResponseCallback<Schema$DeleteAttachmentsResponse>):
      void|AxiosPromise<Schema$DeleteAttachmentsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}/attachments:batchDelete')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DeleteAttachmentsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DeleteAttachmentsResponse>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.attachments.create
   * @desc Associates the given data with the specified beacon. Attachment data
   * must contain two parts: <ul> <li>A namespaced type.</li> <li>The actual
   * attachment data itself.</li> </ul> The namespaced type consists of two
   * parts, the namespace and the type. The namespace must be one of the values
   * returned by the `namespaces` endpoint, while the type can be a string of
   * any characters except for the forward slash (`/`) up to 100 characters in
   * length.  Attachment data can be up to 1024 bytes long.  Authenticate using
   * an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.attachments.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName Beacon on which the attachment should be created. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
   * @param {string=} params.projectId The project id of the project the attachment will belong to. If the project id is not specified then the project making the request is used. Optional.
   * @param {().BeaconAttachment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$BeaconAttachment>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BeaconAttachment>,
      callback?: BodyResponseCallback<Schema$BeaconAttachment>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$BeaconAttachment>,
      callback?: BodyResponseCallback<Schema$BeaconAttachment>):
      void|AxiosPromise<Schema$BeaconAttachment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}/attachments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$BeaconAttachment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$BeaconAttachment>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.attachments.delete
   * @desc Deletes the specified attachment for the given beacon. Each
   * attachment has a unique attachment name (`attachmentName`) which is
   * returned when you fetch the attachment data via this API. You specify this
   * with the delete request to control which attachment is removed. This
   * operation cannot be undone.  Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **Is owner** or **Can edit** permissions in the Google
   * Developers Console project.
   * @alias proximitybeacon.beacons.attachments.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.attachmentName The attachment name (`attachmentName`) of the attachment to remove. For example: `beacons/3!893737abc9/attachments/c5e937-af0-494-959-ec49d12738`. For Eddystone-EID beacons, the beacon ID portion (`3!893737abc9`) may be the beacon's current EID, or its "stable" Eddystone-UID. Required.
   * @param {string=} params.projectId The project id of the attachment to delete. If not provided, the project that is making the request is used. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+attachmentName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['attachmentName'],
      pathParams: ['attachmentName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * proximitybeacon.beacons.attachments.list
   * @desc Returns the attachments for the specified beacon that match the
   * specified namespaced-type pattern.  To control which namespaced types are
   * returned, you add the `namespacedType` query parameter to the request. You
   * must either use `x/x`, to return all attachments, or the namespace must be
   * one of the ones returned from the  `namespaces` endpoint.  Authenticate
   * using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
   * the Google Developers Console project.
   * @alias proximitybeacon.beacons.attachments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.beaconName Beacon whose attachments should be fetched. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
   * @param {string=} params.namespacedType Specifies the namespace and type of attachment to include in response in <var>namespace/type</var> format. Accepts `x/x` to specify "all types in all namespaces".
   * @param {string=} params.projectId The project id to list beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListBeaconAttachmentsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBeaconAttachmentsResponse>,
      callback?: BodyResponseCallback<Schema$ListBeaconAttachmentsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListBeaconAttachmentsResponse>,
      callback?: BodyResponseCallback<Schema$ListBeaconAttachmentsResponse>):
      void|AxiosPromise<Schema$ListBeaconAttachmentsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}/attachments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListBeaconAttachmentsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListBeaconAttachmentsResponse>(parameters);
    }
  }
}

export class Resource$Beacons$Diagnostics {
  root: Proximitybeacon;
  constructor(root: Proximitybeacon) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * proximitybeacon.beacons.diagnostics.list
   * @desc List the diagnostics for a single beacon. You can also list
   * diagnostics for all the beacons owned by your Google Developers Console
   * project by using the beacon name `beacons/-`.  Authenticate using an [OAuth
   * access token](https://developers.google.com/identity/protocols/OAuth2) from
   * a signed-in user with **viewer**, **Is owner** or **Can edit** permissions
   * in the Google Developers Console project.
   * @alias proximitybeacon.beacons.diagnostics.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.alertFilter Requests only beacons that have the given alert. For example, to find beacons that have low batteries use `alert_filter=LOW_BATTERY`.
   * @param {string} params.beaconName Beacon that the diagnostics are for.
   * @param {integer=} params.pageSize Specifies the maximum number of results to return. Defaults to 10. Maximum 1000. Optional.
   * @param {string=} params.pageToken Requests results that occur after the `page_token`, obtained from the response to a previous request. Optional.
   * @param {string=} params.projectId Requests only diagnostic records for the given project id. If not set, then the project making the request will be used for looking up diagnostic records. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListDiagnosticsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDiagnosticsResponse>,
      callback?: BodyResponseCallback<Schema$ListDiagnosticsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDiagnosticsResponse>,
      callback?: BodyResponseCallback<Schema$ListDiagnosticsResponse>):
      void|AxiosPromise<Schema$ListDiagnosticsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+beaconName}/diagnostics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['beaconName'],
      pathParams: ['beaconName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListDiagnosticsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListDiagnosticsResponse>(parameters);
    }
  }
}


export class Resource$Namespaces {
  root: Proximitybeacon;
  constructor(root: Proximitybeacon) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * proximitybeacon.namespaces.list
   * @desc Lists all attachment namespaces owned by your Google Developers
   * Console project. Attachment data associated with a beacon must include a
   * namespaced type, and the namespace must be owned by your project.
   * Authenticate using an [OAuth access
   * token](https://developers.google.com/identity/protocols/OAuth2) from a
   * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
   * the Google Developers Console project.
   * @alias proximitybeacon.namespaces.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.projectId The project id to list namespaces under. Optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListNamespacesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNamespacesResponse>,
      callback?: BodyResponseCallback<Schema$ListNamespacesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListNamespacesResponse>,
      callback?: BodyResponseCallback<Schema$ListNamespacesResponse>):
      void|AxiosPromise<Schema$ListNamespacesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1beta1/namespaces').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListNamespacesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListNamespacesResponse>(parameters);
    }
  }


  /**
   * proximitybeacon.namespaces.update
   * @desc Updates the information about the specified namespace. Only the
   * namespace visibility can be updated.
   * @alias proximitybeacon.namespaces.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.namespaceName Resource name of this namespace. Namespaces names have the format: <code>namespaces/<var>namespace</var></code>.
   * @param {string=} params.projectId The project id of the namespace to update. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
   * @param {().Namespace} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Namespace>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Namespace>,
      callback?: BodyResponseCallback<Schema$Namespace>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Namespace>,
      callback?: BodyResponseCallback<Schema$Namespace>):
      void|AxiosPromise<Schema$Namespace> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+namespaceName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['namespaceName'],
      pathParams: ['namespaceName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Namespace>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Namespace>(parameters);
    }
  }
}

export class Resource$V1beta1 {
  root: Proximitybeacon;
  constructor(root: Proximitybeacon) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * proximitybeacon.getEidparams
   * @desc Gets the Proximity Beacon API's current public key and associated
   * parameters used to initiate the Diffie-Hellman key exchange required to
   * register a beacon that broadcasts the Eddystone-EID format. This key
   * changes periodically; clients may cache it and re-use the same public key
   * to provision and register multiple beacons. However, clients should be
   * prepared to refresh this key when they encounter an error registering an
   * Eddystone-EID beacon.
   * @alias proximitybeacon.getEidparams
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getEidparams(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EphemeralIdRegistrationParams>;
  getEidparams(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EphemeralIdRegistrationParams>,
      callback?: BodyResponseCallback<Schema$EphemeralIdRegistrationParams>):
      void;
  getEidparams(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EphemeralIdRegistrationParams>,
      callback?: BodyResponseCallback<Schema$EphemeralIdRegistrationParams>):
      void|AxiosPromise<Schema$EphemeralIdRegistrationParams> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://proximitybeacon.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/eidparams').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EphemeralIdRegistrationParams>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$EphemeralIdRegistrationParams>(parameters);
    }
  }
}
