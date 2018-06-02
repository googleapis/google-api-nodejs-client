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

export namespace people_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * People API
   *
   * Provides access to information about profiles and contacts.
   *
   * @example
   * const {google} = require('googleapis');
   * const people = google.people('v1');
   *
   * @namespace people
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for People
   */
  export class People {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    contactGroups: Resource$Contactgroups;
    people: Resource$People;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.contactGroups = new Resource$Contactgroups(this);
      this.people = new Resource$People(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * A person&#39;s physical address. May be a P.O. box or street address. All
   * fields are optional.
   */
  export interface Schema$Address {
    /**
     * The city of the address.
     */
    city?: string;
    /**
     * The country of the address.
     */
    country?: string;
    /**
     * The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm)
     * country code of the address.
     */
    countryCode?: string;
    /**
     * The extended address of the address; for example, the apartment number.
     */
    extendedAddress?: string;
    /**
     * The read-only type of the address translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * The unstructured value of the address. If this is not set by the user it
     * will be automatically constructed from structured values.
     */
    formattedValue?: string;
    /**
     * Metadata about the address.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The P.O. box of the address.
     */
    poBox?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
    /**
     * The region of the address; for example, the state or province.
     */
    region?: string;
    /**
     * The street address.
     */
    streetAddress?: string;
    /**
     * The type of the address. The type can be custom or one of these
     * predefined values:  * `home` * `work` * `other`
     */
    type?: string;
  }
  /**
   * A person&#39;s age range.
   */
  export interface Schema$AgeRangeType {
    /**
     * The age range.
     */
    ageRange?: string;
    /**
     * Metadata about the age range.
     */
    metadata?: Schema$FieldMetadata;
  }
  /**
   * The response to a batch get contact groups request.
   */
  export interface Schema$BatchGetContactGroupsResponse {
    /**
     * The list of responses for each requested contact group resource.
     */
    responses?: Schema$ContactGroupResponse[];
  }
  /**
   * A person&#39;s short biography.
   */
  export interface Schema$Biography {
    /**
     * The content type of the biography.
     */
    contentType?: string;
    /**
     * Metadata about the biography.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The short biography.
     */
    value?: string;
  }
  /**
   * A person&#39;s birthday. At least one of the `date` and `text` fields are
   * specified. The `date` and `text` fields typically represent the same date,
   * but are not guaranteed to.
   */
  export interface Schema$Birthday {
    /**
     * The date of the birthday.
     */
    date?: Schema$Date;
    /**
     * Metadata about the birthday.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * A free-form string representing the user&#39;s birthday.
     */
    text?: string;
  }
  /**
   * A person&#39;s bragging rights.
   */
  export interface Schema$BraggingRights {
    /**
     * Metadata about the bragging rights.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The bragging rights; for example, `climbed mount everest`.
     */
    value?: string;
  }
  /**
   * A contact group.
   */
  export interface Schema$ContactGroup {
    /**
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
     * resource. Used for web cache validation.
     */
    etag?: string;
    /**
     * The read-only name translated and formatted in the viewer&#39;s account
     * locale or the `Accept-Language` HTTP header locale for system groups
     * names. Group names set by the owner are the same as name.
     */
    formattedName?: string;
    /**
     * The read-only contact group type.
     */
    groupType?: string;
    /**
     * The total number of contacts in the group irrespective of max members in
     * specified in the request.
     */
    memberCount?: number;
    /**
     * The list of contact person resource names that are members of the contact
     * group. The field is not populated for LIST requests and can only be
     * updated through the
     * [ModifyContactGroupMembers](/people/api/rest/v1/contactgroups/members/modify).
     */
    memberResourceNames?: string[];
    /**
     * Metadata about the contact group.
     */
    metadata?: Schema$ContactGroupMetadata;
    /**
     * The contact group name set by the group owner or a system provided name
     * for system groups.
     */
    name?: string;
    /**
     * The resource name for the contact group, assigned by the server. An ASCII
     * string, in the form of
     * `contactGroups/`&lt;var&gt;contact_group_id&lt;/var&gt;.
     */
    resourceName?: string;
  }
  /**
   * A Google contact group membership.
   */
  export interface Schema$ContactGroupMembership {
    /**
     * The contact group ID for the contact group membership. The contact group
     * ID can be custom or one of these predefined values:  *  `myContacts` *
     * `starred` *  A numerical ID for user-created groups.
     */
    contactGroupId?: string;
  }
  /**
   * The read-only metadata about a contact group.
   */
  export interface Schema$ContactGroupMetadata {
    /**
     * True if the contact group resource has been deleted. Populated only for
     * [`ListContactGroups`](/people/api/rest/v1/contactgroups/list) requests
     * that include a sync token.
     */
    deleted?: boolean;
    /**
     * The time the group was last updated.
     */
    updateTime?: string;
  }
  /**
   * The response for a specific contact group.
   */
  export interface Schema$ContactGroupResponse {
    /**
     * The contact group.
     */
    contactGroup?: Schema$ContactGroup;
    /**
     * The original requested resource name.
     */
    requestedResourceName?: string;
    /**
     * The status of the response.
     */
    status?: Schema$Status;
  }
  /**
   * A person&#39;s read-only cover photo. A large image shown on the
   * person&#39;s profile page that represents who they are or what they care
   * about.
   */
  export interface Schema$CoverPhoto {
    /**
     * True if the cover photo is the default cover photo; false if the cover
     * photo is a user-provided cover photo.
     */
    default?: boolean;
    /**
     * Metadata about the cover photo.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The URL of the cover photo.
     */
    url?: string;
  }
  /**
   * A request to create a new contact group.
   */
  export interface Schema$CreateContactGroupRequest {
    /**
     * The contact group to create.
     */
    contactGroup?: Schema$ContactGroup;
  }
  /**
   * Represents a whole calendar date, for example a date of birth. The time of
   * day and time zone are either specified elsewhere or are not significant.
   * The date is relative to the [Proleptic Gregorian
   * Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The
   * day may be 0 to represent a year and month where the day is not
   * significant. The year may be 0 to represent a month and day independent of
   * year; for example, anniversary date.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year/month where the day is not significant.
     */
    day?: number;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a date without a
     * month.
     */
    month?: number;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
     * year.
     */
    year?: number;
  }
  /**
   * A Google Apps Domain membership.
   */
  export interface Schema$DomainMembership {
    /**
     * True if the person is in the viewer&#39;s Google Apps domain.
     */
    inViewerDomain?: boolean;
  }
  /**
   * A person&#39;s email address.
   */
  export interface Schema$EmailAddress {
    /**
     * The display name of the email.
     */
    displayName?: string;
    /**
     * The read-only type of the email address translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about the email address.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The type of the email address. The type can be custom or one of these
     * predefined values:  * `home` * `work` * `other`
     */
    type?: string;
    /**
     * The email address.
     */
    value?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * An event related to the person.
   */
  export interface Schema$Event {
    /**
     * The date of the event.
     */
    date?: Schema$Date;
    /**
     * The read-only type of the event translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about the event.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The type of the event. The type can be custom or one of these predefined
     * values:  * `anniversary` * `other`
     */
    type?: string;
  }
  /**
   * Metadata about a field.
   */
  export interface Schema$FieldMetadata {
    /**
     * True if the field is the primary field; false if the field is a secondary
     * field.
     */
    primary?: boolean;
    /**
     * The source of the field.
     */
    source?: Schema$Source;
    /**
     * True if the field is verified; false if the field is unverified. A
     * verified field is typically a name, email address, phone number, or
     * website that has been confirmed to be owned by the person.
     */
    verified?: boolean;
  }
  /**
   * A person&#39;s gender.
   */
  export interface Schema$Gender {
    /**
     * The read-only value of the gender translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedValue?: string;
    /**
     * Metadata about the gender.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The gender for the person. The gender can be custom or one of these
     * predefined values:  * `male` * `female` * `other` * `unknown`
     */
    value?: string;
  }
  export interface Schema$GetPeopleResponse {
    /**
     * The response for each requested resource name.
     */
    responses?: Schema$PersonResponse[];
  }
  /**
   * A person&#39;s instant messaging client.
   */
  export interface Schema$ImClient {
    /**
     * The read-only protocol of the IM client formatted in the viewer&#39;s
     * account locale or the `Accept-Language` HTTP header locale.
     */
    formattedProtocol?: string;
    /**
     * The read-only type of the IM client translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about the IM client.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The protocol of the IM client. The protocol can be custom or one of these
     * predefined values:  * `aim` * `msn` * `yahoo` * `skype` * `qq` *
     * `googleTalk` * `icq` * `jabber` * `netMeeting`
     */
    protocol?: string;
    /**
     * The type of the IM client. The type can be custom or one of these
     * predefined values:  * `home` * `work` * `other`
     */
    type?: string;
    /**
     * The user name used in the IM client.
     */
    username?: string;
  }
  /**
   * One of the person&#39;s interests.
   */
  export interface Schema$Interest {
    /**
     * Metadata about the interest.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The interest; for example, `stargazing`.
     */
    value?: string;
  }
  export interface Schema$ListConnectionsResponse {
    /**
     * The list of people that the requestor is connected to.
     */
    connections?: Schema$Person[];
    /**
     * The token that can be used to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The token that can be used to retrieve changes since the last request.
     */
    nextSyncToken?: string;
    /**
     * The total number of items in the list without pagination.
     */
    totalItems?: number;
    /**
     * **DEPRECATED** (Please use totalItems) The total number of people in the
     * list without pagination.
     */
    totalPeople?: number;
  }
  /**
   * The response to a list contact groups request.
   */
  export interface Schema$ListContactGroupsResponse {
    /**
     * The list of contact groups. Members of the contact groups are not
     * populated.
     */
    contactGroups?: Schema$ContactGroup[];
    /**
     * The token that can be used to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The token that can be used to retrieve changes since the last request.
     */
    nextSyncToken?: string;
    /**
     * The total number of items in the list without pagination.
     */
    totalItems?: number;
  }
  /**
   * A person&#39;s locale preference.
   */
  export interface Schema$Locale {
    /**
     * Metadata about the locale.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language
     * tag representing the locale.
     */
    value?: string;
  }
  /**
   * A person&#39;s read-only membership in a group.
   */
  export interface Schema$Membership {
    /**
     * The contact group membership.
     */
    contactGroupMembership?: Schema$ContactGroupMembership;
    /**
     * The domain membership.
     */
    domainMembership?: Schema$DomainMembership;
    /**
     * Metadata about the membership.
     */
    metadata?: Schema$FieldMetadata;
  }
  /**
   * A request to modify an existing contact group&#39;s members. Contacts can
   * be removed from any group but they can only be added to a user group or
   * myContacts or starred system groups.
   */
  export interface Schema$ModifyContactGroupMembersRequest {
    /**
     * The resource names of the contact people to add in the form of in the
     * form `people/`&lt;var&gt;person_id&lt;/var&gt;.
     */
    resourceNamesToAdd?: string[];
    /**
     * The resource names of the contact people to remove in the form of in the
     * form of `people/`&lt;var&gt;person_id&lt;/var&gt;.
     */
    resourceNamesToRemove?: string[];
  }
  /**
   * The response to a modify contact group members request.
   */
  export interface Schema$ModifyContactGroupMembersResponse {
    /**
     * The contact people resource names that were not found.
     */
    notFoundResourceNames?: string[];
  }
  /**
   * A person&#39;s name. If the name is a mononym, the family name is empty.
   */
  export interface Schema$Name {
    /**
     * The read-only display name formatted according to the locale specified by
     * the viewer&#39;s account or the `Accept-Language` HTTP header.
     */
    displayName?: string;
    /**
     * The read-only display name with the last name first formatted according
     * to the locale specified by the viewer&#39;s account or the
     * `Accept-Language` HTTP header.
     */
    displayNameLastFirst?: string;
    /**
     * The family name.
     */
    familyName?: string;
    /**
     * The given name.
     */
    givenName?: string;
    /**
     * The honorific prefixes, such as `Mrs.` or `Dr.`
     */
    honorificPrefix?: string;
    /**
     * The honorific suffixes, such as `Jr.`
     */
    honorificSuffix?: string;
    /**
     * Metadata about the name.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The middle name(s).
     */
    middleName?: string;
    /**
     * The family name spelled as it sounds.
     */
    phoneticFamilyName?: string;
    /**
     * The full name spelled as it sounds.
     */
    phoneticFullName?: string;
    /**
     * The given name spelled as it sounds.
     */
    phoneticGivenName?: string;
    /**
     * The honorific prefixes spelled as they sound.
     */
    phoneticHonorificPrefix?: string;
    /**
     * The honorific suffixes spelled as they sound.
     */
    phoneticHonorificSuffix?: string;
    /**
     * The middle name(s) spelled as they sound.
     */
    phoneticMiddleName?: string;
  }
  /**
   * A person&#39;s nickname.
   */
  export interface Schema$Nickname {
    /**
     * Metadata about the nickname.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The type of the nickname.
     */
    type?: string;
    /**
     * The nickname.
     */
    value?: string;
  }
  /**
   * A person&#39;s occupation.
   */
  export interface Schema$Occupation {
    /**
     * Metadata about the occupation.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The occupation; for example, `carpenter`.
     */
    value?: string;
  }
  /**
   * A person&#39;s past or current organization. Overlapping date ranges are
   * permitted.
   */
  export interface Schema$Organization {
    /**
     * True if the organization is the person&#39;s current organization; false
     * if the organization is a past organization.
     */
    current?: boolean;
    /**
     * The person&#39;s department at the organization.
     */
    department?: string;
    /**
     * The domain name associated with the organization; for example,
     * `google.com`.
     */
    domain?: string;
    /**
     * The end date when the person left the organization.
     */
    endDate?: Schema$Date;
    /**
     * The read-only type of the organization translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * The person&#39;s job description at the organization.
     */
    jobDescription?: string;
    /**
     * The location of the organization office the person works at.
     */
    location?: string;
    /**
     * Metadata about the organization.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The name of the organization.
     */
    name?: string;
    /**
     * The phonetic name of the organization.
     */
    phoneticName?: string;
    /**
     * The start date when the person joined the organization.
     */
    startDate?: Schema$Date;
    /**
     * The symbol associated with the organization; for example, a stock ticker
     * symbol, abbreviation, or acronym.
     */
    symbol?: string;
    /**
     * The person&#39;s job title at the organization.
     */
    title?: string;
    /**
     * The type of the organization. The type can be custom or  one of these
     * predefined values:  * `work` * `school`
     */
    type?: string;
  }
  /**
   * Information about a person merged from various data sources such as the
   * authenticated user&#39;s contacts and profile data.  Most fields can have
   * multiple items. The items in a field have no guaranteed order, but each
   * non-empty field is guaranteed to have exactly one field with
   * `metadata.primary` set to true.
   */
  export interface Schema$Person {
    /**
     * The person&#39;s street addresses.
     */
    addresses?: Schema$Address[];
    /**
     * **DEPRECATED** (Please use `person.ageRanges` instead)**  The
     * person&#39;s read-only age range.
     */
    ageRange?: string;
    /**
     * The person&#39;s read-only age ranges.
     */
    ageRanges?: Schema$AgeRangeType[];
    /**
     * The person&#39;s biographies.
     */
    biographies?: Schema$Biography[];
    /**
     * The person&#39;s birthdays.
     */
    birthdays?: Schema$Birthday[];
    /**
     * The person&#39;s bragging rights.
     */
    braggingRights?: Schema$BraggingRights[];
    /**
     * The person&#39;s read-only cover photos.
     */
    coverPhotos?: Schema$CoverPhoto[];
    /**
     * The person&#39;s email addresses.
     */
    emailAddresses?: Schema$EmailAddress[];
    /**
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
     * resource. Used for web cache validation.
     */
    etag?: string;
    /**
     * The person&#39;s events.
     */
    events?: Schema$Event[];
    /**
     * The person&#39;s genders.
     */
    genders?: Schema$Gender[];
    /**
     * The person&#39;s instant messaging clients.
     */
    imClients?: Schema$ImClient[];
    /**
     * The person&#39;s interests.
     */
    interests?: Schema$Interest[];
    /**
     * The person&#39;s locale preferences.
     */
    locales?: Schema$Locale[];
    /**
     * The person&#39;s read-only group memberships.
     */
    memberships?: Schema$Membership[];
    /**
     * Read-only metadata about the person.
     */
    metadata?: Schema$PersonMetadata;
    /**
     * The person&#39;s names.
     */
    names?: Schema$Name[];
    /**
     * The person&#39;s nicknames.
     */
    nicknames?: Schema$Nickname[];
    /**
     * The person&#39;s occupations.
     */
    occupations?: Schema$Occupation[];
    /**
     * The person&#39;s past or current organizations.
     */
    organizations?: Schema$Organization[];
    /**
     * The person&#39;s phone numbers.
     */
    phoneNumbers?: Schema$PhoneNumber[];
    /**
     * The person&#39;s read-only photos.
     */
    photos?: Schema$Photo[];
    /**
     * The person&#39;s relations.
     */
    relations?: Schema$Relation[];
    /**
     * The person&#39;s read-only relationship interests.
     */
    relationshipInterests?: Schema$RelationshipInterest[];
    /**
     * The person&#39;s read-only relationship statuses.
     */
    relationshipStatuses?: Schema$RelationshipStatus[];
    /**
     * The person&#39;s residences.
     */
    residences?: Schema$Residence[];
    /**
     * The resource name for the person, assigned by the server. An ASCII string
     * with a max length of 27 characters, in the form of
     * `people/`&lt;var&gt;person_id&lt;/var&gt;.
     */
    resourceName?: string;
    /**
     * The person&#39;s SIP addresses.
     */
    sipAddresses?: Schema$SipAddress[];
    /**
     * The person&#39;s skills.
     */
    skills?: Schema$Skill[];
    /**
     * The person&#39;s read-only taglines.
     */
    taglines?: Schema$Tagline[];
    /**
     * The person&#39;s associated URLs.
     */
    urls?: Schema$Url[];
    /**
     * The person&#39;s user defined data.
     */
    userDefined?: Schema$UserDefined[];
  }
  /**
   * The read-only metadata about a person.
   */
  export interface Schema$PersonMetadata {
    /**
     * True if the person resource has been deleted. Populated only for
     * [`connections.list`](/people/api/rest/v1/people.connections/list)
     * requests that include a sync token.
     */
    deleted?: boolean;
    /**
     * Resource names of people linked to this resource.
     */
    linkedPeopleResourceNames?: string[];
    /**
     * **DEPRECATED** (Please use
     * `person.metadata.sources.profileMetadata.objectType` instead)  The type
     * of the person object.
     */
    objectType?: string;
    /**
     * Any former resource names this person has had. Populated only for
     * [`connections.list`](/people/api/rest/v1/people.connections/list)
     * requests that include a sync token.  The resource name may change when
     * adding or removing fields that link a contact and profile such as a
     * verified email, verified phone number, or profile URL.
     */
    previousResourceNames?: string[];
    /**
     * The sources of data for the person.
     */
    sources?: Schema$Source[];
  }
  /**
   * The response for a single person
   */
  export interface Schema$PersonResponse {
    /**
     * **DEPRECATED** (Please use status instead)  [HTTP 1.1 status code]
     * (http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
     */
    httpStatusCode?: number;
    /**
     * The person.
     */
    person?: Schema$Person;
    /**
     * The original requested resource name. May be different than the resource
     * name on the returned person.  The resource name can change when adding or
     * removing fields that link a contact and profile such as a verified email,
     * verified phone number, or a profile URL.
     */
    requestedResourceName?: string;
    /**
     * The status of the response.
     */
    status?: Schema$Status;
  }
  /**
   * A person&#39;s phone number.
   */
  export interface Schema$PhoneNumber {
    /**
     * The read-only canonicalized [ITU-T
     * E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf)
     * form of the phone number.
     */
    canonicalForm?: string;
    /**
     * The read-only type of the phone number translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about the phone number.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The type of the phone number. The type can be custom or one of these
     * predefined values:  * `home` * `work` * `mobile` * `homeFax` * `workFax`
     * * `otherFax` * `pager` * `workMobile` * `workPager` * `main` *
     * `googleVoice` * `other`
     */
    type?: string;
    /**
     * The phone number.
     */
    value?: string;
  }
  /**
   * A person&#39;s read-only photo. A picture shown next to the person&#39;s
   * name to help others recognize the person.
   */
  export interface Schema$Photo {
    /**
     * True if the photo is a default photo; false if the photo is a
     * user-provided photo.
     */
    default?: boolean;
    /**
     * Metadata about the photo.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The URL of the photo. You can change the desired size by appending a
     * query parameter `sz=`&lt;var&gt;size&lt;/var&gt; at the end of the url.
     * Example:
     * `https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50`
     */
    url?: string;
  }
  /**
   * The read-only metadata about a profile.
   */
  export interface Schema$ProfileMetadata {
    /**
     * The profile object type.
     */
    objectType?: string;
    /**
     * The user types.
     */
    userTypes?: string[];
  }
  /**
   * A person&#39;s relation to another person.
   */
  export interface Schema$Relation {
    /**
     * The type of the relation translated and formatted in the viewer&#39;s
     * account locale or the locale specified in the Accept-Language HTTP
     * header.
     */
    formattedType?: string;
    /**
     * Metadata about the relation.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The name of the other person this relation refers to.
     */
    person?: string;
    /**
     * The person&#39;s relation to the other person. The type can be custom or
     * one of these predefined values:  * `spouse` * `child` * `mother` *
     * `father` * `parent` * `brother` * `sister` * `friend` * `relative` *
     * `domesticPartner` * `manager` * `assistant` * `referredBy` * `partner`
     */
    type?: string;
  }
  /**
   * A person&#39;s read-only relationship interest .
   */
  export interface Schema$RelationshipInterest {
    /**
     * The value of the relationship interest translated and formatted in the
     * viewer&#39;s account locale or the locale specified in the
     * Accept-Language HTTP header.
     */
    formattedValue?: string;
    /**
     * Metadata about the relationship interest.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The kind of relationship the person is looking for. The value can be
     * custom or one of these predefined values:  * `friend` * `date` *
     * `relationship` * `networking`
     */
    value?: string;
  }
  /**
   * A person&#39;s read-only relationship status.
   */
  export interface Schema$RelationshipStatus {
    /**
     * The read-only value of the relationship status translated and formatted
     * in the viewer&#39;s account locale or the `Accept-Language` HTTP header
     * locale.
     */
    formattedValue?: string;
    /**
     * Metadata about the relationship status.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The relationship status. The value can be custom or one of these
     * predefined values:  * `single` * `inARelationship` * `engaged` *
     * `married` * `itsComplicated` * `openRelationship` * `widowed` *
     * `inDomesticPartnership` * `inCivilUnion`
     */
    value?: string;
  }
  /**
   * A person&#39;s past or current residence.
   */
  export interface Schema$Residence {
    /**
     * True if the residence is the person&#39;s current residence; false if the
     * residence is a past residence.
     */
    current?: boolean;
    /**
     * Metadata about the residence.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The address of the residence.
     */
    value?: string;
  }
  /**
   * A person&#39;s SIP address. Session Initial Protocol addresses are used for
   * VoIP communications to make voice or video calls over the internet.
   */
  export interface Schema$SipAddress {
    /**
     * The read-only type of the SIP address translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about the SIP address.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The type of the SIP address. The type can be custom or or one of these
     * predefined values:  * `home` * `work` * `mobile` * `other`
     */
    type?: string;
    /**
     * The SIP address in the [RFC
     * 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI
     * format.
     */
    value?: string;
  }
  /**
   * A skill that the person has.
   */
  export interface Schema$Skill {
    /**
     * Metadata about the skill.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The skill; for example, `underwater basket weaving`.
     */
    value?: string;
  }
  /**
   * The source of a field.
   */
  export interface Schema$Source {
    /**
     * **Only populated in `person.metadata.sources`.**  The [HTTP entity
     * tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web
     * cache validation.
     */
    etag?: string;
    /**
     * The unique identifier within the source type generated by the server.
     */
    id?: string;
    /**
     * **Only populated in `person.metadata.sources`.**  Metadata about a source
     * of type PROFILE.
     */
    profileMetadata?: Schema$ProfileMetadata;
    /**
     * The source type.
     */
    type?: string;
    /**
     * **Only populated in `person.metadata.sources`.**  Last update timestamp
     * of this source.
     */
    updateTime?: string;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * A read-only brief one-line description of the person.
   */
  export interface Schema$Tagline {
    /**
     * Metadata about the tagline.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The tagline.
     */
    value?: string;
  }
  /**
   * A request to update an existing user contact group. All updated fields will
   * be replaced.
   */
  export interface Schema$UpdateContactGroupRequest {
    /**
     * The contact group to update.
     */
    contactGroup?: Schema$ContactGroup;
  }
  /**
   * A person&#39;s associated URLs.
   */
  export interface Schema$Url {
    /**
     * The read-only type of the URL translated and formatted in the
     * viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about the URL.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The type of the URL. The type can be custom or one of these predefined
     * values:  * `home` * `work` * `blog` * `profile` * `homePage` * `ftp` *
     * `reservations` * `appInstallPage`: website for a Google+ application. *
     * `other`
     */
    type?: string;
    /**
     * The URL.
     */
    value?: string;
  }
  /**
   * Arbitrary user data that is populated by the end users.
   */
  export interface Schema$UserDefined {
    /**
     * The end user specified key of the user defined data.
     */
    key?: string;
    /**
     * Metadata about the user defined data.
     */
    metadata?: Schema$FieldMetadata;
    /**
     * The end user specified value of the user defined data.
     */
    value?: string;
  }


  export class Resource$Contactgroups {
    root: People;
    members: Resource$Contactgroups$Members;
    constructor(root: People) {
      this.root = root;
      this.getRoot.bind(this);
      this.members = new Resource$Contactgroups$Members(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * people.contactGroups.batchGet
     * @desc Get a list of contact groups owned by the authenticated user by
     * specifying a list of contact group resource names.
     * @alias people.contactGroups.batchGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxMembers Specifies the maximum number of members to return for each group.
     * @param {string=} params.resourceNames The resource names of the contact groups to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet(
        params?: Params$Resource$Contactgroups$Batchget,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchGetContactGroupsResponse>;
    batchGet(
        params: Params$Resource$Contactgroups$Batchget,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchGetContactGroupsResponse>,
        callback: BodyResponseCallback<Schema$BatchGetContactGroupsResponse>):
        void;
    batchGet(
        params: Params$Resource$Contactgroups$Batchget,
        callback: BodyResponseCallback<Schema$BatchGetContactGroupsResponse>):
        void;
    batchGet(callback:
                 BodyResponseCallback<Schema$BatchGetContactGroupsResponse>):
        void;
    batchGet(
        paramsOrCallback?: Params$Resource$Contactgroups$Batchget|
        BodyResponseCallback<Schema$BatchGetContactGroupsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchGetContactGroupsResponse>,
        callback?: BodyResponseCallback<Schema$BatchGetContactGroupsResponse>):
        void|AxiosPromise<Schema$BatchGetContactGroupsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Contactgroups$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contactgroups$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/contactGroups:batchGet')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetContactGroupsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchGetContactGroupsResponse>(
            parameters);
      }
    }


    /**
     * people.contactGroups.create
     * @desc Create a new contact group owned by the authenticated user.
     * @alias people.contactGroups.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().CreateContactGroupRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Contactgroups$Create,
        options?: MethodOptions): AxiosPromise<Schema$ContactGroup>;
    create(
        params: Params$Resource$Contactgroups$Create,
        options: MethodOptions|BodyResponseCallback<Schema$ContactGroup>,
        callback: BodyResponseCallback<Schema$ContactGroup>): void;
    create(
        params: Params$Resource$Contactgroups$Create,
        callback: BodyResponseCallback<Schema$ContactGroup>): void;
    create(callback: BodyResponseCallback<Schema$ContactGroup>): void;
    create(
        paramsOrCallback?: Params$Resource$Contactgroups$Create|
        BodyResponseCallback<Schema$ContactGroup>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ContactGroup>,
        callback?: BodyResponseCallback<Schema$ContactGroup>):
        void|AxiosPromise<Schema$ContactGroup> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Contactgroups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contactgroups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1/contactGroups').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ContactGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContactGroup>(parameters);
      }
    }


    /**
     * people.contactGroups.delete
     * @desc Delete an existing contact group owned by the authenticated user by
     * specifying a contact group resource name.
     * @alias people.contactGroups.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.deleteContacts Set to true to also delete the contacts in the specified group.
     * @param {string} params.resourceName The resource name of the contact group to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Contactgroups$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Contactgroups$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Contactgroups$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Contactgroups$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Contactgroups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contactgroups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resourceName}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * people.contactGroups.get
     * @desc Get a specific contact group owned by the authenticated user by
     * specifying a contact group resource name.
     * @alias people.contactGroups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxMembers Specifies the maximum number of members to return.
     * @param {string} params.resourceName The resource name of the contact group to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Contactgroups$Get,
        options?: MethodOptions): AxiosPromise<Schema$ContactGroup>;
    get(params: Params$Resource$Contactgroups$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ContactGroup>,
        callback: BodyResponseCallback<Schema$ContactGroup>): void;
    get(params: Params$Resource$Contactgroups$Get,
        callback: BodyResponseCallback<Schema$ContactGroup>): void;
    get(callback: BodyResponseCallback<Schema$ContactGroup>): void;
    get(paramsOrCallback?: Params$Resource$Contactgroups$Get|
        BodyResponseCallback<Schema$ContactGroup>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ContactGroup>,
        callback?: BodyResponseCallback<Schema$ContactGroup>):
        void|AxiosPromise<Schema$ContactGroup> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Contactgroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contactgroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resourceName}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ContactGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContactGroup>(parameters);
      }
    }


    /**
     * people.contactGroups.list
     * @desc List all contact groups owned by the authenticated user. Members of
     * the contact groups are not populated.
     * @alias people.contactGroups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of resources to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous call to [ListContactGroups](/people/api/rest/v1/contactgroups/list). Requests the next page of resources.
     * @param {string=} params.syncToken A sync token, returned by a previous call to `contactgroups.list`. Only resources changed since the sync token was created will be returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Contactgroups$List, options?: MethodOptions):
        AxiosPromise<Schema$ListContactGroupsResponse>;
    list(
        params: Params$Resource$Contactgroups$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListContactGroupsResponse>,
        callback: BodyResponseCallback<Schema$ListContactGroupsResponse>): void;
    list(
        params: Params$Resource$Contactgroups$List,
        callback: BodyResponseCallback<Schema$ListContactGroupsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListContactGroupsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Contactgroups$List|
        BodyResponseCallback<Schema$ListContactGroupsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListContactGroupsResponse>,
        callback?: BodyResponseCallback<Schema$ListContactGroupsResponse>):
        void|AxiosPromise<Schema$ListContactGroupsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Contactgroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contactgroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1/contactGroups').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListContactGroupsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListContactGroupsResponse>(parameters);
      }
    }


    /**
     * people.contactGroups.update
     * @desc Update the name of an existing contact group owned by the
     * authenticated user.
     * @alias people.contactGroups.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceName The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/`<var>contact_group_id</var>.
     * @param {().UpdateContactGroupRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Contactgroups$Update,
        options?: MethodOptions): AxiosPromise<Schema$ContactGroup>;
    update(
        params: Params$Resource$Contactgroups$Update,
        options: MethodOptions|BodyResponseCallback<Schema$ContactGroup>,
        callback: BodyResponseCallback<Schema$ContactGroup>): void;
    update(
        params: Params$Resource$Contactgroups$Update,
        callback: BodyResponseCallback<Schema$ContactGroup>): void;
    update(callback: BodyResponseCallback<Schema$ContactGroup>): void;
    update(
        paramsOrCallback?: Params$Resource$Contactgroups$Update|
        BodyResponseCallback<Schema$ContactGroup>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ContactGroup>,
        callback?: BodyResponseCallback<Schema$ContactGroup>):
        void|AxiosPromise<Schema$ContactGroup> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Contactgroups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contactgroups$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resourceName}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ContactGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContactGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Contactgroups$Batchget {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specifies the maximum number of members to return for each group.
     */
    maxMembers?: number;
    /**
     * The resource names of the contact groups to get.
     */
    resourceNames?: string;
  }
  export interface Params$Resource$Contactgroups$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateContactGroupRequest;
  }
  export interface Params$Resource$Contactgroups$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Set to true to also delete the contacts in the specified group.
     */
    deleteContacts?: boolean;
    /**
     * The resource name of the contact group to delete.
     */
    resourceName?: string;
  }
  export interface Params$Resource$Contactgroups$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specifies the maximum number of members to return.
     */
    maxMembers?: number;
    /**
     * The resource name of the contact group to get.
     */
    resourceName?: string;
  }
  export interface Params$Resource$Contactgroups$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of resources to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous call to
     * [ListContactGroups](/people/api/rest/v1/contactgroups/list). Requests the
     * next page of resources.
     */
    pageToken?: string;
    /**
     * A sync token, returned by a previous call to `contactgroups.list`. Only
     * resources changed since the sync token was created will be returned.
     */
    syncToken?: string;
  }
  export interface Params$Resource$Contactgroups$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name for the contact group, assigned by the server. An ASCII
     * string, in the form of `contactGroups/`<var>contact_group_id</var>.
     */
    resourceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateContactGroupRequest;
  }

  export class Resource$Contactgroups$Members {
    root: People;
    constructor(root: People) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * people.contactGroups.members.modify
     * @desc Modify the members of a contact group owned by the authenticated
     * user.
     * @alias people.contactGroups.members.modify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceName The resource name of the contact group to modify.
     * @param {().ModifyContactGroupMembersRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    modify(
        params?: Params$Resource$Contactgroups$Members$Modify,
        options?: MethodOptions):
        AxiosPromise<Schema$ModifyContactGroupMembersResponse>;
    modify(
        params: Params$Resource$Contactgroups$Members$Modify,
        options: MethodOptions|
        BodyResponseCallback<Schema$ModifyContactGroupMembersResponse>,
        callback:
            BodyResponseCallback<Schema$ModifyContactGroupMembersResponse>):
        void;
    modify(
        params: Params$Resource$Contactgroups$Members$Modify,
        callback:
            BodyResponseCallback<Schema$ModifyContactGroupMembersResponse>):
        void;
    modify(callback:
               BodyResponseCallback<Schema$ModifyContactGroupMembersResponse>):
        void;
    modify(
        paramsOrCallback?: Params$Resource$Contactgroups$Members$Modify|
        BodyResponseCallback<Schema$ModifyContactGroupMembersResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ModifyContactGroupMembersResponse>,
        callback?:
            BodyResponseCallback<Schema$ModifyContactGroupMembersResponse>):
        void|AxiosPromise<Schema$ModifyContactGroupMembersResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Contactgroups$Members$Modify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contactgroups$Members$Modify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resourceName}/members:modify')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ModifyContactGroupMembersResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ModifyContactGroupMembersResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Contactgroups$Members$Modify {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the contact group to modify.
     */
    resourceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyContactGroupMembersRequest;
  }



  export class Resource$People {
    root: People;
    connections: Resource$People$Connections;
    constructor(root: People) {
      this.root = root;
      this.getRoot.bind(this);
      this.connections = new Resource$People$Connections(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * people.people.createContact
     * @desc Create a new contact and return the person resource for that
     * contact.
     * @alias people.people.createContact
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.parent The resource name of the owning person resource.
     * @param {().Person} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createContact(
        params?: Params$Resource$People$Createcontact,
        options?: MethodOptions): AxiosPromise<Schema$Person>;
    createContact(
        params: Params$Resource$People$Createcontact,
        options: MethodOptions|BodyResponseCallback<Schema$Person>,
        callback: BodyResponseCallback<Schema$Person>): void;
    createContact(
        params: Params$Resource$People$Createcontact,
        callback: BodyResponseCallback<Schema$Person>): void;
    createContact(callback: BodyResponseCallback<Schema$Person>): void;
    createContact(
        paramsOrCallback?: Params$Resource$People$Createcontact|
        BodyResponseCallback<Schema$Person>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Person>,
        callback?: BodyResponseCallback<Schema$Person>):
        void|AxiosPromise<Schema$Person> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$People$Createcontact;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Createcontact;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/people:createContact')
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
        createAPIRequest<Schema$Person>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Person>(parameters);
      }
    }


    /**
     * people.people.deleteContact
     * @desc Delete a contact person. Any non-contact data will not be deleted.
     * @alias people.people.deleteContact
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceName The resource name of the contact to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteContact(
        params?: Params$Resource$People$Deletecontact,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    deleteContact(
        params: Params$Resource$People$Deletecontact,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    deleteContact(
        params: Params$Resource$People$Deletecontact,
        callback: BodyResponseCallback<Schema$Empty>): void;
    deleteContact(callback: BodyResponseCallback<Schema$Empty>): void;
    deleteContact(
        paramsOrCallback?: Params$Resource$People$Deletecontact|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$People$Deletecontact;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Deletecontact;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resourceName}:deleteContact')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * people.people.get
     * @desc Provides information about a person by specifying a resource name.
     * Use `people/me` to indicate the authenticated user. <br> The request
     * throws a 400 error if 'personFields' is not specified.
     * @alias people.people.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.personFields **Required.** A field mask to restrict which fields on the person are returned. Multiple fields can be specified by separating them with commas. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * sipAddresses * skills * taglines * urls * userDefined
     * @param {string=} params.requestMask.includeField **Required.** Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
     * @param {string} params.resourceName The resource name of the person to provide information about.  - To get information about the authenticated user, specify `people/me`. - To get information about a google account, specify  `people/`<var>account_id</var>. - To get information about a contact, specify the resource name that   identifies the contact as returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$People$Get,
        options?: MethodOptions): AxiosPromise<Schema$Person>;
    get(params: Params$Resource$People$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Person>,
        callback: BodyResponseCallback<Schema$Person>): void;
    get(params: Params$Resource$People$Get,
        callback: BodyResponseCallback<Schema$Person>): void;
    get(callback: BodyResponseCallback<Schema$Person>): void;
    get(paramsOrCallback?: Params$Resource$People$Get|
        BodyResponseCallback<Schema$Person>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Person>,
        callback?: BodyResponseCallback<Schema$Person>):
        void|AxiosPromise<Schema$Person> {
      let params = (paramsOrCallback || {}) as Params$Resource$People$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resourceName}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Person>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Person>(parameters);
      }
    }


    /**
     * people.people.getBatchGet
     * @desc Provides information about a list of specific people by specifying
     * a list of requested resource names. Use `people/me` to indicate the
     * authenticated user. <br> The request throws a 400 error if 'personFields'
     * is not specified.
     * @alias people.people.getBatchGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.personFields **Required.** A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * sipAddresses * skills * taglines * urls * userDefined
     * @param {string=} params.requestMask.includeField **Required.** Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
     * @param {string=} params.resourceNames The resource names of the people to provide information about.  - To get information about the authenticated user, specify `people/me`. - To get information about a google account, specify   `people/`<var>account_id</var>. - To get information about a contact, specify the resource name that   identifies the contact as returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list).  You can include up to 50 resource names in one request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getBatchGet(
        params?: Params$Resource$People$Getbatchget,
        options?: MethodOptions): AxiosPromise<Schema$GetPeopleResponse>;
    getBatchGet(
        params: Params$Resource$People$Getbatchget,
        options: MethodOptions|BodyResponseCallback<Schema$GetPeopleResponse>,
        callback: BodyResponseCallback<Schema$GetPeopleResponse>): void;
    getBatchGet(
        params: Params$Resource$People$Getbatchget,
        callback: BodyResponseCallback<Schema$GetPeopleResponse>): void;
    getBatchGet(callback: BodyResponseCallback<Schema$GetPeopleResponse>): void;
    getBatchGet(
        paramsOrCallback?: Params$Resource$People$Getbatchget|
        BodyResponseCallback<Schema$GetPeopleResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GetPeopleResponse>,
        callback?: BodyResponseCallback<Schema$GetPeopleResponse>):
        void|AxiosPromise<Schema$GetPeopleResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$People$Getbatchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Getbatchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/people:batchGet')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GetPeopleResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetPeopleResponse>(parameters);
      }
    }


    /**
     * people.people.updateContact
     * @desc Update contact data for an existing contact person. Any non-contact
     * data will not be modified.  The request throws a 400 error if
     * `updatePersonFields` is not specified. <br> The request throws a 400
     * error if `person.metadata.sources` is not specified for the contact to be
     * updated. <br> The request throws a 412 error if
     * `person.metadata.sources.etag` is different than the contact's etag,
     * which indicates the contact has changed since its data was read. Clients
     * should get the latest person and re-apply their updates to the latest
     * person.
     * @alias people.people.updateContact
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceName The resource name for the person, assigned by the server. An ASCII string with a max length of 27 characters, in the form of `people/`<var>person_id</var>.
     * @param {string=} params.updatePersonFields **Required.** A field mask to restrict which fields on the person are updated. Multiple fields can be specified by separating them with commas. All updated fields will be replaced. Valid values are:  * addresses * biographies * birthdays * emailAddresses * events * genders * imClients * interests * locales * names * nicknames * occupations * organizations * phoneNumbers * relations * residences * sipAddresses * urls * userDefined
     * @param {().Person} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateContact(
        params?: Params$Resource$People$Updatecontact,
        options?: MethodOptions): AxiosPromise<Schema$Person>;
    updateContact(
        params: Params$Resource$People$Updatecontact,
        options: MethodOptions|BodyResponseCallback<Schema$Person>,
        callback: BodyResponseCallback<Schema$Person>): void;
    updateContact(
        params: Params$Resource$People$Updatecontact,
        callback: BodyResponseCallback<Schema$Person>): void;
    updateContact(callback: BodyResponseCallback<Schema$Person>): void;
    updateContact(
        paramsOrCallback?: Params$Resource$People$Updatecontact|
        BodyResponseCallback<Schema$Person>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Person>,
        callback?: BodyResponseCallback<Schema$Person>):
        void|AxiosPromise<Schema$Person> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$People$Updatecontact;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Updatecontact;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resourceName}:updateContact')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Person>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Person>(parameters);
      }
    }
  }

  export interface Params$Resource$People$Createcontact {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the owning person resource.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Person;
  }
  export interface Params$Resource$People$Deletecontact {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the contact to delete.
     */
    resourceName?: string;
  }
  export interface Params$Resource$People$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * **Required.** A field mask to restrict which fields on the person are
     * returned. Multiple fields can be specified by separating them with
     * commas. Valid values are:  * addresses * ageRanges * biographies *
     * birthdays * braggingRights * coverPhotos * emailAddresses * events *
     * genders * imClients * interests * locales * memberships * metadata *
     * names * nicknames * occupations * organizations * phoneNumbers * photos *
     * relations * relationshipInterests * relationshipStatuses * residences *
     * sipAddresses * skills * taglines * urls * userDefined
     */
    personFields?: string;
    /**
     * **Required.** Comma-separated list of person fields to be included in the
     * response. Each path should start with `person.`: for example,
     * `person.names` or `person.photos`.
     */
    'requestMask.includeField'?: string;
    /**
     * The resource name of the person to provide information about.  - To get
     * information about the authenticated user, specify `people/me`. - To get
     * information about a google account, specify
     * `people/`<var>account_id</var>. - To get information about a contact,
     * specify the resource name that   identifies the contact as returned by
     * [`people.connections.list`](/people/api/rest/v1/people.connections/list).
     */
    resourceName?: string;
  }
  export interface Params$Resource$People$Getbatchget {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * **Required.** A field mask to restrict which fields on each person are
     * returned. Multiple fields can be specified by separating them with
     * commas. Valid values are:  * addresses * ageRanges * biographies *
     * birthdays * braggingRights * coverPhotos * emailAddresses * events *
     * genders * imClients * interests * locales * memberships * metadata *
     * names * nicknames * occupations * organizations * phoneNumbers * photos *
     * relations * relationshipInterests * relationshipStatuses * residences *
     * sipAddresses * skills * taglines * urls * userDefined
     */
    personFields?: string;
    /**
     * **Required.** Comma-separated list of person fields to be included in the
     * response. Each path should start with `person.`: for example,
     * `person.names` or `person.photos`.
     */
    'requestMask.includeField'?: string;
    /**
     * The resource names of the people to provide information about.  - To get
     * information about the authenticated user, specify `people/me`. - To get
     * information about a google account, specify
     * `people/`<var>account_id</var>. - To get information about a contact,
     * specify the resource name that   identifies the contact as returned by
     * [`people.connections.list`](/people/api/rest/v1/people.connections/list).
     * You can include up to 50 resource names in one request.
     */
    resourceNames?: string;
  }
  export interface Params$Resource$People$Updatecontact {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name for the person, assigned by the server. An ASCII string
     * with a max length of 27 characters, in the form of
     * `people/`<var>person_id</var>.
     */
    resourceName?: string;
    /**
     * **Required.** A field mask to restrict which fields on the person are
     * updated. Multiple fields can be specified by separating them with commas.
     * All updated fields will be replaced. Valid values are:  * addresses *
     * biographies * birthdays * emailAddresses * events * genders * imClients *
     * interests * locales * names * nicknames * occupations * organizations *
     * phoneNumbers * relations * residences * sipAddresses * urls * userDefined
     */
    updatePersonFields?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Person;
  }

  export class Resource$People$Connections {
    root: People;
    constructor(root: People) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * people.people.connections.list
     * @desc Provides a list of the authenticated user's contacts merged with
     * any connected profiles. <br> The request throws a 400 error if
     * 'personFields' is not specified.
     * @alias people.people.connections.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The number of connections to include in the response. Valid values are between 1 and 2000, inclusive. Defaults to 100.
     * @param {string=} params.pageToken The token of the page to be returned.
     * @param {string=} params.personFields **Required.** A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * sipAddresses * skills * taglines * urls * userDefined
     * @param {string=} params.requestMask.includeField **Required.** Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
     * @param {boolean=} params.requestSyncToken Whether the response should include a sync token, which can be used to get all changes since the last request. For subsequent sync requests use the `sync_token` param instead. Initial sync requests that specify `request_sync_token` have an additional rate limit.
     * @param {string} params.resourceName The resource name to return connections for. Only `people/me` is valid.
     * @param {string=} params.sortOrder The order in which the connections should be sorted. Defaults to `LAST_MODIFIED_ASCENDING`.
     * @param {string=} params.syncToken A sync token returned by a previous call to `people.connections.list`. Only resources changed since the sync token was created will be returned. Sync requests that specify `sync_token` have an additional rate limit.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$People$Connections$List,
        options?: MethodOptions): AxiosPromise<Schema$ListConnectionsResponse>;
    list(
        params: Params$Resource$People$Connections$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListConnectionsResponse>,
        callback: BodyResponseCallback<Schema$ListConnectionsResponse>): void;
    list(
        params: Params$Resource$People$Connections$List,
        callback: BodyResponseCallback<Schema$ListConnectionsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListConnectionsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$People$Connections$List|
        BodyResponseCallback<Schema$ListConnectionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListConnectionsResponse>,
        callback?: BodyResponseCallback<Schema$ListConnectionsResponse>):
        void|AxiosPromise<Schema$ListConnectionsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$People$Connections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Connections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resourceName}/connections')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListConnectionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListConnectionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$People$Connections$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The number of connections to include in the response. Valid values are
     * between 1 and 2000, inclusive. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The token of the page to be returned.
     */
    pageToken?: string;
    /**
     * **Required.** A field mask to restrict which fields on each person are
     * returned. Multiple fields can be specified by separating them with
     * commas. Valid values are:  * addresses * ageRanges * biographies *
     * birthdays * braggingRights * coverPhotos * emailAddresses * events *
     * genders * imClients * interests * locales * memberships * metadata *
     * names * nicknames * occupations * organizations * phoneNumbers * photos *
     * relations * relationshipInterests * relationshipStatuses * residences *
     * sipAddresses * skills * taglines * urls * userDefined
     */
    personFields?: string;
    /**
     * **Required.** Comma-separated list of person fields to be included in the
     * response. Each path should start with `person.`: for example,
     * `person.names` or `person.photos`.
     */
    'requestMask.includeField'?: string;
    /**
     * Whether the response should include a sync token, which can be used to
     * get all changes since the last request. For subsequent sync requests use
     * the `sync_token` param instead. Initial sync requests that specify
     * `request_sync_token` have an additional rate limit.
     */
    requestSyncToken?: boolean;
    /**
     * The resource name to return connections for. Only `people/me` is valid.
     */
    resourceName?: string;
    /**
     * The order in which the connections should be sorted. Defaults to
     * `LAST_MODIFIED_ASCENDING`.
     */
    sortOrder?: string;
    /**
     * A sync token returned by a previous call to `people.connections.list`.
     * Only resources changed since the sync token was created will be returned.
     * Sync requests that specify `sync_token` have an additional rate limit.
     */
    syncToken?: string;
  }
}
