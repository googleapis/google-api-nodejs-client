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

export namespace devicerun_v1alpha {
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
   * Device Run API
   *
   * The Device Run API allows management, scheduling, and execution of automated sessions and workloads across device catalogs.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const devicerun = google.devicerun('v1alpha');
   * ```
   */
  export class Devicerun {
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
   * Allocation config.
   */
  export interface Schema$AllocationConfig {
    /**
     * Required. At least one device config is required. If more than one device config is required, the multiple devices are allocated to each shard of the OmniLab job to run multi-device-interaction tests.
     */
    deviceConfigs?: Schema$DeviceConfig[];
  }
  /**
   * Captures a bugreport from the device. The output will be written to a file named `bugreport.zip` in the execution output directory.
   */
  export interface Schema$AndroidBugreportDeviceAction {
    /**
     * Optional. Whether to deliver the bugreport when the test passes. If false, the bugreport is skipped on pass to save time (default behavior). If true, the bugreport is always delivered.
     */
    collectOnPass?: boolean | null;
  }
  /**
   * Captures dumpsys output from the device. The output will be written to a file named `dumpsys.log` in the execution output directory.
   */
  export interface Schema$AndroidDumpsysDeviceAction {
    /**
     * Optional. Whether to deliver the dumpsys when the test passes. If false, the dumpsys is skipped on pass to save time (default behavior). If true, the dumpsys is always delivered.
     */
    collectOnPass?: boolean | null;
  }
  /**
   * An Android Installable represents the file(s) for installing an Android package on a device. This can be an APK, an Android App Bundle (AAB), or an APK Set.
   */
  export interface Schema$AndroidInstallable {
    /**
     * Required. Files that make up the package. Supported formats are distinguished by their file extension: - APK: One or more files with extension `.apk`. - App Bundle: A single file with extension `.aab`. - APK Set: A single file with extension `.apks`.
     */
    files?: Schema$InputFile[];
  }
  /**
   * Installs Android packages on the device. At least one installable is specified when using this device action. Limits: - A maximum of 20 installables in total are allowed. - A maximum of 100 files are allowed in total across all installables.
   */
  export interface Schema$AndroidInstallPackagesDeviceAction {
    /**
     * Optional. Deprecated: use `pre_target_app_installables`, `target_app` and `post_target_app_installables` instead. The Android packages to install on the device. The installation will be performed in the order specified, before the installables of all other fields.
     */
    installables?: Schema$AndroidInstallable[];
    /**
     * Optional. The Android packages to install on the device after `target_app` (if specified) is installed. The installation will be performed in the order specified.
     */
    postTargetAppInstallables?: Schema$AndroidInstallable[];
    /**
     * Optional. The Android packages to install on the device before `target_app` (if specified) is installed. The installation will be performed in the order specified.
     */
    preTargetAppInstallables?: Schema$AndroidInstallable[];
    /**
     * Optional. The primary Android package to install, serving as the target package for subsequent actions and as the installation ordering anchor. Whether this package is treated as the application under test depends on the job action: - Actions that require an explicit target package (such as performance metrics collection, or accessibility scans) use this package to identify the application to inspect or drive. - Actions that discover or manage targets independently (such as Android instrumentation tests, where target packages are defined in the test runner manifest) treat this field primarily as an installation order anchor between pre- and post-installables. Optional. If omitted, all packages in `pre_target_app_installables` and `post_target_app_installables` are installed without a designated target package.
     */
    targetApp?: Schema$AndroidInstallable;
  }
  /**
   * The configuration of an Android instrumentation test. See https://developer.android.com/training/testing/instrumented-tests for more information on Android instrumentation tests.
   */
  export interface Schema$AndroidInstrumentationTest {
    /**
     * Optional. Additional test options to pass to the test runner. Passed to `am instrument` command as `-e` options, which will be passed to the instrumentation test runner using its `onCreate()` method. Formats supported in test_targets are not allowed to be used here. Limits: - Maximum number of entries: 32. - Maximum key size: 64 bytes (UTF-8). - Maximum value size: 1024 bytes (UTF-8).
     */
    additionalTestOptions?: {[key: string]: string} | null;
    /**
     * Optional. Whether to enable code coverage collection for the test. A coverage file `coverage.ec` will be uploaded to the results folder. For this to work, your classes have to be instrumented offline (build time) by EMMA/JaCoCo.
     */
    enableCodeCoverage?: boolean | null;
    /**
     * Optional. The timeout of the instrumentation test. Default value: 5 min. Range: [1 min, 3 hours].
     */
    instrumentationTimeout?: string | null;
    /**
     * Optional. The version of the Android Test Orchestrator to use for the test. The available orchestrator versions can be retrieved from the catalog service. If set to "auto", the default orchestrator is used. If not set, no orchestrator is used.
     */
    orchestratorVersion?: string | null;
    /**
     * Optional. Smart sharding strategy to split the job into multiple shards based on the test methods and their execution time.
     */
    smartSharding?: Schema$AndroidInstrumentationTestSmartSharding;
    /**
     * Required. The test package to install and run the test.
     */
    testInstallable?: Schema$AndroidInstallable;
    /**
     * Optional. Full class name of the test runner class. The class must be `androidx.test.runner.AndroidJUnitRunner` or a subclass of it. The default value is determined by examining the application's manifest. If multiple instrumentations are found, the first one in the manifest will be used.
     */
    testRunnerClass?: string | null;
    /**
     * Optional. A list of test targets or target filters to run. Each target must be fully qualified with the package name or class name, in one of these formats: - `package package_name` - `notPackage com.package.to.skip` - `class package_name.class_name` - `class package_name.class_name#method_name` - `notClass com.foo.ClassToSkip` - `notClass com.foo.ClassName#testMethodToSkip` - `annotation com.foo.AnnotationToRun` - `notAnnotation com.foo.AnnotationToSkip` - `size [small|medium|large]` Formats like `testfile` or `notTestfile` won't be supported. If empty, all targets in the module will be run. Limits: - Maximum number of entries: 1024.
     */
    testTargets?: string[] | null;
    /**
     * Optional. Uniform sharding strategy to split the job into multiple shards with equal number of test methods.
     */
    uniformSharding?: Schema$AndroidInstrumentationTestUniformSharding;
  }
  /**
   * The smart sharding strategy to split the job into multiple shards based on the test methods and their recorded execution time.
   */
  export interface Schema$AndroidInstrumentationTestSmartSharding {
    /**
     * Optional. The maximum number of shards to create. If unset or less than 1, system-defined max limits are used. This limit takes precedence if the targeted_shard_duration cannot be satisfied. Limits: - For physical devices, the number of shards must be <= 20. - For virtual devices, the number of shards must be <= 200.
     */
    maxShardCount?: number | null;
    /**
     * Required. The targeted duration of each shard. Limits: - Must be at least 2 minutes. - Must be at most 3 hours. Shard duration is not guaranteed because smart sharding uses test case history and default durations which may not be accurate. Durations are calculated based on the following inputs: - Timing records from previous runs of the same test case. - For new test cases, the average duration of other known test cases. - A system-chosen, default duration if there are no previous timing records available. Because the actual shard duration can exceed the targeted shard duration, we recommend that you set the targeted value at least 5 minutes less than the maximum allowed instrumentation timeout. This approach avoids cancelling the shard before all tests can finish.
     */
    targetedShardDuration?: string | null;
    /**
     * Required. The timing record file to use for smart sharding. If the file does not exist, smart sharding will use default test time (30s) for each test method to shard the job into multiple shards. This file will be overwritten with the latest timing record after the job is completed.
     */
    timingRecord?: Schema$InputFile;
  }
  /**
   * Uniformly shards test cases given a total number of shards. It will be translated to `-e numShard` and `-e shardIndex` AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards.
   */
  export interface Schema$AndroidInstrumentationTestUniformSharding {
    /**
     * Required. The total number of shards to create. This must always be a positive number that is no greater than the total number of test cases. Limits: - For physical devices, the number of shards must be <= 20. - For virtual devices, the number of shards must be <= 200.
     */
    shardCount?: number | null;
  }
  /**
   * Collects logcat output from the device. The output will be written to a file named `logcat.txt` in the execution output directory.
   */
  export interface Schema$AndroidLogcatDeviceAction {}
  /**
   * Mocks the location of the Android device.
   */
  export interface Schema$AndroidMockLocationDeviceAction {
    /**
     * Required. The mock location to set on the device.
     */
    location?: Schema$LatLng;
  }
  /**
   * The configuration of an Android native binary execution.
   */
  export interface Schema$AndroidNativeBinary {
    /**
     * Required. The file path of the Android native binary.
     */
    androidNativeBinary?: Schema$InputFile;
    /**
     * Optional. Arguments for running the binary file. The flags will be appended to the command line that invokes the binary. The number of options is limited to 100.
     */
    args?: string[] | null;
    /**
     * Optional. A map of environment variables to set for the binary process. The keys are the variable names and the values are the variable values. The maximum number of entries is 100. Each key is limited to 128 characters and must conform to POSIX standards. Each value is limited to 2048 characters. The total size of all environment variables must not exceed 16 KiB.
     */
    envVars?: {[key: string]: string} | null;
    /**
     * Optional. The timeout of the execution. Default value: 5 min. Range: [1 min, 3 hours].
     */
    executionTimeout?: string | null;
  }
  /**
   * Sets the orientation of the device.
   */
  export interface Schema$AndroidOrientationDeviceAction {
    /**
     * Required. The orientation to set the device to. One of `portrait` or `landscape`.
     */
    orientation?: string | null;
  }
  /**
   * Pulls directories and files from the device at the end of the run. Files will be copied to the '/artifacts' directory, with the absolute path structure preserved. Note that: 1. A clean device is provided for the run. 2. Any existing files in the output directory may be overwritten. 3. Pulling files is best effort. Will skip files if they don't exist on the device.
   */
  export interface Schema$AndroidPullFilesDeviceAction {
    /**
     * Required. Absolute directory or file paths to pull from the device. Limits: - A maximum of 10 paths are allowed.
     */
    paths?: string[] | null;
  }
  /**
   * Pushes files to the device at the beginning of the run. Files are overwritten if a file with the same path already exists on the device, if device permissions allow.
   */
  export interface Schema$AndroidPushFilesDeviceAction {
    /**
     * Required. Configs of pushing files to the device. Limits: - A maximum of 50 files are allowed.
     */
    fileConfigs?: Schema$AndroidPushFilesDeviceActionFileConfig[];
  }
  /**
   * The configuration of pushing a file to the device.
   */
  export interface Schema$AndroidPushFilesDeviceActionFileConfig {
    /**
     * Required. The destination path on the device.
     */
    destinationPath?: string | null;
    /**
     * Required. The file to be pushed to the device.
     */
    sourceFile?: Schema$InputFile;
  }
  /**
   * Records a video of the device screen during the run. The video will be written to a file named `video.mp4` in the execution output directory.
   */
  export interface Schema$AndroidRecordVideoDeviceAction {
    /**
     * Optional. Whether to discard and not upload the recording when the test passes. Default is false.
     */
    discardOnPass?: boolean | null;
  }
  /**
   * Switches the locale (language and region) of the device.
   */
  export interface Schema$AndroidSwitchLocaleDeviceAction {
    /**
     * Required. The locale (language and region) to switch the device to. The format is `language-region`, e.g. "en-US", "zh-CN", etc. The typical language value is a two or three-letter language code as defined in ISO639. The typical region value is a two-letter ISO 3166 code or a three-digit UN M.49 area code.
     */
    localeCode?: string | null;
  }
  /**
   * Request to cancel a session.
   */
  export interface Schema$CancelSessionRequest {}
  /**
   * Response of the cancel session request.
   */
  export interface Schema$CancelSessionResponse {
    /**
     * The result of the request.
     */
    cancelResult?: string | null;
  }
  /**
   * Android-specific device attributes.
   */
  export interface Schema$CatalogAndroidDeviceDetails {
    /**
     * Output only. Mirrors the AOSP `ro.build.type` property, e.g. "user", "userdebug", "eng". Empty if unknown.
     */
    buildType?: string | null;
    /**
     * Output only. Lists ABIs supported by the device (android.os.Build.SUPPORTED_ABIS), most preferred first, e.g. "arm64-v8a".
     */
    supportedAbis?: string[] | null;
  }
  /**
   * AndroidX Test Orchestrator-specific attributes. Reserved for future orchestrator-only fields.
   */
  export interface Schema$CatalogAndroidxTestOrchestratorDetails {}
  /**
   * Per-product metadata for the Automation (DeviceRun) product.
   */
  export interface Schema$CatalogAutomationSupport {}
  /**
   * A single routable device configuration in the catalog.
   */
  export interface Schema$CatalogDevice {
    /**
     * Output only. Reasons for access denial. This model is accessible/usable if this list is empty, otherwise the model is viewable only.
     */
    accessDeniedReasons?: string[] | null;
    /**
     * Output only. Contains Android-specific attributes (set when platform == ANDROID).
     */
    androidDetails?: Schema$CatalogAndroidDeviceDetails;
    /**
     * Output only. Reports the current fleet availability for this device configuration.
     */
    availability?: Schema$CatalogDeviceAvailability;
    /**
     * Output only. Provides a human-readable display name, e.g. "Pixel 5".
     */
    displayName?: string | null;
    /**
     * Output only. Specifies the form factor of the device.
     */
    formFactor?: string | null;
    /**
     * Output only. Indicates whether the device is physical or virtual.
     */
    hardwareType?: string | null;
    /**
     * Output only. Contains iOS-specific attributes (set when platform == IOS).
     */
    iosDetails?: Schema$CatalogIosDeviceDetails;
    /**
     * Output only. Additional information. Informational only. May change over the lifecycle of a device.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The lab hosting this device.
     */
    labInfo?: Schema$CatalogLabInfo;
    /**
     * Output only. The device lifecycle (maturity stage and removal date).
     */
    lifecycle?: Schema$CatalogLifecycle;
    /**
     * Output only. Specifies the hardware manufacturer of the device.
     */
    manufacturer?: string | null;
    /**
     * Output only. Provides a human-readable model identifier for this device, independent of OS version. May be empty. Platform-dependent: * Android physical: hardware codename (android.os.Build.DEVICE), e.g. "shiba". * Android virtual: AVD model identifier, e.g. "MediumPhone.arm". * iOS: model identifier, e.g. "iphone14pro".
     */
    modelCode?: string | null;
    /**
     * Identifier. Identifies the device resource. Format: `projects/{project\}/locations/{location\}/devices/{device\}`. The {device\} segment is an opaque, stable string. Clients must not parse it to derive or assume device-specific details.
     */
    name?: string | null;
    /**
     * Output only. Specifies the OS version, e.g. "30" (Android API level) or "17.4" (iOS).
     */
    osVersion?: string | null;
    /**
     * Output only. Specifies the platform of the device.
     */
    platform?: string | null;
    /**
     * Output only. Measurements of the primary device screen. Informational only. Unset for devices without a screen (e.g. some wearables).
     */
    primaryScreen?: Schema$CatalogScreenMetrics;
    /**
     * Output only. Products/Services supported by this device.
     */
    supportedProducts?: Schema$CatalogSupportedProduct[];
  }
  /**
   * Fleet availability for a device configuration.
   */
  export interface Schema$CatalogDeviceAvailability {
    /**
     * Output only. Specifies the current availability bucket (idle, immediately allocatable devices) for this device configuration. This is a best-effort snapshot, refreshed periodically. It fluctuates depending on traffic as other requests allocate devices.
     */
    available?: string | null;
    /**
     * Output only. Specifies the current capacity bucket for this device configuration. Represents the total number of online devices (idle or in use).
     */
    capacity?: string | null;
  }
  /**
   * Per-product metadata for the DeviceStreaming product.
   */
  export interface Schema$CatalogDeviceStreamingSupport {
    /**
     * Output only. Specifies the minimum Android Studio version that supports this device. Optional; only set when the device is known to work only at or above a certain Android Studio version. Expected format "major.minor.micro.patch", e.g. "5921.22.2211.8881706".
     */
    minimumAndroidStudioVersion?: string | null;
  }
  /**
   * iOS-specific device attributes. Reserved for future iOS-only fields.
   */
  export interface Schema$CatalogIosDeviceDetails {}
  /**
   * The lab hosting a device.
   */
  export interface Schema$CatalogLabInfo {
    /**
     * Output only. Display name of the lab where the device is hosted. If empty, the device is hosted in a Google owned lab.
     */
    displayName?: string | null;
    /**
     * Output only. The Unicode country/region code (CLDR) of the lab where the device is hosted, e.g. "US" for United States, "KR" for South Korea. Empty when the hosting region is not published.
     */
    regionCode?: string | null;
  }
  /**
   * Catalog resource lifecycle: maturity state plus key lifecycle dates.
   */
  export interface Schema$CatalogLifecycle {
    /**
     * Output only. Specifies the date the resource is scheduled to be removed from the catalog. Only set when `state == DEPRECATED`.
     */
    removalDate?: Schema$Date;
    /**
     * Output only. Specifies the current maturity state of the resource.
     */
    state?: string | null;
  }
  /**
   * Response including listed devices.
   */
  export interface Schema$CatalogListDevicesResponse {
    /**
     * The list of devices.
     */
    devices?: Schema$CatalogDevice[];
    /**
     * Token to receive the next page of devices. This will be absent if the end of the response list has been reached.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response including listed software versions.
   */
  export interface Schema$CatalogListSoftwareVersionsResponse {
    /**
     * Token to receive the next page of software versions. This will be absent if the end of the response list has been reached.
     */
    nextPageToken?: string | null;
    /**
     * The list of software versions.
     */
    softwareVersions?: Schema$CatalogSoftwareVersion[];
  }
  /**
   * Screen measurements of a device.
   */
  export interface Schema$CatalogScreenMetrics {
    /**
     * Output only. Pixel density in dots per inch (dpi).
     */
    densityDpi?: number | null;
    /**
     * Output only. Height in pixels.
     */
    heightPx?: number | null;
    /**
     * Output only. Width in pixels.
     */
    widthPx?: number | null;
  }
  /**
   * A single software version in the catalog.
   */
  export interface Schema$CatalogSoftwareVersion {
    /**
     * Output only. Contains AndroidX Test Orchestrator-specific attributes (set when software_type == ANDROIDX_TEST_ORCHESTRATOR).
     */
    androidxTestOrchestratorDetails?: Schema$CatalogAndroidxTestOrchestratorDetails;
    /**
     * Output only. Provides a human-readable name for this version, e.g. "AndroidX Test Orchestrator 1.4.1".
     */
    displayName?: string | null;
    /**
     * Output only. Indicates whether the system uses this version when a request does not select one explicitly. Exactly one version per `software_type` is the default, and it may change over time.
     */
    isDefault?: boolean | null;
    /**
     * Output only. The version lifecycle (maturity stage and removal date).
     */
    lifecycle?: Schema$CatalogLifecycle;
    /**
     * Identifier. Identifies the software version resource. Format: `projects/{project\}/locations/{location\}/softwareVersions/{software_version\}`. The {software_version\} segment is an opaque, stable string. Clients must not parse it to derive or assume the version.
     */
    name?: string | null;
    /**
     * Output only. Specifies which software this is a version of. Filter on this field to narrow the collection to a single kind of software, for example `software_type = "ANDROIDX_TEST_ORCHESTRATOR"`.
     */
    softwareType?: string | null;
    /**
     * Output only. Specifies the version identifier, e.g. "1.4.1". Unique within a `software_type`.
     */
    version?: string | null;
    /**
     * Output only. Contains Xcode-specific attributes (set when software_type == XCODE).
     */
    xcodeDetails?: Schema$CatalogXcodeDetails;
  }
  /**
   * Declares that a device supports a given Device Cloud product, with optional per-product metadata. Discriminated by which product-specific message is set; adding a new product = new oneof arm + new per-product message.
   */
  export interface Schema$CatalogSupportedProduct {
    /**
     * Output only. Represents Automation, which is DeviceRun-backed automated test execution.
     */
    automation?: Schema$CatalogAutomationSupport;
    /**
     * Output only. Represents DeviceStreaming, which is interactive remote device streaming.
     */
    deviceStreaming?: Schema$CatalogDeviceStreamingSupport;
  }
  /**
   * Xcode-specific attributes.
   */
  export interface Schema$CatalogXcodeDetails {
    /**
     * Output only. Lists the iOS versions this Xcode can run tests against, e.g. "16.6". This is a property of the toolchain, so it says nothing about whether a device on that iOS version is available; list the `Device` collection to find out.
     */
    supportedIosVersions?: string[] | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * The action to be performed on a device.
   */
  export interface Schema$DeviceAction {
    /**
     * Captures a bugreport from the device unless the test result is pass.
     */
    androidBugreport?: Schema$AndroidBugreportDeviceAction;
    /**
     * Captures a dumpsys from the device.
     */
    androidDumpsys?: Schema$AndroidDumpsysDeviceAction;
    /**
     * Installs Android packages on the device.
     */
    androidInstallPackages?: Schema$AndroidInstallPackagesDeviceAction;
    /**
     * Collects logcat output from the device.
     */
    androidLogcat?: Schema$AndroidLogcatDeviceAction;
    /**
     * Mocks the location of the device.
     */
    androidMockLocation?: Schema$AndroidMockLocationDeviceAction;
    /**
     * Sets the orientation of the device.
     */
    androidOrientation?: Schema$AndroidOrientationDeviceAction;
    /**
     * Pulls directories and files from the device at the end of the run.
     */
    androidPullFiles?: Schema$AndroidPullFilesDeviceAction;
    /**
     * Pushes files to the device at the beginning of the run.
     */
    androidPushFiles?: Schema$AndroidPushFilesDeviceAction;
    /**
     * Records a video of the device screen during the run.
     */
    androidRecordVideo?: Schema$AndroidRecordVideoDeviceAction;
    /**
     * Switches the locale (language and region) of the device.
     */
    androidSwitchLocale?: Schema$AndroidSwitchLocaleDeviceAction;
    /**
     * Collects the exported iOS App Privacy Report during the run.
     */
    iosAppPrivacyReport?: Schema$IosAppPrivacyReportDeviceAction;
    /**
     * Installs additional iOS packages on the device.
     */
    iosInstallPackages?: Schema$IosInstallPackagesDeviceAction;
    /**
     * Pulls directories and files from the iOS device sandbox at the end of the run.
     */
    iosPullFiles?: Schema$IosPullFilesDeviceAction;
    /**
     * Pushes files to the iOS device sandbox at the beginning of the run.
     */
    iosPushFiles?: Schema$IosPushFilesDeviceAction;
    /**
     * Records a video of the iOS device screen during the run.
     */
    iosRecordVideo?: Schema$IosRecordVideoDeviceAction;
    /**
     * Switches the locale (language and region) of the iOS application.
     */
    iosSwitchLocale?: Schema$IosSwitchLocaleDeviceAction;
  }
  /**
   * The configuration of a run on a device.
   */
  export interface Schema$DeviceConfig {
    /**
     * Optional. The actions to be performed on the device. Actions will be executed in the order they are specified in the list. Each action type can at most have 1 instance in the list.
     */
    actions?: Schema$DeviceAction[];
    /**
     * Required. The requirement of the device.
     */
    requirement?: Schema$DeviceRequirement;
  }
  /**
   * The requirement of a device.
   */
  export interface Schema$DeviceRequirement {
    /**
     * The device ID of a device in the catalog. The device ID is the last part of a device's resource name.
     */
    deviceId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The runtime information and result report of a single on-device execution attempt.
   */
  export interface Schema$ExecutionReport {
    /**
     * Output only. The display_name set by users in the ExecutionConfig.
     */
    displayName?: string | null;
    /**
     * Output only. The end time of the execution.
     */
    endTime?: string | null;
    /**
     * Output only. The unique identifier of the execution.
     */
    id?: string | null;
    /**
     * Output only. The output files of the execution.
     */
    outputFiles?: Schema$OutputFile[];
    /**
     * Output only. The result of the execution.
     */
    result?: Schema$Result;
    /**
     * Output only. The start time of the execution.
     */
    startTime?: string | null;
    /**
     * Output only. The status of the execution.
     */
    status?: Schema$Status;
    /**
     * Output only. Non-fatal warnings collected during the execution.
     */
    warnings?: Schema$Warning[];
  }
  /**
   * A path to a file or directory in Google Cloud Storage.
   */
  export interface Schema$GcsPath {
    /**
     * Required. The Google Cloud Storage path of the file or directory. Format: `gs:///`.
     */
    path?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunningCancelOperationRequest {}
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
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
  export interface Schema$GoogleRpcStatus {
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
   * Input file.
   */
  export interface Schema$InputFile {
    /**
     * An input file in Google Cloud Storage.
     */
    gcsInputFile?: Schema$GcsPath;
  }
  /**
   * Collects the exported iOS App Privacy Report during the test run. When enabled, the iOS device records application activity (such as network access, domain requests, and sensitive resource access like photos, camera, or location) and exports Apple's official App Privacy Report. The report will be written to a file named `AppActivityReport.ndjson` in the execution output directory.
   */
  export interface Schema$IosAppPrivacyReportDeviceAction {}
  /**
   * Installs iOS packages on the device.
   */
  export interface Schema$IosInstallPackagesDeviceAction {
    /**
     * Required. Additional iOS packages (IPAs) to install on the device. Limits: - A maximum of 20 IPAs are allowed.
     */
    ipas?: Schema$InputFile[];
  }
  /**
   * Pulls directories and files from the iOS device sandbox at the end of the run.
   */
  export interface Schema$IosPullFilesDeviceAction {
    /**
     * Required. Absolute directory or file paths to pull from the device. Limits: - A maximum of 10 paths are allowed.
     */
    paths?: Schema$IosPullFilesDeviceActionPathConfig[];
  }
  /**
   * The configuration of pulling a file or directory from the iOS device.
   */
  export interface Schema$IosPullFilesDeviceActionPathConfig {
    /**
     * Required. The bundle ID of the application sandbox.
     */
    bundleId?: string | null;
    /**
     * Required. The device path relative to the app sandbox, e.g. "/Documents/output/".
     */
    devicePath?: string | null;
  }
  /**
   * Pushes files to the iOS device sandbox at the beginning of the run.
   */
  export interface Schema$IosPushFilesDeviceAction {
    /**
     * Required. Configs of pushing files to the device. Limits: - A maximum of 50 files are allowed.
     */
    fileConfigs?: Schema$IosPushFilesDeviceActionFileConfig[];
  }
  /**
   * The configuration of pushing a file to the iOS device.
   */
  export interface Schema$IosPushFilesDeviceActionFileConfig {
    /**
     * Required. The bundle ID of the application sandbox.
     */
    bundleId?: string | null;
    /**
     * Required. The destination path relative to the app sandbox, e.g. "/Documents/file.txt".
     */
    destinationPath?: string | null;
    /**
     * Required. The file to be pushed.
     */
    sourceFile?: Schema$InputFile;
  }
  /**
   * Records a video of the iOS device screen during the run. The video will be written to a file named `video.mp4` in the execution output directory.
   */
  export interface Schema$IosRecordVideoDeviceAction {
    /**
     * Optional. Whether to discard the video if the test passes. If not specified, the default is false (always keep the video).
     */
    discardOnPass?: boolean | null;
  }
  /**
   * Switches the locale (language and region) of the iOS application.
   */
  export interface Schema$IosSwitchLocaleDeviceAction {
    /**
     * Required. The locale (language and region) to switch the app to. The format is `language-region` or `language`, e.g. "en-US", "zh-CN", "ja", etc.
     */
    localeCode?: string | null;
  }
  /**
   * The configuration of an iOS XCTest.
   */
  export interface Schema$IosXcTest {
    /**
     * Required. The .zip containing the .xctestrun file and the contents of the DerivedData/Build/Products directory.
     */
    testsZip?: Schema$InputFile;
    /**
     * Optional. The Xcode version that should be used for the test. If not set, a system-default Xcode version is used. The available Xcode versions can be retrieved from the catalog service.
     */
    xcodeVersion?: string | null;
    /**
     * Optional. An .xctestrun file that will override the .xctestrun file in the tests zip.
     */
    xctestrun?: Schema$InputFile;
    /**
     * Optional. The timeout of the test. Default value: 5 min. Range: [1 min, 3 hours].
     */
    xcTestTimeout?: string | null;
  }
  /**
   * Describes the summary of an issue (error or warning) with structured details.
   */
  export interface Schema$IssueSummary {
    /**
     * Output only. Human-readable explanation of the issue in English.
     */
    message?: string | null;
    /**
     * Output only. The reason of the issue. This is a constant value that identifies the proximate cause of the issue. This should be at most 63 characters and match a regular expression of `A-Z*[A-Z0-9]`, which represents UPPER_SNAKE_CASE.
     */
    reason?: string | null;
    /**
     * Output only. The issue classification based on responsibility.
     */
    type?: string | null;
  }
  /**
   * The action to be performed in a job.
   */
  export interface Schema$JobAction {
    /**
     * Android instrumentation test.
     */
    androidInstrumentationTest?: Schema$AndroidInstrumentationTest;
    /**
     * Android native binary execution.
     */
    androidNativeBinary?: Schema$AndroidNativeBinary;
    /**
     * iOS XCTest.
     */
    iosXcTest?: Schema$IosXcTest;
  }
  /**
   * The configuration of a job.
   */
  export interface Schema$JobConfig {
    /**
     * Required. Job action.
     */
    action?: Schema$JobAction;
    /**
     * Required. Allocation config.
     */
    allocationConfig?: Schema$AllocationConfig;
    /**
     * Optional. User-settable, human-readable name for the job. If set, it must be unique within the session. If not set, the display name will default to `job-`, where `` is the 0-based index of the job in the session formatted as three digits (e.g., job-000, job-001, ...). Maximum size is 63 bytes when encoded as UTF-8. If set, must match regex: `^A-Za-z0-9*$`.
     */
    displayName?: string | null;
    /**
     * Optional. User-defined metadata for tracking or categorization. These labels do not affect job execution and are surfaced in the JobReport. Limits: - Maximum number of entries: 16. - Maximum key size: 32 bytes (UTF-8). - Maximum value size: 1024 bytes (UTF-8).
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Job settings.
     */
    settings?: Schema$JobSettings;
  }
  /**
   * The runtime information and result report of a job.
   */
  export interface Schema$JobReport {
    /**
     * Output only. The display_name set by users in the JobConfig.
     */
    displayName?: string | null;
    /**
     * Output only. The end time of the job.
     */
    endTime?: string | null;
    /**
     * Output only. Reports of the execution attempts of the job.
     */
    executionReports?: Schema$ExecutionReport[];
    /**
     * Output only. The unique identifier of the job.
     */
    id?: string | null;
    /**
     * Output only. The original labels provided by the user during job creation.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The output files of the job.
     */
    outputFiles?: Schema$OutputFile[];
    /**
     * Output only. The result of the job.
     */
    result?: Schema$Result;
    /**
     * Output only. The start time of the job.
     */
    startTime?: string | null;
    /**
     * Output only. The status of the job.
     */
    status?: Schema$Status;
    /**
     * Output only. Non-fatal warnings collected during the job.
     */
    warnings?: Schema$Warning[];
  }
  /**
   * Job settings to control the job execution.
   */
  export interface Schema$JobSettings {
    /**
     * Optional. The retry settings of the job.
     */
    retrySettings?: Schema$RetrySettings;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response including listed sessions.
   */
  export interface Schema$ListSessionsResponse {
    /**
     * Token to receive the next page of sessions. This will be absent if the end of the response list has been reached.
     */
    nextPageToken?: string | null;
    /**
     * The list of sessions.
     */
    sessions?: Schema$Session[];
    /**
     * Unordered list. Sessions that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Output file.
   */
  export interface Schema$OutputFile {
    /**
     * An output file in Google Cloud Storage.
     */
    gcsOutputFile?: Schema$GcsPath;
  }
  /**
   * The result of a session/job/execution.
   */
  export interface Schema$Result {
    /**
     * Output only. Detailed result cause diagnostics. Set if type is not PASSED.
     */
    cause?: Schema$ResultCause;
    /**
     * Output only. The result type of the session/job/execution.
     */
    resultType?: string | null;
  }
  /**
   * Describes the cause of the non-passed result occurred during the execution.
   */
  export interface Schema$ResultCause {
    /**
     * Output only. Structured cause detail.
     */
    summary?: Schema$IssueSummary;
  }
  /**
   * Retry settings.
   */
  export interface Schema$RetrySettings {
    /**
     * Optional. The default retry strategy. Allows an Execution to retry on test failures and infrastructure errors.
     */
    flakyTestRetryStrategy?: Schema$RetrySettingsFlakyTestRetryStrategy;
  }
  /**
   * Default retry strategy. It will retry on test failures for up to flaky_test_attempts (including the initial run). It also retries on infra issues for up to 2 attempts (including the initial run). So in total, an execution can run up to flaky_test_attempts * 2 times in the worst case.
   */
  export interface Schema$RetrySettingsFlakyTestRetryStrategy {
    /**
     * Required. The total attempts for flaky tests, including the initial run. Default value: 1 (no retry). Range: [1, 5].
     */
    flakyTestAttempts?: number | null;
    /**
     * Optional. Whether to retry the test failures in parallel. By default, the test is retried sequentially. If true, when the initial attempt fails, (flaky_test_attempts - 1) attempts will be triggered at the same time to run in parallel.
     */
    parallelRetry?: boolean | null;
    /**
     * Optional. The mode of test reduction for retry. If the test runner doesn't support the specified test reduction mode, the request will be rejected with an `INVALID_ARGUMENT` error.
     */
    testReductionMode?: string | null;
  }
  /**
   * A session resource in the AutomationSession API. At a high level, `Session` describes the configuration of one or multiple jobs, the state transitions it goes through, and the results.
   */
  export interface Schema$Session {
    /**
     * Identifier. The resource name of the session. Format: `projects/{project\}/locations/{location\}/sessions/{session\}`.
     */
    name?: string | null;
    /**
     * Required. Configuration used to create the session.
     */
    sessionConfig?: Schema$SessionConfig;
    /**
     * Output only. The runtime information and result report of the session.
     */
    sessionReport?: Schema$SessionReport;
  }
  /**
   * SessionConfig is used to create a session.
   */
  export interface Schema$SessionConfig {
    /**
     * Optional. User-settable, human-readable name for the session. Maximum size is 63 bytes when encoded as UTF-8. If set, must match regex: `^A-Za-z0-9*$`.
     */
    displayName?: string | null;
    /**
     * Required. Configs of the jobs in the session.
     */
    jobConfigs?: Schema$JobConfig[];
    /**
     * Optional. Notification config for the session.
     */
    notificationConfig?: Schema$SessionConfigSessionNotificationConfig;
    /**
     * Required. Output file directory config for the session.
     */
    outputDirectoryConfig?: Schema$SessionConfigSessionOutputFileDirectoryConfig;
  }
  /**
   * Config to control session notification.
   */
  export interface Schema$SessionConfigSessionNotificationConfig {
    /**
     * Optional. The Pub/Sub topics to which session events are published. Format: `projects/{project\}/topics/{topic\}`. See https://cloud.google.com/pubsub/docs/admin#topic_and_subscription_name_restrictions
     */
    pubsubTopic?: string[] | null;
  }
  /**
   * Config to control session output file directory.
   */
  export interface Schema$SessionConfigSessionOutputFileDirectoryConfig {
    /**
     * Optional. Whether to write output files directly under the output directory instead of nesting them under service-generated subdirectories. By default (`false`), output files are stored under `////`. When `true`, the session ID subdirectory is never appended, and the job display name subdirectory is appended only when the session has more than one job. Output files are therefore stored under: - `//` for a single-job session. - `///` for a multi-job session. Set this to `true` when the output directory is already unique per session (for example, when a CI system generates it), to avoid redundant nesting.
     */
    flatDirectoryStructure?: boolean | null;
    /**
     * The Google Cloud Storage path of the output directory (e.g. `gs://my-bucket/output`). The bucket must exist. If the bucket is located in another project or uses fine-grained access controls, ensure the Device Run Service Agent of the project (`service-@gcp-sa-devicerun.iam.gserviceaccount.com`) is granted access to the bucket (such as `roles/storage.objectUser`).
     */
    gcsOutputDirectory?: Schema$GcsPath;
  }
  /**
   * The runtime information and result report of a session.
   */
  export interface Schema$SessionReport {
    /**
     * Output only. The end time of the session.
     */
    endTime?: string | null;
    /**
     * Output only. The unique identifier of the session.
     */
    id?: string | null;
    /**
     * Output only. Reports of the jobs in the session.
     */
    jobReports?: Schema$JobReport[];
    /**
     * Output only. The result of the session.
     */
    result?: Schema$Result;
    /**
     * Output only. The start time of the session.
     */
    startTime?: string | null;
    /**
     * Output only. The status of the session.
     */
    status?: Schema$Status;
  }
  /**
   * The status of a session/job/execution.
   */
  export interface Schema$Status {
    /**
     * Output only. Human-readable, detailed descriptions of the session/job/execution's progress. For example: "Provisioning a device", "Starting Test". Each message should contain only one line of text. During the course of execution new data may be appended to the end of progress_messages.
     */
    progressMessages?: string[] | null;
    /**
     * Output only. The status type of the session/job/execution.
     */
    statusType?: string | null;
  }
  /**
   * Non-fatal operational anomaly, lint observation, or execution insight.
   */
  export interface Schema$Warning {
    /**
     * Output only. Detailed warning summary.
     */
    summary?: Schema$IssueSummary;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    devices: Resource$Projects$Locations$Devices;
    operations: Resource$Projects$Locations$Operations;
    sessions: Resource$Projects$Locations$Sessions;
    softwareVersions: Resource$Projects$Locations$Softwareversions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.devices = new Resource$Projects$Locations$Devices(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.sessions = new Resource$Projects$Locations$Sessions(this.context);
      this.softwareVersions = new Resource$Projects$Locations$Softwareversions(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Location> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project\}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.list({
     *     // Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends StandardParameters {
    /**
     * Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns information about a specific device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.devices.get({
     *     // Required. The name of the device. Format: `projects/{project\}/locations/global/devices/{device\}`.
     *     name: 'projects/my-project/locations/my-location/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessDeniedReasons": [],
     *   //   "androidDetails": {},
     *   //   "availability": {},
     *   //   "displayName": "my_displayName",
     *   //   "formFactor": "my_formFactor",
     *   //   "hardwareType": "my_hardwareType",
     *   //   "iosDetails": {},
     *   //   "labInfo": {},
     *   //   "labels": {},
     *   //   "lifecycle": {},
     *   //   "manufacturer": "my_manufacturer",
     *   //   "modelCode": "my_modelCode",
     *   //   "name": "my_name",
     *   //   "osVersion": "my_osVersion",
     *   //   "platform": "my_platform",
     *   //   "primaryScreen": {},
     *   //   "supportedProducts": []
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
      params: Params$Resource$Projects$Locations$Devices$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Devices$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CatalogDevice>>;
    get(
      params: Params$Resource$Projects$Locations$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Devices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CatalogDevice>,
      callback: BodyResponseCallback<Schema$CatalogDevice>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Devices$Get,
      callback: BodyResponseCallback<Schema$CatalogDevice>
    ): void;
    get(callback: BodyResponseCallback<Schema$CatalogDevice>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Devices$Get
        | BodyResponseCallback<Schema$CatalogDevice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CatalogDevice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CatalogDevice>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CatalogDevice>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
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
        createAPIRequest<Schema$CatalogDevice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CatalogDevice>(parameters);
      }
    }

    /**
     * Lists all devices.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.devices.list({
     *     // Optional. An AIP-160 (https://google.aip.dev/160) filter expression restricting which devices are returned. An empty filter returns all devices. Filtering is supported over the `Device` fields, including nested fields via dot-path. Enum and string values must be double-quoted. Examples: * `platform = "ANDROID"` * `platform = "ANDROID" AND os_version = "34"` * `hardware_type = "PHYSICAL" AND form_factor = "PHONE"` * `android_details.build_type = "userdebug"` * `availability.capacity = "HIGH"`
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of devices to return. The server may return fewer items than this value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListDevices` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the collection of devices. Format: `projects/{project\}/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Projects$Locations$Devices$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Devices$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CatalogListDevicesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Devices$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$CatalogListDevicesResponse>,
      callback: BodyResponseCallback<Schema$CatalogListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Devices$List,
      callback: BodyResponseCallback<Schema$CatalogListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CatalogListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Devices$List
        | BodyResponseCallback<Schema$CatalogListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CatalogListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CatalogListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CatalogListDevicesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/devices').replace(
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
        createAPIRequest<Schema$CatalogListDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CatalogListDevicesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Devices$Get extends StandardParameters {
    /**
     * Required. The name of the device. Format: `projects/{project\}/locations/global/devices/{device\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Devices$List extends StandardParameters {
    /**
     * Optional. An AIP-160 (https://google.aip.dev/160) filter expression restricting which devices are returned. An empty filter returns all devices. Filtering is supported over the `Device` fields, including nested fields via dot-path. Enum and string values must be double-quoted. Examples: * `platform = "ANDROID"` * `platform = "ANDROID" AND os_version = "34"` * `hardware_type = "PHYSICAL" AND form_factor = "PHONE"` * `android_details.build_type = "userdebug"` * `availability.capacity = "HIGH"`
     */
    filter?: string;
    /**
     * Optional. The maximum number of devices to return. The server may return fewer items than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDevices` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent of the collection of devices. Format: `projects/{project\}/locations/global`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
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
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:cancel').replace(
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
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
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": [],
     *   //   "unreachable": []
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
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
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
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }

  export class Resource$Projects$Locations$Sessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels an in-progress automation session. This RPC returns immediately and cancellation proceeds asynchronously. If the session is already finished, this RPC will have no effect.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.sessions.cancel({
     *     // Required. The name of the session. Format: "projects/{project\}/locations/{location\}/sessions/{session\}"
     *     name: 'projects/my-project/locations/my-location/sessions/my-session',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cancelResult": "my_cancelResult"
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
    cancel(
      params: Params$Resource$Projects$Locations$Sessions$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Sessions$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CancelSessionResponse>>;
    cancel(
      params: Params$Resource$Projects$Locations$Sessions$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Sessions$Cancel,
      options:
        MethodOptions | BodyResponseCallback<Schema$CancelSessionResponse>,
      callback: BodyResponseCallback<Schema$CancelSessionResponse>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Sessions$Cancel,
      callback: BodyResponseCallback<Schema$CancelSessionResponse>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$CancelSessionResponse>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sessions$Cancel
        | BodyResponseCallback<Schema$CancelSessionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CancelSessionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CancelSessionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CancelSessionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sessions$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sessions$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:cancel').replace(
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
        createAPIRequest<Schema$CancelSessionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CancelSessionResponse>(parameters);
      }
    }

    /**
     * Starts an automation session with the specified configuration. This method returns a long-running `Operation`, awaiting the completion of all jobs in the session.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.sessions.create({
     *     // Required. The parent resource where this session will be created. Format: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A unique identifier for this request. This request is only idempotent if a `request_id` is provided, i.e. if a request with the same `request_id` is received, then the previous result will be returned. The server will guarantee that for at least 60 minutes after the first request. The value must be a UUID (e.g., 123e4567-e89b-12d3-a456-426655440000). See github.com/google/uuid for more details.
     *     requestId: 'placeholder-value',
     *     // Optional. The ID to use for the session, which will become the final component of the resource name. If not provided, the server will generate a value for this field. When provided, this value must be between 4 and 63 characters, and match the following regex: ^a-z{2,61\}[a-z0-9]$.
     *     sessionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "sessionConfig": {},
     *       //   "sessionReport": {}
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Sessions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Sessions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    create(
      params: Params$Resource$Projects$Locations$Sessions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sessions$Create,
      options:
        MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sessions$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sessions$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sessions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sessions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/sessions').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a session. This RPC returns immediately and deletion proceeds asynchronously. It will cancel the session at first if it is still running.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.sessions.delete({
     *     // Required. The name of the session. Format: `projects/{project\}/locations/{location\}/sessions/{session\}`.
     *     name: 'projects/my-project/locations/my-location/sessions/my-session',
     *     // Optional. A unique identifier for this request. This request is only idempotent if a `request_id` is provided, i.e. if a request with the same `request_id` is received, then the previous result will be returned. The server will guarantee that for at least 60 minutes after the first request. The value must be a UUID (e.g., 123e4567-e89b-12d3-a456-426655440000). See github.com/google/uuid for more details.
     *     requestId: 'placeholder-value',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Sessions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Sessions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    delete(
      params: Params$Resource$Projects$Locations$Sessions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sessions$Delete,
      options:
        MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sessions$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sessions$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sessions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sessions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Returns information about a previously created automation session.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.sessions.get({
     *     // Required. The name of the session. Format: `projects/{project\}/locations/{location\}/sessions/{session\}`.
     *     name: 'projects/my-project/locations/my-location/sessions/my-session',
     *     // Optional. The view of the session to return. If not set, the default BASIC view will be returned.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "sessionConfig": {},
     *   //   "sessionReport": {}
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
      params: Params$Resource$Projects$Locations$Sessions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Sessions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Session>>;
    get(
      params: Params$Resource$Projects$Locations$Sessions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sessions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Session>,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sessions$Get,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    get(callback: BodyResponseCallback<Schema$Session>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sessions$Get
        | BodyResponseCallback<Schema$Session>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Session>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Session> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Session>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sessions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sessions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
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
        createAPIRequest<Schema$Session>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Session>(parameters);
      }
    }

    /**
     * Lists previously created automation sessions. Sessions may still be in-progress, or may have finished successfully, or unsuccessfully.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.sessions.list({
     *     // Optional. The raw filter text to constrain the results.
     *     filter: 'placeholder-value',
     *     // Optional. The order to sort results by. Supported values: `name`, `name desc`, `create_time`, `create_time desc`. Values must use the snake_case field name; `createTime` is not accepted. Ordering by `create_time` is not supported when listing across all locations (`locations/-`). If unspecified, results are returned in an unspecified order.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of sessions to return. The server may return fewer items than this value. If unspecified, at most 500 sessions will be returned. The maximum value is 1000, values above will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListSessions` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListSessions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListSessionsRequest The parent of the collection of sessions. Format: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. The view of the sessions to return. If not set, the `BASIC` view will be returned.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sessions": [],
     *   //   "unreachable": []
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
      params: Params$Resource$Projects$Locations$Sessions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Sessions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSessionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Sessions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sessions$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListSessionsResponse>,
      callback: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sessions$List,
      callback: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSessionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sessions$List
        | BodyResponseCallback<Schema$ListSessionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSessionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSessionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSessionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/sessions').replace(
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
        createAPIRequest<Schema$ListSessionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSessionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Sessions$Cancel extends StandardParameters {
    /**
     * Required. The name of the session. Format: "projects/{project\}/locations/{location\}/sessions/{session\}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelSessionRequest;
  }
  export interface Params$Resource$Projects$Locations$Sessions$Create extends StandardParameters {
    /**
     * Required. The parent resource where this session will be created. Format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Optional. A unique identifier for this request. This request is only idempotent if a `request_id` is provided, i.e. if a request with the same `request_id` is received, then the previous result will be returned. The server will guarantee that for at least 60 minutes after the first request. The value must be a UUID (e.g., 123e4567-e89b-12d3-a456-426655440000). See github.com/google/uuid for more details.
     */
    requestId?: string;
    /**
     * Optional. The ID to use for the session, which will become the final component of the resource name. If not provided, the server will generate a value for this field. When provided, this value must be between 4 and 63 characters, and match the following regex: ^a-z{2,61\}[a-z0-9]$.
     */
    sessionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Session;
  }
  export interface Params$Resource$Projects$Locations$Sessions$Delete extends StandardParameters {
    /**
     * Required. The name of the session. Format: `projects/{project\}/locations/{location\}/sessions/{session\}`.
     */
    name?: string;
    /**
     * Optional. A unique identifier for this request. This request is only idempotent if a `request_id` is provided, i.e. if a request with the same `request_id` is received, then the previous result will be returned. The server will guarantee that for at least 60 minutes after the first request. The value must be a UUID (e.g., 123e4567-e89b-12d3-a456-426655440000). See github.com/google/uuid for more details.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Sessions$Get extends StandardParameters {
    /**
     * Required. The name of the session. Format: `projects/{project\}/locations/{location\}/sessions/{session\}`.
     */
    name?: string;
    /**
     * Optional. The view of the session to return. If not set, the default BASIC view will be returned.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Sessions$List extends StandardParameters {
    /**
     * Optional. The raw filter text to constrain the results.
     */
    filter?: string;
    /**
     * Optional. The order to sort results by. Supported values: `name`, `name desc`, `create_time`, `create_time desc`. Values must use the snake_case field name; `createTime` is not accepted. Ordering by `create_time` is not supported when listing across all locations (`locations/-`). If unspecified, results are returned in an unspecified order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of sessions to return. The server may return fewer items than this value. If unspecified, at most 500 sessions will be returned. The maximum value is 1000, values above will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListSessions` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListSessions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListSessionsRequest The parent of the collection of sessions. Format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Optional. The view of the sessions to return. If not set, the `BASIC` view will be returned.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Softwareversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns information about a specific software version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.softwareVersions.get({
     *     // Required. The name of the software version. Format: `projects/{project\}/locations/global/softwareVersions/{software_version\}`.
     *     name: 'projects/my-project/locations/my-location/softwareVersions/my-softwareVersion',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidxTestOrchestratorDetails": {},
     *   //   "displayName": "my_displayName",
     *   //   "isDefault": false,
     *   //   "lifecycle": {},
     *   //   "name": "my_name",
     *   //   "softwareType": "my_softwareType",
     *   //   "version": "my_version",
     *   //   "xcodeDetails": {}
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
      params: Params$Resource$Projects$Locations$Softwareversions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Softwareversions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CatalogSoftwareVersion>>;
    get(
      params: Params$Resource$Projects$Locations$Softwareversions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Softwareversions$Get,
      options:
        MethodOptions | BodyResponseCallback<Schema$CatalogSoftwareVersion>,
      callback: BodyResponseCallback<Schema$CatalogSoftwareVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Softwareversions$Get,
      callback: BodyResponseCallback<Schema$CatalogSoftwareVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$CatalogSoftwareVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Softwareversions$Get
        | BodyResponseCallback<Schema$CatalogSoftwareVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CatalogSoftwareVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CatalogSoftwareVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CatalogSoftwareVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Softwareversions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Softwareversions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
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
        createAPIRequest<Schema$CatalogSoftwareVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CatalogSoftwareVersion>(parameters);
      }
    }

    /**
     * Lists all software versions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/devicerun.googleapis.com
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
     * const devicerun = google.devicerun('v1alpha');
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
     *   const res = await devicerun.projects.locations.softwareVersions.list({
     *     // Optional. An AIP-160 (https://google.aip.dev/160) filter expression restricting which software versions are returned. An empty filter returns all software versions. Filtering is supported over the `SoftwareVersion` fields, including nested fields via dot-path. Enum and string values must be double-quoted. Examples: * `software_type = "ANDROIDX_TEST_ORCHESTRATOR"` * `software_type = "ANDROIDX_TEST_ORCHESTRATOR" AND is_default = true` * `lifecycle.state = "ACTIVE"` * `version = "1.4.1"`
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of software versions to return. The server may return fewer items than this value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListSoftwareVersions` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListSoftwareVersions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the collection of software versions. Format: `projects/{project\}/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "softwareVersions": []
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
      params: Params$Resource$Projects$Locations$Softwareversions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Softwareversions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$CatalogListSoftwareVersionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Softwareversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Softwareversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CatalogListSoftwareVersionsResponse>,
      callback: BodyResponseCallback<Schema$CatalogListSoftwareVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Softwareversions$List,
      callback: BodyResponseCallback<Schema$CatalogListSoftwareVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CatalogListSoftwareVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Softwareversions$List
        | BodyResponseCallback<Schema$CatalogListSoftwareVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CatalogListSoftwareVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CatalogListSoftwareVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$CatalogListSoftwareVersionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Softwareversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Softwareversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://devicerun.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/softwareVersions').replace(
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
        createAPIRequest<Schema$CatalogListSoftwareVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CatalogListSoftwareVersionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Softwareversions$Get extends StandardParameters {
    /**
     * Required. The name of the software version. Format: `projects/{project\}/locations/global/softwareVersions/{software_version\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Softwareversions$List extends StandardParameters {
    /**
     * Optional. An AIP-160 (https://google.aip.dev/160) filter expression restricting which software versions are returned. An empty filter returns all software versions. Filtering is supported over the `SoftwareVersion` fields, including nested fields via dot-path. Enum and string values must be double-quoted. Examples: * `software_type = "ANDROIDX_TEST_ORCHESTRATOR"` * `software_type = "ANDROIDX_TEST_ORCHESTRATOR" AND is_default = true` * `lifecycle.state = "ACTIVE"` * `version = "1.4.1"`
     */
    filter?: string;
    /**
     * Optional. The maximum number of software versions to return. The server may return fewer items than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListSoftwareVersions` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListSoftwareVersions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent of the collection of software versions. Format: `projects/{project\}/locations/global`.
     */
    parent?: string;
  }
}
