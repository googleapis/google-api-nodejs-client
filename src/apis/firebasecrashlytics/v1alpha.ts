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

export namespace firebasecrashlytics_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * Firebase Crashlytics API
   *
   * This service provides an API for mobile app developers to request deletion of user&#39;s crash reports.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
   * ```
   */
  export class Firebasecrashlytics {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Response message for the BatchGetEvents method.
   */
  export interface Schema$BatchGetEventsResponse {
    /**
     * The list of retrieved events.
     */
    events?: Schema$Event[];
  }
  /**
   * Request message for the BatchUpdateIssues method.
   */
  export interface Schema$BatchUpdateIssuesRequest {
    /**
     * Required. The request message specifying the resources to update. A maximum of 100 issues can be modified in a batch.
     */
    requests?: Schema$UpdateIssueRequest[];
    /**
     * Optional. The list of Issue fields to update. If this is set, the update_mask field in the UpdateIssueRequest messages must either be empty or match this field.
     */
    updateMask?: string | null;
  }
  /**
   * Response message for the BatchUpdateIssues method.
   */
  export interface Schema$BatchUpdateIssuesResponse {
    /**
     * Issues updated in the same order as in BatchUpdateIssuesRequest.
     */
    issues?: Schema$Issue[];
  }
  /**
   * Analytics events recorded during the session.
   */
  export interface Schema$Breadcrumb {
    /**
     * Device timestamp for the event.
     */
    eventTime?: string | null;
    /**
     * Event parameters.
     */
    params?: {[key: string]: string} | null;
    /**
     * Analytic event name.
     */
    title?: string | null;
  }
  /**
   * Web browser metadata.
   */
  export interface Schema$Browser {
    /**
     * Browser name.
     */
    browser?: string | null;
    /**
     * Browser name and version number. Formatted to be suitable for passing to BrowserFilter.
     */
    displayName?: string | null;
    /**
     * Browser display version number.
     */
    displayVersion?: string | null;
  }
  /**
   * Response message for the DeleteUserCrashReports method. All crash reports associated with the specified user will be deleted typically within 24 hours of receiving the crash report.
   */
  export interface Schema$DeleteUserCrashReportsResponse {
    /**
     * Target time to complete the delete crash reports operation.
     */
    targetCompleteTime?: string | null;
  }
  /**
   * Mobile device metadata.
   */
  export interface Schema$Device {
    /**
     * Device processor architecture.
     */
    architecture?: string | null;
    /**
     * An invariant name of the manufacturer that submitted this product in its most recognizable public form, e.g. "Google".
     */
    companyName?: string | null;
    /**
     * Full device name, suitable for passing to DeviceFilter. Format: "manufacturer (model)".
     */
    displayName?: string | null;
    /**
     * See FormFactor message.
     */
    formFactor?: string | null;
    /**
     * Device brand name which is consistent with android.os.Build.BRAND.
     */
    manufacturer?: string | null;
    /**
     * Marketing name, most recognizable public form, e.g. "Pixel 6".
     */
    marketingName?: string | null;
    /**
     * The model name which is consistent with android.os.Build.MODEL, e.g. ("SPH-L710", "GT-I9300").
     */
    model?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A non-fatal error and its stacktrace, only from Apple apps.
   */
  export interface Schema$Error {
    /**
     * True when the Crashlytics analysis has determined that the stacktrace in this error is where the fault occurred.
     */
    blamed?: boolean | null;
    /**
     * Error code associated with the app's custom logged NSError.
     */
    code?: string | null;
    /**
     * The frames in the error's stacktrace.
     */
    frames?: Schema$Frame[];
    /**
     * The queue on which the thread was running.
     */
    queue?: string | null;
    /**
     * The subtitle of the error.
     */
    subtitle?: string | null;
    /**
     * The title of the error.
     */
    title?: string | null;
  }
  /**
   * The message describing a single Crashlytics event. Related to BigQuery export schema, which can be found at [Export Crashlytics data to BigQuery](https://firebase.google.com/docs/crashlytics/bigquery-export#dataset-schema-crashlytics)
   */
  export interface Schema$Event {
    /**
     * App orientation at the time of the crash (portrait or landscape).
     */
    appOrientation?: string | null;
    /**
     * The stack trace frame blamed by Crashlytics processing. May not be present in future analyzer.
     */
    blameFrame?: Schema$Frame;
    /**
     * Analytics events recorded by the analytics SDK during the session.
     */
    breadcrumbs?: Schema$Breadcrumb[];
    /**
     * Browser and version.
     */
    browser?: Schema$Browser;
    /**
     * Metadata provided by the app's build system, including version control repository info.
     */
    buildStamp?: string | null;
    /**
     * The bundle name for iOS apps or the package name of Android apps. Format: "com.mycompany.myapp".
     */
    bundleOrPackage?: string | null;
    /**
     * Crashlytics SDK version.
     */
    crashlyticsSdkVersion?: string | null;
    /**
     * Custom keys set by the developer during the session.
     */
    customKeys?: {[key: string]: string} | null;
    /**
     * Mobile device metadata.
     */
    device?: Schema$Device;
    /**
     * Device orientation at the time of the crash (portrait or landscape).
     */
    deviceOrientation?: string | null;
    /**
     * Apple only. A non-fatal error captured by the iOS SDK and its stacktrace.
     */
    errors?: Schema$Error[];
    /**
     * Output only. Immutable. The unique event identifier is assigned during processing.
     */
    eventId?: string | null;
    /**
     * Device timestamp that the event was recorded.
     */
    eventTime?: string | null;
    /**
     * Android and web only. Exceptions that occurred during this event. Nested exceptions are presented in reverse chronological order, so that the last record is the first exception thrown.
     */
    exceptions?: Schema$Exception[];
    /**
     * Unique identifier for the device-app installation. This field is used to compute the unique number of impacted users.
     */
    installationUuid?: string | null;
    /**
     * Details for the [Issue] assigned to this [Event].
     */
    issue?: Schema$Issue;
    /**
     * The subtitle of the issue in which the event was grouped. This is usually a symbol or an exception message.
     */
    issueSubtitle?: string | null;
    /**
     * The title of the issue in which the event was grouped. This is usually a source file or method name.
     */
    issueTitle?: string | null;
    /**
     * Details for the [IssueVariant] assigned to this [Event].
     */
    issueVariant?: Schema$IssueVariant;
    /**
     * Log messages recorded by the developer during the session.
     */
    logs?: Schema$Log[];
    /**
     * Mobile device memory usage.
     */
    memory?: Schema$Memory;
    /**
     * Required. Output only. Immutable. Identifier. The name of the event resource. Format: "projects/{project\}/apps/{app_id\}/events/{event\}".
     */
    name?: string | null;
    /**
     * Operating system and version.
     */
    operatingSystem?: Schema$OperatingSystem;
    /**
     * ANDROID, IOS, or WEB.
     */
    platform?: string | null;
    /**
     * The state of the app process at the time of the event.
     */
    processState?: string | null;
    /**
     * Server timestamp that the event was received by Crashlytics.
     */
    receivedTime?: string | null;
    /**
     * Output only. Web only. The route path of the web application when the event occurred, excluding query parameters and fragment.
     */
    routePath?: string | null;
    /**
     * Unique identifier for the Firebase session.
     */
    sessionId?: string | null;
    /**
     * Mobile device disk/flash usage.
     */
    storage?: Schema$Storage;
    /**
     * Application threads present at the time the event was recorded. Each contains a stacktrace. One thread will be blamed for the error.
     */
    threads?: Schema$Thread[];
    /**
     * End user identifiers for the device owner.
     */
    user?: Schema$User;
    /**
     * Mobile application version.
     */
    version?: Schema$Version;
  }
  /**
   * A Java or Javascript exception and its stacktrace. Only from Android or web apps.
   */
  export interface Schema$Exception {
    /**
     * True when the Crashlytics analysis has determined that this thread is where the fault occurred.
     */
    blamed?: boolean | null;
    /**
     * A message associated with the exception.
     */
    exceptionMessage?: string | null;
    /**
     * The frames in the exception's stacktrace.
     */
    frames?: Schema$Frame[];
    /**
     * True for all but the last-thrown exception (i.e. the first record).
     */
    nested?: boolean | null;
    /**
     * The subtitle of the exception.
     */
    subtitle?: string | null;
    /**
     * The title of the exception.
     */
    title?: string | null;
    /**
     * The exception type e.g. java.lang.IllegalStateException.
     */
    type?: string | null;
  }
  /**
   * Sessions recorded by the Firebase App Quality Sessions SDK.
   */
  export interface Schema$FirebaseSessionEvent {
    /**
     * Mobile device metadata.
     */
    device?: Schema$Device;
    /**
     * The start timestamp for the session event.
     */
    eventTime?: string | null;
    /**
     * Session event type. The SDK only supports SESSION_START events at this time.
     */
    eventType?: string | null;
    /**
     * Uniquely identifies a device with Firebase apps installed.
     */
    firebaseInstallationId?: string | null;
    /**
     * The identifier of the first session since the last cold start. This id and the session_id will be the same for app launches.
     */
    firstSessionId?: string | null;
    /**
     * Operating system and version.
     */
    operatingSystem?: Schema$OperatingSystem;
    /**
     * Unique identifier for the Firebase session.
     */
    sessionId?: string | null;
    /**
     * Indicates the number of sessions since the last cold start.
     */
    sessionIndex?: number | null;
    /**
     * Mobile application version numbers.
     */
    version?: Schema$Version;
  }
  /**
   * A frame in a stacktrace.
   */
  export interface Schema$Frame {
    /**
     * The address in the binary image which contains the code. Present for native frames.
     */
    address?: string | null;
    /**
     * True when the Crashlytics analysis has determined that this frame is likely to be the cause of the error.
     */
    blamed?: boolean | null;
    /**
     * The column on the line.
     */
    column?: string | null;
    /**
     * The name of the source file in which the frame is found.
     */
    file?: string | null;
    /**
     * The display name of the library that includes the frame.
     */
    library?: string | null;
    /**
     * The line number in the file of the frame.
     */
    line?: string | null;
    /**
     * The byte offset into the binary image that contains the code. Present for native frames.
     */
    offset?: string | null;
    /**
     * One of DEVELOPER, VENDOR, RUNTIME, PLATFORM, or SYSTEM.
     */
    owner?: string | null;
    /**
     * The frame symbol after it has been deobfuscated or symbolicated. The raw symbol from the device if it could not be hydrated.
     */
    symbol?: string | null;
  }
  /**
   * A set of computed metric values for a time interval
   */
  export interface Schema$IntervalMetrics {
    /**
     * The end of the interval covered by the computation.
     */
    endTime?: string | null;
    /**
     * The total count of events in the interval.
     */
    eventsCount?: string | null;
    /**
     * The number of distinct users in the set of events.
     */
    impactedUsersCount?: string | null;
    /**
     * The number of distinct sessions in the set of events.
     */
    sessionsCount?: string | null;
    /**
     * The start of the interval covered by the computation.
     */
    startTime?: string | null;
  }
  /**
   * An issue describes a set of similar events that have been analyzed by Crashlytics and grouped together. All events within an issue will be of the same error_type: crash, non-fatal exception or ANR. All events within an issue will contain similar stack traces in their blamed thread.
   */
  export interface Schema$Issue {
    /**
     * Output only. Immutable. Indicates whether this issue is a crash, non-fatal exception, or ANR.
     */
    errorType?: string | null;
    /**
     * Output only. Immutable. The first time this issue was seen.
     */
    firstSeenTime?: string | null;
    /**
     * Output only. Immutable. The first app display_version in which this issue was seen, populated for mobile issues only.
     */
    firstSeenVersion?: string | null;
    /**
     * Output only. Immutable. Unique identifier for the issue.
     */
    id?: string | null;
    /**
     * Output only. The most recent time this issue was seen.
     */
    lastSeenTime?: string | null;
    /**
     * Output only. The most recent app display_version in which this issue was seen, populated for mobile issues only.
     */
    lastSeenVersion?: string | null;
    /**
     * Required. Output only. Immutable. Identifier. The name of the issue resource. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     */
    name?: string | null;
    /**
     * Output only. The number of notes attached to an issue.
     */
    notesCount?: string | null;
    /**
     * Output only. The resource name for a sample event in this issue.
     */
    sampleEvent?: string | null;
    /**
     * Output only. Immutable. Distinctive characteristics assigned by the Crashlytics analyzer.
     */
    signals?: Schema$IssueSignals[];
    /**
     * Output only. Indicates whether this issue is open, closed or muted. For details on how issue states change without user actions, see [Regressed Issues](https://firebase.google.com/docs/crashlytics/troubleshooting?platform=ios#regressed-issues).
     */
    state?: string | null;
    /**
     * Output only. The time at which the issue state was last changed.
     */
    stateUpdateTime?: string | null;
    /**
     * Output only. Immutable. Caption subtitle. This is usually a symbol or an exception message.
     */
    subtitle?: string | null;
    /**
     * Output only. Immutable. Caption title. This is usually a source file or method name.
     */
    title?: string | null;
    /**
     * Output only. Provides a link to the Issue on the Firebase console. When this Issue is obtained as part of a Report, then the link will be configured with the same time interval and filters as the request.
     */
    uri?: string | null;
    /**
     * Output only. Immutable. The top 12 variants (subgroups) within the issue. Variants group events within an issue that are very similar. A single result implies that the variant is the same as the parent issue. This field will be empty when multiple issues are requested. Request a single issue to list variants.
     */
    variants?: Schema$IssueVariant[];
  }
  /**
   * Distinctive characteristics assigned by the Crashlytics analyzer.
   */
  export interface Schema$IssueSignals {
    /**
     * Output only. Supporting detail information.
     */
    description?: string | null;
    /**
     * Output only. The signal name.
     */
    signal?: string | null;
  }
  /**
   * A variant is a subgroup of an issue where all events have very similar stack traces. Issues may contain one or more variants.
   */
  export interface Schema$IssueVariant {
    /**
     * Output only. Immutable. Distinct identifier for the variant.
     */
    id?: string | null;
    /**
     * Output only. The resource name for a sample event in this variant.
     */
    sampleEvent?: string | null;
    /**
     * Output only. Provides a link to the variant on the Firebase console. When this variant is obtained as part of a Report, then the link will be configured with the same time interval and filters as the request.
     */
    uri?: string | null;
  }
  /**
   * Response message for the ListEvents method.
   */
  export interface Schema$ListEventsResponse {
    /**
     * Returns one element per event, in descending order the by event timestamp.
     */
    events?: Schema$Event[];
    /**
     * A pagination token to retrieve the next page of events. The next page will have earlier or later events depending on the request's ordering. If this field is not present, there are no subsequent events.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListNotes method.
   */
  export interface Schema$ListNotesResponse {
    /**
     * A pagination token to retrieve the next page of notes. If this field is not present, there are no subsequent notes.
     */
    nextPageToken?: string | null;
    /**
     * Returns notes ordered descending by the timestamp.
     */
    notes?: Schema$Note[];
  }
  /**
   * Response method for the ListReports method. The response will always include all of the available reports.
   */
  export interface Schema$ListReportsResponse {
    /**
     * The report objects returned will contain their names and usage instructions, but include no results. Use the `GetReport` method to run the report and obtain the paged results.
     */
    reports?: Schema$Report[];
  }
  /**
   * Developer-provided log lines recorded during the session.
   */
  export interface Schema$Log {
    /**
     * Device timestamp when the line was logged.
     */
    logTime?: string | null;
    /**
     * Log message.
     */
    message?: string | null;
  }
  /**
   * Mobile device memory usage.
   */
  export interface Schema$Memory {
    /**
     * Bytes free.
     */
    free?: string | null;
    /**
     * Bytes in use.
     */
    used?: string | null;
  }
  /**
   * Developer notes for an issue.
   */
  export interface Schema$Note {
    /**
     * Output only. The email of the author of the note.
     */
    author?: string | null;
    /**
     * Immutable. The body of the note.
     */
    body?: string | null;
    /**
     * Output only. Time when the note was created.
     */
    createTime?: string | null;
    /**
     * Output only. Identifier. Format: "projects/{project\}/apps/app/issues/{issue\}/notes/{note\}".
     */
    name?: string | null;
  }
  /**
   * Mobile device operating system metadata.
   */
  export interface Schema$OperatingSystem {
    /**
     * The device category (mobile, tablet, desktop).
     */
    deviceType?: string | null;
    /**
     * Name and version number. Formatted to be suitable for passing to OperatingSystemFilter.
     */
    displayName?: string | null;
    /**
     * Operating system display version number.
     */
    displayVersion?: string | null;
    /**
     * Indicates if the OS has been modified or "jailbroken".
     */
    modificationState?: string | null;
    /**
     * Operating system name.
     */
    os?: string | null;
    /**
     * The OS type on Apple platforms (iOS, iPadOS, etc.).
     */
    type?: string | null;
  }
  /**
   * Describes a release track in the Play Developer Console.
   */
  export interface Schema$PlayTrack {
    /**
     * User-generated or auto-generated name of the track. PROD and INTERNAL track types always have auto-generated names, e.g. "prod" and "internal" respectively. Tracks of type EARLY_ACCESS always have a user-generated name. Other track types do not have any guarantees, might have user-generated or auto-generated names.
     */
    title?: string | null;
    /**
     * The type of track (prod, internal, etc...).
     */
    type?: string | null;
  }
  /**
   * Response message for the GetReport method. A report consists of the results of a query over an application's events. The events may be filtered by various criteria defined in the filters proto. The result will consist of a number of paginated groups, of a type relevant to the report such as issues or device models.
   */
  export interface Schema$Report {
    /**
     * Output only. The displayable title of the report.
     */
    displayName?: string | null;
    /**
     * Aggregate event statistics in the report will be grouped by a dimension, such as by issue or by version. The response contains one element per group, and all ReportGroup messages will have the same parent field.
     */
    groups?: Schema$ReportGroup[];
    /**
     * The name of the report. Format: "projects/{project\}/apps/{app_id\}/reports/{report\}".
     */
    name?: string | null;
    /**
     * Output only. A page token used to retrieve additional report groups. If this field is not present, there are no subsequent pages available to retrieve.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The total number of groups retrievable by the request.
     */
    totalSize?: number | null;
    /**
     * Usage instructions for the report with a description of the result metrics. This field contains a description of the underlying query and describes the expected response data with any known caveats. This string can be displayed in the UI of any integration that offers comprehensive access to all Crashlytics reports.
     */
    usage?: string | null;
  }
  /**
   * A group of results in an EventReport. In any report, the group_parent field is strictly the same type for all of the groups in any collection.
   */
  export interface Schema$ReportGroup {
    /**
     * Browser metrics group.
     */
    browser?: Schema$Browser;
    /**
     * Device metrics group.
     */
    device?: Schema$Device;
    /**
     * Issue metrics group.
     */
    issue?: Schema$Issue;
    /**
     * Scalar metrics will contain a single object covering the entire interval, while time-dimensioned graphs will contain one per time grain.
     */
    metrics?: Schema$IntervalMetrics[];
    /**
     * Operating system metrics group.
     */
    operatingSystem?: Schema$OperatingSystem;
    /**
     * When applicable, this field contains additional nested groupings. For example, events can be grouped by operating system and by operating system version.
     */
    subgroups?: Schema$ReportGroup[];
    /**
     * Issue variant metrics group.
     */
    variant?: Schema$IssueVariant;
    /**
     * Version metrics group.
     */
    version?: Schema$Version;
    /**
     * Web metrics group.
     */
    webMetricsGroup?: Schema$WebMetricsGroup;
  }
  /**
   * Mobile device disk/flash usage. Not reported for all devices.
   */
  export interface Schema$Storage {
    /**
     * Bytes free.
     */
    free?: string | null;
    /**
     * Bytes used.
     */
    used?: string | null;
  }
  /**
   * An application thread.
   */
  export interface Schema$Thread {
    /**
     * True when the Crashlytics analysis has determined that the stacktrace in this thread is where the fault occurred.
     */
    blamed?: boolean | null;
    /**
     * The address of the signal that caused the application to crash. Only present on crashed native threads.
     */
    crashAddress?: string | null;
    /**
     * True when the thread has crashed.
     */
    crashed?: boolean | null;
    /**
     * The frames in the thread's stacktrace.
     */
    frames?: Schema$Frame[];
    /**
     * The name of the thread.
     */
    name?: string | null;
    /**
     * The queue on which the thread was running.
     */
    queue?: string | null;
    /**
     * The name of the signal that caused the app to crash. Only present on crashed native threads.
     */
    signal?: string | null;
    /**
     * The code of the signal that caused the app to crash. Only present on crashed native threads.
     */
    signalCode?: string | null;
    /**
     * The subtitle of the thread.
     */
    subtitle?: string | null;
    /**
     * The system id of the thread, only available for ANR threads.
     */
    sysThreadId?: string | null;
    /**
     * The id of the thread, only available for ANR threads.
     */
    threadId?: string | null;
    /**
     * Output only. The state of the thread at the time the ANR occurred.
     */
    threadState?: string | null;
    /**
     * The title of the thread.
     */
    title?: string | null;
  }
  /**
   * Request message for the UpdateIssue method.
   */
  export interface Schema$UpdateIssueRequest {
    /**
     * Required. The issue to update. The issue's `name` field is used to identify the issue to update. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     */
    issue?: Schema$Issue;
    /**
     * Optional. The list of Issue fields to update. Currently only "state" is mutable.
     */
    updateMask?: string | null;
  }
  /**
   * Developer-provided end user identifiers.
   */
  export interface Schema$User {
    /**
     * User id if provided by the app developer.
     */
    id?: string | null;
  }
  /**
   * Application software version.
   */
  export interface Schema$Version {
    /**
     * Mobile only. One display_version can have many build_version. On Android, strictly the same as "version code". On iOS, strictly the same as "build number" or CFBundleVersion.
     */
    buildVersion?: string | null;
    /**
     * Compound readable string containing both display and build versions. Format: "display_version (build_version)" e.g. "1.2.3 (456)". This string can be used for filtering with the VersionFilter.display_name field.
     */
    displayName?: string | null;
    /**
     * Readable version string, e.g. "1.2.3". On Android, strictly the same as "version name". On iOS, strictly the same as "version number" or CFBundleShortVersionString.
     */
    displayVersion?: string | null;
    /**
     * Indicates releases which have artifacts that are currently available in the Play Store to the target audience of the track. Versions may be available in multiple tracks.
     */
    tracks?: Schema$PlayTrack[];
  }
  /**
   * Represents a grouping for metrics specific to web applications.
   */
  export interface Schema$WebMetricsGroup {
    /**
     * The id of the web metrics group
     */
    id?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    apps: Resource$Projects$Apps;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Projects$Apps(this.context);
    }
  }

  export class Resource$Projects$Apps {
    context: APIRequestContext;
    events: Resource$Projects$Apps$Events;
    issues: Resource$Projects$Apps$Issues;
    reports: Resource$Projects$Apps$Reports;
    users: Resource$Projects$Apps$Users;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.events = new Resource$Projects$Apps$Events(this.context);
      this.issues = new Resource$Projects$Apps$Issues(this.context);
      this.reports = new Resource$Projects$Apps$Reports(this.context);
      this.users = new Resource$Projects$Apps$Users(this.context);
    }
  }

  export class Resource$Projects$Apps$Events {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetch a batch of up to 100 events by name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.events.batchGet({
     *     // Required. The resource names of the desired events. A maximum of 100 events can be retrieved in a batch. Format: "projects/{project\}/apps/{app_id\}/events/{event_id\}". The app_id and event_id are required, but project may be "-" to conserve space in long URIs.
     *     names: 'placeholder-value',
     *     // Required. The firebase application. Format: "projects/{project\}/apps/{app_id\}".
     *     parent: 'projects/my-project/apps/my-app',
     *     // Optional. The list of Event fields to include in the response. If omitted, the full event is returned.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "events": []
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
    batchGet(
      params: Params$Resource$Projects$Apps$Events$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Projects$Apps$Events$Batchget,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchGetEventsResponse>>;
    batchGet(
      params: Params$Resource$Projects$Apps$Events$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Events$Batchget,
      options:
        MethodOptions | BodyResponseCallback<Schema$BatchGetEventsResponse>,
      callback: BodyResponseCallback<Schema$BatchGetEventsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Events$Batchget,
      callback: BodyResponseCallback<Schema$BatchGetEventsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$BatchGetEventsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Events$Batchget
        | BodyResponseCallback<Schema$BatchGetEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchGetEventsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Events$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Events$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/events:batchGet').replace(
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
        createAPIRequest<Schema$BatchGetEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchGetEventsResponse>(parameters);
      }
    }

    /**
     * List the events for an issue matching filter criteria, sorted in descending order by timestamp.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.events.list({
     *     // Optional. Only count events from the given browser. This string matches Browser.display_name. Format: "name (display_version)" e.g. "Chrome (123)", or just "name" for all possible versions, e.g. simply "Chrome".
     *     'filter.browser.displayNames': 'placeholder-value',
     *     // Only counts events from the given Device model. This string matches Device.display_name. Format: "manufacturer (model)" e.g. "Google (Pixel 6)", or just "manufacturer" for all possible models, e.g. simply "Google". Note that a device's marketing_name field can not be used for filtering.
     *     'filter.device.displayNames': 'placeholder-value',
     *     // Only counts events from devices with the given form factor (e.g. phone or tablet).
     *     'filter.device.formFactors': 'placeholder-value',
     *     // Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     *     'filter.interval.endTime': 'placeholder-value',
     *     // Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     *     'filter.interval.startTime': 'placeholder-value',
     *     // Optional. A space separated list of filter terms matched against the contents of the issue. Contents include the title and the stack trace. Matches must begin at alphanumeric tokens, i.e., 'util.Sorted' matches 'java.util.SortedSet' but not 'myutil.SortedArray'. The filter matches if all filter terms match. All non-alphanumeric characters are ignored for matching. Filtering is assumed to be prefix-search and order-independent unless phrases are surrounded by "". Any terms contained in quotes are searched using exact-match (given filter term "foo", we will not return "foobar"), and must appear in the order given exactly. To get order-dependence but prefix-search, use a * within the quotes ("abc foo*" will match "abc foobar", but not "foo abc" "abcd foobar", or "abc xyz foobar").
     *     'filter.issue.content': 'placeholder-value',
     *     // Optional. Only counts events of the given error types. This field matches [Issue.error_type].
     *     'filter.issue.errorTypes': 'placeholder-value',
     *     // Optional. Only counts events in the given issue ID. This field matches [Issue.id].
     *     'filter.issue.id': 'placeholder-value',
     *     // Optional. Only returns issues currently marked with the given signals. This field matches [Issue.signals.signal].
     *     'filter.issue.signals': 'placeholder-value',
     *     // Optional. Deprecated: Prefer `states` field. Only includes events for issues with the given issue state. Only available for `topIssues` reports.
     *     'filter.issue.state': 'placeholder-value',
     *     // Optional. Only includes events for issues with the given issue states. Only available for `topIssues` reports.
     *     'filter.issue.states': 'placeholder-value',
     *     // Optional. Only counts events for the given issue variant ID. This field matches [IssueVariant.id].
     *     'filter.issue.variantId': 'placeholder-value',
     *     // Only counts events in the given operating system and version. This string matches OperatingSystem.display_name. Format: "osName (osVersion)" e.g. "Android (11)". or just "osName" for all versions, e.g. simply "iPadOS".
     *     'filter.operatingSystem.displayNames': 'placeholder-value',
     *     // Only counts events in the given app version. This string matches Version.display_name. Format: "display_version (build_version)" e.g. "1.2.3 (456)".
     *     'filter.version.displayNames': 'placeholder-value',
     *     // Optional. The maximum number of events per page. If omitted, defaults to 10.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous calls.
     *     pageToken: 'placeholder-value',
     *     // Required. The Firebase application. Format: "projects/{project\}/apps/{app_id\}".
     *     parent: 'projects/my-project/apps/my-app',
     *     // Optional. The list of Event fields to include in the response. If omitted, the full event is returned.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "events": [],
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
      params: Params$Resource$Projects$Apps$Events$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Apps$Events$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEventsResponse>>;
    list(
      params: Params$Resource$Projects$Apps$Events$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Events$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListEventsResponse>,
      callback: BodyResponseCallback<Schema$ListEventsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Events$List,
      callback: BodyResponseCallback<Schema$ListEventsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEventsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Events$List
        | BodyResponseCallback<Schema$ListEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEventsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Events$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Events$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/events').replace(
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
        createAPIRequest<Schema$ListEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEventsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Events$Batchget extends StandardParameters {
    /**
     * Required. The resource names of the desired events. A maximum of 100 events can be retrieved in a batch. Format: "projects/{project\}/apps/{app_id\}/events/{event_id\}". The app_id and event_id are required, but project may be "-" to conserve space in long URIs.
     */
    names?: string[];
    /**
     * Required. The firebase application. Format: "projects/{project\}/apps/{app_id\}".
     */
    parent?: string;
    /**
     * Optional. The list of Event fields to include in the response. If omitted, the full event is returned.
     */
    readMask?: string;
  }
  export interface Params$Resource$Projects$Apps$Events$List extends StandardParameters {
    /**
     * Optional. Only count events from the given browser. This string matches Browser.display_name. Format: "name (display_version)" e.g. "Chrome (123)", or just "name" for all possible versions, e.g. simply "Chrome".
     */
    'filter.browser.displayNames'?: string[];
    /**
     * Only counts events from the given Device model. This string matches Device.display_name. Format: "manufacturer (model)" e.g. "Google (Pixel 6)", or just "manufacturer" for all possible models, e.g. simply "Google". Note that a device's marketing_name field can not be used for filtering.
     */
    'filter.device.displayNames'?: string[];
    /**
     * Only counts events from devices with the given form factor (e.g. phone or tablet).
     */
    'filter.device.formFactors'?: string[];
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    'filter.interval.endTime'?: string;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    'filter.interval.startTime'?: string;
    /**
     * Optional. A space separated list of filter terms matched against the contents of the issue. Contents include the title and the stack trace. Matches must begin at alphanumeric tokens, i.e., 'util.Sorted' matches 'java.util.SortedSet' but not 'myutil.SortedArray'. The filter matches if all filter terms match. All non-alphanumeric characters are ignored for matching. Filtering is assumed to be prefix-search and order-independent unless phrases are surrounded by "". Any terms contained in quotes are searched using exact-match (given filter term "foo", we will not return "foobar"), and must appear in the order given exactly. To get order-dependence but prefix-search, use a * within the quotes ("abc foo*" will match "abc foobar", but not "foo abc" "abcd foobar", or "abc xyz foobar").
     */
    'filter.issue.content'?: string;
    /**
     * Optional. Only counts events of the given error types. This field matches [Issue.error_type].
     */
    'filter.issue.errorTypes'?: string[];
    /**
     * Optional. Only counts events in the given issue ID. This field matches [Issue.id].
     */
    'filter.issue.id'?: string;
    /**
     * Optional. Only returns issues currently marked with the given signals. This field matches [Issue.signals.signal].
     */
    'filter.issue.signals'?: string[];
    /**
     * Optional. Deprecated: Prefer `states` field. Only includes events for issues with the given issue state. Only available for `topIssues` reports.
     */
    'filter.issue.state'?: string;
    /**
     * Optional. Only includes events for issues with the given issue states. Only available for `topIssues` reports.
     */
    'filter.issue.states'?: string[];
    /**
     * Optional. Only counts events for the given issue variant ID. This field matches [IssueVariant.id].
     */
    'filter.issue.variantId'?: string;
    /**
     * Only counts events in the given operating system and version. This string matches OperatingSystem.display_name. Format: "osName (osVersion)" e.g. "Android (11)". or just "osName" for all versions, e.g. simply "iPadOS".
     */
    'filter.operatingSystem.displayNames'?: string[];
    /**
     * Only counts events in the given app version. This string matches Version.display_name. Format: "display_version (build_version)" e.g. "1.2.3 (456)".
     */
    'filter.version.displayNames'?: string[];
    /**
     * Optional. The maximum number of events per page. If omitted, defaults to 10.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous calls.
     */
    pageToken?: string;
    /**
     * Required. The Firebase application. Format: "projects/{project\}/apps/{app_id\}".
     */
    parent?: string;
    /**
     * Optional. The list of Event fields to include in the response. If omitted, the full event is returned.
     */
    readMask?: string;
  }

  export class Resource$Projects$Apps$Issues {
    context: APIRequestContext;
    notes: Resource$Projects$Apps$Issues$Notes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.notes = new Resource$Projects$Apps$Issues$Notes(this.context);
    }

    /**
     * Change the state of a group of issues. This method is not atomic, so partial failures can occur. In the event of a partial failure, the request will fail and you will need to call `GetIssue` to see which issues were not updated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.issues.batchUpdate({
     *     // Required. The parent resource shared by all issues being updated. Format: projects/{project\}/apps/{app\}. If this is set, the parent field in the UpdateIssueRequest messages must either be empty or match this field.
     *     parent: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": [],
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "issues": []
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
    batchUpdate(
      params: Params$Resource$Projects$Apps$Issues$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Projects$Apps$Issues$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateIssuesResponse>>;
    batchUpdate(
      params: Params$Resource$Projects$Apps$Issues$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Apps$Issues$Batchupdate,
      options:
        MethodOptions | BodyResponseCallback<Schema$BatchUpdateIssuesResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateIssuesResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Apps$Issues$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateIssuesResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateIssuesResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Issues$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateIssuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Issues$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Issues$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/issues:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$BatchUpdateIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateIssuesResponse>(parameters);
      }
    }

    /**
     * Retrieve an issue.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.issues.get({
     *     // Required. The name of the issue to retrieve. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     *     name: 'projects/my-project/apps/my-app/issues/my-issue',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errorType": "my_errorType",
     *   //   "firstSeenTime": "my_firstSeenTime",
     *   //   "firstSeenVersion": "my_firstSeenVersion",
     *   //   "id": "my_id",
     *   //   "lastSeenTime": "my_lastSeenTime",
     *   //   "lastSeenVersion": "my_lastSeenVersion",
     *   //   "name": "my_name",
     *   //   "notesCount": "my_notesCount",
     *   //   "sampleEvent": "my_sampleEvent",
     *   //   "signals": [],
     *   //   "state": "my_state",
     *   //   "stateUpdateTime": "my_stateUpdateTime",
     *   //   "subtitle": "my_subtitle",
     *   //   "title": "my_title",
     *   //   "uri": "my_uri",
     *   //   "variants": []
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
      params: Params$Resource$Projects$Apps$Issues$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Issues$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Issue>>;
    get(
      params: Params$Resource$Projects$Apps$Issues$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Issues$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Issue>,
      callback: BodyResponseCallback<Schema$Issue>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Issues$Get,
      callback: BodyResponseCallback<Schema$Issue>
    ): void;
    get(callback: BodyResponseCallback<Schema$Issue>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Issues$Get
        | BodyResponseCallback<Schema$Issue>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Issue>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Issue> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Issue>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Issues$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Issues$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Issue>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Issue>(parameters);
      }
    }

    /**
     * Change the state of an issue.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.issues.patch({
     *     // Required. Output only. Immutable. Identifier. The name of the issue resource. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     *     name: 'projects/my-project/apps/my-app/issues/my-issue',
     *     // Optional. The list of Issue fields to update. Currently only "state" is mutable.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "errorType": "my_errorType",
     *       //   "firstSeenTime": "my_firstSeenTime",
     *       //   "firstSeenVersion": "my_firstSeenVersion",
     *       //   "id": "my_id",
     *       //   "lastSeenTime": "my_lastSeenTime",
     *       //   "lastSeenVersion": "my_lastSeenVersion",
     *       //   "name": "my_name",
     *       //   "notesCount": "my_notesCount",
     *       //   "sampleEvent": "my_sampleEvent",
     *       //   "signals": [],
     *       //   "state": "my_state",
     *       //   "stateUpdateTime": "my_stateUpdateTime",
     *       //   "subtitle": "my_subtitle",
     *       //   "title": "my_title",
     *       //   "uri": "my_uri",
     *       //   "variants": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errorType": "my_errorType",
     *   //   "firstSeenTime": "my_firstSeenTime",
     *   //   "firstSeenVersion": "my_firstSeenVersion",
     *   //   "id": "my_id",
     *   //   "lastSeenTime": "my_lastSeenTime",
     *   //   "lastSeenVersion": "my_lastSeenVersion",
     *   //   "name": "my_name",
     *   //   "notesCount": "my_notesCount",
     *   //   "sampleEvent": "my_sampleEvent",
     *   //   "signals": [],
     *   //   "state": "my_state",
     *   //   "stateUpdateTime": "my_stateUpdateTime",
     *   //   "subtitle": "my_subtitle",
     *   //   "title": "my_title",
     *   //   "uri": "my_uri",
     *   //   "variants": []
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
      params: Params$Resource$Projects$Apps$Issues$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Issues$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Issue>>;
    patch(
      params: Params$Resource$Projects$Apps$Issues$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Issues$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Issue>,
      callback: BodyResponseCallback<Schema$Issue>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Issues$Patch,
      callback: BodyResponseCallback<Schema$Issue>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Issue>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Issues$Patch
        | BodyResponseCallback<Schema$Issue>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Issue>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Issue> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Issue>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Issues$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Issues$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Issue>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Issue>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Issues$Batchupdate extends StandardParameters {
    /**
     * Required. The parent resource shared by all issues being updated. Format: projects/{project\}/apps/{app\}. If this is set, the parent field in the UpdateIssueRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateIssuesRequest;
  }
  export interface Params$Resource$Projects$Apps$Issues$Get extends StandardParameters {
    /**
     * Required. The name of the issue to retrieve. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Issues$Patch extends StandardParameters {
    /**
     * Required. Output only. Immutable. Identifier. The name of the issue resource. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     */
    name?: string;
    /**
     * Optional. The list of Issue fields to update. Currently only "state" is mutable.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Issue;
  }

  export class Resource$Projects$Apps$Issues$Notes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new note for an issue.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.issues.notes.create({
     *     // Required. The parent resource where this note will be created. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     *     parent: 'projects/my-project/apps/my-app/issues/my-issue',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "author": "my_author",
     *       //   "body": "my_body",
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": "my_author",
     *   //   "body": "my_body",
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name"
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
      params: Params$Resource$Projects$Apps$Issues$Notes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Apps$Issues$Notes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    create(
      params: Params$Resource$Projects$Apps$Issues$Notes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Apps$Issues$Notes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(
      params: Params$Resource$Projects$Apps$Issues$Notes$Create,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(callback: BodyResponseCallback<Schema$Note>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Issues$Notes$Create
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Note> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Issues$Notes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Issues$Notes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/notes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Delete a note by its name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.issues.notes.delete({
     *     // Required. The name of the note to delete. Format: projects/{project\}/apps/{app\}/issues/{issue\}/notes/{note\}.
     *     name: 'projects/my-project/apps/my-app/issues/my-issue/notes/my-note',
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
      params: Params$Resource$Projects$Apps$Issues$Notes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Apps$Issues$Notes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Apps$Issues$Notes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Apps$Issues$Notes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Apps$Issues$Notes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Issues$Notes$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Issues$Notes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Issues$Notes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * List all notes for a certain issue, sorted in descending order by timestamp.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.issues.notes.list({
     *     // Optional. The maximum number of notes per page. If omitted, defaults to 10.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous calls.
     *     pageToken: 'placeholder-value',
     *     // Required. The issue the notes belongs to. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     *     parent: 'projects/my-project/apps/my-app/issues/my-issue',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "notes": []
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
      params: Params$Resource$Projects$Apps$Issues$Notes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Apps$Issues$Notes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListNotesResponse>>;
    list(
      params: Params$Resource$Projects$Apps$Issues$Notes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Issues$Notes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNotesResponse>,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Issues$Notes$List,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Issues$Notes$List
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListNotesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Issues$Notes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Issues$Notes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/notes').replace(
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
        createAPIRequest<Schema$ListNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNotesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Issues$Notes$Create extends StandardParameters {
    /**
     * Required. The parent resource where this note will be created. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Apps$Issues$Notes$Delete extends StandardParameters {
    /**
     * Required. The name of the note to delete. Format: projects/{project\}/apps/{app\}/issues/{issue\}/notes/{note\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Issues$Notes$List extends StandardParameters {
    /**
     * Optional. The maximum number of notes per page. If omitted, defaults to 10.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous calls.
     */
    pageToken?: string;
    /**
     * Required. The issue the notes belongs to. Format: "projects/{project\}/apps/{app\}/issues/{issue\}".
     */
    parent?: string;
  }

  export class Resource$Projects$Apps$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a report with its computed results.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.reports.get({
     *     // Optional. Only count events from the given browser. This string matches Browser.display_name. Format: "name (display_version)" e.g. "Chrome (123)", or just "name" for all possible versions, e.g. simply "Chrome".
     *     'filter.browser.displayNames': 'placeholder-value',
     *     // Only counts events from the given Device model. This string matches Device.display_name. Format: "manufacturer (model)" e.g. "Google (Pixel 6)", or just "manufacturer" for all possible models, e.g. simply "Google". Note that a device's marketing_name field can not be used for filtering.
     *     'filter.device.displayNames': 'placeholder-value',
     *     // Only counts events from devices with the given form factor (e.g. phone or tablet).
     *     'filter.device.formFactors': 'placeholder-value',
     *     // Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     *     'filter.interval.endTime': 'placeholder-value',
     *     // Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     *     'filter.interval.startTime': 'placeholder-value',
     *     // Optional. A space separated list of filter terms matched against the contents of the issue. Contents include the title and the stack trace. Matches must begin at alphanumeric tokens, i.e., 'util.Sorted' matches 'java.util.SortedSet' but not 'myutil.SortedArray'. The filter matches if all filter terms match. All non-alphanumeric characters are ignored for matching. Filtering is assumed to be prefix-search and order-independent unless phrases are surrounded by "". Any terms contained in quotes are searched using exact-match (given filter term "foo", we will not return "foobar"), and must appear in the order given exactly. To get order-dependence but prefix-search, use a * within the quotes ("abc foo*" will match "abc foobar", but not "foo abc" "abcd foobar", or "abc xyz foobar").
     *     'filter.issue.content': 'placeholder-value',
     *     // Optional. Only counts events of the given error types. This field matches [Issue.error_type].
     *     'filter.issue.errorTypes': 'placeholder-value',
     *     // Optional. Only counts events in the given issue ID. This field matches [Issue.id].
     *     'filter.issue.id': 'placeholder-value',
     *     // Optional. Only returns issues currently marked with the given signals. This field matches [Issue.signals.signal].
     *     'filter.issue.signals': 'placeholder-value',
     *     // Optional. Deprecated: Prefer `states` field. Only includes events for issues with the given issue state. Only available for `topIssues` reports.
     *     'filter.issue.state': 'placeholder-value',
     *     // Optional. Only includes events for issues with the given issue states. Only available for `topIssues` reports.
     *     'filter.issue.states': 'placeholder-value',
     *     // Optional. Only counts events for the given issue variant ID. This field matches [IssueVariant.id].
     *     'filter.issue.variantId': 'placeholder-value',
     *     // Only counts events in the given operating system and version. This string matches OperatingSystem.display_name. Format: "osName (osVersion)" e.g. "Android (11)". or just "osName" for all versions, e.g. simply "iPadOS".
     *     'filter.operatingSystem.displayNames': 'placeholder-value',
     *     // Only counts events in the given app version. This string matches Version.display_name. Format: "display_version (build_version)" e.g. "1.2.3 (456)".
     *     'filter.version.displayNames': 'placeholder-value',
     *     // Optional. The report response will contain one data point per time grain. If omitted, the report will contain a single data point for the complete interval.
     *     granularity: 'placeholder-value',
     *     // Required. The report name. Format: "projects/{project\}/apps/{app_id\}/reports/{report\}".
     *     name: 'projects/my-project/apps/my-app/reports/my-report',
     *     // Optional. The maximum number of result groups to return. If omitted, defaults to 25.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous call. The page token is only valid for the exact same set of filters, which must also be sent in subsequent requests. This token is valid for 10 minutes after the first request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "groups": [],
     *   //   "name": "my_name",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0,
     *   //   "usage": "my_usage"
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
      params: Params$Resource$Projects$Apps$Reports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Reports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    get(
      params: Params$Resource$Projects$Apps$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Reports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Reports$Get,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(callback: BodyResponseCallback<Schema$Report>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Reports$Get
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Report> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Report>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Report>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * List all of the available reports.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.reports.list({
     *     // Required. The firebase application. Format: "projects/{project\}/apps/{app_id\}".
     *     parent: 'projects/my-project/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "reports": []
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
      params: Params$Resource$Projects$Apps$Reports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Apps$Reports$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>;
    list(
      params: Params$Resource$Projects$Apps$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Reports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListReportsResponse>,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Reports$List,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Reports$List
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/reports').replace(
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
        createAPIRequest<Schema$ListReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Reports$Get extends StandardParameters {
    /**
     * Optional. Only count events from the given browser. This string matches Browser.display_name. Format: "name (display_version)" e.g. "Chrome (123)", or just "name" for all possible versions, e.g. simply "Chrome".
     */
    'filter.browser.displayNames'?: string[];
    /**
     * Only counts events from the given Device model. This string matches Device.display_name. Format: "manufacturer (model)" e.g. "Google (Pixel 6)", or just "manufacturer" for all possible models, e.g. simply "Google". Note that a device's marketing_name field can not be used for filtering.
     */
    'filter.device.displayNames'?: string[];
    /**
     * Only counts events from devices with the given form factor (e.g. phone or tablet).
     */
    'filter.device.formFactors'?: string[];
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    'filter.interval.endTime'?: string;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    'filter.interval.startTime'?: string;
    /**
     * Optional. A space separated list of filter terms matched against the contents of the issue. Contents include the title and the stack trace. Matches must begin at alphanumeric tokens, i.e., 'util.Sorted' matches 'java.util.SortedSet' but not 'myutil.SortedArray'. The filter matches if all filter terms match. All non-alphanumeric characters are ignored for matching. Filtering is assumed to be prefix-search and order-independent unless phrases are surrounded by "". Any terms contained in quotes are searched using exact-match (given filter term "foo", we will not return "foobar"), and must appear in the order given exactly. To get order-dependence but prefix-search, use a * within the quotes ("abc foo*" will match "abc foobar", but not "foo abc" "abcd foobar", or "abc xyz foobar").
     */
    'filter.issue.content'?: string;
    /**
     * Optional. Only counts events of the given error types. This field matches [Issue.error_type].
     */
    'filter.issue.errorTypes'?: string[];
    /**
     * Optional. Only counts events in the given issue ID. This field matches [Issue.id].
     */
    'filter.issue.id'?: string;
    /**
     * Optional. Only returns issues currently marked with the given signals. This field matches [Issue.signals.signal].
     */
    'filter.issue.signals'?: string[];
    /**
     * Optional. Deprecated: Prefer `states` field. Only includes events for issues with the given issue state. Only available for `topIssues` reports.
     */
    'filter.issue.state'?: string;
    /**
     * Optional. Only includes events for issues with the given issue states. Only available for `topIssues` reports.
     */
    'filter.issue.states'?: string[];
    /**
     * Optional. Only counts events for the given issue variant ID. This field matches [IssueVariant.id].
     */
    'filter.issue.variantId'?: string;
    /**
     * Only counts events in the given operating system and version. This string matches OperatingSystem.display_name. Format: "osName (osVersion)" e.g. "Android (11)". or just "osName" for all versions, e.g. simply "iPadOS".
     */
    'filter.operatingSystem.displayNames'?: string[];
    /**
     * Only counts events in the given app version. This string matches Version.display_name. Format: "display_version (build_version)" e.g. "1.2.3 (456)".
     */
    'filter.version.displayNames'?: string[];
    /**
     * Optional. The report response will contain one data point per time grain. If omitted, the report will contain a single data point for the complete interval.
     */
    granularity?: string;
    /**
     * Required. The report name. Format: "projects/{project\}/apps/{app_id\}/reports/{report\}".
     */
    name?: string;
    /**
     * Optional. The maximum number of result groups to return. If omitted, defaults to 25.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous call. The page token is only valid for the exact same set of filters, which must also be sent in subsequent requests. This token is valid for 10 minutes after the first request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Apps$Reports$List extends StandardParameters {
    /**
     * Required. The firebase application. Format: "projects/{project\}/apps/{app_id\}".
     */
    parent?: string;
  }

  export class Resource$Projects$Apps$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Enqueues a request to permanently remove crash reports associated with the specified user. All reports belonging to the specified user will be deleted typically within 24 hours of receiving the crash report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasecrashlytics.googleapis.com
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
     * const firebasecrashlytics = google.firebasecrashlytics('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasecrashlytics.projects.apps.users.deleteCrashReports({
     *     // Required. Resource name for user reports, in the format: projects/ PROJECT_IDENTIFIER/apps/APP_ID/users/USER_ID/crashReports - PROJECT_IDENTIFIER: The Firebase project's project number (recommended) or its project ID. Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). - APP_ID: The globally unique, Firebase-assigned identifier for the Firebase App. This is not your package name or bundle ID. Learn how to [find your app ID](https://firebase.google.com/support/faq/#find-app-id). - USER_ID: The user ID set using the Crashlytics SDK. Learn how to [set user identifiers](https://firebase.google.com/docs/crashlytics/customize-crash-reports#set-user-ids).
     *     name: 'projects/my-project/apps/my-app/users/my-user/crashReports',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "targetCompleteTime": "my_targetCompleteTime"
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
    deleteCrashReports(
      params: Params$Resource$Projects$Apps$Users$Deletecrashreports,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deleteCrashReports(
      params?: Params$Resource$Projects$Apps$Users$Deletecrashreports,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DeleteUserCrashReportsResponse>>;
    deleteCrashReports(
      params: Params$Resource$Projects$Apps$Users$Deletecrashreports,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteCrashReports(
      params: Params$Resource$Projects$Apps$Users$Deletecrashreports,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeleteUserCrashReportsResponse>,
      callback: BodyResponseCallback<Schema$DeleteUserCrashReportsResponse>
    ): void;
    deleteCrashReports(
      params: Params$Resource$Projects$Apps$Users$Deletecrashreports,
      callback: BodyResponseCallback<Schema$DeleteUserCrashReportsResponse>
    ): void;
    deleteCrashReports(
      callback: BodyResponseCallback<Schema$DeleteUserCrashReportsResponse>
    ): void;
    deleteCrashReports(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Users$Deletecrashreports
        | BodyResponseCallback<Schema$DeleteUserCrashReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeleteUserCrashReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeleteUserCrashReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DeleteUserCrashReportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Users$Deletecrashreports;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Users$Deletecrashreports;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasecrashlytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
        createAPIRequest<Schema$DeleteUserCrashReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeleteUserCrashReportsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Users$Deletecrashreports extends StandardParameters {
    /**
     * Required. Resource name for user reports, in the format: projects/ PROJECT_IDENTIFIER/apps/APP_ID/users/USER_ID/crashReports - PROJECT_IDENTIFIER: The Firebase project's project number (recommended) or its project ID. Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). - APP_ID: The globally unique, Firebase-assigned identifier for the Firebase App. This is not your package name or bundle ID. Learn how to [find your app ID](https://firebase.google.com/support/faq/#find-app-id). - USER_ID: The user ID set using the Crashlytics SDK. Learn how to [set user identifiers](https://firebase.google.com/docs/crashlytics/customize-crash-reports#set-user-ids).
     */
    name?: string;
  }
}
