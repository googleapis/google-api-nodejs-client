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
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
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

export namespace firebase_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Firebase Management API
   *
   * The Firebase Management API enables programmatic setup and management of Firebase projects, including a project&#39;s Firebase resources and Firebase apps.
   *
   * @example
   * const {google} = require('googleapis');
   * const firebase = google.firebase('v1beta1');
   *
   * @namespace firebase
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Firebase
   */
  export class Firebase {
    context: APIRequestContext;
    availableProjects: Resource$Availableprojects;
    operations: Resource$Operations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.availableProjects = new Resource$Availableprojects(this.context);
      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * All fields are required.
   */
  export interface Schema$AddFirebaseRequest {
    /**
     * Deprecated. Instead, to set your project&#39;s default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to your project. &lt;br&gt; &lt;br&gt;The ID of the project&#39;s default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).
     */
    locationId?: string | null;
    /**
     * Deprecated. Instead, to link your Project with a Google Analytics account, call [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) after you add Firebase resources to your Project. &lt;br&gt; &lt;br&gt;The region code (CLDR) that the account will use for Firebase Analytics data. &lt;br&gt;For example: US, GB, or DE &lt;br&gt; &lt;br&gt;In Java, use `com.google.i18n.identifiers.RegionCode`.
     */
    regionCode?: string | null;
    /**
     * Deprecated. Instead, to link your Project with a Google Analytics account, call [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) after you add Firebase resources to your Project. &lt;br&gt; &lt;br&gt;The time zone that the account will use for Firebase Analytics data. &lt;br&gt;For example: America/Los_Angeles or Africa/Abidjan
     */
    timeZone?: string | null;
  }
  export interface Schema$AddGoogleAnalyticsRequest {
    /**
     * The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with your `FirebaseProject`. &lt;br&gt; &lt;br&gt;Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with your `FirebaseProject`.
     */
    analyticsAccountId?: string | null;
    /**
     * The ID for the existing Google Analytics property that you want to associate with your `FirebaseProject`.
     */
    analyticsPropertyId?: string | null;
  }
  export interface Schema$AdminSdkConfig {
    /**
     * The default Firebase Realtime Database URL.
     */
    databaseURL?: string | null;
    /**
     * The ID of the project&#39;s default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). &lt;br&gt; &lt;br&gt;This field is omitted if the default GCP resource location has not been finalized yet. To set your project&#39;s default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase services to your project.
     */
    locationId?: string | null;
    /**
     * Immutable. The globally unique, user-assigned project ID of the parent Project.
     */
    projectId?: string | null;
    /**
     * The default Cloud Storage for Firebase storage bucket name.
     */
    storageBucket?: string | null;
  }
  export interface Schema$AnalyticsDetails {
    /**
     * The Analytics Property object associated with the specified `FirebaseProject`. &lt;br&gt; &lt;br&gt;This object contains the details of the Google Analytics property associated with the specified `FirebaseProject`.
     */
    analyticsProperty?: Schema$AnalyticsProperty;
    /**
     * For Android Apps and iOS Apps: A map of `app` to `streamId` for each Firebase App in the specified `FirebaseProject`. Each `app` and `streamId` appears only once.&lt;br&gt; &lt;br&gt; For Web Apps: A map of `app` to `streamId` and `measurementId` for each Firebase App in the specified `FirebaseProject`. Each `app`, `streamId`, and `measurementId` appears only once.
     */
    streamMappings?: Schema$StreamMapping[];
  }
  /**
   * Details of a Google Analytics property
   */
  export interface Schema$AnalyticsProperty {
    /**
     * The display name of the Google Analytics property associated with the specified `FirebaseProject`.
     */
    displayName?: string | null;
    /**
     * The globally unique, Google-assigned identifier of the Google Analytics property associated with the specified `FirebaseProject`. &lt;br&gt; &lt;br&gt;If you called [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) to link your `FirebaseProject` with a Google Analytics account, the value in this `id` field is the same as the ID of the property either specified or provisioned with that call to `AddGoogleAnalytics`.
     */
    id?: string | null;
  }
  /**
   * Details of a Firebase App for Android.
   */
  export interface Schema$AndroidApp {
    /**
     * Immutable. The globally unique, Firebase-assigned identifier of the App. &lt;br&gt; &lt;br&gt;This identifier should be treated as an opaque token, as the data format is not specified.
     */
    appId?: string | null;
    /**
     * The user-assigned display name of the App.
     */
    displayName?: string | null;
    /**
     * The fully qualified resource name of the App, in the format: &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;projectId&lt;/var&gt;/androidApps/&lt;var&gt;appId&lt;/var&gt;&lt;/code&gt;
     */
    name?: string | null;
    /**
     * The canonical package name of the Android App as would appear in the Google Play Developer Console.
     */
    packageName?: string | null;
    /**
     * The globally unique, user-assigned ID of the parent Project for the App.
     */
    projectId?: string | null;
  }
  /**
   * Configuration metadata of a single Firebase App for Android.
   */
  export interface Schema$AndroidAppConfig {
    /**
     * The contents of the JSON configuration file.
     */
    configFileContents?: string | null;
    /**
     * The filename that the configuration artifact is typically saved as. &lt;br&gt;For example: `google-services.json`
     */
    configFilename?: string | null;
  }
  /**
   * The default resources associated with a `FirebaseProject`.
   */
  export interface Schema$DefaultResources {
    /**
     * The default Firebase Hosting site name, in the format: &lt;br&gt;&lt;code&gt;&lt;var&gt;projectId&lt;/var&gt;&lt;/code&gt; &lt;br&gt;Though rare, your `projectId` might already be used as the name for an existing Hosting site in another project (learn more about creating non-default, [additional sites](https://firebase.google.com/docs/hosting/multisites)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Hosting site name. For example, if your `projectId` is `myproject123`, your default Hosting site name might be: &lt;br&gt;&lt;code&gt;myproject123-a5c16&lt;/code&gt;
     */
    hostingSite?: string | null;
    /**
     * The ID of the project&#39;s default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). &lt;br&gt; &lt;br&gt;This field is omitted if the default GCP resource location has not been finalized yet. To set your project&#39;s default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase services to your project.
     */
    locationId?: string | null;
    /**
     * The default Firebase Realtime Database instance name, in the format: &lt;br&gt;&lt;code&gt;&lt;var&gt;projectId&lt;/var&gt;&lt;/code&gt; &lt;br&gt;Though rare, your `projectId` might already be used as the name for an existing Realtime Database instance in another project (learn more about [database sharding](https://firebase.google.com/docs/database/usage/sharding)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Realtime Database instance name. For example, if your `projectId` is `myproject123`, your default database instance name might be: &lt;br&gt;&lt;code&gt;myproject123-a5c16&lt;/code&gt;
     */
    realtimeDatabaseInstance?: string | null;
    /**
     * The default Cloud Storage for Firebase storage bucket, in the format: &lt;br&gt;&lt;code&gt;&lt;var&gt;projectId&lt;/var&gt;.appspot.com&lt;/code&gt;
     */
    storageBucket?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  export interface Schema$FinalizeDefaultLocationRequest {
    /**
     * The ID of the default GCP resource location for the Project. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).
     */
    locationId?: string | null;
  }
  /**
   * A high-level summary of an App.
   */
  export interface Schema$FirebaseAppInfo {
    /**
     * Immutable. The globally unique, Firebase-assigned identifier of the App. &lt;br&gt; &lt;br&gt;This identifier should be treated as an opaque token, as the data format is not specified.
     */
    appId?: string | null;
    /**
     * The user-assigned display name of the Firebase App.
     */
    displayName?: string | null;
    /**
     * The fully qualified resource name of the Firebase App, in the format: &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;projectId&lt;/var&gt;/iosApps/&lt;var&gt;appId&lt;/var&gt;&lt;/code&gt; or &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;projectId&lt;/var&gt;/androidApps/&lt;var&gt;appId&lt;/var&gt; &lt;/code&gt;
     */
    name?: string | null;
    /**
     * The platform of the Firebase App.
     */
    platform?: string | null;
  }
  /**
   * A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets) and other Firebase and Google Cloud Platform (GCP) resources. &lt;br&gt; &lt;br&gt;You can create a new `FirebaseProject` in the [Firebase console](https://console.firebase.google.com/), or you can add Firebase resources to an existing [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects) by calling AddFirebase. &lt;br&gt; &lt;br&gt;A `FirebaseProject` is actually also a GCP `Project`, so a `FirebaseProject` uses underlying GCP identifiers (most importantly, `projectId`) as its own for easy interop with GCP APIs.
   */
  export interface Schema$FirebaseProject {
    /**
     * The user-assigned display name of the Project.
     */
    displayName?: string | null;
    /**
     * The fully qualified resource name of the Project, in the format: &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;projectId&lt;/var&gt;&lt;/code&gt;
     */
    name?: string | null;
    /**
     * Immutable. The globally unique, user-assigned ID of the Project.
     */
    projectId?: string | null;
    /**
     * The globally unique, Google-assigned identifier of the Project.
     */
    projectNumber?: string | null;
    /**
     * The default Firebase resources associated with the Project.
     */
    resources?: Schema$DefaultResources;
  }
  /**
   * Details of a Firebase App for iOS.
   */
  export interface Schema$IosApp {
    /**
     * Immutable. The globally unique, Firebase-assigned identifier of the App. &lt;br&gt; &lt;br&gt;This identifier should be treated as an opaque token, as the data format is not specified.
     */
    appId?: string | null;
    /**
     * The automatically generated Apple ID assigned to the App by Apple in the iOS App Store.
     */
    appStoreId?: string | null;
    /**
     * The canonical bundle ID of the iOS App as it would appear in the iOS AppStore.
     */
    bundleId?: string | null;
    /**
     * The user-assigned display name of the App.
     */
    displayName?: string | null;
    /**
     * The fully qualified resource name of the App, in the format: &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;projectId&lt;/var&gt;/iosApps/&lt;var&gt;appId&lt;/var&gt;&lt;/code&gt;
     */
    name?: string | null;
    /**
     * The globally unique, user-assigned ID of the parent Project for the App.
     */
    projectId?: string | null;
  }
  /**
   * Configuration metadata of a single Firebase App for iOS.
   */
  export interface Schema$IosAppConfig {
    /**
     * The content of the XML configuration file.
     */
    configFileContents?: string | null;
    /**
     * The filename that the configuration artifact is typically saved as. &lt;br&gt;For example: `GoogleService-Info.plist`
     */
    configFilename?: string | null;
  }
  export interface Schema$ListAndroidAppsResponse {
    /**
     * List of each AndroidApp that is in the parent Firebase Project.
     */
    apps?: Schema$AndroidApp[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. &lt;br&gt; &lt;br&gt;This token can be used in a subsequent call to `ListAndroidApps` to find the next group of Apps. &lt;br&gt; &lt;br&gt;Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListAvailableLocationsResponse {
    /**
     * One page of results from a call to `ListAvailableLocations`.
     */
    locations?: Schema$Location[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results and all available locations have been listed. &lt;br&gt; &lt;br&gt;This token can be used in a subsequent call to `ListAvailableLocations` to find more locations. &lt;br&gt; &lt;br&gt;Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListAvailableProjectsResponse {
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. &lt;br&gt; &lt;br&gt;This token can be used in a subsequent calls to `ListAvailableProjects` to find the next group of GCP `Projects`. &lt;br&gt; &lt;br&gt;Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
    /**
     * The list of GCP `Projects` which can have Firebase resources added to them.
     */
    projectInfo?: Schema$ProjectInfo[];
  }
  export interface Schema$ListFirebaseProjectsResponse {
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. &lt;br&gt; &lt;br&gt;This token can be used in a subsequent calls to `ListFirebaseProjects` to find the next group of Projects. &lt;br&gt; &lt;br&gt;Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
    /**
     * One page of the list of Projects that are accessible to the caller.
     */
    results?: Schema$FirebaseProject[];
  }
  export interface Schema$ListIosAppsResponse {
    /**
     * List of each IosApp that is in the parent Firebase Project.
     */
    apps?: Schema$IosApp[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. &lt;br&gt; &lt;br&gt;This token can be used in a subsequent call to `ListIosApps` to find the next group of Apps. &lt;br&gt; &lt;br&gt;Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListShaCertificatesResponse {
    /**
     * The list of SHA certificates associated with the App.
     */
    certificates?: Schema$ShaCertificate[];
  }
  export interface Schema$ListWebAppsResponse {
    /**
     * List of each WebApp that is in the parent Firebase Project.
     */
    apps?: Schema$WebApp[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. &lt;br&gt; &lt;br&gt;This token can be used in a subsequent call to `ListWebApps` to find the next group of Apps. &lt;br&gt; &lt;br&gt;Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
  }
  /**
   * A GCP resource location that can be selected for a Project.
   */
  export interface Schema$Location {
    /**
     * Products and services that are available in the GCP resource location.
     */
    features?: string[] | null;
    /**
     * The ID of the GCP resource location. It will be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations#types).
     */
    locationId?: string | null;
    /**
     * Indicates whether the GCP resource location is a [regional or multi-regional location](https://firebase.google.com/docs/projects/locations#types) for data replication.
     */
    type?: string | null;
  }
  /**
   * This is proto2&#39;s version of MessageSet.
   */
  export interface Schema$MessageSet {}
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
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A reference to a Google Cloud Platform (GCP) `Project`.
   */
  export interface Schema$ProjectInfo {
    /**
     * The user-assigned display name of the GCP `Project`, for example: &lt;code&gt;My App&lt;/code&gt;
     */
    displayName?: string | null;
    /**
     * The ID of the project&#39;s default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). &lt;br&gt; &lt;br&gt; Not all projects will have this field populated. If it is not populated, it means that the project does not yet have a default GCP resource location. To set your project&#39;s default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to your project.
     */
    locationId?: string | null;
    /**
     * The resource name of the GCP `Project` to which Firebase resources can be added, in the format: &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;PROJECT_NUMBER&lt;/var&gt;&lt;/code&gt;
     */
    project?: string | null;
  }
  export interface Schema$RemoveAnalyticsRequest {
    /**
     * Optional. The ID of the Google Analytics property associated with the specified `FirebaseProject`. &lt;ul&gt; &lt;li&gt;If not set, then the Google Analytics property that is currently associated with the specified `FirebaseProject` is removed.&lt;/li&gt; &lt;li&gt;If set, and the specified `FirebaseProject` is currently associated with a &lt;em&gt;different&lt;/em&gt; Google Analytics property, then the response is a `412 Precondition Failed` error.&lt;/li&gt; &lt;/ul&gt;
     */
    analyticsPropertyId?: string | null;
  }
  export interface Schema$SearchFirebaseAppsResponse {
    /**
     * One page of results from a call to `SearchFirebaseApps`.
     */
    apps?: Schema$FirebaseAppInfo[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. &lt;br&gt; &lt;br&gt;This token can be used in a subsequent calls to `SearchFirebaseApps` to find the next group of Apps. &lt;br&gt;If the string is empty, then this response is the last page of results. &lt;br&gt;Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
  }
  /**
   * A SHA-1 or SHA-256 certificate associated with the AndroidApp.
   */
  export interface Schema$ShaCertificate {
    /**
     * The SHA certificate type.
     */
    certType?: string | null;
    /**
     * The fully qualified resource name of the `sha-key`, in the format: &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;PROJECT_NUMBER&lt;/var&gt;/androidApps/&lt;var&gt;APP_ID&lt;/var&gt;/sha/&lt;var&gt;SHA_ID&lt;/var&gt;&lt;/code&gt;
     */
    name?: string | null;
    /**
     * The certificate hash for the App.
     */
    shaHash?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Wire-format for a Status object
   */
  export interface Schema$StatusProto {
    /**
     * The canonical error code (see codes.proto) that most closely corresponds to this status. May be missing.
     */
    canonicalCode?: number | null;
    /**
     * Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto
     */
    code?: number | null;
    /**
     * Detail message
     */
    message?: string | null;
    /**
     * message_set associates an arbitrary proto message with the status.
     */
    messageSet?: Schema$MessageSet;
    /**
     * DEPRECATED.  This field was deprecated in 2011 with cl/20297133.  Java support for the field was moved to a proto1 backward compatibility class in April 2017 with cl/142615857 and cl/154123203.  There was never support for this field in Go; if set Go will ignore it. C++ stopped setting StatusProto::payload in October 2015 with cl/106347055, and stopped reading the field in October 2017 with cl/173324114.  In general, newly written code should use only &quot;message_set&quot;. If you need to maintain backward compatibility with code written before 3/25/2011, do the following:  - During the transition period, either (1) set both &quot;payload&quot; and   &quot;message_set&quot;, or (2) write the consumer of StatusProto so that it can   forge a MessageSet object from &quot;payload&quot; if &quot;message_set&quot; is missing.   The C++ util::Status implementation does (2).  - Once all the consumers are converted to accept &quot;message_set&quot;, then   remove the use of &quot;payload&quot; on the producer side.
     */
    payload?: Schema$TypedMessage;
    /**
     * The following are usually only present when code != 0 Space to which this status belongs
     */
    space?: string | null;
  }
  /**
   * A mapping of a Firebase App to a Google Analytics data stream
   */
  export interface Schema$StreamMapping {
    /**
     * The fully qualified resource name of the Firebase App associated with the Google Analytics data stream, in the format: &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;PROJECT_NUMBER&lt;/var&gt;/androidApps/&lt;var&gt;APP_ID&lt;/var&gt;&lt;/code&gt; or &lt;code&gt;projects/&lt;var&gt;PROJECT_NUMBER&lt;/var&gt;/iosApps/&lt;var&gt;APP_ID&lt;/var&gt;&lt;/code&gt; or &lt;code&gt;projects/&lt;var&gt;PROJECT_NUMBER&lt;/var&gt;/webApps/&lt;var&gt;APP_ID&lt;/var&gt;&lt;/code&gt;
     */
    app?: string | null;
    /**
     * Applicable for Firebase Web Apps only.&lt;br&gt; &lt;br&gt;The unique Google-assigned identifier of the Google Analytics web stream associated with the Firebase Web App. Firebase SDKs use this ID to interact with Google Analytics APIs. &lt;br&gt; &lt;br&gt;Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/topic/9303475).
     */
    measurementId?: string | null;
    /**
     * The unique Google-assigned identifier of the Google Analytics data stream associated with the Firebase App. &lt;br&gt; &lt;br&gt;Learn more about Google Analytics data streams in the [Analytics documentation](https://support.google.com/analytics/answer/9303323).
     */
    streamId?: string | null;
  }
  /**
   * Message that groups a protocol type_id (as defined by MessageSet), with an encoded message of that type.  Its use is similar to MessageSet, except it represents a single (type, encoded message) instead of a set.  To fill for known protocol type:   MyProtocolMsg proto;   TypedMessage typed_msg;   typed_msg.set_type_id(MyProtocolMsg::MESSAGE_TYPE_ID);   proto.AppendToCord(typed_msg.mutable_message());  To fill for unknown protocol type:   ProtocolMessage proto;   TypedMessage typed_msg;   typed_msg.set_type_id(proto.GetMapper()-&gt;type_id());   proto.AppendToCord(typed_msg.mutable_message());
   */
  export interface Schema$TypedMessage {
    /**
     * Message bytes.
     */
    message?: string | null;
    /**
     * Identifier for the type.
     */
    typeId?: number | null;
  }
  /**
   * Details of a Firebase App for the web.
   */
  export interface Schema$WebApp {
    /**
     * Immutable. The globally unique, Firebase-assigned identifier of the App. &lt;br&gt; &lt;br&gt;This identifier should be treated as an opaque token, as the data format is not specified.
     */
    appId?: string | null;
    /**
     * The fully qualified URLs where the App is hosted.
     */
    appUrls?: string[] | null;
    /**
     * The user-assigned display name of the App.
     */
    displayName?: string | null;
    /**
     * The fully qualified resource name of the App, for example: &lt;br&gt;&lt;code&gt;projects/&lt;var&gt;projectId&lt;/var&gt;/webApps/&lt;var&gt;appId&lt;/var&gt;&lt;/code&gt;
     */
    name?: string | null;
    /**
     * The globally unique, user-assigned ID of the parent Project for the App.
     */
    projectId?: string | null;
  }
  /**
   * Configuration metadata of a single Firebase App for the web.
   */
  export interface Schema$WebAppConfig {
    /**
     * The API key associated with the web App.
     */
    apiKey?: string | null;
    /**
     * Immutable. The globally unique, Firebase-assigned identifier of the App.
     */
    appId?: string | null;
    /**
     * The domain Firebase Auth configures for OAuth redirects, in the format: &lt;br&gt;&lt;code&gt;&lt;var&gt;projectId&lt;/var&gt;.firebaseapp.com&lt;/code&gt;
     */
    authDomain?: string | null;
    /**
     * The default Firebase Realtime Database URL.
     */
    databaseURL?: string | null;
    /**
     * The ID of the project&#39;s default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). &lt;br&gt; &lt;br&gt;This field is omitted if the default GCP resource location has not been finalized yet. To set your project&#39;s default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase services to your project.
     */
    locationId?: string | null;
    /**
     * This field will no longer be provided here. Instead, use `GetAnalyticsDetails`
     */
    measurementId?: string | null;
    /**
     * The sender ID for use with Firebase Cloud Messaging.
     */
    messagingSenderId?: string | null;
    /**
     * Immutable. The globally unique, user-assigned project ID of the parent Project for the App.
     */
    projectId?: string | null;
    /**
     * The default Cloud Storage for Firebase storage bucket name.
     */
    storageBucket?: string | null;
  }

  export class Resource$Availableprojects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebase.availableProjects.list
     * @desc Returns a list of [Google Cloud Platform (GCP) `Projects`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that are available to have Firebase resources added to them. <br> <br>A GCP `Project` will only be returned if: <ol>   <li><p>The caller has sufficient          [Google IAM](https://cloud.google.com/iam) permissions to call          AddFirebase.</p></li>   <li><p>The GCP `Project` is not already a FirebaseProject.</p></li>   <li><p>The GCP `Project` is not in an Organization which has policies          that prevent Firebase resources from being added.</p></li> </ol>
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.availableProjects.list({
     *     // The maximum number of GCP `Projects` to return in the response.
     *     // <br>
     *     // <br>The server may return fewer than this value at its discretion.
     *     // If no value is specified (or too large a value is specified), the server
     *     // will impose its own limit.
     *     // <br>
     *     // <br>This value cannot be negative.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to `ListAvailableProjects`
     *     // indicating where in the set of GCP `Projects` to resume listing.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "projectInfo": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.availableProjects.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of GCP `Projects` to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. <br> <br>This value cannot be negative.
     * @param {string=} params.pageToken Token returned from a previous call to `ListAvailableProjects` indicating where in the set of GCP `Projects` to resume listing.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Availableprojects$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Availableprojects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAvailableProjectsResponse>;
    list(
      params: Params$Resource$Availableprojects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Availableprojects$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAvailableProjectsResponse>,
      callback: BodyResponseCallback<Schema$ListAvailableProjectsResponse>
    ): void;
    list(
      params: Params$Resource$Availableprojects$List,
      callback: BodyResponseCallback<Schema$ListAvailableProjectsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAvailableProjectsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Availableprojects$List
        | BodyResponseCallback<Schema$ListAvailableProjectsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAvailableProjectsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAvailableProjectsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAvailableProjectsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Availableprojects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Availableprojects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/availableProjects').replace(
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
        createAPIRequest<Schema$ListAvailableProjectsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListAvailableProjectsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Availableprojects$List
    extends StandardParameters {
    /**
     * The maximum number of GCP `Projects` to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. <br> <br>This value cannot be negative.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `ListAvailableProjects` indicating where in the set of GCP `Projects` to resume listing.
     */
    pageToken?: string;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebase.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    androidApps: Resource$Projects$Androidapps;
    availableLocations: Resource$Projects$Availablelocations;
    defaultLocation: Resource$Projects$Defaultlocation;
    iosApps: Resource$Projects$Iosapps;
    webApps: Resource$Projects$Webapps;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.androidApps = new Resource$Projects$Androidapps(this.context);
      this.availableLocations = new Resource$Projects$Availablelocations(
        this.context
      );
      this.defaultLocation = new Resource$Projects$Defaultlocation(
        this.context
      );
      this.iosApps = new Resource$Projects$Iosapps(this.context);
      this.webApps = new Resource$Projects$Webapps(this.context);
    }

    /**
     * firebase.projects.addFirebase
     * @desc Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). <br> <br>Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` uses underlying GCP identifiers (most importantly, the `PROJECT_NUMBER`) as its own for easy interop with GCP APIs. <br> <br>The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. <br> <br>This method does not modify any billing account information on the underlying GCP `Project`. <br> <br>To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.addFirebase({
     *     // The resource name of the GCP `Project` to which Firebase resources will be
     *     // added, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     // After calling `AddFirebase`, the
     *     // [`project_id`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id)
     *     // of the GCP `Project` is also the `project_id` of the FirebaseProject.
     *     project: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "locationId": "my_locationId",
     *       //   "regionCode": "my_regionCode",
     *       //   "timeZone": "my_timeZone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.addFirebase
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The resource name of the GCP `Project` to which Firebase resources will be added, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code> After calling `AddFirebase`, the [`project_id`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id) of the GCP `Project` is also the `project_id` of the FirebaseProject.
     * @param {().AddFirebaseRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addFirebase(
      params: Params$Resource$Projects$Addfirebase,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addFirebase(
      params?: Params$Resource$Projects$Addfirebase,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    addFirebase(
      params: Params$Resource$Projects$Addfirebase,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addFirebase(
      params: Params$Resource$Projects$Addfirebase,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addFirebase(
      params: Params$Resource$Projects$Addfirebase,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addFirebase(callback: BodyResponseCallback<Schema$Operation>): void;
    addFirebase(
      paramsOrCallback?:
        | Params$Resource$Projects$Addfirebase
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
        {}) as Params$Resource$Projects$Addfirebase;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Addfirebase;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+project}:addFirebase').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * firebase.projects.addGoogleAnalytics
     * @desc Links a FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). <br> <br>Using this call, you can either: <ul> <li>Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with your `FirebaseProject`.</li> <li>Specify an existing `analyticsPropertyId` to associate the property with your `FirebaseProject`.</li> </ul> <br> Note that when you call `AddGoogleAnalytics`: <ol> <li>The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in your `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to Android Apps and iOS Apps.</li> <li>If no corresponding data streams are found for your Firebase Apps, new data streams are provisioned in the Google Analytics property for each of your Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in your Analytics property.</li> </ol> Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). <br> <br>The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. <br> <br>To call `AddGoogleAnalytics`, a member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. <br> <br>If a `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.addGoogleAnalytics({
     *     // The parent `FirebaseProject` to link to an existing Google Analytics
     *     // account, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "analyticsAccountId": "my_analyticsAccountId",
     *       //   "analyticsPropertyId": "my_analyticsPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.addGoogleAnalytics
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent `FirebaseProject` to link to an existing Google Analytics account, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {().AddGoogleAnalyticsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addGoogleAnalytics(
      params: Params$Resource$Projects$Addgoogleanalytics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addGoogleAnalytics(
      params?: Params$Resource$Projects$Addgoogleanalytics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    addGoogleAnalytics(
      params: Params$Resource$Projects$Addgoogleanalytics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addGoogleAnalytics(
      params: Params$Resource$Projects$Addgoogleanalytics,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addGoogleAnalytics(
      params: Params$Resource$Projects$Addgoogleanalytics,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addGoogleAnalytics(callback: BodyResponseCallback<Schema$Operation>): void;
    addGoogleAnalytics(
      paramsOrCallback?:
        | Params$Resource$Projects$Addgoogleanalytics
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
        {}) as Params$Resource$Projects$Addgoogleanalytics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Addgoogleanalytics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:addGoogleAnalytics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * firebase.projects.get
     * @desc Gets the FirebaseProject identified by the specified resource name.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.get({
     *     // The fully qualified resource name of the Project, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     name: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "projectId": "my_projectId",
     *   //   "projectNumber": "my_projectNumber",
     *   //   "resources": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the Project, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FirebaseProject>;
    get(
      params: Params$Resource$Projects$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$FirebaseProject>,
      callback: BodyResponseCallback<Schema$FirebaseProject>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      callback: BodyResponseCallback<Schema$FirebaseProject>
    ): void;
    get(callback: BodyResponseCallback<Schema$FirebaseProject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Get
        | BodyResponseCallback<Schema$FirebaseProject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FirebaseProject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FirebaseProject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FirebaseProject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$FirebaseProject>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$FirebaseProject>(parameters);
      }
    }

    /**
     * firebase.projects.getAdminSdkConfig
     * @desc Gets the configuration artifact used by servers to simplify initialization. <br> <br>Typically, this configuration is used with the Firebase Admin SDK [initializeApp](https://firebase.google.com/docs/admin/setup#initialize_the_sdk) command.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.getAdminSdkConfig({
     *     // The fully qualified resource name of the Project, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/adminSdkConfig</code>
     *     name: 'projects/my-project/adminSdkConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "databaseURL": "my_databaseURL",
     *   //   "locationId": "my_locationId",
     *   //   "projectId": "my_projectId",
     *   //   "storageBucket": "my_storageBucket"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.getAdminSdkConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the Project, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/adminSdkConfig</code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAdminSdkConfig(
      params: Params$Resource$Projects$Getadminsdkconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAdminSdkConfig(
      params?: Params$Resource$Projects$Getadminsdkconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdminSdkConfig>;
    getAdminSdkConfig(
      params: Params$Resource$Projects$Getadminsdkconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAdminSdkConfig(
      params: Params$Resource$Projects$Getadminsdkconfig,
      options: MethodOptions | BodyResponseCallback<Schema$AdminSdkConfig>,
      callback: BodyResponseCallback<Schema$AdminSdkConfig>
    ): void;
    getAdminSdkConfig(
      params: Params$Resource$Projects$Getadminsdkconfig,
      callback: BodyResponseCallback<Schema$AdminSdkConfig>
    ): void;
    getAdminSdkConfig(
      callback: BodyResponseCallback<Schema$AdminSdkConfig>
    ): void;
    getAdminSdkConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Getadminsdkconfig
        | BodyResponseCallback<Schema$AdminSdkConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdminSdkConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdminSdkConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AdminSdkConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getadminsdkconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getadminsdkconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AdminSdkConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AdminSdkConfig>(parameters);
      }
    }

    /**
     * firebase.projects.getAnalyticsDetails
     * @desc Gets the Google Analytics details currently associated with a FirebaseProject. <br> <br>If the `FirebaseProject` is not yet linked to Google Analytics, then the response to `GetAnalyticsDetails` is NOT_FOUND.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.getAnalyticsDetails({
     *     // The fully qualified resource name, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/analyticsDetails</code>
     *     name: 'projects/my-project/analyticsDetails',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "analyticsProperty": {},
     *   //   "streamMappings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.getAnalyticsDetails
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/analyticsDetails</code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAnalyticsDetails(
      params: Params$Resource$Projects$Getanalyticsdetails,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAnalyticsDetails(
      params?: Params$Resource$Projects$Getanalyticsdetails,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyticsDetails>;
    getAnalyticsDetails(
      params: Params$Resource$Projects$Getanalyticsdetails,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAnalyticsDetails(
      params: Params$Resource$Projects$Getanalyticsdetails,
      options: MethodOptions | BodyResponseCallback<Schema$AnalyticsDetails>,
      callback: BodyResponseCallback<Schema$AnalyticsDetails>
    ): void;
    getAnalyticsDetails(
      params: Params$Resource$Projects$Getanalyticsdetails,
      callback: BodyResponseCallback<Schema$AnalyticsDetails>
    ): void;
    getAnalyticsDetails(
      callback: BodyResponseCallback<Schema$AnalyticsDetails>
    ): void;
    getAnalyticsDetails(
      paramsOrCallback?:
        | Params$Resource$Projects$Getanalyticsdetails
        | BodyResponseCallback<Schema$AnalyticsDetails>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyticsDetails>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyticsDetails>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AnalyticsDetails> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getanalyticsdetails;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getanalyticsdetails;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AnalyticsDetails>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AnalyticsDetails>(parameters);
      }
    }

    /**
     * firebase.projects.list
     * @desc Lists each FirebaseProject accessible to the caller. <br> <br>The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. <br> <br>This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. <br> <br>Use GetFirebaseProject for consistent reads as well as for additional Project details.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.list({
     *     // The maximum number of Projects to return in the response.
     *     // <br>
     *     // <br>The server may return fewer than this at its discretion.
     *     // If no value is specified (or too large a value is specified), the server
     *     // will impose its own limit.
     *     // <br>
     *     // <br>This value cannot be negative.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to `ListFirebaseProjects` indicating
     *     // where in the set of Projects to resume listing.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "results": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of Projects to return in the response. <br> <br>The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. <br> <br>This value cannot be negative.
     * @param {string=} params.pageToken Token returned from a previous call to `ListFirebaseProjects` indicating where in the set of Projects to resume listing.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFirebaseProjectsResponse>;
    list(
      params: Params$Resource$Projects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFirebaseProjectsResponse>,
      callback: BodyResponseCallback<Schema$ListFirebaseProjectsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$List,
      callback: BodyResponseCallback<Schema$ListFirebaseProjectsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListFirebaseProjectsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$List
        | BodyResponseCallback<Schema$ListFirebaseProjectsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFirebaseProjectsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFirebaseProjectsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFirebaseProjectsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/projects').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListFirebaseProjectsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListFirebaseProjectsResponse>(
          parameters
        );
      }
    }

    /**
     * firebase.projects.patch
     * @desc Updates the attributes of the FirebaseProject identified by the specified resource name. <br> <br>All [query parameters](#query-parameters) are required.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.patch({
     *     // The fully qualified resource name of the Project, in the format:
     *     // <br><code>projects/<var>projectId</var></code>
     *     name: 'projects/my-project',
     *     // Specifies which fields to update.
     *     // <br>
     *     // <br>If this list is empty, then no state will be updated.
     *     // <br>Note that the fields `name`, `project_id`, and `project_number` are all
     *     // immutable.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "projectNumber": "my_projectNumber",
     *       //   "resources": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "projectId": "my_projectId",
     *   //   "projectNumber": "my_projectNumber",
     *   //   "resources": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the Project, in the format: <br><code>projects/<var>projectId</var></code>
     * @param {string=} params.updateMask Specifies which fields to update. <br> <br>If this list is empty, then no state will be updated. <br>Note that the fields `name`, `project_id`, and `project_number` are all immutable.
     * @param {().FirebaseProject} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FirebaseProject>;
    patch(
      params: Params$Resource$Projects$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$FirebaseProject>,
      callback: BodyResponseCallback<Schema$FirebaseProject>
    ): void;
    patch(
      params: Params$Resource$Projects$Patch,
      callback: BodyResponseCallback<Schema$FirebaseProject>
    ): void;
    patch(callback: BodyResponseCallback<Schema$FirebaseProject>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Patch
        | BodyResponseCallback<Schema$FirebaseProject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FirebaseProject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FirebaseProject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FirebaseProject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FirebaseProject>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$FirebaseProject>(parameters);
      }
    }

    /**
     * firebase.projects.removeAnalytics
     * @desc Unlinks the specified `FirebaseProject` from its Google Analytics account. <br> <br>This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. <br> <br>These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a <em>new</em> data stream for each Web App. <br> <br>To call `RemoveAnalytics`, a member must be an Owner for the `FirebaseProject`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.removeAnalytics({
     *     // The parent `FirebaseProject` to unlink from its Google Analytics account,
     *     // in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "analyticsPropertyId": "my_analyticsPropertyId"
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
     * @alias firebase.projects.removeAnalytics
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent `FirebaseProject` to unlink from its Google Analytics account, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {().RemoveAnalyticsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeAnalytics(
      params: Params$Resource$Projects$Removeanalytics,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeAnalytics(
      params?: Params$Resource$Projects$Removeanalytics,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    removeAnalytics(
      params: Params$Resource$Projects$Removeanalytics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeAnalytics(
      params: Params$Resource$Projects$Removeanalytics,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeAnalytics(
      params: Params$Resource$Projects$Removeanalytics,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeAnalytics(callback: BodyResponseCallback<Schema$Empty>): void;
    removeAnalytics(
      paramsOrCallback?:
        | Params$Resource$Projects$Removeanalytics
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
        {}) as Params$Resource$Projects$Removeanalytics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Removeanalytics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:removeAnalytics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * firebase.projects.searchApps
     * @desc A convenience method that lists all available Apps for the specified FirebaseProject. <br> <br>Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.searchApps({
     *     // The maximum number of Apps to return in the response.
     *     // <br>
     *     // <br>The server may return fewer than this value at its discretion.
     *     // If no value is specified (or too large a value is specified), then the
     *     // server will impose its own limit.
     *     // <br>
     *     // <br>This value cannot be negative.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to `SearchFirebaseApps` indicating
     *     // where in the set of Apps to resume listing.
     *     pageToken: 'placeholder-value',
     *     // The parent Project for which to list Apps, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apps": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.searchApps
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of Apps to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. <br> <br>This value cannot be negative.
     * @param {string=} params.pageToken Token returned from a previous call to `SearchFirebaseApps` indicating where in the set of Apps to resume listing.
     * @param {string} params.parent The parent Project for which to list Apps, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchApps(
      params: Params$Resource$Projects$Searchapps,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchApps(
      params?: Params$Resource$Projects$Searchapps,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchFirebaseAppsResponse>;
    searchApps(
      params: Params$Resource$Projects$Searchapps,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchApps(
      params: Params$Resource$Projects$Searchapps,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchFirebaseAppsResponse>,
      callback: BodyResponseCallback<Schema$SearchFirebaseAppsResponse>
    ): void;
    searchApps(
      params: Params$Resource$Projects$Searchapps,
      callback: BodyResponseCallback<Schema$SearchFirebaseAppsResponse>
    ): void;
    searchApps(
      callback: BodyResponseCallback<Schema$SearchFirebaseAppsResponse>
    ): void;
    searchApps(
      paramsOrCallback?:
        | Params$Resource$Projects$Searchapps
        | BodyResponseCallback<Schema$SearchFirebaseAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchFirebaseAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchFirebaseAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchFirebaseAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Searchapps;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Searchapps;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:searchApps').replace(
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
        createAPIRequest<Schema$SearchFirebaseAppsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SearchFirebaseAppsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Addfirebase
    extends StandardParameters {
    /**
     * The resource name of the GCP `Project` to which Firebase resources will be added, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code> After calling `AddFirebase`, the [`project_id`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id) of the GCP `Project` is also the `project_id` of the FirebaseProject.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddFirebaseRequest;
  }
  export interface Params$Resource$Projects$Addgoogleanalytics
    extends StandardParameters {
    /**
     * The parent `FirebaseProject` to link to an existing Google Analytics account, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddGoogleAnalyticsRequest;
  }
  export interface Params$Resource$Projects$Get extends StandardParameters {
    /**
     * The fully qualified resource name of the Project, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getadminsdkconfig
    extends StandardParameters {
    /**
     * The fully qualified resource name of the Project, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/adminSdkConfig</code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getanalyticsdetails
    extends StandardParameters {
    /**
     * The fully qualified resource name, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/analyticsDetails</code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$List extends StandardParameters {
    /**
     * The maximum number of Projects to return in the response. <br> <br>The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. <br> <br>This value cannot be negative.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `ListFirebaseProjects` indicating where in the set of Projects to resume listing.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Patch extends StandardParameters {
    /**
     * The fully qualified resource name of the Project, in the format: <br><code>projects/<var>projectId</var></code>
     */
    name?: string;
    /**
     * Specifies which fields to update. <br> <br>If this list is empty, then no state will be updated. <br>Note that the fields `name`, `project_id`, and `project_number` are all immutable.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FirebaseProject;
  }
  export interface Params$Resource$Projects$Removeanalytics
    extends StandardParameters {
    /**
     * The parent `FirebaseProject` to unlink from its Google Analytics account, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveAnalyticsRequest;
  }
  export interface Params$Resource$Projects$Searchapps
    extends StandardParameters {
    /**
     * The maximum number of Apps to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. <br> <br>This value cannot be negative.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `SearchFirebaseApps` indicating where in the set of Apps to resume listing.
     */
    pageToken?: string;
    /**
     * The parent Project for which to list Apps, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;
  }

  export class Resource$Projects$Androidapps {
    context: APIRequestContext;
    sha: Resource$Projects$Androidapps$Sha;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.sha = new Resource$Projects$Androidapps$Sha(this.context);
    }

    /**
     * firebase.projects.androidApps.create
     * @desc Requests that a new AndroidApp be created. <br> <br>The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.androidApps.create({
     *     // The parent Project in which to create an App, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "packageName": "my_packageName",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.androidApps.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent Project in which to create an App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {().AndroidApp} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Androidapps$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Androidapps$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Androidapps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Androidapps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Androidapps$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$Create
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
        {}) as Params$Resource$Projects$Androidapps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/androidApps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * firebase.projects.androidApps.get
     * @desc Gets the AndroidApp identified by the specified resource name.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.androidApps.get({
     *     // The fully qualified resource name of the App, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code>
     *     // <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource
     *     // from Sub-Collection access pattern may be used here, in the format:
     *     // <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     *     name: 'projects/my-project/androidApps/my-androidApp',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "packageName": "my_packageName",
     *   //   "projectId": "my_projectId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.androidApps.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Androidapps$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Androidapps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AndroidApp>;
    get(
      params: Params$Resource$Projects$Androidapps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Androidapps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AndroidApp>,
      callback: BodyResponseCallback<Schema$AndroidApp>
    ): void;
    get(
      params: Params$Resource$Projects$Androidapps$Get,
      callback: BodyResponseCallback<Schema$AndroidApp>
    ): void;
    get(callback: BodyResponseCallback<Schema$AndroidApp>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$Get
        | BodyResponseCallback<Schema$AndroidApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AndroidApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AndroidApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AndroidApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Androidapps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AndroidApp>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AndroidApp>(parameters);
      }
    }

    /**
     * firebase.projects.androidApps.getConfig
     * @desc Gets the configuration artifact associated with the specified AndroidApp.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.androidApps.getConfig({
     *     // The resource name of the App configuration to download, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var>/config</code>
     *     // <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource
     *     // from Sub-Collection access pattern may be used here, in the format:
     *     // <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     *     name: 'projects/my-project/androidApps/my-androidApp/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configFileContents": "my_configFileContents",
     *   //   "configFilename": "my_configFilename"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.androidApps.getConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the App configuration to download, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var>/config</code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(
      params: Params$Resource$Projects$Androidapps$Getconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getConfig(
      params?: Params$Resource$Projects$Androidapps$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AndroidAppConfig>;
    getConfig(
      params: Params$Resource$Projects$Androidapps$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Androidapps$Getconfig,
      options: MethodOptions | BodyResponseCallback<Schema$AndroidAppConfig>,
      callback: BodyResponseCallback<Schema$AndroidAppConfig>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Androidapps$Getconfig,
      callback: BodyResponseCallback<Schema$AndroidAppConfig>
    ): void;
    getConfig(callback: BodyResponseCallback<Schema$AndroidAppConfig>): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$Getconfig
        | BodyResponseCallback<Schema$AndroidAppConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AndroidAppConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AndroidAppConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AndroidAppConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Androidapps$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AndroidAppConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AndroidAppConfig>(parameters);
      }
    }

    /**
     * firebase.projects.androidApps.list
     * @desc Lists each AndroidApp associated with the specified parent Project. <br> <br>The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.androidApps.list({
     *     // The maximum number of Apps to return in the response.
     *     // <br>
     *     // <br>The server may return fewer than this at its discretion.
     *     // If no value is specified (or too large a value is specified), then the
     *     // server will impose its own limit.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to `ListAndroidApps` indicating where
     *     // in the set of Apps to resume listing.
     *     pageToken: 'placeholder-value',
     *     // The parent Project for which to list Apps, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apps": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.androidApps.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of Apps to return in the response. <br> <br>The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
     * @param {string=} params.pageToken Token returned from a previous call to `ListAndroidApps` indicating where in the set of Apps to resume listing.
     * @param {string} params.parent The parent Project for which to list Apps, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Androidapps$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Androidapps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAndroidAppsResponse>;
    list(
      params: Params$Resource$Projects$Androidapps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Androidapps$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAndroidAppsResponse>,
      callback: BodyResponseCallback<Schema$ListAndroidAppsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Androidapps$List,
      callback: BodyResponseCallback<Schema$ListAndroidAppsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAndroidAppsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$List
        | BodyResponseCallback<Schema$ListAndroidAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAndroidAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAndroidAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAndroidAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Androidapps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/androidApps').replace(
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
        createAPIRequest<Schema$ListAndroidAppsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListAndroidAppsResponse>(parameters);
      }
    }

    /**
     * firebase.projects.androidApps.patch
     * @desc Updates the attributes of the AndroidApp identified by the specified resource name.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.androidApps.patch({
     *     // The fully qualified resource name of the App, in the format:
     *     // <br><code>projects/<var>projectId</var>/androidApps/<var>appId</var></code>
     *     name: 'projects/my-project/androidApps/my-androidApp',
     *     // Specifies which fields to update.
     *     // <br>Note that the fields `name`, `app_id`, `project_id`, and `package_name`
     *     // are all immutable.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "packageName": "my_packageName",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "packageName": "my_packageName",
     *   //   "projectId": "my_projectId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.androidApps.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the App, in the format: <br><code>projects/<var>projectId</var>/androidApps/<var>appId</var></code>
     * @param {string=} params.updateMask Specifies which fields to update. <br>Note that the fields `name`, `app_id`, `project_id`, and `package_name` are all immutable.
     * @param {().AndroidApp} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Androidapps$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Androidapps$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AndroidApp>;
    patch(
      params: Params$Resource$Projects$Androidapps$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Androidapps$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AndroidApp>,
      callback: BodyResponseCallback<Schema$AndroidApp>
    ): void;
    patch(
      params: Params$Resource$Projects$Androidapps$Patch,
      callback: BodyResponseCallback<Schema$AndroidApp>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AndroidApp>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$Patch
        | BodyResponseCallback<Schema$AndroidApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AndroidApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AndroidApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AndroidApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Androidapps$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AndroidApp>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AndroidApp>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Androidapps$Create
    extends StandardParameters {
    /**
     * The parent Project in which to create an App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AndroidApp;
  }
  export interface Params$Resource$Projects$Androidapps$Get
    extends StandardParameters {
    /**
     * The fully qualified resource name of the App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Androidapps$Getconfig
    extends StandardParameters {
    /**
     * The resource name of the App configuration to download, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var>/config</code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Androidapps$List
    extends StandardParameters {
    /**
     * The maximum number of Apps to return in the response. <br> <br>The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `ListAndroidApps` indicating where in the set of Apps to resume listing.
     */
    pageToken?: string;
    /**
     * The parent Project for which to list Apps, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Androidapps$Patch
    extends StandardParameters {
    /**
     * The fully qualified resource name of the App, in the format: <br><code>projects/<var>projectId</var>/androidApps/<var>appId</var></code>
     */
    name?: string;
    /**
     * Specifies which fields to update. <br>Note that the fields `name`, `app_id`, `project_id`, and `package_name` are all immutable.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AndroidApp;
  }

  export class Resource$Projects$Androidapps$Sha {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebase.projects.androidApps.sha.create
     * @desc Adds a SHA certificate to the specified AndroidApp.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.androidApps.sha.create({
     *     // The parent App to which a SHA certificate will be added, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code>
     *     // <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource
     *     // from Sub-Collection access pattern may be used here, in the format:
     *     // <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     *     parent: 'projects/my-project/androidApps/my-androidApp',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "certType": "my_certType",
     *       //   "name": "my_name",
     *       //   "shaHash": "my_shaHash"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certType": "my_certType",
     *   //   "name": "my_name",
     *   //   "shaHash": "my_shaHash"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.androidApps.sha.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent App to which a SHA certificate will be added, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     * @param {().ShaCertificate} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Androidapps$Sha$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Androidapps$Sha$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShaCertificate>;
    create(
      params: Params$Resource$Projects$Androidapps$Sha$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Androidapps$Sha$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ShaCertificate>,
      callback: BodyResponseCallback<Schema$ShaCertificate>
    ): void;
    create(
      params: Params$Resource$Projects$Androidapps$Sha$Create,
      callback: BodyResponseCallback<Schema$ShaCertificate>
    ): void;
    create(callback: BodyResponseCallback<Schema$ShaCertificate>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$Sha$Create
        | BodyResponseCallback<Schema$ShaCertificate>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShaCertificate>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShaCertificate>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ShaCertificate> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Androidapps$Sha$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$Sha$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/sha').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShaCertificate>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ShaCertificate>(parameters);
      }
    }

    /**
     * firebase.projects.androidApps.sha.delete
     * @desc Removes a SHA certificate from the specified AndroidApp.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.androidApps.sha.delete({
     *     // The fully qualified resource name of the `sha-key`, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var>/sha/<var>SHA_ID</var></code>
     *     // <br>You can obtain the full name from the response of
     *     // [`ListShaCertificates`](../projects.androidApps.sha/list) or the original
     *     // [`CreateShaCertificate`](../projects.androidApps.sha/create).
     *     name: 'projects/my-project/androidApps/my-androidApp/sha/[^/]+',
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
     * @alias firebase.projects.androidApps.sha.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the `sha-key`, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var>/sha/<var>SHA_ID</var></code> <br>You can obtain the full name from the response of [`ListShaCertificates`](../projects.androidApps.sha/list) or the original [`CreateShaCertificate`](../projects.androidApps.sha/create).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Androidapps$Sha$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Androidapps$Sha$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Androidapps$Sha$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Androidapps$Sha$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Androidapps$Sha$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$Sha$Delete
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
        {}) as Params$Resource$Projects$Androidapps$Sha$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$Sha$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * firebase.projects.androidApps.sha.list
     * @desc Returns the list of SHA-1 and SHA-256 certificates for the specified AndroidApp.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.androidApps.sha.list({
     *     // The parent App for which to list SHA certificates, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code>
     *     // <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource
     *     // from Sub-Collection access pattern may be used here, in the format:
     *     // <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     *     parent: 'projects/my-project/androidApps/my-androidApp',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificates": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.androidApps.sha.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent App for which to list SHA certificates, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Androidapps$Sha$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Androidapps$Sha$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListShaCertificatesResponse>;
    list(
      params: Params$Resource$Projects$Androidapps$Sha$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Androidapps$Sha$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListShaCertificatesResponse>,
      callback: BodyResponseCallback<Schema$ListShaCertificatesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Androidapps$Sha$List,
      callback: BodyResponseCallback<Schema$ListShaCertificatesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListShaCertificatesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$Sha$List
        | BodyResponseCallback<Schema$ListShaCertificatesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListShaCertificatesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListShaCertificatesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListShaCertificatesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Androidapps$Sha$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$Sha$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/sha').replace(
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
        createAPIRequest<Schema$ListShaCertificatesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListShaCertificatesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Androidapps$Sha$Create
    extends StandardParameters {
    /**
     * The parent App to which a SHA certificate will be added, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ShaCertificate;
  }
  export interface Params$Resource$Projects$Androidapps$Sha$Delete
    extends StandardParameters {
    /**
     * The fully qualified resource name of the `sha-key`, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var>/sha/<var>SHA_ID</var></code> <br>You can obtain the full name from the response of [`ListShaCertificates`](../projects.androidApps.sha/list) or the original [`CreateShaCertificate`](../projects.androidApps.sha/create).
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Androidapps$Sha$List
    extends StandardParameters {
    /**
     * The parent App for which to list SHA certificates, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/androidApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/androidApps/<var>APP_ID</var></code>
     */
    parent?: string;
  }

  export class Resource$Projects$Availablelocations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebase.projects.availableLocations.list
     * @desc Returns a list of valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). <br> <br>One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where project resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. <br> <br>This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a `PROJECT_NUMBER` (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). <br> <br>To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the project. Calls without a specified project do not require any specific project permissions.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.availableLocations.list({
     *     // The maximum number of locations to return in the response.
     *     // <br>
     *     // <br>The server may return fewer than this value at its discretion.
     *     // If no value is specified (or too large a value is specified), then the
     *     // server will impose its own limit.
     *     // <br>
     *     // <br>This value cannot be negative.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to `ListAvailableLocations` indicating
     *     // where in the list of locations to resume listing.
     *     pageToken: 'placeholder-value',
     *     // The Project for which to list GCP resource locations, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     // <br>If no project is specified (that is, `projects/-`), the returned list
     *     // does not take into account org-specific or project-specific location
     *     // restrictions.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.availableLocations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of locations to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. <br> <br>This value cannot be negative.
     * @param {string=} params.pageToken Token returned from a previous call to `ListAvailableLocations` indicating where in the list of locations to resume listing.
     * @param {string} params.parent The Project for which to list GCP resource locations, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code> <br>If no project is specified (that is, `projects/-`), the returned list does not take into account org-specific or project-specific location restrictions.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Availablelocations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Availablelocations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAvailableLocationsResponse>;
    list(
      params: Params$Resource$Projects$Availablelocations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Availablelocations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAvailableLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListAvailableLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Availablelocations$List,
      callback: BodyResponseCallback<Schema$ListAvailableLocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAvailableLocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Availablelocations$List
        | BodyResponseCallback<Schema$ListAvailableLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAvailableLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAvailableLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAvailableLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Availablelocations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Availablelocations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/availableLocations').replace(
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
        createAPIRequest<Schema$ListAvailableLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListAvailableLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Availablelocations$List
    extends StandardParameters {
    /**
     * The maximum number of locations to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. <br> <br>This value cannot be negative.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `ListAvailableLocations` indicating where in the list of locations to resume listing.
     */
    pageToken?: string;
    /**
     * The Project for which to list GCP resource locations, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code> <br>If no project is specified (that is, `projects/-`), the returned list does not take into account org-specific or project-specific location restrictions.
     */
    parent?: string;
  }

  export class Resource$Projects$Defaultlocation {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebase.projects.defaultLocation.finalize
     * @desc Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. <br> <br>This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`location_id`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). <br> <br>After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified FirebaseProject might already be set because either the GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `location_id`. Any new calls to `FinalizeDefaultLocation` with a <em>different</em> specified `location_id` will return a 409 error. <br> <br>The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. <br> <br>The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. <br> <br>All fields listed in the [request body](#request-body) are required. <br> <br>To call `FinalizeDefaultLocation`, a member must be an Owner of the project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.defaultLocation.finalize({
     *     // The resource name of the Project for which the default GCP resource
     *     // location will be set, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "locationId": "my_locationId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.defaultLocation.finalize
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The resource name of the Project for which the default GCP resource location will be set, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {().FinalizeDefaultLocationRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    finalize(
      params: Params$Resource$Projects$Defaultlocation$Finalize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    finalize(
      params?: Params$Resource$Projects$Defaultlocation$Finalize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    finalize(
      params: Params$Resource$Projects$Defaultlocation$Finalize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    finalize(
      params: Params$Resource$Projects$Defaultlocation$Finalize,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    finalize(
      params: Params$Resource$Projects$Defaultlocation$Finalize,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    finalize(callback: BodyResponseCallback<Schema$Operation>): void;
    finalize(
      paramsOrCallback?:
        | Params$Resource$Projects$Defaultlocation$Finalize
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
        {}) as Params$Resource$Projects$Defaultlocation$Finalize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Defaultlocation$Finalize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/defaultLocation:finalize'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Defaultlocation$Finalize
    extends StandardParameters {
    /**
     * The resource name of the Project for which the default GCP resource location will be set, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FinalizeDefaultLocationRequest;
  }

  export class Resource$Projects$Iosapps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebase.projects.iosApps.create
     * @desc Requests that a new IosApp be created. <br> <br>The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.iosApps.create({
     *     // The parent Project in which to create an App, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "appStoreId": "my_appStoreId",
     *       //   "bundleId": "my_bundleId",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.iosApps.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent Project in which to create an App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {().IosApp} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Iosapps$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Iosapps$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Iosapps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Iosapps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Iosapps$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Iosapps$Create
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
        {}) as Params$Resource$Projects$Iosapps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Iosapps$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/iosApps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * firebase.projects.iosApps.get
     * @desc Gets the IosApp identified by the specified resource name.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.iosApps.get({
     *     // The fully qualified resource name of the App, in the format:
     *     // <code>projects/<var>PROJECT_NUMBER</var>/iosApps/<var>APP_ID</var></code>
     *     // <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource
     *     // from Sub-Collection access pattern may be used here, in the format:
     *     // <br><code>projects/-/iosApps/<var>APP_ID</var></code>
     *     name: 'projects/my-project/iosApps/my-iosApp',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "appStoreId": "my_appStoreId",
     *   //   "bundleId": "my_bundleId",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "projectId": "my_projectId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.iosApps.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the App, in the format: <code>projects/<var>PROJECT_NUMBER</var>/iosApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/iosApps/<var>APP_ID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Iosapps$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Iosapps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IosApp>;
    get(
      params: Params$Resource$Projects$Iosapps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Iosapps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$IosApp>,
      callback: BodyResponseCallback<Schema$IosApp>
    ): void;
    get(
      params: Params$Resource$Projects$Iosapps$Get,
      callback: BodyResponseCallback<Schema$IosApp>
    ): void;
    get(callback: BodyResponseCallback<Schema$IosApp>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Iosapps$Get
        | BodyResponseCallback<Schema$IosApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IosApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IosApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IosApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Iosapps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Iosapps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IosApp>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$IosApp>(parameters);
      }
    }

    /**
     * firebase.projects.iosApps.getConfig
     * @desc Gets the configuration artifact associated with the specified IosApp.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.iosApps.getConfig({
     *     // The resource name of the App configuration to download, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/iosApps/<var>APP_ID</var>/config</code>
     *     // <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource
     *     // from Sub-Collection access pattern may be used here, in the format:
     *     // <br><code>projects/-/iosApps/<var>APP_ID</var></code>
     *     name: 'projects/my-project/iosApps/my-iosApp/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configFileContents": "my_configFileContents",
     *   //   "configFilename": "my_configFilename"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.iosApps.getConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the App configuration to download, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/iosApps/<var>APP_ID</var>/config</code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/iosApps/<var>APP_ID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(
      params: Params$Resource$Projects$Iosapps$Getconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getConfig(
      params?: Params$Resource$Projects$Iosapps$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IosAppConfig>;
    getConfig(
      params: Params$Resource$Projects$Iosapps$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Iosapps$Getconfig,
      options: MethodOptions | BodyResponseCallback<Schema$IosAppConfig>,
      callback: BodyResponseCallback<Schema$IosAppConfig>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Iosapps$Getconfig,
      callback: BodyResponseCallback<Schema$IosAppConfig>
    ): void;
    getConfig(callback: BodyResponseCallback<Schema$IosAppConfig>): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Iosapps$Getconfig
        | BodyResponseCallback<Schema$IosAppConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IosAppConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IosAppConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IosAppConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Iosapps$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Iosapps$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IosAppConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$IosAppConfig>(parameters);
      }
    }

    /**
     * firebase.projects.iosApps.list
     * @desc Lists each IosApp associated with the specified parent Project. <br> <br>The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.iosApps.list({
     *     // The maximum number of Apps to return in the response.
     *     // <br>
     *     // <br>The server may return fewer than this at its discretion.
     *     // If no value is specified (or too large a value is specified), the server
     *     // will impose its own limit.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to `ListIosApps` indicating where in
     *     // the set of Apps to resume listing.
     *     pageToken: 'placeholder-value',
     *     // The parent Project for which to list Apps, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apps": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.iosApps.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of Apps to return in the response. <br> <br>The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     * @param {string=} params.pageToken Token returned from a previous call to `ListIosApps` indicating where in the set of Apps to resume listing.
     * @param {string} params.parent The parent Project for which to list Apps, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Iosapps$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Iosapps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListIosAppsResponse>;
    list(
      params: Params$Resource$Projects$Iosapps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Iosapps$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListIosAppsResponse>,
      callback: BodyResponseCallback<Schema$ListIosAppsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Iosapps$List,
      callback: BodyResponseCallback<Schema$ListIosAppsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListIosAppsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Iosapps$List
        | BodyResponseCallback<Schema$ListIosAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListIosAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListIosAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListIosAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Iosapps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Iosapps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/iosApps').replace(
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
        createAPIRequest<Schema$ListIosAppsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListIosAppsResponse>(parameters);
      }
    }

    /**
     * firebase.projects.iosApps.patch
     * @desc Updates the attributes of the IosApp identified by the specified resource name.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.iosApps.patch({
     *     // The fully qualified resource name of the App, in the format:
     *     // <br><code>projects/<var>projectId</var>/iosApps/<var>appId</var></code>
     *     name: 'projects/my-project/iosApps/my-iosApp',
     *     // Specifies which fields to update.
     *     // <br>Note that the fields `name`, `appId`, `projectId`, and `bundleId`
     *     // are all immutable.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "appStoreId": "my_appStoreId",
     *       //   "bundleId": "my_bundleId",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "appStoreId": "my_appStoreId",
     *   //   "bundleId": "my_bundleId",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "projectId": "my_projectId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.iosApps.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the App, in the format: <br><code>projects/<var>projectId</var>/iosApps/<var>appId</var></code>
     * @param {string=} params.updateMask Specifies which fields to update. <br>Note that the fields `name`, `appId`, `projectId`, and `bundleId` are all immutable.
     * @param {().IosApp} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Iosapps$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Iosapps$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IosApp>;
    patch(
      params: Params$Resource$Projects$Iosapps$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Iosapps$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$IosApp>,
      callback: BodyResponseCallback<Schema$IosApp>
    ): void;
    patch(
      params: Params$Resource$Projects$Iosapps$Patch,
      callback: BodyResponseCallback<Schema$IosApp>
    ): void;
    patch(callback: BodyResponseCallback<Schema$IosApp>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Iosapps$Patch
        | BodyResponseCallback<Schema$IosApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IosApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IosApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$IosApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Iosapps$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Iosapps$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$IosApp>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$IosApp>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Iosapps$Create
    extends StandardParameters {
    /**
     * The parent Project in which to create an App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IosApp;
  }
  export interface Params$Resource$Projects$Iosapps$Get
    extends StandardParameters {
    /**
     * The fully qualified resource name of the App, in the format: <code>projects/<var>PROJECT_NUMBER</var>/iosApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/iosApps/<var>APP_ID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Iosapps$Getconfig
    extends StandardParameters {
    /**
     * The resource name of the App configuration to download, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/iosApps/<var>APP_ID</var>/config</code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/iosApps/<var>APP_ID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Iosapps$List
    extends StandardParameters {
    /**
     * The maximum number of Apps to return in the response. <br> <br>The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `ListIosApps` indicating where in the set of Apps to resume listing.
     */
    pageToken?: string;
    /**
     * The parent Project for which to list Apps, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Iosapps$Patch
    extends StandardParameters {
    /**
     * The fully qualified resource name of the App, in the format: <br><code>projects/<var>projectId</var>/iosApps/<var>appId</var></code>
     */
    name?: string;
    /**
     * Specifies which fields to update. <br>Note that the fields `name`, `appId`, `projectId`, and `bundleId` are all immutable.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IosApp;
  }

  export class Resource$Projects$Webapps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebase.projects.webApps.create
     * @desc Requests that a new WebApp be created. <br> <br>The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.webApps.create({
     *     // The parent Project in which to create an App, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "appUrls": [],
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.webApps.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent Project in which to create an App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {().WebApp} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Webapps$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Webapps$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Webapps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Webapps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Webapps$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Webapps$Create
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
        {}) as Params$Resource$Projects$Webapps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Webapps$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/webApps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * firebase.projects.webApps.get
     * @desc Gets the WebApp identified by the specified resource name.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.webApps.get({
     *     // The fully qualified resource name of the App, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/webApps/<var>APP_ID</var></code>
     *     // <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource
     *     // from Sub-Collection access pattern may be used here, in the format:
     *     // <br><code>projects/-/webApps/<var>APP_ID</var></code>
     *     name: 'projects/my-project/webApps/my-webApp',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "appUrls": [],
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "projectId": "my_projectId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.webApps.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/webApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/webApps/<var>APP_ID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Webapps$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Webapps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebApp>;
    get(
      params: Params$Resource$Projects$Webapps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Webapps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WebApp>,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    get(
      params: Params$Resource$Projects$Webapps$Get,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    get(callback: BodyResponseCallback<Schema$WebApp>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Webapps$Get
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WebApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Webapps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Webapps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebApp>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$WebApp>(parameters);
      }
    }

    /**
     * firebase.projects.webApps.getConfig
     * @desc Gets the configuration artifact associated with the specified WebApp.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.webApps.getConfig({
     *     // The resource name of the App configuration to download, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var>/webApps/<var>APP_ID</var>/config</code>
     *     // <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource
     *     // from Sub-Collection access pattern may be used here, in the format:
     *     // <br><code>projects/-/webApps/<var>APP_ID</var></code>
     *     name: 'projects/my-project/webApps/my-webApp/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiKey": "my_apiKey",
     *   //   "appId": "my_appId",
     *   //   "authDomain": "my_authDomain",
     *   //   "databaseURL": "my_databaseURL",
     *   //   "locationId": "my_locationId",
     *   //   "measurementId": "my_measurementId",
     *   //   "messagingSenderId": "my_messagingSenderId",
     *   //   "projectId": "my_projectId",
     *   //   "storageBucket": "my_storageBucket"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.webApps.getConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the App configuration to download, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/webApps/<var>APP_ID</var>/config</code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/webApps/<var>APP_ID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(
      params: Params$Resource$Projects$Webapps$Getconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getConfig(
      params?: Params$Resource$Projects$Webapps$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebAppConfig>;
    getConfig(
      params: Params$Resource$Projects$Webapps$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Webapps$Getconfig,
      options: MethodOptions | BodyResponseCallback<Schema$WebAppConfig>,
      callback: BodyResponseCallback<Schema$WebAppConfig>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Webapps$Getconfig,
      callback: BodyResponseCallback<Schema$WebAppConfig>
    ): void;
    getConfig(callback: BodyResponseCallback<Schema$WebAppConfig>): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Webapps$Getconfig
        | BodyResponseCallback<Schema$WebAppConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebAppConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebAppConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WebAppConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Webapps$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Webapps$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebAppConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$WebAppConfig>(parameters);
      }
    }

    /**
     * firebase.projects.webApps.list
     * @desc Lists each WebApp associated with the specified parent Project. <br> <br>The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebase.projects.webApps.list({
     *     // The maximum number of Apps to return in the response.
     *     // <br>
     *     // <br>The server may return fewer than this value at its discretion.
     *     // If no value is specified (or too large a value is specified), then the
     *     // server will impose its own limit.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to `ListWebApps` indicating where in
     *     // the set of Apps to resume listing.
     *     pageToken: 'placeholder-value',
     *     // The parent Project for which to list Apps, in the format:
     *     // <br><code>projects/<var>PROJECT_NUMBER</var></code>
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apps": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.webApps.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of Apps to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
     * @param {string=} params.pageToken Token returned from a previous call to `ListWebApps` indicating where in the set of Apps to resume listing.
     * @param {string} params.parent The parent Project for which to list Apps, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Webapps$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Webapps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWebAppsResponse>;
    list(
      params: Params$Resource$Projects$Webapps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Webapps$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListWebAppsResponse>,
      callback: BodyResponseCallback<Schema$ListWebAppsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Webapps$List,
      callback: BodyResponseCallback<Schema$ListWebAppsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWebAppsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Webapps$List
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWebAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Webapps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Webapps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/webApps').replace(
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
        createAPIRequest<Schema$ListWebAppsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListWebAppsResponse>(parameters);
      }
    }

    /**
     * firebase.projects.webApps.patch
     * @desc Updates the attributes of the WebApp identified by the specified resource name.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
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
     *   const res = await firebase.projects.webApps.patch({
     *     // The fully qualified resource name of the App, for example:
     *     // <br><code>projects/<var>projectId</var>/webApps/<var>appId</var></code>
     *     name: 'projects/my-project/webApps/my-webApp',
     *     // Specifies which fields to update.
     *     // <br>Note that the fields `name`, `appId`, and `projectId` are all
     *     // immutable.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "appUrls": [],
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "appUrls": [],
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "projectId": "my_projectId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebase.projects.webApps.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully qualified resource name of the App, for example: <br><code>projects/<var>projectId</var>/webApps/<var>appId</var></code>
     * @param {string=} params.updateMask Specifies which fields to update. <br>Note that the fields `name`, `appId`, and `projectId` are all immutable.
     * @param {().WebApp} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Webapps$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Webapps$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebApp>;
    patch(
      params: Params$Resource$Projects$Webapps$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Webapps$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$WebApp>,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    patch(
      params: Params$Resource$Projects$Webapps$Patch,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    patch(callback: BodyResponseCallback<Schema$WebApp>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Webapps$Patch
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WebApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Webapps$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Webapps$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firebase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WebApp>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$WebApp>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Webapps$Create
    extends StandardParameters {
    /**
     * The parent Project in which to create an App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebApp;
  }
  export interface Params$Resource$Projects$Webapps$Get
    extends StandardParameters {
    /**
     * The fully qualified resource name of the App, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/webApps/<var>APP_ID</var></code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/webApps/<var>APP_ID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Webapps$Getconfig
    extends StandardParameters {
    /**
     * The resource name of the App configuration to download, in the format: <br><code>projects/<var>PROJECT_NUMBER</var>/webApps/<var>APP_ID</var>/config</code> <br>As an <var>APP_ID</var> is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: <br><code>projects/-/webApps/<var>APP_ID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Webapps$List
    extends StandardParameters {
    /**
     * The maximum number of Apps to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `ListWebApps` indicating where in the set of Apps to resume listing.
     */
    pageToken?: string;
    /**
     * The parent Project for which to list Apps, in the format: <br><code>projects/<var>PROJECT_NUMBER</var></code>
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Webapps$Patch
    extends StandardParameters {
    /**
     * The fully qualified resource name of the App, for example: <br><code>projects/<var>projectId</var>/webApps/<var>appId</var></code>
     */
    name?: string;
    /**
     * Specifies which fields to update. <br>Note that the fields `name`, `appId`, and `projectId` are all immutable.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebApp;
  }
}
