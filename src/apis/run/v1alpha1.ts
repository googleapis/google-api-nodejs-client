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

export namespace run_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
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
   * Cloud Run Admin API
   *
   * Deploy and manage user provided container images that scale automatically based on HTTP traffic.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const run = google.run('v1alpha1');
   * ```
   */
  export class Run {
    context: APIRequestContext;
    namespaces: Resource$Namespaces;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.namespaces = new Resource$Namespaces(this.context);
    }
  }

  /**
   * Adds and removes POSIX capabilities from running containers.
   */
  export interface Schema$Capabilities {
    /**
     * Added capabilities +optional
     */
    add?: string[] | null;
    /**
     * Removed capabilities +optional
     */
    drop?: string[] | null;
  }
  /**
   * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
   */
  export interface Schema$ConfigMapEnvSource {
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported Cloud Run for Anthos: supported The ConfigMap to select from.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run for Anthos: supported Specify whether the ConfigMap must be defined +optional
     */
    optional?: boolean | null;
  }
  /**
   * Cloud Run fully managed: not supported Cloud Run on GKE: supported Selects a key from a ConfigMap.
   */
  export interface Schema$ConfigMapKeySelector {
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported The key to select.
     */
    key?: string | null;
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported The ConfigMap to select from.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Specify whether the ConfigMap or its key must be defined +optional
     */
    optional?: boolean | null;
  }
  /**
   * Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
   */
  export interface Schema$ConfigMapVolumeSource {
    /**
     * Mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number | null;
    /**
     * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.
     */
    items?: Schema$KeyToPath[];
    /**
     * Name of the config.
     */
    name?: string | null;
    /**
     * Specify whether the Secret or its keys must be defined.
     */
    optional?: boolean | null;
  }
  /**
   * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
   */
  export interface Schema$Container {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell +optional
     */
    args?: string[] | null;
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell +optional
     */
    command?: string[] | null;
    /**
     * List of environment variables to set in the container. Cannot be updated. +optional
     */
    env?: Schema$EnvVar[];
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. +optional
     */
    envFrom?: Schema$EnvFromSource[];
    /**
     * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images
     */
    image?: string | null;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images +optional
     */
    imagePullPolicy?: string | null;
    /**
     * Actions that the management system should take in response to container lifecycle events. Cannot be updated. +optional
     */
    lifecycle?: Schema$Lifecycle;
    /**
     * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    livenessProbe?: Schema$Probe;
    /**
     * Name of the container specified as a DNS_LABEL. Each container must have a unique name (DNS_LABEL). Cannot be updated.
     */
    name?: string | null;
    /**
     * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. +optional
     */
    ports?: Schema$ContainerPort[];
    /**
     * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    readinessProbe?: Schema$Probe;
    /**
     * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources +optional
     */
    resources?: Schema$ResourceRequirements;
    /**
     * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ +optional
     */
    securityContext?: Schema$SecurityContext;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. +optional
     */
    stdin?: boolean | null;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false +optional
     */
    stdinOnce?: boolean | null;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. +optional
     */
    terminationMessagePath?: string | null;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. +optional
     */
    terminationMessagePolicy?: string | null;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. +optional
     */
    tty?: boolean | null;
    /**
     * volumeDevices is the list of block devices to be used by the container. This is an alpha feature and may change in the future. +optional
     */
    volumeDevices?: Schema$VolumeDevice[];
    /**
     * Pod volumes to mount into the container's filesystem. Cannot be updated. +optional
     */
    volumeMounts?: Schema$VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. +optional
     */
    workingDir?: string | null;
  }
  /**
   * ContainerPort represents a network port in a single container.
   */
  export interface Schema$ContainerPort {
    /**
     * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
     */
    containerPort?: number | null;
    /**
     * What host IP to bind the external port to. +optional
     */
    hostIP?: string | null;
    /**
     * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. +optional
     */
    hostPort?: number | null;
    /**
     * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. +optional
     */
    name?: string | null;
    /**
     * Protocol for port. Must be UDP or TCP. Defaults to "TCP". +optional
     */
    protocol?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * EnvFromSource represents the source of a set of ConfigMaps
   */
  export interface Schema$EnvFromSource {
    /**
     * The ConfigMap to select from +optional
     */
    configMapRef?: Schema$ConfigMapEnvSource;
    /**
     * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. +optional
     */
    prefix?: string | null;
    /**
     * The Secret to select from +optional
     */
    secretRef?: Schema$SecretEnvSource;
  }
  /**
   * EnvVar represents an environment variable present in a Container.
   */
  export interface Schema$EnvVar {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     */
    name?: string | null;
    /**
     * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". +optional
     */
    value?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Source for the environment variable's value. Cannot be used if value is not empty. +optional
     */
    valueFrom?: Schema$EnvVarSource;
  }
  /**
   * Cloud Run fully managed: not supported Cloud Run on GKE: supported EnvVarSource represents a source for the value of an EnvVar.
   */
  export interface Schema$EnvVarSource {
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Selects a key of a ConfigMap. +optional
     */
    configMapKeyRef?: Schema$ConfigMapKeySelector;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Selects a key of a secret in the pod's namespace +optional
     */
    secretKeyRef?: Schema$SecretKeySelector;
  }
  /**
   * ExecAction describes a "run in container" action.
   */
  export interface Schema$ExecAction {
    /**
     * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. +optional
     */
    command?: string[] | null;
  }
  /**
   * Handler defines a specific action that should be taken
   */
  export interface Schema$Handler {
    /**
     * One and only one of the following should be specified. Exec specifies the action to take. +optional
     */
    exec?: Schema$ExecAction;
    /**
     * HTTPGet specifies the http request to perform. +optional
     */
    httpGet?: Schema$HTTPGetAction;
    /**
     * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
     */
    tcpSocket?: Schema$TCPSocketAction;
  }
  /**
   * HTTPGetAction describes an action based on HTTP Get requests.
   */
  export interface Schema$HTTPGetAction {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. +optional
     */
    host?: string | null;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers. +optional
     */
    httpHeaders?: Schema$HTTPHeader[];
    /**
     * Path to access on the HTTP server. +optional
     */
    path?: string | null;
    /**
     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port?: Schema$IntOrString;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP. +optional
     */
    scheme?: string | null;
  }
  /**
   * HTTPHeader describes a custom header to be used in HTTP probes
   */
  export interface Schema$HTTPHeader {
    /**
     * The header field name
     */
    name?: string | null;
    /**
     * The header field value
     */
    value?: string | null;
  }
  /**
   * InstanceSpec is a description of an instance.
   */
  export interface Schema$InstanceSpec {
    /**
     * Optional. Optional duration in seconds the instance may be active relative to StartTime before the system will actively try to mark it failed and kill associated containers. If set to zero, the system will never attempt to kill an instance based on time. Otherwise, value must be a positive integer. +optional
     */
    activeDeadlineSeconds?: string | null;
    /**
     * Optional. List of containers belonging to the instance. We disallow a number of fields on this Container. Only a single container may be provided.
     */
    containers?: Schema$Container[];
    /**
     * Optional. Restart policy for all containers within the instance. Allowed values are: - OnFailure: Instances will always be restarted on failure if the backoffLimit has not been reached. - Never: Instances are never restarted and all failures are permanent. Cannot be used if backoffLimit is set. +optional
     */
    restartPolicy?: string | null;
    /**
     * Optional. Email address of the IAM service account associated with the instance of a Job. The service account represents the identity of the running instance, and determines what permissions the instance has. If not provided, the instance will use the project's default service account. +optional
     */
    serviceAccountName?: string | null;
    /**
     * Optional. Optional duration in seconds the instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates delete immediately. The grace period is the duration in seconds after the processes running in the instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. +optional
     */
    terminationGracePeriodSeconds?: string | null;
    /**
     * Optional. List of volumes that can be mounted by containers belonging to the instance. More info: https://kubernetes.io/docs/concepts/storage/volumes +optional
     */
    volumes?: Schema$Volume[];
  }
  /**
   * Instance represents the status of an instance of a Job.
   */
  export interface Schema$InstanceStatus {
    /**
     * Optional. Represents time when the instance was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    completionTime?: string | null;
    /**
     * Optional. The number of times this instance exited with code \> 0; +optional
     */
    failed?: number | null;
    /**
     * Required. Index of the instance, unique per Job, and beginning at 0.
     */
    index?: number | null;
    /**
     * Optional. Last exit code seen for this instance. +optional
     */
    lastExitCode?: number | null;
    /**
     * Optional. The number of times this instance was restarted. Instances are restarted according the restartPolicy configured in the Job template. +optional
     */
    restarted?: number | null;
    /**
     * Optional. Represents time when the instance was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    startTime?: string | null;
    /**
     * Optional. The number of times this instance exited with code == 0. +optional
     */
    succeeded?: number | null;
  }
  /**
   * InstanceTemplateSpec describes the data an instance should have when created from a template.
   */
  export interface Schema$InstanceTemplateSpec {
    /**
     * Optional. Specification of the desired behavior of the instance. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status +optional
     */
    spec?: Schema$InstanceSpec;
  }
  /**
   * IntOrString is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.
   */
  export interface Schema$IntOrString {
    /**
     * The int value.
     */
    intVal?: number | null;
    /**
     * The string value.
     */
    strVal?: string | null;
    /**
     * The type of the value.
     */
    type?: number | null;
  }
  /**
   * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
   */
  export interface Schema$Job {
    /**
     * Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources +optional
     */
    apiVersion?: string | null;
    /**
     * Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds +optional
     */
    kind?: string | null;
    /**
     * Optional. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata +optional
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Optional. Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status +optional
     */
    spec?: Schema$JobSpec;
    /**
     * Optional. Current status of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status +optional
     */
    status?: Schema$JobStatus;
  }
  /**
   * JobCondition defines a readiness condition for a Revision.
   */
  export interface Schema$JobCondition {
    /**
     * Optional. Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * Optional. Human readable message indicating details about the current status.
     */
    message?: string | null;
    /**
     * Optional. One-word CamelCase reason for the condition's last transition.
     */
    reason?: string | null;
    /**
     * Optional. How to interpret failures of this condition, one of Error, Warning, Info
     */
    severity?: string | null;
    /**
     * Required. Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * Required. Type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include: * "Completed": True when the Job has successfully completed. * "Started": True when the Job has successfully started running. * "ResourcesAvailable": True when underlying resources have been provisioned.
     */
    type?: string | null;
  }
  /**
   * JobSpec describes how the job execution will look like.
   */
  export interface Schema$JobSpec {
    /**
     * Optional. Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it. If set to zero, the system will never attempt to terminate the job based on time. Otherwise, the value must be positive integer. +optional
     */
    activeDeadlineSeconds?: string | null;
    /**
     * Optional. Specifies the number of retries per instance, before marking this job failed. If set to zero, instances will never retry on failure. +optional
     */
    backoffLimit?: number | null;
    /**
     * Optional. Specifies the desired number of successfully finished instances the job should be run with. Setting to 1 means that parallelism is limited to 1 and the success of that instance signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
     */
    completions?: number | null;
    /**
     * Optional. Specifies the maximum desired number of instances the job should run at any given time. Must be <= completions. The actual number of instances running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
     */
    parallelism?: number | null;
    /**
     * Optional. Describes the instance that will be created when executing a job.
     */
    template?: Schema$InstanceTemplateSpec;
    /**
     * Optional. ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is set to zero, the Job won't be automatically deleted. +optional
     */
    ttlSecondsAfterFinished?: number | null;
  }
  /**
   * JobStatus represents the current state of a Job.
   */
  export interface Schema$JobStatus {
    /**
     * Optional. The number of actively running instances. +optional
     */
    active?: number | null;
    /**
     * Optional. Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    completionTime?: string | null;
    /**
     * Optional. The latest available observations of a job's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
     */
    conditions?: Schema$JobCondition[];
    /**
     * Optional. The number of instances which reached phase Failed. +optional
     */
    failed?: number | null;
    /**
     * Optional. ImageDigest holds the resolved digest for the image specified within .Spec.Template.Spec.Container.Image. The digest is resolved during the creation of the Job. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
     */
    imageDigest?: string | null;
    /**
     * Optional. Status of completed, failed, and running instances. +optional
     */
    instances?: Schema$InstanceStatus[];
    /**
     * Optional. The 'generation' of the job that was last processed by the controller.
     */
    observedGeneration?: number | null;
    /**
     * Optional. Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    startTime?: string | null;
    /**
     * Optional. The number of instances which reached phase Succeeded. +optional
     */
    succeeded?: number | null;
  }
  /**
   * Maps a string key to a path within a volume.
   */
  export interface Schema$KeyToPath {
    /**
     * The key to project.
     */
    key?: string | null;
    /**
     * Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. +optional
     */
    mode?: number | null;
    /**
     * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
     */
    path?: string | null;
  }
  /**
   * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
   */
  export interface Schema$Lifecycle {
    /**
     * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks +optional
     */
    postStart?: Schema$Handler;
    /**
     * PreStop is called immediately before a container is terminated. The container is terminated after the handler completes. The reason for termination is passed to the handler. Regardless of the outcome of the handler, the container is eventually terminated. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks +optional
     */
    preStop?: Schema$Handler;
  }
  /**
   * ListJobsResponse is a list of Jobs resources.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The API version for this call such as "run.googleapis.com/v1alpha1".
     */
    apiVersion?: string | null;
    /**
     * List of Jobs.
     */
    items?: Schema$Job[];
    /**
     * The kind of this resource, in this case "JobsList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this jobs list.
     */
    metadata?: Schema$ListMeta;
    /**
     * This field is equivalent to the metadata.continue field and is provided as a convenience for compatibility with https://google.aip.dev/158. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The metadata.resourceVersion field returned when using this field will be identical to the value in the first response.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta\}.
   */
  export interface Schema$ListMeta {
    /**
     * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response.
     */
    continue?: string | null;
    /**
     * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional
     */
    resourceVersion?: string | null;
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only. +optional
     */
    selfLink?: string | null;
  }
  /**
   * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
   */
  export interface Schema$LocalObjectReference {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string | null;
  }
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  export interface Schema$ObjectMeta {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations +optional
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Not currently supported by Cloud Run. The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. +optional
     */
    clusterName?: string | null;
    /**
     * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC. Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata +optional
     */
    creationTimestamp?: string | null;
    /**
     * Not currently supported by Cloud Run. Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. +optional
     */
    deletionGracePeriodSeconds?: number | null;
    /**
     * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested. Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata +optional
     */
    deletionTimestamp?: string | null;
    /**
     * Not currently supported by Cloud Run. Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. +optional +patchStrategy=merge
     */
    finalizers?: string[] | null;
    /**
     * Not currently supported by Cloud Run. GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server. If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header). Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency +optional string generateName = 2;
     */
    generateName?: string | null;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. +optional
     */
    generation?: number | null;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. More info: http://kubernetes.io/docs/user-guide/labels +optional
     */
    labels?: {[key: string]: string} | null;
    /**
     * Name must be unique within a namespace, within a Cloud Run region. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names +optional
     */
    name?: string | null;
    /**
     * Namespace defines the space within each name must be unique, within a Cloud Run region. In Cloud Run the namespace must be equal to either the project ID or project number.
     */
    namespace?: string | null;
    /**
     * List of objects that own this object. If ALL objects in the list have been deleted, this object will be garbage collected. +optional
     */
    ownerReferences?: Schema$OwnerReference[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources. Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional
     */
    resourceVersion?: string | null;
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only. +optional string selfLink = 4;
     */
    selfLink?: string | null;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations. Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids +optional
     */
    uid?: string | null;
  }
  /**
   * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
   */
  export interface Schema$OwnerReference {
    /**
     * API version of the referent.
     */
    apiVersion?: string | null;
    /**
     * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional
     */
    blockOwnerDeletion?: boolean | null;
    /**
     * If true, this reference points to the managing controller. +optional
     */
    controller?: boolean | null;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
     */
    name?: string | null;
    /**
     * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string | null;
  }
  /**
   * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
   */
  export interface Schema$Probe {
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. +optional
     */
    failureThreshold?: number | null;
    /**
     * The action taken to determine the health of a container
     */
    handler?: Schema$Handler;
    /**
     * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    initialDelaySeconds?: number | null;
    /**
     * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. +optional
     */
    periodSeconds?: number | null;
    /**
     * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1. +optional
     */
    successThreshold?: number | null;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    timeoutSeconds?: number | null;
  }
  /**
   * The view model of a single quantity, e.g. "800 MiB". Corresponds to https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/generated.proto
   */
  export interface Schema$Quantity {
    /**
     * Stringified version of the quantity, e.g., "800 MiB".
     */
    string?: string | null;
  }
  /**
   * ResourceRequirements describes the compute resource requirements.
   */
  export interface Schema$ResourceRequirements {
    /**
     * Limits describes the maximum amount of compute resources allowed. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    limits?: {[key: string]: string} | null;
    /**
     * Limits describes the maximum amount of compute resources allowed. This is a temporary field created to migrate away from the map limits field. This is done to become compliant with k8s style API. This field is deprecated in favor of limits field.
     */
    limitsInMap?: {[key: string]: Schema$Quantity} | null;
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    requests?: {[key: string]: string} | null;
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. This is a temporary field created to migrate away from the map requests field. This is done to become compliant with k8s style API. This field is deprecated in favor of requests field.
     */
    requestsInMap?: {[key: string]: Schema$Quantity} | null;
  }
  /**
   * SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
   */
  export interface Schema$SecretEnvSource {
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported Cloud Run for Anthos: supported The Secret to select from.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run for Anthos: supported Specify whether the Secret must be defined +optional
     */
    optional?: boolean | null;
  }
  /**
   * Cloud Run fully managed: not supported Cloud Run on GKE: supported SecretKeySelector selects a key of a Secret.
   */
  export interface Schema$SecretKeySelector {
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported The key of the secret to select from. Must be a valid secret key.
     */
    key?: string | null;
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported The name of the secret in the pod's namespace to select from.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported Cloud Run on GKE: supported Specify whether the Secret or its key must be defined +optional
     */
    optional?: boolean | null;
  }
  /**
   * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
   */
  export interface Schema$SecretVolumeSource {
    /**
     * Mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number | null;
    /**
     * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.
     */
    items?: Schema$KeyToPath[];
    /**
     * Specify whether the Secret or its keys must be defined.
     */
    optional?: boolean | null;
    /**
     * Name of the secret in the container's namespace to use.
     */
    secretName?: string | null;
  }
  /**
   * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
   */
  export interface Schema$SecurityContext {
    /**
     * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN +optional
     */
    allowPrivilegeEscalation?: boolean | null;
    /**
     * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. +optional
     */
    capabilities?: Schema$Capabilities;
    /**
     * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. +optional
     */
    privileged?: boolean | null;
    /**
     * Whether this container has a read-only root filesystem. Default is false. +optional
     */
    readOnlyRootFilesystem?: boolean | null;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    runAsGroup?: number | null;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    runAsNonRoot?: boolean | null;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    runAsUser?: number | null;
    /**
     * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    seLinuxOptions?: Schema$SELinuxOptions;
  }
  /**
   * SELinuxOptions are the labels to be applied to the container
   */
  export interface Schema$SELinuxOptions {
    /**
     * Level is SELinux level label that applies to the container. +optional
     */
    level?: string | null;
    /**
     * Role is a SELinux role label that applies to the container. +optional
     */
    role?: string | null;
    /**
     * Type is a SELinux type label that applies to the container. +optional
     */
    type?: string | null;
    /**
     * User is a SELinux user label that applies to the container. +optional
     */
    user?: string | null;
  }
  /**
   * TCPSocketAction describes an action based on opening a socket
   */
  export interface Schema$TCPSocketAction {
    /**
     * Optional: Host name to connect to, defaults to the pod IP. +optional
     */
    host?: string | null;
    /**
     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port?: Schema$IntOrString;
  }
  /**
   * Volume represents a named volume in a container.
   */
  export interface Schema$Volume {
    configMap?: Schema$ConfigMapVolumeSource;
    /**
     * Volume's name.
     */
    name?: string | null;
    secret?: Schema$SecretVolumeSource;
  }
  /**
   * volumeDevice describes a mapping of a raw block device within a container.
   */
  export interface Schema$VolumeDevice {
    /**
     * devicePath is the path inside of the container that the device will be mapped to.
     */
    devicePath?: string | null;
    /**
     * name must match the name of a persistentVolumeClaim in the pod
     */
    name?: string | null;
  }
  /**
   * VolumeMount describes a mounting of a Volume within a container.
   */
  export interface Schema$VolumeMount {
    /**
     * Path within the container at which the volume should be mounted. Must not contain ':'.
     */
    mountPath?: string | null;
    /**
     * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationHostToContainer is used. This field is beta in 1.10. +optional
     */
    mountPropagation?: string | null;
    /**
     * This must match the Name of a Volume.
     */
    name?: string | null;
    /**
     * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. +optional
     */
    readOnly?: boolean | null;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). +optional
     */
    subPath?: string | null;
  }

  export class Resource$Namespaces {
    context: APIRequestContext;
    jobs: Resource$Namespaces$Jobs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobs = new Resource$Namespaces$Jobs(this.context);
    }
  }

  export class Resource$Namespaces$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
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
     *   const res = await run.namespaces.jobs.create({
     *     // Required. The namespace in which the job should be created. Replace {namespace_id\} with the project ID or number.
     *     parent: 'namespaces/my-namespace',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "spec": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
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
      params: Params$Resource$Namespaces$Jobs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Namespaces$Jobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    create(
      params: Params$Resource$Namespaces$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Namespaces$Jobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(
      params: Params$Resource$Namespaces$Jobs$Create,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Create
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Job> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/run.googleapis.com/v1alpha1/{+parent}/jobs'
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Delete a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
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
     *   const res = await run.namespaces.jobs.delete({
     *     // Optional. Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Optional. Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // Required. The name of the job to delete. For Cloud Run (fully managed), replace {namespace_id\} with the project ID or number.
     *     name: 'namespaces/my-namespace/jobs/my-job',
     *     // Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
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
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Jobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Delete
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
        {}) as Params$Resource$Namespaces$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/run.googleapis.com/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
     * Get information about a job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
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
     *   const res = await run.namespaces.jobs.get({
     *     // Required. The name of the job to retrieve. For Cloud Run (fully managed), replace {namespace_id\} with the project ID or number.
     *     name: 'namespaces/my-namespace/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "spec": {},
     *   //   "status": {}
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
      params: Params$Resource$Namespaces$Jobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    get(
      params: Params$Resource$Namespaces$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Namespaces$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Get
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Job> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/run.googleapis.com/v1alpha1/{+name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * List jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
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
     *   const res = await run.namespaces.jobs.list({
     *     // Optional. Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Optional. Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Optional. Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // Required. The namespace from which the jobs should be listed. Replace {namespace_id\} with the project ID or number.
     *     parent: 'namespaces/my-namespace',
     *     // Optional. The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Optional. Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     *     watch: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "nextPageToken": "my_nextPageToken",
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
      params: Params$Resource$Namespaces$Jobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListJobsResponse>;
    list(
      params: Params$Resource$Namespaces$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$List
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ListJobsResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/run.googleapis.com/v1alpha1/{+parent}/jobs'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Jobs$Create
    extends StandardParameters {
    /**
     * Required. The namespace in which the job should be created. Replace {namespace_id\} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Namespaces$Jobs$Delete
    extends StandardParameters {
    /**
     * Optional. Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Optional. Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * Required. The name of the job to delete. For Cloud Run (fully managed), replace {namespace_id\} with the project ID or number.
     */
    name?: string;
    /**
     * Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Jobs$Get
    extends StandardParameters {
    /**
     * Required. The name of the job to retrieve. For Cloud Run (fully managed), replace {namespace_id\} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Jobs$List
    extends StandardParameters {
    /**
     * Optional. Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Optional. Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Optional. Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * Required. The namespace from which the jobs should be listed. Replace {namespace_id\} with the project ID or number.
     */
    parent?: string;
    /**
     * Optional. The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Optional. Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
}
