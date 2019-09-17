/**
 * Copyright 2019 Google LLC
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

export namespace ml_v1 {
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
   * Cloud Machine Learning Engine
   *
   * An API to enable creating and using machine learning models.
   *
   * @example
   * const {google} = require('googleapis');
   * const ml = google.ml('v1');
   *
   * @namespace ml
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Ml
   */
  export class Ml {
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
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can&#39;t be represented as JSON, such as raw binary or an HTML page.   This message can be used both in streaming and non-streaming API methods in the request as well as the response.  It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.  Example:      message GetResourceRequest {       // A unique request id.       string request_id = 1;        // The raw HTTP body is bound to this field.       google.api.HttpBody http_body = 2;     }      service ResourceService {       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);       rpc UpdateResource(google.api.HttpBody) returns       (google.protobuf.Empty);     }  Example with streaming methods:      service CaldavService {       rpc GetCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);       rpc UpdateCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);     }  Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$GoogleApi__HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * An observed value of a metric.
   */
  export interface Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric {
    /**
     * The objective value at this training step.
     */
    objectiveValue?: number | null;
    /**
     * The global training step for this metric.
     */
    trainingStep?: string | null;
  }
  /**
   * Represents a hardware accelerator request config.
   */
  export interface Schema$GoogleCloudMlV1__AcceleratorConfig {
    /**
     * The number of accelerators to attach to each machine running the job.
     */
    count?: string | null;
    /**
     * The type of accelerator to use.
     */
    type?: string | null;
  }
  /**
   * Options for automatically scaling a model.
   */
  export interface Schema$GoogleCloudMlV1__AutoScaling {
    /**
     * Optional. The minimum number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed. Therefore, the cost of operating this model will be at least `rate` * `min_nodes` * number of hours since last billing cycle, where `rate` is the cost per node-hour as documented in the [pricing guide](/ml-engine/docs/pricing), even if no predictions are performed. There is additional cost for each prediction performed.  Unlike manual scaling, if the load gets too heavy for the nodes that are up, the service will automatically add nodes to handle the increased load as well as scale back as traffic drops, always maintaining at least `min_nodes`. You will be charged for the time in which additional nodes are used.  If not specified, `min_nodes` defaults to 0, in which case, when traffic to a model stops (and after a cool-down period), nodes will be shut down and no charges will be incurred until traffic to the model resumes.  You can set `min_nodes` when creating the model version, and you can also update `min_nodes` for an existing version: &lt;pre&gt; update_body.json: {   &#39;autoScaling&#39;: {     &#39;minNodes&#39;: 5   } } &lt;/pre&gt; HTTP request: &lt;pre&gt; PATCH https://ml.googleapis.com/v1/{name=projects/x/models/x/versions/*}?update_mask=autoScaling.minNodes -d @./update_body.json &lt;/pre&gt;
     */
    minNodes?: number | null;
  }
  /**
   * Represents output related to a built-in algorithm Job.
   */
  export interface Schema$GoogleCloudMlV1__BuiltInAlgorithmOutput {
    /**
     * Framework on which the built-in algorithm was trained.
     */
    framework?: string | null;
    /**
     * The Cloud Storage path to the `model/` directory where the training job saves the trained model. Only set for successful jobs that don&#39;t use hyperparameter tuning.
     */
    modelPath?: string | null;
    /**
     * Python version on which the built-in algorithm was trained.
     */
    pythonVersion?: string | null;
    /**
     * AI Platform runtime version on which the built-in algorithm was trained.
     */
    runtimeVersion?: string | null;
  }
  /**
   * Request message for the CancelJob method.
   */
  export interface Schema$GoogleCloudMlV1__CancelJobRequest {}
  export interface Schema$GoogleCloudMlV1__Capability {
    /**
     * Available accelerators for the capability.
     */
    availableAccelerators?: string[] | null;
    type?: string | null;
  }
  export interface Schema$GoogleCloudMlV1__Config {
    /**
     * The service account Cloud ML uses to run on TPU node.
     */
    tpuServiceAccount?: string | null;
  }
  /**
   * Returns service account information associated with a project.
   */
  export interface Schema$GoogleCloudMlV1__GetConfigResponse {
    config?: Schema$GoogleCloudMlV1__Config;
    /**
     * The service account Cloud ML uses to access resources in the project.
     */
    serviceAccount?: string | null;
    /**
     * The project number for `service_account`.
     */
    serviceAccountProject?: string | null;
  }
  /**
   * Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
   */
  export interface Schema$GoogleCloudMlV1__HyperparameterOutput {
    /**
     * All recorded object metrics for this trial. This field is not currently populated.
     */
    allMetrics?: Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric[];
    /**
     * Details related to built-in algorithms jobs. Only set for trials of built-in algorithms jobs that have succeeded.
     */
    builtInAlgorithmOutput?: Schema$GoogleCloudMlV1__BuiltInAlgorithmOutput;
    /**
     * Output only. End time for the trial.
     */
    endTime?: string | null;
    /**
     * The final objective metric seen for this trial.
     */
    finalMetric?: Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric;
    /**
     * The hyperparameters given to this trial.
     */
    hyperparameters?: {[key: string]: string} | null;
    /**
     * True if the trial is stopped early.
     */
    isTrialStoppedEarly?: boolean | null;
    /**
     * Output only. Start time for the trial.
     */
    startTime?: string | null;
    /**
     * Output only. The detailed state of the trial.
     */
    state?: string | null;
    /**
     * The trial id for these results.
     */
    trialId?: string | null;
  }
  /**
   * Represents a set of hyperparameters to optimize.
   */
  export interface Schema$GoogleCloudMlV1__HyperparameterSpec {
    /**
     * Optional. The search algorithm specified for the hyperparameter tuning job. Uses the default AI Platform hyperparameter tuning algorithm if unspecified.
     */
    algorithm?: string | null;
    /**
     * Optional. Indicates if the hyperparameter tuning job enables auto trial early stopping.
     */
    enableTrialEarlyStopping?: boolean | null;
    /**
     * Required. The type of goal to use for tuning. Available types are `MAXIMIZE` and `MINIMIZE`.  Defaults to `MAXIMIZE`.
     */
    goal?: string | null;
    /**
     * Optional. The TensorFlow summary tag name to use for optimizing trials. For current versions of TensorFlow, this tag name should exactly match what is shown in TensorBoard, including all scopes.  For versions of TensorFlow prior to 0.12, this should be only the tag passed to tf.Summary. By default, &quot;training/hptuning/metric&quot; will be used.
     */
    hyperparameterMetricTag?: string | null;
    /**
     * Optional. The number of failed trials that need to be seen before failing the hyperparameter tuning job. You can specify this field to override the default failing criteria for AI Platform hyperparameter tuning jobs.  Defaults to zero, which means the service decides when a hyperparameter job should fail.
     */
    maxFailedTrials?: number | null;
    /**
     * Optional. The number of training trials to run concurrently. You can reduce the time it takes to perform hyperparameter tuning by adding trials in parallel. However, each trail only benefits from the information gained in completed trials. That means that a trial does not get access to the results of trials running at the same time, which could reduce the quality of the overall optimization.  Each trial will use the same scale tier and machine types.  Defaults to one.
     */
    maxParallelTrials?: number | null;
    /**
     * Optional. How many training trials should be attempted to optimize the specified hyperparameters.  Defaults to one.
     */
    maxTrials?: number | null;
    /**
     * Required. The set of parameters to tune.
     */
    params?: Schema$GoogleCloudMlV1__ParameterSpec[];
    /**
     * Optional. The prior hyperparameter tuning job id that users hope to continue with. The job id will be used to find the corresponding vizier study guid and resume the study.
     */
    resumePreviousJobId?: string | null;
  }
  /**
   * Represents a training or prediction job.
   */
  export interface Schema$GoogleCloudMlV1__Job {
    /**
     * Output only. When the job was created.
     */
    createTime?: string | null;
    /**
     * Output only. When the job processing was completed.
     */
    endTime?: string | null;
    /**
     * Output only. The details of a failure or a cancellation.
     */
    errorMessage?: string | null;
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.
     */
    etag?: string | null;
    /**
     * Required. The user-specified id of the job.
     */
    jobId?: string | null;
    /**
     * Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/tensorflow/resource-labels&quot;&gt;using labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Input parameters to create a prediction job.
     */
    predictionInput?: Schema$GoogleCloudMlV1__PredictionInput;
    /**
     * The current prediction job result.
     */
    predictionOutput?: Schema$GoogleCloudMlV1__PredictionOutput;
    /**
     * Output only. When the job processing was started.
     */
    startTime?: string | null;
    /**
     * Output only. The detailed state of a job.
     */
    state?: string | null;
    /**
     * Input parameters to create a training job.
     */
    trainingInput?: Schema$GoogleCloudMlV1__TrainingInput;
    /**
     * The current training job result.
     */
    trainingOutput?: Schema$GoogleCloudMlV1__TrainingOutput;
  }
  /**
   * Response message for the ListJobs method.
   */
  export interface Schema$GoogleCloudMlV1__ListJobsResponse {
    /**
     * The list of jobs.
     */
    jobs?: Schema$GoogleCloudMlV1__Job[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$GoogleCloudMlV1__ListLocationsResponse {
    /**
     * Locations where at least one type of CMLE capability is available.
     */
    locations?: Schema$GoogleCloudMlV1__Location[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListModels method.
   */
  export interface Schema$GoogleCloudMlV1__ListModelsResponse {
    /**
     * The list of models.
     */
    models?: Schema$GoogleCloudMlV1__Model[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListVersions method.
   */
  export interface Schema$GoogleCloudMlV1__ListVersionsResponse {
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string | null;
    /**
     * The list of versions.
     */
    versions?: Schema$GoogleCloudMlV1__Version[];
  }
  export interface Schema$GoogleCloudMlV1__Location {
    /**
     * Capabilities available in the location.
     */
    capabilities?: Schema$GoogleCloudMlV1__Capability[];
    name?: string | null;
  }
  /**
   * Options for manually scaling a model.
   */
  export interface Schema$GoogleCloudMlV1__ManualScaling {
    /**
     * The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed.
     */
    nodes?: number | null;
  }
  /**
   * Represents a machine learning solution.  A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
   */
  export interface Schema$GoogleCloudMlV1__Model {
    /**
     * Output only. The default version of the model. This version will be used to handle prediction requests that do not specify a version.  You can change the default version by calling [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
     */
    defaultVersion?: Schema$GoogleCloudMlV1__Version;
    /**
     * Optional. The description specified for the model when it was created.
     */
    description?: string | null;
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.
     */
    etag?: string | null;
    /**
     * Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/tensorflow/resource-labels&quot;&gt;using labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The name specified for the model when it was created.  The model name must be unique within the project it is created in.
     */
    name?: string | null;
    /**
     * Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Stackdriver Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [Stackdriver logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option.  Default is false.
     */
    onlinePredictionConsoleLogging?: boolean | null;
    /**
     * Optional. If true, online prediction access logs are sent to StackDriver Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [Stackdriver logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option.  Default is false.
     */
    onlinePredictionLogging?: boolean | null;
    /**
     * Optional. The list of regions where the model is going to be deployed. Currently only one region per model is supported. Defaults to &#39;us-central1&#39; if nothing is set. See the &lt;a href=&quot;/ml-engine/docs/tensorflow/regions&quot;&gt;available regions&lt;/a&gt; for AI Platform services. Note: *   No matter where a model is deployed, it can always be accessed by     users from anywhere, both for online and batch prediction. *   The region for a batch prediction job is set by the region field when     submitting the batch prediction job and does not take its value from     this field.
     */
    regions?: string[] | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudMlV1__OperationMetadata {
    /**
     * The time the operation was submitted.
     */
    createTime?: string | null;
    /**
     * The time operation processing completed.
     */
    endTime?: string | null;
    /**
     * Indicates whether a request to cancel this operation has been made.
     */
    isCancellationRequested?: boolean | null;
    /**
     * The user labels, inherited from the model or the model version being operated on.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Contains the name of the model associated with the operation.
     */
    modelName?: string | null;
    /**
     * The operation type.
     */
    operationType?: string | null;
    /**
     * Contains the project number associated with the operation.
     */
    projectNumber?: string | null;
    /**
     * The time operation processing started.
     */
    startTime?: string | null;
    /**
     * Contains the version associated with the operation.
     */
    version?: Schema$GoogleCloudMlV1__Version;
  }
  /**
   * Represents a single hyperparameter to optimize.
   */
  export interface Schema$GoogleCloudMlV1__ParameterSpec {
    /**
     * Required if type is `CATEGORICAL`. The list of possible categories.
     */
    categoricalValues?: string[] | null;
    /**
     * Required if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
     */
    discreteValues?: number[] | null;
    /**
     * Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is `INTEGER`.
     */
    maxValue?: number | null;
    /**
     * Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is INTEGER.
     */
    minValue?: number | null;
    /**
     * Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., &quot;learning_rate&quot;.
     */
    parameterName?: string | null;
    /**
     * Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`).
     */
    scaleType?: string | null;
    /**
     * Required. The type of the parameter.
     */
    type?: string | null;
  }
  /**
   * Represents input parameters for a prediction job.
   */
  export interface Schema$GoogleCloudMlV1__PredictionInput {
    /**
     * Optional. Number of records per batch, defaults to 64. The service will buffer batch_size number of records in memory before invoking one Tensorflow prediction call internally. So take the record size and memory available into consideration when setting this parameter.
     */
    batchSize?: string | null;
    /**
     * Required. The format of the input data files.
     */
    dataFormat?: string | null;
    /**
     * Required. The Cloud Storage location of the input data files. May contain &lt;a href=&quot;/storage/docs/gsutil/addlhelp/WildcardNames&quot;&gt;wildcards&lt;/a&gt;.
     */
    inputPaths?: string[] | null;
    /**
     * Optional. The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified.
     */
    maxWorkerCount?: string | null;
    /**
     * Use this field if you want to use the default version for the specified model. The string must use the following format:  `&quot;projects/YOUR_PROJECT/models/YOUR_MODEL&quot;`
     */
    modelName?: string | null;
    /**
     * Optional. Format of the output data files, defaults to JSON.
     */
    outputDataFormat?: string | null;
    /**
     * Required. The output Google Cloud Storage location.
     */
    outputPath?: string | null;
    /**
     * Required. The Google Compute Engine region to run the prediction job in. See the &lt;a href=&quot;/ml-engine/docs/tensorflow/regions&quot;&gt;available regions&lt;/a&gt; for AI Platform services.
     */
    region?: string | null;
    /**
     * Optional. The AI Platform runtime version to use for this batch prediction. If not set, AI Platform will pick the runtime version used during the CreateVersion request for this model version, or choose the latest stable version when model version information is not available such as when the model is specified by uri.
     */
    runtimeVersion?: string | null;
    /**
     * Optional. The name of the signature defined in the SavedModel to use for this job. Please refer to [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for information about how to use signatures.  Defaults to [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants) , which is &quot;serving_default&quot;.
     */
    signatureName?: string | null;
    /**
     * Use this field if you want to specify a Google Cloud Storage path for the model to use.
     */
    uri?: string | null;
    /**
     * Use this field if you want to specify a version of the model to use. The string is formatted the same way as `model_version`, with the addition of the version information:  `&quot;projects/YOUR_PROJECT/models/YOUR_MODEL/versions/YOUR_VERSION&quot;`
     */
    versionName?: string | null;
  }
  /**
   * Represents results of a prediction job.
   */
  export interface Schema$GoogleCloudMlV1__PredictionOutput {
    /**
     * The number of data instances which resulted in errors.
     */
    errorCount?: string | null;
    /**
     * Node hours used by the batch prediction job.
     */
    nodeHours?: number | null;
    /**
     * The output Google Cloud Storage location provided at the job creation time.
     */
    outputPath?: string | null;
    /**
     * The number of generated predictions.
     */
    predictionCount?: string | null;
  }
  /**
   * Request for predictions to be issued against a trained model.
   */
  export interface Schema$GoogleCloudMlV1__PredictRequest {
    /**
     *  Required. The prediction request body.
     */
    httpBody?: Schema$GoogleApi__HttpBody;
  }
  /**
   * Represents the configuration for a replica in a cluster.
   */
  export interface Schema$GoogleCloudMlV1__ReplicaConfig {
    /**
     * Represents the type and number of accelerators used by the replica. [Learn about restrictions on accelerator configurations for training.](/ml-engine/docs/tensorflow/using-gpus#compute-engine-machine-types-with-gpu)
     */
    acceleratorConfig?: Schema$GoogleCloudMlV1__AcceleratorConfig;
    /**
     * The Docker image to run on the replica. This image must be in Container Registry. Learn more about [configuring custom containers](/ml-engine/docs/distributed-training-containers).
     */
    imageUri?: string | null;
    /**
     * The AI Platform runtime version that includes a TensorFlow version matching the one used in the custom container. This field is required if the replica is a TPU worker that uses a custom container. Otherwise, do not specify this field. This must be a [runtime version that currently supports training with TPUs](/ml-engine/docs/tensorflow/runtime-version-list#tpu-support).  Note that the version of TensorFlow included in a runtime version may differ from the numbering of the runtime version itself, because it may have a different [patch version](https://www.tensorflow.org/guide/version_compat#semantic_versioning_20). In this field, you must specify the runtime version (TensorFlow minor version). For example, if your custom container runs TensorFlow `1.x.y`, specify `1.x`.
     */
    tpuTfVersion?: string | null;
  }
  /**
   * Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions.  If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs.
   */
  export interface Schema$GoogleCloudMlV1__RequestLoggingConfig {
    /**
     * Required. Fully qualified BigQuery table name in the following format: &quot;&lt;var&gt;project_id&lt;/var&gt;.&lt;var&gt;dataset_name&lt;/var&gt;.&lt;var&gt;table_name&lt;/var&gt;&quot;  The specifcied table must already exist, and the &quot;Cloud ML Service Agent&quot; for your project must have permission to write to it. The table must have the following [schema](/bigquery/docs/schemas):  &lt;table&gt;   &lt;tr&gt;&lt;th&gt;Field name&lt;/th&gt;&lt;th style=&quot;display: table-cell&quot;&gt;Type&lt;/th&gt;     &lt;th style=&quot;display: table-cell&quot;&gt;Mode&lt;/th&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;model&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;REQUIRED&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;model_version&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;REQUIRED&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;time&lt;/td&gt;&lt;td&gt;TIMESTAMP&lt;/td&gt;&lt;td&gt;REQUIRED&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;raw_data&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;REQUIRED&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;raw_prediction&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;NULLABLE&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;groundtruth&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;NULLABLE&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;
     */
    bigqueryTableName?: string | null;
    /**
     * Percentage of requests to be logged, expressed as a fraction from 0 to 1. For example, if you want to log 10% of requests, enter `0.1`. The sampling window is the lifetime of the model version. Defaults to 0.
     */
    samplingPercentage?: number | null;
  }
  /**
   * Request message for the SetDefaultVersion request.
   */
  export interface Schema$GoogleCloudMlV1__SetDefaultVersionRequest {}
  /**
   * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to &lt;a href=&quot;/ml-engine/docs/tensorflow/training-jobs&quot;&gt;submitting a training job&lt;/a&gt;.
   */
  export interface Schema$GoogleCloudMlV1__TrainingInput {
    /**
     * Optional. Command line arguments to pass to the program.
     */
    args?: string[] | null;
    /**
     * Optional. The set of Hyperparameters to tune.
     */
    hyperparameters?: Schema$GoogleCloudMlV1__HyperparameterSpec;
    /**
     * Optional. A Google Cloud Storage path in which to store training outputs and other data needed for training. This path is passed to your TensorFlow program as the &#39;--job-dir&#39; command-line argument. The benefit of specifying this field is that Cloud ML validates the path for use in training.
     */
    jobDir?: string | null;
    /**
     * Optional. The configuration for your master worker.  You should only set `masterConfig.acceleratorConfig` if `masterType` is set to a Compute Engine machine type. Learn about [restrictions on accelerator configurations for training.](/ml-engine/docs/tensorflow/using-gpus#compute-engine-machine-types-with-gpu)  Set `masterConfig.imageUri` only if you build a custom image. Only one of `masterConfig.imageUri` and `runtimeVersion` should be set. Learn more about [configuring custom containers](/ml-engine/docs/distributed-training-containers).
     */
    masterConfig?: Schema$GoogleCloudMlV1__ReplicaConfig;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job&#39;s master worker.  The following types are supported:  &lt;dl&gt;   &lt;dt&gt;standard&lt;/dt&gt;   &lt;dd&gt;   A basic machine configuration suitable for training simple models with   small to moderate datasets.   &lt;/dd&gt;   &lt;dt&gt;large_model&lt;/dt&gt;   &lt;dd&gt;   A machine with a lot of memory, specially suited for parameter servers   when your model is large (having many hidden layers or layers with very   large numbers of nodes).   &lt;/dd&gt;   &lt;dt&gt;complex_model_s&lt;/dt&gt;   &lt;dd&gt;   A machine suitable for the master and workers of the cluster when your   model requires more computation than the standard machine can handle   satisfactorily.   &lt;/dd&gt;   &lt;dt&gt;complex_model_m&lt;/dt&gt;   &lt;dd&gt;   A machine with roughly twice the number of cores and roughly double the   memory of &lt;i&gt;complex_model_s&lt;/i&gt;.   &lt;/dd&gt;   &lt;dt&gt;complex_model_l&lt;/dt&gt;   &lt;dd&gt;   A machine with roughly twice the number of cores and roughly double the   memory of &lt;i&gt;complex_model_m&lt;/i&gt;.   &lt;/dd&gt;   &lt;dt&gt;standard_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;standard&lt;/i&gt; that   also includes a single NVIDIA Tesla K80 GPU. See more about   &lt;a href=&quot;/ml-engine/docs/tensorflow/using-gpus&quot;&gt;using GPUs to   train your model&lt;/a&gt;.   &lt;/dd&gt;   &lt;dt&gt;complex_model_m_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;complex_model_m&lt;/i&gt; that also includes   four NVIDIA Tesla K80 GPUs.   &lt;/dd&gt;   &lt;dt&gt;complex_model_l_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;complex_model_l&lt;/i&gt; that also includes   eight NVIDIA Tesla K80 GPUs.   &lt;/dd&gt;   &lt;dt&gt;standard_p100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;standard&lt;/i&gt; that   also includes a single NVIDIA Tesla P100 GPU.   &lt;/dd&gt;   &lt;dt&gt;complex_model_m_p100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;complex_model_m&lt;/i&gt; that also includes   four NVIDIA Tesla P100 GPUs.   &lt;/dd&gt;   &lt;dt&gt;standard_v100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;standard&lt;/i&gt; that   also includes a single NVIDIA Tesla V100 GPU.   &lt;/dd&gt;   &lt;dt&gt;large_model_v100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;large_model&lt;/i&gt; that   also includes a single NVIDIA Tesla V100 GPU.   &lt;/dd&gt;   &lt;dt&gt;complex_model_m_v100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;complex_model_m&lt;/i&gt; that   also includes four NVIDIA Tesla V100 GPUs.   &lt;/dd&gt;   &lt;dt&gt;complex_model_l_v100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;i&gt;complex_model_l&lt;/i&gt; that   also includes eight NVIDIA Tesla V100 GPUs.   &lt;/dd&gt;   &lt;dt&gt;cloud_tpu&lt;/dt&gt;   &lt;dd&gt;   A TPU VM including one Cloud TPU. See more about   &lt;a href=&quot;/ml-engine/docs/tensorflow/using-tpus&quot;&gt;using TPUs to train   your model&lt;/a&gt;.   &lt;/dd&gt; &lt;/dl&gt;  You may also use certain Compute Engine machine types directly in this field. The following types are supported:  - `n1-standard-4` - `n1-standard-8` - `n1-standard-16` - `n1-standard-32` - `n1-standard-64` - `n1-standard-96` - `n1-highmem-2` - `n1-highmem-4` - `n1-highmem-8` - `n1-highmem-16` - `n1-highmem-32` - `n1-highmem-64` - `n1-highmem-96` - `n1-highcpu-16` - `n1-highcpu-32` - `n1-highcpu-64` - `n1-highcpu-96`  See more about [using Compute Engine machine types](/ml-engine/docs/tensorflow/machine-types#compute-engine-machine-types).  You must set this value when `scaleTier` is set to `CUSTOM`.
     */
    masterType?: string | null;
    /**
     * Required. The Google Cloud Storage location of the packages with the training program and any additional dependencies. The maximum number of package URIs is 100.
     */
    packageUris?: string[] | null;
    /**
     * Optional. The configuration for parameter servers.  You should only set `parameterServerConfig.acceleratorConfig` if `parameterServerConfigType` is set to a Compute Engine machine type. [Learn about restrictions on accelerator configurations for training.](/ml-engine/docs/tensorflow/using-gpus#compute-engine-machine-types-with-gpu)  Set `parameterServerConfig.imageUri` only if you build a custom image for your parameter server. If `parameterServerConfig.imageUri` has not been set, AI Platform uses the value of `masterConfig.imageUri`. Learn more about [configuring custom containers](/ml-engine/docs/distributed-training-containers).
     */
    parameterServerConfig?: Schema$GoogleCloudMlV1__ReplicaConfig;
    /**
     * Optional. The number of parameter server replicas to use for the training job. Each replica in the cluster will be of the type specified in `parameter_server_type`.  This value can only be used when `scale_tier` is set to `CUSTOM`.If you set this value, you must also set `parameter_server_type`.  The default value is zero.
     */
    parameterServerCount?: string | null;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job&#39;s parameter server.  The supported values are the same as those described in the entry for `master_type`.  This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be AI Platform machine types or both must be Compute Engine machine types.  This value must be present when `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than zero.
     */
    parameterServerType?: string | null;
    /**
     * Required. The Python module name to run after installing the packages.
     */
    pythonModule?: string | null;
    /**
     * Optional. The version of Python used in training. If not set, the default version is &#39;2.7&#39;. Python &#39;3.5&#39; is available when `runtime_version` is set to &#39;1.4&#39; and above. Python &#39;2.7&#39; works with all supported &lt;a href=&quot;/ml-engine/docs/runtime-version-list&quot;&gt;runtime versions&lt;/a&gt;.
     */
    pythonVersion?: string | null;
    /**
     * Required. The Google Compute Engine region to run the training job in. See the &lt;a href=&quot;/ml-engine/docs/tensorflow/regions&quot;&gt;available regions&lt;/a&gt; for AI Platform services.
     */
    region?: string | null;
    /**
     * Optional. The AI Platform runtime version to use for training. If not set, AI Platform uses the default stable version, 1.0. For more information, see the &lt;a href=&quot;/ml-engine/docs/runtime-version-list&quot;&gt;runtime version list&lt;/a&gt; and &lt;a href=&quot;/ml-engine/docs/versioning&quot;&gt;how to manage runtime versions&lt;/a&gt;.
     */
    runtimeVersion?: string | null;
    /**
     * Required. Specifies the machine types, the number of replicas for workers and parameter servers.
     */
    scaleTier?: string | null;
    /**
     * Optional. The configuration for workers.  You should only set `workerConfig.acceleratorConfig` if `workerType` is set to a Compute Engine machine type. [Learn about restrictions on accelerator configurations for training.](/ml-engine/docs/tensorflow/using-gpus#compute-engine-machine-types-with-gpu)  Set `workerConfig.imageUri` only if you build a custom image for your worker. If `workerConfig.imageUri` has not been set, AI Platform uses the value of `masterConfig.imageUri`. Learn more about [configuring custom containers](/ml-engine/docs/distributed-training-containers).
     */
    workerConfig?: Schema$GoogleCloudMlV1__ReplicaConfig;
    /**
     * Optional. The number of worker replicas to use for the training job. Each replica in the cluster will be of the type specified in `worker_type`.  This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `worker_type`.  The default value is zero.
     */
    workerCount?: string | null;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job&#39;s worker nodes.  The supported values are the same as those described in the entry for `masterType`.  This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be AI Platform machine types or both must be Compute Engine machine types.  If you use `cloud_tpu` for this value, see special instructions for [configuring a custom TPU machine](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine).  This value must be present when `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero.
     */
    workerType?: string | null;
  }
  /**
   * Represents results of a training job. Output only.
   */
  export interface Schema$GoogleCloudMlV1__TrainingOutput {
    /**
     * Details related to built-in algorithms jobs. Only set for built-in algorithms jobs.
     */
    builtInAlgorithmOutput?: Schema$GoogleCloudMlV1__BuiltInAlgorithmOutput;
    /**
     * The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs.
     */
    completedTrialCount?: string | null;
    /**
     * The amount of ML units consumed by the job.
     */
    consumedMLUnits?: number | null;
    /**
     * The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [`HyperparameterSpec.hyperparameterMetricTag`](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs.
     */
    hyperparameterMetricTag?: string | null;
    /**
     * Whether this job is a built-in Algorithm job.
     */
    isBuiltInAlgorithmJob?: boolean | null;
    /**
     * Whether this job is a hyperparameter tuning job.
     */
    isHyperparameterTuningJob?: boolean | null;
    /**
     * Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs.
     */
    trials?: Schema$GoogleCloudMlV1__HyperparameterOutput[];
  }
  /**
   * Represents a version of the model.  Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
   */
  export interface Schema$GoogleCloudMlV1__Version {
    /**
     * Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model&#39;s ability to scale or you will start seeing increases in latency and 429 response codes.
     */
    autoScaling?: Schema$GoogleCloudMlV1__AutoScaling;
    /**
     * Output only. The time the version was created.
     */
    createTime?: string | null;
    /**
     * Required. The Cloud Storage location of the trained model used to create the version. See the [guide to model deployment](/ml-engine/docs/tensorflow/deploying-models) for more information.  When passing Version to [projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create) the model service uses the specified location as the source of the model. Once deployed, the model version is hosted by the prediction service, so this location is useful only as a historical record. The total number of model files can&#39;t exceed 1000.
     */
    deploymentUri?: string | null;
    /**
     * Optional. The description specified for the version when it was created.
     */
    description?: string | null;
    /**
     * Output only. The details of a failure or a cancellation.
     */
    errorMessage?: string | null;
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.
     */
    etag?: string | null;
    /**
     * Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater.  Do **not** specify a framework if you&#39;re deploying a [custom prediction routine](/ml-engine/docs/tensorflow/custom-prediction-routines).
     */
    framework?: string | null;
    /**
     * Output only. If true, this version will be used to handle prediction requests that do not specify a version.  You can change the default version by calling [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
     */
    isDefault?: boolean | null;
    /**
     * Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/tensorflow/resource-labels&quot;&gt;using labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The time the version was last used for prediction.
     */
    lastUseTime?: string | null;
    /**
     * Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. &lt;dl&gt;   &lt;dt&gt;mls1-c1-m2&lt;/dt&gt;   &lt;dd&gt;   The &lt;b&gt;default&lt;/b&gt; machine type, with 1 core and 2 GB RAM. The deprecated   name for this machine type is &quot;mls1-highmem-1&quot;.   &lt;/dd&gt;   &lt;dt&gt;mls1-c4-m2&lt;/dt&gt;   &lt;dd&gt;   In &lt;b&gt;Beta&lt;/b&gt;. This machine type has 4 cores and 2 GB RAM. The   deprecated name for this machine type is &quot;mls1-highcpu-4&quot;.   &lt;/dd&gt; &lt;/dl&gt;
     */
    machineType?: string | null;
    /**
     * Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes.
     */
    manualScaling?: Schema$GoogleCloudMlV1__ManualScaling;
    /**
     * Required. The name specified for the version when it was created.  The version name must be unique within the model it is created in.
     */
    name?: string | null;
    /**
     * Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code).  For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list).  If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.
     */
    packageUris?: string[] | null;
    /**
     * Optional. The fully qualified name (&lt;var&gt;module_name&lt;/var&gt;.&lt;var&gt;class_name&lt;/var&gt;) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris).  Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.  The following code sample provides the Predictor interface:  ```py class Predictor(object): &quot;&quot;&quot;Interface for constructing custom predictors.&quot;&quot;&quot;  def predict(self, instances, **kwargs):     &quot;&quot;&quot;Performs custom prediction.      Instances are the decoded values from the request. They have already     been deserialized from JSON.      Args:         instances: A list of prediction input instances.         **kwargs: A dictionary of keyword args provided as additional             fields on the predict request body.      Returns:         A list of outputs containing the prediction results. This list must         be JSON serializable.     &quot;&quot;&quot;     raise NotImplementedError()  @classmethod def from_path(cls, model_dir):     &quot;&quot;&quot;Creates an instance of Predictor using the given path.      Loading of the predictor should be done in this method.      Args:         model_dir: The local directory that contains the exported model             file along with any additional files uploaded when creating the             version resource.      Returns:         An instance implementing this Predictor class.     &quot;&quot;&quot;     raise NotImplementedError() ```  Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).
     */
    predictionClass?: string | null;
    /**
     * Optional. The version of Python used in prediction. If not set, the default version is &#39;2.7&#39;. Python &#39;3.5&#39; is available when `runtime_version` is set to &#39;1.4&#39; and above. Python &#39;2.7&#39; works with all supported runtime versions.
     */
    pythonVersion?: string | null;
    /**
     * Optional. Configures the request-response pair logging on predictions from this Version.
     */
    requestLoggingConfig?: Schema$GoogleCloudMlV1__RequestLoggingConfig;
    /**
     * Optional. The AI Platform runtime version to use for this deployment. If not set, AI Platform uses the default stable version, 1.0. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).
     */
    runtimeVersion?: string | null;
    /**
     * Optional. Specifies the service account for resource access control.
     */
    serviceAccount?: string | null;
    /**
     * Output only. The state of a version.
     */
    state?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$GoogleIamV1__AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$GoogleIamV1__AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$GoogleIamV1__AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$GoogleIamV1__Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$GoogleType__Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$GoogleIamV1__Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1__AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$GoogleIamV1__Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    version?: number | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1__SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$GoogleIamV1__Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
     */
    updateMask?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1__TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1__TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunning__ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunning__Operation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunning__Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpc__Status;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobuf__Empty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpc__Status {
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
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$GoogleType__Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    jobs: Resource$Projects$Jobs;
    locations: Resource$Projects$Locations;
    models: Resource$Projects$Models;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobs = new Resource$Projects$Jobs(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.models = new Resource$Projects$Models(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }

    /**
     * ml.projects.getConfig
     * @desc Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
     * @alias ml.projects.getConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The project name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(
      params?: Params$Resource$Projects$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__GetConfigResponse>;
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__GetConfigResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getConfig').replace(
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
        createAPIRequest<Schema$GoogleCloudMlV1__GetConfigResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__GetConfigResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.predict
     * @desc Performs prediction on the data in the request. AI Platform implements a custom `predict` verb on top of an HTTP POST method. <p>For details of the request and response format, see the **guide to the [predict request format](/ml-engine/docs/v1/predict-request)**.
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
    predict(
      params?: Params$Resource$Projects$Predict,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleApi__HttpBody>;
    predict(
      params: Params$Resource$Projects$Predict,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApi__HttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>
    ): void;
    predict(
      params: Params$Resource$Projects$Predict,
      callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>
    ): void;
    predict(callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>): void;
    predict(
      paramsOrCallback?:
        | Params$Resource$Projects$Predict
        | BodyResponseCallback<Schema$GoogleApi__HttpBody>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleApi__HttpBody>,
      callback?: BodyResponseCallback<Schema$GoogleApi__HttpBody>
    ): void | GaxiosPromise<Schema$GoogleApi__HttpBody> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Predict;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Predict;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:predict').replace(
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
        createAPIRequest<Schema$GoogleApi__HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleApi__HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getconfig
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Predict extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of a model or a version.  Authorization: requires the `predict` permission on the specified resource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__PredictRequest;
  }

  export class Resource$Projects$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
    cancel(
      params?: Params$Resource$Projects$Jobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobuf__Empty>;
    cancel(
      params: Params$Resource$Projects$Jobs$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Jobs$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Cancel
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void | GaxiosPromise<Schema$GoogleProtobuf__Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
    create(
      params?: Params$Resource$Projects$Jobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Job>;
    create(
      params: Params$Resource$Projects$Jobs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    create(
      params: Params$Resource$Projects$Jobs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Create
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__Job> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
    get(
      params?: Params$Resource$Projects$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Job>;
    get(
      params: Params$Resource$Projects$Jobs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    get(
      params: Params$Resource$Projects$Jobs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__Job> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters);
      }
    }

    /**
     * ml.projects.jobs.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias ml.projects.jobs.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Jobs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Jobs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Jobs$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void | GaxiosPromise<Schema$GoogleIamV1__Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * ml.projects.jobs.list
     * @desc Lists the jobs in the project.  If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
     * @alias ml.projects.jobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': <p><code>gcloud ai-platform jobs list --filter='jobId:census*'</code> <p>List all failed jobs with names that start with 'rnn': <p><code>gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED'</code> <p>For more examples, see the guide to <a href="/ml-engine/docs/tensorflow/monitor-training">monitoring jobs</a>.
     * @param {integer=} params.pageSize Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent Required. The name of the project for which to list jobs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListJobsResponse>;
    list(
      params: Params$Resource$Projects$Jobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Jobs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__ListJobsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudMlV1__ListJobsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListJobsResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.jobs.patch
     * @desc Updates a specific job resource.  Currently the only supported fields to update are `labels`.
     * @alias ml.projects.jobs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The job name.
     * @param {string=} params.updateMask Required. Specifies the path, relative to `Job`, of the field to update. To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your job resource.  For example, to change the labels of a job, the `update_mask` parameter would be specified as `labels`, `etag`, and the `PATCH` request body would specify the new value, as follows:     {       "labels": {          "owner": "Google",          "color": "Blue"       }       "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4"     } If `etag` matches the one on the server, the labels of the job will be replaced with the given ones, and the server end `etag` will be recalculated.  Currently the only supported update masks are `labels` and `etag`.
     * @param {().GoogleCloudMlV1__Job} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Jobs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Job>;
    patch(
      params: Params$Resource$Projects$Jobs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    patch(
      params: Params$Resource$Projects$Jobs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    patch(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Patch
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__Job> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters);
      }
    }

    /**
     * ml.projects.jobs.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
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
    setIamPolicy(
      params?: Params$Resource$Projects$Jobs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Jobs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Jobs$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void | GaxiosPromise<Schema$GoogleIamV1__Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * ml.projects.jobs.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
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
    testIamPermissions(
      params?: Params$Resource$Projects$Jobs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Jobs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Jobs$Testiampermissions,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void | GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Jobs$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the job to cancel.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__CancelJobRequest;
  }
  export interface Params$Resource$Projects$Jobs$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Job;
  }
  export interface Params$Resource$Projects$Jobs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the job to get the description of.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Jobs$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Jobs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': <p><code>gcloud ai-platform jobs list --filter='jobId:census*'</code> <p>List all failed jobs with names that start with 'rnn': <p><code>gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED'</code> <p>For more examples, see the guide to <a href="/ml-engine/docs/tensorflow/monitor-training">monitoring jobs</a>.
     */
    filter?: string;
    /**
     * Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the project for which to list jobs.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Jobs$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The job name.
     */
    name?: string;
    /**
     * Required. Specifies the path, relative to `Job`, of the field to update. To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your job resource.  For example, to change the labels of a job, the `update_mask` parameter would be specified as `labels`, `etag`, and the `PATCH` request body would specify the new value, as follows:     {       "labels": {          "owner": "Google",          "color": "Blue"       }       "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4"     } If `etag` matches the one on the server, the labels of the job will be replaced with the given ones, and the server end `etag` will be recalculated.  Currently the only supported update masks are `labels` and `etag`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Job;
  }
  export interface Params$Resource$Projects$Jobs$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Jobs$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ml.projects.locations.get
     * @desc Get the complete list of CMLE capabilities in a location, along with their location-specific properties.
     * @alias ml.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Location>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Location>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Location>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__Location> {
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

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudMlV1__Location>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Location>(parameters);
      }
    }

    /**
     * ml.projects.locations.list
     * @desc List all locations that provides at least one type of CMLE capability.
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
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListLocationsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListLocationsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListLocationsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListLocationsResponse
      >
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__ListLocationsResponse> {
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

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/locations').replace(
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
        createAPIRequest<Schema$GoogleCloudMlV1__ListLocationsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).
     */
    parent?: string;
  }

  export class Resource$Projects$Models {
    context: APIRequestContext;
    versions: Resource$Projects$Models$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.versions = new Resource$Projects$Models$Versions(this.context);
    }

    /**
     * ml.projects.models.create
     * @desc Creates a model which will later contain one or more versions.  You must add at least one version before you can request predictions from the model. Add versions by calling [projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create).
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
    create(
      params?: Params$Resource$Projects$Models$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Model>;
    create(
      params: Params$Resource$Projects$Models$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void;
    create(
      params: Params$Resource$Projects$Models$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void;
    create(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Create
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__Model> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/models').replace(
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
        createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters);
      }
    }

    /**
     * ml.projects.models.delete
     * @desc Deletes a model.  You can only delete a model if there are no versions in it. You can delete versions by calling [projects.models.versions.delete](/ml-engine/reference/rest/v1/projects.models.versions/delete).
     * @alias ml.projects.models.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Models$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    delete(
      params: Params$Resource$Projects$Models$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Models$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Delete
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void | GaxiosPromise<Schema$GoogleLongrunning__Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.get
     * @desc Gets information about a model, including its name, the description (if set), and the default version (if at least one version of the model has been deployed).
     * @alias ml.projects.models.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Models$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Model>;
    get(
      params: Params$Resource$Projects$Models$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void;
    get(
      params: Params$Resource$Projects$Models$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__Model> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters);
      }
    }

    /**
     * ml.projects.models.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias ml.projects.models.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Models$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Models$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Models$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void | GaxiosPromise<Schema$GoogleIamV1__Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * ml.projects.models.list
     * @desc Lists the models in a project.  Each project can contain multiple models, and each model can have multiple versions.  If there are no models that match the request parameters, the list request returns an empty response body: {}.
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
    list(
      params?: Params$Resource$Projects$Models$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListModelsResponse>;
    list(
      params: Params$Resource$Projects$Models$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Models$List,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListModelsResponse
      >
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__ListModelsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/models').replace(
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
        createAPIRequest<Schema$GoogleCloudMlV1__ListModelsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListModelsResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.patch
     * @desc Updates a specific model resource.  Currently the only supported fields to update are `description` and `default_version.name`.
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
    patch(
      params?: Params$Resource$Projects$Models$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    patch(
      params: Params$Resource$Projects$Models$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Models$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Patch
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void | GaxiosPromise<Schema$GoogleLongrunning__Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
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
    setIamPolicy(
      params?: Params$Resource$Projects$Models$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Models$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Models$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void | GaxiosPromise<Schema$GoogleIamV1__Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * ml.projects.models.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
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
    testIamPermissions(
      params?: Params$Resource$Projects$Models$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Models$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Models$Testiampermissions,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void | GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Models$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Model;
  }
  export interface Params$Resource$Projects$Models$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the model.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Models$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the model.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Models$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Models$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Specifies the subset of models to retrieve.
     */
    filter?: string;
    /**
     * Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the project whose models are to be listed.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Models$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project name.
     */
    name?: string;
    /**
     * Required. Specifies the path, relative to `Model`, of the field to update.  For example, to change the description of a model to "foo" and set its default version to "version_1", the `update_mask` parameter would be specified as `description`, `default_version.name`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo",       "defaultVersion": {         "name":"version_1"       }     }  Currently the supported update masks are `description` and `default_version.name`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Model;
  }
  export interface Params$Resource$Projects$Models$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Models$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__TestIamPermissionsRequest;
  }

  export class Resource$Projects$Models$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ml.projects.models.versions.create
     * @desc Creates a new version of a model from a trained TensorFlow model.  If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call [projects.models.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
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
    create(
      params?: Params$Resource$Projects$Models$Versions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    create(
      params: Params$Resource$Projects$Models$Versions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Models$Versions$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Create
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void | GaxiosPromise<Schema$GoogleLongrunning__Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.versions.delete
     * @desc Deletes a model version.  Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version.  Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
     * @alias ml.projects.models.versions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the version. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Models$Versions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    delete(
      params: Params$Resource$Projects$Models$Versions$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Models$Versions$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Delete
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void | GaxiosPromise<Schema$GoogleLongrunning__Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.versions.get
     * @desc Gets information about a model version.  Models can have multiple versions. You can call [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list) to get the same information that this method returns for all of the versions of a model.
     * @alias ml.projects.models.versions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the version.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Models$Versions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Version>;
    get(
      params: Params$Resource$Projects$Models$Versions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    get(
      params: Params$Resource$Projects$Models$Versions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__Version> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters);
      }
    }

    /**
     * ml.projects.models.versions.list
     * @desc Gets basic information about all the versions of a model.  If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages).  If there are no versions that match the request parameters, the list request returns an empty response body: {}.
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
    list(
      params?: Params$Resource$Projects$Models$Versions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListVersionsResponse>;
    list(
      params: Params$Resource$Projects$Models$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListVersionsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Models$Versions$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListVersionsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListVersionsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListVersionsResponse
      >
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__ListVersionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$GoogleCloudMlV1__ListVersionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListVersionsResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.versions.patch
     * @desc Updates the specified Version resource.  Currently the only update-able fields are `description` and `autoScaling.minNodes`.
     * @alias ml.projects.models.versions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the model.
     * @param {string=} params.updateMask Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty.  For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo"     }  Currently the only supported update mask fields are `description` and `autoScaling.minNodes`.
     * @param {().GoogleCloudMlV1__Version} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Models$Versions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    patch(
      params: Params$Resource$Projects$Models$Versions$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Models$Versions$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Patch
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void | GaxiosPromise<Schema$GoogleLongrunning__Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.versions.setDefault
     * @desc Designates a version to be the default for the model.  The default version is used for prediction requests made against the model that don't specify a version.  The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
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
    setDefault(
      params?: Params$Resource$Projects$Models$Versions$Setdefault,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Version>;
    setDefault(
      params: Params$Resource$Projects$Models$Versions$Setdefault,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    setDefault(
      params: Params$Resource$Projects$Models$Versions$Setdefault,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    setDefault(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    setDefault(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Setdefault
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback?: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void | GaxiosPromise<Schema$GoogleCloudMlV1__Version> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Setdefault;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Setdefault;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setDefault').replace(
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
        createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Models$Versions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the model.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Version;
  }
  export interface Params$Resource$Projects$Models$Versions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the version. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Models$Versions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the version.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Models$Versions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Specifies the subset of versions to retrieve.
     */
    filter?: string;
    /**
     * Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the model for which to list the version.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Models$Versions$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the model.
     */
    name?: string;
    /**
     * Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty.  For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo"     }  Currently the only supported update mask fields are `description` and `autoScaling.minNodes`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Version;
  }
  export interface Params$Resource$Projects$Models$Versions$Setdefault
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__SetDefaultVersionRequest;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ml.projects.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias ml.projects.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobuf__Empty>;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback?: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void | GaxiosPromise<Schema$GoogleProtobuf__Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
      }
    }

    /**
     * ml.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias ml.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void | GaxiosPromise<Schema$GoogleLongrunning__Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
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
    list(
      params?: Params$Resource$Projects$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleLongrunning__ListOperationsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleLongrunning__ListOperationsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      callback: BodyResponseCallback<
        Schema$GoogleLongrunning__ListOperationsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleLongrunning__ListOperationsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$List
        | BodyResponseCallback<
            Schema$GoogleLongrunning__ListOperationsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleLongrunning__ListOperationsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleLongrunning__ListOperationsResponse
      >
    ): void | GaxiosPromise<Schema$GoogleLongrunning__ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunning__ListOperationsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleLongrunning__ListOperationsResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
}
