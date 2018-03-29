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
 * Calendar API
 *
 * Manipulates events and other calendar data.
 *
 * @example
 * const google = require('googleapis');
 * const calendar = google.calendar('v3');
 *
 * @namespace calendar
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Calendar
 */
export class Calendar {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  acl: Resource$Acl;
  calendarList: Resource$Calendarlist;
  calendars: Resource$Calendars;
  channels: Resource$Channels;
  colors: Resource$Colors;
  events: Resource$Events;
  freebusy: Resource$Freebusy;
  settings: Resource$Settings;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.acl = new Resource$Acl(this);
    this.calendarList = new Resource$Calendarlist(this);
    this.calendars = new Resource$Calendars(this);
    this.channels = new Resource$Channels(this);
    this.colors = new Resource$Colors(this);
    this.events = new Resource$Events(this);
    this.freebusy = new Resource$Freebusy(this);
    this.settings = new Resource$Settings(this);
  }

  getRoot() {
    return this.root;
  }
}

export interface Schema$Acl {
  /**
   * ETag of the collection.
   */
  etag: string;
  /**
   * List of rules on the access control list.
   */
  items: Schema$AclRule[];
  /**
   * Type of the collection (&quot;calendar#acl&quot;).
   */
  kind: string;
  /**
   * Token used to access the next page of this result. Omitted if no further
   * results are available, in which case nextSyncToken is provided.
   */
  nextPageToken: string;
  /**
   * Token used at a later point in time to retrieve only the entries that have
   * changed since this result was returned. Omitted if further results are
   * available, in which case nextPageToken is provided.
   */
  nextSyncToken: string;
}
export interface Schema$AclRule {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Identifier of the ACL rule.
   */
  id: string;
  /**
   * Type of the resource (&quot;calendar#aclRule&quot;).
   */
  kind: string;
  /**
   * The role assigned to the scope. Possible values are:   - &quot;none&quot; -
   * Provides no access.  - &quot;freeBusyReader&quot; - Provides read access to
   * free/busy information.  - &quot;reader&quot; - Provides read access to the
   * calendar. Private events will appear to users with reader access, but event
   * details will be hidden.  - &quot;writer&quot; - Provides read and write
   * access to the calendar. Private events will appear to users with writer
   * access, and event details will be visible.  - &quot;owner&quot; - Provides
   * ownership of the calendar. This role has all of the permissions of the
   * writer role with the additional ability to see and manipulate ACLs.
   */
  role: string;
  /**
   * The scope of the rule.
   */
  scope: any;
}
export interface Schema$Calendar {
  /**
   * Conferencing properties for this calendar, for example what types of
   * conferences are allowed.
   */
  conferenceProperties: Schema$ConferenceProperties;
  /**
   * Description of the calendar. Optional.
   */
  description: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Identifier of the calendar. To retrieve IDs call the calendarList.list()
   * method.
   */
  id: string;
  /**
   * Type of the resource (&quot;calendar#calendar&quot;).
   */
  kind: string;
  /**
   * Geographic location of the calendar as free-form text. Optional.
   */
  location: string;
  /**
   * Title of the calendar.
   */
  summary: string;
  /**
   * The time zone of the calendar. (Formatted as an IANA Time Zone Database
   * name, e.g. &quot;Europe/Zurich&quot;.) Optional.
   */
  timeZone: string;
}
export interface Schema$CalendarList {
  /**
   * ETag of the collection.
   */
  etag: string;
  /**
   * Calendars that are present on the user&#39;s calendar list.
   */
  items: Schema$CalendarListEntry[];
  /**
   * Type of the collection (&quot;calendar#calendarList&quot;).
   */
  kind: string;
  /**
   * Token used to access the next page of this result. Omitted if no further
   * results are available, in which case nextSyncToken is provided.
   */
  nextPageToken: string;
  /**
   * Token used at a later point in time to retrieve only the entries that have
   * changed since this result was returned. Omitted if further results are
   * available, in which case nextPageToken is provided.
   */
  nextSyncToken: string;
}
export interface Schema$CalendarListEntry {
  /**
   * The effective access role that the authenticated user has on the calendar.
   * Read-only. Possible values are:   - &quot;freeBusyReader&quot; - Provides
   * read access to free/busy information.  - &quot;reader&quot; - Provides read
   * access to the calendar. Private events will appear to users with reader
   * access, but event details will be hidden.  - &quot;writer&quot; - Provides
   * read and write access to the calendar. Private events will appear to users
   * with writer access, and event details will be visible.  - &quot;owner&quot;
   * - Provides ownership of the calendar. This role has all of the permissions
   * of the writer role with the additional ability to see and manipulate ACLs.
   */
  accessRole: string;
  /**
   * The main color of the calendar in the hexadecimal format
   * &quot;#0088aa&quot;. This property supersedes the index-based colorId
   * property. To set or change this property, you need to specify
   * colorRgbFormat=true in the parameters of the insert, update and patch
   * methods. Optional.
   */
  backgroundColor: string;
  /**
   * The color of the calendar. This is an ID referring to an entry in the
   * calendar section of the colors definition (see the colors endpoint). This
   * property is superseded by the backgroundColor and foregroundColor
   * properties and can be ignored when using these properties. Optional.
   */
  colorId: string;
  /**
   * Conferencing properties for this calendar, for example what types of
   * conferences are allowed.
   */
  conferenceProperties: Schema$ConferenceProperties;
  /**
   * The default reminders that the authenticated user has for this calendar.
   */
  defaultReminders: Schema$EventReminder[];
  /**
   * Whether this calendar list entry has been deleted from the calendar list.
   * Read-only. Optional. The default is False.
   */
  deleted: boolean;
  /**
   * Description of the calendar. Optional. Read-only.
   */
  description: string;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The foreground color of the calendar in the hexadecimal format
   * &quot;#ffffff&quot;. This property supersedes the index-based colorId
   * property. To set or change this property, you need to specify
   * colorRgbFormat=true in the parameters of the insert, update and patch
   * methods. Optional.
   */
  foregroundColor: string;
  /**
   * Whether the calendar has been hidden from the list. Optional. The default
   * is False.
   */
  hidden: boolean;
  /**
   * Identifier of the calendar.
   */
  id: string;
  /**
   * Type of the resource (&quot;calendar#calendarListEntry&quot;).
   */
  kind: string;
  /**
   * Geographic location of the calendar as free-form text. Optional. Read-only.
   */
  location: string;
  /**
   * The notifications that the authenticated user is receiving for this
   * calendar.
   */
  notificationSettings: any;
  /**
   * Whether the calendar is the primary calendar of the authenticated user.
   * Read-only. Optional. The default is False.
   */
  primary: boolean;
  /**
   * Whether the calendar content shows up in the calendar UI. Optional. The
   * default is False.
   */
  selected: boolean;
  /**
   * Title of the calendar. Read-only.
   */
  summary: string;
  /**
   * The summary that the authenticated user has set for this calendar.
   * Optional.
   */
  summaryOverride: string;
  /**
   * The time zone of the calendar. Optional. Read-only.
   */
  timeZone: string;
}
export interface Schema$CalendarNotification {
  /**
   * The method used to deliver the notification. Possible values are:   -
   * &quot;email&quot; - Reminders are sent via email.  - &quot;sms&quot; -
   * Reminders are sent via SMS. This value is read-only and is ignored on
   * inserts and updates. SMS reminders are only available for G Suite
   * customers.
   */
  method: string;
  /**
   * The type of notification. Possible values are:   -
   * &quot;eventCreation&quot; - Notification sent when a new event is put on
   * the calendar.  - &quot;eventChange&quot; - Notification sent when an event
   * is changed.  - &quot;eventCancellation&quot; - Notification sent when an
   * event is cancelled.  - &quot;eventResponse&quot; - Notification sent when
   * an event is changed.  - &quot;agenda&quot; - An agenda with the events of
   * the day (sent out in the morning).
   */
  type: string;
}
export interface Schema$Channel {
  /**
   * The address where notifications are delivered for this channel.
   */
  address: string;
  /**
   * Date and time of notification channel expiration, expressed as a Unix
   * timestamp, in milliseconds. Optional.
   */
  expiration: string;
  /**
   * A UUID or similar unique string that identifies this channel.
   */
  id: string;
  /**
   * Identifies this as a notification channel used to watch for changes to a
   * resource. Value: the fixed string &quot;api#channel&quot;.
   */
  kind: string;
  /**
   * Additional parameters controlling delivery channel behavior. Optional.
   */
  params: any;
  /**
   * A Boolean value to indicate whether payload is wanted. Optional.
   */
  payload: boolean;
  /**
   * An opaque ID that identifies the resource being watched on this channel.
   * Stable across different API versions.
   */
  resourceId: string;
  /**
   * A version-specific identifier for the watched resource.
   */
  resourceUri: string;
  /**
   * An arbitrary string delivered to the target address with each notification
   * delivered over this channel. Optional.
   */
  token: string;
  /**
   * The type of delivery mechanism used for this channel.
   */
  type: string;
}
export interface Schema$ColorDefinition {
  /**
   * The background color associated with this color definition.
   */
  background: string;
  /**
   * The foreground color that can be used to write on top of a background with
   * &#39;background&#39; color.
   */
  foreground: string;
}
export interface Schema$Colors {
  /**
   * A global palette of calendar colors, mapping from the color ID to its
   * definition. A calendarListEntry resource refers to one of these color IDs
   * in its color field. Read-only.
   */
  calendar: any;
  /**
   * A global palette of event colors, mapping from the color ID to its
   * definition. An event resource may refer to one of these color IDs in its
   * color field. Read-only.
   */
  event: any;
  /**
   * Type of the resource (&quot;calendar#colors&quot;).
   */
  kind: string;
  /**
   * Last modification time of the color palette (as a RFC3339 timestamp).
   * Read-only.
   */
  updated: string;
}
export interface Schema$ConferenceData {
  /**
   * The ID of the conference. Can be used by developers to keep track of
   * conferences, should not be displayed to users. Values for solution types:
   * - &quot;eventHangout&quot;: unset. - &quot;eventNamedHangout&quot;: the
   * name of the Hangout. - &quot;hangoutsMeet&quot;: the 10-letter meeting
   * code, for example &quot;aaa-bbbb-ccc&quot;.  Optional.
   */
  conferenceId: string;
  /**
   * The conference solution, such as Hangouts or Hangouts Meet. Unset for a
   * conference with a failed create request. Either conferenceSolution and at
   * least one entryPoint, or createRequest is required.
   */
  conferenceSolution: Schema$ConferenceSolution;
  /**
   * A request to generate a new conference and attach it to the event. The data
   * is generated asynchronously. To see whether the data is present check the
   * status field. Either conferenceSolution and at least one entryPoint, or
   * createRequest is required.
   */
  createRequest: Schema$CreateConferenceRequest;
  /**
   * Information about individual conference entry points, such as URLs or phone
   * numbers. All of them must belong to the same conference. Either
   * conferenceSolution and at least one entryPoint, or createRequest is
   * required.
   */
  entryPoints: Schema$EntryPoint[];
  /**
   * Additional notes (such as instructions from the domain administrator, legal
   * notices) to display to the user. Can contain HTML. The maximum length is
   * 2048 characters. Optional.
   */
  notes: string;
  /**
   * Additional properties related to a conference. An example would be a
   * solution-specific setting for enabling video streaming.
   */
  parameters: Schema$ConferenceParameters;
  /**
   * The signature of the conference data. Genereated on server side. Must be
   * preserved while copying the conference data between events, otherwise the
   * conference data will not be copied. Unset for a conference with a failed
   * create request. Optional for a conference with a pending create request.
   */
  signature: string;
}
export interface Schema$ConferenceParameters {
  /**
   * Additional add-on specific data.
   */
  addOnParameters: Schema$ConferenceParametersAddOnParameters;
}
export interface Schema$ConferenceParametersAddOnParameters { parameters: any; }
export interface Schema$ConferenceProperties {
  /**
   * The types of conference solutions that are supported for this calendar. The
   * possible values are:   - &quot;eventHangout&quot;  -
   * &quot;eventNamedHangout&quot;  - &quot;hangoutsMeet&quot;  Optional.
   */
  allowedConferenceSolutionTypes: string[];
}
export interface Schema$ConferenceRequestStatus {
  /**
   * The current status of the conference create request. Read-only. The
   * possible values are:   - &quot;pending&quot;: the conference create request
   * is still being processed. - &quot;success&quot;: the conference create
   * request succeeded, the entry points are populated. - &quot;failure&quot;:
   * the conference create request failed, there are no entry points.
   */
  statusCode: string;
}
export interface Schema$ConferenceSolution {
  /**
   * The user-visible icon for this solution.
   */
  iconUri: string;
  /**
   * The key which can uniquely identify the conference solution for this event.
   */
  key: Schema$ConferenceSolutionKey;
  /**
   * The user-visible name of this solution. Not localized.
   */
  name: string;
}
export interface Schema$ConferenceSolutionKey {
  /**
   * The conference solution type. If a client encounters an unfamiliar or empty
   * type, it should still be able to display the entry points. However, it
   * should disallow modifications. The possible values are:   -
   * &quot;eventHangout&quot; for Hangouts for consumers
   * (http://hangouts.google.com) - &quot;eventNamedHangout&quot; for classic
   * Hangouts for G Suite users (http://hangouts.google.com) -
   * &quot;hangoutsMeet&quot; for Hangouts Meet (http://meet.google.com)
   */
  type: string;
}
export interface Schema$CreateConferenceRequest {
  /**
   * The conference solution, such as Hangouts or Hangouts Meet.
   */
  conferenceSolutionKey: Schema$ConferenceSolutionKey;
  /**
   * The client-generated unique ID for this request. Clients should regenerate
   * this ID for every new request. If an ID provided is the same as for the
   * previous request, the request is ignored.
   */
  requestId: string;
  /**
   * The status of the conference create request.
   */
  status: Schema$ConferenceRequestStatus;
}
export interface Schema$EntryPoint {
  /**
   * The access code to access the conference. The maximum length is 128
   * characters. When creating new conference data, populate only the subset of
   * {meetingCode, accessCode, passcode, password, pin} fields that match the
   * terminology that the conference provider uses. Only the populated fields
   * should be displayed. Optional.
   */
  accessCode: string;
  /**
   * The type of the conference entry point. Possible values are:   -
   * &quot;video&quot; - joining a conference over HTTP. A conference can have
   * zero or one video entry point. - &quot;phone&quot; - joining a conference
   * by dialing a phone number. A conference can have zero or more phone entry
   * points. - &quot;sip&quot; - joining a conference over SIP. A conference can
   * have zero or one sip entry point. - &quot;more&quot; - further conference
   * joining instructions, for example additional phone numbers. A conference
   * can have zero or one more entry point. A conference with only a more entry
   * point is not a valid conference.
   */
  entryPointType: string;
  /**
   * The label for the URI. Visible to end users. Not localized. The maximum
   * length is 512 characters. Examples:   - for video:
   * meet.google.com/aaa-bbbb-ccc - for phone: +1 123 268 2601 - for sip:
   * 12345678@altostrat.com - for more: should not be filled   Optional.
   */
  label: string;
  /**
   * The meeting code to access the conference. The maximum length is 128
   * characters. When creating new conference data, populate only the subset of
   * {meetingCode, accessCode, passcode, password, pin} fields that match the
   * terminology that the conference provider uses. Only the populated fields
   * should be displayed. Optional.
   */
  meetingCode: string;
  /**
   * The passcode to access the conference. The maximum length is 128
   * characters. When creating new conference data, populate only the subset of
   * {meetingCode, accessCode, passcode, password, pin} fields that match the
   * terminology that the conference provider uses. Only the populated fields
   * should be displayed.
   */
  passcode: string;
  /**
   * The password to access the conference. The maximum length is 128
   * characters. When creating new conference data, populate only the subset of
   * {meetingCode, accessCode, passcode, password, pin} fields that match the
   * terminology that the conference provider uses. Only the populated fields
   * should be displayed. Optional.
   */
  password: string;
  /**
   * The PIN to access the conference. The maximum length is 128 characters.
   * When creating new conference data, populate only the subset of
   * {meetingCode, accessCode, passcode, password, pin} fields that match the
   * terminology that the conference provider uses. Only the populated fields
   * should be displayed. Optional.
   */
  pin: string;
  /**
   * The URI of the entry point. The maximum length is 1300 characters. Format:
   * - for video, http: or https: schema is required. - for phone, tel: schema
   * is required. The URI should include the entire dial sequence (e.g.,
   * tel:+12345678900,,,123456789;1234). - for sip, sip: schema is required,
   * e.g., sip:12345678@myprovider.com. - for more, http: or https: schema is
   * required.
   */
  uri: string;
}
export interface Schema$Error {
  /**
   * Domain, or broad category, of the error.
   */
  domain: string;
  /**
   * Specific reason for the error. Some of the possible values are:   -
   * &quot;groupTooBig&quot; - The group of users requested is too large for a
   * single query.  - &quot;tooManyCalendarsRequested&quot; - The number of
   * calendars requested is too large for a single query.  -
   * &quot;notFound&quot; - The requested resource was not found.  -
   * &quot;internalError&quot; - The API service has encountered an internal
   * error.  Additional error types may be added in the future, so clients
   * should gracefully handle additional error statuses not included in this
   * list.
   */
  reason: string;
}
export interface Schema$Event {
  /**
   * Whether anyone can invite themselves to the event (currently works for
   * Google+ events only). Optional. The default is False.
   */
  anyoneCanAddSelf: boolean;
  /**
   * File attachments for the event. Currently only Google Drive attachments are
   * supported. In order to modify attachments the supportsAttachments request
   * parameter should be set to true. There can be at most 25 attachments per
   * event,
   */
  attachments: Schema$EventAttachment[];
  /**
   * The attendees of the event. See the Events with attendees guide for more
   * information on scheduling events with other calendar users.
   */
  attendees: Schema$EventAttendee[];
  /**
   * Whether attendees may have been omitted from the event&#39;s
   * representation. When retrieving an event, this may be due to a restriction
   * specified by the maxAttendee query parameter. When updating an event, this
   * can be used to only update the participant&#39;s response. Optional. The
   * default is False.
   */
  attendeesOmitted: boolean;
  /**
   * The color of the event. This is an ID referring to an entry in the event
   * section of the colors definition (see the  colors endpoint). Optional.
   */
  colorId: string;
  /**
   * The conference-related information, such as details of a Hangouts Meet
   * conference. To create new conference details use the createRequest field.
   * To persist your changes, remember to set the conferenceDataVersion request
   * parameter to 1 for all event modification requests.
   */
  conferenceData: Schema$ConferenceData;
  /**
   * Creation time of the event (as a RFC3339 timestamp). Read-only.
   */
  created: string;
  /**
   * The creator of the event. Read-only.
   */
  creator: any;
  /**
   * Description of the event. Optional.
   */
  description: string;
  /**
   * The (exclusive) end time of the event. For a recurring event, this is the
   * end time of the first instance.
   */
  end: Schema$EventDateTime;
  /**
   * Whether the end time is actually unspecified. An end time is still provided
   * for compatibility reasons, even if this attribute is set to True. The
   * default is False.
   */
  endTimeUnspecified: boolean;
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * Extended properties of the event.
   */
  extendedProperties: any;
  /**
   * A gadget that extends this event.
   */
  gadget: any;
  /**
   * Whether attendees other than the organizer can invite others to the event.
   * Optional. The default is True.
   */
  guestsCanInviteOthers: boolean;
  /**
   * Whether attendees other than the organizer can modify the event. Optional.
   * The default is False.
   */
  guestsCanModify: boolean;
  /**
   * Whether attendees other than the organizer can see who the event&#39;s
   * attendees are. Optional. The default is True.
   */
  guestsCanSeeOtherGuests: boolean;
  /**
   * An absolute link to the Google+ hangout associated with this event.
   * Read-only.
   */
  hangoutLink: string;
  /**
   * An absolute link to this event in the Google Calendar Web UI. Read-only.
   */
  htmlLink: string;
  /**
   * Event unique identifier as defined in RFC5545. It is used to uniquely
   * identify events accross calendaring systems and must be supplied when
   * importing events via the import method. Note that the icalUID and the id
   * are not identical and only one of them should be supplied at event creation
   * time. One difference in their semantics is that in recurring events, all
   * occurrences of one event have different ids while they all share the same
   * icalUIDs.
   */
  iCalUID: string;
  /**
   * Opaque identifier of the event. When creating new single or recurring
   * events, you can specify their IDs. Provided IDs must follow these rules:
   * - characters allowed in the ID are those used in base32hex encoding, i.e.
   * lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938  - the
   * length of the ID must be between 5 and 1024 characters  - the ID must be
   * unique per calendar  Due to the globally distributed nature of the system,
   * we cannot guarantee that ID collisions will be detected at event creation
   * time. To minimize the risk of collisions we recommend using an established
   * UUID algorithm such as one described in RFC4122. If you do not specify an
   * ID, it will be automatically generated by the server. Note that the icalUID
   * and the id are not identical and only one of them should be supplied at
   * event creation time. One difference in their semantics is that in recurring
   * events, all occurrences of one event have different ids while they all
   * share the same icalUIDs.
   */
  id: string;
  /**
   * Type of the resource (&quot;calendar#event&quot;).
   */
  kind: string;
  /**
   * Geographic location of the event as free-form text. Optional.
   */
  location: string;
  /**
   * Whether this is a locked event copy where no changes can be made to the
   * main event fields &quot;summary&quot;, &quot;description&quot;,
   * &quot;location&quot;, &quot;start&quot;, &quot;end&quot; or
   * &quot;recurrence&quot;. The default is False. Read-Only.
   */
  locked: boolean;
  /**
   * The organizer of the event. If the organizer is also an attendee, this is
   * indicated with a separate entry in attendees with the organizer field set
   * to True. To change the organizer, use the move operation. Read-only, except
   * when importing an event.
   */
  organizer: any;
  /**
   * For an instance of a recurring event, this is the time at which this event
   * would start according to the recurrence data in the recurring event
   * identified by recurringEventId. Immutable.
   */
  originalStartTime: Schema$EventDateTime;
  /**
   * Whether this is a private event copy where changes are not shared with
   * other copies on other calendars. Optional. Immutable. The default is False.
   */
  privateCopy: boolean;
  /**
   * List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as
   * specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in
   * this field; event start and end times are specified in the start and end
   * fields. This field is omitted for single events or instances of recurring
   * events.
   */
  recurrence: string[];
  /**
   * For an instance of a recurring event, this is the id of the recurring event
   * to which this instance belongs. Immutable.
   */
  recurringEventId: string;
  /**
   * Information about the event&#39;s reminders for the authenticated user.
   */
  reminders: any;
  /**
   * Sequence number as per iCalendar.
   */
  sequence: number;
  /**
   * Source from which the event was created. For example, a web page, an email
   * message or any document identifiable by an URL with HTTP or HTTPS scheme.
   * Can only be seen or modified by the creator of the event.
   */
  source: any;
  /**
   * The (inclusive) start time of the event. For a recurring event, this is the
   * start time of the first instance.
   */
  start: Schema$EventDateTime;
  /**
   * Status of the event. Optional. Possible values are:   -
   * &quot;confirmed&quot; - The event is confirmed. This is the default status.
   * - &quot;tentative&quot; - The event is tentatively confirmed.  -
   * &quot;cancelled&quot; - The event is cancelled.
   */
  status: string;
  /**
   * Title of the event.
   */
  summary: string;
  /**
   * Whether the event blocks time on the calendar. Optional. Possible values
   * are:   - &quot;opaque&quot; - Default value. The event does block time on
   * the calendar. This is equivalent to setting Show me as to Busy in the
   * Calendar UI.  - &quot;transparent&quot; - The event does not block time on
   * the calendar. This is equivalent to setting Show me as to Available in the
   * Calendar UI.
   */
  transparency: string;
  /**
   * Last modification time of the event (as a RFC3339 timestamp). Read-only.
   */
  updated: string;
  /**
   * Visibility of the event. Optional. Possible values are:   -
   * &quot;default&quot; - Uses the default visibility for events on the
   * calendar. This is the default value.  - &quot;public&quot; - The event is
   * public and event details are visible to all readers of the calendar.  -
   * &quot;private&quot; - The event is private and only event attendees may
   * view event details.  - &quot;confidential&quot; - The event is private.
   * This value is provided for compatibility reasons.
   */
  visibility: string;
}
export interface Schema$EventAttachment {
  /**
   * ID of the attached file. Read-only. For Google Drive files, this is the ID
   * of the corresponding Files resource entry in the Drive API.
   */
  fileId: string;
  /**
   * URL link to the attachment. For adding Google Drive file attachments use
   * the same format as in alternateLink property of the Files resource in the
   * Drive API.
   */
  fileUrl: string;
  /**
   * URL link to the attachment&#39;s icon. Read-only.
   */
  iconLink: string;
  /**
   * Internet media type (MIME type) of the attachment.
   */
  mimeType: string;
  /**
   * Attachment title.
   */
  title: string;
}
export interface Schema$EventAttendee {
  /**
   * Number of additional guests. Optional. The default is 0.
   */
  additionalGuests: number;
  /**
   * The attendee&#39;s response comment. Optional.
   */
  comment: string;
  /**
   * The attendee&#39;s name, if available. Optional.
   */
  displayName: string;
  /**
   * The attendee&#39;s email address, if available. This field must be present
   * when adding an attendee. It must be a valid email address as per RFC5322.
   */
  email: string;
  /**
   * The attendee&#39;s Profile ID, if available. It corresponds to theid field
   * in the People collection of the Google+ API
   */
  id: string;
  /**
   * Whether this is an optional attendee. Optional. The default is False.
   */
  optional: boolean;
  /**
   * Whether the attendee is the organizer of the event. Read-only. The default
   * is False.
   */
  organizer: boolean;
  /**
   * Whether the attendee is a resource. Can only be set when the attendee is
   * added to the event for the first time. Subsequent modifications are
   * ignored. Optional. The default is False.
   */
  resource: boolean;
  /**
   * The attendee&#39;s response status. Possible values are:   -
   * &quot;needsAction&quot; - The attendee has not responded to the invitation.
   * - &quot;declined&quot; - The attendee has declined the invitation.  -
   * &quot;tentative&quot; - The attendee has tentatively accepted the
   * invitation.  - &quot;accepted&quot; - The attendee has accepted the
   * invitation.
   */
  responseStatus: string;
  /**
   * Whether this entry represents the calendar on which this copy of the event
   * appears. Read-only. The default is False.
   */
  self: boolean;
}
export interface Schema$EventDateTime {
  /**
   * The date, in the format &quot;yyyy-mm-dd&quot;, if this is an all-day
   * event.
   */
  date: string;
  /**
   * The time, as a combined date-time value (formatted according to RFC3339). A
   * time zone offset is required unless a time zone is explicitly specified in
   * timeZone.
   */
  dateTime: string;
  /**
   * The time zone in which the time is specified. (Formatted as an IANA Time
   * Zone Database name, e.g. &quot;Europe/Zurich&quot;.) For recurring events
   * this field is required and specifies the time zone in which the recurrence
   * is expanded. For single events this field is optional and indicates a
   * custom time zone for the event start/end.
   */
  timeZone: string;
}
export interface Schema$EventReminder {
  /**
   * The method used by this reminder. Possible values are:   -
   * &quot;email&quot; - Reminders are sent via email.  - &quot;sms&quot; -
   * Reminders are sent via SMS. These are only available for G Suite customers.
   * Requests to set SMS reminders for other account types are ignored.  -
   * &quot;popup&quot; - Reminders are sent via a UI popup.
   */
  method: string;
  /**
   * Number of minutes before the start of the event when the reminder should
   * trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
   */
  minutes: number;
}
export interface Schema$Events {
  /**
   * The user&#39;s access role for this calendar. Read-only. Possible values
   * are:   - &quot;none&quot; - The user has no access.  -
   * &quot;freeBusyReader&quot; - The user has read access to free/busy
   * information.  - &quot;reader&quot; - The user has read access to the
   * calendar. Private events will appear to users with reader access, but event
   * details will be hidden.  - &quot;writer&quot; - The user has read and write
   * access to the calendar. Private events will appear to users with writer
   * access, and event details will be visible.  - &quot;owner&quot; - The user
   * has ownership of the calendar. This role has all of the permissions of the
   * writer role with the additional ability to see and manipulate ACLs.
   */
  accessRole: string;
  /**
   * The default reminders on the calendar for the authenticated user. These
   * reminders apply to all events on this calendar that do not explicitly
   * override them (i.e. do not have reminders.useDefault set to True).
   */
  defaultReminders: Schema$EventReminder[];
  /**
   * Description of the calendar. Read-only.
   */
  description: string;
  /**
   * ETag of the collection.
   */
  etag: string;
  /**
   * List of events on the calendar.
   */
  items: Schema$Event[];
  /**
   * Type of the collection (&quot;calendar#events&quot;).
   */
  kind: string;
  /**
   * Token used to access the next page of this result. Omitted if no further
   * results are available, in which case nextSyncToken is provided.
   */
  nextPageToken: string;
  /**
   * Token used at a later point in time to retrieve only the entries that have
   * changed since this result was returned. Omitted if further results are
   * available, in which case nextPageToken is provided.
   */
  nextSyncToken: string;
  /**
   * Title of the calendar. Read-only.
   */
  summary: string;
  /**
   * The time zone of the calendar. Read-only.
   */
  timeZone: string;
  /**
   * Last modification time of the calendar (as a RFC3339 timestamp). Read-only.
   */
  updated: string;
}
export interface Schema$FreeBusyCalendar {
  /**
   * List of time ranges during which this calendar should be regarded as busy.
   */
  busy: Schema$TimePeriod[];
  /**
   * Optional error(s) (if computation for the calendar failed).
   */
  errors: Schema$Error[];
}
export interface Schema$FreeBusyGroup {
  /**
   * List of calendars&#39; identifiers within a group.
   */
  calendars: string[];
  /**
   * Optional error(s) (if computation for the group failed).
   */
  errors: Schema$Error[];
}
export interface Schema$FreeBusyRequest {
  /**
   * Maximal number of calendars for which FreeBusy information is to be
   * provided. Optional.
   */
  calendarExpansionMax: number;
  /**
   * Maximal number of calendar identifiers to be provided for a single group.
   * Optional. An error will be returned for a group with more members than this
   * value.
   */
  groupExpansionMax: number;
  /**
   * List of calendars and/or groups to query.
   */
  items: Schema$FreeBusyRequestItem[];
  /**
   * The end of the interval for the query.
   */
  timeMax: string;
  /**
   * The start of the interval for the query.
   */
  timeMin: string;
  /**
   * Time zone used in the response. Optional. The default is UTC.
   */
  timeZone: string;
}
export interface Schema$FreeBusyRequestItem {
  /**
   * The identifier of a calendar or a group.
   */
  id: string;
}
export interface Schema$FreeBusyResponse {
  /**
   * List of free/busy information for calendars.
   */
  calendars: any;
  /**
   * Expansion of groups.
   */
  groups: any;
  /**
   * Type of the resource (&quot;calendar#freeBusy&quot;).
   */
  kind: string;
  /**
   * The end of the interval.
   */
  timeMax: string;
  /**
   * The start of the interval.
   */
  timeMin: string;
}
export interface Schema$Setting {
  /**
   * ETag of the resource.
   */
  etag: string;
  /**
   * The id of the user setting.
   */
  id: string;
  /**
   * Type of the resource (&quot;calendar#setting&quot;).
   */
  kind: string;
  /**
   * Value of the user setting. The format of the value depends on the ID of the
   * setting. It must always be a UTF-8 string of length up to 1024 characters.
   */
  value: string;
}
export interface Schema$Settings {
  /**
   * Etag of the collection.
   */
  etag: string;
  /**
   * List of user settings.
   */
  items: Schema$Setting[];
  /**
   * Type of the collection (&quot;calendar#settings&quot;).
   */
  kind: string;
  /**
   * Token used to access the next page of this result. Omitted if no further
   * results are available, in which case nextSyncToken is provided.
   */
  nextPageToken: string;
  /**
   * Token used at a later point in time to retrieve only the entries that have
   * changed since this result was returned. Omitted if further results are
   * available, in which case nextPageToken is provided.
   */
  nextSyncToken: string;
}
export interface Schema$TimePeriod {
  /**
   * The (exclusive) end of the time period.
   */
  end: string;
  /**
   * The (inclusive) start of the time period.
   */
  start: string;
}

export class Resource$Acl {
  root: Calendar;
  constructor(root: Calendar) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * calendar.acl.delete
   * @desc Deletes an access control rule.
   * @alias calendar.acl.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string} params.ruleId ACL rule identifier.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/acl/{ruleId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['calendarId', 'ruleId'],
      pathParams: ['calendarId', 'ruleId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * calendar.acl.get
   * @desc Returns an access control rule.
   * @alias calendar.acl.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string} params.ruleId ACL rule identifier.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$AclRule>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$AclRule>,
      callback?: BodyResponseCallback<Schema$AclRule>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$AclRule>,
      callback?: BodyResponseCallback<Schema$AclRule>):
      void|AxiosPromise<Schema$AclRule> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/acl/{ruleId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['calendarId', 'ruleId'],
      pathParams: ['calendarId', 'ruleId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AclRule>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AclRule>(parameters);
    }
  }


  /**
   * calendar.acl.insert
   * @desc Creates an access control rule.
   * @alias calendar.acl.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {boolean=} params.sendNotifications Whether to send notifications about the calendar sharing change. Optional. The default is True.
   * @param {().AclRule} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$AclRule>;
  insert(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$AclRule>,
      callback?: BodyResponseCallback<Schema$AclRule>): void;
  insert(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$AclRule>,
      callback?: BodyResponseCallback<Schema$AclRule>):
      void|AxiosPromise<Schema$AclRule> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/acl')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AclRule>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AclRule>(parameters);
    }
  }


  /**
   * calendar.acl.list
   * @desc Returns the rules in the access control list for the calendar.
   * @alias calendar.acl.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {integer=} params.maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {boolean=} params.showDeleted Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
   * @param {string=} params.syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions): AxiosPromise<Schema$Acl>;
  list(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Acl>,
      callback?: BodyResponseCallback<Schema$Acl>): void;
  list(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Acl>,
      callback?: BodyResponseCallback<Schema$Acl>):
      void|AxiosPromise<Schema$Acl> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/acl')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Acl>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Acl>(parameters);
    }
  }


  /**
   * calendar.acl.patch
   * @desc Updates an access control rule. This method supports patch semantics.
   * @alias calendar.acl.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string} params.ruleId ACL rule identifier.
   * @param {boolean=} params.sendNotifications Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
   * @param {().AclRule} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$AclRule>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$AclRule>,
      callback?: BodyResponseCallback<Schema$AclRule>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$AclRule>,
      callback?: BodyResponseCallback<Schema$AclRule>):
      void|AxiosPromise<Schema$AclRule> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/acl/{ruleId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['calendarId', 'ruleId'],
      pathParams: ['calendarId', 'ruleId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AclRule>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AclRule>(parameters);
    }
  }


  /**
   * calendar.acl.update
   * @desc Updates an access control rule.
   * @alias calendar.acl.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string} params.ruleId ACL rule identifier.
   * @param {boolean=} params.sendNotifications Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
   * @param {().AclRule} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$AclRule>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$AclRule>,
      callback?: BodyResponseCallback<Schema$AclRule>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$AclRule>,
      callback?: BodyResponseCallback<Schema$AclRule>):
      void|AxiosPromise<Schema$AclRule> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/acl/{ruleId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['calendarId', 'ruleId'],
      pathParams: ['calendarId', 'ruleId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AclRule>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AclRule>(parameters);
    }
  }


  /**
   * calendar.acl.watch
   * @desc Watch for changes to ACL resources.
   * @alias calendar.acl.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {integer=} params.maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {boolean=} params.showDeleted Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
   * @param {string=} params.syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watch(params: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
  watch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>): void;
  watch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>):
      void|AxiosPromise<Schema$Channel> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/acl/watch')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Channel>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Channel>(parameters);
    }
  }
}

export class Resource$Calendarlist {
  root: Calendar;
  constructor(root: Calendar) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * calendar.calendarList.delete
   * @desc Deletes an entry on the user's calendar list.
   * @alias calendar.calendarList.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/calendarList/{calendarId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * calendar.calendarList.get
   * @desc Returns an entry on the user's calendar list.
   * @alias calendar.calendarList.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$CalendarListEntry>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$CalendarListEntry>,
      callback?: BodyResponseCallback<Schema$CalendarListEntry>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarListEntry>,
      callback?: BodyResponseCallback<Schema$CalendarListEntry>):
      void|AxiosPromise<Schema$CalendarListEntry> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/calendarList/{calendarId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CalendarListEntry>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarListEntry>(parameters);
    }
  }


  /**
   * calendar.calendarList.insert
   * @desc Adds an entry to the user's calendar list.
   * @alias calendar.calendarList.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
   * @param {().CalendarListEntry} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions):
      AxiosPromise<Schema$CalendarListEntry>;
  insert(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$CalendarListEntry>,
      callback?: BodyResponseCallback<Schema$CalendarListEntry>): void;
  insert(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarListEntry>,
      callback?: BodyResponseCallback<Schema$CalendarListEntry>):
      void|AxiosPromise<Schema$CalendarListEntry> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/calendarList')
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
      createAPIRequest<Schema$CalendarListEntry>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarListEntry>(parameters);
    }
  }


  /**
   * calendar.calendarList.list
   * @desc Returns entries on the user's calendar list.
   * @alias calendar.calendarList.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
   * @param {string=} params.minAccessRole The minimum access role for the user in the returned entries. Optional. The default is no restriction.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {boolean=} params.showDeleted Whether to include deleted calendar list entries in the result. Optional. The default is False.
   * @param {boolean=} params.showHidden Whether to show hidden entries. Optional. The default is False.
   * @param {string=} params.syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False. To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions): AxiosPromise<Schema$CalendarList>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$CalendarList>,
      callback?: BodyResponseCallback<Schema$CalendarList>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarList>,
      callback?: BodyResponseCallback<Schema$CalendarList>):
      void|AxiosPromise<Schema$CalendarList> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/calendarList')
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
      createAPIRequest<Schema$CalendarList>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarList>(parameters);
    }
  }


  /**
   * calendar.calendarList.patch
   * @desc Updates an entry on the user's calendar list. This method supports
   * patch semantics.
   * @alias calendar.calendarList.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {boolean=} params.colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
   * @param {().CalendarListEntry} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions):
      AxiosPromise<Schema$CalendarListEntry>;
  patch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$CalendarListEntry>,
      callback?: BodyResponseCallback<Schema$CalendarListEntry>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarListEntry>,
      callback?: BodyResponseCallback<Schema$CalendarListEntry>):
      void|AxiosPromise<Schema$CalendarListEntry> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/calendarList/{calendarId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CalendarListEntry>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarListEntry>(parameters);
    }
  }


  /**
   * calendar.calendarList.update
   * @desc Updates an entry on the user's calendar list.
   * @alias calendar.calendarList.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {boolean=} params.colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
   * @param {().CalendarListEntry} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions):
      AxiosPromise<Schema$CalendarListEntry>;
  update(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$CalendarListEntry>,
      callback?: BodyResponseCallback<Schema$CalendarListEntry>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CalendarListEntry>,
      callback?: BodyResponseCallback<Schema$CalendarListEntry>):
      void|AxiosPromise<Schema$CalendarListEntry> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/calendarList/{calendarId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CalendarListEntry>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CalendarListEntry>(parameters);
    }
  }


  /**
   * calendar.calendarList.watch
   * @desc Watch for changes to CalendarList resources.
   * @alias calendar.calendarList.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
   * @param {string=} params.minAccessRole The minimum access role for the user in the returned entries. Optional. The default is no restriction.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {boolean=} params.showDeleted Whether to include deleted calendar list entries in the result. Optional. The default is False.
   * @param {boolean=} params.showHidden Whether to show hidden entries. Optional. The default is False.
   * @param {string=} params.syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False. To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watch(params: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
  watch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>): void;
  watch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>):
      void|AxiosPromise<Schema$Channel> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/calendarList/watch')
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
      createAPIRequest<Schema$Channel>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Channel>(parameters);
    }
  }
}

export class Resource$Calendars {
  root: Calendar;
  constructor(root: Calendar) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * calendar.calendars.clear
   * @desc Clears a primary calendar. This operation deletes all events
   * associated with the primary calendar of an account.
   * @alias calendar.calendars.clear
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  clear(params: any, options?: MethodOptions): AxiosPromise<void>;
  clear(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  clear(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/clear')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * calendar.calendars.delete
   * @desc Deletes a secondary calendar. Use calendars.clear for clearing all
   * events on primary calendars.
   * @alias calendar.calendars.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * calendar.calendars.get
   * @desc Returns metadata for a calendar.
   * @alias calendar.calendars.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Calendar>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Calendar>,
      callback?: BodyResponseCallback<Schema$Calendar>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Calendar>,
      callback?: BodyResponseCallback<Schema$Calendar>):
      void|AxiosPromise<Schema$Calendar> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Calendar>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Calendar>(parameters);
    }
  }


  /**
   * calendar.calendars.insert
   * @desc Creates a secondary calendar.
   * @alias calendar.calendars.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Calendar} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$Calendar>;
  insert(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Calendar>,
      callback?: BodyResponseCallback<Schema$Calendar>): void;
  insert(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Calendar>,
      callback?: BodyResponseCallback<Schema$Calendar>):
      void|AxiosPromise<Schema$Calendar> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars')
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
      createAPIRequest<Schema$Calendar>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Calendar>(parameters);
    }
  }


  /**
   * calendar.calendars.patch
   * @desc Updates metadata for a calendar. This method supports patch
   * semantics.
   * @alias calendar.calendars.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {().Calendar} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Calendar>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Calendar>,
      callback?: BodyResponseCallback<Schema$Calendar>): void;
  patch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Calendar>,
      callback?: BodyResponseCallback<Schema$Calendar>):
      void|AxiosPromise<Schema$Calendar> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Calendar>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Calendar>(parameters);
    }
  }


  /**
   * calendar.calendars.update
   * @desc Updates metadata for a calendar.
   * @alias calendar.calendars.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {().Calendar} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Calendar>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Calendar>,
      callback?: BodyResponseCallback<Schema$Calendar>): void;
  update(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Calendar>,
      callback?: BodyResponseCallback<Schema$Calendar>):
      void|AxiosPromise<Schema$Calendar> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Calendar>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Calendar>(parameters);
    }
  }
}

export class Resource$Channels {
  root: Calendar;
  constructor(root: Calendar) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * calendar.channels.stop
   * @desc Stop watching resources through this channel
   * @alias calendar.channels.stop
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  stop(params: any, options?: MethodOptions): AxiosPromise<void>;
  stop(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  stop(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/channels/stop')
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
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Colors {
  root: Calendar;
  constructor(root: Calendar) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * calendar.colors.get
   * @desc Returns the color definitions for calendars and events.
   * @alias calendar.colors.get
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Colors>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Colors>,
      callback?: BodyResponseCallback<Schema$Colors>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Colors>,
      callback?: BodyResponseCallback<Schema$Colors>):
      void|AxiosPromise<Schema$Colors> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/calendar/v3/colors').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Colors>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Colors>(parameters);
    }
  }
}

export class Resource$Events {
  root: Calendar;
  constructor(root: Calendar) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * calendar.events.delete
   * @desc Deletes an event.
   * @alias calendar.events.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string} params.eventId Event identifier.
   * @param {boolean=} params.sendNotifications Whether to send notifications about the deletion of the event. Optional. The default is False.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/calendar/v3/calendars/{calendarId}/events/{eventId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['calendarId', 'eventId'],
      pathParams: ['calendarId', 'eventId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * calendar.events.get
   * @desc Returns an event.
   * @alias calendar.events.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string} params.eventId Event identifier.
   * @param {integer=} params.maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @param {string=} params.timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Event>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>):
      void|AxiosPromise<Schema$Event> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/calendar/v3/calendars/{calendarId}/events/{eventId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['calendarId', 'eventId'],
      pathParams: ['calendarId', 'eventId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Event>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Event>(parameters);
    }
  }


  /**
   * calendar.events.import
   * @desc Imports an event. This operation is used to add a private copy of an
   * existing event to a calendar.
   * @alias calendar.events.import
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {integer=} params.conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
   * @param {boolean=} params.supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
   * @param {().Event} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
import(params: any, options?: MethodOptions): AxiosPromise<Schema$Event>;
import(params: any, options: MethodOptions|BodyResponseCallback<Schema$Event>, callback?: BodyResponseCallback<Schema$Event>): void;
import(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Event>, callback?: BodyResponseCallback<Schema$Event>): void|AxiosPromise<Schema$Event> {if(typeof options === 'function') {
    callback = options;
    options = {};
  } if(typeof params === 'function') {
    callback = params;
    params = {};
  } options = options || {}; const rootUrl = options.rootUrl || 'https://www.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/calendar/v3/calendars/{calendarId}/events/import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: ['calendarId'], pathParams: ['calendarId'], context: this.getRoot()}; if(callback) {
    createAPIRequest<Schema$Event>(parameters, callback);
  } else { return createAPIRequest<Schema$Event>(parameters);
  }}


  /**
 * calendar.events.insert
 * @desc Creates an event.
 * @alias calendar.events.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
 * @param {integer=} params.conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
 * @param {integer=} params.maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
 * @param {boolean=} params.sendNotifications Whether to send notifications about the creation of the new event. Optional. The default is False.
 * @param {boolean=} params.supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
 * @param {().Event} params.resource Request body data
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$Event>;
  insert(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>): void;
  insert(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>):
      void|AxiosPromise<Schema$Event> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/events')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Event>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Event>(parameters);
    }
  }


  /**
   * calendar.events.instances
   * @desc Returns instances of the specified recurring event.
   * @alias calendar.events.instances
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string} params.eventId Recurring event identifier.
   * @param {integer=} params.maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @param {integer=} params.maxResults Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
   * @param {string=} params.originalStart The original start time of the instance in the result. Optional.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {boolean=} params.showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
   * @param {string=} params.timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
   * @param {string=} params.timeMin Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
   * @param {string=} params.timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  instances(params: any, options?: MethodOptions): AxiosPromise<Schema$Events>;
  instances(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Events>,
      callback?: BodyResponseCallback<Schema$Events>): void;
  instances(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Events>,
      callback?: BodyResponseCallback<Schema$Events>):
      void|AxiosPromise<Schema$Events> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/calendar/v3/calendars/{calendarId}/events/{eventId}/instances')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['calendarId', 'eventId'],
      pathParams: ['calendarId', 'eventId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Events>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Events>(parameters);
    }
  }


  /**
   * calendar.events.list
   * @desc Returns events on the specified calendar.
   * @alias calendar.events.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string=} params.iCalUID Specifies event ID in the iCalendar format to be included in the response. Optional.
   * @param {integer=} params.maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @param {integer=} params.maxResults Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
   * @param {string=} params.orderBy The order of the events returned in the result. Optional. The default is an unspecified, stable order.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {string=} params.privateExtendedProperty Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
   * @param {string=} params.q Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
   * @param {string=} params.sharedExtendedProperty Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
   * @param {boolean=} params.showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
   * @param {boolean=} params.showHiddenInvitations Whether to include hidden invitations in the result. Optional. The default is False.
   * @param {boolean=} params.singleEvents Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
   * @param {string=} params.syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.  These are:  - iCalUID  - orderBy  - privateExtendedProperty  - q  - sharedExtendedProperty  - timeMin  - timeMax  - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
   * @param {string=} params.timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMin is set, timeMax must be greater than timeMin.
   * @param {string=} params.timeMin Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMax is set, timeMin must be smaller than timeMax.
   * @param {string=} params.timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
   * @param {string=} params.updatedMin Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions): AxiosPromise<Schema$Events>;
  list(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Events>,
      callback?: BodyResponseCallback<Schema$Events>): void;
  list(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Events>,
      callback?: BodyResponseCallback<Schema$Events>):
      void|AxiosPromise<Schema$Events> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/events')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Events>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Events>(parameters);
    }
  }


  /**
   * calendar.events.move
   * @desc Moves an event to another calendar, i.e. changes an event's
   * organizer.
   * @alias calendar.events.move
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier of the source calendar where the event currently is on.
   * @param {string} params.destination Calendar identifier of the target calendar where the event is to be moved to.
   * @param {string} params.eventId Event identifier.
   * @param {boolean=} params.sendNotifications Whether to send notifications about the change of the event's organizer. Optional. The default is False.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  move(params: any, options?: MethodOptions): AxiosPromise<Schema$Event>;
  move(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>): void;
  move(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>):
      void|AxiosPromise<Schema$Event> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/calendar/v3/calendars/{calendarId}/events/{eventId}/move')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['calendarId', 'eventId', 'destination'],
      pathParams: ['calendarId', 'eventId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Event>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Event>(parameters);
    }
  }


  /**
   * calendar.events.patch
   * @desc Updates an event. This method supports patch semantics.
   * @alias calendar.events.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {integer=} params.conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
   * @param {string} params.eventId Event identifier.
   * @param {integer=} params.maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @param {boolean=} params.sendNotifications Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
   * @param {boolean=} params.supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
   * @param {().Event} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Event>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>):
      void|AxiosPromise<Schema$Event> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/calendar/v3/calendars/{calendarId}/events/{eventId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['calendarId', 'eventId'],
      pathParams: ['calendarId', 'eventId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Event>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Event>(parameters);
    }
  }


  /**
   * calendar.events.quickAdd
   * @desc Creates an event based on a simple text string.
   * @alias calendar.events.quickAdd
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {boolean=} params.sendNotifications Whether to send notifications about the creation of the event. Optional. The default is False.
   * @param {string} params.text The text describing the event to be created.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  quickAdd(params: any, options?: MethodOptions): AxiosPromise<Schema$Event>;
  quickAdd(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>): void;
  quickAdd(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>):
      void|AxiosPromise<Schema$Event> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/calendar/v3/calendars/{calendarId}/events/quickAdd')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['calendarId', 'text'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Event>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Event>(parameters);
    }
  }


  /**
   * calendar.events.update
   * @desc Updates an event.
   * @alias calendar.events.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {integer=} params.conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
   * @param {string} params.eventId Event identifier.
   * @param {integer=} params.maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @param {boolean=} params.sendNotifications Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
   * @param {boolean=} params.supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
   * @param {().Event} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Event>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Event>,
      callback?: BodyResponseCallback<Schema$Event>):
      void|AxiosPromise<Schema$Event> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/calendar/v3/calendars/{calendarId}/events/{eventId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['calendarId', 'eventId'],
      pathParams: ['calendarId', 'eventId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Event>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Event>(parameters);
    }
  }


  /**
   * calendar.events.watch
   * @desc Watch for changes to Events resources.
   * @alias calendar.events.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
   * @param {string} params.calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
   * @param {string=} params.iCalUID Specifies event ID in the iCalendar format to be included in the response. Optional.
   * @param {integer=} params.maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
   * @param {integer=} params.maxResults Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
   * @param {string=} params.orderBy The order of the events returned in the result. Optional. The default is an unspecified, stable order.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {string=} params.privateExtendedProperty Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
   * @param {string=} params.q Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
   * @param {string=} params.sharedExtendedProperty Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
   * @param {boolean=} params.showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
   * @param {boolean=} params.showHiddenInvitations Whether to include hidden invitations in the result. Optional. The default is False.
   * @param {boolean=} params.singleEvents Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
   * @param {string=} params.syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.  These are:  - iCalUID  - orderBy  - privateExtendedProperty  - q  - sharedExtendedProperty  - timeMin  - timeMax  - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
   * @param {string=} params.timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMin is set, timeMax must be greater than timeMin.
   * @param {string=} params.timeMin Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMax is set, timeMin must be smaller than timeMax.
   * @param {string=} params.timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
   * @param {string=} params.updatedMin Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watch(params: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
  watch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>): void;
  watch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>):
      void|AxiosPromise<Schema$Channel> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/calendars/{calendarId}/events/watch')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['calendarId'],
      pathParams: ['calendarId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Channel>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Channel>(parameters);
    }
  }
}

export class Resource$Freebusy {
  root: Calendar;
  constructor(root: Calendar) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * calendar.freebusy.query
   * @desc Returns free/busy information for a set of calendars.
   * @alias calendar.freebusy.query
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().FreeBusyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  query(params: any, options?: MethodOptions):
      AxiosPromise<Schema$FreeBusyResponse>;
  query(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$FreeBusyResponse>,
      callback?: BodyResponseCallback<Schema$FreeBusyResponse>): void;
  query(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$FreeBusyResponse>,
      callback?: BodyResponseCallback<Schema$FreeBusyResponse>):
      void|AxiosPromise<Schema$FreeBusyResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/freeBusy')
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
      createAPIRequest<Schema$FreeBusyResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$FreeBusyResponse>(parameters);
    }
  }
}

export class Resource$Settings {
  root: Calendar;
  constructor(root: Calendar) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * calendar.settings.get
   * @desc Returns a single user setting.
   * @alias calendar.settings.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.setting The id of the user setting.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Setting>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Setting>,
      callback?: BodyResponseCallback<Schema$Setting>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Setting>,
      callback?: BodyResponseCallback<Schema$Setting>):
      void|AxiosPromise<Schema$Setting> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/settings/{setting}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['setting'],
      pathParams: ['setting'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Setting>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Setting>(parameters);
    }
  }


  /**
   * calendar.settings.list
   * @desc Returns all user settings for the authenticated user.
   * @alias calendar.settings.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {string=} params.syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions): AxiosPromise<Schema$Settings>;
  list(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Settings>,
      callback?: BodyResponseCallback<Schema$Settings>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Settings>,
      callback?: BodyResponseCallback<Schema$Settings>):
      void|AxiosPromise<Schema$Settings> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/settings')
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
      createAPIRequest<Schema$Settings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Settings>(parameters);
    }
  }


  /**
   * calendar.settings.watch
   * @desc Watch for changes to Settings resources.
   * @alias calendar.settings.watch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
   * @param {string=} params.pageToken Token specifying which result page to return. Optional.
   * @param {string=} params.syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
   * @param {().Channel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  watch(params: any, options?: MethodOptions): AxiosPromise<Schema$Channel>;
  watch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>): void;
  watch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>):
      void|AxiosPromise<Schema$Channel> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/calendar/v3/users/me/settings/watch')
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
      createAPIRequest<Schema$Channel>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Channel>(parameters);
    }
  }
}
