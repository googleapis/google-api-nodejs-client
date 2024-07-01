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

export namespace meet_v2 {
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
   * Google Meet API
   *
   * Create and manage meetings in Google Meet.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const meet = google.meet('v2');
   * ```
   */
  export class Meet {
    context: APIRequestContext;
    conferenceRecords: Resource$Conferencerecords;
    spaces: Resource$Spaces;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.conferenceRecords = new Resource$Conferencerecords(this.context);
      this.spaces = new Resource$Spaces(this.context);
    }
  }

  /**
   * Active conference.
   */
  export interface Schema$ActiveConference {
    /**
     * Output only. Reference to 'ConferenceRecord' resource. Format: `conferenceRecords/{conference_record\}` where `{conference_record\}` is a unique ID for each instance of a call within a space.
     */
    conferenceRecord?: string | null;
  }
  /**
   * User who joins anonymously (meaning not signed into a Google Account).
   */
  export interface Schema$AnonymousUser {
    /**
     * Output only. User provided name when they join a conference anonymously.
     */
    displayName?: string | null;
  }
  /**
   * Single instance of a meeting held in a space.
   */
  export interface Schema$ConferenceRecord {
    /**
     * Output only. Timestamp when the conference ended. Set for past conferences. Unset if the conference is ongoing.
     */
    endTime?: string | null;
    /**
     * Output only. Server enforced expiration time for when this conference record resource is deleted. The resource is deleted 30 days after the conference ends.
     */
    expireTime?: string | null;
    /**
     * Identifier. Resource name of the conference record. Format: `conferenceRecords/{conference_record\}` where `{conference_record\}` is a unique ID for each instance of a call within a space.
     */
    name?: string | null;
    /**
     * Output only. The space where the conference was held.
     */
    space?: string | null;
    /**
     * Output only. Timestamp when the conference started. Always set.
     */
    startTime?: string | null;
  }
  /**
   * Google Docs location where the transcript file is saved.
   */
  export interface Schema$DocsDestination {
    /**
     * Output only. The document ID for the underlying Google Docs transcript file. For example, "1kuceFZohVoCh6FulBHxwy6I15Ogpc4hP". Use the `documents.get` method of the Google Docs API (https://developers.google.com/docs/api/reference/rest/v1/documents/get) to fetch the content.
     */
    document?: string | null;
    /**
     * Output only. URI for the Google Docs transcript file. Use `https://docs.google.com/document/d/{$DocumentId\}/view` to browse the transcript in the browser.
     */
    exportUri?: string | null;
  }
  /**
   * Export location where a recording file is saved in Google Drive.
   */
  export interface Schema$DriveDestination {
    /**
     * Output only. Link used to play back the recording file in the browser. For example, `https://drive.google.com/file/d/{$fileId\}/view`.
     */
    exportUri?: string | null;
    /**
     * Output only. The `fileId` for the underlying MP4 file. For example, "1kuceFZohVoCh6FulBHxwy6I15Ogpc4hP". Use `$ GET https://www.googleapis.com/drive/v3/files/{$fileId\}?alt=media` to download the blob. For more information, see https://developers.google.com/drive/api/v3/reference/files/get.
     */
    file?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Request to end an ongoing conference of a space.
   */
  export interface Schema$EndActiveConferenceRequest {}
  /**
   * Response of ListConferenceRecords method.
   */
  export interface Schema$ListConferenceRecordsResponse {
    /**
     * List of conferences in one page.
     */
    conferenceRecords?: Schema$ConferenceRecord[];
    /**
     * Token to be circulated back for further List call if current List does NOT include all the Conferences. Unset if all conferences have been returned.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response of ListParticipants method.
   */
  export interface Schema$ListParticipantSessionsResponse {
    /**
     * Token to be circulated back for further List call if current List doesn't include all the participants. Unset if all participants are returned.
     */
    nextPageToken?: string | null;
    /**
     * List of participants in one page.
     */
    participantSessions?: Schema$ParticipantSession[];
  }
  /**
   * Response of ListParticipants method.
   */
  export interface Schema$ListParticipantsResponse {
    /**
     * Token to be circulated back for further List call if current List doesn't include all the participants. Unset if all participants are returned.
     */
    nextPageToken?: string | null;
    /**
     * List of participants in one page.
     */
    participants?: Schema$Participant[];
    /**
     * Total, exact number of `participants`. By default, this field isn't included in the response. Set the field mask in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters) to receive this field in the response.
     */
    totalSize?: number | null;
  }
  /**
   * Response for ListRecordings method.
   */
  export interface Schema$ListRecordingsResponse {
    /**
     * Token to be circulated back for further List call if current List doesn't include all the recordings. Unset if all recordings are returned.
     */
    nextPageToken?: string | null;
    /**
     * List of recordings in one page.
     */
    recordings?: Schema$Recording[];
  }
  /**
   * Response for ListTranscriptEntries method.
   */
  export interface Schema$ListTranscriptEntriesResponse {
    /**
     * Token to be circulated back for further List call if current List doesn't include all the transcript entries. Unset if all entries are returned.
     */
    nextPageToken?: string | null;
    /**
     * List of TranscriptEntries in one page.
     */
    transcriptEntries?: Schema$TranscriptEntry[];
  }
  /**
   * Response for ListTranscripts method.
   */
  export interface Schema$ListTranscriptsResponse {
    /**
     * Token to be circulated back for further List call if current List doesn't include all the transcripts. Unset if all transcripts are returned.
     */
    nextPageToken?: string | null;
    /**
     * List of transcripts in one page.
     */
    transcripts?: Schema$Transcript[];
  }
  /**
   * User who attended or is attending a conference.
   */
  export interface Schema$Participant {
    /**
     * Anonymous user.
     */
    anonymousUser?: Schema$AnonymousUser;
    /**
     * Output only. Time when the participant first joined the meeting.
     */
    earliestStartTime?: string | null;
    /**
     * Output only. Time when the participant left the meeting for the last time. This can be null if it's an active meeting.
     */
    latestEndTime?: string | null;
    /**
     * Output only. Resource name of the participant. Format: `conferenceRecords/{conference_record\}/participants/{participant\}`
     */
    name?: string | null;
    /**
     * User calling from their phone.
     */
    phoneUser?: Schema$PhoneUser;
    /**
     * Signed-in user.
     */
    signedinUser?: Schema$SignedinUser;
  }
  /**
   * Refers to each unique join or leave session when a user joins a conference from a device. Note that any time a user joins the conference a new unique ID is assigned. That means if a user joins a space multiple times from the same device, they're assigned different IDs, and are also be treated as different participant sessions.
   */
  export interface Schema$ParticipantSession {
    /**
     * Output only. Timestamp when the user session ends. Unset if the user session hasn’t ended.
     */
    endTime?: string | null;
    /**
     * Identifier. Session id.
     */
    name?: string | null;
    /**
     * Output only. Timestamp when the user session starts.
     */
    startTime?: string | null;
  }
  /**
   * User dialing in from a phone where the user's identity is unknown because they haven't signed in with a Google Account.
   */
  export interface Schema$PhoneUser {
    /**
     * Output only. Partially redacted user's phone number when calling.
     */
    displayName?: string | null;
  }
  /**
   * Metadata about a recording created during a conference.
   */
  export interface Schema$Recording {
    /**
     * Output only. Recording is saved to Google Drive as an MP4 file. The `drive_destination` includes the Drive `fileId` that can be used to download the file using the `files.get` method of the Drive API.
     */
    driveDestination?: Schema$DriveDestination;
    /**
     * Output only. Timestamp when the recording ended.
     */
    endTime?: string | null;
    /**
     * Output only. Resource name of the recording. Format: `conferenceRecords/{conference_record\}/recordings/{recording\}` where `{recording\}` is a 1:1 mapping to each unique recording session during the conference.
     */
    name?: string | null;
    /**
     * Output only. Timestamp when the recording started.
     */
    startTime?: string | null;
    /**
     * Output only. Current state.
     */
    state?: string | null;
  }
  /**
   * A signed-in user can be: a) An individual joining from a personal computer, mobile device, or through companion mode. b) A robot account used by conference room devices.
   */
  export interface Schema$SignedinUser {
    /**
     * Output only. For a personal device, it's the user's first name and last name. For a robot account, it's the administrator-specified device name. For example, "Altostrat Room".
     */
    displayName?: string | null;
    /**
     * Output only. Unique ID for the user. Interoperable with Admin SDK API and People API. Format: `users/{user\}`
     */
    user?: string | null;
  }
  /**
   * Virtual place where conferences are held. Only one active conference can be held in one space at any given time.
   */
  export interface Schema$Space {
    /**
     * Active conference, if it exists.
     */
    activeConference?: Schema$ActiveConference;
    /**
     * Configuration pertaining to the meeting space.
     */
    config?: Schema$SpaceConfig;
    /**
     * Output only. Type friendly code to join the meeting. Format: `[a-z]+-[a-z]+-[a-z]+` such as `abc-mnop-xyz`. The maximum length is 128 characters. Can only be used as an alias of the space ID to get the space.
     */
    meetingCode?: string | null;
    /**
     * Output only. URI used to join meetings, such as `https://meet.google.com/abc-mnop-xyz`.
     */
    meetingUri?: string | null;
    /**
     * Immutable. Resource name of the space. Format: `spaces/{space\}`
     */
    name?: string | null;
  }
  /**
   * The configuration pertaining to a meeting space.
   */
  export interface Schema$SpaceConfig {
    /**
     * Access type of the meeting space that determines who can join without knocking. Default: The user's default access settings. Controlled by the user's admin for enterprise users or RESTRICTED.
     */
    accessType?: string | null;
    /**
     * Defines the entry points that can be used to join meetings hosted in this meeting space. Default: EntryPointAccess.ALL
     */
    entryPointAccess?: string | null;
  }
  /**
   * Metadata for a transcript generated from a conference. It refers to the ASR (Automatic Speech Recognition) result of user's speech during the conference.
   */
  export interface Schema$Transcript {
    /**
     * Output only. Where the Google Docs transcript is saved.
     */
    docsDestination?: Schema$DocsDestination;
    /**
     * Output only. Timestamp when the transcript stopped.
     */
    endTime?: string | null;
    /**
     * Output only. Resource name of the transcript. Format: `conferenceRecords/{conference_record\}/transcripts/{transcript\}`, where `{transcript\}` is a 1:1 mapping to each unique transcription session of the conference.
     */
    name?: string | null;
    /**
     * Output only. Timestamp when the transcript started.
     */
    startTime?: string | null;
    /**
     * Output only. Current state.
     */
    state?: string | null;
  }
  /**
   * Single entry for one user’s speech during a transcript session.
   */
  export interface Schema$TranscriptEntry {
    /**
     * Output only. Timestamp when the transcript entry ended.
     */
    endTime?: string | null;
    /**
     * Output only. Language of spoken text, such as "en-US". IETF BCP 47 syntax (https://tools.ietf.org/html/bcp47)
     */
    languageCode?: string | null;
    /**
     * Output only. Resource name of the entry. Format: "conferenceRecords/{conference_record\}/transcripts/{transcript\}/entries/{entry\}"
     */
    name?: string | null;
    /**
     * Output only. Refers to the participant who speaks.
     */
    participant?: string | null;
    /**
     * Output only. Timestamp when the transcript entry started.
     */
    startTime?: string | null;
    /**
     * Output only. The transcribed text of the participant's voice, at maximum 10K words. Note that the limit is subject to change.
     */
    text?: string | null;
  }

  export class Resource$Conferencerecords {
    context: APIRequestContext;
    participants: Resource$Conferencerecords$Participants;
    recordings: Resource$Conferencerecords$Recordings;
    transcripts: Resource$Conferencerecords$Transcripts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.participants = new Resource$Conferencerecords$Participants(
        this.context
      );
      this.recordings = new Resource$Conferencerecords$Recordings(this.context);
      this.transcripts = new Resource$Conferencerecords$Transcripts(
        this.context
      );
    }

    /**
     * Gets a conference record by conference ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Conferencerecords$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Conferencerecords$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConferenceRecord>;
    get(
      params: Params$Resource$Conferencerecords$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConferenceRecord>,
      callback: BodyResponseCallback<Schema$ConferenceRecord>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Get,
      callback: BodyResponseCallback<Schema$ConferenceRecord>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConferenceRecord>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Get
        | BodyResponseCallback<Schema$ConferenceRecord>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConferenceRecord>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConferenceRecord>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConferenceRecord> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conferencerecords$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ConferenceRecord>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConferenceRecord>(parameters);
      }
    }

    /**
     * Lists the conference records. By default, ordered by start time and in descending order.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Conferencerecords$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Conferencerecords$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConferenceRecordsResponse>;
    list(
      params: Params$Resource$Conferencerecords$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConferenceRecordsResponse>,
      callback: BodyResponseCallback<Schema$ListConferenceRecordsResponse>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$List,
      callback: BodyResponseCallback<Schema$ListConferenceRecordsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConferenceRecordsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$List
        | BodyResponseCallback<Schema$ListConferenceRecordsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConferenceRecordsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConferenceRecordsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConferenceRecordsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conferencerecords$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/conferenceRecords').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$ListConferenceRecordsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConferenceRecordsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Conferencerecords$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the conference.
     */
    name?: string;
  }
  export interface Params$Resource$Conferencerecords$List
    extends StandardParameters {
    /**
     * Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `space.meeting_code` * `space.name` * `start_time` * `end_time` For example, consider the following filters: * `space.name = "spaces/NAME"` * `space.meeting_code = "abc-mnop-xyz"` * `start_time\>="2024-01-01T00:00:00.000Z" AND start_time<="2024-01-02T00:00:00.000Z"` * `end_time IS NULL`
     */
    filter?: string;
    /**
     * Optional. Maximum number of conference records to return. The service might return fewer than this value. If unspecified, at most 25 conference records are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     */
    pageSize?: number;
    /**
     * Optional. Page token returned from previous List Call.
     */
    pageToken?: string;
  }

  export class Resource$Conferencerecords$Participants {
    context: APIRequestContext;
    participantSessions: Resource$Conferencerecords$Participants$Participantsessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.participantSessions =
        new Resource$Conferencerecords$Participants$Participantsessions(
          this.context
        );
    }

    /**
     * Gets a participant by participant ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Conferencerecords$Participants$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Conferencerecords$Participants$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Participant>;
    get(
      params: Params$Resource$Conferencerecords$Participants$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Participants$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Participant>,
      callback: BodyResponseCallback<Schema$Participant>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Participants$Get,
      callback: BodyResponseCallback<Schema$Participant>
    ): void;
    get(callback: BodyResponseCallback<Schema$Participant>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Participants$Get
        | BodyResponseCallback<Schema$Participant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Participant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Participant>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Participant> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Participants$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conferencerecords$Participants$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Participant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Participant>(parameters);
      }
    }

    /**
     * Lists the participants in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/x, next_page_token'`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Conferencerecords$Participants$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Conferencerecords$Participants$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListParticipantsResponse>;
    list(
      params: Params$Resource$Conferencerecords$Participants$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Participants$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListParticipantsResponse>,
      callback: BodyResponseCallback<Schema$ListParticipantsResponse>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Participants$List,
      callback: BodyResponseCallback<Schema$ListParticipantsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListParticipantsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Participants$List
        | BodyResponseCallback<Schema$ListParticipantsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListParticipantsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListParticipantsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListParticipantsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Participants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conferencerecords$Participants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/participants').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListParticipantsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListParticipantsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Conferencerecords$Participants$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the participant.
     */
    name?: string;
  }
  export interface Params$Resource$Conferencerecords$Participants$List
    extends StandardParameters {
    /**
     * Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `earliest_start_time` * `latest_end_time` For example, `latest_end_time IS NULL` returns active participants in the conference.
     */
    filter?: string;
    /**
     * Maximum number of participants to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future.
     */
    pageSize?: number;
    /**
     * Page token returned from previous List Call.
     */
    pageToken?: string;
    /**
     * Required. Format: `conferenceRecords/{conference_record\}`
     */
    parent?: string;
  }

  export class Resource$Conferencerecords$Participants$Participantsessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a participant session by participant session ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Conferencerecords$Participants$Participantsessions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Conferencerecords$Participants$Participantsessions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ParticipantSession>;
    get(
      params: Params$Resource$Conferencerecords$Participants$Participantsessions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Participants$Participantsessions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ParticipantSession>,
      callback: BodyResponseCallback<Schema$ParticipantSession>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Participants$Participantsessions$Get,
      callback: BodyResponseCallback<Schema$ParticipantSession>
    ): void;
    get(callback: BodyResponseCallback<Schema$ParticipantSession>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Participants$Participantsessions$Get
        | BodyResponseCallback<Schema$ParticipantSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ParticipantSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ParticipantSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ParticipantSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Participants$Participantsessions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Conferencerecords$Participants$Participantsessions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ParticipantSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ParticipantSession>(parameters);
      }
    }

    /**
     * Lists the participant sessions of a participant in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/x, next_page_token'`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Conferencerecords$Participants$Participantsessions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Conferencerecords$Participants$Participantsessions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListParticipantSessionsResponse>;
    list(
      params: Params$Resource$Conferencerecords$Participants$Participantsessions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Participants$Participantsessions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListParticipantSessionsResponse>,
      callback: BodyResponseCallback<Schema$ListParticipantSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Participants$Participantsessions$List,
      callback: BodyResponseCallback<Schema$ListParticipantSessionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListParticipantSessionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Participants$Participantsessions$List
        | BodyResponseCallback<Schema$ListParticipantSessionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListParticipantSessionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListParticipantSessionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListParticipantSessionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Participants$Participantsessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Conferencerecords$Participants$Participantsessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/participantSessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListParticipantSessionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListParticipantSessionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Conferencerecords$Participants$Participantsessions$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the participant.
     */
    name?: string;
  }
  export interface Params$Resource$Conferencerecords$Participants$Participantsessions$List
    extends StandardParameters {
    /**
     * Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `start_time` * `end_time` For example, `end_time IS NULL` returns active participant sessions in the conference record.
     */
    filter?: string;
    /**
     * Optional. Maximum number of participant sessions to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future.
     */
    pageSize?: number;
    /**
     * Optional. Page token returned from previous List Call.
     */
    pageToken?: string;
    /**
     * Required. Format: `conferenceRecords/{conference_record\}/participants/{participant\}`
     */
    parent?: string;
  }

  export class Resource$Conferencerecords$Recordings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a recording by recording ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Conferencerecords$Recordings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Conferencerecords$Recordings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Recording>;
    get(
      params: Params$Resource$Conferencerecords$Recordings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Recordings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Recording>,
      callback: BodyResponseCallback<Schema$Recording>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Recordings$Get,
      callback: BodyResponseCallback<Schema$Recording>
    ): void;
    get(callback: BodyResponseCallback<Schema$Recording>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Recordings$Get
        | BodyResponseCallback<Schema$Recording>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Recording>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Recording>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Recording> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Recordings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conferencerecords$Recordings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Recording>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Recording>(parameters);
      }
    }

    /**
     * Lists the recording resources from the conference record. By default, ordered by start time and in ascending order.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Conferencerecords$Recordings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Conferencerecords$Recordings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRecordingsResponse>;
    list(
      params: Params$Resource$Conferencerecords$Recordings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Recordings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRecordingsResponse>,
      callback: BodyResponseCallback<Schema$ListRecordingsResponse>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Recordings$List,
      callback: BodyResponseCallback<Schema$ListRecordingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRecordingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Recordings$List
        | BodyResponseCallback<Schema$ListRecordingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRecordingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRecordingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRecordingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Recordings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conferencerecords$Recordings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/recordings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRecordingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRecordingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Conferencerecords$Recordings$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the recording.
     */
    name?: string;
  }
  export interface Params$Resource$Conferencerecords$Recordings$List
    extends StandardParameters {
    /**
     * Maximum number of recordings to return. The service might return fewer than this value. If unspecified, at most 10 recordings are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     */
    pageSize?: number;
    /**
     * Page token returned from previous List Call.
     */
    pageToken?: string;
    /**
     * Required. Format: `conferenceRecords/{conference_record\}`
     */
    parent?: string;
  }

  export class Resource$Conferencerecords$Transcripts {
    context: APIRequestContext;
    entries: Resource$Conferencerecords$Transcripts$Entries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entries = new Resource$Conferencerecords$Transcripts$Entries(
        this.context
      );
    }

    /**
     * Gets a transcript by transcript ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Conferencerecords$Transcripts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Conferencerecords$Transcripts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Transcript>;
    get(
      params: Params$Resource$Conferencerecords$Transcripts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Transcripts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Transcript>,
      callback: BodyResponseCallback<Schema$Transcript>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Transcripts$Get,
      callback: BodyResponseCallback<Schema$Transcript>
    ): void;
    get(callback: BodyResponseCallback<Schema$Transcript>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Transcripts$Get
        | BodyResponseCallback<Schema$Transcript>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Transcript>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Transcript>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Transcript> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Transcripts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conferencerecords$Transcripts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Transcript>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Transcript>(parameters);
      }
    }

    /**
     * Lists the set of transcripts from the conference record. By default, ordered by start time and in ascending order.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Conferencerecords$Transcripts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Conferencerecords$Transcripts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTranscriptsResponse>;
    list(
      params: Params$Resource$Conferencerecords$Transcripts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Transcripts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTranscriptsResponse>,
      callback: BodyResponseCallback<Schema$ListTranscriptsResponse>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Transcripts$List,
      callback: BodyResponseCallback<Schema$ListTranscriptsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTranscriptsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Transcripts$List
        | BodyResponseCallback<Schema$ListTranscriptsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTranscriptsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTranscriptsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTranscriptsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Transcripts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conferencerecords$Transcripts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/transcripts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTranscriptsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTranscriptsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Conferencerecords$Transcripts$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the transcript.
     */
    name?: string;
  }
  export interface Params$Resource$Conferencerecords$Transcripts$List
    extends StandardParameters {
    /**
     * Maximum number of transcripts to return. The service might return fewer than this value. If unspecified, at most 10 transcripts are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     */
    pageSize?: number;
    /**
     * Page token returned from previous List Call.
     */
    pageToken?: string;
    /**
     * Required. Format: `conferenceRecords/{conference_record\}`
     */
    parent?: string;
  }

  export class Resource$Conferencerecords$Transcripts$Entries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a `TranscriptEntry` resource by entry ID. Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Conferencerecords$Transcripts$Entries$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Conferencerecords$Transcripts$Entries$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TranscriptEntry>;
    get(
      params: Params$Resource$Conferencerecords$Transcripts$Entries$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Transcripts$Entries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TranscriptEntry>,
      callback: BodyResponseCallback<Schema$TranscriptEntry>
    ): void;
    get(
      params: Params$Resource$Conferencerecords$Transcripts$Entries$Get,
      callback: BodyResponseCallback<Schema$TranscriptEntry>
    ): void;
    get(callback: BodyResponseCallback<Schema$TranscriptEntry>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Transcripts$Entries$Get
        | BodyResponseCallback<Schema$TranscriptEntry>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TranscriptEntry>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TranscriptEntry>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TranscriptEntry> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Transcripts$Entries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Conferencerecords$Transcripts$Entries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$TranscriptEntry>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TranscriptEntry>(parameters);
      }
    }

    /**
     * Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order. Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Conferencerecords$Transcripts$Entries$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Conferencerecords$Transcripts$Entries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTranscriptEntriesResponse>;
    list(
      params: Params$Resource$Conferencerecords$Transcripts$Entries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Transcripts$Entries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTranscriptEntriesResponse>,
      callback: BodyResponseCallback<Schema$ListTranscriptEntriesResponse>
    ): void;
    list(
      params: Params$Resource$Conferencerecords$Transcripts$Entries$List,
      callback: BodyResponseCallback<Schema$ListTranscriptEntriesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTranscriptEntriesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Conferencerecords$Transcripts$Entries$List
        | BodyResponseCallback<Schema$ListTranscriptEntriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTranscriptEntriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTranscriptEntriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTranscriptEntriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conferencerecords$Transcripts$Entries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Conferencerecords$Transcripts$Entries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTranscriptEntriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTranscriptEntriesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Conferencerecords$Transcripts$Entries$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the `TranscriptEntry`.
     */
    name?: string;
  }
  export interface Params$Resource$Conferencerecords$Transcripts$Entries$List
    extends StandardParameters {
    /**
     * Maximum number of entries to return. The service might return fewer than this value. If unspecified, at most 10 entries are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     */
    pageSize?: number;
    /**
     * Page token returned from previous List Call.
     */
    pageToken?: string;
    /**
     * Required. Format: `conferenceRecords/{conference_record\}/transcripts/{transcript\}`
     */
    parent?: string;
  }

  export class Resource$Spaces {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a space.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Spaces$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Spaces$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Space>;
    create(
      params: Params$Resource$Spaces$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Spaces$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Space>,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    create(
      params: Params$Resource$Spaces$Create,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    create(callback: BodyResponseCallback<Schema$Space>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Spaces$Create
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Space> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/spaces').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Space>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Space>(parameters);
      }
    }

    /**
     * Ends an active conference (if there's one).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    endActiveConference(
      params: Params$Resource$Spaces$Endactiveconference,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    endActiveConference(
      params?: Params$Resource$Spaces$Endactiveconference,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    endActiveConference(
      params: Params$Resource$Spaces$Endactiveconference,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    endActiveConference(
      params: Params$Resource$Spaces$Endactiveconference,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    endActiveConference(
      params: Params$Resource$Spaces$Endactiveconference,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    endActiveConference(callback: BodyResponseCallback<Schema$Empty>): void;
    endActiveConference(
      paramsOrCallback?:
        | Params$Resource$Spaces$Endactiveconference
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Endactiveconference;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Endactiveconference;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:endActiveConference').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets a space by `space_id` or `meeting_code`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Spaces$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Spaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Space>;
    get(
      params: Params$Resource$Spaces$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Space>,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    get(
      params: Params$Resource$Spaces$Get,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    get(callback: BodyResponseCallback<Schema$Space>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spaces$Get
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Space> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Space>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Space>(parameters);
      }
    }

    /**
     * Updates a space.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Spaces$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Spaces$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Space>;
    patch(
      params: Params$Resource$Spaces$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Spaces$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Space>,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    patch(
      params: Params$Resource$Spaces$Patch,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Space>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Spaces$Patch
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Space> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://meet.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Space>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Space>(parameters);
      }
    }
  }

  export interface Params$Resource$Spaces$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Space;
  }
  export interface Params$Resource$Spaces$Endactiveconference
    extends StandardParameters {
    /**
     * Required. Resource name of the space.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EndActiveConferenceRequest;
  }
  export interface Params$Resource$Spaces$Get extends StandardParameters {
    /**
     * Required. Resource name of the space.
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Patch extends StandardParameters {
    /**
     * Immutable. Resource name of the space. Format: `spaces/{space\}`
     */
    name?: string;
    /**
     * Optional. Field mask used to specify the fields to be updated in the space. If update_mask isn't provided, it defaults to '*' and updates all fields provided in the request, including deleting fields not set in the request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Space;
  }
}
