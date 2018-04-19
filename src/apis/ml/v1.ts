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
 * Cloud Machine Learning Engine
 *
 * An API to enable creating and using machine learning models.
 *
 * @example
 * const google = require('googleapis');
 * const ml = google.ml('v1');
 *
 * @namespace ml
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Ml
 */
export class Ml {
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
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can&#39;t be represented as JSON, such as raw binary or
 * an HTML page.   This message can be used both in streaming and non-streaming
 * API methods in the request as well as the response.  It can be used as a
 * top-level request field, which is convenient if one wants to extract
 * parameters from either the URL or HTTP template into the request fields and
 * also want access to the raw HTTP body.  Example:      message
 * GetResourceRequest {       // A unique request id.       string request_id =
 * 1;        // The raw HTTP body is bound to this field. google.api.HttpBody
 * http_body = 2;     }      service ResourceService {       rpc
 * GetResource(GetResourceRequest) returns (google.api.HttpBody);       rpc
 * UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty);     }
 * Example with streaming methods:      service CaldavService {       rpc
 * GetCalendar(stream google.api.HttpBody)         returns (stream
 * google.api.HttpBody);       rpc UpdateCalendar(stream google.api.HttpBody)
 * returns (stream google.api.HttpBody);     }  Use of this type only changes
 * how the request and response bodies are handled, all other features will
 * continue to work unchanged.
 */
export interface Schema$GoogleApi__HttpBody {
  /**
   * The HTTP Content-Type string representing the content type of the body.
   */
  contentType: string;
  /**
   * HTTP body binary data.
   */
  data: string;
  /**
   * Application specific response metadata. Must be set in the first response
   * for streaming APIs.
   */
  extensions: any[];
}
/**
 * An observed value of a metric.
 */
export interface Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric {
  /**
   * The objective value at this training step.
   */
  objectiveValue: number;
  /**
   * The global training step for this metric.
   */
  trainingStep: string;
}
/**
 * Options for automatically scaling a model.
 */
export interface Schema$GoogleCloudMlV1__AutoScaling {
  /**
   * Optional. The minimum number of nodes to allocate for this model. These
   * nodes are always up, starting from the time the model is deployed, so the
   * cost of operating this model will be at least `rate` * `min_nodes` * number
   * of hours since last billing cycle, where `rate` is the cost per node-hour
   * as documented in
   * [pricing](https://cloud.google.com/ml-engine/pricing#prediction_pricing),
   * even if no predictions are performed. There is additional cost for each
   * prediction performed.  Unlike manual scaling, if the load gets too heavy
   * for the nodes that are up, the service will automatically add nodes to
   * handle the increased load as well as scale back as traffic drops, always
   * maintaining at least `min_nodes`. You will be charged for the time in which
   * additional nodes are used.  If not specified, `min_nodes` defaults to 0, in
   * which case, when traffic to a model stops (and after a cool-down period),
   * nodes will be shut down and no charges will be incurred until traffic to
   * the model resumes.
   */
  minNodes: number;
}
/**
 * Request message for the CancelJob method.
 */
export interface Schema$GoogleCloudMlV1__CancelJobRequest {}
export interface Schema$GoogleCloudMlV1__Capability {
  /**
   * Available accelerators for the capability.
   */
  availableAccelerators: string[];
  type: string;
}
export interface Schema$GoogleCloudMlV1__Config {
  /**
   * The service account Cloud ML uses to run on TPU node.
   */
  tpuServiceAccount: string;
}
/**
 * Returns service account information associated with a project.
 */
export interface Schema$GoogleCloudMlV1__GetConfigResponse {
  config: Schema$GoogleCloudMlV1__Config;
  /**
   * The service account Cloud ML uses to access resources in the project.
   */
  serviceAccount: string;
  /**
   * The project number for `service_account`.
   */
  serviceAccountProject: string;
}
/**
 * Represents the result of a single hyperparameter tuning trial from a training
 * job. The TrainingOutput object that is returned on successful completion of a
 * training job with hyperparameter tuning includes a list of
 * HyperparameterOutput objects, one for each successful trial.
 */
export interface Schema$GoogleCloudMlV1__HyperparameterOutput {
  /**
   * All recorded object metrics for this trial. This field is not currently
   * populated.
   */
  allMetrics:
      Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric[];
  /**
   * The final objective metric seen for this trial.
   */
  finalMetric: Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric;
  /**
   * The hyperparameters given to this trial.
   */
  hyperparameters: any;
  /**
   * True if the trial is stopped early.
   */
  isTrialStoppedEarly: boolean;
  /**
   * The trial id for these results.
   */
  trialId: string;
}
/**
 * Represents a set of hyperparameters to optimize.
 */
export interface Schema$GoogleCloudMlV1__HyperparameterSpec {
  /**
   * Optional. Indicates if the hyperparameter tuning job enables auto trial
   * early stopping.
   */
  enableTrialEarlyStopping: boolean;
  /**
   * Required. The type of goal to use for tuning. Available types are
   * `MAXIMIZE` and `MINIMIZE`.  Defaults to `MAXIMIZE`.
   */
  goal: string;
  /**
   * Optional. The Tensorflow summary tag name to use for optimizing trials. For
   * current versions of Tensorflow, this tag name should exactly match what is
   * shown in Tensorboard, including all scopes.  For versions of Tensorflow
   * prior to 0.12, this should be only the tag passed to tf.Summary. By
   * default, &quot;training/hptuning/metric&quot; will be used.
   */
  hyperparameterMetricTag: string;
  /**
   * Optional. The number of training trials to run concurrently. You can reduce
   * the time it takes to perform hyperparameter tuning by adding trials in
   * parallel. However, each trail only benefits from the information gained in
   * completed trials. That means that a trial does not get access to the
   * results of trials running at the same time, which could reduce the quality
   * of the overall optimization.  Each trial will use the same scale tier and
   * machine types.  Defaults to one.
   */
  maxParallelTrials: number;
  /**
   * Optional. How many training trials should be attempted to optimize the
   * specified hyperparameters.  Defaults to one.
   */
  maxTrials: number;
  /**
   * Required. The set of parameters to tune.
   */
  params: Schema$GoogleCloudMlV1__ParameterSpec[];
  /**
   * Optional. The prior hyperparameter tuning job id that users hope to
   * continue with. The job id will be used to find the corresponding vizier
   * study guid and resume the study.
   */
  resumePreviousJobId: string;
}
/**
 * Represents a training or prediction job.
 */
export interface Schema$GoogleCloudMlV1__Job {
  /**
   * Output only. When the job was created.
   */
  createTime: string;
  /**
   * Output only. When the job processing was completed.
   */
  endTime: string;
  /**
   * Output only. The details of a failure or a cancellation.
   */
  errorMessage: string;
  /**
   * Required. The user-specified id of the job.
   */
  jobId: string;
  /**
   * Input parameters to create a prediction job.
   */
  predictionInput: Schema$GoogleCloudMlV1__PredictionInput;
  /**
   * The current prediction job result.
   */
  predictionOutput: Schema$GoogleCloudMlV1__PredictionOutput;
  /**
   * Output only. When the job processing was started.
   */
  startTime: string;
  /**
   * Output only. The detailed state of a job.
   */
  state: string;
  /**
   * Input parameters to create a training job.
   */
  trainingInput: Schema$GoogleCloudMlV1__TrainingInput;
  /**
   * The current training job result.
   */
  trainingOutput: Schema$GoogleCloudMlV1__TrainingOutput;
}
/**
 * Response message for the ListJobs method.
 */
export interface Schema$GoogleCloudMlV1__ListJobsResponse {
  /**
   * The list of jobs.
   */
  jobs: Schema$GoogleCloudMlV1__Job[];
  /**
   * Optional. Pass this token as the `page_token` field of the request for a
   * subsequent call.
   */
  nextPageToken: string;
}
export interface Schema$GoogleCloudMlV1__ListLocationsResponse {
  /**
   * Locations where at least one type of CMLE capability is available.
   */
  locations: Schema$GoogleCloudMlV1__Location[];
  /**
   * Optional. Pass this token as the `page_token` field of the request for a
   * subsequent call.
   */
  nextPageToken: string;
}
/**
 * Response message for the ListModels method.
 */
export interface Schema$GoogleCloudMlV1__ListModelsResponse {
  /**
   * The list of models.
   */
  models: Schema$GoogleCloudMlV1__Model[];
  /**
   * Optional. Pass this token as the `page_token` field of the request for a
   * subsequent call.
   */
  nextPageToken: string;
}
/**
 * Response message for the ListVersions method.
 */
export interface Schema$GoogleCloudMlV1__ListVersionsResponse {
  /**
   * Optional. Pass this token as the `page_token` field of the request for a
   * subsequent call.
   */
  nextPageToken: string;
  /**
   * The list of versions.
   */
  versions: Schema$GoogleCloudMlV1__Version[];
}
export interface Schema$GoogleCloudMlV1__Location {
  /**
   * Capabilities available in the location.
   */
  capabilities: Schema$GoogleCloudMlV1__Capability[];
  name: string;
}
/**
 * Options for manually scaling a model.
 */
export interface Schema$GoogleCloudMlV1__ManualScaling {
  /**
   * The number of nodes to allocate for this model. These nodes are always up,
   * starting from the time the model is deployed, so the cost of operating this
   * model will be proportional to `nodes` * number of hours since last billing
   * cycle plus the cost for each prediction performed.
   */
  nodes: number;
}
/**
 * Represents a machine learning solution.  A model can have multiple versions,
 * each of which is a deployed, trained model ready to receive prediction
 * requests. The model itself is just a container.
 */
export interface Schema$GoogleCloudMlV1__Model {
  /**
   * Output only. The default version of the model. This version will be used to
   * handle prediction requests that do not specify a version.  You can change
   * the default version by calling
   * [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
   */
  defaultVersion: Schema$GoogleCloudMlV1__Version;
  /**
   * Optional. The description specified for the model when it was created.
   */
  description: string;
  /**
   * Required. The name specified for the model when it was created.  The model
   * name must be unique within the project it is created in.
   */
  name: string;
  /**
   * Optional. If true, enables StackDriver Logging for online prediction.
   * Default is false.
   */
  onlinePredictionLogging: boolean;
  /**
   * Optional. The list of regions where the model is going to be deployed.
   * Currently only one region per model is supported. Defaults to
   * &#39;us-central1&#39; if nothing is set. See the &lt;a
   * href=&quot;/ml-engine/docs/regions&quot;&gt;available regions&lt;/a&gt; for
   * ML Engine services. Note: *   No matter where a model is deployed, it can
   * always be accessed by     users from anywhere, both for online and batch
   * prediction. *   The region for a batch prediction job is set by the region
   * field when     submitting the batch prediction job and does not take its
   * value from     this field.
   */
  regions: string[];
}
/**
 * Represents the metadata of the long-running operation.
 */
export interface Schema$GoogleCloudMlV1__OperationMetadata {
  /**
   * The time the operation was submitted.
   */
  createTime: string;
  /**
   * The time operation processing completed.
   */
  endTime: string;
  /**
   * Indicates whether a request to cancel this operation has been made.
   */
  isCancellationRequested: boolean;
  /**
   * Contains the name of the model associated with the operation.
   */
  modelName: string;
  /**
   * The operation type.
   */
  operationType: string;
  /**
   * Contains the project number associated with the operation.
   */
  projectNumber: string;
  /**
   * The time operation processing started.
   */
  startTime: string;
  /**
   * Contains the version associated with the operation.
   */
  version: Schema$GoogleCloudMlV1__Version;
}
/**
 * Represents a single hyperparameter to optimize.
 */
export interface Schema$GoogleCloudMlV1__ParameterSpec {
  /**
   * Required if type is `CATEGORICAL`. The list of possible categories.
   */
  categoricalValues: string[];
  /**
   * Required if type is `DISCRETE`. A list of feasible points. The list should
   * be in strictly increasing order. For instance, this parameter might have
   * possible settings of 1.5, 2.5, and 4.0. This list should not contain more
   * than 1,000 values.
   */
  discreteValues: number[];
  /**
   * Required if type is `DOUBLE` or `INTEGER`. This field should be unset if
   * type is `CATEGORICAL`. This value should be integers if type is `INTEGER`.
   */
  maxValue: number;
  /**
   * Required if type is `DOUBLE` or `INTEGER`. This field should be unset if
   * type is `CATEGORICAL`. This value should be integers if type is INTEGER.
   */
  minValue: number;
  /**
   * Required. The parameter name must be unique amongst all ParameterConfigs in
   * a HyperparameterSpec message. E.g., &quot;learning_rate&quot;.
   */
  parameterName: string;
  /**
   * Optional. How the parameter should be scaled to the hypercube. Leave unset
   * for categorical parameters. Some kind of scaling is strongly recommended
   * for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`).
   */
  scaleType: string;
  /**
   * Required. The type of the parameter.
   */
  type: string;
}
/**
 * Represents input parameters for a prediction job.
 */
export interface Schema$GoogleCloudMlV1__PredictionInput {
  /**
   * Optional. Number of records per batch, defaults to 64. The service will
   * buffer batch_size number of records in memory before invoking one
   * Tensorflow prediction call internally. So take the record size and memory
   * available into consideration when setting this parameter.
   */
  batchSize: string;
  /**
   * Required. The format of the input data files.
   */
  dataFormat: string;
  /**
   * Required. The Google Cloud Storage location of the input data files. May
   * contain wildcards.
   */
  inputPaths: string[];
  /**
   * Optional. The maximum number of workers to be used for parallel processing.
   * Defaults to 10 if not specified.
   */
  maxWorkerCount: string;
  /**
   * Use this field if you want to use the default version for the specified
   * model. The string must use the following format:
   * `&quot;projects/&lt;var&gt;[YOUR_PROJECT]&lt;/var&gt;/models/&lt;var&gt;[YOUR_MODEL]&lt;/var&gt;&quot;`
   */
  modelName: string;
  /**
   * Required. The output Google Cloud Storage location.
   */
  outputPath: string;
  /**
   * Required. The Google Compute Engine region to run the prediction job in.
   * See the &lt;a href=&quot;/ml-engine/docs/regions&quot;&gt;available
   * regions&lt;/a&gt; for ML Engine services.
   */
  region: string;
  /**
   * Optional. The Google Cloud ML runtime version to use for this batch
   * prediction. If not set, Google Cloud ML will pick the runtime version used
   * during the CreateVersion request for this model version, or choose the
   * latest stable version when model version information is not available such
   * as when the model is specified by uri.
   */
  runtimeVersion: string;
  /**
   * Optional. The name of the signature defined in the SavedModel to use for
   * this job. Please refer to
   * [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for
   * information about how to use signatures.  Defaults to
   * [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants)
   * , which is &quot;serving_default&quot;.
   */
  signatureName: string;
  /**
   * Use this field if you want to specify a Google Cloud Storage path for the
   * model to use.
   */
  uri: string;
  /**
   * Use this field if you want to specify a version of the model to use. The
   * string is formatted the same way as `model_version`, with the addition of
   * the version information:
   * `&quot;projects/&lt;var&gt;[YOUR_PROJECT]&lt;/var&gt;/models/&lt;var&gt;YOUR_MODEL/versions/&lt;var&gt;[YOUR_VERSION]&lt;/var&gt;&quot;`
   */
  versionName: string;
}
/**
 * Represents results of a prediction job.
 */
export interface Schema$GoogleCloudMlV1__PredictionOutput {
  /**
   * The number of data instances which resulted in errors.
   */
  errorCount: string;
  /**
   * Node hours used by the batch prediction job.
   */
  nodeHours: number;
  /**
   * The output Google Cloud Storage location provided at the job creation time.
   */
  outputPath: string;
  /**
   * The number of generated predictions.
   */
  predictionCount: string;
}
/**
 * Request for predictions to be issued against a trained model.
 */
export interface Schema$GoogleCloudMlV1__PredictRequest {
  /**
   *  Required. The prediction request body.
   */
  httpBody: Schema$GoogleApi__HttpBody;
}
/**
 * Request message for the SetDefaultVersion request.
 */
export interface Schema$GoogleCloudMlV1__SetDefaultVersionRequest {}
/**
 * Represents input parameters for a training job. When using the gcloud command
 * to submit your training job, you can specify the input parameters as
 * command-line arguments and/or in a YAML configuration file referenced from
 * the --config command-line argument. For details, see the guide to &lt;a
 * href=&quot;/ml-engine/docs/training-jobs&quot;&gt;submitting a training
 * job&lt;/a&gt;. Next ID: 22
 */
export interface Schema$GoogleCloudMlV1__TrainingInput {
  /**
   * Optional. Command line arguments to pass to the program.
   */
  args: string[];
  /**
   * Optional. The set of Hyperparameters to tune.
   */
  hyperparameters: Schema$GoogleCloudMlV1__HyperparameterSpec;
  /**
   * Optional. A Google Cloud Storage path in which to store training outputs
   * and other data needed for training. This path is passed to your TensorFlow
   * program as the &#39;--job-dir&#39; command-line argument. The benefit of
   * specifying this field is that Cloud ML validates the path for use in
   * training.
   */
  jobDir: string;
  /**
   * Optional. Specifies the type of virtual machine to use for your training
   * job&#39;s master worker.  The following types are supported:  &lt;dl&gt;
   * &lt;dt&gt;standard&lt;/dt&gt;   &lt;dd&gt;   A basic machine configuration
   * suitable for training simple models with   small to moderate datasets.
   * &lt;/dd&gt;   &lt;dt&gt;large_model&lt;/dt&gt;   &lt;dd&gt;   A machine
   * with a lot of memory, specially suited for parameter servers   when your
   * model is large (having many hidden layers or layers with very   large
   * numbers of nodes).   &lt;/dd&gt;   &lt;dt&gt;complex_model_s&lt;/dt&gt;
   * &lt;dd&gt;   A machine suitable for the master and workers of the cluster
   * when your   model requires more computation than the standard machine can
   * handle   satisfactorily.   &lt;/dd&gt; &lt;dt&gt;complex_model_m&lt;/dt&gt;
   * &lt;dd&gt;   A machine with roughly twice the number of cores and roughly
   * double the   memory of &lt;code
   * suppresswarning=&quot;true&quot;&gt;complex_model_s&lt;/code&gt;.
   * &lt;/dd&gt;   &lt;dt&gt;complex_model_l&lt;/dt&gt;   &lt;dd&gt;   A machine
   * with roughly twice the number of cores and roughly double the   memory of
   * &lt;code suppresswarning=&quot;true&quot;&gt;complex_model_m&lt;/code&gt;.
   * &lt;/dd&gt;   &lt;dt&gt;standard_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine
   * equivalent to &lt;code
   * suppresswarning=&quot;true&quot;&gt;standard&lt;/code&gt; that   also
   * includes a single NVIDIA Tesla K80 GPU. See more about   &lt;a
   * href=&quot;/ml-engine/docs/how-tos/using-gpus&quot;&gt;   using GPUs for
   * training your model&lt;/a&gt;.   &lt;/dd&gt;
   * &lt;dt&gt;complex_model_m_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine
   * equivalent to   &lt;code
   * suppresswarning=&quot;true&quot;&gt;complex_model_m&lt;/code&gt; that also
   * includes   four NVIDIA Tesla K80 GPUs.   &lt;/dd&gt;
   * &lt;dt&gt;complex_model_l_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine
   * equivalent to   &lt;code
   * suppresswarning=&quot;true&quot;&gt;complex_model_l&lt;/code&gt; that also
   * includes   eight NVIDIA Tesla K80 GPUs.   &lt;/dd&gt;
   * &lt;dt&gt;standard_p100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to
   * &lt;code suppresswarning=&quot;true&quot;&gt;standard&lt;/code&gt; that
   * also includes a single NVIDIA Tesla P100 GPU. The availability of these
   * GPUs is in the Beta launch stage.   &lt;/dd&gt;
   * &lt;dt&gt;complex_model_m_p100&lt;/dt&gt;   &lt;dd&gt;   A machine
   * equivalent to   &lt;code
   * suppresswarning=&quot;true&quot;&gt;complex_model_m&lt;/code&gt; that also
   * includes   four NVIDIA Tesla P100 GPUs. The availability of these GPUs is
   * in   the Beta launch stage.   &lt;/dd&gt; &lt;/dl&gt;  You must set this
   * value when `scaleTier` is set to `CUSTOM`.
   */
  masterType: string;
  /**
   * Required. The Google Cloud Storage location of the packages with the
   * training program and any additional dependencies. The maximum number of
   * package URIs is 100.
   */
  packageUris: string[];
  /**
   * Optional. The number of parameter server replicas to use for the training
   * job. Each replica in the cluster will be of the type specified in
   * `parameter_server_type`.  This value can only be used when `scale_tier` is
   * set to `CUSTOM`.If you set this value, you must also set
   * `parameter_server_type`.
   */
  parameterServerCount: string;
  /**
   * Optional. Specifies the type of virtual machine to use for your training
   * job&#39;s parameter server.  The supported values are the same as those
   * described in the entry for `master_type`.  This value must be present when
   * `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than
   * zero.
   */
  parameterServerType: string;
  /**
   * Required. The Python module name to run after installing the packages.
   */
  pythonModule: string;
  /**
   * Optional. The version of Python used in training. If not set, the default
   * version is &#39;2.7&#39;. Python &#39;3.5&#39; is available when
   * `runtime_version` is set to &#39;1.4&#39; and above. Python &#39;2.7&#39;
   * works with all supported runtime versions.
   */
  pythonVersion: string;
  /**
   * Required. The Google Compute Engine region to run the training job in. See
   * the &lt;a href=&quot;/ml-engine/docs/regions&quot;&gt;available
   * regions&lt;/a&gt; for ML Engine services.
   */
  region: string;
  /**
   * Optional. The Google Cloud ML runtime version to use for training.  If not
   * set, Google Cloud ML will choose the latest stable version.
   */
  runtimeVersion: string;
  /**
   * Required. Specifies the machine types, the number of replicas for workers
   * and parameter servers.
   */
  scaleTier: string;
  /**
   * Optional. The number of worker replicas to use for the training job. Each
   * replica in the cluster will be of the type specified in `worker_type`. This
   * value can only be used when `scale_tier` is set to `CUSTOM`. If you set
   * this value, you must also set `worker_type`.
   */
  workerCount: string;
  /**
   * Optional. Specifies the type of virtual machine to use for your training
   * job&#39;s worker nodes.  The supported values are the same as those
   * described in the entry for `masterType`.  This value must be present when
   * `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero.
   */
  workerType: string;
}
/**
 * Represents results of a training job. Output only.
 */
export interface Schema$GoogleCloudMlV1__TrainingOutput {
  /**
   * The number of hyperparameter tuning trials that completed successfully.
   * Only set for hyperparameter tuning jobs.
   */
  completedTrialCount: string;
  /**
   * The amount of ML units consumed by the job.
   */
  consumedMLUnits: number;
  /**
   * Whether this job is a hyperparameter tuning job.
   */
  isHyperparameterTuningJob: boolean;
  /**
   * Results for individual Hyperparameter trials. Only set for hyperparameter
   * tuning jobs.
   */
  trials: Schema$GoogleCloudMlV1__HyperparameterOutput[];
}
/**
 * Represents a version of the model.  Each version is a trained model deployed
 * in the cloud, ready to handle prediction requests. A model can have multiple
 * versions. You can get information about all of the versions of a given model
 * by calling
 * [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
 */
export interface Schema$GoogleCloudMlV1__Version {
  /**
   * Automatically scale the number of nodes used to serve the model in response
   * to increases and decreases in traffic. Care should be taken to ramp up
   * traffic according to the model&#39;s ability to scale or you will start
   * seeing increases in latency and 429 response codes.
   */
  autoScaling: Schema$GoogleCloudMlV1__AutoScaling;
  /**
   * Output only. The time the version was created.
   */
  createTime: string;
  /**
   * Required. The Google Cloud Storage location of the trained model used to
   * create the version. See the [overview of model
   * deployment](/ml-engine/docs/concepts/deployment-overview) for more
   * information.  When passing Version to
   * [projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create)
   * the model service uses the specified location as the source of the model.
   * Once deployed, the model version is hosted by the prediction service, so
   * this location is useful only as a historical record. The total number of
   * model files can&#39;t exceed 1000.
   */
  deploymentUri: string;
  /**
   * Optional. The description specified for the version when it was created.
   */
  description: string;
  /**
   * Output only. The details of a failure or a cancellation.
   */
  errorMessage: string;
  /**
   * Optional. The machine learning framework Cloud ML Engine uses to train this
   * version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, and
   * `XGBOOST`. If you do not specify a framework, Cloud ML Engine uses
   * TensorFlow. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set
   * the runtime version of the model to 1.4 or greater.
   */
  framework: string;
  /**
   * Output only. If true, this version will be used to handle prediction
   * requests that do not specify a version.  You can change the default version
   * by calling
   * [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
   */
  isDefault: boolean;
  /**
   * Output only. The time the version was last used for prediction.
   */
  lastUseTime: string;
  /**
   * Manually select the number of nodes to use for serving the model. You
   * should generally use `auto_scaling` with an appropriate `min_nodes`
   * instead, but this option is available if you want more predictable billing.
   * Beware that latency and error rates will increase if the traffic exceeds
   * that capability of the system to serve it based on the selected number of
   * nodes.
   */
  manualScaling: Schema$GoogleCloudMlV1__ManualScaling;
  /**
   * Required.The name specified for the version when it was created.  The
   * version name must be unique within the model it is created in.
   */
  name: string;
  /**
   * Optional. The version of Python used in prediction. If not set, the default
   * version is &#39;2.7&#39;. Python &#39;3.5&#39; is available when
   * `runtime_version` is set to &#39;1.4&#39; and above. Python &#39;2.7&#39;
   * works with all supported runtime versions.
   */
  pythonVersion: string;
  /**
   * Optional. The Google Cloud ML runtime version to use for this deployment.
   * If not set, Google Cloud ML will choose a version.
   */
  runtimeVersion: string;
  /**
   * Output only. The state of a version.
   */
  state: string;
}
/**
 * Specifies the audit configuration for a service. The configuration determines
 * which permission types are logged, and what identities, if any, are exempted
 * from logging. An AuditConfig must have one or more AuditLogConfigs.  If there
 * are AuditConfigs for both `allServices` and a specific service, the union of
 * the two AuditConfigs is used for that service: the log_types specified in
 * each AuditConfig are enabled, and the exempted_members in each AuditLogConfig
 * are exempted.  Example Policy with multiple AuditConfigs:      {
 * &quot;audit_configs&quot;: [         {           &quot;service&quot;:
 * &quot;allServices&quot;           &quot;audit_log_configs&quot;: [ {
 * &quot;log_type&quot;: &quot;DATA_READ&quot;, &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot;               ]             },             {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
 * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] }, {
 * &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
 * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
 * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
 * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
 * &quot;user:bar@gmail.com&quot;               ]             }           ] } ]
 * }  For fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
 * logging. It also exempts foo@gmail.com from DATA_READ logging, and
 * bar@gmail.com from DATA_WRITE logging.
 */
export interface Schema$GoogleIamV1__AuditConfig {
  /**
   * The configuration for logging of each type of permission. Next ID: 4
   */
  auditLogConfigs: Schema$GoogleIamV1__AuditLogConfig[];
  /**
   * Specifies a service that will be enabled for audit logging. For example,
   * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
   * special value that covers all services.
   */
  service: string;
}
/**
 * Provides the configuration for logging a type of permissions. Example:      {
 * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
 * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot;           ]         },         {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
 * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting
 * foo@gmail.com from DATA_READ logging.
 */
export interface Schema$GoogleIamV1__AuditLogConfig {
  /**
   * Specifies the identities that do not cause logging for this type of
   * permission. Follows the same format of Binding.members.
   */
  exemptedMembers: string[];
  /**
   * The log type that this config enables.
   */
  logType: string;
}
/**
 * Associates `members` with a `role`.
 */
export interface Schema$GoogleIamV1__Binding {
  /**
   * Specifies the identities requesting access for a Cloud Platform resource.
   * `members` can have the following values:  * `allUsers`: A special
   * identifier that represents anyone who is    on the internet; with or
   * without a Google account.  * `allAuthenticatedUsers`: A special identifier
   * that represents anyone    who is authenticated with a Google account or a
   * service account.  * `user:{emailid}`: An email address that represents a
   * specific Google    account. For example, `alice@gmail.com` or
   * `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that
   * represents a service    account. For example,
   * `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email
   * address that represents a Google group.    For example,
   * `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that
   * represents all the    users of that domain. For example, `google.com` or
   * `example.com`.
   */
  members: string[];
  /**
   * Role that is assigned to `members`. For example, `roles/viewer`,
   * `roles/editor`, or `roles/owner`. Required
   */
  role: string;
}
/**
 * Defines an Identity and Access Management (IAM) policy. It is used to specify
 * access control policies for Cloud Platform resources.   A `Policy` consists
 * of a list of `bindings`. A `Binding` binds a list of `members` to a `role`,
 * where the members can be user accounts, Google groups, Google domains, and
 * service accounts. A `role` is a named list of permissions defined by IAM.
 * **Example**      {       &quot;bindings&quot;: [         { &quot;role&quot;:
 * &quot;roles/owner&quot;,           &quot;members&quot;: [
 * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
 * &quot;domain:google.com&quot;,
 * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;, ] }, {
 * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
 * [&quot;user:sean@example.com&quot;]         }       ]     }  For a
 * description of IAM and its features, see the [IAM developer&#39;s
 * guide](https://cloud.google.com/iam/docs).
 */
export interface Schema$GoogleIamV1__Policy {
  /**
   * Specifies cloud audit logging configuration for this policy.
   */
  auditConfigs: Schema$GoogleIamV1__AuditConfig[];
  /**
   * Associates a list of `members` to a `role`. `bindings` with no members will
   * result in an error.
   */
  bindings: Schema$GoogleIamV1__Binding[];
  /**
   * `etag` is used for optimistic concurrency control as a way to help prevent
   * simultaneous updates of a policy from overwriting each other. It is
   * strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   * If no `etag` is provided in the call to `setIamPolicy`, then the existing
   * policy is overwritten blindly.
   */
  etag: string;
  /**
   * Deprecated.
   */
  version: number;
}
/**
 * Request message for `SetIamPolicy` method.
 */
export interface Schema$GoogleIamV1__SetIamPolicyRequest {
  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of
   * the policy is limited to a few 10s of KB. An empty policy is a valid policy
   * but certain Cloud Platform services (such as Projects) might reject them.
   */
  policy: Schema$GoogleIamV1__Policy;
  /**
   * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
   * the fields in the mask will be modified. If no mask is provided, the
   * following default mask is used: paths: &quot;bindings, etag&quot; This
   * field is only used by Cloud IAM.
   */
  updateMask: string;
}
/**
 * Request message for `TestIamPermissions` method.
 */
export interface Schema$GoogleIamV1__TestIamPermissionsRequest {
  /**
   * The set of permissions to check for the `resource`. Permissions with
   * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For
   * more information see [IAM
   * Overview](https://cloud.google.com/iam/docs/overview#permissions).
   */
  permissions: string[];
}
/**
 * Response message for `TestIamPermissions` method.
 */
export interface Schema$GoogleIamV1__TestIamPermissionsResponse {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   */
  permissions: string[];
}
/**
 * The response message for Operations.ListOperations.
 */
export interface Schema$GoogleLongrunning__ListOperationsResponse {
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
  /**
   * A list of operations that matches the specified filter in the request.
   */
  operations: Schema$GoogleLongrunning__Operation[];
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Schema$GoogleLongrunning__Operation {
  /**
   * If the value is `false`, it means the operation is still in progress. If
   * `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error: Schema$GoogleRpc__Status;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time. Some
   * services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata: any;
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the `name`
   * should have the format of `operations/some/unique/name`.
   */
  name: string;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx` is
   * the original method name.  For example, if the original method name is
   * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
   */
  response: any;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$GoogleProtobuf__Empty {}
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
export interface Schema$GoogleRpc__Status {
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

export class Resource$Projects {
  root: Ml;
  jobs: Resource$Projects$Jobs;
  locations: Resource$Projects$Locations;
  models: Resource$Projects$Models;
  operations: Resource$Projects$Operations;
  constructor(root: Ml) {
    this.root = root;
    this.getRoot.bind(this);
    this.jobs = new Resource$Projects$Jobs(root);
    this.locations = new Resource$Projects$Locations(root);
    this.models = new Resource$Projects$Models(root);
    this.operations = new Resource$Projects$Operations(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * ml.projects.getConfig
   * @desc Get the service account information associated with your project. You
   * need this information in order to grant the service account persmissions
   * for the Google Cloud Storage location where you put your model training
   * code for training the model with Google Cloud Machine Learning.
   * @alias ml.projects.getConfig
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The project name.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getConfig(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleCloudMlV1__GetConfigResponse>;
  getConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>):
      void;
  getConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__GetConfigResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getConfig')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__GetConfigResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__GetConfigResponse>(
          parameters);
    }
  }


  /**
   * ml.projects.predict
   * @desc Performs prediction on the data in the request. Cloud ML Engine
   * implements a custom `predict` verb on top of an HTTP POST method. <p>For
   * details of the request and response format, see the **guide to the [predict
   * request format](/ml-engine/docs/v1/predict-request)**.
   * @alias ml.projects.predict
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The resource name of a model or a version.  Authorization: requires the `predict` permission on the specified resource.
   * @param {().GoogleCloudMlV1__PredictRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  predict(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleApi__HttpBody>;
  predict(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleApi__HttpBody>,
      callback?: BodyResponseCallback<Schema$GoogleApi__HttpBody>): void;
  predict(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleApi__HttpBody>,
      callback?: BodyResponseCallback<Schema$GoogleApi__HttpBody>):
      void|AxiosPromise<Schema$GoogleApi__HttpBody> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+name}:predict').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleApi__HttpBody>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleApi__HttpBody>(parameters);
    }
  }
}
export class Resource$Projects$Jobs {
  root: Ml;
  constructor(root: Ml) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * ml.projects.jobs.cancel
   * @desc Cancels a running job.
   * @alias ml.projects.jobs.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the job to cancel.
   * @param {().GoogleCloudMlV1__CancelJobRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleProtobuf__Empty>;
  cancel(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
  cancel(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobuf__Empty>):
      void|AxiosPromise<Schema$GoogleProtobuf__Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
    }
  }


  /**
   * ml.projects.jobs.create
   * @desc Creates a training or a batch prediction job.
   * @alias ml.projects.jobs.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The project name.
   * @param {().GoogleCloudMlV1__Job} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleCloudMlV1__Job>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters);
    }
  }


  /**
   * ml.projects.jobs.get
   * @desc Describes a job.
   * @alias ml.projects.jobs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the job to get the description of.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GoogleCloudMlV1__Job>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__Job> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters);
    }
  }


  /**
   * ml.projects.jobs.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias ml.projects.jobs.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleIamV1__Policy>;
  getIamPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>): void;
  getIamPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>):
      void|AxiosPromise<Schema$GoogleIamV1__Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
    }
  }


  /**
   * ml.projects.jobs.list
   * @desc Lists the jobs in the project.  If there are no jobs that match the
   * request parameters, the list request returns an empty response body: {}.
   * @alias ml.projects.jobs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': <p><code>gcloud ml-engine jobs list --filter='jobId:census*'</code> <p>List all failed jobs with names that start with 'rnn': <p><code>gcloud ml-engine jobs list --filter='jobId:rnn* AND state:FAILED'</code> <p>For more examples, see the guide to <a href="/ml-engine/docs/monitor-training">monitoring jobs</a>.
   * @param {integer=} params.pageSize Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
   * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
   * @param {string} params.parent Required. The name of the project for which to list jobs.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleCloudMlV1__ListJobsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__ListJobsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__ListJobsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__ListJobsResponse>(
          parameters);
    }
  }


  /**
   * ml.projects.jobs.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
   * @alias ml.projects.jobs.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
   * @param {().GoogleIamV1__SetIamPolicyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleIamV1__Policy>;
  setIamPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>): void;
  setIamPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>):
      void|AxiosPromise<Schema$GoogleIamV1__Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
    }
  }


  /**
   * ml.projects.jobs.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.  Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   * @alias ml.projects.jobs.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
   * @param {().GoogleIamV1__TestIamPermissionsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>):
      void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters);
    }
  }
}

export class Resource$Projects$Locations {
  root: Ml;
  constructor(root: Ml) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * ml.projects.locations.get
   * @desc Get the complete list of CMLE capabilities in a location, along with
   * their location-specific properties.
   * @alias ml.projects.locations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the location.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GoogleCloudMlV1__Location>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Location>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>): void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Location>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__Location> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__Location>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__Location>(parameters);
    }
  }


  /**
   * ml.projects.locations.list
   * @desc List all locations that provides at least one type of CMLE
   * capability.
   * @alias ml.projects.locations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
   * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
   * @param {string} params.parent Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleCloudMlV1__ListLocationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__ListLocationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/locations')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__ListLocationsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__ListLocationsResponse>(
          parameters);
    }
  }
}

export class Resource$Projects$Models {
  root: Ml;
  versions: Resource$Projects$Models$Versions;
  constructor(root: Ml) {
    this.root = root;
    this.getRoot.bind(this);
    this.versions = new Resource$Projects$Models$Versions(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * ml.projects.models.create
   * @desc Creates a model which will later contain one or more versions.  You
   * must add at least one version before you can request predictions from the
   * model. Add versions by calling
   * [projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create).
   * @alias ml.projects.models.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The project name.
   * @param {().GoogleCloudMlV1__Model} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleCloudMlV1__Model>;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>): void;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__Model> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/models')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters);
    }
  }


  /**
   * ml.projects.models.delete
   * @desc Deletes a model.  You can only delete a model if there are no
   * versions in it. You can delete versions by calling
   * [projects.models.versions.delete](/ml-engine/reference/rest/v1/projects.models.versions/delete).
   * @alias ml.projects.models.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the model.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunning__Operation>;
  delete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void;
  delete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void|AxiosPromise<Schema$GoogleLongrunning__Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunning__Operation>(parameters);
    }
  }


  /**
   * ml.projects.models.get
   * @desc Gets information about a model, including its name, the description
   * (if set), and the default version (if at least one version of the model has
   * been deployed).
   * @alias ml.projects.models.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the model.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GoogleCloudMlV1__Model>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>): void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__Model> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters);
    }
  }


  /**
   * ml.projects.models.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @alias ml.projects.models.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleIamV1__Policy>;
  getIamPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>): void;
  getIamPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>):
      void|AxiosPromise<Schema$GoogleIamV1__Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
    }
  }


  /**
   * ml.projects.models.list
   * @desc Lists the models in a project.  Each project can contain multiple
   * models, and each model can have multiple versions.  If there are no models
   * that match the request parameters, the list request returns an empty
   * response body: {}.
   * @alias ml.projects.models.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter Optional. Specifies the subset of models to retrieve.
   * @param {integer=} params.pageSize Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
   * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
   * @param {string} params.parent Required. The name of the project whose models are to be listed.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleCloudMlV1__ListModelsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__ListModelsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/models')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__ListModelsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__ListModelsResponse>(
          parameters);
    }
  }


  /**
   * ml.projects.models.patch
   * @desc Updates a specific model resource.  Currently the only supported
   * fields to update are `description` and `default_version.name`.
   * @alias ml.projects.models.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The project name.
   * @param {string=} params.updateMask Required. Specifies the path, relative to `Model`, of the field to update.  For example, to change the description of a model to "foo" and set its default version to "version_1", the `update_mask` parameter would be specified as `description`, `default_version.name`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo",       "defaultVersion": {         "name":"version_1"       }     }  Currently the supported update masks are `description` and `default_version.name`.
   * @param {().GoogleCloudMlV1__Model} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunning__Operation>;
  patch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void;
  patch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void|AxiosPromise<Schema$GoogleLongrunning__Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunning__Operation>(parameters);
    }
  }


  /**
   * ml.projects.models.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
   * @alias ml.projects.models.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
   * @param {().GoogleIamV1__SetIamPolicyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleIamV1__Policy>;
  setIamPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>): void;
  setIamPolicy(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>):
      void|AxiosPromise<Schema$GoogleIamV1__Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
    }
  }


  /**
   * ml.projects.models.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.  Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   * @alias ml.projects.models.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
   * @param {().GoogleIamV1__TestIamPermissionsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>):
      void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters);
    }
  }
}
export class Resource$Projects$Models$Versions {
  root: Ml;
  constructor(root: Ml) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * ml.projects.models.versions.create
   * @desc Creates a new version of a model from a trained TensorFlow model.  If
   * the version created in the cloud by this call is the first deployed version
   * of the specified model, it will be made the default version of the model.
   * When you add a version to a model that already has one or more versions,
   * the default version does not automatically change. If you want a new
   * version to be the default, you must call
   * [projects.models.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
   * @alias ml.projects.models.versions.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The name of the model.
   * @param {().GoogleCloudMlV1__Version} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunning__Operation>;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void|AxiosPromise<Schema$GoogleLongrunning__Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunning__Operation>(parameters);
    }
  }


  /**
   * ml.projects.models.versions.delete
   * @desc Deletes a model version.  Each model can have multiple versions
   * deployed and in use at any given time. Use this method to remove a single
   * version.  Note: You cannot delete the version that is set as the default
   * version of the model unless it is the only remaining version.
   * @alias ml.projects.models.versions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the version. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunning__Operation>;
  delete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void;
  delete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void|AxiosPromise<Schema$GoogleLongrunning__Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunning__Operation>(parameters);
    }
  }


  /**
   * ml.projects.models.versions.get
   * @desc Gets information about a model version.  Models can have multiple
   * versions. You can call
   * [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list)
   * to get the same information that this method returns for all of the
   * versions of a model.
   * @alias ml.projects.models.versions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the version.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$GoogleCloudMlV1__Version>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>): void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__Version> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters);
    }
  }


  /**
   * ml.projects.models.versions.list
   * @desc Gets basic information about all the versions of a model.  If you
   * expect that a model has many versions, or if you need to handle only a
   * limited number of results at a time, you can request that the list be
   * retrieved in batches (called pages).  If there are no versions that match
   * the request parameters, the list request returns an empty response body:
   * {}.
   * @alias ml.projects.models.versions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter Optional. Specifies the subset of versions to retrieve.
   * @param {integer=} params.pageSize Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
   * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
   * @param {string} params.parent Required. The name of the model for which to list the version.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleCloudMlV1__ListVersionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>,
      callback?:
          BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__ListVersionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__ListVersionsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__ListVersionsResponse>(
          parameters);
    }
  }


  /**
   * ml.projects.models.versions.patch
   * @desc Updates the specified Version resource.  Currently the only supported
   * field to update is `description`.
   * @alias ml.projects.models.versions.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the model.
   * @param {string=} params.updateMask Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty.  For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo"     }  Currently the only supported update mask is`description`.
   * @param {().GoogleCloudMlV1__Version} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunning__Operation>;
  patch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void;
  patch(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void|AxiosPromise<Schema$GoogleLongrunning__Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunning__Operation>(parameters);
    }
  }


  /**
   * ml.projects.models.versions.setDefault
   * @desc Designates a version to be the default for the model.  The default
   * version is used for prediction requests made against the model that don't
   * specify a version.  The first version to be created for a model is
   * automatically set as the default. You must make any subsequent changes to
   * the default version setting manually using this method.
   * @alias ml.projects.models.versions.setDefault
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
   * @param {().GoogleCloudMlV1__SetDefaultVersionRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setDefault(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleCloudMlV1__Version>;
  setDefault(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>): void;
  setDefault(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>):
      void|AxiosPromise<Schema$GoogleCloudMlV1__Version> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setDefault')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters);
    }
  }
}


export class Resource$Projects$Operations {
  root: Ml;
  constructor(root: Ml) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * ml.projects.operations.cancel
   * @desc Starts asynchronous cancellation on a long-running operation.  The
   * server makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
   * or other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation, the
   * operation is not deleted; instead, it becomes an operation with an
   * Operation.error value with a google.rpc.Status.code of 1, corresponding to
   * `Code.CANCELLED`.
   * @alias ml.projects.operations.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be cancelled.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleProtobuf__Empty>;
  cancel(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
  cancel(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobuf__Empty>):
      void|AxiosPromise<Schema$GoogleProtobuf__Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
    }
  }


  /**
   * ml.projects.operations.delete
   * @desc Deletes a long-running operation. This method indicates that the
   * client is no longer interested in the operation result. It does not cancel
   * the operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   * @alias ml.projects.operations.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be deleted.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleProtobuf__Empty>;
  delete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
  delete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobuf__Empty>):
      void|AxiosPromise<Schema$GoogleProtobuf__Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
    }
  }


  /**
   * ml.projects.operations.get
   * @desc Gets the latest state of a long-running operation.  Clients can use
   * this method to poll the operation result at intervals as recommended by the
   * API service.
   * @alias ml.projects.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunning__Operation>;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void;
  get(params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>):
      void|AxiosPromise<Schema$GoogleLongrunning__Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunning__Operation>(parameters);
    }
  }


  /**
   * ml.projects.operations.list
   * @desc Lists operations that match the specified filter in the request. If
   * the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE:
   * the `name` binding allows API services to override the binding to use
   * different resource name schemes, such as `users/x/operations`. To override
   * the binding, API services can add a binding such as
   * `"/v1/{name=users/x}/operations"` to their service configuration. For
   * backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding is the
   * parent resource, without the operations collection id.
   * @alias ml.projects.operations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter The standard list filter.
   * @param {string} params.name The name of the operation's parent resource.
   * @param {integer=} params.pageSize The standard list page size.
   * @param {string=} params.pageToken The standard list page token.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GoogleLongrunning__ListOperationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__ListOperationsResponse>,
      callback?: BodyResponseCallback<
          Schema$GoogleLongrunning__ListOperationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GoogleLongrunning__ListOperationsResponse>,
      callback?: BodyResponseCallback<
          Schema$GoogleLongrunning__ListOperationsResponse>):
      void|AxiosPromise<Schema$GoogleLongrunning__ListOperationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunning__ListOperationsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GoogleLongrunning__ListOperationsResponse>(
          parameters);
    }
  }
}
