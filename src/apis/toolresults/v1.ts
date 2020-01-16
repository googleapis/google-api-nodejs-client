// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace toolresults_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
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
   * Cloud Tool Results API
   *
   * API to publish and access results from developer tools.
   *
   * @example
   * const {google} = require('googleapis');
   * const toolresults = google.toolresults('v1');
   *
   * @namespace toolresults
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Toolresults
   */
  export class Toolresults {
    context: APIRequestContext;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };
    }
  }

  /**
   * Additional details for an ANR crash.
   */
  export interface Schema$ANR {
    /**
     * The stack trace of the ANR crash. Optional.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   * A suggestion to use deep links for a Robo run.
   */
  export interface Schema$AvailableDeepLinks {}
  /**
   * A warning that Robo encountered a screen that was mostly blank; this may indicate a problem with the app.
   */
  export interface Schema$BlankScreen {
    /**
     * The screen id of the element
     */
    screenId?: string | null;
  }
  /**
   * Crash dialog was detected during the test execution
   */
  export interface Schema$CrashDialogError {
    /**
     * The name of the package that caused the dialog.
     */
    crashPackage?: string | null;
  }
  /**
   * Additional details about encountered login screens.
   */
  export interface Schema$EncounteredLoginScreen {
    /**
     * Number of encountered distinct login screens.
     */
    distinctScreens?: number | null;
    /**
     * Subset of login screens.
     */
    screenIds?: string[] | null;
  }
  /**
   * Additional details about encountered screens with elements that are not Android UI widgets.
   */
  export interface Schema$EncounteredNonAndroidUiWidgetScreen {
    /**
     * Number of encountered distinct screens with non Android UI widgets.
     */
    distinctScreens?: number | null;
    /**
     * Subset of screens which contain non Android UI widgets.
     */
    screenIds?: string[] | null;
  }
  /**
   * Failed to install the APK.
   */
  export interface Schema$FailedToInstall {}
  /**
   * Additional details for a fatal exception.
   */
  export interface Schema$FatalException {
    /**
     * The stack trace of the fatal exception. Optional.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   * Additional details of in-app purchases encountered during the crawl.
   */
  export interface Schema$InAppPurchasesFound {
    /**
     * The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU.
     */
    inAppPurchasesFlowsExplored?: number | null;
    /**
     * The total number of in-app purchases flows started.
     */
    inAppPurchasesFlowsStarted?: number | null;
  }
  /**
   * A warning that Robo did not crawl potentially important parts of the app.
   */
  export interface Schema$InsufficientCoverage {}
  /**
   * Additional details for an iOS app crash.
   */
  export interface Schema$IosAppCrashed {
    /**
     * The stack trace, if one is available. Optional.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   * Failed to find the launcher activity of an app.
   */
  export interface Schema$LauncherActivityNotFound {}
  /**
   * Additional details for a native crash.
   */
  export interface Schema$NativeCrash {
    /**
     * The stack trace of the native crash. Optional.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   * A non-sdk API and examples of it being called along with other metadata See https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces
   */
  export interface Schema$NonSdkApi {
    /**
     * The signature of the Non-SDK API
     */
    apiSignature?: string | null;
    /**
     * Example stack traces of this API being called.
     */
    exampleStackTraces?: string[] | null;
    /**
     * Optional debugging insights for non-SDK API violations.
     */
    insights?: Schema$NonSdkApiInsight[];
    /**
     * The total number of times this API was observed to have been called.
     */
    invocationCount?: number | null;
    /**
     * Which list this API appears on
     */
    list?: string | null;
  }
  /**
   * Non-SDK API insights (to address debugging solutions).
   */
  export interface Schema$NonSdkApiInsight {
    /**
     * Optional sample stack traces, for which this insight applies (there should be at least one).
     */
    exampleTraceMessages?: string[] | null;
    /**
     * A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required)
     */
    matcherId?: string | null;
    /**
     * An insight indicating that the hidden API usage originates from a Google-provided library.
     */
    pendingGoogleUpdateInsight?: Schema$PendingGoogleUpdateInsight;
    /**
     * An insight indicating that the hidden API usage originates from the use of a library that needs to be upgraded.
     */
    upgradeInsight?: Schema$UpgradeInsight;
  }
  /**
   * Additional details for a non-sdk API usage violation.
   */
  export interface Schema$NonSdkApiUsageViolation {
    /**
     * Signatures of a subset of those hidden API&#39;s.
     */
    apiSignatures?: string[] | null;
    /**
     * Total number of unique hidden API&#39;s accessed.
     */
    uniqueApis?: number | null;
  }
  /**
   * Contains a summary and examples of non-sdk API usage violations.
   */
  export interface Schema$NonSdkApiUsageViolationReport {
    /**
     * Examples of the detected API usages.
     */
    exampleApis?: Schema$NonSdkApi[];
    /**
     * Minimum API level required for the application to run.
     */
    minSdkVersion?: number | null;
    /**
     * Specifies the API Level on which the application is designed to run.
     */
    targetSdkVersion?: number | null;
    /**
     * Total number of unique Non-SDK API&#39;s accessed.
     */
    uniqueApis?: number | null;
  }
  /**
   * A warning that Robo encountered a screen that has overlapping clickable elements; this may indicate a potential UI issue.
   */
  export interface Schema$OverlappingUIElements {
    /**
     * Resource names of the overlapping screen elements
     */
    resourceName?: string[] | null;
    /**
     * The screen id of the elements
     */
    screenId?: string | null;
  }
  /**
   * This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action.
   */
  export interface Schema$PendingGoogleUpdateInsight {
    /**
     * The name of the Google-provided library with the non-SDK API dependency.
     */
    nameOfGoogleLibrary?: string | null;
  }
  /**
   * A notification that Robo signed in with Google.
   */
  export interface Schema$PerformedGoogleLogin {}
  /**
   * A notification that Robo performed some monkey actions.
   */
  export interface Schema$PerformedMonkeyActions {
    /**
     * The total number of monkey actions performed during the crawl.
     */
    totalActions?: number | null;
  }
  /**
   * Execution stats for a user-provided Robo script.
   */
  export interface Schema$RoboScriptExecution {
    /**
     * The number of Robo script actions executed successfully.
     */
    successfulActions?: number | null;
    /**
     * The total number of actions in the Robo script.
     */
    totalActions?: number | null;
  }
  /**
   * A stacktrace.
   */
  export interface Schema$StackTrace {
    /**
     * The stack trace message.  Required
     */
    exception?: string | null;
  }
  /**
   * User provided intent failed to resolve to an activity.
   */
  export interface Schema$StartActivityNotFound {
    action?: string | null;
    uri?: string | null;
  }
  /**
   * A warning that the screen hierarchy is deeper than the recommended threshold.
   */
  export interface Schema$UIElementTooDeep {
    /**
     * The depth of the screen element
     */
    depth?: number | null;
    /**
     * The screen id of the element
     */
    screenId?: string | null;
    /**
     * The screen state id of the element
     */
    screenStateId?: string | null;
  }
  /**
   * Default unspecified warning.
   */
  export interface Schema$UnspecifiedWarning {}
  /**
   * Additional details of an unused robodirective.
   */
  export interface Schema$UnusedRoboDirective {
    /**
     * The name of the resource that was unused.
     */
    resourceName?: string | null;
  }
  /**
   * This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs.
   */
  export interface Schema$UpgradeInsight {
    /**
     * The name of the package to be upgraded.
     */
    packageName?: string | null;
    /**
     * The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem
     */
    upgradeToVersion?: string | null;
  }
  /**
   * Additional details of a used Robo directive.
   */
  export interface Schema$UsedRoboDirective {
    /**
     * The name of the resource that was used.
     */
    resourceName?: string | null;
  }
  /**
   * Additional details of a used Robo directive with an ignore action. Note: This is a different scenario than unused directive.
   */
  export interface Schema$UsedRoboIgnoreDirective {
    /**
     * The name of the resource that was ignored.
     */
    resourceName?: string | null;
  }
}
