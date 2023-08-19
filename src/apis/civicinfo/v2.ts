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

export namespace civicinfo_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Google Civic Information API
   *
   * Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const civicinfo = google.civicinfo('v2');
   * ```
   */
  export class Civicinfo {
    context: APIRequestContext;
    divisions: Resource$Divisions;
    elections: Resource$Elections;
    representatives: Resource$Representatives;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.divisions = new Resource$Divisions(this.context);
      this.elections = new Resource$Elections(this.context);
      this.representatives = new Resource$Representatives(this.context);
    }
  }

  /**
   * Describes information about a regional election administrative area.
   */
  export interface Schema$AdministrationRegion {
    /**
     * The election administration body for this area.
     */
    electionAdministrationBody?: Schema$AdministrativeBody;
    /**
     * The city or county that provides election information for this voter. This object can have the same elements as state.
     */
    local_jurisdiction?: Schema$AdministrationRegion;
    /**
     * The name of the jurisdiction.
     */
    name?: string | null;
    /**
     * A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources.
     */
    sources?: Schema$Source[];
  }
  /**
   * Information about an election administrative body (e.g. County Board of Elections).
   */
  export interface Schema$AdministrativeBody {
    /**
     * A URL provided by this administrative body for information on absentee voting.
     */
    absenteeVotingInfoUrl?: string | null;
    /**
     * A URL provided by this administrative body to give contest information to the voter.
     */
    ballotInfoUrl?: string | null;
    /**
     * The mailing address of this administrative body.
     */
    correspondenceAddress?: Schema$SimpleAddressType;
    /**
     * A URL provided by this administrative body for looking up general election information.
     */
    electionInfoUrl?: string | null;
    /**
     * A last minute or emergency notification text provided by this administrative body.
     */
    electionNoticeText?: string | null;
    /**
     * A URL provided by this administrative body for additional information related to the last minute or emergency notification.
     */
    electionNoticeUrl?: string | null;
    /**
     * The election officials for this election administrative body.
     */
    electionOfficials?: Schema$ElectionOfficial[];
    /**
     * A URL provided by this administrative body for confirming that the voter is registered to vote.
     */
    electionRegistrationConfirmationUrl?: string | null;
    /**
     * A URL provided by this administrative body for looking up how to register to vote.
     */
    electionRegistrationUrl?: string | null;
    /**
     * A URL provided by this administrative body describing election rules to the voter.
     */
    electionRulesUrl?: string | null;
    /**
     * A description of the hours of operation for this administrative body.
     */
    hoursOfOperation?: string | null;
    /**
     * The name of this election administrative body.
     */
    name?: string | null;
    /**
     * The physical address of this administrative body.
     */
    physicalAddress?: Schema$SimpleAddressType;
    /**
     * A description of the services this administrative body may provide.
     */
    voter_services?: string[] | null;
    /**
     * A URL provided by this administrative body for looking up where to vote.
     */
    votingLocationFinderUrl?: string | null;
  }
  /**
   * Information about a candidate running for elected office.
   */
  export interface Schema$Candidate {
    /**
     * The URL for the candidate's campaign web site.
     */
    candidateUrl?: string | null;
    /**
     * A list of known (social) media channels for this candidate.
     */
    channels?: Schema$Channel[];
    /**
     * The email address for the candidate's campaign.
     */
    email?: string | null;
    /**
     * The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan"
     */
    name?: string | null;
    /**
     * The order the candidate appears on the ballot for this contest.
     */
    orderOnBallot?: string | null;
    /**
     * The full name of the party the candidate is a member of.
     */
    party?: string | null;
    /**
     * The voice phone number for the candidate's campaign office.
     */
    phone?: string | null;
    /**
     * A URL for a photo of the candidate.
     */
    photoUrl?: string | null;
  }
  /**
   * A social media or web channel for a candidate.
   */
  export interface Schema$Channel {
    /**
     * The unique public identifier for the candidate's channel.
     */
    id?: string | null;
    /**
     * The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter
     */
    type?: string | null;
  }
  /**
   * Information about a contest that appears on a voter's ballot.
   */
  export interface Schema$Contest {
    /**
     * A number specifying the position of this contest on the voter's ballot.
     */
    ballotPlacement?: string | null;
    /**
     * The official title on the ballot for this contest, only where available.
     */
    ballotTitle?: string | null;
    /**
     * The candidate choices for this contest.
     */
    candidates?: Schema$Candidate[];
    /**
     * Information about the electoral district that this contest is in.
     */
    district?: Schema$ElectoralDistrict;
    /**
     * A description of any additional eligibility requirements for voting in this contest.
     */
    electorateSpecifications?: string | null;
    /**
     * The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
     */
    level?: string[] | null;
    /**
     * The number of candidates that will be elected to office in this contest.
     */
    numberElected?: string | null;
    /**
     * The number of candidates that a voter may vote for in this contest.
     */
    numberVotingFor?: string | null;
    /**
     * The name of the office for this contest.
     */
    office?: string | null;
    /**
     * If this is a partisan election, the name of the party/parties it is for.
     */
    primaryParties?: string[] | null;
    /**
     * The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type 'Referendum'.
     */
    referendumBallotResponses?: string[] | null;
    /**
     * Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'.
     */
    referendumBrief?: string | null;
    /**
     * A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.
     */
    referendumConStatement?: string | null;
    /**
     * Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'.
     */
    referendumEffectOfAbstain?: string | null;
    /**
     * The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'.
     */
    referendumPassageThreshold?: string | null;
    /**
     * A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.
     */
    referendumProStatement?: string | null;
    /**
     * A brief description of the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumSubtitle?: string | null;
    /**
     * The full text of the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumText?: string | null;
    /**
     * The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'.
     */
    referendumTitle?: string | null;
    /**
     * A link to the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumUrl?: string | null;
    /**
     * The roles which this office fulfills.
     */
    roles?: string[] | null;
    /**
     * A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources.
     */
    sources?: Schema$Source[];
    /**
     * "Yes" or "No" depending on whether this a contest being held outside the normal election cycle.
     */
    special?: string | null;
    /**
     * The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'.
     */
    type?: string | null;
  }
  /**
   * The result of a division search query.
   */
  export interface Schema$DivisionSearchResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse".
     */
    kind?: string | null;
    results?: Schema$DivisionSearchResult[];
  }
  /**
   * Represents a political geographic division that matches the requested query.
   */
  export interface Schema$DivisionSearchResult {
    /**
     * Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district.
     */
    aliases?: string[] | null;
    /**
     * The name of the division.
     */
    name?: string | null;
    /**
     * The unique Open Civic Data identifier for this division
     */
    ocdId?: string | null;
  }
  /**
   * Information about the election that was queried.
   */
  export interface Schema$Election {
    /**
     * Day of the election in YYYY-MM-DD format.
     */
    electionDay?: string | null;
    /**
     * The unique ID of this election.
     */
    id?: string | null;
    /**
     * A displayable name for the election.
     */
    name?: string | null;
    /**
     * The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us).
     */
    ocdDivisionId?: string | null;
    shapeLookupBehavior?: string | null;
  }
  /**
   * Information about individual election officials.
   */
  export interface Schema$ElectionOfficial {
    /**
     * The email address of the election official.
     */
    emailAddress?: string | null;
    /**
     * The fax number of the election official.
     */
    faxNumber?: string | null;
    /**
     * The full name of the election official.
     */
    name?: string | null;
    /**
     * The office phone number of the election official.
     */
    officePhoneNumber?: string | null;
    /**
     * The title of the election official.
     */
    title?: string | null;
  }
  /**
   * The list of elections available for this version of the API.
   */
  export interface Schema$ElectionsQueryResponse {
    /**
     * A list of available elections
     */
    elections?: Schema$Election[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse".
     */
    kind?: string | null;
  }
  /**
   * Describes the geographic scope of a contest.
   */
  export interface Schema$ElectoralDistrict {
    /**
     * An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper.
     */
    id?: string | null;
    /**
     * The name of the district.
     */
    name?: string | null;
    /**
     * The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special
     */
    scope?: string | null;
  }
  /**
   * Describes a political geography.
   */
  export interface Schema$GeographicDivision {
    /**
     * Any other valid OCD IDs that refer to the same division.\n\nBecause OCD IDs are meant to be human-readable and at least somewhat predictable, there are occasionally several identifiers for a single division. These identifiers are defined to be equivalent to one another, and one is always indicated as the primary identifier. The primary identifier will be returned in ocd_id above, and any other equivalent valid identifiers will be returned in this list.\n\nFor example, if this division's OCD ID is ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc.
     */
    alsoKnownAs?: string[] | null;
    /**
     * The name of the division.
     */
    name?: string | null;
    /**
     * List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request.
     */
    officeIndices?: number[] | null;
  }
  /**
   * Information about an Office held by one or more Officials.
   */
  export interface Schema$Office {
    /**
     * The OCD ID of the division with which this office is associated.
     */
    divisionId?: string | null;
    /**
     * The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
     */
    levels?: string[] | null;
    /**
     * The human-readable name of the office.
     */
    name?: string | null;
    /**
     * List of indices in the officials array of people who presently hold this office.
     */
    officialIndices?: number[] | null;
    /**
     * The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough categories that are useful for general selection from or sorting of a list of offices.
     */
    roles?: string[] | null;
    /**
     * A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources.
     */
    sources?: Schema$Source[];
  }
  /**
   * Information about a person holding an elected office.
   */
  export interface Schema$Official {
    /**
     * Addresses at which to contact the official.
     */
    address?: Schema$SimpleAddressType[];
    /**
     * A list of known (social) media channels for this official.
     */
    channels?: Schema$Channel[];
    /**
     * The direct email addresses for the official.
     */
    emails?: string[] | null;
    /**
     * The official's name.
     */
    name?: string | null;
    /**
     * The full name of the party the official belongs to.
     */
    party?: string | null;
    /**
     * The official's public contact phone numbers.
     */
    phones?: string[] | null;
    /**
     * A URL for a photo of the official.
     */
    photoUrl?: string | null;
    /**
     * The official's public website URLs.
     */
    urls?: string[] | null;
  }
  /**
   * A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.
   */
  export interface Schema$PollingLocation {
    /**
     * The address of the location.
     */
    address?: Schema$SimpleAddressType;
    /**
     * The last date that this early vote site or drop off location may be used. This field is not populated for polling locations.
     */
    endDate?: string | null;
    /**
     * Latitude of the location, in degrees north of the equator. Note this field may not be available for some locations.
     */
    latitude?: number | null;
    /**
     * Longitude of the location, in degrees east of the Prime Meridian. Note this field may not be available for some locations.
     */
    longitude?: number | null;
    /**
     * The name of the early vote site or drop off location. This field is not populated for polling locations.
     */
    name?: string | null;
    /**
     * Notes about this location (e.g. accessibility ramp or entrance to use).
     */
    notes?: string | null;
    /**
     * A description of when this location is open.
     */
    pollingHours?: string | null;
    /**
     * A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources.
     */
    sources?: Schema$Source[];
    /**
     * The first date that this early vote site or drop off location may be used. This field is not populated for polling locations.
     */
    startDate?: string | null;
    /**
     * The services provided by this early vote site or drop off location. This field is not populated for polling locations.
     */
    voterServices?: string | null;
  }
  export interface Schema$Precinct {
    /**
     * ID of the AdministrationRegion message for this precinct. Corresponds to LocalityId xml tag.
     */
    administrationRegionId?: string | null;
    /**
     * ID(s) of the Contest message(s) for this precinct.
     */
    contestId?: string[] | null;
    /**
     * Required. Dataset ID. What datasets our Precincts come from.
     */
    datasetId?: string | null;
    /**
     * ID(s) of the PollingLocation message(s) for this precinct.
     */
    earlyVoteSiteId?: string[] | null;
    /**
     * ID(s) of the ElectoralDistrict message(s) for this precinct.
     */
    electoralDistrictId?: string[] | null;
    /**
     * Required. A unique identifier for this precinct.
     */
    id?: string | null;
    /**
     * Specifies if the precinct runs mail-only elections.
     */
    mailOnly?: boolean | null;
    /**
     * Required. The name of the precinct.
     */
    name?: string | null;
    /**
     * The number of the precinct.
     */
    number?: string | null;
    /**
     * Encouraged. The OCD ID of the precinct
     */
    ocdId?: string[] | null;
    /**
     * ID(s) of the PollingLocation message(s) for this precinct.
     */
    pollingLocationId?: string[] | null;
    /**
     * ID(s) of the SpatialBoundary message(s) for this precinct. Used to specify a geometrical boundary of the precinct.
     */
    spatialBoundaryId?: string[] | null;
    /**
     * If present, this proto corresponds to one portion of split precinct. Other portions of this precinct are guaranteed to have the same `name`. If not present, this proto represents a full precicnt.
     */
    splitName?: string | null;
    /**
     * Specifies the ward the precinct is contained within.
     */
    ward?: string | null;
  }
  export interface Schema$RepresentativeInfoData {
    /**
     * A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division.
     */
    divisions?: {[key: string]: Schema$GeographicDivision} | null;
    /**
     * Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.
     */
    offices?: Schema$Office[];
    /**
     * Officials holding the offices listed above. Will only be present if includeOffices was true in the request.
     */
    officials?: Schema$Official[];
  }
  /**
   * The result of a representative info lookup query.
   */
  export interface Schema$RepresentativeInfoResponse {
    /**
     * A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division.
     */
    divisions?: {[key: string]: Schema$GeographicDivision} | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse".
     */
    kind?: string | null;
    /**
     * The normalized version of the requested address
     */
    normalizedInput?: Schema$SimpleAddressType;
    /**
     * Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.
     */
    offices?: Schema$Office[];
    /**
     * Officials holding the offices listed above. Will only be present if includeOffices was true in the request.
     */
    officials?: Schema$Official[];
  }
  /**
   * A simple representation of an address.
   */
  export interface Schema$SimpleAddressType {
    /**
     * The city or town for the address.
     */
    city?: string | null;
    /**
     * The street name and number of this address.
     */
    line1?: string | null;
    /**
     * The second line the address, if needed.
     */
    line2?: string | null;
    /**
     * The third line of the address, if needed.
     */
    line3?: string | null;
    /**
     * The name of the location.
     */
    locationName?: string | null;
    /**
     * The US two letter state abbreviation of the address.
     */
    state?: string | null;
    /**
     * The US Postal Zip Code of the address.
     */
    zip?: string | null;
  }
  /**
   * Contains information about the data source for the element containing it.
   */
  export interface Schema$Source {
    /**
     * The name of the data source.
     */
    name?: string | null;
    /**
     * Whether this data comes from an official government source.
     */
    official?: boolean | null;
  }
  /**
   * The result of a voter info lookup query.
   */
  export interface Schema$VoterInfoResponse {
    /**
     * Contests that will appear on the voter's ballot.
     */
    contests?: Schema$Contest[];
    /**
     * Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field.
     */
    dropOffLocations?: Schema$PollingLocation[];
    /**
     * Locations where the voter is eligible to vote early, prior to election day.
     */
    earlyVoteSites?: Schema$PollingLocation[];
    /**
     * The election that was queried.
     */
    election?: Schema$Election;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse".
     */
    kind?: string | null;
    /**
     * Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well).
     */
    mailOnly?: boolean | null;
    /**
     * The normalized version of the requested address
     */
    normalizedInput?: Schema$SimpleAddressType;
    /**
     * When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user.
     */
    otherElections?: Schema$Election[];
    /**
     * Locations where the voter is eligible to vote on election day.
     */
    pollingLocations?: Schema$PollingLocation[];
    precinctId?: string | null;
    /**
     * The precincts that match this voter's address. Will only be returned for project IDs which have been allowlisted as "partner projects".
     */
    precincts?: Schema$Precinct[];
    /**
     * Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array.
     */
    state?: Schema$AdministrationRegion[];
  }

  export class Resource$Divisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Searches for political divisions by their natural name or OCD ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Divisions$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Divisions$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DivisionSearchResponse>;
    search(
      params: Params$Resource$Divisions$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Divisions$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DivisionSearchResponse>,
      callback: BodyResponseCallback<Schema$DivisionSearchResponse>
    ): void;
    search(
      params: Params$Resource$Divisions$Search,
      callback: BodyResponseCallback<Schema$DivisionSearchResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$DivisionSearchResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Divisions$Search
        | BodyResponseCallback<Schema$DivisionSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DivisionSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DivisionSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DivisionSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Divisions$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Divisions$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/divisions').replace(
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
        createAPIRequest<Schema$DivisionSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DivisionSearchResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Divisions$Search extends StandardParameters {
    /**
     * The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
     */
    query?: string;
  }

  export class Resource$Elections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List of available elections to query.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    electionQuery(
      params: Params$Resource$Elections$Electionquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    electionQuery(
      params?: Params$Resource$Elections$Electionquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ElectionsQueryResponse>;
    electionQuery(
      params: Params$Resource$Elections$Electionquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    electionQuery(
      params: Params$Resource$Elections$Electionquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ElectionsQueryResponse>,
      callback: BodyResponseCallback<Schema$ElectionsQueryResponse>
    ): void;
    electionQuery(
      params: Params$Resource$Elections$Electionquery,
      callback: BodyResponseCallback<Schema$ElectionsQueryResponse>
    ): void;
    electionQuery(
      callback: BodyResponseCallback<Schema$ElectionsQueryResponse>
    ): void;
    electionQuery(
      paramsOrCallback?:
        | Params$Resource$Elections$Electionquery
        | BodyResponseCallback<Schema$ElectionsQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ElectionsQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ElectionsQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ElectionsQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Elections$Electionquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Elections$Electionquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/elections').replace(
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
        createAPIRequest<Schema$ElectionsQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ElectionsQueryResponse>(parameters);
      }
    }

    /**
     * Looks up information relevant to a voter based on the voter's registered address.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    voterInfoQuery(
      params: Params$Resource$Elections$Voterinfoquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    voterInfoQuery(
      params?: Params$Resource$Elections$Voterinfoquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VoterInfoResponse>;
    voterInfoQuery(
      params: Params$Resource$Elections$Voterinfoquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    voterInfoQuery(
      params: Params$Resource$Elections$Voterinfoquery,
      options: MethodOptions | BodyResponseCallback<Schema$VoterInfoResponse>,
      callback: BodyResponseCallback<Schema$VoterInfoResponse>
    ): void;
    voterInfoQuery(
      params: Params$Resource$Elections$Voterinfoquery,
      callback: BodyResponseCallback<Schema$VoterInfoResponse>
    ): void;
    voterInfoQuery(
      callback: BodyResponseCallback<Schema$VoterInfoResponse>
    ): void;
    voterInfoQuery(
      paramsOrCallback?:
        | Params$Resource$Elections$Voterinfoquery
        | BodyResponseCallback<Schema$VoterInfoResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VoterInfoResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VoterInfoResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VoterInfoResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Elections$Voterinfoquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Elections$Voterinfoquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/voterinfo').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['address'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VoterInfoResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VoterInfoResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Elections$Electionquery
    extends StandardParameters {
    /**
     * Whether to include data that has not been allowlisted yet
     */
    productionDataOnly?: boolean;
  }
  export interface Params$Resource$Elections$Voterinfoquery
    extends StandardParameters {
    /**
     * The registered address of the voter to look up.
     */
    address?: string;
    /**
     * The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version\}/elections. If no election ID is specified in the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field.
     */
    electionId?: string;
    /**
     * If set to true, only data from official state sources will be returned.
     */
    officialOnly?: boolean;
    /**
     * Whether to include data that has not been vetted yet. Should only be made available to internal IPs or trusted partners. This is a non-discoverable parameter in the One Platform API config.
     */
    productionDataOnly?: boolean;
    /**
     * If set to true, the query will return the success code and include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.
     */
    returnAllAvailableData?: boolean;
  }

  export class Resource$Representatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Looks up political geography and representative information for a single address.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    representativeInfoByAddress(
      params: Params$Resource$Representatives$Representativeinfobyaddress,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    representativeInfoByAddress(
      params?: Params$Resource$Representatives$Representativeinfobyaddress,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RepresentativeInfoResponse>;
    representativeInfoByAddress(
      params: Params$Resource$Representatives$Representativeinfobyaddress,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    representativeInfoByAddress(
      params: Params$Resource$Representatives$Representativeinfobyaddress,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RepresentativeInfoResponse>,
      callback: BodyResponseCallback<Schema$RepresentativeInfoResponse>
    ): void;
    representativeInfoByAddress(
      params: Params$Resource$Representatives$Representativeinfobyaddress,
      callback: BodyResponseCallback<Schema$RepresentativeInfoResponse>
    ): void;
    representativeInfoByAddress(
      callback: BodyResponseCallback<Schema$RepresentativeInfoResponse>
    ): void;
    representativeInfoByAddress(
      paramsOrCallback?:
        | Params$Resource$Representatives$Representativeinfobyaddress
        | BodyResponseCallback<Schema$RepresentativeInfoResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RepresentativeInfoResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RepresentativeInfoResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RepresentativeInfoResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Representatives$Representativeinfobyaddress;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Representatives$Representativeinfobyaddress;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/representatives').replace(
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
        createAPIRequest<Schema$RepresentativeInfoResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RepresentativeInfoResponse>(parameters);
      }
    }

    /**
     * Looks up representative information for a single geographic division.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    representativeInfoByDivision(
      params: Params$Resource$Representatives$Representativeinfobydivision,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    representativeInfoByDivision(
      params?: Params$Resource$Representatives$Representativeinfobydivision,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RepresentativeInfoData>;
    representativeInfoByDivision(
      params: Params$Resource$Representatives$Representativeinfobydivision,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    representativeInfoByDivision(
      params: Params$Resource$Representatives$Representativeinfobydivision,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RepresentativeInfoData>,
      callback: BodyResponseCallback<Schema$RepresentativeInfoData>
    ): void;
    representativeInfoByDivision(
      params: Params$Resource$Representatives$Representativeinfobydivision,
      callback: BodyResponseCallback<Schema$RepresentativeInfoData>
    ): void;
    representativeInfoByDivision(
      callback: BodyResponseCallback<Schema$RepresentativeInfoData>
    ): void;
    representativeInfoByDivision(
      paramsOrCallback?:
        | Params$Resource$Representatives$Representativeinfobydivision
        | BodyResponseCallback<Schema$RepresentativeInfoData>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RepresentativeInfoData>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RepresentativeInfoData>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RepresentativeInfoData>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Representatives$Representativeinfobydivision;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Representatives$Representativeinfobydivision;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/representatives/{ocdId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['ocdId'],
        pathParams: ['ocdId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RepresentativeInfoData>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RepresentativeInfoData>(parameters);
      }
    }
  }

  export interface Params$Resource$Representatives$Representativeinfobyaddress
    extends StandardParameters {
    /**
     * The address to look up. May only be specified if the field ocdId is not given in the URL
     */
    address?: string;
    /**
     * Whether to return information about offices and officials. If false, only the top-level district information will be returned.
     */
    includeOffices?: boolean;
    /**
     * A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
     */
    levels?: string[];
    /**
     * A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
     */
    roles?: string[];
  }
  export interface Params$Resource$Representatives$Representativeinfobydivision
    extends StandardParameters {
    /**
     * A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
     */
    levels?: string[];
    /**
     * The Open Civic Data division identifier of the division to look up.
     */
    ocdId?: string;
    /**
     * If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.
     */
    recursive?: boolean;
    /**
     * A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
     */
    roles?: string[];
  }
}
