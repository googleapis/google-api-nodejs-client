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

export namespace testing_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Cloud Testing API
   *
   * Allows developers to run automated tests for their mobile applications on
   * Google infrastructure.
   *
   * @example
   * const {google} = require('googleapis');
   * const testing = google.testing('v1');
   *
   * @namespace testing
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Testing
   */
  export class Testing {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    applicationDetailService: Resource$Applicationdetailservice;
    projects: Resource$Projects;
    testEnvironmentCatalog: Resource$Testenvironmentcatalog;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.applicationDetailService =
          new Resource$Applicationdetailservice(this);
      this.projects = new Resource$Projects(this);
      this.testEnvironmentCatalog = new Resource$Testenvironmentcatalog(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Identifies an account and how to log into it
   */
  export interface Schema$Account {
    /**
     * An automatic google login account
     */
    googleAuto?: Schema$GoogleAuto;
  }
  /**
   * A single Android device.
   */
  export interface Schema$AndroidDevice {
    /**
     * The id of the Android device to be used. Use the
     * EnvironmentDiscoveryService to get supported options. Required
     */
    androidModelId?: string;
    /**
     * The id of the Android OS version to be used. Use the
     * EnvironmentDiscoveryService to get supported options. Required
     */
    androidVersionId?: string;
    /**
     * The locale the test device used for testing. Use the
     * EnvironmentDiscoveryService to get supported options. Required
     */
    locale?: string;
    /**
     * How the device is oriented during the test. Use the
     * EnvironmentDiscoveryService to get supported options. Required
     */
    orientation?: string;
  }
  /**
   * The currently supported Android devices.
   */
  export interface Schema$AndroidDeviceCatalog {
    /**
     * The set of supported Android device models. @OutputOnly
     */
    models?: Schema$AndroidModel[];
    /**
     * The set of supported runtime configurations. @OutputOnly
     */
    runtimeConfiguration?: Schema$AndroidRuntimeConfiguration;
    /**
     * The set of supported Android OS versions. @OutputOnly
     */
    versions?: Schema$AndroidVersion[];
  }
  /**
   * A list of Android device configurations in which the test is to be
   * executed.
   */
  export interface Schema$AndroidDeviceList {
    /**
     * A list of Android devices Required
     */
    androidDevices?: Schema$AndroidDevice[];
  }
  /**
   * A test of an Android application that can control an Android component
   * independently of its normal lifecycle. Android instrumentation tests run an
   * application APK and test APK inside the same process on a virtual or
   * physical AndroidDevice.  They also specify a test runner class, such as
   * com.google.GoogleTestRunner, which can vary on the specific instrumentation
   * framework chosen.  See
   * &lt;http://developer.android.com/tools/testing/testing_android.html&gt; for
   * more information on types of Android tests.
   */
  export interface Schema$AndroidInstrumentationTest {
    /**
     * The APK for the application under test. Required
     */
    appApk?: Schema$FileReference;
    /**
     * The java package for the application under test. Optional, default is
     * determined by examining the application&#39;s manifest.
     */
    appPackageId?: string;
    /**
     * The option of whether running each test within its own invocation of
     * instrumentation with Android Test Orchestrator or not. ** Orchestrator is
     * only compatible with AndroidJUnitRunner version 1.0 or higher! **
     * Orchestrator offers the following benefits:  - No shared state  - Crashes
     * are isolated  - Logs are scoped per test  See
     * &lt;https://developer.android.com/training/testing/junit-runner.html#using-android-test-orchestrator&gt;
     * for more information about Android Test Orchestrator.  Optional, if
     * empty, test will be run without orchestrator.
     */
    orchestratorOption?: string;
    /**
     * The APK containing the test code to be executed. Required
     */
    testApk?: Schema$FileReference;
    /**
     * The java package for the test to be executed. Optional, default is
     * determined by examining the application&#39;s manifest.
     */
    testPackageId?: string;
    /**
     * The InstrumentationTestRunner class. Optional, default is determined by
     * examining the application&#39;s manifest.
     */
    testRunnerClass?: string;
    /**
     * Each target must be fully qualified with the package name or class name,
     * in one of these formats:  - &quot;package package_name&quot;  -
     * &quot;class package_name.class_name&quot;  - &quot;class
     * package_name.class_name#method_name&quot;  Optional, if empty, all
     * targets in the module will be run.
     */
    testTargets?: string[];
  }
  /**
   * A set of Android device configuration permutations is defined by the the
   * cross-product of the given axes.  Internally, the given AndroidMatrix will
   * be expanded into a set of AndroidDevices.  Only supported permutations will
   * be instantiated.  Invalid permutations (e.g., incompatible models/versions)
   * are ignored.
   */
  export interface Schema$AndroidMatrix {
    /**
     * The ids of the set of Android device to be used. Use the
     * EnvironmentDiscoveryService to get supported options. Required
     */
    androidModelIds?: string[];
    /**
     * The ids of the set of Android OS version to be used. Use the
     * EnvironmentDiscoveryService to get supported options. Required
     */
    androidVersionIds?: string[];
    /**
     * The set of locales the test device will enable for testing. Use the
     * EnvironmentDiscoveryService to get supported options. Required
     */
    locales?: string[];
    /**
     * The set of orientations to test with. Use the EnvironmentDiscoveryService
     * to get supported options. Required
     */
    orientations?: string[];
  }
  /**
   * A description of an Android device tests may be run on.
   */
  export interface Schema$AndroidModel {
    /**
     * The company that this device is branded with. Example:
     * &quot;Google&quot;, &quot;Samsung&quot; @OutputOnly
     */
    brand?: string;
    /**
     * The name of the industrial design. This corresponds to
     * android.os.Build.DEVICE @OutputOnly
     */
    codename?: string;
    /**
     * Whether this device is virtual or physical. @OutputOnly
     */
    form?: string;
    /**
     * The unique opaque id for this model. Use this for invoking the
     * TestExecutionService. @OutputOnly
     */
    id?: string;
    /**
     * The manufacturer of this device. @OutputOnly
     */
    manufacturer?: string;
    /**
     * The human-readable marketing name for this device model. Examples:
     * &quot;Nexus 5&quot;, &quot;Galaxy S5&quot; @OutputOnly
     */
    name?: string;
    /**
     * Screen density in DPI. This corresponds to ro.sf.lcd_density @OutputOnly
     */
    screenDensity?: number;
    /**
     * Screen size in the horizontal (X) dimension measured in pixels.
     * @OutputOnly
     */
    screenX?: number;
    /**
     * Screen size in the vertical (Y) dimension measured in pixels. @OutputOnly
     */
    screenY?: number;
    /**
     * The list of supported ABIs for this device. This corresponds to either
     * android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or
     * android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first
     * element in the list.  Elements are optionally prefixed by
     * &quot;version_id:&quot; (where version_id is the id of an
     * AndroidVersion), denoting an ABI that is supported only on a particular
     * version. @OutputOnly
     */
    supportedAbis?: string[];
    /**
     * The set of Android versions this device supports. @OutputOnly
     */
    supportedVersionIds?: string[];
    /**
     * Tags for this dimension. Examples: &quot;default&quot;,
     * &quot;preview&quot;, &quot;deprecated&quot;
     */
    tags?: string[];
    /**
     * True if and only if tests with this model DO NOT have video output. See
     * also TestSpecification.disable_video_recording @OutputOnly
     */
    videoRecordingNotSupported?: boolean;
  }
  /**
   * A test of an android application that explores the application on a virtual
   * or physical Android Device, finding culprits and crashes as it goes.
   */
  export interface Schema$AndroidRoboTest {
    /**
     * The APK for the application under test. Required
     */
    appApk?: Schema$FileReference;
    /**
     * The initial activity that should be used to start the app. Optional
     */
    appInitialActivity?: string;
    /**
     * The java package for the application under test. Optional, default is
     * determined by examining the application&#39;s manifest.
     */
    appPackageId?: string;
    /**
     * The max depth of the traversal stack Robo can explore. Needs to be at
     * least 2 to make Robo explore the app beyond the first activity. Default
     * is 50. Optional
     */
    maxDepth?: number;
    /**
     * The max number of steps Robo can execute. Default is no limit. Optional
     */
    maxSteps?: number;
    /**
     * A set of directives Robo should apply during the crawl. This allows users
     * to customize the crawl. For example, the username and password for a test
     * account can be provided. Optional
     */
    roboDirectives?: Schema$RoboDirective[];
    /**
     * A JSON file with a sequence of actions Robo should perform as a prologue
     * for the crawl. Optional
     */
    roboScript?: Schema$FileReference;
    /**
     * The intents used to launch the app for the crawl. If none are provided,
     * then the main launcher activity is launched. If some are provided, then
     * only those provided are launched (the main launcher activity must be
     * provided explicitly).
     */
    startingIntents?: Schema$RoboStartingIntent[];
  }
  /**
   * Configuration that can be selected at the time a test is run.
   */
  export interface Schema$AndroidRuntimeConfiguration {
    /**
     * The set of available locales. @OutputOnly
     */
    locales?: Schema$Locale[];
    /**
     * The set of available orientations. @OutputOnly
     */
    orientations?: Schema$Orientation[];
  }
  /**
   * A test of an Android Application with a Test Loop. The intent
   * &lt;intent-name&gt; will be implicitly added, since Games is the only user
   * of this api, for the time being.
   */
  export interface Schema$AndroidTestLoop {
    /**
     * The APK for the application under test. Required
     */
    appApk?: Schema$FileReference;
    /**
     * The java package for the application under test. Optional, default is
     * determined by examining the application&#39;s manifest.
     */
    appPackageId?: string;
    /**
     * The list of scenario labels that should be run during the test. The
     * scenario labels should map to labels defined in the application&#39;s
     * manifest. For example, player_experience and
     * com.google.test.loops.player_experience add all of the loops labeled in
     * the manifest with the com.google.test.loops.player_experience name to the
     * execution. Optional. Scenarios can also be specified in the scenarios
     * field.
     */
    scenarioLabels?: string[];
    /**
     * The list of scenarios that should be run during the test. Optional,
     * default is all test loops, derived from the application&#39;s manifest.
     */
    scenarios?: number[];
  }
  /**
   * A version of the Android OS
   */
  export interface Schema$AndroidVersion {
    /**
     * The API level for this Android version. Examples: 18, 19 @OutputOnly
     */
    apiLevel?: number;
    /**
     * The code name for this Android version. Examples: &quot;JellyBean&quot;,
     * &quot;KitKat&quot; @OutputOnly
     */
    codeName?: string;
    /**
     * Market share for this version. @OutputOnly
     */
    distribution?: Schema$Distribution;
    /**
     * An opaque id for this Android version. Use this id to invoke the
     * TestExecutionService. @OutputOnly
     */
    id?: string;
    /**
     * The date this Android version became available in the market. @OutputOnly
     */
    releaseDate?: Schema$Date;
    /**
     * Tags for this dimension. Examples: &quot;default&quot;,
     * &quot;preview&quot;, &quot;deprecated&quot;
     */
    tags?: string[];
    /**
     * A string representing this version of the Android OS. Examples:
     * &quot;4.3&quot;, &quot;4.4&quot; @OutputOnly
     */
    versionString?: string;
  }
  /**
   * An Android package file to install.
   */
  export interface Schema$Apk {
    /**
     * The path to an APK to be installed on the device before the test begins.
     * Optional
     */
    location?: Schema$FileReference;
    /**
     * The java package for the APK to be installed. Optional, value is
     * determined by examining the application&#39;s manifest.
     */
    packageName?: string;
  }
  /**
   * Android application details based on application manifest and apk archive
   * contents
   */
  export interface Schema$ApkDetail {
    apkManifest?: Schema$ApkManifest;
  }
  /**
   * An Android app manifest. See
   * http://developer.android.com/guide/topics/manifest/manifest-intro.html
   */
  export interface Schema$ApkManifest {
    /**
     * User-readable name for the application.
     */
    applicationLabel?: string;
    intentFilters?: Schema$IntentFilter[];
    /**
     * Maximum API level on which the application is designed to run.
     */
    maxSdkVersion?: number;
    /**
     * Minimum API level required for the application to run.
     */
    minSdkVersion?: number;
    /**
     * Full Java-style package name for this application, e.g.
     * &quot;com.example.foo&quot;.
     */
    packageName?: string;
  }
  /**
   * Response containing the current state of the specified test matrix.
   */
  export interface Schema$CancelTestMatrixResponse {
    /**
     * The current rolled-up state of the test matrix. If this state is already
     * final, then the cancelation request will have no effect.
     */
    testState?: string;
  }
  /**
   * Information about the client which invoked the test.
   */
  export interface Schema$ClientInfo {
    /**
     * The list of detailed information about client.
     */
    clientInfoDetails?: Schema$ClientInfoDetail[];
    /**
     * Client name, such as gcloud. Required
     */
    name?: string;
  }
  /**
   * Key-value pair of detailed information about the client which invoked the
   * test. For example {&#39;Version&#39;, &#39;1.0&#39;}, {&#39;Release
   * Track&#39;, &#39;BETA&#39;}
   */
  export interface Schema$ClientInfoDetail {
    /**
     * The key of detailed client information. Required
     */
    key?: string;
    /**
     * The value of detailed client information. Required
     */
    value?: string;
  }
  /**
   * Represents a whole calendar date, e.g. date of birth. The time of day and
   * time zone are either specified elsewhere or are not significant. The date
   * is relative to the Proleptic Gregorian Calendar. The day may be 0 to
   * represent a year and month where the day is not significant, e.g. credit
   * card expiration date. The year may be 0 to represent a month and day
   * independent of year, e.g. anniversary date. Related types are
   * google.type.TimeOfDay and `google.protobuf.Timestamp`.
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
   * A single device file description.
   */
  export interface Schema$DeviceFile {
    /**
     * A reference to an opaque binary blob file
     */
    obbFile?: Schema$ObbFile;
    /**
     * A reference to a regular file
     */
    regularFile?: Schema$RegularFile;
  }
  /**
   * Data about the relative number of devices running a given configuration of
   * the Android platform.
   */
  export interface Schema$Distribution {
    /**
     * The estimated fraction (0-1) of the total market with this configuration.
     * @OutputOnly
     */
    marketShare?: number;
    /**
     * The time this distribution was measured. @OutputOnly
     */
    measurementTime?: string;
  }
  /**
   * The environment in which the test is run.
   */
  export interface Schema$Environment {
    /**
     * An Android device which must be used with an Android test.
     */
    androidDevice?: Schema$AndroidDevice;
  }
  /**
   * The matrix of environments in which the test is to be executed.
   */
  export interface Schema$EnvironmentMatrix {
    /**
     * A list of Android devices; the test will be run only on the specified
     * devices.
     */
    androidDeviceList?: Schema$AndroidDeviceList;
    /**
     * A matrix of Android devices.
     */
    androidMatrix?: Schema$AndroidMatrix;
  }
  /**
   * A key-value pair passed as an environment variable to the test
   */
  export interface Schema$EnvironmentVariable {
    /**
     * Key for the environment variable
     */
    key?: string;
    /**
     * Value for the environment variable
     */
    value?: string;
  }
  /**
   * A reference to a file, used for user inputs.
   */
  export interface Schema$FileReference {
    /**
     * A path to a file in Google Cloud Storage. Example:
     * gs://build-app-1414623860166/app-debug-unaligned.apk
     */
    gcsPath?: string;
  }
  /**
   * Response containing the details of the specified Android application APK.
   */
  export interface Schema$GetApkDetailsResponse {
    /**
     * Details of the Android APK.
     */
    apkDetail?: Schema$ApkDetail;
  }
  /**
   * Enables automatic Google account login. If set, the service will
   * automatically generate a Google test account and add it to the device,
   * before executing the test. Note that test accounts might be reused. Many
   * applications show their full set of functionalities when an account is
   * present on the device. Logging into the device with these generated
   * accounts allows testing more functionalities.
   */
  export interface Schema$GoogleAuto {}
  /**
   * A storage location within Google cloud storage (GCS).
   */
  export interface Schema$GoogleCloudStorage {
    /**
     * The path to a directory in GCS that will eventually contain the results
     * for this test. The requesting user must have write access on the bucket
     * in the supplied path. Required
     */
    gcsPath?: string;
  }
  /**
   * The &lt;intent-filter&gt; section of an &lt;activity&gt; tag.
   * https://developer.android.com/guide/topics/manifest/intent-filter-element.html
   */
  export interface Schema$IntentFilter {
    /**
     * The android:name value of the &lt;action&gt; tag
     */
    actionNames?: string[];
    /**
     * The android:name value of the &lt;category&gt; tag
     */
    categoryNames?: string[];
    /**
     * The android:mimeType value of the &lt;data&gt; tag
     */
    mimeType?: string;
  }
  /**
   * Specifies an intent that starts the main launcher activity.
   */
  export interface Schema$LauncherActivityIntent {}
  /**
   * A location/region designation for language.
   */
  export interface Schema$Locale {
    /**
     * The id for this locale. Example: &quot;en_US&quot; @OutputOnly
     */
    id?: string;
    /**
     * A human-friendly name for this language/locale. Example:
     * &quot;English&quot; @OutputOnly
     */
    name?: string;
    /**
     * A human-friendly string representing the region for this locale. Example:
     * &quot;United States&quot; Not present for every locale. @OutputOnly
     */
    region?: string;
    /**
     * Tags for this dimension. Examples: &quot;default&quot;
     */
    tags?: string[];
  }
  export interface Schema$NetworkConfiguration {
    /**
     * The emulation rule applying to the download traffic
     */
    downRule?: Schema$TrafficRule;
    /**
     * The unique opaque id for this network traffic configuration @OutputOnly
     */
    id?: string;
    /**
     * The emulation rule applying to the upload traffic
     */
    upRule?: Schema$TrafficRule;
  }
  export interface Schema$NetworkConfigurationCatalog {
    configurations?: Schema$NetworkConfiguration[];
  }
  /**
   * An opaque binary blob file to install on the device before the test starts
   */
  export interface Schema$ObbFile {
    /**
     * Opaque Binary Blob (OBB) file(s) to install on the device Required
     */
    obb?: Schema$FileReference;
    /**
     * OBB file name which must conform to the format as specified by Android
     * e.g. [main|patch].0300110.com.example.android.obb which will be installed
     * into   &lt;shared-storage&gt;/Android/obb/&lt;package-name&gt;/ on the
     * device Required
     */
    obbFileName?: string;
  }
  /**
   * Screen orientation of the device.
   */
  export interface Schema$Orientation {
    /**
     * The id for this orientation. Example: &quot;portrait&quot; @OutputOnly
     */
    id?: string;
    /**
     * A human-friendly name for this orientation. Example: &quot;portrait&quot;
     * @OutputOnly
     */
    name?: string;
    /**
     * Tags for this dimension. Examples: &quot;default&quot;
     */
    tags?: string[];
  }
  /**
   * The currently provided software environment on the devices under test.
   */
  export interface Schema$ProvidedSoftwareCatalog {
    /**
     * A string representing the current version of Android Test Orchestrator
     * that is provided by TestExecutionService. Example: &quot;1.0.2 beta&quot;
     */
    orchestratorVersion?: string;
  }
  /**
   * A file or directory to install on the device before the test starts
   */
  export interface Schema$RegularFile {
    /**
     * Required
     */
    content?: Schema$FileReference;
    /**
     * Where to put the content on the device. Must be an absolute, whitelisted
     * path. If the file exists, it will be replaced. The following device-side
     * directories and any of their subdirectories are whitelisted:
     * &lt;p&gt;${EXTERNAL_STORAGE}, or /sdcard&lt;/p&gt;
     * &lt;p&gt;${ANDROID_DATA}/local/tmp, or /data/local/tmp&lt;/p&gt;
     * &lt;p&gt;Specifying a path outside of these directory trees is invalid.
     * &lt;p&gt; The paths /sdcard and /data will be made available and treated
     * as implicit path substitutions. E.g. if /sdcard on a particular device
     * does not map to external storage, the system will replace it with the
     * external storage path prefix for that device and copy the file there.
     * &lt;p&gt; It is strongly advised to use the &lt;a href=
     * &quot;http://developer.android.com/reference/android/os/Environment.html&quot;&gt;
     * Environment API&lt;/a&gt; in app and test code to access files on the
     * device in a portable way. Required
     */
    devicePath?: string;
  }
  /**
   * Locations where the results of running the test are stored.
   */
  export interface Schema$ResultStorage {
    /**
     * Required.
     */
    googleCloudStorage?: Schema$GoogleCloudStorage;
    /**
     * The tool results execution that results are written to. @OutputOnly
     */
    toolResultsExecution?: Schema$ToolResultsExecution;
    /**
     * The tool results history that contains the tool results execution that
     * results are written to.  Optional, if not provided the service will
     * choose an appropriate value.
     */
    toolResultsHistory?: Schema$ToolResultsHistory;
  }
  /**
   * Directs Robo to interact with a specific UI element if it is encountered
   * during the crawl. Currently, Robo can perform text entry or element click.
   */
  export interface Schema$RoboDirective {
    /**
     * The type of action that Robo should perform on the specified element.
     * Required.
     */
    actionType?: string;
    /**
     * The text that Robo is directed to set. If left empty, the directive will
     * be treated as a CLICK on the element matching the resource_name. Optional
     */
    inputText?: string;
    /**
     * The android resource name of the target UI element For example,    in
     * Java: R.string.foo    in xml: @string/foo Only the “foo” part is needed.
     * Reference doc:
     * https://developer.android.com/guide/topics/resources/accessing-resources.html
     * Required
     */
    resourceName?: string;
  }
  /**
   * Message for specifying the start activities to crawl
   */
  export interface Schema$RoboStartingIntent {
    launcherActivity?: Schema$LauncherActivityIntent;
    startActivity?: Schema$StartActivityIntent;
  }
  /**
   * A starting intent specified by an action, uri, and categories.
   */
  export interface Schema$StartActivityIntent {
    /**
     * Action name. Required for START_ACTIVITY.
     */
    action?: string;
    /**
     * Intent categories to set on the intent. Optional.
     */
    categories?: string[];
    /**
     * URI for the action. Optional.
     */
    uri?: string;
  }
  /**
   * Additional details about the progress of the running test.
   */
  export interface Schema$TestDetails {
    /**
     * If the TestState is ERROR, then this string will contain human-readable
     * details about the error. @OutputOnly
     */
    errorMessage?: string;
    /**
     * Human-readable, detailed descriptions of the test&#39;s progress. For
     * example: &quot;Provisioning a device&quot;, &quot;Starting Test&quot;.
     * During the course of execution new data may be appended to the end of
     * progress_messages. @OutputOnly
     */
    progressMessages?: string[];
    /**
     * Indicates that video will not be recorded for this execution either
     * because the user chose to disable it or the device does not support it.
     * See AndroidModel.video_recording_not_supported @OutputOnly
     */
    videoRecordingDisabled?: boolean;
  }
  /**
   * A description of a test environment.
   */
  export interface Schema$TestEnvironmentCatalog {
    /**
     * Android devices suitable for running Android Instrumentation Tests.
     */
    androidDeviceCatalog?: Schema$AndroidDeviceCatalog;
    /**
     * Supported network configurations
     */
    networkConfigurationCatalog?: Schema$NetworkConfigurationCatalog;
    /**
     * The software test environment provided by TestExecutionService.
     */
    softwareCatalog?: Schema$ProvidedSoftwareCatalog;
  }
  /**
   * Specifies a single test to be executed in a single environment.
   */
  export interface Schema$TestExecution {
    /**
     * How the host machine(s) are configured. @OutputOnly
     */
    environment?: Schema$Environment;
    /**
     * Unique id set by the backend. @OutputOnly
     */
    id?: string;
    /**
     * Id of the containing TestMatrix. @OutputOnly
     */
    matrixId?: string;
    /**
     * The cloud project that owns the test execution. @OutputOnly
     */
    projectId?: string;
    /**
     * Indicates the current progress of the test execution (e.g., FINISHED).
     * @OutputOnly
     */
    state?: string;
    /**
     * Additional details about the running test. @OutputOnly
     */
    testDetails?: Schema$TestDetails;
    /**
     * How to run the test. @OutputOnly
     */
    testSpecification?: Schema$TestSpecification;
    /**
     * The time this test execution was initially created. @OutputOnly
     */
    timestamp?: string;
    /**
     * Where the results for this execution are written. @OutputOnly
     */
    toolResultsStep?: Schema$ToolResultsStep;
  }
  /**
   * A group of one or more TestExecutions, built by taking a product of values
   * over a pre-defined set of axes.
   */
  export interface Schema$TestMatrix {
    /**
     * Information about the client which invoked the test. Optional
     */
    clientInfo?: Schema$ClientInfo;
    /**
     * How the host machine(s) are configured. Required
     */
    environmentMatrix?: Schema$EnvironmentMatrix;
    /**
     * Describes why the matrix is considered invalid. Only useful for matrices
     * in the INVALID state. @OutputOnly
     */
    invalidMatrixDetails?: string;
    /**
     * The cloud project that owns the test matrix. @OutputOnly
     */
    projectId?: string;
    /**
     * Where the results for the matrix are written. Required
     */
    resultStorage?: Schema$ResultStorage;
    /**
     * Indicates the current progress of the test matrix (e.g., FINISHED)
     * @OutputOnly
     */
    state?: string;
    /**
     * The list of test executions that the service creates for this matrix.
     * @OutputOnly
     */
    testExecutions?: Schema$TestExecution[];
    /**
     * Unique id set by the service. @OutputOnly
     */
    testMatrixId?: string;
    /**
     * How to run the test. Required
     */
    testSpecification?: Schema$TestSpecification;
    /**
     * The time this test matrix was initially created. @OutputOnly
     */
    timestamp?: string;
  }
  /**
   * A description of how to set up the Android device prior to running the
   * test.
   */
  export interface Schema$TestSetup {
    /**
     * The device will be logged in on this account for the duration of the
     * test. Optional
     */
    account?: Schema$Account;
    /**
     * APKs to install in addition to those being directly tested. Currently
     * capped at 100. Optional
     */
    additionalApks?: Schema$Apk[];
    /**
     * List of directories on the device to upload to GCS at the end of the
     * test; they must be absolute paths under /sdcard or /data/local/tmp. Path
     * names are restricted to characters a-z A-Z 0-9 _ - . + and /  Note: The
     * paths /sdcard and /data will be made available and treated as implicit
     * path substitutions. E.g. if /sdcard on a particular device does not map
     * to external storage, the system will replace it with the external storage
     * path prefix for that device.  Optional
     */
    directoriesToPull?: string[];
    /**
     * Environment variables to set for the test (only applicable for
     * instrumentation tests).
     */
    environmentVariables?: Schema$EnvironmentVariable[];
    /**
     * List of files to push to the device before starting the test.  Optional
     */
    filesToPush?: Schema$DeviceFile[];
    /**
     * The network traffic profile used for running the test. Optional
     */
    networkProfile?: string;
  }
  /**
   * A description of how to run the test.
   */
  export interface Schema$TestSpecification {
    /**
     * An Android instrumentation test.
     */
    androidInstrumentationTest?: Schema$AndroidInstrumentationTest;
    /**
     * An Android robo test.
     */
    androidRoboTest?: Schema$AndroidRoboTest;
    /**
     * An Android Application with a Test Loop
     */
    androidTestLoop?: Schema$AndroidTestLoop;
    /**
     * Enables automatic Google account login. If set, the service will
     * automatically generate a Google test account and add it to the device,
     * before executing the test. Note that test accounts might be reused. Many
     * applications show their full set of functionalities when an account is
     * present on the device. Logging into the device with these generated
     * accounts allows testing more functionalities. Default is false. Optional
     */
    autoGoogleLogin?: boolean;
    /**
     * Disables performance metrics recording; may reduce test latency.
     */
    disablePerformanceMetrics?: boolean;
    /**
     * Disables video recording; may reduce test latency.
     */
    disableVideoRecording?: boolean;
    /**
     * Test setup requirements for Android e.g. files to install, bootstrap
     * scripts. Optional
     */
    testSetup?: Schema$TestSetup;
    /**
     * Max time a test execution is allowed to run before it is automatically
     * cancelled. Optional, default is 5 min.
     */
    testTimeout?: string;
  }
  /**
   * Represents a tool results execution resource.  This has the results of a
   * TestMatrix.
   */
  export interface Schema$ToolResultsExecution {
    /**
     * A tool results execution ID. @OutputOnly
     */
    executionId?: string;
    /**
     * A tool results history ID. @OutputOnly
     */
    historyId?: string;
    /**
     * The cloud project that owns the tool results execution. @OutputOnly
     */
    projectId?: string;
  }
  /**
   * Represents a tool results history resource.
   */
  export interface Schema$ToolResultsHistory {
    /**
     * A tool results history ID. Required
     */
    historyId?: string;
    /**
     * The cloud project that owns the tool results history. Required
     */
    projectId?: string;
  }
  /**
   * Represents a tool results step resource.  This has the results of a
   * TestExecution.
   */
  export interface Schema$ToolResultsStep {
    /**
     * A tool results execution ID. @OutputOnly
     */
    executionId?: string;
    /**
     * A tool results history ID. @OutputOnly
     */
    historyId?: string;
    /**
     * The cloud project that owns the tool results step. @OutputOnly
     */
    projectId?: string;
    /**
     * A tool results step ID. @OutputOnly
     */
    stepId?: string;
  }
  /**
   * Network emulation parameters
   */
  export interface Schema$TrafficRule {
    /**
     * Bandwidth in kbits/second
     */
    bandwidth?: number;
    /**
     * Burst size in kbits
     */
    burst?: number;
    /**
     * Packet delay, must be &gt;= 0
     */
    delay?: string;
    /**
     * Packet duplication ratio (0.0 - 1.0)
     */
    packetDuplicationRatio?: number;
    /**
     * Packet loss ratio (0.0 - 1.0)
     */
    packetLossRatio?: number;
  }


  export class Resource$Applicationdetailservice {
    root: Testing;
    constructor(root: Testing) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * testing.applicationDetailService.getApkDetails
     * @desc Request the details of an Android application APK.
     * @alias testing.applicationDetailService.getApkDetails
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().FileReference} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getApkDetails(
        params?: Params$Resource$Applicationdetailservice$Getapkdetails,
        options?: MethodOptions): AxiosPromise<Schema$GetApkDetailsResponse>;
    getApkDetails(
        params: Params$Resource$Applicationdetailservice$Getapkdetails,
        options: MethodOptions|
        BodyResponseCallback<Schema$GetApkDetailsResponse>,
        callback: BodyResponseCallback<Schema$GetApkDetailsResponse>): void;
    getApkDetails(
        params: Params$Resource$Applicationdetailservice$Getapkdetails,
        callback: BodyResponseCallback<Schema$GetApkDetailsResponse>): void;
    getApkDetails(callback: BodyResponseCallback<Schema$GetApkDetailsResponse>):
        void;
    getApkDetails(
        paramsOrCallback?:
            Params$Resource$Applicationdetailservice$Getapkdetails|
        BodyResponseCallback<Schema$GetApkDetailsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GetApkDetailsResponse>,
        callback?: BodyResponseCallback<Schema$GetApkDetailsResponse>):
        void|AxiosPromise<Schema$GetApkDetailsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Applicationdetailservice$Getapkdetails;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applicationdetailservice$Getapkdetails;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/applicationDetailService/getApkDetails')
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
        createAPIRequest<Schema$GetApkDetailsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetApkDetailsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Applicationdetailservice$Getapkdetails {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$FileReference;
  }


  export class Resource$Projects {
    root: Testing;
    testMatrices: Resource$Projects$Testmatrices;
    constructor(root: Testing) {
      this.root = root;
      this.getRoot.bind(this);
      this.testMatrices = new Resource$Projects$Testmatrices(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Testmatrices {
    root: Testing;
    constructor(root: Testing) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * testing.projects.testMatrices.cancel
     * @desc Cancels unfinished test executions in a test matrix. This call
     * returns immediately and cancellation proceeds asychronously. If the
     * matrix is already final, this operation will have no effect.  May return
     * any of the following canonical error codes:  - PERMISSION_DENIED - if the
     * user is not authorized to read project - INVALID_ARGUMENT - if the
     * request is malformed - NOT_FOUND - if the Test Matrix does not exist
     * @alias testing.projects.testMatrices.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Cloud project that owns the test.
     * @param {string} params.testMatrixId Test matrix that will be canceled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
        params?: Params$Resource$Projects$Testmatrices$Cancel,
        options?: MethodOptions): AxiosPromise<Schema$CancelTestMatrixResponse>;
    cancel(
        params: Params$Resource$Projects$Testmatrices$Cancel,
        options: MethodOptions|
        BodyResponseCallback<Schema$CancelTestMatrixResponse>,
        callback: BodyResponseCallback<Schema$CancelTestMatrixResponse>): void;
    cancel(
        params: Params$Resource$Projects$Testmatrices$Cancel,
        callback: BodyResponseCallback<Schema$CancelTestMatrixResponse>): void;
    cancel(callback: BodyResponseCallback<Schema$CancelTestMatrixResponse>):
        void;
    cancel(
        paramsOrCallback?: Params$Resource$Projects$Testmatrices$Cancel|
        BodyResponseCallback<Schema$CancelTestMatrixResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CancelTestMatrixResponse>,
        callback?: BodyResponseCallback<Schema$CancelTestMatrixResponse>):
        void|AxiosPromise<Schema$CancelTestMatrixResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Testmatrices$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testmatrices$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId', 'testMatrixId'],
        pathParams: ['projectId', 'testMatrixId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CancelTestMatrixResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CancelTestMatrixResponse>(parameters);
      }
    }


    /**
     * testing.projects.testMatrices.create
     * @desc Request to run a matrix of tests according to the given
     * specifications. Unsupported environments will be returned in the state
     * UNSUPPORTED. Matrices are limited to at most 200 supported executions.
     * May return any of the following canonical error codes:  -
     * PERMISSION_DENIED - if the user is not authorized to write to project -
     * INVALID_ARGUMENT - if the request is malformed or if the matrix expands
     * to more than 200 supported executions
     * @alias testing.projects.testMatrices.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The GCE project under which this job will run.
     * @param {string=} params.requestId A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended.  Optional, but strongly recommended.
     * @param {().TestMatrix} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Testmatrices$Create,
        options?: MethodOptions): AxiosPromise<Schema$TestMatrix>;
    create(
        params: Params$Resource$Projects$Testmatrices$Create,
        options: MethodOptions|BodyResponseCallback<Schema$TestMatrix>,
        callback: BodyResponseCallback<Schema$TestMatrix>): void;
    create(
        params: Params$Resource$Projects$Testmatrices$Create,
        callback: BodyResponseCallback<Schema$TestMatrix>): void;
    create(callback: BodyResponseCallback<Schema$TestMatrix>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Testmatrices$Create|
        BodyResponseCallback<Schema$TestMatrix>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestMatrix>,
        callback?: BodyResponseCallback<Schema$TestMatrix>):
        void|AxiosPromise<Schema$TestMatrix> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Testmatrices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testmatrices$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{projectId}/testMatrices')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TestMatrix>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TestMatrix>(parameters);
      }
    }


    /**
     * testing.projects.testMatrices.get
     * @desc Check the status of a test matrix.  May return any of the following
     * canonical error codes:  - PERMISSION_DENIED - if the user is not
     * authorized to read project - INVALID_ARGUMENT - if the request is
     * malformed - NOT_FOUND - if the Test Matrix does not exist
     * @alias testing.projects.testMatrices.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Cloud project that owns the test matrix.
     * @param {string} params.testMatrixId Unique test matrix id which was assigned by the service.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Testmatrices$Get,
        options?: MethodOptions): AxiosPromise<Schema$TestMatrix>;
    get(params: Params$Resource$Projects$Testmatrices$Get,
        options: MethodOptions|BodyResponseCallback<Schema$TestMatrix>,
        callback: BodyResponseCallback<Schema$TestMatrix>): void;
    get(params: Params$Resource$Projects$Testmatrices$Get,
        callback: BodyResponseCallback<Schema$TestMatrix>): void;
    get(callback: BodyResponseCallback<Schema$TestMatrix>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Testmatrices$Get|
        BodyResponseCallback<Schema$TestMatrix>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestMatrix>,
        callback?: BodyResponseCallback<Schema$TestMatrix>):
        void|AxiosPromise<Schema$TestMatrix> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Testmatrices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testmatrices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/projects/{projectId}/testMatrices/{testMatrixId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['projectId', 'testMatrixId'],
        pathParams: ['projectId', 'testMatrixId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TestMatrix>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TestMatrix>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Testmatrices$Cancel {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud project that owns the test.
     */
    projectId?: string;
    /**
     * Test matrix that will be canceled.
     */
    testMatrixId?: string;
  }
  export interface Params$Resource$Projects$Testmatrices$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The GCE project under which this job will run.
     */
    projectId?: string;
    /**
     * A string id used to detect duplicated requests. Ids are automatically
     * scoped to a project, so users should ensure the ID is unique per-project.
     * A UUID is recommended.  Optional, but strongly recommended.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestMatrix;
  }
  export interface Params$Resource$Projects$Testmatrices$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud project that owns the test matrix.
     */
    projectId?: string;
    /**
     * Unique test matrix id which was assigned by the service.
     */
    testMatrixId?: string;
  }



  export class Resource$Testenvironmentcatalog {
    root: Testing;
    constructor(root: Testing) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * testing.testEnvironmentCatalog.get
     * @desc Get the catalog of supported test environments.  May return any of
     * the following canonical error codes:  - INVALID_ARGUMENT - if the request
     * is malformed - NOT_FOUND - if the environment type does not exist -
     * INTERNAL - if an internal error occurred
     * @alias testing.testEnvironmentCatalog.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.environmentType The type of environment that should be listed. Required
     * @param {string=} params.projectId For authorization, the cloud project requesting the TestEnvironmentCatalog. Optional
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Testenvironmentcatalog$Get,
        options?: MethodOptions): AxiosPromise<Schema$TestEnvironmentCatalog>;
    get(params: Params$Resource$Testenvironmentcatalog$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestEnvironmentCatalog>,
        callback: BodyResponseCallback<Schema$TestEnvironmentCatalog>): void;
    get(params: Params$Resource$Testenvironmentcatalog$Get,
        callback: BodyResponseCallback<Schema$TestEnvironmentCatalog>): void;
    get(callback: BodyResponseCallback<Schema$TestEnvironmentCatalog>): void;
    get(paramsOrCallback?: Params$Resource$Testenvironmentcatalog$Get|
        BodyResponseCallback<Schema$TestEnvironmentCatalog>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestEnvironmentCatalog>,
        callback?: BodyResponseCallback<Schema$TestEnvironmentCatalog>):
        void|AxiosPromise<Schema$TestEnvironmentCatalog> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Testenvironmentcatalog$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Testenvironmentcatalog$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/testEnvironmentCatalog/{environmentType}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['environmentType'],
        pathParams: ['environmentType'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TestEnvironmentCatalog>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TestEnvironmentCatalog>(parameters);
      }
    }
  }

  export interface Params$Resource$Testenvironmentcatalog$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The type of environment that should be listed. Required
     */
    environmentType?: string;
    /**
     * For authorization, the cloud project requesting the
     * TestEnvironmentCatalog. Optional
     */
    projectId?: string;
  }
}
