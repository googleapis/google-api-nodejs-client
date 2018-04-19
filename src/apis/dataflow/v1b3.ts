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
 * Dataflow API
 *
 * Manages Google Cloud Dataflow projects on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const dataflow = google.dataflow('v1b3');
 *
 * @namespace dataflow
 * @type {Function}
 * @version v1b3
 * @variation v1b3
 * @param {object=} options Options for Dataflow
 */
export class Dataflow {
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
 * Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
 */
export interface Schema$ApproximateProgress {
  /**
   * Obsolete.
   */
  percentComplete: number;
  /**
   * Obsolete.
   */
  position: Schema$Position;
  /**
   * Obsolete.
   */
  remainingTime: string;
}
/**
 * A progress measurement of a WorkItem by a worker.
 */
export interface Schema$ApproximateReportedProgress {
  /**
   * Total amount of parallelism in the portion of input of this task that has
   * already been consumed and is no longer active. In the first two examples
   * above (see remaining_parallelism), the value should be 29 or 2
   * respectively.  The sum of remaining_parallelism and consumed_parallelism
   * should equal the total amount of parallelism in this work item.  If
   * specified, must be finite.
   */
  consumedParallelism: Schema$ReportedParallelism;
  /**
   * Completion as fraction of the input consumed, from 0.0 (beginning, nothing
   * consumed), to 1.0 (end of the input, entire input consumed).
   */
  fractionConsumed: number;
  /**
   * A Position within the work to represent a progress.
   */
  position: Schema$Position;
  /**
   * Total amount of parallelism in the input of this task that remains, (i.e.
   * can be delegated to this task and any new tasks via dynamic splitting).
   * Always at least 1 for non-finished work items and 0 for finished.
   * &quot;Amount of parallelism&quot; refers to how many non-empty parts of the
   * input can be read in parallel. This does not necessarily equal number of
   * records. An input that can be read in parallel down to the individual
   * records is called &quot;perfectly splittable&quot;. An example of
   * non-perfectly parallelizable input is a block-compressed file format where
   * a block of records has to be read as a whole, but different blocks can be
   * read in parallel.  Examples: * If we are processing record #30 (starting at
   * 1) out of 50 in a perfectly   splittable 50-record input, this value should
   * be 21 (20 remaining + 1   current). * If we are reading through block 3 in
   * a block-compressed file consisting   of 5 blocks, this value should be 3
   * (since blocks 4 and 5 can be   processed in parallel by new tasks via
   * dynamic splitting and the current   task remains processing block 3). * If
   * we are reading through the last block in a block-compressed file,   or
   * reading or processing the last record in a perfectly splittable   input,
   * this value should be 1, because apart from the current task, no additional
   * remainder can be split off.
   */
  remainingParallelism: Schema$ReportedParallelism;
}
/**
 * A suggestion by the service to the worker to dynamically split the WorkItem.
 */
export interface Schema$ApproximateSplitRequest {
  /**
   * A fraction at which to split the work item, from 0.0 (beginning of the
   * input) to 1.0 (end of the input).
   */
  fractionConsumed: number;
  /**
   * A Position at which to split the work item.
   */
  position: Schema$Position;
}
/**
 * A structured message reporting an autoscaling decision made by the Dataflow
 * service.
 */
export interface Schema$AutoscalingEvent {
  /**
   * The current number of workers the job has.
   */
  currentNumWorkers: string;
  /**
   * A message describing why the system decided to adjust the current number of
   * workers, why it failed, or why the system decided to not make any changes
   * to the number of workers.
   */
  description: Schema$StructuredMessage;
  /**
   * The type of autoscaling event to report.
   */
  eventType: string;
  /**
   * The target number of workers the worker pool wants to resize to use.
   */
  targetNumWorkers: string;
  /**
   * The time this event was emitted to indicate a new target or current
   * num_workers value.
   */
  time: string;
}
/**
 * Settings for WorkerPool autoscaling.
 */
export interface Schema$AutoscalingSettings {
  /**
   * The algorithm to use for autoscaling.
   */
  algorithm: string;
  /**
   * The maximum number of workers to cap scaling at.
   */
  maxNumWorkers: number;
}
/**
 * Description of an interstitial value between transforms in an execution
 * stage.
 */
export interface Schema$ComponentSource {
  /**
   * Dataflow service generated name for this source.
   */
  name: string;
  /**
   * User name for the original user transform or collection with which this
   * source is most closely associated.
   */
  originalTransformOrCollection: string;
  /**
   * Human-readable name for this transform; may be user or system generated.
   */
  userName: string;
}
/**
 * Description of a transform executed as part of an execution stage.
 */
export interface Schema$ComponentTransform {
  /**
   * Dataflow service generated name for this source.
   */
  name: string;
  /**
   * User name for the original user transform with which this transform is most
   * closely associated.
   */
  originalTransform: string;
  /**
   * Human-readable name for this transform; may be user or system generated.
   */
  userName: string;
}
/**
 * All configuration data for a particular Computation.
 */
export interface Schema$ComputationTopology {
  /**
   * The ID of the computation.
   */
  computationId: string;
  /**
   * The inputs to the computation.
   */
  inputs: Schema$StreamLocation[];
  /**
   * The key ranges processed by the computation.
   */
  keyRanges: Schema$KeyRangeLocation[];
  /**
   * The outputs from the computation.
   */
  outputs: Schema$StreamLocation[];
  /**
   * The state family values.
   */
  stateFamilies: Schema$StateFamilyConfig[];
  /**
   * The system stage name.
   */
  systemStageName: string;
}
/**
 * A position that encapsulates an inner position and an index for the inner
 * position. A ConcatPosition can be used by a reader of a source that
 * encapsulates a set of other sources.
 */
export interface Schema$ConcatPosition {
  /**
   * Index of the inner source.
   */
  index: number;
  /**
   * Position within the inner source.
   */
  position: Schema$Position;
}
/**
 * CounterMetadata includes all static non-name non-value counter attributes.
 */
export interface Schema$CounterMetadata {
  /**
   * Human-readable description of the counter semantics.
   */
  description: string;
  /**
   * Counter aggregation kind.
   */
  kind: string;
  /**
   * A string referring to the unit type.
   */
  otherUnits: string;
  /**
   * System defined Units, see above enum.
   */
  standardUnits: string;
}
/**
 * Identifies a counter within a per-job namespace. Counters whose structured
 * names are the same get merged into a single value for the job.
 */
export interface Schema$CounterStructuredName {
  /**
   * Name of the optimized step being executed by the workers.
   */
  componentStepName: string;
  /**
   * Name of the stage. An execution step contains multiple component steps.
   */
  executionStepName: string;
  /**
   * Index of an input collection that&#39;s being read from/written to as a
   * side input. The index identifies a step&#39;s side inputs starting by 1
   * (e.g. the first side input has input_index 1, the third has input_index 3).
   * Side inputs are identified by a pair of (original_step_name, input_index).
   * This field helps uniquely identify them.
   */
  inputIndex: number;
  /**
   * Counter name. Not necessarily globally-unique, but unique within the
   * context of the other fields. Required.
   */
  name: string;
  /**
   * One of the standard Origins defined above.
   */
  origin: string;
  /**
   * The step name requesting an operation, such as GBK. I.e. the ParDo causing
   * a read/write from shuffle to occur, or a read from side inputs.
   */
  originalRequestingStepName: string;
  /**
   * System generated name of the original step in the user&#39;s graph, before
   * optimization.
   */
  originalStepName: string;
  /**
   * A string containing a more specific namespace of the counter&#39;s origin.
   */
  originNamespace: string;
  /**
   * Portion of this counter, either key or value.
   */
  portion: string;
  /**
   * ID of a particular worker.
   */
  workerId: string;
}
/**
 * A single message which encapsulates structured name and metadata for a given
 * counter.
 */
export interface Schema$CounterStructuredNameAndMetadata {
  /**
   * Metadata associated with a counter
   */
  metadata: Schema$CounterMetadata;
  /**
   * Structured name of the counter.
   */
  name: Schema$CounterStructuredName;
}
/**
 * An update to a Counter sent from a worker.
 */
export interface Schema$CounterUpdate {
  /**
   * Boolean value for And, Or.
   */
  boolean: boolean;
  /**
   * True if this counter is reported as the total cumulative aggregate value
   * accumulated since the worker started working on this WorkItem. By default
   * this is false, indicating that this counter is reported as a delta.
   */
  cumulative: boolean;
  /**
   * Distribution data
   */
  distribution: Schema$DistributionUpdate;
  /**
   * Floating point value for Sum, Max, Min.
   */
  floatingPoint: number;
  /**
   * List of floating point numbers, for Set.
   */
  floatingPointList: Schema$FloatingPointList;
  /**
   * Floating point mean aggregation value for Mean.
   */
  floatingPointMean: Schema$FloatingPointMean;
  /**
   * Integer value for Sum, Max, Min.
   */
  integer: Schema$SplitInt64;
  /**
   * Gauge data
   */
  integerGauge: Schema$IntegerGauge;
  /**
   * List of integers, for Set.
   */
  integerList: Schema$IntegerList;
  /**
   * Integer mean aggregation value for Mean.
   */
  integerMean: Schema$IntegerMean;
  /**
   * Value for internally-defined counters used by the Dataflow service.
   */
  internal: any;
  /**
   * Counter name and aggregation type.
   */
  nameAndKind: Schema$NameAndKind;
  /**
   * The service-generated short identifier for this counter. The short_id -&gt;
   * (name, metadata) mapping is constant for the lifetime of a job.
   */
  shortId: string;
  /**
   * List of strings, for Set.
   */
  stringList: Schema$StringList;
  /**
   * Counter structured name and metadata.
   */
  structuredNameAndMetadata: Schema$CounterStructuredNameAndMetadata;
}
/**
 * Modeled after information exposed by /proc/stat.
 */
export interface Schema$CPUTime {
  /**
   * Average CPU utilization rate (% non-idle cpu / second) since previous
   * sample.
   */
  rate: number;
  /**
   * Timestamp of the measurement.
   */
  timestamp: string;
  /**
   * Total active CPU time across all cores (ie., non-idle) in milliseconds
   * since start-up.
   */
  totalMs: string;
}
/**
 * A request to create a Cloud Dataflow job from a template.
 */
export interface Schema$CreateJobFromTemplateRequest {
  /**
   * The runtime environment for the job.
   */
  environment: Schema$RuntimeEnvironment;
  /**
   * Required. A Cloud Storage path to the template from which to create the
   * job. Must be a valid Cloud Storage URL, beginning with `gs://`.
   */
  gcsPath: string;
  /**
   * Required. The job name to use for the created job.
   */
  jobName: string;
  /**
   * The location to which to direct the request.
   */
  location: string;
  /**
   * The runtime parameters to pass to the job.
   */
  parameters: any;
}
/**
 * Identifies the location of a custom souce.
 */
export interface Schema$CustomSourceLocation {
  /**
   * Whether this source is stateful.
   */
  stateful: boolean;
}
/**
 * Data disk assignment for a given VM instance.
 */
export interface Schema$DataDiskAssignment {
  /**
   * Mounted data disks. The order is important a data disk&#39;s 0-based index
   * in this list defines which persistent directory the disk is mounted to, for
   * example the list of {
   * &quot;myproject-1014-104817-4c2-harness-0-disk-0&quot; }, {
   * &quot;myproject-1014-104817-4c2-harness-0-disk-1&quot; }.
   */
  dataDisks: string[];
  /**
   * VM instance name the data disks mounted to, for example
   * &quot;myproject-1014-104817-4c2-harness-0&quot;.
   */
  vmInstance: string;
}
/**
 * Specification of one of the bundles produced as a result of splitting a
 * Source (e.g. when executing a SourceSplitRequest, or when splitting an active
 * task using WorkItemStatus.dynamic_source_split), relative to the source being
 * split.
 */
export interface Schema$DerivedSource {
  /**
   * What source to base the produced source on (if any).
   */
  derivationMode: string;
  /**
   * Specification of the source.
   */
  source: Schema$Source;
}
/**
 * Describes the data disk used by a workflow job.
 */
export interface Schema$Disk {
  /**
   * Disk storage type, as defined by Google Compute Engine.  This must be a
   * disk type appropriate to the project and zone in which the workers will
   * run.  If unknown or unspecified, the service will attempt to choose a
   * reasonable default.  For example, the standard persistent disk type is a
   * resource name typically ending in &quot;pd-standard&quot;.  If SSD
   * persistent disks are available, the resource name typically ends with
   * &quot;pd-ssd&quot;.  The actual valid values are defined the Google Compute
   * Engine API, not by the Cloud Dataflow API; consult the Google Compute
   * Engine documentation for more information about determining the set of
   * available disk types for a particular project and zone.  Google Compute
   * Engine Disk types are local to a particular project in a particular zone,
   * and so the resource name will typically look something like this:
   * compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard
   */
  diskType: string;
  /**
   * Directory in a VM where disk is mounted.
   */
  mountPoint: string;
  /**
   * Size of disk in GB.  If zero or unspecified, the service will attempt to
   * choose a reasonable default.
   */
  sizeGb: number;
}
/**
 * Data provided with a pipeline or transform to provide descriptive info.
 */
export interface Schema$DisplayData {
  /**
   * Contains value if the data is of a boolean type.
   */
  boolValue: boolean;
  /**
   * Contains value if the data is of duration type.
   */
  durationValue: string;
  /**
   * Contains value if the data is of float type.
   */
  floatValue: number;
  /**
   * Contains value if the data is of int64 type.
   */
  int64Value: string;
  /**
   * Contains value if the data is of java class type.
   */
  javaClassValue: string;
  /**
   * The key identifying the display data. This is intended to be used as a
   * label for the display data when viewed in a dax monitoring system.
   */
  key: string;
  /**
   * An optional label to display in a dax UI for the element.
   */
  label: string;
  /**
   * The namespace for the key. This is usually a class name or programming
   * language namespace (i.e. python module) which defines the display data.
   * This allows a dax monitoring system to specially handle the data and
   * perform custom rendering.
   */
  namespace: string;
  /**
   * A possible additional shorter value to display. For example a
   * java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as
   * the short_str_value and com.mypackage.MyDoFn as the java_class_name value.
   * short_str_value can be displayed and java_class_name_value will be
   * displayed as a tooltip.
   */
  shortStrValue: string;
  /**
   * Contains value if the data is of string type.
   */
  strValue: string;
  /**
   * Contains value if the data is of timestamp type.
   */
  timestampValue: string;
  /**
   * An optional full URL.
   */
  url: string;
}
/**
 * A metric value representing a distribution.
 */
export interface Schema$DistributionUpdate {
  /**
   * The count of the number of elements present in the distribution.
   */
  count: Schema$SplitInt64;
  /**
   * (Optional) Histogram of value counts for the distribution.
   */
  histogram: Schema$Histogram;
  /**
   * The maximum value present in the distribution.
   */
  max: Schema$SplitInt64;
  /**
   * The minimum value present in the distribution.
   */
  min: Schema$SplitInt64;
  /**
   * Use an int64 since we&#39;d prefer the added precision. If overflow is a
   * common problem we can detect it and use an additional int64 or a double.
   */
  sum: Schema$SplitInt64;
  /**
   * Use a double since the sum of squares is likely to overflow int64.
   */
  sumOfSquares: number;
}
/**
 * When a task splits using WorkItemStatus.dynamic_source_split, this message
 * describes the two parts of the split relative to the description of the
 * current task&#39;s input.
 */
export interface Schema$DynamicSourceSplit {
  /**
   * Primary part (continued to be processed by worker). Specified relative to
   * the previously-current source. Becomes current.
   */
  primary: Schema$DerivedSource;
  /**
   * Residual part (returned to the pool of work). Specified relative to the
   * previously-current source.
   */
  residual: Schema$DerivedSource;
}
/**
 * Describes the environment in which a Dataflow Job runs.
 */
export interface Schema$Environment {
  /**
   * The type of cluster manager API to use.  If unknown or unspecified, the
   * service will attempt to choose a reasonable default.  This should be in the
   * form of the API service name, e.g. &quot;compute.googleapis.com&quot;.
   */
  clusterManagerApiService: string;
  /**
   * The dataset for the current project where various workflow related tables
   * are stored.  The supported resource type is:  Google BigQuery:
   * bigquery.googleapis.com/{dataset}
   */
  dataset: string;
  /**
   * The list of experiments to enable.
   */
  experiments: string[];
  /**
   * Experimental settings.
   */
  internalExperiments: any;
  /**
   * The Cloud Dataflow SDK pipeline options specified by the user. These
   * options are passed through the service and are used to recreate the SDK
   * pipeline options on the worker in a language agnostic and platform
   * independent way.
   */
  sdkPipelineOptions: any;
  /**
   * Identity to run virtual machines as. Defaults to the default account.
   */
  serviceAccountEmail: string;
  /**
   * The prefix of the resources the system should use for temporary storage.
   * The system will append the suffix &quot;/temp-{JOBNAME} to this resource
   * prefix, where {JOBNAME} is the value of the job_name field.  The resulting
   * bucket and object prefix is used as the prefix of the resources used to
   * store temporary data needed during the job execution.  NOTE: This will
   * override the value in taskrunner_settings. The supported resource type is:
   * Google Cloud Storage:    storage.googleapis.com/{bucket}/{object}
   * bucket.storage.googleapis.com/{object}
   */
  tempStoragePrefix: string;
  /**
   * A description of the process that generated the request.
   */
  userAgent: any;
  /**
   * A structure describing which components and their versions of the service
   * are required in order to run the job.
   */
  version: any;
  /**
   * The worker pools. At least one &quot;harness&quot; worker pool must be
   * specified in order for the job to have workers.
   */
  workerPools: Schema$WorkerPool[];
}
/**
 * A message describing the state of a particular execution stage.
 */
export interface Schema$ExecutionStageState {
  /**
   * The time at which the stage transitioned to this state.
   */
  currentStateTime: string;
  /**
   * The name of the execution stage.
   */
  executionStageName: string;
  /**
   * Executions stage states allow the same set of values as JobState.
   */
  executionStageState: string;
}
/**
 * Description of the composing transforms, names/ids, and input/outputs of a
 * stage of execution.  Some composing transforms and sources may have been
 * generated by the Dataflow service during execution planning.
 */
export interface Schema$ExecutionStageSummary {
  /**
   * Collections produced and consumed by component transforms of this stage.
   */
  componentSource: Schema$ComponentSource[];
  /**
   * Transforms that comprise this execution stage.
   */
  componentTransform: Schema$ComponentTransform[];
  /**
   * Dataflow service generated id for this stage.
   */
  id: string;
  /**
   * Input sources for this stage.
   */
  inputSource: Schema$StageSource[];
  /**
   * Type of tranform this stage is executing.
   */
  kind: string;
  /**
   * Dataflow service generated name for this stage.
   */
  name: string;
  /**
   * Output sources for this stage.
   */
  outputSource: Schema$StageSource[];
}
/**
 * Indicates which location failed to respond to a request for data.
 */
export interface Schema$FailedLocation {
  /**
   * The name of the failed location.
   */
  name: string;
}
/**
 * An instruction that copies its inputs (zero or more) to its (single) output.
 */
export interface Schema$FlattenInstruction {
  /**
   * Describes the inputs to the flatten instruction.
   */
  inputs: Schema$InstructionInput[];
}
/**
 * A metric value representing a list of floating point numbers.
 */
export interface Schema$FloatingPointList {
  /**
   * Elements of the list.
   */
  elements: number[];
}
/**
 * A representation of a floating point mean metric contribution.
 */
export interface Schema$FloatingPointMean {
  /**
   * The number of values being aggregated.
   */
  count: Schema$SplitInt64;
  /**
   * The sum of all values being aggregated.
   */
  sum: number;
}
/**
 * Request to get updated debug configuration for component.
 */
export interface Schema$GetDebugConfigRequest {
  /**
   * The internal component id for which debug configuration is requested.
   */
  componentId: string;
  /**
   * The location which contains the job specified by job_id.
   */
  location: string;
  /**
   * The worker id, i.e., VM hostname.
   */
  workerId: string;
}
/**
 * Response to a get debug configuration request.
 */
export interface Schema$GetDebugConfigResponse {
  /**
   * The encoded debug configuration for the requested component.
   */
  config: string;
}
/**
 * The response to a GetTemplate request.
 */
export interface Schema$GetTemplateResponse {
  /**
   * The template metadata describing the template name, available parameters,
   * etc.
   */
  metadata: Schema$TemplateMetadata;
  /**
   * The status of the get template request. Any problems with the request will
   * be indicated in the error_details.
   */
  status: Schema$Status;
}
/**
 * Histogram of value counts for a distribution.  Buckets have an inclusive
 * lower bound and exclusive upper bound and use &quot;1,2,5 bucketing&quot;:
 * The first bucket range is from [0,1) and all subsequent bucket boundaries are
 * powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2,
 * 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported.
 */
export interface Schema$Histogram {
  /**
   * Counts of values in each bucket. For efficiency, prefix and trailing
   * buckets with count = 0 are elided. Buckets can store the full range of
   * values of an unsigned long, with ULLONG_MAX falling into the 59th bucket
   * with range [1e19, 2e19).
   */
  bucketCounts: string[];
  /**
   * Starting index of first stored bucket. The non-inclusive upper-bound of the
   * ith bucket is given by:   pow(10,(i-first_bucket_offset)/3) *
   * (1,2,5)[(i-first_bucket_offset)%3]
   */
  firstBucketOffset: number;
}
/**
 * An input of an instruction, as a reference to an output of a producer
 * instruction.
 */
export interface Schema$InstructionInput {
  /**
   * The output index (origin zero) within the producer.
   */
  outputNum: number;
  /**
   * The index (origin zero) of the parallel instruction that produces the
   * output to be consumed by this input.  This index is relative to the list of
   * instructions in this input&#39;s instruction&#39;s containing MapTask.
   */
  producerInstructionIndex: number;
}
/**
 * An output of an instruction.
 */
export interface Schema$InstructionOutput {
  /**
   * The codec to use to encode data being written via this output.
   */
  codec: any;
  /**
   * The user-provided name of this output.
   */
  name: string;
  /**
   * For system-generated byte and mean byte metrics, certain instructions
   * should only report the key size.
   */
  onlyCountKeyBytes: boolean;
  /**
   * For system-generated byte and mean byte metrics, certain instructions
   * should only report the value size.
   */
  onlyCountValueBytes: boolean;
  /**
   * System-defined name for this output in the original workflow graph. Outputs
   * that do not contribute to an original instruction do not set this.
   */
  originalName: string;
  /**
   * System-defined name of this output. Unique across the workflow.
   */
  systemName: string;
}
/**
 * A metric value representing temporal values of a variable.
 */
export interface Schema$IntegerGauge {
  /**
   * The time at which this value was measured. Measured as msecs from epoch.
   */
  timestamp: string;
  /**
   * The value of the variable represented by this gauge.
   */
  value: Schema$SplitInt64;
}
/**
 * A metric value representing a list of integers.
 */
export interface Schema$IntegerList {
  /**
   * Elements of the list.
   */
  elements: Schema$SplitInt64[];
}
/**
 * A representation of an integer mean metric contribution.
 */
export interface Schema$IntegerMean {
  /**
   * The number of values being aggregated.
   */
  count: Schema$SplitInt64;
  /**
   * The sum of all values being aggregated.
   */
  sum: Schema$SplitInt64;
}
/**
 * Defines a job to be run by the Cloud Dataflow service.
 */
export interface Schema$Job {
  /**
   * The client&#39;s unique identifier of the job, re-used across retried
   * attempts. If this field is set, the service will ensure its uniqueness. The
   * request to create a job will fail if the service has knowledge of a
   * previously submitted job with the same client&#39;s ID and job name. The
   * caller may use this field to ensure idempotence of job creation across
   * retried attempts to create a job. By default, the field is empty and, in
   * that case, the service ignores it.
   */
  clientRequestId: string;
  /**
   * The timestamp when the job was initially created. Immutable and set by the
   * Cloud Dataflow service.
   */
  createTime: string;
  /**
   * The current state of the job.  Jobs are created in the `JOB_STATE_STOPPED`
   * state unless otherwise specified.  A job in the `JOB_STATE_RUNNING` state
   * may asynchronously enter a terminal state. After a job has reached a
   * terminal state, no further state updates may be made.  This field may be
   * mutated by the Cloud Dataflow service; callers cannot mutate it.
   */
  currentState: string;
  /**
   * The timestamp associated with the current state.
   */
  currentStateTime: string;
  /**
   * The environment for the job.
   */
  environment: Schema$Environment;
  /**
   * Deprecated.
   */
  executionInfo: Schema$JobExecutionInfo;
  /**
   * The unique ID of this job.  This field is set by the Cloud Dataflow service
   * when the Job is created, and is immutable for the life of the job.
   */
  id: string;
  /**
   * User-defined labels for this job.  The labels map can contain no more than
   * 64 entries.  Entries of the labels map are UTF8 strings that comply with
   * the following restrictions:  * Keys must conform to regexp:
   * \p{Ll}\p{Lo}{0,62} * Values must conform to regexp:
   * [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally
   * constrained to be &lt;= 128 bytes in size.
   */
  labels: any;
  /**
   * The location that contains this job.
   */
  location: string;
  /**
   * The user-specified Cloud Dataflow job name.  Only one Job with a given name
   * may exist in a project at any given time. If a caller attempts to create a
   * Job with the same name as an already-existing Job, the attempt returns the
   * existing Job.  The name must match the regular expression
   * `[a-z]([-a-z0-9]{0,38}[a-z0-9])?`
   */
  name: string;
  /**
   * Preliminary field: The format of this data may change at any time. A
   * description of the user pipeline and stages through which it is executed.
   * Created by Cloud Dataflow service.  Only retrieved with
   * JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.
   */
  pipelineDescription: Schema$PipelineDescription;
  /**
   * The ID of the Cloud Platform project that the job belongs to.
   */
  projectId: string;
  /**
   * If another job is an update of this job (and thus, this job is in
   * `JOB_STATE_UPDATED`), this field contains the ID of that job.
   */
  replacedByJobId: string;
  /**
   * If this job is an update of an existing job, this field is the job ID of
   * the job it replaced.  When sending a `CreateJobRequest`, you can update a
   * job by specifying it here. The job named here is stopped, and its
   * intermediate state is transferred to this job.
   */
  replaceJobId: string;
  /**
   * The job&#39;s requested state.  `UpdateJob` may be used to switch between
   * the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting
   * requested_state.  `UpdateJob` may also be used to directly set a job&#39;s
   * requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably
   * terminating the job if it has not already reached a terminal state.
   */
  requestedState: string;
  /**
   * This field may be mutated by the Cloud Dataflow service; callers cannot
   * mutate it.
   */
  stageStates: Schema$ExecutionStageState[];
  /**
   * The top-level steps that constitute the entire job.
   */
  steps: Schema$Step[];
  /**
   * A set of files the system should be aware of that are used for temporary
   * storage. These temporary files will be removed on job completion. No
   * duplicates are allowed. No file patterns are supported.  The supported
   * files are:  Google Cloud Storage: storage.googleapis.com/{bucket}/{object}
   * bucket.storage.googleapis.com/{object}
   */
  tempFiles: string[];
  /**
   * The map of transform name prefixes of the job to be replaced to the
   * corresponding name prefixes of the new job.
   */
  transformNameMapping: any;
  /**
   * The type of Cloud Dataflow job.
   */
  type: string;
}
/**
 * Additional information about how a Cloud Dataflow job will be executed that
 * isn&#39;t contained in the submitted job.
 */
export interface Schema$JobExecutionInfo {
  /**
   * A mapping from each stage to the information about that stage.
   */
  stages: any;
}
/**
 * Contains information about how a particular google.dataflow.v1beta3.Step will
 * be executed.
 */
export interface Schema$JobExecutionStageInfo {
  /**
   * The steps associated with the execution stage. Note that stages may have
   * several steps, and that a given step might be run by more than one stage.
   */
  stepName: string[];
}
/**
 * A particular message pertaining to a Dataflow job.
 */
export interface Schema$JobMessage {
  /**
   * Deprecated.
   */
  id: string;
  /**
   * Importance level of the message.
   */
  messageImportance: string;
  /**
   * The text of the message.
   */
  messageText: string;
  /**
   * The timestamp of the message.
   */
  time: string;
}
/**
 * JobMetrics contains a collection of metrics descibing the detailed progress
 * of a Dataflow job. Metrics correspond to user-defined and system-defined
 * metrics in the job.  This resource captures only the most recent values of
 * each metric; time-series data can be queried for them (under the same metric
 * names) from Cloud Monitoring.
 */
export interface Schema$JobMetrics {
  /**
   * All metrics for this job.
   */
  metrics: Schema$MetricUpdate[];
  /**
   * Timestamp as of which metric values are current.
   */
  metricTime: string;
}
/**
 * Data disk assignment information for a specific key-range of a sharded
 * computation. Currently we only support UTF-8 character splits to simplify
 * encoding into JSON.
 */
export interface Schema$KeyRangeDataDiskAssignment {
  /**
   * The name of the data disk where data for this range is stored. This name is
   * local to the Google Cloud Platform project and uniquely identifies the disk
   * within that project, for example
   * &quot;myproject-1014-104817-4c2-harness-0-disk-1&quot;.
   */
  dataDisk: string;
  /**
   * The end (exclusive) of the key range.
   */
  end: string;
  /**
   * The start (inclusive) of the key range.
   */
  start: string;
}
/**
 * Location information for a specific key-range of a sharded computation.
 * Currently we only support UTF-8 character splits to simplify encoding into
 * JSON.
 */
export interface Schema$KeyRangeLocation {
  /**
   * The name of the data disk where data for this range is stored. This name is
   * local to the Google Cloud Platform project and uniquely identifies the disk
   * within that project, for example
   * &quot;myproject-1014-104817-4c2-harness-0-disk-1&quot;.
   */
  dataDisk: string;
  /**
   * The physical location of this range assignment to be used for streaming
   * computation cross-worker message delivery.
   */
  deliveryEndpoint: string;
  /**
   * DEPRECATED. The location of the persistent state for this range, as a
   * persistent directory in the worker local filesystem.
   */
  deprecatedPersistentDirectory: string;
  /**
   * The end (exclusive) of the key range.
   */
  end: string;
  /**
   * The start (inclusive) of the key range.
   */
  start: string;
}
/**
 * Parameters to provide to the template being launched.
 */
export interface Schema$LaunchTemplateParameters {
  /**
   * The runtime environment for the job.
   */
  environment: Schema$RuntimeEnvironment;
  /**
   * Required. The job name to use for the created job.
   */
  jobName: string;
  /**
   * The runtime parameters to pass to the job.
   */
  parameters: any;
}
/**
 * Response to the request to launch a template.
 */
export interface Schema$LaunchTemplateResponse {
  /**
   * The job that was launched, if the request was not a dry run and the job was
   * successfully launched.
   */
  job: Schema$Job;
}
/**
 * Request to lease WorkItems.
 */
export interface Schema$LeaseWorkItemRequest {
  /**
   * The current timestamp at the worker.
   */
  currentWorkerTime: string;
  /**
   * The location which contains the WorkItem&#39;s job.
   */
  location: string;
  /**
   * The initial lease period.
   */
  requestedLeaseDuration: string;
  /**
   * Worker capabilities. WorkItems might be limited to workers with specific
   * capabilities.
   */
  workerCapabilities: string[];
  /**
   * Identifies the worker leasing work -- typically the ID of the virtual
   * machine running the worker.
   */
  workerId: string;
  /**
   * Filter for WorkItem type.
   */
  workItemTypes: string[];
}
/**
 * Response to a request to lease WorkItems.
 */
export interface Schema$LeaseWorkItemResponse {
  /**
   * A list of the leased WorkItems.
   */
  workItems: Schema$WorkItem[];
}
/**
 * Response to a request to list job messages.
 */
export interface Schema$ListJobMessagesResponse {
  /**
   * Autoscaling events in ascending timestamp order.
   */
  autoscalingEvents: Schema$AutoscalingEvent[];
  /**
   * Messages in ascending timestamp order.
   */
  jobMessages: Schema$JobMessage[];
  /**
   * The token to obtain the next page of results if there are more.
   */
  nextPageToken: string;
}
/**
 * Response to a request to list Cloud Dataflow jobs.  This may be a partial
 * response, depending on the page size in the ListJobsRequest.
 */
export interface Schema$ListJobsResponse {
  /**
   * Zero or more messages describing locations that failed to respond.
   */
  failedLocation: Schema$FailedLocation[];
  /**
   * A subset of the requested job information.
   */
  jobs: Schema$Job[];
  /**
   * Set if there may be more results than fit in this response.
   */
  nextPageToken: string;
}
/**
 * MapTask consists of an ordered set of instructions, each of which describes
 * one particular low-level operation for the worker to perform in order to
 * accomplish the MapTask&#39;s WorkItem.  Each instruction must appear in the
 * list before any instructions which depends on its output.
 */
export interface Schema$MapTask {
  /**
   * The instructions in the MapTask.
   */
  instructions: Schema$ParallelInstruction[];
  /**
   * System-defined name of the stage containing this MapTask. Unique across the
   * workflow.
   */
  stageName: string;
  /**
   * System-defined name of this MapTask. Unique across the workflow.
   */
  systemName: string;
}
/**
 * The metric short id is returned to the user alongside an offset into
 * ReportWorkItemStatusRequest
 */
export interface Schema$MetricShortId {
  /**
   * The index of the corresponding metric in the ReportWorkItemStatusRequest.
   * Required.
   */
  metricIndex: number;
  /**
   * The service-generated short identifier for the metric.
   */
  shortId: string;
}
/**
 * Identifies a metric, by describing the source which generated the metric.
 */
export interface Schema$MetricStructuredName {
  /**
   * Zero or more labeled fields which identify the part of the job this metric
   * is associated with, such as the name of a step or collection.  For example,
   * built-in counters associated with steps will have context[&#39;step&#39;] =
   * &lt;step-name&gt;. Counters associated with PCollections in the SDK will
   * have context[&#39;pcollection&#39;] = &lt;pcollection-name&gt;.
   */
  context: any;
  /**
   * Worker-defined metric name.
   */
  name: string;
  /**
   * Origin (namespace) of metric name. May be blank for user-define metrics;
   * will be &quot;dataflow&quot; for metrics defined by the Dataflow service or
   * SDK.
   */
  origin: string;
}
/**
 * Describes the state of a metric.
 */
export interface Schema$MetricUpdate {
  /**
   * True if this metric is reported as the total cumulative aggregate value
   * accumulated since the worker started working on this WorkItem. By default
   * this is false, indicating that this metric is reported as a delta that is
   * not associated with any WorkItem.
   */
  cumulative: boolean;
  /**
   * A struct value describing properties of a distribution of numeric values.
   */
  distribution: any;
  /**
   * Worker-computed aggregate value for internal use by the Dataflow service.
   */
  internal: any;
  /**
   * Metric aggregation kind.  The possible metric aggregation kinds are
   * &quot;Sum&quot;, &quot;Max&quot;, &quot;Min&quot;, &quot;Mean&quot;,
   * &quot;Set&quot;, &quot;And&quot;, &quot;Or&quot;, and
   * &quot;Distribution&quot;. The specified aggregation kind is
   * case-insensitive.  If omitted, this is not an aggregated value but instead
   * a single metric sample value.
   */
  kind: string;
  /**
   * Worker-computed aggregate value for the &quot;Mean&quot; aggregation kind.
   * This holds the count of the aggregated values and is used in combination
   * with mean_sum above to obtain the actual mean aggregate value. The only
   * possible value type is Long.
   */
  meanCount: any;
  /**
   * Worker-computed aggregate value for the &quot;Mean&quot; aggregation kind.
   * This holds the sum of the aggregated values and is used in combination with
   * mean_count below to obtain the actual mean aggregate value. The only
   * possible value types are Long and Double.
   */
  meanSum: any;
  /**
   * Name of the metric.
   */
  name: Schema$MetricStructuredName;
  /**
   * Worker-computed aggregate value for aggregation kinds &quot;Sum&quot;,
   * &quot;Max&quot;, &quot;Min&quot;, &quot;And&quot;, and &quot;Or&quot;.  The
   * possible value types are Long, Double, and Boolean.
   */
  scalar: any;
  /**
   * Worker-computed aggregate value for the &quot;Set&quot; aggregation kind.
   * The only possible value type is a list of Values whose type can be Long,
   * Double, or String, according to the metric&#39;s type.  All Values in the
   * list must be of the same type.
   */
  set: any;
  /**
   * Timestamp associated with the metric value. Optional when workers are
   * reporting work progress; it will be filled in responses from the metrics
   * API.
   */
  updateTime: string;
}
/**
 * Describes mounted data disk.
 */
export interface Schema$MountedDataDisk {
  /**
   * The name of the data disk. This name is local to the Google Cloud Platform
   * project and uniquely identifies the disk within that project, for example
   * &quot;myproject-1014-104817-4c2-harness-0-disk-1&quot;.
   */
  dataDisk: string;
}
/**
 * Information about an output of a multi-output DoFn.
 */
export interface Schema$MultiOutputInfo {
  /**
   * The id of the tag the user code will emit to this output by; this should
   * correspond to the tag of some SideInputInfo.
   */
  tag: string;
}
/**
 * Basic metadata about a counter.
 */
export interface Schema$NameAndKind {
  /**
   * Counter aggregation kind.
   */
  kind: string;
  /**
   * Name of the counter.
   */
  name: string;
}
/**
 * The packages that must be installed in order for a worker to run the steps of
 * the Cloud Dataflow job that will be assigned to its worker pool.  This is the
 * mechanism by which the Cloud Dataflow SDK causes code to be loaded onto the
 * workers. For example, the Cloud Dataflow Java SDK might use this to install
 * jars containing the user&#39;s code and all of the various dependencies
 * (libraries, data files, etc.) required in order for that code to run.
 */
export interface Schema$Package {
  /**
   * The resource to read the package from. The supported resource type is:
   * Google Cloud Storage:    storage.googleapis.com/{bucket}
   * bucket.storage.googleapis.com/
   */
  location: string;
  /**
   * The name of the package.
   */
  name: string;
}
/**
 * Describes a particular operation comprising a MapTask.
 */
export interface Schema$ParallelInstruction {
  /**
   * Additional information for Flatten instructions.
   */
  flatten: Schema$FlattenInstruction;
  /**
   * User-provided name of this operation.
   */
  name: string;
  /**
   * System-defined name for the operation in the original workflow graph.
   */
  originalName: string;
  /**
   * Describes the outputs of the instruction.
   */
  outputs: Schema$InstructionOutput[];
  /**
   * Additional information for ParDo instructions.
   */
  parDo: Schema$ParDoInstruction;
  /**
   * Additional information for PartialGroupByKey instructions.
   */
  partialGroupByKey: Schema$PartialGroupByKeyInstruction;
  /**
   * Additional information for Read instructions.
   */
  read: Schema$ReadInstruction;
  /**
   * System-defined name of this operation. Unique across the workflow.
   */
  systemName: string;
  /**
   * Additional information for Write instructions.
   */
  write: Schema$WriteInstruction;
}
/**
 * Structured data associated with this message.
 */
export interface Schema$Parameter {
  /**
   * Key or name for this parameter.
   */
  key: string;
  /**
   * Value for this parameter.
   */
  value: any;
}
/**
 * Metadata for a specific parameter.
 */
export interface Schema$ParameterMetadata {
  /**
   * Required. The help text to display for the parameter.
   */
  helpText: string;
  /**
   * Optional. Whether the parameter is optional. Defaults to false.
   */
  isOptional: boolean;
  /**
   * Required. The label to display for the parameter.
   */
  label: string;
  /**
   * Required. The name of the parameter.
   */
  name: string;
  /**
   * Optional. Regexes that the parameter must match.
   */
  regexes: string[];
}
/**
 * An instruction that does a ParDo operation. Takes one main input and zero or
 * more side inputs, and produces zero or more outputs. Runs user code.
 */
export interface Schema$ParDoInstruction {
  /**
   * The input.
   */
  input: Schema$InstructionInput;
  /**
   * Information about each of the outputs, if user_fn is a  MultiDoFn.
   */
  multiOutputInfos: Schema$MultiOutputInfo[];
  /**
   * The number of outputs.
   */
  numOutputs: number;
  /**
   * Zero or more side inputs.
   */
  sideInputs: Schema$SideInputInfo[];
  /**
   * The user function to invoke.
   */
  userFn: any;
}
/**
 * An instruction that does a partial group-by-key. One input and one output.
 */
export interface Schema$PartialGroupByKeyInstruction {
  /**
   * Describes the input to the partial group-by-key instruction.
   */
  input: Schema$InstructionInput;
  /**
   * The codec to use for interpreting an element in the input PTable.
   */
  inputElementCodec: any;
  /**
   * If this instruction includes a combining function this is the name of the
   * intermediate store between the GBK and the CombineValues.
   */
  originalCombineValuesInputStoreName: string;
  /**
   * If this instruction includes a combining function, this is the name of the
   * CombineValues instruction lifted into this instruction.
   */
  originalCombineValuesStepName: string;
  /**
   * Zero or more side inputs.
   */
  sideInputs: Schema$SideInputInfo[];
  /**
   * The value combining function to invoke.
   */
  valueCombiningFn: any;
}
/**
 * A descriptive representation of submitted pipeline as well as the executed
 * form.  This data is provided by the Dataflow service for ease of visualizing
 * the pipeline and interpretting Dataflow provided metrics.
 */
export interface Schema$PipelineDescription {
  /**
   * Pipeline level display data.
   */
  displayData: Schema$DisplayData[];
  /**
   * Description of each stage of execution of the pipeline.
   */
  executionPipelineStage: Schema$ExecutionStageSummary[];
  /**
   * Description of each transform in the pipeline and collections between them.
   */
  originalPipelineTransform: Schema$TransformSummary[];
}
/**
 * Position defines a position within a collection of data.  The value can be
 * either the end position, a key (used with ordered collections), a byte
 * offset, or a record index.
 */
export interface Schema$Position {
  /**
   * Position is a byte offset.
   */
  byteOffset: string;
  /**
   * CloudPosition is a concat position.
   */
  concatPosition: Schema$ConcatPosition;
  /**
   * Position is past all other positions. Also useful for the end position of
   * an unbounded range.
   */
  end: boolean;
  /**
   * Position is a string key, ordered lexicographically.
   */
  key: string;
  /**
   * Position is a record index.
   */
  recordIndex: string;
  /**
   * CloudPosition is a base64 encoded BatchShufflePosition (with FIXED
   * sharding).
   */
  shufflePosition: string;
}
/**
 * Identifies a pubsub location to use for transferring data into or out of a
 * streaming Dataflow job.
 */
export interface Schema$PubsubLocation {
  /**
   * Indicates whether the pipeline allows late-arriving data.
   */
  dropLateData: boolean;
  /**
   * If set, contains a pubsub label from which to extract record ids. If left
   * empty, record deduplication will be strictly best effort.
   */
  idLabel: string;
  /**
   * A pubsub subscription, in the form of
   * &quot;pubsub.googleapis.com/subscriptions/&lt;project-id&gt;/&lt;subscription-name&gt;&quot;
   */
  subscription: string;
  /**
   * If set, contains a pubsub label from which to extract record timestamps. If
   * left empty, record timestamps will be generated upon arrival.
   */
  timestampLabel: string;
  /**
   * A pubsub topic, in the form of
   * &quot;pubsub.googleapis.com/topics/&lt;project-id&gt;/&lt;topic-name&gt;&quot;
   */
  topic: string;
  /**
   * If set, specifies the pubsub subscription that will be used for tracking
   * custom time timestamps for watermark estimation.
   */
  trackingSubscription: string;
  /**
   * If true, then the client has requested to get pubsub attributes.
   */
  withAttributes: boolean;
}
/**
 * An instruction that reads records. Takes no inputs, produces one output.
 */
export interface Schema$ReadInstruction {
  /**
   * The source to read from.
   */
  source: Schema$Source;
}
/**
 * Represents the level of parallelism in a WorkItem&#39;s input, reported by
 * the worker.
 */
export interface Schema$ReportedParallelism {
  /**
   * Specifies whether the parallelism is infinite. If true, &quot;value&quot;
   * is ignored. Infinite parallelism means the service will assume that the
   * work item can always be split into more non-empty work items by dynamic
   * splitting. This is a work-around for lack of support for infinity by the
   * current JSON-based Java RPC stack.
   */
  isInfinite: boolean;
  /**
   * Specifies the level of parallelism in case it is finite.
   */
  value: number;
}
/**
 * Request to report the status of WorkItems.
 */
export interface Schema$ReportWorkItemStatusRequest {
  /**
   * The current timestamp at the worker.
   */
  currentWorkerTime: string;
  /**
   * The location which contains the WorkItem&#39;s job.
   */
  location: string;
  /**
   * The ID of the worker reporting the WorkItem status.  If this does not match
   * the ID of the worker which the Dataflow service believes currently has the
   * lease on the WorkItem, the report will be dropped (with an error response).
   */
  workerId: string;
  /**
   * The order is unimportant, except that the order of the WorkItemServiceState
   * messages in the ReportWorkItemStatusResponse corresponds to the order of
   * WorkItemStatus messages here.
   */
  workItemStatuses: Schema$WorkItemStatus[];
}
/**
 * Response from a request to report the status of WorkItems.
 */
export interface Schema$ReportWorkItemStatusResponse {
  /**
   * A set of messages indicating the service-side state for each WorkItem whose
   * status was reported, in the same order as the WorkItemStatus messages in
   * the ReportWorkItemStatusRequest which resulting in this response.
   */
  workItemServiceStates: Schema$WorkItemServiceState[];
}
/**
 * Worker metrics exported from workers. This contains resource utilization
 * metrics accumulated from a variety of sources. For more information, see
 * go/df-resource-signals.
 */
export interface Schema$ResourceUtilizationReport {
  /**
   * CPU utilization samples.
   */
  cpuTime: Schema$CPUTime[];
}
/**
 * Service-side response to WorkerMessage reporting resource utilization.
 */
export interface Schema$ResourceUtilizationReportResponse {}
/**
 * The environment values to set at runtime.
 */
export interface Schema$RuntimeEnvironment {
  /**
   * Additional experiment flags for the job.
   */
  additionalExperiments: string[];
  /**
   * Whether to bypass the safety checks for the job&#39;s temporary directory.
   * Use with caution.
   */
  bypassTempDirValidation: boolean;
  /**
   * The machine type to use for the job. Defaults to the value from the
   * template if not specified.
   */
  machineType: string;
  /**
   * The maximum number of Google Compute Engine instances to be made available
   * to your pipeline during execution, from 1 to 1000.
   */
  maxWorkers: number;
  /**
   * Network to which VMs will be assigned.  If empty or unspecified, the
   * service will use the network &quot;default&quot;.
   */
  network: string;
  /**
   * The email address of the service account to run the job as.
   */
  serviceAccountEmail: string;
  /**
   * Subnetwork to which VMs will be assigned, if desired.  Expected to be of
   * the form &quot;regions/REGION/subnetworks/SUBNETWORK&quot;.
   */
  subnetwork: string;
  /**
   * The Cloud Storage path to use for temporary files. Must be a valid Cloud
   * Storage URL, beginning with `gs://`.
   */
  tempLocation: string;
  /**
   * The Compute Engine [availability
   * zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones)
   * for launching worker instances to run your pipeline.
   */
  zone: string;
}
/**
 * Request to send encoded debug information.
 */
export interface Schema$SendDebugCaptureRequest {
  /**
   * The internal component id for which debug information is sent.
   */
  componentId: string;
  /**
   * The encoded debug information.
   */
  data: string;
  /**
   * The location which contains the job specified by job_id.
   */
  location: string;
  /**
   * The worker id, i.e., VM hostname.
   */
  workerId: string;
}
/**
 * Response to a send capture request. nothing
 */
export interface Schema$SendDebugCaptureResponse {}
/**
 * A request for sending worker messages to the service.
 */
export interface Schema$SendWorkerMessagesRequest {
  /**
   * The location which contains the job
   */
  location: string;
  /**
   * The WorkerMessages to send.
   */
  workerMessages: Schema$WorkerMessage[];
}
/**
 * The response to the worker messages.
 */
export interface Schema$SendWorkerMessagesResponse {
  /**
   * The servers response to the worker messages.
   */
  workerMessageResponses: Schema$WorkerMessageResponse[];
}
/**
 * Describes a particular function to invoke.
 */
export interface Schema$SeqMapTask {
  /**
   * Information about each of the inputs.
   */
  inputs: Schema$SideInputInfo[];
  /**
   * The user-provided name of the SeqDo operation.
   */
  name: string;
  /**
   * Information about each of the outputs.
   */
  outputInfos: Schema$SeqMapTaskOutputInfo[];
  /**
   * System-defined name of the stage containing the SeqDo operation. Unique
   * across the workflow.
   */
  stageName: string;
  /**
   * System-defined name of the SeqDo operation. Unique across the workflow.
   */
  systemName: string;
  /**
   * The user function to invoke.
   */
  userFn: any;
}
/**
 * Information about an output of a SeqMapTask.
 */
export interface Schema$SeqMapTaskOutputInfo {
  /**
   * The sink to write the output value to.
   */
  sink: Schema$Sink;
  /**
   * The id of the TupleTag the user code will tag the output value by.
   */
  tag: string;
}
/**
 * A task which consists of a shell command for the worker to execute.
 */
export interface Schema$ShellTask {
  /**
   * The shell command to run.
   */
  command: string;
  /**
   * Exit code for the task.
   */
  exitCode: number;
}
/**
 * Information about a side input of a DoFn or an input of a SeqDoFn.
 */
export interface Schema$SideInputInfo {
  /**
   * How to interpret the source element(s) as a side input value.
   */
  kind: any;
  /**
   * The source(s) to read element(s) from to get the value of this side input.
   * If more than one source, then the elements are taken from the sources, in
   * the specified order if order matters. At least one source is required.
   */
  sources: Schema$Source[];
  /**
   * The id of the tag the user code will access this side input by; this should
   * correspond to the tag of some MultiOutputInfo.
   */
  tag: string;
}
/**
 * A sink that records can be encoded and written to.
 */
export interface Schema$Sink {
  /**
   * The codec to use to encode data written to the sink.
   */
  codec: any;
  /**
   * The sink to write to, plus its parameters.
   */
  spec: any;
}
/**
 * A source that records can be read and decoded from.
 */
export interface Schema$Source {
  /**
   * While splitting, sources may specify the produced bundles as differences
   * against another source, in order to save backend-side memory and allow
   * bigger jobs. For details, see SourceSplitRequest. To support this use case,
   * the full set of parameters of the source is logically obtained by taking
   * the latest explicitly specified value of each parameter in the order:
   * base_specs (later items win), spec (overrides anything in base_specs).
   */
  baseSpecs: any[];
  /**
   * The codec to use to decode data read from the source.
   */
  codec: any;
  /**
   * Setting this value to true hints to the framework that the source
   * doesn&#39;t need splitting, and using SourceSplitRequest on it would yield
   * SOURCE_SPLIT_OUTCOME_USE_CURRENT.  E.g. a file splitter may set this to
   * true when splitting a single file into a set of byte ranges of appropriate
   * size, and set this to false when splitting a filepattern into individual
   * files. However, for efficiency, a file splitter may decide to produce file
   * subranges directly from the filepattern to avoid a splitting round-trip.
   * See SourceSplitRequest for an overview of the splitting process.  This
   * field is meaningful only in the Source objects populated by the user (e.g.
   * when filling in a DerivedSource). Source objects supplied by the framework
   * to the user don&#39;t have this field populated.
   */
  doesNotNeedSplitting: boolean;
  /**
   * Optionally, metadata for this source can be supplied right away, avoiding a
   * SourceGetMetadataOperation roundtrip (see SourceOperationRequest).  This
   * field is meaningful only in the Source objects populated by the user (e.g.
   * when filling in a DerivedSource). Source objects supplied by the framework
   * to the user don&#39;t have this field populated.
   */
  metadata: Schema$SourceMetadata;
  /**
   * The source to read from, plus its parameters.
   */
  spec: any;
}
/**
 * DEPRECATED in favor of DynamicSourceSplit.
 */
export interface Schema$SourceFork {
  /**
   * DEPRECATED
   */
  primary: Schema$SourceSplitShard;
  /**
   * DEPRECATED
   */
  primarySource: Schema$DerivedSource;
  /**
   * DEPRECATED
   */
  residual: Schema$SourceSplitShard;
  /**
   * DEPRECATED
   */
  residualSource: Schema$DerivedSource;
}
/**
 * A request to compute the SourceMetadata of a Source.
 */
export interface Schema$SourceGetMetadataRequest {
  /**
   * Specification of the source whose metadata should be computed.
   */
  source: Schema$Source;
}
/**
 * The result of a SourceGetMetadataOperation.
 */
export interface Schema$SourceGetMetadataResponse {
  /**
   * The computed metadata.
   */
  metadata: Schema$SourceMetadata;
}
/**
 * Metadata about a Source useful for automatically optimizing and tuning the
 * pipeline, etc.
 */
export interface Schema$SourceMetadata {
  /**
   * An estimate of the total size (in bytes) of the data that would be read
   * from this source.  This estimate is in terms of external storage size,
   * before any decompression or other processing done by the reader.
   */
  estimatedSizeBytes: string;
  /**
   * Specifies that the size of this source is known to be infinite (this is a
   * streaming source).
   */
  infinite: boolean;
  /**
   * Whether this source is known to produce key/value pairs with the (encoded)
   * keys in lexicographically sorted order.
   */
  producesSortedKeys: boolean;
}
/**
 * A work item that represents the different operations that can be performed on
 * a user-defined Source specification.
 */
export interface Schema$SourceOperationRequest {
  /**
   * Information about a request to get metadata about a source.
   */
  getMetadata: Schema$SourceGetMetadataRequest;
  /**
   * User-provided name of the Read instruction for this source.
   */
  name: string;
  /**
   * System-defined name for the Read instruction for this source in the
   * original workflow graph.
   */
  originalName: string;
  /**
   * Information about a request to split a source.
   */
  split: Schema$SourceSplitRequest;
  /**
   * System-defined name of the stage containing the source operation. Unique
   * across the workflow.
   */
  stageName: string;
  /**
   * System-defined name of the Read instruction for this source. Unique across
   * the workflow.
   */
  systemName: string;
}
/**
 * The result of a SourceOperationRequest, specified in
 * ReportWorkItemStatusRequest.source_operation when the work item is completed.
 */
export interface Schema$SourceOperationResponse {
  /**
   * A response to a request to get metadata about a source.
   */
  getMetadata: Schema$SourceGetMetadataResponse;
  /**
   * A response to a request to split a source.
   */
  split: Schema$SourceSplitResponse;
}
/**
 * Hints for splitting a Source into bundles (parts for parallel processing)
 * using SourceSplitRequest.
 */
export interface Schema$SourceSplitOptions {
  /**
   * The source should be split into a set of bundles where the estimated size
   * of each is approximately this many bytes.
   */
  desiredBundleSizeBytes: string;
  /**
   * DEPRECATED in favor of desired_bundle_size_bytes.
   */
  desiredShardSizeBytes: string;
}
/**
 * Represents the operation to split a high-level Source specification into
 * bundles (parts for parallel processing).  At a high level, splitting of a
 * source into bundles happens as follows: SourceSplitRequest is applied to the
 * source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting
 * happens and the source is used &quot;as is&quot;. Otherwise, splitting is
 * applied recursively to each produced DerivedSource.  As an optimization, for
 * any Source, if its does_not_need_splitting is true, the framework assumes
 * that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and
 * doesn&#39;t initiate a SourceSplitRequest. This applies both to the initial
 * source being split and to bundles produced from it.
 */
export interface Schema$SourceSplitRequest {
  /**
   * Hints for tuning the splitting process.
   */
  options: Schema$SourceSplitOptions;
  /**
   * Specification of the source to be split.
   */
  source: Schema$Source;
}
/**
 * The response to a SourceSplitRequest.
 */
export interface Schema$SourceSplitResponse {
  /**
   * If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which
   * the source was split. Otherwise this field is ignored. This list can be
   * empty, which means the source represents an empty input.
   */
  bundles: Schema$DerivedSource[];
  /**
   * Indicates whether splitting happened and produced a list of bundles. If
   * this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed
   * &quot;as is&quot; without splitting. &quot;bundles&quot; is ignored in this
   * case. If this is SPLITTING_HAPPENED, then &quot;bundles&quot; contains a
   * list of bundles into which the source was split.
   */
  outcome: string;
  /**
   * DEPRECATED in favor of bundles.
   */
  shards: Schema$SourceSplitShard[];
}
/**
 * DEPRECATED in favor of DerivedSource.
 */
export interface Schema$SourceSplitShard {
  /**
   * DEPRECATED
   */
  derivationMode: string;
  /**
   * DEPRECATED
   */
  source: Schema$Source;
}
/**
 * A representation of an int64, n, that is immune to precision loss when
 * encoded in JSON.
 */
export interface Schema$SplitInt64 {
  /**
   * The high order bits, including the sign: n &gt;&gt; 32.
   */
  highBits: number;
  /**
   * The low order bits: n &amp; 0xffffffff.
   */
  lowBits: number;
}
/**
 * Description of an input or output of an execution stage.
 */
export interface Schema$StageSource {
  /**
   * Dataflow service generated name for this source.
   */
  name: string;
  /**
   * User name for the original user transform or collection with which this
   * source is most closely associated.
   */
  originalTransformOrCollection: string;
  /**
   * Size of the source, if measurable.
   */
  sizeBytes: string;
  /**
   * Human-readable name for this source; may be user or system generated.
   */
  userName: string;
}
/**
 * State family configuration.
 */
export interface Schema$StateFamilyConfig {
  /**
   * If true, this family corresponds to a read operation.
   */
  isRead: boolean;
  /**
   * The state family value.
   */
  stateFamily: string;
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may have a
 * `Status` message for error reporting.  - Batch operations. If a client uses
 * batch request and batch response, the     `Status` message should be used
 * directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be     represented
 * directly using the `Status` message.  - Logging. If some API errors are
 * stored in logs, the message `Status` could     be used directly after any
 * stripping needed for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * Defines a particular step within a Cloud Dataflow job.  A job consists of
 * multiple steps, each of which performs some specific operation as part of the
 * overall job.  Data is typically passed from one step to another as part of
 * the job.  Here&#39;s an example of a sequence of steps which together
 * implement a Map-Reduce job:    * Read a collection of data from some source,
 * parsing the     collection&#39;s elements.    * Validate the elements.    *
 * Apply a user-defined function to map each element to some value     and
 * extract an element-specific key value.    * Group elements with the same key
 * into a single element with     that key, transforming a multiply-keyed
 * collection into a     uniquely-keyed collection.    * Write the elements out
 * to some data sink.  Note that the Cloud Dataflow service may be used to run
 * many different types of jobs, not just Map-Reduce.
 */
export interface Schema$Step {
  /**
   * The kind of step in the Cloud Dataflow job.
   */
  kind: string;
  /**
   * The name that identifies the step. This must be unique for each step with
   * respect to all other steps in the Cloud Dataflow job.
   */
  name: string;
  /**
   * Named properties associated with the step. Each kind of predefined step has
   * its own required set of properties. Must be provided on Create.  Only
   * retrieved with JOB_VIEW_ALL.
   */
  properties: any;
}
/**
 * Configuration information for a single streaming computation.
 */
export interface Schema$StreamingComputationConfig {
  /**
   * Unique identifier for this computation.
   */
  computationId: string;
  /**
   * Instructions that comprise the computation.
   */
  instructions: Schema$ParallelInstruction[];
  /**
   * Stage name of this computation.
   */
  stageName: string;
  /**
   * System defined name for this computation.
   */
  systemName: string;
}
/**
 * Describes full or partial data disk assignment information of the computation
 * ranges.
 */
export interface Schema$StreamingComputationRanges {
  /**
   * The ID of the computation.
   */
  computationId: string;
  /**
   * Data disk assignments for ranges from this computation.
   */
  rangeAssignments: Schema$KeyRangeDataDiskAssignment[];
}
/**
 * A task which describes what action should be performed for the specified
 * streaming computation ranges.
 */
export interface Schema$StreamingComputationTask {
  /**
   * Contains ranges of a streaming computation this task should apply to.
   */
  computationRanges: Schema$StreamingComputationRanges[];
  /**
   * Describes the set of data disks this task should apply to.
   */
  dataDisks: Schema$MountedDataDisk[];
  /**
   * A type of streaming computation task.
   */
  taskType: string;
}
/**
 * A task that carries configuration information for streaming computations.
 */
export interface Schema$StreamingConfigTask {
  /**
   * Set of computation configuration information.
   */
  streamingComputationConfigs: Schema$StreamingComputationConfig[];
  /**
   * Map from user step names to state families.
   */
  userStepToStateFamilyNameMap: any;
  /**
   * If present, the worker must use this endpoint to communicate with Windmill
   * Service dispatchers, otherwise the worker must continue to use whatever
   * endpoint it had been using.
   */
  windmillServiceEndpoint: string;
  /**
   * If present, the worker must use this port to communicate with Windmill
   * Service dispatchers. Only applicable when windmill_service_endpoint is
   * specified.
   */
  windmillServicePort: string;
}
/**
 * A task which initializes part of a streaming Dataflow job.
 */
export interface Schema$StreamingSetupTask {
  /**
   * The user has requested drain.
   */
  drain: boolean;
  /**
   * The TCP port on which the worker should listen for messages from other
   * streaming computation workers.
   */
  receiveWorkPort: number;
  /**
   * The global topology of the streaming Dataflow job.
   */
  streamingComputationTopology: Schema$TopologyConfig;
  /**
   * The TCP port used by the worker to communicate with the Dataflow worker
   * harness.
   */
  workerHarnessPort: number;
}
/**
 * Identifies the location of a streaming side input.
 */
export interface Schema$StreamingSideInputLocation {
  /**
   * Identifies the state family where this side input is stored.
   */
  stateFamily: string;
  /**
   * Identifies the particular side input within the streaming Dataflow job.
   */
  tag: string;
}
/**
 * Identifies the location of a streaming computation stage, for stage-to-stage
 * communication.
 */
export interface Schema$StreamingStageLocation {
  /**
   * Identifies the particular stream within the streaming Dataflow job.
   */
  streamId: string;
}
/**
 * Describes a stream of data, either as input to be processed or as output of a
 * streaming Dataflow job.
 */
export interface Schema$StreamLocation {
  /**
   * The stream is a custom source.
   */
  customSourceLocation: Schema$CustomSourceLocation;
  /**
   * The stream is a pubsub stream.
   */
  pubsubLocation: Schema$PubsubLocation;
  /**
   * The stream is a streaming side input.
   */
  sideInputLocation: Schema$StreamingSideInputLocation;
  /**
   * The stream is part of another computation within the current streaming
   * Dataflow job.
   */
  streamingStageLocation: Schema$StreamingStageLocation;
}
/**
 * A metric value representing a list of strings.
 */
export interface Schema$StringList {
  /**
   * Elements of the list.
   */
  elements: string[];
}
/**
 * A rich message format, including a human readable string, a key for
 * identifying the message, and structured data associated with the message for
 * programmatic consumption.
 */
export interface Schema$StructuredMessage {
  /**
   * Idenfier for this message type.  Used by external systems to
   * internationalize or personalize message.
   */
  messageKey: string;
  /**
   * Human-readable version of message.
   */
  messageText: string;
  /**
   * The structured data associated with this message.
   */
  parameters: Schema$Parameter[];
}
/**
 * Taskrunner configuration settings.
 */
export interface Schema$TaskRunnerSettings {
  /**
   * Whether to also send taskrunner log info to stderr.
   */
  alsologtostderr: boolean;
  /**
   * The location on the worker for task-specific subdirectories.
   */
  baseTaskDir: string;
  /**
   * The base URL for the taskrunner to use when accessing Google Cloud APIs.
   * When workers access Google Cloud APIs, they logically do so via relative
   * URLs.  If this field is specified, it supplies the base URL to use for
   * resolving these relative URLs.  The normative algorithm used is defined by
   * RFC 1808, &quot;Relative Uniform Resource Locators&quot;.  If not
   * specified, the default value is &quot;http://www.googleapis.com/&quot;
   */
  baseUrl: string;
  /**
   * The file to store preprocessing commands in.
   */
  commandlinesFileName: string;
  /**
   * Whether to continue taskrunner if an exception is hit.
   */
  continueOnException: boolean;
  /**
   * The API version of endpoint, e.g. &quot;v1b3&quot;
   */
  dataflowApiVersion: string;
  /**
   * The command to launch the worker harness.
   */
  harnessCommand: string;
  /**
   * The suggested backend language.
   */
  languageHint: string;
  /**
   * The directory on the VM to store logs.
   */
  logDir: string;
  /**
   * Whether to send taskrunner log info to Google Compute Engine VM serial
   * console.
   */
  logToSerialconsole: boolean;
  /**
   * Indicates where to put logs.  If this is not specified, the logs will not
   * be uploaded.  The supported resource type is:  Google Cloud Storage:
   * storage.googleapis.com/{bucket}/{object}
   * bucket.storage.googleapis.com/{object}
   */
  logUploadLocation: string;
  /**
   * The OAuth2 scopes to be requested by the taskrunner in order to access the
   * Cloud Dataflow API.
   */
  oauthScopes: string[];
  /**
   * The settings to pass to the parallel worker harness.
   */
  parallelWorkerSettings: Schema$WorkerSettings;
  /**
   * The streaming worker main class name.
   */
  streamingWorkerMainClass: string;
  /**
   * The UNIX group ID on the worker VM to use for tasks launched by taskrunner;
   * e.g. &quot;wheel&quot;.
   */
  taskGroup: string;
  /**
   * The UNIX user ID on the worker VM to use for tasks launched by taskrunner;
   * e.g. &quot;root&quot;.
   */
  taskUser: string;
  /**
   * The prefix of the resources the taskrunner should use for temporary
   * storage.  The supported resource type is:  Google Cloud Storage:
   * storage.googleapis.com/{bucket}/{object}
   * bucket.storage.googleapis.com/{object}
   */
  tempStoragePrefix: string;
  /**
   * The ID string of the VM.
   */
  vmId: string;
  /**
   * The file to store the workflow in.
   */
  workflowFileName: string;
}
/**
 * Metadata describing a template.
 */
export interface Schema$TemplateMetadata {
  /**
   * Optional. A description of the template.
   */
  description: string;
  /**
   * Required. The name of the template.
   */
  name: string;
  /**
   * The parameters for the template.
   */
  parameters: Schema$ParameterMetadata[];
}
/**
 * Global topology of the streaming Dataflow job, including all computations and
 * their sharded locations.
 */
export interface Schema$TopologyConfig {
  /**
   * The computations associated with a streaming Dataflow job.
   */
  computations: Schema$ComputationTopology[];
  /**
   * The disks assigned to a streaming Dataflow job.
   */
  dataDiskAssignments: Schema$DataDiskAssignment[];
  /**
   * The size (in bits) of keys that will be assigned to source messages.
   */
  forwardingKeyBits: number;
  /**
   * Version number for persistent state.
   */
  persistentStateVersion: number;
  /**
   * Maps user stage names to stable computation names.
   */
  userStageToComputationNameMap: any;
}
/**
 * Description of the type, names/ids, and input/outputs for a transform.
 */
export interface Schema$TransformSummary {
  /**
   * Transform-specific display data.
   */
  displayData: Schema$DisplayData[];
  /**
   * SDK generated id of this transform instance.
   */
  id: string;
  /**
   * User names for all collection inputs to this transform.
   */
  inputCollectionName: string[];
  /**
   * Type of transform.
   */
  kind: string;
  /**
   * User provided name for this transform instance.
   */
  name: string;
  /**
   * User  names for all collection outputs to this transform.
   */
  outputCollectionName: string[];
}
/**
 * WorkerHealthReport contains information about the health of a worker.  The VM
 * should be identified by the labels attached to the WorkerMessage that this
 * health ping belongs to.
 */
export interface Schema$WorkerHealthReport {
  /**
   * The pods running on the worker. See:
   * http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod
   * This field is used by the worker to send the status of the indvidual
   * containers running on each worker.
   */
  pods: any[];
  /**
   * The interval at which the worker is sending health reports. The default
   * value of 0 should be interpreted as the field is not being explicitly set
   * by the worker.
   */
  reportInterval: string;
  /**
   * Whether the VM is healthy.
   */
  vmIsHealthy: boolean;
  /**
   * The time the VM was booted.
   */
  vmStartupTime: string;
}
/**
 * WorkerHealthReportResponse contains information returned to the worker in
 * response to a health ping.
 */
export interface Schema$WorkerHealthReportResponse {
  /**
   * A positive value indicates the worker should change its reporting interval
   * to the specified value.  The default value of zero means no change in
   * report rate is requested by the server.
   */
  reportInterval: string;
}
/**
 * A report of an event in a worker&#39;s lifecycle. The proto contains one
 * event, because the worker is expected to asynchronously send each message
 * immediately after the event. Due to this asynchrony, messages may arrive out
 * of order (or missing), and it is up to the consumer to interpret. The
 * timestamp of the event is in the enclosing WorkerMessage proto.
 */
export interface Schema$WorkerLifecycleEvent {
  /**
   * The start time of this container. All events will report this so that
   * events can be grouped together across container/VM restarts.
   */
  containerStartTime: string;
  /**
   * The event being reported.
   */
  event: string;
  /**
   * Other stats that can accompany an event. E.g. {
   * &quot;downloaded_bytes&quot; : &quot;123456&quot; }
   */
  metadata: any;
}
/**
 * WorkerMessage provides information to the backend about a worker.
 */
export interface Schema$WorkerMessage {
  /**
   * Labels are used to group WorkerMessages. For example, a worker_message
   * about a particular container might have the labels: { &quot;JOB_ID&quot;:
   * &quot;2015-04-22&quot;,   &quot;WORKER_ID&quot;:
   * &quot;wordcount-vm-2015…&quot;   &quot;CONTAINER_TYPE&quot;:
   * &quot;worker&quot;,   &quot;CONTAINER_ID&quot;: &quot;ac1234def&quot;}
   * Label tags typically correspond to Label enum values. However, for ease of
   * development other strings can be used as tags. LABEL_UNSPECIFIED should not
   * be used here.
   */
  labels: any;
  /**
   * The timestamp of the worker_message.
   */
  time: string;
  /**
   * The health of a worker.
   */
  workerHealthReport: Schema$WorkerHealthReport;
  /**
   * Record of worker lifecycle events.
   */
  workerLifecycleEvent: Schema$WorkerLifecycleEvent;
  /**
   * A worker message code.
   */
  workerMessageCode: Schema$WorkerMessageCode;
  /**
   * Resource metrics reported by workers.
   */
  workerMetrics: Schema$ResourceUtilizationReport;
  /**
   * Shutdown notice by workers.
   */
  workerShutdownNotice: Schema$WorkerShutdownNotice;
}
/**
 * A message code is used to report status and error messages to the service.
 * The message codes are intended to be machine readable. The service will take
 * care of translating these into user understandable messages if necessary.
 * Example use cases:   1. Worker processes reporting successful startup.   2.
 * Worker processes reporting specific errors (e.g. package staging failure).
 */
export interface Schema$WorkerMessageCode {
  /**
   * The code is a string intended for consumption by a machine that identifies
   * the type of message being sent. Examples:  1. &quot;HARNESS_STARTED&quot;
   * might be used to indicate the worker harness has      started.  2.
   * &quot;GCS_DOWNLOAD_ERROR&quot; might be used to indicate an error
   * downloading     a GCS file as part of the boot process of one of the worker
   * containers.  This is a string and not an enum to make it easy to add new
   * codes without waiting for an API change.
   */
  code: string;
  /**
   * Parameters contains specific information about the code.  This is a struct
   * to allow parameters of different types.  Examples:  1. For a
   * &quot;HARNESS_STARTED&quot; message parameters might provide the name of
   * the worker and additional data like timing information.  2. For a
   * &quot;GCS_DOWNLOAD_ERROR&quot; parameters might contain fields listing the
   * GCS objects being downloaded and fields containing errors.  In general
   * complex data structures should be avoided. If a worker needs to send a
   * specific and complicated data structure then please consider defining a new
   * proto and adding it to the data oneof in WorkerMessageResponse.
   * Conventions:  Parameters should only be used for information that isn&#39;t
   * typically passed  as a label.  hostname and other worker identifiers should
   * almost always be passed  as labels since they will be included on most
   * messages.
   */
  parameters: any;
}
/**
 * A worker_message response allows the server to pass information to the
 * sender.
 */
export interface Schema$WorkerMessageResponse {
  /**
   * The service&#39;s response to a worker&#39;s health report.
   */
  workerHealthReportResponse: Schema$WorkerHealthReportResponse;
  /**
   * Service&#39;s response to reporting worker metrics (currently empty).
   */
  workerMetricsResponse: Schema$ResourceUtilizationReportResponse;
  /**
   * Service&#39;s response to shutdown notice (currently empty).
   */
  workerShutdownNoticeResponse: Schema$WorkerShutdownNoticeResponse;
}
/**
 * Describes one particular pool of Cloud Dataflow workers to be instantiated by
 * the Cloud Dataflow service in order to perform the computations required by a
 * job.  Note that a workflow job may use multiple pools, in order to match the
 * various computational requirements of the various stages of the job.
 */
export interface Schema$WorkerPool {
  /**
   * Settings for autoscaling of this WorkerPool.
   */
  autoscalingSettings: Schema$AutoscalingSettings;
  /**
   * Data disks that are used by a VM in this workflow.
   */
  dataDisks: Schema$Disk[];
  /**
   * The default package set to install.  This allows the service to select a
   * default set of packages which are useful to worker harnesses written in a
   * particular language.
   */
  defaultPackageSet: string;
  /**
   * Size of root disk for VMs, in GB.  If zero or unspecified, the service will
   * attempt to choose a reasonable default.
   */
  diskSizeGb: number;
  /**
   * Fully qualified source image for disks.
   */
  diskSourceImage: string;
  /**
   * Type of root disk for VMs.  If empty or unspecified, the service will
   * attempt to choose a reasonable default.
   */
  diskType: string;
  /**
   * Configuration for VM IPs.
   */
  ipConfiguration: string;
  /**
   * The kind of the worker pool; currently only `harness` and `shuffle` are
   * supported.
   */
  kind: string;
  /**
   * Machine type (e.g. &quot;n1-standard-1&quot;).  If empty or unspecified,
   * the service will attempt to choose a reasonable default.
   */
  machineType: string;
  /**
   * Metadata to set on the Google Compute Engine VMs.
   */
  metadata: any;
  /**
   * Network to which VMs will be assigned.  If empty or unspecified, the
   * service will use the network &quot;default&quot;.
   */
  network: string;
  /**
   * The number of threads per worker harness. If empty or unspecified, the
   * service will choose a number of threads (according to the number of cores
   * on the selected machine type for batch, or 1 by convention for streaming).
   */
  numThreadsPerWorker: number;
  /**
   * Number of Google Compute Engine workers in this pool needed to execute the
   * job.  If zero or unspecified, the service will attempt to choose a
   * reasonable default.
   */
  numWorkers: number;
  /**
   * The action to take on host maintenance, as defined by the Google Compute
   * Engine API.
   */
  onHostMaintenance: string;
  /**
   * Packages to be installed on workers.
   */
  packages: Schema$Package[];
  /**
   * Extra arguments for this worker pool.
   */
  poolArgs: any;
  /**
   * Subnetwork to which VMs will be assigned, if desired.  Expected to be of
   * the form &quot;regions/REGION/subnetworks/SUBNETWORK&quot;.
   */
  subnetwork: string;
  /**
   * Settings passed through to Google Compute Engine workers when using the
   * standard Dataflow task runner.  Users should ignore this field.
   */
  taskrunnerSettings: Schema$TaskRunnerSettings;
  /**
   * Sets the policy for determining when to turndown worker pool. Allowed
   * values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`.
   * `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether
   * the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the
   * job succeeds. `TEARDOWN_NEVER` means the workers are never torn down.  If
   * the workers are not torn down by the service, they will continue to run and
   * use Google Compute Engine VM resources in the user&#39;s project until they
   * are explicitly terminated by the user. Because of this, Google recommends
   * using the `TEARDOWN_ALWAYS` policy except for small, manually supervised
   * test jobs.  If unknown or unspecified, the service will attempt to choose a
   * reasonable default.
   */
  teardownPolicy: string;
  /**
   * Required. Docker container image that executes the Cloud Dataflow worker
   * harness, residing in Google Container Registry.
   */
  workerHarnessContainerImage: string;
  /**
   * Zone to run the worker pools in.  If empty or unspecified, the service will
   * attempt to choose a reasonable default.
   */
  zone: string;
}
/**
 * Provides data to pass through to the worker harness.
 */
export interface Schema$WorkerSettings {
  /**
   * The base URL for accessing Google Cloud APIs.  When workers access Google
   * Cloud APIs, they logically do so via relative URLs.  If this field is
   * specified, it supplies the base URL to use for resolving these relative
   * URLs.  The normative algorithm used is defined by RFC 1808, &quot;Relative
   * Uniform Resource Locators&quot;.  If not specified, the default value is
   * &quot;http://www.googleapis.com/&quot;
   */
  baseUrl: string;
  /**
   * Whether to send work progress updates to the service.
   */
  reportingEnabled: boolean;
  /**
   * The Cloud Dataflow service path relative to the root URL, for example,
   * &quot;dataflow/v1b3/projects&quot;.
   */
  servicePath: string;
  /**
   * The Shuffle service path relative to the root URL, for example,
   * &quot;shuffle/v1beta1&quot;.
   */
  shuffleServicePath: string;
  /**
   * The prefix of the resources the system should use for temporary storage.
   * The supported resource type is:  Google Cloud Storage:
   * storage.googleapis.com/{bucket}/{object}
   * bucket.storage.googleapis.com/{object}
   */
  tempStoragePrefix: string;
  /**
   * The ID of the worker running this pipeline.
   */
  workerId: string;
}
/**
 * Shutdown notification from workers. This is to be sent by the shutdown script
 * of the worker VM so that the backend knows that the VM is being shut down.
 */
export interface Schema$WorkerShutdownNotice {
  /**
   * The reason for the worker shutdown. Current possible values are:
   * &quot;UNKNOWN&quot;: shutdown reason is unknown.   &quot;PREEMPTION&quot;:
   * shutdown reason is preemption. Other possible reasons may be added in the
   * future.
   */
  reason: string;
}
/**
 * Service-side response to WorkerMessage issuing shutdown notice.
 */
export interface Schema$WorkerShutdownNoticeResponse {}
/**
 * WorkItem represents basic information about a WorkItem to be executed in the
 * cloud.
 */
export interface Schema$WorkItem {
  /**
   * Work item-specific configuration as an opaque blob.
   */
  configuration: string;
  /**
   * Identifies this WorkItem.
   */
  id: string;
  /**
   * The initial index to use when reporting the status of the WorkItem.
   */
  initialReportIndex: string;
  /**
   * Identifies the workflow job this WorkItem belongs to.
   */
  jobId: string;
  /**
   * Time when the lease on this Work will expire.
   */
  leaseExpireTime: string;
  /**
   * Additional information for MapTask WorkItems.
   */
  mapTask: Schema$MapTask;
  /**
   * Any required packages that need to be fetched in order to execute this
   * WorkItem.
   */
  packages: Schema$Package[];
  /**
   * Identifies the cloud project this WorkItem belongs to.
   */
  projectId: string;
  /**
   * Recommended reporting interval.
   */
  reportStatusInterval: string;
  /**
   * Additional information for SeqMapTask WorkItems.
   */
  seqMapTask: Schema$SeqMapTask;
  /**
   * Additional information for ShellTask WorkItems.
   */
  shellTask: Schema$ShellTask;
  /**
   * Additional information for source operation WorkItems.
   */
  sourceOperationTask: Schema$SourceOperationRequest;
  /**
   * Additional information for StreamingComputationTask WorkItems.
   */
  streamingComputationTask: Schema$StreamingComputationTask;
  /**
   * Additional information for StreamingConfigTask WorkItems.
   */
  streamingConfigTask: Schema$StreamingConfigTask;
  /**
   * Additional information for StreamingSetupTask WorkItems.
   */
  streamingSetupTask: Schema$StreamingSetupTask;
}
/**
 * The Dataflow service&#39;s idea of the current state of a WorkItem being
 * processed by a worker.
 */
export interface Schema$WorkItemServiceState {
  /**
   * Other data returned by the service, specific to the particular worker
   * harness.
   */
  harnessData: any;
  /**
   * Time at which the current lease will expire.
   */
  leaseExpireTime: string;
  /**
   * The short ids that workers should use in subsequent metric updates. Workers
   * should strive to use short ids whenever possible, but it is ok to request
   * the short_id again if a worker lost track of it (e.g. if the worker is
   * recovering from a crash). NOTE: it is possible that the response may have
   * short ids for a subset of the metrics.
   */
  metricShortId: Schema$MetricShortId[];
  /**
   * The index value to use for the next report sent by the worker. Note: If the
   * report call fails for whatever reason, the worker should reuse this index
   * for subsequent report attempts.
   */
  nextReportIndex: string;
  /**
   * New recommended reporting interval.
   */
  reportStatusInterval: string;
  /**
   * The progress point in the WorkItem where the Dataflow service suggests that
   * the worker truncate the task.
   */
  splitRequest: Schema$ApproximateSplitRequest;
  /**
   * DEPRECATED in favor of split_request.
   */
  suggestedStopPoint: Schema$ApproximateProgress;
  /**
   * Obsolete, always empty.
   */
  suggestedStopPosition: Schema$Position;
}
/**
 * Conveys a worker&#39;s progress through the work described by a WorkItem.
 */
export interface Schema$WorkItemStatus {
  /**
   * True if the WorkItem was completed (successfully or unsuccessfully).
   */
  completed: boolean;
  /**
   * Worker output counters for this WorkItem.
   */
  counterUpdates: Schema$CounterUpdate[];
  /**
   * See documentation of stop_position.
   */
  dynamicSourceSplit: Schema$DynamicSourceSplit;
  /**
   * Specifies errors which occurred during processing.  If errors are provided,
   * and completed = true, then the WorkItem is considered to have failed.
   */
  errors: Schema$Status[];
  /**
   * DEPRECATED in favor of counter_updates.
   */
  metricUpdates: Schema$MetricUpdate[];
  /**
   * DEPRECATED in favor of reported_progress.
   */
  progress: Schema$ApproximateProgress;
  /**
   * The worker&#39;s progress through this WorkItem.
   */
  reportedProgress: Schema$ApproximateReportedProgress;
  /**
   * The report index.  When a WorkItem is leased, the lease will contain an
   * initial report index.  When a WorkItem&#39;s status is reported to the
   * system, the report should be sent with that report index, and the response
   * will contain the index the worker should use for the next report.  Reports
   * received with unexpected index values will be rejected by the service.  In
   * order to preserve idempotency, the worker should not alter the contents of
   * a report, even if the worker must submit the same report multiple times
   * before getting back a response.  The worker should not submit a subsequent
   * report until the response for the previous report had been received from
   * the service.
   */
  reportIndex: string;
  /**
   * Amount of time the worker requests for its lease.
   */
  requestedLeaseDuration: string;
  /**
   * DEPRECATED in favor of dynamic_source_split.
   */
  sourceFork: Schema$SourceFork;
  /**
   * If the work item represented a SourceOperationRequest, and the work is
   * completed, contains the result of the operation.
   */
  sourceOperationResponse: Schema$SourceOperationResponse;
  /**
   * A worker may split an active map task in two parts, &quot;primary&quot; and
   * &quot;residual&quot;, continuing to process the primary part and returning
   * the residual part into the pool of available work. This event is called a
   * &quot;dynamic split&quot; and is critical to the dynamic work rebalancing
   * feature. The two obtained sub-tasks are called &quot;parts&quot; of the
   * split. The parts, if concatenated, must represent the same input as would
   * be read by the current task if the split did not happen. The exact way in
   * which the original task is decomposed into the two parts is specified
   * either as a position demarcating them (stop_position), or explicitly as two
   * DerivedSources, if this task consumes a user-defined source type
   * (dynamic_source_split).  The &quot;current&quot; task is adjusted as a
   * result of the split: after a task with range [A, B) sends a stop_position
   * update at C, its range is considered to be [A, C), e.g.: * Progress should
   * be interpreted relative to the new range, e.g.   &quot;75% completed&quot;
   * means &quot;75% of [A, C) completed&quot; * The worker should interpret
   * proposed_stop_position relative to the   new range, e.g. &quot;split at
   * 68%&quot; should be interpreted as   &quot;split at 68% of [A, C)&quot;. *
   * If the worker chooses to split again using stop_position, only
   * stop_positions in [A, C) will be accepted. * Etc. dynamic_source_split has
   * similar semantics: e.g., if a task with source S splits using
   * dynamic_source_split into {P, R} (where P and R must be together equivalent
   * to S), then subsequent progress and proposed_stop_position should be
   * interpreted relative to P, and in a potential subsequent
   * dynamic_source_split into {P&#39;, R&#39;}, P&#39; and R&#39; must be
   * together equivalent to P, etc.
   */
  stopPosition: Schema$Position;
  /**
   * Total time the worker spent being throttled by external systems.
   */
  totalThrottlerWaitTimeSeconds: number;
  /**
   * Identifies the WorkItem.
   */
  workItemId: string;
}
/**
 * An instruction that writes records. Takes one input, produces no outputs.
 */
export interface Schema$WriteInstruction {
  /**
   * The input.
   */
  input: Schema$InstructionInput;
  /**
   * The sink to write to.
   */
  sink: Schema$Sink;
}

export class Resource$Projects {
  root: Dataflow;
  jobs: Resource$Projects$Jobs;
  locations: Resource$Projects$Locations;
  templates: Resource$Projects$Templates;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
    this.jobs = new Resource$Projects$Jobs(root);
    this.locations = new Resource$Projects$Locations(root);
    this.templates = new Resource$Projects$Templates(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.workerMessages
   * @desc Send a worker_message to the service.
   * @alias dataflow.projects.workerMessages
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.projectId The project to send the WorkerMessages to.
   * @param {().SendWorkerMessagesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  workerMessages(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SendWorkerMessagesResponse>;
  workerMessages(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SendWorkerMessagesResponse>,
      callback?: BodyResponseCallback<Schema$SendWorkerMessagesResponse>): void;
  workerMessages(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SendWorkerMessagesResponse>,
      callback?: BodyResponseCallback<Schema$SendWorkerMessagesResponse>):
      void|AxiosPromise<Schema$SendWorkerMessagesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/WorkerMessages')
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
      createAPIRequest<Schema$SendWorkerMessagesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SendWorkerMessagesResponse>(parameters);
    }
  }
}
export class Resource$Projects$Jobs {
  root: Dataflow;
  debug: Resource$Projects$Jobs$Debug;
  messages: Resource$Projects$Jobs$Messages;
  workItems: Resource$Projects$Jobs$Workitems;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
    this.debug = new Resource$Projects$Jobs$Debug(root);
    this.messages = new Resource$Projects$Jobs$Messages(root);
    this.workItems = new Resource$Projects$Jobs$Workitems(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.jobs.aggregated
   * @desc List the jobs of a project across all regions.
   * @alias dataflow.projects.jobs.aggregated
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter The kind of filter to use.
   * @param {string=} params.location The location that contains this job.
   * @param {integer=} params.pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
   * @param {string=} params.pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
   * @param {string} params.projectId The project which owns the jobs.
   * @param {string=} params.view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  aggregated(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListJobsResponse>;
  aggregated(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>): void;
  aggregated(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>):
      void|AxiosPromise<Schema$ListJobsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/jobs:aggregated')
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
      createAPIRequest<Schema$ListJobsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListJobsResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.jobs.create
   * @desc Creates a Cloud Dataflow job.
   * @alias dataflow.projects.jobs.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.location The location that contains this job.
   * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
   * @param {string=} params.replaceJobId Deprecated. This field is now in the Job message.
   * @param {string=} params.view The level of information requested in response.
   * @param {().Job} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/jobs')
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
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataflow.projects.jobs.get
   * @desc Gets the state of the specified Cloud Dataflow job.
   * @alias dataflow.projects.jobs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job ID.
   * @param {string=} params.location The location that contains this job.
   * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
   * @param {string=} params.view The level of information requested in response.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'jobId'],
      pathParams: ['jobId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataflow.projects.jobs.getMetrics
   * @desc Request the job status.
   * @alias dataflow.projects.jobs.getMetrics
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job to get messages for.
   * @param {string=} params.location The location which contains the job specified by job_id.
   * @param {string} params.projectId A project id.
   * @param {string=} params.startTime Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getMetrics(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$JobMetrics>;
  getMetrics(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$JobMetrics>,
      callback?: BodyResponseCallback<Schema$JobMetrics>): void;
  getMetrics(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$JobMetrics>,
      callback?: BodyResponseCallback<Schema$JobMetrics>):
      void|AxiosPromise<Schema$JobMetrics> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}/metrics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'jobId'],
      pathParams: ['jobId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$JobMetrics>(parameters, callback);
    } else {
      return createAPIRequest<Schema$JobMetrics>(parameters);
    }
  }


  /**
   * dataflow.projects.jobs.list
   * @desc List the jobs of a project in a given region.
   * @alias dataflow.projects.jobs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter The kind of filter to use.
   * @param {string=} params.location The location that contains this job.
   * @param {integer=} params.pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
   * @param {string=} params.pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
   * @param {string} params.projectId The project which owns the jobs.
   * @param {string=} params.view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListJobsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>):
      void|AxiosPromise<Schema$ListJobsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/jobs')
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
      createAPIRequest<Schema$ListJobsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListJobsResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.jobs.update
   * @desc Updates the state of an existing Cloud Dataflow job.
   * @alias dataflow.projects.jobs.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job ID.
   * @param {string=} params.location The location that contains this job.
   * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
   * @param {().Job} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['projectId', 'jobId'],
      pathParams: ['jobId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }
}
export class Resource$Projects$Jobs$Debug {
  root: Dataflow;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.jobs.debug.getConfig
   * @desc Get encoded debug configuration for component. Not cacheable.
   * @alias dataflow.projects.jobs.debug.getConfig
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job id.
   * @param {string} params.projectId The project id.
   * @param {().GetDebugConfigRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getConfig(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GetDebugConfigResponse>;
  getConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetDebugConfigResponse>,
      callback?: BodyResponseCallback<Schema$GetDebugConfigResponse>): void;
  getConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetDebugConfigResponse>,
      callback?: BodyResponseCallback<Schema$GetDebugConfigResponse>):
      void|AxiosPromise<Schema$GetDebugConfigResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'jobId'],
      pathParams: ['jobId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetDebugConfigResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GetDebugConfigResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.jobs.debug.sendCapture
   * @desc Send encoded debug capture data for component.
   * @alias dataflow.projects.jobs.debug.sendCapture
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job id.
   * @param {string} params.projectId The project id.
   * @param {().SendDebugCaptureRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  sendCapture(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SendDebugCaptureResponse>;
  sendCapture(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SendDebugCaptureResponse>,
      callback?: BodyResponseCallback<Schema$SendDebugCaptureResponse>): void;
  sendCapture(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SendDebugCaptureResponse>,
      callback?: BodyResponseCallback<Schema$SendDebugCaptureResponse>):
      void|AxiosPromise<Schema$SendDebugCaptureResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'jobId'],
      pathParams: ['jobId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SendDebugCaptureResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SendDebugCaptureResponse>(parameters);
    }
  }
}

export class Resource$Projects$Jobs$Messages {
  root: Dataflow;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.jobs.messages.list
   * @desc Request the job status.
   * @alias dataflow.projects.jobs.messages.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
   * @param {string} params.jobId The job to get messages about.
   * @param {string=} params.location The location which contains the job specified by job_id.
   * @param {string=} params.minimumImportance Filter to only get messages with importance >= level
   * @param {integer=} params.pageSize If specified, determines the maximum number of messages to return.  If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
   * @param {string=} params.pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
   * @param {string} params.projectId A project id.
   * @param {string=} params.startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListJobMessagesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListJobMessagesResponse>,
      callback?: BodyResponseCallback<Schema$ListJobMessagesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListJobMessagesResponse>,
      callback?: BodyResponseCallback<Schema$ListJobMessagesResponse>):
      void|AxiosPromise<Schema$ListJobMessagesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}/messages')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'jobId'],
      pathParams: ['jobId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListJobMessagesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListJobMessagesResponse>(parameters);
    }
  }
}

export class Resource$Projects$Jobs$Workitems {
  root: Dataflow;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.jobs.workItems.lease
   * @desc Leases a dataflow WorkItem to run.
   * @alias dataflow.projects.jobs.workItems.lease
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId Identifies the workflow job this worker belongs to.
   * @param {string} params.projectId Identifies the project this worker belongs to.
   * @param {().LeaseWorkItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  lease(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LeaseWorkItemResponse>;
  lease(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LeaseWorkItemResponse>,
      callback?: BodyResponseCallback<Schema$LeaseWorkItemResponse>): void;
  lease(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LeaseWorkItemResponse>,
      callback?: BodyResponseCallback<Schema$LeaseWorkItemResponse>):
      void|AxiosPromise<Schema$LeaseWorkItemResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'jobId'],
      pathParams: ['jobId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LeaseWorkItemResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LeaseWorkItemResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.jobs.workItems.reportStatus
   * @desc Reports the status of dataflow WorkItems leased by a worker.
   * @alias dataflow.projects.jobs.workItems.reportStatus
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job which the WorkItem is part of.
   * @param {string} params.projectId The project which owns the WorkItem's job.
   * @param {().ReportWorkItemStatusRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reportStatus(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ReportWorkItemStatusResponse>;
  reportStatus(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ReportWorkItemStatusResponse>,
      callback?: BodyResponseCallback<Schema$ReportWorkItemStatusResponse>):
      void;
  reportStatus(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ReportWorkItemStatusResponse>,
      callback?: BodyResponseCallback<Schema$ReportWorkItemStatusResponse>):
      void|AxiosPromise<Schema$ReportWorkItemStatusResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'jobId'],
      pathParams: ['jobId', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ReportWorkItemStatusResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ReportWorkItemStatusResponse>(parameters);
    }
  }
}


export class Resource$Projects$Locations {
  root: Dataflow;
  jobs: Resource$Projects$Locations$Jobs;
  templates: Resource$Projects$Locations$Templates;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
    this.jobs = new Resource$Projects$Locations$Jobs(root);
    this.templates = new Resource$Projects$Locations$Templates(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.locations.workerMessages
   * @desc Send a worker_message to the service.
   * @alias dataflow.projects.locations.workerMessages
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.location The location which contains the job
   * @param {string} params.projectId The project to send the WorkerMessages to.
   * @param {().SendWorkerMessagesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  workerMessages(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SendWorkerMessagesResponse>;
  workerMessages(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SendWorkerMessagesResponse>,
      callback?: BodyResponseCallback<Schema$SendWorkerMessagesResponse>): void;
  workerMessages(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SendWorkerMessagesResponse>,
      callback?: BodyResponseCallback<Schema$SendWorkerMessagesResponse>):
      void|AxiosPromise<Schema$SendWorkerMessagesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/WorkerMessages')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'location'],
      pathParams: ['location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SendWorkerMessagesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SendWorkerMessagesResponse>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Jobs {
  root: Dataflow;
  debug: Resource$Projects$Locations$Jobs$Debug;
  messages: Resource$Projects$Locations$Jobs$Messages;
  workItems: Resource$Projects$Locations$Jobs$Workitems;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
    this.debug = new Resource$Projects$Locations$Jobs$Debug(root);
    this.messages = new Resource$Projects$Locations$Jobs$Messages(root);
    this.workItems = new Resource$Projects$Locations$Jobs$Workitems(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.locations.jobs.create
   * @desc Creates a Cloud Dataflow job.
   * @alias dataflow.projects.locations.jobs.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.location The location that contains this job.
   * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
   * @param {string=} params.replaceJobId Deprecated. This field is now in the Job message.
   * @param {string=} params.view The level of information requested in response.
   * @param {().Job} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1b3/projects/{projectId}/locations/{location}/jobs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'location'],
      pathParams: ['location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataflow.projects.locations.jobs.get
   * @desc Gets the state of the specified Cloud Dataflow job.
   * @alias dataflow.projects.locations.jobs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job ID.
   * @param {string} params.location The location that contains this job.
   * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
   * @param {string=} params.view The level of information requested in response.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'location', 'jobId'],
      pathParams: ['jobId', 'location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataflow.projects.locations.jobs.getMetrics
   * @desc Request the job status.
   * @alias dataflow.projects.locations.jobs.getMetrics
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job to get messages for.
   * @param {string} params.location The location which contains the job specified by job_id.
   * @param {string} params.projectId A project id.
   * @param {string=} params.startTime Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getMetrics(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$JobMetrics>;
  getMetrics(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$JobMetrics>,
      callback?: BodyResponseCallback<Schema$JobMetrics>): void;
  getMetrics(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$JobMetrics>,
      callback?: BodyResponseCallback<Schema$JobMetrics>):
      void|AxiosPromise<Schema$JobMetrics> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'location', 'jobId'],
      pathParams: ['jobId', 'location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$JobMetrics>(parameters, callback);
    } else {
      return createAPIRequest<Schema$JobMetrics>(parameters);
    }
  }


  /**
   * dataflow.projects.locations.jobs.list
   * @desc List the jobs of a project in a given region.
   * @alias dataflow.projects.locations.jobs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter The kind of filter to use.
   * @param {string} params.location The location that contains this job.
   * @param {integer=} params.pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
   * @param {string=} params.pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
   * @param {string} params.projectId The project which owns the jobs.
   * @param {string=} params.view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListJobsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>):
      void|AxiosPromise<Schema$ListJobsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1b3/projects/{projectId}/locations/{location}/jobs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'location'],
      pathParams: ['location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListJobsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListJobsResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.locations.jobs.update
   * @desc Updates the state of an existing Cloud Dataflow job.
   * @alias dataflow.projects.locations.jobs.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job ID.
   * @param {string} params.location The location that contains this job.
   * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
   * @param {().Job} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['projectId', 'location', 'jobId'],
      pathParams: ['jobId', 'location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Jobs$Debug {
  root: Dataflow;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.locations.jobs.debug.getConfig
   * @desc Get encoded debug configuration for component. Not cacheable.
   * @alias dataflow.projects.locations.jobs.debug.getConfig
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job id.
   * @param {string} params.location The location which contains the job specified by job_id.
   * @param {string} params.projectId The project id.
   * @param {().GetDebugConfigRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getConfig(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GetDebugConfigResponse>;
  getConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetDebugConfigResponse>,
      callback?: BodyResponseCallback<Schema$GetDebugConfigResponse>): void;
  getConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetDebugConfigResponse>,
      callback?: BodyResponseCallback<Schema$GetDebugConfigResponse>):
      void|AxiosPromise<Schema$GetDebugConfigResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'location', 'jobId'],
      pathParams: ['jobId', 'location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetDebugConfigResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GetDebugConfigResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.locations.jobs.debug.sendCapture
   * @desc Send encoded debug capture data for component.
   * @alias dataflow.projects.locations.jobs.debug.sendCapture
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job id.
   * @param {string} params.location The location which contains the job specified by job_id.
   * @param {string} params.projectId The project id.
   * @param {().SendDebugCaptureRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  sendCapture(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SendDebugCaptureResponse>;
  sendCapture(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SendDebugCaptureResponse>,
      callback?: BodyResponseCallback<Schema$SendDebugCaptureResponse>): void;
  sendCapture(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SendDebugCaptureResponse>,
      callback?: BodyResponseCallback<Schema$SendDebugCaptureResponse>):
      void|AxiosPromise<Schema$SendDebugCaptureResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'location', 'jobId'],
      pathParams: ['jobId', 'location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SendDebugCaptureResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SendDebugCaptureResponse>(parameters);
    }
  }
}

export class Resource$Projects$Locations$Jobs$Messages {
  root: Dataflow;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.locations.jobs.messages.list
   * @desc Request the job status.
   * @alias dataflow.projects.locations.jobs.messages.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
   * @param {string} params.jobId The job to get messages about.
   * @param {string} params.location The location which contains the job specified by job_id.
   * @param {string=} params.minimumImportance Filter to only get messages with importance >= level
   * @param {integer=} params.pageSize If specified, determines the maximum number of messages to return.  If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
   * @param {string=} params.pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
   * @param {string} params.projectId A project id.
   * @param {string=} params.startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListJobMessagesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListJobMessagesResponse>,
      callback?: BodyResponseCallback<Schema$ListJobMessagesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListJobMessagesResponse>,
      callback?: BodyResponseCallback<Schema$ListJobMessagesResponse>):
      void|AxiosPromise<Schema$ListJobMessagesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'location', 'jobId'],
      pathParams: ['jobId', 'location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListJobMessagesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListJobMessagesResponse>(parameters);
    }
  }
}

export class Resource$Projects$Locations$Jobs$Workitems {
  root: Dataflow;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.locations.jobs.workItems.lease
   * @desc Leases a dataflow WorkItem to run.
   * @alias dataflow.projects.locations.jobs.workItems.lease
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId Identifies the workflow job this worker belongs to.
   * @param {string} params.location The location which contains the WorkItem's job.
   * @param {string} params.projectId Identifies the project this worker belongs to.
   * @param {().LeaseWorkItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  lease(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LeaseWorkItemResponse>;
  lease(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LeaseWorkItemResponse>,
      callback?: BodyResponseCallback<Schema$LeaseWorkItemResponse>): void;
  lease(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LeaseWorkItemResponse>,
      callback?: BodyResponseCallback<Schema$LeaseWorkItemResponse>):
      void|AxiosPromise<Schema$LeaseWorkItemResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'location', 'jobId'],
      pathParams: ['jobId', 'location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LeaseWorkItemResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LeaseWorkItemResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.locations.jobs.workItems.reportStatus
   * @desc Reports the status of dataflow WorkItems leased by a worker.
   * @alias dataflow.projects.locations.jobs.workItems.reportStatus
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.jobId The job which the WorkItem is part of.
   * @param {string} params.location The location which contains the WorkItem's job.
   * @param {string} params.projectId The project which owns the WorkItem's job.
   * @param {().ReportWorkItemStatusRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  reportStatus(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ReportWorkItemStatusResponse>;
  reportStatus(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ReportWorkItemStatusResponse>,
      callback?: BodyResponseCallback<Schema$ReportWorkItemStatusResponse>):
      void;
  reportStatus(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ReportWorkItemStatusResponse>,
      callback?: BodyResponseCallback<Schema$ReportWorkItemStatusResponse>):
      void|AxiosPromise<Schema$ReportWorkItemStatusResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'location', 'jobId'],
      pathParams: ['jobId', 'location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ReportWorkItemStatusResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ReportWorkItemStatusResponse>(parameters);
    }
  }
}


export class Resource$Projects$Locations$Templates {
  root: Dataflow;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.locations.templates.create
   * @desc Creates a Cloud Dataflow job from a template.
   * @alias dataflow.projects.locations.templates.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.location The location to which to direct the request.
   * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
   * @param {().CreateJobFromTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/v1b3/projects/{projectId}/locations/{location}/templates')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'location'],
      pathParams: ['location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataflow.projects.locations.templates.get
   * @desc Get the template associated with a template.
   * @alias dataflow.projects.locations.templates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.
   * @param {string} params.location The location to which to direct the request.
   * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
   * @param {string=} params.view The view to retrieve. Defaults to METADATA_ONLY.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GetTemplateResponse>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GetTemplateResponse>,
      callback?: BodyResponseCallback<Schema$GetTemplateResponse>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GetTemplateResponse>,
      callback?: BodyResponseCallback<Schema$GetTemplateResponse>):
      void|AxiosPromise<Schema$GetTemplateResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/templates:get')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectId', 'location'],
      pathParams: ['location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetTemplateResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GetTemplateResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.locations.templates.launch
   * @desc Launch a template.
   * @alias dataflow.projects.locations.templates.launch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
   * @param {string} params.location The location to which to direct the request.
   * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
   * @param {boolean=} params.validateOnly If true, the request is validated but not actually executed. Defaults to false.
   * @param {().LaunchTemplateParameters} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  launch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LaunchTemplateResponse>;
  launch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LaunchTemplateResponse>,
      callback?: BodyResponseCallback<Schema$LaunchTemplateResponse>): void;
  launch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LaunchTemplateResponse>,
      callback?: BodyResponseCallback<Schema$LaunchTemplateResponse>):
      void|AxiosPromise<Schema$LaunchTemplateResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/v1b3/projects/{projectId}/locations/{location}/templates:launch')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectId', 'location'],
      pathParams: ['location', 'projectId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LaunchTemplateResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LaunchTemplateResponse>(parameters);
    }
  }
}


export class Resource$Projects$Templates {
  root: Dataflow;
  constructor(root: Dataflow) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * dataflow.projects.templates.create
   * @desc Creates a Cloud Dataflow job from a template.
   * @alias dataflow.projects.templates.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
   * @param {().CreateJobFromTemplateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Job>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>):
      void|AxiosPromise<Schema$Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/templates')
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
      createAPIRequest<Schema$Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Job>(parameters);
    }
  }


  /**
   * dataflow.projects.templates.get
   * @desc Get the template associated with a template.
   * @alias dataflow.projects.templates.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.
   * @param {string=} params.location The location to which to direct the request.
   * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
   * @param {string=} params.view The view to retrieve. Defaults to METADATA_ONLY.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GetTemplateResponse>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GetTemplateResponse>,
      callback?: BodyResponseCallback<Schema$GetTemplateResponse>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GetTemplateResponse>,
      callback?: BodyResponseCallback<Schema$GetTemplateResponse>):
      void|AxiosPromise<Schema$GetTemplateResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/templates:get')
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
      createAPIRequest<Schema$GetTemplateResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GetTemplateResponse>(parameters);
    }
  }


  /**
   * dataflow.projects.templates.launch
   * @desc Launch a template.
   * @alias dataflow.projects.templates.launch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
   * @param {string=} params.location The location to which to direct the request.
   * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
   * @param {boolean=} params.validateOnly If true, the request is validated but not actually executed. Defaults to false.
   * @param {().LaunchTemplateParameters} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  launch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LaunchTemplateResponse>;
  launch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LaunchTemplateResponse>,
      callback?: BodyResponseCallback<Schema$LaunchTemplateResponse>): void;
  launch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$LaunchTemplateResponse>,
      callback?: BodyResponseCallback<Schema$LaunchTemplateResponse>):
      void|AxiosPromise<Schema$LaunchTemplateResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1b3/projects/{projectId}/templates:launch')
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
      createAPIRequest<Schema$LaunchTemplateResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LaunchTemplateResponse>(parameters);
    }
  }
}
