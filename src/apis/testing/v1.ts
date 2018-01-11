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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Cloud Testing API
 *
 * Allows developers to run automated tests for their mobile applications on
 * Google infrastructure.
 *
 * @example
 * const google = require('googleapis');
 * const testing = google.testing('v1');
 *
 * @namespace testing
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Testing
 */
function Testing(options) {
  const self = this;
  self._options = options || {};
  self.projects = {
    testMatrices: {
      /**
       * testing.projects.testMatrices.cancel
       * @desc Cancels unfinished test executions in a test matrix. This call
       * returns immediately and cancellation proceeds asychronously. If the
       * matrix is already final, this operation will have no effect.  May
       * return any of the following canonical error codes:  - PERMISSION_DENIED
       * - if the user is not authorized to read project - INVALID_ARGUMENT - if
       * the request is malformed - NOT_FOUND - if the Test Matrix does not
       * exist
       * @alias testing.projects.testMatrices.cancel
       * @memberOf! testing(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.projectId Cloud project that owns the test.
       * @param {string} params.testMatrixId Test matrix that will be canceled.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
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
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * testing.projects.testMatrices.create
          * @desc Request to run a matrix of tests according to the given
          * specifications. Unsupported environments will be returned in the
          * state UNSUPPORTED. Matrices are limited to at most 200 supported
          * executions.  May return any of the following canonical error codes:
          * - PERMISSION_DENIED - if the user is not authorized to write to
          * project - INVALID_ARGUMENT - if the request is malformed or if the
          * matrix expands                      to more than 200 supported
          * executions
          * @alias testing.projects.testMatrices.create
          * @memberOf! testing(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.projectId The GCE project under which this job will run.
          * @param {string=} params.requestId A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended.  Optional, but strongly recommended.
          * @param {testing(v1).TestMatrix} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
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
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * testing.projects.testMatrices.get
          * @desc Check the status of a test matrix.  May return any of the
          * following canonical error codes:  - PERMISSION_DENIED - if the user
          * is not authorized to read project - INVALID_ARGUMENT - if the
          * request is malformed - NOT_FOUND - if the Test Matrix does not exist
          * @alias testing.projects.testMatrices.get
          * @memberOf! testing(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.projectId Cloud project that owns the test matrix.
          * @param {string} params.testMatrixId Unique test matrix id which was assigned by the service.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
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
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
  self.testEnvironmentCatalog = {
    /**
     * testing.testEnvironmentCatalog.get
     * @desc Get the catalog of supported test environments.  May return any of
     * the following canonical error codes:  - INVALID_ARGUMENT - if the request
     * is malformed - NOT_FOUND - if the environment type does not exist -
     * INTERNAL - if an internal error occurred
     * @alias testing.testEnvironmentCatalog.get
     * @memberOf! testing(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.environmentType The type of environment that should be listed. Required
     * @param {string=} params.projectId For authorization, the cloud project requesting the TestEnvironmentCatalog. Optional
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef Account
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).GoogleAuto} googleAuto An automatic google login account
 */
/**
 * @typedef AndroidDevice
 * @memberOf! testing(v1)
 * @type object
 * @property {string} androidModelId The id of the Android device to be used. Use the EnvironmentDiscoveryService to get supported options. Required
 * @property {string} androidVersionId The id of the Android OS version to be used. Use the EnvironmentDiscoveryService to get supported options. Required
 * @property {string} locale The locale the test device used for testing. Use the EnvironmentDiscoveryService to get supported options. Required
 * @property {string} orientation How the device is oriented during the test. Use the EnvironmentDiscoveryService to get supported options. Required
 */
/**
 * @typedef AndroidDeviceCatalog
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).AndroidModel[]} models The set of supported Android device models. @OutputOnly
 * @property {testing(v1).AndroidRuntimeConfiguration} runtimeConfiguration The set of supported runtime configurations. @OutputOnly
 * @property {testing(v1).AndroidVersion[]} versions The set of supported Android OS versions. @OutputOnly
 */
/**
 * @typedef AndroidDeviceList
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).AndroidDevice[]} androidDevices A list of Android devices Required
 */
/**
 * @typedef AndroidInstrumentationTest
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).FileReference} appApk The APK for the application under test. Required
 * @property {string} appPackageId The java package for the application under test. Optional, default is determined by examining the application&#39;s manifest.
 * @property {string} orchestratorOption The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.0 or higher! ** Orchestrator offers the following benefits:  - No shared state  - Crashes are isolated  - Logs are scoped per test  See &lt;https://developer.android.com/training/testing/junit-runner.html#using-android-test-orchestrator&gt; for more information about Android Test Orchestrator.  Optional, if empty, test will be run without orchestrator.
 * @property {testing(v1).FileReference} testApk The APK containing the test code to be executed. Required
 * @property {string} testPackageId The java package for the test to be executed. Optional, default is determined by examining the application&#39;s manifest.
 * @property {string} testRunnerClass The InstrumentationTestRunner class. Optional, default is determined by examining the application&#39;s manifest.
 * @property {string[]} testTargets Each target must be fully qualified with the package name or class name, in one of these formats:  - &quot;package package_name&quot;  - &quot;class package_name.class_name&quot;  - &quot;class package_name.class_name#method_name&quot;  Optional, if empty, all targets in the module will be run.
 */
/**
 * @typedef AndroidMatrix
 * @memberOf! testing(v1)
 * @type object
 * @property {string[]} androidModelIds The ids of the set of Android device to be used. Use the EnvironmentDiscoveryService to get supported options. Required
 * @property {string[]} androidVersionIds The ids of the set of Android OS version to be used. Use the EnvironmentDiscoveryService to get supported options. Required
 * @property {string[]} locales The set of locales the test device will enable for testing. Use the EnvironmentDiscoveryService to get supported options. Required
 * @property {string[]} orientations The set of orientations to test with. Use the EnvironmentDiscoveryService to get supported options. Required
 */
/**
 * @typedef AndroidModel
 * @memberOf! testing(v1)
 * @type object
 * @property {string} brand The company that this device is branded with. Example: &quot;Google&quot;, &quot;Samsung&quot; @OutputOnly
 * @property {string} codename The name of the industrial design. This corresponds to android.os.Build.DEVICE @OutputOnly
 * @property {string} form Whether this device is virtual or physical. @OutputOnly
 * @property {string} id The unique opaque id for this model. Use this for invoking the TestExecutionService. @OutputOnly
 * @property {string} manufacturer The manufacturer of this device. @OutputOnly
 * @property {string} name The human-readable marketing name for this device model. Examples: &quot;Nexus 5&quot;, &quot;Galaxy S5&quot; @OutputOnly
 * @property {integer} screenDensity Screen density in DPI. This corresponds to ro.sf.lcd_density @OutputOnly
 * @property {integer} screenX Screen size in the horizontal (X) dimension measured in pixels. @OutputOnly
 * @property {integer} screenY Screen size in the vertical (Y) dimension measured in pixels. @OutputOnly
 * @property {string[]} supportedAbis The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list.  Elements are optionally prefixed by &quot;version_id:&quot; (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version. @OutputOnly
 * @property {string[]} supportedVersionIds The set of Android versions this device supports. @OutputOnly
 * @property {string[]} tags Tags for this dimension. Examples: &quot;default&quot;, &quot;preview&quot;, &quot;deprecated&quot;
 */
/**
 * @typedef AndroidRoboTest
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).FileReference} appApk The APK for the application under test. Required
 * @property {string} appInitialActivity The initial activity that should be used to start the app. Optional
 * @property {string} appPackageId The java package for the application under test. Optional, default is determined by examining the application&#39;s manifest.
 * @property {integer} maxDepth The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50. Optional
 * @property {integer} maxSteps The max number of steps Robo can execute. Default is no limit. Optional
 * @property {testing(v1).RoboDirective[]} roboDirectives A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided. Optional
 * @property {testing(v1).RoboStartingIntent[]} startingIntents The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly).
 */
/**
 * @typedef AndroidRuntimeConfiguration
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).Locale[]} locales The set of available locales. @OutputOnly
 * @property {testing(v1).Orientation[]} orientations The set of available orientations. @OutputOnly
 */
/**
 * @typedef AndroidTestLoop
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).FileReference} appApk The APK for the application under test. Required
 * @property {string} appPackageId The java package for the application under test. Optional, default is determined by examining the application&#39;s manifest.
 * @property {string[]} scenarioLabels The list of scenario labels that should be run during the test. The scenario labels should map to labels defined in the application&#39;s manifest. For example, player_experience and com.google.test.loops.player_experience add all of the loops labeled in the manifest with the com.google.test.loops.player_experience name to the execution. Optional. Scenarios can also be specified in the scenarios field.
 * @property {integer[]} scenarios The list of scenarios that should be run during the test. Optional, default is all test loops, derived from the application&#39;s manifest.
 */
/**
 * @typedef AndroidVersion
 * @memberOf! testing(v1)
 * @type object
 * @property {integer} apiLevel The API level for this Android version. Examples: 18, 19 @OutputOnly
 * @property {string} codeName The code name for this Android version. Examples: &quot;JellyBean&quot;, &quot;KitKat&quot; @OutputOnly
 * @property {testing(v1).Distribution} distribution Market share for this version. @OutputOnly
 * @property {string} id An opaque id for this Android version. Use this id to invoke the TestExecutionService. @OutputOnly
 * @property {testing(v1).Date} releaseDate The date this Android version became available in the market. @OutputOnly
 * @property {string[]} tags Tags for this dimension. Examples: &quot;default&quot;, &quot;preview&quot;, &quot;deprecated&quot;
 * @property {string} versionString A string representing this version of the Android OS. Examples: &quot;4.3&quot;, &quot;4.4&quot; @OutputOnly
 */
/**
 * @typedef CancelTestMatrixResponse
 * @memberOf! testing(v1)
 * @type object
 * @property {string} testState The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect.
 */
/**
 * @typedef ClientInfo
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).ClientInfoDetail[]} clientInfoDetails The list of detailed information about client.
 * @property {string} name Client name, such as gcloud. Required
 */
/**
 * @typedef ClientInfoDetail
 * @memberOf! testing(v1)
 * @type object
 * @property {string} key The key of detailed client information. Required
 * @property {string} value The value of detailed client information. Required
 */
/**
 * @typedef Date
 * @memberOf! testing(v1)
 * @type object
 * @property {integer} day Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year/month where the day is not significant.
 * @property {integer} month Month of year. Must be from 1 to 12.
 * @property {integer} year Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
 */
/**
 * @typedef DeviceFile
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).ObbFile} obbFile A reference to an opaque binary blob file
 */
/**
 * @typedef Distribution
 * @memberOf! testing(v1)
 * @type object
 * @property {number} marketShare The estimated fraction (0-1) of the total market with this configuration. @OutputOnly
 * @property {string} measurementTime The time this distribution was measured. @OutputOnly
 */
/**
 * @typedef Environment
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).AndroidDevice} androidDevice An Android device which must be used with an Android test.
 */
/**
 * @typedef EnvironmentMatrix
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).AndroidDeviceList} androidDeviceList A list of Android devices; the test will be run only on the specified devices.
 * @property {testing(v1).AndroidMatrix} androidMatrix A matrix of Android devices.
 */
/**
 * @typedef EnvironmentVariable
 * @memberOf! testing(v1)
 * @type object
 * @property {string} key Key for the environment variable
 * @property {string} value Value for the environment variable
 */
/**
 * @typedef FileReference
 * @memberOf! testing(v1)
 * @type object
 * @property {string} gcsPath A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app-debug-unaligned.apk
 */
/**
 * @typedef GoogleAuto
 * @memberOf! testing(v1)
 * @type object
 */
/**
 * @typedef GoogleCloudStorage
 * @memberOf! testing(v1)
 * @type object
 * @property {string} gcsPath The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path. Required
 */
/**
 * @typedef LauncherActivityIntent
 * @memberOf! testing(v1)
 * @type object
 */
/**
 * @typedef Locale
 * @memberOf! testing(v1)
 * @type object
 * @property {string} id The id for this locale. Example: &quot;en_US&quot; @OutputOnly
 * @property {string} name A human-friendly name for this language/locale. Example: &quot;English&quot; @OutputOnly
 * @property {string} region A human-friendly string representing the region for this locale. Example: &quot;United States&quot; Not present for every locale. @OutputOnly
 * @property {string[]} tags Tags for this dimension. Examples: &quot;default&quot;
 */
/**
 * @typedef NetworkConfiguration
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).TrafficRule} downRule The emulation rule applying to the download traffic
 * @property {string} id The unique opaque id for this network traffic configuration @OutputOnly
 * @property {testing(v1).TrafficRule} upRule The emulation rule applying to the upload traffic
 */
/**
 * @typedef NetworkConfigurationCatalog
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).NetworkConfiguration[]} configurations
 */
/**
 * @typedef ObbFile
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).FileReference} obb Opaque Binary Blob (OBB) file(s) to install on the device Required
 * @property {string} obbFileName OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into   &lt;shared-storage&gt;/Android/obb/&lt;package-name&gt;/ on the device Required
 */
/**
 * @typedef Orientation
 * @memberOf! testing(v1)
 * @type object
 * @property {string} id The id for this orientation. Example: &quot;portrait&quot; @OutputOnly
 * @property {string} name A human-friendly name for this orientation. Example: &quot;portrait&quot; @OutputOnly
 * @property {string[]} tags Tags for this dimension. Examples: &quot;default&quot;
 */
/**
 * @typedef ResultStorage
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).GoogleCloudStorage} googleCloudStorage Required.
 * @property {testing(v1).ToolResultsExecution} toolResultsExecution The tool results execution that results are written to. @OutputOnly
 * @property {testing(v1).ToolResultsHistory} toolResultsHistory The tool results history that contains the tool results execution that results are written to.  Optional, if not provided the service will choose an appropriate value.
 */
/**
 * @typedef RoboDirective
 * @memberOf! testing(v1)
 * @type object
 * @property {string} actionType The type of action that Robo should perform on the specified element. Required.
 * @property {string} inputText The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name. Optional
 * @property {string} resourceName The android resource name of the target UI element For example,    in Java: R.string.foo    in xml: @string/foo Only the “foo” part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html Required
 */
/**
 * @typedef RoboStartingIntent
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).LauncherActivityIntent} launcherActivity
 * @property {testing(v1).StartActivityIntent} startActivity
 */
/**
 * @typedef StartActivityIntent
 * @memberOf! testing(v1)
 * @type object
 * @property {string} action Action name. Required for START_ACTIVITY.
 * @property {string[]} categories Intent categories to set on the intent. Optional.
 * @property {string} uri URI for the action. Optional.
 */
/**
 * @typedef TestDetails
 * @memberOf! testing(v1)
 * @type object
 * @property {string} errorMessage If the TestState is ERROR, then this string will contain human-readable details about the error. @OutputOnly
 * @property {string[]} progressMessages Human-readable, detailed descriptions of the test&#39;s progress. For example: &quot;Provisioning a device&quot;, &quot;Starting Test&quot;.  During the course of execution new data may be appended to the end of progress_messages. @OutputOnly
 */
/**
 * @typedef TestEnvironmentCatalog
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).AndroidDeviceCatalog} androidDeviceCatalog Android devices suitable for running Android Instrumentation Tests.
 * @property {testing(v1).NetworkConfigurationCatalog} networkConfigurationCatalog Supported network configurations
 */
/**
 * @typedef TestExecution
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).Environment} environment How the host machine(s) are configured. @OutputOnly
 * @property {string} id Unique id set by the backend. @OutputOnly
 * @property {string} matrixId Id of the containing TestMatrix. @OutputOnly
 * @property {string} projectId The cloud project that owns the test execution. @OutputOnly
 * @property {string} state Indicates the current progress of the test execution (e.g., FINISHED). @OutputOnly
 * @property {testing(v1).TestDetails} testDetails Additional details about the running test. @OutputOnly
 * @property {testing(v1).TestSpecification} testSpecification How to run the test. @OutputOnly
 * @property {string} timestamp The time this test execution was initially created. @OutputOnly
 * @property {testing(v1).ToolResultsStep} toolResultsStep Where the results for this execution are written. @OutputOnly
 */
/**
 * @typedef TestMatrix
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).ClientInfo} clientInfo Information about the client which invoked the test. Optional
 * @property {testing(v1).EnvironmentMatrix} environmentMatrix How the host machine(s) are configured. Required
 * @property {string} invalidMatrixDetails Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state. @OutputOnly
 * @property {string} projectId The cloud project that owns the test matrix. @OutputOnly
 * @property {testing(v1).ResultStorage} resultStorage Where the results for the matrix are written. Required
 * @property {string} state Indicates the current progress of the test matrix (e.g., FINISHED) @OutputOnly
 * @property {testing(v1).TestExecution[]} testExecutions The list of test executions that the service creates for this matrix. @OutputOnly
 * @property {string} testMatrixId Unique id set by the service. @OutputOnly
 * @property {testing(v1).TestSpecification} testSpecification How to run the test. Required
 * @property {string} timestamp The time this test matrix was initially created. @OutputOnly
 */
/**
 * @typedef TestSetup
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).Account} account The device will be logged in on this account for the duration of the test. Optional
 * @property {string[]} directoriesToPull List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and /  Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device.  Optional
 * @property {testing(v1).EnvironmentVariable[]} environmentVariables Environment variables to set for the test (only applicable for instrumentation tests).
 * @property {testing(v1).DeviceFile[]} filesToPush List of files to push to the device before starting the test.  Optional
 * @property {string} networkProfile The network traffic profile used for running the test. Optional
 */
/**
 * @typedef TestSpecification
 * @memberOf! testing(v1)
 * @type object
 * @property {testing(v1).AndroidInstrumentationTest} androidInstrumentationTest An Android instrumentation test.
 * @property {testing(v1).AndroidRoboTest} androidRoboTest An Android robo test.
 * @property {testing(v1).AndroidTestLoop} androidTestLoop An Android Application with a Test Loop
 * @property {boolean} autoGoogleLogin Enables automatic Google account login. If set, the service will automatically generate a Google test account and add it to the device, before executing the test. Note that test accounts might be reused. Many applications show their full set of functionalities when an account is present on the device. Logging into the device with these generated accounts allows testing more functionalities. Default is false. Optional
 * @property {boolean} disablePerformanceMetrics Disables performance metrics recording; may reduce test latency.
 * @property {boolean} disableVideoRecording Disables video recording; may reduce test latency.
 * @property {testing(v1).TestSetup} testSetup Test setup requirements e.g. files to install, bootstrap scripts Optional
 * @property {string} testTimeout Max time a test execution is allowed to run before it is automatically cancelled. Optional, default is 5 min.
 */
/**
 * @typedef ToolResultsExecution
 * @memberOf! testing(v1)
 * @type object
 * @property {string} executionId A tool results execution ID. @OutputOnly
 * @property {string} historyId A tool results history ID. @OutputOnly
 * @property {string} projectId The cloud project that owns the tool results execution. @OutputOnly
 */
/**
 * @typedef ToolResultsHistory
 * @memberOf! testing(v1)
 * @type object
 * @property {string} historyId A tool results history ID. Required
 * @property {string} projectId The cloud project that owns the tool results history. Required
 */
/**
 * @typedef ToolResultsStep
 * @memberOf! testing(v1)
 * @type object
 * @property {string} executionId A tool results execution ID. @OutputOnly
 * @property {string} historyId A tool results history ID. @OutputOnly
 * @property {string} projectId The cloud project that owns the tool results step. @OutputOnly
 * @property {string} stepId A tool results step ID. @OutputOnly
 */
/**
 * @typedef TrafficRule
 * @memberOf! testing(v1)
 * @type object
 * @property {number} bandwidth Bandwidth in kbits/second
 * @property {number} burst Burst size in kbits
 * @property {string} delay Packet delay, must be &gt;= 0
 * @property {number} packetDuplicationRatio Packet duplication ratio (0.0 - 1.0)
 * @property {number} packetLossRatio Packet loss ratio (0.0 - 1.0)
 */

export = Testing;
