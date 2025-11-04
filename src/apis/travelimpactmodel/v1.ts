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

export namespace travelimpactmodel_v1 {
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
   * Travel Impact Model API
   *
   * Travel Impact Model API lets you query travel carbon emission estimates.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const travelimpactmodel = google.travelimpactmodel('v1');
   * ```
   */
  export class Travelimpactmodel {
    context: APIRequestContext;
    flights: Resource$Flights;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.flights = new Resource$Flights(this.context);
    }
  }

  /**
   * Input definition for the ComputeFlightEmissions request.
   */
  export interface Schema$ComputeFlightEmissionsRequest {
    /**
     * Required. Direct flights to return emission estimates for.
     */
    flights?: Schema$Flight[];
  }
  /**
   * Output definition for the ComputeFlightEmissions response.
   */
  export interface Schema$ComputeFlightEmissionsResponse {
    /**
     * List of flight legs with emission estimates.
     */
    flightEmissions?: Schema$FlightWithEmissions[];
    /**
     * The model version under which emission estimates for all flights in this response were computed.
     */
    modelVersion?: Schema$ModelVersion;
  }
  /**
   * A list of flight segments to request the Scope 3 emissions for.
   */
  export interface Schema$ComputeScope3FlightEmissionsRequest {
    /**
     * Required. Flights to return emission estimates for.
     */
    flights?: Schema$Scope3FlightSegment[];
    /**
     * Optional. The model version under which emission estimates for all flights in this request were computed.
     */
    modelVersion?: Schema$ModelVersion;
  }
  /**
   * A list of flights with Scope 3 emission estimates.
   */
  export interface Schema$ComputeScope3FlightEmissionsResponse {
    /**
     * List of flight segments with emission estimates.
     */
    flightEmissions?: Schema$Scope3FlightEmissions[];
    /**
     * The model version under which emission estimates for all flights in this response were computed.
     */
    modelVersion?: Schema$ModelVersion;
  }
  /**
   * A list of pair of airports (markets) to request the typical emissions for.
   */
  export interface Schema$ComputeTypicalFlightEmissionsRequest {
    /**
     * Required. Request the typical flight emissions estimates for this market pair. A maximum of 1000 markets can be requested.
     */
    markets?: Schema$Market[];
  }
  /**
   * The response includes the emissions but also the model version.
   */
  export interface Schema$ComputeTypicalFlightEmissionsResponse {
    /**
     * The model version under which typical flight emission estimates for all flights in this response were computed.
     */
    modelVersion?: Schema$ModelVersion;
    /**
     * Market's Typical Flight Emissions requested.
     */
    typicalFlightEmissions?: Schema$TypicalFlightEmissions[];
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
   * Metadata about the EASA Flight Emissions Label.
   */
  export interface Schema$EasaLabelMetadata {
    /**
     * The date when the label expires. The label can be displayed until the end of this date.
     */
    labelExpiryDate?: Schema$Date;
    /**
     * The date when the label was issued.
     */
    labelIssueDate?: Schema$Date;
    /**
     * Version of the label.
     */
    labelVersion?: string | null;
    /**
     * Sustainable Aviation Fuel (SAF) emissions discount percentage applied to the label. It is a percentage as a decimal. The values are in the interval [0,1]. For example, 0.0021 means 0.21%. This discount and reduction in emissions are reported by the EASA label but they are not included in the CO2e estimates distributed by this API.
     */
    safDiscountPercentage?: number | null;
  }
  /**
   * Grouped emissions per seating class results.
   */
  export interface Schema$EmissionsGramsPerPax {
    /**
     * Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not.
     */
    business?: number | null;
    /**
     * Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not.
     */
    economy?: number | null;
    /**
     * Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not.
     */
    first?: number | null;
    /**
     * Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not.
     */
    premiumEconomy?: number | null;
  }
  /**
   * All details related to a single request item for a direct flight emission estimates.
   */
  export interface Schema$Flight {
    /**
     * Required. Date of the flight in the time zone of the origin airport. Must be a date in the present or future.
     */
    departureDate?: Schema$Date;
    /**
     * Required. IATA airport code for flight destination, e.g. "JFK".
     */
    destination?: string | null;
    /**
     * Required. Flight number, e.g. 324.
     */
    flightNumber?: number | null;
    /**
     * Required. IATA carrier code, e.g. "AA".
     */
    operatingCarrierCode?: string | null;
    /**
     * Required. IATA airport code for flight origin, e.g. "LHR".
     */
    origin?: string | null;
  }
  /**
   * Direct flight with emission estimates.
   */
  export interface Schema$FlightWithEmissions {
    /**
     * Optional. The significance of contrails warming impact compared to the total CO2e emissions impact.
     */
    contrailsImpactBucket?: string | null;
    /**
     * Optional. Metadata about the EASA Flight Emissions Label. Only set when the emissions data source is EASA.
     */
    easaLabelMetadata?: Schema$EasaLabelMetadata;
    /**
     * Optional. Per-passenger emission estimate numbers. Will not be present if emissions could not be computed. For the list of reasons why emissions could not be computed, see ComputeFlightEmissions.
     */
    emissionsGramsPerPax?: Schema$EmissionsGramsPerPax;
    /**
     * Required. Matches the flight identifiers in the request. Note: all IATA codes are capitalized.
     */
    flight?: Schema$Flight;
    /**
     * Optional. The source of the emissions data.
     */
    source?: string | null;
  }
  /**
   * A pair of airports.
   */
  export interface Schema$Market {
    /**
     * Required. IATA airport code for flight destination, e.g. "JFK".
     */
    destination?: string | null;
    /**
     * Required. IATA airport code for flight origin, e.g. "LHR".
     */
    origin?: string | null;
  }
  /**
   * Travel Impact Model version. For more information about the model versioning see [GitHub](https://github.com/google/travel-impact-model/#versioning).
   */
  export interface Schema$ModelVersion {
    /**
     * Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly.
     */
    dated?: string | null;
    /**
     * Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect [Google Cloud API guidelines](https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible)
     */
    major?: number | null;
    /**
     * Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation.
     */
    minor?: number | null;
    /**
     * Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation.
     */
    patch?: number | null;
  }
  /**
   * Scope 3 flight with emission estimates.
   */
  export interface Schema$Scope3FlightEmissions {
    /**
     * Required. Matches the flight identifiers in the request.
     */
    flight?: Schema$Scope3FlightSegment;
    /**
     * Optional. The source of the emissions data.
     */
    source?: string | null;
    /**
     * Optional. Tank-to-wake flight emissions per passenger based on the requested info.
     */
    ttwEmissionsGramsPerPax?: string | null;
    /**
     * Optional. Well-to-tank flight emissions per passenger based on the requested info.
     */
    wttEmissionsGramsPerPax?: string | null;
    /**
     * Optional. Total flight emissions (sum of well-to-tank and tank-to-wake) per passenger based on the requested info. This is the total emissions and unless you have specific reasons for using TTW or WTT emissions, you should use this number.
     */
    wtwEmissionsGramsPerPax?: string | null;
  }
  /**
   * Flight parameters with which the Scope 3 emissions are fetched.
   */
  export interface Schema$Scope3FlightSegment {
    /**
     * Required. The cabin class of the flight.
     */
    cabinClass?: string | null;
    /**
     * Optional. 2-character [IATA carrier code](https://www.iata.org/en/publications/directories/code-search/), e.g. `KE`. This is required if specific flight matching is desired. Otherwise, this is unused for typical flight and distance-based emissions models. This could be both operating and marketing carrier code (i.e. codeshare is covered).
     */
    carrierCode?: string | null;
    /**
     * Required. Date of the flight in the time zone of the origin airport. Only year is required for typical flight and distance-based emissions models (month and day values are ignored and therefore, can be either omitted, set to 0, or set to a valid date for those cases). Correspondingly, if a specific date is not provided for TIM emissions, we will fallback to typical flight (or distance-based) emissions.
     */
    departureDate?: Schema$Date;
    /**
     * Optional. 3-character [IATA airport code](https://www.iata.org/en/publications/directories/code-search/) for flight destination, e.g. `ICN`. This is used to match specific flight if provided alongside origin, carrier, and flight number. If there is no match, we will first try to match the flight to a typical flight between the provided origin and destination airports. Otherwise, we will use the distance-based emissions model if the flight distance is provided.
     */
    destination?: string | null;
    /**
     * Optional. Distance in kilometers, e.g. `2423`, from [1, 2.5e16) km. This is used to match a flight to distance-based emissions when origin and destination are not provided or there are no matching typical flights.
     */
    distanceKm?: string | null;
    /**
     * Optional. Up to 4-digit [flight number](https://en.wikipedia.org/wiki/Flight_number), e.g. `71`, from [1, 9999]. This is first used to match a specific flight if a flight number is specified alongside origin, destination, and carrier. If a flight number is not specified, we will first try to match the flight to a typical flight between the provided origin and destination airports. If that fails and/or origin & destination are not provided, we will use the distance-based emissions model based on the flight distance provided.
     */
    flightNumber?: number | null;
    /**
     * Optional. 3-character [IATA airport code](https://www.iata.org/en/publications/directories/code-search/) for flight origin, e.g. `YVR`. This is used to match specific flight if provided alongside destination, carrier, and flight number. If there is no match, we will first try to match the flight to a typical flight between the provided origin and destination airports. Otherwise, we will use the distance-based emissions model if the flight distance is provided.
     */
    origin?: string | null;
  }
  /**
   * Typical flight emission estimates for a certain market
   */
  export interface Schema$TypicalFlightEmissions {
    /**
     * Optional. Typical flight emissions per passenger for requested market. Will not be present if a typical emissions could not be computed. For the list of reasons why typical flight emissions could not be computed, see [GitHub](https://github.com/google/travel-impact-model/blob/main/projects/typical_flight_emissions.md#step-7-validate-dataset).
     */
    emissionsGramsPerPax?: Schema$EmissionsGramsPerPax;
    /**
     * Required. Matches the flight identifiers in the request. Note: all IATA codes are capitalized.
     */
    market?: Schema$Market;
  }

  export class Resource$Flights {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Stateless method to retrieve emission estimates. Details on how emission estimates are computed are in [GitHub](https://github.com/google/travel-impact-model) The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: * The flight is unknown to the server. * The input flight leg is missing one or more identifiers. * The flight date is in the past. * The aircraft type is not supported by the model. * Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/travelimpactmodel.googleapis.com
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
     * const travelimpactmodel = google.travelimpactmodel('v1');
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
     *   const res = await travelimpactmodel.flights.computeFlightEmissions({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "flights": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "flightEmissions": [],
     *   //   "modelVersion": {}
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
    computeFlightEmissions(
      params: Params$Resource$Flights$Computeflightemissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    computeFlightEmissions(
      params?: Params$Resource$Flights$Computeflightemissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ComputeFlightEmissionsResponse>>;
    computeFlightEmissions(
      params: Params$Resource$Flights$Computeflightemissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeFlightEmissions(
      params: Params$Resource$Flights$Computeflightemissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>,
      callback: BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
    ): void;
    computeFlightEmissions(
      params: Params$Resource$Flights$Computeflightemissions,
      callback: BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
    ): void;
    computeFlightEmissions(
      callback: BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
    ): void;
    computeFlightEmissions(
      paramsOrCallback?:
        | Params$Resource$Flights$Computeflightemissions
        | BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ComputeFlightEmissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flights$Computeflightemissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flights$Computeflightemissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://travelimpactmodel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/flights:computeFlightEmissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$ComputeFlightEmissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ComputeFlightEmissionsResponse>(
          parameters
        );
      }
    }

    /**
     * Stateless method to retrieve GHG emissions estimates for a set of flight segments for Scope 3 reporting. The response will contain all entries that match the input Scope3FlightSegment flight segments, in the same order provided. The estimates will be computed using the following cascading logic (using the first one that is available): 1. TIM-based emissions given origin, destination, carrier, flightNumber, departureDate, and cabinClass. 2. Typical flight emissions given origin, destination, year in departureDate, and cabinClass. 3. Distance-based emissions calculated using distanceKm, year in departureDate, and cabinClass. If there is a future flight requested in this calendar year, we do not support Tier 1 emissions and will fallback to Tier 2 or 3 emissions. If the requested future flight is in not in this calendar year, we will return an empty response. We recommend that for future flights, computeFlightEmissions API is used instead. If there are no estimates available for a certain flight with any of the three methods, the response will return a Scope3FlightEmissions object with empty emission fields. The request will still be considered successful. Generally, missing emissions estimates occur when the flight is unknown to the server (e.g. no specific flight exists, or typical flight emissions are not available for the requested pair). The request will fail with an `INVALID_ARGUMENT` error if: * The request contains more than 1,000 flight legs. * The input flight leg is missing one or more identifiers. For example, missing origin/destination without a valid distance for TIM_EMISSIONS or TYPICAL_FLIGHT_EMISSIONS type matching, or missing distance for a DISTANCE_BASED_EMISSIONS type matching (if you want to fallback to distance-based emissions or want a distance-based emissions estimate, you need to specify a distance). * The flight date is before 2019 (Scope 3 data is only available for 2019 and after). * The flight distance is 0 or lower. * Missing cabin class. Because the request is processed with fallback logic, it is possible that misconfigured requests return valid emissions estimates using fallback methods. For example, if a request has the wrong flight number but specifies the origin and destination, the request will still succeed, but the returned emissions will be based solely on the typical flight emissions. Similarly, if a request is missing the origin for a typical flight emissions request, but specifies a valid distance, the request could succeed based solely on the distance-based emissions. Consequently, one should check the source of the returned emissions (source) to confirm the results are as expected.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/travelimpactmodel.googleapis.com
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
     * const travelimpactmodel = google.travelimpactmodel('v1');
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
     *   const res = await travelimpactmodel.flights.computeScope3FlightEmissions({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "flights": [],
     *       //   "modelVersion": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "flightEmissions": [],
     *   //   "modelVersion": {}
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
    computeScope3FlightEmissions(
      params: Params$Resource$Flights$Computescope3flightemissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    computeScope3FlightEmissions(
      params?: Params$Resource$Flights$Computescope3flightemissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ComputeScope3FlightEmissionsResponse>
    >;
    computeScope3FlightEmissions(
      params: Params$Resource$Flights$Computescope3flightemissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeScope3FlightEmissions(
      params: Params$Resource$Flights$Computescope3flightemissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ComputeScope3FlightEmissionsResponse>,
      callback: BodyResponseCallback<Schema$ComputeScope3FlightEmissionsResponse>
    ): void;
    computeScope3FlightEmissions(
      params: Params$Resource$Flights$Computescope3flightemissions,
      callback: BodyResponseCallback<Schema$ComputeScope3FlightEmissionsResponse>
    ): void;
    computeScope3FlightEmissions(
      callback: BodyResponseCallback<Schema$ComputeScope3FlightEmissionsResponse>
    ): void;
    computeScope3FlightEmissions(
      paramsOrCallback?:
        | Params$Resource$Flights$Computescope3flightemissions
        | BodyResponseCallback<Schema$ComputeScope3FlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ComputeScope3FlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ComputeScope3FlightEmissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ComputeScope3FlightEmissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flights$Computescope3flightemissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flights$Computescope3flightemissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://travelimpactmodel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/flights:computeScope3FlightEmissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$ComputeScope3FlightEmissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ComputeScope3FlightEmissionsResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves typical flight emissions estimates between two airports, also known as a market. If there are no estimates available for a certain market, the response will return the market object with empty emission fields. The request will still be considered successful. Details on how the typical emissions estimates are computed are on [GitHub](https://github.com/google/travel-impact-model/blob/main/projects/typical_flight_emissions.md). The request can contain up to 1000 markets. If the request has more than 1000 markets, it will fail with an INVALID_ARGUMENT error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/travelimpactmodel.googleapis.com
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
     * const travelimpactmodel = google.travelimpactmodel('v1');
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
     *   const res = await travelimpactmodel.flights.computeTypicalFlightEmissions({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "markets": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modelVersion": {},
     *   //   "typicalFlightEmissions": []
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
    computeTypicalFlightEmissions(
      params: Params$Resource$Flights$Computetypicalflightemissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    computeTypicalFlightEmissions(
      params?: Params$Resource$Flights$Computetypicalflightemissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ComputeTypicalFlightEmissionsResponse>
    >;
    computeTypicalFlightEmissions(
      params: Params$Resource$Flights$Computetypicalflightemissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeTypicalFlightEmissions(
      params: Params$Resource$Flights$Computetypicalflightemissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>,
      callback: BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
    ): void;
    computeTypicalFlightEmissions(
      params: Params$Resource$Flights$Computetypicalflightemissions,
      callback: BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
    ): void;
    computeTypicalFlightEmissions(
      callback: BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
    ): void;
    computeTypicalFlightEmissions(
      paramsOrCallback?:
        | Params$Resource$Flights$Computetypicalflightemissions
        | BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ComputeTypicalFlightEmissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flights$Computetypicalflightemissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flights$Computetypicalflightemissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://travelimpactmodel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/flights:computeTypicalFlightEmissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
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
        createAPIRequest<Schema$ComputeTypicalFlightEmissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ComputeTypicalFlightEmissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Flights$Computeflightemissions
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ComputeFlightEmissionsRequest;
  }
  export interface Params$Resource$Flights$Computescope3flightemissions
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ComputeScope3FlightEmissionsRequest;
  }
  export interface Params$Resource$Flights$Computetypicalflightemissions
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ComputeTypicalFlightEmissionsRequest;
  }
}
