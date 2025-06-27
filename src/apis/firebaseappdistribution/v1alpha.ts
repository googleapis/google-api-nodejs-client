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

export namespace firebaseappdistribution_v1alpha {
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
   * Firebase App Distribution API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
   * ```
   */
  export class Firebaseappdistribution {
    context: APIRequestContext;
    apps: Resource$Apps;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.apps = new Resource$Apps(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Point for describing bounding boxes tap locations Top left is 0,0
   */
  export interface Schema$AndroidxCrawlerOutputPoint {
    xCoordinate?: number | null;
    yCoordinate?: number | null;
  }
  /**
   * Rectangle for describing bounding boxes
   */
  export interface Schema$AndroidxCrawlerOutputRectangle {
    bottom?: number | null;
    left?: number | null;
    right?: number | null;
    top?: number | null;
  }
  /**
   * App bundle test certificate
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaAabCertificate {
    /**
     * MD5 hash of the certificate used to resign the AAB
     */
    certificateHashMd5?: string | null;
    /**
     * SHA1 hash of the certificate used to resign the AAB
     */
    certificateHashSha1?: string | null;
    /**
     * SHA256 hash of the certificate used to resign the AAB
     */
    certificateHashSha256?: string | null;
  }
  export interface Schema$GoogleFirebaseAppdistroV1alphaAiInstructions {
    /**
     * Required. Steps to be accomplished by the AI
     */
    steps?: Schema$GoogleFirebaseAppdistroV1alphaAiStep[];
  }
  /**
   * A step to be accomplished by the AI
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaAiStep {
    /**
     * An assertion to be checked by the AI
     */
    assertion?: string | null;
    /**
     * A goal to be accomplished by the AI
     */
    goal?: string | null;
    /**
     * Optional. Hint text containing suggestions to help the agent accomplish the goal
     */
    hint?: string | null;
    /**
     * Optional. A description of criteria the agent should use to determine if the goal has been successfully completed
     */
    successCriteria?: string | null;
  }
  /**
   * Captures the results of an AiStep
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaAiStepResult {
    /**
     * Output only. Details for an assertion step.
     */
    assertionDetails?: Schema$GoogleFirebaseAppdistroV1alphaAssertionDetails;
    /**
     * Output only. Details for a goal step.
     */
    goalDetails?: Schema$GoogleFirebaseAppdistroV1alphaGoalDetails;
    /**
     * Output only. The current state of the step
     */
    state?: string | null;
    /**
     * Required. The step performed by the AI
     */
    step?: Schema$GoogleFirebaseAppdistroV1alphaAiStep;
  }
  /**
   * An app.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaApp {
    /**
     * App bundle test certificate generated for the app.
     */
    aabCertificate?: Schema$GoogleFirebaseAppdistroV1alphaAabCertificate;
    /**
     * App bundle state. Only valid for android apps. The app_view field in the request must be set to FULL in order for this to be populated.
     */
    aabState?: string | null;
    /**
     * Firebase gmp app id
     */
    appId?: string | null;
    /**
     * Bundle identifier
     */
    bundleId?: string | null;
    /**
     * Developer contact email for testers to reach out to about privacy or support issues.
     */
    contactEmail?: string | null;
    /**
     * iOS or Android
     */
    platform?: string | null;
    /**
     * Project number of the Firebase project, for example 300830567303.
     */
    projectNumber?: string | null;
  }
  /**
   * An app crash that occurred during an automated test.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaAppCrash {
    /**
     * Output only. The message associated with the crash.
     */
    message?: string | null;
    /**
     * Output only. The raw stack trace.
     */
    stackTrace?: string | null;
  }
  /**
   * Details for an assertion step.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaAssertionDetails {
    /**
     * Output only. An explanation justifying the assertion result.
     */
    explanation?: string | null;
    /**
     * Output only. The result of the assertion.
     */
    result?: boolean | null;
    /**
     * Output only. The screenshot used in the context of this assertion.
     */
    screenshot?: Schema$GoogleFirebaseAppdistroV1alphaScreenshot;
  }
  /**
   * The request message for `DeleteTestCase`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaBatchDeleteTestCasesRequest {
    /**
     * Required. The name of the test cases to delete. A maximum number of 1000 test cases can be deleted in one batch Format: `projects/{project_number\}/apps/{app_id\}/testCases/{test_case_id\}`
     */
    names?: string[] | null;
  }
  /**
   * The (empty) response message for `CancelReleaseTest`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse {}
  /**
   * The request message for `CreateReleaseNotes`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest {
    /**
     * The actual release notes body from the user
     */
    releaseNotes?: Schema$GoogleFirebaseAppdistroV1alphaReleaseNotes;
  }
  /**
   * The response message for `CreateReleaseNotes`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse {}
  /**
   * A high level action taken by the AI on the device, potentially involving multiple taps, text entries, waits, etc.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaDeviceAction {
    /**
     * Output only. A short description of the high level action taken by the AI agent.
     */
    description?: string | null;
    /**
     * Output only. The interactions made with the device as part of this higher level action taken by the agent, such as taps, text entries, waits, etc.
     */
    deviceInteractions?: Schema$GoogleFirebaseAppdistroV1alphaDeviceInteraction[];
  }
  /**
   * The results of running an automated test on a particular device.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaDeviceExecution {
    /**
     * Output only. Results of the AI steps if passed in
     */
    aiStepResults?: Schema$GoogleFirebaseAppdistroV1alphaAiStepResult[];
    /**
     * Output only. An app crash, if any occurred during the test.
     */
    appCrash?: Schema$GoogleFirebaseAppdistroV1alphaAppCrash;
    /**
     * Output only. A URI to an image of the Robo crawl graph.
     */
    crawlGraphUri?: string | null;
    /**
     * Required. The device that the test was run on.
     */
    device?: Schema$GoogleFirebaseAppdistroV1alphaTestDevice;
    /**
     * Output only. The reason why the test failed.
     */
    failedReason?: string | null;
    /**
     * Output only. The reason why the test was inconclusive.
     */
    inconclusiveReason?: string | null;
    /**
     * Output only. The path to a directory in Cloud Storage that will eventually contain the results for this execution. For example, gs://bucket/Nexus5-18-en-portrait.
     */
    resultsStoragePath?: string | null;
    /**
     * Output only. The statistics collected during the Robo test.
     */
    roboStats?: Schema$GoogleFirebaseAppdistroV1alphaRoboStats;
    /**
     * Output only. A list of screenshot image URIs taken from the Robo crawl. The file names are numbered by the order in which they were taken.
     */
    screenshotUris?: string[] | null;
    /**
     * Output only. The state of the test.
     */
    state?: string | null;
    /**
     * Output only. A URI to a video of the test run.
     */
    videoUri?: string | null;
  }
  /**
   * An interaction with the device, such as a tap, text entry, wait, etc.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaDeviceInteraction {
    /**
     * Output only. A text entry action, that enters text into a particular text field, clearing any existing text in the field. Unlike `text_input` this action does not require any other actions such as a tap to be performed before it can enter the text.
     */
    enterText?: Schema$GoogleFirebaseAppdistroV1alphaDeviceInteractionEnterText;
    /**
     * Output only. Key code for a key event action.
     */
    keyCode?: string | null;
    /**
     * Output only. The screenshot used in the context of this action. The screen may have changed before the action was actually taken.
     */
    screenshot?: Schema$GoogleFirebaseAppdistroV1alphaScreenshot;
    /**
     * Output only. A swipe action.
     */
    swipe?: Schema$GoogleFirebaseAppdistroV1alphaDeviceInteractionSwipe;
    /**
     * Output only. A tap action.
     */
    tap?: Schema$AndroidxCrawlerOutputPoint;
    /**
     * Output only. A text input action, that types some text into whatever field is currently focused, if any. Unlike `enter_text` this action requires that the field be brought into focus first, for example by emitting a tap action before this one.
     */
    textInput?: string | null;
    /**
     * Output only. A wait action.
     */
    wait?: Schema$GoogleFirebaseAppdistroV1alphaDeviceInteractionWait;
  }
  /**
   * A text entry action, that enters text into a particular text field, clearing any existing text in the field.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaDeviceInteractionEnterText {
    /**
     * Output only. The visible bounds of the element to enter text into.
     */
    elementBounds?: Schema$AndroidxCrawlerOutputRectangle;
    /**
     * Output only. The text to enter.
     */
    text?: string | null;
  }
  /**
   * A swipe action.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaDeviceInteractionSwipe {
    /**
     * Output only. The end point of the swipe.
     */
    end?: Schema$AndroidxCrawlerOutputPoint;
    /**
     * Output only. The start point of the swipe.
     */
    start?: Schema$AndroidxCrawlerOutputPoint;
  }
  /**
   * A wait action.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaDeviceInteractionWait {
    /**
     * Output only. The duration of the wait.
     */
    duration?: string | null;
  }
  /**
   * The request message for `EnableAccessOnRelease`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest {
    /**
     * Optional. Ignored. Used to be build version of the app release if an instance identifier was provided for the release_id.
     */
    buildVersion?: string | null;
    /**
     * Optional. Ignored. Used to be display version of the app release if an instance identifier was provided for the release_id.
     */
    displayVersion?: string | null;
    /**
     * Optional. An email address which should get access to this release, for example rebeccahe@google.com
     */
    emails?: string[] | null;
    /**
     * Optional. A repeated list of group aliases to enable access to a release for Note: This field is misnamed, but can't be changed because we need to maintain compatibility with old build tools
     */
    groupIds?: string[] | null;
  }
  /**
   * The response message for `EnableAccessOnRelease`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse {}
  /**
   * Response object to get the release given a upload hash
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse {
    /**
     * Release object
     */
    release?: Schema$GoogleFirebaseAppdistroV1alphaRelease;
  }
  /**
   * Response containing the UDIDs of tester iOS devices in a project
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse {
    /**
     * The UDIDs of tester iOS devices in a project
     */
    testerUdids?: Schema$GoogleFirebaseAppdistroV1alphaTesterUdid[];
  }
  /**
   * The response message for `GetUploadStatus`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse {
    /**
     * The error code associated with (only set on "FAILURE")
     */
    errorCode?: string | null;
    /**
     * Any additional context for the given upload status (e.g. error message) Meant to be displayed to the client
     */
    message?: string | null;
    /**
     * The release that was created from the upload (only set on "SUCCESS")
     */
    release?: Schema$GoogleFirebaseAppdistroV1alphaRelease;
    /**
     * The status of the upload
     */
    status?: string | null;
  }
  /**
   * An action taken by the AI agent while attempting to accomplish a goal.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaGoalAction {
    /**
     * Output only. Debug information explaining why the agent to the specific action
     */
    debugInfo?: Schema$GoogleFirebaseAppdistroV1alphaGoalActionDebugInfo;
    /**
     * Output only. A high level action taken by the AI on the device.
     */
    deviceAction?: Schema$GoogleFirebaseAppdistroV1alphaDeviceAction;
    /**
     * Output only. An explanation justifying why the action was taken.
     */
    explanation?: string | null;
    /**
     * Output only. An action taken by the AI to end the goal.
     */
    terminalAction?: Schema$GoogleFirebaseAppdistroV1alphaTerminalAction;
  }
  /**
   * Information to help the customer understand why the agent took this action
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaGoalActionDebugInfo {
    /**
     * Output only. URI of the screenshot with elements labeled which was used by the agent
     */
    annotatedScreenshotUri?: string | null;
    /**
     * Output only. Structured data explaining the agent's choice
     */
    jsonUri?: string | null;
  }
  /**
   * Details for a goal step.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaGoalDetails {
    /**
     * Output only. The actions taken by the AI while attempting to accomplish the goal.
     */
    goalActions?: Schema$GoogleFirebaseAppdistroV1alphaGoalAction[];
  }
  /**
   * A JWT token.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaJwt {
    /**
     * The JWT token (three Base64URL-encoded strings joined by dots).
     */
    token?: string | null;
  }
  /**
   * The response message for `ListReleaseTests`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse {
    /**
     * A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The tests listed.
     */
    releaseTests?: Schema$GoogleFirebaseAppdistroV1alphaReleaseTest[];
  }
  /**
   * The response message for `ListTestCases`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The test cases from the specified app.
     */
    testCases?: Schema$GoogleFirebaseAppdistroV1alphaTestCase[];
  }
  /**
   * Login credential for automated tests
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaLoginCredential {
    /**
     * Optional. Hints to the crawler for identifying input fields
     */
    fieldHints?: Schema$GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints;
    /**
     * Optional. Are these credentials for Google?
     */
    google?: boolean | null;
    /**
     * Optional. Password for automated tests
     */
    password?: string | null;
    /**
     * Optional. Username for automated tests
     */
    username?: string | null;
  }
  /**
   * Hints to the crawler for identifying input fields
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints {
    /**
     * Required. The Android resource name of the password UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html
     */
    passwordResourceName?: string | null;
    /**
     * Required. The Android resource name of the username UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html
     */
    usernameResourceName?: string | null;
  }
  /**
   * Proto defining a release object
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaRelease {
    /**
     * Release build version
     */
    buildVersion?: string | null;
    /**
     * Release version
     */
    displayVersion?: string | null;
    /**
     * Timestamp when the release was created
     */
    distributedAt?: string | null;
    /**
     * Release Id
     */
    id?: string | null;
    /**
     * Instance id of the release
     */
    instanceId?: string | null;
    /**
     * Last activity timestamp
     */
    lastActivityAt?: string | null;
    /**
     * Number of testers who have open invitations for the release
     */
    openInvitationCount?: number | null;
    /**
     * unused.
     */
    receivedAt?: string | null;
    /**
     * Release notes summary
     */
    releaseNotesSummary?: string | null;
    /**
     * Count of testers added to the release
     */
    testerCount?: number | null;
    /**
     * Number of testers who have installed the release
     */
    testerWithInstallCount?: number | null;
  }
  /**
   * Release notes for a release.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaReleaseNotes {
    /**
     * The actual release notes text from the user.
     */
    releaseNotes?: string | null;
  }
  /**
   * The results of running an automated test on a release.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaReleaseTest {
    /**
     * Optional. Instructions for AI driven test.
     */
    aiInstructions?: Schema$GoogleFirebaseAppdistroV1alphaAiInstructions;
    /**
     * Output only. Timestamp when the test was run.
     */
    createTime?: string | null;
    /**
     * Required. The results of the test on each device.
     */
    deviceExecutions?: Schema$GoogleFirebaseAppdistroV1alphaDeviceExecution[];
    /**
     * Optional. Display name of the release test. Required if the release test is created with multiple goals.
     */
    displayName?: string | null;
    /**
     * Optional. Input only. Login credentials for the test. Input only.
     */
    loginCredential?: Schema$GoogleFirebaseAppdistroV1alphaLoginCredential;
    /**
     * The name of the release test resource. Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}/tests/{test_id\}`
     */
    name?: string | null;
    /**
     * Optional. The test case that was used to generate this release test. Note: The test case may have changed or been deleted since the release test was created. Format: `projects/{project_number\}/apps/{app\}/testCases/{test_case\}`
     */
    testCase?: string | null;
    /**
     * Output only. The state of the release test.
     */
    testState?: string | null;
  }
  /**
   * Configuration for Robo crawler
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaRoboCrawler {
    /**
     * Optional. Instructions for AI driven test
     */
    aiInstructions?: Schema$GoogleFirebaseAppdistroV1alphaAiInstructions;
    /**
     * Optional. Login credential for automated tests
     */
    loginCredential?: Schema$GoogleFirebaseAppdistroV1alphaLoginCredential;
  }
  /**
   * Statistics collected during a Robo test.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaRoboStats {
    /**
     * Output only. Number of actions that crawler performed.
     */
    actionsPerformed?: number | null;
    /**
     * Output only. Duration of crawl.
     */
    crawlDuration?: string | null;
    /**
     * Output only. Number of distinct screens visited.
     */
    distinctVisitedScreens?: number | null;
    /**
     * Output only. Whether the main activity crawl timed out.
     */
    mainActivityCrawlTimedOut?: boolean | null;
  }
  /**
   * A device screenshot taken during a test.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaScreenshot {
    /**
     * Output only. The height of the screenshot, in pixels.
     */
    height?: number | null;
    /**
     * Output only. The URI of the screenshot.
     */
    uri?: string | null;
    /**
     * Output only. The width of the screenshot, in pixels.
     */
    width?: number | null;
  }
  /**
   * An action taken by the AI to end the goal.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaTerminalAction {
    /**
     * Output only. The reason why this goal was ended.
     */
    reason?: string | null;
    /**
     * Output only. The screenshot used in the context of this terminal action.
     */
    screenshot?: Schema$GoogleFirebaseAppdistroV1alphaScreenshot;
  }
  /**
   * AI test cases
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaTestCase {
    /**
     * Optional. Instructions for AI driven test.
     */
    aiInstructions?: Schema$GoogleFirebaseAppdistroV1alphaAiInstructions;
    /**
     * Output only. Timestamp when the test case was created
     */
    createTime?: string | null;
    /**
     * Required. Display name of the test case.
     */
    displayName?: string | null;
    /**
     * Identifier. The name of the test case resource. Format: `projects/{project_number\}/apps/{app_id\}/testCases/{test_case_id\}`
     */
    name?: string | null;
  }
  /**
   * Configuration for automated tests
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaTestConfig {
    /**
     * Optional. Display name of the AI driven test. Required if the release test is created with multiple goals.
     */
    displayName?: string | null;
    /**
     * Identifier. The name of the test configuration resource. Format: `projects/{project_number\}/apps/{app_id\}/testConfig`
     */
    name?: string | null;
    /**
     * Optional. Configuration for Robo crawler
     */
    roboCrawler?: Schema$GoogleFirebaseAppdistroV1alphaRoboCrawler;
    /**
     * Optional. Tests will be run on this list of devices
     */
    testDevices?: Schema$GoogleFirebaseAppdistroV1alphaTestDevice[];
  }
  /**
   * A device on which automated tests can be run.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaTestDevice {
    /**
     * Optional. The locale of the device (e.g. "en_US" for US English) during the test.
     */
    locale?: string | null;
    /**
     * Required. The device model.
     */
    model?: string | null;
    /**
     * Optional. The orientation of the device during the test.
     */
    orientation?: string | null;
    /**
     * Required. The version of the device (API level on Android).
     */
    version?: string | null;
  }
  /**
   * The UDIDs of a tester's iOS device
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaTesterUdid {
    /**
     * The name of the tester's device
     */
    name?: string | null;
    /**
     * The platform of the tester's device
     */
    platform?: string | null;
    /**
     * The UDID of the tester's device
     */
    udid?: string | null;
  }
  /**
   * Customer quota information for `ReleaseTests`. Note: This quota only applies to tests with `AiInstructions` and is separate from the quota which might apply to the device time used by any tests.
   */
  export interface Schema$GoogleFirebaseAppdistroV1alphaTestQuota {
    /**
     * Output only. Maximum number of `ReleaseTests` allotted for the current month.
     */
    limit?: string | null;
    /**
     * Identifier. The name of the `TestQuota` resource. Format: `projects/{project_number\}/testQuota`
     */
    name?: string | null;
    /**
     * Output only. Number of `ReleaseTests` run in the current month
     */
    usage?: string | null;
  }
  /**
   * A release of a Firebase app.
   */
  export interface Schema$GoogleFirebaseAppdistroV1Release {
    /**
     * Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file.
     */
    binaryDownloadUri?: string | null;
    /**
     * Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`.
     */
    buildVersion?: string | null;
    /**
     * Output only. The time the release was created.
     */
    createTime?: string | null;
    /**
     * Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`.
     */
    displayVersion?: string | null;
    /**
     * Output only. A link to the Firebase console displaying a single release.
     */
    firebaseConsoleUri?: string | null;
    /**
     * The name of the release resource. Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}`
     */
    name?: string | null;
    /**
     * Notes of the release.
     */
    releaseNotes?: Schema$GoogleFirebaseAppdistroV1ReleaseNotes;
    /**
     * Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices.
     */
    testingUri?: string | null;
  }
  /**
   * Notes that belong to a release.
   */
  export interface Schema$GoogleFirebaseAppdistroV1ReleaseNotes {
    /**
     * The text of the release notes.
     */
    text?: string | null;
  }
  /**
   * Operation metadata for `UploadRelease`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1UploadReleaseMetadata {}
  /**
   * Response message for `UploadRelease`.
   */
  export interface Schema$GoogleFirebaseAppdistroV1UploadReleaseResponse {
    /**
     * Release associated with the uploaded binary.
     */
    release?: Schema$GoogleFirebaseAppdistroV1Release;
    /**
     * Result of upload release.
     */
    result?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}

  export class Resource$Apps {
    context: APIRequestContext;
    releases: Resource$Apps$Releases;
    release_by_hash: Resource$Apps$Release_by_hash;
    testers: Resource$Apps$Testers;
    upload_status: Resource$Apps$Upload_status;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.releases = new Resource$Apps$Releases(this.context);
      this.release_by_hash = new Resource$Apps$Release_by_hash(this.context);
      this.testers = new Resource$Apps$Testers(this.context);
      this.upload_status = new Resource$Apps$Upload_status(this.context);
    }

    /**
     * Get the app, if it exists
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.apps.get({
     *     // App view. When unset or set to BASIC, returns an App with everything set except for aab_state. When set to FULL, returns an App with aab_state set.
     *     appView: 'placeholder-value',
     *     // Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     *     mobilesdkAppId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aabCertificate": {},
     *   //   "aabState": "my_aabState",
     *   //   "appId": "my_appId",
     *   //   "bundleId": "my_bundleId",
     *   //   "contactEmail": "my_contactEmail",
     *   //   "platform": "my_platform",
     *   //   "projectNumber": "my_projectNumber"
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
      params: Params$Resource$Apps$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Apps$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaApp>
    >;
    get(
      params: Params$Resource$Apps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Apps$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaApp>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaApp>
    ): void;
    get(
      params: Params$Resource$Apps$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaApp>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaApp>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Apps$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaApp>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaApp>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/apps/{mobilesdkAppId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['mobilesdkAppId'],
        pathParams: ['mobilesdkAppId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaApp>(
          parameters
        );
      }
    }

    /**
     * Get a JWT token
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.apps.getJwt({
     *     // Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     *     mobilesdkAppId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token"
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
    getJwt(
      params: Params$Resource$Apps$Getjwt,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getJwt(
      params?: Params$Resource$Apps$Getjwt,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaJwt>
    >;
    getJwt(
      params: Params$Resource$Apps$Getjwt,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getJwt(
      params: Params$Resource$Apps$Getjwt,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaJwt>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaJwt>
    ): void;
    getJwt(
      params: Params$Resource$Apps$Getjwt,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaJwt>
    ): void;
    getJwt(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaJwt>
    ): void;
    getJwt(
      paramsOrCallback?:
        | Params$Resource$Apps$Getjwt
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaJwt>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaJwt>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaJwt>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaJwt>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Getjwt;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Getjwt;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/apps/{mobilesdkAppId}/jwt').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['mobilesdkAppId'],
        pathParams: ['mobilesdkAppId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaJwt>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaJwt>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Apps$Get extends StandardParameters {
    /**
     * App view. When unset or set to BASIC, returns an App with everything set except for aab_state. When set to FULL, returns an App with aab_state set.
     */
    appView?: string;
    /**
     * Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     */
    mobilesdkAppId?: string;
  }
  export interface Params$Resource$Apps$Getjwt extends StandardParameters {
    /**
     * Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     */
    mobilesdkAppId?: string;
  }

  export class Resource$Apps$Releases {
    context: APIRequestContext;
    notes: Resource$Apps$Releases$Notes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.notes = new Resource$Apps$Releases$Notes(this.context);
    }

    /**
     * Enable access on a release for testers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.apps.releases.enable_access({
     *     // Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     *     mobilesdkAppId: 'placeholder-value',
     *     // Release identifier
     *     releaseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "buildVersion": "my_buildVersion",
     *       //   "displayVersion": "my_displayVersion",
     *       //   "emails": [],
     *       //   "groupIds": []
     *       // }
     *     },
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
    enable_access(
      params: Params$Resource$Apps$Releases$Enable_access,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    enable_access(
      params?: Params$Resource$Apps$Releases$Enable_access,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>
    >;
    enable_access(
      params: Params$Resource$Apps$Releases$Enable_access,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enable_access(
      params: Params$Resource$Apps$Releases$Enable_access,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>
    ): void;
    enable_access(
      params: Params$Resource$Apps$Releases$Enable_access,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>
    ): void;
    enable_access(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>
    ): void;
    enable_access(
      paramsOrCallback?:
        | Params$Resource$Apps$Releases$Enable_access
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Apps$Releases$Enable_access;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Releases$Enable_access;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/enable_access'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['mobilesdkAppId', 'releaseId'],
        pathParams: ['mobilesdkAppId', 'releaseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Apps$Releases$Enable_access
    extends StandardParameters {
    /**
     * Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     */
    mobilesdkAppId?: string;
    /**
     * Release identifier
     */
    releaseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest;
  }

  export class Resource$Apps$Releases$Notes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create release notes on a release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.apps.releases.notes.create({
     *     // Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     *     mobilesdkAppId: 'placeholder-value',
     *     // Release identifier
     *     releaseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "releaseNotes": {}
     *       // }
     *     },
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
    create(
      params: Params$Resource$Apps$Releases$Notes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Apps$Releases$Notes$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>
    >;
    create(
      params: Params$Resource$Apps$Releases$Notes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Apps$Releases$Notes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>
    ): void;
    create(
      params: Params$Resource$Apps$Releases$Notes$Create,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Apps$Releases$Notes$Create
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Apps$Releases$Notes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Releases$Notes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/notes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['mobilesdkAppId', 'releaseId'],
        pathParams: ['mobilesdkAppId', 'releaseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Apps$Releases$Notes$Create
    extends StandardParameters {
    /**
     * Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     */
    mobilesdkAppId?: string;
    /**
     * Release identifier
     */
    releaseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest;
  }

  export class Resource$Apps$Release_by_hash {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * GET Release by binary upload hash
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.apps.release_by_hash.get({
     *     // Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     *     mobilesdkAppId: 'placeholder-value',
     *     // The hash for the upload
     *     uploadHash: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "release": {}
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
      params: Params$Resource$Apps$Release_by_hash$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Apps$Release_by_hash$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>
    >;
    get(
      params: Params$Resource$Apps$Release_by_hash$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Apps$Release_by_hash$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>
    ): void;
    get(
      params: Params$Resource$Apps$Release_by_hash$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Apps$Release_by_hash$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Apps$Release_by_hash$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Release_by_hash$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/apps/{mobilesdkAppId}/release_by_hash/{uploadHash}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['mobilesdkAppId', 'uploadHash'],
        pathParams: ['mobilesdkAppId', 'uploadHash'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Apps$Release_by_hash$Get
    extends StandardParameters {
    /**
     * Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     */
    mobilesdkAppId?: string;
    /**
     * The hash for the upload
     */
    uploadHash?: string;
  }

  export class Resource$Apps$Testers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get UDIDs of tester iOS devices in a project
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.apps.testers.getTesterUdids({
     *     // Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     *     mobilesdkAppId: 'placeholder-value',
     *     // The name of the project, which is the parent of testers Format: `projects/{project_number\}`
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "testerUdids": []
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
    getTesterUdids(
      params: Params$Resource$Apps$Testers$Gettesterudids,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getTesterUdids(
      params?: Params$Resource$Apps$Testers$Gettesterudids,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
    >;
    getTesterUdids(
      params: Params$Resource$Apps$Testers$Gettesterudids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getTesterUdids(
      params: Params$Resource$Apps$Testers$Gettesterudids,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
    ): void;
    getTesterUdids(
      params: Params$Resource$Apps$Testers$Gettesterudids,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
    ): void;
    getTesterUdids(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
    ): void;
    getTesterUdids(
      paramsOrCallback?:
        | Params$Resource$Apps$Testers$Gettesterudids
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Apps$Testers$Gettesterudids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Testers$Gettesterudids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/apps/{mobilesdkAppId}/testers:getTesterUdids'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['mobilesdkAppId'],
        pathParams: ['mobilesdkAppId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Apps$Testers$Gettesterudids
    extends StandardParameters {
    /**
     * Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     */
    mobilesdkAppId?: string;
    /**
     * The name of the project, which is the parent of testers Format: `projects/{project_number\}`
     */
    project?: string;
  }

  export class Resource$Apps$Upload_status {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * GET Binary upload status by token
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.apps.upload_status.get({
     *     // Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     *     mobilesdkAppId: 'placeholder-value',
     *     // The token for the upload
     *     uploadToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errorCode": "my_errorCode",
     *   //   "message": "my_message",
     *   //   "release": {},
     *   //   "status": "my_status"
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
      params: Params$Resource$Apps$Upload_status$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Apps$Upload_status$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>
    >;
    get(
      params: Params$Resource$Apps$Upload_status$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Apps$Upload_status$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>
    ): void;
    get(
      params: Params$Resource$Apps$Upload_status$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Apps$Upload_status$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Apps$Upload_status$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Upload_status$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/apps/{mobilesdkAppId}/upload_status/{uploadToken}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['mobilesdkAppId', 'uploadToken'],
        pathParams: ['mobilesdkAppId', 'uploadToken'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Apps$Upload_status$Get
    extends StandardParameters {
    /**
     * Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     */
    mobilesdkAppId?: string;
    /**
     * The token for the upload
     */
    uploadToken?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    apps: Resource$Projects$Apps;
    testers: Resource$Projects$Testers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Projects$Apps(this.context);
      this.testers = new Resource$Projects$Testers(this.context);
    }

    /**
     * Get information about the quota for `ReleaseTests`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.getTestQuota({
     *     // Required. The name of the `TestQuota` resource to retrieve. Format: `projects/{project_number\}/testQuota`
     *     name: 'projects/my-project/testQuota',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "limit": "my_limit",
     *   //   "name": "my_name",
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
    getTestQuota(
      params: Params$Resource$Projects$Gettestquota,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getTestQuota(
      params?: Params$Resource$Projects$Gettestquota,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>
    >;
    getTestQuota(
      params: Params$Resource$Projects$Gettestquota,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getTestQuota(
      params: Params$Resource$Projects$Gettestquota,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>
    ): void;
    getTestQuota(
      params: Params$Resource$Projects$Gettestquota,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>
    ): void;
    getTestQuota(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>
    ): void;
    getTestQuota(
      paramsOrCallback?:
        | Params$Resource$Projects$Gettestquota
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Gettestquota;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Gettestquota;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestQuota>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Gettestquota
    extends StandardParameters {
    /**
     * Required. The name of the `TestQuota` resource to retrieve. Format: `projects/{project_number\}/testQuota`
     */
    name?: string;
  }

  export class Resource$Projects$Apps {
    context: APIRequestContext;
    releases: Resource$Projects$Apps$Releases;
    testCases: Resource$Projects$Apps$Testcases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.releases = new Resource$Projects$Apps$Releases(this.context);
      this.testCases = new Resource$Projects$Apps$Testcases(this.context);
    }

    /**
     * Gets configuration for automated tests.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.getTestConfig({
     *     // Required. The name of the `TestConfig` resource to retrieve. Format: `projects/{project_number\}/apps/{app_id\}/testConfig`
     *     name: 'projects/my-project/apps/my-app/testConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "roboCrawler": {},
     *   //   "testDevices": []
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
    getTestConfig(
      params: Params$Resource$Projects$Apps$Gettestconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getTestConfig(
      params?: Params$Resource$Projects$Apps$Gettestconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
    >;
    getTestConfig(
      params: Params$Resource$Projects$Apps$Gettestconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getTestConfig(
      params: Params$Resource$Projects$Apps$Gettestconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
    ): void;
    getTestConfig(
      params: Params$Resource$Projects$Apps$Gettestconfig,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
    ): void;
    getTestConfig(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
    ): void;
    getTestConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Gettestconfig
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Gettestconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Gettestconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>(
          parameters
        );
      }
    }

    /**
     * Updates automated test configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.updateTestConfig({
     *     // Identifier. The name of the test configuration resource. Format: `projects/{project_number\}/apps/{app_id\}/testConfig`
     *     name: 'projects/my-project/apps/my-app/testConfig',
     *     // Optional. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "roboCrawler": {},
     *       //   "testDevices": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "roboCrawler": {},
     *   //   "testDevices": []
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
    updateTestConfig(
      params: Params$Resource$Projects$Apps$Updatetestconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateTestConfig(
      params?: Params$Resource$Projects$Apps$Updatetestconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
    >;
    updateTestConfig(
      params: Params$Resource$Projects$Apps$Updatetestconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateTestConfig(
      params: Params$Resource$Projects$Apps$Updatetestconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
    ): void;
    updateTestConfig(
      params: Params$Resource$Projects$Apps$Updatetestconfig,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
    ): void;
    updateTestConfig(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
    ): void;
    updateTestConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Updatetestconfig
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Updatetestconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Updatetestconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Gettestconfig
    extends StandardParameters {
    /**
     * Required. The name of the `TestConfig` resource to retrieve. Format: `projects/{project_number\}/apps/{app_id\}/testConfig`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Updatetestconfig
    extends StandardParameters {
    /**
     * Identifier. The name of the test configuration resource. Format: `projects/{project_number\}/apps/{app_id\}/testConfig`
     */
    name?: string;
    /**
     * Optional. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppdistroV1alphaTestConfig;
  }

  export class Resource$Projects$Apps$Releases {
    context: APIRequestContext;
    tests: Resource$Projects$Apps$Releases$Tests;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tests = new Resource$Projects$Apps$Releases$Tests(this.context);
    }
  }

  export class Resource$Projects$Apps$Releases$Tests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Abort automated test run on release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.releases.tests.cancel(
     *     {
     *       // Required. The name of the release test resource. Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}/tests/{test_id\}`
     *       name: 'projects/my-project/apps/my-app/releases/my-release/tests/my-test',
     *     },
     *   );
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
    cancel(
      params: Params$Resource$Projects$Apps$Releases$Tests$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Apps$Releases$Tests$Cancel,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>
    >;
    cancel(
      params: Params$Resource$Projects$Apps$Releases$Tests$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Apps$Releases$Tests$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>
    ): void;
    cancel(
      params: Params$Resource$Projects$Apps$Releases$Tests$Cancel,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Releases$Tests$Cancel
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Releases$Tests$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Releases$Tests$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaCancelReleaseTestResponse>(
          parameters
        );
      }
    }

    /**
     * Run automated test(s) on release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.releases.tests.create(
     *     {
     *       // Required. The name of the release resource, which is the parent of the test Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}`
     *       parent: 'projects/my-project/apps/my-app/releases/my-release',
     *       // Optional. The ID to use for the test, which will become the final component of the test's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. If it is not provided one will be automatically generated.
     *       releaseTestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "aiInstructions": {},
     *         //   "createTime": "my_createTime",
     *         //   "deviceExecutions": [],
     *         //   "displayName": "my_displayName",
     *         //   "loginCredential": {},
     *         //   "name": "my_name",
     *         //   "testCase": "my_testCase",
     *         //   "testState": "my_testState"
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiInstructions": {},
     *   //   "createTime": "my_createTime",
     *   //   "deviceExecutions": [],
     *   //   "displayName": "my_displayName",
     *   //   "loginCredential": {},
     *   //   "name": "my_name",
     *   //   "testCase": "my_testCase",
     *   //   "testState": "my_testState"
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
      params: Params$Resource$Projects$Apps$Releases$Tests$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Apps$Releases$Tests$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
    >;
    create(
      params: Params$Resource$Projects$Apps$Releases$Tests$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Apps$Releases$Tests$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
    ): void;
    create(
      params: Params$Resource$Projects$Apps$Releases$Tests$Create,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Releases$Tests$Create
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Releases$Tests$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Releases$Tests$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/tests').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>(
          parameters
        );
      }
    }

    /**
     * Get results for automated test run on release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.releases.tests.get({
     *     // Required. The name of the release test resource. Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}/tests/{test_id\}`
     *     name: 'projects/my-project/apps/my-app/releases/my-release/tests/my-test',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiInstructions": {},
     *   //   "createTime": "my_createTime",
     *   //   "deviceExecutions": [],
     *   //   "displayName": "my_displayName",
     *   //   "loginCredential": {},
     *   //   "name": "my_name",
     *   //   "testCase": "my_testCase",
     *   //   "testState": "my_testState"
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
      params: Params$Resource$Projects$Apps$Releases$Tests$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Releases$Tests$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
    >;
    get(
      params: Params$Resource$Projects$Apps$Releases$Tests$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Releases$Tests$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Releases$Tests$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Releases$Tests$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Releases$Tests$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Releases$Tests$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaReleaseTest>(
          parameters
        );
      }
    }

    /**
     * List results for automated tests run on release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.releases.tests.list({
     *     // Optional. The maximum number of tests to return. The service may return fewer than this value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListReleaseTests` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the release resource, which is the parent of the tests Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}`
     *     parent: 'projects/my-project/apps/my-app/releases/my-release',
     *     // Optional. The requested view on the returned ReleaseTests. Defaults to the basic view.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releaseTests": []
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
      params: Params$Resource$Projects$Apps$Releases$Tests$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Apps$Releases$Tests$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>
    >;
    list(
      params: Params$Resource$Projects$Apps$Releases$Tests$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Releases$Tests$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Releases$Tests$List,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Releases$Tests$List
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Releases$Tests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Releases$Tests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/tests').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Releases$Tests$Cancel
    extends StandardParameters {
    /**
     * Required. The name of the release test resource. Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}/tests/{test_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Releases$Tests$Create
    extends StandardParameters {
    /**
     * Required. The name of the release resource, which is the parent of the test Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}`
     */
    parent?: string;
    /**
     * Optional. The ID to use for the test, which will become the final component of the test's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. If it is not provided one will be automatically generated.
     */
    releaseTestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppdistroV1alphaReleaseTest;
  }
  export interface Params$Resource$Projects$Apps$Releases$Tests$Get
    extends StandardParameters {
    /**
     * Required. The name of the release test resource. Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}/tests/{test_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Releases$Tests$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of tests to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListReleaseTests` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The name of the release resource, which is the parent of the tests Format: `projects/{project_number\}/apps/{app_id\}/releases/{release_id\}`
     */
    parent?: string;
    /**
     * Optional. The requested view on the returned ReleaseTests. Defaults to the basic view.
     */
    view?: string;
  }

  export class Resource$Projects$Apps$Testcases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete test cases.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.testCases.batchDelete(
     *     {
     *       // Required. The parent resource where these test cases will be deleted. Format: `projects/{project_number\}/apps/{app_id\}`
     *       parent: 'projects/my-project/apps/my-app',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "names": []
     *         // }
     *       },
     *     },
     *   );
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
    batchDelete(
      params: Params$Resource$Projects$Apps$Testcases$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Projects$Apps$Testcases$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    batchDelete(
      params: Params$Resource$Projects$Apps$Testcases$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Apps$Testcases$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Apps$Testcases$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Testcases$Batchdelete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Testcases$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Testcases$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/testCases:batchDelete').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Create a new test case.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.testCases.create({
     *     // Required. The parent resource where this test case will be created. Format: `projects/{project_number\}/apps/{app_id\}`
     *     parent: 'projects/my-project/apps/my-app',
     *     // Optional. The ID to use for the test case, which will become the final component of the test case's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.
     *     testCaseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aiInstructions": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiInstructions": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
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
      params: Params$Resource$Projects$Apps$Testcases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Apps$Testcases$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    >;
    create(
      params: Params$Resource$Projects$Apps$Testcases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Apps$Testcases$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    create(
      params: Params$Resource$Projects$Apps$Testcases$Create,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Testcases$Create
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Testcases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Testcases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/testCases').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestCase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestCase>(
          parameters
        );
      }
    }

    /**
     * Delete a test case.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.testCases.delete({
     *     // Required. The name of the test case resource to delete. Format: `projects/{project_number\}/apps/{app_id\}/testCases/{test_case_id\}`
     *     name: 'projects/my-project/apps/my-app/testCases/my-testCase',
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
      params: Params$Resource$Projects$Apps$Testcases$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Apps$Testcases$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Apps$Testcases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Apps$Testcases$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Apps$Testcases$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Testcases$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Testcases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Testcases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Get a test case.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.testCases.get({
     *     // Required. The name of the test case resource to retrieve. Format: `projects/{project_number\}/apps/{app_id\}/testCases/{test_case_id\}`
     *     name: 'projects/my-project/apps/my-app/testCases/my-testCase',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiInstructions": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
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
    get(
      params: Params$Resource$Projects$Apps$Testcases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Testcases$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    >;
    get(
      params: Params$Resource$Projects$Apps$Testcases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Testcases$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Testcases$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Testcases$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Testcases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Testcases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestCase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestCase>(
          parameters
        );
      }
    }

    /**
     * List test cases.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.testCases.list({
     *     // Optional. The maximum number of test cases to return. The service may return fewer than this value. If unspecified, at most 50 test cases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListTestCases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTestCases` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource from which to list test cases. Format: `projects/{project_number\}/apps/{app_id\}`
     *     parent: 'projects/my-project/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "testCases": []
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
      params: Params$Resource$Projects$Apps$Testcases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Apps$Testcases$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>
    >;
    list(
      params: Params$Resource$Projects$Apps$Testcases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Testcases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Testcases$List,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Testcases$List
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Testcases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Testcases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/testCases').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaListTestCasesResponse>(
          parameters
        );
      }
    }

    /**
     * Update a test case.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.apps.testCases.patch({
     *     // Identifier. The name of the test case resource. Format: `projects/{project_number\}/apps/{app_id\}/testCases/{test_case_id\}`
     *     name: 'projects/my-project/apps/my-app/testCases/my-testCase',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aiInstructions": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiInstructions": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
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
    patch(
      params: Params$Resource$Projects$Apps$Testcases$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Testcases$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    >;
    patch(
      params: Params$Resource$Projects$Apps$Testcases$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Testcases$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Testcases$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Testcases$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaTestCase>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Testcases$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Testcases$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestCase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaTestCase>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Testcases$Batchdelete
    extends StandardParameters {
    /**
     * Required. The parent resource where these test cases will be deleted. Format: `projects/{project_number\}/apps/{app_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppdistroV1alphaBatchDeleteTestCasesRequest;
  }
  export interface Params$Resource$Projects$Apps$Testcases$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this test case will be created. Format: `projects/{project_number\}/apps/{app_id\}`
     */
    parent?: string;
    /**
     * Optional. The ID to use for the test case, which will become the final component of the test case's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.
     */
    testCaseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppdistroV1alphaTestCase;
  }
  export interface Params$Resource$Projects$Apps$Testcases$Delete
    extends StandardParameters {
    /**
     * Required. The name of the test case resource to delete. Format: `projects/{project_number\}/apps/{app_id\}/testCases/{test_case_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Testcases$Get
    extends StandardParameters {
    /**
     * Required. The name of the test case resource to retrieve. Format: `projects/{project_number\}/apps/{app_id\}/testCases/{test_case_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Testcases$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of test cases to return. The service may return fewer than this value. If unspecified, at most 50 test cases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListTestCases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTestCases` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent resource from which to list test cases. Format: `projects/{project_number\}/apps/{app_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Apps$Testcases$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the test case resource. Format: `projects/{project_number\}/apps/{app_id\}/testCases/{test_case_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppdistroV1alphaTestCase;
  }

  export class Resource$Projects$Testers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get UDIDs of tester iOS devices in a project
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappdistribution.googleapis.com
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
     * const firebaseappdistribution = google.firebaseappdistribution('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappdistribution.projects.testers.getUdids({
     *     // Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     *     mobilesdkAppId: 'placeholder-value',
     *     // The name of the project, which is the parent of testers Format: `projects/{project_number\}`
     *     project: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "testerUdids": []
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
    getUdids(
      params: Params$Resource$Projects$Testers$Getudids,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getUdids(
      params?: Params$Resource$Projects$Testers$Getudids,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
    >;
    getUdids(
      params: Params$Resource$Projects$Testers$Getudids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getUdids(
      params: Params$Resource$Projects$Testers$Getudids,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
    ): void;
    getUdids(
      params: Params$Resource$Projects$Testers$Getudids,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
    ): void;
    getUdids(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
    ): void;
    getUdids(
      paramsOrCallback?:
        | Params$Resource$Projects$Testers$Getudids
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Testers$Getudids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testers$Getudids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappdistribution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+project}/testers:udids').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Testers$Getudids
    extends StandardParameters {
    /**
     * Unique id for a Firebase app of the format: {version\}:{project_number\}:{platform\}:{hash(bundle_id)\} Example: 1:581234567376:android:aa0a3c7b135e90289
     */
    mobilesdkAppId?: string;
    /**
     * The name of the project, which is the parent of testers Format: `projects/{project_number\}`
     */
    project?: string;
  }
}
