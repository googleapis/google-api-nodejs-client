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
   * A relational description of a location. Includes a ranked set of nearby landmarks and precise containing areas and their relationship to the target location.
   */
  export interface Schema$GoogleMapsPlacesV1AddressDescriptor {
    /**
     * A ranked list of containing or adjacent areas. The most recognizable and precise areas are ranked first.
     */
    areas?: Schema$GoogleMapsPlacesV1AddressDescriptorArea[];
    /**
     * A ranked list of nearby landmarks. The most recognizable and nearby landmarks are ranked first.
     */
    landmarks?: Schema$GoogleMapsPlacesV1AddressDescriptorLandmark[];
  }
  /**
   * Area information and the area's relationship with the target location. Areas includes precise sublocality, neighborhoods, and large compounds that are useful for describing a location.
   */
  export interface Schema$GoogleMapsPlacesV1AddressDescriptorArea {
    /**
     * Defines the spatial relationship between the target location and the area.
     */
    containment?: string | null;
    /**
     * The area's display name.
     */
    displayName?: Schema$GoogleTypeLocalizedText;
    /**
     * The area's resource name.
     */
    name?: string | null;
    /**
     * The area's place id.
     */
    placeId?: string | null;
  }
  /**
   * Basic landmark information and the landmark's relationship with the target location. Landmarks are prominent places that can be used to describe a location.
   */
  export interface Schema$GoogleMapsPlacesV1AddressDescriptorLandmark {
    /**
     * The landmark's display name.
     */
    displayName?: Schema$GoogleTypeLocalizedText;
    /**
     * The landmark's resource name.
     */
    name?: string | null;
    /**
     * The landmark's place id.
     */
    placeId?: string | null;
    /**
     * Defines the spatial relationship between the target location and the landmark.
     */
    spatialRelationship?: string | null;
    /**
     * The straight line distance, in meters, between the center point of the target and the center point of the landmark. In some situations, this value can be longer than `travel_distance_meters`.
     */
    straightLineDistanceMeters?: number | null;
    /**
     * The travel distance, in meters, along the road network from the target to the landmark, if known. This value does not take into account the mode of transportation, such as walking, driving, or biking.
     */
    travelDistanceMeters?: number | null;
    /**
     * A set of type tags for this landmark. For a complete list of possible values, see https://developers.google.com/maps/documentation/places/web-service/place-types.
     */
    types?: string[] | null;
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
     * Optional. Included primary Place type (for example, "restaurant" or "gas_station") in Place Types (https://developers.google.com/maps/documentation/places/web-service/place-types), or only `(regions)`, or only `(cities)`. A Place is only returned if its primary type is included in this list. Up to 5 values can be specified. If no types are specified, all Place types are returned.
     */
    includedPrimaryTypes?: string[] | null;
    /**
     * Optional. Only include results in the specified regions, specified as up to 15 CLDR two-character region codes. An empty set will not restrict the results. If both `location_restriction` and `included_region_codes` are set, the results will be located in the area of intersection.
     */
    includedRegionCodes?: string[] | null;
    /**
     * Optional. Include pure service area businesses if the field is set to true. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses do not have a physical address or location on Google Maps. Places will not return fields including `location`, `plus_code`, and other location related fields for these businesses.
     */
    includePureServiceAreaBusinesses?: boolean | null;
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
     * The predicted text. This text does not represent a Place, but rather a text query that could be used in a search endpoint (for example, Text Search). `text` is recommended for developers who wish to show a single UI element. Developers who wish to show two separate, but related, UI elements may want to use `structured_format` instead. They are two different ways to represent a query prediction. Users should not try to parse `structured_format` into `text` or vice versa. May be in mixed languages if the request `input` and `language_code` are in different languages or if part of the query does not have a translation from the local language to `language_code`.
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
   * A block of content that can be served individually.
   */
  export interface Schema$GoogleMapsPlacesV1ContentBlock {
    /**
     * Content related to the topic.
     */
    content?: Schema$GoogleTypeLocalizedText;
    /**
     * The list of resource names of the referenced places. This name can be used in other APIs that accept Place resource names.
     */
    referencedPlaces?: string[] | null;
  }
  /**
   * Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details. Content that is contextual to the place query.
   */
  export interface Schema$GoogleMapsPlacesV1ContextualContent {
    /**
     * Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details. Justifications for the place.
     */
    justifications?: Schema$GoogleMapsPlacesV1ContextualContentJustification[];
    /**
     * Information (including references) about photos of this place, contexual to the place query.
     */
    photos?: Schema$GoogleMapsPlacesV1Photo[];
    /**
     * List of reviews about this place, contexual to the place query.
     */
    reviews?: Schema$GoogleMapsPlacesV1Review[];
  }
  /**
   * Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details. Justifications for the place. Justifications answers the question of why a place could interest an end user.
   */
  export interface Schema$GoogleMapsPlacesV1ContextualContentJustification {
    /**
     * Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
     */
    businessAvailabilityAttributesJustification?: Schema$GoogleMapsPlacesV1ContextualContentJustificationBusinessAvailabilityAttributesJustification;
    /**
     * Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
     */
    reviewJustification?: Schema$GoogleMapsPlacesV1ContextualContentJustificationReviewJustification;
  }
  /**
   * Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details. BusinessAvailabilityAttributes justifications. This shows some attributes a business has that could interest an end user.
   */
  export interface Schema$GoogleMapsPlacesV1ContextualContentJustificationBusinessAvailabilityAttributesJustification {
    /**
     * If a place provides delivery.
     */
    delivery?: boolean | null;
    /**
     * If a place provides dine-in.
     */
    dineIn?: boolean | null;
    /**
     * If a place provides takeout.
     */
    takeout?: boolean | null;
  }
  /**
   * Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details. User review justifications. This highlights a section of the user review that would interest an end user. For instance, if the search query is "firewood pizza", the review justification highlights the text relevant to the search query.
   */
  export interface Schema$GoogleMapsPlacesV1ContextualContentJustificationReviewJustification {
    highlightedText?: Schema$GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedText;
    /**
     * The review that the highlighted text is generated from.
     */
    review?: Schema$GoogleMapsPlacesV1Review;
  }
  /**
   * The text highlighted by the justification. This is a subset of the review itself. The exact word to highlight is marked by the HighlightedTextRange. There could be several words in the text being highlighted.
   */
  export interface Schema$GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedText {
    /**
     * The list of the ranges of the highlighted text.
     */
    highlightedTextRanges?: Schema$GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedTextHighlightedTextRange[];
    text?: string | null;
  }
  /**
   * The range of highlighted text.
   */
  export interface Schema$GoogleMapsPlacesV1ContextualContentJustificationReviewJustificationHighlightedTextHighlightedTextRange {
    endIndex?: number | null;
    startIndex?: number | null;
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
     * A link where users can flag a problem with the photo.
     */
    flagContentUri?: string | null;
    /**
     * A link to show the photo on Google Maps.
     */
    googleMapsUri?: string | null;
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
     * The address descriptor of the place. Address descriptors include additional information that help describe a location using landmarks and areas. See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage.
     */
    addressDescriptor?: Schema$GoogleMapsPlacesV1AddressDescriptor;
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
     * List of places in which the current place is located.
     */
    containingPlaces?: Schema$GoogleMapsPlacesV1PlaceContainingPlace[];
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
     * The summary of amenities near the EV charging station.
     */
    evChargeAmenitySummary?: Schema$GoogleMapsPlacesV1PlaceEvChargeAmenitySummary;
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
     * AI-generated summary of the place.
     */
    generativeSummary?: Schema$GoogleMapsPlacesV1PlaceGenerativeSummary;
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
     * Links to trigger different Google Maps actions.
     */
    googleMapsLinks?: Schema$GoogleMapsPlacesV1PlaceGoogleMapsLinks;
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
     * A summary of points of interest near the place.
     */
    neighborhoodSummary?: Schema$GoogleMapsPlacesV1PlaceNeighborhoodSummary;
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
     * The address in postal address format.
     */
    postalAddress?: Schema$GoogleTypePostalAddress;
    /**
     * Price level of the place.
     */
    priceLevel?: string | null;
    /**
     * The price range associated with a Place.
     */
    priceRange?: Schema$GoogleMapsPlacesV1PriceRange;
    /**
     * The primary type of the given result. This type must be one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types. The primary type may be missing if the place's primary type is not a supported type. When a primary type is present, it is always one of the types in the `types` field.
     */
    primaryType?: string | null;
    /**
     * The display name of the primary type, localized to the request language if applicable. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types. The primary type may be missing if the place's primary type is not a supported type.
     */
    primaryTypeDisplayName?: Schema$GoogleTypeLocalizedText;
    /**
     * Indicates whether the place is a pure service area business. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses may not have a physical address or location on Google Maps.
     */
    pureServiceAreaBusiness?: boolean | null;
    /**
     * A rating between 1.0 and 5.0, based on user reviews of this place.
     */
    rating?: number | null;
    /**
     * The regular hours of operation. Note that if a place is always open (24 hours), the `close` field will not be set. Clients can rely on always open (24 hours) being represented as an [`open`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Period) period containing [`day`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`, [`hour`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`, and [`minute`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`.
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
     * AI-generated summary of the place using user reviews.
     */
    reviewSummary?: Schema$GoogleMapsPlacesV1PlaceReviewSummary;
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
     * A list of sub-destinations related to the place.
     */
    subDestinations?: Schema$GoogleMapsPlacesV1PlaceSubDestination[];
    /**
     * Specifies if the business supports takeout.
     */
    takeout?: boolean | null;
    /**
     * IANA Time Zone Database time zone. For example "America/New_York".
     */
    timeZone?: Schema$GoogleTypeTimeZone;
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
     * A viewport suitable for displaying the place on an average-sized map. This viewport should not be used as the physical boundary or the service area of the business.
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
   * Info about the place in which this place is located.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceContainingPlace {
    /**
     * The place id of the place in which this place is located.
     */
    id?: string | null;
    /**
     * The resource name of the place in which this place is located.
     */
    name?: string | null;
  }
  /**
   * The summary of amenities near the EV charging station. This only applies to places with type `electric_vehicle_charging_station`. The `overview` field is guaranteed to be provided while the other fields are optional.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceEvChargeAmenitySummary {
    /**
     * A summary of the nearby coffee options.
     */
    coffee?: Schema$GoogleMapsPlacesV1ContentBlock;
    /**
     * The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available.
     */
    disclosureText?: Schema$GoogleTypeLocalizedText;
    /**
     * A link where users can flag a problem with the summary.
     */
    flagContentUri?: string | null;
    /**
     * An overview of the available amenities. This is guaranteed to be provided.
     */
    overview?: Schema$GoogleMapsPlacesV1ContentBlock;
    /**
     * A summary of the nearby restaurants.
     */
    restaurant?: Schema$GoogleMapsPlacesV1ContentBlock;
    /**
     * A summary of the nearby gas stations.
     */
    store?: Schema$GoogleMapsPlacesV1ContentBlock;
  }
  /**
   * AI-generated summary of the place.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceGenerativeSummary {
    /**
     * The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available.
     */
    disclosureText?: Schema$GoogleTypeLocalizedText;
    /**
     * The overview of the place.
     */
    overview?: Schema$GoogleTypeLocalizedText;
    /**
     * A link where users can flag a problem with the overview summary.
     */
    overviewFlagContentUri?: string | null;
  }
  /**
   * Links to trigger different Google Maps actions.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceGoogleMapsLinks {
    /**
     * A link to show the directions to the place. The link only populates the destination location and uses the default travel mode `DRIVE`.
     */
    directionsUri?: string | null;
    /**
     * A link to show reviews of this place on Google Maps.
     */
    photosUri?: string | null;
    /**
     * A link to show this place.
     */
    placeUri?: string | null;
    /**
     * A link to show reviews of this place on Google Maps.
     */
    reviewsUri?: string | null;
    /**
     * A link to write a review for this place on Google Maps.
     */
    writeAReviewUri?: string | null;
  }
  /**
   * A summary of points of interest near the place.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceNeighborhoodSummary {
    /**
     * A detailed description of the neighborhood.
     */
    description?: Schema$GoogleMapsPlacesV1ContentBlock;
    /**
     * The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available.
     */
    disclosureText?: Schema$GoogleTypeLocalizedText;
    /**
     * A link where users can flag a problem with the summary.
     */
    flagContentUri?: string | null;
    /**
     * An overview summary of the neighborhood.
     */
    overview?: Schema$GoogleMapsPlacesV1ContentBlock;
  }
  /**
   * Information about business hour of the place.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHours {
    /**
     * The next time the current opening hours period ends up to 7 days in the future. This field is only populated if the opening hours period is active at the time of serving the request.
     */
    nextCloseTime?: string | null;
    /**
     * The next time the current opening hours period starts up to 7 days in the future. This field is only populated if the opening hours period is not active at the time of serving the request.
     */
    nextOpenTime?: string | null;
    /**
     * Whether the opening hours period is currently active. For regular opening hours and current opening hours, this field means whether the place is open. For secondary opening hours and current secondary opening hours, this field means whether the secondary hours of this place is active.
     */
    openNow?: boolean | null;
    /**
     * The periods that this place is open during the week. The periods are in chronological order, in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations. The starting day of `periods` is NOT fixed and should not be assumed to be Sunday. The API determines the start day based on a variety of factors. For example, for a 24/7 business, the first period may begin on the day of the request. For other businesses, it might be the first day of the week that they are open. NOTE: The ordering of the `periods` array is independent of the ordering of the `weekday_descriptions` array. Do not assume they will begin on the same day.
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
     * Localized strings describing the opening hours of this place, one string for each day of the week. NOTE: The order of the days and the start of the week is determined by the locale (language and region). The ordering of the `periods` array is independent of the ordering of the `weekday_descriptions` array. Do not assume they will begin on the same day. Will be empty if the hours are unknown or could not be converted to localized text. Example: "Sun: 18:00–06:00"
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
     * The hour in 24 hour format. Ranges from 0 to 23.
     */
    hour?: number | null;
    /**
     * The minute. Ranges from 0 to 59.
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
   * AI-generated summary of the place using user reviews.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceReviewSummary {
    /**
     * The AI disclosure message "Summarized with Gemini" (and its localized variants). This will be in the language specified in the request if available.
     */
    disclosureText?: Schema$GoogleTypeLocalizedText;
    /**
     * A link where users can flag a problem with the summary.
     */
    flagContentUri?: string | null;
    /**
     * A link to show reviews of this place on Google Maps.
     */
    reviewsUri?: string | null;
    /**
     * The summary of user reviews.
     */
    text?: Schema$GoogleTypeLocalizedText;
  }
  /**
   * Sub-destinations are specific places associated with a main place. These provide more specific destinations for users who are searching within a large or complex place, like an airport, national park, university, or stadium. For example, sub-destinations at an airport might include associated terminals and parking lots. Sub-destinations return the place ID and place resource name, which can be used in subsequent Place Details (New) requests to fetch richer details, including the sub-destination's display name and location.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceSubDestination {
    /**
     * The place id of the sub-destination.
     */
    id?: string | null;
    /**
     * The resource name of the sub-destination.
     */
    name?: string | null;
  }
  /**
   * A route polyline. Only supports an [encoded polyline](https://developers.google.com/maps/documentation/utilities/polylinealgorithm), which can be passed as a string and includes compression with minimal lossiness. This is the Routes API default output.
   */
  export interface Schema$GoogleMapsPlacesV1Polyline {
    /**
     * An [encoded polyline](https://developers.google.com/maps/documentation/utilities/polylinealgorithm), as returned by the [Routes API by default](https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes#polylineencoding). See the [encoder](https://developers.google.com/maps/documentation/utilities/polylineutility) and [decoder](https://developers.google.com/maps/documentation/routes/polylinedecoder) tools.
     */
    encodedPolyline?: string | null;
  }
  /**
   * The price range associated with a Place. `end_price` could be unset, which indicates a range without upper bound (e.g. "More than $100").
   */
  export interface Schema$GoogleMapsPlacesV1PriceRange {
    /**
     * The high end of the price range (exclusive). Price should be lower than this amount.
     */
    endPrice?: Schema$GoogleTypeMoney;
    /**
     * The low end of the price range (inclusive). Price should be at or above this amount.
     */
    startPrice?: Schema$GoogleTypeMoney;
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
     * A link where users can flag a problem with the review.
     */
    flagContentUri?: string | null;
    /**
     * A link to show the review on Google Maps.
     */
    googleMapsUri?: string | null;
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
   * Encapsulates a set of optional conditions to satisfy when calculating the routes.
   */
  export interface Schema$GoogleMapsPlacesV1RouteModifiers {
    /**
     * Optional. When set to true, avoids ferries where reasonable, giving preference to routes not containing ferries. Applies only to the `DRIVE` and `TWO_WHEELER` `TravelMode`.
     */
    avoidFerries?: boolean | null;
    /**
     * Optional. When set to true, avoids highways where reasonable, giving preference to routes not containing highways. Applies only to the `DRIVE` and `TWO_WHEELER` `TravelMode`.
     */
    avoidHighways?: boolean | null;
    /**
     * Optional. When set to true, avoids navigating indoors where reasonable, giving preference to routes not containing indoor navigation. Applies only to the `WALK` `TravelMode`.
     */
    avoidIndoor?: boolean | null;
    /**
     * Optional. When set to true, avoids toll roads where reasonable, giving preference to routes not containing toll roads. Applies only to the `DRIVE` and `TWO_WHEELER` `TravelMode`.
     */
    avoidTolls?: boolean | null;
  }
  /**
   * Parameters to configure the routing calculations to the places in the response, both along a route (where result ranking will be influenced) and for calculating travel times on results.
   */
  export interface Schema$GoogleMapsPlacesV1RoutingParameters {
    /**
     * Optional. An explicit routing origin that overrides the origin defined in the polyline. By default, the polyline origin is used.
     */
    origin?: Schema$GoogleTypeLatLng;
    /**
     * Optional. The route modifiers.
     */
    routeModifiers?: Schema$GoogleMapsPlacesV1RouteModifiers;
    /**
     * Optional. Specifies how to compute the routing summaries. The server attempts to use the selected routing preference to compute the route. The traffic aware routing preference is only available for the `DRIVE` or `TWO_WHEELER` `travelMode`.
     */
    routingPreference?: string | null;
    /**
     * Optional. The travel mode.
     */
    travelMode?: string | null;
  }
  /**
   * The duration and distance from the routing origin to a place in the response, and a second leg from that place to the destination, if requested. **Note:** Adding `routingSummaries` in the field mask without also including either the `routingParameters.origin` parameter or the `searchAlongRouteParameters.polyline.encodedPolyline` parameter in the request causes an error.
   */
  export interface Schema$GoogleMapsPlacesV1RoutingSummary {
    /**
     * A link to show directions on Google Maps using the waypoints from the given routing summary. The route generated by this link is not guaranteed to be the same as the route used to generate the routing summary. The link uses information provided in the request, from fields including `routingParameters` and `searchAlongRouteParameters` when applicable, to generate the directions link.
     */
    directionsUri?: string | null;
    /**
     * The legs of the trip. When you calculate travel duration and distance from a set origin, `legs` contains a single leg containing the duration and distance from the origin to the destination. When you do a search along route, `legs` contains two legs: one from the origin to place, and one from the place to the destination.
     */
    legs?: Schema$GoogleMapsPlacesV1RoutingSummaryLeg[];
  }
  /**
   * A leg is a single portion of a journey from one location to another.
   */
  export interface Schema$GoogleMapsPlacesV1RoutingSummaryLeg {
    /**
     * The distance of this leg of the trip.
     */
    distanceMeters?: number | null;
    /**
     * The time it takes to complete this leg of the trip.
     */
    duration?: string | null;
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
    /**
     * Optional. Parameters that affect the routing to the search results.
     */
    routingParameters?: Schema$GoogleMapsPlacesV1RoutingParameters;
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
    /**
     * A list of routing summaries where each entry associates to the corresponding place in the same index in the `places` field. If the routing summary is not available for one of the places, it will contain an empty entry. This list should have as many entries as the list of places if requested.
     */
    routingSummaries?: Schema$GoogleMapsPlacesV1RoutingSummary[];
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
     * Optional. Include pure service area businesses if the field is set to true. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses do not have a physical address or location on Google Maps. Places will not return fields including `location`, `plus_code`, and other location related fields for these businesses.
     */
    includePureServiceAreaBusinesses?: boolean | null;
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
     * Deprecated: Use `page_size` instead. The maximum number of results per page that can be returned. If the number of available results is larger than `max_result_count`, a `next_page_token` is returned which can be passed to `page_token` to get the next page of results in subsequent requests. If 0 or no value is provided, a default of 20 is used. The maximum value is 20; values above 20 will be coerced to 20. Negative values will return an INVALID_ARGUMENT error. If both `max_result_count` and `page_size` are specified, `max_result_count` will be ignored.
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
     * Optional. The maximum number of results per page that can be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be passed to `page_token` to get the next page of results in subsequent requests. If 0 or no value is provided, a default of 20 is used. The maximum value is 20; values above 20 will be set to 20. Negative values will return an INVALID_ARGUMENT error. If both `max_result_count` and `page_size` are specified, `max_result_count` will be ignored.
     */
    pageSize?: number | null;
    /**
     * Optional. A page token, received from a previous TextSearch call. Provide this to retrieve the subsequent page. When paginating, all parameters other than `page_token`, `page_size`, and `max_result_count` provided to TextSearch must match the initial call that provided the page token. Otherwise an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string | null;
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
     * Optional. Additional parameters for routing to results.
     */
    routingParameters?: Schema$GoogleMapsPlacesV1RoutingParameters;
    /**
     * Optional. Additional parameters proto for searching along a route.
     */
    searchAlongRouteParameters?: Schema$GoogleMapsPlacesV1SearchTextRequestSearchAlongRouteParameters;
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
     * Optional. The list of preferred EV connector types. A place that does not support any of the listed connector types is filtered out.
     */
    connectorTypes?: string[] | null;
    /**
     * Optional. Minimum required charging rate in kilowatts. A place with a charging rate less than the specified rate is filtered out.
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
   * Specifies a precalculated polyline from the [Routes API](https://developers.google.com/maps/documentation/routes) defining the route to search. Searching along a route is similar to using the `locationBias` or `locationRestriction` request option to bias the search results. However, while the `locationBias` and `locationRestriction` options let you specify a region to bias the search results, this option lets you bias the results along a trip route. Results are not guaranteed to be along the route provided, but rather are ranked within the search area defined by the polyline and, optionally, by the `locationBias` or `locationRestriction` based on minimal detour times from origin to destination. The results might be along an alternate route, especially if the provided polyline does not define an optimal route from origin to destination.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextRequestSearchAlongRouteParameters {
    /**
     * Required. The route polyline.
     */
    polyline?: Schema$GoogleMapsPlacesV1Polyline;
  }
  /**
   * Response proto for SearchText.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextResponse {
    /**
     * Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details. A list of contextual contents where each entry associates to the corresponding place in the same index in the places field. The contents that are relevant to the `text_query` in the request are preferred. If the contextual content is not available for one of the places, it will return non-contextual content. It will be empty only when the content is unavailable for this place. This list will have as many entries as the list of places if requested.
     */
    contextualContents?: Schema$GoogleMapsPlacesV1ContextualContent[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of places that meet the user's text search criteria.
     */
    places?: Schema$GoogleMapsPlacesV1Place[];
    /**
     * A list of routing summaries where each entry associates to the corresponding place in the same index in the `places` field. If the routing summary is not available for one of the places, it will contain an empty entry. This list will have as many entries as the list of places if requested.
     */
    routingSummaries?: Schema$GoogleMapsPlacesV1RoutingSummary[];
    /**
     * A link allows the user to search with the same text query as specified in the request on Google Maps.
     */
    searchUri?: string | null;
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
  /**
   * Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478.
   */
  export interface Schema$GoogleTypePostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in `address_lines` do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), `address_language` is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a `region_code` with all remaining information placed in the `address_lines`. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a `region_code` and `address_lines` and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave `locality` empty and use `address_lines`.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: string[] | null;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | null;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
     */
    sublocality?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$GoogleTypeTimeZone {
    /**
     * IANA Time Zone Database time zone. For example "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number. For example "2019a".
     */
    version?: string | null;
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/places.googleapis.com
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
     * const places = google.places('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/maps-platform.places',
     *       'https://www.googleapis.com/auth/maps-platform.places.autocomplete',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await places.places.autocomplete({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "includePureServiceAreaBusinesses": false,
     *       //   "includeQueryPredictions": false,
     *       //   "includedPrimaryTypes": [],
     *       //   "includedRegionCodes": [],
     *       //   "input": "my_input",
     *       //   "inputOffset": 0,
     *       //   "languageCode": "my_languageCode",
     *       //   "locationBias": {},
     *       //   "locationRestriction": {},
     *       //   "origin": {},
     *       //   "regionCode": "my_regionCode",
     *       //   "sessionToken": "my_sessionToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "suggestions": []
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
    autocomplete(
      params: Params$Resource$Places$Autocomplete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    autocomplete(
      params?: Params$Resource$Places$Autocomplete,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1AutocompletePlacesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/places.googleapis.com
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
     * const places = google.places('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/maps-platform.places',
     *       'https://www.googleapis.com/auth/maps-platform.places.details',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await places.places.get({
     *     // Optional. Place details will be displayed with the preferred language if available. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport.
     *     languageCode: 'placeholder-value',
     *     // Required. The resource name of a place, in the `places/{place_id\}` format.
     *     name: 'places/my-place',
     *     // Optional. The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported.
     *     regionCode: 'placeholder-value',
     *     // Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned. The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `session_token` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately). We recommend the following guidelines: * Use session tokens for all Place Autocomplete calls. * Generate a fresh token for each session. Using a version 4 UUID is recommended. * Ensure that the credentials used for all Place Autocomplete, Place Details, and Address Validation requests within a session belong to the same Cloud Console project. * Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually.
     *     sessionToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessibilityOptions": {},
     *   //   "addressComponents": [],
     *   //   "addressDescriptor": {},
     *   //   "adrFormatAddress": "my_adrFormatAddress",
     *   //   "allowsDogs": false,
     *   //   "attributions": [],
     *   //   "businessStatus": "my_businessStatus",
     *   //   "containingPlaces": [],
     *   //   "curbsidePickup": false,
     *   //   "currentOpeningHours": {},
     *   //   "currentSecondaryOpeningHours": [],
     *   //   "delivery": false,
     *   //   "dineIn": false,
     *   //   "displayName": {},
     *   //   "editorialSummary": {},
     *   //   "evChargeAmenitySummary": {},
     *   //   "evChargeOptions": {},
     *   //   "formattedAddress": "my_formattedAddress",
     *   //   "fuelOptions": {},
     *   //   "generativeSummary": {},
     *   //   "goodForChildren": false,
     *   //   "goodForGroups": false,
     *   //   "goodForWatchingSports": false,
     *   //   "googleMapsLinks": {},
     *   //   "googleMapsUri": "my_googleMapsUri",
     *   //   "iconBackgroundColor": "my_iconBackgroundColor",
     *   //   "iconMaskBaseUri": "my_iconMaskBaseUri",
     *   //   "id": "my_id",
     *   //   "internationalPhoneNumber": "my_internationalPhoneNumber",
     *   //   "liveMusic": false,
     *   //   "location": {},
     *   //   "menuForChildren": false,
     *   //   "name": "my_name",
     *   //   "nationalPhoneNumber": "my_nationalPhoneNumber",
     *   //   "neighborhoodSummary": {},
     *   //   "outdoorSeating": false,
     *   //   "parkingOptions": {},
     *   //   "paymentOptions": {},
     *   //   "photos": [],
     *   //   "plusCode": {},
     *   //   "postalAddress": {},
     *   //   "priceLevel": "my_priceLevel",
     *   //   "priceRange": {},
     *   //   "primaryType": "my_primaryType",
     *   //   "primaryTypeDisplayName": {},
     *   //   "pureServiceAreaBusiness": false,
     *   //   "rating": {},
     *   //   "regularOpeningHours": {},
     *   //   "regularSecondaryOpeningHours": [],
     *   //   "reservable": false,
     *   //   "restroom": false,
     *   //   "reviewSummary": {},
     *   //   "reviews": [],
     *   //   "servesBeer": false,
     *   //   "servesBreakfast": false,
     *   //   "servesBrunch": false,
     *   //   "servesCocktails": false,
     *   //   "servesCoffee": false,
     *   //   "servesDessert": false,
     *   //   "servesDinner": false,
     *   //   "servesLunch": false,
     *   //   "servesVegetarianFood": false,
     *   //   "servesWine": false,
     *   //   "shortFormattedAddress": "my_shortFormattedAddress",
     *   //   "subDestinations": [],
     *   //   "takeout": false,
     *   //   "timeZone": {},
     *   //   "types": [],
     *   //   "userRatingCount": 0,
     *   //   "utcOffsetMinutes": 0,
     *   //   "viewport": {},
     *   //   "websiteUri": "my_websiteUri"
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
      params: Params$Resource$Places$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Places$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1Place>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1Place>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/places.googleapis.com
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
     * const places = google.places('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/maps-platform.places',
     *       'https://www.googleapis.com/auth/maps-platform.places.nearbysearch',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await places.places.searchNearby({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "excludedPrimaryTypes": [],
     *       //   "excludedTypes": [],
     *       //   "includedPrimaryTypes": [],
     *       //   "includedTypes": [],
     *       //   "languageCode": "my_languageCode",
     *       //   "locationRestriction": {},
     *       //   "maxResultCount": 0,
     *       //   "rankPreference": "my_rankPreference",
     *       //   "regionCode": "my_regionCode",
     *       //   "routingParameters": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "places": [],
     *   //   "routingSummaries": []
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
    searchNearby(
      params: Params$Resource$Places$Searchnearby,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    searchNearby(
      params?: Params$Resource$Places$Searchnearby,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1SearchNearbyResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/places.googleapis.com
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
     * const places = google.places('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/maps-platform.places',
     *       'https://www.googleapis.com/auth/maps-platform.places.textsearch',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await places.places.searchText({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "evOptions": {},
     *       //   "includePureServiceAreaBusinesses": false,
     *       //   "includedType": "my_includedType",
     *       //   "languageCode": "my_languageCode",
     *       //   "locationBias": {},
     *       //   "locationRestriction": {},
     *       //   "maxResultCount": 0,
     *       //   "minRating": {},
     *       //   "openNow": false,
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "priceLevels": [],
     *       //   "rankPreference": "my_rankPreference",
     *       //   "regionCode": "my_regionCode",
     *       //   "routingParameters": {},
     *       //   "searchAlongRouteParameters": {},
     *       //   "strictTypeFiltering": false,
     *       //   "textQuery": "my_textQuery"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contextualContents": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "places": [],
     *   //   "routingSummaries": [],
     *   //   "searchUri": "my_searchUri"
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
    searchText(
      params: Params$Resource$Places$Searchtext,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    searchText(
      params?: Params$Resource$Places$Searchtext,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1SearchTextResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1SearchTextResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/places.googleapis.com
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
     * const places = google.places('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/maps-platform.places',
     *       'https://www.googleapis.com/auth/maps-platform.places.getphotomedia',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await places.places.photos.getMedia({
     *     // Optional. Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the max_height_px and max_width_px properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned. At least one of max_height_px or max_width_px needs to be specified. If neither max_height_px nor max_width_px is specified, an INVALID_ARGUMENT error will be returned.
     *     maxHeightPx: 'placeholder-value',
     *     // Optional. Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the max_height_px and max_width_px properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned. At least one of max_height_px or max_width_px needs to be specified. If neither max_height_px nor max_width_px is specified, an INVALID_ARGUMENT error will be returned.
     *     maxWidthPx: 'placeholder-value',
     *     // Required. The resource name of a photo media in the format: `places/{place_id\}/photos/{photo_reference\}/media`. The resource name of a photo as returned in a Place object's `photos.name` field comes with the format `places/{place_id\}/photos/{photo_reference\}`. You need to append `/media` at the end of the photo resource to get the photo media resource name.
     *     name: 'places/my-place/photos/my-photo/media',
     *     // Optional. If set, skip the default HTTP redirect behavior and render a text format (for example, in JSON format for HTTP use case) response. If not set, an HTTP redirect will be issued to redirect the call to the image media. This option is ignored for non-HTTP requests.
     *     skipHttpRedirect: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "photoUri": "my_photoUri"
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
    getMedia(
      params: Params$Resource$Places$Photos$Getmedia,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getMedia(
      params?: Params$Resource$Places$Photos$Getmedia,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1PhotoMedia>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleMapsPlacesV1PhotoMedia>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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
            apiVersion: '',
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
