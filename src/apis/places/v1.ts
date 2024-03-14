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

export namespace places_v1 {
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
   * Places API (New)
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const places = google.places('v1');
   * ```
   */
  export class Places {
    context: APIRequestContext;
    places: Resource$Places;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.places = new Resource$Places(this.context);
    }
  }

  /**
   * A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include: - If `low` = `high`, the viewport consists of that single point. - If `low.longitude` \> `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line). - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes. - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty. - If `low.latitude` \> `high.latitude`, the latitude range is empty. Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error. For example, this viewport fully encloses New York City: { "low": { "latitude": 40.477398, "longitude": -74.259087 \}, "high": { "latitude": 40.91618, "longitude": -73.70018 \} \}
   */
  export interface Schema$GoogleGeoTypeViewport {
    /**
     * Required. The high point of the viewport.
     */
    high?: Schema$GoogleTypeLatLng;
    /**
     * Required. The low point of the viewport.
     */
    low?: Schema$GoogleTypeLatLng;
  }
  /**
   * Information about the author of the UGC data. Used in Photo, and Review.
   */
  export interface Schema$GoogleMapsPlacesV1AuthorAttribution {
    /**
     * Name of the author of the Photo or Review.
     */
    displayName?: string | null;
    /**
     * Profile photo URI of the author of the Photo or Review.
     */
    photoUri?: string | null;
    /**
     * URI of the author of the Photo or Review.
     */
    uri?: string | null;
  }
  /**
   * Request proto for AutocompletePlaces.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesRequest {
    /**
     * Optional. Included primary Place type (for example, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. A Place is only returned if its primary type is included in this list. Up to 5 values can be specified. If no types are specified, all Place types are returned.
     */
    includedPrimaryTypes?: string[] | null;
    /**
     * Optional. Only include results in the specified regions, specified as up to 15 CLDR two-character region codes. An empty set will not restrict the results. If both `location_restriction` and `included_region_codes` are set, the results will be located in the area of intersection.
     */
    includedRegionCodes?: string[] | null;
    /**
     * Optional. If true, the response will include both Place and query predictions. Otherwise the response will only return Place predictions.
     */
    includeQueryPredictions?: boolean | null;
    /**
     * Required. The text string on which to search.
     */
    input?: string | null;
    /**
     * Optional. A zero-based Unicode character offset of `input` indicating the cursor position in `input`. The cursor position may influence what predictions are returned. If empty, defaults to the length of `input`.
     */
    inputOffset?: number | null;
    /**
     * Optional. The language in which to return results. Defaults to en-US. The results may be in mixed languages if the language used in `input` is different from `language_code` or if the returned Place does not have a translation from the local language to `language_code`.
     */
    languageCode?: string | null;
    /**
     * Optional. Bias results to a specified location. At most one of `location_bias` or `location_restriction` should be set. If neither are set, the results will be biased by IP address, meaning the IP address will be mapped to an imprecise location and used as a biasing signal.
     */
    locationBias?: Schema$GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias;
    /**
     * Optional. Restrict results to a specified location. At most one of `location_bias` or `location_restriction` should be set. If neither are set, the results will be biased by IP address, meaning the IP address will be mapped to an imprecise location and used as a biasing signal.
     */
    locationRestriction?: Schema$GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction;
    /**
     * Optional. The origin point from which to calculate geodesic distance to the destination (returned as `distance_meters`). If this value is omitted, geodesic distance will not be returned.
     */
    origin?: Schema$GoogleTypeLatLng;
    /**
     * Optional. The region code, specified as a CLDR two-character region code. This affects address formatting, result ranking, and may influence what results are returned. This does not restrict results to the specified region. To restrict results to a region, use `region_code_restriction`.
     */
    regionCode?: string | null;
    /**
     * Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned. The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `session_token` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately). We recommend the following guidelines: * Use session tokens for all Place Autocomplete calls. * Generate a fresh token for each session. Using a version 4 UUID is recommended. * Ensure that the credentials used for all Place Autocomplete, Place Details, and Address Validation requests within a session belong to the same Cloud Console project. * Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually.
     */
    sessionToken?: string | null;
  }
  /**
   * The region to search. The results may be biased around the specified region.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias {
    /**
     * A circle defined by a center point and radius.
     */
    circle?: Schema$GoogleMapsPlacesV1Circle;
    /**
     * A viewport defined by a northeast and a southwest corner.
     */
    rectangle?: Schema$GoogleGeoTypeViewport;
  }
  /**
   * The region to search. The results will be restricted to the specified region.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction {
    /**
     * A circle defined by a center point and radius.
     */
    circle?: Schema$GoogleMapsPlacesV1Circle;
    /**
     * A viewport defined by a northeast and a southwest corner.
     */
    rectangle?: Schema$GoogleGeoTypeViewport;
  }
  /**
   * Response proto for AutocompletePlaces.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesResponse {
    /**
     * Contains a list of suggestions, ordered in descending order of relevance.
     */
    suggestions?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion[];
  }
  /**
   * An Autocomplete suggestion result.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion {
    /**
     * A prediction for a Place.
     */
    placePrediction?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction;
    /**
     * A prediction for a query.
     */
    queryPrediction?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction;
  }
  /**
   * Text representing a Place or query prediction. The text may be used as is or formatted.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText {
    /**
     * A list of string ranges identifying where the input request matched in `text`. The ranges can be used to format specific parts of `text`. The substrings may not be exact matches of `input` if the matching was determined by criteria other than string matching (for example, spell corrections or transliterations). These values are Unicode character offsets of `text`. The ranges are guaranteed to be ordered in increasing offset values.
     */
    matches?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange[];
    /**
     * Text that may be used as is or formatted with `matches`.
     */
    text?: string | null;
  }
  /**
   * Prediction results for a Place Autocomplete prediction.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction {
    /**
     * The length of the geodesic in meters from `origin` if `origin` is specified. Certain predictions such as routes may not populate this field.
     */
    distanceMeters?: number | null;
    /**
     * The resource name of the suggested Place. This name can be used in other APIs that accept Place names.
     */
    place?: string | null;
    /**
     * The unique identifier of the suggested Place. This identifier can be used in other APIs that accept Place IDs.
     */
    placeId?: string | null;
    /**
     * A breakdown of the Place prediction into main text containing the name of the Place and secondary text containing additional disambiguating features (such as a city or region). `structured_format` is recommended for developers who wish to show two separate, but related, UI elements. Developers who wish to show a single UI element may want to use `text` instead. They are two different ways to represent a Place prediction. Users should not try to parse `structured_format` into `text` or vice versa.
     */
    structuredFormat?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat;
    /**
     * Contains the human-readable name for the returned result. For establishment results, this is usually the business name and address. `text` is recommended for developers who wish to show a single UI element. Developers who wish to show two separate, but related, UI elements may want to use `structured_format` instead. They are two different ways to represent a Place prediction. Users should not try to parse `structured_format` into `text` or vice versa. This text may be different from the `display_name` returned by GetPlace. May be in mixed languages if the request `input` and `language_code` are in different languages or if the Place does not have a translation from the local language to `language_code`.
     */
    text?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText;
    /**
     * List of types that apply to this Place from Table A or Table B in https://developers.google.com/maps/documentation/places/web-service/place-types. A type is a categorization of a Place. Places with shared types will share similar characteristics.
     */
    types?: string[] | null;
  }
  /**
   * Prediction results for a Query Autocomplete prediction.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction {
    /**
     * A breakdown of the query prediction into main text containing the query and secondary text containing additional disambiguating features (such as a city or region). `structured_format` is recommended for developers who wish to show two separate, but related, UI elements. Developers who wish to show a single UI element may want to use `text` instead. They are two different ways to represent a query prediction. Users should not try to parse `structured_format` into `text` or vice versa.
     */
    structuredFormat?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat;
    /**
     * The predicted text. This text does not represent a Place, but rather a text query that could be used in a search endpoint (for example, TextSearch). `text` is recommended for developers who wish to show a single UI element. Developers who wish to show two separate, but related, UI elements may want to use `structured_format` instead. They are two different ways to represent a query prediction. Users should not try to parse `structured_format` into `text` or vice versa. May be in mixed languages if the request `input` and `language_code` are in different languages or if part of the query does not have a translation from the local language to `language_code`.
     */
    text?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText;
  }
  /**
   * Identifies a substring within a given text.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange {
    /**
     * Zero-based offset of the last Unicode character (exclusive).
     */
    endOffset?: number | null;
    /**
     * Zero-based offset of the first Unicode character of the string (inclusive).
     */
    startOffset?: number | null;
  }
  /**
   * Contains a breakdown of a Place or query prediction into main text and secondary text. For Place predictions, the main text contains the specific name of the Place. For query predictions, the main text contains the query. The secondary text contains additional disambiguating features (such as a city or region) to further identify the Place or refine the query.
   */
  export interface Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat {
    /**
     * Represents the name of the Place or query.
     */
    mainText?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText;
    /**
     * Represents additional disambiguating features (such as a city or region) to further identify the Place or refine the query.
     */
    secondaryText?: Schema$GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText;
  }
  /**
   * Circle with a LatLng as center and radius.
   */
  export interface Schema$GoogleMapsPlacesV1Circle {
    /**
     * Required. Center latitude and longitude. The range of latitude must be within [-90.0, 90.0]. The range of the longitude must be within [-180.0, 180.0].
     */
    center?: Schema$GoogleTypeLatLng;
    /**
     * Required. Radius measured in meters. The radius must be within [0.0, 50000.0].
     */
    radius?: number | null;
  }
  /**
   * Information about the EV Charge Station hosted in Place. Terminology follows https://afdc.energy.gov/fuels/electricity_infrastructure.html One port could charge one car at a time. One port has one or more connectors. One station has one or more ports.
   */
  export interface Schema$GoogleMapsPlacesV1EVChargeOptions {
    /**
     * A list of EV charging connector aggregations that contain connectors of the same type and same charge rate.
     */
    connectorAggregation?: Schema$GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation[];
    /**
     * Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously.
     */
    connectorCount?: number | null;
  }
  /**
   * EV charging information grouped by [type, max_charge_rate_kw]. Shows EV charge aggregation of connectors that have the same type and max charge rate in kw.
   */
  export interface Schema$GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation {
    /**
     * The timestamp when the connector availability information in this aggregation was last updated.
     */
    availabilityLastUpdateTime?: string | null;
    /**
     * Number of connectors in this aggregation that are currently available.
     */
    availableCount?: number | null;
    /**
     * Number of connectors in this aggregation.
     */
    count?: number | null;
    /**
     * The static max charging rate in kw of each connector in the aggregation.
     */
    maxChargeRateKw?: number | null;
    /**
     * Number of connectors in this aggregation that are currently out of service.
     */
    outOfServiceCount?: number | null;
    /**
     * The connector type of this aggregation.
     */
    type?: string | null;
  }
  /**
   * The most recent information about fuel options in a gas station. This information is updated regularly.
   */
  export interface Schema$GoogleMapsPlacesV1FuelOptions {
    /**
     * The last known fuel price for each type of fuel this station has. There is one entry per fuel type this station has. Order is not important.
     */
    fuelPrices?: Schema$GoogleMapsPlacesV1FuelOptionsFuelPrice[];
  }
  /**
   * Fuel price information for a given type.
   */
  export interface Schema$GoogleMapsPlacesV1FuelOptionsFuelPrice {
    /**
     * The price of the fuel.
     */
    price?: Schema$GoogleTypeMoney;
    /**
     * The type of fuel.
     */
    type?: string | null;
    /**
     * The time the fuel price was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Information about a photo of a place.
   */
  export interface Schema$GoogleMapsPlacesV1Photo {
    /**
     * This photo's authors.
     */
    authorAttributions?: Schema$GoogleMapsPlacesV1AuthorAttribution[];
    /**
     * The maximum available height, in pixels.
     */
    heightPx?: number | null;
    /**
     * Identifier. A reference representing this place photo which may be used to look up this place photo again (also called the API "resource" name: `places/{place_id\}/photos/{photo\}`).
     */
    name?: string | null;
    /**
     * The maximum available width, in pixels.
     */
    widthPx?: number | null;
  }
  /**
   * A photo media from Places API.
   */
  export interface Schema$GoogleMapsPlacesV1PhotoMedia {
    /**
     * The resource name of a photo media in the format: `places/{place_id\}/photos/{photo_reference\}/media`.
     */
    name?: string | null;
    /**
     * A short-lived uri that can be used to render the photo.
     */
    photoUri?: string | null;
  }
  /**
   * All the information representing a Place.
   */
  export interface Schema$GoogleMapsPlacesV1Place {
    /**
     * Information about the accessibility options a place offers.
     */
    accessibilityOptions?: Schema$GoogleMapsPlacesV1PlaceAccessibilityOptions;
    /**
     * Repeated components for each locality level. Note the following facts about the address_components[] array: - The array of address components may contain more components than the formatted_address. - The array does not necessarily include all the political entities that contain an address, apart from those included in the formatted_address. To retrieve all the political entities that contain a specific address, you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request. - The format of the response is not guaranteed to remain the same between requests. In particular, the number of address_components varies based on the address requested and can change over time for the same address. A component can change position in the array. The type of the component can change. A particular component may be missing in a later response.
     */
    addressComponents?: Schema$GoogleMapsPlacesV1PlaceAddressComponent[];
    /**
     * The place's address in adr microformat: http://microformats.org/wiki/adr.
     */
    adrFormatAddress?: string | null;
    /**
     * Place allows dogs.
     */
    allowsDogs?: boolean | null;
    /**
     * A set of data provider that must be shown with this result.
     */
    attributions?: Schema$GoogleMapsPlacesV1PlaceAttribution[];
    /**
     * The business status for the place.
     */
    businessStatus?: string | null;
    /**
     * Specifies if the business supports curbside pickup.
     */
    curbsidePickup?: boolean | null;
    /**
     * The hours of operation for the next seven days (including today). The time period starts at midnight on the date of the request and ends at 11:59 pm six days later. This field includes the special_days subfield of all hours, set for dates that have exceptional hours.
     */
    currentOpeningHours?: Schema$GoogleMapsPlacesV1PlaceOpeningHours;
    /**
     * Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. This field includes the special_days subfield of all hours, set for dates that have exceptional hours.
     */
    currentSecondaryOpeningHours?: Schema$GoogleMapsPlacesV1PlaceOpeningHours[];
    /**
     * Specifies if the business supports delivery.
     */
    delivery?: boolean | null;
    /**
     * Specifies if the business supports indoor or outdoor seating options.
     */
    dineIn?: boolean | null;
    /**
     * The localized name of the place, suitable as a short human-readable description. For example, "Google Sydney", "Starbucks", "Pyrmont", etc.
     */
    displayName?: Schema$GoogleTypeLocalizedText;
    /**
     * Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered.
     */
    editorialSummary?: Schema$GoogleTypeLocalizedText;
    /**
     * Information of ev charging options.
     */
    evChargeOptions?: Schema$GoogleMapsPlacesV1EVChargeOptions;
    /**
     * A full, human-readable address for this place.
     */
    formattedAddress?: string | null;
    /**
     * The most recent information about fuel options in a gas station. This information is updated regularly.
     */
    fuelOptions?: Schema$GoogleMapsPlacesV1FuelOptions;
    /**
     * Place is good for children.
     */
    goodForChildren?: boolean | null;
    /**
     * Place accommodates groups.
     */
    goodForGroups?: boolean | null;
    /**
     * Place is suitable for watching sports.
     */
    goodForWatchingSports?: boolean | null;
    /**
     * A URL providing more information about this place.
     */
    googleMapsUri?: string | null;
    /**
     * Background color for icon_mask in hex format, e.g. #909CE1.
     */
    iconBackgroundColor?: string | null;
    /**
     * A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png").
     */
    iconMaskBaseUri?: string | null;
    /**
     * The unique identifier of a place.
     */
    id?: string | null;
    /**
     * A human-readable phone number for the place, in international format.
     */
    internationalPhoneNumber?: string | null;
    /**
     * Place provides live music.
     */
    liveMusic?: boolean | null;
    /**
     * The position of this place.
     */
    location?: Schema$GoogleTypeLatLng;
    /**
     * Place has a children's menu.
     */
    menuForChildren?: boolean | null;
    /**
     * This Place's resource name, in `places/{place_id\}` format. Can be used to look up the Place.
     */
    name?: string | null;
    /**
     * A human-readable phone number for the place, in national format.
     */
    nationalPhoneNumber?: string | null;
    /**
     * Place provides outdoor seating.
     */
    outdoorSeating?: boolean | null;
    /**
     * Options of parking provided by the place.
     */
    parkingOptions?: Schema$GoogleMapsPlacesV1PlaceParkingOptions;
    /**
     * Payment options the place accepts. If a payment option data is not available, the payment option field will be unset.
     */
    paymentOptions?: Schema$GoogleMapsPlacesV1PlacePaymentOptions;
    /**
     * Information (including references) about photos of this place. A maximum of 10 photos can be returned.
     */
    photos?: Schema$GoogleMapsPlacesV1Photo[];
    /**
     * Plus code of the place location lat/long.
     */
    plusCode?: Schema$GoogleMapsPlacesV1PlacePlusCode;
    /**
     * Price level of the place.
     */
    priceLevel?: string | null;
    /**
     * The primary type of the given result. This type must one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types
     */
    primaryType?: string | null;
    /**
     * The display name of the primary type, localized to the request language if applicable. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types
     */
    primaryTypeDisplayName?: Schema$GoogleTypeLocalizedText;
    /**
     * A rating between 1.0 and 5.0, based on user reviews of this place.
     */
    rating?: number | null;
    /**
     * The regular hours of operation.
     */
    regularOpeningHours?: Schema$GoogleMapsPlacesV1PlaceOpeningHours;
    /**
     * Contains an array of entries for information about regular secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place.
     */
    regularSecondaryOpeningHours?: Schema$GoogleMapsPlacesV1PlaceOpeningHours[];
    /**
     * Specifies if the place supports reservations.
     */
    reservable?: boolean | null;
    /**
     * Place has restroom.
     */
    restroom?: boolean | null;
    /**
     * List of reviews about this place, sorted by relevance. A maximum of 5 reviews can be returned.
     */
    reviews?: Schema$GoogleMapsPlacesV1Review[];
    /**
     * Specifies if the place serves beer.
     */
    servesBeer?: boolean | null;
    /**
     * Specifies if the place serves breakfast.
     */
    servesBreakfast?: boolean | null;
    /**
     * Specifies if the place serves brunch.
     */
    servesBrunch?: boolean | null;
    /**
     * Place serves cocktails.
     */
    servesCocktails?: boolean | null;
    /**
     * Place serves coffee.
     */
    servesCoffee?: boolean | null;
    /**
     * Place serves dessert.
     */
    servesDessert?: boolean | null;
    /**
     * Specifies if the place serves dinner.
     */
    servesDinner?: boolean | null;
    /**
     * Specifies if the place serves lunch.
     */
    servesLunch?: boolean | null;
    /**
     * Specifies if the place serves vegetarian food.
     */
    servesVegetarianFood?: boolean | null;
    /**
     * Specifies if the place serves wine.
     */
    servesWine?: boolean | null;
    /**
     * A short, human-readable address for this place.
     */
    shortFormattedAddress?: string | null;
    /**
     * A list of sub destinations related to the place.
     */
    subDestinations?: Schema$GoogleMapsPlacesV1PlaceSubDestination[];
    /**
     * Specifies if the business supports takeout.
     */
    takeout?: boolean | null;
    /**
     * A set of type tags for this result. For example, "political" and "locality". For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types
     */
    types?: string[] | null;
    /**
     * The total number of reviews (with or without text) for this place.
     */
    userRatingCount?: number | null;
    /**
     * Number of minutes this place's timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes.
     */
    utcOffsetMinutes?: number | null;
    /**
     * A viewport suitable for displaying the place on an average-sized map.
     */
    viewport?: Schema$GoogleGeoTypeViewport;
    /**
     * The authoritative website for this place, e.g. a business' homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain.
     */
    websiteUri?: string | null;
  }
  /**
   * Information about the accessibility options a place offers.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceAccessibilityOptions {
    /**
     * Places has wheelchair accessible entrance.
     */
    wheelchairAccessibleEntrance?: boolean | null;
    /**
     * Place offers wheelchair accessible parking.
     */
    wheelchairAccessibleParking?: boolean | null;
    /**
     * Place has wheelchair accessible restroom.
     */
    wheelchairAccessibleRestroom?: boolean | null;
    /**
     * Place has wheelchair accessible seating.
     */
    wheelchairAccessibleSeating?: boolean | null;
  }
  /**
   * The structured components that form the formatted address, if this information is available.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceAddressComponent {
    /**
     * The language used to format this components, in CLDR notation.
     */
    languageCode?: string | null;
    /**
     * The full text description or name of the address component. For example, an address component for the country Australia may have a long_name of "Australia".
     */
    longText?: string | null;
    /**
     * An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short_name of "AU".
     */
    shortText?: string | null;
    /**
     * An array indicating the type(s) of the address component.
     */
    types?: string[] | null;
  }
  /**
   * Information about data providers of this place.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceAttribution {
    /**
     * Name of the Place's data provider.
     */
    provider?: string | null;
    /**
     * URI to the Place's data provider.
     */
    providerUri?: string | null;
  }
  /**
   * Information about business hour of the place.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHours {
    /**
     * Is this place open right now? Always present unless we lack time-of-day or timezone data for these opening hours.
     */
    openNow?: boolean | null;
    /**
     * The periods that this place is open during the week. The periods are in chronological order, starting with Sunday in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations.
     */
    periods?: Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriod[];
    /**
     * A type string used to identify the type of secondary hours.
     */
    secondaryHoursType?: string | null;
    /**
     * Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. Set for current_opening_hours and current_secondary_opening_hours if there are exceptional hours.
     */
    specialDays?: Schema$GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay[];
    /**
     * Localized strings describing the opening hours of this place, one string for each day of the week. Will be empty if the hours are unknown or could not be converted to localized text. Example: "Sun: 18:00–06:00"
     */
    weekdayDescriptions?: string[] | null;
  }
  /**
   * A period the place remains in open_now status.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriod {
    /**
     * The time that the place starts to be closed.
     */
    close?: Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint;
    /**
     * The time that the place starts to be open.
     */
    open?: Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint;
  }
  /**
   * Status changing points.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint {
    /**
     * Date in the local timezone for the place.
     */
    date?: Schema$GoogleTypeDate;
    /**
     * A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc.
     */
    day?: number | null;
    /**
     * The hour in 2 digits. Ranges from 00 to 23.
     */
    hour?: number | null;
    /**
     * The minute in 2 digits. Ranges from 00 to 59.
     */
    minute?: number | null;
    /**
     * Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 * 7 hours from midnight of the day of the request are returned.
     */
    truncated?: boolean | null;
  }
  /**
   * Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay {
    /**
     * The date of this special day.
     */
    date?: Schema$GoogleTypeDate;
  }
  /**
   * Information about parking options for the place. A parking lot could support more than one option at the same time.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceParkingOptions {
    /**
     * Place offers free garage parking.
     */
    freeGarageParking?: boolean | null;
    /**
     * Place offers free parking lots.
     */
    freeParkingLot?: boolean | null;
    /**
     * Place offers free street parking.
     */
    freeStreetParking?: boolean | null;
    /**
     * Place offers paid garage parking.
     */
    paidGarageParking?: boolean | null;
    /**
     * Place offers paid parking lots.
     */
    paidParkingLot?: boolean | null;
    /**
     * Place offers paid street parking.
     */
    paidStreetParking?: boolean | null;
    /**
     * Place offers valet parking.
     */
    valetParking?: boolean | null;
  }
  /**
   * Payment options the place accepts.
   */
  export interface Schema$GoogleMapsPlacesV1PlacePaymentOptions {
    /**
     * Place accepts cash only as payment. Places with this attribute may still accept other payment methods.
     */
    acceptsCashOnly?: boolean | null;
    /**
     * Place accepts credit cards as payment.
     */
    acceptsCreditCards?: boolean | null;
    /**
     * Place accepts debit cards as payment.
     */
    acceptsDebitCards?: boolean | null;
    /**
     * Place accepts NFC payments.
     */
    acceptsNfc?: boolean | null;
  }
  /**
   * Plus code (http://plus.codes) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location.
   */
  export interface Schema$GoogleMapsPlacesV1PlacePlusCode {
    /**
     * Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity.
     */
    compoundCode?: string | null;
    /**
     * Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters).
     */
    globalCode?: string | null;
  }
  /**
   * Place resource name and id of sub destinations that relate to the place. For example, different terminals are different destinations of an airport.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceSubDestination {
    /**
     * The place id of the sub destination.
     */
    id?: string | null;
    /**
     * The resource name of the sub destination.
     */
    name?: string | null;
  }
  /**
   * Information about a review of a place.
   */
  export interface Schema$GoogleMapsPlacesV1Review {
    /**
     * This review's author.
     */
    authorAttribution?: Schema$GoogleMapsPlacesV1AuthorAttribution;
    /**
     * A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: `places/{place_id\}/reviews/{review\}`).
     */
    name?: string | null;
    /**
     * The review text in its original language.
     */
    originalText?: Schema$GoogleTypeLocalizedText;
    /**
     * Timestamp for the review.
     */
    publishTime?: string | null;
    /**
     * A number between 1.0 and 5.0, also called the number of stars.
     */
    rating?: number | null;
    /**
     * A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country.
     */
    relativePublishTimeDescription?: string | null;
    /**
     * The localized text of the review.
     */
    text?: Schema$GoogleTypeLocalizedText;
  }
  /**
   * Request proto for Search Nearby.
   */
  export interface Schema$GoogleMapsPlacesV1SearchNearbyRequest {
    /**
     * Excluded primary Place type (e.g. "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting primary types, i.e. a type appears in both included_primary_types and excluded_primary_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]\}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants".
     */
    excludedPrimaryTypes?: string[] | null;
    /**
     * Excluded Place type (eg, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If the client provides both included_types (e.g. restaurant) and excluded_types (e.g. cafe), then the response should include places that are restaurant but not cafe. The response includes places that match at least one of the included_types and none of the excluded_types. If there are any conflicting types, i.e. a type appears in both included_types and excluded_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]\}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants".
     */
    excludedTypes?: string[] | null;
    /**
     * Included primary Place type (e.g. "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. A place can only have a single primary type from the supported types table associated with it. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting primary types, i.e. a type appears in both included_primary_types and excluded_primary_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]\}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants".
     */
    includedPrimaryTypes?: string[] | null;
    /**
     * Included Place type (eg, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting types, i.e. a type appears in both included_types and excluded_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]\}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants".
     */
    includedTypes?: string[] | null;
    /**
     * Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport.
     */
    languageCode?: string | null;
    /**
     * Required. The region to search.
     */
    locationRestriction?: Schema$GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction;
    /**
     * Maximum number of results to return. It must be between 1 and 20 (default), inclusively. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned.
     */
    maxResultCount?: number | null;
    /**
     * How results will be ranked in the response.
     */
    rankPreference?: string | null;
    /**
     * The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported.
     */
    regionCode?: string | null;
  }
  /**
   * The region to search.
   */
  export interface Schema$GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction {
    /**
     * A circle defined by center point and radius.
     */
    circle?: Schema$GoogleMapsPlacesV1Circle;
  }
  /**
   * Response proto for Search Nearby.
   */
  export interface Schema$GoogleMapsPlacesV1SearchNearbyResponse {
    /**
     * A list of places that meets user's requirements like places types, number of places and specific location restriction.
     */
    places?: Schema$GoogleMapsPlacesV1Place[];
  }
  /**
   * Request proto for SearchText.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextRequest {
    /**
     * Optional. Set the searchable EV options of a place search request.
     */
    evOptions?: Schema$GoogleMapsPlacesV1SearchTextRequestEVOptions;
    /**
     * The requested place type. Full list of types supported: https://developers.google.com/maps/documentation/places/web-service/place-types. Only support one included type.
     */
    includedType?: string | null;
    /**
     * Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport.
     */
    languageCode?: string | null;
    /**
     * The region to search. This location serves as a bias which means results around given location might be returned. Cannot be set along with location_restriction.
     */
    locationBias?: Schema$GoogleMapsPlacesV1SearchTextRequestLocationBias;
    /**
     * The region to search. This location serves as a restriction which means results outside given location will not be returned. Cannot be set along with location_bias.
     */
    locationRestriction?: Schema$GoogleMapsPlacesV1SearchTextRequestLocationRestriction;
    /**
     * Maximum number of results to return. It must be between 1 and 20, inclusively. The default is 20. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned.
     */
    maxResultCount?: number | null;
    /**
     * Filter out results whose average user rating is strictly less than this limit. A valid value must be a float between 0 and 5 (inclusively) at a 0.5 cadence i.e. [0, 0.5, 1.0, ... , 5.0] inclusively. The input rating will round up to the nearest 0.5(ceiling). For instance, a rating of 0.6 will eliminate all results with a less than 1.0 rating.
     */
    minRating?: number | null;
    /**
     * Used to restrict the search to places that are currently open. The default is false.
     */
    openNow?: boolean | null;
    /**
     * Used to restrict the search to places that are marked as certain price levels. Users can choose any combinations of price levels. Default to select all price levels.
     */
    priceLevels?: string[] | null;
    /**
     * How results will be ranked in the response.
     */
    rankPreference?: string | null;
    /**
     * The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported.
     */
    regionCode?: string | null;
    /**
     * Used to set strict type filtering for included_type. If set to true, only results of the same type will be returned. Default to false.
     */
    strictTypeFiltering?: boolean | null;
    /**
     * Required. The text query for textual search.
     */
    textQuery?: string | null;
  }
  /**
   * Searchable EV options of a place search request.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextRequestEVOptions {
    /**
     * Optional. The list of preferred EV connector types. A place that does not support any of the listed connector types are filter out.
     */
    connectorTypes?: string[] | null;
    /**
     * Optional. Filtering places by minimum charging rate. Any places with charging a rate less than the minimum charging rate are filtered out.
     */
    minimumChargingRateKw?: number | null;
  }
  /**
   * The region to search. This location serves as a bias which means results around given location might be returned.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextRequestLocationBias {
    /**
     * A circle defined by center point and radius.
     */
    circle?: Schema$GoogleMapsPlacesV1Circle;
    /**
     * A rectangle box defined by northeast and southwest corner. `rectangle.high()` must be the northeast point of the rectangle viewport. `rectangle.low()` must be the southwest point of the rectangle viewport. `rectangle.low().latitude()` cannot be greater than `rectangle.high().latitude()`. This will result in an empty latitude range. A rectangle viewport cannot be wider than 180 degrees.
     */
    rectangle?: Schema$GoogleGeoTypeViewport;
  }
  /**
   * The region to search. This location serves as a restriction which means results outside given location will not be returned.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextRequestLocationRestriction {
    /**
     * A rectangle box defined by northeast and southwest corner. `rectangle.high()` must be the northeast point of the rectangle viewport. `rectangle.low()` must be the southwest point of the rectangle viewport. `rectangle.low().latitude()` cannot be greater than `rectangle.high().latitude()`. This will result in an empty latitude range. A rectangle viewport cannot be wider than 180 degrees.
     */
    rectangle?: Schema$GoogleGeoTypeViewport;
  }
  /**
   * Response proto for SearchText.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextResponse {
    /**
     * A list of places that meet the user's text search criteria.
     */
    places?: Schema$GoogleMapsPlacesV1Place[];
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$GoogleTypeDate {
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
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$GoogleTypeLatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * Localized variant of a text in a particular language.
   */
  export interface Schema$GoogleTypeLocalizedText {
    /**
     * The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Localized string in the language corresponding to language_code below.
     */
    text?: string | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$GoogleTypeMoney {
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

  export class Resource$Places {
    context: APIRequestContext;
    photos: Resource$Places$Photos;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.photos = new Resource$Places$Photos(this.context);
    }

    /**
     * Returns predictions for the given input.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    autocomplete(
      params: Params$Resource$Places$Autocomplete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    autocomplete(
      params?: Params$Resource$Places$Autocomplete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>;
    autocomplete(
      params: Params$Resource$Places$Autocomplete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    autocomplete(
      params: Params$Resource$Places$Autocomplete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
    ): void;
    autocomplete(
      params: Params$Resource$Places$Autocomplete,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
    ): void;
    autocomplete(
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
    ): void;
    autocomplete(
      paramsOrCallback?:
        | Params$Resource$Places$Autocomplete
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Places$Autocomplete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Places$Autocomplete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://places.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/places:autocomplete').replace(
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
        createAPIRequest<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>(
          parameters
        );
      }
    }

    /**
     * Get the details of a place based on its resource name, which is a string in the `places/{place_id\}` format.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Places$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Places$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleMapsPlacesV1Place>;
    get(
      params: Params$Resource$Places$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Places$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1Place>,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1Place>
    ): void;
    get(
      params: Params$Resource$Places$Get,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1Place>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1Place>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Places$Get
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1Place>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1Place>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1Place>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleMapsPlacesV1Place>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Places$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Places$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://places.googleapis.com/';
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
        createAPIRequest<Schema$GoogleMapsPlacesV1Place>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleMapsPlacesV1Place>(parameters);
      }
    }

    /**
     * Search for places near locations.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchNearby(
      params: Params$Resource$Places$Searchnearby,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchNearby(
      params?: Params$Resource$Places$Searchnearby,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleMapsPlacesV1SearchNearbyResponse>;
    searchNearby(
      params: Params$Resource$Places$Searchnearby,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchNearby(
      params: Params$Resource$Places$Searchnearby,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchNearbyResponse>,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
    ): void;
    searchNearby(
      params: Params$Resource$Places$Searchnearby,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
    ): void;
    searchNearby(
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
    ): void;
    searchNearby(
      paramsOrCallback?:
        | Params$Resource$Places$Searchnearby
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Places$Searchnearby;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Places$Searchnearby;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://places.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/places:searchNearby').replace(
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
        createAPIRequest<Schema$GoogleMapsPlacesV1SearchNearbyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleMapsPlacesV1SearchNearbyResponse>(
          parameters
        );
      }
    }

    /**
     * Text query based place search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchText(
      params: Params$Resource$Places$Searchtext,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchText(
      params?: Params$Resource$Places$Searchtext,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleMapsPlacesV1SearchTextResponse>;
    searchText(
      params: Params$Resource$Places$Searchtext,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchText(
      params: Params$Resource$Places$Searchtext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
    ): void;
    searchText(
      params: Params$Resource$Places$Searchtext,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
    ): void;
    searchText(
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
    ): void;
    searchText(
      paramsOrCallback?:
        | Params$Resource$Places$Searchtext
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleMapsPlacesV1SearchTextResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Places$Searchtext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Places$Searchtext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://places.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/places:searchText').replace(
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
        createAPIRequest<Schema$GoogleMapsPlacesV1SearchTextResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleMapsPlacesV1SearchTextResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Places$Autocomplete
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleMapsPlacesV1AutocompletePlacesRequest;
  }
  export interface Params$Resource$Places$Get extends StandardParameters {
    /**
     * Optional. Place details will be displayed with the preferred language if available. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport.
     */
    languageCode?: string;
    /**
     * Required. The resource name of a place, in the `places/{place_id\}` format.
     */
    name?: string;
    /**
     * Optional. The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported.
     */
    regionCode?: string;
    /**
     * Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned. The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `session_token` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately). We recommend the following guidelines: * Use session tokens for all Place Autocomplete calls. * Generate a fresh token for each session. Using a version 4 UUID is recommended. * Ensure that the credentials used for all Place Autocomplete, Place Details, and Address Validation requests within a session belong to the same Cloud Console project. * Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually.
     */
    sessionToken?: string;
  }
  export interface Params$Resource$Places$Searchnearby
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleMapsPlacesV1SearchNearbyRequest;
  }
  export interface Params$Resource$Places$Searchtext
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleMapsPlacesV1SearchTextRequest;
  }

  export class Resource$Places$Photos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a photo media with a photo reference string.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getMedia(
      params: Params$Resource$Places$Photos$Getmedia,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getMedia(
      params?: Params$Resource$Places$Photos$Getmedia,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleMapsPlacesV1PhotoMedia>;
    getMedia(
      params: Params$Resource$Places$Photos$Getmedia,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMedia(
      params: Params$Resource$Places$Photos$Getmedia,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1PhotoMedia>,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1PhotoMedia>
    ): void;
    getMedia(
      params: Params$Resource$Places$Photos$Getmedia,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1PhotoMedia>
    ): void;
    getMedia(
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1PhotoMedia>
    ): void;
    getMedia(
      paramsOrCallback?:
        | Params$Resource$Places$Photos$Getmedia
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1PhotoMedia>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1PhotoMedia>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1PhotoMedia>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleMapsPlacesV1PhotoMedia>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Places$Photos$Getmedia;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Places$Photos$Getmedia;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://places.googleapis.com/';
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
        createAPIRequest<Schema$GoogleMapsPlacesV1PhotoMedia>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleMapsPlacesV1PhotoMedia>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Places$Photos$Getmedia
    extends StandardParameters {
    /**
     * Optional. Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the max_height_px and max_width_px properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned. At least one of max_height_px or max_width_px needs to be specified. If neither max_height_px nor max_width_px is specified, an INVALID_ARGUMENT error will be returned.
     */
    maxHeightPx?: number;
    /**
     * Optional. Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the max_height_px and max_width_px properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned. At least one of max_height_px or max_width_px needs to be specified. If neither max_height_px nor max_width_px is specified, an INVALID_ARGUMENT error will be returned.
     */
    maxWidthPx?: number;
    /**
     * Required. The resource name of a photo media in the format: `places/{place_id\}/photos/{photo_reference\}/media`. The resource name of a photo as returned in a Place object's `photos.name` field comes with the format `places/{place_id\}/photos/{photo_reference\}`. You need to append `/media` at the end of the photo resource to get the photo media resource name.
     */
    name?: string;
    /**
     * Optional. If set, skip the default HTTP redirect behavior and render a text format (for example, in JSON format for HTTP use case) response. If not set, an HTTP redirect will be issued to redirect the call to the image media. This option is ignored for non-HTTP requests.
     */
    skipHttpRedirect?: boolean;
  }
}
