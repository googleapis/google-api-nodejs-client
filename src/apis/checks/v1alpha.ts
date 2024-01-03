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

export namespace checks_v1alpha {
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
   * Checks API
   *
   * The Checks API contains powerful and easy-to-use privacy and compliance APIs that interact with the Checks product and its underlying technology.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const checks = google.checks('v1alpha');
   * ```
   */
  export class Checks {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    media: Resource$Media;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.media = new Resource$Media(this.context);
    }
  }

  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents an app in Checks.
   */
  export interface Schema$GoogleChecksAccountV1alphaApp {
    /**
     * The resource name of the app. Example: `accounts/123/apps/456`
     */
    name?: string | null;
    /**
     * The app's title.
     */
    title?: string | null;
  }
  /**
   * The response message for AccountService.ListApps.
   */
  export interface Schema$GoogleChecksAccountV1alphaListAppsResponse {
    /**
     * The apps.
     */
    apps?: Schema$GoogleChecksAccountV1alphaApp[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The request message for ReportService.AnalyzeUpload.
   */
  export interface Schema$GoogleChecksReportV1alphaAnalyzeUploadRequest {
    /**
     * Optional. The type of the uploaded app binary. If not provided, the server assumes APK file for Android and IPA file for iOS.
     */
    appBinaryFileType?: string | null;
    /**
     * Optional. Git commit hash or changelist number associated with the upload.
     */
    codeReferenceId?: string | null;
  }
  /**
   * Information about the analyzed app bundle.
   */
  export interface Schema$GoogleChecksReportV1alphaAppBundle {
    /**
     * Unique id of the bundle. For example: "com.google.Gmail".
     */
    bundleId?: string | null;
    /**
     * Git commit hash or changelist number associated with the release.
     */
    codeReferenceId?: string | null;
    /**
     * Identifies the type of release.
     */
    releaseType?: string | null;
    /**
     * The user-visible version of the bundle such as the Android `versionName` or iOS `CFBundleShortVersionString`. For example: "7.21.1".
     */
    version?: string | null;
    /**
     * The version used throughout the operating system and store to identify the build such as the Android `versionCode` or iOS `CFBundleVersion`.
     */
    versionId?: string | null;
  }
  /**
   * A check that was run on your app.
   */
  export interface Schema$GoogleChecksReportV1alphaCheck {
    /**
     * Regulations and policies that serve as the legal basis for the check.
     */
    citations?: Schema$GoogleChecksReportV1alphaCheckCitation[];
    /**
     * Evidence that substantiates the check result.
     */
    evidence?: Schema$GoogleChecksReportV1alphaCheckEvidence;
    /**
     * Regions that are impacted by the check. For more info, see https://google.aip.dev/143#countries-and-regions.
     */
    regionCodes?: string[] | null;
    /**
     * The urgency or risk level of the check.
     */
    severity?: string | null;
    /**
     * The result after running the check.
     */
    state?: string | null;
    /**
     * Additional information about the check state in relation to past reports.
     */
    stateMetadata?: Schema$GoogleChecksReportV1alphaCheckStateMetadata;
    /**
     * The type of check that was run. A type will only appear once in a report's list of checks.
     */
    type?: string | null;
  }
  /**
   * Regulation or policy that serves as the legal basis for the check.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckCitation {
    /**
     * Citation type.
     */
    type?: string | null;
  }
  /**
   * Evidence concerning data security.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckDataSecurityEvidence {
    /**
     * Evidence related to data in transit.
     */
    dataInTransitInfo?: Schema$GoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfo[];
  }
  /**
   * Evidence related to data in transit detected in your app.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfo {
    /**
     * The URL contacted by your app. This includes the protocol, domain, and URL parameters.
     */
    uri?: string | null;
  }
  /**
   * Evidence concerning a data type that was found in your app.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckDataTypeEvidence {
    /**
     * The data type that was found in your app.
     */
    dataType?: string | null;
    /**
     * Evidence collected about the data type.
     */
    dataTypeEvidence?: Schema$GoogleChecksReportV1alphaDataTypeEvidence;
  }
  /**
   * Evidence concerning an endpoint that was contacted by your app.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckEndpointEvidence {
    /**
     * The endpoint that was contacted by your app.
     */
    endpoint?: Schema$GoogleChecksReportV1alphaEndpoint;
  }
  /**
   * Evidence collected from endpoint restriction violation analysis.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence {
    /**
     * Endpoints in violation.
     */
    endpointDetails?: Schema$GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetails[];
  }
  /**
   * Details of the endpoint in violation.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetails {
    /**
     * The endpoint in violation.
     */
    endpoint?: Schema$GoogleChecksReportV1alphaEndpoint;
  }
  /**
   * Evidence for a check.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckEvidence {
    /**
     * Evidence concerning data security.
     */
    dataSecurity?: Schema$GoogleChecksReportV1alphaCheckDataSecurityEvidence;
    /**
     * Evidence concerning data types found in your app.
     */
    dataTypes?: Schema$GoogleChecksReportV1alphaCheckDataTypeEvidence[];
    /**
     * Evidence collected from endpoint restriction violation analysis.
     */
    endpointRestrictionViolations?: Schema$GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence[];
    /**
     * Evidence concerning endpoints that were contacted by your app.
     */
    endpoints?: Schema$GoogleChecksReportV1alphaCheckEndpointEvidence[];
    /**
     * Evidence collected from permission restriction violation analysis.
     */
    permissionRestrictionViolations?: Schema$GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence[];
    /**
     * Evidence concerning permissions that were found in your app.
     */
    permissions?: Schema$GoogleChecksReportV1alphaCheckPermissionEvidence[];
    /**
     * Evidence collected from your privacy policy(s).
     */
    privacyPolicyTexts?: Schema$GoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidence[];
    /**
     * Evidence concerning SDK issues.
     */
    sdkIssues?: Schema$GoogleChecksReportV1alphaCheckSdkIssueEvidence[];
    /**
     * Evidence collected from SDK restriction violation analysis.
     */
    sdkRestrictionViolations?: Schema$GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence[];
    /**
     * Evidence concerning SDKs that were found in your app.
     */
    sdks?: Schema$GoogleChecksReportV1alphaCheckSdkEvidence[];
  }
  /**
   * Evidence concerning a permission that was found in your app.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckPermissionEvidence {
    /**
     * The permission that was found in your app.
     */
    permission?: Schema$GoogleChecksReportV1alphaPermission;
  }
  /**
   * Evidence collected from permission restriction violation analysis.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence {
    /**
     * Permissions in violation.
     */
    permissionDetails?: Schema$GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetails[];
  }
  /**
   * Details of the permission in violation.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetails {
    /**
     * The permission in violation.
     */
    permission?: Schema$GoogleChecksReportV1alphaPermission;
  }
  /**
   * Evidence collected from your privacy policy(s).
   */
  export interface Schema$GoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidence {
    /**
     * The privacy policy fragment that was used during the check.
     */
    policyFragment?: Schema$GoogleChecksReportV1alphaPolicyFragment;
  }
  /**
   * Evidence conerning an SDK that was found in your app.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckSdkEvidence {
    /**
     * The SDK that was found in your app.
     */
    sdk?: Schema$GoogleChecksReportV1alphaSdk;
  }
  /**
   * Evidence concerning an SDK issue.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckSdkIssueEvidence {
    /**
     * The SDK with an issue.
     */
    sdk?: Schema$GoogleChecksReportV1alphaSdk;
    /**
     * The SDK version.
     */
    sdkVersion?: string | null;
  }
  /**
   * Evidence collected from SDK restriction violation analysis.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence {
    /**
     * SDKs in violation.
     */
    sdkDetails?: Schema$GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetails[];
  }
  /**
   * Details of the SDK in violation.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetails {
    /**
     * The SDK in violation.
     */
    sdk?: Schema$GoogleChecksReportV1alphaSdk;
  }
  /**
   * Additional information about the check state in relation to past reports.
   */
  export interface Schema$GoogleChecksReportV1alphaCheckStateMetadata {
    /**
     * Indicators related to the check state.
     */
    badges?: string[] | null;
    /**
     * The time when the check first started failing.
     */
    firstFailingTime?: string | null;
    /**
     * The last time the check failed.
     */
    lastFailingTime?: string | null;
  }
  /**
   * Represents the data monitoring section of the report.
   */
  export interface Schema$GoogleChecksReportV1alphaDataMonitoring {
    /**
     * Data types that your app shares or collects.
     */
    dataTypes?: Schema$GoogleChecksReportV1alphaDataMonitoringDataTypeResult[];
    /**
     * Endpoints that were found by dynamic analysis of your app.
     */
    endpoints?: Schema$GoogleChecksReportV1alphaDataMonitoringEndpointResult[];
    /**
     * Permissions that your app uses.
     */
    permissions?: Schema$GoogleChecksReportV1alphaDataMonitoringPermissionResult[];
    /**
     * SDKs that your app uses.
     */
    sdks?: Schema$GoogleChecksReportV1alphaDataMonitoringSdkResult[];
  }
  /**
   * Information about a data type that was found in your app.
   */
  export interface Schema$GoogleChecksReportV1alphaDataMonitoringDataTypeResult {
    /**
     * The data type that was shared or collected by your app.
     */
    dataType?: string | null;
    /**
     * Evidence collected about the data type.
     */
    dataTypeEvidence?: Schema$GoogleChecksReportV1alphaDataTypeEvidence;
    /**
     * Metadata about the result.
     */
    metadata?: Schema$GoogleChecksReportV1alphaDataMonitoringResultMetadata;
  }
  /**
   * Information about an endpoint that was contacted by your app.
   */
  export interface Schema$GoogleChecksReportV1alphaDataMonitoringEndpointResult {
    /**
     * The endpoint that was contacted by your app.
     */
    endpoint?: Schema$GoogleChecksReportV1alphaEndpoint;
    /**
     * The number of times this endpoint was contacted by your app.
     */
    hitCount?: number | null;
    /**
     * Metadata about the result.
     */
    metadata?: Schema$GoogleChecksReportV1alphaDataMonitoringResultMetadata;
  }
  /**
   * Information about a permission that was found in your app.
   */
  export interface Schema$GoogleChecksReportV1alphaDataMonitoringPermissionResult {
    /**
     * Metadata about the result.
     */
    metadata?: Schema$GoogleChecksReportV1alphaDataMonitoringResultMetadata;
    /**
     * The permission that was found in your app.
     */
    permission?: Schema$GoogleChecksReportV1alphaPermission;
  }
  /**
   * Information about a data monitoring result.
   */
  export interface Schema$GoogleChecksReportV1alphaDataMonitoringResultMetadata {
    /**
     * Badges that apply to this result.
     */
    badges?: string[] | null;
    /**
     * The timestamp when this result was first detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks.
     */
    firstDetectedTime?: string | null;
    /**
     * Your app's version name when this result was last detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks.
     */
    lastDetectedAppVersion?: string | null;
    /**
     * The timestamp when this result was last detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks.
     */
    lastDetectedTime?: string | null;
  }
  /**
   * Information about an SDK that was found in your app.
   */
  export interface Schema$GoogleChecksReportV1alphaDataMonitoringSdkResult {
    /**
     * Metadata about the result.
     */
    metadata?: Schema$GoogleChecksReportV1alphaDataMonitoringResultMetadata;
    /**
     * The SDK that was found in your app.
     */
    sdk?: Schema$GoogleChecksReportV1alphaSdk;
  }
  /**
   * Evidence based on an endpoint that data was sent to.
   */
  export interface Schema$GoogleChecksReportV1alphaDataTypeEndpointEvidence {
    /**
     * Set of SDKs that are attributed to the exfiltration.
     */
    attributedSdks?: Schema$GoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdk[];
    /**
     * Endpoints the data type was sent to.
     */
    endpointDetails?: Schema$GoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetails[];
    /**
     * Type of data that was exfiltrated.
     */
    exfiltratedDataType?: string | null;
  }
  /**
   * Details of SDK that is attributed to the exfiltration.
   */
  export interface Schema$GoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdk {
    /**
     * SDK that is attributed to the exfiltration.
     */
    sdk?: Schema$GoogleChecksReportV1alphaSdk;
  }
  /**
   * Details of the endpoint the data type was sent to.
   */
  export interface Schema$GoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetails {
    /**
     * Endpoint the data type was sent to.
     */
    endpoint?: Schema$GoogleChecksReportV1alphaEndpoint;
  }
  /**
   * Evidence collected about a data type.
   */
  export interface Schema$GoogleChecksReportV1alphaDataTypeEvidence {
    /**
     * List of endpoints the data type was sent to.
     */
    endpoints?: Schema$GoogleChecksReportV1alphaDataTypeEndpointEvidence[];
    /**
     * List of included permissions that imply collection of the data type.
     */
    permissions?: Schema$GoogleChecksReportV1alphaDataTypePermissionEvidence[];
    /**
     * List of privacy policy texts that imply collection of the data type.
     */
    privacyPolicyTexts?: Schema$GoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidence[];
  }
  /**
   * Evidence based on the inclusion of a permission.
   */
  export interface Schema$GoogleChecksReportV1alphaDataTypePermissionEvidence {
    /**
     * Permission declared by your app.
     */
    permission?: Schema$GoogleChecksReportV1alphaPermission;
  }
  /**
   * Evidence based on information from the privacy policy.
   */
  export interface Schema$GoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidence {
    /**
     * The privacy policy fragment that implies collection of the data type.
     */
    policyFragment?: Schema$GoogleChecksReportV1alphaPolicyFragment;
  }
  /**
   * Information about an endpoint.
   */
  export interface Schema$GoogleChecksReportV1alphaEndpoint {
    /**
     * Domain name (e.g. ads.google.com).
     */
    domain?: string | null;
  }
  /**
   * The response message for ReportService.ListReports.
   */
  export interface Schema$GoogleChecksReportV1alphaListReportsResponse {
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The reports for the specified app.
     */
    reports?: Schema$GoogleChecksReportV1alphaReport[];
  }
  /**
   * Information about a permission.
   */
  export interface Schema$GoogleChecksReportV1alphaPermission {
    /**
     * Permission identifier.
     */
    id?: string | null;
  }
  /**
   * Information about a policy fragment.
   */
  export interface Schema$GoogleChecksReportV1alphaPolicyFragment {
    /**
     * HTML content.
     */
    htmlContent?: string | null;
    /**
     * Policy URL.
     */
    sourceUri?: string | null;
  }
  /**
   * Privacy report.
   */
  export interface Schema$GoogleChecksReportV1alphaReport {
    /**
     * Information about the analyzed app bundle.
     */
    appBundle?: Schema$GoogleChecksReportV1alphaAppBundle;
    /**
     * List of checks that were run on the app bundle.
     */
    checks?: Schema$GoogleChecksReportV1alphaCheck[];
    /**
     * Information related to data monitoring.
     */
    dataMonitoring?: Schema$GoogleChecksReportV1alphaDataMonitoring;
    /**
     * Resource name of the report.
     */
    name?: string | null;
    /**
     * A URL to view results.
     */
    resultsUri?: string | null;
  }
  /**
   * Information about an SDK.
   */
  export interface Schema$GoogleChecksReportV1alphaSdk {
    /**
     * SDK identifier.
     */
    id?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * The request message for Operations.WaitOperation.
   */
  export interface Schema$WaitOperationRequest {
    /**
     * The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    apps: Resource$Accounts$Apps;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Accounts$Apps(this.context);
    }
  }

  export class Resource$Accounts$Apps {
    context: APIRequestContext;
    operations: Resource$Accounts$Apps$Operations;
    reports: Resource$Accounts$Apps$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Accounts$Apps$Operations(this.context);
      this.reports = new Resource$Accounts$Apps$Reports(this.context);
    }

    /**
     * Gets an app.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Apps$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Apps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChecksAccountV1alphaApp>;
    get(
      params: Params$Resource$Accounts$Apps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Apps$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChecksAccountV1alphaApp>,
      callback: BodyResponseCallback<Schema$GoogleChecksAccountV1alphaApp>
    ): void;
    get(
      params: Params$Resource$Accounts$Apps$Get,
      callback: BodyResponseCallback<Schema$GoogleChecksAccountV1alphaApp>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChecksAccountV1alphaApp>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Get
        | BodyResponseCallback<Schema$GoogleChecksAccountV1alphaApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChecksAccountV1alphaApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChecksAccountV1alphaApp>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChecksAccountV1alphaApp>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleChecksAccountV1alphaApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChecksAccountV1alphaApp>(
          parameters
        );
      }
    }

    /**
     * Lists the apps under the given account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Apps$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Apps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChecksAccountV1alphaListAppsResponse>;
    list(
      params: Params$Resource$Accounts$Apps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Apps$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChecksAccountV1alphaListAppsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChecksAccountV1alphaListAppsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Apps$List,
      callback: BodyResponseCallback<Schema$GoogleChecksAccountV1alphaListAppsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChecksAccountV1alphaListAppsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$List
        | BodyResponseCallback<Schema$GoogleChecksAccountV1alphaListAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChecksAccountV1alphaListAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChecksAccountV1alphaListAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChecksAccountV1alphaListAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/apps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChecksAccountV1alphaListAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChecksAccountV1alphaListAppsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Apps$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the app. Example: `accounts/123/apps/456`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Apps$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of results to return. The server may further constrain the maximum number of results returned in a single page. If unspecified, the server will decide the number of results to be returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous `ListApps` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent account. Example: `accounts/123`
     */
    parent?: string;
  }

  export class Resource$Accounts$Apps$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Accounts$Apps$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Accounts$Apps$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Accounts$Apps$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Accounts$Apps$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Accounts$Apps$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Operations$Cancel
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
        {}) as Params$Resource$Accounts$Apps$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Apps$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Apps$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Accounts$Apps$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Apps$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Apps$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Operations$Delete
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
        {}) as Params$Resource$Accounts$Apps$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Apps$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Apps$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Accounts$Apps$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Apps$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Accounts$Apps$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Apps$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Apps$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Accounts$Apps$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Apps$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Apps$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    wait(
      params: Params$Resource$Accounts$Apps$Operations$Wait,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    wait(
      params?: Params$Resource$Accounts$Apps$Operations$Wait,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    wait(
      params: Params$Resource$Accounts$Apps$Operations$Wait,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    wait(
      params: Params$Resource$Accounts$Apps$Operations$Wait,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wait(
      params: Params$Resource$Accounts$Apps$Operations$Wait,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wait(callback: BodyResponseCallback<Schema$Operation>): void;
    wait(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Operations$Wait
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$Operations$Wait;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Operations$Wait;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:wait').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Apps$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Accounts$Apps$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Apps$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Apps$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Apps$Operations$Wait
    extends StandardParameters {
    /**
     * The name of the operation resource to wait on.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WaitOperationRequest;
  }

  export class Resource$Accounts$Apps$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a report. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=name,checks` will return the name and checks fields.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Apps$Reports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Apps$Reports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChecksReportV1alphaReport>;
    get(
      params: Params$Resource$Accounts$Apps$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Apps$Reports$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChecksReportV1alphaReport>,
      callback: BodyResponseCallback<Schema$GoogleChecksReportV1alphaReport>
    ): void;
    get(
      params: Params$Resource$Accounts$Apps$Reports$Get,
      callback: BodyResponseCallback<Schema$GoogleChecksReportV1alphaReport>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChecksReportV1alphaReport>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Reports$Get
        | BodyResponseCallback<Schema$GoogleChecksReportV1alphaReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChecksReportV1alphaReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChecksReportV1alphaReport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChecksReportV1alphaReport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleChecksReportV1alphaReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChecksReportV1alphaReport>(
          parameters
        );
      }
    }

    /**
     * Lists reports for the specified app. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=reports(name,checks)` will return the name and checks fields.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Apps$Reports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Apps$Reports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChecksReportV1alphaListReportsResponse>;
    list(
      params: Params$Resource$Accounts$Apps$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Apps$Reports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChecksReportV1alphaListReportsResponse>,
      callback: BodyResponseCallback<Schema$GoogleChecksReportV1alphaListReportsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Apps$Reports$List,
      callback: BodyResponseCallback<Schema$GoogleChecksReportV1alphaListReportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChecksReportV1alphaListReportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Reports$List
        | BodyResponseCallback<Schema$GoogleChecksReportV1alphaListReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChecksReportV1alphaListReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChecksReportV1alphaListReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChecksReportV1alphaListReportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Apps$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/reports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChecksReportV1alphaListReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChecksReportV1alphaListReportsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Apps$Reports$Get
    extends StandardParameters {
    /**
     * Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter checks within the report. Only checks that match the filter string are included in the response. Example: `state = FAILED`
     */
    checksFilter?: string;
    /**
     * Required. Resource name of the report. Example: `accounts/123/apps/456/reports/789`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Apps$Reports$List
    extends StandardParameters {
    /**
     * Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter checks within reports. Only checks that match the filter string are included in the response. Example: `state = FAILED`
     */
    checksFilter?: string;
    /**
     * Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter reports. Example: `appBundle.releaseType = PRE_RELEASE`
     */
    filter?: string;
    /**
     * Optional. The maximum number of reports to return. If unspecified, at most 10 reports will be returned. The maximum value is 50; values above 50 will be coerced to 50.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the app. Example: `accounts/123/apps/456`
     */
    parent?: string;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Analyzes the uploaded app bundle and returns a google.longrunning.Operation containing the generated Report. ## Example (upload only) Send a regular POST request with the header `X-Goog-Upload-Protocol: raw`. ``` POST https://checks.googleapis.com/upload/v1alpha/{parent=accounts/x/apps/x\}/reports:analyzeUpload HTTP/1.1 X-Goog-Upload-Protocol: raw Content-Length: Content-Type: application/octet-stream ``` ## Example (upload with metadata) Send a multipart POST request where the first body part contains the metadata JSON and the second body part contains the binary upload. Include the header `X-Goog-Upload-Protocol: multipart`. ``` POST https://checks.googleapis.com/upload/v1alpha/{parent=accounts/x/apps/x\}/reports:analyzeUpload HTTP/1.1 X-Goog-Upload-Protocol: multipart Content-Length: ? Content-Type: multipart/related; boundary=BOUNDARY --BOUNDARY Content-Type: application/json {"code_reference_id":"db5bcc20f94055fb5bc08cbb9b0e7a5530308786"\} --BOUNDARY --BOUNDARY-- ``` *Note:* Metadata-only requests are not supported.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    upload(callback: BodyResponseCallback<Schema$Operation>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/reports:analyzeUpload').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/v1alpha/{+parent}/reports:analyzeUpload'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Required. Resource name of the app. Example: `accounts/123/apps/456`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChecksReportV1alphaAnalyzeUploadRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
}
