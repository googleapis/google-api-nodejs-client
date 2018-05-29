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

export namespace genomics_v2alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v2alpha1';
  }

  /**
   * Genomics API
   *
   * Upload, process, query, and search Genomics data in the cloud.
   *
   * @example
   * const {google} = require('googleapis');
   * const genomics = google.genomics('v2alpha1');
   *
   * @namespace genomics
   * @type {Function}
   * @version v2alpha1
   * @variation v2alpha1
   * @param {object=} options Options for Genomics
   */
  export class Genomics {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    pipelines: Resource$Pipelines;
    projects: Resource$Projects;
    workers: Resource$Workers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.pipelines = new Resource$Pipelines(this);
      this.projects = new Resource$Projects(this);
      this.workers = new Resource$Workers(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Carries information about an accelerator that can be attached to a VM.
   */
  export interface Schema$Accelerator {
    /**
     * How many accelerators of this type to attach.
     */
    count?: string;
    /**
     * The accelerator type string (eg nvidia-tesla-k80).  Only NVIDIA GPU
     * accelerators are currently supported.  If an NVIDIA GPU is attached, the
     * required runtime libraries will be made available to all containers under
     * `/usr/local/nvidia`.  The driver version to install must be specified
     * using the NVIDIA driver version parameter on the virtual machine
     * specification.  Note that attaching a GPU increases the worker VM startup
     * time by a few minutes.
     */
    type?: string;
  }
  /**
   * Action specifies a single action that runs a docker container.
   */
  export interface Schema$Action {
    /**
     * If specified, overrides the CMD specified in the container.  If the
     * container also has an ENTRYPOINT the values are used as entrypoint
     * arguments.  Otherwise, they are used as a command and arguments to run
     * inside the container.
     */
    commands?: string[];
    /**
     * If the specified image is hosted on a private registry other than Google
     * Container Registry, the credentials required to pull the image must be
     * specified here as an encrypted secret.  The secret must decrypt to a JSON
     * encoded dictionary containing both `username` and `password` keys.
     */
    credentials?: Schema$Secret;
    /**
     * If specified, overrides the ENTRYPOINT specified in the container.
     */
    entrypoint?: string;
    /**
     * The environment to pass into the container.  This environment is merged
     * with any values specified in the Pipeline message.  These values
     * overwrite any in the Pipeline message.  In addition to the values passed
     * here, a few other values are automatically injected into the environment.
     * These cannot be hidden or overwritten.  `GOOGLE_PIPELINE_FAILED` will be
     * set to &quot;1&quot; if the pipeline has failed because an action has
     * exited with a non-zero status (and did not have the IGNORE_EXIT_STATUS
     * flag set).  This can be used to determine if additional debug or logging
     * actions should execute.  `GOOGLE_LAST_EXIT_STATUS` will be set to the
     * exit status of the last non-background action that executed.  This can be
     * used by workflow engine authors to determine whether an individual action
     * has succeeded or failed.
     */
    environment?: any;
    /**
     * The set of flags to apply to this action.
     */
    flags?: string[];
    /**
     * The URI to pull the container image from.  Note that all images
     * referenced by actions in the pipeline are pulled before the first action
     * runs.  If multiple actions reference the same image, it is only pulled
     * once, ensuring that the same image is used for all actions in a single
     * pipeline.
     */
    imageUri?: string;
    /**
     * Labels to associate with the action.  This field is provided to assist
     * workflow engine authors in identifying actions (for example, to indicate
     * what sort of action they perform: eg. localization, debugging, etc). They
     * are returned in the operation metadata but are otherwise ignored.
     */
    labels?: any;
    /**
     * A list of mounts to make available to the action.  In addition to the
     * values specified here, every action has a special virtual disk mounted
     * under /google that contains log files and other operational components.
     * &lt;ul&gt;   &lt;li&gt;&lt;code&gt;/google/logs&lt;/code&gt;: all logs
     * written during the pipeline   execution are stored here.&lt;/li&gt;
     * &lt;li&gt;&lt;code&gt;/google/logs/output&lt;/code&gt;: the combined
     * standard output and   standard error of all actions run as part of the
     * pipeline   execution.&lt;/li&gt;
     * &lt;li&gt;&lt;code&gt;/google/logs/action/x/stdout&lt;/code&gt;: the
     * complete contents of   each individual action&#39;s standard
     * output&lt;/li&gt;
     * &lt;li&gt;&lt;code&gt;/google/logs/action/x/stderr&lt;/code&gt;: the
     * complete contents of   each individual action&#39;s standard error
     * output&lt;/li&gt; &lt;/ul&gt;
     */
    mounts?: Schema$Mount[];
    /**
     * An optional name for the container.  The container hostname will be set
     * to this name, making it useful for inter-container communication.  The
     * name must contain only upper and lowercase alphanumeric characters and
     * hypens and cannot start with a hypen.
     */
    name?: string;
    /**
     * The PID namespace to run the action inside.  If unspecified, a separate
     * isolated namespace is used.
     */
    pidNamespace?: string;
    /**
     * A map of container to host port mappings for this container.  Note that
     * if the container already specifies exposed ports, the
     * PUBLISH_EXPOSED_PORTS flag should be used instead.  The host port number
     * must be less than 65536.  If it is zero, an unused random port is
     * assigned.  To determine the resulting port number, consult the
     * ContainerStartedEvent in the operation metadata.
     */
    portMappings?: any;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * The parameters to the CheckIn method.
   */
  export interface Schema$CheckInRequest {
    /**
     * The deadline has expired and the worker needs more time.
     */
    deadlineExpired?: Schema$Empty;
    /**
     * A workflow specific event occurred.
     */
    event?: any;
    /**
     * The operation has finished with the given result.
     */
    result?: Schema$Status;
  }
  /**
   * The response to the CheckIn method.
   */
  export interface Schema$CheckInResponse {
    /**
     * The deadline by which the worker must request an extension.  The backend
     * will allow for network transmission time and other delays, but the worker
     * must attempt to transmit the extension request no later than the
     * deadline.
     */
    deadline?: string;
    /**
     * The metadata that describes the operation assigned to the worker.
     */
    metadata?: any;
  }
  /**
   * Describes a Compute Engine resource that is being managed by a running
   * pipeline.
   */
  export interface Schema$ComputeEngine {
    /**
     * The names of the disks that were created for this pipeline.
     */
    diskNames?: string[];
    /**
     * The instance on which the operation is running.
     */
    instanceName?: string;
    /**
     * The machine type of the instance.
     */
    machineType?: string;
    /**
     * The availability zone in which the instance resides.
     */
    zone?: string;
  }
  /**
   * This event is generated when a container starts.
   */
  export interface Schema$ContainerStartedEvent {
    /**
     * The numeric ID of the action that started this container.
     */
    actionId?: number;
    /**
     * The public IP address that can be used to connect to the container.  This
     * field is only populated when at least one port mapping is present.  If
     * the instance was created with a private address this field will be empty
     * even if port mappings exist.
     */
    ipAddress?: string;
    /**
     * The container to host port mappings installed for this container.  This
     * set will contain any ports exposed using the PUBLISH_EXPOSED_PORTS flag
     * as well as any specified in the Action definition.
     */
    portMappings?: any;
  }
  /**
   * This event is generated when a container exits.
   */
  export interface Schema$ContainerStoppedEvent {
    /**
     * The numeric ID of the action that started this container.
     */
    actionId?: number;
    /**
     * The exit status of the container.
     */
    exitStatus?: number;
    /**
     * The tail end of any content written to standard error by the container.
     * To prevent this from being recorded if the action is known to emit large
     * amounts of debugging noise or sensitive information, set the
     * DISABLE_STANDARD_ERROR_CAPTURE flag.  Note that only a small amount of
     * the end of the stream is captured here. The entire stream is stored in
     * the /google/logs directory mounted into each action, and may be copied
     * off the machine as described elsewhere.
     */
    stderr?: string;
  }
  /**
   * This event is generated whenever a resource limitation or transient error
   * delays execution of a pipeline that was otherwise ready to run.
   */
  export interface Schema$DelayedEvent {
    /**
     * A textual description of the cause of the delay.  The string may change
     * without notice since it is often generated by another service (such as
     * Compute Engine).
     */
    cause?: string;
    /**
     * If the delay was caused by a resource shortage, this field lists the
     * Compute Engine metrics that are preventing this operation from running
     * (for example, CPUS or INSTANCES).  If the particular metric is not known,
     * a single UNKNOWN metric will be present.
     */
    metrics?: string[];
  }
  /**
   * Carries information about a disk that can be attached to a VM.
   */
  export interface Schema$Disk {
    /**
     * A user supplied name for the disk, used when mounting it into actions.
     * The name must contain only upper and lowercase alphanumeric characters
     * and hypens and cannot start with a hypen.
     */
    name?: string;
    /**
     * The size, in gigabytes, of the disk to attach.  Note that this value is
     * not configurable for some disk types such as local-ssd.  If the size is
     * not specified, a size of at least 500gb is used to ensure reasonable I/O
     * performance.
     */
    sizeGb?: number;
    /**
     * An optional image to put on the disk before attaching it to the VM.
     */
    sourceImage?: string;
    /**
     * The Compute Engine disk type.  If unspecified, &#39;standard-pd&#39; is
     * used.
     */
    type?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Event carries information about events that occur during pipeline
   * execution.
   */
  export interface Schema$Event {
    /**
     * A human readable description of the event.  Note that these strings may
     * change at any time without notice.  Any application logic must use the
     * information in the details field.
     */
    description?: string;
    /**
     * Machine readable details about the event.
     */
    details?: any;
    /**
     * The time that the event occurred.
     */
    timestamp?: string;
  }
  /**
   * This event is generated when the execution of a pipeline has failed.  Note
   * that other events may continue to occur after this event.
   */
  export interface Schema$FailedEvent {
    /**
     * The human readable description of the cause of the failure.
     */
    cause?: string;
    /**
     * The Google standard error code that best describes this failure.
     */
    code?: string;
  }
  /**
   * The read group set import response.
   */
  export interface Schema$ImportReadGroupSetsResponse {
    /**
     * IDs of the read group sets that were created.
     */
    readGroupSetIds?: string[];
  }
  /**
   * The variant data import response.
   */
  export interface Schema$ImportVariantsResponse {
    /**
     * IDs of the call sets created during the import.
     */
    callSetIds?: string[];
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Metadata carries information about the pipeline execution that is returned
   * in the long running operation&#39;s metadata field.
   */
  export interface Schema$Metadata {
    /**
     * The time that the operation was created by the API.
     */
    createTime?: string;
    /**
     * The time at which execution was completed and resources were cleaned up.
     */
    endTime?: string;
    /**
     * The list of events that have happened so far during the execution of this
     * operation.
     */
    events?: Schema$Event[];
    /**
     * The user defined labels associated with this operation.
     */
    labels?: any;
    /**
     * The pipeline this operation represents.
     */
    pipeline?: Schema$Pipeline;
    /**
     * The first time at which resources were allocated to execute the pipeline.
     */
    startTime?: string;
  }
  /**
   * Mount carries information about a particular disk mount inside a container.
   */
  export interface Schema$Mount {
    /**
     * The name of the disk to mount, as specified in the resources section.
     */
    disk?: string;
    /**
     * The path to mount the disk at inside the container.
     */
    path?: string;
    /**
     * If true, the disk is mounted read only inside the container.
     */
    readOnly?: boolean;
  }
  /**
   * VM networking options.
   */
  export interface Schema$Network {
    /**
     * The network name to attach the VM&#39;s network interface to.  If
     * unspecified, the global default network is used.
     */
    name?: string;
    /**
     * If set to true, do not attach a public IP address to the VM.  Note that
     * without an public IP address, additional configuration is required to
     * allow the VM to access Google services.  See
     * https://cloud.google.com/vpc/docs/configure-private-google-access for
     * more information.
     */
    usePrivateAddress?: boolean;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * An OperationMetadata or Metadata object. This will always be returned
     * with the Operation.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. For example&amp;#58;
     * `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
     */
    name?: string;
    /**
     * If importing ReadGroupSets, an ImportReadGroupSetsResponse is returned.
     * If importing Variants, an ImportVariantsResponse is returned. For
     * pipelines and exports, an Empty response is returned.
     */
    response?: any;
  }
  /**
   * An event that occurred during an Operation.
   */
  export interface Schema$OperationEvent {
    /**
     * Required description of event.
     */
    description?: string;
    /**
     * Optional time of when event finished. An event can have a start time and
     * no finish time. If an event has a finish time, there must be a start
     * time.
     */
    endTime?: string;
    /**
     * Optional time of when event started.
     */
    startTime?: string;
  }
  /**
   * Metadata describing an Operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * This field is deprecated. Use `labels` instead. Optionally provided by
     * the caller when submitting the request that creates the operation.
     */
    clientId?: string;
    /**
     * The time at which the job was submitted to the Genomics service.
     */
    createTime?: string;
    /**
     * The time at which the job stopped running.
     */
    endTime?: string;
    /**
     * Optional event messages that were generated during the job&#39;s
     * execution. This also contains any warnings that were generated during
     * import or export.
     */
    events?: Schema$OperationEvent[];
    /**
     * Optionally provided by the caller when submitting the request that
     * creates the operation.
     */
    labels?: any;
    /**
     * The Google Cloud Project in which the job is scoped.
     */
    projectId?: string;
    /**
     * The original request that started the operation. Note that this will be
     * in current version of the API. If the operation was started with v1beta2
     * API and a GetOperation is performed on v1 API, a v1 request will be
     * returned.
     */
    request?: any;
    /**
     * Runtime metadata on this Operation.
     */
    runtimeMetadata?: any;
    /**
     * The time at which the job began to run.
     */
    startTime?: string;
  }
  /**
   * The Pipeline object describes a series of actions to execute, expressed as
   * docker containers.
   */
  export interface Schema$Pipeline {
    /**
     * The list of actions to execute, in the order they are specified.
     */
    actions?: Schema$Action[];
    /**
     * The environment to pass into every action.  Each action may also specify
     * additional environment variables but cannot delete an entry from this map
     * (though they may overwrite it with a different value).
     */
    environment?: any;
    /**
     * The resources required for execution.
     */
    resources?: Schema$Resources;
  }
  /**
   * This event is generated when the worker starts pulling an image.
   */
  export interface Schema$PullStartedEvent {
    /**
     * The URI of the image that was pulled.
     */
    imageUri?: string;
  }
  /**
   * This event is generated when the worker stops pulling an image.
   */
  export interface Schema$PullStoppedEvent {
    /**
     * The URI of the image that was pulled.
     */
    imageUri?: string;
  }
  /**
   * The system resources for the pipeline run.  At least one zone or region
   * must be specified or the pipeline run will fail.
   */
  export interface Schema$Resources {
    /**
     * The customer project ID to allocate resources in.
     */
    projectId?: string;
    /**
     * The list of regions allowed for VM allocation.  If set, the zones field
     * must not be set.
     */
    regions?: string[];
    /**
     * The virtual machine specification.
     */
    virtualMachine?: Schema$VirtualMachine;
    /**
     * The list of zones allowed for VM allocation.  If set, the regions field
     * must not be set.
     */
    zones?: string[];
  }
  /**
   * The arguments to the RunPipeline method.  The requesting user must have the
   * iam.serviceAccounts.actAs permission for the Google Genomics Service
   * Account or the request will fail.
   */
  export interface Schema$RunPipelineRequest {
    /**
     * User defined labels to associate with the returned operation.  These
     * labels are not propagated to any Google Cloud Platform resources used by
     * the operation, and may be modified at any time.  To associate labels with
     * resources created while executing the operation, see the appropriate
     * resource message (i.e., VirtualMachine).
     */
    labels?: any;
    /**
     * The description of the pipeline to run.
     */
    pipeline?: Schema$Pipeline;
  }
  /**
   * Runtime metadata that will be populated in the runtimeMetadata field of the
   * Operation associated with a RunPipeline execution.
   */
  export interface Schema$RuntimeMetadata {
    /**
     * Execution information specific to Google Compute Engine.
     */
    computeEngine?: Schema$ComputeEngine;
  }
  /**
   * Secret holds encrypted information that is only decrypted and stored in RAM
   * by the worker VM when running the pipeline.
   */
  export interface Schema$Secret {
    /**
     * The value of the cipherText response from the `encrypt` method.
     */
    cipherText?: string;
    /**
     * The name of the Cloud KMS key that will be used to decrypt the secret
     * value.  The VM service account must have the required permissions and
     * authentication scopes to invoke the `decrypt` method on the specified
     * key.
     */
    keyName?: string;
  }
  /**
   * Carries information about a Google Cloud Service Account.
   */
  export interface Schema$ServiceAccount {
    /**
     * Email address of the service account.  If not specified, the default
     * compute engine service account for the project will be used.
     */
    email?: string;
    /**
     * List of scopes to be enabled for this service account on the VM, in
     * addition to the Google Genomics API scope.
     */
    scopes?: string[];
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * This event is generated when the execution of a container results in a
   * non-zero exit status that was not otherwise ignored.  Execution will
   * continue, but only actions that are flagged as ALWAYS_RUN will be executed:
   * other actions will be skipped.
   */
  export interface Schema$UnexpectedExitStatusEvent {
    /**
     * The numeric ID of the action that started the container.
     */
    actionId?: number;
    /**
     * The exit status of the container.
     */
    exitStatus?: number;
  }
  /**
   * Carries information about a Compute Engine VM resource.
   */
  export interface Schema$VirtualMachine {
    /**
     * The list of accelerators to attach to the VM.
     */
    accelerators?: Schema$Accelerator[];
    /**
     * The size of the boot disk, in gigabytes. The boot disk must be large
     * enough to accommodate all of the docker images from each action in the
     * pipeline at the same time. If not specified, a small but reasonable
     * default value is used.
     */
    bootDiskSizeGb?: number;
    /**
     * The host operating system image to use.  At present, only Container
     * Optimized OS images may be used.  The default value is
     * &quot;projects/cos-cloud/global/images/family/cos-stable&quot; which
     * selects the latest stable release of Container Optimized OS.  This option
     * is provided to allow testing against the beta release of the operating
     * system to ensure that the new version does not interact negatively with
     * production pipelines.  To test a pipeline against the beta release of
     * COS, use the value
     * &quot;projects/cos-cloud/global/images/family/cos-beta&quot;.
     */
    bootImage?: string;
    /**
     * The CPU platform to request.  An instance based on a newer platform may
     * be allocated but never one with less capabilities.  The value of this
     * parameter must be a valid Compute Engine CPU platform name (such as
     * &quot;Intel Skylake&quot;).  This parameter is only useful for carefully
     * optimized work loads where the CPU platform has a significant impact. For
     * more information about the effect of this parameter, please visit
     * https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform.
     */
    cpuPlatform?: string;
    /**
     * The list of disks to create and attach to the VM.
     */
    disks?: Schema$Disk[];
    /**
     * Optional set of labels to apply to the VM and any attached disk
     * resources. These labels must adhere to the name and value restrictions on
     * VM labels imposed by Compute Engine.  These labels are applied at
     * creation time to the VM and are applied on a best-effort basis to
     * attached disk resources shortly after VM creation.
     */
    labels?: any;
    /**
     * The machine type of the virtual machine to create.  Must be the short
     * name of a standard machine type (such as &quot;n1-standard-1&quot;) or a
     * custom machine type (such as &quot;custom-1-4096&quot;).
     */
    machineType?: string;
    /**
     * The VM network configuration.
     */
    network?: Schema$Network;
    /**
     * The NVIDIA driver version to use when attaching an NVIDIA GPU
     * accelerator. The version specified here must be compatible with the GPU
     * libraries contained in the container being executed, and must be one of
     * the drivers hosted in the &#39;nvidia-drivers-us-public&#39; bucket on
     * Google Cloud Storage.
     */
    nvidiaDriverVersion?: string;
    /**
     * If true, allocate a preemptible VM.
     */
    preemptible?: boolean;
    /**
     * The service account to install on the VM.  This account does not need any
     * permissions other than those required by the pipeline.
     */
    serviceAccount?: Schema$ServiceAccount;
  }
  /**
   * This event is generated once a worker VM has been assigned to run the
   * pipeline.
   */
  export interface Schema$WorkerAssignedEvent {
    /**
     * The worker&#39;s instance name.
     */
    instance?: string;
    /**
     * The zone the worker is running in.
     */
    zone?: string;
  }
  /**
   * This event is generated when the worker VM that was assigned to the
   * pipeline has been released (i.e., deleted).
   */
  export interface Schema$WorkerReleasedEvent {
    /**
     * The worker&#39;s instance name.
     */
    instance?: string;
    /**
     * The zone the worker was running in.
     */
    zone?: string;
  }


  export class Resource$Pipelines {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.pipelines.run
     * @desc Runs a pipeline.  **Note:** In order to use this method, the
     * Genomics Service Agent must have access to your project.  This is done
     * automatically when the Genomics API is first enabled, but if you delete
     * this permission, or if you have already enabled the Genomics API prior to
     * the launch of the v2alpha1 API, you must disable and re-enable the API to
     * grant the Genomics Service Agent the required permissions.  [1]:
     * /genomics/gsa
     * @alias genomics.pipelines.run
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().RunPipelineRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run(params?: Params$Resource$Pipelines$Run,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    run(params: Params$Resource$Pipelines$Run,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    run(params: Params$Resource$Pipelines$Run,
        callback: BodyResponseCallback<Schema$Operation>): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(paramsOrCallback?: Params$Resource$Pipelines$Run|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pipelines$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pipelines$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2alpha1/pipelines:run')
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Pipelines$Run {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$RunPipelineRequest;
  }


  export class Resource$Projects {
    root: Genomics;
    operations: Resource$Projects$Operations;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
      this.operations = new Resource$Projects$Operations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Operations {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.projects.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation. The
     * server makes a best effort to cancel the operation, but success is not
     * guaranteed. Clients may use Operations.GetOperation or
     * Operations.ListOperations to check whether the cancellation succeeded or
     * the operation completed despite cancellation.
     * @alias genomics.projects.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
        params?: Params$Resource$Projects$Operations$Cancel,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    cancel(
        params: Params$Resource$Projects$Operations$Cancel,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        params: Params$Resource$Projects$Operations$Cancel,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Projects$Operations$Cancel|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Operations$Cancel;
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2alpha1/{+name}:cancel')
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias genomics.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Projects$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Projects$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Operations$Get;
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * genomics.projects.operations.list
     * @desc Lists operations that match the specified filter in the request.
     * @alias genomics.projects.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A string for filtering Operations. In v2alpha1, the following filter fields are supported&#58;  * createTime&#58; The time this job was created * events&#58; The set of event (names) that have occurred while running   the pipeline.  The &#58; operator can be used to determine if a   particular event has occurred. * error&#58; If the pipeline is running, this value is NULL.  Once the   pipeline finishes, the value is the standard Google error code. * labels.key or labels."key with space" where key is a label key.  In v1 and v1alpha2, the following filter fields are supported&#58;  * projectId&#58; Required. Corresponds to   OperationMetadata.projectId. * createTime&#58; The time this job was created, in seconds from the   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`   operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only   one status may be specified. * labels.key where key is a label key.  Examples&#58;  * `projectId = my-project AND createTime >= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project AND labels.color = *` * `projectId = my-project AND labels.color = red`
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The maximum number of results to return. If unspecified, defaults to 256. The maximum value is 2048.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Operations$List,
        options?: MethodOptions): AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Projects$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Projects$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Operations$List;
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Cancel {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A string for filtering Operations. In v2alpha1, the following filter
     * fields are supported&#58;  * createTime&#58; The time this job was
     * created * events&#58; The set of event (names) that have occurred while
     * running   the pipeline.  The &#58; operator can be used to determine if a
     * particular event has occurred. * error&#58; If the pipeline is running,
     * this value is NULL.  Once the   pipeline finishes, the value is the
     * standard Google error code. * labels.key or labels."key with space" where
     * key is a label key.  In v1 and v1alpha2, the following filter fields are
     * supported&#58;  * projectId&#58; Required. Corresponds to
     * OperationMetadata.projectId. * createTime&#58; The time this job was
     * created, in seconds from the
     * [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`
     * operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or
     * `CANCELED`. Only   one status may be specified. * labels.key where key is
     * a label key.  Examples&#58;  * `projectId = my-project AND createTime >=
     * 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND
     * createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project
     * AND labels.color = *` * `projectId = my-project AND labels.color = red`
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The maximum number of results to return. If unspecified, defaults to 256.
     * The maximum value is 2048.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }



  export class Resource$Workers {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.workers.checkIn
     * @desc The worker uses this method to retrieve the assigned operation and
     * provide periodic status updates.
     * @alias genomics.workers.checkIn
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The worker id, assigned when it was created.
     * @param {().CheckInRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkIn(params?: Params$Resource$Workers$Checkin, options?: MethodOptions):
        AxiosPromise<Schema$CheckInResponse>;
    checkIn(
        params: Params$Resource$Workers$Checkin,
        options: MethodOptions|BodyResponseCallback<Schema$CheckInResponse>,
        callback: BodyResponseCallback<Schema$CheckInResponse>): void;
    checkIn(
        params: Params$Resource$Workers$Checkin,
        callback: BodyResponseCallback<Schema$CheckInResponse>): void;
    checkIn(callback: BodyResponseCallback<Schema$CheckInResponse>): void;
    checkIn(
        paramsOrCallback?: Params$Resource$Workers$Checkin|
        BodyResponseCallback<Schema$CheckInResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CheckInResponse>,
        callback?: BodyResponseCallback<Schema$CheckInResponse>):
        void|AxiosPromise<Schema$CheckInResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Workers$Checkin;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Workers$Checkin;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2alpha1/workers/{id}:checkIn')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CheckInResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CheckInResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Workers$Checkin {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The worker id, assigned when it was created.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckInRequest;
  }
}
