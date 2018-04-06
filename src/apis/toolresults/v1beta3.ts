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
 * Cloud Tool Results API
 *
 * Reads and publishes results from Firebase Test Lab.
 *
 * @example
 * const google = require('googleapis');
 * const toolresults = google.toolresults('v1beta3');
 *
 * @namespace toolresults
 * @type {Function}
 * @version v1beta3
 * @variation v1beta3
 * @param {object=} options Options for Toolresults
 */
export class Toolresults {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.projects = new Resource$Projects(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Android app information.
 */
export interface Schema$AndroidAppInfo {
  /**
   * The name of the app. Optional
   */
  name: string;
  /**
   * The package name of the app. Required.
   */
  packageName: string;
  /**
   * The internal version code of the app. Optional.
   */
  versionCode: string;
  /**
   * The version name of the app. Optional.
   */
  versionName: string;
}
/**
 * A test of an Android application that can control an Android component
 * independently of its normal lifecycle.  See  for more information on types of
 * Android tests.
 */
export interface Schema$AndroidInstrumentationTest {
  /**
   * The java package for the test to be executed. Required
   */
  testPackageId: string;
  /**
   * The InstrumentationTestRunner class. Required
   */
  testRunnerClass: string;
  /**
   * Each target must be fully qualified with the package name or class name, in
   * one of these formats: - &quot;package package_name&quot; - &quot;class
   * package_name.class_name&quot; - &quot;class
   * package_name.class_name#method_name&quot;  If empty, all targets in the
   * module will be run.
   */
  testTargets: string[];
  /**
   * The flag indicates whether Android Test Orchestrator will be used to run
   * test or not.
   */
  useOrchestrator: boolean;
}
/**
 * A test of an android application that explores the application on a virtual
 * or physical Android device, finding culprits and crashes as it goes.
 */
export interface Schema$AndroidRoboTest {
  /**
   * The initial activity that should be used to start the app. Optional
   */
  appInitialActivity: string;
  /**
   * The java package for the bootstrap. Optional
   */
  bootstrapPackageId: string;
  /**
   * The runner class for the bootstrap. Optional
   */
  bootstrapRunnerClass: string;
  /**
   * The max depth of the traversal stack Robo can explore. Optional
   */
  maxDepth: number;
  /**
   * The max number of steps/actions Robo can execute. Default is no limit (0).
   * Optional
   */
  maxSteps: number;
}
/**
 * An Android mobile test specification.
 */
export interface Schema$AndroidTest {
  /**
   * Information about the application under test.
   */
  androidAppInfo: Schema$AndroidAppInfo;
  /**
   * An Android instrumentation test.
   */
  androidInstrumentationTest: Schema$AndroidInstrumentationTest;
  /**
   * An Android robo test.
   */
  androidRoboTest: Schema$AndroidRoboTest;
  /**
   * Max time a test is allowed to run before it is automatically cancelled.
   */
  testTimeout: Schema$Duration;
}
/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.  Protobuf library
 * provides support to pack/unpack Any values in the form of utility functions
 * or additional generated methods of the Any type.  Example 1: Pack and unpack
 * a message in C++.  Foo foo = ...; Any any; any.PackFrom(foo); ... if
 * (any.UnpackTo(&amp;foo)) { ... }  Example 2: Pack and unpack a message in
 * Java.  Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) {
 * foo = any.unpack(Foo.class); }  Example 3: Pack and unpack a message in
 * Python.  foo = Foo(...) any = Any() any.Pack(foo) ... if
 * any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ...  Example 4: Pack and unpack a
 * message in Go  foo := &amp;pb.Foo{...} any, err := ptypes.MarshalAny(foo) ...
 * foo := &amp;pb.Foo{} if err := ptypes.UnmarshalAny(any, foo); err != nil {
 * ... }  The pack methods provided by protobuf library will by default use
 * &#39;type.googleapis.com/full.type.name&#39; as the type URL and the unpack
 * methods only use the fully qualified type name after the last &#39;/&#39; in
 * the type URL, for example &quot;foo.bar.com/x/y.z&quot; will yield type name
 * &quot;y.z&quot;.    JSON ==== The JSON representation of an `Any` value uses
 * the regular representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:  package
 * google.profile; message Person { string first_name = 1; string last_name = 2;
 * }  { &quot;@type&quot;:
 * &quot;type.googleapis.com/google.profile.Person&quot;, &quot;firstName&quot;:
 * , &quot;lastName&quot;:  }  If the embedded message type is well-known and
 * has a custom JSON representation, that representation will be embedded adding
 * a field `value` which holds the custom JSON in addition to the `@type` field.
 * Example (for message [google.protobuf.Duration][]):  { &quot;@type&quot;:
 * &quot;type.googleapis.com/google.protobuf.Duration&quot;, &quot;value&quot;:
 * &quot;1.212s&quot; }
 */
export interface Schema$Any {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. The last segment of the URL&#39;s path must
   * represent the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading &quot;.&quot; is not accepted).  In practice, teams usually
   * precompile into the binary all types that they expect it to use in the
   * context of Any. However, for URLs which use the scheme `http`, `https`, or
   * no scheme, one can optionally set up a type server that maps type URLs to
   * message definitions as follows:  * If no scheme is provided, `https` is
   * assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   * value in binary format, or produce an error. * Applications are allowed to
   * cache lookup results based on the URL, or have them precompiled into a
   * binary to avoid any lookup. Therefore, binary compatibility needs to be
   * preserved on changes to types. (Use versioned type names to manage breaking
   * changes.)  Note: this functionality is not currently available in the
   * official protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.  Schemes other than `http`, `https` (or the empty
   * scheme) might be used with implementation specific semantics.
   */
  typeUrl: string;
  /**
   * Must be a valid serialized protocol buffer of the above specified type.
   */
  value: string;
}
export interface Schema$AppStartTime {
  /**
   * Optional. The time from app start to reaching the developer-reported
   * &quot;fully drawn&quot; time. This is only stored if the app includes a
   * call to Activity.reportFullyDrawn(). See
   * https://developer.android.com/topic/performance/launch-time.html#time-full
   */
  fullyDrawnTime: Schema$Duration;
  /**
   * The time from app start to the first displayed activity being drawn, as
   * reported in Logcat. See
   * https://developer.android.com/topic/performance/launch-time.html#time-initial
   */
  initialDisplayTime: Schema$Duration;
}
/**
 * Encapsulates the metadata for basic sample series represented by a line chart
 */
export interface Schema$BasicPerfSampleSeries {
  perfMetricType: string;
  perfUnit: string;
  sampleSeriesLabel: string;
}
/**
 * The request must provide up to a maximum of 5000 samples to be created; a
 * larger sample size will cause an INVALID_ARGUMENT error
 */
export interface Schema$BatchCreatePerfSamplesRequest {
  /**
   * The set of PerfSamples to create should not include existing timestamps
   */
  perfSamples: Schema$PerfSample[];
}
export interface Schema$BatchCreatePerfSamplesResponse {
  perfSamples: Schema$PerfSample[];
}
export interface Schema$CPUInfo {
  /**
   * description of the device processor ie &#39;1.8 GHz hexa core 64-bit
   * ARMv8-A&#39;
   */
  cpuProcessor: string;
  /**
   * the CPU clock speed in GHz
   */
  cpuSpeedInGhz: number;
  /**
   * the number of CPU cores
   */
  numberOfCores: number;
}
/**
 * A Duration represents a signed, fixed-length span of time represented as a
 * count of seconds and fractions of seconds at nanosecond resolution. It is
 * independent of any calendar and concepts like &quot;day&quot; or
 * &quot;month&quot;. It is related to Timestamp in that the difference between
 * two Timestamp values is a Duration and it can be added or subtracted from a
 * Timestamp. Range is approximately +-10,000 years.  # Examples  Example 1:
 * Compute Duration from two Timestamps in pseudo code.  Timestamp start = ...;
 * Timestamp end = ...; Duration duration = ...;  duration.seconds = end.seconds
 * - start.seconds; duration.nanos = end.nanos - start.nanos;  if
 * (duration.seconds  0) { duration.seconds += 1; duration.nanos -= 1000000000;
 * } else if (durations.seconds &gt; 0 &amp;&amp; duration.nanos &lt; 0) {
 * duration.seconds -= 1; duration.nanos += 1000000000; }  Example 2: Compute
 * Timestamp from Timestamp + Duration in pseudo code.  Timestamp start = ...;
 * Duration duration = ...; Timestamp end = ...;  end.seconds = start.seconds +
 * duration.seconds; end.nanos = start.nanos + duration.nanos;  if (end.nanos =
 * 1000000000) { end.seconds += 1; end.nanos -= 1000000000; }  Example 3:
 * Compute Duration from datetime.timedelta in Python.  td =
 * datetime.timedelta(days=3, minutes=10) duration = Duration()
 * duration.FromTimedelta(td)  # JSON Mapping  In JSON format, the Duration type
 * is encoded as a string rather than an object, where the string ends in the
 * suffix &quot;s&quot; (indicating seconds) and is preceded by the number of
 * seconds, with nanoseconds expressed as fractional seconds. For example, 3
 * seconds with 0 nanoseconds should be encoded in JSON format as
 * &quot;3s&quot;, while 3 seconds and 1 nanosecond should be expressed in JSON
 * format as &quot;3.000000001s&quot;, and 3 seconds and 1 microsecond should be
 * expressed in JSON format as &quot;3.000001s&quot;.
 */
export interface Schema$Duration {
  /**
   * Signed fractions of a second at nanosecond resolution of the span of time.
   * Durations less than one second are represented with a 0 `seconds` field and
   * a positive or negative `nanos` field. For durations of one second or more,
   * a non-zero value for the `nanos` field must be of the same sign as the
   * `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.
   */
  nanos: number;
  /**
   * Signed seconds of the span of time. Must be from -315,576,000,000 to
   * +315,576,000,000 inclusive. Note: these bounds are computed from: 60
   * sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
   */
  seconds: string;
}
/**
 * An Execution represents a collection of Steps. For instance, it could
 * represent: - a mobile test executed across a range of device configurations -
 * a jenkins job with a build step followed by a test step  The maximum size of
 * an execution message is 1 MiB.  An Execution can be updated until its state
 * is set to COMPLETE at which point it becomes immutable.
 */
export interface Schema$Execution {
  /**
   * The time when the Execution status transitioned to COMPLETE.  This value
   * will be set automatically when state transitions to COMPLETE.  - In
   * response: set if the execution state is COMPLETE. - In create/update
   * request: never set
   */
  completionTime: Schema$Timestamp;
  /**
   * The time when the Execution was created.  This value will be set
   * automatically when CreateExecution is called.  - In response: always set -
   * In create/update request: never set
   */
  creationTime: Schema$Timestamp;
  /**
   * A unique identifier within a History for this Execution.  Returns
   * INVALID_ARGUMENT if this field is set or overwritten by the caller.  - In
   * response always set - In create/update request: never set
   */
  executionId: string;
  /**
   * Classify the result, for example into SUCCESS or FAILURE  - In response:
   * present if set by create/update request - In create/update request:
   * optional
   */
  outcome: Schema$Outcome;
  /**
   * Lightweight information about execution request.  - In response: present if
   * set by create - In create: optional - In update: optional
   */
  specification: Schema$Specification;
  /**
   * The initial state is IN_PROGRESS.  The only legal state transitions is from
   * IN_PROGRESS to COMPLETE.  A PRECONDITION_FAILED will be returned if an
   * invalid transition is requested.  The state can only be set to COMPLETE
   * once. A FAILED_PRECONDITION will be returned if the state is set to
   * COMPLETE multiple times.  If the state is set to COMPLETE, all the
   * in-progress steps within the execution will be set as COMPLETE. If the
   * outcome of the step is not set, the outcome will be set to INCONCLUSIVE.  -
   * In response always set - In create/update request: optional
   */
  state: string;
  /**
   * TestExecution Matrix ID that the TestExecutionService uses.  - In response:
   * present if set by create - In create: optional - In update: never set
   */
  testExecutionMatrixId: string;
}
export interface Schema$FailureDetail {
  /**
   * If the failure was severe because the system (app) under test crashed.
   */
  crashed: boolean;
  /**
   * If an app is not installed and thus no test can be run with the app. This
   * might be caused by trying to run a test on an unsupported platform.
   */
  notInstalled: boolean;
  /**
   * If a native process (including any other than the app) crashed.
   */
  otherNativeCrash: boolean;
  /**
   * If the test overran some time limit, and that is why it failed.
   */
  timedOut: boolean;
  /**
   * If the robo was unable to crawl the app; perhaps because the app did not
   * start.
   */
  unableToCrawl: boolean;
}
/**
 * A reference to a file.
 */
export interface Schema$FileReference {
  /**
   * The URI of a file stored in Google Cloud Storage.  For example:
   * http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil
   * format: gs://mybucket/path/to/test.xml with version-specific info,
   * gs://mybucket/path/to/test.xml#1360383693690000  An INVALID_ARGUMENT error
   * will be returned if the URI format is not supported.  - In response: always
   * set - In create/update request: always set
   */
  fileUri: string;
}
/**
 * Graphics statistics for the App. The information is collected from &#39;adb
 * shell dumpsys graphicsstats&#39;. For more info see:
 * https://developer.android.com/training/testing/performance.html Statistics
 * will only be present for API 23+.
 */
export interface Schema$GraphicsStats {
  /**
   * Histogram of frame render times. There should be 154 buckets ranging from
   * [5ms, 6ms) to [4950ms, infinity)
   */
  buckets: Schema$GraphicsStatsBucket[];
  /**
   * Total &quot;high input latency&quot; events.
   */
  highInputLatencyCount: string;
  /**
   * Total frames with slow render time. Should be &lt;= total_frames.
   */
  jankyFrames: string;
  /**
   * Total &quot;missed vsync&quot; events.
   */
  missedVsyncCount: string;
  /**
   * 50th percentile frame render time in milliseconds.
   */
  p50Millis: string;
  /**
   * 90th percentile frame render time in milliseconds.
   */
  p90Millis: string;
  /**
   * 95th percentile frame render time in milliseconds.
   */
  p95Millis: string;
  /**
   * 99th percentile frame render time in milliseconds.
   */
  p99Millis: string;
  /**
   * Total &quot;slow bitmap upload&quot; events.
   */
  slowBitmapUploadCount: string;
  /**
   * Total &quot;slow draw&quot; events.
   */
  slowDrawCount: string;
  /**
   * Total &quot;slow UI thread&quot; events.
   */
  slowUiThreadCount: string;
  /**
   * Total frames rendered by package.
   */
  totalFrames: string;
}
export interface Schema$GraphicsStatsBucket {
  /**
   * Number of frames in the bucket.
   */
  frameCount: string;
  /**
   * Lower bound of render time in milliseconds.
   */
  renderMillis: string;
}
/**
 * A History represents a sorted list of Executions ordered by the
 * start_timestamp_millis field (descending). It can be used to group all the
 * Executions of a continuous build.  Note that the ordering only operates on
 * one-dimension. If a repository has multiple branches, it means that multiple
 * histories will need to be used in order to order Executions per branch.
 */
export interface Schema$History {
  /**
   * A short human-readable (plain text) name to display in the UI. Maximum of
   * 100 characters.  - In response: present if set during create. - In create
   * request: optional
   */
  displayName: string;
  /**
   * A unique identifier within a project for this History.  Returns
   * INVALID_ARGUMENT if this field is set or overwritten by the caller.  - In
   * response always set - In create request: never set
   */
  historyId: string;
  /**
   * A name to uniquely identify a history within a project. Maximum of 200
   * characters.  - In response always set - In create request: always set
   */
  name: string;
}
/**
 * An image, with a link to the main image and a thumbnail.
 */
export interface Schema$Image {
  /**
   * An error explaining why the thumbnail could not be rendered.
   */
  error: Schema$Status;
  /**
   * A reference to the full-size, original image.  This is the same as the
   * tool_outputs entry for the image under its Step.  Always set.
   */
  sourceImage: Schema$ToolOutputReference;
  /**
   * The step to which the image is attached.  Always set.
   */
  stepId: string;
  /**
   * The thumbnail.
   */
  thumbnail: Schema$Thumbnail;
}
export interface Schema$InconclusiveDetail {
  /**
   * If the end user aborted the test execution before a pass or fail could be
   * determined. For example, the user pressed ctrl-c which sent a kill signal
   * to the test runner while the test was running.
   */
  abortedByUser: boolean;
  /**
   * If the test runner could not determine success or failure because the test
   * depends on a component other than the system under test which failed.  For
   * example, a mobile test requires provisioning a device where the test
   * executes, and that provisioning can fail.
   */
  infrastructureFailure: boolean;
}
export interface Schema$ListExecutionsResponse {
  /**
   * Executions.  Always set.
   */
  executions: Schema$Execution[];
  /**
   * A continuation token to resume the query at the next item.  Will only be
   * set if there are more Executions to fetch.
   */
  nextPageToken: string;
}
/**
 * Response message for HistoryService.List
 */
export interface Schema$ListHistoriesResponse {
  /**
   * Histories.
   */
  histories: Schema$History[];
  /**
   * A continuation token to resume the query at the next item.  Will only be
   * set if there are more histories to fetch.  Tokens are valid for up to one
   * hour from the time of the first list request. For instance, if you make a
   * list request at 1PM and use the token from this first request 10 minutes
   * later, the token from this second response will only be valid for 50
   * minutes.
   */
  nextPageToken: string;
}
export interface Schema$ListPerfSampleSeriesResponse {
  /**
   * The resulting PerfSampleSeries sorted by id
   */
  perfSampleSeries: Schema$PerfSampleSeries[];
}
export interface Schema$ListPerfSamplesResponse {
  /**
   * Optional, returned if result size exceeds the page size specified in the
   * request (or the default page size, 500, if unspecified). It indicates the
   * last sample timestamp to be used as page_token in subsequent request
   */
  nextPageToken: string;
  perfSamples: Schema$PerfSample[];
}
export interface Schema$ListScreenshotClustersResponse {
  /**
   * The set of clusters associated with an execution Always set
   */
  clusters: Schema$ScreenshotCluster[];
}
/**
 * Response message for StepService.List.
 */
export interface Schema$ListStepsResponse {
  /**
   * A continuation token to resume the query at the next item.  If set,
   * indicates that there are more steps to read, by calling list again with
   * this value in the page_token field.
   */
  nextPageToken: string;
  /**
   * Steps.
   */
  steps: Schema$Step[];
}
/**
 * A response containing the thumbnails in a step.
 */
export interface Schema$ListStepThumbnailsResponse {
  /**
   * A continuation token to resume the query at the next item.  If set,
   * indicates that there are more thumbnails to read, by calling list again
   * with this value in the page_token field.
   */
  nextPageToken: string;
  /**
   * A list of image data.  Images are returned in a deterministic order; they
   * are ordered by these factors, in order of importance: * First, by their
   * associated test case. Images without a test case are considered greater
   * than images with one. * Second, by their creation time. Images without a
   * creation time are greater than images with one. * Third, by the order in
   * which they were added to the step (by calls to CreateStep or UpdateStep).
   */
  thumbnails: Schema$Image[];
}
export interface Schema$MemoryInfo {
  /**
   * Maximum memory that can be allocated to the process in KiB
   */
  memoryCapInKibibyte: string;
  /**
   * Total memory available on the device in KiB
   */
  memoryTotalInKibibyte: string;
}
/**
 * Interprets a result so that humans and machines can act on it.
 */
export interface Schema$Outcome {
  /**
   * More information about a FAILURE outcome.  Returns INVALID_ARGUMENT if this
   * field is set but the summary is not FAILURE.  Optional
   */
  failureDetail: Schema$FailureDetail;
  /**
   * More information about an INCONCLUSIVE outcome.  Returns INVALID_ARGUMENT
   * if this field is set but the summary is not INCONCLUSIVE.  Optional
   */
  inconclusiveDetail: Schema$InconclusiveDetail;
  /**
   * More information about a SKIPPED outcome.  Returns INVALID_ARGUMENT if this
   * field is set but the summary is not SKIPPED.  Optional
   */
  skippedDetail: Schema$SkippedDetail;
  /**
   * More information about a SUCCESS outcome.  Returns INVALID_ARGUMENT if this
   * field is set but the summary is not SUCCESS.  Optional
   */
  successDetail: Schema$SuccessDetail;
  /**
   * The simplest way to interpret a result.  Required
   */
  summary: string;
}
/**
 * Encapsulates performance environment info
 */
export interface Schema$PerfEnvironment {
  /**
   * CPU related environment info
   */
  cpuInfo: Schema$CPUInfo;
  /**
   * Memory related environment info
   */
  memoryInfo: Schema$MemoryInfo;
}
/**
 * A summary of perf metrics collected and performance environment info
 */
export interface Schema$PerfMetricsSummary {
  appStartTime: Schema$AppStartTime;
  /**
   * A tool results execution ID.
   */
  executionId: string;
  /**
   * Graphics statistics for the entire run. Statistics are reset at the
   * beginning of the run and collected at the end of the run.
   */
  graphicsStats: Schema$GraphicsStats;
  /**
   * A tool results history ID.
   */
  historyId: string;
  /**
   * Describes the environment in which the performance metrics were collected
   */
  perfEnvironment: Schema$PerfEnvironment;
  /**
   * Set of resource collected
   */
  perfMetrics: string[];
  /**
   * The cloud project
   */
  projectId: string;
  /**
   * A tool results step ID.
   */
  stepId: string;
}
/**
 * Resource representing a single performance measure or data point
 */
export interface Schema$PerfSample {
  /**
   * Timestamp of collection
   */
  sampleTime: Schema$Timestamp;
  /**
   * Value observed
   */
  value: number;
}
/**
 * Resource representing a collection of performance samples (or data points)
 */
export interface Schema$PerfSampleSeries {
  /**
   * Basic series represented by a line chart
   */
  basicPerfSampleSeries: Schema$BasicPerfSampleSeries;
  /**
   * A tool results execution ID.
   */
  executionId: string;
  /**
   * A tool results history ID.
   */
  historyId: string;
  /**
   * The cloud project
   */
  projectId: string;
  /**
   * A sample series id
   */
  sampleSeriesId: string;
  /**
   * A tool results step ID.
   */
  stepId: string;
}
/**
 * Per-project settings for the Tool Results service.
 */
export interface Schema$ProjectSettings {
  /**
   * The name of the Google Cloud Storage bucket to which results are written.
   * By default, this is unset.  In update request: optional In response:
   * optional
   */
  defaultBucket: string;
  /**
   * The name of the project&#39;s settings.  Always of the form:
   * projects/{project-id}/settings  In update request: never set In response:
   * always set
   */
  name: string;
}
/**
 * Request message for StepService.PublishXunitXmlFiles.
 */
export interface Schema$PublishXunitXmlFilesRequest {
  /**
   * URI of the Xunit XML files to publish.  The maximum size of the file this
   * reference is pointing to is 50MB.  Required.
   */
  xunitXmlFiles: Schema$FileReference[];
}
export interface Schema$Screen {
  /**
   * File reference of the png file. Required.
   */
  fileReference: string;
  /**
   * Locale of the device that the screenshot was taken on. Required.
   */
  locale: string;
  /**
   * Model of the device that the screenshot was taken on. Required.
   */
  model: string;
  /**
   * OS version of the device that the screenshot was taken on. Required.
   */
  version: string;
}
export interface Schema$ScreenshotCluster {
  /**
   * A string that describes the activity of every screen in the cluster.
   */
  activity: string;
  /**
   * A unique identifier for the cluster.
   */
  clusterId: string;
  /**
   * A singular screen that represents the cluster as a whole. This screen will
   * act as the &quot;cover&quot; of the entire cluster. When users look at the
   * clusters, only the key screen from each cluster will be shown. Which screen
   * is the key screen is determined by the ClusteringAlgorithm
   */
  keyScreen: Schema$Screen;
  /**
   * Full list of screens.
   */
  screens: Schema$Screen[];
}
export interface Schema$SkippedDetail {
  /**
   * If the App doesn&#39;t support the specific API level.
   */
  incompatibleAppVersion: boolean;
  /**
   * If the App doesn&#39;t run on the specific architecture, for example, x86.
   */
  incompatibleArchitecture: boolean;
  /**
   * If the requested OS version doesn&#39;t run on the specific device model.
   */
  incompatibleDevice: boolean;
}
/**
 * The details about how to run the execution.
 */
export interface Schema$Specification {
  /**
   * An Android mobile test execution specification.
   */
  androidTest: Schema$AndroidTest;
}
/**
 * A stacktrace.
 */
export interface Schema$StackTrace {
  /**
   * Exception cluster ID
   */
  clusterId: string;
  /**
   * The stack trace message.  Required
   */
  exception: string;
  /**
   * Exception report ID
   */
  reportId: string;
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of [google.rpc.Code][], but it may accept additional error
 * codes if needed. The error message should be a developer-facing English
 * message that helps developers *understand* and *resolve* the error. If a
 * localized user-facing error message is needed, put the localized message in
 * the error details or localize it in the client. The optional error details
 * may contain arbitrary information about the error. There is a predefined set
 * of error detail types in the package `google.rpc` that can be used for common
 * error conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client, it may embed the
 * `Status` in the normal response to indicate the partial errors.  - Workflow
 * errors. A typical workflow has multiple steps. Each step may have a `Status`
 * message for error reporting.  - Batch operations. If a client uses batch
 * request and batch response, the `Status` message should be used directly
 * inside batch response, one for each error sub-response.  - Asynchronous
 * operations. If an API call embeds asynchronous operation results in its
 * response, the status of those operations should be represented directly using
 * the `Status` message.  - Logging. If some API errors are stored in logs, the
 * message `Status` could be used directly after any stripping needed for
 * security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of [google.rpc.Code][].
   */
  code: number;
  /**
   * A list of messages that carry the error details. There is a common set of
   * message types for APIs to use.
   */
  details: Schema$Any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * [google.rpc.Status.details][] field, or localized by the client.
   */
  message: string;
}
/**
 * A Step represents a single operation performed as part of Execution. A step
 * can be used to represent the execution of a tool ( for example a test runner
 * execution or an execution of a compiler).  Steps can overlap (for instance
 * two steps might have the same start time if some operations are done in
 * parallel).  Here is an example, let&#39;s consider that we have a continuous
 * build is executing a test runner for each iteration. The workflow would look
 * like: - user creates a Execution with id 1 - user creates an
 * TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep
 * with id 100 to add a raw xml log + the service parses the xml logs and
 * returns a TestExecutionStep with updated TestResult(s). - user update the
 * status of TestExecutionStep with id 100 to COMPLETE  A Step can be updated
 * until its state is set to COMPLETE at which points it becomes immutable.
 */
export interface Schema$Step {
  /**
   * The time when the step status was set to complete.  This value will be set
   * automatically when state transitions to COMPLETE.  - In response: set if
   * the execution state is COMPLETE. - In create/update request: never set
   */
  completionTime: Schema$Timestamp;
  /**
   * The time when the step was created.  - In response: always set - In
   * create/update request: never set
   */
  creationTime: Schema$Timestamp;
  /**
   * A description of this tool For example: mvn clean package -D skipTests=true
   * - In response: present if set by create/update request - In create/update
   * request: optional
   */
  description: string;
  /**
   * How much the device resource is used to perform the test.  This is the
   * device usage used for billing purpose, which is different from the
   * run_duration, for example, infrastructure failure won&#39;t be charged for
   * device usage.  PRECONDITION_FAILED will be returned if one attempts to set
   * a device_usage on a step which already has this field set.  - In response:
   * present if previously set. - In create request: optional - In update
   * request: optional
   */
  deviceUsageDuration: Schema$Duration;
  /**
   * If the execution containing this step has any dimension_definition set,
   * then this field allows the child to specify the values of the dimensions.
   * The keys must exactly match the dimension_definition of the execution.  For
   * example, if the execution has `dimension_definition = [&#39;attempt&#39;,
   * &#39;device&#39;]` then a step must define values for those dimensions, eg.
   * `dimension_value = [&#39;attempt&#39;: &#39;1&#39;, &#39;device&#39;:
   * &#39;Nexus 6&#39;]`  If a step does not participate in one dimension of the
   * matrix, the value for that dimension should be empty string. For example,
   * if one of the tests is executed by a runner which does not support retries,
   * the step could have `dimension_value = [&#39;attempt&#39;: &#39;&#39;,
   * &#39;device&#39;: &#39;Nexus 6&#39;]`  If the step does not participate in
   * any dimensions of the matrix, it may leave dimension_value unset.  A
   * PRECONDITION_FAILED will be returned if any of the keys do not exist in the
   * dimension_definition of the execution.  A PRECONDITION_FAILED will be
   * returned if another step in this execution already has the same name and
   * dimension_value, but differs on other data fields, for example, step field
   * is different.  A PRECONDITION_FAILED will be returned if dimension_value is
   * set, and there is a dimension_definition in the execution which is not
   * specified as one of the keys.  - In response: present if set by create - In
   * create request: optional - In update request: never set
   */
  dimensionValue: Schema$StepDimensionValueEntry[];
  /**
   * Whether any of the outputs of this step are images whose thumbnails can be
   * fetched with ListThumbnails.  - In response: always set - In create/update
   * request: never set
   */
  hasImages: boolean;
  /**
   * Arbitrary user-supplied key/value pairs that are associated with the step.
   * Users are responsible for managing the key namespace such that keys
   * don&#39;t accidentally collide.  An INVALID_ARGUMENT will be returned if
   * the number of labels exceeds 100 or if the length of any of the keys or
   * values exceeds 100 characters.  - In response: always set - In create
   * request: optional - In update request: optional; any new key/value pair
   * will be added to the map, and any new value for an existing key will update
   * that key&#39;s value
   */
  labels: Schema$StepLabelsEntry[];
  /**
   * A short human-readable name to display in the UI. Maximum of 100
   * characters. For example: Clean build  A PRECONDITION_FAILED will be
   * returned upon creating a new step if it shares its name and dimension_value
   * with an existing step. If two steps represent a similar action, but have
   * different dimension values, they should share the same name. For instance,
   * if the same set of tests is run on two different platforms, the two steps
   * should have the same name.  - In response: always set - In create request:
   * always set - In update request: never set
   */
  name: string;
  /**
   * Classification of the result, for example into SUCCESS or FAILURE  - In
   * response: present if set by create/update request - In create/update
   * request: optional
   */
  outcome: Schema$Outcome;
  /**
   * How long it took for this step to run.  If unset, this is set to the
   * difference between creation_time and completion_time when the step is set
   * to the COMPLETE state. In some cases, it is appropriate to set this value
   * separately: For instance, if a step is created, but the operation it
   * represents is queued for a few minutes before it executes, it would be
   * appropriate not to include the time spent queued in its run_duration.
   * PRECONDITION_FAILED will be returned if one attempts to set a run_duration
   * on a step which already has this field set.  - In response: present if
   * previously set; always present on COMPLETE step - In create request:
   * optional - In update request: optional
   */
  runDuration: Schema$Duration;
  /**
   * The initial state is IN_PROGRESS. The only legal state transitions are *
   * IN_PROGRESS -&gt; COMPLETE  A PRECONDITION_FAILED will be returned if an
   * invalid transition is requested.  It is valid to create Step with a state
   * set to COMPLETE. The state can only be set to COMPLETE once. A
   * PRECONDITION_FAILED will be returned if the state is set to COMPLETE
   * multiple times.  - In response: always set - In create/update request:
   * optional
   */
  state: string;
  /**
   * A unique identifier within a Execution for this Step.  Returns
   * INVALID_ARGUMENT if this field is set or overwritten by the caller.  - In
   * response: always set - In create/update request: never set
   */
  stepId: string;
  /**
   * An execution of a test runner.
   */
  testExecutionStep: Schema$TestExecutionStep;
  /**
   * An execution of a tool (used for steps we don&#39;t explicitly support).
   */
  toolExecutionStep: Schema$ToolExecutionStep;
}
export interface Schema$StepDimensionValueEntry {
  key: string;
  value: string;
}
export interface Schema$StepLabelsEntry {
  key: string;
  value: string;
}
export interface Schema$SuccessDetail {
  /**
   * If a native process other than the app crashed.
   */
  otherNativeCrash: boolean;
}
/**
 * A reference to a test case.  Test case references are canonically ordered
 * lexicographically by these three factors: * First, by test_suite_name. *
 * Second, by class_name. * Third, by name.
 */
export interface Schema$TestCaseReference {
  /**
   * The name of the class.
   */
  className: string;
  /**
   * The name of the test case.  Required.
   */
  name: string;
  /**
   * The name of the test suite to which this test case belongs.
   */
  testSuiteName: string;
}
/**
 * A step that represents running tests.  It accepts ant-junit xml files which
 * will be parsed into structured test results by the service. Xml file paths
 * are updated in order to append more files, however they can&#39;t be deleted.
 * Users can also add test results manually by using the test_result field.
 */
export interface Schema$TestExecutionStep {
  /**
   * Issues observed during the test execution.  For example, if the mobile app
   * under test crashed during the test, the error message and the stack trace
   * content can be recorded here to assist debugging.  - In response: present
   * if set by create or update - In create/update request: optional
   */
  testIssues: Schema$TestIssue[];
  /**
   * List of test suite overview contents. This could be parsed from xUnit XML
   * log by server, or uploaded directly by user. This references should only be
   * called when test suites are fully parsed or uploaded.  The maximum allowed
   * number of test suite overviews per step is 1000.  - In response: always set
   * - In create request: optional - In update request: never (use
   * publishXunitXmlFiles custom method instead)
   */
  testSuiteOverviews: Schema$TestSuiteOverview[];
  /**
   * The timing break down of the test execution.  - In response: present if set
   * by create or update - In create/update request: optional
   */
  testTiming: Schema$TestTiming;
  /**
   * Represents the execution of the test runner.  The exit code of this tool
   * will be used to determine if the test passed.  - In response: always set -
   * In create/update request: optional
   */
  toolExecution: Schema$ToolExecution;
}
/**
 * An issue detected occurring during a test execution.
 */
export interface Schema$TestIssue {
  /**
   * A brief human-readable message describing the issue. Required.
   */
  errorMessage: string;
  /**
   * Severity of issue. Required.
   */
  severity: string;
  /**
   * Deprecated in favor of stack trace fields inside specific warnings.
   */
  stackTrace: Schema$StackTrace;
  /**
   * Type of issue. Required.
   */
  type: string;
  /**
   * Warning message with additional details of the issue. Should always be a
   * message from com.google.devtools.toolresults.v1.warnings
   */
  warning: Schema$Any;
}
/**
 * A summary of a test suite result either parsed from XML or uploaded directly
 * by a user.  Note: the API related comments are for StepService only. This
 * message is also being used in ExecutionService in a read only mode for the
 * corresponding step.
 */
export interface Schema$TestSuiteOverview {
  /**
   * Number of test cases in error, typically set by the service by parsing the
   * xml_source.  - In create/response: always set - In update request: never
   */
  errorCount: number;
  /**
   * Number of failed test cases, typically set by the service by parsing the
   * xml_source. May also be set by the user.  - In create/response: always set
   * - In update request: never
   */
  failureCount: number;
  /**
   * The name of the test suite.  - In create/response: always set - In update
   * request: never
   */
  name: string;
  /**
   * Number of test cases not run, typically set by the service by parsing the
   * xml_source.  - In create/response: always set - In update request: never
   */
  skippedCount: number;
  /**
   * Number of test cases, typically set by the service by parsing the
   * xml_source.  - In create/response: always set - In update request: never
   */
  totalCount: number;
  /**
   * If this test suite was parsed from XML, this is the URI where the original
   * XML file is stored.  Note: Multiple test suites can share the same
   * xml_source  Returns INVALID_ARGUMENT if the uri format is not supported.  -
   * In create/response: optional - In update request: never
   */
  xmlSource: Schema$FileReference;
}
/**
 * Testing timing break down to know phases.
 */
export interface Schema$TestTiming {
  /**
   * How long it took to run the test process.  - In response: present if
   * previously set. - In create/update request: optional
   */
  testProcessDuration: Schema$Duration;
}
/**
 * A single thumbnail, with its size and format.
 */
export interface Schema$Thumbnail {
  /**
   * The thumbnail&#39;s content type, i.e. &quot;image/png&quot;.  Always set.
   */
  contentType: string;
  /**
   * The thumbnail file itself.  That is, the bytes here are precisely the bytes
   * that make up the thumbnail file; they can be served as an image as-is (with
   * the appropriate content type.)  Always set.
   */
  data: string;
  /**
   * The height of the thumbnail, in pixels.  Always set.
   */
  heightPx: number;
  /**
   * The width of the thumbnail, in pixels.  Always set.
   */
  widthPx: number;
}
/**
 * A Timestamp represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time. It is encoded using the Proleptic Gregorian
 * Calendar which extends the Gregorian calendar backwards to year one. It is
 * encoded assuming all minutes are 60 seconds long, i.e. leap seconds are
 * &quot;smeared&quot; so that no leap second table is needed for
 * interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that
 * we can convert to and from RFC 3339 date strings. See
 * [https://www.ietf.org/rfc/rfc3339.txt](https://www.ietf.org/rfc/rfc3339.txt).
 * # Examples  Example 1: Compute Timestamp from POSIX `time()`.  Timestamp
 * timestamp; timestamp.set_seconds(time(NULL)); timestamp.set_nanos(0); Example
 * 2: Compute Timestamp from POSIX `gettimeofday()`.  struct timeval tv;
 * gettimeofday(&amp;tv, NULL);  Timestamp timestamp;
 * timestamp.set_seconds(tv.tv_sec); timestamp.set_nanos(tv.tv_usec * 1000);
 * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`. FILETIME
 * ft; GetSystemTimeAsFileTime(&amp;ft); UINT64 ticks =
 * (((UINT64)ft.dwHighDateTime) &lt;&lt; 32) | ft.dwLowDateTime;  // A Windows
 * tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z // is 11644473600
 * seconds before Unix epoch 1970-01-01T00:00:00Z. Timestamp timestamp;
 * timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
 * timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));  Example 4: Compute
 * Timestamp from Java `System.currentTimeMillis()`.  long millis =
 * System.currentTimeMillis();  Timestamp timestamp =
 * Timestamp.newBuilder().setSeconds(millis / 1000) .setNanos((int) ((millis %
 * 1000) * 1000000)).build();    Example 5: Compute Timestamp from current time
 * in Python.  timestamp = Timestamp() timestamp.GetCurrentTime()  # JSON
 * Mapping  In JSON format, the Timestamp type is encoded as a string in the
 * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format
 * is &quot;{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z&quot; where
 * {year} is always expressed using four digits while {month}, {day}, {hour},
 * {min}, and {sec} are zero-padded to two digits each. The fractional seconds,
 * which can go up to 9 digits (i.e. up to 1 nanosecond resolution), are
 * optional. The &quot;Z&quot; suffix indicates the timezone (&quot;UTC&quot;);
 * the timezone is required. A proto3 JSON serializer should always use UTC (as
 * indicated by &quot;Z&quot;) when printing the Timestamp type and a proto3
 * JSON parser should be able to accept both UTC and other timezones (as
 * indicated by an offset).  For example, &quot;2017-01-15T01:30:15.01Z&quot;
 * encodes 15.01 seconds past 01:30 UTC on January 15, 2017.  In JavaScript, one
 * can convert a Date object to this format using the standard
 * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString]
 * method. In Python, a standard `datetime.datetime` object can be converted to
 * this format using
 * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with
 * the time format spec &#39;%Y-%m-%dT%H:%M:%S.%fZ&#39;. Likewise, in Java, one
 * can use the Joda Time&#39;s [`ISODateTimeFormat.dateTime()`](
 * http://www.joda.org/joda-time/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime--
 * ) to obtain a formatter capable of generating timestamps in this format.
 */
export interface Schema$Timestamp {
  /**
   * Non-negative fractions of a second at nanosecond resolution. Negative
   * second values with fractions must still have non-negative nanos values that
   * count forward in time. Must be from 0 to 999,999,999 inclusive.
   */
  nanos: number;
  /**
   * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must
   * be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
   */
  seconds: string;
}
/**
 * An execution of an arbitrary tool. It could be a test runner or a tool
 * copying artifacts or deploying code.
 */
export interface Schema$ToolExecution {
  /**
   * The full tokenized command line including the program name (equivalent to
   * argv in a C program).  - In response: present if set by create request - In
   * create request: optional - In update request: never set
   */
  commandLineArguments: string[];
  /**
   * Tool execution exit code. This field will be set once the tool has exited.
   * - In response: present if set by create/update request - In create request:
   * optional - In update request: optional, a FAILED_PRECONDITION error will be
   * returned if an exit_code is already set.
   */
  exitCode: Schema$ToolExitCode;
  /**
   * References to any plain text logs output the tool execution.  This field
   * can be set before the tool has exited in order to be able to have access to
   * a live view of the logs while the tool is running.  The maximum allowed
   * number of tool logs per step is 1000.  - In response: present if set by
   * create/update request - In create request: optional - In update request:
   * optional, any value provided will be appended to the existing list
   */
  toolLogs: Schema$FileReference[];
  /**
   * References to opaque files of any format output by the tool execution.  The
   * maximum allowed number of tool outputs per step is 1000.  - In response:
   * present if set by create/update request - In create request: optional - In
   * update request: optional, any value provided will be appended to the
   * existing list
   */
  toolOutputs: Schema$ToolOutputReference[];
}
/**
 * Generic tool step to be used for binaries we do not explicitly support. For
 * example: running cp to copy artifacts from one location to another.
 */
export interface Schema$ToolExecutionStep {
  /**
   * A Tool execution.  - In response: present if set by create/update request -
   * In create/update request: optional
   */
  toolExecution: Schema$ToolExecution;
}
/**
 * Exit code from a tool execution.
 */
export interface Schema$ToolExitCode {
  /**
   * Tool execution exit code. A value of 0 means that the execution was
   * successful.  - In response: always set - In create/update request: always
   * set
   */
  number: number;
}
/**
 * A reference to a ToolExecution output file.
 */
export interface Schema$ToolOutputReference {
  /**
   * The creation time of the file.  - In response: present if set by
   * create/update request - In create/update request: optional
   */
  creationTime: Schema$Timestamp;
  /**
   * A FileReference to an output file.  - In response: always set - In
   * create/update request: always set
   */
  output: Schema$FileReference;
  /**
   * The test case to which this output file belongs.  - In response: present if
   * set by create/update request - In create/update request: optional
   */
  testCase: Schema$TestCaseReference;
}

export class Resource$Projects {
  root: Toolresults;
  histories: Resource$Projects$Histories;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
    this.histories = new Resource$Projects$Histories(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.getSettings
   * @desc Gets the Tool Results settings for a project.  May return any of the
   * following canonical error codes:  - PERMISSION_DENIED - if the user is not
   * authorized to read from project
   * @alias toolresults.projects.getSettings
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getSettings(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProjectSettings>;
  getSettings(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProjectSettings>,
      callback?: BodyResponseCallback<Schema$ProjectSettings>): void;
  getSettings(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProjectSettings>,
      callback?: BodyResponseCallback<Schema$ProjectSettings>):
      void|AxiosPromise<Schema$ProjectSettings> {
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
                (rootUrl + '/toolresults/v1beta3/projects/{projectId}/settings')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId'],
      pathParams: ['projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProjectSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProjectSettings>(parameters);
    }
  }


  /**
   * toolresults.projects.initializeSettings
   * @desc Creates resources for settings which have not yet been set.
   * Currently, this creates a single resource: a Google Cloud Storage bucket,
   * to be used as the default bucket for this project. The bucket is created in
   * an FTL-own storage project. Except for in rare cases, calling this method
   * in parallel from multiple clients will only create a single bucket. In
   * order to avoid unnecessary storage charges, the bucket is configured to
   * automatically delete objects older than 90 days.  The bucket is created
   * with the following permissions: - Owner access for owners of central
   * storage project (FTL-owned) - Writer access for owners/editors of customer
   * project - Reader access for viewers of customer project The default ACL on
   * objects created in the bucket is: - Owner access for owners of central
   * storage project - Reader access for owners/editors/viewers of customer
   * project See Google Cloud Storage documentation for more details.  If there
   * is already a default bucket set and the project can access the bucket, this
   * call does nothing. However, if the project doesn't have the permission to
   * access the bucket or the bucket is deleted, a new bucket will be created.
   * May return any canonical error codes, including the following:  -
   * PERMISSION_DENIED - if the user is not authorized to write to project - Any
   * error code raised by Google Cloud Storage
   * @alias toolresults.projects.initializeSettings
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  initializeSettings(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProjectSettings>;
  initializeSettings(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProjectSettings>,
      callback?: BodyResponseCallback<Schema$ProjectSettings>): void;
  initializeSettings(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProjectSettings>,
      callback?: BodyResponseCallback<Schema$ProjectSettings>):
      void|AxiosPromise<Schema$ProjectSettings> {
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
                 '/toolresults/v1beta3/projects/{projectId}:initializeSettings')
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
      createAPIRequest<Schema$ProjectSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProjectSettings>(parameters);
    }
  }
}
export class Resource$Projects$Histories {
  root: Toolresults;
  executions: Resource$Projects$Histories$Executions;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
    this.executions = new Resource$Projects$Histories$Executions(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.histories.create
   * @desc Creates a History.  The returned History will have the id set.  May
   * return any of the following canonical error codes:  - PERMISSION_DENIED -
   * if the user is not authorized to write to project - INVALID_ARGUMENT - if
   * the request is malformed - NOT_FOUND - if the containing project does not
   * exist
   * @alias toolresults.projects.histories.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.projectId A Project id.  Required.
   * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
   * @param {().History} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$History>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$History>,
      callback?: BodyResponseCallback<Schema$History>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$History>,
      callback?: BodyResponseCallback<Schema$History>):
      void|AxiosPromise<Schema$History> {
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
                  '/toolresults/v1beta3/projects/{projectId}/histories')
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
      createAPIRequest<Schema$History>(parameters, callback);
    } else {
      return createAPIRequest<Schema$History>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.get
   * @desc Gets a History.  May return any of the following canonical error
   * codes:  - PERMISSION_DENIED - if the user is not authorized to read project
   * - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the
   * History does not exist
   * @alias toolresults.projects.histories.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$History>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$History>,
      callback?: BodyResponseCallback<Schema$History>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$History>,
      callback?: BodyResponseCallback<Schema$History>):
      void|AxiosPromise<Schema$History> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId'],
      pathParams: ['historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$History>(parameters, callback);
    } else {
      return createAPIRequest<Schema$History>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.list
   * @desc Lists Histories for a given Project.  The histories are sorted by
   * modification time in descending order. The history_id key will be used to
   * order the history with the same modification time.  May return any of the
   * following canonical error codes:  - PERMISSION_DENIED - if the user is not
   * authorized to read project - INVALID_ARGUMENT - if the request is malformed
   * - NOT_FOUND - if the History does not exist
   * @alias toolresults.projects.histories.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filterByName If set, only return histories with the given name.  Optional.
   * @param {integer=} params.pageSize The maximum number of Histories to fetch.  Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100.  Optional.
   * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListHistoriesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListHistoriesResponse>,
      callback?: BodyResponseCallback<Schema$ListHistoriesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListHistoriesResponse>,
      callback?: BodyResponseCallback<Schema$ListHistoriesResponse>):
      void|AxiosPromise<Schema$ListHistoriesResponse> {
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
                  '/toolresults/v1beta3/projects/{projectId}/histories')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId'],
      pathParams: ['projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListHistoriesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListHistoriesResponse>(parameters);
    }
  }
}
export class Resource$Projects$Histories$Executions {
  root: Toolresults;
  clusters: Resource$Projects$Histories$Executions$Clusters;
  steps: Resource$Projects$Histories$Executions$Steps;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
    this.clusters = new Resource$Projects$Histories$Executions$Clusters(root);
    this.steps = new Resource$Projects$Histories$Executions$Steps(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.histories.executions.create
   * @desc Creates an Execution.  The returned Execution will have the id set.
   * May return any of the following canonical error codes:  - PERMISSION_DENIED
   * - if the user is not authorized to write to project - INVALID_ARGUMENT - if
   * the request is malformed - NOT_FOUND - if the containing History does not
   * exist
   * @alias toolresults.projects.histories.executions.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
   * @param {().Execution} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Execution>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Execution>,
      callback?: BodyResponseCallback<Schema$Execution>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Execution>,
      callback?: BodyResponseCallback<Schema$Execution>):
      void|AxiosPromise<Schema$Execution> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId'],
      pathParams: ['historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Execution>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Execution>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.get
   * @desc Gets an Execution.  May return any of the following canonical error
   * codes:  - PERMISSION_DENIED - if the user is not authorized to write to
   * project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if
   * the Execution does not exist
   * @alias toolresults.projects.histories.executions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId An Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Execution>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Execution>,
      callback?: BodyResponseCallback<Schema$Execution>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Execution>,
      callback?: BodyResponseCallback<Schema$Execution>):
      void|AxiosPromise<Schema$Execution> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId'],
      pathParams: ['executionId', 'historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Execution>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Execution>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.list
   * @desc Lists Histories for a given Project.  The executions are sorted by
   * creation_time in descending order. The execution_id key will be used to
   * order the executions with the same creation_time.  May return any of the
   * following canonical error codes:  - PERMISSION_DENIED - if the user is not
   * authorized to read project - INVALID_ARGUMENT - if the request is malformed
   * - NOT_FOUND - if the containing History does not exist
   * @alias toolresults.projects.histories.executions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.historyId A History id.  Required.
   * @param {integer=} params.pageSize The maximum number of Executions to fetch.  Default value: 25. The server will use this default if the field is not set or has a value of 0.  Optional.
   * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListExecutionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListExecutionsResponse>,
      callback?: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListExecutionsResponse>,
      callback?: BodyResponseCallback<Schema$ListExecutionsResponse>):
      void|AxiosPromise<Schema$ListExecutionsResponse> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId'],
      pathParams: ['historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListExecutionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListExecutionsResponse>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.patch
   * @desc Updates an existing Execution with the supplied partial entity.  May
   * return any of the following canonical error codes:  - PERMISSION_DENIED -
   * if the user is not authorized to write to project - INVALID_ARGUMENT - if
   * the request is malformed - FAILED_PRECONDITION - if the requested state
   * transition is illegal - NOT_FOUND - if the containing History does not
   * exist
   * @alias toolresults.projects.histories.executions.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId Required.
   * @param {string} params.historyId Required.
   * @param {string} params.projectId A Project id. Required.
   * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
   * @param {().Execution} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Execution>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Execution>,
      callback?: BodyResponseCallback<Schema$Execution>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Execution>,
      callback?: BodyResponseCallback<Schema$Execution>):
      void|AxiosPromise<Schema$Execution> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId'],
      pathParams: ['executionId', 'historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Execution>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Execution>(parameters);
    }
  }
}
export class Resource$Projects$Histories$Executions$Clusters {
  root: Toolresults;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.histories.executions.clusters.get
   * @desc Retrieves a single screenshot cluster by its ID
   * @alias toolresults.projects.histories.executions.clusters.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.clusterId A Cluster id  Required.
   * @param {string} params.executionId An Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ScreenshotCluster>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ScreenshotCluster>,
      callback?: BodyResponseCallback<Schema$ScreenshotCluster>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ScreenshotCluster>,
      callback?: BodyResponseCallback<Schema$ScreenshotCluster>):
      void|AxiosPromise<Schema$ScreenshotCluster> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'clusterId'],
      pathParams: ['clusterId', 'executionId', 'historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ScreenshotCluster>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ScreenshotCluster>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.clusters.list
   * @desc Lists Screenshot Clusters  Returns the list of screenshot clusters
   * corresponding to an execution. Screenshot clusters are created after the
   * execution is finished. Clusters are created from a set of screenshots.
   * Between any two screenshots, a matching score is calculated based off their
   * metadata that determines how similar they are. Screenshots are placed in
   * the cluster that has screens which have the highest matching scores.
   * @alias toolresults.projects.histories.executions.clusters.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId An Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListScreenshotClustersResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListScreenshotClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListScreenshotClustersResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListScreenshotClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListScreenshotClustersResponse>):
      void|AxiosPromise<Schema$ListScreenshotClustersResponse> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId'],
      pathParams: ['executionId', 'historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListScreenshotClustersResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListScreenshotClustersResponse>(
          parameters);
    }
  }
}

export class Resource$Projects$Histories$Executions$Steps {
  root: Toolresults;
  perfMetricsSummary:
      Resource$Projects$Histories$Executions$Steps$Perfmetricssummary;
  perfSampleSeries:
      Resource$Projects$Histories$Executions$Steps$Perfsampleseries;
  thumbnails: Resource$Projects$Histories$Executions$Steps$Thumbnails;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
    this.perfMetricsSummary =
        new Resource$Projects$Histories$Executions$Steps$Perfmetricssummary(
            root);
    this.perfSampleSeries =
        new Resource$Projects$Histories$Executions$Steps$Perfsampleseries(root);
    this.thumbnails =
        new Resource$Projects$Histories$Executions$Steps$Thumbnails(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.histories.executions.steps.create
   * @desc Creates a Step.  The returned Step will have the id set.  May return
   * any of the following canonical error codes:  - PERMISSION_DENIED - if the
   * user is not authorized to write to project - INVALID_ARGUMENT - if the
   * request is malformed - FAILED_PRECONDITION - if the step is too large (more
   * than 10Mib) - NOT_FOUND - if the containing Execution does not exist
   * @alias toolresults.projects.histories.executions.steps.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
   * @param {().Step} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Step>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Step>,
      callback?: BodyResponseCallback<Schema$Step>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Step>,
      callback?: BodyResponseCallback<Schema$Step>):
      void|AxiosPromise<Schema$Step> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId'],
      pathParams: ['executionId', 'historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Step>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Step>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.steps.get
   * @desc Gets a Step.  May return any of the following canonical error codes:
   * - PERMISSION_DENIED - if the user is not authorized to read project -
   * INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step
   * does not exist
   * @alias toolresults.projects.histories.executions.steps.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {string} params.stepId A Step id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Step>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Step>,
      callback?: BodyResponseCallback<Schema$Step>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Step>,
      callback?: BodyResponseCallback<Schema$Step>):
      void|AxiosPromise<Schema$Step> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
      pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Step>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Step>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.steps.getPerfMetricsSummary
   * @desc Retrieves a PerfMetricsSummary.  May return any of the following
   * error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not
   * exist
   * @alias
   * toolresults.projects.histories.executions.steps.getPerfMetricsSummary
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A tool results execution ID.
   * @param {string} params.historyId A tool results history ID.
   * @param {string} params.projectId The cloud project
   * @param {string} params.stepId A tool results step ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getPerfMetricsSummary(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PerfMetricsSummary>;
  getPerfMetricsSummary(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PerfMetricsSummary>,
      callback?: BodyResponseCallback<Schema$PerfMetricsSummary>): void;
  getPerfMetricsSummary(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PerfMetricsSummary>,
      callback?: BodyResponseCallback<Schema$PerfMetricsSummary>):
      void|AxiosPromise<Schema$PerfMetricsSummary> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
      pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PerfMetricsSummary>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PerfMetricsSummary>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.steps.list
   * @desc Lists Steps for a given Execution.  The steps are sorted by
   * creation_time in descending order. The step_id key will be used to order
   * the steps with the same creation_time.  May return any of the following
   * canonical error codes:  - PERMISSION_DENIED - if the user is not authorized
   * to read project - INVALID_ARGUMENT - if the request is malformed -
   * FAILED_PRECONDITION - if an argument in the request happens to be invalid;
   * e.g. if an attempt is made to list the children of a nonexistent Step -
   * NOT_FOUND - if the containing Execution does not exist
   * @alias toolresults.projects.histories.executions.steps.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {integer=} params.pageSize The maximum number of Steps to fetch.  Default value: 25. The server will use this default if the field is not set or has a value of 0.  Optional.
   * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
   * @param {string} params.projectId A Project id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListStepsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListStepsResponse>,
      callback?: BodyResponseCallback<Schema$ListStepsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListStepsResponse>,
      callback?: BodyResponseCallback<Schema$ListStepsResponse>):
      void|AxiosPromise<Schema$ListStepsResponse> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId'],
      pathParams: ['executionId', 'historyId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListStepsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListStepsResponse>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.steps.patch
   * @desc Updates an existing Step with the supplied partial entity.  May
   * return any of the following canonical error codes:  - PERMISSION_DENIED -
   * if the user is not authorized to write project - INVALID_ARGUMENT - if the
   * request is malformed - FAILED_PRECONDITION - if the requested state
   * transition is illegal (e.g try to upload a duplicate xml file), if the
   * updated step is too large (more than 10Mib) - NOT_FOUND - if the containing
   * Execution does not exist
   * @alias toolresults.projects.histories.executions.steps.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
   * @param {string} params.stepId A Step id.  Required.
   * @param {().Step} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Step>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Step>,
      callback?: BodyResponseCallback<Schema$Step>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Step>,
      callback?: BodyResponseCallback<Schema$Step>):
      void|AxiosPromise<Schema$Step> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
      pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Step>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Step>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.steps.publishXunitXmlFiles
   * @desc Publish xml files to an existing Step.  May return any of the
   * following canonical error codes:  - PERMISSION_DENIED - if the user is not
   * authorized to write project - INVALID_ARGUMENT - if the request is
   * malformed - FAILED_PRECONDITION - if the requested state transition is
   * illegal, e.g try to upload a duplicate xml file or a file too large. -
   * NOT_FOUND - if the containing Execution does not exist
   * @alias toolresults.projects.histories.executions.steps.publishXunitXmlFiles
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {string} params.projectId A Project id.  Required.
   * @param {string} params.stepId A Step id. Note: This step must include a TestExecutionStep.  Required.
   * @param {().PublishXunitXmlFilesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  publishXunitXmlFiles(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Step>;
  publishXunitXmlFiles(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Step>,
      callback?: BodyResponseCallback<Schema$Step>): void;
  publishXunitXmlFiles(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Step>,
      callback?: BodyResponseCallback<Schema$Step>):
      void|AxiosPromise<Schema$Step> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
      pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Step>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Step>(parameters);
    }
  }
}
export class Resource$Projects$Histories$Executions$Steps$Perfmetricssummary {
  root: Toolresults;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.histories.executions.steps.perfMetricsSummary.create
   * @desc Creates a PerfMetricsSummary resource. Returns the existing one if it
   * has already been created.  May return any of the following error code(s): -
   * NOT_FOUND - The containing Step does not exist
   * @alias
   * toolresults.projects.histories.executions.steps.perfMetricsSummary.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A tool results execution ID.
   * @param {string} params.historyId A tool results history ID.
   * @param {string} params.projectId The cloud project
   * @param {string} params.stepId A tool results step ID.
   * @param {().PerfMetricsSummary} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PerfMetricsSummary>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PerfMetricsSummary>,
      callback?: BodyResponseCallback<Schema$PerfMetricsSummary>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PerfMetricsSummary>,
      callback?: BodyResponseCallback<Schema$PerfMetricsSummary>):
      void|AxiosPromise<Schema$PerfMetricsSummary> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
      pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PerfMetricsSummary>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PerfMetricsSummary>(parameters);
    }
  }
}

export class Resource$Projects$Histories$Executions$Steps$Perfsampleseries {
  root: Toolresults;
  samples:
      Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
    this.samples =
        new Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples(
            root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.histories.executions.steps.perfSampleSeries.create
   * @desc Creates a PerfSampleSeries.  May return any of the following error
   * code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given
   * Step - NOT_FOUND - The containing Step does not exist
   * @alias
   * toolresults.projects.histories.executions.steps.perfSampleSeries.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A tool results execution ID.
   * @param {string} params.historyId A tool results history ID.
   * @param {string} params.projectId The cloud project
   * @param {string} params.stepId A tool results step ID.
   * @param {().PerfSampleSeries} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PerfSampleSeries>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PerfSampleSeries>,
      callback?: BodyResponseCallback<Schema$PerfSampleSeries>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PerfSampleSeries>,
      callback?: BodyResponseCallback<Schema$PerfSampleSeries>):
      void|AxiosPromise<Schema$PerfSampleSeries> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
      pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PerfSampleSeries>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PerfSampleSeries>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.steps.perfSampleSeries.get
   * @desc Gets a PerfSampleSeries.  May return any of the following error
   * code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
   * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A tool results execution ID.
   * @param {string} params.historyId A tool results history ID.
   * @param {string} params.projectId The cloud project
   * @param {string} params.sampleSeriesId A sample series id
   * @param {string} params.stepId A tool results step ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$PerfSampleSeries>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PerfSampleSeries>,
      callback?: BodyResponseCallback<Schema$PerfSampleSeries>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PerfSampleSeries>,
      callback?: BodyResponseCallback<Schema$PerfSampleSeries>):
      void|AxiosPromise<Schema$PerfSampleSeries> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams:
          ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
      pathParams:
          ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PerfSampleSeries>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PerfSampleSeries>(parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.steps.perfSampleSeries.list
   * @desc Lists PerfSampleSeries for a given Step.  The request provides an
   * optional filter which specifies one or more PerfMetricsType to include in
   * the result; if none returns all. The resulting PerfSampleSeries are sorted
   * by ids.  May return any of the following canonical error codes: - NOT_FOUND
   * - The containing Step does not exist
   * @alias
   * toolresults.projects.histories.executions.steps.perfSampleSeries.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A tool results execution ID.
   * @param {string=} params.filter Specify one or more PerfMetricType values such as CPU to filter the result
   * @param {string} params.historyId A tool results history ID.
   * @param {string} params.projectId The cloud project
   * @param {string} params.stepId A tool results step ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListPerfSampleSeriesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>,
      callback?: BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>,
      callback?: BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>):
      void|AxiosPromise<Schema$ListPerfSampleSeriesResponse> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
      pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListPerfSampleSeriesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListPerfSampleSeriesResponse>(parameters);
    }
  }
}
export class
    Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples {
  root: Toolresults;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
   * @desc Creates a batch of PerfSamples - a client can submit multiple batches
   * of Perf Samples through repeated calls to this method in order to split up
   * a large request payload - duplicates and existing timestamp entries will be
   * ignored. - the batch operation may partially succeed - the set of elements
   * successfully inserted is returned in the response (omits items which
   * already existed in the database).  May return any of the following
   * canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does
   * not exist
   * @alias
   * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A tool results execution ID.
   * @param {string} params.historyId A tool results history ID.
   * @param {string} params.projectId The cloud project
   * @param {string} params.sampleSeriesId A sample series id
   * @param {string} params.stepId A tool results step ID.
   * @param {().BatchCreatePerfSamplesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchCreate(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$BatchCreatePerfSamplesResponse>;
  batchCreate(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>,
      callback?: BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>):
      void;
  batchCreate(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>,
      callback?: BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>):
      void|AxiosPromise<Schema$BatchCreatePerfSamplesResponse> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams:
          ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
      pathParams:
          ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$BatchCreatePerfSamplesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$BatchCreatePerfSamplesResponse>(
          parameters);
    }
  }


  /**
   * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list
   * @desc Lists the Performance Samples of a given Sample Series - The list
   * results are sorted by timestamps ascending - The default page size is 500
   * samples; and maximum size allowed 5000 - The response token indicates the
   * last returned PerfSample timestamp - When the results size exceeds the page
   * size, submit a subsequent request including the page token to return the
   * rest of the samples up to the page limit  May return any of the following
   * canonical error codes: - OUT_OF_RANGE - The specified request page_token is
   * out of valid range - NOT_FOUND - The containing PerfSampleSeries does not
   * exist
   * @alias
   * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId A tool results execution ID.
   * @param {string} params.historyId A tool results history ID.
   * @param {integer=} params.pageSize The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
   * @param {string=} params.pageToken Optional, the next_page_token returned in the previous response
   * @param {string} params.projectId The cloud project
   * @param {string} params.sampleSeriesId A sample series id
   * @param {string} params.stepId A tool results step ID.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListPerfSamplesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListPerfSamplesResponse>,
      callback?: BodyResponseCallback<Schema$ListPerfSamplesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListPerfSamplesResponse>,
      callback?: BodyResponseCallback<Schema$ListPerfSamplesResponse>):
      void|AxiosPromise<Schema$ListPerfSamplesResponse> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams:
          ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
      pathParams:
          ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListPerfSamplesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListPerfSamplesResponse>(parameters);
    }
  }
}


export class Resource$Projects$Histories$Executions$Steps$Thumbnails {
  root: Toolresults;
  constructor(root: Toolresults) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * toolresults.projects.histories.executions.steps.thumbnails.list
   * @desc Lists thumbnails of images attached to a step.  May return any of the
   * following canonical error codes: - PERMISSION_DENIED - if the user is not
   * authorized to read from the project, or from any of the images -
   * INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step
   * does not exist, or if any of the images do not exist
   * @alias toolresults.projects.histories.executions.steps.thumbnails.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.executionId An Execution id.  Required.
   * @param {string} params.historyId A History id.  Required.
   * @param {integer=} params.pageSize The maximum number of thumbnails to fetch.  Default value: 50. The server will use this default if the field is not set or has a value of 0.  Optional.
   * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
   * @param {string} params.projectId A Project id.  Required.
   * @param {string} params.stepId A Step id.  Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListStepThumbnailsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListStepThumbnailsResponse>,
      callback?: BodyResponseCallback<Schema$ListStepThumbnailsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListStepThumbnailsResponse>,
      callback?: BodyResponseCallback<Schema$ListStepThumbnailsResponse>):
      void|AxiosPromise<Schema$ListStepThumbnailsResponse> {
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
                 '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
      pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListStepThumbnailsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListStepThumbnailsResponse>(parameters);
    }
  }
}
