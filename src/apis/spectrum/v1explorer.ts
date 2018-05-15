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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace spectrum_v1explorer {
  export interface Options extends GlobalOptions {
    version: 'v1explorer';
  }

  /**
   * Google Spectrum Database API
   *
   * API for spectrum-management functions.
   *
   * @example
   * const {google} = require('googleapis');
   * const spectrum = google.spectrum('v1explorer');
   *
   * @namespace spectrum
   * @type {Function}
   * @version v1explorer
   * @variation v1explorer
   * @param {object=} options Options for Spectrum
   */
  export class Spectrum {
    _options: GlobalOptions;
    google: GoogleConfigurable;
    root = this;

    paws: Resource$Paws;

    constructor(options: GlobalOptions, google: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.paws = new Resource$Paws(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Antenna characteristics provide additional information, such as the antenna
   * height, antenna type, etc. Whether antenna characteristics must be provided
   * in a request depends on the device type and regulatory domain.
   */
  export interface Schema$AntennaCharacteristics {
    /**
     * The antenna height in meters. Whether the antenna height is required
     * depends on the device type and the regulatory domain. Note that the
     * height may be negative.
     */
    height?: number;
    /**
     * If the height is required, then the height type (AGL for above ground
     * level or AMSL for above mean sea level) is also required. The default is
     * AGL.
     */
    heightType?: string;
    /**
     * The height uncertainty in meters. Whether this is required depends on the
     * regulatory domain.
     */
    heightUncertainty?: number;
  }
  /**
   * This message contains the name and URI of a database.
   */
  export interface Schema$DatabaseSpec {
    /**
     * The display name for a database.
     */
    name?: string;
    /**
     * The corresponding URI of the database.
     */
    uri?: string;
  }
  /**
   * This message is provided by the database to notify devices of an upcoming
   * change to the database URI.
   */
  export interface Schema$DbUpdateSpec {
    /**
     * A required list of one or more databases. A device should update its
     * preconfigured list of databases to replace (only) the database that
     * provided the response with the specified entries.
     */
    databases?: Schema$DatabaseSpec[];
  }
  /**
   * Device capabilities provide additional information that may be used by a
   * device to provide additional information to the database that may help it
   * to determine available spectrum. If the database does not support device
   * capabilities it will ignore the parameter altogether.
   */
  export interface Schema$DeviceCapabilities {
    /**
     * An optional list of frequency ranges supported by the device. Each
     * element must contain start and stop frequencies in which the device can
     * operate. Channel identifiers are optional. When specified, the database
     * should not return available spectrum that falls outside these ranges or
     * channel IDs.
     */
    frequencyRanges?: Schema$FrequencyRange[];
  }
  /**
   * The device descriptor contains parameters that identify the specific
   * device, such as its manufacturer serial number, regulatory-specific
   * identifier (e.g., FCC ID), and any other device characteristics required by
   * regulatory domains.
   */
  export interface Schema$DeviceDescriptor {
    /**
     * Specifies the ETSI white space device category. Valid values are the
     * strings master and slave. This field is case-insensitive. Consult the
     * ETSI documentation for details about the device types.
     */
    etsiEnDeviceCategory?: string;
    /**
     * Specifies the ETSI white space device emissions class. The values are
     * represented by numeric strings, such as 1, 2, etc. Consult the ETSI
     * documentation for details about the device types.
     */
    etsiEnDeviceEmissionsClass?: string;
    /**
     * Specifies the ETSI white space device type. Valid values are
     * single-letter strings, such as A, B, etc. Consult the ETSI documentation
     * for details about the device types.
     */
    etsiEnDeviceType?: string;
    /**
     * Specifies the ETSI white space device technology identifier. The string
     * value must not exceed 64 characters in length. Consult the ETSI
     * documentation for details about the device types.
     */
    etsiEnTechnologyId?: string;
    /**
     * Specifies the device&#39;s FCC certification identifier. The value is an
     * identifier string whose length should not exceed 32 characters. Note
     * that, in practice, a valid FCC ID may be limited to 19 characters.
     */
    fccId?: string;
    /**
     * Specifies the TV Band White Space device type, as defined by the FCC.
     * Valid values are FIXED, MODE_1, MODE_2.
     */
    fccTvbdDeviceType?: string;
    /**
     * The manufacturer&#39;s ID may be required by the regulatory domain. This
     * should represent the name of the device manufacturer, should be
     * consistent across all devices from the same manufacturer, and should be
     * distinct from that of other manufacturers. The string value must not
     * exceed 64 characters in length.
     */
    manufacturerId?: string;
    /**
     * The device&#39;s model ID may be required by the regulatory domain. The
     * string value must not exceed 64 characters in length.
     */
    modelId?: string;
    /**
     * The list of identifiers for rulesets supported by the device. A database
     * may require that the device provide this list before servicing the device
     * requests. If the database does not support any of the rulesets specified
     * in the list, the database may refuse to service the device requests. If
     * present, the list must contain at least one entry.  For information about
     * the valid requests, see section 9.2 of the PAWS specification. Currently,
     * FccTvBandWhiteSpace-2010 is the only supported ruleset.
     */
    rulesetIds?: string[];
    /**
     * The manufacturer&#39;s device serial number; required by the applicable
     * regulatory domain. The length of the value must not exceed 64 characters.
     */
    serialNumber?: string;
  }
  /**
   * This parameter contains device-owner information required as part of device
   * registration. The regulatory domains may require additional parameters. All
   * contact information must be expressed using the structure defined by the
   * vCard format specification. Only the contact fields of vCard are supported:
   * - fn: Full name of an individual  - org: Name of the organization  - adr:
   * Address fields  - tel: Telephone numbers  - email: Email addresses    Note
   * that the vCard specification defines maximum lengths for each field.
   */
  export interface Schema$DeviceOwner {
    /**
     * The vCard contact information for the device operator is optional, but
     * may be required by specific regulatory domains.
     */
    operator?: Schema$Vcard;
    /**
     * The vCard contact information for the individual or business that owns
     * the device is required.
     */
    owner?: Schema$Vcard;
  }
  /**
   * The device validity element describes whether a particular device is valid
   * to operate in the regulatory domain.
   */
  export interface Schema$DeviceValidity {
    /**
     * The descriptor of the device for which the validity check was requested.
     * It will always be present.
     */
    deviceDesc?: Schema$DeviceDescriptor;
    /**
     * The validity status: true if the device is valid for operation, false
     * otherwise. It will always be present.
     */
    isValid?: boolean;
    /**
     * If the device identifier is not valid, the database may include a reason.
     * The reason may be in any language. The length of the value should not
     * exceed 128 characters.
     */
    reason?: string;
  }
  /**
   * The start and stop times of an event. This is used to indicate the time
   * period for which a spectrum profile is valid.  Both times are expressed
   * using the format, YYYY-MM-DDThh:mm:ssZ, as defined in RFC3339. The times
   * must be expressed using UTC.
   */
  export interface Schema$EventTime {
    /**
     * The inclusive start of the event. It will be present.
     */
    startTime?: string;
    /**
     * The exclusive end of the event. It will be present.
     */
    stopTime?: string;
  }
  /**
   * A specific range of frequencies together with the associated maximum power
   * level and channel identifier.
   */
  export interface Schema$FrequencyRange {
    /**
     * The database may include a channel identifier, when applicable. When it
     * is included, the device should treat it as informative. The length of the
     * identifier should not exceed 16 characters.
     */
    channelId?: string;
    /**
     * The maximum total power level (EIRP)—computed over the corresponding
     * operating bandwidth—that is permitted within the frequency range.
     * Depending on the context in which the frequency-range element appears,
     * this value may be required. For example, it is required in the
     * available-spectrum response, available-spectrum-batch response, and
     * spectrum-use notification message, but it should not be present (it is
     * not applicable) when the frequency range appears inside a
     * device-capabilities message.
     */
    maxPowerDBm?: number;
    /**
     * The required inclusive start of the frequency range (in Hertz).
     */
    startHz?: number;
    /**
     * The required exclusive end of the frequency range (in Hertz).
     */
    stopHz?: number;
  }
  /**
   * This parameter is used to specify the geolocation of the device.
   */
  export interface Schema$GeoLocation {
    /**
     * The location confidence level, as an integer percentage, may be required,
     * depending on the regulatory domain. When the parameter is optional and
     * not provided, its value is assumed to be 95. Valid values range from 0 to
     * 99, since, in practice, 100-percent confidence is not achievable. The
     * confidence value is meaningful only when geolocation refers to a point
     * with uncertainty.
     */
    confidence?: number;
    /**
     * If present, indicates that the geolocation represents a point.
     * Paradoxically, a point is parameterized using an ellipse, where the
     * center represents the location of the point and the distances along the
     * major and minor axes represent the uncertainty. The uncertainty values
     * may be required, depending on the regulatory domain.
     */
    point?: Schema$GeoLocationEllipse;
    /**
     * If present, indicates that the geolocation represents a region. Database
     * support for regions is optional.
     */
    region?: Schema$GeoLocationPolygon;
  }
  /**
   * A &quot;point&quot; with uncertainty is represented using the Ellipse
   * shape.
   */
  export interface Schema$GeoLocationEllipse {
    /**
     * A required geo-spatial point representing the center of the ellipse.
     */
    center?: Schema$GeoLocationPoint;
    /**
     * A floating-point number that expresses the orientation of the ellipse,
     * representing the rotation, in degrees, of the semi-major axis from North
     * towards the East. For example, when the uncertainty is greatest along the
     * North-South direction, orientation is 0 degrees; conversely, if the
     * uncertainty is greatest along the East-West direction, orientation is 90
     * degrees. When orientation is not present, the orientation is assumed to
     * be 0.
     */
    orientation?: number;
    /**
     * A floating-point number that expresses the location uncertainty along the
     * major axis of the ellipse. May be required by the regulatory domain. When
     * the uncertainty is optional, the default value is 0.
     */
    semiMajorAxis?: number;
    /**
     * A floating-point number that expresses the location uncertainty along the
     * minor axis of the ellipse. May be required by the regulatory domain. When
     * the uncertainty is optional, the default value is 0.
     */
    semiMinorAxis?: number;
  }
  /**
   * A single geolocation on the globe.
   */
  export interface Schema$GeoLocationPoint {
    /**
     * A required floating-point number that expresses the latitude in degrees
     * using the WGS84 datum. For details on this encoding, see the National
     * Imagery and Mapping Agency&#39;s Technical Report TR8350.2.
     */
    latitude?: number;
    /**
     * A required floating-point number that expresses the longitude in degrees
     * using the WGS84 datum. For details on this encoding, see the National
     * Imagery and Mapping Agency&#39;s Technical Report TR8350.2.
     */
    longitude?: number;
  }
  /**
   * A region is represented using the polygonal shape.
   */
  export interface Schema$GeoLocationPolygon {
    /**
     * When the geolocation describes a region, the exterior field refers to a
     * list of latitude/longitude points that represent the vertices of a
     * polygon. The first and last points must be the same. Thus, a minimum of
     * four points is required. The following polygon restrictions from RFC5491
     * apply:   - A connecting line shall not cross another connecting line of
     * the same polygon.  - The vertices must be defined in a counterclockwise
     * order.  - The edges of a polygon are defined by the shortest path between
     * two points in space (not a geodesic curve). Consequently, the length
     * between two adjacent vertices should be restricted to a maximum of 130
     * km.  - All vertices are assumed to be at the same altitude.  - Polygon
     * shapes should be restricted to a maximum of 15 vertices (16 points that
     * include the repeated vertex).
     */
    exterior?: Schema$GeoLocationPoint[];
  }
  /**
   * The schedule of spectrum profiles available at a particular geolocation.
   */
  export interface Schema$GeoSpectrumSchedule {
    /**
     * The geolocation identifies the location at which the spectrum schedule
     * applies. It will always be present.
     */
    location?: Schema$GeoLocation;
    /**
     * A list of available spectrum profiles and associated times. It will
     * always be present, and at least one schedule must be included (though it
     * may be empty if there is no available spectrum). More than one schedule
     * may be included to represent future changes to the available spectrum.
     */
    spectrumSchedules?: Schema$SpectrumSchedule[];
  }
  /**
   * The request message for a batch available spectrum query protocol.
   */
  export interface Schema$PawsGetSpectrumBatchRequest {
    /**
     * Depending on device type and regulatory domain, antenna characteristics
     * may be required.
     */
    antenna?: Schema$AntennaCharacteristics;
    /**
     * The master device may include its device capabilities to limit the
     * available-spectrum batch response to the spectrum that is compatible with
     * its capabilities. The database should not return spectrum that is
     * incompatible with the specified capabilities.
     */
    capabilities?: Schema$DeviceCapabilities;
    /**
     * When the available spectrum request is made on behalf of a specific
     * device (a master or slave device), device descriptor information for the
     * device on whose behalf the request is made is required (in such cases,
     * the requestType parameter must be empty). When a requestType value is
     * specified, device descriptor information may be optional or required
     * according to the rules of the applicable regulatory domain.
     */
    deviceDesc?: Schema$DeviceDescriptor;
    /**
     * A geolocation list is required. This allows a device to specify its
     * current location plus additional anticipated locations when allowed by
     * the regulatory domain. At least one location must be included.
     * Geolocation must be given as the location of the radiation center of the
     * device&#39;s antenna. If a location specifies a region, rather than a
     * point, the database may return an UNIMPLEMENTED error if it does not
     * support query by region.  There is no upper limit on the number of
     * locations included in a available spectrum batch request, but the
     * database may restrict the number of locations it supports by returning a
     * response with fewer locations than specified in the batch request. Note
     * that geolocations must be those of the master device (a device with
     * geolocation capability that makes an available spectrum batch request),
     * whether the master device is making the request on its own behalf or on
     * behalf of a slave device (one without geolocation capability).
     */
    locations?: Schema$GeoLocation[];
    /**
     * When an available spectrum batch request is made by the master device (a
     * device with geolocation capability) on behalf of a slave device (a device
     * without geolocation capability), the rules of the applicable regulatory
     * domain may require the master device to provide its own device descriptor
     * information (in addition to device descriptor information for the slave
     * device in a separate parameter).
     */
    masterDeviceDesc?: Schema$DeviceDescriptor;
    /**
     * Depending on device type and regulatory domain, device owner information
     * may be included in an available spectrum batch request. This allows the
     * device to register and get spectrum-availability information in a single
     * request.
     */
    owner?: Schema$DeviceOwner;
    /**
     * The request type parameter is an optional parameter that can be used to
     * modify an available spectrum batch request, but its use depends on
     * applicable regulatory rules. For example, It may be used to request
     * generic slave device parameters without having to specify the device
     * descriptor for a specific device. When the requestType parameter is
     * missing, the request is for a specific device (master or slave), and the
     * device descriptor parameter for the device on whose behalf the batch
     * request is made is required.
     */
    requestType?: string;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The response message for the batch available spectrum query contains a
   * schedule of available spectrum for the device at multiple locations.
   */
  export interface Schema$PawsGetSpectrumBatchResponse {
    /**
     * A database may include the databaseChange parameter to notify a device of
     * a change to its database URI, providing one or more alternate database
     * URIs. The device should use this information to update its list of
     * pre-configured databases by (only) replacing its entry for the responding
     * database with the list of alternate URIs.
     */
    databaseChange?: Schema$DbUpdateSpec;
    /**
     * The database must return in its available spectrum response the device
     * descriptor information it received in the master device&#39;s available
     * spectrum batch request.
     */
    deviceDesc?: Schema$DeviceDescriptor;
    /**
     * The available spectrum batch response must contain a geo-spectrum
     * schedule list, The list may be empty if spectrum is not available. The
     * database may return more than one geo-spectrum schedule to represent
     * future changes to the available spectrum. How far in advance a schedule
     * may be provided depends upon the applicable regulatory domain. The
     * database may return available spectrum for fewer geolocations than
     * requested. The device must not make assumptions about the order of the
     * entries in the list, and must use the geolocation value in each
     * geo-spectrum schedule entry to match available spectrum to a location.
     */
    geoSpectrumSchedules?: Schema$GeoSpectrumSchedule[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;spectrum#pawsGetSpectrumBatchResponse&quot;.
     */
    kind?: string;
    /**
     * The database may return a constraint on the allowed maximum contiguous
     * bandwidth (in Hertz). A regulatory domain may require the database to
     * return this parameter. When this parameter is present in the response,
     * the device must apply this constraint to its spectrum-selection logic to
     * ensure that no single block of spectrum has bandwidth that exceeds this
     * value.
     */
    maxContiguousBwHz?: number;
    /**
     * The database may return a constraint on the allowed maximum total
     * bandwidth (in Hertz), which does not need to be contiguous. A regulatory
     * domain may require the database to return this parameter. When this
     * parameter is present in the available spectrum batch response, the device
     * must apply this constraint to its spectrum-selection logic to ensure that
     * total bandwidth does not exceed this value.
     */
    maxTotalBwHz?: number;
    /**
     * For regulatory domains that require a spectrum-usage report from devices,
     * the database must return true for this parameter if the geo-spectrum
     * schedules list is not empty; otherwise, the database should either return
     * false or omit this parameter. If this parameter is present and its value
     * is true, the device must send a spectrum use notify message to the
     * database; otherwise, the device should not send the notification.
     */
    needsSpectrumReport?: boolean;
    /**
     * The database should return ruleset information, which identifies the
     * applicable regulatory authority and ruleset for the available spectrum
     * batch response. If included, the device must use the corresponding
     * ruleset to interpret the response. Values provided in the returned
     * ruleset information, such as maxLocationChange, take precedence over any
     * conflicting values provided in the ruleset information returned in a
     * prior initialization response sent by the database to the device.
     */
    rulesetInfo?: Schema$RulesetInfo;
    /**
     * The database includes a timestamp of the form, YYYY-MM-DDThh:mm:ssZ
     * (Internet timestamp format per RFC3339), in its available spectrum batch
     * response. The timestamp should be used by the device as a reference for
     * the start and stop times specified in the response spectrum schedules.
     */
    timestamp?: string;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The request message for the available spectrum query protocol which must
   * include the device&#39;s geolocation.
   */
  export interface Schema$PawsGetSpectrumRequest {
    /**
     * Depending on device type and regulatory domain, the characteristics of
     * the antenna may be required.
     */
    antenna?: Schema$AntennaCharacteristics;
    /**
     * The master device may include its device capabilities to limit the
     * available-spectrum response to the spectrum that is compatible with its
     * capabilities. The database should not return spectrum that is
     * incompatible with the specified capabilities.
     */
    capabilities?: Schema$DeviceCapabilities;
    /**
     * When the available spectrum request is made on behalf of a specific
     * device (a master or slave device), device descriptor information for that
     * device is required (in such cases, the requestType parameter must be
     * empty). When a requestType value is specified, device descriptor
     * information may be optional or required according to the rules of the
     * applicable regulatory domain.
     */
    deviceDesc?: Schema$DeviceDescriptor;
    /**
     * The geolocation of the master device (a device with geolocation
     * capability that makes an available spectrum request) is required whether
     * the master device is making the request on its own behalf or on behalf of
     * a slave device (one without geolocation capability). The location must be
     * the location of the radiation center of the master device&#39;s antenna.
     * To support mobile devices, a regulatory domain may allow the anticipated
     * position of the master device to be given instead. If the location
     * specifies a region, rather than a point, the database may return an
     * UNIMPLEMENTED error code if it does not support query by region.
     */
    location?: Schema$GeoLocation;
    /**
     * When an available spectrum request is made by the master device (a device
     * with geolocation capability) on behalf of a slave device (a device
     * without geolocation capability), the rules of the applicable regulatory
     * domain may require the master device to provide its own device descriptor
     * information (in addition to device descriptor information for the slave
     * device, which is provided in a separate parameter).
     */
    masterDeviceDesc?: Schema$DeviceDescriptor;
    /**
     * Depending on device type and regulatory domain, device owner information
     * may be included in an available spectrum request. This allows the device
     * to register and get spectrum-availability information in a single
     * request.
     */
    owner?: Schema$DeviceOwner;
    /**
     * The request type parameter is an optional parameter that can be used to
     * modify an available spectrum request, but its use depends on applicable
     * regulatory rules. It may be used, for example, to request generic slave
     * device parameters without having to specify the device descriptor for a
     * specific device. When the requestType parameter is missing, the request
     * is for a specific device (master or slave), and the deviceDesc parameter
     * for the device on whose behalf the request is made is required.
     */
    requestType?: string;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The response message for the available spectrum query which contains a
   * schedule of available spectrum for the device.
   */
  export interface Schema$PawsGetSpectrumResponse {
    /**
     * A database may include the databaseChange parameter to notify a device of
     * a change to its database URI, providing one or more alternate database
     * URIs. The device should use this information to update its list of
     * pre-configured databases by (only) replacing its entry for the responding
     * database with the list of alternate URIs.
     */
    databaseChange?: Schema$DbUpdateSpec;
    /**
     * The database must return, in its available spectrum response, the device
     * descriptor information it received in the master device&#39;s available
     * spectrum request.
     */
    deviceDesc?: Schema$DeviceDescriptor;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;spectrum#pawsGetSpectrumResponse&quot;.
     */
    kind?: string;
    /**
     * The database may return a constraint on the allowed maximum contiguous
     * bandwidth (in Hertz). A regulatory domain may require the database to
     * return this parameter. When this parameter is present in the response,
     * the device must apply this constraint to its spectrum-selection logic to
     * ensure that no single block of spectrum has bandwidth that exceeds this
     * value.
     */
    maxContiguousBwHz?: number;
    /**
     * The database may return a constraint on the allowed maximum total
     * bandwidth (in Hertz), which need not be contiguous. A regulatory domain
     * may require the database to return this parameter. When this parameter is
     * present in the available spectrum response, the device must apply this
     * constraint to its spectrum-selection logic to ensure that total bandwidth
     * does not exceed this value.
     */
    maxTotalBwHz?: number;
    /**
     * For regulatory domains that require a spectrum-usage report from devices,
     * the database must return true for this parameter if the spectrum schedule
     * list is not empty; otherwise, the database will either return false or
     * omit this parameter. If this parameter is present and its value is true,
     * the device must send a spectrum use notify message to the database;
     * otherwise, the device must not send the notification.
     */
    needsSpectrumReport?: boolean;
    /**
     * The database should return ruleset information, which identifies the
     * applicable regulatory authority and ruleset for the available spectrum
     * response. If included, the device must use the corresponding ruleset to
     * interpret the response. Values provided in the returned ruleset
     * information, such as maxLocationChange, take precedence over any
     * conflicting values provided in the ruleset information returned in a
     * prior initialization response sent by the database to the device.
     */
    rulesetInfo?: Schema$RulesetInfo;
    /**
     * The available spectrum response must contain a spectrum schedule list.
     * The list may be empty if spectrum is not available. The database may
     * return more than one spectrum schedule to represent future changes to the
     * available spectrum. How far in advance a schedule may be provided depends
     * on the applicable regulatory domain.
     */
    spectrumSchedules?: Schema$SpectrumSchedule[];
    /**
     * The database includes a timestamp of the form YYYY-MM-DDThh:mm:ssZ
     * (Internet timestamp format per RFC3339) in its available spectrum
     * response. The timestamp should be used by the device as a reference for
     * the start and stop times specified in the response spectrum schedules.
     */
    timestamp?: string;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The initialization request message allows the master device to initiate
   * exchange of capabilities with the database.
   */
  export interface Schema$PawsInitRequest {
    /**
     * The DeviceDescriptor parameter is required. If the database does not
     * support the device or any of the rulesets specified in the device
     * descriptor, it must return an UNSUPPORTED error code in the error
     * response.
     */
    deviceDesc?: Schema$DeviceDescriptor;
    /**
     * A device&#39;s geolocation is required.
     */
    location?: Schema$GeoLocation;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The initialization response message communicates database parameters to the
   * requesting device.
   */
  export interface Schema$PawsInitResponse {
    /**
     * A database may include the databaseChange parameter to notify a device of
     * a change to its database URI, providing one or more alternate database
     * URIs. The device should use this information to update its list of
     * pre-configured databases by (only) replacing its entry for the responding
     * database with the list of alternate URIs.
     */
    databaseChange?: Schema$DbUpdateSpec;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;spectrum#pawsInitResponse&quot;.
     */
    kind?: string;
    /**
     * The rulesetInfo parameter must be included in the response. This
     * parameter specifies the regulatory domain and parameters applicable to
     * that domain. The database must include the authority field, which defines
     * the regulatory domain for the location specified in the INIT_REQ message.
     */
    rulesetInfo?: Schema$RulesetInfo;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The spectrum-use notification message which must contain the geolocation of
   * the Device and parameters required by the regulatory domain.
   */
  export interface Schema$PawsNotifySpectrumUseRequest {
    /**
     * Device descriptor information is required in the spectrum-use
     * notification message.
     */
    deviceDesc?: Schema$DeviceDescriptor;
    /**
     * The geolocation of the master device (the device that is sending the
     * spectrum-use notification) to the database is required in the
     * spectrum-use notification message.
     */
    location?: Schema$GeoLocation;
    /**
     * A spectrum list is required in the spectrum-use notification. The list
     * specifies the spectrum that the device expects to use, which includes
     * frequency ranges and maximum power levels. The list may be empty if the
     * device decides not to use any of spectrum. For consistency, the
     * psdBandwidthHz value should match that from one of the spectrum elements
     * in the corresponding available spectrum response previously sent to the
     * device by the database. Note that maximum power levels in the spectrum
     * element must be expressed as power spectral density over the specified
     * psdBandwidthHz value. The actual bandwidth to be used (as computed from
     * the start and stop frequencies) may be different from the psdBandwidthHz
     * value. As an example, when regulatory rules express maximum power
     * spectral density in terms of maximum power over any 100 kHz band, then
     * the psdBandwidthHz value should be set to 100 kHz, even though the actual
     * bandwidth used can be 20 kHz.
     */
    spectra?: Schema$SpectrumMessage[];
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * An empty response to the notification.
   */
  export interface Schema$PawsNotifySpectrumUseResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;spectrum#pawsNotifySpectrumUseResponse&quot;.
     */
    kind?: string;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The registration request message contains the required registration
   * parameters.
   */
  export interface Schema$PawsRegisterRequest {
    /**
     * Antenna characteristics, including its height and height type.
     */
    antenna?: Schema$AntennaCharacteristics;
    /**
     * A DeviceDescriptor is required.
     */
    deviceDesc?: Schema$DeviceDescriptor;
    /**
     * Device owner information is required.
     */
    deviceOwner?: Schema$DeviceOwner;
    /**
     * A device&#39;s geolocation is required.
     */
    location?: Schema$GeoLocation;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The registration response message simply acknowledges receipt of the
   * request and is otherwise empty.
   */
  export interface Schema$PawsRegisterResponse {
    /**
     * A database may include the databaseChange parameter to notify a device of
     * a change to its database URI, providing one or more alternate database
     * URIs. The device should use this information to update its list of
     * pre-configured databases by (only) replacing its entry for the responding
     * database with the list of alternate URIs.
     */
    databaseChange?: Schema$DbUpdateSpec;
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;spectrum#pawsRegisterResponse&quot;.
     */
    kind?: string;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The device validation request message.
   */
  export interface Schema$PawsVerifyDeviceRequest {
    /**
     * A list of device descriptors, which specifies the slave devices to be
     * validated, is required.
     */
    deviceDescs?: Schema$DeviceDescriptor[];
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * The device validation response message.
   */
  export interface Schema$PawsVerifyDeviceResponse {
    /**
     * A database may include the databaseChange parameter to notify a device of
     * a change to its database URI, providing one or more alternate database
     * URIs. The device should use this information to update its list of
     * pre-configured databases by (only) replacing its entry for the responding
     * database with the list of alternate URIs.
     */
    databaseChange?: Schema$DbUpdateSpec;
    /**
     * A device validities list is required in the device validation response to
     * report whether each slave device listed in a previous device validation
     * request is valid. The number of entries must match the number of device
     * descriptors listed in the previous device validation request.
     */
    deviceValidities?: Schema$DeviceValidity[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;spectrum#pawsVerifyDeviceResponse&quot;.
     */
    kind?: string;
    /**
     * The message type (e.g., INIT_REQ, AVAIL_SPECTRUM_REQ, ...).  Required
     * field.
     */
    type?: string;
    /**
     * The PAWS version. Must be exactly 1.0.  Required field.
     */
    version?: string;
  }
  /**
   * This contains parameters for the ruleset of a regulatory domain that is
   * communicated using the initialization and available-spectrum processes.
   */
  export interface Schema$RulesetInfo {
    /**
     * The regulatory domain to which the ruleset belongs is required. It must
     * be a 2-letter country code. The device should use this to determine
     * additional device behavior required by the associated regulatory domain.
     */
    authority?: string;
    /**
     * The maximum location change in meters is required in the initialization
     * response, but optional otherwise. When the device changes location by
     * more than this specified distance, it must contact the database to get
     * the available spectrum for the new location. If the device is using
     * spectrum that is no longer available, it must immediately cease use of
     * the spectrum under rules for database-managed spectrum. If this value is
     * provided within the context of an available-spectrum response, it takes
     * precedence over the value within the initialization response.
     */
    maxLocationChange?: number;
    /**
     * The maximum duration, in seconds, between requests for available
     * spectrum. It is required in the initialization response, but optional
     * otherwise. The device must contact the database to get available spectrum
     * no less frequently than this duration. If the new spectrum information
     * indicates that the device is using spectrum that is no longer available,
     * it must immediately cease use of those frequencies under rules for
     * database-managed spectrum. If this value is provided within the context
     * of an available-spectrum response, it takes precedence over the value
     * within the initialization response.
     */
    maxPollingSecs?: number;
    /**
     * The identifiers of the rulesets supported for the device&#39;s location.
     * The database should include at least one applicable ruleset in the
     * initialization response. The device may use the ruleset identifiers to
     * determine parameters to include in subsequent requests. Within the
     * context of the available-spectrum responses, the database should include
     * the identifier of the ruleset that it used to determine the
     * available-spectrum response. If included, the device must use the
     * specified ruleset to interpret the response. If the device does not
     * support the indicated ruleset, it must not operate in the spectrum
     * governed by the ruleset.
     */
    rulesetIds?: string[];
  }
  /**
   * Available spectrum can be logically characterized by a list of frequency
   * ranges and permissible power levels for each range.
   */
  export interface Schema$SpectrumMessage {
    /**
     * The bandwidth (in Hertz) for which permissible power levels are
     * specified. For example, FCC regulation would require only one spectrum
     * specification at 6MHz bandwidth, but Ofcom regulation would require two
     * specifications, at 0.1MHz and 8MHz. This parameter may be empty if there
     * is no available spectrum. It will be present otherwise.
     */
    bandwidth?: number;
    /**
     * The list of frequency ranges and permissible power levels. The list may
     * be empty if there is no available spectrum, otherwise it will be present.
     */
    frequencyRanges?: Schema$FrequencyRange[];
  }
  /**
   * The spectrum schedule element combines an event time with spectrum profile
   * to define a time period in which the profile is valid.
   */
  export interface Schema$SpectrumSchedule {
    /**
     * The event time expresses when the spectrum profile is valid. It will
     * always be present.
     */
    eventTime?: Schema$EventTime;
    /**
     * A list of spectrum messages representing the usable profile. It will
     * always be present, but may be empty when there is no available spectrum.
     */
    spectra?: Schema$SpectrumMessage[];
  }
  /**
   * A vCard-in-JSON message that contains only the fields needed for PAWS:   -
   * fn: Full name of an individual  - org: Name of the organization  - adr:
   * Address fields  - tel: Telephone numbers  - email: Email addresses
   */
  export interface Schema$Vcard {
    /**
     * The street address of the entity.
     */
    adr?: Schema$VcardAddress;
    /**
     * An email address that can be used to reach the contact.
     */
    email?: Schema$VcardTypedText;
    /**
     * The full name of the contact person. For example: John A. Smith.
     */
    fn?: string;
    /**
     * The organization associated with the registering entity.
     */
    org?: Schema$VcardTypedText;
    /**
     * A telephone number that can be used to call the contact.
     */
    tel?: Schema$VcardTelephone;
  }
  /**
   * The structure used to represent a street address.
   */
  export interface Schema$VcardAddress {
    /**
     * The postal code associated with the address. For example: 94423.
     */
    code?: string;
    /**
     * The country name. For example: US.
     */
    country?: string;
    /**
     * The city or local equivalent portion of the address. For example: San
     * Jose.
     */
    locality?: string;
    /**
     * An optional post office box number.
     */
    pobox?: string;
    /**
     * The state or local equivalent portion of the address. For example: CA.
     */
    region?: string;
    /**
     * The street number and name. For example: 123 Any St.
     */
    street?: string;
  }
  /**
   * The structure used to represent a telephone number.
   */
  export interface Schema$VcardTelephone {
    /**
     * A nested telephone URI of the form: tel:+1-123-456-7890.
     */
    uri?: string;
  }
  /**
   * The structure used to represent an organization and an email address.
   */
  export interface Schema$VcardTypedText {
    /**
     * The text string associated with this item. For example, for an org field:
     * ACME, inc. For an email field: smith@example.com.
     */
    text?: string;
  }


  export class Resource$Paws {
    root: Spectrum;
    constructor(root: Spectrum) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * spectrum.paws.getSpectrum
     * @desc Requests information about the available spectrum for a device at a
     * location. Requests from a fixed-mode device must include owner
     * information so the device can be registered with the database.
     * @alias spectrum.paws.getSpectrum
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().PawsGetSpectrumRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSpectrum(
        params?: Params$Resource$Paws$Getspectrum,
        options?: MethodOptions): AxiosPromise<Schema$PawsGetSpectrumResponse>;
    getSpectrum(
        params: Params$Resource$Paws$Getspectrum,
        options: MethodOptions|
        BodyResponseCallback<Schema$PawsGetSpectrumResponse>,
        callback: BodyResponseCallback<Schema$PawsGetSpectrumResponse>): void;
    getSpectrum(
        params: Params$Resource$Paws$Getspectrum,
        callback: BodyResponseCallback<Schema$PawsGetSpectrumResponse>): void;
    getSpectrum(callback: BodyResponseCallback<Schema$PawsGetSpectrumResponse>):
        void;
    getSpectrum(
        paramsOrCallback?: Params$Resource$Paws$Getspectrum|
        BodyResponseCallback<Schema$PawsGetSpectrumResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PawsGetSpectrumResponse>,
        callback?: BodyResponseCallback<Schema$PawsGetSpectrumResponse>):
        void|AxiosPromise<Schema$PawsGetSpectrumResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Paws$Getspectrum;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Paws$Getspectrum;
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
              url: (rootUrl + '/spectrum/v1explorer/paws/getSpectrum')
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
        createAPIRequest<Schema$PawsGetSpectrumResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PawsGetSpectrumResponse>(parameters);
      }
    }


    /**
     * spectrum.paws.getSpectrumBatch
     * @desc The Google Spectrum Database does not support batch requests, so
     * this method always yields an UNIMPLEMENTED error.
     * @alias spectrum.paws.getSpectrumBatch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().PawsGetSpectrumBatchRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSpectrumBatch(
        params?: Params$Resource$Paws$Getspectrumbatch,
        options?: MethodOptions):
        AxiosPromise<Schema$PawsGetSpectrumBatchResponse>;
    getSpectrumBatch(
        params: Params$Resource$Paws$Getspectrumbatch,
        options: MethodOptions|
        BodyResponseCallback<Schema$PawsGetSpectrumBatchResponse>,
        callback: BodyResponseCallback<Schema$PawsGetSpectrumBatchResponse>):
        void;
    getSpectrumBatch(
        params: Params$Resource$Paws$Getspectrumbatch,
        callback: BodyResponseCallback<Schema$PawsGetSpectrumBatchResponse>):
        void;
    getSpectrumBatch(
        callback: BodyResponseCallback<Schema$PawsGetSpectrumBatchResponse>):
        void;
    getSpectrumBatch(
        paramsOrCallback?: Params$Resource$Paws$Getspectrumbatch|
        BodyResponseCallback<Schema$PawsGetSpectrumBatchResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PawsGetSpectrumBatchResponse>,
        callback?: BodyResponseCallback<Schema$PawsGetSpectrumBatchResponse>):
        void|AxiosPromise<Schema$PawsGetSpectrumBatchResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Paws$Getspectrumbatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Paws$Getspectrumbatch;
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
              url: (rootUrl + '/spectrum/v1explorer/paws/getSpectrumBatch')
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
        createAPIRequest<Schema$PawsGetSpectrumBatchResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$PawsGetSpectrumBatchResponse>(
            parameters);
      }
    }


    /**
     * spectrum.paws.init
     * @desc Initializes the connection between a white space device and the
     * database.
     * @alias spectrum.paws.init
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().PawsInitRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    init(params?: Params$Resource$Paws$Init, options?: MethodOptions):
        AxiosPromise<Schema$PawsInitResponse>;
    init(
        params: Params$Resource$Paws$Init,
        options: MethodOptions|BodyResponseCallback<Schema$PawsInitResponse>,
        callback: BodyResponseCallback<Schema$PawsInitResponse>): void;
    init(
        params: Params$Resource$Paws$Init,
        callback: BodyResponseCallback<Schema$PawsInitResponse>): void;
    init(callback: BodyResponseCallback<Schema$PawsInitResponse>): void;
    init(
        paramsOrCallback?: Params$Resource$Paws$Init|
        BodyResponseCallback<Schema$PawsInitResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PawsInitResponse>,
        callback?: BodyResponseCallback<Schema$PawsInitResponse>):
        void|AxiosPromise<Schema$PawsInitResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Paws$Init;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Paws$Init;
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
              url: (rootUrl + '/spectrum/v1explorer/paws/init')
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
        createAPIRequest<Schema$PawsInitResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PawsInitResponse>(parameters);
      }
    }


    /**
     * spectrum.paws.notifySpectrumUse
     * @desc Notifies the database that the device has selected certain
     * frequency ranges for transmission. Only to be invoked when required by
     * the regulator. The Google Spectrum Database does not operate in domains
     * that require notification, so this always yields an UNIMPLEMENTED error.
     * @alias spectrum.paws.notifySpectrumUse
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().PawsNotifySpectrumUseRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    notifySpectrumUse(
        params?: Params$Resource$Paws$Notifyspectrumuse,
        options?: MethodOptions):
        AxiosPromise<Schema$PawsNotifySpectrumUseResponse>;
    notifySpectrumUse(
        params: Params$Resource$Paws$Notifyspectrumuse,
        options: MethodOptions|
        BodyResponseCallback<Schema$PawsNotifySpectrumUseResponse>,
        callback: BodyResponseCallback<Schema$PawsNotifySpectrumUseResponse>):
        void;
    notifySpectrumUse(
        params: Params$Resource$Paws$Notifyspectrumuse,
        callback: BodyResponseCallback<Schema$PawsNotifySpectrumUseResponse>):
        void;
    notifySpectrumUse(
        callback: BodyResponseCallback<Schema$PawsNotifySpectrumUseResponse>):
        void;
    notifySpectrumUse(
        paramsOrCallback?: Params$Resource$Paws$Notifyspectrumuse|
        BodyResponseCallback<Schema$PawsNotifySpectrumUseResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PawsNotifySpectrumUseResponse>,
        callback?: BodyResponseCallback<Schema$PawsNotifySpectrumUseResponse>):
        void|AxiosPromise<Schema$PawsNotifySpectrumUseResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Paws$Notifyspectrumuse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Paws$Notifyspectrumuse;
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
              url: (rootUrl + '/spectrum/v1explorer/paws/notifySpectrumUse')
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
        createAPIRequest<Schema$PawsNotifySpectrumUseResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$PawsNotifySpectrumUseResponse>(
            parameters);
      }
    }


    /**
     * spectrum.paws.register
     * @desc The Google Spectrum Database implements registration in the
     * getSpectrum method. As such this always returns an UNIMPLEMENTED error.
     * @alias spectrum.paws.register
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().PawsRegisterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    register(params?: Params$Resource$Paws$Register, options?: MethodOptions):
        AxiosPromise<Schema$PawsRegisterResponse>;
    register(
        params: Params$Resource$Paws$Register,
        options: MethodOptions|
        BodyResponseCallback<Schema$PawsRegisterResponse>,
        callback: BodyResponseCallback<Schema$PawsRegisterResponse>): void;
    register(
        params: Params$Resource$Paws$Register,
        callback: BodyResponseCallback<Schema$PawsRegisterResponse>): void;
    register(callback: BodyResponseCallback<Schema$PawsRegisterResponse>): void;
    register(
        paramsOrCallback?: Params$Resource$Paws$Register|
        BodyResponseCallback<Schema$PawsRegisterResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PawsRegisterResponse>,
        callback?: BodyResponseCallback<Schema$PawsRegisterResponse>):
        void|AxiosPromise<Schema$PawsRegisterResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Paws$Register;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Paws$Register;
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
              url: (rootUrl + '/spectrum/v1explorer/paws/register')
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
        createAPIRequest<Schema$PawsRegisterResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PawsRegisterResponse>(parameters);
      }
    }


    /**
     * spectrum.paws.verifyDevice
     * @desc Validates a device for white space use in accordance with
     * regulatory rules. The Google Spectrum Database does not support
     * master/slave configurations, so this always yields an UNIMPLEMENTED
     * error.
     * @alias spectrum.paws.verifyDevice
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().PawsVerifyDeviceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verifyDevice(
        params?: Params$Resource$Paws$Verifydevice,
        options?: MethodOptions): AxiosPromise<Schema$PawsVerifyDeviceResponse>;
    verifyDevice(
        params: Params$Resource$Paws$Verifydevice,
        options: MethodOptions|
        BodyResponseCallback<Schema$PawsVerifyDeviceResponse>,
        callback: BodyResponseCallback<Schema$PawsVerifyDeviceResponse>): void;
    verifyDevice(
        params: Params$Resource$Paws$Verifydevice,
        callback: BodyResponseCallback<Schema$PawsVerifyDeviceResponse>): void;
    verifyDevice(
        callback: BodyResponseCallback<Schema$PawsVerifyDeviceResponse>): void;
    verifyDevice(
        paramsOrCallback?: Params$Resource$Paws$Verifydevice|
        BodyResponseCallback<Schema$PawsVerifyDeviceResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PawsVerifyDeviceResponse>,
        callback?: BodyResponseCallback<Schema$PawsVerifyDeviceResponse>):
        void|AxiosPromise<Schema$PawsVerifyDeviceResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Paws$Verifydevice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Paws$Verifydevice;
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
              url: (rootUrl + '/spectrum/v1explorer/paws/verifyDevice')
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
        createAPIRequest<Schema$PawsVerifyDeviceResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PawsVerifyDeviceResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Paws$Getspectrum {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$PawsGetSpectrumRequest;
  }
  export interface Params$Resource$Paws$Getspectrumbatch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$PawsGetSpectrumBatchRequest;
  }
  export interface Params$Resource$Paws$Init {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$PawsInitRequest;
  }
  export interface Params$Resource$Paws$Notifyspectrumuse {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$PawsNotifySpectrumUseRequest;
  }
  export interface Params$Resource$Paws$Register {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$PawsRegisterRequest;
  }
  export interface Params$Resource$Paws$Verifydevice {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$PawsVerifyDeviceRequest;
  }
}
